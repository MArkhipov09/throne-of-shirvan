import { cards } from "../content/cards.js";
import { crises } from "../content/crises.js";
import { concepts as CONCEPT_DEFS } from "../content/concepts.js";

const decisionCards = cards.filter((c) => !c.arcCharacter);

const STAT_NAMES = ["treasury", "people", "military", "faith", "naphtha"];
const CHARACTER_KEYS = [
  "vizier",
  "qadi",
  "tahmina",
  "general",
  "envoy",
  "astronomer",
  "spymaster",
  "queenmother",
  "caravan",
];

const SPEAKER_CATEGORY = {
  "genoese-naphtha": "foreign",
  "village-mulberry": "peasant",
  "tanners-water": "merchant",
  "caspian-fishery": "peasant",
  "tax-farmer-claim": "official",
  "noble-sumptuary": "official",
  "mint-consolidation": "official",
  "gatekeeper-tolls": "official",
  "watchman-wine": "soldier",
  "guild-standards": "merchant",
  "astronomer-school": "religious",
  "arc-vizier-removal": "official",
  "arc-qadi-fatwa": "religious",
  "arc-general-throne": "soldier",
  "crisis-bread-riot": "soldier",
  "crisis-fatwa": "religious",
  "crisis-naphtha-fire": "official",
  "naphtha-greekfire": "foreign",
  "naphtha-firetemple": "religious",
  "naphtha-strike": "official",
  "naphtha-overdraw": "official",
  "sarraf-bill": "merchant",
  "closed-guild": "merchant",
  "after-plague": "peasant",
  "clipped-dinar": "official",
  "crisis-treasury-low": "official",
  "crisis-military-low": "soldier",
  "crisis-naphtha-low": "official",
  "genoese-return": "foreign",
};

const STAT_DESCRIPTIONS = {
  treasury: "Your dinars and trade revenue.",
  people: "Welfare and loyalty.",
  military: "Garrison and walls.",
  faith: "Clerical favour and religious balance.",
  naphtha: "The Absheron oil reserves, your wildcard resource.",
};

// Display names for the five stats; STAT_DESCRIPTIONS is the single source of
// truth for their blurbs (HUD tooltips, screen-reader labels, intro key).
const STAT_LABELS = {
  treasury: "Treasury",
  people: "People",
  military: "Military",
  faith: "Faith",
  naphtha: "Naphtha",
};

const ENDING_TITLES = {
  prosperity: "Prosperity",
  survival: "Survival",
  conquest: "Conquest",
  revolt: "Revolt",
  darkness: "The Dark",
  gilded: "The Gilded Cage",
  praetorian: "The Sword Ascendant",
  tribune: "The People's Tide",
  theocracy: "The Pulpit Throne",
  inferno: "The Burning Shore",
};

// Which ending an overflow (a stat reaching 100) maps to, by stat.
const OVERFLOW_KIND = {
  treasury: "gilded",
  military: "praetorian",
  people: "tribune",
  faith: "theocracy",
  naphtha: "inferno",
};

const ENDING_FLAVOUR = {
  prosperity:
    "Twenty-five years on the throne, the granaries full and the customs books in order. The Genoese still anchor at Shamakhi; the mosque you funded carries your name. Later chroniclers measure their Shirvanshahs against your reign, in the way every Shirvanshah after Khalilullah was measured against his.",
  survival:
    "Twenty-five years and you put the throne down in one piece. The realm is thinner than your father's, the silk trade reduced, the tribute to whatever suzerain is current a fixed line in the books. Ibrahim I survived Timur and the Qara Yusuf ransom by exactly this kind of careful diminishment, and the next Shirvanshah inherits a kingdom rather than a ruin.",
  conquest:
    "The walls failed before the year was out. The treasury had been empty for months when the cavalry appeared at the western gate, and the garrison had no reason to die for a court that could not pay them. Your reign joins the brief Caucasus entries from the 1240s — the realms that emptied themselves before the rider arrived.",
  revolt:
    "The Qadi led the procession to the palace gate. The household guard neither opened the doors nor barred them. The chronicler is uncertain whether you died, fled, or ruled in name for another year in someone else's hand, and the dynasty resumes under your nephew, the way it resumed after Vizier Rashid al-Din's execution in 1318.",
  darkness:
    "The last of the seeps gave out, the lamps of Baku went dark, and the customs books that the white oil had filled fell silent. A wealth that is spent and never renewed is a wealth that ends. Yours did, quietly, in one cold and unlit winter.",
  gilded:
    "The vaults could not be shut for the weight of silver in them, and every chief from the Daghestan passes to the Volga mouth heard the count. Wealth without walls is a standing invitation, and the invitation was accepted. You held the richest court in the Caucasus for exactly as long as it took the riders to reach it.",
  praetorian:
    "An army with nothing left to fight stops asking the throne what to do and starts telling it. The garrison was better paid, better drilled, and more numerous than anything that could check it, and one morning the household guard simply took its orders from the barracks. The Shirvanshahs who lasted kept their soldiers loyal by keeping them a little hungry.",
  tribune:
    "Adoration is a current, and a current needs no channel. The crowds that filled the maidan to bless your name found they could fill it for any reason at all, and a Shah beloved past all restraint is a Shah the city no longer thinks it requires. They carried someone else through the gate on their shoulders and scarcely noticed you were gone.",
  theocracy:
    "You gave the mosque everything it asked and a little more, and authority, once given, is rarely returned. The Qadi's word came to carry further than the Shah's; the rulings issued from the great mosque and the palace only sealed them. You reigned, at the last, as the most pious clerk in your own court.",
  inferno:
    "The seeps were stocked past anything the trenches could safely hold, and the Absheron night turned to noon when they caught. The fire walked from pool to pool faster than men could run from it, and the smoke stood visible from Derbent. A kingdom that hoards fire learns, in the end, what fire is for.",
};

const ROMAN_NUMERALS = [
  ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
  ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
  ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1],
];

function toRoman(n) {
  if (n < 1) return "I";
  let result = "";
  let remaining = n;
  for (const [letter, value] of ROMAN_NUMERALS) {
    while (remaining >= value) {
      result += letter;
      remaining -= value;
    }
  }
  return result;
}

function classifyEnding(ending) {
  if (ending.type === "longevity") {
    const total = STAT_NAMES.reduce((sum, name) => sum + state.stats[name], 0);
    return total / STAT_NAMES.length >= 50 ? "prosperity" : "survival";
  }
  // A stat pushed to 100 is its own kind of ruin, distinct from collapse.
  if (ending.type === "overflow") return OVERFLOW_KIND[ending.stat] || "conquest";
  // Collapse (stat fell to 0).
  if (ending.stat === "people" || ending.stat === "faith") return "revolt";
  if (ending.stat === "naphtha") return "darkness";
  return "conquest";
}

function reignSummary() {
  const { treasury, people, military, faith, naphtha } = state.stats;
  return `Year ${toRoman(state.cardsPlayed)}. Treasury ${treasury}, People ${people}, Military ${military}, Faith ${faith}, Naphtha ${naphtha}.`;
}

const CRISIS_LOW = 15;
const CRISIS_HIGH = 85;
const WARN_LOW = 25;
const WARN_HIGH = 75;
const ARC_THRESHOLD = 7;
const AFFINITY_MIN = -10;
const AFFINITY_MAX = 10;
const REIGN_LENGTH = 25;
// Selectable reign lengths (years). "standard" is the historical 25-year reign.
const REIGN_LENGTHS = { short: 15, standard: 25, long: 40 };
function clampReignLength(v) {
  const n = Number(v);
  if (Number.isFinite(n) && n >= 5 && n <= 60) return Math.round(n);
  return REIGN_LENGTH;
}
const FADE_MS = 150;
const INTRO_FADE_MS = 300;

const SAVE_KEY = "throne-of-shirvan-save";
const AUDIO_KEY = "throne-of-shirvan-audio";
const PROGRESS_KEY = "throne-of-shirvan-progress";
const SETTINGS_KEY = "throne-of-shirvan-settings";

const MUSIC_PATH = "assets/sounds/music.mp3";

const ENDING_KINDS = [
  "prosperity", "survival", "conquest", "revolt", "darkness",
  "gilded", "praetorian", "tribune", "theocracy", "inferno",
];

// Difficulty sets the starting value of every stat. Most pressure is downward,
// so a higher start is more forgiving; a lower start brings collapse closer.
const DIFFICULTY_START = { lenient: 58, normal: 50, hard: 42 };
const SWIPE_THRESHOLD = 90; // px a card must be dragged to commit a choice

// Cross-reign progress (codex, endings, bests, earned titles). Loaded once, saved on change.
const progress = { concepts: [], endings: [], bestYears: 0, reigns: 0, unlocked: [] };

