export const cards = [
  {
    id: "caspian-toll",
    speaker: "Vizier Farrukh",
    speakerType: "vizier",
    scenario:
      "Shah, the Caspian merchants beg for a lower toll at the Baku gate. They threaten to sail their bales to Derbent instead.",
    options: [
      {
        label: "Halve the toll. Let the silk flow.",
        effects: { treasury: -8, people: +6 },
        explanation:
          "The bazaars swell with Persian silk and Russian fur. Coin trickles in slower, but the people sing your name.",
      },
      {
        label: "Hold the toll. The treasury comes first.",
        effects: { treasury: +6, people: -5 },
        explanation:
          "Caravans grumble but still pass. Gold fills your vaults; whispers of greed fill the bazaar.",
      },
    ],
    tags: ["trade", "resource-economics"],
  },
  {
    id: "genoese-naphtha",
    speaker: "A Genoese merchant",
    speakerType: "one-off",
    scenario:
      "Grant my house the right to draw naphtha from Absheron. We pay in Venetian silver, up front. Your seeps are wasted on lamp-oil and ointment.",
    options: [
      {
        label: "Grant the concession.",
        effects: { treasury: 14, naphtha: -20, people: -4, faith: -3 },
        explanation:
          "Selling the concession is an intertemporal trade-off. You convert a non-renewable asset into one-time coin. The asset shrinks. The coin spends fast. Yaqut al-Hamawi, writing around 1224, valued the daily output of two Baku oil fields at 2,000 silver dirhams, roughly 800 grams of gold a day. That stream stops the moment the Genoese hold the rights.\n\nShirvan's actual practice was the opposite of this concession. The ruler held the wells and leased extraction to local contractors. A 1597 Arabic inscription at Baku documents the lease-back model, and the underlying logic is older: Caliph al-Mansur imposed the first recorded petroleum tax on Baku in the 750s, when he was funding the construction of Baghdad. The state stayed in the chain. Selling rights to a foreign merchant house breaks that chain.\n\nModern Azerbaijan built SOFAZ in 1999 to solve this problem on a much larger scale. Oil revenues from Azeri-Chirag-Gunashli and Shah Deniz flow into a sovereign fund that held $73.5 billion at the end of 2025. The fund converts finite extraction into permanent financial assets the state can draw on across generations. The Genoese deal is the medieval anti-SOFAZ: cash today, nothing left tomorrow.",
      },
      {
        label: "Refuse him.",
        effects: { treasury: 0, naphtha: 2, military: -4, faith: 4 },
        explanation:
          "Refusing is conservation under uncertainty. You keep the asset, forego the silver, and make a foreign trading house unhappy. The Qadi approves. The Genoese will probe again next year, perhaps with a smaller offer, perhaps with a Venetian galley alongside.\n\nThe historical record suggests Shirvanshah rulers tended toward this answer. Naphtha was the region's signature export. Al-Mas'udi called Shirvan 'bilad al-naffata,' the land of the naphtha fountain, and recorded Caspian shipping moving the white oil northward to Amol and the Volga mouth. Foreign powers wanted access; rulers extracted rent through controlled trade rather than concessions. Marco Polo's note that the seeps produced loads 'for many camels' is a measure of how visible the wealth was, and how much pressure there must have been to sell it cheap.\n\nAzerbaijan's modern structure runs on the same instinct. SOCAR holds state oil rights, and the production-sharing agreements signed in the 1990s with BP and the other majors keep the state as long-term owner while contractors take a defined share of output. The reflex that says 'don't sell the rights to a foreign house' is the institutional spine of how the country handles its oil today.",
      },
    ],
    tags: ["resources", "intertemporal", "naphtha"],
  },
  {
    id: "qadi-grain-cap",
    speaker: "Qadi Mahmud",
    speakerType: "qadi",
    scenario:
      "The harvest has failed and the bread-sellers are charging six dirhams a loaf. Cap the price at two, Shah. People are eating bark in the alleys behind the mosque.",
    options: [
      {
        label: "Cap the bread price at two dirhams.",
        effects: { people: 6, faith: 5, treasury: -6, military: -2 },
        explanation:
          "Capping the price below where supply meets demand creates a shortage. Quantity demanded jumps; quantity supplied falls because millers and bakers cannot cover their costs. The visible bread becomes cheap. The invisible bread becomes hoarded, sold at night, or sent over the border. Queues form. The cap relieves the symptom and produces a second sickness.\n\nThe Caucasus knows this pattern. Mongol-era chronicles from the 1230s and 1240s record famine across Azerbaijan and the wider Caucasus, partly from invasion and partly from drought confirmed by tree-ring data showing warm and dry summers from 1238 to 1241. The closest documented intervention is Ilkhan Gaykhatu's 1294 paper-money experiment in Tabriz, whose banknotes carried the promise that 'provisions become cheap, and rich and poor be equal.' Markets in Tabriz closed within two or three days. The minister who proposed the reform was murdered. The notes were withdrawn.\n\nModern Azerbaijan subsidises bread and maintains strategic grain reserves rather than imposing hard caps. The principle is the same: do not let people starve. The instrument is different because the state can absorb the cost through oil revenue. When oil fell in 2014 and 2015 and the manat devalued, that subsidy room shrank fast. The Qadi's request works only as long as the treasury can pay for the gap between two dirhams and six.",
      },
      {
        label: "Let the price rise. The market will clear.",
        effects: { people: -10, faith: -6, treasury: 2, military: 2 },
        explanation:
          "Letting the price rise rations supply to those who can pay and signals millers to release stocks. The market clears. The cost is paid by the poor, who eat less or not at all, and by your standing with the clergy. A bread riot in Shamakhi could end your reign faster than a Genoese galley.\n\nThe Ilkhanate ran on this logic by neglect rather than design. The moqata'a tax-farming system extracted lump-sum payments from local farmers regardless of harvest, and tax-farmers competed for contracts by promising more than the land could give. Encyclopaedia Iranica records that military expeditions to collect money and goods were common practice, which in effect meant repeated localised famines. The peasants were the residual claimants after the ruler, the Mongol princes, and the amirs took their share.\n\nThe modern parallel is uncomfortable. Azerbaijan imports a large share of its wheat, which means the country runs the medieval problem in reverse: not whether to cap a domestic price but whether to subsidise an imported one. When global wheat prices spike, the state has to choose between drawing down reserves, raising subsidy spending, or letting domestic prices climb. The 2022 wheat shock from the Russia-Ukraine war forced exactly that choice across the post-Soviet region.",
      },
    ],
    tags: ["famine", "price-controls", "welfare"],
  },
  {
    id: "vizier-caravanserai",
    speaker: "Vizier Farrukh",
    speakerType: "vizier",
    scenario:
      "The Baku-Salyan road has no shelter for two days' march. Caravans are robbed at night and slowed by weather. A caravanserai at Sangachal would pay for itself in trade. The merchants will not build it. They will use it.",
    options: [
      {
        label: "Build it from the royal treasury.",
        effects: { treasury: -12, people: 8, military: 3, faith: 2 },
        explanation:
          "A caravanserai on a major route is a public good. Every passing caravan benefits whether or not it contributed to construction. No individual merchant has a reason to fund the whole thing, because the next merchant will use it for free. Economists call this the free-rider problem, and it is the textbook case for state provision.\n\nThe Shirvanshahs followed this model closely. The Sangachal caravanserai you would be building has a real historical counterpart: an Arabic inscription on the actual building records 'the great sultan Halilullah ordered to build this imaret, may Allah perpetuate his reign, in the eight hundred and forty-third year,' which corresponds to 1439 or 1440 in the Christian calendar. Khalilullah I funded it directly from royal revenues. Wealthy merchants like Khwaja Haji Baba funded some caravanserais on their own routes, but the through-route infrastructure overwhelmingly bears the names of rulers, because only the ruler could solve the coordination problem.\n\nThe modern continuation is SOFAZ. The fund's mandate explicitly includes financing major social and infrastructure projects that benefit society, and a meaningful share of Azerbaijan's roads, schools, and energy infrastructure is built from oil rents recycled through the state. The Baku Tbilisi Ceyhan pipeline, the Trans-Caspian fibre cable, the Southern Gas Corridor: each is a public good no private actor would have built alone. The Vizier's argument and the modern argument are the same.",
      },
      {
        label: "Let the merchants organise themselves.",
        effects: { treasury: 2, people: -3, military: -1 },
        explanation:
          "Letting the merchants self-organise sounds reasonable and rarely works. Each merchant prefers to wait for someone else to build. Coordination fails. The caravanserai is not constructed, the road stays exposed, and the next decade of trade absorbs the cost quietly through slower journeys and lost cargo.\n\nMedieval Shirvan had no formal municipal tax system for infrastructure. When the ruler did not fund a project, it largely did not happen. The 22-hectare Icheri Sheher inner city, with its nearly 500 surviving historical monuments, was built across centuries by Shirvanshahs and the wealthy households around them, not by collective merchant assemblies. The 12th-century defensive walls, the Maiden Tower, the Palace complex begun under Ibrahim I and finished under Farrukh Yasar: all carry royal or aristocratic names because that was the only source of coordinated capital.\n\nThe absence of public investment shows up in the long run. Azerbaijan's heavy reliance on sovereign-financed infrastructure today reflects the same constraint at scale. Private capital builds factories and warehouses; pipelines and rail corridors get built when the state decides to build them. Refusing to fund the caravanserai is a defensible short-term choice. It is rarely a defensible long-term one.",
      },
    ],
    tags: ["public-goods", "infrastructure", "free-rider"],
  },
  {
    id: "general-debasement",
    speaker: "General Farrukhzad",
    speakerType: "general",
    scenario:
      "The garrison has not been paid in three months. I can hold them another six weeks. After that, they take what they want from the markets. Reduce the silver in the dinar. Pay them in light coin. They will not check.",
    options: [
      {
        label: "Debase the coin. Pay the garrison.",
        effects: { military: 8, treasury: 6, people: -7, faith: -3 },
        explanation:
          "Debasement is seigniorage, the profit a ruler captures by minting coin with less precious metal than its face value. In the short term it works. Soldiers get paid, the immediate crisis passes, and the treasury looks healthier on paper. In the medium term, market participants notice. Prices rise. Old coin is hoarded, new coin circulates, and Gresham's law does its work: bad money drives out good.\n\nThe late twelfth-century Caucasus lived through this directly. A regional silver crisis pushed the Shirvanshahs, the Eldiguzids of Azerbaijan, and the rulers of Derbent to issue copper coins as silver supplies thinned. A century later, Ilkhan Gaykhatu attempted the most extreme version: paper money modelled on Yuan banknotes, issued in Tabriz in 1294, carrying Chinese characters alongside Arabic. The market closed in days. The minister behind the scheme was killed. Debasement of metal coin is the slower-acting form of the same idea.\n\nAzerbaijan's modern parallel is not strict debasement but the 2015 manat devaluations. The currency was pegged to the dollar, oil revenues collapsed in 2014, and the central bank spent reserves trying to hold the peg. In February 2015 the manat dropped roughly 34 percent overnight. A second devaluation followed in December. Soldiers, pensioners, and civil servants absorbed the loss in their real purchasing power, exactly as the population would absorb the cost of your lighter dinars in the year after this decision.",
      },
      {
        label: "Raise a special tax instead.",
        effects: { treasury: 4, military: 2, people: -10, faith: -2 },
        explanation:
          "Raising a tax is the honest version of the same fiscal problem. You take real wealth from the population directly rather than indirectly through inflation. The cost is visible, the tax-collector is visible, and the resentment is visible. The economic distortion is smaller because the price system keeps working.\n\nThe Ilkhanate ran exactly this kind of system in Azerbaijan throughout the late thirteenth and early fourteenth centuries. The moqata'a tax-farming structure leased the right to collect revenue to private contractors who prepaid the state in silver and then extracted whatever they could from the peasants. The state got its money up front. The peasants paid the political cost. Tax-farm contracts ran for around three years, which gave the contractors every reason to squeeze hard within that window. Ann Lambton's Landlord and Peasant in Persia remains the standard reference on how brutal the system actually was in practice.\n\nModern Azerbaijan inherits a softer version of the same fiscal choice. Non-oil tax revenue is relatively low, and the state funds much of its activity from hydrocarbon receipts channelled through SOFAZ. Each manat that comes from oil is a manat that does not have to be raised from a citizen, which is politically convenient and structurally fragile. Your decision to tax directly is the medieval form of the modern question: how much of the fiscal burden should fall visibly on the population, and how much should be hidden inside something else.",
      },
    ],
    tags: ["currency", "monetary-policy", "debasement"],
  },
  {
    id: "envoy-tribute",
    speaker: "Envoy Toghan",
    speakerType: "envoy",
    scenario:
      "The Ilkhan demands his annual tribute. Twelve thousand silver dinars, four caravan-loads of silk, and twenty falcons. Pay it, Shirvanshah, or his cousin will be at your gates with three thousand horse before the rivers freeze.",
    options: [
      {
        label: "Pay the tribute in full.",
        effects: { treasury: -15, military: 4, people: -2, faith: -2 },
        explanation:
          "Tribute is a risk premium. You pay a known cost today to avoid an unknown but larger cost tomorrow, the same way a merchant pays a guard rather than face a ransom. The economic concept underneath is opportunity cost: every dinar in the Ilkhan's saddlebag is a dinar not spent on walls, soldiers, mosques, or grain reserves. The choice is rarely whether to pay, but how much, and at what point the premium becomes uneconomic.\n\nShirvan paid this way for decades. Ibrahim I recognised Timur as suzerain in 1386 and rode with him from 1399 to 1402. When Timur arrived in the Caucasus in 1394, Ibrahim brought gifts that included eight slaves, and the story goes that Mongol custom required gifts in nines; noticing the count was wrong, Ibrahim said 'I am myself the ninth.' The quip reportedly saved Shirvan from destruction. Later, after capture by Qara-Yusuf, Ibrahim paid a substantial ransom in coin to recover his freedom. Survival was a line item.\n\nThe modern equivalent is harder to draw because formal tribute has gone, but the underlying calculation appears wherever a smaller state pays a larger one for tolerance: transit fees, basing agreements, sovereign concessions. Azerbaijan's careful balancing between Russia, Iran, Turkey, and the West runs on a version of the same logic. Each policy choice is a payment of some kind, and the question is always whether the price of independence is higher or lower than the price of accommodation.",
      },
      {
        label: "Refuse. Spend the silver on the walls instead.",
        effects: { treasury: 2, military: 8, people: 3, faith: 4 },
        explanation:
          "Refusing converts a known cost into an unknown risk. The silver stays. The walls rise. The Ilkhan's cousin may or may not arrive at your gates. If he does not, you have made the better trade. If he does, you may have made the worse one. The economic concept is expected value under uncertainty: you are betting that the probability of invasion times the cost of invasion is lower than the certain cost of tribute.\n\nThe Shirvanshahs occasionally took this bet and survived. The state was a vassal more often than not, but local autonomy expanded whenever the suzerain weakened. After the Ilkhanate fragmented past 1335 the Shirvanshahs regained the right to mint their own coin, expanded their patronage of mosques and palaces, and rebuilt around the Baku complex begun under Ibrahim I. The window of independence was short but real, and it depended on accurate reading of when the larger power had stopped being able to enforce its claims.\n\nThe modern parallel runs through every small state's foreign policy. The question is when to pay and when to refuse, and the answer depends on a forecast of the other side's coherence. Azerbaijan's recovery of Karabakh in 2020 came partly from a correct reading of when Russia would not intervene decisively. The medieval Shirvanshah's refusal and the modern state's recovery share the same underlying calculation: pay only what you must, and only when the alternative is worse.",
      },
    ],
    tags: ["geopolitics", "opportunity-cost", "tribute"],
  },
];
