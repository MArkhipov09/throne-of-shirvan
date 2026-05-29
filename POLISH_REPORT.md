# Polish Report — Throne of Shirvan

> **⚠️ Partially superseded (2026-05-29).** This report audited a 35-card build
> (26 decision + 6 arc + 3 crisis). The deck is now **54 cards** (37 decision +
> 10 arc + 7 crisis). Most of §6's accessibility findings are **fixed** (brick
> warning hue, stat `aria-label`s + focus ring, `aria-live`, `prefers-reduced-motion`,
> speaker accent colours, focus-after-Continue). The naphtha-inertness finding
> (§2) and the `general-debasement` fake-choice (§1) drove a balance pass: naphtha
> now has live up/down sources and a reachable shortage crisis, the high-naphtha
> fire crisis is now reachable, every character's arc is reachable in both
> directions, and the explanation essays were rewritten away from the uniform
> 3-act template. The per-card balance *table* below is still roughly valid for
> unedited decision cards; the counts, aggregates, arc/crisis tables, and
> envoy/naphtha quick-wins are stale. Re-run against the current 54-card corpus
> before trusting any aggregate here.

Analytical pass on `content/cards.js`, `content/crises.js`, `src/game.js`, `src/style.css`, and `index.html`. No files modified except this report.

## 0. Inventory note (read first)

The brief assumed **25 decision cards + 6 arc cards + 3 crisis cards = 34**. Actual count in the repo is **26 decision cards + 6 arc cards + 3 crisis cards = 35**. The `REIGN_LENGTH` constant is still `25` (`src/game.js:24`), so the deck has one card you'll never see in a single reign. Either drop a decision card or bump `REIGN_LENGTH` to 26.

All counts below use the actual 26 / 6 / 3 inventory.

---

## 1. Stat balance audit

For each card: total absolute magnitude of stat changes per option (`|Δ|` summed across `effects`). Affinity effects are excluded. Each card is flagged on three rules:

- **SAME** — both options change the same stat in the same direction (no real trade-off on that stat)
- **RATIO** — one option's total `|Δ|` is more than 2× the other
- **SIZE** — combined total `|Δ|` < 8 (trivial) or > 35 (oversized)

### Decision cards (26)

| Card ID | opt1 \|Δ\| | opt2 \|Δ\| | Combined | Flags |
|---|---:|---:|---:|---|
| `caspian-toll` | 14 | 11 | 25 | — |
| `genoese-naphtha` | 41 | 10 | 51 | **RATIO** 4.1×, **SIZE** 51 |
| `qadi-grain-cap` | 19 | 20 | 39 | **SIZE** 39 |
| `vizier-caravanserai` | 25 | 6 | 31 | **RATIO** 4.2× |
| `general-debasement` | 24 | 18 | 42 | **SAME** all 4 stats (treasury+, military+, people−, faith−), **SIZE** 42 |
| `envoy-tribute` | 23 | 17 | 40 | **SAME** military (+4 / +8), **SIZE** 40 |
| `village-mulberry` | 18 | 10 | 28 | — |
| `tahmina-monopoly` | 28 | 12 | 40 | **RATIO** 2.3×, **SIZE** 40 |
| `tanners-water` | 17 | 14 | 31 | — *(opt2 has an explicit `naphtha: 0` — dead entry)* |
| `caspian-fishery` | 14 | 13 | 27 | — |
| `tax-farmer-claim` | 9 | 9 | 18 | **SAME** people (+2/+1) and military (−2/−1) |
| `general-campaign` | 20 | 18 | 38 | **SIZE** 38 |
| `windfall-silver` | 17 | 19 | 36 | **SIZE** 36 (marginal) |
| `tahmina-oath` | 20 | 11 | 31 | — |
| `merchant-loan` | 32 | 15 | 47 | **RATIO** 2.1×, **SIZE** 47 |
| `qadi-alliance` | 17 | 9 | 26 | — |
| `vizier-elasticity` | 23 | 11 | 34 | **SAME** treasury (+10 / +4), **RATIO** 2.1× |
| `qadi-madrasa` | 22 | 9 | 31 | **RATIO** 2.4× *(opt2 has explicit `military: 0` — dead entry)* |
| `tahmina-salt` | 21 | 13 | 34 | — |
| `general-wages` | 25 | 7 | 32 | **SAME** treasury (+8/+3) and people (−5/−2), **RATIO** 3.6× |
| `noble-sumptuary` | 16 | 11 | 27 | — |
| `mint-consolidation` | 12 | 6 | 18 | **RATIO** 2.0× (at boundary) *(both options use explicit `0` entries)* |
| `gatekeeper-tolls` | 15 | 7 | 22 | **SAME** people (+4/+2) and faith (+2/+1), **RATIO** 2.1× |
| `watchman-wine` | 14 | 16 | 30 | **SAME** people (−2/−6) and faith (+4/+5) |
| `guild-standards` | 12 | 4 | 16 | **RATIO** 3.0× *(opt2 has explicit `military: 0` and `faith: 0`)* |
| `astronomer-school` | 21 | 7 | 28 | **RATIO** 3.0× *(opt2 has explicit `military: 0`)* |