// Earned titles — meta-progression shown in the Codex and announced on the
// ending screen. Evaluated against cross-reign progress + the reign just ended.
const ACHIEVEMENTS = [
  { id: "scholar", name: "The Scholar", desc: "Collect 10 economic concepts.",
    test: () => progress.concepts.length >= 10 },
  { id: "polymath", name: "The Polymath", desc: "Collect 30 concepts.",
    test: () => progress.concepts.length >= 30 },
  { id: "chronicler", name: "The Chronicler", desc: "Collect every concept in the Codex.",
    test: () => progress.concepts.length >= Object.keys(CONCEPT_DEFS).length },
  { id: "enduring", name: "The Enduring", desc: "Reign the full term without falling.",
    test: (c) => c.fullTerm },
  { id: "steadfast", name: "The Steadfast", desc: "Survive a full Hard reign.",
    test: (c) => c.fullTerm && c.difficulty === "hard" },
  { id: "fated", name: "The Fated", desc: "Witness five different endings.",
    test: () => progress.endings.length >= 5 },
  { id: "complete-chronicle", name: "The Complete Chronicle", desc: "Witness all ten endings.",
    test: () => progress.endings.length >= ENDING_KINDS.length },
  { id: "oracle", name: "The Oracle", desc: "Predict 5+ outcomes in a reign with 80% accuracy.",
    test: (c) => c.predictTotal >= 5 && c.predictHits / c.predictTotal >= 0.8 },
];

function checkAchievements(ctx) {
  const newly = [];
  for (const a of ACHIEVEMENTS) {
    if (progress.unlocked.includes(a.id)) continue;
    let ok = false;
    try {
      ok = !!a.test(ctx);
    } catch {
      ok = false;
    }
    if (ok) {
      progress.unlocked.push(a.id);
      newly.push(a);
    }
  }
  if (newly.length) saveProgress();
  return newly;
}

function reducedMotion() {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

function defaultWarningActive() {
  return Object.fromEntries(STAT_NAMES.map((s) => [s, false]));
}

const state = {
  stats: {
    treasury: 50,
    people: 50,
    military: 50,
    faith: 50,
    naphtha: 50,
  },
  affinity: Object.fromEntries(CHARACTER_KEYS.map((k) => [k, 0])),
  crisisFired: Object.fromEntries(STAT_NAMES.map((s) => [s, false])),
  arcFired: Object.fromEntries(CHARACTER_KEYS.map((k) => [k, false])),
  arcEligible: Object.fromEntries(CHARACTER_KEYS.map((k) => [k, null])),
  cardsPlayed: 0,
  pendingCrisis: null,
  activeCard: null,
  reignStarted: false,
  deck: [],
  view: null, // 'question' | 'result' | 'ending'
  viewExplanation: "",
  endingInfo: null,
  cardHistory: [],
  warningActive: defaultWarningActive(),
  audioEnabled: false,
  flags: [], // delayed-consequence flags set by choices
  conceptsSeen: [], // concepts encountered this reign (for the report)
  difficulty: "normal",
  daily: false,
  reignLength: REIGN_LENGTH,
  customStart: null, // { stat: value } when difficulty === "custom"
  modifiers: {}, // optional run mutators: predict, crisisHeavy, volatile
  predictHits: 0,
  predictTotal: 0,
  lastPrediction: null, // transient: { predicted, actual, correct } for the result view
};

let tutorialActive = false;
let forceTutorialOnIntroHide = false;

// --- Safe localStorage wrappers (handle private browsing / disabled storage) ---

function safeStorageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
}

function safeStorageRemove(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
}

// --- Audio (single looping music track) ---

let musicEl = null;
let gestureArmed = false;

function getMusic() {
  if (!musicEl) {
    try {
      musicEl = new Audio(MUSIC_PATH);
      musicEl.loop = true;
      // "none": don't fetch the (large) track until playback is actually requested.
      musicEl.preload = "none";
      musicEl.addEventListener("error", (e) => {
        if (e && typeof e.preventDefault === "function") e.preventDefault();
      });
    } catch {
      return null;
    }
  }
  return musicEl;
}

function armMusicOnGesture() {
  if (gestureArmed) return;
  gestureArmed = true;
  const handler = () => {
    document.removeEventListener("click", handler);
    document.removeEventListener("keydown", handler);
    gestureArmed = false;
    if (state.audioEnabled) startMusic();
  };
  document.addEventListener("click", handler);
  document.addEventListener("keydown", handler);
}

function startMusic() {
  const m = getMusic();
  if (!m) return;
  try {
    const result = m.play();
    if (result && typeof result.catch === "function") {
      result.catch(() => armMusicOnGesture());
    }
  } catch {
    armMusicOnGesture();
  }
}

function stopMusic() {
  if (!musicEl) return;
  try {
    musicEl.pause();
  } catch {
    /* ignore */
  }
}

function applyAudioPref() {
  if (!els.audioToggle) return;
  els.audioToggle.setAttribute("aria-pressed", state.audioEnabled ? "true" : "false");
  els.audioToggle.setAttribute(
    "aria-label",
    state.audioEnabled ? "Music: on" : "Music: off"
  );
}

function toggleAudio() {
  state.audioEnabled = !state.audioEnabled;
  safeStorageSet(AUDIO_KEY, state.audioEnabled ? "1" : "0");
  applyAudioPref();
  if (state.audioEnabled) startMusic();
  else stopMusic();
}

// --- Save / Resume ---

function cardById(id) {
  if (!id) return null;
  return cards.find((c) => c.id === id) || crises.find((c) => c.id === id) || null;
}

function saveGame() {
  if (!state.reignStarted) return;
  const data = {
    stats: state.stats,
    affinity: state.affinity,
    crisisFired: state.crisisFired,
    arcFired: state.arcFired,
    arcEligible: state.arcEligible,
    cardsPlayed: state.cardsPlayed,
    pendingCrisisId: state.pendingCrisis ? state.pendingCrisis.id : null,
    activeCardId: state.activeCard ? state.activeCard.id : null,
    reignStarted: state.reignStarted,
    deckIds: state.deck.map((c) => c.id),
    view: state.view,
    viewExplanation: state.viewExplanation,
    endingInfo: state.endingInfo,
    cardHistory: state.cardHistory,
    warningActive: state.warningActive,
    flags: state.flags,
    conceptsSeen: state.conceptsSeen,
    difficulty: state.difficulty,
    daily: state.daily,
    reignLength: state.reignLength,
    customStart: state.customStart,
    modifiers: state.modifiers,
    predictHits: state.predictHits,
    predictTotal: state.predictTotal,
  };
  safeStorageSet(SAVE_KEY, JSON.stringify(data));
}

function loadGame() {
  const raw = safeStorageGet(SAVE_KEY);
  if (!raw) return false;
  try {
    const data = JSON.parse(raw);
    if (!data || !data.reignStarted) return false;

    state.stats = { ...state.stats, ...(data.stats || {}) };
    state.affinity = { ...state.affinity, ...(data.affinity || {}) };
    state.crisisFired = { ...state.crisisFired, ...(data.crisisFired || {}) };
    state.arcFired = { ...state.arcFired, ...(data.arcFired || {}) };
    state.arcEligible = { ...state.arcEligible, ...(data.arcEligible || {}) };
    state.cardsPlayed = Number(data.cardsPlayed) || 0;
    state.pendingCrisis = cardById(data.pendingCrisisId);
    state.activeCard = cardById(data.activeCardId);
    state.reignStarted = !!data.reignStarted;
    state.deck = (data.deckIds || []).map(cardById).filter(Boolean);
    state.view = data.view || null;
    state.viewExplanation = data.viewExplanation || "";
    state.endingInfo = data.endingInfo || null;
    state.cardHistory = Array.isArray(data.cardHistory) ? data.cardHistory : [];
    state.flags = Array.isArray(data.flags) ? data.flags : [];
    state.conceptsSeen = Array.isArray(data.conceptsSeen) ? data.conceptsSeen : [];
    state.difficulty = data.difficulty || "normal";
    state.daily = !!data.daily;
    state.reignLength = clampReignLength(data.reignLength);
    state.customStart =
      data.customStart && typeof data.customStart === "object" ? data.customStart : null;
    state.modifiers =
      data.modifiers && typeof data.modifiers === "object" ? data.modifiers : {};
    state.predictHits = Number(data.predictHits) || 0;
    state.predictTotal = Number(data.predictTotal) || 0;
    state.lastPrediction = null;
    if (data.warningActive && typeof data.warningActive === "object") {
      state.warningActive = { ...defaultWarningActive(), ...data.warningActive };
    } else {
      state.warningActive = Object.fromEntries(
        STAT_NAMES.map((s) => [s, state.stats[s] < WARN_LOW || state.stats[s] > WARN_HIGH])
      );
    }
    return true;
  } catch {
    return false;
  }
}

function clearSave() {
  safeStorageRemove(SAVE_KEY);
}

// --- DOM references ---

const els = {
  stats: document.getElementById("stats"),
  cardsPlayed: document.getElementById("cards-played"),
  reignLength: document.getElementById("reign-length"),
  card: document.getElementById("card"),
  cardEmblem: document.getElementById("card-emblem"),
  speaker: document.getElementById("speaker"),
  affinity: document.getElementById("affinity"),
  scenario: document.getElementById("scenario"),
  explanation: document.getElementById("explanation"),
  options: document.getElementById("options"),
  intro: document.getElementById("intro"),
  introBegin: document.getElementById("intro-begin"),
  introSecondary: document.getElementById("intro-secondary"),
  aboutLink: document.getElementById("about-link"),
  audioToggle: document.getElementById("audio-toggle"),
  reign: document.querySelector(".reign"),
  app: document.getElementById("app"),
  conceptChip: document.getElementById("concept-chip"),
  conceptDef: document.getElementById("concept-def"),
  timeline: document.getElementById("timeline"),
  introSetup: document.getElementById("intro-setup"),
  dailyToggle: document.getElementById("daily-toggle"),
  introCodex: document.getElementById("intro-codex"),
  codexLink: document.getElementById("codex-link"),
  codex: document.getElementById("codex"),
  codexBody: document.getElementById("codex-body"),
  codexClose: document.getElementById("codex-close"),
  tutorial: null,
};

