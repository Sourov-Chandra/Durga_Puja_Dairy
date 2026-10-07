const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// Comprehensive worldwide place catalog with Bengali & English localized names
export const WORLD_REGIONS = [
  { id: "ALL", bnName: "সমগ্র বিশ্ব", enName: "Worldwide", flag: "🌍", count: 18 },
  { id: "BD", bnName: "বাংলাদেশ", enName: "Bangladesh", flag: "🇧🇩", count: 8 },
  { id: "IN", bnName: "ভারত", enName: "India", flag: "🇮🇳", count: 7 },
  { id: "GB", bnName: "যুক্তরাজ্য", enName: "UK", flag: "🇬🇧", count: 1 },
  { id: "US", bnName: "যুক্তরাষ্ট্র", enName: "USA", flag: "🇺🇸", count: 1 },
  { id: "AU", bnName: "অস্ট্রেলিয়া", enName: "Australia", flag: "🇦🇺", count: 1 },
];

export const DISTRICT_CATALOG = [
  // Bangladesh
  { id: "thakurgaon", regionId: "BD", bnName: "ঠাকুরগাঁও", enName: "Thakurgaon", count: 3 },
  { id: "dhaka", regionId: "BD", bnName: "ঢাকা", enName: "Dhaka", count: 3 },
  { id: "dinajpur", regionId: "BD", bnName: "দিনাজপুর", enName: "Dinajpur", count: 1 },
  { id: "chittagong", regionId: "BD", bnName: "চট্টগ্রাম", enName: "Chittagong", count: 1 },

  // India
  { id: "kolkata", regionId: "IN", bnName: "কলকাতা", enName: "Kolkata", count: 5 },
  { id: "howrah", regionId: "IN", bnName: "হাওড়া", enName: "Howrah", count: 1 },
  { id: "siliguri", regionId: "IN", bnName: "শিলিগুড়ি", enName: "Siliguri", count: 1 },

  // UK
  { id: "london", regionId: "GB", bnName: "লন্ডন", enName: "London", count: 1 },

  // USA
  { id: "newyork", regionId: "US", bnName: "নিউ ইয়র্ক", enName: "New York", count: 1 },

  // Australia
  { id: "melbourne", regionId: "AU", bnName: "মেলবোর্ন", enName: "Melbourne", count: 1 },
];

