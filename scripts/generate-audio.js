#!/usr/bin/env node
/**
 * Audio Generation Script
 *
 * Arabic: Azure Speech Service (Syrian dialect — ar-SY-AmanyNeural)
 * Bangla:  Google Cloud TTS (bn-IN-Wavenet-A)
 *
 * Scans all phase HTML files for .ar-inline and .bn-inline text,
 * deduplicates, generates MP3s, and creates manifest.json per course.
 *
 * Prerequisites:
 *   Azure (for Arabic):
 *     export AZURE_SPEECH_KEY="your-key-here"
 *     export AZURE_SPEECH_REGION="eastus"   (or your region)
 *
 *   Google (for Bangla):
 *     gcloud auth application-default login
 *     npm install @google-cloud/text-to-speech
 *
 * Usage:
 *   node generate-audio.js              # generate all
 *   node generate-audio.js --arabic     # Arabic only
 *   node generate-audio.js --bangla     # Bangla only
 *   node generate-audio.js --force      # regenerate existing files
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const https = require('https');

const ROOT = path.resolve(__dirname, '..');
const DELAY_MS = 3500; // ~17 requests/min to stay under Azure free tier limit (20/min)

const ARGS = process.argv.slice(2);
const FORCE = ARGS.includes('--force');
const ARABIC_ONLY = ARGS.includes('--arabic');
const BANGLA_ONLY = ARGS.includes('--bangla');

function md5(text) {
  return crypto.createHash('md5').update(text, 'utf8').digest('hex').slice(0, 12);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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

/* ---- Azure Speech Service (for Arabic) ---- */
function azureSynthesize(text, voiceName, langCode, outputPath) {
  const key = process.env.AZURE_SPEECH_KEY;
  const region = process.env.AZURE_SPEECH_REGION || 'eastus';
  if (!key) throw new Error('AZURE_SPEECH_KEY env var not set');

  const ssml = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${langCode}">
  <voice name="${voiceName}">
    <prosody rate="0.85">${text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</prosody>
  </voice>
</speak>`;

  return new Promise((resolve, reject) => {
    const options = {
      hostname: `${region}.tts.speech.microsoft.com`,
      path: '/cognitiveservices/v1',
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': key,
        'Content-Type': 'application/ssml+xml',
        'X-Microsoft-OutputFormat': 'audio-16khz-128kbitrate-mono-mp3',
        'User-Agent': 'language-courses-tts'
      }
    };

    const req = https.request(options, (res) => {
      if (res.statusCode !== 200) {
        let body = '';
        res.on('data', d => body += d);
        res.on('end', () => reject(new Error(`Azure ${res.statusCode}: ${body.slice(0, 200)}`)));
        return;
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => {
        fs.writeFileSync(outputPath, Buffer.concat(chunks));
        resolve();
      });
    });

    req.on('error', reject);
    req.write(ssml);
    req.end();
  });
}

/* ---- Google Cloud TTS (for Bangla) ---- */
let googleClient = null;
function getGoogleClient() {
  if (!googleClient) {
    const textToSpeech = require('@google-cloud/text-to-speech');
    googleClient = new textToSpeech.TextToSpeechClient();
  }
  return googleClient;
}

async function googleSynthesize(text, voiceName, langCode, outputPath) {
  const client = getGoogleClient();
  const [response] = await client.synthesizeSpeech({
    input: { text },
    voice: { languageCode: langCode, name: voiceName, ssmlGender: 'FEMALE' },
    audioConfig: { audioEncoding: 'MP3', speakingRate: 0.85, sampleRateHertz: 24000 }
  });
  fs.writeFileSync(outputPath, response.audioContent, 'binary');
}

/* ---- Main processing ---- */
async function processCourse(courseId, htmlFiles, configs) {
  const audioDir = path.join(ROOT, courseId, 'audio');
  fs.mkdirSync(audioDir, { recursive: true });

  const items = [];
  for (const cfg of configs) {
    const texts = extractTexts(htmlFiles, cfg.className);
    for (const text of texts) {
      items.push({ text, ...cfg, hash: md5(text) });
    }
  }

  // Deduplicate
  const seen = new Map();
  const unique = [];
  for (const item of items) {
    if (!seen.has(item.hash)) {
      seen.set(item.hash, item);
      unique.push(item);
    }
  }

  console.log(`\n${courseId}: ${unique.length} unique texts to generate`);

  const manifest = {};
  let generated = 0, skipped = 0, errors = 0;

  for (const item of unique) {
    const filename = item.hash + '.mp3';
    const outputPath = path.join(audioDir, filename);
    manifest[item.text] = filename;

    if (!FORCE && fs.existsSync(outputPath)) {
      skipped++;
      continue;
    }

    try {
      if (item.provider === 'azure') {
        await azureSynthesize(item.text, item.voiceName, item.languageCode, outputPath);
      } else {
        await googleSynthesize(item.text, item.voiceName, item.languageCode, outputPath);
      }
      generated++;
      process.stdout.write(`\r  ${courseId}: ${generated + skipped}/${unique.length} (${generated} new, ${skipped} cached)`);
      await sleep(DELAY_MS);
    } catch (err) {
      errors++;
      console.error(`\n  ERROR "${item.text.slice(0, 30)}...": ${err.message}`);
    }
  }

  console.log(`\n  ${courseId}: Done — ${generated} generated, ${skipped} cached, ${errors} errors`);

  const manifestPath = path.join(audioDir, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
  console.log(`  Manifest: ${manifestPath} (${Object.keys(manifest).length} entries)`);
}

async function main() {
  console.log('Audio Generation — Azure (Arabic) + Google (Bangla)\n');

  if (!BANGLA_ONLY) {
    // Arabic course — Azure Syrian voice
    const arabicFiles = ['phase1.html', 'phase2.html', 'phase3.html', 'phase4.html']
      .map(f => path.join(ROOT, 'arabic', f));

    await processCourse('arabic', arabicFiles, [
      { className: 'ar-inline', voiceName: 'ar-SY-AmanyNeural', languageCode: 'ar-SY', provider: 'azure' }
    ]);

    // Bangla course — Arabic comparison boxes also use Azure Syrian voice
    if (!ARABIC_ONLY) {
      const banglaArFiles = ['phase1.html', 'phase2.html', 'phase3.html', 'phase4.html']
        .map(f => path.join(ROOT, 'bangla', f));

      // Extract Arabic text from Bangla course, generate with Azure
      const arTexts = extractTexts(banglaArFiles, 'ar-inline');
      if (arTexts.length > 0) {
        console.log(`\nBangla course Arabic boxes: ${arTexts.length} texts (using Azure Syrian voice)`);
        const audioDir = path.join(ROOT, 'bangla', 'audio');
        fs.mkdirSync(audioDir, { recursive: true });

        // Load existing manifest or start fresh
        const manifestPath = path.join(audioDir, 'manifest.json');
        let manifest = {};
        if (fs.existsSync(manifestPath)) {
          manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        }

        let gen = 0;
        for (const text of arTexts) {
          const hash = md5(text);
          const filename = hash + '.mp3';
          const outputPath = path.join(audioDir, filename);
          manifest[text] = filename;

          if (!FORCE && fs.existsSync(outputPath)) continue;
          try {
            await azureSynthesize(text, 'ar-SY-AmanyNeural', 'ar-SY', outputPath);
            gen++;
            await sleep(DELAY_MS);
          } catch (err) {
            console.error(`\n  ERROR "${text.slice(0, 30)}...": ${err.message}`);
          }
        }
        fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
        console.log(`  ${gen} Arabic audio files generated for Bangla course`);
      }
    }
  }

  if (!ARABIC_ONLY) {
    // Bangla course — Google Bangla voice
    const banglaFiles = ['phase1.html', 'phase2.html', 'phase3.html', 'phase4.html']
      .map(f => path.join(ROOT, 'bangla', f));

    await processCourse('bangla', banglaFiles, [
      { className: 'bn-inline', voiceName: 'bn-IN-Wavenet-A', languageCode: 'bn-IN', provider: 'google' }
    ]);
  }

  console.log('\nAll done!');
}

main().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
