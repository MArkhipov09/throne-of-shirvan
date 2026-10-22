# Throne of Shirvan — Character Icon Brief

For the friend drawing the icons.

The game has five recurring named characters. Each one has an existing placeholder portrait in `assets/portraits/` that you're replacing. The aesthetic target is **Persian miniature** — flat shapes, limited palette, framed composition, head-and-shoulders.

---

## The five characters

### 1. Vizier Farrukh — *the Vizier*

The Shah's chief minister. Career bureaucrat. Brings most fiscal and administrative questions to the throne. Trusted because he is competent; quietly powerful because he controls the books.

- **Domain:** tax tolls, infrastructure, debasement, public borrowing, state reform.
- **Tone:** measured, advisory, polite. Always opens "Shah, …" Presents both sides of every decision before recommending one.
- **Sample line:** *"The Baku-Salyan road has no shelter for two days' march. Caravans are robbed at night and slowed by weather. A caravanserai at Sangachal would pay for itself in trade."*
- **Visual hooks:** turban (stone-coloured with a caspian-blue band, saffron jewel at the centre), neat pointed beard, deep-blue robe with a saffron sash, often holds a rolled scroll. Mature but not old. The most overtly "official" face in the cast.

### 2. Qadi Mahmud — *the Qadi*

The chief Islamic jurist of the realm. Speaks for the mosque and the poor. Reads alliances, treaties, and tax decisions through their moral and legal weight.

- **Domain:** religious law, welfare and famine relief, alliances and treaties, education (madrasas), price controls.
- **Tone:** moral framing, invokes scripture and justice. Quick to mention what the people are suffering. Sees himself as the conscience of the throne.
- **Sample line:** *"The harvest has failed and the bread-sellers are charging six dirhams a loaf. Cap the price at two, Shah. People are eating bark in the alleys behind the mosque."*
- **Visual hooks:** white or pale turban (clerical scholar style), full grey beard, dark robes (caspian or naphtha) with white collar/scarf, holds or stands near a Qur'an or a stack of legal texts. Older than the Vizier. Severe expression.

### 3. Tahmina of Shamakhi — *the silk merchant*

Head of the most powerful merchant house in Shamakhi, the silk capital. The only named woman in the cast. Drives hard bargains, demands written commitments, and isn't afraid to ask the Shah to swear oaths on the Qur'an.

- **Domain:** silk monopolies and concessions, commercial investment, market regulation, salt and luxury trade, oaths and contracts.
- **Tone:** direct, transactional, sharp. Names a price. Walks away if she doesn't get terms.
- **Sample line:** *"Swear on the Qur'an that you will not raise the silk tax for ten years, Shah. My house will invest twenty thousand dinars in new looms and dye-houses if I have your oath. Without it, I keep my silver in the ground."*
- **Visual hooks:** crimson/brick head covering with saffron embroidery dots, central forehead jewel, jewel chains hanging beside the face, deep-blue robe over a saffron inner panel with embroidered seams, small beauty mark, composed face. Wealthy. Mid-life. Carries herself like she already knows the answer.

### 4. General Farrukhzad — *the General*

The Shah's military commander. Pragmatic, blunt, and dangerous. Frames every decision in terms of operational risk and timelines. Will suggest unsavoury shortcuts (debasing the coinage to pay the garrison) when he has to.

- **Domain:** military pay, garrison loyalty, mountain campaigns, debasement-for-soldiers, succession threats. The General is the character most likely to become an active threat to the throne — his low-affinity arc card hints at a coup.
- **Tone:** soldier's plain speech. Gives counts ("eight thousand dinars and two years already") and deadlines ("six weeks before the markets are looted"). Doesn't bother with diplomacy.
- **Sample line:** *"The garrison has not been paid in three months. I can hold them another six weeks. After that, they take what they want from the markets. Reduce the silver in the dinar. Pay them in light coin. They will not check."*
- **Visual hooks:** helmet or pointed kulah cap with mail aventail, scarred or weathered face, trimmed beard, dark armoured robe or chainmail under brick-red surcoat, sword hilt visible. Hard expression. Younger and harder than the Vizier.

### 5. Envoy Toghan — *the foreign envoy*

