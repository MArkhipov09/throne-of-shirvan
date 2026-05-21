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
- **Four endings**: Prosperity, Survival, Conquest, Revolt. Each pulls flavour from a real Shirvanshah-era parallel.
- **Save is automatic.** Close the tab mid-reign; reopen and the game offers Continue Reign or Begin a New Reign.
- **Keyboard**: `1` / `2` pick options, `Enter` / `Space` continue.
- **Sound toggle** in the top-left corner. Click effects and ending fanfares; the toggle state persists.

## File structure

```
throne-of-shirvan/
├── index.html          # HUD, intro, card region, audio toggle
├── src/
│   ├── style.css       # design tokens + layout
│   └── game.js         # state, deck, save/load, audio, tutorial, chronicle
├── content/
│   ├── cards.js        # 26 decision + 10 arc cards
│   └── crises.js       # 4 crisis cards
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

Append to the `cards` array in `content/cards.js` using the model above. Keep the explanation in the 220–280 word range to match the rest of the deck (`POLISH_REPORT.md` §3 has the rationale). The tag inventory in §5 is the de-facto concept map.

## Dev console

On `localhost` and `127.0.0.1`, `window.dev` is exposed for testing:

```js
dev.state                       // inspect the full state object
dev.setStat("treasury", 10)     // force a stat value
dev.setAffinity("qadi", -8)     // force a character's affinity
dev.triggerArc("vizier", "high") // prime an arc card to fire on the next choice
dev.triggerCrisis("people", "low")
dev.clearSave()                 // forget the saved reign
dev.resetTutorial()             // re-arm the first-card tutorial overlay
```

The block is gated on `location.hostname` and won't ship in production.

## Design notes

- The design audit lives in [POLISH_REPORT.md](./POLISH_REPORT.md): stat balance, explanation length, speaker distribution, concept duplication, accessibility, code health. Read it before making structural changes.
- The "casual returner" use case is the load-bearing assumption: someone playing for the first time, interrupted, comes back later expecting to continue. The save-on-every-state-change in `src/game.js` exists to make that experience seamless rather than punishing.
- Sound files are optional. `assets/sounds/README.txt` lists the six referenced filenames; the runtime fails gracefully if any are absent. Drop MP3s in when ready, no code change required.
- The CSS palette is six tokens (`--ink`, `--parchment`, `--caspian`, `--saffron`, `--naphtha`, `--stone`) plus accents (`--moss`, `--brick`, `--silk`). Adding new colours should be rare and considered.
