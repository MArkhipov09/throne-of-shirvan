import { cards } from "../content/cards.js";
import { crises } from "../content/crises.js";

const decisionCards = cards.filter((c) => !c.arcCharacter);

const STAT_NAMES = ["treasury", "people", "military", "faith", "naphtha"];
const CHARACTER_KEYS = ["vizier", "qadi", "tahmina", "general", "envoy"];

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
};

const STAT_DESCRIPTIONS = {
  treasury: "Your dinars and trade revenue.",
  people: "Welfare and loyalty.",
  military: "Garrison and walls.",
  faith: "Clerical favour and religious balance.",
  naphtha: "The Absheron oil reserves, your wildcard resource.",
};

const ENDING_TITLES = {
  prosperity: "Prosperity",
  survival: "Survival",
  conquest: "Conquest",
  revolt: "Revolt",
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
  if (ending.stat === "people" || ending.stat === "faith") return "revolt";
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
const FADE_MS = 150;
const INTRO_FADE_MS = 300;

const SAVE_KEY = "throne-of-shirvan-save";
const TUTORIAL_KEY = "throne-tutorial-seen";
const AUDIO_KEY = "throne-of-shirvan-audio";

const SOUND_PATHS = {
  click: "assets/sounds/click.mp3",
  prosperity: "assets/sounds/prosperity.mp3",
  survival: "assets/sounds/survival.mp3",
  conquest: "assets/sounds/conquest.mp3",
  revolt: "assets/sounds/revolt.mp3",
  warning: "assets/sounds/warning.mp3",
};

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
};

let tutorialActive = false;

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

// --- Audio ---

const audioCache = {};

function getAudio(name) {
  if (!SOUND_PATHS[name]) return null;
  if (!audioCache[name]) {
    try {
      const audio = new Audio();
      audio.preload = "none";
      audio.src = SOUND_PATHS[name];
      audio.addEventListener("error", (e) => {
        if (e && typeof e.preventDefault === "function") e.preventDefault();
      });
      audioCache[name] = audio;
    } catch {
      return null;
    }
  }
  return audioCache[name];
}

function playSound(name) {
  if (!state.audioEnabled) return;
  const audio = getAudio(name);
  if (!audio) return;
  try {
    audio.currentTime = 0;
    const result = audio.play();
    if (result && typeof result.catch === "function") {
      result.catch(() => {});
    }
  } catch {
    /* ignore */
  }
}

function applyAudioPref() {
  if (!els.audioToggle) return;
  els.audioToggle.setAttribute("aria-pressed", state.audioEnabled ? "true" : "false");
  els.audioToggle.setAttribute(
    "aria-label",
    state.audioEnabled ? "Sound effects: on" : "Sound effects: off"
  );
}

function toggleAudio() {
  state.audioEnabled = !state.audioEnabled;
  safeStorageSet(AUDIO_KEY, state.audioEnabled ? "1" : "0");
  applyAudioPref();
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
    resetTutorial: () => {
      safeStorageRemove(TUTORIAL_KEY);
      console.log("Tutorial flag cleared");
    },
  };
}

// --- Emblem rendering ---

function emblemForCard(card) {
  if (!card) return null;
  if (CHARACTER_KEYS.includes(card.speakerType)) {
    return { kind: "portrait", src: `assets/portraits/${card.speakerType}.svg` };
  }
  const category = SPEAKER_CATEGORY[card.id];
  if (category) {
    return { kind: "icon", src: `assets/icons/${category}.svg` };
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
  els.cardEmblem.innerHTML = "";
  els.cardEmblem.appendChild(img);
  els.cardEmblem.dataset.kind = info.kind;
  els.cardEmblem.hidden = false;
}

// --- Affinity indicator ---

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

  els.affinity.innerHTML = parts.join("");
  els.affinity.dataset.character = card.speakerType;
  const sign = value >= 0 ? "+" : "";
  els.affinity.setAttribute(
    "aria-label",
    `${card.speakerType} affinity ${sign}${value}`
  );
  els.affinity.hidden = false;
}

// --- Stat bars ---

