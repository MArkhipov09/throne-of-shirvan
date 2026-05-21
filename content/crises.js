// Crisis cards fire when a stat first crosses an extreme threshold
// (below 15 or above 85) in a reign. Each entry should match the same
// shape as a normal card with two extra fields:
//
//   triggerStat:      one of "treasury" | "people" | "military" | "faith" | "naphtha"
//   triggerDirection: "low" (stat < 15) | "high" (stat > 85)
//
// A stat can fire at most one crisis per reign. Crises interrupt the
// normal card flow and do not increment the cardsPlayed counter.

export const crises = [
  {
    id: "crisis-bread-riot",
    speaker: "A captain of the city watch",
    speakerType: "one-off",
    triggerStat: "people",
    triggerDirection: "low",
    scenario:
      "Shah, the bread market in Shamakhi has burst into riot. Three bakers' shops burned. A merchant trampled. The crowd marches on the palace gate. We have an hour, perhaps two. Bread or steel — your order.",
    options: [
      {
        label: "Open the royal granaries. Distribute bread free.",
        effects: { treasury: -15, people: 8, faith: 3, military: -2 },
        explanation:
          "Distributing the royal grain reserve directly to the rioters short-circuits the crisis by addressing its proximate cause: the people have no bread. The economic logic is that the marginal value of a measure of grain to a starving family is overwhelmingly larger than the marginal value to the royal storehouse, and the welfare gain from the transfer dwarfs the fiscal cost. The political gain — visible mercy in the moment of greatest need — is real but secondary. The cost is the depleted reserves, which leave the kingdom thinner against any future shock.\n\nMedieval Islamic rulers who survived bread riots overwhelmingly did so by opening the granaries. The pattern is documented across Cairo, Damascus, Baghdad, and the Persian cities through the Abbasid and Ilkhanate periods. The grain was usually replaced from the next harvest; the alternative was a riot that ended a reign. The Mongol-era famines of the 1230s and 1240s in the Caucasus were partly survived by exactly this kind of emergency distribution, where rulers had reserves and chose to use them.\n\nThe modern parallel is the role of state grain reserves and emergency food distribution in Azerbaijani fiscal policy. The state maintains strategic grain stockpiles precisely so that price spikes or supply shocks can be buffered without the political crisis a bread shortage would create. The instrument is more sophisticated than your medieval granary but the logic is identical. The captain of the watch is relieved. The crowd disperses with bread. The Vizier quietly notes the reserve that no longer exists.",
      },
      {
        label: "Send the garrison to disperse the crowd.",
        effects: { treasury: 0, people: -8, military: -4, faith: -4 },
        explanation:
          "Suppressing a bread riot by force is the cheapest immediate option and the most expensive long-run one. The garrison disperses the crowd. The dead are counted in the morning. The proximate problem — hunger — is unchanged. The new problem — a population that has seen the kingdom's response to its starvation — is added on top. Repression works on a single crisis. It does not work on the underlying conditions.\n\nThe medieval pattern of repressed bread riots shows up in the chronicles primarily through what came next: a second riot, larger and angrier, sometimes weeks later, sometimes months. The Ilkhanate's late-period instability had a substantial bread-and-grain component, and the regimes that responded primarily with force were generally the ones that did not survive the next crisis. Survivors mixed force with relief, but the relief did most of the work. The force was the perimeter, not the answer.\n\nThe modern reading is the cost of policing economic distress rather than addressing it. Several states have tried the force-first approach to food and fuel protests in the past two decades and the pattern is consistent: the protests recur, the cost compounds, and the eventual resolution involves the relief that was withheld initially plus the political damage from the suppression. Your captain enforces the order. The crowd disperses, leaving its dead. The kingdom is quieter tonight. The next riot will be harder.",
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
    scenario:
      "A *fatwa* is being prepared, Shah. The clergy of Shamakhi and Baku call your reign contrary to the Sharia. Tomorrow at noon prayers the ruling will be read in every mosque in the kingdom. The Qadi is silent. Act now or your authority hollows by sundown.",
    options: [
      {
        label: "Publicly fund a great mosque. Make visible amends.",
        effects: { treasury: -12, faith: 8, people: 3, military: -2 },
        explanation:
          "Funding a major religious project on the eve of a hostile *fatwa* is the medieval ruler's standard countermove. The cost is large and concentrated; the gain is the public, undeniable demonstration that the ruler is investing the kingdom's resources in the religious establishment. The *fatwa* loses its rhetorical edge because the ruler is, visibly and immediately, doing what the clergy says faithful rulers do. The economic concept is the costly signal — an action that is too expensive to be faked, and therefore credible.\n\nThe Shirvanshahs used this instrument throughout their long peak. Khalilullah I's completion of the Palace Mosque in 1441–42, his funding of the Sangachal caravanserai, the broader construction programme across the Palace complex — these were costly signals as much as functional buildings. The investments tied the religious establishment to the dynasty's continuation, and the dynasty survived crises that broke neighbouring states. The same pattern shows up in Ghazan Khan's mosque-building after his conversion in 1295, in Akbar's Mughal religious patronage, and in many other ruler-clergy crises across the medieval Islamic world.\n\nThe modern Azerbaijani parallel is the state's substantial funding of religious infrastructure — the restoration of historical mosques, the construction of major new ones like the Heydar Mosque in Baku, the funding of the Caucasus Muslim Office. These investments are partly cultural, partly political; they maintain the formal relationship between state and religious authority that medieval Shirvan operated within. Your funding today buys you the *fatwa*'s withdrawal. The cost is real. The alternative is worse.",
      },
      {
        label: "Confront the clergy directly. Threaten removal of those who issue the fatwa.",
        effects: { treasury: 0, faith: -10, people: -3, military: 2 },
        explanation:
          "Threatening religious officials directly is the medieval equivalent of escalating into a fight you are very unlikely to win. The clergy's authority does not depend on the ruler's permission; their *fatwa* will be issued whether you threaten them or not, and the threat itself becomes part of the *fatwa*'s evidence that the ruler is acting outside the law. Some officials will withdraw under direct threat. Others will issue stronger rulings to demonstrate that they cannot be intimidated. The net effect is usually worse than the original *fatwa*.\n\nThe medieval pattern is consistent. Several Ilkhans before Ghazan Khan's conversion treated religious officials as employees and rotated them aggressively, and the result was not compliance but a sustained reduction in the legitimating function the religious establishment could provide. Ghazan's reforms specifically had to rebuild this capacity from a low base. Confrontation with the clergy tends to be a strategy of last resort or of rulers who do not understand what they are giving up.\n\nThe modern parallel runs through every state that has attempted direct subordination of religious authority and discovered the costs accumulate slowly and durably. Your confrontation today produces a *fatwa* by sundown. The replacements you appoint speak with less authority than the originals. The kingdom continues but the religious establishment's loyalty has been spent for a generation. The Vizier privately notes that the Qadi, when he was at his peak affinity, would not have allowed this to reach a *fatwa*. That is a separate problem now.",
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
    scenario:
      "Shah, the great pool at Surakhani has caught. The fire spreads through the storage trenches. Three workers dead, the fire visible from the city walls. We can flood the seeps with seawater, killing the fire and the field for a generation, or fight it with sand and lose another night of men.",
    options: [
      {
        label: "Flood the seeps. End the fire now.",
        effects: { treasury: -4, naphtha: -25, people: 4, military: -2 },
        explanation:
          "Flooding the seeps with seawater immediately suppresses the fire and effectively destroys the productive field for the foreseeable future. The salt water contaminates the oil-bearing strata, the surface infrastructure is wrecked, and the workers who survived will not return to a field they remember as a death trap. The economic loss is large and concentrated in a single resource. The benefit is that the fire stops and no further workers die.\n\nMedieval rulers who managed industrial accidents of this kind generally chose the conservative option: stop the proximate harm at any cost. The Absheron seeps had been productive for centuries by the time of the Shirvanshahs — Yaqut al-Hamawi's 13th-century valuation of 2,000 silver dirhams a day in output assumed continuous operation, and the Surakhani field alone was eventually yielding several thousand kilograms of oil daily. Losing the field temporarily was a serious blow. Losing more workers and the city's confidence in the safety of the operation was worse.\n\nThe modern parallel is industrial safety regulation and the cost of disaster response. Azerbaijan's offshore oil operations have had several major incidents over the decades; the response in each case has been to absorb the immediate production loss and rebuild more conservatively afterward, rather than attempting to maintain output through an unsafe situation. The 1957 Oil Rocks accidents and the more recent Guneshli platform incidents both followed this pattern. The cost is real and acknowledged; the alternative is a longer-running disaster. The overseer is relieved. The Master of the Mint is calculating how the treasury copes without naphtha revenue for the next several years.",
      },
      {
        label: "Fight the fire with sand. Save the field.",
        effects: { treasury: -8, naphtha: -8, people: -6, faith: -2 },
        explanation:
          "Fighting the fire with sand and labour saves most of the productive capacity at the cost of more lives. The economic concept is the trade-off between asset preservation and labour cost when labour is undervalued by the decision-maker. Workers continue to be sent into the fire-ring, some die, and most of the field is eventually saved. The kingdom's naphtha revenue continues at reduced capacity rather than collapsing. The workers' families, the neighbouring villages, and the religious establishment all draw their own conclusions about whose lives the throne weighs against what.\n\nThe medieval evidence on labour valuation in dangerous trades is rarely flattering. Caspian shipping, the Caucasus mining operations, the Absheron oil extraction itself — these were all high-mortality trades operated by rulers and contractors who calculated labour replacement costs against asset preservation and tended to choose the asset. The 1597 Arabic inscription documenting the Baku oil-pit lease system implies a workforce treated as an input rather than as a constituency. The economics worked from the lessor's point of view; it produced a steady undertow of resentment that eventually fed into broader political instability.\n\nThe modern reading is the long shift in industrial safety norms, where labour is now valued explicitly through wage compensation, regulation, and the political cost of mass casualty events. Azerbaijan's modern oil industry, including the Caspian offshore operations, has invested heavily in safety protocols partly because the political and economic cost of major casualty incidents now exceeds the asset preservation gain in almost every scenario. Your decision today is a medieval calculation that the asset is worth more than the labour. The field survives. The Qadi will not let you forget what it cost.",
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
    scenario:
      "Shah, a confederation of Daghestani mountain chiefs has crossed the passes in force. They know exactly how full your vaults are. Three thousand horse and as many foot, marching on Shamakhi within the week. They come for the coin, not the kingdom.",
    options: [
      {
        label: "Pay them off. Save the kingdom the war.",
        effects: { treasury: -22, military: 2, people: 4, faith: -3 },
        explanation:
          "Paying a raid party to leave is a transaction in concentrated risk. The economic concept is what insurance theorists call risk transfer: you convert an uncertain catastrophic loss — a sacked city, dead defenders, burned warehouses — into a smaller certain loss. The trade is rational when the expected damage exceeds the ransom. The mountain chiefs know this and price their threat accordingly. The price they ask is high precisely because they have read your treasury correctly.\n\nVisible wealth in medieval Shirvan attracted exactly this pressure. A Rus detachment struck the coast in 1030 and Shirvanshah Manuchihr I had to fight them near Baku. In 1066 Kara-Tegin's Turks captured Shamakhi and then Baku in sequence, and the period chronicles frame the assault as targeted specifically at the rich urban centres. Baku's role as a major Caspian port exporting oil, silk, and salt meant that foreign raiders, in the period phrase, 'always fixed their eyes' on the city. Wealth without proportional fortification is an invitation that pre-modern raiders consistently accepted.\n\nThe modern Azerbaijani parallel runs through the strategic-vulnerability literature on resource-rich small states. Concentrated wealth in a single corridor — the Baku-Absheron oil and gas infrastructure — creates a security problem that the state pays to manage continuously through defence spending, diplomatic alignment with larger powers, and infrastructure redundancy. The 2020 Karabakh war and the 2023 operation in Karabakh both showed the state's willingness to spend treasury on military capacity precisely because resource concentration without security is the classic raider's target. Paying off the chiefs today buys you the year. Next year they will be back, knowing what you paid.",
      },
      {
        label: "Fight them. Empty the garrison and ride out.",
        effects: { treasury: -8, military: -12, people: -6, faith: 4 },
        explanation:
          "Choosing battle preserves the principle that the treasury is not for sale and risks the army. The economic logic is reputational: a kingdom that pays off raiders teaches other raiders to come. A kingdom that fights teaches them to choose other targets. The cost is a real military engagement with an unpredictable outcome, dead men, and damage to the agricultural hinterland whichever side wins.\n\nThe Shirvanshah record on direct defence is mixed. Manuchihr I fought the 1030 Rus raid successfully near Baku, but the 1066 Kara-Tegin Turkic assault took both Shamakhi and Baku before being driven out, and the urban damage took a generation to repair. The pattern across the dynasty was that the Shirvanshahs maintained substantial garrisons and walls — the 12th-century defensive walls of Icheri Sheher, preserved at 8 to 10 metres height and 3.5 metres width, are evidence of that investment — but the geography of the western passes meant that mountain confederations could mass faster than the kingdom could intercept. Pitched battle outside the walls was usually the wrong shape of fight.\n\nThe modern reading is that absolute deterrence is rarely the right strategy for small states facing larger or more mobile threats. The Azerbaijani military doctrine across the long Karabakh conflict deliberately avoided open engagement on unfavourable terms, accepting strategic patience until the operational window opened in 2020. The instinct to fight the raid head-on is honourable. It is also how Manuchihr I won and how the 1066 defenders lost. The Qadi will admire your refusal to pay. The General will say nothing and ride.",
      },
    ],
    tags: ["crisis", "raid", "treasury-high"],
  },
];
