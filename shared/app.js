/**
 * Language Courses — Core Application Engine
 * Requires: sm2.js loaded first, COURSE_DATA set by data.js
 */

/* ========================================================================
   Audio Player Module — manifest-based pronunciation playback
   ======================================================================== */
window.AudioPlayer = (() => {
  let _manifest = null;
  let _currentAudio = null;
  let _basePath = '';
  const SPEAKER_SVG = '<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>';

  async function loadManifest(courseId) {
    _basePath = 'audio/';
    try {
      const resp = await fetch(_basePath + 'manifest.json');
      if (resp.ok) {
        _manifest = await resp.json();
      }
    } catch (e) {
      // No manifest — audio not yet generated
    }
  }

  function isReady() { return _manifest !== null; }

  function getFile(text) {
    if (!_manifest) return null;
    const clean = text.trim();
    return _manifest[clean] || null;
  }

  function play(text, btn) {
    if (_currentAudio) {
      _currentAudio.pause();
      _currentAudio.currentTime = 0;
      document.querySelectorAll('.audio-btn.playing').forEach(b => b.classList.remove('playing'));
    }

    const file = getFile(text);
    if (!file) return;

    _currentAudio = new Audio(_basePath + file);
    if (btn) btn.classList.add('playing');

    _currentAudio.play().catch(() => {
      if (btn) btn.classList.remove('playing');
    });

    _currentAudio.addEventListener('ended', () => {
      if (btn) btn.classList.remove('playing');
      _currentAudio = null;
    });

    _currentAudio.addEventListener('error', () => {
      if (btn) btn.classList.remove('playing');
      _currentAudio = null;
    });
  }

  function stop() {
    if (_currentAudio) {
      _currentAudio.pause();
      _currentAudio.currentTime = 0;
      _currentAudio = null;
    }
    document.querySelectorAll('.audio-btn.playing').forEach(b => b.classList.remove('playing'));
  }

  function createButton(text) {
    if (!getFile(text)) return null;
    const btn = document.createElement('button');
    btn.className = 'audio-btn';
    btn.setAttribute('aria-label', 'Play pronunciation');
    btn.innerHTML = SPEAKER_SVG;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      play(text, btn);
    });
    return btn;
  }

  return { loadManifest, isReady, play, stop, createButton, SPEAKER_SVG };
})();


/* ========================================================================
   Progress Module — localStorage read/write
   ======================================================================== */
window.Progress = (() => {
  function _key(courseId) { return courseId + '_progress'; }

  function _load(courseId) {
    try {
      const raw = localStorage.getItem(_key(courseId));
      return raw ? JSON.parse(raw) : { version: 1, sections: {}, quizzes: {}, flashcards: {} };
    } catch (e) {
      return { version: 1, sections: {}, quizzes: {}, flashcards: {} };
    }
  }

  function _save(courseId, data) {
    localStorage.setItem(_key(courseId), JSON.stringify(data));
  }

  return {
    load(courseId) { return _load(courseId); },

    toggleSection(courseId, sectionId) {
      const data = _load(courseId);
      if (!data.sections[sectionId]) data.sections[sectionId] = {};
      data.sections[sectionId].completed = !data.sections[sectionId].completed;
      if (data.sections[sectionId].completed) {
        data.sections[sectionId].completedAt = new Date().toISOString().split('T')[0];
      }
      _save(courseId, data);
      return data.sections[sectionId].completed;
    },

    isSectionComplete(courseId, sectionId) {
      const data = _load(courseId);
      return !!(data.sections[sectionId] && data.sections[sectionId].completed);
    },

    saveQuiz(courseId, sectionId, score, total) {
      const data = _load(courseId);
      const prev = data.quizzes[sectionId];
      data.quizzes[sectionId] = {
        score, total,
        bestScore: prev ? Math.max(prev.bestScore || 0, score) : score,
        attempts: prev ? (prev.attempts || 0) + 1 : 1,
        lastAttempt: new Date().toISOString().split('T')[0]
      };
      _save(courseId, data);
    },

    getQuiz(courseId, sectionId) {
      const data = _load(courseId);
      return data.quizzes[sectionId] || null;
    },

    getFlashcardState(courseId, cardId) {
      const data = _load(courseId);
      return data.flashcards[cardId] || null;
    },

    saveFlashcard(courseId, cardId, state) {
      const data = _load(courseId);
      data.flashcards[cardId] = state;
      _save(courseId, data);
    },

    getPhaseProgress(courseId, phaseData) {
      const data = _load(courseId);
      let total = 0, completed = 0;
      phaseData.weeks.forEach(w => {
        w.sections.forEach(s => {
          total++;
          if (data.sections[s.id] && data.sections[s.id].completed) completed++;
        });
      });
      return { total, completed, percent: total ? Math.round((completed / total) * 100) : 0 };
    },

    getOverallProgress(courseId) {
      if (!window.COURSE_DATA) return { total: 0, completed: 0, percent: 0, dueCards: 0 };
      const data = _load(courseId);
      let total = 0, completed = 0;
      window.COURSE_DATA.phases.forEach(p => {
        p.weeks.forEach(w => {
          w.sections.forEach(s => {
            total++;
            if (data.sections[s.id] && data.sections[s.id].completed) completed++;
          });
        });
      });
      return {
        total, completed,
        percent: total ? Math.round((completed / total) * 100) : 0,
        dueCards: FlashcardEngine.getDueCount(courseId)
      };
    },

    exportData(courseId) {
      return JSON.stringify(_load(courseId), null, 2);
    },

    importData(courseId, jsonStr) {
      try {
        const data = JSON.parse(jsonStr);
        _save(courseId, data);
        return true;
      } catch (e) { return false; }
    },

    reset(courseId) {
      localStorage.removeItem(_key(courseId));
    }
  };
})();