export const FALLBACK_MANDAPS = [
  // THAKURGAON
  {
    _id: "m_tg1",
    name: "ঠাকুরগাঁও শ্রী শ্রী গোবিন্দ জিউ কেন্দ্রীয় মন্দির",
    enName: "Thakurgaon Govinda Jeu Central Mandap",
    slug: "thakurgaon-govinda-jeu-central-mandap",
    districtId: "thakurgaon",
    districtBn: "ঠাকুরগাঁও",
    districtEn: "Thakurgaon",
    country: "Bangladesh",
    countryCode: "BD",
    tag: "ঐতিহ্যবাহী • Kumari Puja",
    description:
      "ঠাকুরগাঁও শহরের প্রাণকেন্দ্রে অবস্থিত ঐতিহাসিক মন্দির। মহা অষ্টমীতে এখানে ঐতিহ্যবাহী কুমারী পূজা ও শতবর্ষের ভক্তিঘন আরাধনা অনুষ্ঠিত হয়।",
    year: 2026,
    location: { type: "Point", coordinates: [88.4665, 26.0336] },
    address: {
      addressLine1: "গোবিন্দ জিউ মন্দির রোড, সদর",
      areaOrLocality: "সেন্ট্রাল টাউন",
      cityOrDistrict: "ঠাকুরগাঁও",
      stateOrDivision: "রংপুর বিভাগ",
      country: "বাংলাদেশ",
      timezone: "Asia/Dhaka",
    },
    coverImage: {
      url: "https://images.unsplash.com/photo-1570784332176-fdd73da66f03?auto=format&fit=crop&w=1200&q=80",
    },
    verificationStatus: "OFFICIAL",
    favoriteCount: 230,
    viewCount: 680,
  },
  {
    _id: "m_tg2",
    name: "ঠাকুরগাঁও কালীবাড়ি সর্বজনীন দুর্গাপূজা",
    enName: "Thakurgaon Kalibari Sarbojanin Mandap",
    slug: "thakurgaon-kalibari-mandap",
    districtId: "thakurgaon",
    districtBn: "ঠাকুরগাঁও",
    districtEn: "Thakurgaon",
    country: "Bangladesh",
    countryCode: "BD",
    tag: "বিখ্যাত আরতি",
    description:
      "কালীবাড়ি প্রাঙ্গণের এই পূজা ঠাকুরগাঁওয়ের অন্যতম প্রাচীন ও বর্ণাঢ্য উৎসব। নবমীর রাতে বিশেষ ধুনুচি নাচের আয়োজন থাকে।",
    year: 2026,
    location: { type: "Point", coordinates: [88.4691, 26.0355] },
    address: {
      addressLine1: "কালীবাড়ি রোড, থানা পাড়া",
      areaOrLocality: "কালীবাড়ি",
      cityOrDistrict: "ঠাকুরগাঁও",
      stateOrDivision: "রংপুর বিভাগ",
      country: "বাংলাদেশ",
      timezone: "Asia/Dhaka",
    },
    coverImage: {
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    },
    verificationStatus: "VERIFIED",
    favoriteCount: 175,
    viewCount: 490,
  },
  {
    _id: "m_tg3",
    name: "বালিয়াডাঙ্গী কেন্দ্রীয় বারোয়ারি দুর্গাপূজা",
    enName: "Baliadangi Central Barowari Mandap",
    slug: "baliadangi-central-puja-thakurgaon",
    districtId: "thakurgaon",
    districtBn: "ঠাকুরগাঁও",
    districtEn: "Thakurgaon",
    country: "Bangladesh",
    countryCode: "BD",
    tag: "গ্রামীণ ঐতিহ্য",
    description:
      "বালিয়াডাঙ্গী উপজেলার প্রধান আকর্ষণ। চমৎকার নান্দনিক মণ্ডপসজ্জা ও সাংস্কৃতিক পরিবেশনার জন্য দূরদূরান্ত থেকে ভক্তরা আসেন।",
    year: 2026,
    location: { type: "Point", coordinates: [88.2917, 26.1012] },
    address: {
      addressLine1: "বালিয়াডাঙ্গী বাজার মোড়",
      areaOrLocality: "বালিয়াডাঙ্গী সদর",
      cityOrDistrict: "ঠাকুরগাঁও",
      stateOrDivision: "রংপুর বিভাগ",
      country: "বাংলাদেশ",
      timezone: "Asia/Dhaka",
    },
    coverImage: {
      url: "https://images.unsplash.com/photo-1599818817947-68b209772c67?auto=format&fit=crop&w=1200&q=80",
    },
    verificationStatus: "VERIFIED",
    favoriteCount: 95,
    viewCount: 310,
  },

  // DHAKA
  {
    _id: "m_dh1",
    name: "শ্রী শ্রী ঢাকেশ্বরী জাতীয় মন্দির দুর্গাপূজা",
    enName: "Dhakeshwari National Temple Durga Puja",
    slug: "dhakeshwari-national-temple-durga-puja-dhaka",
    districtId: "dhaka",
    districtBn: "ঢাকা",
    districtEn: "Dhaka",
    country: "Bangladesh",
    countryCode: "BD",
    tag: "জাতীয় মন্দির • প্রধান উৎসব",
    description:
      "বাংলাদেশের প্রধান জাতীয় মন্দির। প্রতি বছর বিজয়া শোভাযাত্রা এবং বিজয়া দশমীর কেন্দ্রীয় বিসর্জন এখান থেকেই সমন্বয় করা হয়।",
    year: 2026,
    location: { type: "Point", coordinates: [90.3904, 23.7225] },
    address: {
      addressLine1: "ঢাকেশ্বরী রোড, লালবাগ",
      areaOrLocality: "বকশীবাজার",
      cityOrDistrict: "ঢাকা",
      stateOrDivision: "ঢাকা বিভাগ",
      country: "বাংলাদেশ",
      timezone: "Asia/Dhaka",
    },
    coverImage: {
      url: "https://images.unsplash.com/photo-1599818817947-68b209772c67?auto=format&fit=crop&w=1200&q=80",
    },
    verificationStatus: "OFFICIAL",
    favoriteCount: 520,
    viewCount: 1640,
  },
  {
    _id: "m_dh2",
    name: "রমনা কালী মন্দির ও আনন্দময়ী আশ্রম",
    enName: "Ramna Kali Mandir Durga Puja",
    slug: "ramna-kali-mandir-durga-puja-dhaka",
    districtId: "dhaka",
    districtBn: "ঢাকা",
    districtEn: "Dhaka",
    country: "Bangladesh",
    countryCode: "BD",
    tag: "ঐতিহাসিক আশ্রম",
    description:
      "সুবিশাল সোহরাওয়ার্দী উদ্যানের ছায়াঘেরা পরিবেশে অনুষ্ঠিত অপূর্ব পূজা। প্রতিদিন সহস্রাধিক ভক্তের মহাপ্রসাদ বিতরণ করা হয়।",
    year: 2026,
    location: { type: "Point", coordinates: [90.3989, 23.7344] },
    address: {
      addressLine1: "সোহরাওয়ার্দী উদ্যান প্রাঙ্গণ",
      areaOrLocality: "রমনা",
      cityOrDistrict: "ঢাকা",
      stateOrDivision: "ঢাকা বিভাগ",
      country: "বাংলাদেশ",
      timezone: "Asia/Dhaka",
    },
    coverImage: {
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    },
    verificationStatus: "OFFICIAL",
    favoriteCount: 410,
    viewCount: 1120,
  },
  {
    _id: "m_dh3",
    name: "জগন্নাথ হল কেন্দ্রীয় পূজামণ্ডপ",
    enName: "Jagannath Hall Central Puja (Dhaka University)",
    slug: "jagannath-hall-durga-puja-dhaka",
    districtId: "dhaka",
    districtBn: "ঢাকা",
    districtEn: "Dhaka",
    country: "Bangladesh",
    countryCode: "BD",
    tag: "বিশ্ববিদ্যালয় উৎসব • চারুকলা প্রতিমা",
    description:
      "ঢাকা বিশ্ববিদ্যালয়ের জগন্নাথ হল খেলার মাঠে চারুকলা অনুষদসহ বিভিন্ন বিভাগের শিক্ষার্থীদের তৈরি অনিন্দ্যসুন্দর প্রতিমা ও মণ্ডপ।",
    year: 2026,
    location: { type: "Point", coordinates: [90.3927, 23.7297] },
    address: {
      addressLine1: "জগন্নাথ হল, ঢাকা বিশ্ববিদ্যালয়",
      areaOrLocality: "বিশ্ববিদ্যালয় এলাকা",
      cityOrDistrict: "ঢাকা",
      stateOrDivision: "ঢাকা বিভাগ",
      country: "বাংলাদেশ",
      timezone: "Asia/Dhaka",
    },
    coverImage: {
      url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    },
    verificationStatus: "VERIFIED",
    favoriteCount: 380,
    viewCount: 980,
  },

  // DINAJPUR & CHITTAGONG
  {
    _id: "m_din1",
    name: "দিনাজপুর রাজবাড়ী দুর্গোৎসব",
    enName: "Dinajpur Rajbari Durga Puja",
    slug: "dinajpur-rajbari-durga-puja",
    districtId: "dinajpur",
    districtBn: "দিনাজপুর",
    districtEn: "Dinajpur",
    country: "Bangladesh",
    countryCode: "BD",
    tag: "রাজবাড়ী ঐতিহ্য",
    description:
      "ঐতিহাসিক দিনাজপুর রাজপরিবারের স্মৃতিবিজড়িত পূজা মণ্ডপ। শত শত বছরের রাজকীয় প্রথা এখনো নিষ্ঠার সাথে পালন করা হয়।",
    year: 2026,
    location: { type: "Point", coordinates: [88.6475, 25.6312] },
    address: {
      addressLine1: "রাজবাড়ী চত্বর, সদর",
      areaOrLocality: "রাজবাড়ী",
      cityOrDistrict: "দিনাজপুর",
      stateOrDivision: "রংপুর বিভাগ",
      country: "বাংলাদেশ",
      timezone: "Asia/Dhaka",
    },
    coverImage: {
      url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
    },
    verificationStatus: "VERIFIED",
    favoriteCount: 160,
    viewCount: 470,
  },
  {
    _id: "m_ctg1",
    name: "জে এম সেন হল কেন্দ্রীয় পূজামণ্ডপ",
    enName: "JM Sen Hall Central Mandap, Chittagong",
    slug: "jm-sen-hall-durga-puja-chittagong",
    districtId: "chittagong",
    districtBn: "চট্টগ্রাম",
    districtEn: "Chittagong",
    country: "Bangladesh",
    countryCode: "BD",
    tag: "প্রধান আকর্ষণ",
    description:
      "চট্টগ্রাম মহানগরীর প্রাণকেন্দ্রের ঐতিহ্যবাহী পূজামণ্ডপ। প্রতিদিন সাংস্কৃতিক অনুষ্ঠান ও বর্ণাঢ্য আলোকসজ্জায় মুখরিত থাকে।",
    year: 2026,
    location: { type: "Point", coordinates: [91.8344, 22.3419] },
    address: {
      addressLine1: "আন্দরকিল্লা রোড",
      areaOrLocality: "রহমতগঞ্জ",
      cityOrDistrict: "চট্টগ্রাম",
      stateOrDivision: "চট্টগ্রাম বিভাগ",
      country: "বাংলাদেশ",
      timezone: "Asia/Dhaka",
    },
    coverImage: {
      url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    },
    verificationStatus: "OFFICIAL",
    favoriteCount: 290,
    viewCount: 780,
  },

  // KOLKATA, INDIA
  {
    _id: "m_kol1",
    name: "বাগবাজার সার্বজনীন দুর্গোৎসব",
    enName: "Bagbazar Sarbojanin Durgotsav",
    slug: "bagbazar-sarbojanin-durgotsav-kolkata",
    districtId: "kolkata",
    districtBn: "কলকাতা",
    districtEn: "Kolkata",
    country: "India",
    countryCode: "IN",
    tag: "শতবর্ষী একচালা • ঐতিহ্য",
    description:
      "কলকাতার সবচেয়ে প্রাচীন এবং ঐতিহ্যবাহী সর্বজনীন দুর্গোৎসব। ১৯১৯ সাল থেকে সনাতনী একচালা ডাকের সাজের প্রতিমা ও গঙ্গাতীরের অবিস্মরণীয় পরিবেশ।",
    year: 2026,
    location: { type: "Point", coordinates: [88.3688, 22.6022] },
    address: {
      addressLine1: "বাগবাজার ঘাট রোড",
      areaOrLocality: "বাগবাজার",
      cityOrDistrict: "কলকাতা",
      stateOrDivision: "পশ্চিমবঙ্গ",
      country: "ভারত",
      timezone: "Asia/Kolkata",
    },
    coverImage: {
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    },
    verificationStatus: "OFFICIAL",
    favoriteCount: 680,
    viewCount: 2350,
  },
  {
    _id: "m_kol2",
    name: "কলেজ স্কয়ার সর্বজনীন দুর্গোৎসব",
    enName: "College Square Sarbojanin Durgotsav",
    slug: "college-square-durga-puja-kolkata",
    districtId: "kolkata",
    districtBn: "কলকাতা",
    districtEn: "Kolkata",
    country: "India",
    countryCode: "IN",
    tag: "বিখ্যাত জলমণ্ডপ ও আলোকসজ্জা",
    description:
      "বিশাল দীঘির জলে প্রতিফলিত চোখ ধাঁধানো চন্দননগরের আলোকসজ্জা ও রাজপ্রাসাদ সদৃশ বিশাল মণ্ডপ। কলকাতার অন্যতম সর্বাধিক জনপ্রিয় পর্যটক আকর্ষণ।",
    year: 2026,
    location: { type: "Point", coordinates: [88.3639, 22.5746] },
    address: {
      addressLine1: "কলেজ স্ট্রিট, বিদ্যাসাগর সরোবর",
      areaOrLocality: "কলেজ স্কয়ার",
      cityOrDistrict: "কলকাতা",
      stateOrDivision: "পশ্চিমবঙ্গ",
      country: "ভারত",
      timezone: "Asia/Kolkata",
    },
    coverImage: {
      url: "https://images.unsplash.com/photo-1599818817947-68b209772c67?auto=format&fit=crop&w=1200&q=80",
    },
    verificationStatus: "OFFICIAL",
    favoriteCount: 740,
    viewCount: 2600,
  },
  {
    _id: "m_kol3",
    name: "শোভাবাজার রাজবাড়ী দুর্গাপূজা",
    enName: "Sovabazar Rajbari Durga Puja (Est. 1757)",
    slug: "sovabazar-rajbari-durga-puja-kolkata",
    districtId: "kolkata",
    districtBn: "কলকাতা",
    districtEn: "Kolkata",
    country: "India",
    countryCode: "IN",
    tag: "বনেদি রাজবাড়ী • ১৭৫৭ সাল",
    description:
      "১৭৫৭ সালে রাজা নবকৃষ্ণ দেব প্রবর্তিত ঐতিহাসিক বনেদি পূজা। প্রাচীন নাটমন্দিরের খিলান আর রাজকীয় ঐতিহ্যে এক অনন্য আধ্যাত্মিক আবহ।",
    year: 2026,
    location: { type: "Point", coordinates: [88.3667, 22.5975] },
    address: {
      addressLine1: "৩৬ নবকৃষ্ণ স্ট্রিট",
      areaOrLocality: "শোভাবাজার",
      cityOrDistrict: "কলকাতা",
      stateOrDivision: "পশ্চিমবঙ্গ",
      country: "ভারত",
      timezone: "Asia/Kolkata",
    },
    coverImage: {
      url: "https://images.unsplash.com/photo-1570784332176-fdd73da66f03?auto=format&fit=crop&w=1200&q=80",
    },
    verificationStatus: "OFFICIAL",
    favoriteCount: 590,
    viewCount: 1980,
  },
  {
    _id: "m_kol4",
    name: "সন্তোষ মিত্র স্কয়ার (লেবুতলা পার্ক)",
    enName: "Santosh Mitra Square Durga Puja",
    slug: "santosh-mitra-square-kolkata",
    districtId: "kolkata",
    districtBn: "কলকাতা",
    districtEn: "Kolkata",
    country: "India",
    countryCode: "IN",
    tag: "মেগা থিম মণ্ডপ",
    description:
      "কলকাতার আধুনিক মণ্ডপসজ্জা ও থিম স্থাপত্যের এক অবিস্মরণীয় বিস্ময়। প্রতি বছর নতুন অভিনব আন্তর্জাতিক স্থাপত্যের আদলে মণ্ডপ নির্মিত হয়।",
    year: 2026,
    location: { type: "Point", coordinates: [88.3695, 22.5684] },
    address: {
      addressLine1: "লেবুতলা পার্ক, শিয়ালদহ",
      areaOrLocality: "মধ্য কলকাতা",
      cityOrDistrict: "কলকাতা",
      stateOrDivision: "পশ্চিমবঙ্গ",
      country: "ভারত",
      timezone: "Asia/Kolkata",
    },
    coverImage: {
      url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    },
    verificationStatus: "VERIFIED",
    favoriteCount: 510,
    viewCount: 1750,
  },
  {
    _id: "m_kol5",
    name: "ম্যাডক্স স্কয়ার সর্বজনীন",
    enName: "Maddox Square Durga Puja",
    slug: "maddox-square-durga-puja-kolkata",
    districtId: "kolkata",
    districtBn: "কলকাতা",
    districtEn: "Kolkata",
    country: "India",
    countryCode: "IN",
    tag: "প্রাণবন্ত আড্ডা ও উন্মুক্ত প্রাঙ্গণ",
    description:
      "দক্ষিণ কলকাতার সবচেয়ে প্রিয় আড্ডার প্রাঙ্গণ। সুবিশাল সবুজ মাঠে ঐতিহ্যবাহী একচালা প্রতিমার সামনে ঘণ্টার পর ঘণ্টা উৎসব উদযাপন।",
    year: 2026,
    location: { type: "Point", coordinates: [88.3582, 22.5312] },
    address: {
      addressLine1: "রিচি রোড, বালিগঞ্জ",
      areaOrLocality: "বালিগঞ্জ",
      cityOrDistrict: "কলকাতা",
      stateOrDivision: "পশ্চিমবঙ্গ",
      country: "ভারত",
      timezone: "Asia/Kolkata",
    },
    coverImage: {
      url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
    },
    verificationStatus: "VERIFIED",
    favoriteCount: 470,
    viewCount: 1450,
  },

  // HOWRAH & SILIGURI
  {
    _id: "m_hwr1",
    name: "বেলুড় মঠ শ্রী শ্রী দুর্গোৎসব",
    enName: "Belur Math Durga Puja (Ramakrishna Mission)",
    slug: "belur-math-durga-puja-howrah",
    districtId: "howrah",
    districtBn: "হাওড়া",
    districtEn: "Howrah",
    country: "India",
    countryCode: "IN",
    tag: "স্বামী বিবেকানন্দ প্রবর্তিত • কুমারী পূজা",
    description:
      "১৯০১ সালে স্বামী বিবেকানন্দ স্বয়ং এই পূজার সূচনা করেন। মহা অষ্টমীর সকালের ঐতিহ্যবাহী কুমারী পূজা দেখতে লক্ষ লক্ষ ভক্ত সমবেত হন।",
    year: 2026,
    location: { type: "Point", coordinates: [88.3564, 22.6318] },
    address: {
      addressLine1: "রামকৃষ্ণ মিশন সদর কার্যালয়",
      areaOrLocality: "বেলুড়",
      cityOrDistrict: "হাওড়া",
      stateOrDivision: "পশ্চিমবঙ্গ",
      country: "ভারত",
      timezone: "Asia/Kolkata",
    },
    coverImage: {
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    },
    verificationStatus: "OFFICIAL",
    favoriteCount: 890,
    viewCount: 3100,
  },
  {
    _id: "m_sil1",
    name: "সেবক রোড সেন্ট্রাল ক্লাব দুর্গোৎসব",
    enName: "Sevoke Road Central Club, Siliguri",
    slug: "sevoke-road-central-durga-puja-siliguri",
    districtId: "siliguri",
    districtBn: "শিলিগুড়ি",
    districtEn: "Siliguri",
    country: "India",
    countryCode: "IN",
    tag: "উত্তরবঙ্গের প্রধান উৎসব",
    description:
      "উত্তরবঙ্গের প্রবেশদ্বার শিলিগুড়ির অন্যতম বৃহৎ দুর্গোৎসব। দৃষ্টিনন্দন মণ্ডপ ও মনোমুগ্ধকর পরিবেশ।",
    year: 2026,
    location: { type: "Point", coordinates: [88.4312, 26.7271] },
    address: {
      addressLine1: "সেবক রোড মোড়",
      areaOrLocality: "শিলিগুড়ি সদর",
      cityOrDistrict: "শিলিগুড়ি",
      stateOrDivision: "পশ্চিমবঙ্গ",
      country: "ভারত",
      timezone: "Asia/Kolkata",
    },
    coverImage: {
      url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    },
    verificationStatus: "VERIFIED",
    favoriteCount: 220,
    viewCount: 650,
  },

  // DIASPORA / GLOBAL
  {
    _id: "m_lon1",
    name: "লন্ডন ক্যামডেন দুর্গাপূজা কমিটি",
    enName: "London Camden Durga Puja (Est. 1963)",
    slug: "london-camden-durga-puja-committee",
    districtId: "london",
    districtBn: "লন্ডন",
    districtEn: "London",
    country: "United Kingdom",
    countryCode: "GB",
    tag: "যুক্তরাজ্যের প্রাচীনতম পূজা",
    description:
      "১৯৬৩ সালে প্রতিষ্ঠিত যুক্তরাজ্যের অন্যতম ঐতিহ্যবাহী প্রবাসী বাঙালি দুর্গোৎসব। ঐতিহ্যবাহী শাস্ত্রীয় পূজা, ভোগ বিতরণ ও সাংস্কৃতিক সন্ধ্যা।",
    year: 2026,
    location: { type: "Point", coordinates: [-0.1425, 51.539] },
    address: {
      addressLine1: "Crowndale Centre, 218 Eversholt Street",
      areaOrLocality: "Camden",
      cityOrDistrict: "London",
      stateOrDivision: "Greater London",
      country: "United Kingdom",
      timezone: "Europe/London",
    },
    coverImage: {
      url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
    },
    verificationStatus: "OFFICIAL",
    favoriteCount: 340,
    viewCount: 1100,
  },
  {
    _id: "m_ny1",
    name: "দ্য বেঙ্গলি ক্লাব অফ ইউএসএ দুর্গোৎসব",
    enName: "The Bengali Club of USA (Queens, New York)",
    slug: "bengali-club-of-usa-durga-puja-new-york",
    districtId: "newyork",
    districtBn: "নিউ ইয়র্ক",
    districtEn: "New York",
    country: "United States",
    countryCode: "US",
    tag: "আমেরিকার প্রধান উৎসব",
    description:
      "নিউ ইয়র্কের কুইন্সে প্রবাসী বাঙালিদের মহাসম্মিলন। খাঁটি ঢাকের আওয়াজ, পুষ্পাঞ্জলি এবং যুব সাংস্কৃতিক অনুষ্ঠানের মহামিলন।",
    year: 2026,
    location: { type: "Point", coordinates: [-73.8864, 40.7517] },
    address: {
      addressLine1: "37th Avenue & 74th Street",
      areaOrLocality: "Jackson Heights",
      cityOrDistrict: "New York",
      stateOrDivision: "New York",
      country: "United States",
      timezone: "America/New_York",
    },
    coverImage: {
      url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    },
    verificationStatus: "OFFICIAL",
    favoriteCount: 390,
    viewCount: 1250,
  },
  {
    _id: "m_mel1",
    name: "মেলবোর্ন ভারত সেবাশ্রম সংঘ দুর্গোৎসব",
    enName: "Melbourne Bharat Sevashram Durga Puja",
    slug: "melbourne-bharat-sevashram-durga-puja",
    districtId: "melbourne",
    districtBn: "মেলবোর্ন",
    districtEn: "Melbourne",
    country: "Australia",
    countryCode: "AU",
    tag: "অস্ট্রেলিয়া প্রবাসী উৎসব",
    description:
      "অস্ট্রেলিয়ায় ভক্তি ও বেদিক রীতির আন্তরিক উৎসব। পুষ্পাঞ্জলি, প্রসাদ ভোজন ও ধুনুচি নৃত্যের বর্ণাঢ্য আয়োজন।",
    year: 2026,
    location: { type: "Point", coordinates: [144.9631, -37.8136] },
    address: {
      addressLine1: "Clayton Community Hall",
      areaOrLocality: "Clayton",
      cityOrDistrict: "Melbourne",
      stateOrDivision: "Victoria",
      country: "Australia",
      timezone: "Australia/Melbourne",
    },
    coverImage: {
      url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    },
    verificationStatus: "VERIFIED",
    favoriteCount: 260,
    viewCount: 710,
  },
];