// --- Dev helpers ---

if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
  window.dev = {
    state,
    setAffinity: (char, val) => {
      state.affinity[char] = val;
      if (state.activeCard) renderAffinity(state.activeCard);
      saveGame();
      console.log(`${char} affinity = ${val}`);
    },
    setStat: (stat, val) => {
      state.stats[stat] = val;
      renderStats();
      saveGame();
      console.log(`${stat} = ${val}`);
    },
    triggerArc: (char, dir) => {
      state.affinity[char] = dir === "high" ? 7 : -7;
      state.arcEligible[char] = dir;
      if (state.activeCard) renderAffinity(state.activeCard);
      saveGame();
      console.log(`${char} arc ${dir} primed and eligible — click an option to fire`);
    },
    triggerCrisis: (stat, dir) => {
      state.stats[stat] = dir === "high" ? 86 : 14;
      renderStats();
      if (queueCrisis(stat, dir)) {
        saveGame();
        console.log(`${stat} ${dir} crisis primed — click an option to fire`);
      } else {
        saveGame();
        console.log(`${stat} ${dir} crisis NOT primed (no matching card or already fired this reign)`);
      }
    },
    clearSave: () => {
      clearSave();
      console.log("Save cleared");
    },
  };
}

// --- Emblem rendering ---

function emblemForCard(card) {
  if (!card) return null;
  if (CHARACTER_KEYS.includes(card.speakerType)) {
    return { kind: "portrait", src: `assets/portraits/${card.speakerType}.png` };
  }
  const category = SPEAKER_CATEGORY[card.id];
  if (category) {
    return { kind: "icon", src: `assets/icons/${category}.png` };
  }
  return null;
}

function renderEmblem(card) {
  const info = emblemForCard(card);
  if (!info) {
    els.cardEmblem.innerHTML = "";
    els.cardEmblem.hidden = true;
    els.cardEmblem.removeAttribute("data-kind");
    return;
  }
  const img = document.createElement("img");
  img.src = info.src;
  img.alt = "";
  img.decoding = "async";
  // Serve a small display copy (resize_assets.py writes -256/-512 variants);
  // the 1024px original stays the fallback / source of truth.
  const base = info.src.replace(/\.png$/, "");
  img.srcset = `${base}-256.png 256w, ${base}-512.png 512w, ${info.src} 1024w`;
  img.sizes = info.kind === "portrait" ? "140px" : "60px";
  els.cardEmblem.innerHTML = "";
  els.cardEmblem.appendChild(img);
  els.cardEmblem.dataset.kind = info.kind;
  els.cardEmblem.hidden = false;
}

// --- Affinity indicator ---

// Turn a raw affinity value (-10..+10) into a one-word court relationship,
// so the dots aren't a mystery to a new player.
function affinityWord(v) {
  if (v >= 6) return "Devoted";
  if (v >= 3) return "Warm";
  if (v >= 1) return "Favorable";
  if (v === 0) return "Neutral";
  if (v > -3) return "Cool";
  if (v > -6) return "Wary";
  return "Hostile";
}

function renderAffinity(card) {
  if (!card || !CHARACTER_KEYS.includes(card.speakerType)) {
    els.affinity.hidden = true;
    els.affinity.innerHTML = "";
    els.affinity.removeAttribute("data-character");
    return;
  }
  const value = state.affinity[card.speakerType] ?? 0;
  const filledCount = Math.ceil(Math.abs(value) / 2);
  const positive = value > 0;

  const parts = [];
  for (let step = 5; step >= 1; step--) {
    const filled = !positive && step <= filledCount;
    parts.push(
      `<span class="affinity-dot${filled ? " filled" : ""}" data-side="left" data-step="${step}"></span>`
    );
  }
  parts.push('<span class="affinity-axis" aria-hidden="true"></span>');
  for (let step = 1; step <= 5; step++) {
    const filled = positive && step <= filledCount;
    parts.push(
      `<span class="affinity-dot${filled ? " filled" : ""}" data-side="right" data-step="${step}"></span>`
    );
  }

  const sign = value >= 0 ? "+" : "";
  const word = affinityWord(value);
  els.affinity.innerHTML =
    `<span class="affinity-word">${word}</span>` +
    parts.join("") +
    `<span class="affinity-num">${sign}${value}</span>`;
  els.affinity.dataset.character = card.speakerType;
  els.affinity.setAttribute(
    "aria-label",
    `Your standing with the ${card.speakerType}: ${word}, ${sign}${value} of 10`
  );
  els.affinity.title = `Your standing with the ${card.speakerType}: ${word} (${sign}${value})`;
  els.affinity.hidden = false;
}

// --- Stat bars ---

function buildStatBars() {
  els.stats.innerHTML = STAT_NAMES.map(
    (name) => `
      <li class="stat" data-stat="${name}" data-tooltip="${STAT_DESCRIPTIONS[name]}" tabindex="0" aria-label="${name}: 50 of 100. ${STAT_DESCRIPTIONS[name]}">
        <span class="stat-name" aria-hidden="true">${name}</span>
        <div class="stat-track" aria-hidden="true"><div class="stat-fill"></div></div>
        <span class="stat-value" aria-hidden="true">0</span>
      </li>`
  ).join("");
}

function renderStats() {
  for (const name of STAT_NAMES) {
    const value = state.stats[name];
    const row = els.stats.querySelector(`[data-stat="${name}"]`);
    row.querySelector(".stat-fill").style.width = `${value}%`;
    row.querySelector(".stat-value").textContent = value;
    const isWarn = value < WARN_LOW || value > WARN_HIGH;
    row.classList.toggle("warning", isWarn);
    row.setAttribute(
      "aria-label",
      `${name}: ${value} of 100${isWarn ? ", at risk" : ""}. ${STAT_DESCRIPTIONS[name]}`
    );
  }
  els.cardsPlayed.textContent = Math.min(state.cardsPlayed, state.reignLength);
  if (els.reignLength) els.reignLength.textContent = state.reignLength;
  // Flag the final year of the reign so the last decision feels weighty.
  const finalYear =
    state.reignStarted &&
    state.view !== "ending" &&
    state.cardsPlayed >= state.reignLength - 1;
  els.reign?.classList.toggle("final-year", finalYear);
  updateTimeline();
}

function buildTimeline() {
  if (!els.timeline) return;
  // Split the reign into three acts with a small gap at each boundary, so the
  // span of years reads as early / middle / late rather than one flat run.
  const len = state.reignLength;
  const a1 = Math.round(len / 3);
  const a2 = Math.round((2 * len) / 3);
  els.timeline.innerHTML = Array.from({ length: len }, (_, i) => {
    const actStart = i === a1 || i === a2;
    return `<span class="tl-notch${actStart ? " act-start" : ""}"></span>`;
  }).join("");
}

function updateTimeline() {
  if (!els.timeline) return;
  const notches = els.timeline.querySelectorAll(".tl-notch");
  notches.forEach((n, i) => n.classList.toggle("filled", i < state.cardsPlayed));
}

// --- Deck / next-card logic ---

// Random source: Math.random normally; a date-seeded generator in Daily mode so
// the deck order is identical for every player on a given day.
let rngFn = Math.random;
function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function setRandomSource() {
  if (state.daily) {
    const d = new Date();
    const seed = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
    rngFn = mulberry32(seed);
  } else {
    rngFn = Math.random;
  }
}

