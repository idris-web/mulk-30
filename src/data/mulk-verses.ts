// Surah Al-Mulk (67) - 30 verses for 30-day challenge
// Each day = one verse

export interface Verse {
  dayIndex: number;
  surahNumber: number;
  ayahNumber: number;
  arabic: string;
  albanian: string;
  transliteration: string;
}

export const MULK_VERSES: Verse[] = [
  {
    dayIndex: 1,
    surahNumber: 67,
    ayahNumber: 1,
    arabic: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    albanian: "I Lartësuar është Ai, në dorën e të Cilit është sundimi dhe Ai ka fuqi për çdo gjë.",
    transliteration: "Tabārakal-ladhī biyadihil-mulku wa huwa 'alā kulli shay'in qadīr"
  },
  {
    dayIndex: 2,
    surahNumber: 67,
    ayahNumber: 2,
    arabic: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ",
    albanian: "Ai i cili krijoi vdekjen dhe jetën, për t'ju provuar se cili prej jush do të bëjë vepra më të mira. Ai është i Plotfuqishmi, Falësi.",
    transliteration: "Alladhī khalaqal-mawta wal-ḥayāta liyabluwakum ayyukum aḥsanu 'amalā. Wa huwal-'azīzul-ghafūr"
  },
  {
    dayIndex: 3,
    surahNumber: 67,
    ayahNumber: 3,
    arabic: "الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا ۖ مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِن تَفَاوُتٍ ۖ فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ",
    albanian: "Ai i cili krijoi shtatë qiej njërin mbi tjetrin. Nuk sheh asnjë mospërputhje në krijimin e të Gjithëmëshirshmit. Ktheje shikimin, a sheh ndonjë të çarë?",
    transliteration: "Alladhī khalaqa sab'a samāwātin ṭibāqā. Mā tarā fī khalqir-raḥmāni min tafāwut. Farji'il-baṣara hal tarā min fuṭūr"
  },
  {
    dayIndex: 4,
    surahNumber: 67,
    ayahNumber: 4,
    arabic: "ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ يَنقَلِبْ إِلَيْكَ الْبَصَرُ خَاسِئًا وَهُوَ حَسِيرٌ",
    albanian: "Pastaj ktheje shikimin edhe dy herë, shikimi do të të kthehet i poshtëruar dhe i lodhur.",
    transliteration: "Thummarji'il-baṣara karratayni yanqalib ilaykal-baṣaru khāsi'aw wa huwa ḥasīr"
  },
  {
    dayIndex: 5,
    surahNumber: 67,
    ayahNumber: 5,
    arabic: "وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ ۖ وَأَعْتَدْنَا لَهُمْ عَذَابَ السَّعِيرِ",
    albanian: "Ne e kemi stolisur qiellin më të afërt me yje dhe i kemi bërë ata gjuajtje kundër djajve, të cilëve u kemi përgatitur dënimin e zjarrit flakërues.",
    transliteration: "Wa laqad zayyannās-samā'ad-dunyā bimaṣābīḥa wa ja'alnāhā rujūmal-lish-shayāṭīn. Wa a'tadnā lahum 'adhābas-sa'īr"
  },
  {
    dayIndex: 6,
    surahNumber: 67,
    ayahNumber: 6,
    arabic: "وَلِلَّذِينَ كَفَرُوا بِرَبِّهِمْ عَذَابُ جَهَنَّمَ ۖ وَبِئْسَ الْمَصِيرُ",
    albanian: "Për ata që mohojnë Zotin e tyre ka dënim të Xhehenemit. Eh, sa vendbanim i keq që është ai!",
    transliteration: "Wa lilladhīna kafarū birabbihim 'adhābu jahannam. Wa bi'sal-maṣīr"
  },
  {
    dayIndex: 7,
    surahNumber: 67,
    ayahNumber: 7,
    arabic: "إِذَا أُلْقُوا فِيهَا سَمِعُوا لَهَا شَهِيقًا وَهِيَ تَفُورُ",
    albanian: "Kur hidhen në të, dëgjojnë zhurmën e tij teksa vlon.",
    transliteration: "Idhā ulqū fīhā sami'ū lahā shahīqaw wa hiya tafūr"
  },
  {
    dayIndex: 8,
    surahNumber: 67,
    ayahNumber: 8,
    arabic: "تَكَادُ تَمَيَّزُ مِنَ الْغَيْظِ ۖ كُلَّمَا أُلْقِيَ فِيهَا فَوْجٌ سَأَلَهُمْ خَزَنَتُهَا أَلَمْ يَأْتِكُمْ نَذِيرٌ",
    albanian: "Gati copëtohet nga tërbimi. Sa herë që hidhet në të një grup, rojtarët e tij i pyesin: \"A nuk ju erdhi paralajmërues?\"",
    transliteration: "Takādu tamayyazu minal-ghayẓ. Kullamā ulqiya fīhā fawjun sa'alahum khazanatuhā alam ya'tikum nadhīr"
  },
  {
    dayIndex: 9,
    surahNumber: 67,
    ayahNumber: 9,
    arabic: "قَالُوا بَلَىٰ قَدْ جَاءَنَا نَذِيرٌ فَكَذَّبْنَا وَقُلْنَا مَا نَزَّلَ اللَّهُ مِن شَيْءٍ إِنْ أَنتُمْ إِلَّا فِي ضَلَالٍ كَبِيرٍ",
    albanian: "Ata do të thonë: \"Po, na erdhi paralajmërues, por ne e përgënjeshtruam dhe thamë: 'Allahu nuk ka zbritur asgjë. Ju jeni vetëm në një humbje të madhe.'\"",
    transliteration: "Qālū balā qad jā'anā nadhīrun fakadhdhabnā wa qulnā mā nazzalal-lāhu min shay'. In antum illā fī ḍalālin kabīr"
  },
  {
    dayIndex: 10,
    surahNumber: 67,
    ayahNumber: 10,
    arabic: "وَقَالُوا لَوْ كُنَّا نَسْمَعُ أَوْ نَعْقِلُ مَا كُنَّا فِي أَصْحَابِ السَّعِيرِ",
    albanian: "Dhe do të thonë: \"Sikur të kishim dëgjuar apo kuptuar, nuk do të ishim ndër banorët e zjarrit flakërues.\"",
    transliteration: "Wa qālū law kunnā nasma'u aw na'qilu mā kunnā fī aṣḥābis-sa'īr"
  },
  {
    dayIndex: 11,
    surahNumber: 67,
    ayahNumber: 11,
    arabic: "فَاعْتَرَفُوا بِذَنبِهِمْ فَسُحْقًا لِّأَصْحَابِ السَّعِيرِ",
    albanian: "Kështu ata pranojnë mëkatin e tyre, prandaj largim për banorët e zjarrit flakërues!",
    transliteration: "Fa'tarafū bidhanbihim fasuḥqal-li'aṣḥābis-sa'īr"
  },
  {
    dayIndex: 12,
    surahNumber: 67,
    ayahNumber: 12,
    arabic: "إِنَّ الَّذِينَ يَخْشَوْنَ رَبَّهُم بِالْغَيْبِ لَهُم مَّغْفِرَةٌ وَأَجْرٌ كَبِيرٌ",
    albanian: "Vërtet, ata që i frikësohen Zotit të tyre pa e parë, për ta ka falje dhe shpërblim të madh.",
    transliteration: "Innal-ladhīna yakhshawna rabbahum bil-ghaybi lahum maghfiratuw wa ajrun kabīr"
  },
  {
    dayIndex: 13,
    surahNumber: 67,
    ayahNumber: 13,
    arabic: "وَأَسِرُّوا قَوْلَكُمْ أَوِ اجْهَرُوا بِهِ ۖ إِنَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ",
    albanian: "Fshiheni fjalën tuaj ose shpalleni haptazi, Ai di çdo gjë që ka në zemra.",
    transliteration: "Wa asirrū qawlakum awijharū bih. Innahu 'alīmum bidhātis-ṣudūr"
  },
  {
    dayIndex: 14,
    surahNumber: 67,
    ayahNumber: 14,
    arabic: "أَلَا يَعْلَمُ مَنْ خَلَقَ وَهُوَ اللَّطِيفُ الْخَبِيرُ",
    albanian: "A nuk di Ai që ka krijuar? Ai është i Buti, i Gjithëdituri.",
    transliteration: "Alā ya'lamu man khalaq. Wa huwal-laṭīful-khabīr"
  },
  {
    dayIndex: 15,
    surahNumber: 67,
    ayahNumber: 15,
    arabic: "هُوَ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ ذَلُولًا فَامْشُوا فِي مَنَاكِبِهَا وَكُلُوا مِن رِّزْقِهِ ۖ وَإِلَيْهِ النُّشُورُ",
    albanian: "Ai është që jua bëri tokën të përshtatshme, ecni nëpër anët e saj dhe hani nga furnizimi i Tij. Tek Ai do të ringjalleni.",
    transliteration: "Huwal-ladhī ja'ala lakumul-arḍa dhalūlan famshū fī manākibihā wa kulū mir-rizqih. Wa ilayhin-nushūr"
  },
  {
    dayIndex: 16,
    surahNumber: 67,
    ayahNumber: 16,
    arabic: "أَأَمِنتُم مَّن فِي السَّمَاءِ أَن يَخْسِفَ بِكُمُ الْأَرْضَ فَإِذَا هِيَ تَمُورُ",
    albanian: "A jeni të sigurt që Ai që është në qiell nuk do t'ju fundosë në tokë, kur ajo të dridhet?",
    transliteration: "A'amintum man fis-samā'i ay-yakhsifa bikumul-arḍa fa'idhā hiya tamūr"
  },
  {
    dayIndex: 17,
    surahNumber: 67,
    ayahNumber: 17,
    arabic: "أَمْ أَمِنتُم مَّن فِي السَّمَاءِ أَن يُرْسِلَ عَلَيْكُمْ حَاصِبًا ۖ فَسَتَعْلَمُونَ كَيْفَ نَذِيرِ",
    albanian: "Apo jeni të sigurt që Ai që është në qiell nuk do t'ju dërgojë stuhi gurësh? Atëherë do ta dini si është paralajmërimi Im.",
    transliteration: "Am amintum man fis-samā'i ay-yursila 'alaykum ḥāṣibā. Fasata'lamūna kayfa nadhīr"
  },
  {
    dayIndex: 18,
    surahNumber: 67,
    ayahNumber: 18,
    arabic: "وَلَقَدْ كَذَّبَ الَّذِينَ مِن قَبْلِهِمْ فَكَيْفَ كَانَ نَكِيرِ",
    albanian: "Vërtet, ata para tyre gjithashtu përgënjeshtruan, por si ishte dënimi Im!",
    transliteration: "Wa laqad kadhdhabal-ladhīna min qablihim fakayfa kāna nakīr"
  },
  {
    dayIndex: 19,
    surahNumber: 67,
    ayahNumber: 19,
    arabic: "أَوَلَمْ يَرَوْا إِلَى الطَّيْرِ فَوْقَهُمْ صَافَّاتٍ وَيَقْبِضْنَ ۚ مَا يُمْسِكُهُنَّ إِلَّا الرَّحْمَٰنُ ۚ إِنَّهُ بِكُلِّ شَيْءٍ بَصِيرٌ",
    albanian: "A nuk i shohin zogjtë sipër tyre, duke i shtrirë krahët dhe duke i mbledhur? Nuk i mban ata askush veç të Gjithëmëshirshmit. Vërtet, Ai i sheh të gjitha.",
    transliteration: "Awalam yaraw ilat-ṭayri fawqahum ṣāffātiw wa yaqbiḍn. Mā yumsikuhunna illar-raḥmān. Innahu bikulli shay'im baṣīr"
  },
  {
    dayIndex: 20,
    surahNumber: 67,
    ayahNumber: 20,
    arabic: "أَمَّنْ هَٰذَا الَّذِي هُوَ جُندٌ لَّكُمْ يَنصُرُكُم مِّن دُونِ الرَّحْمَٰنِ ۚ إِنِ الْكَافِرُونَ إِلَّا فِي غُرُورٍ",
    albanian: "Kush është ai që si ushtri do t'ju ndihmojë kundër të Gjithëmëshirshmit? Mohuesit janë vetëm në mashtrim.",
    transliteration: "Amman hādhal-ladhī huwa jundul-lakum yanṣurukum min dūnir-raḥmān. Inil-kāfirūna illā fī ghurūr"
  },
  {
    dayIndex: 21,
    surahNumber: 67,
    ayahNumber: 21,
    arabic: "أَمَّنْ هَٰذَا الَّذِي يَرْزُقُكُمْ إِنْ أَمْسَكَ رِزْقَهُ ۚ بَل لَّجُّوا فِي عُتُوٍّ وَنُفُورٍ",
    albanian: "Kush është ai që do t'ju furnizojë nëse Ai ndalon furnizimin e Tij? Por ata vazhdojnë në arrogancë dhe largim.",
    transliteration: "Amman hādhal-ladhī yarzuqukum in amsaka rizqah. Bal-lajjū fī 'utuwwiw wa nufūr"
  },
  {
    dayIndex: 22,
    surahNumber: 67,
    ayahNumber: 22,
    arabic: "أَفَمَن يَمْشِي مُكِبًّا عَلَىٰ وَجْهِهِ أَهْدَىٰ أَمَّن يَمْشِي سَوِيًّا عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ",
    albanian: "A është më i udhëzuar ai që ecën me fytyrën përmbys apo ai që ecën drejt në rrugën e drejtë?",
    transliteration: "Afamay-yamshī mukibban 'alā wajhihī ahdā ammay-yamshī sawiyyan 'alā ṣirāṭim-mustaqīm"
  },
  {
    dayIndex: 23,
    surahNumber: 67,
    ayahNumber: 23,
    arabic: "قُلْ هُوَ الَّذِي أَنشَأَكُمْ وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ ۖ قَلِيلًا مَّا تَشْكُرُونَ",
    albanian: "Thuaj: \"Ai është që ju krijoi dhe ju dha dëgjimin, shikimin dhe zemrat. Sa pak falënderoni!\"",
    transliteration: "Qul huwal-ladhī ansha'akum wa ja'ala lakumus-sam'a wal-abṣāra wal-af'idah. Qalīlam mā tashkurūn"
  },
  {
    dayIndex: 24,
    surahNumber: 67,
    ayahNumber: 24,
    arabic: "قُلْ هُوَ الَّذِي ذَرَأَكُمْ فِي الْأَرْضِ وَإِلَيْهِ تُحْشَرُونَ",
    albanian: "Thuaj: \"Ai është që ju shpërndau në tokë dhe tek Ai do të tuboheni.\"",
    transliteration: "Qul huwal-ladhī dhara'akum fil-arḍi wa ilayhi tuḥsharūn"
  },
  {
    dayIndex: 25,
    surahNumber: 67,
    ayahNumber: 25,
    arabic: "وَيَقُولُونَ مَتَىٰ هَٰذَا الْوَعْدُ إِن كُنتُمْ صَادِقِينَ",
    albanian: "Dhe thonë: \"Kur do të vijë ky premtim, nëse jeni të sinqertë?\"",
    transliteration: "Wa yaqūlūna matā hādhal-wa'du in kuntum ṣādiqīn"
  },
  {
    dayIndex: 26,
    surahNumber: 67,
    ayahNumber: 26,
    arabic: "قُلْ إِنَّمَا الْعِلْمُ عِندَ اللَّهِ وَإِنَّمَا أَنَا نَذِيرٌ مُّبِينٌ",
    albanian: "Thuaj: \"Dituria është vetëm tek Allahu dhe unë jam vetëm paralajmërues i qartë.\"",
    transliteration: "Qul innamal-'ilmu 'indal-lāhi wa innamā ana nadhīrum-mubīn"
  },
  {
    dayIndex: 27,
    surahNumber: 67,
    ayahNumber: 27,
    arabic: "فَلَمَّا رَأَوْهُ زُلْفَةً سِيئَتْ وُجُوهُ الَّذِينَ كَفَرُوا وَقِيلَ هَٰذَا الَّذِي كُنتُم بِهِ تَدَّعُونَ",
    albanian: "Por kur ta shohin afër, fytyrat e mohuesve do të trishtohën dhe do t'u thuhet: \"Kjo është ajo që e kërkonit.\"",
    transliteration: "Falammā ra'awhu zulfatan sī'at wujūhul-ladhīna kafarū wa qīla hādhal-ladhī kuntum bihī tadda'ūn"
  },
  {
    dayIndex: 28,
    surahNumber: 67,
    ayahNumber: 28,
    arabic: "قُلْ أَرَأَيْتُمْ إِنْ أَهْلَكَنِيَ اللَّهُ وَمَن مَّعِيَ أَوْ رَحِمَنَا فَمَن يُجِيرُ الْكَافِرِينَ مِنْ عَذَابٍ أَلِيمٍ",
    albanian: "Thuaj: \"A e keni parë, nëse Allahu më shkatërron mua dhe ata që janë me mua, ose na mëshiron, kush do t'i mbrojë mohuesit nga dënimi i dhimbshëm?\"",
    transliteration: "Qul ara'aytum in ahlakaniyallāhu wa mam-ma'iya aw raḥimanā famay-yujīrul-kāfirīna min 'adhābin alīm"
  },
  {
    dayIndex: 29,
    surahNumber: 67,
    ayahNumber: 29,
    arabic: "قُلْ هُوَ الرَّحْمَٰنُ آمَنَّا بِهِ وَعَلَيْهِ تَوَكَّلْنَا ۖ فَسَتَعْلَمُونَ مَنْ هُوَ فِي ضَلَالٍ مُّبِينٍ",
    albanian: "Thuaj: \"Ai është i Gjithëmëshirshmi, ne besojmë në Të dhe tek Ai mbështetemi. Së shpejti do ta dini kush është në humbje të qartë.\"",
    transliteration: "Qul huwar-raḥmānu āmannā bihī wa 'alayhi tawakkalnā. Fasata'lamūna man huwa fī ḍalālim-mubīn"
  },
  {
    dayIndex: 30,
    surahNumber: 67,
    ayahNumber: 30,
    arabic: "قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَن يَأْتِيكُم بِمَاءٍ مَّعِينٍ",
    albanian: "Thuaj: \"A e keni parë, nëse uji juaj zhduket në tokë, kush do t'ju sjellë ujë të rrjedhshëm?\"",
    transliteration: "Qul ara'aytum in aṣbaḥa mā'ukum ghawran famay-ya'tīkum bimā'im-ma'īn"
  }
];

// Helper to get verse by day
export const getVerseByDay = (dayIndex: number): Verse | undefined => {
  return MULK_VERSES.find(v => v.dayIndex === dayIndex);
};

// Get all verses
export const getAllVerses = (): Verse[] => MULK_VERSES;

// Surah metadata
export const SURAH_INFO = {
  number: 67,
  name: 'Al-Mulk',
  nameArabic: 'الملك',
  nameAlbanian: 'Sundimi',
  totalVerses: 30,
  revelation: 'Mekase',
  description: 'Surja El-Mulk (Sundimi) është surja e 67-të e Kuranit. Ka 30 ajete dhe u shpall në Mekë.'
};
