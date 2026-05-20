export const cards = [
  {
    speaker: "Vizier Farrukh",
    scenario:
      "Shah, the Caspian merchants beg for a lower toll at the Baku gate. They threaten to sail their bales to Derbent instead.",
    options: [
      {
        label: "Halve the toll. Let the silk flow.",
        effects: { treasury: -8, people: +6, military: 0, faith: 0, naphtha: 0 },
        explanation:
          "The bazaars swell with Persian silk and Russian fur. Coin trickles in slower, but the people sing your name.",
      },
      {
        label: "Hold the toll. The treasury comes first.",
        effects: { treasury: +6, people: -5, military: 0, faith: 0, naphtha: 0 },
        explanation:
          "Caravans grumble but still pass. Gold fills your vaults; whispers of greed fill the bazaar.",
      },
    ],
  },
  {
    speaker: "Sheikh Ibrahim",
    scenario:
      "A dervish from Ardabil preaches in the square. He calls the court soft and the prayer hours lax. Crowds gather.",
    options: [
      {
        label: "Welcome him to court as a counselor.",
        effects: { treasury: 0, people: +3, military: 0, faith: +8, naphtha: 0 },
        explanation:
          "The pious are heartened. The Sheikh frowns, sensing a rival voice behind the throne.",
      },
      {
        label: "Have the guards escort him beyond the walls.",
        effects: { treasury: 0, people: -4, military: +2, faith: -6, naphtha: 0 },
        explanation:
          "The square clears by dusk. In the teahouses, the story grows: a Shah who fears a barefoot preacher.",
      },
    ],
  },
  {
    speaker: "Naphtha Master Rustam",
    scenario:
      "The fire-wells beyond Surakhani burn hotter than any year in memory. We can dig new pits — or seal the old ones before a fool drops a torch.",
    options: [
      {
        label: "Dig. Sell the oil to the Genoese.",
        effects: { treasury: +10, people: 0, military: 0, faith: -3, naphtha: +12 },
        explanation:
          "Black gold flows to Italian galleys. The fire-temple priests mutter that you sell the holy flame for coin.",
      },
      {
        label: "Seal the pits. Honor the eternal flame.",
        effects: { treasury: -4, people: +2, military: 0, faith: +6, naphtha: -8 },
        explanation:
          "The Zoroastrian elders bless your name. The Genoese sail home empty, and the treasury feels it.",
      },
    ],
  },
];