function shuffle(source) {
  const out = source.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rngFn() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// A card may gate itself on a flag set earlier this reign (delayed consequences).
function cardEligible(card) {
  if (card.requires && !state.flags.includes(card.requires)) return false;
  if (card.excludes && state.flags.includes(card.excludes)) return false;
  return true;
}

function drawFromDeck() {
  let guard = 0;
  while (guard++ < decisionCards.length * 3) {
    if (state.deck.length === 0) state.deck = shuffle(decisionCards);
    const card = state.deck.shift();
    if (card && cardEligible(card)) return card;
  }
  return decisionCards.find(cardEligible) || decisionCards[0];
}

function pickArcCard() {
  for (const character of CHARACTER_KEYS) {
    const direction = state.arcEligible[character];
    if (!direction || state.arcFired[character]) continue;
    const arc = cards.find(
      (c) => c.arcCharacter === character && c.arcAffinityDirection === direction
    );
    if (arc) {
      state.arcFired[character] = true;
      state.arcEligible[character] = null;
      return arc;
    }
  }
  return null;
}

function nextCard() {
  if (state.pendingCrisis) {
    const crisis = state.pendingCrisis;
    state.pendingCrisis = null;
    return crisis;
  }
  const arc = pickArcCard();
  if (arc) return arc;
  return drawFromDeck();
}

// --- Option hover preview ---

function buildOptionPreview(option) {
  const effects = option.effects || {};
  const wrap = document.createElement("span");
  wrap.className = "option-preview";
  let anyChip = false;
  for (const stat of STAT_NAMES) {
    const v = effects[stat];
    if (!v) continue;
    anyChip = true;
    const cls = v > 0 ? "positive" : "negative";
    const sign = v > 0 ? "+" : "−";
    const chip = document.createElement("span");
    chip.className = `option-preview-chip ${cls}`;
    chip.textContent = `${stat} ${sign}${Math.abs(v)}`;
    wrap.appendChild(chip);
  }
  if (!anyChip) {
    const chip = document.createElement("span");
    chip.className = "option-preview-chip";
    chip.textContent = "no stat change";
    wrap.appendChild(chip);
  }
  return wrap;
}

// --- Chronicle (card history) ---

function removeChronicle() {
  const existing = document.querySelector(".chronicle");
  if (existing) existing.remove();
}

function formatEffectsBrief(effects) {
  const parts = [];
  for (const stat of STAT_NAMES) {
    const v = effects[stat];
    if (!v) continue;
    const sign = v > 0 ? "+" : "−";
    parts.push(`${stat} ${sign}${Math.abs(v)}`);
  }
  return parts.join("  ·  ");
}

function renderChronicle() {
  removeChronicle();
  if (!state.cardHistory || state.cardHistory.length === 0) return;

  const details = document.createElement("details");
  details.className = "chronicle";
  const summary = document.createElement("summary");
  summary.textContent = "The chronicle of your reign";
  details.appendChild(summary);

  const ol = document.createElement("ol");
  ol.className = "chronicle-list";

  for (const entry of state.cardHistory) {
    const li = document.createElement("li");
    li.className = "chronicle-entry";
    li.dataset.type = entry.cardType;

    const speaker = document.createElement("span");
    speaker.className = "chronicle-speaker";
    speaker.textContent = entry.speaker;
    li.appendChild(speaker);

    if (entry.cardType === "arc") {
      const tag = document.createElement("span");
      tag.className = "chronicle-tag";
      tag.textContent = "arc";
      li.appendChild(tag);
    } else if (entry.cardType === "crisis") {
      const tag = document.createElement("span");
      tag.className = "chronicle-tag";
      tag.textContent = "crisis";
      li.appendChild(tag);
    }

    const effectsText = formatEffectsBrief(entry.effects || {});
    if (effectsText) {
      const effects = document.createElement("span");
      effects.className = "chronicle-effects";
      effects.textContent = effectsText;
      li.appendChild(effects);
    }

    const choice = document.createElement("em");
    choice.className = "chronicle-choice";
    choice.textContent = entry.optionLabel;
    li.appendChild(choice);

    ol.appendChild(li);
  }

  details.appendChild(ol);
  els.options.parentNode.insertBefore(details, els.options);
}

// --- Card rendering ---

// Re-trigger the deal-in entrance animation for a freshly rendered card.
function dealIn() {
  if (reducedMotion()) return;
  els.card.classList.remove("dealing");
  void els.card.offsetWidth; // force reflow so the animation restarts each card
  els.card.classList.add("dealing");
}

// crisis cards have a triggerStat; arc cards an arcCharacter; the rest are plain
// decisions. Exposed as a data attribute so the stylesheet can mark them apart.
function cardTypeOf(card) {
  return card.triggerStat ? "crisis" : card.arcCharacter ? "arc" : "decision";
}

function renderCardImmediate(card) {
  removeChronicle();
  state.activeCard = card;
  state.view = "question";
  state.viewExplanation = "";
  state.endingInfo = null;
  renderEmblem(card);
  els.card.classList.remove("ending");
  delete els.card.dataset.endingKind;
  els.card.dataset.cardType = cardTypeOf(card);
  els.speaker.textContent = card.speaker;
  els.speaker.dataset.speakerType = card.speakerType ?? "one-off";
  renderAffinity(card);
  els.scenario.textContent = card.scenario;
  els.explanation.hidden = true;
  els.explanation.textContent = "";
  setConceptChip(null);
  state.lastPrediction = null;
  document.getElementById("predict-feedback")?.remove();
  applyModifierClasses();

  els.options.innerHTML = "";
  card.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.optionIndex = String(index);
    const keyHint = document.createElement("span");
    keyHint.className = "key-hint";
    keyHint.setAttribute("aria-hidden", "true");
    keyHint.textContent = String(index + 1);
    const optionLabel = document.createElement("span");
    optionLabel.className = "option-label";
    optionLabel.textContent = option.label;
    button.appendChild(keyHint);
    button.appendChild(optionLabel);
    button.appendChild(buildOptionPreview(option));
    button.addEventListener("click", () => onOptionChosen(index));
    els.options.appendChild(button);
  });

  els.options.querySelector("button")?.focus();

  renderStats();
  dealIn();
  saveGame();
  maybeShowTutorial();
}

function renderResultViewImmediate(card, explanationText) {
  removeChronicle();
  state.activeCard = card;
  state.view = "result";
  state.viewExplanation = explanationText || "";
  state.endingInfo = null;
  renderEmblem(card);
  els.card.classList.remove("ending");
  delete els.card.dataset.endingKind;
  els.card.dataset.cardType = cardTypeOf(card);
  els.speaker.textContent = card.speaker;
  els.speaker.dataset.speakerType = card.speakerType ?? "one-off";
  renderAffinity(card);
  els.scenario.textContent = card.scenario;
  els.explanation.textContent = state.viewExplanation;
  els.explanation.hidden = false;
  setConceptChip(card);
  renderPredictFeedback();

  els.options.innerHTML = "";
  const next = document.createElement("button");
  next.type = "button";
  next.dataset.continue = "true";
  const label = document.createElement("span");
  label.className = "option-label";
  label.textContent = "Continue";
  const hint = document.createElement("span");
  hint.className = "key-hint key-hint-continue";
  hint.setAttribute("aria-hidden", "true");
  hint.innerHTML = "&#x21B5;";
  next.appendChild(label);
  next.appendChild(hint);
  next.addEventListener("click", renderCard);
  els.options.appendChild(next);
  next.focus();

  renderStats();
}

function checkEnding() {
  for (const stat of STAT_NAMES) {
    const value = state.stats[stat];
    if (value <= 0) return { type: "collapse", stat };
    if (value >= 100) return { type: "overflow", stat };
  }
  if (state.cardsPlayed >= state.reignLength) return { type: "longevity" };
  return null;
}

function startValueFor(stat) {
  // Custom difficulty lets the player set each stat's starting value; every
  // other difficulty starts all five stats at the same forgiving/harsh value.
  if (state.difficulty === "custom" && state.customStart) {
    const v = Number(state.customStart[stat]);
    return Number.isFinite(v) ? Math.max(0, Math.min(100, Math.round(v))) : 50;
  }
  return DIFFICULTY_START[state.difficulty] ?? 50;
}

function resetReign() {
  for (const stat of STAT_NAMES) state.stats[stat] = startValueFor(stat);
  for (const character of CHARACTER_KEYS) {
    state.affinity[character] = 0;
    state.arcFired[character] = false;
    state.arcEligible[character] = null;
  }
  for (const stat of STAT_NAMES) state.crisisFired[stat] = false;
  state.cardsPlayed = 0;
  state.pendingCrisis = null;
  state.activeCard = null;
  state.deck = [];
  state.view = null;
  state.viewExplanation = "";
  state.endingInfo = null;
  state.cardHistory = [];
  state.warningActive = Object.fromEntries(
    STAT_NAMES.map((s) => [s, state.stats[s] < WARN_LOW || state.stats[s] > WARN_HIGH])
  );
  state.flags = [];
  state.conceptsSeen = [];
  state.predictHits = 0;
  state.predictTotal = 0;
  state.lastPrediction = null;
  setRandomSource();
}

function renderEndingImmediate(ending, firstTime = false) {
  removeChronicle();
  state.activeCard = null;
  state.view = "ending";
  state.endingInfo = ending;
  renderEmblem(null);
  renderAffinity(null);
  setConceptChip(null);
  const kind = classifyEnding(ending);

  els.card.classList.add("ending");
  els.card.dataset.endingKind = kind;
  delete els.card.dataset.cardType;

  els.speaker.textContent = ENDING_TITLES[kind];
  els.speaker.dataset.speakerType = "ending";

  els.scenario.textContent = reignSummary();

  els.explanation.textContent = ENDING_FLAVOUR[kind];
  els.explanation.hidden = false;

  renderReignReport(kind, firstTime);
  renderChronicle();

  els.options.innerHTML = "";
  const btn = document.createElement("button");
  btn.type = "button";
  btn.dataset.continue = "true";
  const label = document.createElement("span");
  label.className = "option-label";
  label.textContent = "Begin a New Reign";
  const hint = document.createElement("span");
  hint.className = "key-hint key-hint-continue";
  hint.setAttribute("aria-hidden", "true");
  hint.innerHTML = "&#x21B5;";
  btn.appendChild(label);
  btn.appendChild(hint);
  btn.addEventListener("click", () => {
    clearSave();
    resetReign();
    state.reignStarted = true;
    renderStats();
    renderCard();
  });
  els.options.appendChild(btn);
  btn.focus();

  renderStats();
  saveGame();
}