### Arc cards (6)

| Card ID | opt1 \|Δ\| | opt2 \|Δ\| | Combined | Flags |
|---|---:|---:|---:|---|
| `arc-vizier-reform` | 18 | 8 | 26 | **RATIO** 2.25× |
| `arc-vizier-removal` | 20 | 11 | 31 | — |
| `arc-qadi-council` | 17 | 9 | 26 | — |
| `arc-qadi-fatwa` | 19 | 10 | 29 | **SAME** treasury (−2 / −4) |
| `arc-tahmina-redirect` | 16 | 12 | 28 | **SAME** treasury (−10 / −6) |
| `arc-general-throne` | 23 | 18 | 41 | **SAME** treasury (−12 / −3), **SIZE** 41 |

### Crisis cards (3)

| Card ID | opt1 \|Δ\| | opt2 \|Δ\| | Combined | Flags |
|---|---:|---:|---:|---|
| `crisis-bread-riot` | 28 | 16 | 44 | **SAME** military (−2 / −4), **SIZE** 44 |
| `crisis-fatwa` | 25 | 15 | 40 | **SIZE** 40 |
| `crisis-naphtha-fire` | 35 | 24 | 59 | **SAME** treasury (−4 / −8) and naphtha (−25 / −8), **SIZE** 59 |

### Summary of stat-balance flags

- **No real trade-off (SAME on some stat)** — 9 cards: `general-debasement` (all four stats!), `envoy-tribute`, `tax-farmer-claim`, `vizier-elasticity`, `general-wages`, `gatekeeper-tolls`, `watchman-wine`, `arc-qadi-fatwa`, `arc-tahmina-redirect`, `arc-general-throne`, `crisis-bread-riot`, `crisis-naphtha-fire`. The worst offender by a wide margin is `general-debasement`: every stat moves in the same direction in both options, so the "choice" between debasing and taxing produces identical signs on treasury, military, people, and faith. The card reads like a choice; mechanically it isn't one.
- **Unbalanced (>2× ratio)** — 10 cards. Worst: `genoese-naphtha` (4.1×), `vizier-caravanserai` (4.2×), `general-wages` (3.6×), `guild-standards` (3.0×), `astronomer-school` (3.0×).
- **Oversized (>35)** — 11 cards. Worst: `crisis-naphtha-fire` (59), `genoese-naphtha` (51), `merchant-loan` (47), `crisis-bread-riot` (44), `general-debasement` (42).
- **Trivial (<8)** — none.
- **Cosmetic / dead entries** — several options write `military: 0`, `faith: 0`, `naphtha: 0` explicitly. The runtime treats `0` the same as absent (since the additive math is a no-op), but it inflates the `Object.entries` loop and obscures intent in `tanners-water` opt2, `mint-consolidation` (both), `qadi-madrasa` opt2, `guild-standards` opt2, `astronomer-school` opt2, `general-wages` opt2.

---

## 2. Stat coverage

