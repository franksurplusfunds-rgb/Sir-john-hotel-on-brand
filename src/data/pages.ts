  export interface PageData {
  slug: string;
  title: string;
  category: 'activity' | 'facility';
  tagline: string;
  description: string;
  heroImage: string;
  cardImage: string;
  gallery: { url: string; label: string }[];
  highlights: string[];
  cta: string;
}

export const ACTIVITIES: PageData[] = [
  {
    slug: 'swimming',
    title: 'Swimming',
    category: 'activity',
    tagline: 'Dive Into Nature\'s Embrace',
    description:
      'A refreshing swim in our clean, well-maintained pool set within a lush natural environment. Whether you\'re looking to cool off on a warm afternoon, squeeze in an early morning lap session, or simply float and decompress — our swimming experience is one of the most beloved at Sir John. The tranquil surroundings transform every dip into something more than exercise; it becomes a moment of genuine restoration.',
    heroImage: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/33165854/pexels-photo-33165854.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      { url: 'https://images.pexels.com/photos/38301049/pexels-photo-38301049.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'The Pool' },
      { url: 'https://images.pexels.com/photos/33165854/pexels-photo-33165854.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Morning Swim' },
      { url: 'https://images.pexels.com/photos/38301049/pexels-photo-38301049.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Open Water' },
    ],
    highlights: [
      'Well maintained pool with natural surroundings',
      'Qualified lifeguards on duty at all times',
      'Swimming lessons available on request',
      'Open from early morning to evening',
      'Towels & changing facilities provided',
    ],
    cta: 'Book a Swimming Session',
  },
  {
    slug: 'camping',
    title: 'Camping',
    category: 'activity',
    tagline: 'Sleep Under the Open Sky',
    description:
      'Disconnect from the noise of modern life and reconnect with what truly matters. Our camping experience places you right in the heart of nature — wake up to birdsong, breathe crisp morning air, and fall asleep beneath a canopy of stars. Sir John\'s camping sites are carefully chosen for their natural beauty and serenity, offering a genuine back-to-nature escape without sacrificing safety or comfort.',
    heroImage: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/28207258/pexels-photo-28207258.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      { url: 'https://images.pexels.com/photos/10066114/pexels-photo-10066114.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Campfire' },
      { url: 'https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Tent Setup' },
      { url: 'https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Night Skies' },
    ],
    highlights: [
      'Designated camping zones with bonfires on request',
      'Tent hire available on-site',
      'Clean ablution and shower facilities nearby',
      'Secure perimeter with 24-hr security',
      'Bonfire evenings included on weekends',
    ],
    cta: 'Reserve a Camping Spot',
  },
  {
    slug: 'team-building',
    title: 'Facilitated Team Building',
    category: 'activity',
    tagline: 'Forge Bonds. Build Champions.',
    description:
      'Our professionally facilitated team building programmes are designed to strengthen communication, trust, and collaboration among your group. Set in our expansive natural outdoor environment, these carefully crafted activities create shared experiences that carry real meaning — both in the moment and long after your team returns to the office. From high-energy outdoor challenges to reflective problem-solving exercises, every programme is tailored to your objectives.',
    heroImage: 'https://images.pexels.com/photos/7551757/pexels-photo-7551757.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/9487229/pexels-photo-9487229.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      { url: 'https://images.pexels.com/photos/7551757/pexels-photo-7551757.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Group Activities' },
      { url: 'https://images.pexels.com/photos/9487241/pexels-photo-9487241.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Team sessions' },
      { url: 'https://images.pexels.com/photos/8837580/pexels-photo-8837580.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Workshops' },
    ],
    highlights: [
      'Certified and experienced facilitators',
      'Fully customised programmes per group',
      'Groups of 10 to 100 participants',
      ///Build out a page with package information: description ,pricing, 
      'Half-day, full-day & residential packages',
      'Includes meals, breaks & debrief sessions',
    ],
    cta: 'Plan a Team Building Event',
  },
  {
    slug: 'nature-trails',
    title: 'Nature Trails',
    category: 'activity',
    tagline: 'Every Step, a Discovery',
    description:
      'Lace up and explore the beautiful trails that wind through Sir John\'s grounds and the surrounding natural landscape. From gentle walks perfectly suited to families with young children, to more challenging routes for avid hikers seeking elevation and effort — our nature trails offer something for every pace. Guided walks include fascinating insights into local flora, fauna, and ecology.',
    heroImage: 'https://images.pexels.com/photos/8905800/pexels-photo-8905800.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/8905800/pexels-photo-8905800.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      { url: 'https://images.pexels.com/photos/8905800/pexels-photo-8905800.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Forest Path' },
      { url: 'https://images.pexels.com/photos/704921/pexels-photo-704921.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Scenic View' },
      { url: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Wildlife Spotting' },
    ],
    highlights: [
      'Guided and self-guided trail options',
      'Multiple lengths: 1km, 3km and 6km routes',
      'Bird watching and wildlife spotting points',
      'Interpretive signage along all trails',
      'Morning departures recommended for wildlife',
    ],
    cta: 'Book a Nature Trail',
  },
  {
 slug: 'playground-for-kids',
    title: 'Playground for Kids',
    category: 'activity',
    tagline: 'Fun, Safe, and Full of Adventure',
    description:
      'Our playground for kids is a cheerful space where little ones can run, climb, and play in a safe and welcoming environment. Designed with family fun in mind, it offers colorful equipment, soft play zones, and plenty of room for imagination and laughter. It is the perfect place for children to burn energy while parents relax and enjoy the surroundings.',
    heroImage: 'https://images.pexels.com/photos/38484096/pexels-photo-38484096.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/38484096/pexels-photo-38484096.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      { url: 'https://images.pexels.com/photos/38484343/pexels-photo-38484343.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Playground Fun' },
      { url: 'https://images.pexels.com/photos/9265329/pexels-photo-9265329.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Perfect for Kids' },
      { url: 'https://images.pexels.com/photos/6689070/pexels-photo-6689070.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Board Games' },
    ],
    highlights: [
      'Safe and colorful play equipment',
      'Shaded seating for parents',
      'Open-air fun for all ages',
      'Perfect for family afternoons',
    ],
    cta: 'Enquire',
  },
];

