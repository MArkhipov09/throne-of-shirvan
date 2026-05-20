import { cards } from "../content/cards.js";

const STAT_NAMES = ["treasury", "people", "military", "faith", "naphtha"];

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
  els.stats.innerHTML = STAT_NAMES.map(
    (name) => `
      <li>
        <span class="stat-name">${name}</span>
        <span class="stat-value">${state.stats[name]}</span>
      </li>`
  ).join("");
  els.cardsPlayed.textContent = state.cardsPlayed;
}

function renderCard() {
  const card = cards[state.currentCard % cards.length];
  els.speaker.textContent = card.speaker;
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
  const card = cards[state.currentCard % cards.length];
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

renderCard();