export const FALLBACK_EVENTS = [
  {
    _id: "e1",
    title: "মহা ধামাকা ঢাক প্রতিযোগিতা ২০২৬ (Grand Dhak Competition)",
    category: "DHAK_COMPETITION",
    mandapName: "বাগবাজার সার্বজনীন দুর্গোৎসব",
    location: "কলকাতা, ভারত",
    date: "১৮ অক্টোবর ২০২৬ (সপ্তমী)",
    startTime: "সন্ধ্যা ৬:৩০",
    venue: "মূল নাটমন্দির চত্বর",
  },
  {
    _id: "e2",
    title: "ঐতিহ্যবাহী ধুনুচি নৃত্য ও মহতি আরতি",
    category: "AARTI_DHUNUCHI",
    mandapName: "শ্রী শ্রী ঢাকেশ্বরী জাতীয় মন্দির",
    location: "ঢাকা, বাংলাদেশ",
    date: "১৯ অক্টোবর ২০২৬ (অষ্টমী)",
    startTime: "সন্ধ্যা ৭:৩০",
    venue: "নাটমন্দির প্রাঙ্গণ",
  },
  {
    _id: "e3",
    title: "মহা অষ্টমী কুমারী পূজা মহোৎসব",
    category: "RITUAL",
    mandapName: "ঠাকুরগাঁও গোবিন্দ জিউ কেন্দ্রীয় মন্দির",
    location: "ঠাকুরগাঁও, বাংলাদেশ",
    date: "১৯ অক্টোবর ২০২৬ (অষ্টমী)",
    startTime: "সকাল ১০:৩০",
    venue: "মন্দির প্রাঙ্গণ",
  },
  {
    _id: "e4",
    title: "প্রবাসী রবীন্দ্রসঙ্গীত ও লোকগীতি সন্ধ্যা",
    category: "CULTURAL_PROGRAM",
    mandapName: "লন্ডন ক্যামডেন দুর্গাপূজা",
    location: "লন্ডন, যুক্তরাজ্য",
    date: "২০ অক্টোবর ২০২৬ (নবমী)",
    startTime: "সন্ধ্যা ৬:০০",
    venue: "Crowndale Auditorium",
  },
];

