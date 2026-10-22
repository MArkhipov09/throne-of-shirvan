# Throne of Shirvan

A Reigns-style card game set in the medieval Shirvanshah court on the Caspian shore. Petitioners reach the throne; you choose; the kingdom shifts. Balance treasury, people, military, faith, and naphtha for twenty-five years and your reign endures. Lose any one of them and it ends.

The game is built around teaching one micro-essay of medieval Caspian economic history per choice — the kind of decision that sits next to its own historiographical footnote.

## Play

**On Windows, double-click `play.cmd`.** It starts a small local server and opens the game in your browser. Leave its window open while you play and close it when you are done.

By hand, from this folder:

```powershell
# Python (ships with most systems)
python -m http.server 8000

# Node, no install
npx serve .

# VS Code: install the "Live Server" extension and click "Go Live"
```

Then visit <http://localhost:8000>.

The server is needed because the game uses ES modules, and browsers refuse to load those from a `file://` path. Opened directly, `index.html` shows the title screen with its buttons disabled and a note pointing at `play.cmd`.

## How it plays

- **Five stats**, clamped 0–100, starting at 50 on Normal (Lenient and Hard shift the start). Drop any to 0 **or** push any to 100 and the reign ends. When a stat nears either end, a line under the gauges says so.
- **Twenty-five years** by default (15 and 40 are in the reign options). Each decision card counts as one year; crisis cards do not.
- **Two answers per card**, first on the left, second on the right. Each lists its stat changes. Point at one and the gauges preview where it would leave every stat, with a needle at the landing point; an answer that would end the reign is tagged. Pick by clicking, with `1` / `2` or `←` / `→`, or by **swiping the card** toward the answer.
- **What a choice did.** The result opens with the decree you gave, each stat's before and after, which courtiers approved or disapproved, and any matter now standing. The essay follows.
- **The concept, named.** Every card teaches one economics idea, shown as a labelled chip (`Laffer curve`, `Public good`) above the outcome essay and recorded in the Codex. A concept met for the first time is marked as new.
- **Nine recurring characters**: the Vizier, the Qadi, Tahmina the silk-merchant, the General, the foreign Envoy, the Astronomer, the Spymaster, the Dowager, and the Caravan-Master. Each tracks an affinity score from −10 to +10. Push affinity to ±7 and a **character arc card** queues up.
- **Crises** fire when a stat crosses 15 (low) or 85 (high). They jump the queue, and the card says which stat brought them.
- **Delayed consequences.** Some choices leave a matter standing (selling the naphtha concession, debasing the coin). The card that answers it is scheduled four to six cards later and says what it follows from.
- **Ambitions.** Each reign opens with three optional goals drawn from a pool of twelve ("Finish the reign with Treasury at 65 or more", "Reach the final year without a crisis"). Each one met adds 25 to the reign score. A Daily reign sets every player the same three.
- **Ten endings.** Last the full term and you get Prosperity or Survival (by your average stat). Let a stat hit **0** and the reign collapses into Conquest, Revolt, or, for naphtha, the Dark. Push a stat to **100** and it ruins you a different way: the Gilded Cage (treasury), the Sword Ascendant (military), the People's Tide (people), the Pulpit Throne (faith), or the Burning Shore (naphtha). Each pulls flavour from a real Shirvanshah-era parallel.
- **The ending recap** names you (the Wall-Builder, the Unready), gives the reign score against your best, settles the ambitions, and draws each stat's path across the reign. Hover a path to read any year.
- **The Codex** (top-right, or `C`) collects every concept you encounter, every ending you reach, and the titles you earn. Cards teaching a concept you have not met are dealt first, so a second reign is not a rerun of the first.
- **Difficulty** (Lenient / Normal / Hard / Custom), reign length, modifiers, and **Daily reign** (the same deck for every player that day) sit under "Reign options" on the title screen. The ending screen offers a shareable result.
- **Naphtha pays rent.** Keep the Absheron reserves high and the treasury gains a little each year; let them run dry and it bleeds.
- **Save is automatic.** Close the tab mid-reign; reopen and the game offers Continue Reign or Begin a New Reign.
- **Keyboard**: `1` / `2` or `←` / `→` answer, `Enter` / `Space` continue, `H` opens How to play, `C` opens the Codex, `Esc` closes either.
- **Sound.** Two toggles in the top-left corner: music (one looping ambient track, off until you turn it on) and sound effects (short synthesised cues, on until you turn them off). Both are remembered.
- **Light and dark.** The game follows the system preference; the sun/moon toggle beside the sound controls overrides it.
- **How to play** (top-right, or `H`) holds the rules and the controls, and can replay the first-reign walkthrough.