Count of cards that include each stat (in either option's `effects`), across all 35 cards. Threshold for flagging: < 30% (i.e. < 11 of 35).

| Stat | Cards with effect | Coverage |
|---|---:|---:|
| treasury | 35 / 35 | 100% |
| people | 35 / 35 | 100% |
| military | 34 / 35 | 97.1% |
| faith | 34 / 35 | 97.1% |
| **naphtha** | **2 / 35** | **5.7%** ⚠️ |

**Flag:** `naphtha` is touched by only two cards — `genoese-naphtha` and `crisis-naphtha-fire`. That means for any reign where the Genoese concession isn't taken and the high-naphtha crisis doesn't fire, the naphtha stat is a permanent ornament locked at its starting value. The intro positions naphtha as "your wildcard resource" but mechanically it's nearly inert. Coverage gap: needs at least ~9 more cards that touch naphtha to clear the 30% threshold. Concrete candidates: a refinery accident (small naphtha hit), a Venetian fire-weapon contract (naphtha−, treasury+), a Sufi taboo on naphtha trade (naphtha+, faith+), a pipeline-substitute donkey-train route, an Absheron wage strike.

The only card whose label even contains the word "naphtha" is `genoese-naphtha`. The crisis card also affects it, but on the high side (overflow at 85), which a player going naphtha-conservative will never trigger. There is no way to *lose* via naphtha collapse without playing the Genoese card. Worth confirming this is intended.

military and faith both miss one card each (`caspian-toll`). Not flagged but worth noting.

---

## 3. Explanation length

Target range **220–280 words**. 70 explanations total (35 cards × 2 options). **11 outside range.**

### Below 220 words

| Card | Option | Words |
|---|---|---:|
| `caspian-toll` | opt1 | **19** |
| `caspian-toll` | opt2 | **15** |
| `genoese-naphtha` | opt1 | 194 |
| `genoese-naphtha` | opt2 | 192 |
| `qadi-grain-cap` | opt1 | 217 |
| `qadi-grain-cap` | opt2 | 206 |
| `vizier-caravanserai` | opt2 | 193 |

`caspian-toll` is a special case: its two explanations are flavour sentences ("The bazaars swell with Persian silk and Russian fur…", "Caravans grumble but still pass…") with no economic essay. It reads like a placeholder from an earlier prototype era. Either rewrite to match the format or accept it as a deliberate gentle-intro card and document that intent.

`genoese-naphtha`, `qadi-grain-cap`, and `vizier-caravanserai` opt2 are within striking distance — a paragraph each closes the gap.

### Above 280 words

| Card | Option | Words |
|---|---|---:|
| `windfall-silver` | opt1 | **312** |
| `guild-standards` | opt1 | 301 |
| `astronomer-school` | opt1 | 294 |
| `gatekeeper-tolls` | opt1 | 283 |

All four are opt1 (the "act" option). Trim by removing one historical illustration each.

`qadi-alliance` opt1 lands exactly at 280 — at the upper bound, not over.

### Length distribution

The remaining 59 of 70 are in range. Median is around 250 words. Distribution is heavily centred — the design target was clearly hit for most of the deck.

---

## 4. Speaker distribution

Counts use the `speakerType` field. Note that 3 of the 6 arc cards (`arc-vizier-removal`, `arc-qadi-fatwa`, `arc-general-throne`) use `speakerType: "one-off"` even though they belong narratively to the vizier / qadi / general arcs respectively. This deflates those characters' face counts.

| Speaker | Appearances (by `speakerType`) |
|---|---:|
| vizier | 5 (`caspian-toll`, `vizier-caravanserai`, `merchant-loan`, `vizier-elasticity`, `arc-vizier-reform`) |
| qadi | 4 (`qadi-grain-cap`, `qadi-alliance`, `qadi-madrasa`, `arc-qadi-council`) |
| tahmina | 4 (`tahmina-monopoly`, `tahmina-oath`, `tahmina-salt`, `arc-tahmina-redirect`) |
| general | 3 (`general-debasement`, `general-campaign`, `general-wages`) |
| envoy | 2 (`envoy-tribute`, `windfall-silver`) |

Sum = 18, average = 3.6. Range ±1 = 2.6 to 4.6.

- **Above average +1: vizier (5)** ⚠️
- **Below average −1: envoy (2)** ⚠️

The envoy is the only one of the five recurring characters who never gets an arc card and only appears twice total. Two clean fixes:
1. Convert one of the more generic "one-off" cards (`tax-farmer-claim`, `windfall-silver` is already envoy, `gatekeeper-tolls`) into a third envoy card, and add a Toghan arc card pair.
2. Or fold one of the vizier cards (e.g. the `caspian-toll` toll question fits the envoy persona just as well).

Counting by *narrative* (treating arc-* speakers by `arcCharacter` where `speakerType` is "one-off"):

| Character | Narrative count |
|---|---:|
| vizier | 6 |
| qadi | 5 |
| tahmina | 4 |
| general | 4 |
| envoy | 2 |

The envoy still sits two below average under that view.

---

## 5. Concept duplication (tags)

Tag inventory across all 35 cards. Tags `arc` (6 cards) and `crisis` (3 cards) are category markers — listed for completeness but not the "concept" the brief asks about. Substantive tag collisions:

| Tag | Cards |
|---|---|
| **fiscal** | `tax-farmer-claim`, `windfall-silver`, `merchant-loan` (×3) |
| **famine** | `qadi-grain-cap`, `crisis-bread-riot` |
| **welfare** | `qadi-grain-cap`, `vizier-elasticity` |
| **currency** | `general-debasement`, `mint-consolidation` |
| **geopolitics** | `envoy-tribute`, `qadi-alliance` |
| **silk** | `village-mulberry`, `tahmina-monopoly` |
| **externality** | `tanners-water`, `watchman-wine` |
| **regulation** | `tanners-water`, `caspian-fishery` |
| **human-capital** | `qadi-madrasa`, `astronomer-school` |
| **standardisation** | `mint-consolidation`, `guild-standards` |
| **succession** | `arc-vizier-removal`, `arc-general-throne` |
| **legitimacy** | `arc-qadi-council`, `arc-qadi-fatwa` |

12 duplicate concepts. Most are defensible (silk really does belong on both silk cards; fiscal is loose enough to cover three). The two worth scrutinising are:

- **`human-capital`** on both `qadi-madrasa` (the textbook merit-good card about education) and `astronomer-school` (an explicit human-capital investment card). These cards teach the same economic concept. One should be retagged or one should be retired. `astronomer-school` is the more sophisticated treatment; if you keep both, retag `qadi-madrasa` toward `merit-goods` only.
- **`externality`** appears on `tanners-water` (negative production externality, textbook case) and `watchman-wine` (Pigouvian tax on a demerit good). These are closely related but distinct concepts. The `watchman-wine` explanation actually leads with the term "demerit good" — narrowing the tag to just `demerit-goods` removes the collision without losing meaning.

Tag also worth flagging for narrowness: **`silk`** appears on two cards but **`naphtha`** appears only on `genoese-naphtha` despite being a stat. If the goal is one substantive concept per card, fine; if tags are also a discoverability index, naphtha is under-tagged.

---

## 6. Accessibility check

### Focus states

| Element | Selector | Issue |
|---|---|---|
| About link | `.about-link:focus-visible` (style.css:66) | Removes default outline (`outline: none`) and replaces with a colour change only (naphtha → caspian). Colour-only focus indication fails WCAG 2.1 SC 1.4.11 — need a visible non-colour cue. |
| Option button | `.options button:focus-visible` (style.css:254) | Removes outline, replaces with `inset 0 0 0 2px var(--naphtha)` box-shadow. Adequate contrast against parchment, but the hover state uses `inset 0 0 0 1px` — only a 1px shift to indicate keyboard focus vs hover. Distinguishable but subtle. |
| Intro begin button | `.intro-begin:focus-visible` (style.css:375) | Same as option button. Same subtle 1px-vs-hover delta. |
| Stat row `<li>` | none | Has `cursor: help` and a `:focus-within::after` tooltip rule (style.css:142), but the `<li>` has no focusable descendant (no button, no link, no `tabindex`). The keyboard tooltip path is dead. |

Recommendation: the `.about-link` should grow a visible outline or box-shadow on focus, not just a colour shift. The two button focus states should differ from hover by more than 1px — bumping to 3px inset, adding a saffron ring, or restoring the native outline would all work.

### ARIA on stat chip tooltips

The stat list items have rich tooltip text in `data-tooltip` (`game.js:83`) but:

1. No `aria-label`, `aria-describedby`, `role`, or `title` is set on the `<li>` or its children.
2. The tooltip is rendered only as a CSS pseudo-element (`::after`), so screen readers cannot see it at all.
3. The `:focus-within` CSS rule (style.css:142) is permanently inert because `<li class="stat">` has no focusable descendant.

Three fixes that compose well:
- Move `STAT_DESCRIPTIONS[name]` into an `aria-label` on the `<li>` (or onto an inner `aria-describedby` element) so screen readers announce it.
- Either add `tabindex="0"` to the `<li>` (and a focus ring) so the tooltip is keyboard-reachable, or render the description inline below each bar.
- The intro screen already lists each stat with a description (`index.html:43-49`); consider whether the tooltip should match that copy exactly. Currently the intro copy and `STAT_DESCRIPTIONS` are nearly identical but not synchronised — drift risk.

### Contrast — body text on parchment

Computed WCAG luminance ratios (sRGB, gamma 2.4):

| Foreground | Background | Ratio | Pass? |
|---|---|---:|:---:|
| ink `#1a1a1f` | parchment `#f3ebd9` | ≈ 14.3 : 1 | AAA |
| naphtha `#2c1810` | parchment `#f3ebd9` | ≈ 13.9 : 1 | AAA |
| naphtha `#2c1810` (about-link) | parchment `#f3ebd9` | ≈ 13.9 : 1 | AAA |
| naphtha `#2c1810` (.stat-name) | stone `#e6dcc4` | ≈ 12.4 : 1 | AAA |
| caspian `#1e3a5f` (.stat-value, .speaker) | stone `#e6dcc4` | ≈ 8.5 : 1 | AAA |
| ink `#1a1a1f` (option button) | parchment `#f3ebd9` | ≈ 14.3 : 1 | AAA |
| **saffron `#c89b3c` (.stat.warning .stat-name)** | **stone `#e6dcc4`** | **≈ 1.87 : 1** | **FAIL AA** ⚠️ |

The body-text contrast on parchment passes 4.5:1 with enormous headroom — confirmed.

**The one failure** is the warning state for at-risk stats. When a stat crosses 25 / 75, `.stat-name` flips from naphtha to saffron (`#c89b3c` on `#e6dcc4`), which is the moment the player most needs to read it. The contrast there is ~1.87:1, well below the 4.5:1 AA threshold for normal text. Players with low vision will lose the warning entirely.

The warning `.stat-track` border + box-shadow are saffron on stone (~1.88:1 contrast on the track edge) and on parchment (~2.12:1 on the surrounding card background). UI components require 3:1 under WCAG 2.1 SC 1.4.11. The track border also fails.

Fixes: darken the warning hue toward brick or burnt-orange (try `#8a5a14` or `#7a4d00`), or pair the colour change with a non-colour cue (italic / weight / asterisk / "⚠" prefix in `.stat-name`). The brick variable (`#7a2f2a`) already in the palette gives ~5.6:1 against stone and would work.

### Other accessibility notes

- The keyboard hint chips ("1", "2", "↵") are correctly `aria-hidden="true"` (game.js:158, 213, 305). Good.
- No `aria-live` region for card transitions. After a screen reader user clicks an option, the new card content is not announced — they have to manually navigate back to the card region to discover the explanation appeared. A `role="status"` or `aria-live="polite"` wrapper on `.scenario` + `.explanation` would fix this.
- Focus is set on the post-decision Continue button (game.js:309) and the ending screen's "Begin a New Reign" button (game.js:221). But when Continue is clicked and a new card renders, the buttons are recreated and no focus call follows — focus falls to `<body>`. Add `els.options.querySelector("button")?.focus()` at the end of `renderCardImmediate`.
- The intro screen uses both `hidden` attribute and `aria-hidden`. Toggling both is belt-and-braces — fine. Note that `aria-hidden="false"` on the initial render is redundant with the default but not harmful.
- The card fade transition uses `opacity: 0` while the element remains in the DOM and accessibility tree. Screen reader users who navigate during the 150ms fade will read stale content. Low-priority — the window is small.
- The `prefers-reduced-motion` media query is not honoured anywhere. The float-delta animation (1500ms) and the card fade would benefit from reducing for that audience.

---

## 7. Performance and code health (`src/game.js`)

### Event listener lifecycle

- Per-card buttons created in `renderCardImmediate` and `chooseOption` are removed when `els.options.innerHTML = ""` runs. DOM removal severs their listeners; no leak.
- The `stat-delta` floating numbers register a `{ once: true }` `animationend` handler that removes the node (game.js:257). Self-cleaning. Good.
- Global `keydown` handler is registered once in `init` (game.js:383). Good.
- `introHideTimer` is the only mutable timer — cleared on every `showIntro`/`hideIntro` (game.js:317, 332). Good.

**No event-listener leaks identified.**

### Runtime warnings / errors mental trace

- `state.deck` reshuffles when empty (`drawFromDeck`, game.js:111). With 26 decision cards and `REIGN_LENGTH = 25`, a single reign never empties the deck. The reshuffle path is therefore only hit if `decisionCards` shrinks below 25 — fine in normal play.
- `pickArcCard` (game.js:118) walks `CHARACTER_KEYS` in declared order, so simultaneous arc eligibility resolves vizier → qadi → tahmina → general → envoy. Deterministic, but the envoy arc would never fire since no envoy arc cards exist (and envoy never appears as `arcCharacter`). That's fine in current content but means `CHARACTER_KEYS` includes `envoy` only to satisfy the affinity initialisation — minor dead state.
- `chooseOption` updates affinity-eligible only when not already eligible *and* not already fired (game.js:280). If a character is currently arcEligible at "high" and a later card pushes them past the negative threshold, the negative arc trigger is **lost**. Improbable but possible. Worth a comment or a fix.
- `state.cardsPlayed += 1` is gated on `card.triggerStat === undefined` (game.js:287). Crisis cards have `triggerStat`, so they don't count. Arc cards don't have `triggerStat`, so they do count toward the 25 — intentional and consistent with `nextCard()`'s ordering.
- The `chooseOption` effect loop runs through `Object.entries(option.effects ?? {})` and accepts any stat name, silently skipping unknowns (game.js:267). Robust against typos but also silent on them. Consider `console.warn` in dev for unknown stat keys.
- `requestAnimationFrame` inside the setTimeout fade (game.js:233) — the rAF prevents the un-fade from coalescing with the previous frame. Sensible.

**No runtime errors or console warnings expected during normal play.**

### Dev hooks

The localhost-gated `window.dev` block (game.js:47–66) is correctly scoped (`location.hostname === 'localhost' || === '127.0.0.1'`) and won't pollute production. Minor: a final `console.log("dev helpers loaded")` would tell developers it's there; currently silent unless one of the functions is called.

### Unused / inert CSS

- **`.stat[data-tooltip]:focus-within::after`** (style.css:141) — never fires because the `<li>` has no focusable descendant. Either remove or make functional.
- **`els.speaker.dataset.speakerType = …`** (game.js:148, 204) sets `data-speaker-type` on the speaker element ("vizier", "qadi", "tahmina", "general", "envoy", "one-off", "ending"). **No CSS rule reads this attribute.** Either the per-speaker styling was planned and dropped, or it's intentional metadata for screen scrapers. Currently dead. A scoped colour or border-left treatment per speaker would justify the attribute and add visual variety to the card header.
- Everything else in `style.css` traces to a class on at least one rendered element.

### Other code-health notes

- `STAT_NAMES`, `CHARACTER_KEYS`, and `STAT_DESCRIPTIONS` are co-located at module top — clean. `STAT_DESCRIPTIONS` duplicates the intro screen's prose (index.html:43-49) — drift risk noted in §6.
- `resetReign` clears `arcEligible` and `arcFired` (game.js:188-199) — good, no carry-over between reigns.
- `endingScenario`'s overflow branch (game.js:184) reads "Your X has overflowed past what the kingdom can carry." Works for naphtha and faith; reads slightly off for treasury / people / military *overflowing* (those are usually framed as success, not collapse). Worth checking the design intent — overflow at 100 is meant to be bad, but the copy uses the same verb for all five stats.
- `chooseOption` re-runs `renderStats()` twice in some paths (animate loop already redraws the number, then the explicit call at the end). Cheap. Not a problem.

---

## Quick wins (priority order)

If you act on any of this, the order I'd suggest:

1. **Saffron warning contrast.** WCAG fail, simple fix. Swap the warning hue or pair colour with a non-colour cue.
2. **Stat tooltip a11y.** Move `STAT_DESCRIPTIONS` into `aria-label` and make the row keyboard-focusable; right now the explanatory text exists but is reachable only by hover.
3. **`general-debasement` "choice" is fake.** All four stats move in the same direction in both options. Either rewrite one option's effects or rewrite the card.
4. **Naphtha coverage at 5.7%.** Either add 8–10 naphtha-touching cards or drop the stat to a flavour readout.
5. **Card count = 26 vs `REIGN_LENGTH = 25`.** Decide whether the extra card is intentional.
6. **`caspian-toll` explanations are 15–19 words.** Either bring them to 220+ or formally mark this card as the gentle-intro exception.
7. **Envoy under-represented (2/35).** Add a third envoy card and an envoy arc pair.
8. **Tag drift** — narrow `qadi-madrasa` and `watchman-wine` tags to remove the cleanest duplicates.
9. **Length outliers** — trim `windfall-silver` opt1 (312) and the other three 280+ explanations.
10. **`aria-live` on the card region** so screen reader users hear new cards announced.
