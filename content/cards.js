export const cards = [
  {
    id: "caspian-toll",
    speaker: "Vizier Farrukh",
    speakerType: "vizier",
    scenario:
      "Shah, the Caspian merchants beg for a lower toll at the Baku gate. They threaten to sail their bales to Derbent instead.",
    options: [
      {
        label: "Halve the toll. Let the silk flow.",
        effects: { treasury: -8, people: +6 },
        explanation:
          "The bazaars swell with Persian silk and Russian fur. Coin trickles in slower, but the people sing your name.",
      },
      {
        label: "Hold the toll. The treasury comes first.",
        effects: { treasury: +6, people: -5 },
        explanation:
          "Caravans grumble but still pass. Gold fills your vaults; whispers of greed fill the bazaar.",
      },
    ],
    tags: ["trade", "resource-economics"],
  },
  {
    id: "ardabil-dervish",
    speaker: "Sheikh Ibrahim",
    speakerType: "qadi",
    scenario:
      "A dervish from Ardabil preaches in the square. He calls the court soft and the prayer hours lax. Crowds gather.",
    options: [
      {
        label: "Welcome him to court as a counselor.",
        effects: { people: +3, faith: +8 },
        explanation:
          "The pious are heartened. The Sheikh frowns, sensing a rival voice behind the throne.",
      },
      {
        label: "Have the guards escort him beyond the walls.",
        effects: { people: -4, military: +2, faith: -6 },
        explanation:
          "The square clears by dusk. In the teahouses, the story grows: a Shah who fears a barefoot preacher.",
      },
    ],
    tags: ["faith", "legitimacy"],
  },
  {
    id: "surakhani-fires",
    speaker: "Naphtha Master Rustam",
    speakerType: "one-off",
    scenario:
      "The fire-wells beyond Surakhani burn hotter than any year in memory. We can dig new pits — or seal the old ones before a fool drops a torch.",
    options: [
      {
        label: "Dig. Sell the oil to the Genoese.",
        effects: { treasury: +10, faith: -3, naphtha: +12 },
        explanation:
          "Black gold flows to Italian galleys. The fire-temple priests mutter that you sell the holy flame for coin.",
      },
      {
        label: "Seal the pits. Honor the eternal flame.",
        effects: { treasury: -4, people: +2, faith: +6, naphtha: -8 },
        explanation:
          "The Zoroastrian elders bless your name. The Genoese sail home empty, and the treasury feels it.",
      },
    ],
    tags: ["resource-economics", "faith"],
  },
  {
    id: "genoese-galley",
    speaker: "A Genoese Merchant",
    speakerType: "one-off",
    scenario:
      "Grant my house the right to draw naphtha from the Baku pits, my Shah, and a galley laden with Florentine silver will tie up at your quay before the next moon.",
    options: [
      {
        label: "Grant the concession. Take the silver.",
        effects: { treasury: +12, naphtha: -18, people: -4 },
        explanation:
          "A textbook resource-rent bargain: a non-renewable asset is exchanged for immediate liquidity. The crown's cash position improves, but the underlying naphtha stock — the productive base — shrinks, and locals who hauled oil for a living watch their trade leave on a foreign hull. Economists call this the resource curse in miniature: short-run revenue masking long-run depletion and crowded-out domestic industry. Modern Azerbaijan's State Oil Fund (SOFAZ) was created precisely to break this pattern, sterilizing oil windfalls so the wider economy isn't hollowed out by the very wealth feeding it.",
      },
      {
        label: "Refuse. The pits stay in Shirvani hands.",
        effects: { military: -3, faith: +2 },
        explanation:
          "You preserve sovereign control over a strategic resource — closer to a resource-nationalism stance than a free-trade one. The Genoese sail home with cold silver still in their hold, and word travels that Shirvan is a hard market; future bids may come in lower. The fire-temple priests, who see the naphtha as sacred, take the refusal as piety. The same logic underwrites Azerbaijan's modern insistence on majority state stakes in major oil and gas fields: today's foregone fee is tomorrow's leverage.",
      },
    ],
    tags: ["trade", "resource-economics", "sovereignty"],
  },
];