export const FACILITIES: PageData[] = [
  {
    slug: 'accommodation',
    title: 'Accommodation',
    category: 'facility',
    tagline: 'Rest in Comfort After a Day Outdoors',
    description:
      'Choose from welcoming a suite of luxurious private cabins, unwind in style after your Sir John adventure in and around Sir John. Every option offers a peaceful retreat with warm bedding, thoughtfully curated interiors, and easy access to the site\'s amenities. Our accommodation is crafted to make your stay feel both restorative and memorable.',
    heroImage: 'https://images.pexels.com/photos/38308102/pexels-photo-38308102.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/38308394/pexels-photo-38308394.png?auto=compress&cs=tinysrgb&w=700',
    gallery: [
      { url: 'https://images.pexels.com/photos/38313561/pexels-photo-38313561.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Cabin Lounge ' },
      { url: 'https://images.pexels.com/photos/3634742/pexels-photo-3634742.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Bathroom' },
      { url: 'https://images.pexels.com/photos/38308102/pexels-photo-38308102.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Bedroom Interior' },
    ],
    highlights: [
      'Private rooms, cabins and luxury tents',
      'Fresh linen and comfortable bedding',
      'Easy access to shared amenities',
      'Peaceful natural setting with privacy',
      'Friendly staff available 24/7 for guest support',
    ],
    cta: 'View Accommodation Options',
  },
  {
    slug: 'camping-grounds',
    title: 'Camping Grounds',
    category: 'facility',
    tagline: 'Your Home in the Wild',
    description:
      'Spacious, well-maintained camping grounds with clearly demarcated pitches, communal fire areas, and clean ablution blocks. Our grounds are set within a serene natural environment, carefully planned to preserve the tranquillity that makes Sir John special. Whether you arrive with a family, a group of friends, or a corporate team, there\'s space and comfort enough for everyone.',
    heroImage: 'https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/38313707/pexels-photo-38313707.jpeg?auto=compress&cs=tinysrgb&w=700',
    gallery: [
      { url: 'https://images.pexels.com/photos/18386294/pexels-photo-18386294.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Campsite' },
      { url: 'https://images.pexels.com/photos/10066114/pexels-photo-10066114.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Campfire' },
      { url: 'https://images.pexels.com/photos/28207258/pexels-photo-28207258.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Grounds' },
    ],
    highlights: [
      'Multiple pitch sizes for tents and groups',
      'Communal campfire & braai area',
      'Secure overnight parking',
      'Clean bathroom and shower blocks',
      'Tent hire available on-site',
    ],
    cta: 'Book a Camping Pitch',
  },
  {
    slug: 'bar-lounge',
    title: 'Bar Lounge & Restaurant',
    category: 'facility',
    tagline: 'Savour Every Moment',
    description:
      'Our open-air bar lounge and restaurant is the social heart of Sir John. Enjoy freshly prepared meals, chilled drinks, and great company in a relaxed setting that blurs the line between indoors and outdoors. From hearty morning breakfasts that set you up for a day of adventure, to sundowner cocktails that bookend a perfect evening — the restaurant at Sir John is a destination in itself.',
    heroImage: 'https://images.pexels.com/photos/37923406/pexels-photo-37923406.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/37923420/pexels-photo-37923420.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      { url: 'https://images.pexels.com/photos/6530930/pexels-photo-6530930.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Bar Area' },
      { url: 'https://images.pexels.com/photos/37923406/pexels-photo-37923406.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Restaurant' },
      { url: 'https://images.pexels.com/photos/17541188/pexels-photo-17541188.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Dining' },
    ],
    highlights: [
      'Full breakfast, lunch and dinner menu',
      'Cocktail, mocktail and local beer selection',
      'Outdoor terrace and indoor seating',
      'Local ingredients, freshly prepared daily',
      'Private dining available for groups',
    ],
    cta: 'Reserve a Table',
  },
  {
    slug: 'swimming-pool',
    title: 'Swimming Pool',
    category: 'facility',
    tagline: 'Dive In, Switch Off',
    description:
      'Our well-maintained swimming pool is available to all guests throughout the day. Whether you\'re swimming laps, floating lazily, or splashing with the kids — the pool is your cooling sanctuary at the heart of the retreat. Set within a beautifully landscaped area, the poolside experience at Sir John is as much about the atmosphere as it is about the water.',
    heroImage: 'https://images.pexels.com/photos/38301049/pexels-photo-38301049.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/38301911/pexels-photo-38301911.png?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      { url: 'https://images.pexels.com/photos/32095954/pexels-photo-32095954.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'The Pool' },
      { url: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Poolside' },
      { url: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Swim Sessions' },
    ],
    highlights: [
      'Heated pool with regular water quality checks',
      'Poolside loungers and shade canopies',
      'Dedicated shallow section for children',
      'Towels provided for all guests',
      'Qualified lifeguard on duty',
    ],
    cta: 'Book Pool Access',
  },
  {
    slug: 'board-games',
    title: 'Board Games',
    category: 'facility',
    tagline: 'Unplug & Play',
    description:
      'Sometimes the best entertainment is the most timeless. Our extensive board game collection covers everything from classic strategy games to lively party favourites that get everyone around the table laughing. Perfect for rainy afternoons, post-dinner wind-downs, or simply choosing to step away from screens and be present with the people you\'re with.',
    heroImage: 'https://images.pexels.com/photos/776654/pexels-photo-776654.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/776654/pexels-photo-776654.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      { url: 'https://images.pexels.com/photos/776654/pexels-photo-776654.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Games Room' },
      { url: 'https://images.pexels.com/photos/1329645/pexels-photo-1329645.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Board Games' },
      { url: 'https://images.pexels.com/photos/4691551/pexels-photo-4691551.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Game Night' },
    ],
    highlights: [
      'Board and card games available',
      'Suitable for all ages and group sizes',
      'Comfortable indoor lounge setting',
      'Bookable for private group use',
      'Staff on hand to explain rules',
    ],
    cta: 'Book the Games Room',
  },
  //data objects for the facilites page 
  {
    slug: 'pool-table',
    title: 'Pool Table',
    category: 'facility',
    tagline: 'Line It Up',
    description:
      'Challenge a friend or strike up a game with a fellow guest over our full-size billiards table. Housed in our indoor social lounge, the pool table is the perfect centrepiece for relaxed evening entertainment. Whether you play seriously or just enjoy a casual knock-about, it\'s a guaranteed crowd-pleaser — especially when paired with a cold drink from the bar.',
    heroImage: 'https://images.pexels.com/photos/32095954/pexels-photo-32095954.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/32095954/pexels-photo-32095954.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      { url: 'https://images.pexels.com/photos/32095954/pexels-photo-32095954.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Billiards Table' },
      { url: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Lounge Area' },
      { url: 'https://images.pexels.com/photos/776654/pexels-photo-776654.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Social Space' },
    ],
    highlights: [
      'Full-size professional billiards table',
      'Cues, balls, and chalk provided',
      'Indoor lounge with bar access',
      'Tournaments organised on request',
      'Available hourly or as part of full-day access',
    ],
    cta: 'Book the Pool Table',
  },
  {
    slug: 'table-tennis',
    title: 'Table Tennis',
    category: 'facility',
    tagline: 'Fast. Fun. Addictive.',
    description:
      'Fast-paced and endlessly entertaining, our table tennis facilities are open to all guests. Whether you\'re a seasoned player with a killer serve or a complete beginner who can\'t stop laughing at every missed shot — a game of table tennis is one of the best ways to shake off the afternoon, get energised, and get everyone involved regardless of age or fitness level.',
    heroImage: 'https://images.pexels.com/photos/18511482/pexels-photo-18511482.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/18511482/pexels-photo-18511482.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      { url: 'https://images.pexels.com/photos/976873/pexels-photo-976873.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Table Tennis' },
      { url: 'https://images.pexels.com/photos/4463977/pexels-photo-4463977.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Game In Play' },
      { url: 'https://images.pexels.com/photos/776654/pexels-photo-776654.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Recreation Area' },
    ],
    highlights: [
      'Professional-grade tables',
      'Bats and balls provided',
      'Tournament-ready setup on request',
      'All skill levels warmly welcome',
      'Available throughout the day',
    ],
    cta: 'Book a Table Tennis Session',
  },
  {
    slug: 'football-lounge',
    title: 'Football Lounge',
    category: 'facility',
    tagline: 'Never Miss a Match',
    description:
      'Follow your team from our dedicated football lounge, equipped with a large projector screen and surround sound system that ensures you won\'t miss a single moment of the action. Whether it\'s a Premier League Saturday, an AFCON showdown, or the World Cup final — Sir John has the best seat in the retreat for the beautiful game. Bar service runs throughout every match.',
    heroImage: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      { url: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Match Day' },
      { url: 'https://images.pexels.com/photos/6210505/pexels-photo-6210505.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'The Lounge' },
      { url: 'https://images.pexels.com/photos/14856235/pexels-photo-14856235.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Game Crowd' },
    ],
    highlights: [
      'Large format projector screen',
      'Full surround sound audio system',
      'In-lounge bar and snack service',
      'All major leagues and tournaments screened',
      'Private screening bookings available',
    ],
    cta: 'Book Match Day Viewing',
  },
];

