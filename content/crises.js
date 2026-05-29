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
    scenario: "Shah, the bread market in Shamakhi has burst into riot. Three bakers' shops burned. A merchant trampled. The crowd marches on the palace gate. We have an hour, perhaps two. Bread or steel — your order.",
    options: [
      {
        label: "Open the royal granaries. Distribute bread free.",
        effects: { treasury: -15, people: 8, military: -2, faith: 3 },
        explanation: "When the famine reached Cairo in the years after 1230, the rulers who kept their thrones were the ones who unbarred the granaries before the crowd reached the gate, not after. Damascus, Baghdad, the cities of Persia under the Ilkhans, the Caucasus in the worst Mongol years of that decade: the chronicle reads the same wherever a storehouse stood full. The grain came back with the next harvest. A reign cut short by a starving mob did not.\n\nWhat the wise ones understood, and never wrote down because they did not need to, is this. A measure of barley sitting in your storehouse is one measure among thousands, dead weight against a future that may never come. The same measure in the hands of a family that has not eaten in three days is the difference between order and a torch through your gate. The grain has not changed. Its worth has. You are not spending fifteen of treasury; you are buying back the hour the captain says you have left, at a price the dead cannot raise on you later.\n\nOpen the doors, then. The mercy is real and the people will remember it. So will the Vizier, who tonight will count what the shelves no longer hold, and remind you, conditionally and at length, that the next bad winter will find them bare.",
      },
      {
        label: "Send the garrison to disperse the crowd.",
        effects: { treasury: 0, people: -8, military: -4, faith: -4 },
        explanation: "Steel is the cheap order to give tonight and the dear one to have given. Send the garrison and the square empties; in the morning your clerks count the dead and the granary is exactly as full as it was. You have spent soldiers and faith and the people's last patience, and you have bought nothing but quiet, because the bellies in that crowd are no less empty than they were at dusk. Hunger is a cause. A scattered mob is only an interrupted effect.\n\nThe chronicles of the Ilkhanate, in their long unravelling through the fourteenth century, keep a grim ledger of this. A grain riot put down by the spear rarely closes the account. It reopens, a few weeks or a few months on, larger and with a longer memory, and the spear that worked the first time finds a crowd it cannot frighten twice. The princes who outlasted those years did use force, yes, but as a fence around the square, never as the answer inside it. The relief did the real work. The blade only held the line while the bread arrived.\n\nWithhold the bread and you have not solved the problem. You have postponed it and added your own cruelty to its terms. Whoever inherits the next riot inherits a harder one.",
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
    scenario: "A *fatwa* is being prepared, Shah. The clergy of Shamakhi and Baku call your reign contrary to the Sharia. Tomorrow at noon prayers the ruling will be read in every mosque in the kingdom. The Qadi is silent. Act now or your authority hollows by sundown.",
    options: [
      {
        label: "Publicly fund a great mosque. Make visible amends.",
        effects: { treasury: -12, people: 3, military: -2, faith: 8 },
        explanation: "A pious word costs nothing, so a pious word convinces nobody. Stone is different. When you empty a tenth of the treasury into a mosque the whole city can see rising, you have done a thing no impostor would do, because no impostor would pay so much to look devout. That is precisely why it is believed. The clergy's *fatwa* was built to say you neglect the faith; you answer not with a speech but with masons and money, and the charge curdles in their mouths before the noon prayer. Expensive, yes. But cheap defences are the ones nobody trusts.",
      },
      {
        label: "Confront the clergy directly. Threaten removal of those who issue the fatwa.",
        effects: { treasury: 0, people: -3, military: 2, faith: -10 },
        explanation: "You cannot threaten a man out of an authority you did not grant him. The clergy's standing rests on the faith of the people, not on your favour, so a threat does not unmake the *fatwa*. It feeds it. Now the ruling can say you menace God's servants, and every cleric who reads it has fresh proof. A few of the timid will fold. The rest will sharpen their language precisely to show they cannot be cowed, and the ruling that emerges is harsher than the one you tried to stop.\n\nThe Ilkhans learned this the slow way. Before Ghazan Khan turned to Islam in the 1290s, his predecessors handled the religious learned like hired clerks, shuffled and dismissed at whim. They got obedience on paper and contempt underneath, and when Ghazan finally needed the clergy to bless his reign, he found the well nearly dry and had to refill it from almost nothing. A ruler who frightens his holy men keeps their silence and loses their voice, which was the only thing of theirs worth having.\n\nThe same arithmetic runs through any modern state that tries to bridle its preachers by decree: quiet for a season, mistrust for a generation. Your threat today buys a *fatwa* by sundown all the same. The clerics you install in the dissenters' place will speak with thinner authority, and the throne will feel the difference for years. Should it please the Shah, the Vizier would observe only that a Qadi in better standing might have buried this matter before it ever reached the pulpits. A question for another day, perhaps.",
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
    scenario: "Shah, the great pool at Surakhani has caught. The fire spreads through the storage trenches. Three workers dead, the fire visible from the city walls. We can flood the seeps with seawater, killing the fire and the field for a generation, or fight it with sand and lose another night of men.",
    options: [
      {
        label: "Flood the seeps. End the fire now.",
        effects: { treasury: -4, people: 4, military: -2, naphtha: -25 },
        explanation: "When a Caspian platform catches today, the company does not argue with the flames. It shuts the well, eats the lost production, and rebuilds slower and safer afterward. Nobody calls that a defeat. They call it the price of not having a second funeral.\n\nYou face the same arithmetic with seawater. Pour it into the Surakhani pool and the fire dies at once, but the salt poisons the oil-bearing rock beneath, and the field you flood tonight will give you nothing for a generation. The surviving men will not go back to ground they have learned to fear, and you cannot blame them.\n\nThe seeps had fed Baku for centuries before your grandfather was born; a learned traveller passing through reckoned their daily yield in the thousands of dirhams, all of it assuming the fires stayed in the lamps where they belonged. To kill the field is to surrender a fortune that took God an age to lay down. But a ruler who keeps a furnace lit to protect his revenue learns the difference between a loss and a catastrophe only after the catastrophe. Stop the proximate harm. The treasury will limp; the city will trust you next time the smoke rises.",
      },
      {
        label: "Fight the fire with sand. Save the field.",
        effects: { treasury: -8, people: -6, faith: -2, naphtha: -8 },
        explanation: "There is a carved stone at Baku, dated late in the sixteenth century, recording the terms under which a man might lease the oil-pits. It sets out the lessor's share, the duties owed, the rents collected. It is a careful document. It does not mention the men who go down into the pits, except as a cost the lessor must cover, the way he covers rope and lamp oil. They are an input, priced and replaced.\n\nThat is the older habit of the trade you are about to honour. The Caspian boatmen, the diggers in the Caucasus hills, the seep-workers here, all of them were spent by men who had quietly weighed a drowned crew against a salvaged cargo and chosen the cargo. Send your people back into the fire-ring with sand and most of the field survives. The naphtha keeps flowing, thinner than before but flowing. Some of the men do not come out, and their villages will remember the precise weight you placed on them, measured against barrels.\n\nThe field is saved. But the Qadi has read the same ledger you have, and his verdict is short: a man is not an ox, and the throne that prices him as one will answer for the difference.",
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
    scenario: "Shah, a confederation of Daghestani mountain chiefs has crossed the passes in force. They know exactly how full your vaults are. Three thousand horse and as many foot, marching on Shamakhi within the week. They come for the coin, not the kingdom.",
    options: [
      {
        label: "Pay them off. Save the kingdom the war.",
        effects: { treasury: -22, people: 4, military: 2, faith: -3 },
        explanation: "Notice what the ransom actually buys you: a smaller, certain loss in place of a larger, uncertain one. A sacked Shamakhi, granaries burned, your defenders in the dirt outside the walls. The chiefs are offering to sell you the absence of all that, and they have priced it shrewdly, because they have already counted your coin more accurately than your own clerks have. The fuller the vault, the higher the quote. You are not bargaining; you are being assessed.\n\nThis is the tax the rich city has always paid for being rich. When a Rus fleet struck the coast around 1030, Shirvanshah Manuchihr was obliged to ride out and meet it himself. A generation later the Turks of Kara-Tegin took Shamakhi and then Baku in turn, and the chroniclers are blunt about why: the raiders went where the silk and the oil and the salt were warehoused. Baku, the chronicler says, was a place upon which strangers always fixed their eyes. Wealth that outpaces its walls does not deter a raider. It schedules him.\n\nSo pay if you must, Shah. But understand you are not buying peace. You are buying one season, and teaching the next column of horsemen what your fear is worth by the dirham.",
      },
      {
        label: "Fight them. Empty the garrison and ride out.",
        effects: { treasury: -8, people: -6, military: -12, faith: 4 },
        explanation: "A small state surrounded by larger neighbours spends its whole life deciding which fights to refuse and which to make unmissable. The lesson is old, and the western passes taught it to your house long before anyone drew the modern borders.\n\nWhat battle defends is not the treasury but the rumour about the treasury. Pay the chiefs and the story that travels back over the mountains is that Shamakhi flinches and Shamakhi can be milked. Break them in the field and the story is that the road to your gates is paid for in corpses. The trouble is that the field is theirs to choose. Manuchihr met the Rus near Baku around 1030 and won; in 1066 the Turks of Kara-Tegin took both Shamakhi and Baku before they could be dislodged, and it cost a generation to rebuild what burned. Your house learned the answer in stone rather than in open battle. The walls of the inner city stand a man's height above three men, thick enough to swallow a battering ram, because a mountain confederation can gather in the passes faster than any garrison can ride to meet it. The wall does not need to win the war. It needs only to make this column conclude that the next valley is softer.\n\nRiding out to settle it cleanly is the honourable instinct. It is also exactly the shape of fight your ancestors lost. The General will not argue the principle with you. He will simply check his girth-straps and wait to see whether you mean to give him a wall to hold or a gamble to lose.",
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
    scenario: "Shah, the vaults are bare and the merchant houses are calling in what we owe them. The garrison's pay and the grain contracts both fall due this week, and I have counted the coin three times hoping I miscounted. We cannot meet them.",
    options: [
      {
        label: "Levy an emergency tax on the city.",
        effects: { treasury: 10, people: -8, faith: -3 },
        explanation: "An emergency levy is the fastest silver a throne can raise, because you are not earning it but seizing it: the bazaar's coin is already minted, already in the city, and a decree can have it in the vault by Friday. That speed is the whole appeal. It is also the whole danger. A tax raised in a week is judged in a week, and the dyer who pays it does not weigh your garrison's wages against his own; he weighs the loaf he can no longer buy. The clergy will call it confiscation dressed as duty, and they will not be entirely wrong. You will have your silver. You will have a city that remembers exactly how it was taken.",
      },
      {
        label: "Sell crown lands and offices.",
        effects: { treasury: 8, military: -5, faith: -2 },
        explanation: "Selling crown lands and offices fills the vault the way burning your furniture warms the room. The fire is real. So is the missing chair next winter. Every village and toll-post you sell off was a stream of revenue that ran to the throne each harvest; trade it for one lump of silver now and you have eaten next year's income, and the year after that, to settle this week's debts.\n\nThe Ilkhans did precisely this as their treasuries thinned. They sold the right to collect a province's taxes to whoever paid most up front, and the buyer then rode out to wring that price back from the peasants with interest. The crown got its coin. It also lost any say over how Fars or Azerbaijan was governed, because the man holding the contract answered to his own ledger, not to Tabriz. By the time Ghazan Khan tried to reclaim that authority around the year 1300, much of it had been signed away to men who had no intention of giving it back. An office sold is an officer who is now yours in name and his own in fact. Sell enough of them and you keep the title of Shah while others quietly keep the kingdom.",
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
    scenario: "Shah, the western garrison is bones and rumor — fewer swords than you have fingers, and the passes above Şamaxı stand open to the sky. The raiders smell snowmelt and a soft border, and I cannot promise you one gate held past the first hard ride.",
    options: [
      {
        label: "Hire foreign mercenaries on credit.",
        effects: { treasury: -12, military: 10, faith: -2 },
        explanation: "An army takes a generation to raise and a season to buy. That is the whole bargain you are weighing. The Qipchaq lances wintering near Darband, the Gilani crossbowmen, the loose companies that drift down from the Ilkhan's broken musters — these men exist already, drilled and blooded, and they will ride for you within the month. You are not making soldiers. You are renting them.\n\nWhat you cannot pay in silver you will pay in promises, and a promise of silver is a debt with a sword standing over it. The Genoese factor who fronts their wages owns a lien on next year's customs before next year arrives, and the captains read your treasury better than your own steward does. So long as the coin flows they are the finest wall on the frontier. Let one pay-train run late in the mountain passes and that same wall turns inward, billets itself on the towns it was hired to shield, and sells its loyalty to whoever counts faster.\n\nTahmina would put it plainly: you have not closed the gap in the garrison, you have moved it onto the ledger, where it draws interest. The men are real. The bill comes due in spring, and it does not negotiate.",
      },
      {
        label: "Conscript the peasantry into a levy.",
        effects: { treasury: -2, people: -8, military: 8 },
        explanation: "Ring the village bells and you will have a thousand spears by the new moon, because every man between plow and grave is suddenly a soldier whether he consents or not. The bodies are cheap and immediate. The cost is hidden in the calendar: you are pulling them off the land at sowing, so the levy that saves the pass this spring starves the valley by autumn. They will hold the wall while their fields go to weed, and they will not forget who emptied their houses. You buy time against the harvest, and the harvest always collects.",
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
    scenario: "Shah, the seeps are nearly dry. The lamps of Baku gutter at dusk, the fire-temple flames have sunk to a finger's height, and the customs books that the naphtha trade once filled now show blank columns. The carriers are idle on the wharf and the priests are already weeping. Tell us where to turn before the city goes dark.",
    options: [
      {
        label: "Buy oil shipped across the Caspian.",
        effects: { treasury: -10, naphtha: 8 },
        explanation: "In a good year the boats came the other way. Naphtha left Baku in sealed jars for the Volga mouth, for Gilan and Tabaristan, and the captains came home with grain and timber and a fat manifest. Now the manifest runs backwards. You send the same hulls across the same water to buy the very thing your shore used to sell, and every trader on the far coast knows why your agent is standing on their dock.\n\nThat is the whole of your difficulty. A buyer who cannot wait pays the seller's price, not his own, and a buyer who is known to be desperate pays a price chosen by the seller's appetite. The Gilan merchants will read your empty seeps as plainly as a tide table. The oil itself is cheap to them; what they sell you is your haste, and they will charge for it by the jar.\n\nSo the lamps will burn again and the fire-temple will recover its flame, and the treasury will pay for both at a rate it would have spat at a year ago. You are not buying naphtha. You are renting your way through the gap until the seeps recover or you find a second source to play against the first.\n\nTahmina ran her finger down the import tally and did not look up. \"Buy, then. But buy from two coasts, my Shah, never one, or the price they quote you next season will be the price of knowing you have nowhere else to go.\"",
      },
      {
        label: "Ration the last of the seeps.",
        effects: { people: -5, faith: -2, naphtha: 6 },
        explanation: "Lock the seeps and dole the last of it by measure, and you have chosen to spread one shortage thinly rather than spend your way out of it. The oil that remains is parceled to the watch-fires, the garrison, the harbor beacons, whatever the throne cannot let go dark. Everything below that line is simply told to do without. The lamps in the poorer quarters stay cold, the priests guard a flame the size of a candle and call it ruin, and the people learn that the cellar is empty by being handed nothing from it. You keep a reserve and pay for it in shivering and resentment, which is a real price even though no coin leaves the vault.",
      },
    ],
    tags: ["crisis", "naphtha-low", "shortage"],
  },
];
