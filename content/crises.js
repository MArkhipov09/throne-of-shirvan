// Crisis cards fire when a stat first crosses an extreme threshold
// (below 15 or above 85) in a reign. Each entry matches the same shape as a
// normal card with two extra fields:
//
//   triggerStat:      one of "treasury" | "people" | "military" | "faith" | "naphtha"
//   triggerDirection: "low" (stat < 15) | "high" (stat > 85)
//
// A stat can fire at most one crisis per reign. Crises interrupt the normal
// card flow and do not increment the cardsPlayed counter.

export const crises = [
  {
    id: "crisis-bread-riot",
    speaker: "A captain of the city watch",
    speakerType: "one-off",
    triggerStat: "people",
    triggerDirection: "low",
    concept: "Emergency transfers",
    scenario: "Shah, the bread market in Shamakhi has burst into riot. Three bakers' shops burned. A merchant trampled. The crowd marches on the palace gate. We have an hour, perhaps two. Bread or steel — your order.",
    options: [
      {
        label: "Open the royal granaries. Distribute bread free.",
        effects: { treasury: -15, people: 8, military: -2, faith: 3 },
        explanation: "Free bread to a starving crowd is an emergency transfer, and the history of famine turns on who made it in time. When hunger reached Cairo in the years after 1230, the rulers who kept their thrones were the ones who unbarred the granaries before the crowd reached the gate; the chronicle reads the same in Damascus, in Baghdad, in the Caucasus through the worst Mongol years. The grain came back with the next harvest. A reign cut short by a mob did not.\n\nA measure of barley in your storehouse is dead weight against a future that may never come. The same measure in the hands of a family three days hungry is the difference between order and a torch. You are not spending fifteen of treasury; you are buying back the hour the captain says you have left. The Vizier will count the empty shelves tonight and remind you, at length, that the next bad winter will find them bare.",
      },
      {
        label: "Send the garrison to disperse the crowd.",
        effects: { treasury: 0, people: -8, military: -4, faith: -4 },
        explanation: "Send the garrison and the square empties. In the morning the granary is exactly as full as it was, and so are the bellies in the crowd, because a scattered mob is an interrupted effect, not a solved cause. You have spent soldiers, faith, and the people's last patience to buy quiet, and the quiet is rented.\n\nThe Ilkhanate's long unravelling keeps a grim record of grain riots put down by the spear: they reopen, weeks or months later, larger and with a longer memory, and the spear that worked the first time meets a crowd it cannot frighten twice. The princes who outlasted those years used force as a fence around the square, never as the answer inside it. The bread did the real work. Withhold it and you have postponed the riot and added your cruelty to its terms; whoever inherits the next one inherits a harder one.",
      },
    ],
    tags: ["crisis", "bread-riot", "famine"],
  },
  {
    id: "crisis-fatwa",
    speaker: "An envoy from the great mosque",
    speakerType: "one-off",
    triggerStat: "faith",
    triggerDirection: "low",
    concept: "Costly signalling",
    scenario: "A *fatwa* is being prepared, Shah. The clergy of Shamakhi and Baku call your reign contrary to the Sharia. Tomorrow at noon prayers the ruling will be read in every mosque in the kingdom. The Qadi is silent. Act now or your authority hollows by sundown.",
    options: [
      {
        label: "Publicly fund a great mosque. Make visible amends.",
        effects: { treasury: -12, people: 3, military: -2, faith: 8 },
        explanation: "A pious word costs nothing, so a pious word convinces nobody. Stone is different. Empty a tenth of the treasury into a mosque the whole city can watch rising and you do a thing no impostor would do, because no impostor pays that much to look devout. Costly signalling means the expense is the proof.\n\nThe fatwa was built to say you neglect the faith. Answer with masons and money and the charge curdles before noon prayers. Expensive, yes. The cheap defences are the ones nobody believes.",
      },
      {
        label: "Confront the clergy directly. Threaten removal of those who issue the fatwa.",
        effects: { treasury: 0, people: -3, military: 2, faith: -10 },
        explanation: "A threat is the cheapest signal there is, and that is why it proves nothing except fear. The clergy's standing rests on the faithful, not on your favour, so menacing them does not unmake the fatwa; it feeds it, and every cleric who reads the ruling now has fresh evidence that the Shah frightens God's servants. The timid fold. The rest sharpen their language precisely to show they cannot be cowed.\n\nThe Ilkhans handled their religious scholars like hired clerks before Ghazan, shuffled and dismissed at whim. They got obedience on paper and contempt underneath, and when Ghazan finally needed the clergy to bless his rule he found the well nearly dry. Your threat buys the fatwa by sundown anyway, plus successors who speak with borrowed authority the faithful discount on arrival. The Vizier would note, another day, that a Qadi in better standing might have buried this before it reached the pulpits.",
      },
    ],
    tags: ["crisis", "fatwa", "religious-conflict"],
  },
  {
    id: "crisis-naphtha-fire",
    speaker: "An overseer of the Absheron seeps",
    speakerType: "one-off",
    triggerStat: "naphtha",
    triggerDirection: "high",
    concept: "Risk & safety trade-offs",
    scenario: "Shah, the great pool at Surakhani has caught. The fire spreads through the storage trenches. Three workers dead, the fire visible from the city walls. We can flood the seeps with seawater, killing the fire and the field for a generation, or fight it with sand and lose another night of men.",
    options: [
      {
        label: "Flood the seeps. End the fire now.",
        effects: { treasury: -4, people: 4, military: -2, naphtha: -25 },
        explanation: "When a Caspian platform catches fire today, the company does not argue with the flames. It shuts the well, eats the lost production, and rebuilds slower and safer, and nobody calls it defeat; that is what a risk-and-safety trade-off looks like when it is settled in advance.\n\nSeawater settles yours the same way, at a price. The fire dies at once; the salt poisons the oil-bearing ground, and the field gives nothing for a generation. The seeps had fed Baku for centuries, a daily yield a travelling scholar once reckoned in thousands of dirhams, and you are surrendering that to end three deaths from becoming thirty. The treasury will limp. The city will trust you the next time smoke rises, which is a form of revenue no toll collects.",
      },
      {
        label: "Fight the fire with sand. Save the field.",
        effects: { treasury: -8, people: -6, faith: -2, naphtha: -8 },
        explanation: "There is a carved stone at Baku, dated late in the sixteenth century, recording the terms for leasing the oil-pits: the lessor's share, the duties owed, the rents. It is a careful document, and it mentions the men who go down into the pits only as a cost, priced with the rope and the lamp oil.\n\nSand instead of seawater honours that older reckoning. Most of the field survives, the naphtha keeps flowing, and some of the men do not come out, and their villages will remember the exact weight you placed on them, measured against barrels. The Qadi's verdict will be short: a man is not an ox, and a throne that prices him as one answers for the difference.",
      },
    ],
    tags: ["crisis", "naphtha-fire", "industrial"],
  },
  {
    id: "crisis-treasury-raid",
    speaker: "A breathless rider from the western watchtowers",
    speakerType: "one-off",
    triggerStat: "treasury",
    triggerDirection: "high",
    concept: "Risk transfer",
    scenario: "Shah, a confederation of Daghestani mountain chiefs has crossed the passes in force. They know exactly how full your vaults are. Three thousand horse and as many foot, marching on Shamakhi within the week. They come for the coin, not the kingdom.",
    options: [
      {
        label: "Pay them off. Save the kingdom the war.",
        effects: { treasury: -22, people: 4, military: 2, faith: -3 },
        explanation: "The chiefs have counted your coin more accurately than your clerks have, and they are not raiding blind; they are quoting a price. What they sell is the absence of a sacked Shamakhi, and paying it is risk transfer: a smaller certain loss taken to be spared a larger uncertain one. You are not bargaining. You are being assessed.\n\nRich, underdefended cities have always paid this tax. When a Rus fleet struck the coast around 1030, Shirvanshah Manuchihr had to ride out and meet it himself; a generation later Kara-Tegin's Turks took Shamakhi and then Baku, and the chroniclers say plainly that the raiders went where the silk and oil and salt were warehoused. So pay if you must, and know what you bought: one season, and a lesson for the next column about what your fear is worth by the dirham.",
      },
      {
        label: "Fight them. Empty the garrison and ride out.",
        effects: { treasury: -8, people: -6, military: -12, faith: 4 },
        explanation: "Refuse the ransom and you keep the risk on your own shoulders and answer it with steel. What the battle defends is not the treasury but the rumour about the treasury: pay, and the story that crosses the mountains is that Shamakhi can be milked; break them, and the story is that the road to your gates is paid in corpses.\n\nThe trouble is that the field is theirs to choose. Manuchihr beat the Rus near Baku around 1030; in 1066 Kara-Tegin's Turks took Shamakhi and Baku both, and rebuilding took a generation. Your house drew its conclusion in stone. The inner city's walls stand three men high and thick enough to swallow a ram because a mountain confederation gathers faster than any garrison rides. The wall does not need to win a war, only to convince this column that the next valley is softer. The General will not argue principle. He is checking whether you mean to give him a wall to hold or a gamble to lose.",
      },
    ],
    tags: ["crisis", "raid", "treasury-high"],
  },
  {
    id: "crisis-treasury-low",
    speaker: "The keeper of the royal accounts",
    speakerType: "one-off",
    triggerStat: "treasury",
    triggerDirection: "low",
    concept: "Emergency finance",
    scenario: "Shah, the vaults are bare and the merchant houses are calling in what we owe them. The garrison's pay and the grain contracts both fall due this week, and I have counted the coin three times hoping I miscounted. We cannot meet them.",
    options: [
      {
        label: "Levy an emergency tax on the city.",
        effects: { treasury: 10, people: -8, faith: -3 },
        explanation: "The fastest silver a throne can raise is silver it seizes, and with the garrison's pay and the grain contracts due this week, speed is what is left. The bazaar's coin is already minted and already inside the walls; a decree can have it in the vault by Friday. That is emergency finance at its bluntest, and it is judged as fast as it is collected. The dyer who pays does not weigh your garrison's wages against his own; he weighs the loaf he can no longer buy, and the clergy will call the levy confiscation dressed as duty without being entirely wrong.\n\nYou will have the silver, and a city that remembers exactly how it was taken.",
      },
      {
        label: "Sell crown lands and offices.",
        effects: { treasury: 8, military: -5, faith: -2 },
        explanation: "Selling crown lands and offices fills the vault the way burning furniture warms the room: the fire is real, and so is the missing chair next winter. Every village and toll-post sold was a stream of revenue that ran to the throne each harvest. Traded for one lump of silver, it has eaten next year's income to settle this week's debts.\n\nThe Ilkhans did this as their treasuries thinned, selling the right to collect a province's taxes to whoever paid most up front, and the buyer wrung his price back out of the peasants with interest. The crown got its coin and lost its say; by the time Ghazan tried to reclaim the authority around 1300, much of it had been signed away to men with no intention of returning it. An office sold is an officer who is yours in name and his own in fact. Sell enough and you keep the title of Shah while others keep the kingdom.",
      },
    ],
    tags: ["crisis", "fiscal", "treasury-low"],
  },
  {
    id: "crisis-military-low",
    speaker: "A breathless officer of the watch",
    speakerType: "one-off",
    triggerStat: "military",
    triggerDirection: "low",
    concept: "Mobilisation costs",
    scenario: "Shah, the western garrison is bones and rumor — fewer swords than you have fingers, and the passes above Şamaxı stand open to the sky. The raiders smell snowmelt and a soft border, and I cannot promise you one gate held past the first hard ride.",
    options: [
      {
        label: "Hire foreign mercenaries on credit.",
        effects: { treasury: -12, military: 10, faith: -2 },
        explanation: "An army takes a generation to raise and a season to buy, and you have neither generation nor season; that gap is what mobilisation costs mean. The Qipchaq lances wintering near Darband, the Gilani crossbowmen, the companies drifting loose from the Ilkhan's broken musters exist already, drilled and blooded, and they will ride within the month. You are not making soldiers. You are renting them.\n\nWhat you cannot pay in silver you pay in promises, and a promise of silver is a debt with a sword standing over it. The Genoese factor fronting the wages holds a lien on next year's customs, and the captains read your treasury better than your steward does. While the coin flows they are the finest wall on the frontier. Let one pay-train run late in the passes and the wall turns inward, billets itself on the towns it was hired to shield, and sells its loyalty to whoever counts faster. The bill comes due in spring, and it does not negotiate.",
      },
      {
        label: "Conscript the peasantry into a levy.",
        effects: { treasury: -2, people: -8, military: 8 },
        explanation: "Ring the village bells and you have a thousand spears by the new moon. The bodies are cheap and they come at once; that is the easy half of mobilisation. The other half hides in the calendar. You are pulling these men off the land at sowing, so the levy that holds the pass this spring starves the valley by autumn. The true cost is not the spears but the season they cost you.\n\nThey will man the wall while their fields go to weed, and they will not forget whose order emptied their houses. You are buying time against the harvest, and the harvest collects.",
      },
    ],
    tags: ["crisis", "military-low", "mobilisation"],
  },
  {
    id: "crisis-naphtha-low",
    speaker: "An overseer of the failing seeps",
    speakerType: "one-off",
    triggerStat: "naphtha",
    triggerDirection: "low",
    concept: "Supply shocks",
    scenario: "Shah, the seeps are nearly dry. The lamps of Baku gutter at dusk, the fire-temple flames have sunk to a finger's height, and the customs books that the naphtha trade once filled now show blank columns. The carriers are idle on the wharf and the priests are already weeping. Tell us where to turn before the city goes dark.",
    options: [
      {
        label: "Buy oil shipped across the Caspian.",
        effects: { treasury: -10, naphtha: 8 },
        explanation: "In a good year the boats went the other way: sealed jars out of Baku for the Volga mouth, Gilan, and Tabaristan, grain and timber home. A supply shock flips the route end for end, and now your agent stands on the far dock as a buyer everyone can read. A buyer who cannot wait pays the seller's price, and the Gilan merchants will read your empty seeps as plainly as a tide table. The oil is cheap to them. What they are selling you is your haste, by the jar.\n\nThe lamps will burn again and the treasury will pay a rate it would have spat at a year ago. You are renting your way through the gap. Tahmina ran her finger down the tally and did not look up: buy from two coasts, never one, or next season's quote will be the price of having nowhere else to go.",
      },
      {
        label: "Ration the last of the seeps.",
        effects: { people: -5, faith: -2, naphtha: 6 },
        explanation: "The oil is simply gone, and rationing only chooses who feels its absence. Lock the seeps and parcel the last of it by measure: the watch-fires, the garrison, the harbour beacons, whatever the throne cannot let go dark. Everything below that line does without. The lamps in the poorer quarters stay cold, the priests guard a flame the size of a candle and call it ruin, and the people learn the cellar is empty by being handed nothing from it.\n\nNo coin leaves the vault, and the price is paid anyway, in shivering and in resentment. A supply shock spreads through a city one way or another. This way, you decide the order in which it arrives.",
      },
    ],
    tags: ["crisis", "naphtha-low", "shortage"],
  },
];
