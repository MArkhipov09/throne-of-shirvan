// Plain-language gloss for the historical, Azerbaijani and Islamic terms that
// appear in the card text. The game wraps the first occurrence of each term in
// a scenario or explanation so a player can hover (or tap/focus) to see what it
// means. Keep each definition to roughly one sentence, in the game's voice.
//
// `glossaryAliases` maps surface variants (irregular plurals, adjectives,
// alternate spellings) to a canonical key; regular "+s"/"+'s" plurals are
// handled automatically and need no alias.

export const glossary = {
  // --- Peoples, dynasties, foreign powers ---
  Ilkhan:
    "A ruler of the Ilkhanate, the Mongol dynasty that governed Persia and the Caucasus from 1256 to 1335.",
  Ilkhanate:
    "The Mongol state ruling Persia, Iraq and the Caucasus (1256–1335), founded by Hulagu, a grandson of Genghis Khan.",
  Mongol:
    "The steppe people who under Genghis Khan and his heirs built the largest land empire in history in the 13th century.",
  Seljuk:
    "A Turkic dynasty that ruled much of the Middle East and Anatolia in the 11th and 12th centuries, before the Mongols.",
  Shirvanshah:
    "The hereditary title of the rulers of Shirvan, the Caspian kingdom you govern in this game.",
  Rus: "The medieval Scandinavian-Slavic peoples of the northern river-lands, whose fleets raided the Caspian coast.",
  Bagrationi:
    "The royal dynasty of medieval Georgia, the Christian kingdom north-west of Shirvan.",
  Genoese:
    "A merchant from Genoa, the Italian maritime republic whose traders dominated the Black Sea and reached the markets of Persia overland.",
  Venetian:
    "A merchant from Venice, Genoa's great Italian trading rival.",
  "Muscovy Company":
    "An English trading company chartered in 1555 whose agents reached Shirvan through Russia in the 1560s, seeking silk.",
  "Great Khan":
    "The supreme Mongol emperor in the east, to whom the Ilkhans were nominally subordinate.",

  // --- Rulers and notable individuals ---
  Hulagu:
    "A grandson of Genghis Khan who sacked Baghdad in 1258 and founded the Ilkhanate.",
  "Ghazan Khan":
    "Ilkhan from 1295 to 1304 who embraced Islam and reformed the coinage and taxes with his vizier Rashid al-Din.",
  Gaykhatu:
    "Ilkhan (1291–1295) remembered for printing paper money at Tabriz in 1294, which the markets refused.",
  "Rashid al-Din":
    "Persian statesman, historian and physician who served as vizier to Ghazan Khan and directed his reforms.",
  "Abu Sa'id":
    "The last effective Ilkhan; his death without an heir in 1335 split the Mongol state into warring factions.",
  Timur:
    "Turco-Mongol conqueror (Tamerlane, d. 1405); the Shirvanshah Ibrahim I became his vassal in 1386 and in 1394 won his favour with the famous 'I am the ninth' gift.",
  "Qara Yusuf":
    "Turkmen ruler of the Black Sheep confederation who defeated and captured the Shirvanshah Ibrahim I.",
  Ibrahim:
    "Ibrahim I, Shirvanshah (r. 1382–1417), who rebuilt the kingdom's strength and famously bowed to Timur to save it.",
  Khalilullah:
    "A 15th-century Shirvanshah under whom the dynasty's palace at Baku flourished.",
  Manuchihr:
    "An 11th-century Shirvanshah who rode out to beat off Rus raids on the Caspian coast.",
  "Farrukh Yasar":
    "A 15th-century Shirvanshah who completed the royal palace at Baku.",
  "al-Tusi":
    "Nasir al-Din al-Tusi, the Persian polymath who directed the great Maragheh observatory built under Hulagu in 1259.",
  Bakuvi:
    "Seyid Yahya Bakuvi, a 15th-century Khalwati Sufi master and scholar housed at the Shirvanshahs' Baku palace, where his tomb still stands.",
  "Omar Khayyam":
    "Persian poet and mathematician who helped compute the accurate Jalali solar calendar in 1079.",
  "Malik-Shah":
    "The Seljuk sultan (r. 1072–1092) for whom the Jalali calendar was reformed.",
  "Marco Polo":
    "The Venetian traveller (d. 1324) whose account noted the silk of Shirvan and the oil seeps of Baku.",
  "Giosafat Barbaro":
    "A Venetian envoy to Persia who in 1476 described Shamakhi as a thriving silk city of some four to five thousand houses.",
  "al-Mansur":
    "The Abbasid caliph (r. 754–775) who founded Baghdad in 762, in whose era the naphtha of the Caspian shore was a noted source of revenue.",
  "Queen Tamar":
    "The powerful queen of Georgia (r. 1184–1213), whose Bagrationi house intermarried with the Shirvanshahs.",
  "Kara-Tegin":
    "A Turkic commander whose forces seized Shamakhi and then Baku in 1066.",

  // --- Places ---
  Shirvan:
    "The medieval kingdom on the western shore of the Caspian, roughly modern Azerbaijan, ruled from Shamakhi.",
  Shamakhi:
    "The inland capital of Shirvan and a great silk-trading city; today a town in central Azerbaijan.",
  Baku:
    "Shirvan's port on the Absheron peninsula, famed since antiquity for its oil seeps; now Azerbaijan's capital.",
  Absheron:
    "The peninsula around Baku whose ground oozes oil and gas, the source of the realm's naphtha.",
  Surakhani:
    "A place on the Absheron peninsula known for burning gas vents and a fire-temple.",
  Derbent:
    "A fortified Caspian port just north of Shirvan (now in Russian Dagestan), guarding the coastal pass.",
  Tabriz:
    "The great north-west Persian city that served as the Ilkhanate's capital and a hub of the silk trade.",
  Ganja:
    "A major city of Arran, on the route between Shirvan and Georgia.",
  Salyan:
    "A district on the lower Kura river in Shirvan, noted for its fisheries.",
  Astrakhan:
    "The town at the mouth of the Volga (a Tatar khanate's port, Russian only after 1556) where Caspian trade met the routes north.",
  Caucasus:
    "The mountain region between the Black and Caspian seas, dividing the steppe from Persia.",
  Caspian:
    "The great inland sea on whose western shore Shirvan lay; its trade was the kingdom's lifeblood.",
  Volga:
    "The great river flowing into the Caspian, the trade artery toward the Russian lands.",
  Kura:
    "The main river of Shirvan, running through the lowlands to the Caspian.",
  Sangachal:
    "A point on the Baku–Salyan road where a royal caravanserai sheltered passing caravans.",
  Maragheh:
    "The north-west Persian city whose observatory, built under Hulagu in 1259, was the finest of its age.",
  Baghdad:
    "Capital of the Abbasid caliphate until the Mongols sacked it in 1258.",
  Cairo:
    "Capital of the Mamluk sultanate of Egypt, which became a refuge for scholars after Baghdad's fall in 1258.",
  Bukhara:
    "A Central Asian city of scholarship and trade on the Silk Road.",
  Bursa:
    "An Anatolian city that became a rival terminus of the silk trade under the Ottomans.",
  Trebizond:
    "A Black Sea port and the western outlet of one branch of the silk route.",
  Gilan:
    "The damp, forested Caspian province of northern Persia, a source of silk and timber.",
  Fars:
    "The southern Persian province around Shiraz, often farmed out to tax contractors under the Ilkhans.",
  Arran:
    "The lowland region between the Kura and Aras rivers, west of Shirvan.",
  Daghestan:
    "The mountain country north of Derbent, home to the highland chiefs who raided Shirvan.",
  Georgia:
    "The Christian Bagrationi kingdom north-west of Shirvan, sometimes ally and sometimes rival.",
  "Maiden Tower":
    "The great stone tower of Baku's walled old city, an enduring landmark of the port the Shirvanshahs made their capital in the 15th century.",
  "Silk Road":
    "The web of caravan routes carrying silk and goods between China, Persia and the Mediterranean.",

  // --- Institutions, terms, objects ---
  naphtha:
    "Crude oil seeping naturally from the ground around Baku; burned for light, war and ritual, it was Shirvan's signature wealth.",
  qadi: "A judge who administers Islamic law.",
  vizier: "A chief minister and head of administration under a Muslim ruler.",
  amir: "A military commander or great noble; under the Mongols, a senior captain of the army.",
  dinar:
    "A gold coin of the medieval Islamic world (used loosely here for the realm's silver coinage too).",
  dirham: "A silver coin, the everyday money of the medieval Islamic lands.",
  waqf:
    "An inalienable charitable endowment under Islamic law, its lands locked forever to fund a mosque, college or hospital.",
  "moqata'a":
    "Tax-farming: the right to collect a district's taxes, sold to a contractor who paid in advance and kept what he could wring out.",
  iqta: "A grant of land or its tax revenue to a soldier or official in return for service.",
  muhtasib:
    "The market inspector of a Muslim city, charged with fair weights, honest dealing and public order.",
  sarraf:
    "A money-changer and banker who weighed coin, exchanged currencies and handled bills of exchange.",
  caravanserai:
    "A fortified roadside inn where caravans could rest, stable their beasts and store goods in safety.",
  funduq:
    "A merchants' lodging-house and warehouse in a trading city, where traders could stay, store goods and do business under one roof.",
  madrasa: "A college of higher Islamic learning.",
  fatwa: "A formal legal opinion issued by a qualified religious scholar.",
  Sharia: "The sacred law of Islam, drawn from the Quran and the example of the Prophet.",
  muezzin: "The man who calls Muslims to the five daily prayers from the mosque.",
  tumen: "A Mongol army division, in principle ten thousand horsemen.",
  rayis:
    "The chief local notable or headman of a town, who represented its people to the ruler and helped keep order.",
  seep: "A natural spring where oil or naphtha oozes to the surface.",
  astrolabe:
    "A brass instrument for measuring the positions of the stars and sun, used for timekeeping, navigation and prayer-times.",
  Nowruz: "The Persian new year, falling at the spring equinox.",
  Sufi: "A follower of the mystical, devotional tradition within Islam.",
  "Greek fire":
    "A Byzantine incendiary weapon sprayed from ships, whose secret formula is lost but was probably petroleum-based and famously kept burning even on water.",
  "Jalali calendar":
    "A remarkably accurate solar calendar computed for Sultan Malik-Shah in 1079, with help from Omar Khayyam.",
  "bill of exchange":
    "A written order to pay a sum in another place, letting merchants move money without carrying coin.",
  sumptuary:
    "Describing laws that restrict what people may wear, eat or own according to their rank.",
  Quran: "The holy book of Islam, believed by Muslims to be the word of God.",
  caliph:
    "The supreme leader of the Muslim community, successor to the Prophet; the Abbasid caliphs ruled from Baghdad.",
  Abbasid:
    "The dynasty of caliphs that ruled the Islamic world from 750, governing from their new capital Baghdad (founded 762) until the Mongols sacked it in 1258, after which a powerless line lingered in Cairo to 1517.",
  ihtikar:
    "The hoarding or cornering of a needed good to force up its price, condemned by Muslim jurists.",
  yargu:
    "A Mongol court of inquiry that heard disputes, including tax-farmers' claims that a district had failed.",
};

// Surface variants that the automatic "+s / +'s" plural rule would miss.
export const glossaryAliases = {
  Ilkhans: "Ilkhan",
  Ilkhanid: "Ilkhanate",
  Mongols: "Mongol",
  Seljuks: "Seljuk",
  Shirvanshahs: "Shirvanshah",
  Genoa: "Genoese",
  Venetians: "Venetian",
  Georgian: "Georgia",
  Daghestani: "Daghestan",
  "moqata": "moqata'a",
  amirs: "amir",
  Ghazan: "Ghazan Khan",
  caliphate: "caliph",
  caliphs: "caliph",
};