function renderCard() {
  const ending = checkEnding();
  const next = ending ? null : nextCard();
  // Record the ending once, here at the live transition (not on save-resume,
  // which calls renderEndingImmediate directly).
  let firstTime = false;
  if (ending) {
    const kind = classifyEnding(ending);
    firstTime = !progress.endings.includes(kind);
    markEndingReached(kind);
    recordReignResult();
  }
  els.card.classList.add("fading");
  setTimeout(() => {
    if (ending) renderEndingImmediate(ending, firstTime);
    else renderCardImmediate(next);
    requestAnimationFrame(() => els.card.classList.remove("fading"));
  }, FADE_MS);
}

function queueCrisis(stat, direction) {
  if (state.crisisFired[stat]) return false;
  const crisis = crises.find(
    (c) => c.triggerStat === stat && c.triggerDirection === direction
  );
  if (!crisis) return false;
  state.crisisFired[stat] = true;
  state.pendingCrisis = crisis;
  return true;
}

function animateDelta(stat, delta, note) {
  if (delta === 0) return;
  const row = els.stats.querySelector(`[data-stat="${stat}"]`);
  if (!row) return;
  const node = document.createElement("span");
  node.className = `stat-delta ${delta > 0 ? "positive" : "negative"}`;
  const sign = delta > 0 ? "+" : "−";
  node.textContent = `${sign}${Math.abs(delta)}`;
  if (note) {
    const tag = document.createElement("small");
    tag.className = "stat-delta-note";
    tag.textContent = note;
    node.appendChild(tag);
  }
  row.appendChild(node);
  node.addEventListener("animationend", () => node.remove(), { once: true });
}

// --- Run modifiers + predict beat ---

// Crisis-prone court pulls the danger zones inward (crises strike sooner).
function crisisLow() {
  return state.modifiers && state.modifiers.crisisHeavy ? 20 : CRISIS_LOW;
}
function crisisHigh() {
  return state.modifiers && state.modifiers.crisisHeavy ? 80 : CRISIS_HIGH;
}

// Volatile fortunes amplify every stat swing (kept at least as large as the
// original, never flipping sign or dropping to zero).
function applyVolatile(d) {
  if (!d || !(state.modifiers && state.modifiers.volatile)) return d;
  const scaled = Math.round(d * 1.5);
  return scaled === 0 ? d : scaled;
}

// The stat a given option shifts the most (by magnitude) — used by predict mode.
function largestEffectStat(option) {
  let best = null;
  let mag = 0;
  for (const [stat, d] of Object.entries(option.effects || {})) {
    if (Math.abs(d) > mag) {
      mag = Math.abs(d);
      best = stat;
    }
  }
  return best;
}

// Option click: in predict mode, ask for a guess first; otherwise resolve.
function onOptionChosen(index) {
  if (state.modifiers && state.modifiers.predict) renderPredictionPrompt(index);
  else chooseOption(index);
}

function renderPredictionPrompt(index) {
  const card = state.activeCard;
  if (!card || !card.options[index]) return;
  els.options.innerHTML = "";
  const q = document.createElement("p");
  q.className = "predict-q";
  q.textContent = "Before the result — which stat will this move the most?";
  els.options.appendChild(q);
  const row = document.createElement("div");
  row.className = "predict-choices";
  for (const stat of STAT_NAMES) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "predict-btn";
    b.textContent = STAT_LABELS[stat];
    b.addEventListener("click", () => resolvePrediction(index, stat));
    row.appendChild(b);
  }
  const skip = document.createElement("button");
  skip.type = "button";
  skip.className = "predict-btn predict-skip";
  skip.textContent = "Skip";
  skip.addEventListener("click", () => resolvePrediction(index, null));
  row.appendChild(skip);
  els.options.appendChild(row);
  row.querySelector("button")?.focus();
}

function resolvePrediction(index, predictedStat) {
  const option = state.activeCard?.options[index];
  const actual = option ? largestEffectStat(option) : null;
  if (predictedStat && actual) {
    state.predictTotal += 1;
    const correct = predictedStat === actual;
    if (correct) state.predictHits += 1;
    state.lastPrediction = { predicted: predictedStat, actual, correct };
  } else {
    state.lastPrediction = null;
  }
  chooseOption(index);
}

// Show whether the player's prediction matched the actual largest mover.
function renderPredictFeedback() {
  const existing = document.getElementById("predict-feedback");
  const p = state.lastPrediction;
  if (!p) {
    existing?.remove();
    return;
  }
  const el = existing || document.createElement("p");
  el.id = "predict-feedback";
  el.className = "predict-feedback";
  el.dataset.correct = String(p.correct);
  el.textContent = p.correct
    ? `✓ You foresaw it — ${STAT_LABELS[p.actual]} moved the most.`
    : `✗ You guessed ${STAT_LABELS[p.predicted]}; ${STAT_LABELS[p.actual]} moved the most.`;
  if (!existing) els.conceptChip.parentNode.insertBefore(el, els.conceptChip);
}

function applyModifierClasses() {
  document.body.classList.toggle(
    "predict-mode",
    !!(state.modifiers && state.modifiers.predict)
  );
}

function chooseOption(index) {
  const card = state.activeCard;
  if (!card) return;
  const option = card.options[index];
  if (!option) return;

  const cardType = card.triggerStat ? "crisis" : card.arcCharacter ? "arc" : "normal";
  state.cardHistory.push({
    cardId: card.id,
    cardType,
    speaker: card.speaker,
    optionLabel: option.label,
    effects: { ...(option.effects || {}) },
  });

  // Delayed-consequence flag + concept discovery.
  if (option.flag && !state.flags.includes(option.flag)) state.flags.push(option.flag);
  if (card.concept) {
    markConceptDiscovered(card.concept);
    if (!state.conceptsSeen.includes(card.concept)) state.conceptsSeen.push(card.concept);
  }

  for (const [stat, delta] of Object.entries(option.effects ?? {})) {
    if (!(stat in state.stats)) continue;
    const d = applyVolatile(delta);
    const oldValue = state.stats[stat];
    const newValue = Math.max(0, Math.min(100, oldValue + d));
    state.stats[stat] = newValue;
    animateDelta(stat, newValue - oldValue);
    if (newValue !== oldValue) pulseStat(stat);

    const wasOutside = oldValue < WARN_LOW || oldValue > WARN_HIGH;
    const isOutside = newValue < WARN_LOW || newValue > WARN_HIGH;
    if (isOutside && !wasOutside) {
      state.warningActive[stat] = true;
    } else if (!isOutside) {
      state.warningActive[stat] = false;
    }
  }

  if (option.affinityEffects) {
    for (const [character, delta] of Object.entries(option.affinityEffects)) {
      if (!(character in state.affinity)) continue;
      const oldValue = state.affinity[character];
      state.affinity[character] = Math.max(AFFINITY_MIN, Math.min(AFFINITY_MAX, oldValue + delta));
    }
    // Re-derive arc eligibility from the *current* affinity each time it changes.
    // Latching once meant a character who later slid back toward neutral (or to the
    // opposite extreme) could still fire a stale-direction arc; this reconciles it.
    for (const character of CHARACTER_KEYS) {
      if (state.arcFired[character]) {
        state.arcEligible[character] = null;
        continue;
      }
      const v = state.affinity[character];
      state.arcEligible[character] = v >= ARC_THRESHOLD ? "high" : v <= -ARC_THRESHOLD ? "low" : null;
    }
  }

  if (card.triggerStat === undefined) {
    state.cardsPlayed += 1;
    // Passive "naphtha rent": a well-stocked field quietly funds the treasury;
    // a depleted one bleeds it through imported oil and lamp-fuel. Subtle (±1),
    // so it rewards conserving naphtha without dominating the ledger.
    let rent = 0;
    if (state.stats.naphtha >= 75) rent = 1;
    else if (state.stats.naphtha <= 25) rent = -1;
    if (rent !== 0) {
      const old = state.stats.treasury;
      state.stats.treasury = Math.max(0, Math.min(100, old + rent));
      const d = state.stats.treasury - old;
      if (d !== 0) {
        animateDelta("treasury", d, "naphtha rent");
        pulseStat("treasury");
      }
    }
  }

  // If this choice already ends the reign (a stat hit 0 or 100, or the final
  // year was reached), don't queue a crisis the player would never get to see.
  const reignEnds =
    STAT_NAMES.some((s) => state.stats[s] <= 0 || state.stats[s] >= 100) ||
    state.cardsPlayed >= state.reignLength;
  if (!reignEnds) {
    for (const stat of STAT_NAMES) {
      const value = state.stats[stat];
      let direction = null;
      if (value < crisisLow()) direction = "low";
      else if (value > crisisHigh()) direction = "high";
      if (!direction) continue;
      if (queueCrisis(stat, direction)) break;
    }
  }

  state.view = "result";
  state.viewExplanation = option.explanation ?? "";
  els.explanation.textContent = state.viewExplanation;
  els.explanation.hidden = false;
  setConceptChip(card);
  renderPredictFeedback();
  els.options.innerHTML = "";

  const next = document.createElement("button");
  next.type = "button";
  next.dataset.continue = "true";
  const label = document.createElement("span");
  label.className = "option-label";
  label.textContent = "Continue";
  const hint = document.createElement("span");
  hint.className = "key-hint key-hint-continue";
  hint.setAttribute("aria-hidden", "true");
  hint.innerHTML = "&#x21B5;";
  next.appendChild(label);
  next.appendChild(hint);
  next.addEventListener("click", renderCard);
  els.options.appendChild(next);
  next.focus();

  renderAffinity(card);
  renderStats();

  if (tutorialActive) hideTutorial();

  saveGame();
}