/* ========================================================================
   Flashcard Engine — SM-2 integration
   ======================================================================== */
window.FlashcardEngine = (() => {
  function _getAllVocab(courseData, phaseFilter) {
    const items = [];
    courseData.phases.forEach((phase, pi) => {
      if (phaseFilter !== null && phaseFilter !== undefined && pi !== phaseFilter) return;
      phase.weeks.forEach(w => {
        w.sections.forEach(s => {
          (s.vocab || []).forEach(v => items.push(v));
        });
      });
    });
    return items;
  }

  return {
    getDueCards(courseId, phaseFilter) {
      if (!window.COURSE_DATA) return [];
      const allVocab = _getAllVocab(window.COURSE_DATA, phaseFilter);
      const due = [];
      allVocab.forEach(v => {
        const state = Progress.getFlashcardState(courseId, v.id);
        if (SM2.isDue(state)) {
          due.push({ ...v, _state: state || SM2.defaultState() });
        }
      });
      // Sort: reviewed cards (overdue) first by nextReview, then new cards
      due.sort((a, b) => {
        const aNew = !a._state.nextReview;
        const bNew = !b._state.nextReview;
        if (aNew && !bNew) return 1;
        if (!aNew && bNew) return -1;
        if (aNew && bNew) return 0;
        return a._state.nextReview.localeCompare(b._state.nextReview);
      });
      return due;
    },

    getDueCount(courseId) {
      return this.getDueCards(courseId).length;
    },

    recordReview(courseId, cardId, quality) {
      const current = Progress.getFlashcardState(courseId, cardId) || SM2.defaultState();
      const updated = SM2.calculate(current, quality);
      Progress.saveFlashcard(courseId, cardId, updated);
      return updated;
    },

    addToDeck(courseId, cardId) {
      const existing = Progress.getFlashcardState(courseId, cardId);
      if (!existing) {
        const state = SM2.defaultState();
        state.nextReview = new Date().toISOString().split('T')[0];
        Progress.saveFlashcard(courseId, cardId, state);
      }
    }
  };
})();


/* ========================================================================
   Quiz Engine
   ======================================================================== */
