/**
 * StorageManager - Motor de Persistencia y Gamificación XP
 * Gestiona el almacenamiento del estado del estudiante en localStorage con fallback a memoria.
 */
const StorageManager = {
  KEY: 'datacamp_ml_course_v1',
  cache: null,
  init() {
    try {
      if (typeof localStorage !== 'undefined') {
        const raw = localStorage.getItem(this.KEY);
        if (raw) this.cache = JSON.parse(raw);
      }
    } catch(e) {
      console.warn("Storage no disponible, usando memoria.", e);
    }
    if (!this.cache) {
      this.cache = { xp: 0, done: {}, quizzes: {}, exercises: {}, unlockedHints: {}, n8nWebhook: '', lastLesson: 1, theme: 'dark' };
    }
    if (!this.cache.unlockedHints) this.cache.unlockedHints = {};
    if (!this.cache.lastLesson) this.cache.lastLesson = 1;
    if (!this.cache.theme) {
      try {
        const savedTheme = (typeof localStorage !== 'undefined') ? localStorage.getItem('ml_theme') : null;
        this.cache.theme = savedTheme || 'dark';
      } catch(e) {
        this.cache.theme = 'dark';
      }
    }
    if (!this.cache.lang) {
      try {
        const savedLang = (typeof localStorage !== 'undefined') ? localStorage.getItem('ml_lang') : null;
        this.cache.lang = savedLang || 'es';
      } catch(e) {
        this.cache.lang = 'es';
      }
    }
    this.applyTheme();
    this.applyLang();
  },
  save() {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.KEY, JSON.stringify(this.cache));
      }
    } catch(e){}
  },
  getXP() {
    return this.cache ? (this.cache.xp || 0) : 0;
  },
  addXP(amount) {
    if (!this.cache) this.init();
    this.cache.xp = (this.cache.xp || 0) + amount;
    this.save();
    this.animateXP();
  },
  deductXP(amount) {
    if (!this.cache) this.init();
    this.cache.xp = Math.max(0, (this.cache.xp || 0) - amount);
    this.save();
    this.animateXP();
  },
  isHintUnlocked(n) {
    return !!(this.cache && this.cache.unlockedHints && this.cache.unlockedHints[n]);
  },
  unlockHint(n, cost) {
    if (!this.cache) this.init();
    if (!this.cache.unlockedHints) this.cache.unlockedHints = {};
    if (!this.cache.unlockedHints[n]) {
      const actualCost = typeof cost === 'number' ? cost : 15;
      if (this.getXP() < actualCost) {
        return { success: false, reason: 'insufficient_xp', cost: actualCost, currentXP: this.getXP() };
      }
      this.cache.unlockedHints[n] = true;
      this.deductXP(actualCost);
      return { success: true, alreadyUnlocked: false, cost: actualCost, remainingXP: this.getXP() };
    }
    return { success: true, alreadyUnlocked: true, cost: 0, remainingXP: this.getXP() };
  },
  animateXP() {
    if (typeof document !== 'undefined') {
      const el = document.getElementById('nav-xp-counter');
      if (el) el.textContent = `⚡ ${(this.cache.xp || 0).toLocaleString()} XP`;
      const dashEl = document.getElementById('dash-xp-counter');
      if (dashEl) dashEl.textContent = `${(this.cache.xp || 0).toLocaleString()} XP`;
    }
  },
  isDone(n) {
    return !!(this.cache && this.cache.done && this.cache.done[n]);
  },
  setDone(n, val) {
    if (!this.cache) this.init();
    if (!this.cache.done) this.cache.done = {};
    if (val) this.cache.done[n] = { timestamp: Date.now() };
    else delete this.cache.done[n];
    this.save();
  },
  isQuizPassed(n) {
    return !!(this.cache && this.cache.quizzes && this.cache.quizzes[n]);
  },
  isTheoryCompleted(n) {
    return this.isQuizPassed(n);
  },
  getMaxUnlockedLesson() {
    if (!this.cache) this.init();
    let maxLesson = 1;
    for (let i = 1; i <= 27; i++) {
      if (this.isExercisePassed(i) || (this.cache.done && this.cache.done[i])) {
        maxLesson = Math.max(maxLesson, i + 1);
      }
    }
    return Math.min(27, maxLesson);
  },
  canAccessLessonNumber(n) {
    if (n === undefined || n === null) return false;
    const num = parseInt(n, 10);
    if (isNaN(num) || num < 1 || num > 27) return false;
    if (num === 1) return true;
    return num <= this.getMaxUnlockedLesson();
  },
  isUnitCompleted(unitIndex) {
    const unitList = globalThis.UNITS || ((typeof UNITS !== 'undefined') ? UNITS : null);
    if (!Array.isArray(unitList)) return true;
    if (unitIndex < 0 || unitIndex >= unitList.length) return true;

    return unitList[unitIndex].lessons.every(lesson => this.isDone(lesson.n));
  },
  canAccessPractice(n) {
    if (!this.canAccessLessonNumber(n)) return false;
    return n === 1 || this.isTheoryCompleted(n);
  },
  setQuizPassed(n) {
    if (!this.cache) this.init();
    if (!this.cache.quizzes) this.cache.quizzes = {};
    if (!this.cache.quizzes[n]) {
      this.cache.quizzes[n] = true;
      this.addXP(50);
      this.checkLessonCompletion(n);
    }
    this.save();
  },
  getExerciseState(n) {
    if (!this.cache || !this.cache.exercises) return null;
    const ex = this.cache.exercises[n];
    if (!ex) return null;
    if (typeof ex === 'object' && ex.state !== undefined) return ex.state;
    return ex;
  },
  isExercisePassed(n) {
    if (!this.cache || !this.cache.exercises) return false;
    const ex = this.cache.exercises[n];
    if (!ex) return false;
    if (ex === true) return true;
    if (typeof ex === 'object') {
      if (ex.passed === false) return false;
      return true;
    }
    return false;
  },
  setExercisePassed(n, state) {
    if (!this.cache) this.init();
    if (!this.cache.exercises) this.cache.exercises = {};
    const already = this.isExercisePassed(n);
    const savedState = (state && typeof state === 'object') ? state : {};
    this.cache.exercises[n] = {
      ...savedState,
      passed: true,
      state: state,
      timestamp: Date.now()
    };
    if (!already) {
      this.addXP(100);
      this.checkLessonCompletion(n);
    }
    this.save();
  },
  checkLessonCompletion(n) {
    if (this.isExercisePassed(n)) {
      this.setDone(n, true);
    }
  },
  getLastActiveLesson() {
    if (!this.cache) this.init();
    return this.cache.lastLesson || 1;
  },
  setLastActiveLesson(n) {
    if (!this.cache) this.init();
    this.cache.lastLesson = n;
    this.save();
  },
  getN8nUrl() {
    return this.cache ? (this.cache.n8nWebhook || '') : '';
  },
  setN8nUrl(url) {
    if (!this.cache) this.init();
    this.cache.n8nWebhook = url;
    this.save();
  },
  resetAll() {
    this.cache = { xp: 0, done: {}, quizzes: {}, exercises: {}, unlockedHints: {}, n8nWebhook: '', lastLesson: 1 };
    this.save();
    try {
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.removeItem('ml_course_quiz_permutations_v1');
      }
    } catch(e) {}
    if (typeof QuizRandomizer !== 'undefined') {
      QuizRandomizer.clear();
    }
  },
  exportJSON() {
    return JSON.stringify(this.cache, null, 2);
  },
  importJSON(jsonStr) {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed && typeof parsed === 'object') {
        this.cache = parsed;
        this.save();
        this.applyTheme();
        return true;
      }
    } catch(e){}
    return false;
  },
  getTheme() {
    if (!this.cache) this.init();
    return this.cache.theme || 'dark';
  },
  setTheme(theme) {
    if (!this.cache) this.init();
    this.cache.theme = (theme === 'light') ? 'light' : 'dark';
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('ml_theme', this.cache.theme);
      }
    } catch(e) {}
    this.save();
    this.applyTheme();
    return this.cache.theme;
  },
  toggleTheme() {
    const current = this.getTheme();
    const next = current === 'light' ? 'dark' : 'light';
    return this.setTheme(next);
  },
  applyTheme() {
    const theme = this.getTheme();
    if (typeof document !== 'undefined') {
      if (document.documentElement) {
        document.documentElement.setAttribute('data-theme', theme);
      }
      const toggles = document.querySelectorAll('.theme-toggle-btn');
      toggles.forEach(btn => {
        const isLight = theme === 'light';
        btn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
        btn.setAttribute('title', isLight ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro');
        const iconEl = btn.querySelector('.theme-toggle-icon');
        if (iconEl) iconEl.textContent = isLight ? '☀️' : '🌙';
      });
    }
  },
  getLang() {
    if (!this.cache) this.init();
    if (!this.cache.lang) {
      try {
        const saved = (typeof localStorage !== 'undefined') ? localStorage.getItem('ml_lang') : null;
        this.cache.lang = saved || 'es';
      } catch(e) {
        this.cache.lang = 'es';
      }
    }
    return this.cache.lang;
  },
  setLang(lang) {
    if (!this.cache) this.init();
    this.cache.lang = (lang === 'en') ? 'en' : 'es';
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('ml_lang', this.cache.lang);
      }
    } catch(e) {}
    this.save();
    this.applyLang();
    return this.cache.lang;
  },
  applyLang() {
    const lang = this.getLang();
    if (typeof document !== 'undefined') {
      if (document.documentElement) {
        document.documentElement.setAttribute('lang', lang);
      }
      const selects = document.querySelectorAll('.settings-lang-select');
      selects.forEach(sel => {
        sel.value = lang;
      });

      // Synchronize segmented buttons
      document.querySelectorAll('.lang-seg-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
      });

      // Synchronize navbar language buttons
      document.querySelectorAll('.nav-lang-btn').forEach(btn => {
        const flagEl = btn.querySelector('.lang-flag');
        const codeEl = btn.querySelector('.lang-code');
        if (flagEl) flagEl.textContent = (lang === 'en') ? '🇺🇸' : '🇪🇸';
        if (codeEl) codeEl.textContent = (lang === 'en') ? 'EN' : 'ES';
        btn.title = (lang === 'en') ? 'Switch to Spanish / Cambiar a Español' : 'Cambiar a Inglés / Switch to English';
      });

      if (typeof window !== 'undefined' && window.I18nManager) {
        window.I18nManager.apply(lang);
      }
    }
  }
};