// --- Tutorial overlay ---

function maybeShowTutorial() {
  if (state.cardsPlayed !== 0) return;
  if (state.view !== "question") return;
  if (!state.activeCard) return;
  if (!els.intro.hidden) return;
  showTutorial();
}

function showTutorial() {
  if (tutorialActive) return;
  tutorialActive = true;

  const overlay = document.createElement("div");
  overlay.className = "tutorial";
  overlay.id = "tutorial";

  const backdrop = document.createElement("div");
  backdrop.className = "tutorial-backdrop";
  overlay.appendChild(backdrop);

  const tipDefs = [
    {
      target: "stats",
      text: "Your five stats. Keep each off 0 and 100 — either extreme ends your reign. Drift to the edge and a crisis strikes.",
    },
    {
      target: "reign",
      text: `Your reign runs ${state.reignLength} years. Survive them all, or fall early — each ending tells a different story.`,
    },
    {
      target: "options",
      text: "Two choices, both with costs (shown beneath each). Tap one, or swipe the card left or right.",
    },
  ];

  for (const def of tipDefs) {
    const tip = document.createElement("div");
    tip.className = "tutorial-tip";
    tip.dataset.target = def.target;
    tip.textContent = def.text;
    overlay.appendChild(tip);
  }

  const dismiss = document.createElement("button");
  dismiss.type = "button";
  dismiss.className = "tutorial-dismiss";
  dismiss.textContent = "Got it";
  dismiss.addEventListener("click", hideTutorial);
  overlay.appendChild(dismiss);

  document.body.appendChild(overlay);
  els.tutorial = overlay;

  positionTutorialTips();
  dismiss.focus();
  window.addEventListener("resize", positionTutorialTips);
  window.addEventListener("scroll", positionTutorialTips, true);
}

function hideTutorial() {
  if (!tutorialActive) return;
  tutorialActive = false;
  if (els.tutorial) {
    els.tutorial.remove();
    els.tutorial = null;
  }
  window.removeEventListener("resize", positionTutorialTips);
  window.removeEventListener("scroll", positionTutorialTips, true);
}

function positionTutorialTips() {
  if (!els.tutorial) return;

  const targets = {
    stats: els.stats,
    reign: els.reign,
    options: els.options,
  };

  const tips = els.tutorial.querySelectorAll(".tutorial-tip");
  tips.forEach((tip) => {
    const target = targets[tip.dataset.target];
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const tipWidth = Math.min(tip.offsetWidth || 200, 220);
    const tipHeight = tip.offsetHeight || 60;
    const viewWidth = window.innerWidth;
    const viewHeight = window.innerHeight;

    const spaceRight = viewWidth - rect.right;
    const spaceLeft = rect.left;
    const spaceBelow = viewHeight - rect.bottom;

    let side;
    let top;
    let left;

    if (spaceRight >= tipWidth + 24) {
      side = "left";
      top = rect.top + rect.height / 2 - tipHeight / 2;
      left = rect.right + 14;
    } else if (spaceLeft >= tipWidth + 24) {
      side = "right";
      top = rect.top + rect.height / 2 - tipHeight / 2;
      left = rect.left - tipWidth - 14;
    } else if (spaceBelow >= tipHeight + 24) {
      side = "top";
      top = rect.bottom + 14;
      left = rect.left + rect.width / 2 - tipWidth / 2;
    } else {
      side = "bottom";
      top = rect.top - tipHeight - 14;
      left = rect.left + rect.width / 2 - tipWidth / 2;
    }

    left = Math.max(8, Math.min(viewWidth - tipWidth - 8, left));
    top = Math.max(8, Math.min(viewHeight - tipHeight - 8, top));

    tip.style.left = `${left}px`;
    tip.style.top = `${top}px`;
    tip.dataset.side = side;
  });
}

// --- Intro screen ---

let introHideTimer = null;
let introMode = "fresh";

function showIntro({ mode }) {
  if (introHideTimer) {
    clearTimeout(introHideTimer);
    introHideTimer = null;
  }
  introMode = mode;
  els.intro.hidden = false;
  els.intro.classList.remove("fading-out");
  els.intro.setAttribute("aria-hidden", "false");
  // The intro is a fullscreen blocker; make the game behind it non-interactive
  // so keyboard and screen-reader users can't tab into it.
  els.app?.setAttribute("inert", "");
  els.app?.setAttribute("aria-hidden", "true");

  if (mode === "fresh") {
    els.introBegin.textContent = "Begin Reign";
    els.introSecondary.hidden = true;
  } else if (mode === "resume") {
    els.introBegin.textContent = "Continue Reign";
    els.introSecondary.hidden = false;
  } else if (mode === "return") {
    els.introBegin.textContent = "Return to Throne";
    els.introSecondary.hidden = false;
  }
  // Difficulty + daily only apply to a brand-new reign.
  if (els.introSetup) els.introSetup.hidden = mode !== "fresh";

  // Focus the primary action for keyboard users without scrolling the title
  // off the top of the intro panel.
  els.introBegin.focus({ preventScroll: true });
}

function hideIntro() {
  if (introHideTimer) {
    clearTimeout(introHideTimer);
    introHideTimer = null;
  }
  els.intro.classList.add("fading-out");
  els.intro.setAttribute("aria-hidden", "true");
  els.app?.removeAttribute("inert");
  els.app?.removeAttribute("aria-hidden");
  introHideTimer = setTimeout(() => {
    introHideTimer = null;
    els.intro.hidden = true;
    if (forceTutorialOnIntroHide) {
      forceTutorialOnIntroHide = false;
      showTutorial();
    } else {
      maybeShowTutorial();
    }
  }, INTRO_FADE_MS);
}

function startFreshReign() {
  hideTutorial();
  readReignSettings();
  resetReign();
  state.reignStarted = true;
  renderStats();
  renderCardImmediate(nextCard());
  hideIntro();
}

// --- Keyboard ---

function onKeydown(event) {
  if (codexOpen) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeCodex();
    }
    return;
  }
  if (tutorialActive && event.key === "Escape") {
    event.preventDefault();
    hideTutorial();
    return;
  }
  if (!els.intro.hidden) {
    if (event.key === "Enter" || event.key === " ") {
      if (
        event.target instanceof HTMLButtonElement ||
        event.target instanceof HTMLAnchorElement ||
        event.target instanceof HTMLInputElement
      )
        return;
      event.preventDefault();
      els.introBegin.click();
    }
    return;
  }
  if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
  if (event.key === "1" || event.key === "2") {
    const btn = els.options.querySelector(`button[data-option-index="${Number(event.key) - 1}"]`);
    if (btn) {
      event.preventDefault();
      btn.click();
    }
    return;
  }
  if (event.key === "Enter" || event.key === " ") {
    if (event.target instanceof HTMLButtonElement || event.target instanceof HTMLAnchorElement) return;
    const btn = els.options.querySelector('button[data-continue="true"]');
    if (btn) {
      event.preventDefault();
      btn.click();
    }
  }
}

// --- Restore on load ---

function renderRestoredView() {
  if (state.view === "ending" && state.endingInfo) {
    renderEndingImmediate(state.endingInfo);
    return true;
  }
  if (state.view === "question" && state.activeCard) {
    renderCardImmediate(state.activeCard);
    return true;
  }
  if (state.view === "result" && state.activeCard) {
    renderResultViewImmediate(state.activeCard, state.viewExplanation);
    return true;
  }
  return false;
}

// --- Init ---

// Build the intro's stat key from the shared STAT_DESCRIPTIONS so the intro and
// the in-game tooltips can never drift apart.
function populateStatKey() {
  const ul = document.querySelector(".intro-stat-key");
  if (!ul) return;
  const lowerFirst = (s) => (s ? s.charAt(0).toLowerCase() + s.slice(1) : s);
  ul.innerHTML = STAT_NAMES.map(
    (s) =>
      `<li><span class="key-stat">${STAT_LABELS[s]}</span> &mdash; ${lowerFirst(
        STAT_DESCRIPTIONS[s]
      )}</li>`
  ).join("");
}

// Inject the custom-difficulty starting-stat sliders into the setup screen.
function populateCustomStats() {
  const box = document.getElementById("custom-stats");
  if (!box) return;
  const legend = box.querySelector("legend");
  box.innerHTML = "";
  if (legend) box.appendChild(legend);
  for (const stat of STAT_NAMES) {
    const row = document.createElement("label");
    row.className = "custom-stat-row";
    row.innerHTML =
      `<span class="custom-stat-name">${STAT_LABELS[stat]}</span>` +
      `<input type="range" id="custom-${stat}" min="0" max="100" step="1" value="50" aria-label="${STAT_LABELS[stat]} starting value" />` +
      `<span class="custom-stat-val" id="custom-${stat}-val">50</span>`;
    const input = row.querySelector("input");
    const val = row.querySelector(".custom-stat-val");
    input.addEventListener("input", () => {
      val.textContent = input.value;
    });
    box.appendChild(row);
  }
}

