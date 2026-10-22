export const cards = [
  {
    id: "caspian-toll",
    speaker: "Vizier Farrukh",
    speakerType: "vizier",
    concept: "Laffer curve",
    scenario: "Shah, the Caspian merchants beg for a lower toll at the Baku gate. They threaten to sail their bales to Derbent instead.",
    options: [
      {
        label: "Halve the toll. Let the silk flow.",
        effects: { treasury: -8, people: 6 },
        explanation: "A toll cut is a bet on elasticity. Halve the rate and every crossing pays you less, but caravans that would have sailed for Derbent keep coming to Baku instead. Whether the gate's take rises or falls depends on how many merchants were genuinely about to leave, and that is all the Laffer curve says: past some rate, the trade you lose costs more than the rate you gained. Nobody knows the true number in advance, including the men threatening to sail.\n\nDerbent is what gives the threat teeth. Their gate is a few days across the same water, and a caravan-master chooses the cheaper number, not the homeland. Baku's harbour still trims its fees on the same reasoning today, to keep transit cargo that could route through a rival port.",
      },
      {
        label: "Hold the toll. The treasury comes first.",
        effects: { treasury: 6, people: -5 },
        explanation: "Hold the rate and you are betting Baku sits on the near side of the Laffer curve, where a toll can stay high and the caravans keep paying it. This season the bet looks safe. Rerouting to Derbent costs a merchant real time and real risk, and grumbling is cheaper than moving.\n\nThe cost comes in goodwill rather than coin. The bazaar starts calling you greedy, the loyal houses start pricing the northern sail seriously, and every year the toll stays proud the case for leaving gets easier to make. The revenue is yours now. Whether the trade is still here in five years is the part no clerk can promise you.",
      },
    ],
    tags: ["trade", "resource-economics"],
  },
  {
    id: "genoese-naphtha",
    speaker: "A Genoese merchant",
    speakerType: "one-off",
    concept: "Non-renewable resources",
    scenario: "Grant my house the right to draw naphtha from Absheron. We pay in Venetian silver, up front. Your seeps are wasted on lamp-oil and ointment.",
    options: [
      {
        label: "Grant the concession.",
        effects: { treasury: 14, people: -4, faith: -3, naphtha: -20 },
        flag: "sold-genoese",
        explanation: "A seep is a non-renewable resource: what the Genoese drains does not grow back. You are trading a thin trickle of income that would have arrived every year, indefinitely, for one purse that arrives once and will be spent by Nowruz.\n\nYour forefathers kept the wells in hand for exactly this reason. They sold the dipping of them season by season, to Baku men who could be taxed and, when they cheated, replaced. They never sold the ground. The caliphs took the same view; al-Mansur was already taxing this naphtha while Baghdad's walls were going up. The Genoese proposes the reverse arrangement, and his coin does not refill the way the spring would have.",
      },
      {
        label: "Refuse him.",
        effects: { treasury: 0, military: -4, faith: 4, naphtha: 2 },
        explanation: "Refusing him is how you treat a non-renewable resource as one. When the foreign majors came back to Baku in the 1990s they were not sold the oil either. They got contracts: pump the field, take an agreed slice, the state keeps the field, because a field cannot be remade once it is gone. Strip away the dollars and it is the same choice the Genoese is pressing on you now.\n\nNaphtha made Shirvan's name before anything else did. The Baghdad geographers called this the land of the naphtha fountain, boats carried the white oil north toward the Volga, Marco Polo noted seeps enough to load many camels, and the rulers here grew rich taxing every barrel that left rather than selling the source. Wealth that visible attracts cheap offers. He will be back in spring with a smaller one.",
      },
    ],
    tags: ["resources", "intertemporal", "naphtha"],
  },
  {
    id: "qadi-grain-cap",
    speaker: "Qadi Mahmud",
    speakerType: "qadi",
    concept: "Price ceilings",
    scenario: "The harvest has failed and the bread-sellers are charging six dirhams a loaf. Cap the price at two, Shah. People are eating bark in the alleys behind the mosque.",
    options: [
      {
        label: "Cap the bread price at two dirhams.",
        effects: { treasury: -6, people: 6, military: -2, faith: 5 },
        explanation: "In 1294 the Ilkhan Gaykhatu printed banknotes at Tabriz stamped with the promise that provisions would become cheap and rich and poor made equal. The bazaars shut within three days. Nobody would hand over good flour for a square of paper a prince had priced by decree, and the minister who dreamed it up was hunted down and killed.\n\nA price ceiling fails the same way. Decree bread at two dirhams when the harvest says six and you have not made bread cheap, you have made it scarce: the shelf empties at a loss and the rest moves behind the baker's back at the real price. If you want the poor fed, the treasury can buy grain and give it away, bearing the loss itself. What it cannot do is order the baker to bear it.",
      },
      {
        label: "Let the price rise. The market will clear.",
        effects: { treasury: 2, people: -10, military: 2, faith: -6 },
        explanation: "Refuse the price ceiling and the price does its ugly work. At six dirhams the hoarder opens his cellar and the miller brings out the sacks he was holding back, because selling finally beats waiting, and the shelves fill again. The market clears. The widow behind the mosque is not in it; she eats less, and then nothing.\n\nThe Qadi's objection is not economics and does not pretend to be. Scripture does not ask whether the market cleared. It asks who ate, and the mosques will be asking it at Friday prayers.",
      },
    ],
    tags: ["famine", "price-controls", "welfare"],
  },
  {
    id: "vizier-caravanserai",
    speaker: "Vizier Farrukh",
    speakerType: "vizier",
    concept: "Public goods",
    scenario: "The Baku-Salyan road has no shelter for two days' march. Caravans are robbed at night and slowed by weather. A caravanserai at Sangachal would pay for itself in trade. The merchants will not build it. They will use it.",
    options: [
      {
        label: "Build it from the royal treasury.",
        effects: { treasury: -12, people: 8, military: 3, faith: 2 },
        affinityEffects: { vizier: 1 },
        explanation: "A caravanserai is a public good: once the walls stand at Sangachal, every caravan sleeps behind them whether it paid or not, so no merchant will pay. Each house waits for a rival to fund the thing it can then use for free, the wall never rises, and the road keeps eating men and silk in the dark between Baku and Salyan.\n\nSo it gets built by the treasury or by nobody. You are down twelve thousand dinars, and the robberies on the Salyan road stop being a standing line in the complaints.",
      },
      {
        label: "Let the merchants organise themselves.",
        effects: { treasury: 2, people: -3, military: -1 },
        affinityEffects: { vizier: -2 },
        explanation: "Wait for the merchants to organise it themselves and you will wait through several winters of robbed caravans. Shelter on a public road is a public good; every house profits from it and none can be made to pay for it, so each hoards its silver and hopes to ride through a roof someone else raised.\n\nBaku is the proof in stone. The walled inner city, the Maiden Tower, the palace Ibrahim began and Farrukh Yasar finished: the common works carry rulers' names, because Shirvan had no town council to levy coin for them. What the crown did not commission did not exist. The merchants traded beneath those walls. They did not build them.",
      },
    ],
    tags: ["public-goods", "infrastructure", "free-rider"],
  },
  {
    id: "general-debasement",
    speaker: "General Farrukhzad",
    speakerType: "general",
    concept: "Debasement & inflation",
    scenario: "The garrison has not been paid in three months. I can hold them another six weeks. After that, they take what they want from the markets. Reduce the silver in the dinar. Pay them in light coin. They will not check.",
    options: [
      {
        label: "Debase the coin. Pay the garrison.",
        effects: { treasury: 6, people: -7, military: 8, faith: -3 },
        affinityEffects: { general: 3 },
        flag: "debased-coin",
        explanation: "The first week of a debasement is the good part. The garrison is paid, the storehouse looks full, and the silver you held back is pure profit. Then the moneychangers do what moneychangers do: bite the coin, put it on the scale, and price a soldier's wage by the metal rather than the seal. Good dinars vanish into strongboxes and only the thin ones move.\n\nThis region has run the course before. When silver grew short, the mints of Shirvan and Derbent slid over to copper; Tabriz ran a worse version in 1294, when Gaykhatu's paper money emptied the markets within days and the man who advised it was killed. You are right that the garrison will not check the coin. The bazaar will check it for them, by spring.",
      },
      {
        label: "Raise a special tax instead.",
        effects: { treasury: 4, people: -10, military: 2, faith: -2 },
        affinityEffects: { general: -1 },
        explanation: "A tax does honestly what the light coin does behind the market's back. It takes real wealth, in daylight, from people who can see who took it, which is why collectors are hated and why the hatred is survivable. The Ilkhans' tax-farmers bought their districts in advance and squeezed their profit out of the villages face to face, and they were despised. But the price of bread still meant something, the silver in a dirham still meant something, and the books told the truth.\n\nDebasement spreads the same loss through every market at once, blamed on no one and curable by no one. Take the wealth openly and let them curse the tax-man. He, at least, can be dismissed when it is over.",
      },
    ],
    tags: ["currency", "monetary-policy", "debasement"],
  },
  {
    id: "envoy-tribute",
    speaker: "Envoy Toghan",
    speakerType: "envoy",
    concept: "Opportunity cost",
    scenario: "The Ilkhan demands his annual tribute. Twelve thousand silver dinars, four caravan-loads of silk, and twenty falcons. Pay it, Shirvanshah, or his cousin will be at your gates with three thousand horse before the rivers freeze.",
    options: [
      {
        label: "Pay the tribute in full.",
        effects: { treasury: -15, people: -2, military: 4, faith: -2 },
        affinityEffects: { envoy: 4 },
        explanation: "Twelve thousand dinars buys one thing: the absence of three thousand horse. The sum you never spend on a burned granary or a rebuilt wall appears in no book, and that invisible entry is what opportunity cost means. Tribute is cheap or dear only compared with the war it replaces, and the war would cost more than twelve thousand.\n\nYour house has done this sum before. In 1394 Ibrahim came before Timur bearing gifts in eights when Mongol custom demanded nines, and offered himself as the ninth. The line is said to have spared Shirvan a sacking, which makes it the cheapest tribute a Shirvanshah ever paid. The dear kind came later, in silver, when Qara-Yusuf held Ibrahim himself and set the price. He paid that too, and came home, and never pretended survival was anything but an ordinary expense.",
      },
      {
        label: "Refuse. Spend the silver on the walls instead.",
        effects: { treasury: -6, people: 2, military: 6, faith: -3 },
        affinityEffects: { envoy: -4 },
        explanation: "Refusing does not save the silver; it changes what you pay with. The dinars stay, and in their place you carry a risk you cannot price: that the Ilkhan's cousin actually rides. Opportunity cost cuts both ways here. Get the timing right and the histories call it independence. Get it wrong and they call it a warning to others.\n\nYour house has read this clock correctly before. While the Ilkhanate held together, the Shirvanshahs paid and bowed. Once it broke after 1335 they struck their own coin again and built out the Baku citadel, not from defiance but because Tabriz could no longer enforce the demand. The whole question is whether this is that season. The cousin's three thousand horse are easier to count than the resolve behind them.",
      },
    ],
    tags: ["geopolitics", "opportunity-cost", "tribute"],
  },
  {
    id: "village-mulberry",
    speaker: "A village headman from the Shamakhi hinterland",
    speakerType: "one-off",
    concept: "Comparative advantage",
    scenario: "Shah, half my fields are barley and half are mulberry. The Genoese pay well for silk and my neighbours have already torn out their grain. Should my village commit fully to the worm?",
    options: [
      {
        label: "Order them to specialise in silk.",
        effects: { treasury: 9, people: -6, military: -2, faith: -1 },
        explanation: "Comparative advantage says the village should grow what its ground grows best and buy the rest, and the headman's slope raises a finer silkworm than it does barley. Marco Polo wrote down the silk of Shirvan by name; nobody wrote down its grain. Tear out the barley and the terraces will hold more silver at harvest than they have ever counted.\n\nThey will also hold no bread. A field of worms feeds nobody until the silk is sold and grain is bought back, and that chain runs through Tabriz and Genoa, across a sea you do not command. When Timur came down in 1386 the roads did not ask whether the peasants had eaten. Azerbaijan relearned the lesson with oil: rich at a pace its neighbours envied until the price collapsed around 2015 and the manat lost a third of its value in a winter month. You are wagering his village on a price set in cities he will never see.",
      },
      {
        label: "Tell them to keep both crops.",
        effects: { treasury: -2, people: 5, military: 1, faith: 2 },
        explanation: "Keeping both crops means taking less than comparative advantage offers, on purpose. The mulberry pays better in any good year; the barley pays in the year the silk cannot move, when a field of leaves is just leaves. Two crops feed a family that one rich crop would starve.\n\nThe villages that grew their own bread through the famines of the 1240s understood the trade they were refusing. You do not eat a price you cannot control. Tell the headman to plant for the lean winter rather than the fat autumn, and accept that in most years he will grumble about the silver he did not make.",
      },
    ],
    tags: ["specialisation", "comparative-advantage", "silk"],
  },
  {
    id: "tahmina-monopoly",
    speaker: "Tahmina of Shamakhi",
    speakerType: "tahmina",
    concept: "Monopoly",
    scenario: "Grant my house exclusive rights to ship silk on the Caspian for the next ten years. I pay fifteen thousand dinars now, the treasury knows where it stands, and the other merchants stop fighting me at every port.",
    options: [
      {
        label: "Grant her the monopoly.",
        effects: { treasury: 15, people: -8, military: 2, faith: -3 },
        flag: "granted-monopoly",
        explanation: "Fifteen thousand dinars is the price of a monopoly, and monopolies earn their keep from the buyer's side. Once Tahmina alone may ship silk on the Caspian she names the freight, and she will name it high. Tabriz and Astrakhan pay her surcharge, the smaller Shamakhi houses fold or carry on her terms, and goods that used to pay your customs under a dozen names pay them under one. The jurists had a word for cornering a needful trade, ihtikar, and it was not a compliment.\n\nWhen the Venetian Contarini passed through Shamakhi in the 1470s, Genoese and Venetian buyers were jostling in the same silk market and no one held an exclusive right. The Shirvanshahs let them fight because rival buyers, together, paid more than any single house would pay for the privilege of not having rivals. Her fee arrives once. Her margin is collected forever.",
      },
      {
        label: "Refuse. Keep the trade open to all houses.",
        effects: { treasury: -2, people: 6, military: -1, faith: 3 },
        flag: "kept-market-open",
        explanation: "Refuse, and you keep many small streams instead of one dam. A dozen houses each pay a modest duty, they pay it every year, and none of them can strangle the others into closing. That is the whole argument against manufacturing a monopoly, and your own coast makes it well.\n\nGiosafat Barbaro counted four or five thousand households in Shamakhi in 1476, weaving silk and cotton. A city that thick with producers exists only where carriers compete to serve it. Give one house the carriage and the weavers do not vanish; they become Tahmina's dependents, and their margin flows through her counting-house before any of it reaches yours. The General will grumble that fifteen thousand dinars buys a stretch of wall. A broad tax base buys walls every year.",
      },
    ],
    tags: ["monopoly", "rent-seeking", "silk"],
  },
  {
    id: "tanners-water",
    speaker: "A delegation of bakers and dyers",
    speakerType: "one-off",
    concept: "Negative externalities",
    scenario: "The tanners' lane fouls the canal that feeds our ovens and our dye-vats. The fish are dead from the bridge to the eastern wall. Move them or restrict them, Shah. Or our trades end and theirs continues.",
    options: [
      {
        label: "Move the tanners to outside the walls.",
        effects: { treasury: -6, people: 7, military: -1, faith: 3 },
        explanation: "The price of leather covers labour, bark, and lime. It does not cover the dead fish from the bridge to the eastern wall, the spoiled dye-vats, or the ovens fed by a fouled canal. Those costs are negative externalities: real, unpriced, and paid by bakers and dyers who never agreed to pay them. Moving the tanners outside the walls pushes the cost back onto the trade that creates it.\n\nThe cities you would want to be compared with did this as a matter of course. In Tabriz and Yazd the water-fouling crafts sat outside the walls or downstream of the living quarters, and the muhtasib who policed the markets had plain authority to abate exactly this nuisance. You are not inventing a rule. You are enforcing an old one.",
      },
      {
        label: "Leave them. Leather pays well, and the canal is wide.",
        effects: { treasury: 3, people: -7, faith: -4, naphtha: 0 },
        explanation: "Leave the tanners and the harm goes on being paid, just never by them. The leather trade's tax rolls look healthy; the dyer's ruined batch, the baker's lost customers, the slow drift of trade away from a stinking canal appear in no roll at all. An externality left unpriced does not stay put. It hollows out the quarter one departing neighbour at a time.\n\nIn principle the bakers and dyers could pay the tanners to move and be done with it. In Shamakhi they cannot, because nobody can say cleanly who owns the canal water, and there are too many wronged parties to gather in one room, so the bargain that ought to settle itself never does. That is why this kind of quarrel ends up at a throne.",
      },
    ],
    tags: ["externality", "regulation", "urban"],
  },
  {
    id: "caspian-fishery",
    speaker: "Two village elders from the Caspian shore",
    speakerType: "one-off",
    concept: "Tragedy of the commons",
    scenario: "The sturgeon between our villages are vanishing. Each boat takes more, fearing the next boat takes more still. By next spring there will be no fish for either of us. Set a rule, Shah, or there is no fishery.",
    options: [
      {
        label: "Impose a closed season and quota.",
        effects: { treasury: -3, people: 8, military: 1, faith: 2 },
        explanation: "Every elder in that room runs the same sum. The sturgeon belong to no one, so a fish left in the water is a gift to the next boat; caution earns a man nothing and greed fills his hold. Each rows out and takes all he can, the fishery collapses, and the loss lands on everyone a little and later. That is the tragedy of the commons, and the water cannot solve it on its own.\n\nA closed season and a quota do the one thing the sea cannot: bind every boat at once, so that restraint stops being a gift to your rival. Set the rule and there are fish next spring.",
      },
      {
        label: "Tell them to settle it among themselves.",
        effects: { treasury: 1, people: -8, military: -2, faith: -2 },
        explanation: "Two villages can, in principle, manage a commons themselves. Everyone knows everyone's boat, and the man who takes too much can be shamed or frozen out. If the fishery stopped at their shoreline, telling them to settle it would be good government.\n\nIt does not stop there. The sturgeon cross the village line, boats drift down the coast each season, and the Astrakhan merchants pay the same coin for an honest catch and a stolen one. In 1796 a Russian official named Dveryakin surveyed the Agsu river fishery and recorded exactly that trade: thousands of rubles a year, no questions about thinning spawning runs. A commons whose users answer to nobody within two hundred miles does not govern itself, and this one is a spring or two from proving it.",
      },
    ],
    tags: ["commons", "fisheries", "regulation"],
  },
  {
    id: "tax-farmer-claim",
    speaker: "A tax-farmer from the Salyan district",
    speakerType: "one-off",
    concept: "Asymmetric information",
    scenario: "The harvest failed, Shah. The Kura flooded twice. I cannot pay the full prepayment this year. Reduce my contract by a third or I default and your collection stops.",
    options: [
      {
        label: "Send inspectors to verify before deciding.",
        effects: { treasury: 4, people: 2, military: -2, faith: 1 },
        explanation: "He stood in the district when the Kura rose; you watched from Shamakhi. Only one man in the room knows whether the harvest failed, and that gap is asymmetric information doing its work. A real flood and an invented one look identical from a throne, so the point of the inspectors is not to read his face. It is to make lying expensive. Honest men welcome an audit. Liars discover the harvest was middling after all.\n\nThe Mongol tax administration built a whole apparatus around this. A contractor who pleaded ruin argued it before the yargu, the court of inquiry, and the chronicler Wassaf describes the man who farmed the taxes of Fars in the 1270s spending years and a fortune clearing his account. The audit threat only works while it is believed. Your riders are how you keep it believable.",
      },
      {
        label: "Accept the reduction. Replacing him costs more.",
        effects: { treasury: -6, people: 1, military: -1, faith: -1 },
        explanation: "Forgive the third without proof and the mercy does not stay private. He alone knew whether the Kura took his fields, you settled blind, and by spring every district from Salyan to the hills will have discovered a flood of its own. Why not, when the last man who pleaded ruin kept his silver? You have not lost one contract. You have published the price of lying to you, and it is low. Next year's revenue already carries the discount.",
      },
    ],
    tags: ["asymmetric-information", "moral-hazard", "fiscal"],
  },
  {
    id: "general-campaign",
    speaker: "General Farrukhzad",
    speakerType: "general",
    concept: "Sunk cost fallacy",
    scenario: "Two years and eight thousand dinars into the mountain campaign, Shah. The chieftain holds three valleys. Five thousand more silver and a fresh thousand troops and I take him by autumn. Or we lose what we have already spent.",
    options: [
      {
        label: "Send the silver and the troops. Finish what's started.",
        effects: { treasury: -10, people: -4, military: 4, faith: -2 },
        affinityEffects: { general: 3 },
        explanation: "The eight thousand dinars and the two years are gone whichever way you decide, so they carry no weight in the decision. The honest question is narrower than the one the General asked: will the next five thousand silver and the next thousand men earn more than the chieftain's three valleys are worth? What the campaign has cost so far tells you what mountains cost. It says nothing about whether the next purchase is wise. Ride on for any other reason and you are inside the sunk cost fallacy, reinforcing a stalled siege because so much has already sunk into it, each fresh column justified by the bones of the last.\n\nYour own house knows the cleaner kind of loss. Ibrahim I marched into Georgia, was beaten, was ransomed. A disaster, but one decision, paid once and closed. A defeat collected by installments costs more and never presents the bill whole.",
      },
      {
        label: "Recall him. Cut your losses.",
        effects: { treasury: 4, people: 5, military: -6, faith: 3 },
        affinityEffects: { general: -3 },
        explanation: "Recall him and you write off the eight thousand and the two years in one stroke, which is exactly what sunk costs are for. The silver is gone whether you ride on or ride home; the only live question is what the next coin buys, and in broken mountain country the answer has usually been nothing. The ground is cut up, the locals know every defile, and the valleys at the end are worth less than the road to them.\n\nAkhsitan I held Shirvan through the twelfth century by this restraint, lending strength to Georgia against raids while refusing to chase glory up into Daghestan. The freed silver goes to walls and winter grain, where it earns. The chieftain keeps his rocks. The General keeps a bruise, which heals cheaper than a mountain war.",
      },
    ],
    tags: ["sunk-cost", "military", "strategy"],
  },
  {
    id: "windfall-silver",
    speaker: "Envoy Toghan",
    speakerType: "envoy",
    concept: "Quantity theory of money",
    scenario: "A gesture of friendship from the Great Khan, Shirvanshah. Forty thousand silver dinars in coin, delivered to your treasury this week. Build what you wish. Spend what you wish.",
    options: [
      {
        label: "Distribute it widely. Tax remission, public works, festivals.",
        effects: { treasury: -2, people: 9, military: -2, faith: 4 },
        affinityEffects: { envoy: -3 },
        explanation: "The quantity theory of money says coin is only a claim on bread, cloth, and labour, and when claims multiply while loaves do not, each loaf costs more claims. Pour forty thousand dinars into Shamakhi in one season, through remissions and festivals, and the grain seller raises his price before your alms reach the poor man's hand. By spring the windfall buys what a much smaller purse bought in autumn.\n\nGaykhatu found the limit of the trick in 1294: his printed notes promised cheap provisions and equality of rich and poor, and the bazaars simply closed rather than sell against paper. The generosity will be remembered. The silver will be gone, scattered thin across a season of higher prices.",
      },
      {
        label: "Hold it in the treasury vault. Spend slowly across years.",
        effects: { treasury: 12, people: -3, military: 3, faith: -1 },
        affinityEffects: { envoy: 3 },
        explanation: "Locked in the vault, the forty thousand does not chase the loaves Shamakhi already bakes, so prices barely stir in the year of the gift. Spent a little at a time, the coin keeps next year roughly the purchasing power it has today. That is the quantity theory of money working in your favour for once.\n\nIt is also the rarer choice. The Ilkhans who ran through their silver reached for the mint when the vaults dried, and shaved the dirham thinner; Gaykhatu's vizier ended up squeezing forced loans from the Tabriz merchant houses to field an army at all. A ruler who hoards in a fat year is jeered as a miser until the lean year arrives and finds something left.",
      },
    ],
    tags: ["money-supply", "inflation", "fiscal"],
  },
  {
    id: "tahmina-oath",
    speaker: "Tahmina of Shamakhi",
    speakerType: "tahmina",
    concept: "Credible commitment",
    scenario: "Swear on the Quran that you will not raise the silk tax for ten years, Shah. My house will invest twenty thousand dinars in new looms and dye-houses if I have your oath. Without it, I keep my silver in the ground.",
    options: [
      {
        label: "Swear the oath on the Quran.",
        effects: { treasury: 8, people: 4, military: -2, faith: 6 },
        explanation: "Tahmina is buying a credible commitment, and the Quran is the collateral. Today a low silk tax suits you. The day her looms are bolted to the floor and her dye is in the vats, raising the tax would cost you nothing and earn you plenty, and she cannot carry a dye-house to Tabriz. She knows your future self will be tempted to rob her present self, so a bare promise is worth nothing to her. An oath you can break only at the price of your soul is the one promise a merchant will lend twenty thousand dinars against. Bind your own hands and her silver comes out of the ground.",
      },
      {
        label: "Refuse the oath. Keep your options.",
        effects: { treasury: -4, people: -2, military: 2, faith: -3 },
        explanation: "Refusing the oath keeps something real: the right to raise the silk tax in a lean year, when an army must be paid before the snows. Flexibility is worth money. The question is whether it is worth more than the twenty thousand she will now keep buried.\n\nHer caution has good precedent in your century. Shams al-Din Juvayni served Hulagu's house for two decades and in 1284 lost his head and his estates the moment the court turned; whatever private assurances he held were worth nothing across a change of master. Merchants watched, and learned to lend only against binding terms. Refuse honestly and you have kept your options. Refuse meaning to break faith later, and you are spending a reputation that takes a generation to rebuild.",
      },
    ],
    tags: ["time-inconsistency", "commitment", "investment"],
  },
  {
    id: "merchant-loan",
    speaker: "Vizier Farrukh",
    speakerType: "vizier",
    concept: "Crowding out",
    scenario: "The wall along the western approach needs another thirty thousand dinars and the treasury holds twelve. The Shamakhi merchant houses will lend us the difference at modest interest. They were going to fund three new caravans this season. They will fund the wall instead.",
    options: [
      {
        label: "Borrow from the merchant houses.",
        effects: { treasury: 18, people: -5, military: 6, faith: -3 },
        affinityEffects: { vizier: 1 },
        explanation: "There is only so much idle silver in Shamakhi, and a coin lent to the throne is a coin not lent to anyone else. That is crowding out. The merchant houses have a fixed sum to place this season; lend it to you and the three caravans they meant to fund do not ride. The wall rises, and the trade that would have grown beside it does not. Their money has not multiplied. It has changed from a thing that earns and is taxed into a thing that stands and is defended.\n\nThe Ilkhans showed what the hard version looks like: in the 1290s the vizier at Tabriz pressed a forced loan on the merchant partnerships funding the Gulf trade to field an army, asking the realm's engine to push its own cart, and the routes ran thinner for years after.",
      },
      {
        label: "Wait. Save until the treasury can fund the wall directly.",
        effects: { treasury: -3, people: 4, military: -4, faith: 4 },
        affinityEffects: { vizier: -2 },
        explanation: "Save until the treasury can pay for the wall itself and you sidestep crowding out entirely: the merchants' silver stays on the caravan routes, earning and being taxed, while the wall waits. This was in fact the Shirvanshah habit. The palace complex was accumulated stone by stone across three fifteenth-century reigns, and Khalilullah's caravanserai at Sangachal was paid out of current revenue, partly because borrowing at scale was hard to arrange and harder to repay.\n\nThe discipline has a price with a sharp edge. A wall half-built when the western approach is tested is worth very little, and you are gambling that the quiet season lasts as long as your saving does.",
      },
    ],
    tags: ["crowding-out", "borrowing", "fiscal"],
  },
  {
    id: "qadi-alliance",
    speaker: "Qadi Mahmud",
    speakerType: "qadi",
    concept: "Game theory",
    scenario: "The Georgian king's envoy waits in the courtyard, Shah. He proposes a defensive league against the Ilkhan: each kingdom marches if the other is attacked. The Qadi has read the treaty and shares his counsel. Do you sign?",
    options: [
      {
        label: "Sign the league. Bind Shirvan to Georgia.",
        effects: { treasury: -4, people: 2, military: 8, faith: 3 },
        explanation: "A defensive league is two men choosing in the dark, each one's fate hanging on the other's choice. Both keep faith and the Ilkhan meets two armies. Both break it and each bleeds alone, unshamed. The cruel case is the middle one: you march on the appointed day and Tbilisi does not, and the king who stayed home keeps his men while yours lie in the snow. Game theory has no comfort here, only the question of whether you believe his seal.\n\nYour house has answers on both sides. In the year 521 of the Hijra your forebears rode with the Georgian David and the Kipchaks and broke the Seljuks at Didgori, and the gain held for three generations. Within our grandfathers' memory, Ibrahim bound himself to the Georgian Constantine against Qara Yusuf, both kept faith, and both were taken in the same chain. The pact does not fail only through treachery. Sometimes two together are still the weaker side. Ask that question before you ask whether Tbilisi is honest.",
      },
      {
        label: "Refuse. Stand alone.",
        effects: { treasury: 2, people: -2, military: -3, faith: -2 },
        explanation: "There is a move the treaty does not name: declining to play. A small power can sell to every market, exchange envoys with rivals who will not share a table, and keep the freedom to choose its enemy late. A binding league spends that freedom early. It marks you as the larger power's enemy before you have decided to be one, and stakes your survival on an ally arriving in time, which allies seldom do.\n\nThis was the actual craft of Shirvanshah survival. When Timur and Toqtamish tore at each other across the steppe, Ibrahim rushed to neither, held the balance for years, and bowed to Timur only when one side was plainly the greater. Submit when the suzerain is strong, pay, keep the inner kingdom, promise nothing that cannot be unsaid next season. The Qadi read the treaty as a shield for the lands of the faith, and he will name your refusal by its plain word.",
      },
    ],
    tags: ["coalitions", "game-theory", "geopolitics"],
  },
  {
    id: "vizier-elasticity",
    speaker: "Vizier Farrukh",
    speakerType: "vizier",
    concept: "Price elasticity",
    scenario: "The treasury needs another four thousand dinars before winter, Shah. We can tax the silk leaving Shamakhi or we can tax the bread baked in the city. Bread will raise more, with less complaint from the merchants. Silk will raise less, with more complaint from the bakers.",
    options: [
      {
        label: "Tax the bread.",
        effects: { treasury: 10, people: -9, military: 1, faith: -3 },
        affinityEffects: { vizier: 1, qadi: -2 },
        explanation: "A man who cannot afford bread still buys bread. He has children and there is nothing else to set in front of them, so when the price climbs he pays the climb and goes without something else. That is inelastic demand, and it is why a bread tax fills the chest so reliably: you are skimming a thing no one can refuse. Silk is the opposite creature. A Venetian agent who finds Shamakhi dear writes to Bursa by the next caravan, and your toll collects on goods that have quietly stopped passing.\n\nSo the tax that raises the most lands, by its nature, on whatever the poor most need. The figure is sound, and the morning after is not. The Shirvanshahs in their better years stood at the gate and took a share of what moved through it, on the theory that trade can be coaxed back and a hungry quarter cannot be un-rioted.",
      },
      {
        label: "Tax the silk exports.",
        effects: { treasury: 4, people: 3, military: -2, faith: 2 },
        affinityEffects: { qadi: 1, tahmina: -2 },
        explanation: "Silk can walk away, which is the definition of elastic demand, so taxing it will raise less than bread would. Some buyers reroute to Bursa where the same grade goes untaxed, the volume through your gate thins to match, and the four thousand dinars arrive short.\n\nBut look at who carries the burden. A silk levy lands on foreign agents and on Tahmina's wealthy cousins, none of whom bake anyone's morning loaf. A merchant who feels squeezed sulks and sails for Derbent. A quarter that cannot eat does not sulk. The smaller sum, collected without hunger, costs the throne less than the difference.",
      },
    ],
    tags: ["elasticity", "taxation", "welfare"],
  },
  {
    id: "qadi-madrasa",
    speaker: "Qadi Mahmud",
    speakerType: "qadi",
    concept: "Merit goods",
    scenario: "The boys of poor families learn nothing but their fathers' trade, Shah. A madrasa in Shamakhi, with scholarships for the cleverest sons of the bakers and the cobblers, would in twenty years give you judges, scribes, and astronomers. The treasury pays now. The kingdom collects later.",
    options: [
      {
        label: "Found the madrasa with royal funding.",
        effects: { treasury: -10, people: 5, military: -1, faith: 6 },
        affinityEffects: { vizier: 1, qadi: 3 },
        explanation: "Schooling is a merit good: the gain from a clever cobbler's son does not stay with the cobbler. He becomes a judge who weighs a contract correctly, a scribe whose tax-roll holds, an astronomer who fixes the calendar the harvest depends on, and none of that flows back to the father who would have had to pay for it. A poor family cannot borrow against a future it will not live to collect, so the market never funds the boy. Only a treasury can, and only one willing to be poorer than its grandsons.\n\nYour forebears paid for exactly this. The court kept Seyid Yahya Bakuvi, astronomer and Sufi master, and raised his tomb inside the palace walls when he died. Learning pooled in Bukhara, Cairo, and Tabriz, wherever a prince paid for it and waited thirty years for the return.",
      },
      {
        label: "Decline. The merchants can fund their own schools.",
        effects: { treasury: 2, people: -3, military: 0, faith: -4 },
        affinityEffects: { qadi: -3 },
        explanation: "Leave schooling to the market and the merchants will school their own sons. The baker's boy stays at the oven, and the narrow band of literate men you draw judges and scribes from does not widen by one name. Your administration ages at exactly the rate of the men now in its offices. That is the standard fate of an unfunded merit good: everyone values it, nobody buys it for a stranger's child.\n\nThe Ilkhanate ran the experiment at scale. It governed through a class of trained Persian secretaries and lived off that class without replacing it, and when the first generation died in the early fourteenth century, no equal generation stood behind them. Decrees muddled, contracts went unenforceable, and the realm drifted into the hands of whoever still commanded a literate household. The Qadi leaves the courtyard angrier than he came.",
      },
    ],
    tags: ["merit-goods", "human-capital", "education"],
  },
  {
    id: "tahmina-salt",
    speaker: "Tahmina of Shamakhi",
    speakerType: "tahmina",
    concept: "Tax incidence",
    scenario: "Tax the salt, Shah. Levy it on the merchants who bring the brick blocks from the Caspian flats. We will pass the cost to the consumers, every household will pay a little, and the treasury fills without any one of us feeling the squeeze. Nothing simpler.",
    options: [
      {
        label: "Levy the tax on salt merchants.",
        effects: { treasury: 11, people: -7, military: 1, faith: -2 },
        affinityEffects: { qadi: -2, tahmina: 1 },
        explanation: "The merchant signs the writ; the fishwife pays it. Tax incidence follows need, not names. Levy the salt duty on Tahmina's cousins and by noon the brick blocks from the Caspian flats cost a fraction more in every market from Shamakhi to Derbent, and that fraction is the tax, walking out the gate on the backs of households that cannot salt their fish any less this year. The merchant's margin never trembles.\n\nSalt has fattened treasuries since the Abbasids for exactly this reason: nobody can do without it, so the revenue is as sure as anything a state collects, and so is the cursing. Tahmina has told you the truth about who pays. The one figure she left out of the pitch is that the salt merchants are her cousins, and the collection fee stays in the family.",
      },
      {
        label: "Refuse. Salt is the poor man's food.",
        effects: { treasury: -2, people: 6, military: -1, faith: 4 },
        affinityEffects: { qadi: 2, tahmina: -1 },
        explanation: "A poor man spends a copper on salt for every dinar he earns. A rich man spends the same copper and never notices it leave. A salt tax that looks even from the throne is, purse by purse, the most regressive coin you could raise, and refusing it costs you good silver in exchange for not squeezing the kitchen.\n\nThe Shirvanshahs who died in their beds seem to have known this without the vocabulary. Khalilullah leaned his treasury on roads, rents, and the Baku naphtha concessions, and took from the countryside at rates a household could meet after a poor harvest and still sow in spring. He drew from the flow of trade, not from the cooking-pot. A peasant taxed past his bread either flees the land or burns the rolls.",
      },
    ],
    tags: ["tax-incidence", "regressivity", "salt"],
  },
  {
    id: "general-wages",
    speaker: "General Farrukhzad",
    speakerType: "general",
    concept: "Wage rigidity",
    scenario: "Drought, lean trade, the treasury thinned. Pay the garrison three dinars where it once paid four. They will grumble, Shah. They will not desert. They have wives in Baku and nowhere else to take them. Where else will they go? My word holds them.",
    options: [
      {
        label: "Cut the garrison's pay by a quarter.",
        effects: { treasury: 8, people: -5, military: -10, faith: -2 },
        affinityEffects: { general: -3 },
        explanation: "Wages do not slide down the way a treasury does. A soldier reads three dinars where four were promised as a broken word, not a lean year, and wage rigidity means he repays it in kind: he keeps the post and stops keeping it well. The watch grows careless, the storehouse grows light, and the man who would have died for you now merely lives off you. The General counted the desertions that will not happen and missed the loyalty that will.\n\nYou save a quarter of the payroll and purchase a garrison that no longer believes the throne's word on the one subject soldiers never forget.",
      },
      {
        label: "Pay in grain from the royal stores instead.",
        effects: { treasury: 3, people: -2, military: 2, faith: 0 },
        affinityEffects: { general: 1 },
        explanation: "The promised number cannot bend without breaking faith, so leave the number whole and settle the shortfall in something other than coin. Grain from the royal stores keeps the three dinars intact where it matters, in the sum a soldier's wife counts, while the drought makes the grain itself worth more than argument.\n\nThere is a long precedent for armies paid past a failing currency. When the Ilkhanate came apart after 1335 and good silver ran short, the amirs of Azerbaijan and Shirvan handed their men land instead, or the right to take the taxes off it, and an army fed by the soil did not melt away when the mint did. The Vizier notes only that the stores can bear it this season, and asks that you not promise the same of next year's harvest.",
      },
    ],
    tags: ["wage-stickiness", "labour", "garrison"],
  },
  {
    id: "noble-sumptuary",
    speaker: "A senior noble of the court",
    speakerType: "one-off",
    concept: "Unintended consequences",
    scenario: "Shah, the merchants' wives wear Genoese velvet finer than my own daughters'. The order of rank is breaking down in the streets. Ban velvet for any household below noble rank. Let the merchants keep their gold and learn to wear plain wool. The kingdom is not a market.",
    options: [
      {
        label: "Pass the sumptuary law.",
        effects: { treasury: -4, people: -7, military: 1, faith: 4 },
        affinityEffects: { qadi: 1, tahmina: -3 },
        explanation: "Forbid a thing and you teach people what it is worth. Velvet is dear partly because it costs a fortune; stamp a royal ban on it and it also announces that its wearer can defy the Shah, which is worth more. The rich pay gladly for a small flag of insolence. Unintended consequences of this kind are the normal produce of sumptuary law: Elizabeth of England published such rules for forty years and her subjects wore the forbidden silk to her own court, while the Genoese sold more of it the tighter the rules grew.\n\nEnforcement fares no better. A roll of velvet folds small, hides in a wool bolt, and the gatekeeper who waved it through for two dinars last year will do it for five this year. When the manat was pinned a decade ago, the official rate kept its dignity while the true rate did business in the alleys. Pin a market with real weight behind it and it moves underground, where you collect no toll. Tahmina, whose storeroom of velvet just doubled in value, studies the floor.",
      },
      {
        label: "Refuse. Let people wear what they buy.",
        effects: { treasury: 3, people: 5, military: -1, faith: -2 },
        affinityEffects: { tahmina: 2 },
        explanation: "When the merchant sells the cloth and the wife buys it, both walk away better off by their own reckoning, or the sale would not close. Multiplied across every stall in Shamakhi, that surplus is the city's wealth, and the toll on it is yours. Ban the velvet and you trade away the sale, the toll on the sale, and the goodwill of the class that pays your customs, in exchange for a tidier order of dress.\n\nShamakhi became thousands of households spinning silk because its rulers preferred a full treasury to orderly streets. The noble leaves displeased. The treasury does not.",
      },
    ],
    tags: ["sumptuary", "unintended-consequences", "status-goods"],
  },
  {
    id: "mint-consolidation",
    speaker: "The Master of the Royal Mint",
    speakerType: "one-off",
    concept: "Economies of scale",
    scenario: "Three mints, Shah, in Shamakhi, Baku, and Derbent. Each strikes coin a fraction different in weight and silver fineness from the others. Merchants weigh every dinar twice. Consolidate to Shamakhi alone. Cleaner coin, less waste, one workshop instead of three. Or keep the three, and accept the noise.",
    options: [
      {
        label: "Consolidate to one mint at Shamakhi.",
        effects: { treasury: 6, people: 2, military: -4, faith: 0 },
        affinityEffects: { vizier: 2, general: -1 },
        explanation: "Three mints striking coin a fraction apart means every bargain in the realm starts with a scale. The merchant sets a Baku dinar beside a Derbent one, frowns, and weighs, and that small tax of distrust is paid on every transaction before any goods move. Collapse the dies into Shamakhi and the tax vanishes: one weight, one fineness, a coin taken on sight. Economies of scale live partly in the workshop, one set of engravers instead of three, but the larger saving is spread across every deal in the kingdom.\n\nThe Ilkhans arrived at the same answer after the silver famine: dirhams cut at Tabriz, Ganja, and Nakhichevan in the Khan's name came to look like brothers, and trade thickened around the more trustworthy coin. One caution, since you are stacking everything in one place. Shamakhi shook to rubble in 1192 and sent your forebears to Baku. A single mint is a single point of failure.",
      },
      {
        label: "Keep all three mints running.",
        effects: { treasury: -2, people: 0, military: 3, faith: 1 },
        affinityEffects: { vizier: -1, general: 1 },
        explanation: "Keeping three mints means forgoing economies of scale on purpose, and paying for it daily: Baku coin will never quite match Derbent coin, merchants will keep weighing, and the friction adds up across a thousand markets into a sum you feel but never see itemised.\n\nWhat you get for the price is a coinage that survives the loss of a city. Should Derbent burn or its master engraver slip across the border, Shamakhi and Baku strike on without a pause. Your forebears ran the realm this way deliberately; when the Ilkhanate broke apart after 1335, Shirvanshah coin went on being cut in several places at once, and the man who held three workshops still held a kingdom after losing one.",
      },
    ],
    tags: ["economies-of-scale", "standardisation", "currency"],
  },
  {
    id: "gatekeeper-tolls",
    speaker: "The Master of the Baku Gate",
    speakerType: "one-off",
    concept: "Price discrimination",
    scenario: "Shirvani merchants and Genoese merchants pay the same toll at the gate, Shah. Two dinars a load. The Genoese can pay four and will not turn their galleys around. Our own merchants would cry murder if I doubled their rate. Let me charge them differently. The treasury notices.",
    options: [
      {
        label: "Differential tolls — higher for foreigners.",
        effects: { treasury: 8, people: 4, military: -1, faith: 2 },
        affinityEffects: { qadi: 1, tahmina: 2 },
        explanation: "Price discrimination is one good sold at different prices according to what each buyer will bear, and your gate has always been better at it than its rate sheet admits. The Genoese crossed half a sea to stand at your wall; he cannot turn the galley around over a dinar, and the silks in his hold are worth a hundred times the toll. Your own Shirvani can point his mule at Derbent tomorrow. So the foreigner bears four where the local screams at three, and the same traffic yields a fatter purse.\n\nThis is how the tamgha posts actually worked. When Jenkinson rode in for the Muscovy Company in 1562, the governor Abdulla Khan handed him written exemptions particular to the man and his cargo; the posts kept clerks who could read a caravan's need, not published prices. The risk is that the Genoese eventually compare notes in the queue. Your gate-master is wagering that day comes late, and it usually does.",
      },
      {
        label: "Uniform toll for all. Equal treatment.",
        effects: { treasury: -3, people: 2, military: 1, faith: 1 },
        affinityEffects: { qadi: 2 },
        explanation: "A uniform toll takes less than the gate could yield, and takes it on purpose. What the flat rate buys is a price no clerk can shade. A rate that bends for the man with the longer journey also bends for the man with the heavier bribe, and once the gate is known to negotiate, every passage becomes a haggle in the dark of the gatehouse with half the difference ending in the clerk's sleeve. A single posted figure cannot be whispered down.\n\nBe clear that this cuts against the practice of the age. The tamgha posts of Shirvan were built to bargain, tiered and softened by exemptions for whichever house had earned a seal. Insisting that the Venetian and the Shamakhi weaver pay the same is a statement dressed as a tariff, and it will not arrive at the treasury by way of higher revenue.",
      },
    ],
    tags: ["price-discrimination", "tolls", "trade-policy"],
  },
  {
    id: "watchman-wine",
    speaker: "A captain of the Shamakhi city watch",
    speakerType: "one-off",
    concept: "Demerit goods",
    scenario: "The wine taverns in the Armenian quarter multiply, Shah. Muslim youths spend their nights there. Brawls every week. Fathers complain. Tax the wine houses heavily, or close them. The Qadi will applaud either choice.",
    options: [
      {
        label: "Tax the wine houses but allow them to operate.",
        effects: { treasury: 7, people: -2, military: 1, faith: 4 },
        affinityEffects: { qadi: 2 },
        explanation: "A jug of wine is priced at what the wine costs, and a demerit good is one where that price is too low: the bruised neighbour, the weeping father, and the midnight brawl your watch must break up are all paid by someone other than the drinker. A heavy levy on every barrel pushes those costs back onto the men causing them. The crowd at the taverns thins at the margin, the trade stays alive and taxable, and next year it pays again.\n\nYou have not cured the vice. You have made it pay rent, and the Qadi, who wanted the houses closed, will settle for them gelded.",
      },
      {
        label: "Close the wine houses.",
        effects: { treasury: -3, people: -6, military: -2, faith: 5 },
        affinityEffects: { qadi: 3, tahmina: -2 },
        explanation: "Ban a thing people still want and you hand the trade to whoever will break the law. The wine flows on, now from cellars, in barrels labelled honey, at triple the price, sold by men who pay you nothing. The streets look cleaner, the brawls move to alleys the watch does not walk, and a smuggling trade is born carrying your seal of incorporation.\n\nThe Islamic world ran this experiment repeatedly. When Ghazan Khan took Islam in 1295 and proclaimed the old prohibitions, the taverns shuttered and the quiet trade carried on as each governor needed it to: visible obedience, invisible continuation, and ruined dhimmi merchants who had paid their levies faithfully until the law made that impossible. America emptied its bottles in the 1920s and filled its cities with bootleggers. Meanwhile the Armenian quarter's merchants begin asking each other, softly, where else a man might do business.",
      },
    ],
    tags: ["demerit-goods", "prohibition", "externality"],
  },
  {
    id: "guild-standards",
    speaker: "A guild master of the Shamakhi cloth-trade",
    speakerType: "one-off",
    concept: "Network effects",
    scenario: "Every district weighs its bales by a different measure, Shah. The Baku ratl is not the Shamakhi ratl. The Derbent stone is not either. Decree a single standard for all of Shirvan. The merchants will grumble for a year and thank you for a generation.",
    options: [
      {
        label: "Decree a single standard for the kingdom.",
        effects: { treasury: -4, people: 6, military: 1, faith: 1 },
        affinityEffects: { vizier: 2, tahmina: 2 },
        explanation: "A standard is a network effect: one district on the new measure gains nothing, and every district that joins makes joining worth more to the next. That is exactly why no district moves first. Everyone wants one ratl, nobody can afford to be the only market using it, so all of them wait and the trade between them bleeds a little at every weighing.\n\nA throne exists to cut this kind of knot. Decree the single measure and you move the whole network at once, which no guild or house could do at any price. The weavers will curse you for a season of recut contracts and recast counterweights. It is a cost paid once against a friction collected forever, and Tahmina will read it that way by the second year.\n\nCenturies from now, a phone bought in one country will charge from a wall in another because some official body agreed on the prongs. No merchant ever chose that. Someone with a seal imposed it, and everyone downstream profited.",
      },
      {
        label: "Let the districts keep their measures.",
        effects: { treasury: 1, people: -3, military: 0, faith: 0 },
        affinityEffects: { vizier: -1 },
        explanation: "On any market morning in the Shamakhi caravanserai, a Derbent factor and a Baku broker are not haggling over price. They are converting. The Derbent stone is not the Baku ratl, each man carries the conversions like a resented second language, and the bargain closes slower, with a clerk and a counterweight and a sliver of value left on the floor. That sliver is the network effect of a common standard, unclaimed.\n\nMost realms, yours included, let it lie. Enforcing one measure means inspectors on the roads, true weights locked in the royal storehouse, a magistrate for the quarrels that follow, and most shahs counted that cost against a market that more or less worked and let the matter rest. The friction never kills the trade. It taxes it, in fractions too small to feel, paid into nobody's treasury.",
      },
    ],
    tags: ["network-effects", "standardisation", "coordination"],
  },
  {
    id: "astronomer-school",
    speaker: "Seyid Yahya Bakuvi, court astronomer",
    speakerType: "one-off",
    concept: "Knowledge spillovers",
    scenario: "Shah, my eyes weaken and my students are few. Fund an observatory on the hill above the palace and a school for those who would study the stars, the calendar, the mathematics of irrigation. The cost is real today. The kingdom that comes after you will not know its debt.",
    options: [
      {
        label: "Fund the observatory and the school.",
        effects: { treasury: -12, people: 3, military: -1, faith: 5 },
        affinityEffects: { vizier: 1, qadi: 2 },
        explanation: "A field of barley pays you back this autumn. A boy taught to read the stars pays back in the reign of a Shah you will never meet, and half of what he knows will leak to every court that can hire him. That leak is a knowledge spillover, and it is why most rulers, doing the honest sums, let the schools starve: the harvest never lands inside their own lifetime or entirely inside their own borders.\n\nYour dynasty has chosen otherwise before, and it shows in stone. The men who reckoned the angles for the Maiden Tower, set the qibla for the mosques, and timed the irrigation channels were kept on the court's purse by Khalilullah and Farrukh Yasar. Bakuvi will not see this observatory finished. The students bent over his tables in twenty years will, and they will be yours before they are anyone else's.",
      },
      {
        label: "Decline. The treasury cannot afford it now.",
        effects: { treasury: 1, people: -2, military: 0, faith: -4 },
        affinityEffects: { qadi: -2 },
        explanation: "Twelve thousand dinars stay in the vault, and that is the whole of the visible account. The invisible side runs longer. Bakuvi dies, his students drift to Tabriz, Herat, and Bukhara where the purses are open, and the next generation of men who reckon your taxes and your canals is drawn from a shallower well. Declining to fund a knowledge spillover always looks free at the moment of declining.\n\nThe region has run this experiment. After the Ilkhanate broke in the 1330s, the scholars of the divan tradition lost their patrons to squabbling successor princes, and the administrations that survived were thinner, clumsier things than the one Ghazan's men had run. Every oil state faces the same disguised choice: school a generation against the day the wells stop, or pocket the windfall and trust that they never do.",
      },
    ],
    tags: ["human-capital", "research", "long-run-growth"],
  },
  {
    id: "naphtha-greekfire",
    speaker: "A Genoese galley-captain",
    speakerType: "one-off",
    concept: "Dual-use export controls",
    scenario: "\"Great Shah, your hills near Baku weep oil that no other shore can match. Let my men cook it into sea-fire for the fire-pots of my galleys, and I will count out the silver before a single barrel leaves the wharf — Genoa pays in coin, not promises.\"",
    options: [
      {
        label: "Sell them the fire-oil.",
        effects: { treasury: 10, military: 3, faith: -2, naphtha: -12 },
        explanation: "Raw naphtha lights a lamp. Cooked to the Genoese pattern it clings to a hull and burns on the water, and that difference is what dual-use export control is about: you are not selling barrels, you are selling a capacity, and a capacity does not expire when the coin is spent.\n\nConstantinople understood this from the day it first poured fire across the waves. The recipe was never written down, the siphon-crews learned mouth to ear, the naphtha moved under seal, and an artificer who carried the method abroad could expect to lose his hands. A good with a peaceful use and a deadly one cannot be sold like wheat, because the deadly use is sold exactly once.\n\nTake the silver if the treasury needs it. The clerics will mutter that you have armed a Christian fleet against the faithful, and nothing in the contract says whose harbour it burns.",
      },
      {
        label: "Refuse to arm another man's fleet.",
        effects: { treasury: -3, military: -1, faith: 3, naphtha: 4 },
        explanation: "He is not buying oil. He could scoop that from a roadside seep and pay a peasant in copper. He is buying the marriage of oil and fire, the use that sinks fleets, and once it sails out of your harbour it keeps no loyalty to the seller. Dual-use export control is the dry name for refusing that sale.\n\nA galley armed with sea-fire burns whichever harbour its captain chooses. This year he sails against Tana, next year Trebizond, and no clause forbids his grandson from anchoring off Baku with your own oil in his fire-pots. Genoa and Venice spent most of a century cutting each other's throats from the Bosphorus to the Black Sea with exactly such gifts. Send him back to his deck with his silver, and let him buy fire from someone with a shorter memory.",
      },
    ],
    tags: ["naphtha", "dual-use", "trade-policy"],
  },
  {
    id: "naphtha-firetemple",
    speaker: "An ascetic of the Surakhani flames",
    speakerType: "one-off",
    concept: "Non-market value",
    scenario: "Shah, the flames at Surakhani are failing. Your tappers bleed the seeps for the merchants' barrels and the eternal fire that has burned since before my grandfather's grandfather now gutters blue and low. Pilgrims who walked from the Indus to pray at it weep at a dying ember. Stop the digging by the shrine, or the fire goes out, and what goes out does not relight.",
    options: [
      {
        label: "Restrict extraction near the shrine.",
        effects: { treasury: -6, faith: 5, naphtha: 14 },
        explanation: "A barrel of naphtha has a price any Genoese factor will quote to the dirham. The flame at Surakhani has none, because nothing about it can be sold and carried away, and that is what non-market value means: the worn knees of pilgrims who crossed the Caspian to kneel at it, the alms they leave, the plain fact that it has burned longer than any dynasty has held this throne. Absheron was holy ground to the fire-worshippers under the Persian kings; travellers came for the burning earth, not the oil.\n\nHold the tappers back and the seeps near the shrine heal over a season or two, the flame climbs, and the pilgrim road keeps its destination. The vaults feel the loss this winter. The shrine has stood through worse winters than yours.",
      },
      {
        label: "Work the seeps to the full.",
        effects: { treasury: 9, people: -2, faith: -4, naphtha: -10 },
        explanation: "Work the seeps to the full and you convert a non-market value into the counted kind, once. The two lived together for centuries because the trade was small: the Arabs named this the land of the naphtha fountain, the white oil went north by ship to Amol and the Volga mouth, and still the pilgrims came, because the earth gave faster than the merchants took. Now the merchants take faster than the earth gives, and the flame draws on the same source as the barrels.\n\nThe silver is spent within the year. A pilgrim who finds an ember where his father found a blaze does not return, and does not send his son, and that loss arrives quietly for a generation after the coin is gone.",
      },
    ],
    tags: ["naphtha", "resource-management", "cultural-value"],
  },
  {
    id: "naphtha-strike",
    speaker: "An overseer of the Absheron seeps",
    speakerType: "one-off",
    concept: "Compensating wage differentials",
    scenario: "Majesty, the trench fires took four men and the rest will not climb down into the seeps for the wage they took last winter. The naphtha in the cisterns is already thinning, and by the new moon the lamps of Baku will gutter unless the pits are worked again.",
    options: [
      {
        label: "Pay the danger wage.",
        effects: { treasury: -6, people: 4, naphtha: 8 },
        explanation: "The old wage paid for labour. It never paid for the burning, because until the trench fires the burning was a story, and now it is a thing the men's neighbours buried. What they are demanding is a compensating wage differential: the extra coin a deadly trade must offer to be staffed at all. A man who climbs into a naphtha pit knows the fire may come up to meet him, and he sets a price on that knowledge.\n\nPay it and the pits are worked by the men who know them. Refuse it and the cisterns thin while you save a wage nobody is left willing to earn.",
      },
      {
        label: "Replace them with cheaper hands.",
        effects: { treasury: 3, people: -5, naphtha: -6 },
        explanation: "There is always a cheaper man at the gate, and after a fire the gate is crowded with farm boys who have never smelled the seeps. Hire them at half the demanded rate and the payroll looks healed by morning. What the low wage cannot buy is the practice: which slope sweats vapour before it shows, when the cistern crust will hold and when it swallows a man, what colour of ooze means fire gathering below.\n\nThe Ilkhans' tax-farmers learned the price of cheap hands at these same wells in Ghazan's time; a contractor who saved on labour one season paid it back in collapsed shafts and fouled naphtha no caravan would carry. In a deadly trade, the compensating wage is not generosity. It is what the skill of surviving costs.",
      },
    ],
    tags: ["naphtha", "wage-differential", "labour"],
  },
  {
    id: "naphtha-overdraw",
    speaker: "The Master of the Royal Mint",
    speakerType: "one-off",
    concept: "Optimal extraction",
    scenario: "The Genoese galleys are paying triple for sealed jars this season, my Shah, and the seeps north of Baku will not run forever. Give the word and I will set every laborer to the pits until the ground itself runs dry, and your treasury will groan with silver before the ice closes the harbor.",
    options: [
      {
        label: "Pump the seeps to their limit.",
        effects: { treasury: 12, people: -2, naphtha: -22 },
        explanation: "A barrel left in the ground is wealth that has to justify staying there. If this season's tripled Genoese price beats anything the silver could earn sitting in your vaults, pumping hard is the right answer; that comparison, price now against patience, is the whole of what scholars call optimal extraction. Greed does not decide it. The numbers do.\n\nBut run the numbers on the field as well as the price. The seeps north of Baku refill at their own pace, and a desperate hand can empty them faster than they give. Skim gently and the bitumen wells up again year after year. Tear at them for one fat season and you have not sold a harvest, you have sold the field: slack pits, drifting labourers, and half-empty jars for the next galley. Judge this season's frenzy against every season that follows it, honestly, and not by the size of the offer waving in front of you.",
      },
      {
        label: "Hold to a sustainable draw.",
        effects: { treasury: 3, naphtha: 8 },
        explanation: "A sustainable draw treats the seeps as a debt the earth pays you on its own schedule. Take only the interest and the principal keeps paying; claw at the principal and it does not come back. Optimal extraction is mostly this one comparison, made every season without sentiment.\n\nA barrel held underground costs nothing to store and may be worth more when the next caravan comes thirsty. The fire-temple keepers at Surakhani ran the seeps this way without a word of accounting, taking what the flame gave, and the flame still burns. A Shah who can promise the Genoese a steady jar every year, in fat times and thin, bargains from higher ground than one who floods them once and has nothing to follow.",
      },
    ],
    tags: ["naphtha", "optimal-extraction", "intertemporal"],
  },
  {
    id: "naphtha-lampoil",
    speaker: "Vizier Farrukh",
    speakerType: "vizier",
    concept: "Domestic price vs export",
    scenario: "Great Shah, the wells above Baku run black and rich this season, and the seep-pits are full. The Genoese galley masters offer good silver for every jar of naphtha we can pour. But the same jars light the lamps of your city and warm the poor through the Caspian winter. One barrel cannot do both.",
    options: [
      {
        label: "Keep the oil for the city's lamps.",
        effects: { treasury: -2, people: 6, faith: 1, naphtha: -6 },
        explanation: "One barrel cannot both warm the lower town and earn silver at the quay, so this is domestic supply set against export, and keeping the oil home means spending revenue you could have collected. The treasury feels the gap. The city does not feel the cold.\n\nThe habit is older than the dynasty. The Surakhani seeps fed the temple flames and the household lamps of the whole district under the Sasanid fire-keepers, and the officials who later ran the wells as a crown monopoly kept the lamps lit anyway, because a warm, lit town pays its taxes and does not riot in the dark. Your descendants will argue the same line when they sell gas at home for a tenth of what Europe pays. The subsidy buys quiet, and quiet is cheaper than the silver you forgo.",
      },
      {
        label: "Ship it all to the foreign buyers.",
        effects: { treasury: 10, people: -5, naphtha: -8 },
        explanation: "Ship every jar and the treasury swells by spring; the silver is real and weighable. What you have exported is the warmth of the lower town. The poor cannot bid against a galley master and will not try. They will burn dung and brushwood, sicken in the cold months, and remember who emptied the lamps.\n\nEach jar earns more abroad than at home only because at home you were giving the fire away, and that gap between the domestic price and the export price is precisely what you are collecting. Count the silver, and count what it cost in its own currency: a winter, indoors, in the dark.",
      },
    ],
    tags: ["naphtha", "subsidy", "export"],
  },
  {
    id: "caravan-mutual",
    speaker: "Tahmina of Shamakhi",
    speakerType: "tahmina",
    concept: "Risk pooling",
    scenario: "Shirvanshah, the raids took four of my bales last month and a smaller house its whole season. So the merchants of Shamakhi propose a common purse: a few coppers levied on every bale that leaves the gate, and paid out to whichever of us is stripped on the road. Charter it, and we none of us fear the ride alone.",
    options: [
      {
        label: "Charter the mutual.",
        effects: { treasury: -4, people: 5, military: 2 },
        affinityEffects: { tahmina: 2 },
        explanation: "A copper on every bale, paid out to whichever merchant the road strips bare, is risk pooling in its plainest form. No house can say which caravan is taken next season, but the houses together know roughly how many bales vanish in a year, and a steady number can be priced. Each pays a small certain sum to be spared an uncertain ruin, and the fund swallows the bad luck of the few out of the coppers of the many.\n\nShamakhi is wide enough to carry it. Barbaro counted four or five thousand households here in 1476, and a pool that broad does not tip over when one caravan is lost. The Genoese and Venetian shipowners on these same waters worked out the identical trick, one wreck falling on all of them at a copper apiece, and the clubs that insure sea cargo centuries later descend from that huddle. Seed it, keep the register honest, and the small houses stop burying silver against disaster and send it down the road instead.",
      },
      {
        label: "Let each merchant carry his own losses.",
        effects: { treasury: 1, people: -3 },
        affinityEffects: { tahmina: -2 },
        explanation: "Two springs ago a Shamakhi widow ran three caravans on her late husband's name and borrowed credit. The second was taken whole in the passes above Shabran. She had pledged next season's looms against that cargo; by autumn the dye-houses were sold and her name was struck from the merchants' book. The big houses lost a caravan that same season, shrugged, and rode again in the morning.\n\nA great house treats a robbed caravan as a bad month; a small one treats it as the end. Leave every purse to carry its own losses and the road slowly empties of every purse too thin to survive one bad night, until only the largest ride at all, and the toll rolls thin to match.",
      },
    ],
    tags: ["insurance", "risk-pooling", "trade"],
  },
  {
    id: "sarraf-bill",
    speaker: "A sarraf of the Shamakhi money-market",
    speakerType: "one-off",
    concept: "Credit & usury",
    scenario: "Shah, let me write a man's silver in Shamakhi and pay it out in Derbent against my seal, so no caravan need carry coin over the bandit passes. The Qadi has heard of it and calls it usury wearing a coat.",
    options: [
      {
        label: "Permit the bills of exchange.",
        effects: { treasury: 6, people: 4, faith: -4 },
        affinityEffects: { qadi: -2, tahmina: 2 },
        explanation: "The sarraf is not lending anyone money; he is moving a promise. A merchant pays a hundred dirhams in Shamakhi and carries a slip of paper; a cousin in Derbent reads the seal and pays out the hundred there. The silver never crosses the passes, and bandits cannot rob a sentence.\n\nThe Qadi smells the fee, and the fee is where the credit-and-usury argument lives. Charging a man for the use of his own money is riba, plainly forbidden. So the sarrafs charge instead for the road and the risk of the seal: the labour of two ledgers that agree, the cost of standing good for a debt in a distant town. The jurists of Basra and Kufa argued the point for generations and mostly let the suftaja stand, because the alternative was merchants killed for their strongboxes in the defiles. The Qadi reads coin begetting coin and is half right, which is why the quarrel will not end this year.",
      },
      {
        label: "Ban them as concealed riba.",
        effects: { treasury: -4, people: -3, faith: 5 },
        affinityEffects: { qadi: 2, tahmina: -2 },
        explanation: "Ban the bills and the silver must travel as silver. The caravans leave Shamakhi with the metal sewn into saddles, and word of which mule carries the strongbox reaches the passes before the mule does. Some arrives. Some feeds the men in the high rocks. The merchant who is robbed does not lend again that season, and the one who fears robbery buries his dirhams under the floor, where they earn nothing and build nothing.\n\nThe instrument you are banning was the medieval cure for exactly this journey. The suftaja let a debt settle at a distance without a coin crossing dangerous ground, and merchants from Cairo to Samarkand ran the long-haul trade on it for centuries. You have sided with the Qadi's conscience over the merchant's route. The silver still has to reach Derbent, and the men in the rocks are patient.",
      },
    ],
    tags: ["credit", "usury", "finance"],
  },
  {
    id: "closed-guild",
    speaker: "A master of the weavers' guild",
    speakerType: "one-off",
    concept: "Barriers to entry",
    scenario: "Shah, give my guild alone the right to license a loom in Shamakhi, and let us set how many may turn. Fewer looms mean finer cloth and a price that holds steady through a bad year. Let any cobbler's son hang a warp in his yard, and the name of Shamakhi silk is worth nothing within a decade.",
    options: [
      {
        label: "Grant the guild its cap.",
        effects: { treasury: 5, people: -5, faith: 2 },
        affinityEffects: { tahmina: -2 },
        explanation: "The cap is a barrier to entry dressed as a guarantee of quality, and both halves of that are true at once. Walk Shamakhi, where Barbaro counted thousands of households carding, dyeing, and throwing silk in 1476, and you cannot tell from the street whose cloth holds its colour. The guild can. Make their seal law and the cloth improves, because a man who can lose his licence weaves honestly, and a Genoese buyer pays extra for a mark he trusts.\n\nThe half the master does not mention: he has just been handed the power to keep his nephew's looms turning and the newcomer's idle. The cap protects quality, and it protects the men inside the wall from everyone outside it, and the licence fees he pays you are the smaller part of what that protection collects. A hundred weavers who will never own a loom now know exactly whom to blame.",
      },
      {
        label: "Keep the looms open to all.",
        effects: { treasury: -3, people: 6 },
        affinityEffects: { tahmina: 1 },
        explanation: "Keep the looms open and the cloth of Shamakhi gets cheaper and rougher at the same time. More hands at more looms means more bolts in the bazaar at prices the poor can pay, and it means the grey-running dye travels under the same city's name as the honest weave, with no seal standing between a buyer and a cheat.\n\nThe masters will tell you, loudly, that you sold a century of reputation to feed this season's apprentices. Whether they are right depends on one thing: whether a buyer can still tell the good bolt from the false once you have refused to let anyone mark the difference.",
      },
    ],
    tags: ["barriers-to-entry", "rent-seeking", "guilds"],
  },
  {
    id: "after-plague",
    speaker: "A headman of the thinned villages",
    speakerType: "one-off",
    concept: "Labour supply shock",
    scenario: "Shah, the sickness has taken half my villages into the ground, and the half still breathing will not stoop to the sheaves for the old penny. They want double, every man of them, or the wheat stands and rots while you watch. Decide before the rain does it for you.",
    options: [
      {
        label: "Fix wages by decree.",
        effects: { treasury: 6, people: -8, military: -1, faith: -2 },
        explanation: "The decree pins the wage at the old penny. It cannot pin the man. The plague that came up the Caspian shore in 1346 through Astrakhan destroyed no field, no plough, no seed; it destroyed people, and a scarce thing grows dear. The scarcest thing in your realm this autumn is a living back that can swing a scythe. That is a labour supply shock, and legislating against it has the record you would expect.\n\nFixed below what his work is now worth, the survivor does not sign. He drifts to the next valley where the headman keeps no honest count, or he sits, and the wheat rots anyway with your name on the order. The Vizier will say the decree can hold if the watch is doubled and the neighbouring lords are persuaded not to bid in secret. That is a long way of saying it will not hold.",
      },
      {
        label: "Let wages rise to what the work commands.",
        effects: { treasury: -6, people: 7, military: 1 },
        explanation: "Grant the doubled penny and you are reading the market your dead have written. A labour supply shock cut the working hands in half while leaving the barns and granaries standing, so the price of an arm with a pulse has climbed, and no edict reverses a headcount.\n\nBefore 1346 the peasant was one mouth among too many. After the plague gutted the Golden Horde's towns up the Caspian, that same man could stand in his doorway and let the lords come bidding: one offers the old wage and a curse, the next offers double and a roof, because his fields rot otherwise. What follows is a transfer, out of the purses of men who own land and into the hands that work it. Your lords will groan under the new wage bill. They are paying for a scarcity that cost the dead their lives.",
      },
    ],
    tags: ["labour-shortage", "wages", "plague"],
  },
  {
    id: "clipped-dinar",
    speaker: "The Master of the Royal Mint",
    speakerType: "one-off",
    concept: "Gresham's law",
    scenario: "Shah, the clippers have grown bold. They shave a sliver of silver from every dinar that passes through their hands, and the full-weight coin you minted last year has vanished into clay jars under the floorboards. Only the gnawed and the light still move in the bazaar, and the merchants have begun to weigh each one as though they no longer believe your face stamped upon it.",
    options: [
      {
        label: "Recoin the currency at the treasury's cost.",
        effects: { treasury: -8, people: 5, faith: 3 },
        affinityEffects: { vizier: 1 },
        explanation: "A man holding a heavy dinar and a shaved one of the same stamp spends the light one and keeps the heavy, and he would be a fool not to. Multiply him by every stall in the bazaar: the bad coin circulates, the good goes under the floorboards, and the honest dinar is hoarded out of the market by its own honesty. Gresham's law needs no decree; it runs on self-interest alone.\n\nRecoining at full weight is the only cure, and it is dear, because the treasury makes up the silver the clippers stole. What it buys is that a dinar means a dinar again and the hoards come back into daylight. The Shamakhi and Baku mints held decent fineness through the prosperous fifteenth century for a plain reason: a ruler who lets his coin rot teaches every trader to trust scales over sovereigns, and the lesson is expensive to unteach.",
      },
      {
        label: "Let the light coin circulate.",
        effects: { treasury: 5, people: -6, military: -1 },
        affinityEffects: { vizier: -2 },
        explanation: "Let the light coin run and the treasury keeps a little silver this season. The cost arrives without an invoice. Gresham's law sets every prudent man to hiding his heavy coins and paying in shavings, so the good silver leaves the market entirely; Caspian merchants already carry folding balances and weigh each dinar before closing, and a man who must weigh his money no longer has money, only metal and the labour of guessing.\n\nTrade slows to suit. A bale that changed hands on a nod waits while two men argue over the weight of the payment, and the Genoese, who can sail to Derbent or Tabriz, begin to. Your heirs will call a sound currency the foundation of trade and spend hard to defend it, having learned from what you are about to teach them by neglect.",
      },
    ],
    tags: ["greshams-law", "counterfeiting", "currency"],
  },
  {
    id: "bimetal-ratio",
    speaker: "Vizier Farrukh",
    speakerType: "vizier",
    concept: "Bimetallism",
    scenario: "\"Majesty, the mint awaits your word on how many dirhams of silver shall answer to one dinar of gold. Should the figure stray even a little from what the bazaars of Tabriz and Baghdad reckon, our coin will not stay coin for long. The wrong number, and by the next caravan season we hold a mountain of one metal and not a grain of the other.\"",
    options: [
      {
        label: "Anchor the coinage to gold.",
        effects: { treasury: 4, people: -3 },
        affinityEffects: { vizier: 1, tahmina: -1 },
        explanation: "Fix the dinar at ten dirhams while Sultaniyya trades gold at twelve and you have invited every merchant to a lawful little machine: bring your underpriced gold to the mint, leave with generously priced silver, carry the silver east to where it buys its true worth in gold, return with more dinars than you left with. Each turn skims the difference, and the gold drains out of the realm one saddlebag at a time. That is bimetallism's trap: the law names a ratio, the market names another, and the metal always obeys the market.\n\nAnchoring to gold at the world's ratio closes the gap. Debts and tribute reckon in the coin that crosses the passes and clears at Hormuz without argument, the treasury counts reserves in the thing it actually hoards, and the long-distance houses are content. The village that pays its tax in worn silver feels the pinch first, and will say so.",
      },
      {
        label: "Anchor it to silver.",
        effects: { treasury: -3, people: 3 },
        affinityEffects: { tahmina: 1 },
        explanation: "Anchor to silver and you bind the coinage to the metal the market actually moves. The dirham buys bread, pays the porter, and settles the day's haggling in Shamakhi; the wage-earner is paid in it and prices his world in it, so a silver standard keeps his footing steady while the great houses, who count in gold, bend to your dirham for once.\n\nThe ratio is the whole game either way. Set it near what Tabriz already whispers and nobody profits from melting your coin. Set it wrong and the cheap metal floods every counter while the dear one vanishes into the goldsmith's crucible by morning.",
      },
    ],
    tags: ["bimetallism", "monetary-policy", "arbitrage"],
  },
  {
    id: "genoese-return",
    speaker: "A Genoese factor at the Baku wharf",
    speakerType: "one-off",
    requires: "sold-genoese",
    concept: "Path dependence",
    scenario: "You will recall, Shah, that your house sold mine the right to the Absheron seeps. We have done well. So well that we now wish to widen the works, and we came to tell you, not to ask. Should the terms displease you, the contract your seal is on says rather little about your displeasure.",
    options: [
      {
        label: "Renegotiate for a larger cut.",
        effects: { treasury: 6, faith: -2, naphtha: -4 },
        explanation: "Every move you have now starts from inside a decision made years ago. That is path dependence, and the factor at the wharf knows it as well as you do. You can squeeze a larger share out of the Genoese, and they will pay it, because a thinner profit on a field they own still beats a fight. What you cannot do is make the seeps un-sold. The negotiation happens on their ground because you put it there.\n\nThe rulers who leased the dipping season by season could raise the rent, change the contractor, or take the works back when it suited them. A sold deed pulls that ladder up behind it. Take the better terms; they are worth having. Your grandson will still collect rent on his own coast like a guest.",
      },
      {
        label: "Buy the rights back at any price.",
        effects: { treasury: -14, people: -2, naphtha: 6 },
        explanation: "Undoing a sale costs more than never selling, which is path dependence stated as a bill. The Genoese know what the rights are worth to you now, and it is more than they paid, because you are buying back not just the oil but the freedom to decide about the oil. They will name a number that hurts. Pay it and the seeps come home, the season's draw is yours to set again, and the old chain that ran from al-Mansur's naphtha tax down through the Baku contractors is mended.\n\nIt is the most expensive purchase of your reign, and the alternative was leaving the most famous wealth on your coast in a foreign company's books forever.",
      },
    ],
    tags: ["path-dependence", "lock-in", "naphtha"],
  },
  {
    id: "recoinage-reckoning",
    speaker: "The Master of the Royal Mint",
    speakerType: "one-off",
    requires: "debased-coin",
    concept: "Currency reform",
    scenario: "The light dinar you struck for the garrison did its work, Shah, and then would not stop working. The bazaar now keeps two prices, one for the seal and a lower one for the metal, and the Tabriz men weigh every coin I pay them. I can call the bad coin in and strike it honest again. I will not pretend the recoinage is cheap.",
    options: [
      {
        label: "Call in the coin. Restrike at honest weight.",
        effects: { treasury: -9, people: 5, faith: 3 },
        explanation: "A recoinage conjures no silver. It confesses how little was ever there. Calling in the light coin means handing back honest weight for dishonest, so the treasury swallows the gap you pocketed when the garrison was paid in thin dinars. The money in the city shrinks all at once, prices and wages grind downward, and the hardship is the cure working.\n\nGhazan Khan made this exact repair. By the century's turn his house had run the coinage ragged, no two towns' dirhams agreeing, and with Rashid al-Din he forced a single honest standard across the Ilkhanate, struck to one weight and stamped the same in every mint. It was costly and resisted, and trade steadied around it because a coin meant a coin again. You are paying in daylight for the quiet profit you took before.",
      },
      {
        label: "Leave the coin as it is.",
        effects: { treasury: 4, people: -6, faith: -2 },
        explanation: "Leaving the coin as it is keeps the small profit of the disease and declines the cost of the cure, and the terms compound against you. A coin nobody trusts teaches everyone to guard against it: the honest dinar disappears into strongboxes, contracts start naming the metal instead of the seal, and the houses of Tabriz and Astrakhan discount your currency before they price the goods, when they take it at all.\n\nThe Ilkhans drifted down this road until a dirham meant a different thing in every town and merchants kept scales because the number on the coin had become a rumour. A debasement is quick to take and slow to undo. Every year it stands, the recoinage you are declining grows larger for whoever finally cannot decline it.",
      },
    ],
    tags: ["delayed-consequence", "currency", "echo"],
  },
  {
    id: "monopoly-reckoning",
    speaker: "A delegation of the lesser silk houses",
    speakerType: "one-off",
    requires: "granted-monopoly",
    concept: "Regulatory capture",
    scenario: "We are what is left of the silk houses of Shamakhi, Shah, and we are fewer each year. When your own seal gave Tahmina's house the sole carriage of the Caspian silk, we paid her freight and called it weather. Now she sets the price of our looms, the wage of our weavers, and the day we may sell. Break the grant, we beg you. We are told she has already spoken to you, and that her reminder was gentler than ours and weighed more.",
    options: [
      {
        label: "Revoke the grant. Reopen the carriage.",
        effects: { treasury: -6, people: 6, military: -2, faith: 2 },
        explanation: "You granted a privilege; the privilege built a power; the power has spent years arranging the world so the privilege cannot be taken back. Her freight is the only freight, her silver underwrites half the custom-house, and her cousins sit in the offices that would enforce a revocation. Regulatory capture is that sequence, and its lesson is that the favoured house ends up writing the rule.\n\nRevoke it and she will not go quietly: loans called in, ships idled a season to prove the trade cannot move without her, bought officials warning you against disorder. You will pay for the reopening in enemies. In exchange the lesser houses come back to life, the weavers find more than one buyer, and the customs rolls fill with a hundred names where there was one. The Ilkhans found, when Ghazan tried to reclaim the sold tax-farms, that the holders had become a power surrendering nothing they were not forced to. It does not get easier later.",
      },
      {
        label: "Uphold the seal. You gave your word.",
        effects: { treasury: 3, people: -6, faith: -2 },
        explanation: "The case for the seal is respectable, and Tahmina will make it in your own words: a ruler who breaks his grants is one nobody deals with twice, and a realm where the throne reverses itself on a petition is one where no contract is worth its wax. All true. Note who taught you to say it, and what the saying earns her.\n\nUphold the grant and the lesser houses keep thinning, the broad tax base of many sellers keeps narrowing, and what trade remains reaches you through her counting-house after her margin. She will pay the renewal gladly; it is cheap beside what the privilege earns. A throne that leans on one subject's goodwill has started handing that subject the parts of itself it can no longer use, and your grandson will inherit the arrangement as if it were the natural order of the coast.",
      },
    ],
    tags: ["delayed-consequence", "monopoly", "echo"],
  },
  {
    id: "open-port-rivals",
    speaker: "The keeper of the Baku custom-house",
    speakerType: "one-off",
    requires: "kept-market-open",
    excludes: "granted-monopoly",
    concept: "Contestable markets",
    scenario: "The rolls have never been fatter, Shah. Since you kept the silk trade open to all comers, the Baku wharf draws Genoese and Venetian and Russian buyers, and they bid against one another for the same bales until the price runs in our favour. Now the greatest of the houses offers a handsome sum for the sole carriage, to end the scramble, they say, and spare us the noise of the bidding.",
    options: [
      {
        label: "Keep the trade open to all comers.",
        effects: { treasury: 5, people: 4, faith: 1 },
        explanation: "What fills these rolls is not only the buyers at the wharf today but the ones who could arrive next week. A merchant bids keenly because a rival he has never met might sail in and take the bale he hesitated over; the mere possibility disciplines him. That is a contestable market. Even one buyer in a slow season deals fairly while the gate stands open behind him, because gouging is an invitation.\n\nThe great house's offer ends the noise by ending the discipline. A sole carrier, knowing none may follow him in, prices at his leisure, and the keen market you are proud of becomes a toll he collects. Shamakhi grew into this coast's silk emporium because nobody owned the entrance: Genoese, Venetians, Russians, and in the 1560s the Muscovy Company's agents, none summoned by decree, all drawn by an open gate. Refuse the silver and you keep the thing that makes a bid on this wharf worth having.",
      },
      {
        label: "Grant the sole carriage now.",
        effects: { treasury: 12, people: -7, faith: -2 },
        flag: "granted-monopoly",
        explanation: "The sum is real and it will be in your vault by the new moon. What it buys from you is the open gate, and the open gate is why the wharf earns anything at all. The day one house holds the sole carriage the bidding stops; the Genoese and Russians do not vanish, they simply stop outbidding one another, deal on the holder's terms or sail for a coast where bargaining still exists, and the price that ran in your favour begins running in his.\n\nThe rolls thin across years too slow to alarm you in any single season, and by the time the loss is plain the buyers have new harbours and new habits. Sell the gate if the treasury truly cannot wait. Just price it as what it is: the wharf's future earnings, paid out once, at a discount.",
      },
    ],
    tags: ["delayed-consequence", "competition", "echo"],
  },
  {
    id: "arc-vizier-reform",
    speaker: "Vizier Farrukh",
    speakerType: "vizier",
    arcCharacter: "vizier",
    arcAffinityDirection: "high",
    concept: "State capacity",
    scenario: "Shah, after these years of trust I will speak plainly. Our administration leaks. Tax-farmers skim a third before the silver reaches Shamakhi. I have drawn up a reform — paid officials, kept books, regular audits. The merchants will resist. The Qadi will call it innovation. The yield in ten years will repay it twice over.",
    options: [
      {
        label: "Back the reform. Sign the papers.",
        effects: { treasury: -8, people: 4, military: 2, faith: -4 },
        affinityEffects: { vizier: 2, qadi: -3, tahmina: -2 },
        explanation: "State capacity is the dull machinery by which a throne actually reaches what it claims to rule, and a salaried official with an auditable book is the most profitable piece of it you will ever buy. Replace the tax-farms and the third that vanishes between the village and Shamakhi becomes yours. It will not pay back inside your reign, and the men who skim that third are not abstractions: they fund the militia, marry your nobles, and lend the crown silver in hard winters. You are picking a fight with everyone who profits from the dark.\n\nGhazan Khan tried it seriously around 1300, fixing landholders' rights and pulling the tax-farmers' worst abuses out of the soil, and for his reign the revenue ran straighter than it had in fifty years. His heirs let it rot back inside a decade, and the vizier who drafted it was executed in 1318 when the dispossessed remembered his name. Farrukh has read that history too. He says the attempt is worth making, and that if it fails he will likely be the first item confiscated.",
      },
      {
        label: "Decline. The current system works.",
        effects: { treasury: 3, people: -2, military: -1, faith: 2 },
        affinityEffects: { vizier: -4, qadi: 1, tahmina: 2 },
        explanation: "Refusing costs nothing today, which is the trap of it. The tax-farmers keep their third and keep delivering the other two reliably; the Qadi sleeps easy, Tahmina easier, and the treasury ticks over. What you have bought is a ceiling. A state that collects through middlemen can pay its garrison and patch a bridge, and can never reach down to where the silver is born, because the reaching apparatus was the thing you declined to build.\n\nFarrukh bows and serves on. He does not bring you a bold idea again, and a court where nobody risks ambition coasts pleasantly downhill for a long time before anyone notices the slope.",
      },
    ],
    tags: ["institutional-reform", "state-capacity", "arc"],
  },
  {
    id: "arc-vizier-removal",
    speaker: "A delegation of three nobles",
    speakerType: "one-off",
    arcCharacter: "vizier",
    arcAffinityDirection: "low",
    concept: "Rule of law",
    scenario: "Shah, your Vizier moves against you. He has held meetings with the Qadi and with merchants of Shamakhi. We have witnesses. We can name names. Move first, before he does, or stand trial in your own court within the month.",
    options: [
      {
        label: "Arrest the Vizier. Confiscate his estates.",
        effects: { treasury: 8, people: -6, military: 3, faith: -3 },
        affinityEffects: { vizier: -10, qadi: -2 },
        explanation: "Arrest him on this morning's accusation and you have ruled that a man's fate is decided by whoever reaches the throne first. The confiscated estates feel like profit; the nobles who denounced him will want their reward in offices; and the Qadi, guilty or not, now runs his own sums on whether to kneel, run, or strike first.\n\nThe Ilkhanate kept doing this to its best servants. Shams al-Din Juvayni ran its revenue for twenty years, and when the throne changed hands in 1284 he was charged with poisoning the late Ilkhan, executed, and his lands swallowed as inju. Rashid al-Din, who inherited the desk, went the same way in 1318. Each killing tidied an afternoon's politics and left the chancery less able to work. The lasting cost lands later: every able man watches how this ends and learns that competence near the throne is a thing to hide.",
      },
      {
        label: "Refuse. Hear the Vizier yourself first.",
        effects: { treasury: -2, people: 3, military: -2, faith: 4 },
        affinityEffects: { vizier: 4, qadi: 1 },
        explanation: "An accusation is cheap to make and expensive to obey. Three nobles want a man ruined on their word before noon; grant it, and next year three other nobles arrive with a different name, having seen how easily a list becomes a verdict. Whether a man can be ruined on an untested claim is what rule of law means in practice, and it is decided by exactly such mornings.\n\nSo summon the Vizier, question him, and examine the witnesses with him standing there. Innocent, you keep a useful servant after a fright. Guilty, you hold proof that will survive your own succession. The apparatus for this existed here: above the Sharia courts sat the mazalim, the tribunals of complaint, and Ghazan Khan spent real effort making them bite, because where a khan struck on a whisper his own provinces learned to lie to him. The nobles file out empty-handed. What the Vizier was doing, you will learn by procedure.",
      },
    ],
    tags: ["arc", "succession", "institutional-capacity"],
  },
  {
    id: "arc-qadi-council",
    speaker: "Qadi Mahmud",
    speakerType: "qadi",
    arcCharacter: "qadi",
    arcAffinityDirection: "high",
    concept: "Legitimacy as capital",
    scenario: "Shah, the ulama of Tabriz, Shamakhi, and Baku ask leave to convene a council in the great mosque. They wish to issue rulings on the lawful and the forbidden in commerce — usury, weights, the wine trade, the dhimmi taxes. Your patronage gives the council authority. Withhold it, and they meet anyway, with less.",
    options: [
      {
        label: "Patronise the council. Open it yourself.",
        effects: { treasury: -3, people: 4, military: -2, faith: 8 },
        affinityEffects: { vizier: -1, qadi: 3, tahmina: -2 },
        explanation: "You are not buying piety; you have that. You are buying the arrangement where the ulama's authority answers to yours. Open the council yourself and every ruling it issues on usury, weights, and the wine trade carries your seal alongside God's; the clergy get your patronage to settle their doctrinal quarrels, which they cannot settle on their own coin. Legitimacy is capital, and each side is lending the other what it lacks.\n\nKhalilullah I paid this price knowingly. He raised the Palace Mosque inside his own walls in 1442 and made room a few steps away for the tomb of Seyid Yahya Bakuvi, because a learned man honoured at court issues verdicts that flatter the court. Keep the ulama inside the house and they bless the house. Leave them in the street and they preach from it.",
      },
      {
        label: "Withhold patronage. Let them meet without it.",
        effects: { treasury: 2, people: -2, military: 1, faith: -4 },
        affinityEffects: { qadi: -3, tahmina: 1 },
        explanation: "Withhold the purse and the council meets anyway, in a meaner hall, its verdicts read aloud and ignored by every merchant who hears them. It costs you nothing this year and probably nothing next, which is how this particular account deceives. Legitimacy is drawn on in droughts, not in ordinary seasons, and the ruler who never tends the well finds out it is dry on the day he reaches for the rope.\n\nThe Ilkhans before Ghazan ruled for decades without the faith's blessing, and for those same decades their reach into the lives of their Muslim subjects stopped exactly where the clergy's cooperation would have had to begin. When Ghazan accepted Islam in 1295 he was not seized by conscience. He had counted what his predecessors lacked and set about buying it back, at a premium, a generation late.",
      },
    ],
    tags: ["arc", "legitimacy", "religious-economy"],
  },
  {
    id: "arc-qadi-fatwa",
    speaker: "A messenger from the great mosque",
    speakerType: "one-off",
    arcCharacter: "qadi",
    arcAffinityDirection: "low",
    concept: "Bargaining vs coercion",
    scenario: "The Qadi has issued a *fatwa*, Shah. Your debasement of the coin, your tolerance of the wine houses, your dealings with the Genoese — all are pronounced contrary to the law. The faithful are instructed to consider their loyalty. He preaches at noon prayers tomorrow.",
    options: [
      {
        label: "Have him removed. Replace him with a compliant Qadi.",
        effects: { treasury: -2, people: -7, military: 2, faith: -8 },
        affinityEffects: { qadi: -10 },
        explanation: "The Qadi's word carries weight because the faithful believe it is not yours to dictate. Remove him for an inconvenient ruling and you have proven it was, which destroys the value of every ruling that follows. Your new Qadi will recite whatever you require; that is exactly why nobody will believe him.\n\nCoercion here spends the borrowed authority that made the office useful to you in the first place. The faithful remember who was removed and why, and they weigh his successor accordingly, which is to say not at all. The fatwa still lands. It simply lands on a throne that has just admitted it fears the pulpit.",
      },
      {
        label: "Hear him out. Negotiate a settlement.",
        effects: { treasury: -4, people: 2, military: -1, faith: 3 },
        affinityEffects: { vizier: -1, qadi: 3 },
        explanation: "A ruler who tries to beat the men of the law outright wins nothing he can keep. The Safavids learned it against the Twelver clergy, the Ottomans against their own ulama, Akbar against the learned men of his court. The ones who came out whole reached for the bargain: gifts sent, a wine house closed here, a tax withdrawn there, a scholar allowed to feel his objection had moved the throne. The ruling gets narrowed rather than crushed, and both sides walk away able to say they did not lose.\n\nThat is what negotiating buys, and its price is visible concession. Bargaining leaves the Qadi's authority standing because you will want it standing, the next time you need something blessed.",
      },
    ],
    tags: ["arc", "religious-authority", "legitimacy"],
  },
  {
    id: "arc-tahmina-redirect",
    speaker: "Tahmina of Shamakhi",
    speakerType: "tahmina",
    arcCharacter: "tahmina",
    arcAffinityDirection: "low",
    concept: "Hold-up problem",
    scenario: "Shirvanshah, this has become tedious. I have been taxed, refused, lectured by your Qadi, and accused twice by your Vizier. My caravans will go north next season. The Astrakhan route is open. I have already paid the bribes. Stop me with a better offer or watch the silk leave Shamakhi.",
    options: [
      {
        label: "Make the offer. Tax remission and a privileged status.",
        effects: { treasury: -10, people: 2, military: 1, faith: -3 },
        affinityEffects: { qadi: -2, tahmina: 4 },
        explanation: "She is not bluffing. The hold-up problem is precisely this: the party who has sunk years into your city can still walk, and the party who taxed those years cannot make her stay. The Astrakhan route to the Volga carried real cargo for centuries, and a caravan that turns onto it does not drift back out of sentiment. Nor does she leave alone: the smaller houses that warehoused under her name and borrowed on her credit time their departures to hers, and the duty on all of it goes north together. Against years of that, the remission she is squeezing out of you is a rounding error.\n\nRulers here wrote this reasoning into law. In 1562 the governor Abdulla Khan Ustajlu granted the Muscovy Company's agent specific exemptions for exactly this purpose: a thinner duty paid here beats a fat one paid somewhere else. Tahmina counts the concession, adds the freight she now has reason to keep bringing you, and decides loyalty is worth a few more seasons.",
      },
      {
        label: "Let her go. Trade will find another route.",
        effects: { treasury: -6, people: -3, military: -1, faith: 2 },
        affinityEffects: { tahmina: -6 },
        explanation: "Refuse and you keep the concession and lose the column it would have kept. Her duty drops off the rolls clean; the small traders who sheltered under her name and borrowed against her credit follow her north or shrink to nothing, and the Shamakhi market thins inside two seasons. A route stays loyal for a generation out of habit, then shifts in a month, and almost never shifts back.\n\nHer warehouse stands shut a while, then sells. The next great merchant weighing a base in Shamakhi reads what happened to the last one, and books passage elsewhere.",
      },
    ],
    tags: ["arc", "merchant-retention", "trade-routes"],
  },
  {
    id: "arc-general-throne",
    speaker: "A captain of the household guard",
    speakerType: "one-off",
    arcCharacter: "general",
    arcAffinityDirection: "low",
    concept: "The price of a threat",
    scenario: "Shah, General Farrukhzad has marched two regiments to the palace gate. He claims a tribute owed and demands you receive him. His standard is raised. The garrison commander asks whether to bar the gate or open it. Your answer in the next hour shapes whether you are still on the throne by sundown.",
    options: [
      {
        label: "Open the gate. Hear what he demands.",
        effects: { treasury: -12, people: -3, military: 6, faith: -2 },
        affinityEffects: { general: 5 },
        explanation: "An hour ago the back pay and the restored estate had prices you set. Two regiments in the courtyard unset them. A demand backed by visible force is worth whatever you will surrender rather than watch the standard advance twenty more paces, and Farrukhzad marched precisely to widen the gap between those two numbers. Opening the gate lets him name it.\n\nYour house has paid such prices and survived them. When Ibrahim fell into Qara Yusuf's hands he bought back his freedom and throne in coin, and the court called it the cost of resumption. The realm outlived the payment. What it did not outlive was the lesson left in the record: that the throne can be made to pay, if a man arrives with enough behind him. The captain at your side is watching who sets the price today, and he has a long memory and a garrison of friends.",
      },
      {
        label: "Bar the gate. Summon loyal forces.",
        effects: { treasury: -3, people: 4, military: -8, faith: 3 },
        affinityEffects: { general: -3 },
        explanation: "Bar the gate and you are pricing threats for every officer who will ever consider making one. A commander who marches on his own throne and rides home empty teaches the next commander that the throne does not pay at swordpoint; one dangerous afternoon buys a precedent that outlives you.\n\nThe wager only works with force behind it. A barred gate is an argument, and the argument is settled by who stands on each side of it: household troops, nobles who chose you before the standard rose, an ally whose displeasure the rebel must count. Sheikh Ibrahim Darbandi survived hours like this in the 1380s by never letting any single subordinate grow strong enough to act alone, so the man at the gate found himself outnumbered by his own peers. In the Ilkhanate's ugly successions, where no counterweight existed, the gate was beside the point; whoever brought more horsemen rode in and sat down. Count what stands behind you before you give the order.",
      },
    ],
    tags: ["arc", "succession", "coup"],
  },
  {
    id: "arc-tahmina-rayis",
    speaker: "Tahmina of Shamakhi",
    speakerType: "tahmina",
    arcCharacter: "tahmina",
    arcAffinityDirection: "high",
    concept: "Institutional intermediation",
    scenario: "Shah, the urban council of Shamakhi has met without a leading merchant voice for three reigns. I propose the title of *rayis* — head of the city's commercial guilds, with formal standing in your court. I sit at the council. I bring you the merchants' position before it becomes the merchants' complaint. The cost is recognising us as a body, not as supplicants.",
    options: [
      {
        label: "Create the office. Appoint her rayis.",
        effects: { treasury: 6, people: 5, military: -1, faith: -3 },
        affinityEffects: { vizier: 1, qadi: -2, tahmina: 3 },
        explanation: "Right now a hundred merchant houses come to you one at a time, each with its own claim, its own bribe, and its own version of the truth, and you spend more on sorting the noise than settling the matter. A chartered rayis gives the bazaar one mouth. The complaint arrives as a position, debated and trimmed, before it arrives as a torch in the suq. That is institutional intermediation, and the towns here already had the raw material: the crafts and quarters of Baku and Shamakhi kept their own rayises, with a rayis ar-ruasa over the urban council, but none of them ever held court rank.\n\nYou surrender something real. A body that can speak can bargain, and you are handing it a permanent seat to bargain from. Tahmina has done the sums: the title costs you nothing to mint and earns her a margin no cargo ever did. She is not wrong about the trade. She has arranged to sit on its better side.",
      },
      {
        label: "Refuse. Merchants speak through merchants, not through office.",
        effects: { treasury: -2, people: -2, military: 0, faith: 3 },
        affinityEffects: { qadi: 2, tahmina: -3 },
        explanation: "Refuse the office and commerce keeps coming to you the way it always has, one house at a time, hat in hand, each through whatever cousin it has cultivated. That is tiring, and it preserves something rulers rarely name aloud: the freedom to be unfair. Today this house is in favour, tomorrow it is fined and another is raised, and no estate of merchants stands between you and any one of them, because you never let one form.\n\nThe silence of the sources is your answer: merchants scarcely appear in the Shirvanshah court record because the dynasty built them no office to appear in. Elsewhere the door opened wider. The Mamluks wrote merchants into the regulation of their supply, and the Mongols bound nobles to trading partners through the ortaq, princely capital carried across the steppe for shared profit. Those states made commercial men into fixtures. You are choosing to remain the only fixture in the room.",
      },
    ],
    tags: ["arc", "merchant-politics", "institutions"],
  },
  {
    id: "arc-general-hereditary",
    speaker: "General Farrukhzad",
    speakerType: "general",
    arcCharacter: "general",
    arcAffinityDirection: "high",
    concept: "Entrenchment",
    scenario: "Shah, the army is professional now. My captains are men I trained. My sons train under those captains. Make the office of *amir* hereditary in my line. Continuity buys you a standing force. The alternative is a new general every generation, learning what I already know.",
    options: [
      {
        label: "Grant the hereditary office.",
        effects: { treasury: -4, people: -3, military: 9, faith: -3 },
        affinityEffects: { vizier: -2, general: 4 },
        explanation: "What makes Farrukhzad valuable cannot be put in a deed: thirty years of knowing which pass floods in spring, which quartermaster steals, which man breaks under a charge, and the captains who answer his voice. None of that passes to a son the way a sword does. Make the amir's office hereditary and you have not bought the knowledge; you have promised the rank to a boy of nine you have never met, and tied your line's safety to whatever he grows into.\n\nEntrenchment works exactly this way: a rank that was yours to give becomes a thing his bloodline owns, and what an office holds it does not give back. You are paying for the father and inheriting the grandson.",
      },
      {
        label: "Refuse. The office stays at the throne's gift.",
        effects: { treasury: 2, people: 2, military: -5, faith: 3 },
        affinityEffects: { general: -4 },
        explanation: "An office a man cannot bequeath always returns to the throne. Keep the amir's rank at your gift and it stays a leash; the day the General dies you lose everything he knew, and he will hear the refusal as a verdict on his son, but no bloodline acquires a power the crown cannot recall.\n\nThe grant he wants has a long record. The iqta let officers collect a district's taxes, first for a life, then for a line, and soldiers who feed themselves from land end by owning it; the Mamluks began as purchased soldiers and finished as the sultans. Your own dynasty lasted four centuries on the opposite habit, raising and breaking emirs with none holding command as property, which is what let Ibrahim bend before Timur in the 1390s without any subordinate breaking away. The General takes your answer without a flicker. He is not a young man, and he is not in a hurry.",
      },
    ],
    tags: ["arc", "military-institutions", "hereditary-office"],
  },
  {
    id: "arc-envoy-integration",
    speaker: "Envoy Toghan",
    speakerType: "envoy",
    arcCharacter: "envoy",
    arcAffinityDirection: "high",
    concept: "Asymmetric integration",
    scenario: "Shirvanshah, the Ilkhan offers you Baku as his winter residence. Two months a year. His court rides in, your court hosts. The customs revenue triples in those months. The price is the city's eastern quarter set aside for Mongol use, and tribute reclassified as 'maintenance.' The relationship moves from vassal to partner.",
    options: [
      {
        label: "Accept. Welcome the Ilkhan to Baku.",
        effects: { treasury: 10, people: -2, military: -3, faith: -5 },
        affinityEffects: { qadi: -3, envoy: 4 },
        explanation: "The customs rolls will swell for two winter months, the tribute becomes a predictable line renamed maintenance, and the standing threat of a punitive column recedes. What you sell does not appear anywhere: a suzerain who sleeps in your capital every winter stops being a visitor you receive and becomes a fixture you accommodate, and the eastern quarter set aside for his court does not revert when he rides home. It waits for him. Asymmetric integration is the name for a small state fusing, piece by piece, into a larger one's orbit, and every piece pays.\n\nThere is precedent within living memory: Ghazan wintered in Baku around 1297, and the arrangement reached well past tribute into the daily life of the city. Your house kept choosing versions of this bargain, down to Ibrahim's renewed vassalage in 1413, because vassalage that keeps the throne is cheaper than independence that loses it. The Qadi's objection is concrete: the court you are inviting does not pray as Shirvan prays, and the quarter is permanent. The Envoy calls it the beginning of a productive relationship.",
      },
      {
        label: "Refuse the residency. Keep Baku Shirvanshah ground.",
        effects: { treasury: -4, people: 3, military: 3, faith: 6 },
        affinityEffects: { qadi: 3, envoy: -3 },
        explanation: "When the Mongols subdued the Caucasus in 1235 and 1236 they did not garrison every town. They left local lords on their thrones, took tribute, and reserved the right to ride in hard when a vassal mistook the leash for slack; between the 1280s and 1330s more than one prince in these mountains learned where the line lay by stepping over it. Refusing the winter residency keeps you inside that older, shallower arrangement.\n\nSo you are not buying safety. Baku stays Shirvanshah ground and no Mongol court prays inside your walls, but the tribute still rides out and the column still waits in the wings. You keep tomorrow's freedom to choose and pay for it in today's exposure. The Envoy carries the refusal north with a courteous face, observing only that the Ilkhan reads such answers carefully, and that answers tend to be answered.",
      },
    ],
    tags: ["arc", "integration", "vassalage"],
  },
  {
    id: "arc-envoy-punishment",
    speaker: "A wounded captain of the western garrison",
    speakerType: "one-off",
    arcCharacter: "envoy",
    arcAffinityDirection: "low",
    concept: "Coercive diplomacy",
    scenario: "Shah, the Ilkhan has sent a punitive *tumen*. Ten thousand horse, crossing the western passes now. They burned Ganja on the way through. The Envoy you turned away last spring rides at the front. Shamakhi has perhaps four days. Your decision in the next hour shapes what happens next.",
    options: [
      {
        label: "Empty the treasury. Send envoys with everything you have.",
        effects: { treasury: -25, people: 2, military: -2, faith: -4 },
        affinityEffects: { envoy: 4 },
        explanation: "You are not buying peace; you are buying a halt, from men who can see the smoke off Ganja behind them and your open gates ahead. A seller who knows how badly the buyer needs the thing sets the price, and coercive diplomacy pays best at exactly this moment, when the threat is proven and the buyer is desperate. The Ilkhans built their rule on the transaction: after breaking the Caucasus in the 1230s they garrisoned little and instead sent a tumen when a vassal grew insolent, because the point of the campaign was the bargain the city would beg for once it was real.\n\nA century from now your successor will kneel to Timur, name himself the ninth of nine condemned men, and walk away with his dynasty for the price of a purse. He understood the rate. The column will stop short of your walls. You will pay for every mile it did not cover.",
      },
      {
        label: "Stand. Defend the walls.",
        effects: { treasury: -3, people: -8, military: -10, faith: 5 },
        affinityEffects: { envoy: -6 },
        explanation: "Coercive diplomacy works only while the threatened man believes folding beats fighting, and you are about to test the belief with masonry. The choice is made blind: a state that resists when it should have bent ends up smaller, one that bends when it could have held ends up owned, and the line between them is invisible until crossed.\n\nThe record of these walls is not encouraging. In 1066 Kara-Tegin's Turks took Shamakhi and Baku both, and the cities that resisted the Ilkhans mostly fell, losing treasuries, ruling houses, and craftsmen marched off in coffles. Ganja is burning now to make the point. Against that: pay a tumen once and you have taught the Ilkhan that a sulk sent on horseback always comes home with gold, and that debt compounds. The Envoy rides at the front and remembers. The Qadi has asked to die on the walls, and the walls may grant it.",
      },
    ],
    tags: ["arc", "punitive-campaign", "geopolitics"],
  },
  {
    "id": "astronomer-observatory",
    "speaker": "Astronomer Bahram",
    "speakerType": "astronomer",
    "concept": "Research and development",
    "scenario": "Shah, give me a house for the sky at Shamakhi — brass instruments, a library worth the name, and students kept on a wage so they need not beg or flee. I will not lie to you about the harvest: it is dear today, and what it yields will not come for years, nor can I swear what shape it takes when it comes.",
    "options": [
      {
        "label": "Fund the observatory.",
        "effects": {
          "treasury": -10,
          "faith": 3,
          "people": 2
        },
        "explanation": "Nobody else will ever pay for this. A merchant lays out silver only for gains he can carry home in his own lifetime, and an observatory's returns scatter across the whole realm and land decades out: corrected star-tables guiding a pilot off Derbent who never heard Bahram's name, a truer calendar settling tithe disputes, a student going off to teach ten more. Research is the purchase that falls to a sovereign because no smaller purse can collect the return.\n\nHulagu, a conqueror with no softness in him, let Nasir al-Din al-Tusi raise the observatory at Maragheh in 1259 and funded it from endowment revenues. The star-tables made there were still in working use a hundred years on, long after Maragheh itself had faded. The cost is now and certain, the return late and vague, and that mismatch is the whole reason the decision sits on a throne instead of in a counting-house.",
        "affinityEffects": {
          "astronomer": 4
        }
      },
      {
        "label": "Spend it on the walls instead.",
        "effects": {
          "treasury": -2,
          "military": 6,
          "faith": -3
        },
        "explanation": "A wall answers for itself. You can walk its length, count the courses your silver bought, and when riders show on the ridge every coin of it stands up. Bahram asks you to buy a promise instead: some year, from some measurement, a good whose shape he cannot draw today. The mason swears his rampart will turn an arrow. The astronomer can swear only to the labour.\n\nTrusting the visible over the vague is not foolish, and if the ridge is dark with enemies, need decides. Only know the standing cost of the rule: followed every year, it starves every slow and uncertain good a reign might father, not because walls are worth more but because they are easier to believe. The knowledge that never gets made leaves no gap in any book, which is why this choice always looks safe and sometimes is not.",
        "affinityEffects": {
          "astronomer": -3
        }
      }
    ],
    "tags": [
      "astronomer",
      "decision"
    ]
  },
  {
    "id": "astronomer-calendar",
    "speaker": "Astronomer Bahram",
    "speakerType": "astronomer",
    "concept": "Coordination problem",
    "scenario": "Shah, the land-tax falls earlier each year, chasing the moon backward through the seasons until your collectors stand in the fields before a single sheaf is cut. I have reckoned a solar count, true to the sun and the harvest, that would set the assessment where it belongs. The clerks know only the old months, and the clergy hold them sacred, so the order must come from your throne or it will not come at all.",
    "options": [
      {
        "label": "Adopt the solar calendar for the land-tax.",
        "effects": {
          "treasury": 8,
          "people": 3,
          "faith": -5
        },
        "explanation": "The lunar year runs eleven days short of the sun's, so the tax-month creeps backward through the seasons. This year your collectors ride out a fortnight after threshing; in a decade they will stand in fields demanding a share of wheat still green in the ear, and be paid in promises. The drift never rests, and it carries revenue into the gap between the two calendars every single year.\n\nThe fix is a coordination problem: a calendar is only worth what others keep it by, so no estate will switch alone, and the worse count holds because it already holds. Only a throne can move everyone on the same day. The precedent is exact. The Jalali calendar Omar Khayyam and his colleagues computed for Malik-Shah in 1079 was more accurate than anything Europe used until the 1500s, and the Seljuk tax fell true to the season for four centuries because one sultan fixed the day rather than waiting for consensus. Let the mosque keep the moon for the feast and the fast. Give the sun to the harvest and the assessment.",
        "affinityEffects": {
          "astronomer": 3
        }
      },
      {
        "label": "Keep the lunar reckoning.",
        "effects": {
          "treasury": -4,
          "faith": 4
        },
        "explanation": "A calendar is not the astronomer's table. It is the agreement in ten thousand heads that next Tuesday is next Tuesday. Your clerks trained on the lunar count as boys, contracts are dated by it, the mosque calls the year by it, and the village grandmother knows the fast is near because she has always known. Bahram is right that the sun keeps better time; the Jalali count proved that in 1079 and the lunar months outlived it anyway in the mouths of the people, because being correct is not the same as being kept.\n\nSo count the cost of the leap: every scribe retrained, every old contract disputed, every collector arguing with a farmer over which year is owed, the clergy naming it impiety. The drift in the assessment is real and slow. The confusion of a forced switch is real and immediate, and a slow leak you can plan around is cheaper than a season in which the realm does not know what day it is.",
        "affinityEffects": {
          "astronomer": -2
        }
      }
    ],
    "tags": [
      "astronomer",
      "decision"
    ]
  },
  {
    "id": "arc-astronomer-school",
    "speaker": "Astronomer Bahram",
    "speakerType": "astronomer",
    "concept": "General-purpose technology",
    "scenario": "Shah, my school now seats boys from Tabriz to Bukhara, and already the shipwrights and the surveyors copy my tables of angles and tides for their own work. Tell me plainly: shall the brass instrument and the columns of figures go out to whoever can read them, or shall they stay sealed within these walls?",
    "options": [
      {
        "label": "Let the school publish freely.",
        "effects": {
          "faith": 4,
          "people": 4,
          "treasury": -3
        },
        "explanation": "Sell a bale of silk and it is gone from your hold. Let a surveyor copy Bahram's tables and Bahram still has them whole; a method multiplies when shared instead of dividing. That is what makes it a general-purpose technology rather than a cargo. The astrolabe and the sine tables were worked out in the observatories of the faith to fix the hour of prayer and the direction of Mecca, and the same brass and trigonometry now take a pilot's latitude, lay out a flooded tax-field, and raise a true dome. None of those uses was foreseen by the men who computed the figures.\n\nPublish, and the gain scatters where you never aimed it, none of it on your books. But those harbours and canals are your coast, and a coast that reckons better pays better through every gate you do own. What you forgo is the rent of secrecy, spent once. What you buy is a country cleverer than it was."
      },
      {
        "label": "Keep the findings for the court.",
        "effects": {
          "treasury": 5,
          "military": 3,
          "faith": -2
        },
        "explanation": "A method is dear to make and cheap to copy, and there is no fence around a number. Speak the technique aloud and any idler owns it, having paid nothing; that gap between the cost of making and the cost of copying is where a prince either collects or is robbed. Our own observatories let the astrolabe and the trigonometric tables drift out into the world, into Frankish navigation and rival courts' surveying, and were not paid a grain for the teaching.\n\nKeep Bahram's tables for the court and you hold a rent that does not blunt: your surveyors lay taxes exact while the neighbour squints, your fleet sails sure while his hugs the coast. The price is the hundred small trades that would have quickened had you let the knowledge loose. You trade the wide slow harvest for the near sure one, and a throne that cannot capture the fruit of what it funds will soon fund nothing."
      }
    ],
    "tags": [
      "astronomer",
      "arc"
    ],
    "arcCharacter": "astronomer",
    "arcAffinityDirection": "high"
  },
  {
    "id": "arc-astronomer-heresy",
    "speaker": "Astronomer Bahram",
    "speakerType": "astronomer",
    "concept": "Human capital flight",
    "scenario": "Shah, they name my measuring of the stars impiety, and the crowd outside grows by the hour. I will say only this: should you find no place for me here, there are courts that would seat me and my pupils at their own table tomorrow.",
    "options": [
      {
        "label": "Defend him; forbid only fortune-telling.",
        "effects": {
          "faith": -4,
          "people": 2
        },
        "explanation": "The clerics have folded two trades into one word. One man charts where the moon will stand at the next fast so the muezzin calls true; another sells a frightened mother the promise that her son will not die in spring. Forbid the second and you have not insulted the faith, you have defended it from its counterfeit.\n\nThe price is real: the prayer-leaders will feel slighted, and slighted men remember. Against it stands what human capital flight actually costs. A man who reads the heavens took twenty years to make and the boys at his knee ten more, and none of it can be seized or stored; it walks. Make his home unbearable and your rival inherits, free, a school you paid to build. Draw the line at fortune-telling and keep the man who measures."
      },
      {
        "label": "Dismiss him to calm the clerics.",
        "effects": {
          "faith": 6,
          "people": -3
        },
        "explanation": "Dismiss him and you sleep well tonight. The crowd disperses, the prayer-leaders bless your name, and a quarrelsome stargazer is no longer your trouble. All true.\n\nWhat you cannot see from the throne is the road north. A trained man does not protest; he packs, taking his instruments, his tables, and the half-dozen pupils who learned at his side, and carries twenty years of schooling to a court that will house him gladly. When the Mongols sacked Baghdad in 1258, the learned men who survived carried their craft to Maragheh and Cairo, and those cities rose on borrowed brilliance while the ruin behind them stayed ruined. A house need not burn to be emptied; it is enough to make the clever unwelcome. The cost of keeping him is loud and arrives today. The cost of losing him arrives slowly, in the almanac that does not appear and the school your grandson does not inherit."
      }
    ],
    "tags": [
      "astronomer",
      "arc"
    ],
    "arcCharacter": "astronomer",
    "arcAffinityDirection": "low"
  },
  {
    "id": "spymaster-loyalty",
    "speaker": "The Spymaster",
    "speakerType": "spymaster",
    "concept": "Costly signalling",
    "scenario": "The governor of the eastern marches sends sweet letters and keeps his gates shut, Shah, and I cannot read a man's heart through a sealed door. Let me set him a price only an honest man would pay: his son to your court, his strongest fortress to your garrison for one season. What he does with that demand will tell us more than a year of his vows.",
    "options": [
      {
        "label": "Demand the pledge.",
        "effects": {
          "military": 5,
          "people": -3,
          "treasury": 2
        },
        "explanation": "Any man will swear he loves you, and the traitor swears it warmest, because words cost him nothing. A pledge starts meaning something only when it would break a false man to give it. Demand the son and the fortress, and the loyal governor grumbles and complies; a year's inconvenience is cheap against a career of service. The governor already weighing rebellion cannot comply at all, because his son becomes a hostage against the rising and his fortress passes to your garrison the season before he meant to use it. He balks, delays, finds reasons, and the finding tells you what no informer could. That is costly signalling, run as statecraft.\n\nThe Ilkhans and the Timurids used it as a sieve, requiring vassals' sons at court and reading the answers. The price is real: you will insult a loyal man, and offended loyalty is a wound that keeps. What you buy is certainty about who holds your border, which flattery cannot sell you at any price.",
        "affinityEffects": {
          "spymaster": 4
        }
      },
      {
        "label": "Trust his word.",
        "effects": {
          "people": 3,
          "military": -4
        },
        "explanation": "Before you seize a man's child to learn his heart, price what the seizing does to the heart. A governor who would never have risen now knows his service earns suspicion and his son a cell; hostage-taking has manufactured rebels out of faithful men before, and the Ilkhanid and Timurid courts that ran on noble hostages bought resentment that smouldered for generations, frontiers held by fear, vassals serving with one eye on the captive.\n\nTaking his word costs something too: a vow is free to the traitor and the friend alike, so you stay blind, only now blind and comforted. There is a cheaper coin than a child. Bind him with what he already wants to keep: a share of the silk-toll that flows only while he is faithful, marriages, a stake woven so deep into your fortune that betrayal costs more than rebellion could win. If the deeds match the words through a hard season, you have a friend. If not, you have lost time, and time can be recovered. A son's hatred cannot.",
        "affinityEffects": {
          "spymaster": -3
        }
      }
    ],
    "tags": [
      "spymaster",
      "decision"
    ]
  },
  {
    "id": "spymaster-taxfarm",
    "speaker": "The Spymaster",
    "speakerType": "spymaster",
    "concept": "Moral hazard",
    "scenario": "Shah, your governors have learned a sweet arithmetic: when their accounts fall short, your treasury makes them whole, and so they wager your silver on doomed campaigns and feasts that feed no one but their own table. I have watched it from the shadows for a season, and I tell you their boldness grows with every quiet rescue.",
    "options": [
      {
        "label": "Make each governor bear his own losses.",
        "effects": {
          "treasury": 6,
          "people": -2,
          "military": -2
        },
        "explanation": "A man rides carefully on the cliff road when the fall is his. Promise to catch every governor at the bottom and they learn to gallop; that is moral hazard, and your treasury has been feeding it with every quiet rescue. Let each carry his own shortfall and the losses land on the men who chose them: the careful steward keeps what he hedged, the gambler is ruined by his own dice, and recklessness dies for want of subsidy.\n\nThe Ilkhans built the opposite machine and it ate their countryside. The moqata'a contractor paid the treasury up front and bore no loss afterward, so he squeezed the district until the fields lay barren; the one who reaps the gain and does not feel the wound squeezes by design. The cure is not gentle. Some governors will fall loudly, and their peasants will suffer before a ruined lord is replaced. Expect the complaint. A throne that swallows every defeat trains its servants to manufacture defeats.",
        "affinityEffects": {
          "spymaster": 3
        }
      },
      {
        "label": "Keep covering them to keep them loyal.",
        "effects": {
          "treasury": -6,
          "military": 3,
          "people": 1
        },
        "explanation": "A governor who fears his own ruin will, some morning, set the ruin against the rebellion and choose the rebellion. That is the danger the silver figures leave out. The men holding your distant provinces are held partly by the belief that the throne stands behind them when the ground gives way; cut that thread to save a season's coin and the next campaign may be fought by lords who no longer think you are theirs.\n\nSo the cost of covering them is double, and you should count both halves: you pay for the rescues, and you pay for the extra carelessness that rescue invites, the moral hazard stitched into every guarantee. What it buys is a frontier that holds, captains who muster boldly because a bad year will not end their house, and provinces that eat through poor harvests because the lord was not driven to flay them for his own survival. You are buying loyalty and waste in the same cloth. They do not come separately.",
        "affinityEffects": {
          "spymaster": -2
        }
      }
    ],
    "tags": [
      "spymaster",
      "decision"
    ]
  },
  {
    "id": "arc-spymaster-network",
    "speaker": "The Spymaster",
    "speakerType": "spymaster",
    "concept": "Principal and agent",
    "scenario": "I confess it freely, Shah: there is no corner of your realm whose secrets do not pass first through my hands, and I have grown rather fond of the arrangement. Say the word and I will keep it so, your one true window upon the dark — or, if it please you, I shall school a few apt boys to peer through windows of their own.",
    "options": [
      {
        "label": "Insist he train rivals to check him.",
        "effects": {
          "treasury": -3,
          "military": 2,
          "people": 2
        },
        "explanation": "A servant who alone knows where the bodies lie serves himself, and lets you assume the two loyalties run together. They do, until his interest parts from yours, and by construction you will be the last man in the palace to learn when that happens. The principal-agent problem does not care how charming the agent is.\n\nSo train the rivals he dislikes. Three watchers will quarrel, duplicate errands, and demand the same silver twice; the work gets slower and dearer, and no one of the three can sell you whole, because no one holds the whole. To betray you they must first conspire with each other, and conspiracy among rivals leaks. Rulers have leaned on a single indispensable intelligencer time out of mind, and noticed the indispensability at once and the danger only when the knife was out, because the one man who would have warned them was holding it. Split the knowledge and sleep worse for the bickering, lighter for the safety."
      },
      {
        "label": "Let him keep his monopoly on secrets.",
        "effects": {
          "military": 4,
          "faith": -2,
          "people": -2
        },
        "explanation": "One sharp instrument moves at the speed of its own thought. No rival to brief, no portion withheld, no errand run twice out of mistrust; when the courier rides at midnight he rides for one purpose. Keep the Spymaster his monopoly and you keep that speed, and you accept what it costs: a man unaccountable in exactly the measure that he is useful, whose turning you could only detect with eyes that are already his.\n\nMost rulers who struck this bargain died in their beds, well served. The few who did not are the ones the chroniclers remember, because a vizier's treachery makes a better story than a vizier's long fidelity. Since you cannot watch him, make betrayal unprofitable instead: reward his silence richly, bind his fortune to yours until ruining you ruins him. It is a thinner safety than three squabbling watchers would give, and a sharper sword."
      }
    ],
    "tags": [
      "spymaster",
      "arc"
    ],
    "arcCharacter": "spymaster",
    "arcAffinityDirection": "high"
  },
  {
    "id": "arc-spymaster-mercenaries",
    "speaker": "The Spymaster",
    "speakerType": "spymaster",
    "concept": "Adverse selection",
    "scenario": "Shah, you have put out an open call for swords and the courtyard is already full of them. I would only ask this: that you let me look at the men before your coin does, for the ones who come running to a call like ours are seldom the ones a wise captain would have chosen.",
    "options": [
      {
        "label": "Pay to vet every company first.",
        "effects": {
          "treasury": -5,
          "military": 5
        },
        "explanation": "Ask who answers an open call for swords, no questions asked. The steady man already has a banner; the honest one is owed wages elsewhere. The courtyard fills first with the men nobody kept: cast out of the last company, a debt left in the next town, a reputation that arrives after the hiring. You did not summon them by name. You summoned a kind, and adverse selection is the name for the kind arriving.\n\nWhere quality cannot be seen before paying, coin spent blind buys what others refused. The free companies of the fourteenth century sold their swords to the highest bidder and deserted when a better offer rode by; a prince could fill his ranks in a week and lose half of them the morning a richer prince passed. So pay to look first. Send men to the towns these companies last drank in, count their dead, learn which band held a line and which fled and called it cunning. The fee for sight is small beside the price of a wall held by men who melt."
      },
      {
        "label": "Hire whoever comes, cheaply.",
        "effects": {
          "treasury": 3,
          "military": -5,
          "people": -2
        },
        "explanation": "Ask the simpler question: why are these men cheap? A good company that held a wall and kept its word does not loiter at strange gates begging hire at any price. It is already retained, already fed, chosen by some careful lord who looked before he paid. The swords still loose in the market are loose because someone who could see them clearly let them go. Cheap hiring selects for exactly the men you should not have.\n\nThe fourteenth-century free companies taught the lesson in blood: a man bought for nothing is loyal to nothing, and when wages run short he pillages the villages he was hired to shield, so the coin you saved at the gate is collected later from your own people, with interest. You may bank five purses tonight by hiring blind. A wall that breaks at the first true charge will cost fifty, at the worst possible hour."
      }
    ],
    "tags": [
      "spymaster",
      "arc"
    ],
    "arcCharacter": "spymaster",
    "arcAffinityDirection": "low"
  },
  {
    "id": "queenmother-marriage",
    "speaker": "Dowager Banu",
    "speakerType": "queenmother",
    "concept": "Coalition formation",
    "scenario": "My Shah, the boy is of an age to be promised, and the Georgian house has let it be known a daughter of the Bagrationi line might be his. Their horsemen guard the same passes the steppe raiders ride down; a wedding could make that wall ours as well as theirs. I would have your leave to send word before another suitor does.",
    "options": [
      {
        "label": "Make the Georgian match.",
        "effects": {
          "military": 5,
          "faith": -2,
          "treasury": 3
        },
        "explanation": "Do not weigh the bride; count the horsemen who come with her, and the ones who will now stay home. A marriage pact is coalition formation with a wedding attached: on one side of the account, the enemies it deters; on the other, the partners it forecloses. Bound to the Bagrationi, your northern flank stops reading as a wound, because the steppe captains who price a raid by the weakness of the raided will see Georgian lances behind your own. Your house has bought this before; the marriage ties woven with Queen Tamar's house around 1200 kept the passes quiet when silver could not.\n\nA wall faces one way. Bound to Georgia, you have spent the freedom to stand with Georgia's rivals, whatever they might one day offer, and the mullahs will mutter about a Christian match in every Friday sermon. The steppe comes every spring; the rival's better offer comes once, if ever. That comparison is the whole decision.",
        "affinityEffects": {
          "queenmother": 4
        }
      },
      {
        "label": "Keep the heir unpromised.",
        "effects": {
          "treasury": -2,
          "people": 2
        },
        "explanation": "A crown with no pacts owes no one a war. Keep the heir unpromised and you keep the freedom to choose your friend on the morning the trouble actually arrives, rather than years earlier, blind to who the enemy will be. Pledge him to Georgia and you inherit its quarrels, its enemies, and its bad seasons along with its lances.\n\nBut waiting is not free. The friends you do not make go elsewhere and remember the shut door, and when the blow falls, on this coast it always falls, you may look north and find only the cold you declined to warm. Flexibility is paid for in solitude, and the man who keeps every option open can discover he kept them for no one. Count the empty chairs at the council the day you finally need them filled.",
        "affinityEffects": {
          "queenmother": -3
        }
      }
    ],
    "tags": [
      "queenmother",
      "decision"
    ]
  },
  {
    "id": "queenmother-heir",
    "speaker": "Dowager Banu",
    "speakerType": "queenmother",
    "concept": "Time inconsistency",
    "scenario": "My son, the court has begun to count your sons under its breath, and a counting court is a dividing one. Name your heir while you are strong enough to make the naming stick, and let the whole hall hear you swear it.",
    "options": [
      {
        "label": "Name the heir and bind yourself.",
        "effects": {
          "people": 5,
          "military": 2,
          "treasury": -2
        },
        "explanation": "A court that does not know who comes after you has begun choosing for itself. While the question stays open, every amir keeps a candidate in his sleeve, and a man grooming a candidate is not serving you. Naming the heir is a time-inconsistency problem: wise to promise today, bitter to keep tomorrow, because the boy may weaken, a younger son may outshine him, and next year's judgment will beg to reconsider. Which is exactly why the promise must be put beyond your own reach, sworn in the great hall where retracting it costs more than keeping it. A promise you can revisit is one the amirs know you can revisit, and they plot accordingly.\n\nWhen Abu Sa'id died without a clear heir in 1335, every amir backed a different puppet and the Ilkhanate came apart in a season of murdered claimants. Not for lack of candidates; for lack of one no faction could hope to dislodge. You are not buying the best heir. You are buying an ending everyone already believes in.",
        "affinityEffects": {
          "queenmother": 3
        }
      },
      {
        "label": "Keep your options open.",
        "effects": {
          "treasury": 2,
          "military": -3,
          "people": -2
        },
        "explanation": "Stay silent and you keep the freedom to weigh your sons as they ripen and lean toward the one who proves out. A king who has promised nothing has spent nothing. That is the visible side of the account.\n\nThe hidden side is what your silence does to the amirs. Each reads it as an invitation, keeps his own candidate fed and flattered, and reasons that if he waits and pushes and removes a rival or two, your unfixed favour might fall on his man. Your prudence is their open contest, and open contests for thrones are run with knives. The Ilkhanate's fate was not sealed at Abu Sa'id's deathbed in 1335; it was prepared in all the years the succession stayed a thing men could still dream of winning. You hold the freedom to choose well and late. The price is the certainty that would have kept the daggers sheathed, and on the morning you die, the freedom becomes a war.",
        "affinityEffects": {
          "queenmother": -2
        }
      }
    ],
    "tags": [
      "queenmother",
      "decision"
    ]
  },
  {
    "id": "arc-queenmother-waqf",
    "speaker": "Dowager Banu",
    "speakerType": "queenmother",
    "concept": "Endowment as commitment",
    "scenario": "My son, I have set aside a tract of crown land for a college and an infirmary, and I would have it sealed as waqf — past my reach, past yours, past every Shah who comes after. Let the deed be drawn so that no hand, however needful, can ever pull these stones down for coin.",
    "options": [
      {
        "label": "Found the endowment.",
        "effects": {
          "faith": 5,
          "people": 4,
          "treasury": -5
        },
        "explanation": "She does not fear your enemies. She fears you, in the failed-harvest year when the granaries echo and a college of fed scholars looks to a hungry treasury like a feast nobody is eating. That Shah is real and he will sit where you sit, and the waqf's whole worth is that it binds his hands along with yours. Land made inalienable in law cannot be sold, seized, or reasoned away by a clever vizier with a famine to point at. The lock is the gift; endowment is commitment, and a promise breakable in the bad season is only a mood.\n\nThe record is long. Waqf lands fed mosques and colleges for centuries because no ruler could touch them, and the Shirvanshahs' palace complex at Baku grew such foundations around itself, stone drawing stone across generations. A scholar gives thirty winters to study only if he knows the bread survives the dynasty's moods. You lose the use of the land. That is the price of building something that does not die with you."
      },
      {
        "label": "Keep the lands liquid for the treasury.",
        "effects": {
          "treasury": 6,
          "faith": -3
        },
        "explanation": "A Shah who cannot answer his realm's worst hour has already lost the realm. What the deed would forbid you is not waste; it is the failed harvest, the army that must be paid before the frost, the plague that empties a quarter of Baku and asks for grain you no longer command because grain was turned to stone a generation ago. Land you may sell is land that answers when the realm cries out, and sealing it away forever is swearing that no future year will be desperate enough to need it. Nobody who has watched a hard winter can swear that.\n\nEndowments do not garrison walls. The pious deed survives only while a living power stands over it, and that power must keep something in hand. Build the college from revenue you choose to give each year; the waqf binds the wise Shah and the fool alike, and you cannot know which one inherits."
      }
    ],
    "tags": [
      "queenmother",
      "arc"
    ],
    "arcCharacter": "queenmother",
    "arcAffinityDirection": "high"
  },
  {
    "id": "arc-queenmother-faction",
    "speaker": "Dowager Banu",
    "speakerType": "queenmother",
    "concept": "Collective action problem",
    "scenario": "I have watched this court longer than any of them, my son, and I tell you the harem and the nobles have stopped fighting over you and begun feeding on the realm itself. Every house would prosper if all kept their hands still, yet not one will be the first to fold its fingers while the others reach.",
    "options": [
      {
        "label": "Impose a shared settlement on the factions.",
        "effects": {
          "treasury": -3,
          "military": 2,
          "people": 3
        },
        "explanation": "If every house held its hand, all of them would eat well from a fat, quiet realm, and they know it. But the house that grasps while its rivals sit still takes the contract, the salt-farm, the border command, so no house dares be the patient one. Each acts sensibly alone and the whole sinks under all of them. A collective action problem is not a failing of bad men; it catches good ones too, which is why it never solves itself.\n\nIn the dying Ilkhanate every amir calculated correctly and alone, and the realm they all depended on fell to pieces beneath them. A bargain no party will keep first must be kept for them from above. Bind the houses to a settlement and hold the rod that enforces it; the treasury pays for the holding, and the harem will show you sour faces. A court that does not devour itself can be fed and marched. The houses cannot trust one another. They can be made to trust your hand."
      },
      {
        "label": "Let them fight it out.",
        "effects": {
          "treasury": 2,
          "military": -4,
          "people": -3
        },
        "explanation": "Standing back has its comforts. The rivals court you with gifts, the treasury spends nothing, and the strong will presumably settle the matter. But this quarrel does not tire itself out, because each house is right to keep grabbing: while any rival still reaches, reaching faster is the prudent move for everyone. The grabbing quickens as the realm thins, and the common ground they stand on, granaries, garrisons, the loyalty of the provinces, is eaten by their own good sense.\n\nNo outside enemy broke the late Ilkhanate. The amirs did, each pulling his own way until the realm was not worth the pulling, and their swollen treasuries bought them a kingdom of ash. Your walls feel it first, since soldiers serve a paymaster and a brawl has none. Standing back is not neutrality. It is choosing the ending where everyone loses together, you included."
      }
    ],
    "tags": [
      "queenmother",
      "arc"
    ],
    "arcCharacter": "queenmother",
    "arcAffinityDirection": "low"
  },
  {
    "id": "caravan-entrepot",
    "speaker": "Caravan-Master Eldar",
    "speakerType": "caravan",
    "concept": "Agglomeration economies",
    "scenario": "Shah, the silk comes down from the hills in a hundred thin trickles, and each village square swallows a little and tells me nothing. Bind every caravan to break its bales at Shamakhi, and the trade will thicken until it feeds itself. A market grows by being a market.",
    "options": [
      {
        "label": "Make Shamakhi the compulsory staple.",
        "effects": {
          "treasury": 8,
          "people": -3,
          "military": 2
        },
        "explanation": "Picture two market squares. In one, a single bale and a single buyer who names his price. In the other, fifty bales, fifty buyers, money-changers along the wall, brokers who know last week's price in three cities, a porter for hire at any hour. A seller hauls his silk to the second square though it lies a week farther, because agglomeration pays: every merchant who comes makes the place more worth coming to, and the gain compounds.\n\nShamakhi's crowd assembled itself this way. The Genoese came, the Venetians came because the Genoese were there, the Russians because all three could be bid against at once, and by the 1560s the Muscovy Company's agent found the floor already thick. Binding every bale to break at Shamakhi forces that compounding: credit gathers, skilled men settle, and your customs house counts coin in one room instead of chasing it through forty. The villages that lose the silk trade will hate the order, and the staple gate will need guards before the first season is out.",
        "affinityEffects": {
          "caravan": 4
        }
      },
      {
        "label": "Let trade flow where it will.",
        "effects": {
          "people": 4,
          "treasury": -4
        },
        "explanation": "A decree can command where a caravan stops. It cannot command that the stop be worth the merchant's while, and a market conscripted is not the same organism as a market grown. Shamakhi drew its Genoese, Venetian, and Russian buyers because merchants chose it, and what men choose they defend and improve. Force them to one floor and they learn instead to sell short of the gate, bribe the clerk, and curse your name on the road, while the toll you imagined leaks out the sides.\n\nThe scattered village markets have their own virtue meanwhile. The grower keeps the saving of the short road, the small man with three bales is not lost among great houses, and no single fire, feud, or plague can stop a whole season's trade. Many doors are harder to shut than one. If you want the crowd, lighten the road to Shamakhi rather than barring every other.",
        "affinityEffects": {
          "caravan": -3
        }
      }
    ],
    "tags": [
      "caravan",
      "decision"
    ]
  },
  {
    "id": "caravan-contracts",
    "speaker": "Caravan-Master Eldar",
    "speakerType": "caravan",
    "concept": "Transaction costs",
    "scenario": "Shah, I have ridden roads where a bargain holds only because both men fear the same blade, and roads where it holds because both men know the same law. I ask you to raise within your caravanserai a court with true weights, a scribe for written contracts, and a judge to settle quarrels before the dust of the quarrel settles. Let a deal rest on something firmer than whether two strangers happen to like each other's faces.",
    "options": [
      {
        "label": "Build the caravanserai court.",
        "effects": {
          "treasury": -6,
          "people": 4,
          "military": 1
        },
        "explanation": "Most of what a merchant pays is not for the goods. It is the price of dealing with a stranger: the weighing and reweighing on suspected scales, the haggling that is half fear of being skinned, the guards hired against the partner as much as the bandit. Transaction costs are that hidden bill, and a caravanserai court is built to shrink it. One sealed weight kills the quarrel over scales; a written contract and a judge on the spot let a man from Tabriz deal with a man from Astrakhan he will never see again, because both answer to the same seal. The trust moves out of the two men and into the institution, where it does not have to be earned afresh each morning.\n\nThe great trading inns of these roads already ran this way, warehousing goods under guard and settling disputes under known rules, and the volume followed. You are not taxing trade harder. You are making more trade happen, and taking your share of the larger sum.",
        "affinityEffects": {
          "caravan": 3
        }
      },
      {
        "label": "Leave merchants to their own bargains.",
        "effects": {
          "treasury": 2,
          "people": -3
        },
        "explanation": "The market found its own order long before judges were invited to improve it, and the thrift of leaving it alone is real. So is the hidden tax it keeps in place. Where no shared rule exists, an honest man trades only with kin and known faces, because only their word is safe; the stranger with good goods and a fair price is turned away, not for dishonesty but because there is no way to know. Commerce shrinks to the size of a family.\n\nThe caravanserai without a court is just a stable. The exchanges that wanted only an enforceable promise never happen, and they leave no trace in any book, which is what makes this choice easy and expensive at once. The road grows quieter by amounts nobody measures, and the merchants who might have made Shirvan their crossroads make it somewhere with a seal they can sue on.",
        "affinityEffects": {
          "caravan": -2
        }
      }
    ],
    "tags": [
      "caravan",
      "decision"
    ]
  },
  {
    "id": "arc-caravan-holdup",
    "speaker": "Caravan-Master Eldar",
    "speakerType": "caravan",
    "concept": "Hold-up problem",
    "scenario": "Shah, all the coast's silk now rides on my caravans, and they ride well. I come only to ask, with every respect, for a somewhat larger share of what we carry together.",
    "options": [
      {
        "label": "Break his grip; back a second carrier.",
        "effects": {
          "treasury": -4,
          "military": 2,
          "people": 2
        },
        "explanation": "He is not pricing his camels. He is pricing your inability to do without him, and he will collect it to the last dirham, because that is what a hold-up is. When the silk moved by three roads no carrier could lean on you; you let two wither because his was cheaper, and the leaning began the day the second one closed. A carrier who can stop the silk owns a share of the throne without conquering anything.\n\nPleading confirms the weakness and invites the next demand. The cure is the rival you should have kept: find a lesser house hungry for the trade and fund its first hard seasons from your own purse. It costs now, and the new road will be rough before it is smooth. The day a bale can choose between two carriers, Eldar's price falls back to the price of carriage."
      },
      {
        "label": "Pay his price; you need the road.",
        "effects": {
          "treasury": -6,
          "people": 1
        },
        "explanation": "Refuse him and the silk stops. The caravans are loaded, the season is short, the Baku merchants have promised the bales to Tabriz, and he chose this week because there is no time to cut a second road before the snows. Pay, and the trade flows, and the treasury is lighter but fed.\n\nBe honest about what the payment is. Your dependence is the weapon, and you handed it to him season by season, each time an alternative died because his road was a touch cheaper. Every season you pay, the dependence deepens: the rival houses grow fainter, the merchants forget there was another road, and Eldar learns that asking works. The next demand comes higher, justified by the same logic as this one. Pay to save this season's silk if you must. Do not call the matter settled; you have agreed to the first installment."
      }
    ],
    "tags": [
      "caravan",
      "arc"
    ],
    "arcCharacter": "caravan",
    "arcAffinityDirection": "high"
  },
  {
    "id": "arc-caravan-rival",
    "speaker": "Caravan-Master Eldar",
    "speakerType": "caravan",
    "concept": "Trade diversion",
    "scenario": "My bales used to come to your gate as water runs downhill, Shah, by old habit and no other reason. Now Tabriz takes lighter tolls and keeps its roads clear of brigands, and I tell you plainly: the drivers I once led to you are already turning their mules that way.",
    "options": [
      {
        "label": "Cut tolls and improve the road to compete.",
        "effects": {
          "treasury": -5,
          "people": 3,
          "military": 1
        },
        "explanation": "A driver chooses a road by adding: your toll, the days lost to bad track, the bribe at the ford, the odds of losing a bale to brigands. Whichever sum is smaller wins. When Tabriz lowers its number, his mules turn, and no command alters a column he adds in his own head a hundred farsakhs away. Trade diversion is that column changing answer.\n\nSo compete on the only ground the trade respects. Shave the levy, mend the road, post riders to clear the passes, and the bale that would have turned east finds your gate cheaper all told. The silk routes are littered with waystations that assumed the traffic was theirs by right; when the roads shifted toward Tabriz and Bursa, and later the Cape sea-route, the toll-books stayed open over crossings that no longer came. Their lords had not lost a war. They had asked more than the passage was worth, and the passage went elsewhere. A softer rate on ten crossings beats a proud rate on two."
      },
      {
        "label": "Hold your tolls and trust your harbour.",
        "effects": {
          "treasury": 3,
          "people": -4
        },
        "explanation": "Eldar comes to you sore, and a sore man counsels his grievance. Before you empty the treasury chasing every rumour from the east, count what you hold: a harbour, which Tabriz cannot dig at any price. A toll cut to win custom can be raised the moment the custom arrives; a road safe this season can turn deadly when a new amir forgets to pay his guards. Match every boast and you teach the drivers that your gate yields to pressure, and there is no floor under that lesson but ruin.\n\nHold, then, but hear the warning inside the advice. Diversion arrives by quiet degrees, never in one season you could notice and answer; the books read rich while the wharves stand idle, which is how the great waystations died when the routes moved. Not stormed. Forgotten. Keep your eyes on the wharf, not the rolls, and be ready to move before pride empties it."
      }
    ],
    "tags": [
      "caravan",
      "arc"
    ],
    "arcCharacter": "caravan",
    "arcAffinityDirection": "low"
  }
];
