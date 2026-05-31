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
        explanation: "A toll is rent on passage, Shah, and rent has a ceiling no clerk can decree away. Past that ceiling the bale does not pay; it simply turns north. This is the Laffer curve standing at your city gate. Halve the levy and each crossing yields less, yet should ten caravans come where four came before, the gate may earn near as much while the bazaar drowns in Persian silk and Russian fur. I would not promise the books balance. That depends on how many merchants were truly poised to flee.\n\nWhat gives the threat its teeth is Derbent. A toll is only as high as the next gate is far, and Derbent's gate is a few days' sail across the same sea. The caravan-master is no patriot. He weighs your dirham against theirs and steers his camels to the cheaper number, taking the customs revenue with him. Hold the rate too proud and you keep a large share of a shrinking trade.\n\nThe same arithmetic governs Baku's harbor today, where fees are trimmed to lure transit cargo that might otherwise route through some rival port. Cut the rate, widen the throughput, and trust the volume to make up the difference, provided, of course, the volume comes.",
      },
      {
        label: "Hold the toll. The treasury comes first.",
        effects: { treasury: 6, people: -5 },
        explanation: "Hold the rate and you are betting you sit on the near slope of the Laffer curve, where the toll can climb and the caravans still pay it. They grumble, Shah, and still they pass, because the road to Derbent is longer than their patience this season. Your vaults fill. A high toll is bearable so long as you hold the cheaper route and the merchant has nowhere better to take his bales. But the grumble is a price too, paid in goodwill rather than coin: the bazaar names you greedy, the loyal trader eyes the northern sail, and the gate that earns most this year is the gate most eager to be abandoned the next. Gold counted now, resentment accruing quietly.",
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
        explanation: "A non-renewable resource is exactly what the Genoese is offering to buy: silver now against a thing that does not grow back. A seep is not a vineyard; it does not bud again next spring once he has drained it. So weigh what he hands you against what the ground would have handed your grandson, and notice the trick in the timing. The coin arrives whole and is gone by Nowruz. The naphtha would have arrived in a thin trickle every single year, forever, and that trickle is what you are signing away for one fat purse.\n\nYour forefathers understood the difference and kept the wells in the family's grip. They did not sell Absheron; they leased the dipping of it, season by season, to men of Baku who could be watched, taxed, and replaced. The arrangement is old as the oil itself. When al-Mansur was raising the walls of Baghdad in the days after the Prophet's century, he already thought it worth his while to set a tax on this very naphtha. Caliphs took their cut and left the spring in the ground. The Genoese proposes the reverse: he holds the spring, you hold a coin, and the coin does not refill the way the spring would have.",
      },
      {
        label: "Refuse him.",
        effects: { treasury: 0, military: -4, faith: 4, naphtha: 2 },
        explanation: "Refusing him is how you treat a non-renewable resource as one. When the foreign majors came to Baku in the 1990s they were not handed the oil. They were handed a contract: pump the field, take your agreed slice, the state keeps the field. Ownership stayed home, because the field could not be remade once it was gone. Strip the dollars and the helicopters off that arrangement and you are looking at exactly the choice the Genoese is forcing on you now.\n\nRefusing him keeps the asset in your hand and the silver out of your purse, which is uncomfortable, but it follows the long habit of this coast. Naphtha was Shirvan's name in the world before it was anything else. The geographers of Baghdad called the place the land of the naphtha fountain, and Caspian boats carried the white oil north toward the Volga while the rulers here grew rich not by selling the source but by taxing every barrel that left it. Marco Polo, passing through, wrote that the seeps gave enough to load many camels. That is precisely the reason a man like your Genoese smiles so warmly: the wealth is plain to any traveller, and plain wealth attracts cheap offers.\n\nHold the wells and you keep the rent flowing for as long as the ground gives. Sell them and you have made one good day and a long line of poorer ones. He will be back next spring with a smaller offer, and perhaps a galley anchored close enough to be noticed.",
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
        explanation: "In 1294 the Ilkhan Gaykhatu had banknotes printed at Tabriz, stamped with the promise that provisions would become cheap and the rich and poor made equal. Within three days the bazaars stood shuttered. Nobody would sell good flour for a paper square a prince had declared worth six dirhams. The minister who dreamed it up was hunted down and killed, and the notes were quietly gathered up and burned. A price ceiling is the oldest trick in the book of well-meaning rulers, and the book is full of its corpses.\n\nThat is the lesson the Qadi has not learned. Decree bread at two when the harvest says six, and you have not made bread cheaper, you have made it scarce. The loaves in the window go fast and at a loss. The rest go behind the baker's back, over the border, into the cellars of men who can wait. Your subjects queue all morning for the privilege of finding the shelves bare. You will have legislated the symptom and bred a second sickness underneath it.\n\nNone of which means letting them eat bark. A treasury can buy grain and give it away at a loss it chooses to bear. What it cannot do is order a baker to bear that loss for it.",
      },
      {
        label: "Let the price rise. The market will clear.",
        effects: { treasury: 2, people: -10, military: 2, faith: -6 },
        explanation: "Refusing the cap is refusing a price ceiling, and a price ceiling is the one thing that keeps bread from finding the people who have it. Leave the price at six and the bread finds its way to whoever can pay six. The hoarder opens his cellar, the miller who held back his sacks brings them out, and the shelves fill again. That is the cold mercy of a high price: it is a summons that empty threats can never be. The man it summons, of course, is not the widow behind the mosque. She eats less, then nothing.\n\nThe Ilkhanate arrived at this same arrangement without ever choosing it. Under the moqata'a, the tax-farmer paid the treasury a fixed sum for the right to squeeze a district, and bid for the contract by promising more than the soil could yield in a lean year. So the peasant came last in the line: after the Ilkhan, after the Mongol princes, after the amirs, after the farmer's own profit. Whatever the harvest left over was his, and a failed harvest left nothing over.\n\nHear the Qadi before you decide. Scripture does not ask whether the market cleared. It asks who ate, and who starved while you reasoned that the price was just.",
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
        explanation: "Once the walls stand at Sangachal, every caravan will sleep safe behind them, and not one will be asked first whether it paid for a single stone. That is precisely why no merchant will pay. Each waits for the next to bleed for the gift, since the gift, once given, cannot be withheld from latecomers. So the wall never rises, and the road keeps eating men and silk in the dark between Baku and Salyan.\n\nThis is the nature of a public good: a thing that profits all and binds none gets built by you or by nobody. The treasury is poorer for it. The road, at last, is not.",
      },
      {
        label: "Let the merchants organise themselves.",
        effects: { treasury: 2, people: -3, military: -1 },
        affinityEffects: { vizier: -2 },
        explanation: "What the vizier is describing is a public good, and a public good has no honest buyer. A road's shelter belongs to everyone who passes and to no one who built it, which means no merchant in his right mind volunteers to build it. Each would rather hoard his silver and ride through a roof someone else paid for. Wait for them to agree among themselves and you will wait through several winters of robbed caravans, while the loss spreads thin and quiet across a decade of slower journeys nobody troubles to count.\n\nLook at Baku itself. The walled inner city, the Maiden Tower, the palace your forebears Ibrahim raised and Farrukh Yasar finished — every stone of it carries a ruler's name or a great house's, because in Shirvan there was no town council levying coin for common works. What the crown did not commission did not exist. The merchants traded beneath those walls; they did not raise them.\n\nThe same arithmetic still holds where the road is now a pipeline or a rail line across the Caspian: the state lays the corridor, and private silver fills the warehouses afterward. So, Shah, if you ask my counsel — and assuming the treasury can absorb the outlay this season — leaving it to the merchants is a thrift that costs more than it saves, though I would not stake my office on the precise year the bill arrives.",
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
        explanation: "Debasement and the inflation it breeds is what the general is really proposing, and the manat showed you its endpoint in 2015, when it lost a third of its value in a single morning and nobody in Baku had clipped a coin. The central bank had simply stopped pretending the old exchange rate was true. The mechanism you are weighing is older and cruder, but it ends in the same place.\n\nMint the dinar lighter and the first week is glorious. The garrison is paid, the storehouse looks full, and the metal you held back is pure profit to the throne. Then the moneychangers in the bazaar do what moneychangers always do. They bite the coin, weigh it, and price your soldier's wage by what the silver is worth, not by what your seal claims it is worth. Good old dinars vanish into strongboxes; only the thin new ones change hands. The Caucasus learned this in your great-grandfather's time, when silver ran short and the mints of Shirvan, of the Eldiguzids, of Derbent quietly went over to copper. Worse came in 1294, when the Ilkhan Gaykhatu printed paper notes in Tabriz, stamped with Chinese letters borrowed from the east. Within days no one would sell bread for them. The man who advised it was killed.\n\nYour lighter dinar is the same theft, only slower and quieter. The garrison will not check, you are right. The market will check for them, by spring.",
      },
      {
        label: "Raise a special tax instead.",
        effects: { treasury: 4, people: -10, military: 2, faith: -2 },
        affinityEffects: { general: -1 },
        explanation: "A tax is the honest cousin of debasement and inflation, and the Ilkhans show you why. The men who collected their taxes in Azerbaijan did not work for the state. They bought the right. A contractor would hand over a fat sum of silver in Tabriz today, take a lease of perhaps three years on a district, and ride out to recover his outlay and his profit from the peasants however he could. The treasury was paid in advance and untroubled by how. The villager met the whole cost in the flesh, looking the collector in the eye as his grain was carted off. Brutal work, and well documented to have been so.\n\nThat is what a tax is, stripped of comfort. It takes real wealth, in daylight, from people who know exactly who took it and why. The collector is hated because the collector is visible. But notice what does not happen: the price of bread still means something, the silver in a dinar still means something, the books still tell the truth. A tax wounds where you can see the wound and dress it.\n\nThe lighter coin would have spread the same loss through every market in the realm, blamed on no one, curable by no one. Take the wealth openly, Shah. Let them hate the tax-man and not the coin. A grievance with a face can be answered; a rotten currency cannot.",
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
        explanation: "Pay it and you will have bought one thing only: the absence of three thousand horse. A known sum leaves the treasury, while the sum you never spend stays invisible, the burned granary and the abandoned wall that never happened. That hidden ledger is where opportunity cost lives. The whole art of it is reading where the silver given up to a bribe stops being dearer than the silver a war would take.\n\nYour ancestors were practiced at this arithmetic. In 1394 Ibrahim came before Timur in the Caucasus bearing gifts, eight slaves among them, when Mongol custom asked for nine of everything. He offered himself as the ninth. The line is said to have spared Shirvan a sacking, which makes it the cheapest tribute any Shirvanshah ever paid. The dear ones came later, in coin, when Qara-Yusuf took him and the price of his own person had to be counted out in silver. He paid. He came home. The ledger of a vassal records survival as an ordinary expense, and Ibrahim never pretended otherwise.\n\nI would only observe, Shah, that the Ilkhan asks for twelve thousand and a war costs rather more.",
      },
      {
        label: "Refuse. Spend the silver on the walls instead.",
        effects: { treasury: -6, people: 2, military: 6, faith: -3 },
        affinityEffects: { envoy: -4 },
        explanation: "Refuse, and you are still paying opportunity cost; you have only changed the currency. Every small state that ever stopped paying a larger one made the same wager you are weighing now: that the patron has grown too distracted to come collect. The dinars you keep are not free, because in their place you take on a risk you cannot price. Get the timing right and the world calls it independence. Get it wrong and it calls it a cautionary tale.\n\nSo refusing does not save the silver. It trades a settled bill for a guess. The walls go up; the Ilkhan's cousin perhaps rides, perhaps does not. What you are really pricing is his ability to enforce the demand, not his appetite for it, and the appetite is rarely the part that lapses first.\n\nYour house has read this clock correctly before. While the Ilkhanate held together the Shirvanshahs paid and bowed; once it broke apart after 1335 they began striking their own coin again, raising mosques on their own account, building out the Baku citadel that Ibrahim I would later make a seat. None of that came from defiance for its own sake. It came from noticing the precise season when Tabriz could no longer make good on a threat. Refuse a year early and you simply name the date of your own sacking.\n\nI will not pretend to know whether this is that season. I will only say that the cousin's three thousand horse are easier to count than the resolve behind them.",
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
        explanation: "What the headman is describing is comparative advantage. A village does best to grow the one thing its soil and its hands grow better than anyone, then buy its bread from whoever grows that better. Your headman's slope above Shamakhi raises a finer worm than barley, and the market knows it. Marco Polo wrote down the silk of Shirvan by name, which is more than he did for most kingdoms' grain. Pull out the barley, fill every terrace with mulberry, and the village will hold more silver at harvest than it has ever counted.\n\nIt will also hold no bread of its own. A field of worms feeds nobody until the silk is sold and the grain bought back, and that chain runs through Tabriz and Genoa and across a sea you do not command. When Timur came down in 1386 the roads did not ask whether your peasants had eaten. A bad season in Italy travels back up the caravan track and arrives in Shamakhi as an empty granary. The household that kept its barley grumbles in a fat year; the household that tore it out starves in a thin one.\n\nThe lesson outlived the looms. Azerbaijan poured itself into oil after the wells reopened in the 1990s and grew rich at a pace its neighbours envied, until the price fell through the floor around 2015 and the manat lost a third of its worth in a single winter month. The headman is asking you to wager his village on a price set in cities he will never see.",
      },
      {
        label: "Tell them to keep both crops.",
        effects: { treasury: -2, people: 5, military: 1, faith: 2 },
        explanation: "Refusing the worm is refusing the full pull of comparative advantage, and you accept a smaller purse in good years to buy a granary that stands in bad ones. Let them keep the barley beside the mulberry. The worm pays well until the season the silk cannot move, and then a field of leaves is just leaves. A village that grew its own bread through the famines of the 1240s remembers what the silver-counting houses forgot: you do not eat a price you cannot control. Two crops feed a family that one rich crop would have starved. Tell the headman to plant for the lean winter, not the fat autumn.",
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
        explanation: "What Tahmina is selling you is a monopoly, dressed up as a tidy fee. When the Venetian Contarini passed through Shamakhi in the 1470s, he found Genoese and Venetian buyers crowding the silk markets, jostling each other for the same bales, and the Genoese keeping their own trading posts along the Caspian shore. Not one of them held an exclusive right to carry the goods. They competed, and the Shirvanshahs let them, because a port full of rival buyers paid more coin in aggregate than any single house would ever hand over for a privilege.\n\nNow weigh Tahmina's offer against that. Her fifteen thousand dinars are real and they arrive tomorrow. But once she alone may ship on the Caspian, she names the freight, and she will name it high. The buyers in Tabriz and Astrakhan pay her surcharge; the smaller Shamakhi houses fold their long-distance trade or carry it on her terms. The jurists had a word for cornering a needful good and squeezing its price: *ihtikar*, and they did not mean it kindly.\n\nThe arithmetic, Shah, is the kind I keep in my own ledgers. You collect a fee once. She collects the margin forever, and on goods that used to fill your customs rolls under a dozen different names. The grant looks like income today. Tomorrow it reads as the price you paid to hand away the better part of the trade.",
      },
      {
        label: "Refuse. Keep the trade open to all houses.",
        effects: { treasury: -2, people: 6, military: -1, faith: 3 },
        explanation: "Refuse, and you have just declined to manufacture a monopoly. You keep many small streams instead of one large dam: a dozen houses each pay you a modest duty, and together their duties run far past anything a single concession would yield. More to the point, they keep paying year after year, because a market with many sellers does not let any one of them strangle the rest into closing.\n\nGiosafat Barbaro, who saw Shamakhi in 1476, counted some four or five thousand households there, weaving silk and cotton and a hundred other trades. A city that thick with producers exists only where caravans compete to fill it. Grant one house the carriage, and those weavers do not vanish, but they stop being your taxpayers and become Tahmina's employees, paying their margin to her counting-house rather than your treasury. The coin in your vault might read the same that first year. The shape of who owns the trade does not.\n\nThe same logic governs how a state pries open a sector it once held shut, letting rivals bid where one holder used to sit, so the surplus spreads across many hands instead of pooling in one. The General will grumble that fifteen thousand dinars buys a stretch of wall. Tell him a broad and willing tax base buys ten walls, and goes on buying them.",
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
        explanation: "The bakers and dyers have walked into a textbook negative externality, and you are about to price it correctly. Walk the Baku waterfront today and you are walking on the bill for someone else's leather. The Soviet oil and chemical works poured their filth into the bay for decades and called it cheap production; the cleanup that followed, decades later, was the city finally paying the price that was always there but never written on any invoice.\n\nYour tanners are doing the smaller, older version of the same trick. Leather sells, and the price a man pays for a hide reflects the labour and the bark and the lime. It does not reflect the dead fish from the bridge to the eastern wall, nor the spoiled dye-vats, nor the ovens fed by a fouled canal. That cost falls on the bakers and the dyers, who never agreed to bear it.\n\nThe cities you would admire understood this. In Tabriz and Yazd the water-fouling crafts sat outside the walls or below the living quarters as a matter of course, and the muhtasib who policed the markets had clear authority to abate exactly this kind of nuisance. Moving the tanners does not invent a rule. It enforces an old one: the trade that fouls the water pays to carry its mess elsewhere.",
      },
      {
        label: "Leave them. Leather pays well, and the canal is wide.",
        effects: { treasury: 3, people: -7, faith: -4, naphtha: 0 },
        explanation: "Here is a negative externality left to grow in the dark, and it is the decision that costs you nothing this morning and a quarter of the city by the time your grandson rules. The leather trade pays its tax and the rolls look healthy. What the rolls cannot show is the dyer who throws out a ruined batch, the baker whose customers will not cross a stinking lane to buy bread, the slow drift of trade away from a poisoned canal. The harm is everywhere and recorded nowhere, because no coin ever changes hands to mark it.\n\nHere is the trap. You might think the bakers and dyers could simply pay the tanners to leave, and be done with it without troubling your court. In Shamakhi they cannot. Who owns the canal water? The endowment, the crown, the quarter, the men whose vats have drawn from it since their fathers' time? No one can say cleanly enough to strike the bargain, and there are too many wronged parties to gather in one room. So the deal that ought to settle itself never does.\n\nThat is why the abandoned crafts of pre-modern towns crept always to the edges, and why the quarters that kept their tanneries in the heart of things watched the better trades quietly pack up and move beyond the walls, leaving the leather and the smell behind. A foul trade left in place does not stay contained. It hollows out everything around it, one departing neighbour at a time.",
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
        explanation: "Every elder in that room runs the same sum, and the sum is merciless. The sturgeon belong to no one, so a fish a man leaves in the water is nothing but a gift to the next boat. Caution earns him nothing; greed earns him a full hold. So each rows out and takes all he can, and though this dooms the fishery, the loss falls on everyone, himself included, only a little and only later. That is the tragedy of the commons, and the water cannot escape it on its own.\n\nYour quota does the one thing the water cannot do for itself: it lays a hand on every man's shoulder at once. Set the rule and there is a fishery next spring. Leave it ownerless, and the arithmetic empties it.",
      },
      {
        label: "Tell them to settle it among themselves.",
        effects: { treasury: 1, people: -8, military: -2, faith: -2 },
        explanation: "What the elders are warning you about is the tragedy of the commons, and the record shows how far back it reaches. In 1796 a Russian official named Dveryakin surveyed the Agsu river fishery and noted who was buying. Astrakhan merchants, mostly, paying several thousand rubles a year for the catch at that one site, and asking nothing about where it came from or whether the spawning runs were thinning. That last detail is the whole problem. A village can govern itself when everyone fishes the same water, knows everyone else's boat, and can shame or starve the man who takes too much. Two shore villages could in principle do exactly that, sit down and divide the runs, and keep the bargain among themselves for generations.\n\nBut the sturgeon do not respect the line between the villages, and neither do the boats that drift down the coast each season, and neither do the Astrakhan buyers who pay the same coin for an honest catch and a stolen one. A man overfishing your water answers to no one within two hundred miles, because the merchant who buys his haul will never ask. The villagers can name the offender. They cannot reach his purse. Where the resource crosses every boundary and the buyers reward the taker regardless, leaving it to the villages is not patience. It is a long, polite walk toward an empty sea.",
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
        explanation: "He stood in your district when the Kura rose; you watched it from a balcony in Shamakhi. That gap is his whole advantage, and it has a name: asymmetric information, dressed here in mud and river-water. A failed harvest and a profitable harvest he chooses to call failed look identical from where you sit, and only one man in the room knows which it is. So the trick is not to read his face but to make the lie expensive. Send riders to count the drowned fields, and the cost of inventing a flood climbs above what the discount is worth to him. Honest men welcome the inspectors. Liars suddenly remember the harvest was middling after all.\n\nThe Mongol tax administration knew this and built a whole apparatus around it. A holder paid for his district up front, then fought to prove the year had ruined him, and the dispute went before the yargu, the court of inquiry. The Persian chronicler Wassaf describes the merchant who took the contract for all of Fars in the 1270s and then spent years and a fortune in litigation when his collections fell short. Clearing an account, he wrote, was a long and bitter business, and dear. Verification was its own industry, and the men who ran it ate well.\n\nEvery tax office since has run on the same arithmetic. The threat of the audit, not the audit itself, is what keeps the figures honest, and the threat only works if it is believed. Price the lie too low and they all lie. Your inspectors are how you set that price.",
      },
      {
        label: "Accept the reduction. Replacing him costs more.",
        effects: { treasury: -6, people: 1, military: -1, faith: -1 },
        explanation: "Asymmetric information again, and this time you hand him the win. Forgive the third without proof and the mercy does not stay private. By spring every district from Salyan to the hills will have discovered a flood of its own, and why not, since the last man who pleaded ruin kept his silver. He alone knew whether the Kura really took his fields, and you settled blind. You have not lost one contract. You have taught the rest what lying is worth, and quietly written that discount into next year's revenue before a single coin is owed. The kindness was real. So is the lesson the others took from it, and that lesson is the one that empties the treasury.",
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
        explanation: "The eight thousand dinars and the two years: notice that the General leaves both off the scale, and rightly, though not for the reason he thinks. They are gone. Whether you ride on or ride home, you do not get them back, so they carry no weight in tomorrow's accounting. The only honest question is narrower than the one he puts to you: will the next five thousand silver and the next thousand men, weighed against what taking the chieftain is actually worth, earn their keep? The campaign so far tells you what mountains cost. It tells you nothing about whether the next purchase is wise. This is the sunk cost fallacy, dressed here in armour and asking to be finished.\n\nThe General trusts the wrong instinct, the one that says a thing half-bought must be carried to the end. Watch how it ruins men. A stalled siege is reinforced because so much has already been sunk into it; the reinforcement stalls in turn and is reinforced again, each fresh column justified by the bones of the last. The single catastrophe is rare. The slow bleed is common, and it always wears the face of prudence.\n\nYour own house has tasted the cleaner kind of loss. Ibrahim I marched east into Georgia early in the last century, was beaten and taken by Qara Yusuf, and bought his freedom back with a heavy ransom. A disaster, plainly. But it was one decision and one defeat, paid once and closed. What the General offers is worse than a defeat. It is a defeat collected by installments, and the bill never arrives whole.",
      },
      {
        label: "Recall him. Cut your losses.",
        effects: { treasury: 4, people: 5, military: -6, faith: 3 },
        affinityEffects: { general: -3 },
        explanation: "Sunk cost. The eight thousand dinars are gone whether you recall the General or not, and any treasury minister today will tell you the hardest line to write in a ledger is the one that ends a project everyone has already paid for. The men who poured years into the thing are still in the room; the silver that might do better elsewhere is invisible, because it has not yet been spent. So the failing venture limps on, defended by the very people it is bleeding. That is the trap the General has walked into, and he is inviting you in after him.\n\nRecall him, and you write off the eight thousand and the two years in a single stroke. The chieftain keeps his valleys. The General keeps a wound to his pride. And the rule beneath it is plain enough for a grain merchant: stop spending when the next coin buys you less than it costs, and never mind what the last coin bought. The freed silver goes to walls, to grain against a hard winter, to the Sangachal road, where it earns more than a mountain ever would.\n\nAkhsitan I held Shirvan through the twelfth century by exactly this restraint. He lent strength to Georgia against the raids out of the north and the Seljuk press from the south, yet he did not throw armies up into broken country to chase glory. The mountain campaigns against the chieftains of Daghestan and the Lezgi valleys almost never paid. The ground was too cut up, the locals knew every defile and you knew none, and the land at the end of it was worth less than the road there cost. The Shirvanshahs who died in bed were the ones who knew when to come down the mountain.",
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
        explanation: "The quantity theory of money is the simple, brutal arithmetic you are about to forget. In the autumn of 1294 the Ilkhan Gaykhatu, having spent the silver his treasury did not hold, printed paper notes in Tabriz and stamped on them a promise that provisions would grow cheap and rich and poor be made equal. The bazaars closed instead. Merchants would not sell good cloth for printed paper, the markets emptied within weeks, and the experiment was abandoned before the winter was out.\n\nHe had the lesson backwards. Coin and paper alike are only claims on bread, cloth, and labour, and when the claims multiply while the loaves do not, each loaf simply costs more claims. Pour forty thousand dinars into Shamakhi through tax remission and festivals and you do exactly that, at every stall at once. The grain seller raises his price before your alms reach the poor man's hand, and by spring the windfall buys what a far smaller purse bought in the autumn. The generosity is remembered; the silver is gone, scattered thin across a season's prices and never gathered back.\n\nToghan watches the coin leave the vault as fast as it entered, and remarks only that the Great Khan's gifts have a way of arriving twice and departing thrice.",
      },
      {
        label: "Hold it in the treasury vault. Spend slowly across years.",
        effects: { treasury: 12, people: -3, military: 3, faith: -1 },
        affinityEffects: { envoy: 3 },
        explanation: "Here the quantity theory of money is working for you instead of against you. Lock the silver in the vault and release it a little at a time, and the price of bread in Shamakhi scarcely stirs in the year of the gift. Forty thousand dinars idle behind iron do not chase the same loaves the city already bakes, so they are not bid away into higher prices. The coin you keep buys next year roughly what it would buy today. A treasury that empties slowly is one whose wealth still exists when it is finally spent.\n\nThis is the harder road, and it was the rare one. The Ilkhans who ran through their silver on campaigns and court splendour reached for the mint when the vaults ran dry and shaved the dirham thinner, which only raised prices by another door. Gaykhatu's vizier, the silver already spent, was reduced to squeezing a forced loan out of the merchant houses of Tabriz to put an army into the field against Baydu. The ruler who hoards in the fat year is jeered as a miser; the one who feasts is loved until the lean year arrives and finds nothing left to coin but his own currency's good name.",
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
        explanation: "A credible commitment is what Tahmina is buying, and the Quran is its price. Today you want her looms, so a low tax looks wise; the day the looms are bolted to the floor and the dye is in the vats, raising the tax costs you nothing and earns you everything, and she cannot carry a dye-house off to Tabriz. She knows your future self will rob her present self. That is why she wants the holy book and not your word: an oath you can break only at the price of your soul is the one promise a merchant will lend against. Bind your own hands now, and her silver comes out of the ground.",
      },
      {
        label: "Refuse the oath. Keep your options.",
        effects: { treasury: -4, people: -2, military: 2, faith: -3 },
        explanation: "Refuse and you have offered her no credible commitment, only an unspoken oath kept like a coin in your purse. The right to raise the silk tax in a lean year, when an army must be paid before the snows, is worth real money, and Tahmina is asking you to spend it now for twenty thousand dinars that arrive only if her looms prosper and her nerve holds. Keep the right and you keep your room to move. The question is only whether her promised silver is worth more than the freedom you sell to get it.\n\nYour own century teaches caution on both sides of the bargain. Shams al-Din Juvayni served Hulagu's house, gathered estates that would have shamed a king, and in 1284 lost his head and his lands to the next ruler's favour the moment the court turned. Whatever quiet guarantees he had been given were worth nothing across the change of master. The merchants knew it too: even the great Tibi of the Gulf trade, rich beyond counting, could not say no when the treasury asked. In such a world a flexible hand was survival, and a binding oath was a wager that the man across the table would still be standing, and still kindly disposed, when you needed him.\n\nThe same arithmetic governs anyone who lends to a state today. A ruler who cannot be trusted to hold his terms pays for it in every contract, since the lender prices in the chance of being robbed. Refuse honestly and you have only kept your options. Refuse while meaning to break faith later, and you have spent a reputation that takes a generation to rebuild.",
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
        explanation: "Crowding out is the name for what you are about to do, Shah: a coin lent to the throne is a coin not lent to anyone else, because there is only so much idle silver in any city. A treasury that funds itself by borrowing learns this fast. Modern states build whole ministries around avoiding it. You are about to live it.\n\nThe merchant houses have a fixed sum to put out at interest this season. Lend it to you, and it does not also build their caravans; the wall rises, but the trade that would have grown beside it does not. Their money has not multiplied. It has merely changed coat, from a thing that earns and is taxed into a thing that stands and is defended.\n\nThe Ilkhans showed how badly this goes when the throne squeezes hard. In the 1290s the vizier in Tabriz pressed a forced loan on the merchant partnerships funding the Gulf and Silk Road trade, all to field an army. The routes thinned in the years after. The men who had been the realm's engine were made its lender, and an engine asked to push its own cart slows down.\n\nYour Vizier would put it more softly: the wall is needful, and should the season prove quiet, the lost caravans may be forgiven; should it not, at least the wall stands. Either way, the merchants will remember whose season they paid for.",
      },
      {
        label: "Wait. Save until the treasury can fund the wall directly.",
        effects: { treasury: -3, people: 4, military: -4, faith: 4 },
        affinityEffects: { vizier: -2 },
        explanation: "Refuse to borrow and you sidestep crowding out entirely, the way the Shirvanshahs always did. The Palace of the Shirvanshahs in Shamakhi was not bought; it was accumulated, stone by stone, across three reigns of the fifteenth century, each shah adding what that season's revenue and trade tolls would bear. Khalilullah's caravanserai at Sangachal went up the same way, paid out of current income rather than against next year's. No banker held a note over any of it, and no merchant's silver was pulled off the trade routes to raise a wall. That was less virtue than necessity: borrowing at scale was hard to arrange and harder to repay, so the realm built at the speed silver actually arrived.\n\nThere is a discipline hidden in that slowness. A house that spends only what it has saved never owes its growth to a creditor, and so its merchants stay merchants rather than turning into the throne's anxious lenders. The price is patience, and patience has a cost you can be made to pay in a single bad night: a wall half-built when the western approach is tested is worth little.\n\nOil states that learned to route revenue through a fund before it touches the budget are walking the same path, and those that borrowed against the price of a barrel learned the other one when the price fell. Save, and the wall comes late but free. Wait too long, and the choice is made for you.",
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
        explanation: "The envoy's treaty lies open on the table, and the whole of it comes down to two men choosing in the dark whether to keep faith, each one's fate hanging on the other's choice as much as his own. That is the shape of it, Shah, the bare bones of game theory under the seal-wax. If you both keep faith, the Ilkhan meets two armies where he expected one. If you both break it, each of you bleeds alone and neither is shamed for it. The cruel case is the middle one, where you ride north on the appointed day and Tbilisi does not, and the Georgian who stayed home keeps his men while yours lie in the snow. Whether the bond is worth signing turns entirely on whether you believe the king across the courtyard will honour his seal when his own borders are quiet and yours are burning.\n\nYour house has answered this question before, in both directions. In the year 521 of the Hijra your forebears rode with the Georgian David and the Kipchak horse and broke the Seljuk at Didgori, and the gain held for three generations. The faith was kept, the force sufficed, and the kingdom prospered by it. But within living memory of our grandfathers, Ibrahim bound himself to the Georgian Constantine against Qara Yusuf, and the league was crushed on the field. The Shah and the king were taken in the same chain, with hundreds of their nobles. The oath does not fail when one man is treacherous. It fails when both keep faith and the enemy is simply the stronger. Weigh the seal accordingly, and ask first not whether Tbilisi is honest, but whether two of you together can stand.",
      },
      {
        label: "Refuse. Stand alone.",
        effects: { treasury: 2, people: -2, military: -3, faith: -2 },
        explanation: "Game theory has a move the treaty does not name, Shah, and it is the one you are reaching for: declining to play. The states that have outlasted their neighbours in our own age tend to be the ones that signed least. They sell to every market, exchange envoys with rivals who will not sit at the same table, and refuse to fold their fate into another man's choice. A small power buys its survival not with allies but with the freedom to choose its enemy late.\n\nThis is the older wisdom too, Shah, and your own line is its proof. When Timur and Toqtamish were tearing the steppe between them, Ibrahim did not rush to either. He held the balance for years, taking from neither the right to command him, until the moment came when one was plainly the greater and he bowed to Timur rather than be ground between the two. The whole craft of Shirvanshah survival under the Mongols was this patience. Submit to the Ilkhan when the Ilkhan is strong, pay the tribute, keep the inner kingdom your own, and promise nothing that cannot be unsaid next season. A binding league does the opposite. It marks you as the larger power's enemy before you have chosen to be, and it stakes your life on an ally arriving in time, which allies seldom do. The Qadi will not bless this counsel. He read the treaty as a shield for the lands of the faith against the unbeliever, and your refusal he names by its plain word, which is fear.",
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
        explanation: "A man who cannot afford bread still buys bread, Shah. He has children, and there is nothing else to set before them, so when the price climbs he simply pays the climb and goes without something else he might have done without anyway. That is where bread sits: at the dead, unmoving end of price elasticity. Tax the loaf and the demand barely flinches; you skim a steady cut off a thing no one can stop buying. Silk is the opposite animal. A Venetian agent who finds Shamakhi dear will write to his correspondent in Bursa or Tabriz by the next caravan and buy his bales there, and your toll collects on goods that have quietly ceased to pass. So the tax that fills the chest fastest is laid on whatever the buyer cannot refuse, which is to say on whatever the poor man most needs. Convenient and cruel are not, in fiscal matters, opposites.\\n\\nThe Shirvanshahs in their better years preferred to stand at the gate and take a share of what moved through it rather than reach into the bread basket, knowing that trade can be coaxed back but a hungry quarter cannot be un-rioted.\\n\\nYou will find the same calculation alive today, Shah, in the long reluctance to lift fuel and utility subsidies: the household with no other way to keep warm absorbs the whole of any levy laid on what it cannot do without. My counsel, if it please you, is to take the revenue with open eyes. The figure is sound. The morning after, less so.",
      },
      {
        label: "Tax the silk exports.",
        effects: { treasury: 4, people: 3, military: -2, faith: 2 },
        affinityEffects: { qadi: 1, tahmina: -2 },
        explanation: "Silk can walk away, Shah, and that is the whole of my warning. Of everything traded in your market it is the most elastic, the quickest to flee a price it dislikes, so taxing it will fill the treasury with less than bread would, and I am bound to say so plainly. Some Venetian buyer, finding Shamakhi dear, simply reroutes to Bursa, where the same grade goes untaxed; the volume through your gate thins to match.\\n\\nYet weigh whom the burden falls upon. What you tax here lands on foreign agents and on Tahmina's wealthy cousins, and not one of them bakes your morning loaf. A merchant who sulks merely sails to Derbent. A quarter that cannot eat does not sulk; it ends reigns. The smaller sum, bought without hunger, is in my judgment the dearer coin.",
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
        explanation: "Schooling is a merit good, and your forebears understood it before the term existed. In the Baku palace they kept a scholar named Seyid Yahya Bakuvi, an astronomer and Sufi master, and when he died in the 15th century they raised a tomb to him inside the walls. That was no piety. A ruler who houses a man who reads the stars is buying something the bazaar cannot sell him: minds trained to a depth that takes thirty years and one patron willing to wait for them.\n\nWatch where such men gathered. Bukhara, Cairo, Tabriz, Shamakhi. Learning pooled wherever a prince paid for it, because the gain from a clever cobbler's son is not the cobbler's. It is the kingdom's. He becomes a judge who weighs a contract correctly, a scribe whose tax-roll holds, an astronomer who fixes the calendar your harvest depends on. The father cannot borrow against a future he will not live to see, and the realm reaps a harvest it never sowed. So no merchant plants it. Only a treasury can, and only a treasury that consents to be poorer now than its grandsons.\n\nThe Qadi says it plainly: spend the coin while the boy is young, or count the empty offices when he is grey. What is bought late is bought dear.",
      },
      {
        label: "Decline. The merchants can fund their own schools.",
        effects: { treasury: 2, people: -3, military: 0, faith: -4 },
        affinityEffects: { qadi: -3 },
        explanation: "Refuse, and you are betting the market will supply a merit good it never supplies. Leave the schooling to the merchants and you already know how it ends. They will school their own sons. The baker's boy stays at the oven, the cobbler's at the last, and the narrow band of literate young men from whom you draw your judges and scribes does not widen by a single name. Your administration ages at exactly the rate of the men now sitting in its offices.\n\nThe Ilkhanate learned this in the slow way. It governed through a class of trained Persian secretaries and clerks, and it lived off that class without replacing it. When the first generation began to die in the early 14th century, no equal generation had been schooled behind them. The decrees grew muddled, the tax-farm contracts could no longer be enforced cleanly, and within a few decades the realm came apart into the hands of whoever could still command a literate household. A trained class is grown like an orchard. Let it stand untended and it does not hold; it thins.\n\nA throne that lives on oil rather than scribes faces the same arithmetic. The wealth arrives, and a ruler may either school a generation against the day it stops or assume it never will. The Qadi has told you which. He leaves the courtyard angrier than he came.",
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
        explanation: "Here is tax incidence in a single levy: the merchant signs the writ, but he is not the one who pays. When a modern treasury quietly lets the price of bread or fuel creep up, it knows exactly what it is doing. People can put off a new coat. They cannot put off eating. A tax laid on something nobody can do without is the surest coin a state ever mints, and the surest to be cursed for.\n\nSalt is the oldest example. Levy it on Tahmina's merchants and they will pay you on the morning the writ arrives, smiling. By noon the brick blocks from the Caspian flats cost a fraction more in every market from Shamakhi to Derbent, and that fraction is the tax, walking out the door on the backs of fishwives and farmers. The merchant's margin never trembles. He is a man passing a hot coal from one hand to the next, and the hand it lands in is the one that cannot let go. A household cannot decide to salt its fish a little less this year and live to do so again. That is why the salt road has fattened treasuries from the Abbasids onward, and why the men who drew the salt tax are the men the mob remembers.\n\nTahmina has told you the plain truth of who pays, and left out only one figure from her ledger: the salt merchants are her cousins. She will collect, and she will collect twice.",
      },
      {
        label: "Refuse. Salt is the poor man's food.",
        effects: { treasury: -2, people: 6, military: -1, faith: 4 },
        affinityEffects: { qadi: 2, tahmina: -1 },
        explanation: "Refuse it and you give up good silver, but first see the trap that tax incidence sets for you. Weigh the salt tax the way a merchant weighs anything, against the purse it comes out of. A poor man spends a copper on salt for every dinar he earns; a rich man spends the same copper and never feels it leave his hand. The tax that looks even from the throne sits heaviest on the thinnest purse. That is the whole grim arithmetic of taxing the kitchen, and no amount of dressing it as fairness changes the ledger.\n\nThe Shirvanshahs who kept their thrones seem to have known it in the gut, even where the records run quiet on salt itself. Khalilullah, in the fifteenth century, leaned his treasury on the roads and the rents and the naphtha concessions of Baku, and took from the countryside in grain and silk and beasts at rates a man could meet after a poor harvest and still sow the next spring. He drew from the flow of trade, not from the cooking-pot. It was no doctrine of mercy. It was the plain calculation that a peasant taxed past his bread either flees the land or burns the rolls, and a ruler who has done neither to his people tends to die in his bed. The kindest-looking tax is often only the one that empties the wrong purse, and the wise prince counts purses before he counts coin.",
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
        explanation: "Wage rigidity is the wall you have just walked into: a soldier's pay does not slide down as easily as your treasury does. Your General has counted desertions and missed the cost. A soldier reads three dinars where he earned four as a broken promise, not as a lean year, and a broken promise is paid back slowly. He keeps his post and stops keeping it well. The watch grows careless, the storehouse grows light, and the man who once died for you now merely lives off you. You will have saved a quarter of the payroll and bought a garrison that no longer believes a word you say. Soldiers forgive a hard year. They do not forgive being cheated, and they keep the ledger longer than you do.",
      },
      {
        label: "Pay in grain from the royal stores instead.",
        effects: { treasury: 3, people: -2, military: 2, faith: 0 },
        affinityEffects: { general: 1 },
        explanation: "A soldier's promised silver will not bend without breaking faith. Three dinars were named, and three dinars he will reckon by, no matter how thin the trade or how dry the year. That stubbornness in the number has a name, wage rigidity, and the way past it is not to argue the figure down but to leave it whole and settle the shortfall in something other than coin. When the great Ilkhanate came apart after 1335, the men under arms in Azerbaijan, Arran, and Shirvan were not being paid in good silver, because there was little good silver to be had. So their amirs handed them land instead, or rather the right to take the taxes off it. A soldier collected his living from a village and answered when called. The arrangement long predated the collapse, but the collapse proved why it endured: it asked nothing of the coinage, and the coinage was the first thing to fail. An army fed by the soil did not melt away when the mint did.\n\nThat is the trick you are being offered in smaller coin. Keep the three dinars whole, since silver is the thing a soldier's wife counts and remembers, and make up the lean year out of the granary, which in a drought is worth more than its weight in argument. You spend grain you have to spare and buy loyalty you cannot mint.\n\nThe Vizier, pending audit, would observe that the stores can bear it this season, conditions permitting, and trusts His Majesty will not ask the same of next year's harvest.",
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
        explanation: "Forbid a thing and you do not make men want it less. You teach them what it is worth. The velvet your noble resents is dear partly because it costs a fortune; stamp a royal ban on it and the price of being seen in it climbs higher still, because now the cloth announces that its wearer can defy the Shah and dress as she pleases. It becomes a small flag of insolence, and the rich pay gladly to fly it. That is the way of unintended consequences: the decree aims at one mark and strikes another.\n\nThen comes the part no decree can repeal. A roll of Genoese velvet folds small. It hides inside a coat lining, under a bolt of plain wool, in the false bottom of a merchant's chest. The gate-keeper who waved it through last year for two dinars will wave it through this year for five, and pocket the difference. Elizabeth of England published such laws for forty years, and her subjects wore the forbidden silk to her own court; the Genoese who wove the stuff sold more of it the tighter the rules grew abroad.\n\nBaku learned the same lesson in a newer coin. When the manat was pinned in place a decade past, the official rate held its dignified face while a second, truer rate did business in the back alleys. Pin a market that has real weight behind it and you do not stop it. You only move it underground, where the Shah collects no toll.\n\nTahmina, whose storeroom of velvet just doubled in value, studies the floor and keeps her face as flat as a settled ledger.",
      },
      {
        label: "Refuse. Let people wear what they buy.",
        effects: { treasury: 3, people: 5, military: -1, faith: -2 },
        affinityEffects: { tahmina: 2 },
        explanation: "Refuse, and you also sidestep the unintended consequences your noble cannot see coming. When a merchant sells the cloth and the wife buys it, both walk away richer in their own reckoning, or the sale would never close. That small gain, multiplied across every stall in Shamakhi, is the city's wealth. Ban the velvet and you do not collect the noble's tidy hierarchy for free; you trade away the sale, the toll on the sale, and the loyalty of the class that pays your customs. Shamakhi was thousands of houses spinning silk because its rulers preferred a full treasury to orderly streets. Your noble wants you to dress down the very people who feed you. He leaves displeased. The treasury does not.",
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
        explanation: "Watch a merchant in your bazaar before he agrees to anything. He sets a Baku dinar beside a Derbent one, frowns, and reaches for his scales. Every bargain pays a small tax in distrust before a single sack of pepper changes hands, because your three mints each strike coin a fraction off from the others. Collapse them into Shamakhi alone and that tax vanishes: one weight, one fineness, a coin a man takes on sight without reaching for his balance. This is the saving that shows up only when you do one thing big instead of three things small. Part of it lives in the workshop, where you keep one set of engravers and one guard instead of three. The larger part is spread thin across every transaction in the realm, in time not wasted and arguments not had.\\n\\nThe Mongols learned this the hard way before they learned it the right way. After the silver ran thin late in the thirteenth century and your predecessors were reduced to striking copper, the Ilkhans pulled the dies inward. The dirhams cut at Tabriz, Ganja, and Nakhichevan in the Great Khan's name came to look like brothers rather than cousins, and trade thickened around the more trustworthy coin.\\n\\nBut weigh what you are stacking in one place. Shamakhi shook to rubble in 1192 and sent your forebears packing to Baku. A single mint is a single throat, and throats are cut. The clean coin is worth much. Do not forget where you are putting it.",
      },
      {
        label: "Keep all three mints running.",
        effects: { treasury: -2, people: 0, military: 3, faith: 1 },
        affinityEffects: { vizier: -1, general: 1 },
        explanation: "Economies of scale are real, and here you choose to forgo them. Every banker today knows not to keep the whole treasure in one vault, and every engineer knows not to run the whole city off one cable. Spread the load, and a single fire stops being a catastrophe. It is dull wisdom, and it is yours to buy.\n\nKeep the three mints and you pay for it daily. The coin from Baku will never quite match the coin from Derbent, merchants will go on weighing twice, and the small frictions will add up across a thousand markets into a sum you cannot see but always feel. What you get for that price is a realm that does not lose its money when it loses a city. Should Derbent burn or its master engraver slip across the border to a rival, Shamakhi and Baku strike on without a pause.\n\nYour forebears chose exactly this, and not by accident. When the Ilkhanate came apart after 1335 the Shirvanshah coin went on being cut in several places at once, because the man who held three workshops still held a kingdom after he lost one. The fiscal and military estates of Arran and Shirvan were scattered the same way: many modest centres, none of them fatal to lose. A capital can be taken in an afternoon. A web takes longer to unpick.",
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
        explanation: "Price discrimination is the plain name for what your Master of the Gate wants: one good, sold at different prices to different buyers according to what each can be made to pay. In 1562 an Englishman named Jenkinson rode in from the north on behalf of the Muscovy Company, and the Shirvan governor Abdulla Khan did not hand him the same rate sheet the Baku merchants worked from. He handed him exemptions, written and sealed, particular to the man and his cargo. That was not corruption. That was how the gate had always worked. The tamgha posts kept no single published price; they kept clerks who knew how to read a caravan, and what they read was need.\n\nWatch what the clerk sees in your Genoese. He has crossed half a sea to stand at your wall. He cannot put the galley about and sail home over a dinar or two, and the silks in his hold are worth a hundred times the toll you are arguing over. Your own Shirvani, by contrast, can simply turn his mule toward Derbent and try the road to Tabriz instead. So the foreigner will bear four where the local screams at three. Charge each what his circumstances will let you charge, and the same load of trade yields a fatter purse, with no fewer wagons through the arch.\n\nThe danger is only that the Genoese eventually compares notes with the man beside him in the queue, and some seasons enough of them reroute that the gain leaks away. Your Master of the Gate is wagering that day comes late. It usually does.",
      },
      {
        label: "Uniform toll for all. Equal treatment.",
        effects: { treasury: -3, people: 2, military: 1, faith: 1 },
        affinityEffects: { qadi: 2 },
        explanation: "Refuse the differential and you are refusing price discrimination on principle, surrendering the fat purse the Genoese would have handed over without complaint. You will not claw it back from the Shirvani, who already pays all he can. So you take less than the gate could yield, and you do it on purpose.\n\nWhat you buy with that loss is a price no clerk can shade. A rate that bends for the man with the longer journey also bends for the man with the heavier bribe, and once the gate is known to negotiate, every passage becomes a haggle conducted in the dark of the gatehouse, half of it ending in the clerk's own sleeve. A single posted figure cannot be whispered down. There is nothing to whisper.\n\nHere you should be honest with yourself about what you are doing, because it cuts against the grain of the age. The tamgha posts of Shirvan, and of the Ilkhanid lands before them, were never built to hold one line against all comers. They were built to bargain. Custom favoured tiered, negotiable tolls softened by grants and exemptions to whichever house or company had earned a ruler's seal, and the apparatus to enforce a flat rate against a determined foreign factor scarcely existed. To insist on equal treatment in the fourteenth century is not the easy road. It is a statement, dressed as a tariff, that your wall sees the Venetian and the Shamakhi weaver as one. That declaration has its uses at a Christian court. It simply will not arrive there by way of the ledger.",
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
        explanation: "Wine is a demerit good, the kind a market always sells too cheaply because the buyer pays only his own share of the harm. A jug is cheap to the youth who drinks it because he pays only for the wine. The bruised neighbor, the weeping father, the brawl your watch must break up at midnight: those bills land on other people, and so the price the tavern charges is always a little too low to discourage the trouble. Raise it by your own hand. A levy on every barrel pushes the cost back toward the men causing it, thins the crowd at the margin, and leaves the trade alive to be taxed again next year. You have not cured the vice. You have made it pay rent. The Qadi, who wanted the houses gone, will settle for them gelded.",
      },
      {
        label: "Close the wine houses.",
        effects: { treasury: -3, people: -6, military: -2, faith: 5 },
        affinityEffects: { qadi: 3, tahmina: -2 },
        explanation: "Wine is a demerit good, and the oldest mistake a ruler makes with one is believing he can ban it out of existence. Ban a thing people still want and you do not abolish the trade, you merely hand it to whoever is willing to break the law. The wine goes on flowing, only now from cellars, in barrels labelled honey or vinegar, sold for triple by men who pay you nothing. Your streets look cleaner. Your treasury is lighter, the brawls have moved to alleys your watch does not patrol, and a profitable smuggling guild has been born by your decree.\n\nThe Islamic world ran this experiment many times over. When Ghazan Khan took Islam in 1295 and proclaimed the old prohibitions, the taverns shuttered and the quiet trade carried on much as before, governed by what each governor needed rather than by what the law said. The constant result was the same: visible obedience, invisible continuation, and ruined dhimmi merchants who had paid their levies faithfully until you made faithfulness impossible.\n\nEvery century relearns it. America emptied its bottles in the 1920s and filled its cities with bootleggers instead, then quietly gave up. The watchman will thank you tonight. The Qadi will bless you. And in the Armenian quarter, the merchants whose taxes once helped fill your coffers begin, very softly, to ask one another where else a man might do business.",
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
        explanation: "Plug a phone bought in one country into a wall in another and it still charges, because somewhere a body of officials agreed on the volts and the prongs. No merchant ever chose that. Someone with a seal imposed it, and everyone downstream quietly profited. The pattern beneath it is network effects: the more districts that weigh by one measure, the more every other district gains by joining it, and the gain compounds the moment another joins.\n\nYour guild master is asking for the same seal, four centuries early. The trouble he describes is not that the Baku ratl and the Shamakhi ratl differ. It is that no district will abandon its own measure first. A standard is worth nothing until the next market uses it too, and the next market is waiting on you to move before it moves. So all of them wait, and the trade between them bleeds a little at every weighing. Everyone wants one measure. Nobody can be the one to step out alone.\n\nThat is precisely the knot a throne exists to cut. Decree the single ratl and you reach across the whole network at once, seizing a gain no single house of cloth could ever reach by itself. The weavers and silk-factors will curse you through the first season, recutting every contract and recasting every counterweight to the new unit. Tahmina will read the curses as what they are: the cost of a tariff paid once against a margin earned every year after.",
      },
      {
        label: "Let the districts keep their measures.",
        effects: { treasury: 1, people: -3, military: 0, faith: 0 },
        affinityEffects: { vizier: -1 },
        explanation: "Go down to the Shamakhi caravanserai on any market morning and watch a Derbent factor and a Baku broker argue over a single bale of silk. They are not haggling over price. They are converting. The Derbent stone is not the Baku ratl, the Baku ratl is not the Shamakhi one, and each man carries the conversions in his head like a second language he resents having learned. The bargain still closes. It simply closes slower, with a clerk and a counterweight and a grudge, and a sliver of value left on the floor that nobody bends to pick up. That sliver is the network effect a shared standard would create, lying unclaimed.\n\nThis was how nearly every kingdom ran, yours included, for long stretches. To force one measure on the whole realm you would need inspectors riding the roads, true weights locked in the royal storehouse for the courts to test against, and a magistrate to settle the quarrels that followed. Most shahs counted that cost, looked at a market that more or less worked, and let the matter lie. The friction never killed the trade. It only taxed it, quietly, in fractions too small to feel and too constant to escape, paid into nobody's treasury at all.\n\nSo you leave the measures alone, and the silk still moves. Your guild master bows and goes, unsatisfied. The merchants who would have cursed your decree never have cause to appear.",
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
        explanation: "A field of barley pays you back this autumn. A boy taught to read the stars pays you back in the reign of a Shah you will never meet, and not only you: half his knowledge will leak into the hands of every court that can poach him. Economists have a name for that leak, the knowledge spillover, but the trouble in it is older than the word. You buy the grain, your grandson eats the bread, and the kingdoms next door eat some of it too without paying a copper. Most rulers do the arithmetic, notice the harvest never lands in their own lifetime, and let the schools starve.\\n\\nYour dynasty has chosen otherwise before, and it shows in stone. The men who reckoned the angles for the Maiden Tower, set the kibla for the mosques, and timed the opening of the irrigation channels did not appear by accident; Khalilullah and Farrukh Yasar kept astronomers, calendar-makers, and theologians on the court's purse, and the late Shirvanshah palace is what that money looks like once it dries. Bakuvi himself will lie in the royal tombs at Baku, his shrine outlasting the men who paid his stipend. He will not see the observatory finished. The students bent over his tables in twenty years will, and they will be yours before they are anyone else's.",
      },
      {
        label: "Decline. The treasury cannot afford it now.",
        effects: { treasury: 1, people: -2, military: 0, faith: -4 },
        affinityEffects: { qadi: -2 },
        explanation: "What you are about to refuse is the cost of a knowledge spillover, and the strange thing about a spillover is that the man who pays for it rarely keeps all of it. Every oil state that ever struck it rich faces your decision in disguise: spend the windfall on schools whose graduates you will never command, or pocket it and trust the wells. The ones who pocketed it learned, when the price turned, that money is the easy thing to keep and trained minds are the hard one.\n\nThe hard thing is what you are declining. Twelve thousand dinars stay in the vaults, and that is the whole of the visible ledger. The invisible side runs longer. Bakuvi dies; his students drift toward Tabriz, Herat, Bukhara, wherever a purse is open, and the next clerks who reckon your taxes and your canals are drawn from a shallower well. Watch what happened east of you: after the Ilkhanate broke apart in the 1330s, the scholars of the divan tradition lost their patrons as the successor princes squabbled over coin, and the administrations that survived were thinner, clumsier things than the one Ghazan's men had run. The Shirvanshahs who kept paying their scholars through those years governed better than the neighbours who did not.\n\nBakuvi bows and leaves. The Qadi marks it: a kingdom that will not feed those who keep its knowledge has chosen to forget, and forgetting is a debt that falls due on the children.",
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
        explanation: "Dual-use export controls were born the day Constantinople first poured fire across the water and watched it cling and burn even on the waves — and then refused to write the recipe down. The siphon-crews learned their craft mouth to ear, the naphtha was issued under seal, and an artificer who carried the method to a foreign court could expect to lose his hands or his head. The empire understood something simple: a good with a peaceful use and a deadly one cannot be sold like wheat, because the secret of the deadly use is sold once and the buyer never comes back.\n\nYou are about to sell both. The barrels of crude oil your hills give freely are one thing; oil refined and thickened into a substance that sticks to a hull and will not be doused is another. Raw, it lights a lamp. Cooked to the Genoese pattern, it sinks a fleet — and the fleet it sinks need not be the one he names today.\n\nSo weigh the silver against the lesson. The coin is real and it is now. The thing you are also handing over is the knowledge of what your naphtha becomes in a clever man's cauldron, and knowledge, once it sails out of the harbor, keeps no loyalty to the man who sold it.\n\nTake the silver if you must. The clerics will mutter that you have armed a Christian against the faithful, and they will not be entirely wrong.",
      },
      {
        label: "Refuse to arm another man's fleet.",
        effects: { treasury: -3, military: -1, faith: 3, naphtha: 4 },
        explanation: "Look past the silver in his chest and ask what the Genoese is truly buying. Not the oil — he could scoop that from a roadside seep on the Absheron and pay a peasant in copper. He wants it married to fire and made to cling, the use that can sink a fleet as easily as light a lamp. That marriage is the whole of his offer, and it is the oldest hard question in trade: the one sale where the seller hands the buyer a capacity, and the capacity does not expire when the coin is spent. Men give it a dry name, dual-use export control, but the thing itself is simple enough to see.\\n\\nA galley armed with your sea-fire can burn any harbor its captain chooses, and a Genoese captain chooses harbors the way a gull chooses fish. He sails for Tana this year, for Trebizond the next, and no clause in any contract forbids his grandson from anchoring off Baku and putting your own oil to your own walls. You would have taught the lamp to burn the house.\\n\\nGenoa and Venice spent the better part of a century cutting each other's throats from the Bosphorus to the Black Sea precisely because each had given the other reasons and means. The man who keeps his fire-oil at home keeps the choosing of who burns. Send the captain back to his deck with his silver still in its chest, and let him buy his fire from someone with a shorter memory.",
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
        explanation: "Hold the tappers back from the shrine and you are choosing non-market value over the kind a ledger can total. A barrel of naphtha has a price any Genoese factor will quote you to the dirham. The flame at Surakhani has none, because no one will ever buy it and carry it away, and that is exactly where its worth lives: in the worn knees of the pilgrims who cross the Caspian to kneel before it, in the alms they leave, in the simple fact that a thing has burned in one place longer than any dynasty has held the throne. Tap the seeps dry and you turn that uncounted worth into the counted kind, once, and never again.\n\nThe fire-keepers of Absheron understood this long before your customs-men did. The peninsula was holy ground to the worshippers of the flame in the days of the Persian kings, and travelers came not for oil but for the burning earth itself. Restrain the digging and the seeps near the shrine will heal over a season or two, the flame will climb again, and the pilgrim road will keep its end. Your vaults will feel the loss this winter. The shrine will feel the gain for as long as it stands, which it has done longer than you or I can count.",
      },
      {
        label: "Work the seeps to the full.",
        effects: { treasury: 9, people: -2, faith: -4, naphtha: -10 },
        explanation: "What you are about to trade away is non-market value, the worth a thing carries even though no one ever sets a barrel beneath it. When the worshippers of the flame held Absheron, the seep was a god, not a commodity. The Arabs came and named the place the land of the naphtha fountain, and the white oil began moving north by ship to Amol and the Volga mouth, salve in one cargo and lamp-fuel in the next. Each generation drew a little more. The pilgrims still came, the fire still burned, and for centuries the two worths sat together without quarrel, because the trade was small and the earth gave faster than the merchants could take.\n\nNow the merchants take faster than the earth gives. Work the seeps to the full and the barrels fill the treasury this year, but the seep is a finite thing and the flame draws from the same source the barrels do. Empty the one and you dim the other. You will have weighed a sacred fire against a season of silver and chosen the silver, which the ascetic will not forgive and the pilgrims will not forget. The coin you gain is spent within the year. The dimmed fire is noticed for a generation, and a pilgrim who finds an ember where his father found a blaze does not return, nor send his son.\n\nModern men call this the price of treating a thing worth keeping as a thing worth selling. The bill comes due quietly, in pilgrims who stop coming, long after the silver is gone.",
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
        explanation: "What the burned men are demanding is a compensating wage differential, the extra coin a deadly trade must pay to fill it. A man who descends into a naphtha pit knows the fire may come up to meet him, and he sets a price on that knowledge. The old wage paid him for his labour; it never paid him for the burning. When the trench went up, the burning stopped being a story and became a thing his neighbours buried, so the wage no longer covered what the work now plainly costs. Raise it, and the difference is not generosity but rent on the risk itself. Pay it, and the men go back down. Refuse, and the cisterns thin while you save coins no one is left alone to earn.",
      },
      {
        label: "Replace them with cheaper hands.",
        effects: { treasury: 3, people: -5, naphtha: -6 },
        explanation: "Refuse the danger wage and you are pretending the compensating wage differential does not exist, that the pit is no more perilous than a millhouse. There is always a cheaper man at the gate, and after a fire the gate is crowded with farm boys who have never smelt the seeps and so do not yet know what they are worth. Hire them at half the rate the burned men demanded and the ledger looks healed by morning.\n\nThe seeps do not reward the willing; they reward the practised. A pit-hand learns by years which slope of ground sweats vapour before it shows, when the cistern crust is sound and when it will swallow a man, how to read the colour of the ooze that means fire is gathering below. The Ilkhans who farmed the Baku wells out to tax-men in the time of Ghazan learned this the hard way: a contractor who saved on hands one season paid it back tenfold the next in collapsed shafts and fouled naphtha that no caravan would carry to Tabriz. Cheap labour in a deadly trade is not cheap. It is debt taken against the next disaster, and the seeps always call the debt.\n\nYou can see the same arithmetic wherever a state staffs its rigs in the Caspian with whoever costs least: the saving shows this quarter, the lost output and the funerals show the next.",
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
        explanation: "A barrel left in the ground is not idle wealth, my Shah. It is wealth that ought to be growing where it lies. The question every man with oil beneath him must answer, and the one your seep-keepers face this season, is simply when to bring it up: if next year's price will beat enough to outrun what that silver would earn sitting in your vaults, you wait; if not, you pump. The merchants abroad set one half of the reckoning, the patience of money sets the other, and between them they name the right pace. Greed has nothing to do with it. Arithmetic has everything. Scholars who study such things call it optimal extraction.\\n\\nSo weigh this season's Genoese frenzy against next season's. The seeps near Baku do not refill at the rate a desperate hand can empty them. Skim them gently and the bitumen wells up again through the season, year upon year, the way it has since the fire-priests tended these grounds. Tear at them now to catch one fat price and you have not sold a harvest; you have sold the field. The pits go slack, the laborers who worked them drift off cursing your name, and the next galley finds your jars half-empty.\\n\\nTake the silver, then, if you have judged that no future season will ever pay as well as this one. But judge it honestly, not by the size of the offer waving in front of you.",
      },
      {
        label: "Hold to a sustainable draw.",
        effects: { treasury: 3, naphtha: 8 },
        explanation: "What your keeper is reaching for is optimal extraction, the art of pacing what you pull from the ground. A seep is not a granary you may empty in a hungry winter and refill at harvest. It is closer to a debt owed to you by the earth, paid out slowly and on the earth's own terms. Draw only the interest and the principal stays whole, ready to pay you again. Claw at the principal and you are spending a thing that does not come back.\n\nThe rule is older than any ledger of mine. A barrel held underground costs you nothing to store and may be worth more when the next caravan comes thirsty. So the wise keeper sells only as fast as the ground replenishes, and lets the high years and the lean years average out across a long reign rather than a single greedy autumn. The fire-temple keepers at Surakhani understood this without a word of accounting: they took what the flame gave and asked no more, and the flame still burns for their grandsons.\n\nHold the draw, then. Your treasury swells modestly this season and the seeps thicken back to the brim. A Shah who can promise the Genoese a steady jar every year, in fat times and thin, is worth more at the bargaining table than one who floods them once and has nothing to follow. Wealth that renews itself is the only wealth a crown truly keeps.",
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
        explanation: "The well fills once, and what you pour from it goes one way only. A jar of naphtha burned in a Baku lamp never reaches the deck of a Genoese galley, and a jar sold at the quay never warms a widow in the lower town. That is the whole of it: domestic price set against export. Choose the lamps and you are spending revenue you could have collected, paying it out as warmth and cheap light instead of silver. The treasury feels the gap; the city does not feel the cold.\n\nOld Sasanid fire-keepers grasped this long before any of us drew breath. The seeps at Surakhani fed the temple flames and the household lamps of the whole district, and the priests would no more have crated that fire onto a ship than sold the sun. Naphtha was a thing the land gave its own people. The accountants who later took the wells as a crown monopoly inherited a city already wedded to cheap fire, and they kept the lamps lit because a warm, lit town pays its taxes and does not riot in the dark.\n\nYour descendants will argue the same ledger when they sell gas at home for a tenth of what Europe pays. If the people are warm, hold the line: the subsidy buys quiet, and quiet is cheaper than the silver you forgo.",
      },
      {
        label: "Ship it all to the foreign buyers.",
        effects: { treasury: 10, people: -5, naphtha: -8 },
        explanation: "Pour every jar onto the Genoese decks and the treasury swells by spring; the silver is real, weighable, and yours. But watch which way the barrel rolls, for this is domestic price set against export, and the two pull opposite. What you have actually done is take the warmth out of the lower town and sell it to Trebizond. The poor cannot bid against a galley master, so they will not. They will burn dung and brushwood, sicken in the cold months, and remember who emptied their lamps. Each jar earns you a coin abroad it would never have earned at home, because at home you were giving the fire away. Collect the silver, then. Just know what its true cost wears: a winter face, indoors, in the dark.",
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
        explanation: "A copper on every bale, paid out to the one merchant the road strips bare: that small toll is the whole craft of risk pooling. A single ruinous loss, spread across a hundred shoulders, becomes a sliver each can carry. No house can name which road will be cut next season, but the houses together know that roughly so many bales vanish every year, and that number holds steady enough to price. Each pays a small certain sum to be spared an uncertain catastrophe. The fund swallows the bad luck of the few out of the small contributions of the many.\\n\\nShamakhi has the bodies to make it work. Giosafat Barbaro, the Venetian who came through in 1476, counted four or five thousand houses spinning silk and cotton, and a pool that wide does not tip over when one caravan is taken. Seed it from the treasury, keep an honest ledger, and the smaller houses stop hoarding their silver against disaster and start sending it down the road instead. Fuller roads, fuller customs rolls.\\n\\nThe Genoese and Venetians shipping these same waters worked out the same trick: shipowners banding together so that one wreck fell on all of them at a copper apiece rather than on one man at his throat. The clubs that insure the world's cargo today were born of exactly that huddle against the sea.",
      },
      {
        label: "Let each merchant carry his own losses.",
        effects: { treasury: 1, people: -3 },
        affinityEffects: { tahmina: -2 },
        explanation: "Refuse the mutual and you refuse risk pooling, and the merchants who cannot pool their risk pay for it one by one. Two springs ago a Shamakhi widow ran three caravans on her late husband's name and a borrowed string of credit. The first came home heavy. The second was taken whole in the passes above Shabran, mules and silk and the two guards she could afford. She had pledged next season's looms against that cargo. By autumn the dye-houses were sold, the looms were another man's, and her name was struck from the merchants' book as if it had never paid a toll. The big houses lost a caravan that same season too. They shrugged, drew on the other nine, and rode again in the morning.\n\nTell the merchants to carry their own losses and you keep your treasury closed and your hands clean, which sounds like thrift until you count who is left. A great house treats a robbed caravan as a bad month. A small one treats it as the end. Leave each man to his own purse and the road slowly empties of every purse too thin to absorb a single bad night, until only the largest ride at all.\n\nI have buried better merchants than me for want of a fund that cost a copper a bale, Shah. Spread the loss, or watch it concentrate.",
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
        explanation: "Grant the sarraf his seal and you have not lent a man anything; you have moved his promise. A merchant pays a hundred dirhams here and carries a slip of paper instead of a heavy purse; his cousin three hundred miles north reads the seal and pays out the hundred there. The silver itself never leaves the city. What crosses the passes is trust, and bandits cannot rob a sentence. Credit and usury are arguing in one breath here, and the seal settles which one wins.\\n\\nThe trick the Qadi smells is the fee. Charge a man for the use of his own money and that is riba, forbidden plainly. So the sarrafs never call it that. They call it the price of the road and the risk of the seal: the cost of standing good for a debt in a town where you might be repudiated, the labour of keeping two sets of ledgers that agree. The jurists of Basra and Kufa argued this point for generations and mostly let the suftaja stand, because the alternative was a merchant slain for his strongbox in a mountain defile. A fee for service is lawful. A surplus on a loan is not. The whole craft lives in the hand's breadth between those two sentences, and the sarrafs have been comfortable there for three hundred years.\\n\\nThe Qadi will not be comforted. He reads the seal, sees coin begetting coin, and pronounces it riba in a clean robe. He is half right, which is the most dangerous kind of right.",
      },
      {
        label: "Ban them as concealed riba.",
        effects: { treasury: -4, people: -3, faith: 5 },
        affinityEffects: { qadi: 2, tahmina: -2 },
        explanation: "Here the whole quarrel over credit and usury comes down to a single seal you can refuse. Every silver coin in your treasury that sits idle is a coin not put to work, and every banker since has known it. Forbid the bills and you decide that the silver must travel as silver.\n\nSo it rides. The caravans go out of Shamakhi loaded with the actual metal, sewn into saddles and packed under the silk, and the news of which mule carries the strongbox reaches the passes before the mule does. Some of it arrives. Some of it feeds the men who live in the high rocks between here and Derbent, who do not care whose seal is on the coin once they have cut the girth. The merchant who is robbed does not lend again that season; the one who fears robbery keeps his hundred dirhams buried under his floor, where it earns nothing and buys nothing and builds no looms. A coin in the ground is a coin that has resigned from the kingdom.\n\nThe instrument you have just banned was the medieval cure for exactly this. The suftaja let a debt be settled at a distance without a single dirham crossing the dangerous ground, and Muslim merchants from Cairo to Samarkand ran their long-haul trade on it for centuries precisely because the roads were not safe. You have sided with the Qadi's clean conscience over the merchant's full ledger. The riba question is answered. The silver still has to get to Derbent, and the men in the rocks are patient.",
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
        explanation: "What the master is asking you to build is a barrier to entry, and a lovely one, dressed as a guarantee of quality. In 1476 the Venetian Giosafat Barbaro counted four or five thousand houses in Shamakhi, half of them carding, dyeing, or throwing silk. Walk that city and you cannot tell, from the street, whose cloth will hold its color and whose will run grey in the first rain. The guild can tell. They want you to make their seal the law, so that no bolt leaves the gate unstamped, and no loom turns without their leave.\n\nGrant it and two things happen at once, only one of which the master will name to your face. The cloth does get better, because a man who can lose his license tends to weave honestly, and the seal becomes a promise a Genoese buyer will pay extra to trust. That is the part worth buying. The part he leaves unsaid is that he has just been handed the power to keep his nephew's looms turning and the newcomer's idle. The cap does not only protect quality. It protects the men already inside the wall from everyone still outside it, and the fees they pay you are the smaller half of what they collect from that protection.\n\nSo you take the license money into the treasury, the masters bless your name in the bazaar, and a hundred weavers who will never now own a loom learn exactly whom to blame. Watch which of those two prices the guild quotes you next year, and which one it pockets quietly.",
      },
      {
        label: "Keep the looms open to all.",
        effects: { treasury: -3, people: 6 },
        affinityEffects: { tahmina: 1 },
        explanation: "Refuse the cap and you have torn down the barrier to entry before it was ever built. Leave every yard free to hang a warp and the cloth of Shamakhi gets cheaper and rougher at the same time. More hands at more looms means more bolts in the bazaar and a price the poor can afford, but it also means the grey-running dye and the thin weave travel under the same city's name as the good. No seal stands between a buyer and a cheat. The masters lose the wall that kept their nephews fed and the newcomers shut out, and they will tell you, loudly, that you have sold the reputation of a hundred years to feed this season's apprentices. Whether they are right depends entirely on whether anyone can still tell the honest bolt from the false one once you have refused to let them mark it.",
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
        explanation: "A labour supply shock is what the grave handed you, and the first instinct of every ruler who suffers one is the wrong one: to legislate the price of an hour back down to where it was comfortable. Every age that loses a great many workers at once feels that itch, and every age discovers it is easier to scratch than to satisfy. Your decree pins the wage at the old penny. It cannot pin the man.\n\nThe arithmetic is brutal in its simplicity. The plague that crawled up the Caspian shore in 1346, through Astrakhan and into the lowlands, did not destroy a field or a plough or a sack of seed. It destroyed people. The land is exactly as wide as it was; the hands to work it are half as many. A scarce thing grows dear, and the scarcest thing in your realm this autumn is a living back that can swing a scythe. Fixing the wage below what that back is now worth does not make the back cheaper. It makes the back walk. Your survivor signs nothing at the old rate. He drifts to the next valley where the headman keeps no honest count, or he simply sits, and the wheat you commanded rots anyway, only now with your name on the order.\n\nThe Vizier will counsel that the decree may hold, Shah, provided the watch is doubled, the roads are watched, and the neighbouring lords are persuaded not to bid in secret. Which is to say it will not hold.",
      },
      {
        label: "Let wages rise to what the work commands.",
        effects: { treasury: -6, people: 7, military: 1 },
        explanation: "Grant them their doubled penny and you have done nothing more clever than read the market your dead have written for you. Refuse, and the wheat stands and rots while you watch. There is a name for what binds your hand here, a labour supply shock, and once you hear it your choice stops looking generous and starts looking inevitable. The sickness was a butcher who left the barns full and the granaries standing and took only the men. When a thing becomes rare its price climbs, and there is no rarer commodity in Shirvan this season than a peasant with a strong arm and a pulse. The survivor knows it before you do.\n\nThat is the strange, grim gift of a pestilence to the man who lives through it. Before 1346 he was one mouth among too many, bound to a poor holding because there was nowhere a poor holding was not the only offer. After, when the plague had gutted the Golden Horde's own towns up the Caspian and Khan Jani Beg counted his losses in the thousands, that same peasant could stand in his own doorway and let the lords come bidding. One offers the old wage and a curse. The next offers double and a roof, because his fields will rot otherwise. The labourer who buried his neighbours now eats meat on a workday, and the landlord who once dictated terms learns to ask.\n\nIt is a transfer of fortune, paid out of the purses of those who own land and into the calloused hands of those who work it, and no edict you sign reverses the headcount the grave already took. Your treasury and your lords will groan under the new wage bill. They are paying, in coin, for a scarcity that cost the dead their lives.",
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
        explanation: "Watch a man with two dinars of the same stamped value, one heavy and one shaved thin. He spends the light one and keeps the heavy, and he would be a fool to do otherwise. Multiply him by every stall in the bazaar and you have your trouble laid bare: the bad coin stays in motion, the good coin goes under the floorboards, and the worse the metal in a man's hand the harder he works to be rid of it. The honest dinar is hoarded out of circulation by its own honesty. Bad money drives out good. Gresham's law needs no decree to enforce it; it runs on greed alone.\\n\\nTo call in the whole coinage and strike it fresh at full weight is the only cure, and it is expensive, because the treasury must make up the silver the clippers stole. The reward is that a dinar means a dinar again, and the buried hoards come back into daylight. The mints at Shamakhi and Baku struck Shirvanshah silver of decent fineness through the prosperous years of the fifteenth century precisely because a ruler who let his coin rot taught every trader to trust scales over sovereigns. Restore the weight, and they trust the stamp once more.\\n\\nThe manat your descendants carry will rest on the same bargain: a currency is believed only as long as the issuer will spend to defend it. Pay now, and the coin keeps the realm's name. Refuse, and the name is what gets shaved.",
      },
      {
        label: "Let the light coin circulate.",
        effects: { treasury: 5, people: -6, military: -1 },
        affinityEffects: { vizier: -2 },
        explanation: "What those sleeve-scales are weighing is Gresham's law, the iron rule that bad money drives the good into hiding. Caspian merchants carried small folding balances and weighed each coin before closing a sale, because the stamp on a dinar had stopped meaning what it claimed. A century of clipped and copper-thinned silver across the Caucasus mints had taught them not to count coin but to weigh it, and a man who must weigh his money no longer truly has money. He has metal, and the work of guessing its worth at every transaction.\n\nLet the light dinars run and look away, and the treasury keeps a little silver this season. The cost arrives quietly. Knowing the coin is bad, the prudent man hides every heavy piece he can find and pays only in shavings, so the good silver leaves the market entirely and trade slows to barter and suspicion. A bale of silk that once changed hands on a nod now waits while two men argue over the weight of the payment. The Genoese, who can sail to Derbent or Tabriz, begin to.\n\nYour heirs will call a sound currency the foundation of trade and spend hard to keep it. They will have learned what you are about to teach them by neglect.",
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
        explanation: "Fix the dinar at ten dirhams while the assayers of Sultaniyya quietly trade gold at twelve, and you have invited every merchant in the realm to perform a small miracle. He brings your underpriced gold dinars to the mint, takes them out as silver at your generous rate, carries that silver east to where it fetches its true worth in gold, and returns with more dinars than he left with. Each turn of the wheel skims the difference, and the gold drains out of the country one saddlebag at a time. This is the old trap of bimetallism: a coin is the silver or gold in your hand, and it is also the price the law nails that metal to, and when the two disagree the metal always wins. The law cannot see the bleeding happen, because every step of it is lawful.\n\nAnchor instead to gold, and you reckon all debts and tribute in the dinar, the metal that crosses the Caucasus passes and clears at Hormuz without argument. The treasury counts its reserves in the thing it actually hoards, and the long-distance houses bless you, for the dinar is the only purse that travels well. The silver men will grumble, since their dirhams now answer to a master fixed above them, and the village that pays its tax in worn silver feels the pinch first. But the gold stays home, and a ratio the world already believes leaves no gap for the clever to pry open.",
      },
      {
        label: "Anchor it to silver.",
        effects: { treasury: -3, people: 3 },
        affinityEffects: { tahmina: 1 },
        explanation: "Bimetallism cuts the other way here, for to anchor the realm to silver is to pick which of your two coined metals rules the other. Tie your coin to the dirham and you bind it to the metal the market actually moves: it buys bread, pays the porter, settles the day's haggling in the Shamakhi bazaar. The wage-earner is paid in it and prices himself in it, so a silver standard keeps his small world steady while the great houses, who reckon their wealth in gold, must now bend to your dirham. Set the ratio near what Tabriz already whispers, and no one finds it worth their while to melt your coins. Set it wrong, and the cheaper metal floods every counter while the dear one vanishes into the goldsmith's crucible by morning.",
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
        explanation: "The wells are theirs by a seal that is yours, and every move you make now begins from inside that one old fact. You can squeeze a larger share out of the Genoese, and they will pay it, because a slightly thinner profit on a field they own still beats a fight. But notice what you cannot do: you cannot make the seeps un-sold. The negotiation runs on their ground because you put it there years ago, and the best you can win is a better price for a thing you no longer hold. This is the quiet tyranny of a choice already made; call it path dependence, and feel how it narrows the room.\n\nThe Shirvanshahs who kept their wells kept their options. A ruler who leased the dipping season by season could raise the rent, change the contractor, or take the works back into his own hand when it suited him. Once the deed is sold the ladder is pulled up behind it. You take the larger cut, the Genoese widen their works, and your grandson inherits a customs-house that collects rent on its own coast like a guest.",
      },
      {
        label: "Buy the rights back at any price.",
        effects: { treasury: -14, people: -2, naphtha: 6 },
        explanation: "Undoing a sale costs far more than never selling, and that gap is the whole lesson of path dependence. The Genoese know exactly what the rights are worth to you now, which is more than they paid, because you are buying back not just the oil but your freedom to decide. They will name a number that hurts, and you will pay it, and the treasury will feel the wound for years.\n\nIt is, even so, the move a careful ruler makes. The seeps come home, the season's draw is yours again, and the chain that ran al-Mansur's petroleum tax down through the Baku contractors is mended. The price of the lesson is steep and paid in coin you cannot spare. The alternative is to leave the most famous wealth on your coast in a foreign ledger forever. You count out the silver. It is the most expensive thing you will buy this reign, and the cheapest way left to buy it.",
      },
    ],
    tags: ["path-dependence", "lock-in", "naphtha"],
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
        explanation: "State capacity is the dull machinery a throne uses to actually reach into the lives it claims to rule, and a paid official with an auditable ledger is the single most profitable piece of it you will ever build. It will not pay you back inside your reign. Once tax-farming is replaced by salaried collectors who keep books you can audit, the third that vanishes between the village and Shamakhi becomes yours. But the men who skim that third are not abstractions. They are the same families who fund the militia, marry your nobles, and lend you silver in a hard winter. You are not buying efficiency cheaply. You are picking a fight with everyone who profits from the dark.\n\nThe Ilkhans tried it once and seriously. Around 1300 Ghazan Khan issued decrees fixing the rights of landholders and pulling the tax-farmers' worst abuses out of the soil, and for the length of his reign the apparatus held and the revenue flowed straighter than it had in fifty years. His heirs let it rot back to plunder within a decade. The vizier who drafted the thing and wrote its history kept his head only until 1318, when the men he had dispossessed remembered his name. Good books outlive a good vizier by about as long as it takes the next faction to read them.\n\nBaku's tax offices and the queue-ticket service halls of this century are the same wager rebuilt with paper and stamps: make the transaction visible, and the man skimming in the shadows has nowhere to stand.\n\nFarrukh has waited years to say this to you, Shah, and the window will not stay open. \"If it holds, the yield doubles. If it does not hold, I will likely be the first item confiscated. On balance I judge the attempt worth making.\"",
      },
      {
        label: "Decline. The current system works.",
        effects: { treasury: 3, people: -2, military: -1, faith: 2 },
        affinityEffects: { vizier: -4, qadi: 1, tahmina: 2 },
        explanation: "What you are refusing here is state capacity itself, the throne's power to reach past the men who own the collecting, and the cruelty of it is that refusing breaks nothing. The tax-farmers keep their third and keep delivering the other two reliably, the way they always have. The Qadi sleeps easy, Tahmina sleeps easier, the treasury ticks over. What you have actually bought is a ceiling: a state that can pay its garrison and patch a bridge but can never reach down to where the silver is born. Farrukh bows and serves on. He simply never brings you a bold idea again, and a court no one dares to be ambitious in coasts pleasantly downhill for a very long time before anyone notices the floor.",
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
        explanation: "Strip away the rule of law and this is what stands in its place: a man's fate decided by whoever reaches the throne first. Hulagu's vizier, Shams al-Din Juvayni, ran the Ilkhanate's revenue for two decades and grew rich doing it. The estates he gathered were real, the roads his clerks kept open were real, and so was the resentment. When the throne changed hands he was charged in 1284 with having poisoned the late Ilkhan, executed, and his lands swallowed into the crown as *inju*. The accounting did not stop with him. Rashid al-Din, who inherited his desk and his brilliance, went the same way in 1318. Each killing tidied an afternoon's politics and left the chancery a little less able to do its work.\n\nSo you arrest your Vizier and his estate flows into your treasury, which feels like profit. The men who denounced him want their reward, and you will pay it in offices. The Qadi, guilty or not, now does his own sums and decides whether to kneel, run, or strike first.\n\nHere is the part that arrives later, when the ledger has closed: every able man who might have served you watches how this ends. They learn that competence near the throne is a thing to be hidden, not shown. You have not bought loyalty. You have taught your best people to make themselves small.",
      },
      {
        label: "Refuse. Hear the Vizier yourself first.",
        effects: { treasury: -2, people: 3, military: -2, faith: 4 },
        affinityEffects: { vizier: 4, qadi: 1 },
        explanation: "An accusation is cheap to make and expensive to obey. Three nobles stand before you with witnesses and names, and they want a man ruined on their word this morning. Grant it, and the lesson does not stay quiet: next year three other nobles will arrive with a different name, having watched how easily the first list became law. That is the whole of it, the rule of law itself, whether a man can be ruined on an accusation or only after the accusation has been tested. Summon the Vizier instead. Question him. Examine the witnesses with him standing there. If he is innocent you have kept a useful servant after a fright; if he is guilty you now hold proof that will hold up when your own successor goes looking. The test is the thing that survives, not the verdict.\\n\\nThis was not a foreign idea here. Above the ordinary Sharia courts sat the *mazalim*, the tribunals of complaint where a grievance was meant to be weighed before a man was ruined, and Ghazan Khan in his day spent real effort trying to make them bite. Where they held, the treasury and the army could trust their own records. Where a khan reached past them and struck on a whisper, the whole apparatus learned to lie to him, and his reach into his own provinces shrank to match.\\n\\nThe same calibration occupies any modern court asked to stand its ground against the men who appoint its judges. Your refusal today is one small vote for that, cast in disappointing company. The nobles file out empty-handed. Whether the Vizier was plotting, you will learn in due course, by procedure.",
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
        explanation: "Legitimacy is capital, and this afternoon you are being offered the chance to invest it. Walk into the great mosque in Baku today and you will find a religious office that the state recognizes, funds, and quietly bounds. That arrangement did not fall out of the sky. It is the same bargain you are being asked to strike in the mosque this afternoon.\n\nWhat you are buying with your purse is not piety; you already have that. You are buying the right to have the ulama's authority answer to yours. Open the council yourself and every ruling it issues on usury and weights and the wine trade carries your seal alongside God's. The clergy, in turn, get your patronage to settle their own quarrels over doctrine, which they cannot settle on their own coin. Each side lends the other what it lacks.\n\nKhalilullah I understood the price and paid it gladly. He raised the Palace Mosque inside his own walls in 1442 and made room, a few steps off, for the tomb of the scholar Seyid Yahya Bakuvi. Stone is expensive. He spent it precisely because a learned man honored at court is a learned man whose verdicts flatter the court. Keep the ulama inside the house and they bless the house. Leave them in the street and they preach from it.",
      },
      {
        label: "Withhold patronage. Let them meet without it.",
        effects: { treasury: 2, people: -2, military: 1, faith: -4 },
        affinityEffects: { qadi: -3, tahmina: 1 },
        explanation: "What you are about to refuse to spend is legitimacy as capital, and the trouble with capital is that it looks free right up until you need it. Keep your purse shut and you announce that the throne stands on its own legs and needs no blessing to do so. The council convenes regardless, in a meaner hall, its verdicts read aloud to the faithful and ignored by every merchant who hears them. There is a pleasure in this. It costs you nothing this year, and probably nothing next.\n\nThat is exactly the trap. Legitimacy is not a tax you pay each spring; it is a well you draw from in a drought, and the man who never tends it does not notice it has gone dry until the day he reaches for the rope.\n\nConsider the Ilkhans before Ghazan. Several were not Muslims at all, and Arghun made no secret of his contempt for the faith. For decades they ruled without a sermon raised against them. Yet for those same decades the state's hand reached only so far into the lives of its Muslim subjects, and no further, because the men who shaped those lives owed it nothing. When Ghazan accepted Islam in 1295, it was not a fit of conscience. He had counted what his predecessors lacked and meant to buy it back. The reckoning fell on the grandsons of the men who declined to pay.\n\nThe well runs dry slowly. Then all at once. Withhold, Shah, and know which you are choosing.",
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
        explanation: "The Qadi's word carries weight only because the faithful believe it is not yours to dictate. Cut him down for an inconvenient ruling and you swap bargaining for force — a trade that never comes out even. You teach every man at noon prayers a single lesson: the law speaks when the Shah permits it. Your new Qadi will recite whatever you require, and that is precisely why no one will believe him.\n\nYou have not silenced a verdict; you have spent the borrowed authority that made verdicts useful to you. The faithful remember who was removed, and why. They will weigh his successor accordingly, which is to say not at all.",
      },
      {
        label: "Hear him out. Negotiate a settlement.",
        effects: { treasury: -4, people: 2, military: -1, faith: 3 },
        affinityEffects: { vizier: -1, qadi: 3 },
        explanation: "A ruler who tries to win outright against the men of the law wins nothing he can keep. The Safavid shahs learned this when they quarreled with the Twelver clergy, the Ottomans when they crossed their *ulama*, and Akbar when the learned men of his own court turned against him. The wise ones reached for the bargain, not the cudgel. They sent gifts. They closed a wine house here, withdrew a tax there, let a scholar feel that his objection had moved the throne. The ruling would be quietly narrowed rather than crushed, and both sides walked away able to claim they had not lost. That is the choice before you now, Shah: bargaining, where coercion would have cost you everything.",
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
        explanation: "She is not bluffing, and you both know the figure that proves it. She has sunk years into Shamakhi, and now she holds your silk hostage to a discount, which is the whole shape of the hold-up problem: the party who has already committed can be squeezed by the party still free to walk. The route north through Astrakhan to the Volga was no merchant's fantasy; it carried real cargo for centuries, and a caravan that turns onto it does not drift back the next season out of sentiment. What you lose when Tahmina leaves is not one woman's customs duty. It is the smaller houses that warehoused under her name, borrowed on her credit, and timed their own departures to hers. They follow the silk, and the duty on all of it follows them. Measured against years of that, the remission she is squeezing out of you is a rounding error.\\n\\nRulers who understood this wrote it into law. In 1562 the Shirvan governor Abdulla Khan Ustajlu granted the Muscovy Company's agent specific exemptions on his goods, a privilege drafted for exactly the purpose you now face: keep the foreign trader paying a thinner duty here rather than a fat one somewhere else. The Genoese on the Caspian shore had bought similar terms generations before. The lords who refused such bargains watched the convoys reroute and kept their pride; the ones who bargained kept the convoys and learned to live on the slimmer cut.\\n\\nThe same arithmetic runs under every modern transit corridor that courts shippers with eased customs and softened terms rather than full tariffs, on the wager that volume at a low rate beats principle at no volume. Your offer is that wager in caravan form.\\n\\nTahmina counts the concession, then adds the line you cannot see: the future freight she now has reason to bring you. She decides the margin is worth her loyalty for a few more seasons.",
      },
      {
        label: "Let her go. Trade will find another route.",
        effects: { treasury: -6, people: -3, military: -1, faith: 2 },
        affinityEffects: { tahmina: -6 },
        explanation: "Refuse to pay and you meet the other face of the hold-up problem: you keep the concession and lose the column it would have protected. Tahmina turns her caravans north, and her duty drops off the rolls clean. Worse, the small traders who sheltered under her name and borrowed against her credit go with her or shrink to nothing; the Shamakhi market thins inside two seasons. Here is the cruelty of a trade route: it stays loyal for a generation out of habit, then shifts in a month and almost never shifts back. Her warehouse stands shut, then sells. And the next great merchant weighing a base in Shamakhi reads your empty ledger and books passage elsewhere.",
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
        explanation: "An hour ago the back pay, the restored estate, the marriage you might or might not have granted all had prices you fixed. The open gate unfixes them. With two regiments standing in the courtyard, a favour is no longer worth what it is worth to you; it is worth whatever you will surrender rather than watch the standard advance another twenty paces. That is the price of a threat, and you have just let Farrukhzad name it. He knows the gap between those two numbers is the whole of what he marched for, and that it widens with every degree of your fear.\n\nThe histories are crowded with the receipts. When Ibrahim of Shirvan fell into the hands of Qara Yusuf, he bought back his freedom and his throne in coin, and the court called it the price of resumption rather than a defeat, which it was. The realm survived because the sum was paid. What it did not survive intact was the lesson left behind: that the throne could be made to pay, and that a man with troops at the wall need only name a figure the Shah feared more than the silver.\n\nSo you may open the gate, and live, and reign. But the captain beside you marks the hour. He has seen who set the price today, and he will not forget which way the coin moved through the gate.",
      },
      {
        label: "Bar the gate. Summon loyal forces.",
        effects: { treasury: -3, people: 4, military: -8, faith: 3 },
        affinityEffects: { general: -3 },
        explanation: "Refuse, and you make the price of a threat too high to be worth raising. Every state that has watched a column of its own soldiers turn toward the capital learns the same arithmetic of the closed door. Bar it, and you wager the men and the masonry of one bad afternoon against something you cannot buy any other way. A garrison commander who marches on his own throne and is sent home empty teaches the next one that the throne does not pay at swordpoint. An hour of risk now against a precedent that would otherwise outlive you.\n\nThe medieval version is unforgiving about when the wager pays. The gate holds only where there is a second force to hold it. Loyal household troops, nobles who chose your side before the standard rose, an ally beyond the river whose displeasure the rebel must reckon with. Sheikh Ibrahim Darbandi survived more than one such hour in the 1380s by never letting a single subordinate become strong enough to act alone, so that when the moment came the man at the gate found himself outnumbered by his own peers. Where no such counterweight stood ready, as in the long ugly successions of the Ilkhanate, the gate was beside the point. Whoever brought the larger band of horsemen simply rode in and sat down.\n\nSo weigh what stands behind you before you give the order. Bar the gate with nothing at your back and you have only chosen the manner of losing. Bar it with the realm already arrayed beside you, and Farrukhzad must decide whether his two regiments are worth dying in the courtyard for. If the door holds, the kingdom changes. If it gives way, it changes far more.",
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
        explanation: "What Tahmina is asking you to build is institutional intermediation: one chartered body that stands between you and the bazaar so the city speaks with a single voice. In old Baku and Shamakhi the cloth-sellers and the caravan-men already had their own heads, the *rayises* who ran a craft or a quarter, and above them a *rayis ar-ruasa* who sat at the top of the urban council. None of them wore court rank. But when the bazaar wanted something, or refused something, it spoke through these men, and a governor who knew them could hear a grievance in a council chamber instead of reading it later in a riot.\n\nThat is what you are buying with this title. Right now a hundred merchant houses come to you one by one, each with its own claim, its own bribe, its own version of the truth, and you spend more on sorting the noise than on settling the matter. Give them one mouth and you negotiate once. The complaint arrives as a position, debated and trimmed, before it arrives as a torch in the suq.\n\nYou also surrender something. A body that can speak can also bargain, and you have just handed it a permanent seat to bargain from.\n\nTahmina would price it plainly: a title costs you nothing to mint and earns her a margin no coin in her strongroom ever did. She is not wrong about the trade. She has simply made certain she sits on the better side of it.",
      },
      {
        label: "Refuse. Merchants speak through merchants, not through office.",
        effects: { treasury: -2, people: -2, military: 0, faith: 3 },
        affinityEffects: { qadi: 2, tahmina: -3 },
        explanation: "Refuse and you are refusing institutional intermediation, the single chartered body that would stand between you and a thousand separate merchant houses. So they keep coming to you the way they always have: one house at a time, hat in hand, each through whatever cousin or chamberlain it has cultivated. That is tiring. You will go on settling commerce family by family, with no single body you can summon and hold to its word. What you keep in return is the freedom to be unfair. Today this house is in favour; tomorrow it is fined and the next is raised. No estate of merchants stands between you and any one of them, because you never let one form.\n\nLook at why the sources barely mention merchants in the Shirvanshah court, and you have your answer: the dynasty simply did not build the office. The urban councils of Baku and Shamakhi existed, real enough, but they sat below the throne and never climbed onto it. Elsewhere the door was opened wider. The Mamluks wrote merchants into the regulation of their supply, and the Mongols bound their nobles to trading partners through the *ortaq*, lending princely capital to men who carried it across the steppe and shared the profit. Those arrangements made commercial men into fixtures of state. A Shirvanshah who declines Tahmina's title is choosing, deliberately, to remain the only fixture in the room.",
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
        explanation: "Grant this and you are watching entrenchment take root: a rank that was yours to give becomes a thing his bloodline owns, and what an office holds it does not easily give back. What the General is actually selling you cannot be put in a deed. The worth of him is in his skull and in the captains who answer to his voice: thirty years of knowing which pass floods in spring, which quartermaster steals, which man breaks under a charge. None of that passes to a son the way a sword does. Make the office hereditary and you have not bought the knowledge, only promised the rank to a boy of nine you have never met, and tied your line's safety to whatever he grows into. You are paying for the father and inheriting the grandson.",
      },
      {
        label: "Refuse. The office stays at the throne's gift.",
        effects: { treasury: 2, people: 2, military: -5, faith: 3 },
        affinityEffects: { general: -4 },
        explanation: "Refuse, and you are denying entrenchment the foothold it needs, because a power that never sinks into a bloodline is a power the throne can always pull back. Keep the office in your gift and it remains a leash you can shorten. Yes, the day the General dies you lose everything he knew, and he will hear your refusal as a verdict on his son. But an office a man cannot bequeath is an office that always returns to the throne, and the throne stays the only thing in the realm that does not change hands by birth outside your own house.\n\nThe grant he wants has a long and ugly record. The *iqta* let officers collect the taxes of a district, first for a life, then for a bloodline, and the soldier who feeds himself from land soon owns it. Watch where that road ends: the Mamluks began as bought soldiers serving a sultan and finished as the sultans, the army having quietly become the dynasty. Your own line lasted four centuries by the opposite habit. Emirs were raised, broken, and raised again; none held his command as property. That revocability is precisely what let Ibrahim bend before Timur in the 1390s without breaking, since no general beneath him owned a power the throne could not recall.\n\nEvery standing army since has had to answer the same question of who commands the commanders. The answer that survives is the one the General resents: rank is a posting, never an inheritance. He takes your no without a flicker. He is not a young man, but neither is he in a hurry.",
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
        explanation: "A modern state leases a deep-water port to a rival navy, or routes a foreign pipeline across its border, and discovers afterward that the tenant has acquired opinions about the landlord's other guests. The transaction looked like revenue. It was also a lien on the future, paid in freedom of movement. Scholars have a name for the slow merger of a weaker partner into a stronger one's orbit: asymmetric integration. You are being offered its oldest version.\n\nLet the Ilkhan winter in Baku and the customs ledgers swell for two months a year, the tribute settles into something predictable, and the standing threat of a punitive column quietly recedes. What you surrender does not appear in any ledger. A suzerain who sleeps in your capital every winter is no longer a visitor you receive; he is a fixture you accommodate. The eastern quarter set aside for his use does not revert when he rides home. It waits for him.\n\nGhazan wintered in Baku around 1297, and the arrangement reached well past the simple paying of tribute into the daily institutional life of the city. The dynasty kept choosing this road. When the Ilkhanate broke apart and Kara Yusuf rose, Ibrahim I knelt to formal vassalage again in 1413, because vassalage that lets you keep your throne is cheaper than independence that loses it. The Qadi will object, and his objection is not sentimental: the court you are inviting does not pray as Shirvan prays, and that quarter is now permanently theirs.\n\nThe Envoy, who has spent years being told no, inclines his head a fraction. He calls it the beginning of a productive relationship.",
      },
      {
        label: "Refuse the residency. Keep Baku Shirvanshah ground.",
        effects: { treasury: -4, people: 3, military: 3, faith: 6 },
        affinityEffects: { qadi: 3, envoy: -3 },
        explanation: "What the Ilkhan is really offering you is asymmetric integration, and refusing it is how you keep the relationship shallow. When the Mongols subdued the Caucasus in 1235 and 1236, they did not garrison every town. They left the local lords on their thrones and took tribute, demanded recognition, and reserved the right to ride in hard whenever a vassal mistook the leash for slack. Over the next century the menu of correction was applied freely along these mountains: a hostage taken from a noble house, a raid that emptied a granary, a confiscated treasury, a ruling family swapped for a more agreeable one. Between roughly the 1280s and the 1330s, more than one local prince in the region learned where the edge of acceptable conduct lay by stepping over it.\n\nSo when you refuse the Ilkhan his winter quarters, you are not buying safety. You are declining to deepen the bond. Baku stays Shirvanshah ground, the mosques keep their congregations and no Mongol prince sleeps inside your walls, but the annual tribute still rides out, the column still waits in the wings, and your fate still bends to whatever the Ilkhan wants this season rather than what you negotiated last. That is the quiet logic of holding back: today's deeper bargain is bought with tomorrow's freedom to choose. You keep the freedom and pay for it in exposure.\n\nThe Envoy carries your refusal north with a flat, courteous face. He observes only that the Ilkhan is a man who reads such answers carefully, and that an answer, once given, tends to be answered in turn.",
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
        explanation: "Notice what you are actually buying when you send everything you have to a column already on the march. Not peace, exactly. You are buying a halt, and you are buying it from men who can see the smoke off Ganja behind them and your open gates ahead. A seller who knows how much the buyer needs the thing sets his own price. The commanders know. That is the whole logic of coercive diplomacy, and it pays off best at the moment the threat is real and the buyer is desperate.\n\nThe Ilkhans built their rule on precisely this transaction. After they broke the Caucasus in the 1230s they did not garrison every valley; they left the old families in place and reserved the right to send a tumen when one of them grew insolent. The point of the campaign was never the city. It was the bargain the city would beg for once the campaign was real. Hostages, a fresh tribute schedule, perhaps a son sent east, perhaps a brother installed in your seat. The treasury opens and the price is whatever your terror will bear.\n\nA century on, your own successor will kneel to Timur and call himself \"the ninth\" of nine condemned men, and walk away with his dynasty and a lighter purse. He understood the rate. So, I think, do you. The column will stop short of the walls. You will simply pay for every mile it did not cover.",
      },
      {
        label: "Stand. Defend the walls.",
        effects: { treasury: -3, people: -8, military: -10, faith: 5 },
        affinityEffects: { envoy: -6 },
        explanation: "Coercive diplomacy works only if the threatened man believes folding beats fighting, and here you call its bluff. Watch how a small country today decides whether to fold or fight a far larger one. The terrifying part is that the choice has to be made blind, before anyone knows which was right, and the wrong guess is paid for in territory you never get back. A state that resists when it should have bent ends up smaller. A state that bends when it could have held ends up owned. The seam between those two outcomes is invisible until you have already crossed it.\n\nYou are standing on that seam now, and the medieval ledger is not kind to the man who chooses the walls. Pay tribute and you have taught the Ilkhan that a tumen, sent in a sulk, will always be met with gold; that is a debt that compounds. But the alternative is your masonry against a siege train that has reduced cities older and stronger than Shamakhi. Recall 1066, when Kara-Tegin's Turks took both Shamakhi and Baku and the famed walls held no one. The cities that resisted the Ilkhans mostly fell, and the fallen ones lost their treasuries, their ruling houses, and their craftsmen marched off in coffles. Ganja is still burning to prove it.\n\nThe Envoy you turned away leads the column, and he remembers. As for the Qadi, he has asked to die on these walls. God willing, he says, and the wall may grant it.",
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
        "explanation": "Ask yourself who else would ever pay for this, Shah, and you will find the answer is no one. A merchant lays out silver only for the gain he can carry home in his own lifetime, in his own purse. But the worth of a house for the sky does not stay in the hands that built it. Corrected tables for the stars guide a pilot in the dark off Derbent who never heard Bahram's name; a truer calendar settles a hundred disputes over when the tithe falls due; a youth trained at the brass instruments goes off and teaches ten more. The harvest scatters across the whole realm and across years you will not see, and no clerk can ever send a bill for it. That is precisely why it falls to a sovereign and to no smaller man.\n\nConsider what Hulagu the Ilkhan did, a conqueror with no softness in him. In the year 1259 he let Nasir al-Din al-Tusi raise the observatory at Maragheh, and paid for it not from plunder but from the revenues of the religious endowments — turning rents meant for prayer toward the measurement of the heavens. A hard prince saw what the soft ones miss: that knowledge is a kind of treasure a city cannot be sacked of. The star-tables made there were still in working use a hundred years on, long after the men who cut them were dust, and long after Maragheh itself had faded.\n\nSo weigh it honestly. The cost is real and it is now; the return is real and it is later, and I will not pretend to know its exact face. But a thing that pays everyone and bills no one will never be built by men who must balance their own books by spring. It waits for a ruler who can afford to be patient with the future. Be that ruler, and let Shamakhi keep the sky.",
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
        "explanation": "A wall is an honest thing, Shah. You can walk its length, lay your hand on the stone, count the courses your silver bought. When the season turns and riders are seen on the ridge, every coin you spent stands up and answers for itself. There is no such comfort in a house for the sky. Bahram asks you to buy a promise — that some year, from some measurement, some good will come whose shape he cannot draw for you today. The mason swears his rampart will turn an arrow. The astronomer can swear to nothing but the labor.\n\nThis is the oldest pull on a ruling mind, and it is not foolish: we trust what we can see and doubt what we cannot, and we would rather hold a small certain thing than a large thing made of maybe. The watch on the gate is fed tonight from the same chest Bahram wants for his brass and his salaried students. Spend it on stone and the realm is safer by spring, plainly and at once. Spend it on the sky and you have a heavy hole in the treasury and, for years, only the patience to show for it.\n\nYet hear the cost buried in this caution, for it is real. Follow it always and you will starve every slow and uncertain good your reign might have fathered. Walls you can point to will win every contest against discoveries you cannot, not because they are worth more but because they are easier to believe — and so the knowledge never gets made, in your court or any other, by the same prudence repeated a thousand times. Build the wall this year if the ridge is dark with enemies; need decides that. But know what the choosing costs, and do not mistake the thing you can see for the only thing worth having.",
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
        "explanation": "Watch what the moon does to your collectors, Shah. The lunar year runs short of the sun's by eleven days, so the tax-month creeps backward through the seasons. This year your men ride out a fortnight after the threshing; in a decade they will arrive before the grain has filled the ear, demanding from a peasant a share of wheat that is still green in the field. He pays in promises or in nothing. The drift is silent and it never rests, and every year it carries a little more of your revenue off into the gap between the two counts.\n\nThe remedy is plain, yet no one will reach for it alone. A calendar is only worth what others keep it by. A single estate that reckons by the sun while every neighbor reckons by the moon gains nothing but confusion at the granary door, so the prudent man waits, and because all are prudent, all wait, and the worse reckoning holds simply because it already holds. This is the knot that only a throne can cut. You need not persuade ten thousand clerks one by one; you need only declare the day, and on that day they all turn together, because each knows the others have been made to turn.\n\nBahram brings you a count already proven. The Jalali solar calendar that Omar Khayyam and his colleagues computed for the Seljuk sultan Malik-Shah in 1079 was more accurate than the one Europe used until the 1500s; while their priests let Easter wander, the sultan's tax fell true to the season for four centuries. He did not wait for consensus. He fixed the day and the realm kept it.\n\nThe clergy will grumble that you have touched the months. Let them keep the moon for the feast and the fast, where it belongs; give the sun to the harvest and the ledger, where it belongs. Set the date once, and the books will stop bleeding through a wound no clerk can name.",
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
        "explanation": "Before you sign away the months, Shah, consider what a calendar truly is. It is not the astronomer's table; it is the agreement in ten thousand heads that next Tuesday is next Tuesday. Your clerks were trained on the lunar count as boys. The mosque calls the year by it, the contracts are dated by it, the grandmother in the village knows the fast is near because she has always known. A reckoning held by that many hands is not merely a habit. It is a piece of the realm's furniture, and you propose to pull it out from under everyone at once.\n\nBahram is right that the sun keeps better time. He is right as the men who built the Jalali solar calendar that Omar Khayyam and his colleagues computed for the Seljuk sultan Malik-Shah in 1079 were right, more accurate than the one Europe used until the 1500s. And yet ask where that finer count is kept today. It was the better instrument, and still the lunar months outlived it in the mouths of the people, because being correct was never the same as being kept. The crowd does not gather where the truth is; it gathers where the crowd already is, and it is costly to be the first to stand somewhere else.\n\nReckon the price of the leap. Every scribe retrained, every old contract disputed, every collector arguing with a farmer over which year is owed. For a season the realm would not know what day it is, and in that fog the taxes you hope to save would slip through hands that no longer trust the count. The clergy would not merely grumble; they would name it impiety, and a throne spends its standing dearly to buy a fortnight of the harvest.\n\nThe drift is real, I grant it. But a slow leak you can plan around is cheaper than a flood you cannot. Trim the count quietly at the edges if you must, and leave the months where the people already keep them. A standard everyone obeys, even an imperfect one, is worth more than a perfect one nobody yet trusts.",
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
        "explanation": "A table of angles is not a cargo, Shah. Sell a bale of silk and it is gone from your hold; let a surveyor copy my columns and I still hold them whole. That is the strange thing about a method. It does not divide when it is shared; it multiplies.\n\nConsider what a single instrument has already become in other men's hands. The astrolabe and the tables of sines were ground out in the observatories of our faith to fix the hour of prayer and the direction of Mecca, no grander purpose than that. Yet the pilot now takes his latitude by the same brass disc, the tax-surveyor lays out a flooded field by the same trigonometry, the mason raises a true dome by it. None of those trades was foreseen by the men who first set the figures down. The knowledge was made for the heavens and it came to earth in a hundred shops at once.\n\nThis is the mark of a method that is general rather than particular. Its worth is not in the one use you can name but in the uses you cannot. Seal it in your treasury and you have one clever advantage, kept jealously, spent once. Open it and the gain scatters where you never aimed it: the harbour-master reckons truer, the caravan plots a shorter road, the well-digger sights his level. You will not see a coin of it on your ledger, and that is precisely why a lesser prince keeps it locked.\n\nThe ruler who measures by the ledger alone will always undervalue the thing whose return lands in another man's purse. But those purses are your coast, and a coast that reckons better is a coast that pays better, in time, through every gate you do own. Let the school publish. You forgo the rent. You buy a country that is cleverer than it was, which is the only wealth that breeds more of itself."
      },
      {
        "label": "Keep the findings for the court.",
        "effects": {
          "treasury": 5,
          "military": 3,
          "faith": -2
        },
        "explanation": "Before you give it away, Shah, ask what you are giving. A man labours years over a method and the moment it is spoken aloud, any idler may have it for nothing, having paid nothing. There is no fence around a number. This is the hard truth of any technique worth the name: it is dear to make and cheap to copy, and the gap between those two prices is where a prince either profits or is robbed.\n\nThink of what fell to other hands when our observatories let their work drift loose. The astrolabe and the trigonometric tables, refined at great cost under our own astronomers, passed out into the wide world, into the navigation of Frankish pilots and the surveying of rival courts, and we were not paid a grain for the teaching. The labour was ours. The advantage spread to every shore that could read a copy. A method that is good for everything is, by that same breadth, good for your enemies too.\n\nSo there is reason to draw the knowledge close. Keep Bahram's tables for the court and you hold a true rent: your gunners range their shot where others guess, your surveyors lay your taxes exact while the neighbour squints, your fleet sails sure while his hugs the coast. Knowledge that no rival owns is an edge that does not blunt with one battle. The treasury keeps it; the army wields it; the throne alone decides who may learn.\n\nI will not pretend the price is nothing. Hoard the technique and you starve the very spreading that makes such a method great, the hundred small trades that would have quickened had you let them. You trade the wide slow harvest for the near sure one. But a throne is not a charity to the age, and the prince who cannot capture the fruit of what he funds will soon fund nothing at all. Keep it close, and let the advantage be yours to spend."
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
        "explanation": "Hear the difference before you judge, Shah, for the clerics have folded two trades into one word. One man charts where the moon will stand at the next fast, so the muezzin calls true and the pilgrim sets out on the right morning. Another sells a frightened mother the promise that her son will not die in spring. The first measures what God has fixed and does not pretend to move it; the second peddles fortunes for coin. Bind only the second, and you have not insulted the faith. You have defended it from its counterfeit.\n\nThe price of this will be plain by tomorrow. The prayer-leaders will feel slighted, and slighted men remember. You will spend something with them that does not come back cheaply, and I will not dress that loss as a gain. But weigh against it what you keep. A man who can read the heavens was not made in a season. He was twenty years in the making, and the boys at his knee are ten years more. Knowledge of that kind is not stored in your treasury; it is carried in skulls that have legs and can walk to another gate.\n\nThis is the harder truth a Shah must hold: the most valuable thing your realm owns is the one thing you cannot lock in a vault. You can seize a man's house and his herds. You cannot seize what he knows, and if you make his home unbearable he simply takes it elsewhere, and your rival inherits a school you paid to build. Protecting an unpopular craft costs you the favour of a loud faction now. Losing the craft costs you every harvest of learning it would have yielded for a generation. Draw the line at fortune-telling, Shah. Keep the man who measures, and put out only the man who lies."
      },
      {
        "label": "Dismiss him to calm the clerics.",
        "effects": {
          "faith": 6,
          "people": -3
        },
        "explanation": "Send him off, Shah, and you will sleep well tonight. The crowd disperses, the prayer-leaders bless your name, and a quarrelsome stargazer is no longer your trouble. I will grant you all of that, because it is true, and because the rest of what I have to say is not nearly so pleasant.\n\nWhat you cannot see from the throne is the road north out of the gate. A trained man does not protest a dismissal; he packs. He takes his instruments, his tables, and the half-dozen pupils who learned the craft at his side, and he carries the whole of it to a court that will house him gladly. You have not destroyed the knowledge. You have made a gift of it to whoever rules next door, and they did not pay a coin for the twenty years it took to grow.\n\nThe world has already shown a Shah what this looks like at full flood. When the Mongols sacked Baghdad in 1258, the learned men who lived through it did not vanish with the libraries. They carried their craft to Maragheh, to Cairo, and beyond, and those cities rose on borrowed brilliance while the ruin behind them stayed ruined. A house need not be burned to be emptied; it is enough to make the clever unwelcome, and they leave on their own feet.\n\nHere is the cruelty of the ledger. The cost of keeping this man is loud and arrives today: an angry faction, a restless square. The cost of losing him is silent and arrives slowly, an absence no clerk can enter in a column. There will be no almanac next year, no boy grown into a master the year after, no school for your grandson to inherit. You will have bought a quiet evening with a generation's worth of skill, and the price will not present itself until you can no longer pay it back."
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
    "concept": "Costly signaling",
    "scenario": "The governor of the eastern marches sends sweet letters and keeps his gates shut, Shah, and I cannot read a man's heart through a sealed door. Let me set him a price only an honest man would pay: his son to your court, his strongest fortress to your garrison for one season. What he does with that demand will tell us more than a year of his vows.",
    "options": [
      {
        "label": "Demand the pledge.",
        "effects": {
          "military": 5,
          "people": -3,
          "treasury": 2
        },
        "explanation": "Any man will swear he loves you, Shah. The traitor swears it most warmly of all, for he has the most to gain by the lie and nothing in his mouth costs him a coin. So a vow tells you nothing, and you have always known this in your gut even when your ears were flattered. The trick is to ask for something the two men cannot both afford.\n\nDemand the son and the fortress. To the loyal governor this is an insult and a season's inconvenience; he grumbles, he obeys, because he means to grow old in your service and a year's discomfort is a cheap price for that long peace. To the man already weighing rebellion, the same demand is ruin. His son becomes your hostage against the very rising he is planning; his fortress, his one redoubt, passes into your garrison's hands the season before he meant to use it. He cannot pay and keep his treason both. So he balks, he delays, he finds reasons, and in the finding he tells you what no informer could.\n\nThis is the whole craft of it: a pledge is worth believing only when it would break a false man to give it. The Ilkhans and after them the Timurids understood the principle to the marrow. They held noble hostages and demanded that vassals send their sons to court, not from cruelty but as a sieve, knowing the faithful would send the boy and the faithless would suddenly discover they could not spare him.\n\nWeigh the cost honestly. You will offend a loyal man, and offended loyalty is a real wound; some good governor will remember this slight for years. The people on that frontier will mutter that you trust no one. But you will have bought certainty, and certainty about who holds your border is the one thing flattery can never sell you. Set the price. Watch who pays it.",
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
        "explanation": "Before you seize a man's child to learn his heart, Shah, ask yourself what the seizing actually proves, and what it costs. A governor who would never have lifted a hand against you is now taught that his service earns suspicion and his son a cell. You may make the rebel you feared by treating the faithful man as one.\n\nThere is a real danger in the other path, and I will not pretend otherwise. A vow of loyalty is cheap. It costs the traitor exactly what it costs your truest friend, which is to say nothing at all, so the words alone leave you precisely as blind as you were before he spoke them, only now you are blind and comforted. To take his word is, in plain truth, to choose hope over knowledge.\n\nYet knowledge bought by the hostage's road is dearer than it looks. The Ilkhanid and Timurid courts that held noble sons as pledges did not buy quiet borders with the practice; they bought resentment that smouldered for generations, vassals who served with one eye always on the captive in the capital, and frontiers held by fear rather than fondness. Fear is loyal only while the grip is strong. Loose it for one bad season and every hostage-holder's son becomes a banner for revolt.\n\nThere is a cheaper coin than a child. Bind the governor with what he already wants to keep: a share of the silk-toll that flows only while he is faithful, marriages, honours, a stake in your fortune so woven into his own that betrayal would cost him more than rebellion could ever win. Make loyalty the profitable course and you need not test for it. A man does not flee a house that pays him well.\n\nTrust his word this once, and watch. If the deeds match the words through a hard season, you have a friend and not a grudge. If they do not, you will have lost a little time, and time you can recover. A son's hatred you cannot.",
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
        "explanation": "A man rides carefully along the cliff road when the fall is his to take. Promise to catch him at the bottom, and watch how he begins to gallop. Your governors have learned that you stand below with open arms, and so they spur toward every cliff in the province. The remedy is not a sermon on prudence; it is to step back from the edge.\n\nLet each governor carry his own shortfall. When the harvest fails or the campaign collapses, let it be his coffer that empties, his creditors who come knocking, his name that the bazaar repeats with a sour mouth. A loss that lands on the man who chose it teaches faster than any decree you could draft. The careful steward, who hedged and held a reserve, will keep what he saved. The gambler will be ruined by his own dice, as he ought to be.\n\nConsider what the Ilkhans built and what it cost them. Their moqata'a tax-farming sold a district to a contractor for a fixed sum paid in advance; once the treasury had its money, the man bore none of the loss if he wrung the district dry. Whatever he could squeeze beyond his price was his to keep, and so he squeezed until the fields lay barren. That was the same disease in a different cloak: the one who reaps the gain does not feel the wound. You can refuse to repeat it. Bind reward and ruin to the same hand and the hand grows steady.\n\nI will not pretend the cure is gentle. Some governors will fall outright, and a fall is loud. Peasants in a misruled district may suffer before a ruined lord is replaced, and a captain stripped of your purse may field fewer spears next spring. Expect the complaint and let it come. A throne that swallows every defeat trains its servants to manufacture defeats. Make each man the owner of his own downside, and his recklessness quietly dies for want of your subsidy.",
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
        "explanation": "A governor who fears his own ruin is a governor who one morning weighs the ruin against the rebellion and chooses the rebellion. That is the danger you do not see when you reckon only the silver. The men who hold your distant provinces are held to you by a thread, and the thread is partly this: that the throne stands behind them when the ground gives way. Cut it to save a season's coin and you may find the next campaign fought by lords who no longer believe you are theirs.\n\nSo keep covering them. Yes, the cost is real and it is double. You pay once for the protection itself, the shortfalls quietly made good, and you pay again for the carelessness that protection invites, because a man insured against his own folly will commit a little more of it. The Ilkhans saw the shape of this in their moqata'a tax-farming, where a contractor who had already paid the treasury its fixed sum bore none of the loss if he wrung a district dry. Shield a man from the downside and his hand grows loose. I do not deny it; I ask only what the looseness buys you.\n\nIt buys a frontier that holds. It buys captains who muster eagerly because they know a bad year will not end their house, and so they spend boldly on your wars rather than hoarding against the day you abandon them. The people of a steady province eat through a poor harvest because the lord was not driven to flay them for his own survival.\n\nWeigh it plainly. The careful course empties no treasury but it makes every governor a merchant first and a vassal second, loyal only while the figures favor you. The generous course bleeds your coffers and feeds some waste, but it knits the realm's great men to your person with a bond that silver alone cannot fray. A king is not only a clerk balancing a ledger. Sometimes the wiser purchase is the loyalty, and you buy the carelessness because it comes stitched to the same cloth.",
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
        "explanation": "A man who alone knows where the bodies lie does not serve you; he serves himself, and lets you imagine the two are the same so long as they happen to run together. They will not run together forever. The day his interest parts from yours, the secrets bend his way, and you will be the last in the palace to learn of it. So train the boys he so dislikes. Set three pupils where there is now one master, and let each carry only a portion of the dark.\n\nYou will pay for this in coin and in speed. A single intelligencer is swift; he need consult no one, second-guess no one. Three watchers will quarrel, duplicate the same errand, demand the same silver twice. The errand will be slower and dearer. Yet consider what slowness buys. No one of the three can sell you whole, for no one of them owns the whole. To betray you, they must first conspire among themselves, and conspiracy among rivals is a fragile thing that leaks.\n\nRulers have leaned, time out of mind, on one trusted intelligencer or vizier whose private knowledge made him at once indispensable and dangerous. Indispensable they noticed at once. The danger they noticed only when the knife was already drawn, because the one man who would have warned them was the man holding it. The lesson is not that loyal servants are scarce. It is that any servant, however loyal at dawn, will reckon his own gain by dusk, and a wise master arranges his house so that gain is never had by selling the master.\n\nSplit the knowledge. Let your watchers watch each other before they watch your enemies. You will sleep worse for the bickering and lighter for the safety. I would not pretend the ledger comes out even; it does not. But a throne is not held by the cheapest method. It is held by the method that leaves no single hand upon your throat."
      },
      {
        "label": "Let him keep his monopoly on secrets.",
        "effects": {
          "military": 4,
          "faith": -2,
          "people": -2
        },
        "explanation": "There is a plainness to one sharp instrument that the cautious never taste, because they are forever blunting their tools against one another. Leave the Spymaster his monopoly and you keep that sharpness. One man, knowing all, moves at the speed of his own thought. No rival to brief, no portion withheld, no errand run twice for the sake of mistrust. When the courier rides at midnight, he rides for one purpose, and the purpose is yours.\n\nWeigh honestly what this efficiency is bought with. A servant who knows everything and answers to no one is not merely useful; he is unaccountable in exactly the measure that he is useful. The same private knowledge that lets him guard you so well lets him, should he ever wish it, turn in your hand. You will not see the turn coming, for the eyes you would use to watch him are his own. You are handing one man both the blade and the sole knowledge of where it points.\n\nThis is the bargain rulers have struck for centuries, leaning on a single trusted intelligencer or vizier whose private knowledge made him both indispensable and dangerous. Most who struck it died in their beds, well served. A few did not, and those few are the ones the chroniclers remember, because a vizier's treachery makes a better tale than a vizier's long fidelity. Do not let the rare disaster blind you to the common bargain. The instrument is real, the danger is real, and a Shah who wants a keen edge must consent to be cut now and again.\n\nKeep him, then, and keep him close. Reward his silence so richly that betrayal costs him more than loyalty ever could; bind his fortune so tightly to yours that to ruin you is to ruin himself. You cannot watch such a man. You can only make it unprofitable for him to wish you harm. That is a thinner safety than three squabbling watchers would give. It is also a sharper sword."
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
        "explanation": "Consider who stands at the gate when you cry for soldiers and ask no questions. The steady man already has a banner; the honest one is owed wages elsewhere and means to collect them. So the courtyard fills first not with the best swords but with the loosest: the man cast out of his last company, the one who left a debt in the next town, the one nobody kept because nobody trusted him. You did not summon them by name. You summoned a kind, and this is the kind that answers.\n\nThe trouble is plain once said. You cannot tell the seasoned from the savage by the look of a beard, and the worst of them know it, so they smile widest. Where you cannot see a man's quality before you pay, your open hand reaches into the bottom of the barrel. Coin spent blind buys mostly what others refused.\n\nRemember the free companies and mercenary bands of the fourteenth century, who sold their swords to the highest bidder and deserted when a better offer came. A prince could fill his ranks in a week, and lose half of them the morning a richer prince rode by. They were not loyal to the cause; they were loyal to the purse, and the purse is fickle.\n\nSo pay to look first. Send my men ahead to ask in the towns these companies last drank in, to count their dead and weigh their captains, to learn which band held a line and which one fled and called it cunning. It is dear, this looking. You will grumble at the cost. But it is cheaper than a wall held by men who melt at the first true charge, and far cheaper than buying the same army twice. The fee for sight is small beside the price of blindness."
      },
      {
        "label": "Hire whoever comes, cheaply.",
        "effects": {
          "treasury": 3,
          "military": -5,
          "people": -2
        },
        "explanation": "There is a temptation in plenty, Shah, and the courtyard is full of it. Why pay my agents to squint at every captain's history when swords stand before you now, cheap and willing? Take them all, the reasoning goes; numbers are their own argument, and a saved coin is a coin in the vault. It sounds like thrift. It is the most expensive thrift you will ever practise.\n\nAsk the simpler question: why are these men cheap? A good company that held a wall and kept its word does not loiter at strange gates begging for hire at any price. It is already retained, already fed, already chosen by some careful lord who looked before he leapt. The swords still loose in the market are loose because someone who could see them clearly chose to let them go. Your cheap field is cheap for that reason and no other. You will be hiring precisely the men no prudent captain kept.\n\nThe free companies and mercenary bands of the fourteenth century, who sold their swords to the highest bidder and deserted when a better offer came, taught this lesson in blood. The lords who took whoever came, and took them low, learned that a man bought for nothing is loyal to nothing. He pillages your own villages when wages run short, and your people pay the levy you thought you had spared the treasury. The coin you saved at the gate is collected later, with interest, from the realm.\n\nSo yes, you may keep five purses in the vault tonight by hiring blind. But a frightened province and a wall that breaks will cost you fifty, and the breaking comes at the worst hour, never a convenient one. Cheapness that selects for the treacherous is not a saving. It is a debt taken out against your own walls, and the collector is the enemy."
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
        "explanation": "When you weigh this match, do not weigh the bride. Weigh the horsemen who come with her, and the horsemen who will not now ride against you. A pact between crowns is not a friendship; it is an arithmetic. On one side of the ledger stand the foes it frightens off, and on the other the partners you can no longer take. The Georgian alliance pays well on the first column and dearly on the second, and an honest counsellor names both before you sign.\n\nBound to the Bagrationi, your northern flank ceases to be a wound. The steppe captains who reckon a raid by the weakness of the man they raid will see a wall of Georgian lances behind your own and look for easier plunder elsewhere. Your house has walked this road before to good effect: the marriage ties the Shirvanshahs wove with the Georgian Bagrationi crown, including the dynasty's links to Queen Tamar's house around 1200, to steady their northern flank. It bought quiet on the passes when quiet could not be bought with silver, and silver we always lacked.\n\nBut a wall faces only one way. Bind yourself to Georgia and you have spent the freedom to stand with Georgia's enemies, whatever they might one day offer for it. Should a richer suitor come knocking from the lands the Bagrationi count as rivals, your door is already shut, and your son's hand already given. The mullahs, too, will mutter at a Christian match, and their muttering is a cost you will hear in the mosque before you feel it in the field.\n\nSo: stronger against the steppe, poorer in choices, a little out of favour with the faithful. I judge the deterred enemy worth more than the foregone friend, because the steppe comes every spring and the rival's gold comes only once, if ever. Bind the north. Just know what you have tied down with it.",
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
        "explanation": "A man with no allies has no debts, and a crown with no pacts owes no one a war. Keep the heir unpromised and you keep something the bound princes around you have already sold: the freedom to choose your friend on the morning the trouble actually arrives, rather than years before, blind to who the enemy will be.\n\nConsider what a pledge to Georgia spends. It is not only the dowry and the wedding. It is every other match you might have made, every rival of the Bagrationi you might have courted with that same unspent hand. Promise the boy now and you have wagered the whole reign on one neighbour staying strong and staying friendly. Crowns do neither forever. Tie yourself to a house and you inherit its quarrels, its enemies, its bad seasons; you are dragged into wars that were never yours, for a wall that guards their border as much as it guards yours.\n\nYet I will not flatter you that waiting is free. It is the most expensive patience a throne can buy. The friends you do not make while you wait are friends who go elsewhere, and they remember the door that stayed shut. When the blow finally falls, and on this coast it always falls, you may look north for the lances and find only the cold you refused to warm. Flexibility is real, and it is paid for in solitude. The man who keeps every option open often discovers, on the worst day, that he kept them open for no one.\n\nSo weigh it plainly. To stay unpledged is to hold your hand free and your house alone. If you trust your own silver and your own walls to outlast the seasons, and you would rather face one bad year unbound than ten good ones harnessed to another man's fate, keep the boy free. Only count the empty chairs at the council the day you finally need them filled.",
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
        "explanation": "Your mother sees what you do not yet feel, Shah: a court that does not know who comes after you has already begun to choose for itself. While the question stays open, every amir keeps a candidate in his sleeve, and a man who is grooming a candidate is not serving you. So name the boy. Say it in the great hall, before the qadis and the captains, and let no escape be left in the wording.\n\nHere is the hard part, and the reason your stewards will counsel delay. Naming the heir is wise to promise today and will be bitter to keep tomorrow. The boy may grow weak; a younger son may grow brilliant; your own judgement, which is sound this morning, may turn next year and beg you to reconsider. Every one of those mornings you will be right to want the question back. And that is exactly why you must put it beyond your own reach now. A promise you can revisit is a promise the amirs know you can revisit, and so they go on plotting, waiting for the day your fancy shifts toward their man.\n\nConsider what happened to the Ilkhanate. When Abu Sa'id died without a clear heir in 1335, every amir backed a different puppet, and the realm that Hulagu's house had held for eighty years came apart in a season of murdered claimants. They did not lack candidates. They lacked one candidate that no faction could hope to dislodge. A throne is held not by the strength of the man on it but by the belief of everyone around it that the matter is settled.\n\nSo bind your own hands, my son. Spend the certainty into the court while you can still mint it. Yes, you forfeit the freedom to change your mind, and yes, a wiser thought may come to you too late to use. That is the price. You are not buying the best heir. You are buying the one thing no clever amir can buy from under you: an ending everyone already believes in.",
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
        "explanation": "A ruler who has not spoken keeps every door in the palace ajar, Shah, and there is a real comfort in that. Name no one, and you owe no faction your hand; you can weigh your sons as they ripen, lean toward the one who proves himself, and let the treasury swell while you are not paying out favours to settle a question that can wait. Flexibility is a kind of wealth. A king who has promised nothing has spent nothing.\n\nBut count what that open door truly costs, because your mother is not wrong about the danger, only about the cure she names. While you stay unbound, every amir reads your silence as an invitation. Each keeps his own candidate fed and flattered, because each believes that if he waits, and pushes, and removes a rival or two, your unfixed favour might yet fall on his man. Your openness does not cool their ambition. It is the fuel. The very thing that feels like prudence to you feels like an open contest to them, and an open contest is run with knives.\n\nLook at the Ilkhanate to see where the unfixed throne leads. When Abu Sa'id died without a clear heir in 1335, every amir backed a different puppet, and the empire dissolved into rival camps within the year. The amirs were not loyal to the realm; they were loyal to whichever boy might make them kingmaker. That fate was not sealed at his deathbed. It was prepared in all the years the succession was left a thing men could still dream of winning.\n\nSo keep your options if you must, but know what you are keeping. You hold the freedom to choose well, late, and you trade for it the certainty that would have kept the daggers sheathed. An unbound king is a flexible king right up to the morning he dies, and on that morning his flexibility becomes a war. The cheaper road now is very often the one that empties the treasury you were guarding, in armies, after you are gone.",
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
        "explanation": "Your mother asks you to give away a thing in such a manner that you can never take it back. Hear the strangeness of it before you refuse: she does not fear your enemies. She fears you. She fears the Shah you will be in a year of failed harvest, when the granaries echo and a college full of fed scholars looks, to a hungry treasury, like a feast laid out and untouched.\n\nAnd she is right to fear that man, for he is real, and he will sit where you sit. The whole worth of the waqf is that it ties his hands along with yours. Make these lands inalienable in the eyes of the law, and they cannot be sold, cannot be seized, cannot be reasoned away by any clever vizier with a ledger and a famine to point at. The lock is the gift. A promise you may break in the bad season is no promise; it is only a mood that has not yet been tested.\n\nConsider what such bonds have already raised. The waqf, the inalienable religious endowment of Islamic law, has fed mosques and colleges for centuries on lands no ruler could touch, and your own house knows the fruit of it: the Shirvanshahs' Palace complex at Baku grew such foundations around itself, stone drawing stone across generations. None of that endures because a Shah remembered to be generous each year. It endures because no Shah was permitted to forget.\n\nA scholar wants to know that the bread will be there next winter before he gives his life to the next thirty winters of study. Tie the land down and you have told him so, in a language stronger than your word. You will lose the use of it. That is precisely the price of building something that will not die when you do."
      },
      {
        "label": "Keep the lands liquid for the treasury.",
        "effects": {
          "treasury": 6,
          "faith": -3
        },
        "explanation": "Your mother offers you a beautiful chain and asks you to lock it about your own wrist. Refuse her gently, but refuse. A Shah who cannot answer his realm's worst hour has already lost the realm; he has merely not been told yet.\n\nThink on what she would forbid you. Not waste — she would forbid you the harvest that fails, the army that must be paid before the frost, the plague that empties a quarter of Baku and asks for grain you no longer command because grain was turned to stone a generation ago. Land you may sell is land that answers when the realm cries out. To seal it away forever is to swear that no future year will ever be desperate enough to need it, and you cannot swear that. No one who has watched a hard winter can swear that.\n\nShe will tell you the college outlives the dynasty. Ask her what the college eats when the dynasty cannot defend it. Endowments do not garrison walls or break sieges. The pious deed survives only so long as a living power stands over it, and that power must keep something in its hand. A ruler stripped of his last reserves is not virtuous; he is merely poor, and a poor crown buries scholars beside everyone else.\n\nKeep the lands liquid. Build your college, yes, but build it from revenue you choose to give each year, freely, as a man gives who could have chosen otherwise. That gift is worth more than one wrung from a document, because it is renewed by judgment rather than enforced against it. The waqf binds the wise Shah and the fool alike. Better to remain a Shah who can still decide — and to be judged, each year, by what he decides."
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
        "explanation": "Look at what each house wants, and you will see why none will give it up. If every faction held its hand, the granaries would fill, the roads would stay open, and all of them would eat well from a fat and quiet realm. They know this. Yet set that against what a single house gains by reaching while its rivals sit on their hands: it takes the contract, the salt-farm, the border command, and grows great on the others' patience. So no house dares be the patient one. The reward for restraint, offered to all, is never as sweet as the reward for grasping first. Thus the good arrangement everyone would prefer is the one arrangement that never arrives by itself.\n\nThis is not a failing of bad men. It is a trap that catches good men too. Each acts wisely for his own house and the whole sinks beneath them all. You have seen where it ends. In the dying years of the Ilkhanate, each amir grasped for private gain while the realm they all depended on fell to pieces around them, and not one of them was a fool. Every one calculated correctly. They simply calculated alone.\n\nA bargain that no party will keep first must be kept for them, from above. You are the power that sits over all the houses, and only such a power can make restraint safe by making grasping costly. Bind them to a shared settlement and hold the rod that enforces it. Yes, the treasury will pay for the holding of it, and the favours you withdraw will earn you sour faces in the harem. But a court that does not devour itself can be marched and can be fed, and that is worth a thinning purse. The houses cannot trust one another. They can be made to trust your hand. Be the hand."
      },
      {
        "label": "Let them fight it out.",
        "effects": {
          "treasury": 2,
          "military": -4,
          "people": -3
        },
        "explanation": "There is a comfort in standing back and letting them tire themselves out. Let the houses claw, the reasoning goes, and the strong will rise, the weak will fold, and a settled order will be left when the dust drops. The treasury even gains in the meantime, for a Shah who hands out nothing spends nothing, and the rivals court you with gifts to win your weight on their side. I understand the appeal of folded arms. I am asking you to look past it to what folded arms actually buy.\n\nA quarrel like this does not solve itself, because each house is right to keep grabbing. The very thing that makes the fight ruinous is the thing that keeps it going: while any rival still reaches, the prudent move for every other is to reach faster. So the grabbing does not slow as the realm thins; it quickens. The common ground they all stand on, the granaries, the garrisons, the loyalty of the provinces, is eaten from beneath their feet, and it is eaten precisely by their own good sense.\n\nRemember the late Ilkhanate, where each amir grasped for private gain while the realm they all depended on fell to pieces around them. No outside enemy broke that house. The amirs did, each pulling his own way, until there was no realm left worth the pulling and they inherited a ruin. Their treasuries swelled for a season and bought them a kingdom of ash.\n\nYour walls will feel the cost first. Soldiers serve a paymaster, not a brawl, and when the great houses make war on one another the spears answer to whoever shouts loudest that morning. The people, who never asked to be the field this is fought across, will pay in grain and in blood. The coins you keep by staying out will not raise the men you lose. Standing back is not neutrality. It is choosing the ending where everyone loses together, and you among them."
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
        "explanation": "Picture two squares on a feast day. In the first, one bale of silk and one buyer who names whatever price he likes, for there is no other to outbid him. In the second, fifty bales and fifty buyers, with money-changers along the wall, brokers who know last week's price in three cities, and a porter for hire at any hour. A seller carries his silk to the second square though it lie a week farther off, because there he is paid more for less trouble. That is the whole secret of Shamakhi, Shah, and it is worth your understanding before you sign anything.\n\nA merchant is worth more where the other merchants already are. Each one who comes makes the place a little more worth coming to: another purse to bid against, another scale to weigh by, another warehouse to store a winter's stock until the price turns. The Genoese came, and the Venetians came after them because the Genoese were there, and the Russians came because all three could be bargained against at once. By the time an agent of the English Muscovy Company reached the town in the 1560s, no decree had drawn that crowd. The crowd had drawn itself. One buyer is bait for the next.\n\nSo I would bind every bale to break at Shamakhi. Forbid the village markets the silk trade and force the caravans to one floor, and you do not merely tax them passing through. You thicken the floor itself, and a thick floor pays better than ten thin ones ever could. The credit gathers there. The skilled men settle there. Your customs house counts coin in one room instead of chasing it through forty.\n\nKnow the price, for there is one. The villages that handled silk will hate the order, and the toll at the staple gate will be cursed by men who must now go a long way round to obey it. You buy a richer emporium with their grumbling. I think it a fair trade. I would still have a guard or two at that gate before the first season is out.",
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
        "explanation": "A decree can command where a caravan must stop. It cannot command that the stop be worth the merchant's while. Bind the silk to one town by your seal, Shah, and you will have built the form of a great market without its substance: the gate, the toll-house, the clerks, and underneath them the same trade you had before, only angrier.\n\nWeigh what the village squares do now. The silk comes down in many small streams and is sold near where it is grown, so the grower keeps the saving of the short road, and the small man with three bales is not lost among the great houses. Spread thin, yes. But spread is its own kind of mercy. No single toll-keeper holds the whole country's silk in his fist, and no single fire or feud or plague can stop the trade of a whole season. Many doors are harder to shut than one.\n\nGrant me the other side honestly. Shamakhi did become the silk emporium of the eastern Caucasus, drawing Genoese, Venetian and Russian buyers, until the English Muscovy Company's agent found his way there in the 1560s. The dense hub is the place where brokers gather and credit can be had, and scattered trade never grows those things; the coast stays a road that caravans pass along rather than a place they halt and unpack. I will not pretend the village market gives you a banking house.\n\nBut a market of that kind is grown, not conscripted. It came because merchants chose it, and a thing men choose they also defend and improve. Force them, and you teach them instead to evade you: to sell quietly short of the gate, to bribe the clerk, to curse your name on the road. The toll you imagine swelling your treasury will leak out the sides. Let the trade pool where it finds its own level. Lighten the road to Shamakhi instead of barring every other road, and you may yet draw the crowd that a decree can only pretend to summon.",
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
        "explanation": "Watch a deal that has no court behind it, Shah, and you will see where the money truly goes. The bale of silk changes hands in a moment, but the hours before it do not: the weighing and reweighing on scales each man suspects, the haggling that is half about price and half about the fear of being skinned, the guards hired against the partner as much as against the bandit. The silk is cheap beside the suspicion. Most of what a merchant pays is not for the goods at all; it is the price of dealing with a stranger he has no reason to trust.\n\nA court at the caravanserai does not lower the price of silk. It lowers that other price, the hidden one. Set a single sealed weight that all must use, and the quarrel over the scales dies before it is born. Write the contract down, and let a judge stand ready to enforce it, and a man from Tabriz may trade with a man from Astrakhan whom he will never see again, because both answer to the same seal. The trust no longer lives in the two men; it lives in your court, and so it need not be earned afresh each morning.\n\nThis is the gift of the great trading inns of the roads, the caravanserai and the funduq, which did more than shelter beasts and bales. They housed merchants under one roof, warehoused goods under guard, and ran courts to settle disputes on the spot under known rules, so a foreigner could enter, sell, and ride on without first making friends. That is what built the volume.\n\nThe treasury will spend to raise it, true. But count what it buys: every exchange that was not worth the trouble before, every cautious man who stayed home rather than risk the unknown, now comes through your gate. Reduce the friction and the wheel turns faster on the same axle. You are not taxing trade harder. You are making more of it happen, then taking your modest share of the larger sum.",
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
        "explanation": "Save the silver, Shah, and let merchants strike their own bargains as they always have. A trader knows his trade better than any judge you might appoint; he chooses his partners, sets his own weights, and guards his own bales. Why should your treasury pay for a roof over quarrels that the quarrelers can settle themselves? The market found its own order long before clerks were invited to improve it.\n\nYet hear what that thrift truly costs, for it is dearer than it looks. Where there is no shared rule, every deal carries an unseen tax: the tax of distrust. An honest man, lacking any court to appeal to, trades only with kin and with faces he already knows, because only with them is his word safe. The stranger arriving with good goods and a fair price is turned from the door, not because he is dishonest, but because there is no way to know that he is not. So commerce shrinks to the size of a family.\n\nThink of the inns the caravans actually relied upon, the caravanserai and the funduq, which housed merchants, stored their goods, and kept courts to settle disputes on the spot under known rules. Strip those courts away and the inn becomes a mere stable. The Tabrizi and the Astrakhani, who under a common seal would have dealt freely, now eye each other and walk apart. A hundred profitable exchanges that wanted only an enforceable promise simply never occur. No ledger records them, because they leave no trace; the loss is invisible, which is precisely why it is so easy to choose.\n\nYou will keep your coin and the people will feel the cold of it. The road grows quieter, the gate earns less, and the merchants who might have made Shirvan their crossroads make it elsewhere. Friction left in the wheel does not vanish for being unpaid. It merely grinds the trade away, slowly, where no one thinks to look.",
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
        "explanation": "Eldar smiles as he asks, and the smile is the trap. He is not pricing his camels or his guards; he is pricing your inability to do without him. When the silk moved by three roads, no carrier could lean on you, for you could always send the next bale by the next man. You let two of those roads wither because his was cheaper, and now there is one, and the one belongs to him. What he charges today is not the worth of carriage. It is the worth of your having nowhere else to turn, and that worth he will collect to the last dirham.\n\nThis is the lesson the Silk Road powers learned and relearned across the centuries: once a ruler's revenue depends wholly on a single route, the master of that route can throttle every other. He need not raise an army. He raises a tariff, and the bales that will not pay simply do not move, and the treasury that lives on their passage goes quiet. The carrier who can stop the silk owns a share of the throne he never had to conquer.\n\nThe cure is not to plead with him, for pleading confirms your weakness and invites the next demand. The cure is the rival you should have kept all along. Find a second caravan-master, a lesser house hungry for the trade, and fund his first hard seasons from your own purse. Yes, it costs you now, and his road will be rough before it is smooth. But the day a bale can again choose between two roads, Eldar's smile changes. He stops pricing your helplessness, because you are no longer helpless. Pay, then, to build the competitor you failed to build in easier years. It is the dearest lesson a Shah buys, and the only one that stays bought."
      },
      {
        "label": "Pay his price; you need the road.",
        "effects": {
          "treasury": -6,
          "people": 1
        },
        "explanation": "Refuse him and the silk stops. That is the whole of it, and a Shah must look at the whole of it before he reaches for his pride. The caravans are loaded, the season is short, the merchants of Baku have already promised the bales to Tabriz and beyond. Eldar knows the calendar as well as you do. He has chosen this week to ask precisely because there is no other road by which the silk can leave, and no time to cut one before the snows close the passes. Pay his price, and the trade flows, and the treasury, lighter than you would wish, is at least fed.\n\nLook honestly, though, at what you are paying for. You are paying because your own dependence has become the weapon in his hand. He did not forge it; you handed it to him, season by season, every time you let an alternative die because his road was a touch cheaper. The Silk Road powers learned this in their bones: when one route's master can throttle the rest, the ruler who lives off that route lives at the master's pleasure, and pays whatever pleasure asks.\n\nAnd here is the bitter arithmetic of it. Every season you pay, the dependence does not lessen; it deepens. The rival houses you might have nurtured grow fainter, the merchants forget there was ever another road, and Eldar learns that his asking works. So the next demand comes higher, and the one after higher still, each justified by the same logic that justifies this one. You buy a quiet year and sell a louder decade. Pay him now if you must save this season's silk. But do not tell yourself you have settled the matter. You have only agreed to the first installment of a debt that compounds in his favor for as long as the road is his alone."
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
        "explanation": "Ask any driver why he chose a road and he will not speak of love. He counts. He adds the toll at your gate to the days lost to bad track, to the bribe at the ford, to the chance of losing a bale to brigands, and he takes whichever sum comes out smaller. Your harbour is one number in his reckoning, no more. When Tabriz lowers its number, his arithmetic changes and his mules change with it, and no command of yours will alter a column he adds in his own head on a cold morning a hundred farsakhs away.\n\nSo you cannot order the caravans to stay. You can only make your number the smaller one. Shave the levy and mend the road, post riders to clear the passes, and you are not bowing to Tabriz; you are competing on the only ground the trade respects. The bale that would have turned east now finds your gate cheaper all told, and it comes.\n\nRemember what the silk routes have already done to men who thought a road was theirs by right. The trade once ran where it ran, then Tabriz, Bursa and later the Cape sea-route pulled it onto newer paths, and the old waystations that had grown fat on passage were left to wither with their toll-books still open and nothing crossing to fill them. Their lords had not lost a war. They had simply asked for more than the passage was worth, and the passage went elsewhere.\n\nThe cost of this is real and I will not hide it. The treasury feels every coin you do not take, and a road does not mend itself for nothing. But you are spending to keep a living stream, not hoarding the last drops of a dying one. A toll on ten crossings at a softer rate outweighs a proud toll on two. Match the rival's terms now, while the drivers still remember the way to your gate."
      },
      {
        "label": "Hold your tolls and trust your harbour.",
        "effects": {
          "treasury": 3,
          "people": -4
        },
        "explanation": "Eldar comes to you sore, Shah, and a sore man counsels his grievance before your good. He would have you fling open the treasury and grovel to every mule-driver who hears a rumour from the east. Before you empty the coffers, consider what you are being asked to chase.\n\nYou hold a harbour. Tabriz holds a promise. A road can be made safe one season and turn deadly the next when a new amir forgets to pay his guards; a toll cut to win custom can be raised again the moment the custom arrives. Lower yours to match every boast from a rival, and you teach the drivers a costly lesson: that your gate yields to pressure. Next year another hub undercuts the both of you, and Eldar returns asking you to cut deeper still. There is no floor to that descent but ruin.\n\nHold, then, and let your true advantages speak. A harbour is not a track that any prince may dig; it is a thing of coast and water that Tabriz, sitting inland, cannot conjure. Keep the toll firm, take the steady coin, and trust that men still need the sea.\n\nYet I would not have you mistake my counsel for comfort. Hear the warning inside it. A hub that rests on its old advantage while a rival undercuts it watches the trade divert by quiet degrees, never in a single season you might notice and answer. Your toll stays proud upon a stream that thins year by year, and the books read rich while the wharves stand idle. That is exactly how the great waystations died when the silk routes shifted to Tabriz, Bursa and later the Cape sea-route: not stormed, but slowly forgotten, wealthy on paper and empty in fact. Choose to hold, and you wager that your sea-gate is worth more than Eldar's drivers think. Keep your own eyes on the wharf, not the ledger, and be ready to move before pride becomes the thing that empties it."
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
