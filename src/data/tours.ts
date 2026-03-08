// data.ts (SAMPLE) — you can copy this structure and add the rest manually

// 1) Define the 3 plan types at the beginning
export type PlanType = 'cultural' | 'festivals' | 'trek'

// 2) Day plan structure
export type DayPlan = {
  day: number // 1, 2, 3...
  title: string // e.g., "Arrive in Paro & Transfer to Thimphu"
  desc: string // short description for the day
}

// 3) Main plan structure
export type TravelPlan = {
  type: PlanType
  title: string
  shortDesc: string
  days: number
  image: string // placeholder image path (you will add later)
  galleryImages: string[]
  brochurePdf: string
  dayPlans: DayPlan[]
}

const createGalleryImagePaths = (coverImagePath: string) => {
  const directoryPath = coverImagePath.replace(/\/cover\.[^.]+$/i, '')

  if (directoryPath === coverImagePath) {
    return []
  }

  return Array.from({ length: 4 }, (_, index) => `${directoryPath}/gallery/${index + 1}.jpg`)
}

// ✅ SAMPLE FOR 1 PLAN (Festivals)
const rawPlans: Omit<TravelPlan, 'galleryImages'>[] = [
  {
    type: 'festivals',
    title: 'Thimphu Tshechu',
    shortDesc:
      '7-day festival journey featuring Thimphu Tsechu, cultural landmarks in Thimphu, a Punakha valley visit, and the Tiger’s Nest hike in Paro.',
    days: 7,
    image: '/img/plans/festivals/thimphu-tsechu/cover.jpg',
    brochurePdf: '/pdf/plans/festivals/thimphu-tshechu.pdf',
    dayPlans: [
      {
        day: 1,
        title: 'Arrive in Paro • Sightseeing • Transfer to Thimphu',
        desc: 'Land in Paro, visit Ta Dzong Museum and Rinpung Dzong, then continue to Bhutan’s capital for an evening check-in and rest.',
      },
      {
        day: 2,
        title: 'Thimphu Tshechu Festival Experience',
        desc: 'Attend Thimphu Tshechu at Tashichhodzong and witness masked dances, rituals, and local celebrations in traditional dress.',
      },
      {
        day: 3,
        title: 'Thimphu City & Cultural Highlights',
        desc: 'Explore the capital’s key sights like Buddha Dordenma and other cultural landmarks, with time for local markets and city atmosphere.',
      },
      {
        day: 4,
        title: 'Drive to Punakha via Dochula Pass',
        desc: 'Scenic drive over Dochula Pass (mountain views if clear) and descend into the Punakha valley for major heritage stops.',
      },
      {
        day: 5,
        title: 'Punakha Valley Exploration',
        desc: 'Spend the day discovering Punakha’s cultural sites and gentle walks through the valley scenery and riverside landscapes.',
      },
      {
        day: 6,
        title: 'Paro • Tiger’s Nest Hike',
        desc: 'Return to Paro and hike to Taktsang (Tiger’s Nest) through pine forests for iconic cliffside monastery views.',
      },
      {
        day: 7,
        title: 'Departure',
        desc: 'Breakfast, final preparations, and transfer to the airport for departure.',
      },
    ],
  },
  {
    type: 'festivals',
    title: 'Punakha Tshechu',
    shortDesc:
      '8-day cultural and festival journey through Thimphu, Phobjikha, Punakha, and Paro featuring the Punakha Tshechu, scenic mountain passes, sacred temples, and the iconic Tiger’s Nest hike.',
    days: 8,
    image: '/img/plans/festivals/punakha-tsechu/cover.jpg',
    brochurePdf: '/pdf/plans/festivals/punakha-tsechu.pdf',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival in Paro & Transfer to Thimphu',
        desc: 'Arrive at Paro International Airport, meet your guide, and enjoy a scenic drive to Thimphu with stops at Tachog Lhakhang and Tashichhodzong. Evening at leisure exploring local markets.',
      },
      {
        day: 2,
        title: 'Thimphu Cultural Exploration',
        desc: 'Visit the National Institute for Zorig Chusum, explore the Takin Preserve, admire Buddha Dordenma at Kuensel Phodrang, and conclude at the National Memorial Chorten.',
      },
      {
        day: 3,
        title: 'Thimphu to Phobjikha via Dochula Pass',
        desc: 'Drive through scenic mountain roads to Phobjikha Valley, stop at Dochula Pass for Himalayan views, enjoy a nature hike, and visit the Black-Necked Crane Information Center.',
      },
      {
        day: 4,
        title: 'Phobjikha to Punakha – Sacred Temples & Valley Views',
        desc: 'Travel to Punakha, visit Chimi Lhakhang (Fertility Temple), enjoy a traditional farmhouse lunch, explore Punakha Dzong, and walk across the suspension bridge.',
      },
      {
        day: 5,
        title: 'Punakha Tsechu Festival Experience',
        desc: 'Attend the vibrant Punakha Tsechu festival featuring mask dances, traditional music, and colorful performances. Explore the dzong and local markets.',
      },
      {
        day: 6,
        title: 'Paro Exploration & Cultural Heritage',
        desc: 'Drive back to Paro, visit Ta Dzong (National Museum) and Rinpung Dzong, and enjoy an evening stroll through Paro town.',
      },
      {
        day: 7,
        title: 'Tiger’s Nest Hike & Traditional Experience',
        desc: 'Hike to the iconic Taktsang Monastery (Tiger’s Nest) perched above Paro Valley and enjoy a traditional Bhutanese meal afterward.',
      },
      {
        day: 8,
        title: 'Departure Day',
        desc: 'Relaxed breakfast, optional final stroll in Paro, and transfer to Paro International Airport for departure.',
      },
    ],
  },
  {
    type: 'festivals',
    title: 'Paro Tshechu',
    shortDesc:
      '8-day cultural and festival journey across Thimphu, Phobjikha, Punakha, and Paro, culminating in the vibrant Paro Tshechu at Rinpung Dzong and the iconic Tiger’s Nest hike.',
    days: 8,
    image: '/img/plans/festivals/paro-tshechu/cover.jpg',
    brochurePdf: '/pdf/plans/festivals/paro-tshechu.pdf',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival in Paro & Transfer to Thimphu',
        desc: 'Arrive at Paro International Airport, meet your guide, and enjoy a scenic drive to Thimphu with stops at Tachog Lhakhang and Tashichhodzong. Evening at leisure exploring local markets.',
      },
      {
        day: 2,
        title: 'Discovering Thimphu',
        desc: 'Visit the National Institute for Zorig Chusum, explore the Motithang Takin Preserve, create custom stamps at the Bhutan Post Office Headquarters, admire Buddha Dordenma at Kuensel Phodrang, and visit the National Memorial Chorten.',
      },
      {
        day: 3,
        title: 'Thimphu to Phobjikha via Dochula Pass',
        desc: 'Drive through scenic mountain roads to Phobjikha Valley, stop at Dochula Pass for Himalayan views, enjoy the Phobjikha Nature Trail hike, and visit the Black-Necked Crane Information Center.',
      },
      {
        day: 4,
        title: 'Phobjikha to Punakha – Sacred Temples & Riverside Majesty',
        desc: 'Travel to Punakha, visit Chimi Lhakhang (Fertility Temple), enjoy a traditional farmhouse lunch, explore Punakha Dzong at the confluence of Pho Chhu and Mo Chhu rivers, and walk across the suspension bridge.',
      },
      {
        day: 5,
        title: 'Paro Exploration & Cultural Heritage',
        desc: 'Drive back to Paro via Dochula Pass, visit Ta Dzong (National Museum) and Rinpung Dzong, and enjoy an evening stroll through Paro town.',
      },
      {
        day: 6,
        title: 'Paro Tshechu at Rinpung Dzong',
        desc: 'Attend the vibrant Paro Tshechu featuring sacred Cham dances such as Guru Tshengye Cham, Shakya Cham, Black Hat Dance, and Medicine Buddha Cham performed by monks in colorful costumes.',
      },
      {
        day: 7,
        title: 'Tiger’s Nest Hike & Traditional Bhutanese Experience',
        desc: 'Hike to the iconic Taktsang Monastery (Tiger’s Nest) perched above Paro Valley and enjoy a traditional Bhutanese farmhouse meal featuring ema datshi, red rice, and seasonal vegetables.',
      },
      {
        day: 8,
        title: 'Departure Day',
        desc: 'Relaxed breakfast, optional final stroll in Paro, and transfer to Paro International Airport for departure.',
      },
    ],
  },
  {
    type: 'festivals',
    title: 'Laya Life Festival',
    shortDesc:
      '15-day highland trekking journey through remote Himalayan landscapes culminating in the unique Laya Life Festival, featuring mountain passes, yak herder villages, alpine camps, and hot spring relaxation.',
    days: 15,
    image: '/img/plans/festivals/laya-life-festival/cover.jpg',
    brochurePdf: '/pdf/plans/festivals/laya-life-festival.pdf',
    dayPlans: [
      {
        day: 1,
        title: 'Paro to Sharna Zampa',
        desc: 'Drive north of Paro to the trailhead near Drugyal Dzong and begin trekking along the Pachhu River through rice terraces, forests, and traditional villages to camp at Sharna Zampa.',
      },
      {
        day: 2,
        title: 'Sharna Zampa to Soi Thangkha',
        desc: 'Trek along the Paro River through pine, oak, and spruce forests, crossing streams and meadows before reaching camp at Soi Thangkha.',
      },
      {
        day: 3,
        title: 'Soi Thangkha to Jangothang Base Camp',
        desc: 'Ascend above the tree line into yak country with views of Mount Jumolhari and Jichu Drake, arriving at Jangothang base camp.',
      },
      {
        day: 4,
        title: 'Jangothang Acclimatization & Exploration',
        desc: 'Acclimatization hike with panoramic views of surrounding Himalayan peaks, opportunities to spot wildlife, or relax at camp beneath Mount Jumolhari.',
      },
      {
        day: 5,
        title: 'Jangothang to Lingshi',
        desc: 'Cross Nyile La Pass with breathtaking views of Jumolhari and Tshering Gang, then descend to Lingshi with views of Lingshi Dzong.',
      },
      {
        day: 6,
        title: 'Lingshi to Chebisa',
        desc: 'Visit Lingshi Dzong and continue trekking through villages and yak herder camps to the charming settlement of Chebisa.',
      },
      {
        day: 7,
        title: 'Chebisa to Shomuthang',
        desc: 'Climb toward Gogu La Pass and descend through rhododendron forests and yak pastures to reach camp at Shomuthang.',
      },
      {
        day: 8,
        title: 'Shomuthang to Robluthang',
        desc: 'Cross Jari La Pass with views of Kangbum Peak and descend into Tsarijathang Valley before camping at Robluthang meadow.',
      },
      {
        day: 9,
        title: 'Robluthang to Lingmithang',
        desc: 'Trek across the highest pass of the journey, Shingchen La, with views of Gangchenta (Tiger Mountain), then descend through rocky trails to Lingmithang.',
      },
      {
        day: 10,
        title: 'Lingmithang to Laya',
        desc: 'Enjoy scenic views of Gangchenta as you trek through forests and alpine landscapes to reach Laya village, one of Bhutan’s highest settlements.',
      },
      {
        day: 11,
        title: 'Rest Day & Laya Life Festival',
        desc: 'Explore Laya village and experience the vibrant Laya Life Festival showcasing highland culture, traditional attire, music, and community celebrations.',
      },
      {
        day: 12,
        title: 'Laya to Chamsa',
        desc: 'Descend toward the Mo Chhu River through juniper and fir forests, following the river valley to camp at Chamsa.',
      },
      {
        day: 13,
        title: 'Gasa Tshachu Rest & Hot Springs',
        desc: 'Visit Gasa Dzong and relax at the famous Gasa Tshachu hot springs after days of trekking.',
      },
      {
        day: 14,
        title: 'Gasa to Punakha',
        desc: 'Drive from Gasa through Damji and Tashithang, descending through lush valleys and agricultural terraces toward Punakha.',
      },
      {
        day: 15,
        title: 'Departure Day',
        desc: 'Breakfast and final exploration before transfer to Paro International Airport for departure.',
      },
    ],
  },
  {
    type: 'cultural',
    title: 'Jambay Lhakhang Drup',
    shortDesc:
      '10-day cultural exploration across Paro, Thimphu, Punakha, Trongsa, and Bumthang featuring sacred monasteries, historic dzongs, scenic mountain passes, and the vibrant Jambay Lhakhang Drup festival.',
    days: 10,
    image: '/img/plans/cultural/jambay-lhakhang-drup/cover.jpg',
    brochurePdf: '/pdf/plans/cultural/jambay-lhakhang-drup.pdf',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival in Paro & Transfer to Thimphu',
        desc: 'Arrive in Paro, visit Ta Dzong (National Museum) and Rinpung Dzong, then drive along the scenic Pha Chhu River Valley to Thimphu.',
      },
      {
        day: 2,
        title: 'Thimphu Cultural Exploration',
        desc: 'Explore the National Institute for Zorig Chusum, Bhutan Postal Museum, Buddha Dordenma at Kuensel Phodrang, Tashichhodzong, and the National Memorial Chorten.',
      },
      {
        day: 3,
        title: 'Thimphu to Punakha',
        desc: 'Drive via Dochula Pass (3,100m) with panoramic Himalayan views, visit Punakha Dzong at the confluence of Pho Chhu and Mo Chhu rivers, and explore Chimi Lhakhang.',
      },
      {
        day: 4,
        title: 'Punakha to Bumthang via Trongsa',
        desc: 'Journey through scenic mountain passes including Dochula and Pele La, visit Trongsa Dzong, and continue to Bumthang valley known for its sacred monasteries.',
      },
      {
        day: 5,
        title: 'Bumthang Sacred Sites',
        desc: 'Visit Kurjey Lhakhang, Jakar Dzong, and Tamshing Lhakhang, exploring the spiritual heartland of Bhutan and the charming town of Jakar.',
      },
      {
        day: 6,
        title: 'Jambay Lhakhang Drup Festival',
        desc: 'Attend the Jambay Lhakhang Drup festival featuring vibrant Cham dances, sacred rituals, and unique traditional performances in Bumthang.',
      },
      {
        day: 7,
        title: 'Bumthang to Punakha',
        desc: 'Return journey through central Bhutan’s scenic valleys and mountain passes, enjoying views of forests and rural landscapes.',
      },
      {
        day: 8,
        title: 'Punakha to Paro',
        desc: 'Drive back via Thimphu, stop at Tachog Lhakhang, and enjoy leisure time in Paro exploring local markets and traditional architecture.',
      },
      {
        day: 9,
        title: 'Paro – Tiger’s Nest Hike',
        desc: 'Hike to the iconic Taktsang Monastery (Tiger’s Nest), perched dramatically above Paro Valley, or explore Paro valley and nearby heritage sites.',
      },
      {
        day: 10,
        title: 'Departure Day',
        desc: 'Enjoy breakfast and final exploration before transfer to Paro International Airport for departure.',
      },
    ],
  },
  {
    type: 'cultural',
    title: 'Cultural Odyssey Adventure',
    shortDesc:
      '8-day cultural journey through Paro, Thimphu, Phobjikha, and Punakha featuring sacred monasteries, scenic mountain passes, nature hikes, river valleys, and the iconic Tiger’s Nest experience.',
    days: 8,
    image: '/img/plans/cultural/cultural-odyssey-adventure/cover.jpg',
    brochurePdf: '/pdf/plans/cultural/cultural-odyssey-adventure.pdf',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival in Paro & Transfer to Thimphu',
        desc: 'Arrive at Paro International Airport, visit Tachog Lhakhang and the historic iron chain bridge, continue to Thimphu, explore Tashichhodzong, and enjoy an evening market stroll.',
      },
      {
        day: 2,
        title: 'Thimphu Cultural Exploration',
        desc: 'Visit the National Institute for Zorig Chusum, Motithang Takin Preserve, Buddha Dordenma at Kuensel Phodrang, and the National Memorial Chorten.',
      },
      {
        day: 3,
        title: 'Thimphu to Phobjikha via Dochula Pass',
        desc: 'Drive through Dochula Pass (3,100m), hike the scenic Phobjikha Nature Trail, and visit the Black-Necked Crane Information Center in Gangtey.',
      },
      {
        day: 4,
        title: 'Phobjikha to Punakha – Sacred Temples & Riverside Views',
        desc: 'Drive to Punakha, visit Chimi Lhakhang (Fertility Temple), enjoy a traditional farmhouse lunch, explore Punakha Dzong, and walk across the suspension bridge.',
      },
      {
        day: 5,
        title: 'Adventure in Punakha',
        desc: 'Hike to Khamsum Yulley Namgyal Chorten for panoramic valley views or enjoy optional white-water rafting on the Pho Chhu or Mo Chhu rivers.',
      },
      {
        day: 6,
        title: 'Punakha to Paro – Heritage Exploration',
        desc: 'Drive back to Paro, visit Ta Dzong (National Museum) and Rinpung Dzong, and enjoy a relaxing evening walk through Paro town.',
      },
      {
        day: 7,
        title: 'Tiger’s Nest Hike & Traditional Experience',
        desc: 'Hike to Taktsang Monastery (Tiger’s Nest), perched high above Paro Valley, and conclude the day with a traditional Bhutanese farmhouse meal.',
      },
      {
        day: 8,
        title: 'Departure Day',
        desc: 'Enjoy a relaxed breakfast, last-minute exploration in Paro, and transfer to Paro International Airport for departure.',
      },
    ],
  },
  {
    type: 'cultural',
    title: 'Essence of Origins',
    shortDesc:
      '12-day immersive cultural journey through Paro, Thimphu, Phobjikha, Bumthang, and Punakha featuring sacred monasteries, scenic Himalayan passes, valley hikes, heritage sites, and the iconic Tiger’s Nest experience.',
    days: 12,
    image: '/img/plans/cultural/essence-of-origins/cover.jpg',
    brochurePdf: '/pdf/plans/cultural/essence-of-origins.pdf',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival in Paro & Discover Thimphu',
        desc: 'Arrive at Paro International Airport, visit Tachog Lhakhang and the iron chain bridge, transfer to Thimphu, explore Tashichhodzong, and enjoy an optional evening market walk.',
      },
      {
        day: 2,
        title: 'Discovering Thimphu City',
        desc: 'Visit the National Institute for Zorig Chusum, Motithang Takin Preserve, Buddha Dordenma at Kuensel Phodrang, and the National Memorial Chorten.',
      },
      {
        day: 3,
        title: 'Thimphu Scenic Hike & Monastery Visit (Optional)',
        desc: 'Choose between Wangditse Hike for valley views or Tango & Cheri monastery hikes for a deeper cultural experience surrounded by forested trails.',
      },
      {
        day: 4,
        title: 'Thimphu to Phobjikha via Dochula Pass',
        desc: 'Drive across Dochula Pass (3,100m), admire the 108 Druk Wangyel Chortens, visit Gangtey Monastery, hike the Phobjikha Nature Trail, and enjoy a traditional hot stone bath.',
      },
      {
        day: 5,
        title: 'Phobjikha to Bumthang via Central Highlands',
        desc: 'Journey through Pele La Pass and scenic mountain landscapes, visit Trongsa Dzong, and continue to Bumthang valley.',
      },
      {
        day: 6,
        title: 'Discovering Bumthang Sacred Sites',
        desc: 'Explore Jambay Lhakhang, Kurjey Lhakhang, Tamshing Lhakhang, and Mebar Tsho (Burning Lake), immersing in Bhutan’s spiritual heartland.',
      },
      {
        day: 7,
        title: 'Bumthang to Punakha',
        desc: 'Drive through scenic highlands via Trongsa and Wangdue Phodrang, enjoying panoramic Himalayan views before reaching Punakha.',
      },
      {
        day: 8,
        title: 'Sightseeing in Punakha',
        desc: 'Visit Chimi Lhakhang (Fertility Temple), enjoy a traditional farmhouse lunch, explore Punakha Dzong, and walk across the suspension bridge.',
      },
      {
        day: 9,
        title: 'Adventure in Punakha',
        desc: 'Hike to Khamsum Yulley Namgyal Chorten for panoramic valley views or opt for white-water rafting on the Pho Chhu or Mo Chhu rivers.',
      },
      {
        day: 10,
        title: 'Scenic Drive to Paro & Heritage Exploration',
        desc: 'Drive back to Paro, visit Rinpung Dzong, Ta Dzong (National Museum), Kyichu Lhakhang, and explore Paro town markets.',
      },
      {
        day: 11,
        title: 'Tiger’s Nest Hike (Paro Taktsang)',
        desc: 'Hike to the iconic Tiger’s Nest Monastery perched dramatically above Paro Valley, with optional excursion to Chele La Pass.',
      },
      {
        day: 12,
        title: 'Departure Day',
        desc: 'Enjoy breakfast, final exploration or shopping in Paro, and transfer to Paro International Airport for departure.',
      },
    ],
  },
  {
    type: 'cultural',
    title: 'The Bond Beyond Borders',
    shortDesc:
      '10-day cultural and scenic journey through Thimphu, Punakha, Phobjikha, Bumthang, and Paro featuring sacred monasteries, Himalayan passes, nature trails, heritage dzongs, and the iconic Tiger’s Nest hike.',
    days: 10,
    image: '/img/plans/cultural/the-bond-beyond-borders/cover.jpg',
    brochurePdf: '/pdf/plans/cultural/the-bond-beyond-borders.pdf',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival & Transfer to Thimphu',
        desc: 'Arrive at Paro International Airport, visit Tachog Lhakhang and the iron chain bridge, transfer to Thimphu, explore Tashichhodzong, and enjoy an evening city stroll.',
      },
      {
        day: 2,
        title: 'Discovering Thimphu’s Living Traditions',
        desc: 'Visit the School of Traditional Arts (Zorig Chusum), Motithang Takin Preserve, Buddha Dordenma, and the National Memorial Chorten.',
      },
      {
        day: 3,
        title: 'Thimphu to Punakha – Himalayan Passes & Sacred Valley',
        desc: 'Drive via Dochula Pass (3,100m), admire the 108 Druk Wangyel Chortens, visit Chimi Lhakhang, enjoy a traditional farmhouse lunch, explore Punakha Dzong, and walk across the suspension bridge.',
      },
      {
        day: 4,
        title: 'Punakha to Phobjikha Valley',
        desc: 'Scenic drive to Gangtey, visit Gangtey Monastery, hike the Gangtey Nature Trail, and experience a traditional Bhutanese hot stone bath.',
      },
      {
        day: 5,
        title: 'Phobjikha to Bumthang via Central Highlands',
        desc: 'Journey through Pele La and Yotong La passes, visit Trongsa Dzong and Ta Dzong Museum, and arrive in Bumthang Valley.',
      },
      {
        day: 6,
        title: 'Jakar & Bumthang Exploration',
        desc: 'Visit Jambay Lhakhang, Kurjey Lhakhang, Tamshing Lhakhang, and Mebar Tsho (Burning Lake), discovering Bhutan’s spiritual heartland.',
      },
      {
        day: 7,
        title: 'Return to Punakha & Leisure Time',
        desc: 'Drive back through scenic mountain landscapes, relax upon arrival in Punakha, and enjoy optional evening exploration.',
      },
      {
        day: 8,
        title: 'Scenic Drive to Paro & Heritage Sites',
        desc: 'Travel to Paro, visit Paro Dzong (Rinpung Dzong), Ta Dzong (National Museum), Kyichu Lhakhang, and explore local markets.',
      },
      {
        day: 9,
        title: 'Tiger’s Nest Hike & Optional Chele La Pass',
        desc: 'Hike to Taktsang Monastery (Tiger’s Nest), Bhutan’s most iconic landmark, with an optional scenic excursion to Chele La Pass.',
      },
      {
        day: 10,
        title: 'Departure Day',
        desc: 'Enjoy breakfast, last-minute shopping or café visit in Paro, and transfer to Paro International Airport for departure.',
      },
    ],
  },
  {
    type: 'cultural',
    title: 'Sacred Shores & Silent Hills',
    shortDesc:
      '13-day immersive cultural expedition through Thimphu, Phobjikha, Bumthang, Trongsa, Punakha, and Paro featuring sacred monasteries, scenic Himalayan passes, rural valleys, heritage dzongs, and the iconic Tiger’s Nest hike.',
    days: 13,
    image: '/img/plans/cultural/sacred-shores-silent-hills/cover.jpg',
    brochurePdf: '/pdf/plans/cultural/sacred-shores-silent-hills.pdf',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival in Paro & Transfer to Thimphu',
        desc: 'Arrive at Paro International Airport, visit Tachog Lhakhang and the iron chain bridge, transfer to Thimphu, explore Tashichhodzong, and enjoy an optional evening walk in the capital.',
      },
      {
        day: 2,
        title: 'Discovering Thimphu',
        desc: 'Visit the National Institute for Zorig Chusum, Motithang Takin Preserve, Buddha Dordenma at Kuensel Phodrang, and the National Memorial Chorten.',
      },
      {
        day: 3,
        title: 'Wangditse or Tango & Cheri Hike (Optional)',
        desc: 'Choose between a scenic Wangditse hike overlooking Thimphu Valley or a cultural hike to Tango and Cheri monasteries for deeper spiritual immersion.',
      },
      {
        day: 4,
        title: 'Thimphu to Phobjikha via Dochula Pass',
        desc: 'Drive across Dochula Pass (3,100m), admire the 108 Druk Wangyel Chortens, visit Gangtey Monastery, hike the Gangtey Nature Trail, and enjoy a traditional hot stone bath.',
      },
      {
        day: 5,
        title: 'Phobjikha to Bumthang',
        desc: 'Journey through Pele La Pass and scenic mountain landscapes, descending into Bumthang Valley, Bhutan’s spiritual heartland.',
      },
      {
        day: 6,
        title: 'Exploring Bumthang Sacred Sites',
        desc: 'Visit Jambay Lhakhang, Kurjey Lhakhang, Tamshing Lhakhang, and Mebar Tsho (Burning Lake), experiencing Bhutan’s deep spiritual heritage.',
      },
      {
        day: 7,
        title: 'Bumthang to Trongsa',
        desc: 'Cross Yotong La Pass, visit the magnificent Trongsa Dzong and Ta Dzong Museum, and enjoy the tranquil mountain atmosphere.',
      },
      {
        day: 8,
        title: 'Trongsa to Punakha',
        desc: 'Drive through central Bhutan via Pele La Pass, descend through Wangdue Phodrang, and arrive in the fertile valleys of Punakha.',
      },
      {
        day: 9,
        title: 'Sightseeing in Punakha',
        desc: 'Visit Chimi Lhakhang, enjoy a traditional farmhouse lunch, explore Punakha Dzong at the confluence of Pho Chhu and Mo Chhu rivers, and walk across the suspension bridge.',
      },
      {
        day: 10,
        title: 'Adventure in Punakha',
        desc: 'Hike to Khamsum Yulley Namgyal Chorten for panoramic views or enjoy optional white-water rafting on the Pho Chhu or Mo Chhu rivers.',
      },
      {
        day: 11,
        title: 'Scenic Drive to Paro & Heritage Exploration',
        desc: 'Drive to Paro, visit Rinpung Dzong, Ta Dzong (National Museum), Kyichu Lhakhang, and stroll through Paro town markets.',
      },
      {
        day: 12,
        title: 'Tiger’s Nest Hike (Paro Taktsang)',
        desc: 'Hike to Taktsang Monastery (Tiger’s Nest), perched dramatically above Paro Valley, with an optional excursion to Chele La Pass.',
      },
      {
        day: 13,
        title: 'Departure Day',
        desc: 'Enjoy breakfast, last-minute shopping or relaxation in Paro, and transfer to Paro International Airport for departure.',
      },
    ],
  },
  {
    type: 'cultural',
    title: 'The Bhutan Immersion: Nature & Culture',
    shortDesc:
      '5-day cultural exploration through Thimphu, Punakha, and Paro featuring sacred monasteries, Himalayan passes, dzongs, and the iconic Tiger’s Nest hike.',
    days: 5,
    image: '/img/plans/cultural/bhutan-immersion-nature-culture/cover.jpg',
    brochurePdf: '/pdf/plans/cultural/bhutan-immersion-nature-culture.pdf',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival & Thimphu Discovery',
        desc: 'Arrive in Paro, transfer to Thimphu, visit Tachog Lhakhang, Tashichho Dzong, Zorig Chusum, Takin Preserve, Buddha Dordenma, and National Memorial Chorten.',
      },
      {
        day: 2,
        title: 'Punakha Scenic Journey',
        desc: 'Drive via Dochula Pass, visit Chimmi Lhakhang, explore Punakha Dzong, and walk across the Punakha Suspension Bridge.',
      },
      {
        day: 3,
        title: 'Paro Cultural Exploration',
        desc: 'Drive to Paro, visit Ta Dzong (National Museum), Kyichu Lhakhang, and Drugyel Dzong with views of Mount Jomolhari.',
      },
      {
        day: 4,
        title: 'Tiger’s Nest & Traditional Experience',
        desc: 'Hike to Paro Taktsang (Tiger’s Nest) and enjoy a traditional Bhutanese farmhouse experience with hot stone bath.',
      },
      {
        day: 5,
        title: 'Departure',
        desc: 'Breakfast and transfer to Paro International Airport for departure.',
      },
    ],
  },
  {
    type: 'cultural',
    title: 'Happiness in the Himalayas',
    shortDesc:
      '6-day cultural journey across Thimphu, Punakha, and Paro blending heritage sites, sacred temples, and Bhutan’s iconic Tiger’s Nest experience.',
    days: 6,
    image: '/img/plans/cultural/happiness-in-the-himalayas/cover.jpg',
    brochurePdf: '/pdf/plans/cultural/happiness-in-the-himalayas.pdf',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival & Transfer to Thimphu',
        desc: 'Arrive in Paro and transfer to Thimphu, visiting Tachog Lhakhang and Tashichho Dzong.',
      },
      {
        day: 2,
        title: 'Thimphu Cultural Exploration',
        desc: 'Visit Zorig Chusum, Takin Preserve, Buddha Dordenma, and National Memorial Chorten.',
      },
      {
        day: 3,
        title: 'Punakha Scenic Drive',
        desc: 'Drive via Dochula Pass, visit Chimmi Lhakhang, explore Punakha Dzong, and cross the Suspension Bridge.',
      },
      {
        day: 4,
        title: 'Return to Paro',
        desc: 'Scenic drive to Paro with heritage visits and exploration of Paro town.',
      },
      {
        day: 5,
        title: 'Tiger’s Nest Hike',
        desc: 'Hike to Taktsang Monastery (Tiger’s Nest) followed by a traditional Bhutanese experience.',
      },
      {
        day: 6,
        title: 'Departure',
        desc: 'Breakfast and airport transfer.',
      },
    ],
  },
  {
    type: 'cultural',
    title: 'Timeless Treasures Journey',
    shortDesc:
      '9-day cultural immersion through Thimphu, Punakha, Phobjikha, Bumthang, and Paro featuring sacred valleys, dzongs, and the legendary Tiger’s Nest hike.',
    days: 9,
    image: '/img/plans/cultural/timeless-treasures-journey/cover.jpg',
    brochurePdf: '/pdf/plans/cultural/timeless-treasures-journey.pdf',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival & Thimphu Exploration',
        desc: 'Arrive in Paro, transfer to Thimphu, visit Tachog Lhakhang and Tashichho Dzong.',
      },
      {
        day: 2,
        title: 'Discovering Thimphu',
        desc: 'Visit Zorig Chusum, Takin Preserve, Buddha Dordenma, and National Memorial Chorten.',
      },
      {
        day: 3,
        title: 'Thimphu to Punakha',
        desc: 'Drive via Dochula Pass and explore Punakha Dzong and Chimmi Lhakhang.',
      },
      {
        day: 4,
        title: 'Punakha to Phobjikha',
        desc: 'Drive to Gangtey, visit Gangtey Goemba, and hike the Phobjikha Nature Trail.',
      },
      {
        day: 5,
        title: 'Phobjikha to Bumthang',
        desc: 'Cross Pele La Pass, visit Trongsa Dzong and continue to Bumthang.',
      },
      {
        day: 6,
        title: 'Bumthang Exploration',
        desc: 'Visit Jambay Lhakhang, Kurjey Lhakhang, Tamshing Lhakhang, and Mebar Tsho.',
      },
      {
        day: 7,
        title: 'Return to Paro',
        desc: 'Fly or drive back to Paro and explore Rinpung Dzong and Kyichu Lhakhang.',
      },
      {
        day: 8,
        title: 'Tiger’s Nest Hike',
        desc: 'Hike to Taktsang Monastery with optional Chele La Pass excursion.',
      },
      {
        day: 9,
        title: 'Departure',
        desc: 'Breakfast and airport transfer.',
      },
    ],
  },
  {
    type: 'cultural',
    title: 'Bhutan Beyond the Valleys',
    shortDesc:
      '8-day cultural and nature-focused journey through Thimphu, Phobjikha, Punakha, and Paro combining scenic hikes, sacred monasteries, and Bhutan’s iconic Tiger’s Nest.',
    days: 8,
    image: '/img/plans/cultural/bhutan-beyond-the-valleys/cover.jpg',
    brochurePdf: '/pdf/plans/cultural/bhutan-beyond-the-valleys.pdf',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival & Thimphu Discovery',
        desc: 'Arrive in Paro and transfer to Thimphu, visiting Tachog Lhakhang and Tashichho Dzong.',
      },
      {
        day: 2,
        title: 'Thimphu Cultural Highlights',
        desc: 'Visit Zorig Chusum, Takin Preserve, Buddha Dordenma, and National Memorial Chorten.',
      },
      {
        day: 3,
        title: 'Thimphu to Phobjikha',
        desc: 'Drive via Dochula Pass and hike the Phobjikha Nature Trail, visiting Gangtey Goemba.',
      },
      {
        day: 4,
        title: 'Phobjikha to Punakha',
        desc: 'Drive to Punakha and visit Chimmi Lhakhang and Punakha Dzong.',
      },
      {
        day: 5,
        title: 'Punakha Adventure',
        desc: 'Optional Khamsum Yulley Namgyal Chorten hike or river rafting on Pho Chhu or Mo Chhu.',
      },
      {
        day: 6,
        title: 'Punakha to Paro',
        desc: 'Drive to Paro and explore Rinpung Dzong and Ta Dzong.',
      },
      {
        day: 7,
        title: 'Tiger’s Nest Hike',
        desc: 'Hike to Taktsang Monastery followed by traditional Bhutanese experience.',
      },
      {
        day: 8,
        title: 'Departure',
        desc: 'Breakfast and transfer to Paro International Airport.',
      },
    ],
  },
  {
    type: 'trek',
    title: 'Chele La Ridge Trek',
    shortDesc:
      '9-day western Bhutan journey combining Paro, Haa, Thimphu, and Punakha with a scenic 3-day ridge trek across Chele La, Tiger’s Nest, high mountain camps, and sweeping Himalayan views.',
    days: 9,
    image: '/img/plans/treks/chele-la-ridge-trek/cover.jpg',
    brochurePdf: '/pdf/plans/treks/chele-la-ridge-trek.pdf',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival in Paro',
        desc: 'Arrive in Paro, meet your guide, and settle into the valley. Depending on your arrival time, explore Rinpung Dzong, Ta Dzong, and Dungtse Lhakhang before an easy evening in Paro town.',
      },
      {
        day: 2,
        title: 'Paro to Haa Valley via Tiger’s Nest & Chele La',
        desc: 'Hike to Paro Taktsang (Tiger’s Nest Monastery), then drive west across Chele La Pass with panoramic views of Jumolhari and Jichu Drake before descending into Haa Valley.',
      },
      {
        day: 3,
        title: 'Trek Day 1: Haa to Sagala Camp',
        desc: 'Begin the trek near the Haa Valley floor, following trails through villages, cultivated fields, and yak herder camps before a final climb to scenic Sagala Camp at 3,550m.',
      },
      {
        day: 4,
        title: 'Trek Day 2: Sagala to High Ridge Camp',
        desc: 'Climb to Sagala Pass for mountain views, then continue along high ridges with alternating ascents and descents through rhododendron meadows and forest to camp at 3,850m.',
      },
      {
        day: 5,
        title: 'Trek Day 3: High Ridge to Chele La via Kung Karpo',
        desc: 'Traverse the ridge through alpine meadows and yak camps, reach sacred Kung Karpo, and enjoy expansive Himalayan views before descending to Chele La Pass and driving on to Thimphu.',
      },
      {
        day: 6,
        title: 'Thimphu Cultural Exploration',
        desc: 'Visit the National Memorial Chorten, Buddha Dordenma, and the Takin Preserve, with time to explore Thimphu’s local market scene and city atmosphere.',
      },
      {
        day: 7,
        title: 'Thimphu to Punakha via Dochula Pass',
        desc: 'Cross Dochula Pass and descend into Punakha Valley. Visit Chimi Lhakhang and explore Punakha Dzong at the confluence of the Pho Chhu and Mo Chhu rivers.',
      },
      {
        day: 8,
        title: 'Punakha Exploration & Return to Paro',
        desc: 'Walk the suspension bridge over the Pho Chhu, visit Nalanda University and the nearby nunnery, then drive back through Thimphu and continue to Paro by evening.',
      },
      {
        day: 9,
        title: 'Departure from Paro',
        desc: 'Enjoy a relaxed final morning in Paro with time for a last stroll or coffee before transferring to Paro International Airport for departure.',
      },
    ],
  },
  {
    type: 'trek',
    title: 'Dagala (Thousand Lake Trek)',
    shortDesc:
      '5-day high-altitude trek across the Dagala range featuring alpine lakes, panoramic Himalayan views, yak herder camps, and pristine mountain landscapes.',
    days: 5,
    image: '/img/plans/treks/dagala-trek/cover.jpg',
    brochurePdf: '/pdf/plans/treks/dagala-trek.pdf',
    dayPlans: [
      {
        day: 1,
        title: 'Genekha to Gur',
        desc: 'Drive from Thimphu to Genekha and begin trek through terraced farmland and conifer forests, ascending gradually to Gur campsite (3,290m).',
      },
      {
        day: 2,
        title: 'Gur to Labatama',
        desc: 'Trek along high ridgelines crossing Pagalabtsa Pass (4,250m) with views of Kanchenjunga and Bhutan’s Himalayan peaks before camping near Utsho Lake (4,300m).',
      },
      {
        day: 3,
        title: 'Exploration Day at Labatama',
        desc: 'Explore nearby alpine lakes such as Relitsho and Hentsho, with optional climb to Jomo Peak (5,050m) for panoramic Himalayan views.',
      },
      {
        day: 4,
        title: 'Labatama to Panka',
        desc: 'Cross a high saddle (4,520m) with views of Everest, Kanchenjunga, and Masang Gang before descending to Panka campsite (4,000m).',
      },
      {
        day: 5,
        title: 'Panka via Talakha to Thimphu',
        desc: 'Cross Tale La Pass (4,180m), descend through forests to Talakha Goemba and Chamgang village, and transfer back to Thimphu.',
      },
    ],
  },

  {
    type: 'trek',
    title: 'Jomolhari Trek',
    shortDesc:
      '10-day iconic Himalayan trek through the Paro and Lingzhi valleys offering dramatic mountain views, remote villages, high passes, and Jomolhari Base Camp experience.',
    days: 10,
    image: '/img/plans/treks/jomolhari-trek/cover.jpg',
    brochurePdf: '/pdf/plans/treks/jomolhari-trek.pdf',
    dayPlans: [
      {
        day: 1,
        title: 'Arrival in Bhutan – Discover Paro Valley',
        desc: 'Arrive in Paro, visit Rinpung Dzong and Ta Dzong, and prepare for the high-altitude adventure.',
      },
      {
        day: 2,
        title: 'Gunitsawa to Shana / Thangthangka',
        desc: 'Begin trek through Paro Chhu valley following gradual ascents and descents to first campsite.',
      },
      {
        day: 3,
        title: 'Shana to Jangothang (Jomolhari Base Camp)',
        desc: 'Trek through alpine meadows and yak pastures reaching Jangothang (4,040m) with stunning Mount Jomolhari views.',
      },
      {
        day: 4,
        title: 'Acclimatization at Jangothang',
        desc: 'Rest day with optional hikes offering spectacular views of Jomolhari and Jichu Drake.',
      },
      {
        day: 5,
        title: 'Jangothang to Lingzhi via Nyele La Pass',
        desc: 'Cross Nyele La Pass (4,830m) and descend toward Lingzhi Dzong.',
      },
      {
        day: 6,
        title: 'Lingzhi to Chebisa',
        desc: 'Descend through highland villages and waterfalls to Chebisa campsite.',
      },
      {
        day: 7,
        title: 'Chebisa to Lingzhi',
        desc: 'Return trek with opportunity to visit the Institute of Traditional Medicine en route.',
      },
      {
        day: 8,
        title: 'Lingzhi to Shodu via Yale La Pass',
        desc: 'Cross Yale La Pass (4,950m), one of the most challenging sections, and descend to Shodu.',
      },
      {
        day: 9,
        title: 'Shodu to Barshong',
        desc: 'Trek through rhododendron forests and narrow gorges before transferring back to Thimphu.',
      },
      {
        day: 10,
        title: 'Departure',
        desc: 'Transfer to Paro International Airport for departure.',
      },
    ],
  },

  {
    type: 'trek',
    title: 'Druk Path Trek',
    shortDesc:
      '6-day classic trek linking Paro and Thimphu through high mountain passes, pristine alpine lakes, yak pastures, and panoramic Himalayan landscapes.',
    days: 6,
    image: '/img/plans/treks/druk-path-trek/cover.jpg',
    brochurePdf: '/pdf/plans/treks/druk-path-trek.pdf',
    dayPlans: [
      {
        day: 1,
        title: 'Paro to Jele Dzong',
        desc: 'Drive to trailhead near National Museum and trek via Damchena village to Jele Dzong (3,480m).',
      },
      {
        day: 2,
        title: 'Jele Dzong to Jangchulakha',
        desc: 'Trek along ridgelines with views of Mount Jomolhari to Jangchulakha campsite (3,780m).',
      },
      {
        day: 3,
        title: 'Jangchulakha to Jimilangtsho Lake',
        desc: 'Cross high ridges and descend to Jimilangtsho Lake (3,880m) with views of Jichu Drake.',
      },
      {
        day: 4,
        title: 'Jimilangtsho via Janetso Lake to Simkota',
        desc: 'Trek through dwarf rhododendron forests and yak pastures to Simkota Tsho Lake (4,110m).',
      },
      {
        day: 5,
        title: 'Simkota to Phajoding and Thimphu',
        desc: 'Cross Phume La Pass (4,210m) and descend through forests to Sangaygang, entering Thimphu valley.',
      },
      {
        day: 6,
        title: 'Departure',
        desc: 'Transfer to Paro International Airport for onward journey.',
      },
    ],
  },
]

