# Throne of Shirvan

A Reigns-style card game set in the medieval Shirvanshah court on the Caspian shore. Petitioners reach the throne; you choose; the kingdom shifts. Balance treasury, people, military, faith, and naphtha for twenty-five years and your reign endures. Lose any one of them and it ends.

The game is built around teaching one micro-essay of medieval Caspian economic history per choice — the kind of decision that sits next to its own historiographical footnote.

## Play

Local only for now. The game uses ES modules, so it needs to be served over HTTP (opening `index.html` via `file://` will fail with a CORS error). Any static server works:

```powershell
# Python (ships with most systems)
python -m http.server 8000

# Node, no install
npx serve .

# VS Code: install the "Live Server" extension and click "Go Live"
```

Then visit <http://localhost:8000>.

## How it plays

- **Five stats**, clamped 0–100, starting at 50 on Normal (Lenient and Hard shift the start). Drop any to 0 **or** push any to 100 and the reign ends.
- **Twenty-five years.** Each decision card counts as one year; crisis cards do not.
- **Two choices per card.** Hover, focus, or begin dragging an option to preview its stat deltas; on touch the deltas always show. Pick by clicking, by the `1` / `2` keys, or by **swiping the card** left or right.
- **The concept, named.** Every card teaches one economics idea, shown as a labelled chip (`Laffer curve`, `Public good`) above the outcome essay and recorded in the Codex.
- **Five recurring characters** — the Vizier, the Qadi, Tahmina the silk-merchant, the General, the foreign Envoy. Each tracks an affinity score from −10 to +10, shown as dots beside their portrait. Push affinity to ±7 and a **character arc card** queues up — the moment they trust you enough to ask for something large, or distrust you enough to move against you.
- **Crises** fire when a stat crosses 15 (low) or 85 (high). They jump the queue; their outcomes are usually expensive.
- **Ten endings.** Last twenty-five years and you get Prosperity or Survival (by your average stat). Let a stat hit **0** and the reign collapses into Conquest, Revolt, or — for naphtha — the Dark. Push a stat to **100** and it ruins you a different way: the Gilded Cage (treasury), the Sword Ascendant (military), the People's Tide (people), the Pulpit Throne (faith), or the Burning Shore (naphtha). Each pulls flavour from a real Shirvanshah-era parallel.
- **The Codex** (top-right) collects every concept you encounter and every ending you reach, with progress counts and your longest reign.
- **Year timeline** across the top tracks your progress toward twenty-five years.
- **Difficulty** (Lenient / Normal / Hard) and **Daily reign** (the same deck order for every player that day) are chosen on the title screen. The ending screen offers a shareable result.
- **Naphtha pays rent.** Keep the Absheron reserves high and the treasury gains a little each year; let them run dry and it bleeds.
- **Save is automatic.** Close the tab mid-reign; reopen and the game offers Continue Reign or Begin a New Reign.
- **Keyboard**: `1` / `2` pick options, `Enter` / `Space` continue, `Esc` closes the Codex or tutorial.
- **Music toggle** in the top-left corner. One looping ambient track; the toggle state persists.

## File structure

```
throne-of-shirvan/
├── index.html          # HUD, intro, card region, audio toggle
├── src/
│   ├── style.css       # design tokens + layout
│   └── game.js         # state, deck, save/load, audio, tutorial, chronicle, codex, swipe
├── content/
│   ├── cards.js        # 38 decision + 10 arc cards
│   ├── crises.js       # 7 crisis cards
│   └── concepts.js     # one-line Codex definition per concept
├── assets/
│   ├── portraits/      # SVG character portraits (5)
│   ├── icons/          # SVG speaker-category icons (6)
│   ├── sounds/         # optional; game runs silent if absent
│   ├── intro-scene.svg # Caspian coast title illustration
│   └── preview.html    # open in a browser to eyeball all icons + portraits
├── POLISH_REPORT.md    # design / a11y / balance audit
└── README.md
```

