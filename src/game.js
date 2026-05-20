import { cards } from "../content/cards.js";

const STAT_NAMES = ["treasury", "people", "military", "faith", "naphtha"];

function buildStatBars() {
  els.stats.innerHTML = STAT_NAMES.map(
    (name) => `
      <li class="stat" data-stat="${name}">
        <span class="stat-name">${name}</span>
        <div class="stat-track"><div class="stat-fill"></div></div>
        <span class="stat-value">0</span>
      </li>`
  ).join("");
}

const state = {
  stats: {
    treasury: 50,
    people: 50,
    military: 50,
    faith: 50,
    naphtha: 50,
  },
  cardsPlayed: 0,
  currentCard: 0,
};

const els = {
  stats: document.getElementById("stats"),
  cardsPlayed: document.getElementById("cards-played"),
  speaker: document.getElementById("speaker"),
  scenario: document.getElementById("scenario"),
  explanation: document.getElementById("explanation"),
  options: document.getElementById("options"),
};

function renderStats() {
  for (const name of STAT_NAMES) {
    const value = state.stats[name];
    const row = els.stats.querySelector(`[data-stat="${name}"]`);
    row.querySelector(".stat-fill").style.width = `${value}%`;
    row.querySelector(".stat-value").textContent = value;
  }
  els.cardsPlayed.textContent = state.cardsPlayed;
}

function currentCard() {
  return cards[state.currentCard % cards.length];
}

function renderCard() {
  const card = currentCard();
  els.speaker.textContent = card.speaker;
  els.speaker.dataset.speakerType = card.speakerType ?? "one-off";
  els.scenario.textContent = card.scenario;
  els.explanation.hidden = true;
  els.explanation.textContent = "";

  els.options.innerHTML = "";
  card.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option.label;
    button.addEventListener("click", () => chooseOption(index));
    els.options.appendChild(button);
  });

  renderStats();
}

function chooseOption(index) {
  const card = currentCard();
  const option = card.options[index];

  for (const [stat, delta] of Object.entries(option.effects)) {
    if (stat in state.stats) {
      state.stats[stat] = Math.max(0, Math.min(100, state.stats[stat] + delta));
    }
  }

  state.cardsPlayed += 1;
  state.currentCard += 1;

  els.explanation.textContent = option.explanation;
  els.explanation.hidden = false;
  els.options.innerHTML = "";

  const next = document.createElement("button");
  next.type = "button";
  next.textContent = "Continue";
  next.addEventListener("click", renderCard);
  els.options.appendChild(next);

  renderStats();
}

buildStatBars();
renderCard();