A Turkic-named diplomat (Toghan = "falcon" in Old Turkic). Represents the Ilkhan / Great Khan — the larger suzerain power. Delivers demands and gifts both. Not Shirvani; he's a foreigner at court, and his presence is itself a reminder of who the Shah ultimately answers to.

- **Domain:** tribute, foreign gifts and windfalls, geopolitics, integration of nomadic groups.
- **Tone:** formal, ceremonious, slightly cold. Speaks for someone else. Quotes numbers from a memorised list ("twelve thousand silver dinars, four caravan-loads of silk, and twenty falcons").
- **Sample line:** *"The Ilkhan demands his annual tribute. Twelve thousand silver dinars, four caravan-loads of silk, and twenty falcons. Pay it, Shirvanshah, or his cousin will be at your gates with three thousand horse before the rivers freeze."*
- **Visual hooks:** Mongol-Turkic court dress rather than Persian — fur-trimmed conical hat or steppe cap, longer drooping moustaches, embroidered kaftan in moss-green or caspian, often carries a falcon or has falcon imagery on his clothing (the name). Sharper, more angular features than the Persian-coded characters. Imperial messenger, not local.

---

## Format and specs

Drop the finished files at:

```
assets/portraits/vizier.svg
assets/portraits/qadi.svg
assets/portraits/tahmina.svg
assets/portraits/general.svg
assets/portraits/envoy.svg
```

Filenames must be exact, lowercase, and `.svg`. Replacing the existing files is fine — they're placeholders.

### Preferred format: SVG

- **viewBox:** `0 0 256 256` (matches existing — renders to 96×96 in the game)
- **Style:** flat shapes, no gradients, no photoreal shading. Persian miniature flatness. Stroke weights around 0.5–2.4. Look at any of the existing `.svg` files in `assets/portraits/` for the exact style to match.
- **Composition:** head-and-shoulders bust, centred, facing roughly forward (3/4 view OK), with the decorative saffron frame around the outside.
- **Frame convention:** double rectangle border + four diamond corner ornaments in saffron (`#c89b3c`). Copy this block from any existing portrait if you want it to match:
  ```svg
  <g fill="none" stroke="#c89b3c">
    <rect x="6" y="6" width="244" height="244" stroke-width="1.5"/>
    <rect x="14" y="14" width="228" height="228" stroke-width="0.5"/>
  </g>
  <g fill="#c89b3c">
    <path d="M 22 18 l 4 4 l -4 4 l -4 -4 z"/>
    <path d="M 234 18 l 4 4 l -4 4 l -4 -4 z"/>
    <path d="M 22 234 l 4 4 l -4 4 l -4 -4 z"/>
    <path d="M 234 234 l 4 4 l -4 4 l -4 -4 z"/>
  </g>
  ```
- **Background fill:** the warm parchment colour `#e6dcc4` filling the whole 256×256 square.

### Palette (use these exact hex values for coherence with the game's design tokens)

| Token | Hex | Use |
|---|---|---|
| ink | `#1a1a1f` | strong outlines, hair |
| parchment | `#f3ebd9` | skin, light fabric |
| caspian | `#1e3a5f` | dignified robes (Vizier, Tahmina outer) |
| saffron | `#c89b3c` | gold ornament, frame, jewels |
| naphtha | `#2c1810` | dark fabric, beard, line-work |
| stone | `#e6dcc4` | background, light turban |
| moss | `#4a6741` | green accents (Envoy good fit) |
| brick | `#7a2f2a` | red textile (Tahmina headcover, General surcoat) |
| silk | `#8a5a14` | darker gold accents |

Try to stay within these. New colours dilute the visual system.

### Alternative: PNG

If SVG isn't your medium, PNG works too. Specs:
- **Size:** 256×256 px (or larger, square)
- **Background:** the parchment colour `#e6dcc4` (not transparent — match the existing aesthetic)
- **Format:** PNG

If you go PNG, tell me — I need to change one line in `src/game.js` to look for `.png` instead of `.svg`.

---

## Reference

For style anchoring, the existing placeholders are at `assets/portraits/*.svg`. They're decent draft work — the brief here is "in this aesthetic, but better-drawn." Look at `vizier.svg` and `tahmina.svg` especially for the level of detail expected.

The game renders these at 96×96 with a thin border. They don't need photoreal detail — they need to read clearly at small size and feel of-a-piece with each other.