## Content model

A decision card:

```js
{
  id: "village-mulberry",
  speaker: "A village headman",
  speakerType: "one-off",         // or "vizier"|"qadi"|"tahmina"|"general"|"envoy"
  concept: "Comparative advantage", // shown as a chip; must be a key in concepts.js
  scenario: "What the petitioner says to the Shah.",
  options: [
    {
      label: "First choice",
      effects: { treasury: -5, people: 3 },
      affinityEffects: { vizier: 1 },       // optional
      flag: "committed-to-silk",            // optional; sets a delayed-consequence flag
      explanation: "The micro-essay on what just happened. The first paragraph names the concept.",
    },
    {
      label: "Second choice",
      effects: { faith: 4, military: -2 },
      explanation: "The other outcome.",
    },
  ],
  tags: ["silk", "agriculture"],            // optional, advisory
}
```

Stats: `treasury`, `people`, `military`, `faith`, `naphtha`. Effects are deltas; values clamp to 0–100. Omitted stats are unaffected.

Every card carries a `concept` (the chip text) that must match a key in `content/concepts.js`, whose one-line definition feeds the Codex. The first paragraph of each option's explanation should name that concept in plain language.

**Arc cards** add `arcCharacter` and `arcAffinityDirection: "high" | "low"`. They are pulled from the deck and queued when the relevant character's affinity crosses ±7. Each character has both a "high" and a "low" arc; only one fires per reign.

**Crisis cards** live in `content/crises.js` and add `triggerStat` and `triggerDirection`. They interrupt the deck when the trigger condition is met. Each stat × direction fires at most once per reign.

**Delayed consequences.** An option may set a `flag` (a string). A card may then gate itself with `requires: "<flag>"` (appears only after the flag is set) or `excludes: "<flag>"` (appears only while it is not). `genoese-return` is the worked example: it appears only if you sold the Genoese the naphtha concession.

## Adding a card

Append to the `cards` array in `content/cards.js` using the model above. Vary the explanation's shape and length deliberately — some essays open with the history, some name the economic concept and stop in the 13th century, some are a single tight paragraph. The aim is that no two consecutive cards read the same; a uniform 250-word "concept → medieval parallel → modern-Azerbaijan coda" template is exactly the house style being moved away from. Where a recurring character speaks or reacts, write them in their own register (the Qadi in legal cadence, Tahmina in mercantile wit, the General in clipped imperatives). The tag inventory is the de-facto concept map; avoid teaching the same concept on two cards.

## Dev console

On `localhost` and `127.0.0.1`, `window.dev` is exposed for testing:

```js
dev.state                       // inspect the full state object
dev.setStat("treasury", 10)     // force a stat value
dev.setAffinity("qadi", -8)     // force a character's affinity
dev.triggerArc("vizier", "high") // prime an arc card to fire on the next choice
dev.triggerCrisis("people", "low")
dev.clearSave()                 // forget the saved reign
```

The block is gated on `location.hostname` and won't ship in production.

## Design notes

- The design audit lives in [POLISH_REPORT.md](./POLISH_REPORT.md): stat balance, explanation length, speaker distribution, concept duplication, accessibility, code health. Read it before making structural changes.
- The "casual returner" use case is the load-bearing assumption: someone playing for the first time, interrupted, comes back later expecting to continue. The save-on-every-state-change in `src/game.js` exists to make that experience seamless rather than punishing.
- The music file (`assets/sounds/music.mp3`) ships with the game. The runtime fails gracefully if it is ever absent, and it loads lazily (`preload="none"`) only once the player turns music on. The track is large (~12 MB); a smaller mono ambient loop would be friendlier on metered connections.
- The CSS palette is six tokens (`--ink`, `--parchment`, `--caspian`, `--saffron`, `--naphtha`, `--stone`) plus accents (`--moss`, `--brick`, `--silk`). Adding new colours should be rare and considered.