function buildStatBars() {
  els.stats.innerHTML = STAT_NAMES.map(
    (name) => `
      <li class="stat" data-stat="${name}" data-tooltip="${STAT_DESCRIPTIONS[name]}">
        <span class="stat-name">${name}</span>
        <div class="stat-track"><div class="stat-fill"></div></div>
        <span class="stat-value">0</span>
      </li>`
  ).join("");
}

function renderStats() {
  for (const name of STAT_NAMES) {
    const value = state.stats[name];
    const row = els.stats.querySelector(`[data-stat="${name}"]`);
    row.querySelector(".stat-fill").style.width = `${value}%`;
    row.querySelector(".stat-value").textContent = value;
    row.classList.toggle("warning", value < WARN_LOW || value > WARN_HIGH);
  }
  els.cardsPlayed.textContent = state.cardsPlayed;
}

// --- Deck / next-card logic ---

function shuffle(source) {
  const out = source.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function drawFromDeck() {
  if (state.deck.length === 0) {
    state.deck = shuffle(decisionCards);
  }
  return state.deck.shift();
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

function renderCardImmediate(card) {
  removeChronicle();
  state.activeCard = card;
  state.view = "question";
  state.viewExplanation = "";
  state.endingInfo = null;
  renderEmblem(card);
  els.card.classList.remove("ending");
  delete els.card.dataset.endingKind;
  els.speaker.textContent = card.speaker;
  els.speaker.dataset.speakerType = card.speakerType ?? "one-off";
  renderAffinity(card);
  els.scenario.textContent = card.scenario;
  els.explanation.hidden = true;
  els.explanation.textContent = "";

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
    button.addEventListener("click", () => chooseOption(index));
    els.options.appendChild(button);
  });

  renderStats();
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
  els.speaker.textContent = card.speaker;
  els.speaker.dataset.speakerType = card.speakerType ?? "one-off";
  renderAffinity(card);
  els.scenario.textContent = card.scenario;
  els.explanation.textContent = state.viewExplanation;
  els.explanation.hidden = false;

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
  if (state.cardsPlayed >= REIGN_LENGTH) return { type: "longevity" };
  return null;
}

function resetReign() {
  for (const stat of STAT_NAMES) state.stats[stat] = 50;
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
  state.warningActive = defaultWarningActive();
}

function renderEndingImmediate(ending, { fromResume = false } = {}) {
  removeChronicle();
  state.activeCard = null;
  state.view = "ending";
  state.endingInfo = ending;
  renderEmblem(null);
  renderAffinity(null);
  const kind = classifyEnding(ending);

  els.card.classList.add("ending");
  els.card.dataset.endingKind = kind;

  els.speaker.textContent = ENDING_TITLES[kind];
  els.speaker.dataset.speakerType = "ending";

  els.scenario.textContent = reignSummary();

  els.explanation.textContent = ENDING_FLAVOUR[kind];
  els.explanation.hidden = false;

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

  if (!fromResume) {
    playSound(kind);
  }
}