export const plans: TravelPlan[] = rawPlans.map((plan) => ({
  ...plan,
  galleryImages: createGalleryImagePaths(plan.image),
}))

// Optional helpers (useful for routing/pages)
export const getPlansByType = (type: PlanType) => plans.filter((p) => p.type === type)

export const getPlanSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const getPlanBySlug = (slug: string) =>
  plans.find((plan) => getPlanSlug(plan.title) === slug)

export const getPlanPath = (plan: TravelPlan) => `/tours/${getPlanSlug(plan.title)}`

export const getImageSources = (imagePath: string) => {
  const candidates = new Set<string>()
  const primaryImage = imagePath

  const match = primaryImage.match(/^(.*)\.([^.]+)$/)
  const supportedExtensions = ['jpg', 'png', 'JPG', 'PNG']

  if (primaryImage) {
    candidates.add(primaryImage)
  }

  if (match) {
    const [, imageBase] = match

    for (const extension of supportedExtensions) {
      candidates.add(`${imageBase}.${extension}`)
    }
  }

  return [...candidates]
}

export const getPlanImageSources = (plan: TravelPlan) => getImageSources(plan.image)

export const getPlanGalleryImageSources = (plan: TravelPlan) =>
  plan.galleryImages.map((imagePath) => getImageSources(imagePath))

export const getPlanImageSrc = (plan: TravelPlan) => getPlanImageSources(plan)[0] ?? ''

const getHourBucket = (date: Date) =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getHours()}`

const getSeedFromString = (value: string) => {
  let seed = 0

  for (let index = 0; index < value.length; index += 1) {
    seed = (seed * 31 + value.charCodeAt(index)) >>> 0
  }

  return seed
}

const getSeededRandom = (seed: number) => {
  let currentSeed = seed || 1

  return () => {
    currentSeed = (currentSeed * 1664525 + 1013904223) >>> 0
    return currentSeed / 4294967296
  }
}

export const getHourlyPopularPlans = (date = new Date(), count = 3) => {
  const plansPool = [...plans]
  const random = getSeededRandom(getSeedFromString(getHourBucket(date)))

  for (let currentIndex = plansPool.length - 1; currentIndex > 0; currentIndex -= 1) {
    const randomIndex = Math.floor(random() * (currentIndex + 1))
    ;[plansPool[currentIndex], plansPool[randomIndex]] = [
      plansPool[randomIndex],
      plansPool[currentIndex],
    ]
  }

  return plansPool.slice(0, Math.max(count, 0))
}