window.QuizEngine = (() => {
  function _normalize(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/[?.!,،؟]/g, '')
      .replace(/[\u0300-\u036f\u064B-\u065F\u0670]/g, '') // strip combining diacritics
      .replace(/[āáàâ]/g, 'a')
      .replace(/[ēéèê]/g, 'e')
      .replace(/[īíìî]/g, 'i')
      .replace(/[ōóòô]/g, 'o')
      .replace(/[ūúùû]/g, 'u')
      .replace(/[ṣ]/g, 's')
      .replace(/[ṭ]/g, 't')
      .replace(/[ḥ]/g, 'h')
      .replace(/[ḍ]/g, 'd')
      .replace(/[ʿʾ''`]/g, '')
      .replace(/\s+/g, ' ');
  }

  function _levenshtein(a, b) {
    const m = a.length, n = b.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        dp[i][j] = a[i-1] === b[j-1]
          ? dp[i-1][j-1]
          : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
      }
    }
    return dp[m][n];
  }

  return {
    fuzzyMatch(userInput, acceptedAnswers) {
      const norm = _normalize(userInput);
      if (!norm) return false;
      for (const ans of acceptedAnswers) {
        const normAns = _normalize(ans);
        if (norm === normAns) return true;
        if (_levenshtein(norm, normAns) <= 2) return true;
      }
      return false;
    },

    checkAnswer(userInput, acceptedAnswers) {
      return this.fuzzyMatch(userInput, acceptedAnswers);
    }
  };
})();


/* ========================================================================
   UI Module — Accordions, Reveal Cards, Section Checks, Nav
   ======================================================================== */
window.UI = (() => {
  let _courseId = null;

  function _initAccordions() {
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const wasOpen = header.classList.contains('open');
        const content = header.nextElementSibling;
        // Toggle
        header.classList.toggle('open');
        content.classList.toggle('open');
      });
    });
  }

  function _initSectionChecks() {
    document.querySelectorAll('.section-check').forEach(cb => {
      const sectionId = cb.dataset.section;
      if (!sectionId || !_courseId) return;
      cb.checked = Progress.isSectionComplete(_courseId, sectionId);
      cb.addEventListener('change', () => {
        Progress.toggleSection(_courseId, sectionId);
        _updateWeekChecks();
        _updatePhaseProgress();
      });
    });
  }

  function _updateWeekChecks() {
    if (!window.COURSE_DATA || !_courseId) return;
    document.querySelectorAll('.accordion').forEach(acc => {
      const weekId = acc.dataset.week;
      if (!weekId) return;
      const checks = acc.querySelectorAll('.section-check');
      const allDone = Array.from(checks).every(c => c.checked);
      const icon = acc.querySelector('.week-check');
      if (icon) icon.style.display = allDone ? 'inline' : 'none';
    });
  }

  function _updatePhaseProgress() {
    const bar = document.querySelector('.phase-progress-fill');
    const label = document.querySelector('.phase-progress-label');
    if (!bar || !_courseId || !window.COURSE_DATA) return;

    const pagePhase = document.body.dataset.phase;
    if (pagePhase === undefined) return;
    const phaseData = window.COURSE_DATA.phases[parseInt(pagePhase)];
    if (!phaseData) return;

    const prog = Progress.getPhaseProgress(_courseId, phaseData);
    bar.style.width = prog.percent + '%';
    if (label) label.textContent = prog.completed + ' of ' + prog.total + ' sections complete';
  }

  function _initRevealCards() {
    document.querySelectorAll('.reveal-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.reveal-actions')) return;
        card.classList.add('revealed');
      });
    });

    document.querySelectorAll('.reveal-btn.got-it').forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.reveal-card');
        card.style.opacity = '0.5';
        card.style.pointerEvents = 'none';
      });
    });

    document.querySelectorAll('.reveal-btn.not-yet').forEach(btn => {
      btn.addEventListener('click', () => {
        const cardId = btn.dataset.cardId;
        if (cardId && _courseId) {
          FlashcardEngine.addToDeck(_courseId, cardId);
        }
        const card = btn.closest('.reveal-card');
        card.style.opacity = '0.5';
        card.style.pointerEvents = 'none';
      });
    });
  }

  function _initQuizzes() {
    document.querySelectorAll('.quiz-container').forEach(container => {
      const sectionId = container.dataset.section;
      const questions = container.querySelectorAll('.quiz-question');
      let score = 0;
      let answered = 0;
      const total = questions.length;

      questions.forEach(q => {
        const correctIdx = parseInt(q.dataset.correct);
        const options = q.querySelectorAll('.quiz-option');
        const explanation = q.querySelector('.quiz-explanation');

        options.forEach((opt, idx) => {
          opt.addEventListener('click', () => {
            if (opt.classList.contains('answered')) return;
            options.forEach(o => o.classList.add('answered'));

            if (idx === correctIdx) {
              opt.classList.add('correct');
              score++;
            } else {
              opt.classList.add('incorrect');
              options[correctIdx].classList.add('correct');
            }
            answered++;

            if (explanation) {
              setTimeout(() => explanation.classList.add('show'), 300);
            }

            if (answered === total && sectionId && _courseId) {
              Progress.saveQuiz(_courseId, sectionId, score, total);
              const scoreEl = container.querySelector('.quiz-score-number');
              const scoreBox = container.querySelector('.quiz-score');
              if (scoreEl) scoreEl.textContent = score + '/' + total;
              if (scoreBox) setTimeout(() => scoreBox.classList.remove('hidden'), 500);
            }
          });
        });
      });

      // Retry button
      const retryBtn = container.querySelector('.quiz-retry-btn');
      if (retryBtn) {
        retryBtn.addEventListener('click', () => {
          score = 0; answered = 0;
          questions.forEach(q => {
            q.querySelectorAll('.quiz-option').forEach(o => {
              o.classList.remove('answered', 'correct', 'incorrect');
            });
            const exp = q.querySelector('.quiz-explanation');
            if (exp) exp.classList.remove('show');
          });
          const scoreBox = container.querySelector('.quiz-score');
          if (scoreBox) scoreBox.classList.add('hidden');
        });
      }
    });
  }

  function _initTextExercises() {
    document.querySelectorAll('.text-exercise').forEach(ex => {
      const input = ex.querySelector('.text-input');
      const checkBtn = ex.querySelector('.text-check-btn');
      const feedback = ex.querySelector('.text-feedback');
      const answers = JSON.parse(ex.dataset.answers || '[]');
      const correctDisplay = ex.dataset.correctDisplay || '';

      function check() {
        if (!input.value.trim()) return;
        const isCorrect = QuizEngine.fuzzyMatch(input.value, answers);
        input.classList.remove('correct', 'incorrect');
        feedback.classList.remove('correct', 'incorrect');

        if (isCorrect) {
          input.classList.add('correct');
          feedback.classList.add('correct', 'show');
          feedback.textContent = 'Correct!';
        } else {
          input.classList.add('incorrect');
          feedback.classList.add('incorrect', 'show');
          feedback.innerHTML = 'Expected: <strong>' + correctDisplay + '</strong>';
        }
      }

      if (checkBtn) checkBtn.addEventListener('click', check);
      if (input) input.addEventListener('keydown', (e) => { if (e.key === 'Enter') check(); });
    });
  }

  function _initFlashcardPage() {
    const container = document.querySelector('.flashcard-page');
    if (!container || !_courseId || !window.COURSE_DATA) return;

    let phaseFilter = null;
    let cards = [];
    let currentIdx = 0;
    const maxNew = 10;

    const cardEl = container.querySelector('.flashcard');
    const frontNative = container.querySelector('.flashcard-native.front-text');
    const backPron = container.querySelector('.flashcard-pron');
    const backMeaning = container.querySelector('.flashcard-meaning');
    const countEl = container.querySelector('.flashcard-count');
    const progressText = container.querySelector('.flashcard-progress-text');
    const progressFill = container.querySelector('.flashcard-progress-fill');
    const ratingBtns = container.querySelector('.rating-buttons');
    const emptyState = container.querySelector('.empty-state');

    function loadCards() {
      const all = FlashcardEngine.getDueCards(_courseId, phaseFilter);
      // Limit new cards
      let newCount = 0;
      cards = all.filter(c => {
        if (!c._state.nextReview) {
          newCount++;
          return newCount <= maxNew;
        }
        return true;
      });
      currentIdx = 0;
    }

    function showCard() {
      if (!cardEl) return;
      if (currentIdx >= cards.length) {
        cardEl.parentElement.classList.add('hidden');
        if (ratingBtns) ratingBtns.classList.add('hidden');
        if (emptyState) {
          emptyState.classList.remove('hidden');
          emptyState.querySelector('.empty-state-title').textContent = 'All done!';
          emptyState.querySelector('.empty-state-icon').textContent = '🎉';
        }
        return;
      }

      const card = cards[currentIdx];
      cardEl.classList.remove('flipped');
      if (ratingBtns) ratingBtns.classList.add('hidden');

      if (frontNative) {
        frontNative.textContent = card.native;
        // Set font based on course
        if (_courseId === 'arabic') {
          frontNative.style.fontFamily = "'Noto Naskh Arabic', serif";
          frontNative.style.direction = 'rtl';
        } else {
          frontNative.style.fontFamily = "'Noto Sans Bengali', sans-serif";
          frontNative.style.direction = 'ltr';
        }
      }
      if (backPron) backPron.textContent = card.pronunciation;
      if (backMeaning) backMeaning.textContent = card.meaning;

      if (countEl) countEl.textContent = cards.length + ' cards due';
      if (progressText) progressText.textContent = (currentIdx + 1) + ' / ' + cards.length;
      if (progressFill) progressFill.style.width = ((currentIdx / cards.length) * 100) + '%';

      if (emptyState) emptyState.classList.add('hidden');
      cardEl.parentElement.classList.remove('hidden');

      // Audio button on flashcard front
      const frontEl = cardEl.querySelector('.flashcard-front');
      if (frontEl) {
        const oldBtn = frontEl.querySelector('.audio-btn');
        if (oldBtn) oldBtn.remove();
        if (AudioPlayer.isReady()) {
          const audioBtn = AudioPlayer.createButton(card.native);
          if (audioBtn) {
            const tapHint = frontEl.querySelector('.flashcard-tap');
            frontEl.insertBefore(audioBtn, tapHint);
          }
        }
      }
    }

    function rate(quality) {
      AudioPlayer.stop();
      const card = cards[currentIdx];
      if (!card) return;
      FlashcardEngine.recordReview(_courseId, card.id, quality);
      currentIdx++;
      showCard();
    }

    // Card flip
    if (cardEl) {
      cardEl.addEventListener('click', () => {
        if (!cardEl.classList.contains('flipped')) {
          cardEl.classList.add('flipped');
          if (ratingBtns) ratingBtns.classList.remove('hidden');
        }
      });
    }

    // Rating buttons
    container.querySelectorAll('.rating-btn').forEach(btn => {
      btn.addEventListener('click', () => rate(parseInt(btn.dataset.quality)));
    });

    // Filter buttons
    container.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const val = btn.dataset.phase;
        phaseFilter = val === 'all' ? null : parseInt(val);
        loadCards();
        showCard();
      });
    });

    // Swipe support
    let startX = 0;
    if (cardEl) {
      cardEl.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
      cardEl.addEventListener('touchend', (e) => {
        if (!cardEl.classList.contains('flipped')) return;
        const diff = e.changedTouches[0].clientX - startX;
        if (Math.abs(diff) > 60) {
          rate(diff < 0 ? 1 : 4); // left=again, right=good
        }
      }, { passive: true });
    }

    loadCards();
    showCard();
  }

  function _initAudioButtons() {
    if (!AudioPlayer.isReady()) return;
    document.querySelectorAll('.ar-inline, .bn-inline').forEach(span => {
      // Skip if already has an audio button sibling
      if (span.nextElementSibling && span.nextElementSibling.classList.contains('audio-btn')) return;
      const text = span.textContent.trim();
      if (!text) return;
      const btn = AudioPlayer.createButton(text);
      if (btn) {
        span.insertAdjacentElement('afterend', btn);
      }
    });
  }

  return {
    init(courseId) {
      _courseId = courseId;
      _initAccordions();
      _initSectionChecks();
      _updateWeekChecks();
      _updatePhaseProgress();
      _initRevealCards();
      _initQuizzes();
      _initTextExercises();
      _initFlashcardPage();
      // Load audio manifest async, then inject speaker buttons
      AudioPlayer.loadManifest(courseId).then(() => {
        _initAudioButtons();
      });
    }
  };
})();


/* ========================================================================
   Dashboard — populate index page with progress data
   ======================================================================== */
window.Dashboard = (() => {
  return {
    init(courseId) {
      if (!window.COURSE_DATA) return;
      const prog = Progress.getOverallProgress(courseId);

      // Overall progress bar
      const overallFill = document.querySelector('.overall-progress-fill');
      const overallLabel = document.querySelector('.overall-progress-label');
      if (overallFill) overallFill.style.width = prog.percent + '%';
      if (overallLabel) overallLabel.textContent = prog.completed + ' of ' + prog.total + ' sections complete';

      // Due cards button
      const dueBtn = document.querySelector('.due-btn');
      const dueBadge = document.querySelector('.due-btn .badge');
      if (dueBadge) dueBadge.textContent = prog.dueCards;
      if (dueBtn && prog.dueCards === 0) {
        dueBtn.style.opacity = '0.5';
      }

      // Phase cards
      window.COURSE_DATA.phases.forEach((phase, i) => {
        const card = document.querySelector('.phase-card[data-phase="' + i + '"]');
        if (!card) return;
        const pProg = Progress.getPhaseProgress(courseId, phase);
        const fill = card.querySelector('.progress-fill');
        const label = card.querySelector('.phase-card-percent');
        if (fill) fill.style.width = pProg.percent + '%';
        if (label) label.textContent = pProg.percent + '%';
      });

      // Nav badge
      const navBadge = document.querySelector('.nav-badge');
      if (navBadge) {
        if (prog.dueCards > 0) {
          navBadge.textContent = prog.dueCards;
          navBadge.style.display = 'flex';
        } else {
          navBadge.style.display = 'none';
        }
      }
    }
  };
})();