// Show the custom sliders only when the Custom difficulty is selected, and keep
// their value read-outs in sync (e.g. after restoring saved settings).
function syncCustomStatsVisibility() {
  const box = document.getElementById("custom-stats");
  if (!box) return;
  const sel = document.querySelector('input[name="difficulty"]:checked');
  box.hidden = !(sel && sel.value === "custom");
  for (const stat of STAT_NAMES) {
    const i = document.getElementById(`custom-${stat}`);
    const v = document.getElementById(`custom-${stat}-val`);
    if (i && v) v.textContent = i.value;
  }
}

function init() {
  buildStatBars();
  buildTimeline();
  populateStatKey();
  populateCustomStats();
  loadProgress();
  applySavedSettings();
  syncCustomStatsVisibility();
  document.querySelectorAll('input[name="difficulty"]').forEach((r) =>
    r.addEventListener("change", syncCustomStatsVisibility)
  );

  // Audio preference
  state.audioEnabled = safeStorageGet(AUDIO_KEY) === "1";
  applyAudioPref();
  els.audioToggle.addEventListener("click", toggleAudio);
  els.conceptChip?.addEventListener("click", toggleConceptDef);
  if (state.audioEnabled) startMusic();

  // Try to restore saved game
  const restored = loadGame();
  let initialMode = "fresh";
  if (restored && state.reignStarted) {
    const rendered = renderRestoredView();
    if (rendered) {
      initialMode = "resume";
    } else {
      // Inconsistent save — drop it
      clearSave();
      resetReign();
    }
  }
  applyModifierClasses();
  renderStats();

  els.introBegin.addEventListener("click", () => {
    if (introMode === "fresh") {
      startFreshReign();
    } else if (introMode === "resume") {
      hideIntro();
    } else if (introMode === "return") {
      hideIntro();
    }
  });

  els.introSecondary.addEventListener("click", () => {
    clearSave();
    startFreshReign();
  });

  els.aboutLink.addEventListener("click", () => {
    if (state.reignStarted) {
      // Mid-reign: show the About/intro panel, but don't force the first-card
      // coachmark back over an in-progress game.
      showIntro({ mode: "return" });
    } else {
      forceTutorialOnIntroHide = true;
      showIntro({ mode: "fresh" });
    }
  });

  // Codex
  els.codexLink?.addEventListener("click", openCodex);
  els.introCodex?.addEventListener("click", openCodex);
  els.codexClose?.addEventListener("click", closeCodex);
  els.codex?.addEventListener("click", (e) => {
    if (e.target === els.codex) closeCodex();
  });

  setupSwipe();

  document.addEventListener("keydown", onKeydown);

  showIntro({ mode: initialMode });
}

// ------------------------------------------------------------------ //
// Concept chip, stat pulse, progress/codex, reign report, swipe       //
// ------------------------------------------------------------------ //

function setConceptChip(card) {
  if (!els.conceptChip) return;
  const concept = card && card.concept;
  if (!concept) {
    els.conceptChip.hidden = true;
    els.conceptChip.textContent = "";
    els.conceptChip.setAttribute("aria-expanded", "false");
    if (els.conceptDef) {
      els.conceptDef.hidden = true;
      els.conceptDef.textContent = "";
    }
    return;
  }
  els.conceptChip.textContent = concept;
  const def = CONCEPT_DEFS[concept] || "";
  els.conceptChip.title = def;
  els.conceptChip.hidden = false;
  els.conceptChip.setAttribute("aria-expanded", "false");
  if (els.conceptDef) {
    els.conceptDef.textContent = def;
    els.conceptDef.hidden = true; // revealed when the chip is tapped/clicked
  }
}

// Tap/click the concept chip to reveal its plain-language definition inline
// (mobile has no hover for the title tooltip).
function toggleConceptDef() {
  if (!els.conceptDef || !els.conceptDef.textContent) return;
  const show = els.conceptDef.hidden;
  els.conceptDef.hidden = !show;
  els.conceptChip.setAttribute("aria-expanded", String(show));
}

function pulseStat(stat) {
  if (reducedMotion() || !els.stats) return;
  const row = els.stats.querySelector(`[data-stat="${stat}"]`);
  if (!row) return;
  row.classList.remove("pulse");
  void row.offsetWidth; // restart the animation
  row.classList.add("pulse");
  row.addEventListener("animationend", () => row.classList.remove("pulse"), { once: true });
}

// --- Cross-reign progress (codex / endings / bests) ---

function loadProgress() {
  try {
    const d = JSON.parse(safeStorageGet(PROGRESS_KEY) || "{}");
    if (Array.isArray(d.concepts)) progress.concepts = d.concepts;
    if (Array.isArray(d.endings)) progress.endings = d.endings.filter((k) => ENDING_KINDS.includes(k));
    if (Number.isFinite(d.bestYears)) progress.bestYears = d.bestYears;
    if (Number.isFinite(d.reigns)) progress.reigns = d.reigns;
    if (Array.isArray(d.unlocked)) {
      progress.unlocked = d.unlocked.filter((id) => ACHIEVEMENTS.some((a) => a.id === id));
    }
  } catch {
    /* ignore */
  }
}
function saveProgress() {
  safeStorageSet(PROGRESS_KEY, JSON.stringify(progress));
}
function markConceptDiscovered(concept) {
  if (!concept || progress.concepts.includes(concept)) return;
  progress.concepts.push(concept);
  saveProgress();
}
function markEndingReached(kind) {
  if (!kind || progress.endings.includes(kind)) return;
  progress.endings.push(kind);
  saveProgress();
}
function recordReignResult() {
  progress.reigns += 1;
  const years = Math.min(state.cardsPlayed, state.reignLength);
  if (years > progress.bestYears) progress.bestYears = years;
  saveProgress();
}

// --- Settings (difficulty / daily) ---

function applySavedSettings() {
  try {
    const s = JSON.parse(safeStorageGet(SETTINGS_KEY) || "{}");
    const diff = ["lenient", "normal", "hard", "custom"].includes(s.difficulty)
      ? s.difficulty
      : "normal";
    state.difficulty = diff;
    const radio = document.querySelector(`input[name="difficulty"][value="${diff}"]`);
    if (radio) radio.checked = true;
    if (els.dailyToggle) els.dailyToggle.checked = !!s.daily;

    state.reignLength = clampReignLength(s.reignLength);
    const lenRadio = document.querySelector(
      `input[name="reign-length"][value="${state.reignLength}"]`
    );
    if (lenRadio) lenRadio.checked = true;

    state.customStart =
      s.customStart && typeof s.customStart === "object" ? s.customStart : null;
    if (state.customStart) {
      for (const stat of STAT_NAMES) {
        const el = document.getElementById(`custom-${stat}`);
        if (el && state.customStart[stat] != null) el.value = state.customStart[stat];
      }
    }

    state.modifiers = s.modifiers && typeof s.modifiers === "object" ? s.modifiers : {};
    for (const [k, v] of Object.entries(state.modifiers)) {
      const el = document.querySelector(`input[name="modifier"][value="${k}"]`);
      if (el) el.checked = !!v;
    }
  } catch {
    /* ignore */
  }
}

// Read the custom per-stat starting values from the setup UI (Phase 3.1 markup).
function readCustomStart() {
  if (state.difficulty !== "custom") return null;
  const out = {};
  let any = false;
  for (const stat of STAT_NAMES) {
    const el = document.getElementById(`custom-${stat}`);
    if (el) {
      out[stat] = Math.max(0, Math.min(100, Number(el.value) || 50));
      any = true;
    }
  }
  return any ? out : null;
}

// Read any opt-in run modifiers (mutators) checked in the setup UI.
function readModifiers() {
  const out = {};
  document.querySelectorAll('input[name="modifier"]:checked').forEach((el) => {
    out[el.value] = true;
  });
  return out;
}

function readReignSettings() {
  const checked = document.querySelector('input[name="difficulty"]:checked');
  state.difficulty = checked ? checked.value : "normal";
  const lenInput = document.querySelector('input[name="reign-length"]:checked');
  state.reignLength = lenInput ? clampReignLength(lenInput.value) : state.reignLength;
  state.customStart = readCustomStart();
  state.modifiers = readModifiers();
  state.daily = !!(els.dailyToggle && els.dailyToggle.checked);
  safeStorageSet(
    SETTINGS_KEY,
    JSON.stringify({
      difficulty: state.difficulty,
      daily: state.daily,
      reignLength: state.reignLength,
      customStart: state.customStart,
      modifiers: state.modifiers,
    })
  );
}

// --- Reign report (ending screen) + shareable result ---

// Composite reign score: longevity, learning, foresight, balance, ending bonus.
function reignScore(years, kind) {
  const avg = Math.round(
    STAT_NAMES.reduce((s, n) => s + state.stats[n], 0) / STAT_NAMES.length
  );
  const endingBonus = { prosperity: 60, survival: 30 }[kind] ?? 0;
  return (
    years * 4 + state.conceptsSeen.length * 3 + state.predictHits * 2 + avg + endingBonus
  );
}

