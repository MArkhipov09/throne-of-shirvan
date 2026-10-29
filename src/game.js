import { cards } from "../content/cards.js";
import { crises } from "../content/crises.js";
import { concepts as CONCEPT_DEFS, conceptMeta as CONCEPT_META } from "../content/concepts.js";
import { glossary, glossaryAliases } from "../content/glossary.js";
import { conceptDiagram, htmlLabel } from "./diagrams.js";

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

// Display names for the recurring characters (dashboard court roster).
const CHARACTER_NAMES = {
  vizier: "Vizier Farrukh",
  qadi: "Qadi Mahmud",
  tahmina: "Tahmina of Shamakhi",
  general: "General Farrukhzad",
  envoy: "Envoy Toghan",
  astronomer: "Astronomer Bahram",
  spymaster: "The Spymaster",
  queenmother: "Dowager Banu",
  caravan: "Caravan-Master Eldar",
};

// Player-readable descriptions of the delayed-consequence flags, shown in the
// dashboard under "Matters standing" once set. Keys match option.flag values.
const FLAG_LABELS = {
  "sold-genoese": "<b>The Genoese</b> hold the Absheron naphtha concession.",
  "debased-coin": "<b>The dinar</b> runs light; the bazaar weighs your coin.",
  "granted-monopoly": "<b>Tahmina's house</b> holds the sole carriage of the silk.",
  "kept-market-open": "<b>The Baku wharf</b> stays open to all buyers.",
};

// Why a delayed-consequence card has turned up, shown above its scenario so the
// link back to the earlier choice is not lost. Keys are card ids.
const CHAIN_CAUSES = {
  "genoese-return": "This follows from the naphtha concession you sold the Genoese.",
  "recoinage-reckoning": "This follows from the light dinar you struck.",
  "monopoly-reckoning": "This follows from the silk monopoly you granted Tahmina's house.",
  "open-port-rivals": "This follows from keeping the silk trade open to all buyers.",
};

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
  "recoinage-reckoning": "official",
  "monopoly-reckoning": "merchant",
  "open-port-rivals": "official",
};

const STAT_DESCRIPTIONS = {
  treasury: "Your dinars and trade revenue.",
  people: "Welfare and loyalty.",
  military: "Garrison and walls.",
  faith: "Clerical favour and religious balance.",
  naphtha: "The Absheron oil. High reserves pay the treasury a little each year; dry seeps bleed it.",
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
    "The full term served, the granaries full and the customs books in order. The Genoese still anchor at Shamakhi, and the mosque you funded carries your name. Later chroniclers measure their Shirvanshahs against your reign, the way every Shirvanshah after Khalilullah was measured against his.",
  survival:
    "The full term served, and the throne set down in one piece. The realm is thinner than your father's, the silk trade reduced, the tribute to whatever suzerain is current a fixed line in the books. Ibrahim I survived Timur and the Qara Yusuf ransom by exactly this kind of careful diminishment, and the next Shirvanshah inherits a kingdom rather than a ruin.",
  conquest:
    "The walls failed before the year was out. The treasury had been empty for months when the cavalry appeared at the western gate, and the garrison had no reason to die for a court that could not pay them. The chronicles of the 1240s keep short entries for realms like yours, the ones that emptied themselves before the rider arrived.",
  revolt:
    "The Qadi led the procession to the palace gate. The household guard neither opened the doors nor barred them. The chronicler is not sure whether you died, fled, or ruled in name for another year in someone else's hand. The dynasty resumes under your nephew, the way it resumed after the vizier Rashid al-Din's execution in 1318.",
  darkness:
    "The last of the seeps gave out, the lamps of Baku went dark, and the customs books the white oil had filled fell silent. Nothing replaced it. The reign ended quietly, in one cold and unlit winter.",
  gilded:
    "The vaults could not be shut for the weight of silver in them, and every chief from the Daghestan passes to the Volga mouth heard the count. You held the richest court in the Caucasus for exactly as long as it took the riders to reach it.",
  praetorian:
    "The garrison was better paid, better drilled, and more numerous than anything that could check it, and one morning the household guard simply took its orders from the barracks. An army with nothing left to fight had stopped asking the throne what to do. The Shirvanshahs who lasted kept their soldiers a little hungry.",
  tribune:
    "The crowds that filled the maidan to bless your name found they could fill it for any reason at all, and a Shah beloved past restraint is one the city no longer thinks it needs. They carried someone else through the gate on their shoulders and scarcely noticed you were gone.",
  theocracy:
    "You gave the mosque everything it asked and a little more, and authority once given is rarely returned. The Qadi's word came to carry further than the Shah's; the palace only sealed what the great mosque had already ruled. You reigned, at the last, as the most pious clerk in your own court.",
  inferno:
    "The seeps were stocked past anything the trenches could safely hold, and the Absheron night turned to noon when they caught. The fire walked from pool to pool faster than men could run, and the smoke stood visible from Derbent.",
};

// What the chronicle calls you, shown on the ending screen. A fallen reign is
// named for how it fell; a full term for the stat left strongest (60 or more).
const FALLEN_EPITHETS = {
  conquest: "the Unready",
  revolt: "the Deposed",
  darkness: "the Unlit",
  gilded: "the Hoarder",
  praetorian: "the Outranked",
  tribune: "the Overpraised",
  theocracy: "the Clerk",
  inferno: "the Burned",
};
const FULL_TERM_EPITHETS = {
  treasury: "the Thrifty",
  people: "the Well-Loved",
  military: "the Wall-Builder",
  faith: "the Devout",
  naphtha: "the Lamp-Keeper",
};
const PLAIN_EPITHETS = { prosperity: "the Even-Handed", survival: "the Careful" };

function epithetFor(kind) {
  if (FALLEN_EPITHETS[kind]) return FALLEN_EPITHETS[kind];
  let best = null;
  for (const stat of STAT_NAMES) {
    if (state.stats[stat] >= 60 && (!best || state.stats[stat] > state.stats[best])) best = stat;
  }
  return best ? FULL_TERM_EPITHETS[best] : PLAIN_EPITHETS[kind] || PLAIN_EPITHETS.survival;
}

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
  return (
    `Year ${toRoman(state.cardsPlayed)} · ` +
    `Treasury ${treasury} · People ${people} · Military ${military} · Faith ${faith} · Naphtha ${naphtha}`
  );
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
const SFX_KEY = "throne-of-shirvan-sfx";
const PROGRESS_KEY = "throne-of-shirvan-progress";
const SETTINGS_KEY = "throne-of-shirvan-settings";
const THEME_KEY = "throne-of-shirvan-theme";

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
const progress = {
  concepts: [],
  endings: [],
  bestYears: 0,
  bestScore: 0,
  reigns: 0,
  unlocked: [],
  tutorialSeen: false,
};

// Optional goals for a single reign. Three are drawn when it begins and listed
// in the dashboard; each one met adds AMBITION_SCORE to the reign score.
//   "end":   judged once, and only if the reign runs its full term
//   "never": lost the moment `broken` holds; met if it survives the full term
//   "reach": met the moment `test` holds, at any point in the reign
// No two ambitions drawn for a reign share a `group`, so they never contradict.
const AMBITION_SCORE = 25;
const AMBITION_COUNT = 3;
const WARM_AFFINITY = 3;
const DEVOTED_AFFINITY = 6;
const AMBITIONS = [
  { id: "full-treasury", kind: "end", group: "treasury",
    text: "Finish the reign with Treasury at 65 or more.",
    test: (s) => s.stats.treasury >= 65 },
  { id: "content-people", kind: "end", group: "people",
    text: "Finish the reign with People at 65 or more.",
    test: (s) => s.stats.people >= 65 },
  { id: "strong-walls", kind: "end", group: "military",
    text: "Finish the reign with Military at 65 or more.",
    test: (s) => s.stats.military >= 65 },
  { id: "kept-faith", kind: "end", group: "faith",
    text: "Finish the reign with Faith at 65 or more.",
    test: (s) => s.stats.faith >= 65 },
  { id: "full-seeps", kind: "end", group: "naphtha",
    text: "Finish the reign with Naphtha at 50 or more.",
    test: (s) => s.stats.naphtha >= 50 },
  { id: "treasury-floor", kind: "never", group: "treasury",
    text: "Never let Treasury fall below 30.",
    broken: (s) => s.stats.treasury < 30 },
  { id: "people-floor", kind: "never", group: "people",
    text: "Never let People fall below 30.",
    broken: (s) => s.stats.people < 30 },
  { id: "naphtha-floor", kind: "never", group: "naphtha",
    text: "Never let Naphtha fall below 30.",
    broken: (s) => s.stats.naphtha < 30 },
  { id: "warm-court", kind: "end", group: "court",
    text: "Finish the reign with three courtiers Warm or better.",
    test: (s) => CHARACTER_KEYS.filter((k) => s.affinity[k] >= WARM_AFFINITY).length >= 3 },
  { id: "devotion", kind: "reach", group: "court",
    text: "Bring one courtier to Devoted.",
    test: (s) => CHARACTER_KEYS.some((k) => s.affinity[k] >= DEVOTED_AFFINITY) },
  { id: "no-crisis", kind: "never", group: "crisis",
    text: "Reach the final year without a crisis.",
    broken: (s) => s.crisesMet > 0 },
  { id: "outlast-crisis", kind: "end", group: "crisis",
    text: "Meet a crisis and still reach the final year.",
    test: (s) => s.crisesMet > 0 },
];
const AMBITION_BY_ID = Object.fromEntries(AMBITIONS.map((a) => [a.id, a]));

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
  viewOutcome: null, // what the last choice changed, for the result view
  endingInfo: null,
  cardHistory: [],
  warningActive: defaultWarningActive(),
  audioEnabled: false,
  sfxEnabled: true,
  ambitions: [], // [{ id, status: "open" | "met" | "failed" }]
  crisesMet: 0,
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

