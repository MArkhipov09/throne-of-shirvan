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

- **Five stats**, all starting at 50, clamped 0–100. Drop any to 0 or push any to 100 and the reign ends.
- **Twenty-five years.** Each decision card counts as one year; crisis cards do not.
- **Two choices per card.** Hover or focus an option to preview the stat deltas before committing.
- **Five recurring characters** — the Vizier, the Qadi, Tahmina the silk-merchant, the General, the foreign Envoy. Each tracks an affinity score from −10 to +10, shown as dots beside their portrait. Push affinity to ±7 and a **character arc card** queues up — the moment they trust you enough to ask for something large, or distrust you enough to move against you.
- **Crises** fire when a stat crosses 15 (low) or 85 (high). They jump the queue; their outcomes are usually expensive.
- **Ten endings.** Last twenty-five years and you get Prosperity or Survival (by your average stat). Let a stat hit **0** and the reign collapses into Conquest, Revolt, or — for naphtha — the Dark. Push a stat to **100** and it ruins you a different way: the Gilded Cage (treasury), the Sword Ascendant (military), the People's Tide (people), the Pulpit Throne (faith), or the Burning Shore (naphtha). Each pulls flavour from a real Shirvanshah-era parallel.
- **Save is automatic.** Close the tab mid-reign; reopen and the game offers Continue Reign or Begin a New Reign.
- **Keyboard**: `1` / `2` pick options, `Enter` / `Space` continue.
- **Music toggle** in the top-left corner. One looping ambient track that plays across the whole session; the toggle state persists.

## File structure

```
throne-of-shirvan/
├── index.html          # HUD, intro, card region, audio toggle
├── src/
│   ├── style.css       # design tokens + layout
│   └── game.js         # state, deck, save/load, audio, tutorial, chronicle
├── content/
│   ├── cards.js        # 37 decision + 10 arc cards
│   └── crises.js       # 7 crisis cards
├── assets/
│   ├── portraits/      # SVG character portraits (5)
│   ├── icons/          # SVG speaker-category icons (6)
│   ├── sounds/         # optional; game runs silent if absent
│   └── intro-scene.svg # Caspian coast title illustration
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
  scenario: "What the petitioner says to the Shah.",
  options: [
    {
      label: "First choice",
      effects: { treasury: -5, people: 3 },
      affinityEffects: { vizier: 1 },       // optional
      explanation: "The 220–280 word micro-essay on what just happened.",
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

**Arc cards** add `arcCharacter` and `arcAffinityDirection: "high" | "low"`. They are pulled from the deck and queued when the relevant character's affinity crosses ±7. Each character has both a "high" and a "low" arc; only one fires per reign.

**Crisis cards** live in `content/crises.js` and add `triggerStat` and `triggerDirection`. They interrupt the deck when the trigger condition is met. Each stat × direction fires at most once per reign.

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