// Inicializar inmediatamente
StorageManager.init();

if (typeof document !== 'undefined') {
  function setupSettingsControls() {
    StorageManager.applyTheme();
    StorageManager.applyLang();

    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      if (!btn.dataset.themeBound) {
        btn.dataset.themeBound = 'true';
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          StorageManager.toggleTheme();
        });
      }
    });

    document.querySelectorAll('.settings-lang-select').forEach(sel => {
      if (!sel.dataset.langBound) {
        sel.dataset.langBound = 'true';
        sel.value = StorageManager.getLang();
        sel.addEventListener('change', (e) => {
          StorageManager.setLang(e.target.value);
        });
      }
    });

    document.querySelectorAll('.lang-seg-btn').forEach(btn => {
      if (!btn.dataset.langBound) {
        btn.dataset.langBound = 'true';
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const targetLang = btn.dataset.lang;
          if (targetLang) {
            StorageManager.setLang(targetLang);
          }
        });
      }
    });

    document.querySelectorAll('.nav-lang-btn').forEach(btn => {
      if (!btn.dataset.langBound) {
        btn.dataset.langBound = 'true';
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const current = StorageManager.getLang();
          const next = (current === 'en') ? 'es' : 'en';
          StorageManager.setLang(next);
        });
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupSettingsControls);
  } else {
    setupSettingsControls();
  }
}

