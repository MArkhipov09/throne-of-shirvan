# Throne of Shirvan

A Reigns-style card game set in the medieval Shirvanshah court on the Caspian shore. Swipe (well, click) left or right; balance treasury, people, military, faith, and naphtha; try not to be deposed.

## File structure

```
throne-of-shirvan/
├── index.html         # entry page; loads style.css and game.js (ES module)
├── src/
│   ├── style.css      # design tokens (CSS variables) + minimal layout
│   └── game.js        # game state, renderCard(), chooseOption()
├── content/
│   └── cards.js       # array of card definitions; swap freely
└── README.md
```

- `index.html` wires up the HUD (stats + cards-played counter) and the card region (speaker, scenario, options, explanation).
- `src/style.css` defines the palette as CSS variables on `:root` (`--ink`, `--parchment`, `--caspian`, `--saffron`, `--naphtha`, `--stone`) and pulls Cormorant Garamond + Cormorant SC from Google Fonts.
- `src/game.js` holds the game state, renders the current card, and handles option clicks. State is in-memory only.
- `content/cards.js` exports `cards`, an array of `{ speaker, scenario, options: [{ label, effects, explanation }, ...] }`. Add or replace cards there.

## Running locally

The game uses ES modules, so it needs to be served over HTTP (opening `index.html` via `file://` will fail with a CORS error). Any static server will do — pick one:

```powershell
# Python (ships with most systems)
python -m http.server 8000

# Node (no install)
npx serve .

# VS Code: install the "Live Server" extension and click "Go Live"
```

Then visit <http://localhost:8000>.

## Adding a card

Append to the `cards` array in `content/cards.js`:

```js
{
  speaker: "Some Courtier",
  scenario: "What they say to the Shah.",
  options: [
    {
      label: "First choice",
      effects: { treasury: -5, people: +3 },
      explanation: "What happens after.",
    },
    {
      label: "Second choice",
      effects: { faith: +4, military: -2 },
      explanation: "The other outcome.",
    },
  ],
}
```

Stat names: `treasury`, `people`, `military`, `faith`, `naphtha`. Effects are deltas; values are clamped to 0–100. Omitted stats are unaffected.
