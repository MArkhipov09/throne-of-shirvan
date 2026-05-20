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
  {
    id: "village-mulberry",
    speaker: "A village headman from the Shamakhi hinterland",
    speakerType: "one-off",
    scenario:
      "Shah, half my fields are barley and half are mulberry. The Genoese pay well for silk and my neighbours have already torn out their grain. Should my village commit fully to the worm?",
    options: [
      {
        label: "Order them to specialise in silk.",
        effects: { treasury: 9, people: -6, military: -2, faith: -1 },
        explanation:
          "Specialisation by comparative advantage means producing what you do best and trading for the rest. Shamakhi's land, climate, and accumulated craft skill made it one of the great silk-producing regions of the medieval world. Marco Polo recorded the silk of Shirvan by name. Centuries later Adam Olearius estimated Azerbaijan's annual silk-cloth output at around 2.5 million kilograms, with Shaki alone supporting 14,000 households of silkworm breeders producing roughly 240 tons of raw silk a year. The wealth from concentrating on silk was real and visible.\n\nThe cost is dependence. Once the village stops growing barley, it eats only if the silk trade keeps moving. A bad year in Italy, a Mongol campaign closing the Caspian, a Genoese fleet redirected to the Black Sea, and the village has silver but no bread. David Ricardo's classic argument for comparative advantage assumes the trade routes stay open. Medieval Caspian routes closed often. Timur's 1386 campaign and the running war between the Ilkhanate's successor states are the obvious examples in your own lifetime.\n\nThe pattern repeats today. Azerbaijan's economy specialised heavily in hydrocarbons after the 1994 Contract of the Century, and the country became wealthy faster than any non-monarchical state in its region. The 2014–15 oil price collapse exposed the other side of the trade: 34 per cent currency devaluation in a single February, real wages compressed sharply, and a national debate about diversification that is still running. The headman is asking you to make his village commit to the bet.",
      },
      {
        label: "Tell them to keep both crops.",
        effects: { treasury: -2, people: 5, military: 1, faith: 2 },
        explanation:
          "Keeping both crops sacrifices gains from trade in exchange for resilience. The village earns less in good years and survives in bad ones. The economic concept is risk diversification, which is what specialisation argues against and what every peasant household with a memory of famine actually practises.\n\nThe records of the period support the cautious choice in subtle ways. Even at the height of the silk trade, the surrounding countryside continued to grow grain, and the Shamakhi Khanate later structured its tax demands around silk and animals and grain simultaneously — one-tenth of silk produced, two animals per hundred from nomads, plus cheese and honey. The state knew that no single crop fed the city, and the peasants knew it more sharply still. The Mongol-era famines of the 1230s and 1240s were closest in living memory to the villages that had stopped growing their own food.\n\nThe modern reading is the diversification agenda that every Azerbaijani policy document since 2015 mentions. SOFAZ exists in part to translate concentrated hydrocarbon income into a broader asset base. The state ICT zones, the Alat free trade zone, and the Middle Corridor transit investment are all attempts to do at national scale what your village headman is doing at the level of his own fields: hold more than one crop. The argument against is that you give up the very gains that made the country wealthy. The argument for is that you don't bet the village on a price you can't control.",
      },
    ],
    tags: ["specialisation", "comparative-advantage", "silk"],
  },
  {
    id: "tahmina-monopoly",
    speaker: "Tahmina of Shamakhi",
    speakerType: "tahmina",
    scenario:
      "Grant my house exclusive rights to ship silk on the Caspian for the next ten years. I pay fifteen thousand dinars now, the treasury knows where it stands, and the other merchants stop fighting me at every port.",
    options: [
      {
        label: "Grant her the monopoly.",
        effects: { treasury: 15, people: -8, faith: -3, military: 2 },
        explanation:
          "A monopoly franchise raises a fixed sum for the state and a much larger sum for the holder. The price of silk shipping rises because Tahmina sets it without competition. Buyers in Tabriz, Astrakhan, and Genoa pay more. Smaller Shamakhi houses are squeezed out of long-distance trade and either submit to Tahmina or fold. The classical economic critique runs from Adam Smith back to medieval Islamic jurists who debated *ihtikar*, the hoarding of necessary goods for monopoly profit. The state takes its cut up front and effectively privatises the rest of the surplus.\n\nThe documented practice in Shirvan went the other way. Ambrogio Contarini, the Venetian envoy who travelled to the region in the 1470s, recorded that merchants from Genoa and Venice came to Shamakhi to buy silk — plural, competing — and the Genoese ran colonies on the Caspian shore rather than acquiring exclusive carriage rights. No exclusive grant of Caspian silk shipping shows up in the surviving sources. The Shirvanshahs preferred the larger tax base of competitive trade over the short-term gain of a single concession.\n\nThe modern analogue is the regulation of natural monopolies and the difficulty of holding the line on competition policy in resource-rich states. SOCAR's dominance in Azerbaijani energy and the various contested concessions in telecommunications and ports recreate the medieval question in modern form: when the state grants exclusive rights, does it capture rent or surrender it? The answer in both centuries is usually that the state captures less than it expected and the holder more.",
      },
      {
        label: "Refuse. Keep the trade open to all houses.",
        effects: { treasury: -2, people: 6, faith: 3, military: -1 },
        explanation:
          "Refusing keeps the market competitive and the long-run tax base broad. You forego Tahmina's fifteen thousand dinars and gain the continued business of every other Shamakhi house that would have been squeezed by her monopoly. Smaller merchants pay smaller taxes individually but collectively dwarf any single concession.\n\nThis is how Shamakhi actually appears in the medieval sources. Giosafat Barbaro, the Venetian who visited in 1476, described it as a city of four to five thousand houses producing silk, cotton, and other goods — a description of urban density and craft diversity that depends on many active producers, not a single house. When competing merchant houses fund competing caravans, the city eats. When a single house monopolises shipping, the city's traders become its employees. The Shirvanshah revenue base shifted with that distinction even where the formal coin take did not.\n\nIn modern Azerbaijan, the practical equivalent runs through the country's gradual opening of state-dominated sectors to competition, slowly and unevenly. The telecoms reforms, the Alat free zone framework, and the periodic SME promotion programmes all aim at the same thing: not letting one house, or one ministry, capture rents that would otherwise spread across many smaller producers. The Qadi quietly approves of your refusal because he reads it as a defence of the smaller traders. The general is less impressed: the fifteen thousand would have paid a wall.",
      },
    ],
    tags: ["monopoly", "rent-seeking", "silk"],
  },
  {
    id: "tanners-water",
    speaker: "A delegation of bakers and dyers",
    speakerType: "one-off",
    scenario:
      "The tanners' lane fouls the canal that feeds our ovens and our dye-vats. The fish are dead from the bridge to the eastern wall. Move them or restrict them, Shah. Or our trades end and theirs continues.",
    options: [
      {
        label: "Move the tanners to outside the walls.",
        effects: { treasury: -6, people: 7, faith: 3, military: -1 },
        explanation:
          "Pollution from one trade that damages another is a textbook negative externality. The tanners' costs do not include the harm they impose on the bakers, the dyers, and the canal. Without state action the tanners do too much tanning, because the market price of leather does not reflect its full social cost. Forcing the tanners to relocate is a form of regulation that internalises the externality by shifting it onto the producers who caused it. The cost is real: the tanners face higher transport costs, water access becomes harder, and some will close.\n\nMedieval Islamic cities thought about this problem more than is sometimes recognised. Tanneries, dye-works, and other water-fouling crafts were commonly located outside city walls or downstream of residential quarters, and the *muhtasib* (market inspector) had explicit authority over nuisances of this kind. The sophisticated *qanat* systems of cities like Tabriz, Isfahan, and Yazd required active management of water rights, with *awqaf* (religious endowments) controlling shares and disputes routed through the Sharia courts. The institutional language was different but the economic logic was identical to a modern environmental ordinance.\n\nThe modern reading runs through Baku's mid-20th-century industrial expansion and the cleanup since. The Soviet-era oil and chemical works concentrated negative externalities at the coast and in the bay, and Azerbaijan inherited the bill. The 2010s sea wall and coastal regeneration projects, and the ongoing remediation of Sumgayit, are the current state's version of moving the tanners outside the walls. Each generation pays to undo the previous one's failure to price externalities properly.",
      },
      {
        label: "Leave them. Leather pays well, and the canal is wide.",
        effects: { treasury: 3, people: -7, faith: -4, naphtha: 0 },
        explanation:
          "Letting the externality stand is cheaper today and more expensive later. The tanners keep producing, the leather trade keeps paying, and the bakers and dyers absorb the cost in slower production, ruined dye-batches, and customers who stop coming to a foul-smelling quarter. The harm is real but invisible in the tax rolls. Economists call this an unpriced externality precisely because no transaction records the damage.\n\nThe long-run failure mode is documented across pre-industrial cities. When tanneries, slaughterhouses, and dye-works are left in residential cores, neighbouring trades atrophy or relocate, urban land values fall in the affected quarters, and the city slowly hollows around the polluting trade. The economist Ronald Coase argued in the 20th century that with clearly assigned property rights and low bargaining costs, the affected parties might negotiate a solution among themselves — the bakers might pay the tanners to move. In medieval Shamakhi the bargaining cost is too high and the property right too unclear for Coase's solution to work. The state ends up as the bargainer of last resort.\n\nThe modern analogue is industrial siting in Baku and Sumgayit through the 20th century. Soviet planners did not move the tanners; they built on top of them. The pollution legacy is now the state's bill, and the explicit policy of the post-2010 development zones has been to relocate heavy industry away from population centres before the externality is locked in. Letting the trade alone is rarely a permanent answer. It is a delay.",
      },
    ],
    tags: ["externality", "regulation", "urban"],
  },
  {
    id: "caspian-fishery",
    speaker: "Two village elders from the Caspian shore",
    speakerType: "one-off",
    scenario:
      "The sturgeon between our villages are vanishing. Each boat takes more, fearing the next boat takes more still. By next spring there will be no fish for either of us. Set a rule, Shah, or there is no fishery.",
    options: [
      {
        label: "Impose a closed season and quota.",
        effects: { treasury: -3, people: 8, faith: 2, military: 1 },
        explanation:
          "An unowned, freely accessible resource where each user benefits privately from taking more and the cost of depletion is shared is the classic tragedy of the commons. Garrett Hardin gave the pattern its modern name in 1968, but the economic logic was understood in medieval Islamic and European law alike: when no one owns the fishery, no one has the incentive to conserve it. State-imposed quotas and closed seasons restore the missing property right by making the rule a public one.\n\nThe Caspian sturgeon fishery is one of the longest-running cases of this problem in world economic history. Even by the early 20th century, before refrigeration and industrial trawling, Caspian fishermen were taking up to 540 tons of sturgeon a year, and the population pressure was already visible. The 1938 Iranian limits on rare fish capture, and the 1940 Soviet-Iranian agreement on fishing rights, were the first serious attempts to impose the closed-season-and-quota structure on the whole sea. They came too late. The wild beluga is now critically endangered, and most caviar production has moved to aquaculture.\n\nThe modern Azerbaijani version is the Caspian Sea Convention, signed by the five littoral states in 2018, which finally allocated sectoral rights after decades of dispute. Quota enforcement is still imperfect, and illegal sturgeon fishing remains a problem. But the conceptual frame is exactly what your decision establishes today: the state defines the right, and the fishery survives as long as the rule holds.",
      },
      {
        label: "Tell them to settle it among themselves.",
        effects: { treasury: 1, people: -8, military: -2, faith: -2 },
        explanation:
          "Telling the villages to settle it among themselves assumes they can bargain to an efficient outcome. Sometimes they can. In small communities with stable membership, repeat interaction, and the ability to punish defectors, common-pool resources are sometimes managed sustainably without state intervention. The economist Elinor Ostrom won a Nobel Prize for documenting exactly these cases. The trouble is that the necessary conditions are demanding: a closed group, shared norms, low monitoring costs, and an enforcement mechanism for cheaters.\n\nThe Caspian shore villages do not meet those conditions. The fish migrate across territorial waters. New boats arrive from up and down the coast. Astrakhan merchants buy whatever is landed and ask no questions, as the 1796 Dveryakin review of the Agsu river fishery records — Russian and Astrakhan buyers paid roughly 7,300 rubles a year for fish at that single site alone. The buyers' indifference to source breaks the local norm enforcement. The villages know who is overfishing, but they cannot punish a buyer two hundred miles away who pays for the catch regardless.\n\nThe modern parallel is the international fisheries problem in miniature. Wherever a resource crosses borders and no single authority has enforcement power, depletion accelerates. The North Atlantic cod collapse in the 1990s, the Aral Sea fishery collapse before it, and the slow strangulation of the Caspian sturgeon all share the same structure. Telling the villages to handle it themselves is, in this setting, a slow vote for collapse.",
      },
    ],
    tags: ["commons", "fisheries", "regulation"],
  },
  {
    id: "tax-farmer-claim",
    speaker: "A tax-farmer from the Salyan district",
    speakerType: "one-off",
    scenario:
      "The harvest failed, Shah. The Kura flooded twice. I cannot pay the full prepayment this year. Reduce my contract by a third or I default and your collection stops.",
    options: [
      {
        label: "Send inspectors to verify before deciding.",
        effects: { treasury: 4, people: 2, military: -2, faith: 1 },
        explanation:
          "The tax-farmer knows the state of his district; you do not. He has every incentive to claim disaster whether or not it occurred. You face the textbook problem of asymmetric information, in which one party to a contract knows more than the other and can exploit the gap. Sending inspectors converts hidden information into observable information at a cost. The inspectors can be bribed, the harvest evidence can be manipulated, and the verification is never perfect. But making the cost of lying go up reduces the rate of lying.\n\nThe Ilkhanate *moqata'a* system institutionalised exactly this dispute and resolved it through the *yargu*, the Mongol court of inquiry. Wassaf's chronicle records the case of Shams-al-Din Muhammad b. Malik Tazigu, a Yazdi merchant granted the *moqata'a* for all of Fars in 1277–78. When local landlords defaulted on their obligations to him, his prepayment failed and his contract was dragged through extended litigation. The historian notes that account clearance 'was frequently the cause of long and bitter controversy and the occasion for the expenditure of much money by the tax-farmer.' Verification was an industry of its own.\n\nThe modern equivalent runs through every audit and tax investigation. Azerbaijani tax authority procedures, like those of any state, depend on the credible threat of inspection to deter underreporting. The principle is unchanged from your inspectors riding to Salyan: if the cost of fabricating a story exceeds the benefit, most tax-farmers tell the truth. If the cost is too low, they don't. Your decision sets the price.",
      },
      {
        label: "Accept the reduction. Replacing him costs more.",
        effects: { treasury: -6, people: 1, faith: -1, military: -1 },
        explanation:
          "Accepting the reduction is the cheap short-run move and the expensive long-run move. Other tax-farmers hear of it. Next year, more districts claim disaster. The expected return on lying has gone up, and the state's effective tax base has gone down by the amount of the discount the next tax-farmer expects to receive. The economics term is moral hazard: when the consequences of a contract failure are softened, more contracts fail.\n\nThe Ilkhanate sources show what happens when this dynamic runs unchecked. Encyclopaedia Iranica's economic history records the system tipping into 'systematic extortion and oppression' precisely because the constraints on tax-farmer behaviour eroded over decades. The wealthiest holder of all, Jamal-al-Din Tibi, immensely rich from the Persian Gulf pearl trade with India, still found himself dragged through *yargu* interrogation when his contracts went bad — and Shams-al-Din Juvayni, Hulagu's vizier, offered 2,000 *tuman* in ransom when he fell from favour but could raise only 400,000 dirhams in cash and was executed in 1284, his estates confiscated. The system was harsh because softness in one direction had to be paid for in harshness elsewhere.\n\nThe modern reading is the cost of regulatory leniency in fiscal systems. Forbearance is sometimes the right answer when conditions genuinely justify it, but it is almost always the wrong answer when it sets a precedent. Azerbaijani tax administration, like most successful modern systems, runs on credible enforcement with discretion at the margins, not the other way around. Granting the reduction without verification is the wrong order of operations.",
      },
    ],
    tags: ["asymmetric-information", "moral-hazard", "fiscal"],
  },
  {
    id: "general-campaign",
    speaker: "General Farrukhzad",
    speakerType: "general",
    scenario:
      "Two years and eight thousand dinars into the mountain campaign, Shah. The chieftain holds three valleys. Five thousand more silver and a fresh thousand troops and I take him by autumn. Or we lose what we have already spent.",
    options: [
      {
        label: "Send the silver and the troops. Finish what's started.",
        effects: { treasury: -10, military: 4, people: -4, faith: -2 },
        explanation:
          "The General's argument rests on the sunk cost fallacy. The eight thousand dinars and two years already spent are gone whether you continue or stop. The decision facing you is whether the *next* five thousand dinars and thousand troops, evaluated against the *expected* gain from finishing the campaign, are worth it. The past investment is irrelevant. Economists describe this as a present-value problem; the past is information about cost but not a reason for further spending.\n\nThe pattern shows up across medieval Caucasus military history. Shirvanshah Ibrahim I's eastern Georgian campaign in the early 15th century is the closest documented example in your own dynasty — Ibrahim invaded, was defeated and captured by Qara Yusuf alongside the Georgian king and 300 nobles, and paid a heavy ransom to recover his freedom. The campaign was a clear loss, but it represented a single decision to commit, not a series of escalating reinforcements. Most failed medieval campaigns were not catastrophic single defeats; they were drawn-out commitments that ate silver and men through reinforcement after reinforcement, each one justified by the previous one.\n\nThe modern term for the same trap is escalation of commitment. It appears in business decisions, in litigation, and in foreign policy. The Soviet campaign in Afghanistan from 1979 to 1989 is the textbook case from the region. Azerbaijani military doctrine in the long Karabakh conflict, and the eventual operational planning of the 2020 war, deliberately broke with the older pattern: a focused, finite commitment rather than continuous reinforcement of a stalled position. The General is asking you to repeat the older mistake.",
      },
      {
        label: "Recall him. Cut your losses.",
        effects: { treasury: 4, military: -6, people: 5, faith: 3 },
        explanation:
          "Recalling the General accepts the loss and stops it growing. Eight thousand dinars and two years are written off. The chieftain keeps his valleys. The General's pride takes the blow and the kingdom's reputation for finishing fights takes a smaller blow. You spend the recovered silver on something with a higher expected return — walls, grain reserves, the Sangachal road. The economics is straightforward: stop investing when the marginal return falls below the marginal cost, regardless of what has been spent already.\n\nMedieval Caucasus rulers sometimes did this and survived. Shirvanshah Akhsitan I (r. 1160–1197) maintained Shirvan's independence partly by choosing his fights and abandoning the ones that could not be won, providing mutual military assistance to Georgia against Slavic raids and against Seljuk pressure rather than launching ambitious northern campaigns. The pattern of Shirvanshah survival was defensive flexibility rather than offensive completion. Costly mountain campaigns against Lezgian or Daghestani chieftains rarely produced lasting gains; the territory was too broken, the local knowledge too one-sided, the value of the land too low.\n\nThe modern parallel is the discipline of cancelling losing projects. The Azerbaijani state's willingness to walk away from underperforming Soviet-era industrial assets in the 1990s, painful as it was, allowed capital and labour to redirect into the oil sector and later the transit economy. Cancelling a long-running commitment is politically expensive because the constituency that benefited from it is visible and the constituency that benefits from the freed-up resources is not. Most rulers continue the campaign. The Shirvanshahs who lasted were the ones who did not.",
      },
    ],
    tags: ["sunk-cost", "military", "strategy"],
  },
  {
    id: "windfall-silver",
    speaker: "Envoy Toghan",
    speakerType: "envoy",
    scenario:
      "A gesture of friendship from the Great Khan, Shirvanshah. Forty thousand silver dinars in coin, delivered to your treasury this week. Build what you wish. Spend what you wish.",
    options: [
      {
        label: "Distribute it widely. Tax remission, public works, festivals.",
        effects: { treasury: -2, people: 9, military: -2, faith: 4 },
        explanation:
          "A sudden inflow of silver into a closed economy raises the money supply faster than the production of goods. Prices follow money. The quantity theory of money, formalised much later by David Hume and Irving Fisher, was understood empirically by medieval rulers who had watched the same pattern play out across the Islamic world for centuries. Distributing the windfall widely accelerates the effect because the silver enters circulation at every level of the economy at once. Bread, cloth, and labour all become more expensive in nominal terms within a season. The poor are partly protected by the distribution itself but absorb the inflation later.\n\nThe medieval Caucasus had direct experience of monetary shocks of this kind. The late 13th century silver crisis across the Eastern Islamic world drove the Shirvanshahs, the Eldiguzids, and the rulers of Derbent to issue copper coinage as silver supplies thinned, and the subsequent influx of Mongol silver coin after the conquests of the 1240s and 1250s — *kaaniki* dirhams minted in the name of the Great Khan — reset the regional monetary base. Each inflow and outflow produced its price effects, and the boundary between fiscal generosity and inflationary disaster was thin. Gaykhatu's 1294 paper money experiment, with its inscription promising that 'provisions become cheap, and rich and poor be equal,' is the cautionary tale of what happens when the monetary instrument outruns the productive economy.\n\nThe modern parallel sits inside SOFAZ's transfer rules. The fund deliberately constrains how much oil revenue can be moved into the state budget in any given year, because uncontrolled transfers would do to the manat economy what your distribution does to medieval Shamakhi: drive nominal prices, weaken the currency, and erode the real value of the windfall within months. The discipline of saving most of a windfall and spending little of it is the modern answer to the same medieval problem.",
      },
      {
        label: "Hold it in the treasury vault. Spend slowly across years.",
        effects: { treasury: 12, people: -3, faith: -1, military: 3 },
        explanation:
          "Holding the silver smooths the inflow across many years. The price level barely moves in the year of the gift, because the new coin does not chase new goods. The treasury appears richer on paper but in real terms the wealth is preserved instead of dissipated. The economics is intertemporal smoothing of an unexpected income shock, the same logic that drives a household to save a bonus rather than spend it all at once.\n\nMedieval Islamic rulers who survived the longest tended to follow this instinct, though it cost them popularity in the year of the windfall. The contrast is sharp with the Ilkhanate kings who burned through silver on campaigns and court spending and then debased their currency to plug the gap. Vizier Sadr-al-Din Ahmad Khaledi Zanjani, advising Gaykhatu, levied a forced loan from the *ortaq* trading associations of Tabriz in 1294–95 to raise an army against Baydu, because the silver that had passed through the treasury was already gone. A vault preserves what a spending programme cannot.\n\nThe modern Azerbaijani institutional expression of this discipline is SOFAZ itself. The fund's mandate is to convert finite extraction windfalls into intergenerational savings, with annual transfers to the state budget calibrated to avoid the inflationary spike a full distribution would cause. The 'oil curse' literature has documented across dozens of countries the cost of failing to do this; oil booms have left several states poorer in real terms after the cycle than before it. Holding the silver is the politically harder choice and the economically sounder one. The Envoy notices that your treasury closed faster than he expected.",
      },
    ],
    tags: ["money-supply", "inflation", "fiscal"],
  },
  {
    id: "tahmina-oath",
    speaker: "Tahmina of Shamakhi",
    speakerType: "tahmina",
    scenario:
      "Swear on the Quran that you will not raise the silk tax for ten years, Shah. My house will invest twenty thousand dinars in new looms and dye-houses if I have your oath. Without it, I keep my silver in the ground.",
    options: [
      {
        label: "Swear the oath on the Quran.",
        effects: { treasury: 8, people: 4, faith: 6, military: -2 },
        explanation:
          "The textbook problem here is time inconsistency: a policy that is optimal today (promise low silk taxes to attract investment) becomes suboptimal later (raise the tax once the looms are built and the investor cannot leave). Tahmina knows this. Her demand for a Quranic oath is an attempt to make your future self bound to your present self by the highest available commitment device. The economist Finn Kydland won the Nobel Prize for formalising exactly this dilemma in 1977.\n\nMedieval Islamic statecraft had a developed vocabulary for credible commitment, but the practice was patchy. The proliferation of *awqaf* (religious endowments) under the Ilkhanate is read by historians as a response to weak property rights: merchants and landowners constituted their assets as religious endowments hoping the sacred status would deter confiscation, though Encyclopaedia Iranica notes the protection was 'often illusory.' Ghazan Khan's reform *yarligh* of around 1300 explicitly tried to give security of tenure to landowners precisely because flight from land had reached major proportions — the previous regime's broken commitments had wrecked the productive base. A Quranic oath was the strongest commitment available in your world, and rulers who broke them paid in legitimacy.\n\nThe modern Azerbaijani version is the country's investment treaty network and the contractual structure of the production-sharing agreements signed from 1994 onward. The state binds itself to predictable terms over decades because no foreign investor will commit to a 25-year hydrocarbon project on a one-year tax assumption. Tahmina's twenty thousand dinars are the medieval scale-model of that calculation. The oath buys her investment; the cost is your future flexibility.",
      },
      {
        label: "Refuse the oath. Keep your options.",
        effects: { treasury: -4, people: -2, faith: -3, military: 2 },
        explanation:
          "Refusing the oath preserves your future tax flexibility and forgoes Tahmina's investment. The economic concept is the value of optionality: keeping the right to raise the silk tax later is worth something, and Tahmina is asking you to sell it for twenty thousand dinars of investment that may or may not materialise as promised. Whether the trade is good depends on how much you trust her commitment and how much she trusts yours.\n\nThe Ilkhanate historical record is full of broken commitments running in both directions. Shams-al-Din Juvayni, vizier to Hulagu and one of the most powerful officials of the regime, accumulated vast estates under one ruler and was executed under the next in 1284, his estates seized as *inju* land. Whatever implicit guarantees had been given did not survive the change in court favour. From the merchant side, the immensely wealthy Jamal-al-Din Tibi could not refuse government demands even at the peak of his wealth. Both sides knew the rules were soft. The honest refusal, painful as it is for Tahmina, may be more credible than the oath she would have extracted.\n\nThe modern reading runs through every emerging-market sovereign debt and investment story. States that cannot credibly commit to stable policy pay a sovereign risk premium that makes their borrowing more expensive and their investment thinner. Azerbaijan has worked hard since the 1990s to build the credibility infrastructure — production-sharing agreements with international arbitration clauses, IMF programmes, the Extractive Industries Transparency Initiative membership — precisely because the medieval default is a costly equilibrium. Refusing the oath honestly is a step backwards from that. Refusing it secretly intending to break it later is worse.",
      },
    ],
    tags: ["time-inconsistency", "commitment", "investment"],
  },
  {
    id: "merchant-loan",
    speaker: "Vizier Farrukh",
    speakerType: "vizier",
    scenario:
      "The wall along the western approach needs another thirty thousand dinars and the treasury holds twelve. The Shamakhi merchant houses will lend us the difference at modest interest. They were going to fund three new caravans this season. They will fund the wall instead.",
    options: [
      {
        label: "Borrow from the merchant houses.",
        effects: { treasury: 18, military: 6, people: -5, faith: -3 },
        explanation:
          "Borrowing from the merchants funds the wall but pulls capital away from the caravans the same merchants would have financed. The economic concept is crowding out: state borrowing absorbs lendable funds that would otherwise have gone to private investment. The total amount of investment in the economy does not rise by the borrowed amount. The composition shifts from caravans (private goods, taxable, multiplier-generating) to walls (public goods, defensive, important but non-revenue-producing).\n\nThe Ilkhanate sources document the dynamic in stark form. The Gaykhatu regime's vizier Sadr-al-Din Ahmad Zanjani imposed what the sources call a forced loan on the *ortaq* trading associations of Tabriz in 1294–95 to raise an army against Baydu — the language is 'forced' because the merchants had no real choice. The capital that had been funding Persian Gulf and Silk Road trade was diverted to military spending. The historian's reading is that the affected trade routes contracted measurably in the years that followed. The same merchants who had been the economy's growth engine became the regime's emergency lender, with predictable effects on the growth engine.\n\nThe modern analogue runs through the trade-off between government deficit financing and private investment. Azerbaijan's relatively low public debt — sustained partly by SOFAZ's role as a fiscal buffer — is a deliberate response to the medieval-and-modern lesson that heavy state borrowing crowds out the private sector. The wall is necessary; the cost of building it from borrowed merchant capital is that three caravans do not run this season, and the merchants notice. The Qadi notices too. Interest itself is a contested category in medieval Islamic law, and even modest 'modest interest' framings will draw his attention.",
      },
      {
        label: "Wait. Save until the treasury can fund the wall directly.",
        effects: { treasury: -3, military: -4, people: 4, faith: 4 },
        explanation:
          "Waiting preserves the caravans and slows the wall. The economic logic is unchanged from a household choosing not to take on debt for an expense it would prefer to fund from saving. The cost is risk: if the western approach is tested before the wall is finished, the saving was the wrong choice. The benefit is the preserved private investment and the avoidance of the Qadi's objection to interest.\n\nMedieval Islamic rulers who took this path tended to fund their projects from current revenue, religious endowments, and the gradual accumulation of tribute and trade rents. Khalilullah I's construction of the Sangachal caravanserai in 1439–40 was paid for in this manner, and the Palace of the Shirvanshahs complex was built incrementally across three reigns over the 15th century rather than financed in a lump sum. Slow building was the norm because borrowing was structurally difficult. The Shirvanshahs maintained merchant goodwill in a competitive trading region partly by not raiding merchant capital whenever they needed silver in a hurry.\n\nThe modern Azerbaijani parallel is the explicit fiscal rule that channels oil revenue through SOFAZ before it reaches the budget, with a calibrated annual transfer rate. The discipline forces the state to live within the income SOFAZ permits rather than borrowing against expected future oil receipts. Several oil states that did not impose this discipline — Venezuela most starkly — discovered the cost of accumulated borrowing when the resource price fell. Waiting on the wall has its own risks, but they are different in kind from the risks of accumulated debt to one's own merchant base.",
      },
    ],
    tags: ["crowding-out", "borrowing", "fiscal"],
  },
  {
    id: "qadi-alliance",
    speaker: "Qadi Mahmud",
    speakerType: "qadi",
    scenario:
      "The Georgian king's envoy waits in the courtyard, Shah. He proposes a defensive league against the Ilkhan: each kingdom marches if the other is attacked. The Qadi has read the treaty and shares his counsel. Do you sign?",
    options: [
      {
        label: "Sign the league. Bind Shirvan to Georgia.",
        effects: { military: 8, treasury: -4, people: 2, faith: 3 },
        explanation:
          "A defensive league is a coordination problem with a payoff structure familiar from game theory. If both states defect, both face the Ilkhan alone. If both cooperate, both gain a defender. If one cooperates and the other defects, the cooperator is left exposed and the defector is the survivor. The optimal solution depends on what each side believes about the other's likelihood of honouring the agreement. The medieval term was an oath of *wala* or formal alliance; the modern term is credible commitment in a repeated game.\n\nThe Shirvanshahs had a documented history of exactly this kind of coalition. In 1121 they joined the Georgian king David IV and the Kipchak Turks in the alliance that defeated the Seljuks at the Battle of Didgori, a decisive victory that shifted the regional balance for decades. Under Akhsitan I (r. 1160–1197) the mutual assistance pattern with Georgia continued. Centuries later, in the early 15th century, Ibrahim I allied with Georgian king Constantine I and the Shaki ruler Syed Ahmed Orlat against Qara Yusuf, fielding 2,000 Georgian cavalry — and was defeated, captured alongside Constantine and 300 nobles. The league strategy worked when both sides honoured it and the combined force was sufficient. It failed when one side miscalculated the larger power's response.\n\nThe modern parallel runs through every small-state alliance dilemma. Azerbaijan's relationships with Turkey (formalised by the Shusha Declaration of 2021), with the Organization of Turkic States, and with Israel and Pakistan, are coordinated security postures of the same essential shape. The cost is bound flexibility; the benefit is a credible deterrent against larger threats. Signing the league commits you to Tbilisi's quarrels as much as it commits Tbilisi to yours.",
      },
      {
        label: "Refuse. Stand alone.",
        effects: { military: -3, treasury: 2, people: -2, faith: -2 },
        explanation:
          "Refusing the league preserves your freedom of manoeuvre and forgoes the deterrent. The strategic logic is that a small state caught between great powers may sometimes survive longer by careful balancing than by binding alliance, because the alliance itself can provoke the larger power and the ally may not arrive in time when the test comes. Sheikh Ibrahim Darbandi of Shirvan — Ibrahim I, the same ruler — initially maintained an equilibrium between Timur and Toqtamish before eventually choosing the stronger Timur in 1386. The balancing posture worked for years before circumstance forced the choice.\n\nThe historical pattern of Shirvanshah survival under Mongol pressure leaned heavily on this kind of selective neutrality. The state submitted to the larger Ilkhanate, paid the tribute, and preserved internal autonomy where it could. The Atabeg state of Azerbaijan allied with Georgian King George IV during the Mongol invasions, but Shirvan's rulers were more cautious about formal commitments, preferring case-by-case adjustment. The cost was reduced collective deterrent. The benefit was that Shirvan was not destroyed in the way some of its more committed neighbours were.\n\nThe modern equivalent is the careful multi-vector foreign policy that Azerbaijan has pursued since independence: deep ties with Turkey, working relationships with Russia and Iran, security cooperation with Israel, and substantial trade with the EU and China. The country has avoided binding to a single alliance system precisely because each commitment narrows the options against the others. Refusing the Georgian league is a vote for that more cautious posture. The Qadi disapproves: he had read the treaty as a defence of the dar al-Islam against the Mongols, and your refusal looks to him like weakness.",
      },
    ],
    tags: ["coalitions", "game-theory", "geopolitics"],
  },
];