// One-line read of how the reign was governed (which stat the choices favoured).
function dominantPolicyLine() {
  const net = Object.fromEntries(STAT_NAMES.map((s) => [s, 0]));
  for (const e of state.cardHistory) {
    for (const [s, d] of Object.entries(e.effects || {})) if (s in net) net[s] += d;
  }
  let best = null;
  let val = 0;
  for (const s of STAT_NAMES) {
    if (net[s] > val) {
      val = net[s];
      best = s;
    }
  }
  return best ? `Your reign favoured the ${STAT_LABELS[best]} above all.` : null;
}

function renderReignReport(kind, firstTime) {
  const existing = document.querySelector(".reign-report");
  if (existing) existing.remove();

  const wrap = document.createElement("div");
  wrap.className = "reign-report";
  const years = Math.min(state.cardsPlayed, state.reignLength);

  const addLine = (text, cls = "report-line") => {
    if (!text) return;
    const p = document.createElement("p");
    p.className = cls;
    p.textContent = text;
    wrap.appendChild(p);
  };

  if (firstTime) {
    addLine(`✦ New ending discovered — ${ENDING_TITLES[kind]}`, "report-banner");
  }

  // Earned titles (meta-progression).
  const ctx = {
    kind,
    years,
    fullTerm: years >= state.reignLength,
    difficulty: state.difficulty,
    predictTotal: state.predictTotal,
    predictHits: state.predictHits,
  };
  for (const a of checkAchievements(ctx)) {
    addLine(`★ Title earned — ${a.name}`, "report-banner report-title");
  }

  addLine(`Reign score: ${reignScore(years, kind)}`, "report-score");
  addLine(dominantPolicyLine());

  const totalConcepts = Object.keys(CONCEPT_DEFS).length;
  addLine(
    `${state.conceptsSeen.length} concepts encountered this reign. ` +
      `Collected ${progress.concepts.length}/${totalConcepts} concepts and ` +
      `${progress.endings.length}/${ENDING_KINDS.length} endings across ${progress.reigns} reigns.`
  );

  if (state.predictTotal > 0) {
    addLine(`Foresight: ${state.predictHits}/${state.predictTotal} predictions correct.`);
  }
  if (state.daily) {
    addLine(`Daily reign · ${dailyDateStr()}`);
  }

  const share = document.createElement("button");
  share.type = "button";
  share.className = "report-share";
  share.textContent = "Copy result";
  share.addEventListener("click", () => copyShare(kind, share));
  wrap.appendChild(share);

  els.options.parentNode.insertBefore(wrap, els.options);
}

function dailyDateStr() {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}
function buildShareText(kind) {
  const years = Math.min(state.cardsPlayed, state.reignLength);
  const bar = STAT_NAMES.map((s) => {
    const f = Math.max(0, Math.min(5, Math.round(state.stats[s] / 20)));
    return "▰".repeat(f) + "▱".repeat(5 - f);
  });
  const head = state.daily ? `Throne of Shirvan · Daily ${dailyDateStr()}` : "Throne of Shirvan";
  const diff = state.difficulty !== "normal" ? ` (${state.difficulty})` : "";
  return [
    head,
    `${ENDING_TITLES[kind]} — ${years} years${diff}`,
    `T ${bar[0]}  P ${bar[1]}  M ${bar[2]}`,
    `F ${bar[3]}  N ${bar[4]}`,
    `Concepts ${progress.concepts.length}/${Object.keys(CONCEPT_DEFS).length}`,
  ].join("\n");
}
function copyShare(kind, btn) {
  const text = buildShareText(kind);
  const done = () => {
    const old = btn.textContent;
    btn.textContent = "Copied!";
    setTimeout(() => (btn.textContent = old), 1500);
  };
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, () => fallbackCopy(text, done));
      return;
    }
  } catch {
    /* fall through */
  }
  fallbackCopy(text, done);
}
function fallbackCopy(text, done) {
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    done();
  } catch {
    /* ignore */
  }
}

// --- Codex ---

let codexOpen = false;
let codexReturnFocus = null;

function escHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildCodex() {
  if (!els.codexBody) return;
  const totalConcepts = Object.keys(CONCEPT_DEFS).length;
  const conceptNames = Object.keys(CONCEPT_DEFS).sort((a, b) => a.localeCompare(b));

  const conceptItems = conceptNames
    .map((name) => {
      const found = progress.concepts.includes(name);
      if (found) {
        return `<li class="codex-item found"><span class="codex-name">${escHtml(name)}</span><span class="codex-def">${escHtml(CONCEPT_DEFS[name])}</span></li>`;
      }
      return `<li class="codex-item locked"><span class="codex-name">？？？</span><span class="codex-def">Encountered when you play the card that teaches it.</span></li>`;
    })
    .join("");

  const endingItems = ENDING_KINDS.map((kind) => {
    const found = progress.endings.includes(kind);
    return `<li class="codex-item ${found ? "found" : "locked"}"><span class="codex-name">${found ? escHtml(ENDING_TITLES[kind]) : "？？？"}</span></li>`;
  }).join("");

  const titleItems = ACHIEVEMENTS.map((a) => {
    const got = progress.unlocked.includes(a.id);
    return `<li class="codex-item ${got ? "found" : "locked"}"><span class="codex-name">${got ? escHtml(a.name) : "？？？"}</span><span class="codex-def">${escHtml(a.desc)}</span></li>`;
  }).join("");

  els.codexBody.innerHTML = `
    <p class="codex-stats">
      <span>${progress.concepts.length}/${totalConcepts} concepts</span>
      <span>${progress.endings.length}/${ENDING_KINDS.length} endings</span>
      <span>${progress.unlocked.length}/${ACHIEVEMENTS.length} titles</span>
      <span>Longest reign: ${progress.bestYears} years</span>
    </p>
    <h3 class="codex-section">Concepts</h3>
    <ul class="codex-list">${conceptItems}</ul>
    <h3 class="codex-section">Endings</h3>
    <ul class="codex-list codex-endings">${endingItems}</ul>
    <h3 class="codex-section">Titles</h3>
    <ul class="codex-list">${titleItems}</ul>
  `;
}

function openCodex() {
  buildCodex();
  codexReturnFocus = document.activeElement;
  els.codex.hidden = false;
  codexOpen = true;
  els.app?.setAttribute("inert", "");
  if (!els.intro.hidden) els.intro.setAttribute("inert", "");
  els.codexClose?.focus();
}
function closeCodex() {
  if (!els.codex) return;
  els.codex.hidden = true;
  codexOpen = false;
  els.intro?.removeAttribute("inert");
  if (els.intro && els.intro.hidden) els.app?.removeAttribute("inert");
  if (codexReturnFocus && typeof codexReturnFocus.focus === "function") codexReturnFocus.focus();
}

// --- Swipe to choose (pointer drag on the card) ---

function setupSwipe() {
  const card = els.card;
  if (!card || typeof window.PointerEvent === "undefined") return;
  let startX = 0, startY = 0, dx = 0, dragging = false, active = false, pid = null;

  function clearTargets() {
    els.options.querySelectorAll(".swipe-target").forEach((b) => b.classList.remove("swipe-target"));
  }
  function clearDrag() {
    active = false;
    dragging = false;
    dx = 0;
    pid = null;
    card.removeAttribute("data-swiping");
    card.style.removeProperty("--swipe");
    card.style.transition = ""; // restore CSS transition (animates the snap-back)
    card.style.transform = "";
    clearTargets();
  }
  card.addEventListener("pointerdown", (e) => {
    if (reducedMotion()) return;
    if (codexOpen || !els.intro.hidden || tutorialActive) return;
    if (!(state.view === "question" || state.view === "result" || state.view === "ending")) return;
    if (e.target.closest && e.target.closest("button")) return; // let buttons be tapped
    active = true;
    dragging = false;
    startX = e.clientX;
    startY = e.clientY;
    dx = 0;
    pid = e.pointerId;
  });
  card.addEventListener("pointermove", (e) => {
    if (!active) return;
    dx = e.clientX - startX;
    if (!dragging) {
      if (Math.abs(dx) < 8) return;
      if (Math.abs(e.clientY - startY) > Math.abs(dx)) {
        active = false;
        return;
      }
      dragging = true;
      card.setAttribute("data-swiping", "");
      card.style.transition = "none";
      try {
        card.setPointerCapture(pid);
      } catch {
        /* ignore */
      }
    }
    const rot = Math.max(-10, Math.min(10, dx / 14));
    card.style.transform = `translateX(${dx}px) rotate(${rot}deg)`;
    card.style.setProperty("--swipe", String(Math.max(-1, Math.min(1, dx / SWIPE_THRESHOLD))));
    if (state.view === "question") {
      clearTargets();
      const tgt = els.options.querySelector(`button[data-option-index="${dx > 0 ? 0 : 1}"]`);
      tgt?.classList.add("swipe-target");
    }
  });
  function finish() {
    if (!active) return;
    const committed = dragging && Math.abs(dx) >= SWIPE_THRESHOLD;
    const dir = dx;
    const view = state.view;
    clearDrag();
    if (!committed) return;
    let btn = null;
    if (view === "question") {
      btn = els.options.querySelector(`button[data-option-index="${dir > 0 ? 0 : 1}"]`);
    } else {
      btn = els.options.querySelector('button[data-continue="true"]');
    }
    btn?.click();
  }
  card.addEventListener("pointerup", finish);
  card.addEventListener("pointercancel", clearDrag);
}

init();