export async function fetchMandaps(params = {}) {
  try {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${API_BASE_URL}/mandaps?${query}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("API request failed");
    const json = await res.json();
    return json.data || FALLBACK_MANDAPS;
  } catch (err) {
    return FALLBACK_MANDAPS;
  }
}

export async function fetchMandapBySlug(slug) {
  try {
    const res = await fetch(`${API_BASE_URL}/mandaps/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("API request failed");
    const json = await res.json();
    return json.data;
  } catch (err) {
    const found = FALLBACK_MANDAPS.find((m) => m.slug === slug);
    if (!found) return null;
    return {
      mandap: found,
      schedules: [
        {
          _id: "s1",
          day: "মহা সপ্তমী",
          title: "নবপত্রিকা স্নান ও দেবীর সপ্তমী বিহিত পূজা",
          date: new Date("2026-10-18"),
          startTime: "সকাল ০৬:৩০",
          endTime: "সকাল ০৮:৩০",
        },
        {
          _id: "s2",
          day: "মহা অষ্টমী",
          title: "মহাষ্টমী পুষ্পাঞ্জলি ও কুমারী পূজা",
          date: new Date("2026-10-19"),
          startTime: "সকাল ০৯:৩০",
          endTime: "সকাল ১১:০০",
        },
        {
          _id: "s3",
          day: "মহা অষ্টমী",
          title: "মহাপবিত্র সন্ধিপূজা ও ১০৮ দীপদান আরতি",
          date: new Date("2026-10-19"),
          startTime: "বিকেল ০৫:৪৫",
          endTime: "সন্ধ্যা ০৬:৩৩",
        },
        {
          _id: "s4",
          day: "বিজয়া দশমী",
          title: "সিঁদুর খেলা ও মহা বিসর্জন যাত্রা",
          date: new Date("2026-10-21"),
          startTime: "বিকেল ০৪:০০",
          endTime: "রাত ০৮:০০",
        },
      ],
      events: FALLBACK_EVENTS.filter((e) => e.mandapName.includes(found.name.split(" ")[0])),
      announcements: [
        {
          _id: "a1",
          title: "পুষ্পাঞ্জলি সময়সূচি ও শৃঙ্খলা নির্দেশিকা",
          content: "ভক্তবৃন্দ সকাল ৮:০০ টা থেকে ১ নম্বর গেটে সারিবদ্ধভাবে টোকেন গ্রহণ করে পুষ্পাঞ্জলিতে অংশ নিতে পারবেন।",
          priority: "IMPORTANT",
        },
      ],
      galleryImages: [],
      isFavorited: false,
    };
  }
}
