#!/usr/bin/env node
/**
 * Audio Generation Script — Google Cloud TTS
 *
 * Scans all phase HTML files for Arabic (.ar-inline) and Bangla (.bn-inline) text,
 * deduplicates, generates MP3 via Google Cloud TTS, saves with MD5-hash filenames,
 * and creates manifest.json for each course.
 *
 * Prerequisites:
 *   1. Google Cloud project with Text-to-Speech API enabled
 *   2. Auth: gcloud auth application-default login  (or GOOGLE_APPLICATION_CREDENTIALS env var)
 *   3. npm install @google-cloud/text-to-speech
 *
 * Usage:
 *   node generate-audio.js
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const textToSpeech = require('@google-cloud/text-to-speech');

const ROOT = path.resolve(__dirname, '..');
const DELAY_MS = 200; // ms between API calls (rate limiting)

const client = new textToSpeech.TextToSpeechClient();

function md5(text) {
  return crypto.createHash('md5').update(text, 'utf8').digest('hex').slice(0, 12);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Extract all unique text from HTML files matching a CSS class pattern
 */
function extractTexts(htmlFiles, className) {
  const texts = new Set();
  const re = new RegExp(`class="${className}">([^<]+)<`, 'g');
  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    let m;
    while ((m = re.exec(content)) !== null) {
      const text = m[1].trim();
      if (text) texts.add(text);
    }
  }
  return [...texts];
}

/**
 * Generate audio for a single text
 */
async function synthesize(text, voiceName, languageCode, outputPath) {
  const request = {
    input: { text },
    voice: { languageCode, name: voiceName, ssmlGender: 'FEMALE' },
    audioConfig: {
      audioEncoding: 'MP3',
      speakingRate: 0.85,
      sampleRateHertz: 24000
    }
  };

  const [response] = await client.synthesizeSpeech(request);
  fs.writeFileSync(outputPath, response.audioContent, 'binary');
}

/**
 * Process a course: extract texts, generate audio, write manifest
 */
async function processCourse(courseId, htmlFiles, configs) {
  const audioDir = path.join(ROOT, courseId, 'audio');
  fs.mkdirSync(audioDir, { recursive: true });

  // Collect all texts with their TTS config
  const items = []; // { text, voice, lang, hash }
  for (const { className, voiceName, languageCode } of configs) {
    const texts = extractTexts(htmlFiles, className);
    for (const text of texts) {
      items.push({
        text,
        voice: voiceName,
        lang: languageCode,
        hash: md5(text)
      });
    }
  }

  // Deduplicate by hash (same text → same file regardless of which config found it)
  const seen = new Map();
  const unique = [];
  for (const item of items) {
    if (!seen.has(item.hash)) {
      seen.set(item.hash, item);
      unique.push(item);
    }
  }

  console.log(`\n${courseId}: ${unique.length} unique texts to generate`);

  // Build manifest
  const manifest = {};
  let generated = 0;
  let skipped = 0;

  for (let i = 0; i < unique.length; i++) {
    const item = unique[i];
    const filename = item.hash + '.mp3';
    const outputPath = path.join(audioDir, filename);
    manifest[item.text] = filename;

    if (fs.existsSync(outputPath)) {
      skipped++;
      continue;
    }

    try {
      await synthesize(item.text, item.voice, item.lang, outputPath);
      generated++;
      process.stdout.write(`\r  ${courseId}: ${generated + skipped}/${unique.length} (${generated} new, ${skipped} cached)`);
      await sleep(DELAY_MS);
    } catch (err) {
      console.error(`\n  ERROR generating "${item.text.slice(0, 30)}...": ${err.message}`);
    }
  }

  console.log(`\n  ${courseId}: Done — ${generated} generated, ${skipped} cached`);

  // Write manifest
  const manifestPath = path.join(audioDir, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
  console.log(`  Manifest: ${manifestPath} (${Object.keys(manifest).length} entries)`);
}

async function main() {
  console.log('Audio Generation — Google Cloud TTS\n');

  // Arabic course
  const arabicFiles = ['phase1.html', 'phase2.html', 'phase3.html', 'phase4.html']
    .map(f => path.join(ROOT, 'arabic', f));

  await processCourse('arabic', arabicFiles, [
    { className: 'ar-inline', voiceName: 'ar-XA-Wavenet-A', languageCode: 'ar-XA' }
  ]);

  // Bangla course — has both Bangla text and Arabic comparison text
  const banglaFiles = ['phase1.html', 'phase2.html', 'phase3.html', 'phase4.html']
    .map(f => path.join(ROOT, 'bangla', f));

  await processCourse('bangla', banglaFiles, [
    { className: 'bn-inline', voiceName: 'bn-IN-Wavenet-A', languageCode: 'bn-IN' },
    { className: 'ar-inline', voiceName: 'ar-XA-Wavenet-A', languageCode: 'ar-XA' }
  ]);

  console.log('\nAll done!');
}

main().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