## File structure

```
throne-of-shirvan/
├── play.cmd            # Windows launcher: serves the folder, opens the browser
├── index.html          # HUD, title screen, card region, How to play, Codex
├── src/
│   ├── style.css       # design tokens + layout
│   └── game.js         # state, deck, save/load, audio, tutorial, ambitions, outcome, codex, swipe
├── content/
│   ├── cards.js        # 49 decision + 18 arc cards
│   ├── crises.js       # 7 crisis cards
│   ├── concepts.js     # Codex definitions + cross-links per concept
│   └── glossary.js     # historical-term tooltip definitions
├── assets/
│   ├── portraits/      # character portraits (9) — PNG used in-game; SVG drafts kept
│   ├── icons/          # speaker-category icons (6) — PNG used in-game; SVG drafts kept
│   ├── sounds/         # optional; game runs silent if absent
│   ├── intro-scene.png # Caspian coast title illustration
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

**Delayed consequences.** An option may set a `flag` (a string). A card may then gate itself with `requires: "<flag>"` (appears only after the flag is set) or `excludes: "<flag>"` (appears only while it is not). `genoese-return` is the worked example: it appears only if you sold the Genoese the naphtha concession. When a flag is set, the cards that require it are moved to four to six cards ahead in the deck. A new chain card wants two one-line entries in `src/game.js`: `FLAG_LABELS[flag]` (the "Matters standing" line) and `CHAIN_CAUSES[cardId]` (the "This follows from…" line above the scenario).

**Ambitions** live in the `AMBITIONS` array in `src/game.js`. Each has a `kind` (`end`, judged at a full term; `never`, lost the moment it breaks; `reach`, met the moment it holds), a `group` (no two in one reign share a group), and its sentence. `../qa/_sim_ambitions.mjs` plays a few thousand reigns per ambition and reports how often each is met by a coin-flip player, a play-it-safe player, and one working toward it; run it after changing a threshold.

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
- **Balance, measured.** `../qa/_sim.mjs` plays 20,000 headless reigns per policy. On Normal a coin-flip player reaches the full term about 86% of the time, and a player who simply keeps every gauge near the middle never falls and never meets a crisis. The ambitions exist to pull play away from that safe middle: the same play-it-safe policy meets the "finish with a stat at 65" ambitions under 10% of the time on a standard reign. The base stat effects have not been retuned.
- The "casual returner" use case is the load-bearing assumption: someone playing for the first time, interrupted, comes back later expecting to continue. The save-on-every-state-change in `src/game.js` exists to make that experience seamless rather than punishing.
- The music file (`assets/sounds/music.mp3`) ships with the game. The runtime fails gracefully if it is ever absent, and it loads lazily (`preload="none"`) only once the player turns music on. The track is large (~12 MB); a smaller mono ambient loop would be friendlier on metered connections.
- The visual direction is "Stone & Brass": basalt or sandstone ground (two full themes, switched by system preference or the HUD toggle), hairline brass rules instead of boxes, notched stat gauges, octagonal portrait frames, and red-ink drop caps. Tokens live at the top of `src/style.css` and are defined four times (dark, light, and the two `data-theme` overrides) — a new colour must be added to all four blocks. Type is Marcellus (display), Marcellus SC (labels), Crimson Pro (text).
- The prose register is pinned in [VOICE.md](./VOICE.md); the tell-linter that enforces it lives in `../qa/_tells.mjs`.