// ===============================================================
// QUIZ RANDOMIZER (Distribuir aleatoriamente opciones de quiz)
// ===============================================================
const QuizRandomizer = {
  SESSION_KEY: 'ml_course_quiz_permutations_v1',
  memoryCache: null,

  getPermutations(totalLessons = 27) {
    if (this.memoryCache && Object.keys(this.memoryCache).length >= totalLessons) {
      return this.memoryCache;
    }
    try {
      if (typeof sessionStorage !== 'undefined') {
        const raw = sessionStorage.getItem(this.SESSION_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && typeof parsed === 'object' && Object.keys(parsed).length >= totalLessons) {
            this.memoryCache = parsed;
            return parsed;
          }
        }
      }
    } catch (e) {}

    const map = {};
    let lastCorrectPos = -1;

    // Use FLAT if available in global context, else fallback to totalLessons list
    const lessonsList = (typeof FLAT !== 'undefined' && Array.isArray(FLAT) && FLAT.length > 0)
      ? FLAT.map(item => ({
          n: item.lesson.n,
          correct: (item.lesson.quiz && item.lesson.quiz.correct !== undefined) ? item.lesson.quiz.correct : 1,
          optsCount: (item.lesson.quiz && item.lesson.quiz.opts) ? item.lesson.quiz.opts.length : 4
        }))
      : Array.from({ length: totalLessons }, (_, i) => ({ n: i + 1, correct: 1, optsCount: 4 }));

    lessonsList.forEach(les => {
      const numOpts = les.optsCount || 4;
      const targetCorrect = les.correct;
      const indices = Array.from({ length: numOpts }, (_, i) => i);

      // Fisher-Yates shuffle
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }

      // Check position of the correct answer
      let curCorrectPos = indices.indexOf(targetCorrect);

      // Guarantee consecutive lessons do NOT have the exact same correct option position (A, B, C, D)
      if (lastCorrectPos !== -1 && curCorrectPos === lastCorrectPos && numOpts > 1) {
        const swapWith = (curCorrectPos + 1 + Math.floor(Math.random() * (numOpts - 1))) % numOpts;
        [indices[curCorrectPos], indices[swapWith]] = [indices[swapWith], indices[curCorrectPos]];
        curCorrectPos = swapWith;
      }

      lastCorrectPos = curCorrectPos;
      map[les.n] = indices;
    });

    this.memoryCache = map;
    try {
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(map));
      }
    } catch (e) {}

    return map;
  },

  getOrder(lessonNum, numOpts, correctIdx) {
    const map = this.getPermutations();
    if (map && map[lessonNum] && map[lessonNum].length === numOpts) {
      return map[lessonNum];
    }
    const indices = Array.from({ length: numOpts }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  },

  clear() {
    this.memoryCache = null;
    try {
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.removeItem(this.SESSION_KEY);
      }
    } catch (e) {}
  }
};

if (typeof window !== 'undefined') {
  window.StorageManager = StorageManager;
  window.QuizRandomizer = QuizRandomizer;
}
if (typeof module !== 'undefined') {
  module.exports = { StorageManager, QuizRandomizer };
}