// --- Sound effects (synthesised; no audio files) ---

// Each sound is a list of notes: [frequency, { to, dur, type, gain, at }].
// `to` glides the pitch; `at` delays the note in seconds. SFX_VOLUME scales
// every cue at once: raise or lower it to taste, 0 silences them all.
const SFX_VOLUME = 1.4;
const SFX = {
  deal: [[300, { to: 220, dur: 0.07, type: "triangle", gain: 0.05 }]],
  tick: [[420, { to: 380, dur: 0.04, gain: 0.04 }]],
  up: [[523, { dur: 0.13 }], [784, { dur: 0.2, at: 0.07 }]],
  down: [[392, { dur: 0.15, type: "triangle" }], [294, { dur: 0.24, type: "triangle", at: 0.08 }]],
  even: [[440, { dur: 0.16 }]],
  crisis: [[140, { to: 48, dur: 0.3, gain: 0.16 }], [140, { to: 48, dur: 0.36, gain: 0.16, at: 0.24 }]],
  audience: [[880, { dur: 0.9, gain: 0.06 }], [1320, { dur: 0.7, gain: 0.03 }], [2640, { dur: 0.35, gain: 0.012 }]],
  met: [[784, { dur: 0.11 }], [1047, { dur: 0.11, at: 0.08 }], [1319, { dur: 0.26, at: 0.16 }]],
  endFull: [
    [262, { dur: 0.3 }], [330, { dur: 0.3, at: 0.14 }],
    [392, { dur: 0.3, at: 0.28 }], [523, { dur: 0.7, at: 0.42 }],
  ],
  endFallen: [
    [220, { dur: 0.4, type: "triangle", gain: 0.09 }],
    [175, { dur: 0.4, type: "triangle", gain: 0.09, at: 0.22 }],
    [147, { dur: 0.9, type: "triangle", gain: 0.09, at: 0.44 }],
  ],
};

let sfxCtx = null;

function playSfx(name) {
  if (!state.sfxEnabled || !SFX[name] || SFX_VOLUME <= 0) return;
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    if (!sfxCtx) sfxCtx = new Ctx();
    if (sfxCtx.state === "suspended") sfxCtx.resume();
    for (const [freq, opts] of SFX[name]) {
      const { to = freq, dur = 0.12, type = "sine", gain = 0.07, at = 0 } = opts;
      const t = sfxCtx.currentTime + at;
      const osc = sfxCtx.createOscillator();
      const amp = sfxCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, t);
      if (to !== freq) osc.frequency.exponentialRampToValueAtTime(to, t + dur);
      amp.gain.setValueAtTime(0.0001, t);
      amp.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain * SFX_VOLUME), t + 0.012);
      amp.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      osc.connect(amp).connect(sfxCtx.destination);
      osc.start(t);
      osc.stop(t + dur + 0.03);
    }
  } catch {
    /* audio is decoration; never let it break a turn */
  }
}

function applySfxPref() {
  if (!els.sfxToggle) return;
  els.sfxToggle.setAttribute("aria-pressed", state.sfxEnabled ? "true" : "false");
  els.sfxToggle.setAttribute(
    "aria-label",
    state.sfxEnabled ? "Sound effects: on" : "Sound effects: off"
  );
}

function toggleSfx() {
  state.sfxEnabled = !state.sfxEnabled;
  safeStorageSet(SFX_KEY, state.sfxEnabled ? "1" : "0");
  applySfxPref();
  playSfx("tick");
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
    viewOutcome: state.viewOutcome,
    endingInfo: state.endingInfo,
    cardHistory: state.cardHistory,
    warningActive: state.warningActive,
    ambitions: state.ambitions,
    crisesMet: state.crisesMet,
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
    state.viewOutcome =
      data.viewOutcome && typeof data.viewOutcome === "object" ? data.viewOutcome : null;
    state.endingInfo = data.endingInfo || null;
    state.cardHistory = Array.isArray(data.cardHistory) ? data.cardHistory : [];
    // Saves from before ambitions existed simply carry none.
    state.ambitions = Array.isArray(data.ambitions)
      ? data.ambitions.filter((a) => a && AMBITION_BY_ID[a.id])
      : [];
    state.crisesMet = Number(data.crisesMet) || 0;
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
  sfxToggle: document.getElementById("sfx-toggle"),
  cardCause: document.getElementById("card-cause"),
  outcome: document.getElementById("outcome"),
  counsel: document.getElementById("counsel"),
  ambitions: document.getElementById("ambitions"),
  ambitionsList: document.getElementById("ambitions-list"),
  codexCount: document.getElementById("codex-count"),
  introOptions: document.getElementById("intro-options"),
  introSummary: document.getElementById("intro-summary"),
  introHelp: document.getElementById("intro-help"),
  help: document.getElementById("help"),
  helpClose: document.getElementById("help-close"),
  helpTour: document.getElementById("help-tour"),
  helpTitle: document.getElementById("help-title"),
  reign: document.querySelector(".reign"),
  app: document.getElementById("app"),
  conceptChip: document.getElementById("concept-chip"),
  conceptDef: document.getElementById("concept-def"),
  conceptFigure: document.getElementById("concept-figure"),
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
    `Your standing with ${card.speaker}: ${word}, ${sign}${value} of 10`
  );
  els.affinity.title = `Your standing with ${card.speaker}: ${word} (${sign}${value})`;
  els.affinity.hidden = false;
}

// --- Theme (basalt / sandstone) ---

function storedTheme() {
  const v = safeStorageGet(THEME_KEY);
  return v === "light" || v === "dark" ? v : null;
}

