import { cards } from "../content/cards.js";
import { crises } from "../content/crises.js";

const decisionCards = cards.filter((c) => !c.arcCharacter);

const STAT_NAMES = ["treasury", "people", "military", "faith", "naphtha"];
const CHARACTER_KEYS = ["vizier", "qadi", "tahmina", "general", "envoy"];

// One-off speakers grouped by category icon. speakerType is just "one-off" for
// these cards, so the mapping is per card id.
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
};

if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
  window.dev = {
    state,
    setAffinity: (char, val) => { state.affinity[char] = val; console.log(`${char} affinity = ${val}`); },
    setStat: (stat, val) => { state.stats[stat] = val; console.log(`${stat} = ${val}`); },
    triggerArc: (char, dir) => {
      state.affinity[char] = dir === 'high' ? 7 : -7;
      state.arcEligible[char] = dir;
      console.log(`${char} arc ${dir} primed and eligible — click an option to fire`);
    },
    triggerCrisis: (stat, dir) => {
      state.stats[stat] = dir === 'high' ? 86 : 14;
      if (queueCrisis(stat, dir)) {
        console.log(`${stat} ${dir} crisis primed — click an option to fire`);
      } else {
        console.log(`${stat} ${dir} crisis NOT primed (no matching card or already fired this reign)`);
      }
    }
  };
}
const els = {
  stats: document.getElementById("stats"),
  cardsPlayed: document.getElementById("cards-played"),
  card: document.getElementById("card"),
  cardEmblem: document.getElementById("card-emblem"),
  speaker: document.getElementById("speaker"),
  scenario: document.getElementById("scenario"),
  explanation: document.getElementById("explanation"),
  options: document.getElementById("options"),
  intro: document.getElementById("intro"),
  introBegin: document.getElementById("intro-begin"),
  aboutLink: document.getElementById("about-link"),
};

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

function renderCardImmediate(card) {
  state.activeCard = card;
  renderEmblem(card);
  els.speaker.textContent = card.speaker;
  els.speaker.dataset.speakerType = card.speakerType ?? "one-off";
  els.scenario.textContent = card.scenario;
  els.explanation.hidden = true;
  els.explanation.textContent = "";

  els.options.innerHTML = "";
  card.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.optionIndex = String(index);
    button.innerHTML = `<span class="key-hint" aria-hidden="true">${index + 1}</span><span class="option-label"></span>`;
    button.querySelector(".option-label").textContent = option.label;
    button.addEventListener("click", () => chooseOption(index));
    els.options.appendChild(button);
  });

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

function endingScenario(ending) {
  if (ending.type === "longevity") {
    return "Twenty-five years on the throne. Shirvan endures, and so does your name in the chronicles.";
  }
  if (ending.type === "collapse") {
    return `Your ${ending.stat} has fallen to nothing. The court empties; the reign is over.`;
  }
  return `Your ${ending.stat} has overflowed past what the kingdom can carry. The reign ends here.`;
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
}

function renderEndingImmediate(ending) {
  state.activeCard = null;
  renderEmblem(null);
  els.speaker.textContent = "End of Reign";
  els.speaker.dataset.speakerType = "ending";
  els.scenario.textContent = endingScenario(ending);
  els.explanation.hidden = true;
  els.explanation.textContent = "";

  els.options.innerHTML = "";
  const btn = document.createElement("button");
  btn.type = "button";
  btn.dataset.continue = "true";
  btn.innerHTML = `<span class="option-label"></span><span class="key-hint key-hint-continue" aria-hidden="true">&#x21B5;</span>`;
  btn.querySelector(".option-label").textContent = "Begin a New Reign";
  btn.addEventListener("click", () => {
    resetReign();
    renderStats();
    renderCard();
  });
  els.options.appendChild(btn);
  btn.focus();

  renderStats();
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

  for (const [stat, delta] of Object.entries(option.effects ?? {})) {
    if (!(stat in state.stats)) continue;
    const oldValue = state.stats[stat];
    const newValue = Math.max(0, Math.min(100, oldValue + delta));
    state.stats[stat] = newValue;
    animateDelta(stat, newValue - oldValue);
  }

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

  els.explanation.textContent = option.explanation ?? "";
  els.explanation.hidden = false;
  els.options.innerHTML = "";

  const next = document.createElement("button");
  next.type = "button";
  next.dataset.continue = "true";
  next.innerHTML = `<span class="option-label"></span><span class="key-hint key-hint-continue" aria-hidden="true">&#x21B5;</span>`;
  next.querySelector(".option-label").textContent = "Continue";
  next.addEventListener("click", renderCard);
  els.options.appendChild(next);
  next.focus();

  renderStats();
}

let introHideTimer = null;

function showIntro({ firstBoot }) {
  if (introHideTimer) {
    clearTimeout(introHideTimer);
    introHideTimer = null;
  }
  els.intro.hidden = false;
  els.intro.classList.remove("fading-out");
  els.intro.setAttribute("aria-hidden", "false");
  els.introBegin.textContent = firstBoot ? "Begin Reign" : "Return to Throne";
  els.introBegin.focus();
}

function hideIntro({ startReign }) {
  if (introHideTimer) {
    clearTimeout(introHideTimer);
    introHideTimer = null;
  }
  if (startReign && !state.reignStarted) {
    state.reignStarted = true;
    renderCardImmediate(nextCard());
  }
  els.intro.classList.add("fading-out");
  els.intro.setAttribute("aria-hidden", "true");
  introHideTimer = setTimeout(() => {
    introHideTimer = null;
    els.intro.hidden = true;
  }, INTRO_FADE_MS);
}

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

function init() {
  buildStatBars();
  renderStats();

  els.introBegin.addEventListener("click", () => {
    hideIntro({ startReign: !state.reignStarted });
  });
  els.aboutLink.addEventListener("click", () => {
    showIntro({ firstBoot: !state.reignStarted });
  });
  document.addEventListener("keydown", onKeydown);

  showIntro({ firstBoot: true });
}

init();