export interface AccommodationRoomData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  mainImage: string;
  boardOptions: {
    name: string;
    price: string;
    description: string;
  }[];
  amenities: string[];
  features: string[];
  galleryImages: { url: string; label: string }[];
}

export const ACCOMMODATION_ROOMS: AccommodationRoomData[] = [
  {
    slug: 'standard-room',
    title: 'Standard Room',
    tagline: 'Comfort Meets Value',
    description:
      'Our Standard Rooms offer a welcoming retreat with all the essentials you need for a comfortable stay. Thoughtfully designed with comfort in mind, these rooms provide the perfect balance of functionality and relaxation. Each room features a queen bed, private ensuite bathroom, and access to all hotel amenities. Wake up refreshed and ready to enjoy everything Sir John has to offer.',
    heroImage: '/assets/images/standard-room.jpg',
    mainImage: '/assets/images/standard-room.jpg',
    boardOptions: [
      {
        name: 'Fullboard',
        price: 'From KES 8,500 per night',
        description: 'Includes breakfast, lunch, and dinner. Experience the full culinary journey with three delicious meals daily, featuring local and international cuisine.'
      },
      {
        name: 'Half Board',
        price: 'From KES 6,500 per night',
        description: 'Includes breakfast and dinner. Start your day right with our hearty breakfast, and unwind with a satisfying dinner in the evening.'
      }
    ],
    amenities: [
      'Free Wi-Fi',
      'Free Bottled Water',
      'Daily Housekeeping',
      'Soft Towels'
    ],
    features: [
      'Queen bed with premium bedding',
      'Private ensuite bathroom with shower',
      'Air conditioning and heating',
      'Work desk and comfortable seating',
      'Flat-screen TV',
      'Direct dial telephone',
      'Safe for valuables',
      'Room service available'
    ],
    galleryImages: [
      { url: '/assets/images/standard-room.jpg', label: 'Bedroom View' },
      { url: '/assets/images/room-bathroom.jpg', label: 'Modern Bathroom' },
      { url: '/assets/images/standard-room.jpg', label: 'Room Detail' }
    ]
  },
  {
    slug: 'executive-room',
    title: 'Executive Room',
    tagline: 'Luxury & Sophistication',
    description:
      'Elevate your stay with our Executive Rooms, designed for those who appreciate the finer things. These premium accommodations feature contemporary design, superior amenities, and stunning attention to detail. Enjoy the perfect blend of style, comfort, and convenience in a spacious setting. Each Executive Room offers exclusive perks and personalized service to ensure your visit is truly memorable.',
    heroImage: '/assets/images/executive-room.jpg',
    mainImage: '/assets/images/executive-room.jpg',
    boardOptions: [
      {
        name: 'Fullboard',
        price: 'From KES 12,500 per night',
        description: 'Includes breakfast, lunch, and dinner. Premium meals served in our restaurant with exclusive access to the executive lounge for beverages and snacks throughout the day.'
      },
      {
        name: 'Half Board',
        price: 'From KES 10,000 per night',
        description: 'Includes breakfast and dinner. Enjoy à la carte breakfast selections and multi-course dinners prepared by our culinary team, plus executive lounge access.'
      }
    ],
    amenities: [
      'Free Wi-Fi',
      'Free Bottled Water',
      'Daily Housekeeping',
      'Soft Towels'
    ],
    features: [
      'King bed with premium Egyptian cotton sheets',
      'Spacious ensuite bathroom with rainfall shower and bathrobe',
      'Separate living area with lounge seating',
      'Climate control and smart thermostat',
      'Large flat-screen smart TV',
      'Executive work desk with ergonomic chair',
      'Premium minibar stocked daily',
      'Exclusive executive lounge access',
      'Turndown service',
      'Priority restaurant and room service',
      'Electronic safe with multiple compartments',
      'Luxury toiletries by premium brands'
    ],
    galleryImages: [
      { url: '/assets/images/executive-room.jpg', label: 'Luxury Bedroom' },
      { url: '/assets/images/room-bathroom.jpg', label: 'Spa-like Bathroom' },
      { url: '/assets/images/executive-room.jpg', label: 'Living Area' }
    ]
  }
];