function renderCard() {
  const ending = checkEnding();
  const next = ending ? null : nextCard();
  els.card.classList.add("fading");
  setTimeout(() => {
    if (ending) renderEndingImmediate(ending);
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

function animateDelta(stat, delta) {
  if (delta === 0) return;
  const row = els.stats.querySelector(`[data-stat="${stat}"]`);
  if (!row) return;
  const node = document.createElement("span");
  node.className = `stat-delta ${delta > 0 ? "positive" : "negative"}`;
  const sign = delta > 0 ? "+" : "−";
  node.textContent = `${sign}${Math.abs(delta)}`;
  row.appendChild(node);
  node.addEventListener("animationend", () => node.remove(), { once: true });
}

function chooseOption(index) {
  const card = state.activeCard;
  if (!card) return;
  const option = card.options[index];
  if (!option) return;

  playSound("click");

  const cardType = card.triggerStat ? "crisis" : card.arcCharacter ? "arc" : "normal";
  state.cardHistory.push({
    cardId: card.id,
    cardType,
    speaker: card.speaker,
    optionLabel: option.label,
    effects: { ...(option.effects || {}) },
  });

  let warningFired = false;
  for (const [stat, delta] of Object.entries(option.effects ?? {})) {
    if (!(stat in state.stats)) continue;
    const oldValue = state.stats[stat];
    const newValue = Math.max(0, Math.min(100, oldValue + delta));
    state.stats[stat] = newValue;
    animateDelta(stat, newValue - oldValue);

    const wasOutside = oldValue < WARN_LOW || oldValue > WARN_HIGH;
    const isOutside = newValue < WARN_LOW || newValue > WARN_HIGH;
    if (isOutside && !wasOutside && !state.warningActive[stat]) {
      state.warningActive[stat] = true;
      warningFired = true;
    } else if (!isOutside) {
      state.warningActive[stat] = false;
    }
  }

  if (warningFired) playSound("warning");

  if (option.affinityEffects) {
    for (const [character, delta] of Object.entries(option.affinityEffects)) {
      if (!(character in state.affinity)) continue;
      const oldValue = state.affinity[character];
      const newValue = Math.max(AFFINITY_MIN, Math.min(AFFINITY_MAX, oldValue + delta));
      state.affinity[character] = newValue;
      if (!state.arcFired[character] && !state.arcEligible[character]) {
        if (newValue >= ARC_THRESHOLD) state.arcEligible[character] = "high";
        else if (newValue <= -ARC_THRESHOLD) state.arcEligible[character] = "low";
      }
    }
  }

  if (card.triggerStat === undefined) state.cardsPlayed += 1;

  for (const stat of STAT_NAMES) {
    const value = state.stats[stat];
    let direction = null;
    if (value < CRISIS_LOW) direction = "low";
    else if (value > CRISIS_HIGH) direction = "high";
    if (!direction) continue;
    if (queueCrisis(stat, direction)) break;
  }

  state.view = "result";
  state.viewExplanation = option.explanation ?? "";
  els.explanation.textContent = state.viewExplanation;
  els.explanation.hidden = false;
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
  if (safeStorageGet(TUTORIAL_KEY)) return;
  if (!els.intro.hidden) return;
  showTutorial();
}

function showTutorial() {
  if (tutorialActive) return;
  tutorialActive = true;
  safeStorageSet(TUTORIAL_KEY, "1");

  const overlay = document.createElement("div");
  overlay.className = "tutorial";
  overlay.id = "tutorial";

  const backdrop = document.createElement("div");
  backdrop.className = "tutorial-backdrop";
  overlay.appendChild(backdrop);

  const tipDefs = [
    { target: "stats", text: "Your kingdom's five stats. Keep them in balance." },
    { target: "reign", text: "Twenty-five years. Make them count." },
    { target: "options", text: "Two choices. Both have costs." },
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

  els.introBegin.focus();
}

function hideIntro() {
  if (introHideTimer) {
    clearTimeout(introHideTimer);
    introHideTimer = null;
  }
  els.intro.classList.add("fading-out");
  els.intro.setAttribute("aria-hidden", "true");
  introHideTimer = setTimeout(() => {
    introHideTimer = null;
    els.intro.hidden = true;
    maybeShowTutorial();
  }, INTRO_FADE_MS);
}

function startFreshReign() {
  hideTutorial();
  resetReign();
  state.reignStarted = true;
  renderStats();
  renderCardImmediate(nextCard());
  hideIntro();
}

// --- Keyboard ---

function onKeydown(event) {
  if (!els.intro.hidden) {
    if (event.key === "Enter" || event.key === " ") {
      if (event.target instanceof HTMLButtonElement || event.target instanceof HTMLAnchorElement) return;
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
    renderEndingImmediate(state.endingInfo, { fromResume: true });
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

function init() {
  buildStatBars();

  // Audio preference
  state.audioEnabled = safeStorageGet(AUDIO_KEY) === "1";
  applyAudioPref();
  els.audioToggle.addEventListener("click", toggleAudio);

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
      showIntro({ mode: "return" });
    } else {
      showIntro({ mode: "fresh" });
    }
  });

  document.addEventListener("keydown", onKeydown);

  showIntro({ mode: initialMode });
}

init();
