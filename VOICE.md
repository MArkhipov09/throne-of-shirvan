# Voice

How the game's prose is written. This governs option explanations (the essays),
ending flavour, and UI copy. Scenario text is in-character dialogue and follows
its own rule: each speaker sounds like themselves, and petitioners ask plainly.

## The register

The game addresses the Shah in the second person, present tense, in modern
plain English. The period lives in the nouns (dinars, bales, seeps, the divan),
never in the syntax. No pastiche grammar, no "thee", no cod-medieval inversion.
An essay is a good footnote that happens to be spoken to a ruler: it explains
one economic idea against the facts on the card, and stops.

- Name the concept once, early, and flatly. "That is all the Laffer curve
  claims" is fine; "This is the Laffer curve standing at your city gate" is not.
- Address the Shah directly ("you", "your gate"). The word "Shah" itself
  appears at most once per essay, usually not at all.
- 60–140 words, one or two paragraphs. Up to ~200 when a dated historical
  episode earns the room. Some essays should be a single short paragraph;
  no two consecutive cards should read the same shape.
- End quietly: on a fact, a consequence, or the open question. Not on an
  epigram. If the last sentence would work as a fortune cookie, cut it.

## Banned moves

These are the tells the corpus used to be full of. The linter
(`../qa/_tells.mjs`) counts them; keep it at zero or close.

- Closing aphorisms and mic-drop last lines.
- Concept theatre: "That is X", "This is X dressed in armour", "X is the name
  for what you are about to do".
- Rhetorical imperatives opening a sentence: Notice, Watch, Consider, Weigh,
  Picture, Look at, Hear, Ask yourself, Remember.
- The seesaw essay (one paragraph of cost, one mirrored paragraph of benefit)
  as the default shape.
- Personified abstractions ("the seeps always call the debt", "wealth that
  outpaces its walls schedules the raider").
- Em dashes. Rule-of-three lists. "Not X but Y" reversals except where the
  contrast is the actual point.

## Rationed words

House metaphors that appeared dozens of times each. Corpus-wide budgets:
"ledger" ≤ 3, "arithmetic" ≤ 2, "weigh/weighs/weighing" (figurative) ≤ 6,
"coin" as metonym for money stays, "coin" as metaphor for anything else goes.

## Facts

Rewrites may only use facts already present in the text they replace. Cutting
a fact is fine; adding one is not, unless it has been verified against a
source in the session that adds it. Dates, names, and stat effects are frozen.