function effectiveTheme() {
  const pref = storedTheme();
  if (pref) return pref;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function applyTheme() {
  const pref = storedTheme();
  const root = document.documentElement;
  if (pref) root.dataset.theme = pref;
  else delete root.dataset.theme;
  const effective = effectiveTheme();
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.setAttribute(
      "aria-label",
      effective === "dark" ? "Switch to light" : "Switch to dark"
    );
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", effective === "dark" ? "#211c16" : "#e9e0ca");
}

function toggleTheme() {
  const next = effectiveTheme() === "dark" ? "light" : "dark";
  safeStorageSet(THEME_KEY, next);
  applyTheme();
}

// --- Stat bars ---

function buildStatBars() {
  els.stats.innerHTML = STAT_NAMES.map(
    (name) => `
      <li class="stat" data-stat="${name}" data-tooltip="${STAT_DESCRIPTIONS[name]}" tabindex="0" aria-label="${name}: 50 of 100. ${STAT_DESCRIPTIONS[name]}">
        <span class="stat-name" aria-hidden="true">${name}</span>
        <div class="stat-track" aria-hidden="true"><div class="stat-fill"></div><div class="stat-ghost"></div><div class="stat-mark"></div></div>
        <span class="stat-value" aria-hidden="true">0</span>
      </li>`
  ).join("");
}

// The year the player is deciding. A plain card opens the next year; a crisis
// interrupts the year just played, and a result belongs to the year it closed.
function currentYear() {
  const opening =
    state.view === "question" && state.activeCard && state.activeCard.triggerStat === undefined;
  return Math.max(1, Math.min(state.cardsPlayed + (opening ? 1 : 0), state.reignLength));
}

function renderStats() {
  clearGaugePreview();
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
  els.cardsPlayed.textContent = currentYear();
  if (els.reignLength) els.reignLength.textContent = state.reignLength;
  // Flag the final year of the reign so the last decision feels weighty.
  const finalYear =
    state.reignStarted &&
    state.view !== "ending" &&
    state.cardsPlayed >= state.reignLength - 1;
  els.reign?.classList.toggle("final-year", finalYear);
  updateTimeline();
  renderCounsel();
  renderDashboard();
}

// --- Gauge preview: where a choice would leave each stat ---

// Show, on the gauges themselves, what option `index` of the active card would do.
function showGaugePreview(index) {
  const card = state.activeCard;
  const option = card && state.view === "question" ? card.options[index] : null;
  if (!option || (state.modifiers && state.modifiers.predict)) return;
  const { stats } = projectChoice(card, option);
  for (const name of STAT_NAMES) {
    const row = els.stats.querySelector(`[data-stat="${name}"]`);
    const ghost = row.querySelector(".stat-ghost");
    const from = state.stats[name];
    const to = stats[name];
    const moved = to !== from;
    row.classList.toggle("previewing", moved);
    row.classList.toggle("preview-up", to > from);
    row.classList.toggle("preview-down", to < from);
    row.classList.toggle("preview-fatal", moved && (to <= 0 || to >= 100));
    ghost.style.left = `${Math.min(from, to)}%`;
    ghost.style.width = `${Math.abs(to - from)}%`;
    row.querySelector(".stat-mark").style.left = `${to}%`;
    row.querySelector(".stat-value").textContent = to;
  }
  els.stats.classList.add("previewing");
}

function clearGaugePreview() {
  if (!els.stats.classList.contains("previewing")) return;
  els.stats.classList.remove("previewing");
  for (const name of STAT_NAMES) {
    const row = els.stats.querySelector(`[data-stat="${name}"]`);
    row.classList.remove("previewing", "preview-up", "preview-down", "preview-fatal");
    row.querySelector(".stat-ghost").style.width = "0";
    row.querySelector(".stat-value").textContent = state.stats[name];
  }
}

// --- Counsel: a plain warning when a stat nears either end ---

function renderCounsel() {
  if (!els.counsel) return;
  const low = [];
  const high = [];
  if (state.reignStarted && state.view !== "ending") {
    for (const name of STAT_NAMES) {
      if (state.stats[name] < WARN_LOW) low.push(STAT_LABELS[name]);
      else if (state.stats[name] > WARN_HIGH) high.push(STAT_LABELS[name]);
    }
  }
  const named = (list, word) =>
    `${list.length > 1 ? `${list.slice(0, -1).join(", ")} and ${list[list.length - 1]} are` : `${list[0]} is`} ${word}`;
  const parts = [];
  if (low.length) parts.push(named(low, "low"));
  if (high.length) parts.push(named(high, "high"));
  // A new player expects 0 to be fatal and does not expect 100 to be; say both.
  const rule =
    low.length && high.length
      ? "The reign ends at 0 or at 100."
      : low.length
        ? "At 0 the reign ends."
        : "At 100 the reign ends.";
  els.counsel.textContent = parts.length ? `${parts.join("; ")}. ${rule}` : "";
  els.counsel.hidden = parts.length === 0;
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
  // The reign length is chosen on the title screen, after the first build.
  if (els.timeline.children.length !== state.reignLength) buildTimeline();
  const notches = els.timeline.querySelectorAll(".tl-notch");
  const live = state.reignStarted && state.view !== "ending";
  const year = currentYear();
  notches.forEach((n, i) => {
    n.classList.toggle("filled", i < state.cardsPlayed);
    n.classList.toggle("current", live && i === year - 1 && i >= state.cardsPlayed);
  });
}

// --- Ambitions ---

function ambitionStatus(id) {
  return state.ambitions.find((a) => a.id === id)?.status ?? null;
}

// Draw this reign's ambitions. Uses the reign's own random source, so a Daily
// reign sets every player the same three.
function drawAmbitions() {
  const pool = shuffle(AMBITIONS).filter((a) => !(a.kind === "never" && a.broken(state)));
  const picked = [];
  for (const a of pool) {
    if (picked.length >= AMBITION_COUNT) break;
    if (picked.some((p) => p.group === a.group)) continue;
    picked.push(a);
  }
  state.ambitions = picked.map((a) => ({ id: a.id, status: "open" }));
}

// Re-judge the open ambitions after a choice. With `final`, the reign is over
// and everything still open is settled one way or the other. Returns the
// ambitions whose status changed, as [{ id, status }].
function updateAmbitions(final = false, fullTerm = false) {
  const changed = [];
  for (const entry of state.ambitions) {
    if (entry.status !== "open") continue;
    const a = AMBITION_BY_ID[entry.id];
    let next = "open";
    if (a.kind === "never" && a.broken(state)) next = "failed";
    else if (a.kind === "reach" && a.test(state)) next = "met";
    else if (final) {
      if (a.kind === "never") next = fullTerm ? "met" : "failed";
      else next = a.kind === "end" && fullTerm && a.test(state) ? "met" : "failed";
    }
    if (next !== "open") {
      entry.status = next;
      changed.push({ id: entry.id, status: next });
    }
  }
  return changed;
}

function renderAmbitions() {
  if (!els.ambitions || !els.ambitionsList) return;
  // The ending's own recap lists them, with what each was worth.
  if (!state.reignStarted || state.ambitions.length === 0 || state.view === "ending") {
    els.ambitions.hidden = true;
    els.ambitionsList.innerHTML = "";
    return;
  }
  els.ambitionsList.innerHTML = state.ambitions
    .map((entry) => {
      const a = AMBITION_BY_ID[entry.id];
      const note = entry.status === "met" ? "Met" : entry.status === "failed" ? "Lost" : "";
      return (
        `<li class="ambition" data-status="${entry.status}">` +
        `<span class="ambition-text">${escHtml(a.text)}</span>` +
        (note ? `<span class="ambition-note">${note}</span>` : "") +
        `</li>`
      );
    })
    .join("");
  els.ambitions.hidden = false;
}

// --- Dashboard: court roster, standing matters, last chronicle line ---

// Characters appear on the roster once their affinity has moved off zero.
function renderCourt() {
  const wrap = document.getElementById("court");
  const list = document.getElementById("court-list");
  if (!wrap || !list) return;
  const known = CHARACTER_KEYS.filter((k) => (state.affinity[k] ?? 0) !== 0);
  if (!state.reignStarted || known.length === 0) {
    wrap.hidden = true;
    list.innerHTML = "";
    return;
  }
  list.innerHTML = known
    .map((k) => {
      const v = state.affinity[k] ?? 0;
      const filled = Math.min(5, Math.ceil(Math.abs(v) / 2));
      const cls = v > 0 ? "on" : "off";
      const pips = Array.from(
        { length: 5 },
        (_, i) => `<i class="${i < filled ? cls : ""}"></i>`
      ).join("");
      const word = affinityWord(v);
      return (
        `<li class="court-row" title="${word} (${v > 0 ? "+" : ""}${v})">` +
        `<img src="assets/portraits/${k}-256.png" alt="" loading="lazy" />` +
        `<span class="court-name">${CHARACTER_NAMES[k] ?? k}</span>` +
        `<span class="court-pips" aria-label="${word}">${pips}</span></li>`
      );
    })
    .join("");
  wrap.hidden = false;
}

function renderMatters() {
  const wrap = document.getElementById("matters");
  const list = document.getElementById("matters-list");
  if (!wrap || !list) return;
  const known = (state.flags || []).filter((f) => FLAG_LABELS[f]);
  if (!state.reignStarted || known.length === 0) {
    wrap.hidden = true;
    list.innerHTML = "";
    return;
  }
  list.innerHTML = known.map((f) => `<li>${FLAG_LABELS[f]}</li>`).join("");
  wrap.hidden = false;
}

function renderLastEntry() {
  const el = document.getElementById("last-entry");
  if (!el) return;
  const history = state.cardHistory || [];
  const last = history[history.length - 1];
  if (!state.reignStarted || !last || state.view === "ending") {
    el.hidden = true;
    el.textContent = "";
    return;
  }
  el.textContent = `Last year: ${last.optionLabel}`;
  el.hidden = false;
}

function renderCodexCount() {
  if (!els.codexCount) return;
  els.codexCount.textContent = `${progress.concepts.length}/${Object.keys(CONCEPT_DEFS).length}`;
}

function renderDashboard() {
  renderAmbitions();
  renderCourt();
  renderMatters();
  renderLastEntry();
  renderCodexCount();
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

// A fresh shuffle of the decision cards. Outside Daily mode (whose order must be
// the same for everyone) cards teaching a concept not yet in the Codex are dealt
// first, so a second reign is not a rerun of the first.
function buildDeck() {
  const deck = shuffle(decisionCards);
  if (state.daily) return deck;
  const isNew = (c) => c.concept && !progress.concepts.includes(c.concept);
  return [...deck.filter(isNew), ...deck.filter((c) => !isNew(c))];
}

function drawFromDeck() {
  let guard = 0;
  while (guard++ < decisionCards.length * 3) {
    // Take the first card that may be played; one still waiting on its flag
    // keeps its place rather than being thrown away.
    const i = state.deck.findIndex(cardEligible);
    if (i !== -1) return state.deck.splice(i, 1)[0];
    state.deck = buildDeck();
  }
  return decisionCards.find(cardEligible) || decisionCards[0];
}

// When a choice sets a flag, bring the card that answers it forward so the
// consequence arrives a few years on, not whenever the shuffle allows (or never).
function scheduleConsequences(flag) {
  const played = new Set(state.cardHistory.map((h) => h.cardId));
  const due = decisionCards.filter((c) => c.requires === flag && !played.has(c.id));
  // Three to five cards down, varied by the year so it is not clockwork, and
  // derived from the reign itself so a Daily reign stays the same for everyone.
  const delay = 3 + (state.cardsPlayed % 3);
  for (const card of due) {
    state.deck = state.deck.filter((c) => c.id !== card.id);
    state.deck.splice(Math.min(delay, state.deck.length), 0, card);
  }
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

function clampStat(v) {
  return Math.max(0, Math.min(100, v));
}

// What a choice would do to the stats, without doing it. The gauge preview and
// chooseOption both read this, so what is promised and what happens cannot differ.
function projectChoice(card, option) {
  const stats = { ...state.stats };
  for (const [stat, delta] of Object.entries(option.effects ?? {})) {
    if (stat in stats) stats[stat] = clampStat(stats[stat] + applyVolatile(delta));
  }
  // Passive "naphtha rent": a well-stocked field quietly funds the treasury;
  // a depleted one bleeds it through imported oil and lamp-fuel. Subtle (±1),
  // so it rewards conserving naphtha without dominating the ledger. A crisis
  // interrupts a year rather than closing one, so it carries no rent.
  let rent = 0;
  if (card.triggerStat === undefined) {
    const before = stats.treasury;
    if (stats.naphtha >= 75) stats.treasury = clampStat(before + 1);
    else if (stats.naphtha <= 25) stats.treasury = clampStat(before - 1);
    rent = stats.treasury - before;
  }
  return { stats, rent };
}

function buildOptionPreview(card, option) {
  const effects = option.effects || {};
  const wrap = document.createElement("span");
  wrap.className = "option-preview";
  const addChip = (text, cls = "") => {
    const chip = document.createElement("span");
    chip.className = `option-preview-chip ${cls}`.trim();
    chip.textContent = text;
    wrap.appendChild(chip);
  };
  let anyChip = false;
  for (const stat of STAT_NAMES) {
    const v = applyVolatile(effects[stat]);
    if (!v) continue;
    anyChip = true;
    addChip(`${stat} ${v > 0 ? "+" : "−"}${Math.abs(v)}`, v > 0 ? "positive" : "negative");
  }
  if (!anyChip) addChip("no stat change");
  const { stats, rent } = projectChoice(card, option);
  if (rent) addChip(`naphtha rent ${rent > 0 ? "+" : "−"}${Math.abs(rent)}`, "rent");
  if (STAT_NAMES.some((s) => stats[s] <= 0 || stats[s] >= 100)) addChip("ends the reign", "fatal");
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

// One line above the scenario saying why this card has come up, for the cards
// that are consequences of something: a crisis, a courtier's arc, a flag.
function causeFor(card) {
  if (card.triggerStat) {
    const label = STAT_LABELS[card.triggerStat];
    return card.triggerDirection === "low"
      ? `${label} has fallen below ${crisisLow()}.`
      : `${label} has risen above ${crisisHigh()}.`;
  }
  if (card.arcCharacter) {
    const name = CHARACTER_NAMES[card.arcCharacter] ?? card.arcCharacter;
    return card.arcAffinityDirection === "high"
      ? `Your standing with ${name} is high enough to bring this.`
      : `Your standing with ${name} is low enough to bring this.`;
  }
  return CHAIN_CAUSES[card.id] || null;
}

function renderCause(card) {
  const text = card ? causeFor(card) : null;
  els.cardCause.textContent = text || "";
  els.cardCause.hidden = !text;
}

// The header every card view shares: who is speaking, why, and what they said.
function renderCardFrame(card) {
  renderEmblem(card);
  els.card.classList.remove("ending");
  delete els.card.dataset.endingKind;
  els.card.dataset.cardType = cardTypeOf(card);
  els.speaker.textContent = card.speaker;
  els.speaker.dataset.speakerType = card.speakerType ?? "one-off";
  renderAffinity(card);
  renderCause(card);
  els.scenario.innerHTML = glossify(card.scenario);
}

// The single primary action under a result or an ending.
function continueButton(text, onClick) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.dataset.continue = "true";
  const label = document.createElement("span");
  label.className = "option-label";
  label.textContent = text;
  const hint = document.createElement("span");
  hint.className = "key-hint key-hint-continue";
  hint.setAttribute("aria-hidden", "true");
  hint.innerHTML = "&#x21B5;";
  btn.appendChild(label);
  btn.appendChild(hint);
  btn.addEventListener("click", onClick);
  return btn;
}

function renderCardImmediate(card) {
  removeChronicle();
  document.querySelector(".reign-report")?.remove();
  state.activeCard = card;
  state.view = "question";
  state.viewExplanation = "";
  state.viewOutcome = null;
  state.endingInfo = null;
  els.card.dataset.view = "question";
  renderCardFrame(card);
  els.explanation.hidden = true;
  els.explanation.textContent = "";
  renderOutcome();
  setConceptChip(null);
  state.lastPrediction = null;
  document.getElementById("predict-feedback")?.remove();
  applyModifierClasses();

  els.options.innerHTML = "";
  els.options.dataset.layout = "pair";
  card.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.optionIndex = String(index);
    // The first answer sits on the left and the second on the right, which is
    // also the way the card is swiped and the way the arrow keys point.
    const keyHint = document.createElement("span");
    keyHint.className = "key-hint";
    keyHint.setAttribute("aria-hidden", "true");
    keyHint.innerHTML =
      `<span class="key-hint-key">${index + 1}</span>` +
      `<span class="key-hint-swipe">${index === 0 ? "&larr;" : "&rarr;"}</span>`;
    const optionLabel = document.createElement("span");
    optionLabel.className = "option-label";
    optionLabel.textContent = option.label;
    button.appendChild(keyHint);
    button.appendChild(optionLabel);
    button.appendChild(buildOptionPreview(card, option));
    button.addEventListener("click", () => onOptionChosen(index));
    button.addEventListener("pointerenter", () => showGaugePreview(index));
    button.addEventListener("pointerleave", clearGaugePreview);
    button.addEventListener("focus", () => showGaugePreview(index));
    button.addEventListener("blur", clearGaugePreview);
    els.options.appendChild(button);
  });

  renderStats();
  // Focus goes to the card, not to an answer: a focused answer would light up
  // its preview on the gauges before the player had looked at either.
  els.card.focus({ preventScroll: true });
  dealIn();
  saveGame();
  maybeShowTutorial();
}

// Everything under the scenario once a choice is made: what it changed, the
// concept it teaches, the essay, and the way onward.
function renderResultBody(card) {
  els.card.dataset.view = "result";
  clearGaugePreview();
  els.explanation.innerHTML = glossify(state.viewExplanation);
  els.explanation.hidden = false;
  renderOutcome();
  setConceptChip(card, !!state.viewOutcome?.newConcept);
  renderPredictFeedback();

  els.options.innerHTML = "";
  delete els.options.dataset.layout;
  const next = continueButton("Continue", renderCard);
  els.options.appendChild(next);
  next.focus({ preventScroll: true });
}

function renderResultViewImmediate(card, explanationText) {
  removeChronicle();
  state.activeCard = card;
  state.view = "result";
  state.viewExplanation = explanationText || "";
  state.endingInfo = null;
  renderCardFrame(card);
  renderResultBody(card);
  renderStats();
}

// --- Outcome: what the last choice changed, in plain terms ---

function reactionPhrase(r) {
  const name = CHARACTER_NAMES[r.character] ?? r.character;
  const verb =
    r.delta >= 2 ? "is pleased" : r.delta > 0 ? "approves" : r.delta <= -2 ? "is angered" : "disapproves";
  return `${name} ${verb}${r.word ? `, now ${r.word}` : ""}.`;
}

function renderOutcome() {
  const o = state.viewOutcome;
  if (!els.outcome) return;
  els.outcome.innerHTML = "";
  if (!o || state.view !== "result") {
    els.outcome.hidden = true;
    return;
  }
  const line = (label, text, cls = "") => {
    const p = document.createElement("p");
    p.className = `outcome-line ${cls}`.trim();
    const tag = document.createElement("span");
    tag.className = "outcome-label";
    tag.textContent = label;
    const body = document.createElement("span");
    body.className = "outcome-text";
    body.textContent = text;
    p.appendChild(tag);
    p.appendChild(body);
    els.outcome.appendChild(p);
    return body;
  };

  line("Your decree", o.label, "outcome-decree");

  const stats = document.createElement("ul");
  stats.className = "outcome-stats";
  for (const c of o.changes || []) {
    const li = document.createElement("li");
    if (!STAT_LABELS[c.stat]) continue;
    const from = Number(c.from) || 0;
    const to = Number(c.to) || 0;
    li.className = to > from ? "gain" : "loss";
    li.dataset.stat = c.stat;
    li.innerHTML =
      `<span class="os-name">${STAT_LABELS[c.stat]}</span>` +
      `<span class="os-from">${from}</span>` +
      `<span class="os-arrow" aria-hidden="true">&rarr;</span><span class="visually-hidden"> to </span>` +
      `<span class="os-to">${to}</span>`;
    stats.appendChild(li);
  }
  if (stats.children.length) els.outcome.appendChild(stats);
  else line("The realm", "No stat moved.");

  if (o.rent) {
    line(
      "Naphtha rent",
      o.rent > 0
        ? "Full seeps paid the treasury 1 this year."
        : "Dry seeps cost the treasury 1 this year."
    );
  }
  if (o.reactions && o.reactions.length) {
    line("The court", o.reactions.map(reactionPhrase).join(" "));
  }
  // FLAG_LABELS are authored markup (they bold their subject), not player text.
  if (o.flag && FLAG_LABELS[o.flag]) line("Matter standing", "").innerHTML = FLAG_LABELS[o.flag];
  for (const a of o.ambitions || []) {
    const def = AMBITION_BY_ID[a.id];
    if (!def) continue;
    line(a.status === "met" ? "Ambition met" : "Ambition lost", def.text, `ambition-${a.status}`);
  }
  els.outcome.hidden = false;
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
  state.viewOutcome = null;
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
  state.crisesMet = 0;
  setRandomSource();
  drawAmbitions();
}

// `fresh` is set only at the live transition into an ending: { firstTime, newBest }.
// A resumed ending passes nothing and shows no "new" banners.
function renderEndingImmediate(ending, fresh = {}) {
  removeChronicle();
  state.activeCard = null;
  state.view = "ending";
  state.viewOutcome = null;
  state.endingInfo = ending;
  renderEmblem(null);
  renderAffinity(null);
  renderCause(null);
  renderOutcome();
  setConceptChip(null);
  document.getElementById("predict-feedback")?.remove();
  const kind = classifyEnding(ending);

  els.card.classList.add("ending");
  els.card.dataset.endingKind = kind;
  els.card.dataset.view = "ending";
  delete els.card.dataset.cardType;

  els.speaker.textContent = ENDING_TITLES[kind];
  els.speaker.dataset.speakerType = "ending";

  els.scenario.textContent = reignSummary();

  els.explanation.innerHTML = glossify(ENDING_FLAVOUR[kind]);
  els.explanation.hidden = false;

  renderReignReport(kind, fresh);
  renderChronicle();

  els.options.innerHTML = "";
  delete els.options.dataset.layout;
  const btn = continueButton("Begin a New Reign", () => {
    clearSave();
    resetReign();
    state.reignStarted = true;
    renderStats();
    renderCard();
  });
  els.options.appendChild(btn);
  // The quick restart keeps the same settings; this is the way to change them.
  const change = document.createElement("button");
  change.type = "button";
  change.className = "options-secondary";
  change.textContent = "Change reign options";
  change.addEventListener("click", () => {
    if (els.introOptions) els.introOptions.open = true;
    showIntro({ mode: "return" });
  });
  els.options.appendChild(change);
  btn.focus({ preventScroll: true });

  renderStats();
  saveGame();
}

function renderCard() {
  const ending = checkEnding();
  const next = ending ? null : nextCard();
  // Record the ending once, here at the live transition (not on save-resume,
  // which calls renderEndingImmediate directly).
  const fresh = {};
  if (ending) {
    const kind = classifyEnding(ending);
    const years = Math.min(state.cardsPlayed, state.reignLength);
    updateAmbitions(true, ending.type === "longevity");
    fresh.firstTime = !progress.endings.includes(kind);
    markEndingReached(kind);
    fresh.newBest = recordReignResult(reignScore(years, kind));
  }
  els.card.classList.add("fading");
  setTimeout(() => {
    if (ending) {
      renderEndingImmediate(ending, fresh);
      playSfx(ending.type === "longevity" ? "endFull" : "endFallen");
    } else {
      renderCardImmediate(next);
      playSfx(next.triggerStat ? "crisis" : next.arcCharacter ? "audience" : "deal");
    }
    // Start the new view from the top, not wherever the last essay left the reader.
    if (window.scrollY > 0) window.scrollTo(0, 0);
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
  clearGaugePreview();
  els.options.innerHTML = "";
  delete els.options.dataset.layout;
  const q = document.createElement("p");
  q.className = "predict-q";
  q.textContent = "Which stat will this move the most?";
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
    ? `You foresaw it: ${STAT_LABELS[p.actual]} moved the most.`
    : `You guessed ${STAT_LABELS[p.predicted]}; ${STAT_LABELS[p.actual]} moved the most.`;
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
  const outcome = { label: option.label, changes: [], rent: 0, reactions: [], ambitions: [] };

  // Delayed-consequence flag + concept discovery.
  if (option.flag && !state.flags.includes(option.flag)) {
    state.flags.push(option.flag);
    outcome.flag = option.flag;
    scheduleConsequences(option.flag);
  }
  if (card.concept) {
    outcome.newConcept = !progress.concepts.includes(card.concept);
    markConceptDiscovered(card.concept);
    if (!state.conceptsSeen.includes(card.concept)) state.conceptsSeen.push(card.concept);
  }

  const projected = projectChoice(card, option);
  outcome.rent = projected.rent;
  let net = 0;
  for (const stat of STAT_NAMES) {
    const oldValue = state.stats[stat];
    const newValue = projected.stats[stat];
    if (newValue === oldValue) continue;
    state.stats[stat] = newValue;
    net += newValue - oldValue;
    outcome.changes.push({ stat, from: oldValue, to: newValue });
    animateDelta(stat, newValue - oldValue);
    pulseStat(stat, newValue > oldValue);

    const wasOutside = oldValue < WARN_LOW || oldValue > WARN_HIGH;
    const isOutside = newValue < WARN_LOW || newValue > WARN_HIGH;
    if (isOutside && !wasOutside) {
      state.warningActive[stat] = true;
    } else if (!isOutside) {
      state.warningActive[stat] = false;
    }
  }

  state.cardHistory.push({
    cardId: card.id,
    cardType,
    speaker: card.speaker,
    optionLabel: option.label,
    effects: { ...(option.effects || {}) },
    after: STAT_NAMES.map((s) => state.stats[s]), // for the ending's trajectories
  });

  if (option.affinityEffects) {
    for (const [character, delta] of Object.entries(option.affinityEffects)) {
      if (!(character in state.affinity)) continue;
      const oldValue = state.affinity[character];
      const newValue = Math.max(AFFINITY_MIN, Math.min(AFFINITY_MAX, oldValue + delta));
      state.affinity[character] = newValue;
      if (newValue === oldValue) continue;
      // Name the new standing only when the choice moved them into it.
      const word = affinityWord(newValue);
      outcome.reactions.push({
        character,
        delta: newValue - oldValue,
        word: word !== affinityWord(oldValue) ? word : "",
      });
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

  // A crisis interrupts a year; every other card closes one.
  if (card.triggerStat === undefined) state.cardsPlayed += 1;
  else state.crisesMet += 1;

  outcome.ambitions = updateAmbitions();

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
  state.viewOutcome = outcome;
  renderResultBody(card);

  renderAffinity(card);
  renderStats();

  if (outcome.ambitions.some((a) => a.status === "met")) playSfx("met");
  else playSfx(net > 0 ? "up" : net < 0 ? "down" : "even");

  if (tutorialActive) hideTutorial();

  saveGame();
}

// --- Tutorial overlay ---

// The walkthrough runs once, on a player's first card. After that it is only
// shown on request (How to play → Show the walkthrough).
function maybeShowTutorial() {
  if (progress.tutorialSeen || progress.reigns > 0) return;
  if (state.cardsPlayed !== 0) return;
  if (state.view !== "question") return;
  if (!state.activeCard) return;
  if (!els.intro.hidden) return;
  showTutorial();
}

function tutorialTargets() {
  return {
    stats: els.stats,
    reign: els.reign,
    ambitions: els.ambitions,
    options: els.options,
  };
}

function showTutorial() {
  if (tutorialActive) return;
  tutorialActive = true;

  const overlay = document.createElement("div");
  overlay.className = "tutorial";
  overlay.id = "tutorial";

  // A window cut in the scrim over whatever the current tip describes, so the
  // thing being explained is the one thing left lit.
  const spot = document.createElement("div");
  spot.className = "tutorial-spot";
  overlay.appendChild(spot);

  const touch = !!window.matchMedia?.("(hover: none), (pointer: coarse)").matches;
  const tipDefs = [
    {
      target: "stats",
      text: "Your five stats. If any reaches 0 or 100, the reign ends. Near the edges, crises strike.",
    },
    {
      target: "reign",
      text: `Your reign runs ${state.reignLength} years. Survive all of them or fall early; each ending tells its own story.`,
    },
    {
      target: "ambitions",
      text: "Three ambitions for this reign. They are optional, and each one met raises your score.",
    },
    {
      target: "options",
      text: touch
        ? "Two answers, each with its cost beneath it. Tap one, or swipe the card toward it."
        : "Two answers, each with its cost beneath it. Point at one and the gauges show where it would leave you. Click it, or press 1 or 2.",
    },
  ].filter((def) => {
    const el = tutorialTargets()[def.target];
    return el && !el.hidden;
  });

  // One anchored callout at a time; the advance button lives inside the tip.
  const tips = tipDefs.map((def, i) => {
    const tip = document.createElement("div");
    tip.className = "tutorial-tip";
    tip.dataset.target = def.target;
    const step = document.createElement("span");
    step.className = "tutorial-step";
    step.textContent = `${i + 1} of ${tipDefs.length}`;
    tip.appendChild(step);
    tip.appendChild(document.createTextNode(def.text));
    overlay.appendChild(tip);
    return tip;
  });

  let stepIndex = 0;
  const actions = document.createElement("div");
  actions.className = "tutorial-actions";
  const dismiss = document.createElement("button");
  dismiss.type = "button";
  dismiss.className = "tutorial-dismiss";
  const skip = document.createElement("button");
  skip.type = "button";
  skip.className = "tutorial-skip";
  skip.textContent = "Skip";
  actions.appendChild(dismiss);
  actions.appendChild(skip);

  function showStep(i) {
    stepIndex = i;
    const last = i === tips.length - 1;
    tips.forEach((tip, n) => tip.classList.toggle("active", n === i));
    dismiss.textContent = last ? "Begin" : "Next";
    skip.hidden = last;
    tips[i].appendChild(actions);
    tutorialTargets()[tips[i].dataset.target]?.scrollIntoView({ block: "nearest" });
    positionTutorialTips();
    dismiss.focus({ preventScroll: true });
  }

  dismiss.addEventListener("click", () => {
    playSfx("tick");
    if (stepIndex < tips.length - 1) showStep(stepIndex + 1);
    else hideTutorial();
  });
  skip.addEventListener("click", hideTutorial);

  document.body.appendChild(overlay);
  els.tutorial = overlay;

  showStep(0);
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
  if (!progress.tutorialSeen) {
    progress.tutorialSeen = true;
    saveProgress();
  }
}

function positionTutorialTips() {
  if (!els.tutorial) return;

  const targets = tutorialTargets();
  const spot = els.tutorial.querySelector(".tutorial-spot");

  const tips = els.tutorial.querySelectorAll(".tutorial-tip.active");
  tips.forEach((tip) => {
    const target = targets[tip.dataset.target];
    if (!target) return;

    const rect = target.getBoundingClientRect();
    if (spot) {
      const pad = 8;
      spot.style.left = `${rect.left - pad}px`;
      spot.style.top = `${rect.top - pad}px`;
      spot.style.width = `${rect.width + pad * 2}px`;
      spot.style.height = `${rect.height + pad * 2}px`;
    }
    const tipWidth = Math.min(tip.offsetWidth || 220, 280);
    const tipHeight = tip.offsetHeight || 60;
    const viewWidth = window.innerWidth;
    const viewHeight = window.innerHeight;

    const spaceRight = viewWidth - rect.right;
    const spaceLeft = rect.left;
    const spaceBelow = viewHeight - rect.bottom;

    let side;
    let top;
    let left;

    if (spaceRight >= tipWidth + 32) {
      side = "left";
      top = rect.top + rect.height / 2 - tipHeight / 2;
      left = rect.right + 22;
    } else if (spaceLeft >= tipWidth + 32) {
      side = "right";
      top = rect.top + rect.height / 2 - tipHeight / 2;
      left = rect.left - tipWidth - 22;
    } else if (spaceBelow >= tipHeight + 32) {
      side = "top";
      top = rect.bottom + 22;
      left = rect.left + rect.width / 2 - tipWidth / 2;
    } else {
      side = "bottom";
      top = rect.top - tipHeight - 22;
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
  // The options only ever apply to a brand-new reign; say so when one is under way.
  const optionsLabel = els.introOptions?.querySelector(".intro-options-label");
  if (optionsLabel) {
    optionsLabel.textContent = mode === "fresh" ? "Reign options" : "Options for a new reign";
  }
  renderIntroSummary();

  // Focus the primary action for keyboard users without scrolling the title
  // off the top of the intro panel.
  els.introBegin.focus({ preventScroll: true });
}

// The settings a new reign would start with, on the closed "Reign options" row.
function renderIntroSummary() {
  if (!els.introSummary) return;
  const length = document.querySelector('input[name="reign-length"]:checked')?.value ?? REIGN_LENGTH;
  const difficulty = document.querySelector('input[name="difficulty"]:checked')?.value ?? "normal";
  const parts = [`${length} years`, difficulty.charAt(0).toUpperCase() + difficulty.slice(1)];
  const mods = document.querySelectorAll('input[name="modifier"]:checked').length;
  if (mods) parts.push(`${mods} ${mods === 1 ? "modifier" : "modifiers"}`);
  if (els.dailyToggle?.checked) parts.push("Daily");
  els.introSummary.textContent = parts.join(" · ");
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
  playSfx("deal");
  hideIntro();
}

// --- Keyboard ---

function onKeydown(event) {
  if (openDialog) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeDialog();
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
  if (event.ctrlKey || event.metaKey || event.altKey) return;
  // 1 / 2, or the arrow pointing at the answer: first on the left, second on the right.
  const answer = { 1: 0, 2: 1, ArrowLeft: 0, ArrowRight: 1 }[event.key];
  if (answer !== undefined) {
    const btn = els.options.querySelector(`button[data-option-index="${answer}"]`);
    if (btn) {
      event.preventDefault();
      btn.click();
    }
    return;
  }
  if (event.key === "h" || event.key === "H" || event.key === "?") {
    event.preventDefault();
    openHelp();
    return;
  }
  if (event.key === "c" || event.key === "C") {
    event.preventDefault();
    openCodex();
    return;
  }
  if (event.key === "Enter" || event.key === " ") {
    // Leave the key to whatever control has focus (a button, a link, the
    // chronicle's disclosure); only an unfocused press means "continue".
    if (event.target.closest?.("button, a, summary")) return;
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

// Build the How to play stat key from the shared STAT_DESCRIPTIONS so it and
// the in-game tooltips can never drift apart.
function populateStatKey() {
  const ul = document.getElementById("stat-key");
  if (!ul) return;
  const lowerFirst = (s) => (s ? s.charAt(0).toLowerCase() + s.slice(1) : s);
  ul.innerHTML = STAT_NAMES.map(
    (s) =>
      `<li><span class="key-stat">${STAT_LABELS[s]}</span>: ${lowerFirst(
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
  els.introSetup?.addEventListener("change", renderIntroSummary);

  // Audio preferences: music is opt-in, sound effects are on unless turned off.
  state.audioEnabled = safeStorageGet(AUDIO_KEY) === "1";
  applyAudioPref();
  els.audioToggle.addEventListener("click", toggleAudio);
  state.sfxEnabled = safeStorageGet(SFX_KEY) !== "0";
  applySfxPref();
  els.sfxToggle?.addEventListener("click", toggleSfx);
  document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);
  applyTheme();
  // Track the OS preference while the player hasn't chosen explicitly.
  window
    .matchMedia?.("(prefers-color-scheme: light)")
    ?.addEventListener?.("change", () => {
      if (!storedTheme()) applyTheme();
    });
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

  // How to play
  els.aboutLink.addEventListener("click", openHelp);
  els.introHelp?.addEventListener("click", openHelp);
  els.helpClose?.addEventListener("click", closeDialog);
  els.help?.addEventListener("click", (e) => {
    if (e.target === els.help) closeDialog();
  });
  els.helpTour?.addEventListener("click", () => {
    closeDialog();
    // Over the title screen there is nothing to point at yet; wait for the card.
    if (els.intro.hidden) showTutorial();
    else forceTutorialOnIntroHide = true;
  });
  els.helpTitle?.addEventListener("click", () => {
    closeDialog();
    if (els.intro.hidden) showIntro({ mode: state.reignStarted ? "return" : "fresh" });
  });

  // Codex
  els.codexLink?.addEventListener("click", openCodex);
  els.introCodex?.addEventListener("click", openCodex);
  els.codexClose?.addEventListener("click", closeDialog);
  els.codex?.addEventListener("click", (e) => {
    if (e.target === els.codex) closeDialog();
  });
  // Click a related-concept chip to jump to that entry in the Codex.
  els.codexBody?.addEventListener("click", (e) => {
    const chip = e.target.closest && e.target.closest("[data-goto]");
    if (!chip) return;
    const target = document.getElementById("codex-c-" + chip.dataset.goto);
    if (!target) return;
    target.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth", block: "center" });
    if (!reducedMotion()) {
      target.classList.remove("codex-flash");
      void target.offsetWidth; // restart the animation
      target.classList.add("codex-flash");
      target.addEventListener("animationend", () => target.classList.remove("codex-flash"), { once: true });
    }
  });

  setupSwipe();
  setupGlossary();

  document.addEventListener("keydown", onKeydown);

  showIntro({ mode: initialMode });
}

// ------------------------------------------------------------------ //
// Concept chip, stat pulse, progress/codex, reign report, swipe       //
// ------------------------------------------------------------------ //

// `isNew` marks a concept met for the first time, so adding to the Codex is
// something the player sees happen.
function setConceptChip(card, isNew = false) {
  if (!els.conceptChip) return;
  const concept = card && card.concept;
  els.conceptChip.classList.toggle("is-new", !!concept && isNew);
  if (!concept) {
    els.conceptChip.hidden = true;
    els.conceptChip.textContent = "";
    els.conceptChip.setAttribute("aria-expanded", "false");
    if (els.conceptDef) {
      els.conceptDef.hidden = true;
      els.conceptDef.textContent = "";
    }
    if (els.conceptFigure) {
      els.conceptFigure.hidden = true;
      els.conceptFigure.innerHTML = "";
    }
    return;
  }
  els.conceptChip.textContent = concept;
  const def = CONCEPT_DEFS[concept] || "";
  els.conceptChip.title = def;
  els.conceptChip.hidden = false;
  // The pure definition is shown by default alongside every explanation; the
  // chip stays clickable so a player can collapse it if they wish.
  els.conceptChip.setAttribute("aria-expanded", "true");
  if (els.conceptDef) {
    els.conceptDef.textContent = def;
    els.conceptDef.hidden = false;
  }
  if (els.conceptFigure) {
    const figure = conceptFigureHtml(concept);
    els.conceptFigure.innerHTML = figure;
    els.conceptFigure.hidden = !figure;
  }
}

// The diagram and its caption for a concept that has one, else "".
function conceptFigureHtml(concept) {
  const d = conceptDiagram(concept);
  return d ? `${d.svg}<figcaption>${htmlLabel(d.caption)}</figcaption>` : "";
}

// Tap/click the concept chip to reveal its plain-language definition inline
// (mobile has no hover for the title tooltip).
function toggleConceptDef() {
  if (!els.conceptDef || !els.conceptDef.textContent) return;
  const show = els.conceptDef.hidden;
  els.conceptDef.hidden = !show;
  if (els.conceptFigure?.innerHTML) els.conceptFigure.hidden = !show;
  els.conceptChip.setAttribute("aria-expanded", String(show));
}

function pulseStat(stat, up = true) {
  if (reducedMotion() || !els.stats) return;
  const row = els.stats.querySelector(`[data-stat="${stat}"]`);
  if (!row) return;
  row.classList.remove("pulse", "pulse-down");
  void row.offsetWidth; // restart the animation
  row.classList.add("pulse");
  row.classList.toggle("pulse-down", !up);
  row.addEventListener(
    "animationend",
    () => row.classList.remove("pulse", "pulse-down"),
    { once: true }
  );
}

// --- Cross-reign progress (codex / endings / bests) ---

function loadProgress() {
  try {
    const d = JSON.parse(safeStorageGet(PROGRESS_KEY) || "{}");
    if (Array.isArray(d.concepts)) progress.concepts = d.concepts;
    if (Array.isArray(d.endings)) progress.endings = d.endings.filter((k) => ENDING_KINDS.includes(k));
    if (Number.isFinite(d.bestYears)) progress.bestYears = d.bestYears;
    if (Number.isFinite(d.bestScore)) progress.bestScore = d.bestScore;
    if (Number.isFinite(d.reigns)) progress.reigns = d.reigns;
    progress.tutorialSeen = !!d.tutorialSeen;
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
// Returns true when `score` beats an earlier recorded best (never for the first
// scored reign, which has nothing to beat).
function recordReignResult(score) {
  const newBest = progress.bestScore > 0 && score > progress.bestScore;
  progress.reigns += 1;
  const years = Math.min(state.cardsPlayed, state.reignLength);
  if (years > progress.bestYears) progress.bestYears = years;
  if (score > progress.bestScore) progress.bestScore = score;
  saveProgress();
  return newBest;
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

function ambitionsMet() {
  return state.ambitions.filter((a) => a.status === "met").length;
}

// Composite reign score: longevity, learning, foresight, balance, ambitions,
// ending bonus.
function reignScore(years, kind) {
  const avg = Math.round(
    STAT_NAMES.reduce((s, n) => s + state.stats[n], 0) / STAT_NAMES.length
  );
  const endingBonus = { prosperity: 60, survival: 30 }[kind] ?? 0;
  return (
    years * 4 +
    state.conceptsSeen.length * 3 +
    state.predictHits * 2 +
    ambitionsMet() * AMBITION_SCORE +
    avg +
    endingBonus
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

// How each stat moved across the reign: one small line per stat, each on the
// same 0 to 100 scale, with the crisis thresholds ruled in. The stat's name and
// its start and end values sit beside the line, so colour is never the only cue.
function buildTrajectories() {
  const history = state.cardHistory || [];
  if (history.length < 2 || history.some((e) => !Array.isArray(e.after))) return null;

  // One point per card answered, plus the starting value. `years[i]` is the
  // year that point belongs to (a crisis shares the year it interrupted).
  const years = [0];
  let year = 0;
  for (const e of history) {
    if (e.cardType !== "crisis") year += 1;
    years.push(year);
  }
  const W = 100;
  const H = 40;
  const x = (i) => (i / history.length) * W;
  const y = (v) => H - 2 - (v / 100) * (H - 4);

  const wrap = document.createElement("div");
  wrap.className = "trajectories";

  STAT_NAMES.forEach((stat, si) => {
    const values = [startValueFor(stat), ...history.map((e) => clampStat(Number(e.after[si]) || 0))];
    const first = values[0];
    const last = values[values.length - 1];
    const points = values.map((v, i) => `${x(i).toFixed(2)},${y(v).toFixed(2)}`).join(" ");
    const rangeText = `${first} → ${last}`;

    const fig = document.createElement("figure");
    fig.className = "traj";
    fig.dataset.stat = stat;
    fig.setAttribute("role", "img");
    fig.setAttribute(
      "aria-label",
      `${STAT_LABELS[stat]}: began at ${first}, ended at ${last}, ` +
        `lowest ${Math.min(...values)}, highest ${Math.max(...values)}.`
    );
    fig.innerHTML =
      `<figcaption><span class="traj-name">${STAT_LABELS[stat]}</span>` +
      `<span class="traj-range">${rangeText}</span></figcaption>` +
      `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true">` +
      `<line class="traj-edge" x1="0" x2="${W}" y1="${y(CRISIS_HIGH)}" y2="${y(CRISIS_HIGH)}" />` +
      `<line class="traj-edge" x1="0" x2="${W}" y1="${y(CRISIS_LOW)}" y2="${y(CRISIS_LOW)}" />` +
      `<line class="traj-cursor" x1="0" x2="0" y1="0" y2="${H}" />` +
      `<polyline class="traj-line" points="${points}" />` +
      `<line class="traj-end" x1="${W}" x2="${W}" y1="${y(last)}" y2="${y(last)}" />` +
      `</svg>`;

    // Hover or drag along a line to read any year off it.
    const svg = fig.querySelector("svg");
    const cursor = fig.querySelector(".traj-cursor");
    const range = fig.querySelector(".traj-range");
    const readAt = (clientX) => {
      const r = svg.getBoundingClientRect();
      const t = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
      const i = Math.round(t * history.length);
      cursor.setAttribute("x1", x(i));
      cursor.setAttribute("x2", x(i));
      range.textContent = i === 0 ? `Start: ${values[0]}` : `Year ${years[i]}: ${values[i]}`;
      fig.classList.add("reading");
    };
    const stop = () => {
      fig.classList.remove("reading");
      range.textContent = rangeText;
    };
    svg.addEventListener("pointermove", (e) => readAt(e.clientX));
    svg.addEventListener("pointerdown", (e) => readAt(e.clientX));
    svg.addEventListener("pointerleave", stop);
    svg.addEventListener("pointercancel", stop);

    wrap.appendChild(fig);
  });
  return wrap;
}

function renderReignReport(kind, fresh = {}) {
  const existing = document.querySelector(".reign-report");
  if (existing) existing.remove();

  const wrap = document.createElement("div");
  wrap.className = "reign-report";
  const years = Math.min(state.cardsPlayed, state.reignLength);

  const addLine = (text, cls = "report-line") => {
    if (!text) return null;
    const p = document.createElement("p");
    p.className = cls;
    p.textContent = text;
    wrap.appendChild(p);
    return p;
  };

  if (fresh.firstTime) {
    addLine(`New ending: ${ENDING_TITLES[kind]}`, "report-banner");
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
    addLine(`Title earned: ${a.name}`, "report-banner report-title");
  }

  const epithet = document.createElement("p");
  epithet.className = "report-epithet";
  epithet.innerHTML =
    `<span class="report-kicker">Remembered as</span>` +
    `<span class="report-name">${escHtml(epithetFor(kind))}</span>`;
  wrap.appendChild(epithet);

  const score = reignScore(years, kind);
  const best = fresh.newBest
    ? " · a new best"
    : progress.bestScore > score
      ? ` · best ${progress.bestScore}`
      : "";
  addLine(`Reign score ${score}${best}`, "report-score");

  if (state.ambitions.length) {
    const ul = document.createElement("ul");
    ul.className = "report-ambitions";
    for (const entry of state.ambitions) {
      const li = document.createElement("li");
      li.className = "ambition";
      li.dataset.status = entry.status;
      const text = document.createElement("span");
      text.className = "ambition-text";
      text.textContent = AMBITION_BY_ID[entry.id].text;
      const note = document.createElement("span");
      note.className = "ambition-note";
      note.textContent = entry.status === "met" ? `Met · +${AMBITION_SCORE}` : "Lost";
      li.appendChild(text);
      li.appendChild(note);
      ul.appendChild(li);
    }
    wrap.appendChild(ul);
  }

  const trajectories = buildTrajectories();
  if (trajectories) wrap.appendChild(trajectories);

  addLine(dominantPolicyLine());

  const totalConcepts = Object.keys(CONCEPT_DEFS).length;
  const seen = state.conceptsSeen.length;
  const reignsWord = progress.reigns === 1 ? "reign" : "reigns";
  addLine(
    `${seen} ${seen === 1 ? "concept" : "concepts"} encountered this reign. ` +
      `The Codex holds ${progress.concepts.length} of ${totalConcepts} concepts and ` +
      `${progress.endings.length} of ${ENDING_KINDS.length} endings across ${progress.reigns} ${reignsWord}.`
  );

  if (state.predictTotal > 0) {
    addLine(`Foresight: ${state.predictHits} of ${state.predictTotal} predictions correct.`);
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
  const lines = [
    head,
    `${ENDING_TITLES[kind]} — ${years} years${diff}`,
    `Remembered as ${epithetFor(kind)} · score ${reignScore(years, kind)}`,
    `T ${bar[0]}  P ${bar[1]}  M ${bar[2]}`,
    `F ${bar[3]}  N ${bar[4]}`,
  ];
  if (state.ambitions.length) {
    lines.push(`Ambitions ${ambitionsMet()}/${state.ambitions.length}`);
  }
  lines.push(`Concepts ${progress.concepts.length}/${Object.keys(CONCEPT_DEFS).length}`);
  return lines.join("\n");
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

function escHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Stable id-safe slug for a concept name, used to link related concepts in the Codex.
function conceptSlug(name) {
  return String(name).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// --- Historical-term glossary (hover / tap / focus to define) ---
const GLOSS_BY_SLUG = {}; // slug -> { term, def }
const GLOSS_LC = {}; // lowercased surface form -> { slug, term, def }
(() => {
  const add = (surface, displayTerm, def) => {
    const slug = conceptSlug(displayTerm);
    GLOSS_BY_SLUG[slug] = { term: displayTerm, def };
    GLOSS_LC[surface.toLowerCase()] = { slug, term: displayTerm, def };
  };
  for (const [term, def] of Object.entries(glossary)) add(term, term, def);
  for (const [variant, canonical] of Object.entries(glossaryAliases)) {
    const def = glossary[canonical];
    if (def) add(variant, canonical, def);
  }
})();
// Longest surface forms first so multi-word terms win over their substrings.
const GLOSS_RE = (() => {
  const surfaces = Object.keys(GLOSS_LC).sort((a, b) => b.length - a.length);
  const esc = surfaces.map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  return new RegExp("\\b(" + esc.join("|") + ")('s|s)?\\b", "gi");
})();

// Wrap the first occurrence of each known historical term in `text` so it can be
// hovered/tapped for a definition. Escapes HTML first, so the result is safe to
// assign as innerHTML. Paragraph breaks (\n\n) survive via CSS white-space.
function glossify(text) {
  const seen = new Set();
  return escHtml(String(text)).replace(GLOSS_RE, (whole, core) => {
    const entry = GLOSS_LC[core.toLowerCase()];
    if (!entry || seen.has(entry.slug)) return whole;
    seen.add(entry.slug);
    return `<span class="gloss" tabindex="0" data-term="${entry.slug}" aria-describedby="gloss-pop">${whole}</span>`;
  });
}

// One shared tooltip popover, shown on hover/focus/tap of a .gloss term.
function setupGlossary() {
  let pop = document.getElementById("gloss-pop");
  if (!pop) {
    pop = document.createElement("div");
    pop.id = "gloss-pop";
    pop.className = "gloss-pop";
    pop.setAttribute("role", "tooltip");
    pop.hidden = true;
    document.body.appendChild(pop);
  }
  let pinned = false;
  let current = null;

  const close = () => {
    pinned = false;
    pop.hidden = true;
    current = null;
  };
  const place = (el) => {
    const r = el.getBoundingClientRect();
    pop.hidden = false;
    const pr = pop.getBoundingClientRect();
    const m = 8;
    let left = r.left + r.width / 2 - pr.width / 2;
    left = Math.max(m, Math.min(left, window.innerWidth - pr.width - m));
    let top = r.bottom + 6;
    if (top + pr.height > window.innerHeight - m) top = r.top - pr.height - 6;
    pop.style.left = left + "px";
    pop.style.top = Math.max(m, top) + "px";
  };
  const show = (el) => {
    const entry = GLOSS_BY_SLUG[el.dataset.term];
    if (!entry) return;
    current = el;
    pop.innerHTML = `<strong class="gloss-term">${escHtml(entry.term)}</strong> ${escHtml(entry.def)}`;
    place(el);
  };
  const glossTarget = (e) => (e.target.closest ? e.target.closest(".gloss") : null);

  document.addEventListener("pointerover", (e) => {
    const t = glossTarget(e);
    if (t && !pinned) show(t);
  });
  document.addEventListener("pointerout", (e) => {
    if (glossTarget(e) && !pinned) {
      pop.hidden = true;
      current = null;
    }
  });
  document.addEventListener("focusin", (e) => {
    const t = glossTarget(e);
    if (t) {
      pinned = false;
      show(t);
    }
  });
  document.addEventListener("focusout", (e) => {
    if (glossTarget(e) && !pinned) {
      pop.hidden = true;
      current = null;
    }
  });
  document.addEventListener("click", (e) => {
    const t = glossTarget(e);
    if (t) {
      if (pinned && current === t) close();
      else {
        pinned = true;
        show(t);
      }
      e.stopPropagation();
      return;
    }
    if (pinned) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !pop.hidden) close();
  });
  window.addEventListener("scroll", () => !pop.hidden && close(), true);
  window.addEventListener("resize", () => !pop.hidden && close());
}

function buildCodex() {
  if (!els.codexBody) return;
  const totalConcepts = Object.keys(CONCEPT_DEFS).length;
  const conceptNames = Object.keys(CONCEPT_DEFS).sort((a, b) => a.localeCompare(b));
  const foundNames = conceptNames.filter((name) => progress.concepts.includes(name));
  const lockedCount = conceptNames.length - foundNames.length;

  // Only the concepts already met are listed; the rest are a single count, not
  // a wall of identical locked rows.
  const conceptItems = foundNames
    .map((name) => {
      const meta = CONCEPT_META[name];
      let extra = "";
      if (meta) {
        if (meta.source) extra += `<span class="codex-source">${escHtml(meta.source)}</span>`;
        const rel = (meta.related || []).filter((r) => CONCEPT_DEFS[r]);
        const relFound = rel.filter((r) => progress.concepts.includes(r));
        const relLocked = rel.length - relFound.length;
        if (relFound.length || relLocked) {
          const chips = relFound
            .map((r) => `<button type="button" class="codex-rel" data-goto="${conceptSlug(r)}">${escHtml(r)}</button>`)
            .join(" ");
          const hint = relLocked
            ? `<span class="codex-rel-locked">+${relLocked} to discover</span>`
            : "";
          const sep = relFound.length && relLocked ? " · " : "";
          extra += `<span class="codex-related"><span class="codex-related-label">Related:</span> ${chips}${sep}${hint}</span>`;
        }
      }
      const figure = conceptFigureHtml(name);
      if (figure) {
        extra += `<details class="codex-diagram"><summary>Diagram</summary><figure class="concept-figure">${figure}</figure></details>`;
      }
      return `<li class="codex-item found" id="codex-c-${conceptSlug(name)}"><span class="codex-name">${escHtml(name)}</span><span class="codex-def">${escHtml(CONCEPT_DEFS[name])}</span>${extra}</li>`;
    })
    .join("");
  const lockedNote = lockedCount
    ? `<p class="codex-locked-note">${
        foundNames.length
          ? `${lockedCount} more to meet. Each is taught by a card you have not yet played.`
          : "Nothing here yet. Each card you play adds the idea it teaches."
      }</p>`
    : "";

  const endingItems = ENDING_KINDS.map((kind) => {
    const found = progress.endings.includes(kind);
    return `<li class="codex-item ${found ? "found" : "locked"}"><span class="codex-name">${found ? escHtml(ENDING_TITLES[kind]) : "???"}</span></li>`;
  }).join("");

  const titleItems = ACHIEVEMENTS.map((a) => {
    const got = progress.unlocked.includes(a.id);
    return `<li class="codex-item ${got ? "found" : "locked"}"><span class="codex-name">${got ? escHtml(a.name) : "???"}</span><span class="codex-def">${escHtml(a.desc)}</span></li>`;
  }).join("");

  const meter = (have, total, label) =>
    `<span class="codex-meter"><span class="codex-meter-count">${have}/${total}</span> ${label}` +
    `<span class="codex-meter-track"><span style="width:${total ? (100 * have) / total : 0}%"></span></span></span>`;

  els.codexBody.innerHTML = `
    <div class="codex-stats">
      ${meter(progress.concepts.length, totalConcepts, "concepts")}
      ${meter(progress.endings.length, ENDING_KINDS.length, "endings")}
      ${meter(progress.unlocked.length, ACHIEVEMENTS.length, "titles")}
    </div>
    <p class="codex-records">Longest reign: ${progress.bestYears} years${
      progress.bestScore ? ` · Best score: ${progress.bestScore}` : ""
    }</p>
    <h3 class="codex-section">Concepts</h3>
    <ul class="codex-list">${conceptItems}</ul>
    ${lockedNote}
    <h3 class="codex-section">Endings</h3>
    <ul class="codex-list codex-endings">${endingItems}</ul>
    <h3 class="codex-section">Titles</h3>
    <ul class="codex-list">${titleItems}</ul>
  `;
}

// --- Dialogs (the Codex and How to play share one overlay behaviour) ---

let openDialog = null; // the overlay element currently shown, if any
let dialogReturnFocus = null;

function showDialog(overlay, closeBtn) {
  if (!overlay) return;
  if (openDialog) closeDialog();
  dialogReturnFocus = document.activeElement;
  overlay.hidden = false;
  openDialog = overlay;
  els.app?.setAttribute("inert", "");
  if (!els.intro.hidden) els.intro.setAttribute("inert", "");
  closeBtn?.focus();
}

function closeDialog() {
  if (!openDialog) return;
  openDialog.hidden = true;
  openDialog = null;
  els.intro?.removeAttribute("inert");
  if (els.intro && els.intro.hidden) els.app?.removeAttribute("inert");
  if (dialogReturnFocus && typeof dialogReturnFocus.focus === "function") dialogReturnFocus.focus();
  dialogReturnFocus = null;
}

function openCodex() {
  buildCodex();
  showDialog(els.codex, els.codexClose);
}

function openHelp() {
  showDialog(els.help, els.helpClose);
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
    clearGaugePreview();
  }
  card.addEventListener("pointerdown", (e) => {
    if (reducedMotion()) return;
    if (openDialog || !els.intro.hidden || tutorialActive) return;
    // An ending is left by its button only: a stray drag must not start a new reign.
    if (!(state.view === "question" || state.view === "result")) return;
    if (e.target.closest && e.target.closest("button, .gloss")) return; // let buttons and glossary terms be tapped
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
      // Drag toward an answer: the first sits on the left, the second on the right.
      const index = dx < 0 ? 0 : 1;
      const tgt = els.options.querySelector(`button[data-option-index="${index}"]`);
      if (tgt && !tgt.classList.contains("swipe-target")) {
        clearTargets();
        tgt.classList.add("swipe-target");
        showGaugePreview(index);
      }
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
      btn = els.options.querySelector(`button[data-option-index="${dir < 0 ? 0 : 1}"]`);
    } else {
      btn = els.options.querySelector('button[data-continue="true"]');
    }
    btn?.click();
  }
  card.addEventListener("pointerup", finish);
  card.addEventListener("pointercancel", clearDrag);
}

init();