export const ALL_PAGES: PageData[] = [...ACTIVITIES, ...FACILITIES];

export function getPageBySlug(slug: string): PageData | undefined {
  return ALL_PAGES.find(p => p.slug === slug);
}

export function getAccommodationRoomBySlug(slug: string): AccommodationRoomData | undefined {
  return ACCOMMODATION_ROOMS.find(r => r.slug === slug);
}

export interface EventData {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  gallery: { url: string; label: string }[];
  ticketCategories: {
    name: string;
    price: number;
    currency: string;
    description: string;
  }[];
  highlights: string[];
  capacity: number;
}

export const EVENTS: EventData[] = [
  {
    id: 'evt-001',
    slug: 'pool-party-outdoor-movie',
    title: 'Pool Party with Outdoor Movie',
    description:
      'Join us for an unforgettable evening of fun, relaxation, and entertainment! Dive into our refreshing pool, enjoy delicious refreshments, and wind down with a spectacular outdoor movie screening under the stars. This is the perfect event to unwind with friends, family, or colleagues while enjoying the beautiful Sir John atmosphere.',
    date: '2024-08-15',
    time: '18:00 - 23:00',
    location: 'Sir John Hotel - Main Pool Area',
    image: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=1920',
    gallery: [
      { url: 'https://images.pexels.com/photos/33832435/pexels-photo-33832435.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Pool View' },
      { url: 'https://images.pexels.com/photos/33165854/pexels-photo-33165854.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Evening Setup' },
      { url: 'https://images.pexels.com/photos/38301049/pexels-photo-38301049.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Movie Night' }
    ],
    ticketCategories: [
      {
        name: 'Early Bird',
        price: 500,
        currency: 'KES',
        description: 'Limited early bird offer - Save 50% off regular price'
      },
      {
        name: 'Common',
        price: 1000,
        currency: 'KES',
        description: 'Regular admission to the full event'
      },
      {
        name: 'Group',
        price: 2500,
        currency: 'KES',
        description: 'Discounted price for groups of 5 or more (per person)'
      }
    ],
    highlights: [
      'Full access to the swimming pool',
      'Complimentary refreshments and snacks',
      'Outdoor movie screening on large screen',
      'Comfortable seating and lounging areas',
      'DJ entertainment throughout the evening',
      'Family-friendly and pet-friendly atmosphere'
    ],
    capacity: 200
  }
];

export function getEventBySlug(slug: string): EventData | undefined {
  return EVENTS.find(e => e.slug === slug);
}

export function getEventById(id: string): EventData | undefined {
  return EVENTS.find(e => e.id === id);
}
