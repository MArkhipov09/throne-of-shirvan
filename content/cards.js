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
  {
    id: "vizier-elasticity",
    speaker: "Vizier Farrukh",
    speakerType: "vizier",
    scenario:
      "The treasury needs another four thousand dinars before winter, Shah. We can tax the silk leaving Shamakhi or we can tax the bread baked in the city. Bread will raise more, with less complaint from the merchants. Silk will raise less, with more complaint from the bakers.",
    options: [
      {
        label: "Tax the bread.",
        effects: { treasury: 10, people: -9, faith: -3, military: 1 },
        affinityEffects: { vizier: 1, qadi: -2 },
        explanation:
          "The Vizier's instinct rests on a sharp economic point. Bread has inelastic demand: people buy roughly the same amount whether the price rises or falls, because there is no real substitute and the quantity needed for survival is fixed. A tax on bread therefore raises a lot of revenue and reduces consumption only slightly. Silk has elastic demand: foreign buyers can switch to Persian, Chinese, or Bursa silk if Shirvan's becomes too expensive, and domestic buyers do not need it at all. A tax on silk raises less revenue and distorts trade volumes more.\n\nThis is what economists since Frank Ramsey have called optimal commodity taxation: for revenue, tax inelastic goods; for minimal distortion, also tax inelastic goods. The argument is technically correct and morally uncomfortable, because the inelastic goods tend to be necessities and necessities matter most to the poor. The Shamakhi bakers will absorb almost none of the tax. Their customers will absorb almost all of it.\n\nModern Azerbaijan's tax structure makes the same trade clearly. Value-added tax on essentials is contested in exactly the same terms: revenue versus welfare. Fuel subsidies remain partly because removing them transfers a large real burden to households who have nowhere to substitute. Your Vizier is offering you the revenue-maximising answer. The Qadi will arrive in the courtyard tomorrow morning with a long list of names of children who went hungry.",
      },
      {
        label: "Tax the silk exports.",
        effects: { treasury: 4, people: 3, faith: 2, military: -2 },
        affinityEffects: { tahmina: -2, qadi: 1 },
        explanation:
          "Taxing silk raises less revenue and distributes the burden across foreign buyers and wealthy Shamakhi merchants — both of whom can afford it, neither of whom you depend on for the city's daily bread. The economic cost is real: some Genoese and Venetian buyers will reroute their purchases to Bursa or Tabriz, where similar grades of silk are available untaxed. The volume of trade through Shamakhi will fall measurably. Tahmina's house will not enjoy the conversation.\n\nThe Shirvanshahs' actual revenue structure relied heavily on transit and trade tolls rather than consumption taxes on necessities. The Shamakhi Khanate later codified the same instinct, taking one-tenth of silk produced and a fixed cattle share rather than reaching directly into the bread basket. The choice was political as much as economic. Bread riots end reigns; merchants merely sail to Derbent.\n\nThe modern parallel is Azerbaijan's tax policy on hydrocarbon exports versus domestic consumption. The state captures most of its revenue from the production chain on the seaward side of the economy — SOFAZ, profit oil, customs — and keeps domestic taxation relatively light, partly because the political cost of squeezing households is high and partly because there is enough rent upstream to make squeezing households unnecessary. Your refusal of the bread tax follows the same logic at medieval scale: take from where it stings least.",
      },
    ],
    tags: ["elasticity", "taxation", "welfare"],
  },
  {
    id: "qadi-madrasa",
    speaker: "Qadi Mahmud",
    speakerType: "qadi",
    scenario:
      "The boys of poor families learn nothing but their fathers' trade, Shah. A madrasa in Shamakhi, with scholarships for the cleverest sons of the bakers and the cobblers, would in twenty years give you judges, scribes, and astronomers. The treasury pays now. The kingdom collects later.",
    options: [
      {
        label: "Found the madrasa with royal funding.",
        effects: { treasury: -10, faith: 6, people: 5, military: -1 },
        affinityEffects: { qadi: 3, vizier: 1 },
        explanation:
          "Education is the textbook merit good. The private benefits to the student are real, but the social benefits are larger and harder to capture privately — literate scribes, competent judges, skilled administrators, traders who can compute interest correctly. The market underprovides because students and their families cannot easily borrow against future earnings, and because the wider economy free-rides on whatever they learn. State subsidy or provision corrects this, and the corrective effect is one of the most-replicated findings in development economics.\n\nThe Shirvanshahs took this seriously when they were at their strongest. The Palace complex in Baku, built across the 15th century reigns of Ibrahim I, Khalilullah I, and Farrukh Yasar, included the tomb of Seyid Yahya Bakuvi — the court Sufi scholar and astrologer whose presence at the palace was an investment in intellectual capacity as much as in religious legitimacy. The medieval Islamic world ran on a network of madrasas funded by rulers and waqf endowments, and the centres of scholarship correlated tightly with the centres of political power. Bukhara, Cairo, Tabriz, Shamakhi: where rulers funded learning, learning concentrated.\n\nModern Azerbaijan made the same investment at a national scale through the State Program on Education of Azerbaijani Youth Abroad, which funded thousands of students at foreign universities from oil revenues channelled through SOFAZ. The state paid the cost early. The returns came as those students staffed ministries, banks, energy firms, and universities a decade later. Your madrasa is the medieval version of the same bet.",
      },
      {
        label: "Decline. The merchants can fund their own schools.",
        effects: { treasury: 2, faith: -4, people: -3, military: 0 },
        affinityEffects: { qadi: -3 },
        explanation:
          "Letting private merchants fund schools sounds reasonable and produces a predictable pattern: the merchants fund schools for their own sons. The bakers' and cobblers' boys learn their fathers' trade. The pool of literate young men from which the next generation of judges, scribes, and astronomers is drawn remains narrow, and the kingdom's administrative capacity ages with the men currently holding the offices.\n\nThe failure mode is documented across pre-modern societies that did not invest in broad-based education. The Ilkhanate's slow administrative decay in the early 14th century is read by historians like Ann Lambton partly as a failure to renew its scribal class once the original generation of trained Persians began to die out. The state had relied on the existing pool rather than expanding it, and when the pool emptied, the documents stopped being produced reliably and the tax-farm contracts stopped being enforceable. Capacity is built; it does not maintain itself.\n\nThe modern parallel is the resource curse in human terms. Several oil states have under-invested in non-oil human capital and discovered, on the second or third oil price downturn, that they have nothing else to draw on. Azerbaijan's choice to fund education aggressively in the 2000s, when oil revenue was rising, was a deliberate hedge against exactly this pattern. The Qadi's argument and the modern argument are the same: pay for learning now, or pay for the absence of learning later. He leaves the courtyard angrier than he arrived.",
      },
    ],
    tags: ["merit-goods", "human-capital", "education"],
  },
  {
    id: "tahmina-salt",
    speaker: "Tahmina of Shamakhi",
    speakerType: "tahmina",
    scenario:
      "Tax the salt, Shah. Levy it on the merchants who bring the brick blocks from the Caspian flats. We will pass the cost to the consumers, every household will pay a little, and the treasury fills without any one of us feeling the squeeze. Nothing simpler.",
    options: [
      {
        label: "Levy the tax on salt merchants.",
        effects: { treasury: 11, people: -7, faith: -2, military: 1 },
        affinityEffects: { tahmina: 1, qadi: -2 },
        explanation:
          "Tahmina is being honest about who actually pays. Tax incidence — the question of who bears the burden of a tax regardless of where it is formally levied — depends on the elasticities of demand and supply. Salt has highly inelastic demand: people need it for preservation, for cooking, for the basic chemistry of survival. There is no substitute. When the merchants pay the tax, they raise their prices, and consumers absorb almost the entire burden. Tahmina's house collects the salt, marks up by the tax, and hands you the collected sum without their margin moving at all.\n\nMedieval Islamic states understood this clearly. The Salyan flats and the Caspian salt lakes supplied a market that could not refuse to buy, and rulers from the Abbasids onward used salt as a fiscal instrument precisely because of its inelasticity. The French gabelle, levied for centuries on salt in pre-revolutionary France, is the European parallel — universally hated and immensely productive of revenue. The economic correctness of taxing inelastic necessities sits in permanent tension with the political costs.\n\nThe modern Azerbaijani version runs through fuel taxation and utility pricing. Petrol and gas in Azerbaijan are heavily subsidised, partly because removing the subsidy is a tax in disguise on inelastic demand. Each time the government reduces a subsidy, the real burden falls on households with no substitution options, and the political cost is high. Tahmina is asking you to do the medieval equivalent and accept the political cost. Note that she walks away smiling. The salt merchants are her cousins.",
      },
      {
        label: "Refuse. Salt is the poor man's food.",
        effects: { treasury: -2, people: 6, faith: 4, military: -1 },
        affinityEffects: { tahmina: -1, qadi: 2 },
        explanation:
          "Refusing the salt tax forgoes the revenue and protects the poorest households from a regressive instrument. A regressive tax is one that falls more heavily on lower incomes as a share of income, because the poor spend a larger share of their income on the taxed good. Salt is the archetypal regressive base. The economic literature on optimal taxation has spent two centuries arguing about whether the revenue argument outweighs the equity argument; medieval rulers tended to resolve the question by political feel.\n\nThe Shirvanshah documentary record is light on direct salt taxation but consistent on the broader pattern: rulers who preserved their reigns tended to extract from trade and concession rather than from the kitchen. Khalilullah I's revenue base in the 15th century leaned on tolls, trade rents, and the naphtha concession economy, while the rural population was taxed in kind — grain, animals, silk — at rates that survived bad harvests without breaking. The instinct was structural rather than principled, but it produced sustainable governance.\n\nThe modern Azerbaijani parallel sits in the deliberate decision to subsidise rather than tax basic necessities. Bread prices, fuel, utilities — the state spends to suppress prices rather than raising revenue from inelastic demand. The cost is the loss of an enormously productive tax base. The benefit is a population that can predict its monthly costs and does not riot when the global wheat price spikes. Your Qadi nods. Tahmina makes a face and goes back to her counting-house. She will be back with a different proposal.",
      },
    ],
    tags: ["tax-incidence", "regressivity", "salt"],
  },
  {
    id: "general-wages",
    speaker: "General Farrukhzad",
    speakerType: "general",
    scenario:
      "Drought, lean trade, the treasury thinned. Pay the garrison three dinars where it once paid four. They will grumble, Shah. They will not desert. They have wives in Baku and nowhere else to take them. Where else will they go? My word holds them.",
    options: [
      {
        label: "Cut the garrison's pay by a quarter.",
        effects: { treasury: 8, military: -10, people: -5, faith: -2 },
        affinityEffects: { general: -3 },
        explanation:
          "The General is technically right that the soldiers will not desert in large numbers and is psychologically wrong about almost everything else. Nominal wage cuts produce reactions disproportionate to their economic size. Workers — soldiers, in this case — interpret a pay reduction as a violation of trust, not as a price adjustment. Morale collapses faster than wages fall. Productivity drops. Theft, slow-rolling, and outright mutiny become more likely. The economic literature calls this nominal wage rigidity, and Truman Bewley's interview studies of laid-off American workers and the managers who let them go documented exactly the same pattern with modern wage-earners that you are seeing in your own garrison.\n\nThe medieval evidence runs the same direction. Ilkhanate-era armies, when paid late or paid short, defected to whichever local amir would meet their wages — and the steady fragmentation of the Ilkhanate into successor states after 1335 was driven partly by exactly this dynamic. Garrisons whose pay was honoured stayed loyal across regime changes. Garrisons whose pay was cut frequently switched sides. Sheikh Ibrahim Darbandi's careful management of his military payroll was part of why Shirvan stayed coherent while neighbours collapsed.\n\nThe modern parallel is the case for some positive inflation as monetary policy. Central bankers, including the Central Bank of Azerbaijan, generally aim for inflation slightly above zero precisely because it allows real wages to fall in downturns without nominal cuts. The 2015 manat devaluations cut real wages substantially; the cuts were absorbed because they happened through inflation, not through cheques being reduced. Your General has just offered you a cheque cut. He underestimates what it costs.",
      },
      {
        label: "Pay in grain from the royal stores instead.",
        effects: { treasury: 3, military: 2, people: -2, faith: 0 },
        affinityEffects: { general: 1 },
        explanation:
          "Paying in grain preserves the nominal cash wage and substitutes a different form of compensation for the gap. The garrison receives its three dinars and a measure of grain whose market value, in a drought year, is meaningful. The soldiers' households see no reduction in the silver they receive, which is the part their wives count. The kingdom converts grain reserves into loyalty.\n\nMedieval Islamic states did this routinely. The *iqta* system, which awarded soldiers and officers the right to collect taxes from particular lands rather than paying them salaries directly, was a sophisticated version of the same logic — soldiers were compensated through revenue flows rather than coin transfers, and the system survived bad coinage years because it did not depend on the coinage. After Ilkhanate fragmentation, Mostawfi recorded that Azerbaijan, Arran, and Shirvan had moved toward military *eqta'* arrangements precisely because the cash economy was unreliable.\n\nThe modern analogue is in-kind compensation and benefits-in-kind in employment contracts. Companies — and states — that face cash constraints sometimes substitute housing, food allowances, school places, or healthcare for nominal wages, and the substitution works when the in-kind value is high. The Azerbaijani military and security services have used the same approach at various points, supplementing salaries with housing allocations and other non-cash benefits during periods of fiscal pressure. The General leaves the throne room satisfied that his soldiers' pride is intact. The Vizier notes that the royal granary is now lighter.",
      },
    ],
    tags: ["wage-stickiness", "labour", "garrison"],
  },
  {
    id: "noble-sumptuary",
    speaker: "A senior noble of the court",
    speakerType: "one-off",
    scenario:
      "Shah, the merchants' wives wear Genoese velvet finer than my own daughters'. The order of rank is breaking down in the streets. Ban velvet for any household below noble rank. Let the merchants keep their gold and learn to wear plain wool. The kingdom is not a market.",
    options: [
      {
        label: "Pass the sumptuary law.",
        effects: { treasury: -4, people: -7, faith: 4, military: 1 },
        affinityEffects: { tahmina: -3, qadi: 1 },
        explanation:
          "Sumptuary laws are a particularly clean case study in unintended consequences. The official goal — preserving visible social hierarchy — runs into two predictable economic responses. First, banning a high-status good raises its status value. The good becomes more desirable precisely because it is forbidden, and willingness-to-pay rises for those who can still acquire it. Thorstein Veblen's analysis of conspicuous consumption captures this: the visible cost of the good is part of its value, and prohibition raises that cost dramatically. Second, prohibition creates a black market. Smugglers, bribed customs officers, hidden interior linings, all the standard evasions appear within months.\n\nMedieval and early modern sumptuary laws — from Elizabethan England through Ottoman codes to the various Islamic dress regulations — almost universally failed to maintain the social orders they were intended to defend. They generated revenue for smugglers, undermined the legitimacy of the legal system by being widely flouted, and concentrated the visible defiance among precisely the rising merchant class the laws were intended to suppress. The Italian city-states, which were the source of much of the contested cloth, watched the demand surge wherever the laws were strictest.\n\nThe modern Azerbaijani parallel runs through currency and import controls. The 2015 manat crisis produced informal parallel exchange rates and substantial smuggling of consumer goods around capital controls. The official rate looked stable; the unofficial rate told the real story. Sumptuary laws are the medieval form of the same lesson: when state regulation tries to override a market that has economic depth behind it, the market moves underground. Your noble nods sternly. Tahmina, whose imported velvet stocks have just become more valuable, conceals her satisfaction.",
      },
      {
        label: "Refuse. Let people wear what they buy.",
        effects: { treasury: 3, people: 5, faith: -2, military: -1 },
        affinityEffects: { tahmina: 2 },
        explanation:
          "Letting the velvet trade run protects the revenue base, the merchant class, and the rule of law. The economic reasoning is that voluntary trade between consenting parties creates value for both — the cloth merchant and the buyer's wife both prefer the transaction to its absence, otherwise it would not happen. Prohibition destroys that surplus and replaces it with smuggling, enforcement costs, and resentment. The benefit, in the noble's framing, is the preservation of a visible status hierarchy. The cost is everything else.\n\nThe Shirvanshahs broadly followed this instinct in practice. The Genoese and Venetian merchants who founded colonies on the Caspian shore from the 12th century onward did so under regimes that tolerated their trade because the customs revenue was worth more than the visual orderliness of the streets. Giosafat Barbaro's 1476 description of Shamakhi as a city of four to five thousand houses producing silk and cotton implies an urban economy in which the merchant class could afford fine cloth, and there is no indication that Shirvanshah rulers attempted to dress them down.\n\nThe modern reading is the case for open consumer markets even where the resulting status competition makes social conservatives uncomfortable. Azerbaijani consumer markets in luxury goods, imported cars, designer fashion in Baku — these are visible status competitions that successive governments have tolerated because suppression is expensive and counter-productive. The noble at your throne is asking you to make a class-based regulation in a city whose wealth depends on cross-class commerce. You decline. He will not be voting your way at the next informal court.",
      },
    ],
    tags: ["sumptuary", "unintended-consequences", "status-goods"],
  },
  {
    id: "mint-consolidation",
    speaker: "The Master of the Royal Mint",
    speakerType: "one-off",
    scenario:
      "Three mints, Shah, in Shamakhi, Baku, and Derbent. Each strikes coin a fraction different in weight and silver fineness from the others. Merchants weigh every dinar twice. Consolidate to Shamakhi alone. Cleaner coin, less waste, one workshop instead of three. Or keep the three, and accept the noise.",
    options: [
      {
        label: "Consolidate to one mint at Shamakhi.",
        effects: { treasury: 6, military: -4, people: 2, faith: 0 },
        affinityEffects: { vizier: 2, general: -1 },
        explanation:
          "Consolidation captures economies of scale. Fixed costs — skilled engravers, security, supervisory administration — spread across a larger output, lowering the average cost per coin. Standardisation of weight and purity reduces transaction costs across the entire trading economy: every dinar accepted at one weight everywhere is a dinar that does not need to be weighed at every transaction. The economic gain from standardisation alone is substantial in any monetary system, and the gain from the production efficiency adds to it.\n\nThe medieval evidence supports this in mixed ways. E. A. Pakhomov's catalogue of Azerbaijani coin hoards documents multiple Shirvanshah mints producing coins with subtle variations across the 13th and 14th centuries, and the late 13th century 'silver crisis' that drove the Shirvanshahs, Eldiguzids, and Derbent rulers to issue copper coinage was partly a consequence of distributed minting struggling with constrained silver supply. The Mongol response across the Ilkhanate was greater centralisation — the *kaaniki* dirhams minted in the name of the Great Khan in Tabriz, Ganja, Nakhichevan, and Urmia were closer to a single design than the pre-Mongol coinage they replaced. Centralisation worked.\n\nThe cost is concentration risk. If Shamakhi is sacked, the kingdom's mint capacity disappears with it. The 1192 Shamakhi earthquake, which prompted the Shirvanshahs to relocate to Baku, is the obvious lesson in the limits of single-point administrative concentration. Modern Azerbaijan runs a single central bank with backup reserves and digital systems precisely because the single point of failure problem is now solvable through redundancy that medieval rulers could not afford. Your Master is offering the efficiency gain. The General's concern about the strategic vulnerability is real but smaller than the gain.",
      },
      {
        label: "Keep all three mints running.",
        effects: { treasury: -2, military: 3, people: 0, faith: 1 },
        affinityEffects: { general: 1, vizier: -1 },
        explanation:
          "Keeping three mints sacrifices the efficiency gain and the standardisation benefit in exchange for resilience. If one city falls, two mints continue. If one master engraver dies or defects, the other workshops keep producing. The kingdom is more robust to disruption at the cost of continuous mild inefficiency in coin quality and a slow ongoing transaction-cost penalty across every market.\n\nThe medieval Shirvanshahs in practice did maintain multiple mints for long stretches, and the Pakhomov material on the post-Mongol period shows the surviving Shirvanshah coinage emerging from several locations as the Ilkhanate fragmented after 1335. The distributed structure was partly a holdover, partly a deliberate hedge. Mostawfi's description of military *eqta'* in Azerbaijan, Arran, and Shirvan after fragmentation suggests a similar distributed-redundancy logic across the administration: multiple smaller centres of fiscal and military capacity rather than a single capital that could be lost.\n\nThe modern parallel is the trade-off between centralisation and resilience in critical infrastructure. Azerbaijan's energy infrastructure is heavily concentrated around Baku and the offshore Caspian fields, which produces economic efficiency and a serious single-point vulnerability simultaneously. The Trans-Anatolian and Southern Gas Corridor pipelines were partly built to reduce that concentration on the export side. Your decision to keep three mints is the medieval version of the same hedge. The General is pleased. The merchants will continue weighing every dinar.",
      },
    ],
    tags: ["economies-of-scale", "standardisation", "currency"],
  },
  {
    id: "gatekeeper-tolls",
    speaker: "The Master of the Baku Gate",
    speakerType: "one-off",
    scenario:
      "Shirvani merchants and Genoese merchants pay the same toll at the gate, Shah. Two dinars a load. The Genoese can pay four and will not turn their galleys around. Our own merchants would cry murder if I doubled their rate. Let me charge them differently. The treasury notices.",
    options: [
      {
        label: "Differential tolls — higher for foreigners.",
        effects: { treasury: 8, people: 4, faith: 2, military: -1 },
        affinityEffects: { tahmina: 2, qadi: 1 },
        explanation:
          "Charging different prices to different buyers based on their willingness to pay is price discrimination, and where it is feasible it raises more revenue than uniform pricing without reducing trade volume in the same proportion. Foreign merchants have higher willingness to pay because their journey was longer, their alternative routes are fewer once they are at the Baku gate, and the value of the cargo they have committed to ship is larger relative to the toll. Domestic merchants have lower willingness to pay and easier exit options if you squeeze them. Charging each according to what they can bear is a classic monopolist's strategy applied to a state-monopoly toll point.\n\nThe Shirvanshahs and their successors did exactly this. The 1562 Antony Jenkinson decree from the Shirvan governor Abdulla Khan Ustajlu, granting the Muscovy Company specific toll exemptions, demonstrates that differential treatment was the norm and that exemptions were the diplomatic currency of trade negotiation. The implicit default was tiered, negotiable rates rather than a single published price. The customs offices — *tamgha* posts — operated with discretion built into the structure.\n\nThe modern parallel runs through visa fees, dual pricing at museums and transport systems, and the broader logic of imperfect competition. Azerbaijan's transit fees on the Middle Corridor differ by cargo type, origin, and destination — the formal mechanism is different from medieval tolls, but the underlying economics is the same. The cost is the resentment of foreign merchants who learn they are paying twice what the Shirvani next to them paid, and the risk that some of them reroute to Derbent or Tabriz. The Master of the Gate is betting the price ceiling is higher than that. Usually he is right.",
      },
      {
        label: "Uniform toll for all. Equal treatment.",
        effects: { treasury: -3, people: 2, faith: 1, military: 1 },
        affinityEffects: { qadi: 2 },
        explanation:
          "A uniform toll forgoes the revenue gain from price discrimination and treats every merchant by the same rule. The economic cost is straightforward: you collect less from those who would have paid more, and you do not collect more from those who would have paid less. The benefit is simplicity, transparency, and the absence of negotiation overhead at every transaction. Customs officers cannot be bribed to lower a rate that is the same for everyone.\n\nThe Shirvanshahs' actual practice mixed both approaches, but the trend in the medieval Islamic world was toward formally differential rates with broad customary defaults, modified by specific grants and exemptions. The institutional infrastructure to enforce a single rate against all comers did not really exist; *tamgha* offices were closer to negotiating posts than to fixed-price gates. Insisting on uniformity is, in this period, a normative choice rather than an administrative default. It says the kingdom treats foreign merchants the same as its own, which has its own diplomatic value.\n\nThe modern reading runs through the most-favoured-nation principle in international trade. WTO-era trade law specifically requires non-discrimination as a default, with allowed exceptions through formal agreements. Azerbaijan's trade structure now operates within that framework. Your medieval Shirvan does not face WTO pressure but does face the practical question of whether the relationships with Genoa, Venice, and Astrakhan are worth a flat published rate. The Qadi approves of the principle. The Master of the Gate is disappointed.",
      },
    ],
    tags: ["price-discrimination", "tolls", "trade-policy"],
  },
  {
    id: "watchman-wine",
    speaker: "A captain of the Shamakhi city watch",
    speakerType: "one-off",
    scenario:
      "The wine taverns in the Armenian quarter multiply, Shah. Muslim youths spend their nights there. Brawls every week. Fathers complain. Tax the wine houses heavily, or close them. The Qadi will applaud either choice.",
    options: [
      {
        label: "Tax the wine houses but allow them to operate.",
        effects: { treasury: 7, people: -2, faith: 4, military: 1 },
        affinityEffects: { qadi: 2 },
        explanation:
          "A demerit good is a good whose consumption produces negative externalities — costs imposed on people other than the consumer. Wine in a Muslim-majority city produces costs of several kinds: medical, familial, public order, religious disapproval. The economic argument is that the market price of wine does not reflect those external costs, so consumption is too high. A tax — Arthur Cecil Pigou formalised this in 1920 as a tax equal to the marginal external cost — raises the consumer price toward the social cost and reduces consumption to a more efficient level. Critically, it does so without destroying the legitimate trade entirely.\n\nMedieval Caucasus cities operated with this trade-off explicitly in mind. Shamakhi had a significant Armenian Christian community, and the dhimmi tradition under Islamic law allowed non-Muslim production of wine while taxing it through the *jizya* and various commercial levies. Outright prohibition would have driven the trade underground, raised the value of smuggled wine, and damaged the legal status of the Armenian merchant community — whose trade Shamakhi depended on for revenue and intellectual capital. Taxation preserved the community, suppressed consumption at the margin, and yielded revenue.\n\nThe modern Azerbaijani parallel is the country's notably secular legal structure within a Muslim-majority population, and the standard fiscal treatment of alcohol and tobacco as taxed but legal demerit goods. Excise duties on these goods are economically substantial across the modern tax base. The instrument is unchanged from the dhimmi-era logic: tax the externality, don't ban the trade. The Qadi approves the tax. The watchman wanted closure. He will accept the tax because the alternative was nothing.",
      },
      {
        label: "Close the wine houses.",
        effects: { treasury: -3, people: -6, faith: 5, military: -2 },
        affinityEffects: { qadi: 3, tahmina: -2 },
        explanation:
          "Prohibition shuts down the legal trade and pushes it underground. Wine continues to be produced in cellars, smuggled in barrels described as honey or vinegar, and sold at higher prices through informal networks that pay no tax. The visible problem disappears from the main streets of Shamakhi. The actual consumption falls modestly. The smuggling economy grows. The Armenian merchant community, whose legal status depended on the *dhimmi* compact that permitted their commercial activity, feels the ground move under it.\n\nThe medieval evidence on prohibition is thin in Shirvan specifically but rich in the broader Islamic world. Prohibition campaigns in various Ottoman, Safavid, and Mughal contexts had the consistent feature of producing visible compliance, hidden continuation, and economic loss in the affected merchant communities. The Ilkhanate, governed by rulers some of whom were not personally Muslim, oscillated on these questions with results that depended more on political need than on religious consistency. Ghazan Khan's conversion to Islam in 1295 produced a wave of formal prohibitions; the unofficial economy carried on.\n\nThe modern parallel runs through every prohibition policy, from US Prohibition in the 1920s to current drug-control regimes worldwide. The consistent finding is that prohibition reduces the targeted activity less than its advocates expect and generates organised criminal economies more than they anticipate. Azerbaijan's pragmatic legal framework on alcohol — taxed, regulated, accessible — reflects this learning at a national scale. The watchman is satisfied. The Qadi is delighted. The Armenian merchants begin quiet conversations about whether they should be planning to leave.",
      },
    ],
    tags: ["demerit-goods", "prohibition", "externality"],
  },
  {
    id: "guild-standards",
    speaker: "A guild master of the Shamakhi cloth-trade",
    speakerType: "one-off",
    scenario:
      "Every district weighs its bales by a different measure, Shah. The Baku ratl is not the Shamakhi ratl. The Derbent stone is not either. Decree a single standard for all of Shirvan. The merchants will grumble for a year and thank you for a generation.",
    options: [
      {
        label: "Decree a single standard for the kingdom.",
        effects: { treasury: -4, people: 6, military: 1, faith: 1 },
        affinityEffects: { vizier: 2, tahmina: 2 },
        explanation:
          "Standardisation of weights and measures is a classic problem of network effects. A standard becomes more valuable as more people use it, but no single market has the incentive to switch first because the surrounding markets are still on the old measures. The result is a coordination failure: everyone would prefer a single standard, no one will move alone. The economic case for state imposition is that the state can solve the coordination problem by decree, capturing benefits across the whole network that no private actor could capture alone. The cost is the one-time transition pain — every contract, every counterweight, every long-running trade relationship has to be renegotiated to the new units.\n\nThe Islamic world had broad standards for weights and currency — the dirham as silver weight, the dinar as gold — but local variations multiplied below the level of the formal standard. Coin hoards from Shirvan, Eldiguzid, and Derbent territories show the variation directly. Standardisation efforts came and went with each strong ruler. Khalilullah I's strong administrative period in the 15th century produced coinage of more consistent fineness than the pre-Mongol mints; the standardisation effort was real even if incomplete. The benefit to the trading economy was measurable in transaction volume and merchant confidence.\n\nThe modern analogue is everywhere: ISO standards, the metric system, telecommunications protocols, the GSM standard for mobile networks. Each is a state-or-treaty-imposed solution to a coordination problem that the market could not solve alone. Azerbaijan's adoption of EU and international trade and customs standards as part of its Middle Corridor positioning was a deliberate decision to absorb the transition cost in exchange for network access. Your guild master is asking you to make the same trade at medieval scale. He is more right than the merchants who will complain to your court next week.",
      },
      {
        label: "Let the districts keep their measures.",
        effects: { treasury: 1, people: -3, military: 0, faith: 0 },
        affinityEffects: { vizier: -1 },
        explanation:
          "Letting the existing measures continue avoids the transition cost and accepts the ongoing inefficiency. Every cross-district transaction continues to require conversion between local units, every contract specifies which ratl it means, every merchant carries a memorised table of equivalences. The friction is small per transaction and large in aggregate. Markets continue to function; they simply function worse than they could.\n\nThe medieval path of least resistance was this one, and it was the default in most pre-modern economies. The cost of imposing a standard across a kingdom — the inspectors who had to verify weights, the official measures held in royal storehouses for reference, the disputes adjudicated in the courts — was high enough that most rulers did not attempt it consistently. The Shirvanshahs operated within this default for stretches of their history, and the trade network functioned despite the friction because the alternative was harder and the friction was bearable.\n\nThe modern parallel runs through every coordination problem that successive governments have decided was too expensive to solve. Multiple incompatible technical standards persist in regions of the world where no authority has the capacity or the political will to mandate a single one. The cost is paid forever, in small fractions of every transaction, until eventually a stronger authority forces the issue. Azerbaijan's adoption of international standards has been incremental for exactly this reason — the political cost of forcing change is real, and each domain gets standardised when the benefit clearly outweighs the resistance. Your guild master walks out unsatisfied. The merchants who would have complained never appear.",
      },
    ],
    tags: ["network-effects", "standardisation", "coordination"],
  },
  {
    id: "astronomer-school",
    speaker: "Seyid Yahya Bakuvi, court astronomer",
    speakerType: "one-off",
    scenario:
      "Shah, my eyes weaken and my students are few. Fund an observatory on the hill above the palace and a school for those who would study the stars, the calendar, the mathematics of irrigation. The cost is real today. The kingdom that comes after you will not know its debt.",
    options: [
      {
        label: "Fund the observatory and the school.",
        effects: { treasury: -12, people: 3, faith: 5, military: -1 },
        affinityEffects: { qadi: 2, vizier: 1 },
        explanation:
          "Investment in human capital and knowledge production yields returns over decades, not seasons. The economic concept is the same as physical capital investment — sacrificing current consumption for future productivity — but with the added complication that the returns are diffuse, partly non-excludable, and partly captured by rulers other than the one paying. This is why states underinvest in basic research and education across history: the ruler who pays does not always live to see the payoff, and other rulers free-ride on the spillovers. The economic case for state funding rests on the fact that no private actor will internalise the returns either.\n\nThe Shirvanshah court genuinely invested in scholarship at its peak. Seyid Yahya Bakuvi is a real historical figure, court astrologer and Sufi scholar under the 15th-century Shirvanshahs, buried in the royal mausoleum complex at the Palace of the Shirvanshahs in Baku. His tomb is one of the more striking monuments in the Icheri Sheher inner city. The intellectual capacity gathered around the palace — astronomers, theologians, calendar-makers, architects — was a deliberate investment that paid back in the prestige and administrative capability of the dynasty's late period. The mathematical sophistication required to design the palace, the Maiden Tower, and the irrigation works depended on the scholarly community Khalilullah I and Farrukh Yasar funded.\n\nThe modern Azerbaijani analogue is the deliberate use of SOFAZ revenue to fund higher education and scholarly capacity — the State Program on Education of Azerbaijani Youth Abroad, ADA University, the network of state research institutions. The return on the investment shows up a decade or two later in the staff of ministries, banks, and energy firms. Your decision today seeds a generation. Bakuvi does not live to see the school in full operation, but his students do.",
      },
      {
        label: "Decline. The treasury cannot afford it now.",
        effects: { treasury: 1, people: -2, faith: -4, military: 0 },
        affinityEffects: { qadi: -2 },
        explanation:
          "Declining preserves twelve thousand dinars in the treasury and forgoes the long-run capacity-building. The decision is rational on a short time horizon and questionable on a long one. The astronomer dies. His students disperse to find patronage in Tabriz, Herat, or Bukhara. The next generation of Shirvani administrators is drawn from a thinner pool. The kingdom continues to function but its intellectual centre of gravity drifts elsewhere. The cost is paid invisibly over thirty years.\n\nThe historical record shows what happens to courts that stop funding their scholars. The post-1335 fragmentation of the Ilkhanate accelerated partly because the administrative scholarship that had held the system together — the Persian *divan* tradition, the legal scholars of Tabriz and Sultaniyya — lost their state patronage as successor states fought for resources. The intellectual infrastructure thinned, the administrative capacity thinned with it, and the successor states inherited a weaker apparatus than the one their predecessors had built. The Shirvanshahs, who kept funding their scholars through this period, retained more capacity than most of their neighbours.\n\nThe modern resource curse literature documents the same pattern at national scale. Several oil states have under-invested in non-resource human capital during boom years and discovered, when the resource cycle turned, that they had nothing to fall back on. Azerbaijan's deliberate policy to invest in education during the 2000s was a hedge against this; the timing was chosen because the alternative was the resource curse outcome. Your refusal today is defensible on the current year's budget. It is harder to defend across the longer time horizon that the Shirvanshah court works in. Bakuvi bows and leaves. The Qadi notices.",
      },
    ],
    tags: ["human-capital", "research", "long-run-growth"],
  },
  {
    id: "arc-vizier-reform",
    speaker: "Vizier Farrukh",
    speakerType: "vizier",
    arcCharacter: "vizier",
    arcAffinityDirection: "high",
    scenario:
      "Shah, after these years of trust I will speak plainly. Our administration leaks. Tax-farmers skim a third before the silver reaches Shamakhi. I have drawn up a reform — paid officials, kept books, regular audits. The merchants will resist. The Qadi will call it innovation. The yield in ten years will repay it twice over.",
    options: [
      {
        label: "Back the reform. Sign the papers.",
        effects: { treasury: -8, people: 4, military: 2, faith: -4 },
        affinityEffects: { vizier: 2, qadi: -3, tahmina: -2 },
        explanation:
          "Institutional reform is the highest-return and slowest-paying investment a state can make. The economic concept is sometimes called administrative capacity or state capacity, and Daron Acemoglu and James Robinson's work over the past two decades has converged on the finding that inclusive, rule-bound institutions outperform extractive ones across centuries. The catch is that the transition is painful, takes longer than any single ruler's reign, and produces concentrated short-term costs for groups who benefited from the old system.\n\nThe Ilkhanate's clearest attempt at this kind of reform was Ghazan Khan's *yarligh* of around 1300, which tried to give security of tenure to landowners, regularise taxation, and curb the worst excesses of tax-farming. The reform partially worked — Ghazan's reign is generally read by historians as the peak of Ilkhanate administrative capacity — but the gains were not durable past his successors, who reverted to short-term extraction. Vizier Rashid al-Din, who helped draft the reforms and chronicled the period, was eventually executed in 1318 when the politics turned against him. Reform is fragile precisely because the people it dispossesses do not forget.\n\nThe modern Azerbaijani analogue runs through the country's State Tax Service modernisation in the late 2000s, the Asan Khidmat one-stop government service centres launched in 2012, and the ongoing tension between formalisation of the economy and the informal networks that resist it. The general direction is the same as your Vizier proposes: regularise, audit, professionalise. The cost is paid by the people who were profiting from opacity. The Vizier's affinity is at its peak. You have a window to do this; it will close.",
      },
      {
        label: "Decline. The current system works.",
        effects: { treasury: 3, people: -2, military: -1, faith: 2 },
        affinityEffects: { vizier: -4, qadi: 1, tahmina: 2 },
        explanation:
          "Declining preserves the existing arrangement and the relationships that depend on it. The Qadi is reassured. Tahmina is reassured. The tax-farmers continue to skim a third, but they also continue to deliver the remaining two-thirds reliably, which is what they have always done. The kingdom does not change.\n\nThe medieval pattern of governance was overwhelmingly this one. Most rulers, including most Shirvanshahs, governed within inherited institutions and modified at the margins. The cost is a permanent ceiling on what the state can do: it can fight defensive wars, fund occasional infrastructure, maintain the court and the army, but it cannot mobilise the kingdom's full economic potential because the administrative apparatus is structurally constrained. Acemoglu and Robinson would call this an extractive equilibrium. The kingdom survives. It does not grow.\n\nThe modern parallel is every state that has chosen administrative continuity over reform when reform was available. The Resource Curse literature documents this pattern repeatedly: oil-rich states that did not modernise their administrative capacity during the boom years discovered, when oil prices fell, that their institutions were not strong enough to manage the adjustment. Azerbaijan's deliberate institutional investment during the 2000s and 2010s was a hedge against the same outcome. Your refusal today is defensible. Your Vizier loses years of accumulated trust in a single conversation. He will continue to serve. He will not propose anything ambitious again.",
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
    scenario:
      "Shah, your Vizier moves against you. He has held meetings with the Qadi and with merchants of Shamakhi. We have witnesses. We can name names. Move first, before he does, or stand trial in your own court within the month.",
    options: [
      {
        label: "Arrest the Vizier. Confiscate his estates.",
        effects: { treasury: 8, military: 3, people: -6, faith: -3 },
        affinityEffects: { vizier: -10, qadi: -2 },
        explanation:
          "Acting first against a suspected rival has the appeal of decisiveness and the cost of every relationship that depended on the rival continuing to function. The Vizier's estate transfers to the treasury. The nobles who informed on him are rewarded with positions and patronage. The Qadi, who may or may not have actually conspired, recalculates his own exposure and either flees, submits, or begins planning his own move. The kingdom acquires a reputation for arbitrary aristocratic justice that will cost it the loyalty of every future official who hopes to serve and survive.\n\nThe Ilkhanate record is full of these episodes. Shams al-Din Juvayni, Hulagu's vizier, accumulated enormous estates under one ruler and was executed under the next in 1284 on charges that included poisoning the previous Ilkhan; his estates were seized as *inju* lands and the kingdom's administrative continuity took a measurable hit in the years following. Rashid al-Din, who succeeded the Juvaynis as the dominant administrative figure, was executed in 1318 on similar charges. Each removal solved an immediate political problem and weakened the institutional capacity the state depended on.\n\nThe modern parallel runs through every leadership consolidation in resource-rich states. The economic cost shows up not in the year of the removal but in the years afterward, as competent officials calculate that visible competence is now a risk factor. Azerbaijani institutional development has worked, where it has worked, partly by keeping the rules visible enough that competence is not punished as ambition. Your nobles are pleased with the arrests. The next generation of vizier-candidates is now reading the wind.",
      },
      {
        label: "Refuse. Hear the Vizier yourself first.",
        effects: { treasury: -2, military: -2, people: 3, faith: 4 },
        affinityEffects: { vizier: 4, qadi: 1 },
        explanation:
          "Refusing to act on the nobles' word alone preserves the procedural norm that accusations must be tested before being acted on. The Vizier is summoned and questioned. The witnesses are examined. The accusations may or may not have substance; what matters institutionally is that the test happened. If the Vizier is innocent, you have preserved a working relationship after a near-miss. If guilty, you have evidence that will survive any successor's scrutiny. Either outcome strengthens the rule-of-law character of your court.\n\nMedieval Islamic governance had a developed theoretical position on this — the Sharia courts and the *mazalim* tribunals of complaint that ran above them were specifically intended to test accusations before punishment. The institution worked unevenly in practice. Ghazan Khan's reforms tried to strengthen exactly this principle. Where the reforms held, capacity grew; where they failed, the state reverted to arbitrary action and lost capacity in proportion.\n\nThe modern Azerbaijani analogue is the ongoing development of judicial independence and the courts' relationship to executive power. The work is unfinished in most modern states; it was certainly unfinished in medieval Shirvan. What matters is the direction of travel. Your refusal to act on the delegation's word alone is a vote for procedure over expedience. The nobles leave disappointed. The Vizier's affinity recovers part of its loss. Whether he was actually plotting will be discovered in time.",
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
    scenario:
      "Shah, the ulama of Tabriz, Shamakhi, and Baku ask leave to convene a council in the great mosque. They wish to issue rulings on the lawful and the forbidden in commerce — usury, weights, the wine trade, the dhimmi taxes. Your patronage gives the council authority. Withhold it, and they meet anyway, with less.",
    options: [
      {
        label: "Patronise the council. Open it yourself.",
        effects: { treasury: -3, faith: 8, people: 4, military: -2 },
        affinityEffects: { qadi: 3, vizier: -1, tahmina: -2 },
        explanation:
          "Patronising the religious establishment converts religious legitimacy into political legitimacy. The economic concept is closer to political economy than to standard microeconomics: the ruler trades resources and access for the legitimating capacity of the clergy, who in turn use the ruler's patronage to settle internal disputes about doctrine and practice. The classical Islamic political theory, from al-Mawardi onward, expected exactly this relationship and the institutions developed around it.\n\nThe Shirvanshahs took this seriously. The Palace of the Shirvanshahs complex includes the Palace Mosque, completed in 1441–42 under Khalilullah I, and the tomb of Seyid Yahya Bakuvi — a Sufi scholar and astrologer whose status at the court was part religious authority and part intellectual capacity. The architectural investment in religious legitimacy was deliberate and expensive. Khalilullah I's funding of the Sangachal caravanserai and his broader patronage network worked because the religious establishment was inside the system rather than outside it.\n\nThe modern Azerbaijani parallel is the country's distinctive arrangement between a secular state structure and a state-recognised religious authority — the Caucasus Muslim Office, headed by the Sheikh-ul-Islam. The arrangement is unusual in the Muslim world and is the direct institutional descendant of the medieval model: religious authority operating with state recognition and within state-defined boundaries. Your patronage today sets the precedent for that relationship. The Vizier and Tahmina both notice that the council's rulings on commerce will narrow some of their options. The Qadi notices that you have honoured him.",
      },
      {
        label: "Withhold patronage. Let them meet without it.",
        effects: { treasury: 2, faith: -4, people: -2, military: 1 },
        affinityEffects: { qadi: -3, tahmina: 1 },
        explanation:
          "Withholding patronage signals that the kingdom does not depend on religious legitimation. The council meets anyway, in a smaller hall, with less formal authority and a sharper edge. Its rulings are read by the faithful and disregarded by the merchants. The clergy notes the absence and adjusts its assessment of where the court stands relative to the *ummah*.\n\nThe long-run cost is hard to see in any single year. Most rulers who declined to fund religious institutions did not face immediate consequences. The consequences accumulated. The Ilkhanate's pre-Ghazan rulers, several of whom were not Muslim and one of whom (Arghun) was openly hostile, governed for decades without serious religious challenge — but the Ilkhanate state's reach into Muslim society was constrained for those same decades, and the eventual Islamisation under Ghazan Khan in 1295 was partly a recognition that the lack of religious legitimacy had become a structural constraint on state action.\n\nThe modern parallel is the long debate in Muslim-majority states over the relationship between secular authority and religious institutions. Different countries have settled at different points on the spectrum, with corresponding trade-offs. Azerbaijan's settlement — secular state structure, recognised religious authority, state oversight of religious appointments — was the outcome of a long political process and was not the obvious choice when independence came in 1991. Your refusal today is a vote for state autonomy from clerical influence. The Qadi will remember it. Tahmina is quietly pleased; her commerce was about to be regulated.",
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
    scenario:
      "The Qadi has issued a *fatwa*, Shah. Your debasement of the coin, your tolerance of the wine houses, your dealings with the Genoese — all are pronounced contrary to the law. The faithful are instructed to consider their loyalty. He preaches at noon prayers tomorrow.",
    options: [
      {
        label: "Have him removed. Replace him with a compliant Qadi.",
        effects: { treasury: -2, faith: -8, people: -7, military: 2 },
        affinityEffects: { qadi: -10 },
        explanation:
          "Removing a sitting Qadi over a *fatwa* is a step few medieval Islamic rulers took lightly. The institutional cost is the perceived legitimacy of every future Qadi the kingdom appoints: if Qadis serve at the ruler's pleasure and are removed for inconvenient rulings, their authority collapses to that of any other royal official. The faithful note who left office and why. The replacement, however eminent, governs in the shadow of the removal. The legitimating function of the religious establishment, which is precisely what the ruler benefits from when relations are good, is degraded.\n\nThe Ilkhanate did this and paid the price. Several Ilkhans, particularly before Ghazan Khan's conversion in 1295, treated religious officials as employees and rotated them aggressively. The resulting weakness of the religious establishment was one of the structural problems Ghazan tried to repair; the *yarligh* reforms restored some autonomy to clerical institutions specifically to rebuild the legitimating function the previous generation had hollowed out. The cost of weakening religious institutions is paid for decades after the weakening.\n\nThe modern parallel runs through every state that has tried to subordinate religious authority entirely to political authority. The results have been mixed and rarely as the rulers hoped. The Caucasus Muslim Office in modern Azerbaijan operates within state-defined limits but retains substantive religious authority precisely because complete subordination would defeat the purpose. Your removal of the Qadi today is the medieval version of the same mistake. The replacement preaches what you require. No one listens with the same weight.",
      },
      {
        label: "Hear him out. Negotiate a settlement.",
        effects: { treasury: -4, faith: 3, people: 2, military: -1 },
        affinityEffects: { qadi: 3, vizier: -1 },
        explanation:
          "Negotiating with the Qadi acknowledges that religious authority has a real basis the throne cannot simply override. The *fatwa* may be modified, withdrawn, or narrowed in exchange for concessions — closing the worst of the wine houses, reforming a specific debasement, regularising the dhimmi taxes. The negotiation is humiliating but the alternative — a public preaching against your rule at noon prayers in the great mosque — is much worse.\n\nThe medieval evidence supports negotiation over confrontation in this kind of dispute. Mehmed II and the Ottoman *ulama*, Akbar and the Mughal religious establishment, the Safavid shahs and the Twelver clergy — each of these relationships involved repeated negotiations and concessions in both directions, with the rulers who handled them best generally being the ones who recognised that religious authority operated on a different basis from political authority and could not be coerced into submission without permanent damage to the legitimating function. Outright confrontation produced short-term victories and long-term institutional weakness.\n\nThe modern Azerbaijani equivalent is the ongoing calibration between the state's secular structure and the religious establishment's substantive authority on matters of personal status, family law, and religious practice. The settlement is not fixed; it is renegotiated continuously through small adjustments. Your negotiation with the Qadi today is the medieval version of the same continuous adjustment. He withdraws the *fatwa* in exchange for visible concessions. His affinity recovers partly. The kingdom continues without the rupture.",
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
    scenario:
      "Shirvanshah, this has become tedious. I have been taxed, refused, lectured by your Qadi, and accused twice by your Vizier. My caravans will go north next season. The Astrakhan route is open. I have already paid the bribes. Stop me with a better offer or watch the silk leave Shamakhi.",
    options: [
      {
        label: "Make the offer. Tax remission and a privileged status.",
        effects: { treasury: -10, people: 2, faith: -3, military: 1 },
        affinityEffects: { tahmina: 4, qadi: -2 },
        explanation:
          "Buying Tahmina back is a hostage negotiation. Her threat to redirect to the Astrakhan route is credible — the northern Volga-Caspian route was a real and active alternative throughout the medieval period, used by Russian and English merchants in the later centuries and by Genoese vessels operating through Astrakhan from the 14th century onward. If she goes, the customs revenue from her caravans goes with her, plus the wider network effect of the merchants who would have followed her trade through Shamakhi. The lost revenue over years is much larger than the cost of the concessions you're being asked for.\n\nThe medieval pattern of merchant retention shows up clearly in the documentary record. The 1562 Antony Jenkinson decree from the Shirvan governor Abdulla Khan Ustajlu, granting the Muscovy Company specific customs exemptions, is exactly the kind of negotiated privilege that retained foreign trade. The Genoese and Venetian colonies on the Caspian shore from the 12th century onward operated on similar grants. Rulers who refused to bargain saw merchants reroute; rulers who bargained kept the trade and accepted the smaller per-caravan revenue.\n\nThe modern Azerbaijani parallel is the country's deliberate use of tax incentives and customs facilitation to attract Middle Corridor transit traffic. Container traffic on the Trans-Caspian International Transport Route grew from 1.5 million tons in 2022 to 3.2 million tons in 2024, partly because the state actively bargained with shippers and offered terms that competing routes did not match. Your offer to Tahmina is the medieval scale-model of the same logic: accept lower margins per caravan to keep the caravans coming through. The Qadi notes the cost. The Vizier privately admires the manoeuvre.",
      },
      {
        label: "Let her go. Trade will find another route.",
        effects: { treasury: -6, people: -3, military: -1, faith: 2 },
        affinityEffects: { tahmina: -6 },
        explanation:
          "Letting Tahmina go saves the immediate concessions and costs the long-run trade flow. Her caravans redirect to Astrakhan. The customs revenue from her share of the Shamakhi trade disappears from the rolls. The smaller merchants who used her network for protection and credit lose those services and either follow her north, find other patrons, or shrink their operations. The Shamakhi market thins measurably within two seasons.\n\nThe historical record on lost trade is heavy with cases of cities that overplayed their hand. Routes are sticky for a generation and then suddenly shift. Once shifted they rarely return on the same scale. The Volga-Caspian route, Astrakhan, and the northern alternatives gained durably whenever the southern Caspian routes raised their effective transaction costs through tariffs, instability, or unfriendly courts. The Shirvanshah period was not immune from this and the Shirvanshahs who survived longest were the ones who recognised the dynamic.\n\nThe modern analogue is the recurring threat of cargo diversion that Azerbaijan faces from the alternative northern route through Russia and the southern route through Iran. The state's competitive position on the Middle Corridor is not given; it is actively maintained through pricing, infrastructure investment, and diplomatic capacity. Letting a major shipper redirect because the state refused a marginal concession is rarely a winning trade. Tahmina is gone. Her warehouse stands empty for a season and then is sold. The next major merchant who considers basing operations in Shamakhi notes what happened to her.",
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
    scenario:
      "Shah, General Farrukhzad has marched two regiments to the palace gate. He claims a tribute owed and demands you receive him. His standard is raised. The garrison commander asks whether to bar the gate or open it. Your answer in the next hour shapes whether you are still on the throne by sundown.",
    options: [
      {
        label: "Open the gate. Hear what he demands.",
        effects: { treasury: -12, military: 6, people: -3, faith: -2 },
        affinityEffects: { general: 5 },
        explanation:
          "Opening the gate accepts the General's coercive leverage and negotiates from a position of weakness. Whatever he demands — back pay for his troops, a confiscated estate restored, a marriage alliance, a removal of the Vizier — will cost the kingdom in proportion to how much you fear him. The economic concept is the price of an implicit threat: an army at the gate is worth the difference between what you would have paid voluntarily and what you will pay under duress. The number is rarely small.\n\nMedieval succession crises are full of these moments. The Ilkhanate's transition from Arghun to Gaykhatu in 1291, the Shirvanshah ransom of Ibrahim I from Qara Yusuf — each involved direct payment in exchange for the avoidance of worse outcomes. The Ibrahim ransom is particularly instructive: he paid a large sum in coin to recover his freedom and his throne, and the payment was understood as the price of resumption rather than a defeat. The kingdom survived because the payment was made. The longer-run cost was that the precedent existed.\n\nThe modern equivalent is the dilemma every state faces when a powerful subordinate institution — a military, an oligarchic faction, a regional governor — begins to act semi-autonomously. Azerbaijani institutional development has, over decades, increasingly subordinated regional and military authorities to central control, but the process was not smooth and there were moments in the 1990s when it could have gone otherwise. Your decision to open the gate is the medieval version of accepting a costly compromise to preserve continuity. The General gets what he wants. His affinity recovers. The captain of the household guard updates his estimate of who really commands.",
      },
      {
        label: "Bar the gate. Summon loyal forces.",
        effects: { treasury: -3, military: -8, people: 4, faith: 3 },
        affinityEffects: { general: -3 },
        explanation:
          "Barring the gate refuses the coercive demand and forces the General to either back down, retreat, or attempt an actual assault on the palace. The economic cost is whatever the resulting battle costs in men, structures, and the loyalties of those forced to choose a side. The political cost is the public spectacle of a kingdom whose military commander has marched on its capital. The benefit, if you survive, is that the precedent of coercive demands is broken.\n\nThe historical pattern of successful resistance to military coups is real but specific. It tends to require the existence of a counter-force — household troops, loyal nobles, allied foreign powers — and the appearance of legitimate authority on the side that resists. Sheikh Ibrahim Darbandi of Shirvan navigated several such moments by maintaining alliances that constrained any single subordinate's ability to act independently. The Ilkhanate's repeated successions, by contrast, often went the other way precisely because no counter-force existed strong enough to bar the gate.\n\nThe modern analogue runs through every successful and unsuccessful coup attempt in modern history, and the pattern that emerges is that institutional resistance succeeds when the institutions resisting are themselves substantively legitimate. Azerbaijani state development through the 2000s and 2010s built precisely this kind of institutional resilience, partly in conscious response to the instability of the early independence period. Your decision to resist is a vote for institutional integrity over personal continuity. The General either backs down, dies in the assault, or wins. If the gate holds, the kingdom changes. If it falls, the kingdom changes more.",
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
    scenario:
      "Shah, the urban council of Shamakhi has met without a leading merchant voice for three reigns. I propose the title of *rayis* — head of the city's commercial guilds, with formal standing in your court. I sit at the council. I bring you the merchants' position before it becomes the merchants' complaint. The cost is recognising us as a body, not as supplicants.",
    options: [
      {
        label: "Create the office. Appoint her rayis.",
        effects: { treasury: 6, people: 5, faith: -3, military: -1 },
        affinityEffects: { tahmina: 3, qadi: -2, vizier: 1 },
        explanation:
          "Formalising merchant representation converts an informal lobby into an institutional voice. The economic concept is sometimes called intermediation: a body that aggregates merchant positions and presents them to the ruler reduces the transaction cost of governing commerce, because the ruler now negotiates with one organised counterparty instead of with every merchant individually. It also reduces the cost of dissent — disputes get raised through a formal channel before they reach the street.\n\nThe medieval institutional record on this is mixed but real. The urban hierarchies of Baku and Shamakhi included a layer of major merchants within the urban aristocracy, with *rayises* heading guilds and workshops and an urban council with the *rayis ar-ruasa* at its civic apex. That is documented formal standing — not full court rank, but genuine institutional presence inside the city. The Geniza materials from the Cairo merchant world show parallel structures across the medieval Islamic economy: trader councils, formal *ortaq* associations, and urban notable status that gave commercial elites real political weight without making them sovereigns.\n\nThe modern Azerbaijani parallel runs through the country's chambers of commerce, industry associations, and the formal advisory councils that link the state to the energy and logistics sectors. The structure looks different from the medieval rayis system, but the logic is unchanged: the state benefits from an organised counterparty in commerce, and the commercial elite benefits from formal recognition that converts wealth into voice. The Qadi distrusts the move because it expands secular authority. The Vizier quietly approves because the new office reduces his own load. Tahmina has just become the most powerful merchant in Shirvan with a formal title to prove it.",
      },
      {
        label: "Refuse. Merchants speak through merchants, not through office.",
        effects: { treasury: -2, people: -2, faith: 3, military: 0 },
        affinityEffects: { tahmina: -3, qadi: 2 },
        explanation:
          "Refusing the office preserves the existing structure in which merchants approach the throne individually and through informal patronage. The cost is the continued transaction overhead of governing commerce one merchant at a time, with no body that can be held accountable for collective positions. The benefit is that no single merchant house gains a permanent institutional foothold inside the court, which preserves the ruler's freedom to favour and punish at the level of individual families rather than at the level of a recognised commercial estate.\n\nThe Shirvanshah record on formal merchant integration is thin in the sources, which is itself the answer: the dynasty preserved its prerogative by not creating offices that institutionalised commercial power. The closest documented case is the urban council layer in Baku and Shamakhi, which existed but operated below the level of royal court. The fuller integration of merchant houses into court structures — as happened in the Mamluk regulation of supply chains, or in the Ilkhanid *ortaq* relationship between Mongol nobility and trading partners — was a step the Shirvanshahs largely avoided.\n\nThe modern analogue is the long debate in resource-rich states over whether private wealth should formally enter political institutions or be kept at the level of influence without office. Several Gulf monarchies have actively resisted formal merchant representation precisely because the long-run effect is constitutional. Azerbaijani institutional development has preserved a relatively centralised executive structure with private commercial influence flowing through advisory and consultative channels rather than through formal elected merchant bodies. Tahmina hears your refusal and adjusts her register. The next conversation will be different.",
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
    scenario:
      "Shah, the army is professional now. My captains are men I trained. My sons train under those captains. Make the office of *amir* hereditary in my line. Continuity buys you a standing force. The alternative is a new general every generation, learning what I already know.",
    options: [
      {
        label: "Grant the hereditary office.",
        effects: { treasury: -4, military: 9, people: -3, faith: -3 },
        affinityEffects: { general: 4, vizier: -2 },
        explanation:
          "Making a military office hereditary is the institutional move that converts state capacity into a stable but rigid asset. The economic concept is sometimes called specific human capital: the General has accumulated knowledge — relationships with captains, drilled tactics, knowledge of terrain and supply lines — that does not transfer cleanly to a successor. Hereditary office attempts to keep that capital inside the family across generations. The trade-off is that the next generation may inherit the office without inheriting the competence, and the kingdom has bound itself contractually to whoever the General's grandson turns out to be.\n\nThe medieval Islamic record on hereditary military office is rich. The *iqta* system across the Seljuk and Ayyubid worlds awarded soldiers and officers the right to collect taxes from particular lands, sometimes for life, sometimes hereditary. The Mamluk transition went further: military office became sovereign power. Cambridge histories of the period note that military reach in this world rarely matched centralised administration, and that strong commanders steadily grew their political influence under still-reigning monarchs without necessarily replacing them. In the Shirvanshah orbit, the documented pattern shows emirs sitting below the shah in the feudal hierarchy alongside clergy and municipal officers, without the formal hereditary military rank that the General is now proposing.\n\nThe modern reading is the long literature on military professionalisation in small states. Stable military leadership is genuinely an asset; entrenched military leadership is a constitutional risk. Azerbaijan's modern military development has emphasised professionalisation through merit, training, and selective procurement rather than through hereditary office, partly because the institutional history of the region — Mamluk, Janissary, Ottoman — provides extensive cautionary material on what happens when military lineages become permanent. The Vizier hears your decision and quietly recalibrates. The General's grandson, who is currently a boy of nine, has just become important.",
      },
      {
        label: "Refuse. The office stays at the throne's gift.",
        effects: { treasury: 2, military: -5, people: 2, faith: 3 },
        affinityEffects: { general: -4 },
        explanation:
          "Refusing preserves the throne's prerogative to appoint and remove. The cost is the loss of the General's accumulated capital when he eventually retires or dies, and the resentment of a man who has just been told that his thirty years of service do not earn his son a place. The benefit is structural: no lineage outside the dynasty itself acquires permanent state office, which is the institutional guarantee against the slow erosion that eventually consumed several of the dynasties that did make such grants.\n\nThe Shirvanshah survival pattern is consistent on this point. The dynasty maintained continuity across four centuries partly by keeping the high offices revocable. Emirs served, were replaced, served again. The Vizier ranked highly but was not a hereditary office. The Qadi was a religious appointment with its own logic. When Sheikh Ibrahim Darbandi navigated the pressure of Timur and Toqtamish in the 1380s and 1390s, his flexibility came from not being bound to a fixed military leadership that owned its position. The Mamluk warning is the contrasting case: a system that began as professionalised military service and ended with the soldiers as the dynasty.\n\nThe modern parallel runs through every state's choice about how military leadership succeeds. Civilian control of the military in modern democracies, and the careful management of military appointments in modern presidential systems, both rest on the principle the General is asking you to abandon: that military office should not be heritable property. The General accepts your refusal with no visible reaction. He is fifty-eight years old. He has time to consider whether to bring it up again.",
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
    scenario:
      "Shirvanshah, the Ilkhan offers you Baku as his winter residence. Two months a year. His court rides in, your court hosts. The customs revenue triples in those months. The price is the city's eastern quarter set aside for Mongol use, and tribute reclassified as 'maintenance.' The relationship moves from vassal to partner.",
    options: [
      {
        label: "Accept. Welcome the Ilkhan to Baku.",
        effects: { treasury: 10, military: -3, people: -2, faith: -5 },
        affinityEffects: { envoy: 4, qadi: -3 },
        explanation:
          "Hosting the suzerain converts external pressure into formal integration. The economic concept is similar to a long-term contract that locks in advantageous terms in exchange for surrendering optionality: the relationship with the Ilkhanate becomes structurally stable, the tribute becomes predictable, the threat of punitive campaigns recedes. The cost is constitutional. Mongol presence inside the capital is no longer a temporary diplomatic event but an annual fixture, and the Mongol quarter of the city becomes a permanent foreign enclave.\n\nThis is exactly what happened. Baku served as a wintering place for Ilkhanid rulers, and Ghazan came to Baku in 1297 to winter there, in a relationship that went well beyond simple tribute. The integration was deep enough that the Shirvanshahs had to navigate not just suzerain demands but ongoing institutional presence inside their own capital. Later, when the Ilkhanate had fragmented and Kara Yusuf rose, Shirvanshah Ibrahim I recognised formal vassalage in 1413 — a reminder that the choice between resistance and integration ran throughout the dynasty's history, and that integration was sometimes the survival strategy that worked.\n\nThe modern analogue runs through the structure of small-state alignment with larger powers. Basing rights, transit corridors, customs unions, and the various negotiated forms of asymmetric integration are the modern form of welcoming the Ilkhan to Baku. Azerbaijan's transit relationships with Russia, Turkey, and the EU each involve some version of this trade: deeper integration in exchange for formal recognition and resource flow, balanced against constraints on independent action. The Qadi resists because the religious cost is real; the Mongol court is not Muslim in the way Shirvan understands the term. The Envoy is, for once, smiling.",
      },
      {
        label: "Refuse the residency. Keep Baku Shirvanshah ground.",
        effects: { treasury: -4, military: 3, people: 3, faith: 6 },
        affinityEffects: { envoy: -3, qadi: 3 },
        explanation:
          "Refusing preserves the integrity of the capital and forgoes the integration premium. The relationship with the Ilkhanate stays at the level of formal vassalage rather than ongoing residency, which means continued annual tribute, continued risk of punitive campaigns, and continued exposure to the Ilkhan's other priorities. The benefit is that Baku remains Shirvanshah territory in a way that integration would have ended. The Qadi can continue to preach in mosques that no Mongol prince currently uses.\n\nThe Shirvanshah dynastic strategy across the 13th and 14th centuries was a careful balancing act between the autonomy of refusal and the security of integration, and different rulers chose differently. The 1235–1236 Mongol subjugation of the Caucasus set up indirect rule that allowed local rulers to retain office in exchange for tribute and acceptance of overarching authority. Punitive campaigns against vassals who tested those limits were a real and documented threat: the Ilkhanate used hostage-taking, raids, confiscation, and replacement of rulers as the standard menu of coercion when vassals stepped outside acceptable bounds. The 1280s through the 1330s in the Caucasus were a period in which several local rulers paid the price of overreach.\n\nThe modern reading is the case for strategic autonomy under conditions of asymmetric power. Switzerland's centuries-long neutrality, Singapore's careful non-alignment, and several small-state diplomatic traditions are built around the same logic the Qadi is voicing: deeper integration may buy peace today but reduces the optionality the small state will need tomorrow. Azerbaijan's multi-vector foreign policy since independence reflects this learning at scale. The Envoy returns to his Ilkhan with the refusal. There will be a response. There is always a response.",
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
    scenario:
      "Shah, the Ilkhan has sent a punitive *tumen*. Ten thousand horse, crossing the western passes now. They burned Ganja on the way through. The Envoy you turned away last spring rides at the front. Shamakhi has perhaps four days. Your decision in the next hour shapes what happens next.",
    options: [
      {
        label: "Empty the treasury. Send envoys with everything you have.",
        effects: { treasury: -25, military: -2, people: 2, faith: -4 },
        affinityEffects: { envoy: 4 },
        explanation:
          "Last-minute submission attempts to convert an imminent punitive campaign into a renegotiated vassalage. The economic concept is the price of a credible commitment in extremis: at the gate of disaster, the throne offers everything it has in exchange for the campaign halting before it reaches the city. The Ilkhan's commanders know exactly how badly you need the halt. The price will reflect that.\n\nThe Ilkhanid punitive system was designed for exactly this moment. Cambridge histories of the period note that the Mongols subdued the Caucasus in 1235 to 1236 and then relied on local aristocracies under indirect rule, which set up a structure in which defiance could be punished proportionally without full annexation. The punitive menu was extensive: hostage-taking, raids, confiscation, replacement of rulers, the threat of direct occupation. Submission was almost always accepted if the price was high enough, because the Ilkhanate preferred negotiated tribute to occupied territory. Ibrahim I's later submission to Timur — the famous 'I am myself the ninth' moment in 1394 — is the dramatic version of exactly this pattern, with Ibrahim paying both gold and personal humiliation to preserve the dynasty.\n\nThe modern parallel is the long literature on coercive diplomacy and the cost of escalation. Sanctions, border closures, selective support for rival elites, and the threat of direct military action are the contemporary forms of the punitive *tumen*. Small states that misread the larger power's tolerance pay the price either in concessions or in territory. Azerbaijan's careful navigation of post-Soviet space has involved repeated calibration of when to accept reduced terms and when to risk the punitive response, with the 2020 and 2023 operations representing the inverse moment when the smaller state had the leverage. Today is not that moment. The treasury empties. The campaign halts ten miles short of Shamakhi.",
      },
      {
        label: "Stand. Defend the walls.",
        effects: { treasury: -3, military: -10, people: -8, faith: 5 },
        affinityEffects: { envoy: -6 },
        explanation:
          "Standing accepts the punitive campaign and gambles on the walls. The economic logic is that submission has its own catastrophic cost — emptied treasury, lost prestige, the precedent that the Ilkhan can mount a *tumen* whenever he is displeased and be paid for it — and that resistance may produce a settled outcome at a different price. The cost is that 12th-century Caucasus city walls, however thick, were not built to withstand a sustained Mongol-trained siege army. The 1066 capture of both Shamakhi and Baku by Kara-Tegin's Turks is the warning.\n\nThe historical record on standing against Ilkhanid punitive campaigns is harsh. The cities that resisted typically fell. The cities that fell were typically subjected to the full menu of punishment — population reduction, replacement of ruling families, confiscation of treasury and inventory, conscription of artisans. Ganja, which the messenger reports the *tumen* has just burned on the way through, is the proximate cautionary example. The dynastic strategy that worked across the Shirvanshah period was almost never head-on resistance to a major punitive force; it was the careful management of relationships before the *tumen* was dispatched, and emergency submission once it had been.\n\nThe modern reading runs through the strategic literature on deterrence failure and the cost of misjudging escalation. Small states that resist when submission was the rational move tend to end up smaller. Small states that submit when resistance was viable tend to end up dependent. The line between the two is hard to see in advance and ruinous to mistake. The Envoy you turned away last spring is at the head of the column. He remembers your refusal with great clarity. The Qadi prepares to die on the walls. He may get his wish.",
      },
    ],
    tags: ["arc", "punitive-campaign", "geopolitics"],
  },
];
