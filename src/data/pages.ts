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
    cardImage: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      { url: 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'The Pool' },
      { url: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Morning Swim' },
      { url: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Open Water' },
    ],
    highlights: [
      'Well-maintained heated pool',
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
    cardImage: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      { url: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Campfire' },
      { url: 'https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Tent Setup' },
      { url: 'https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Night Skies' },
    ],
    highlights: [
      'Designated camping zones with fire pits',
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
    heroImage: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      { url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Group Activities' },
      { url: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Team Sessions' },
      { url: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Workshops' },
    ],
    highlights: [
      'Certified and experienced facilitators',
      'Fully customised programmes per group',
      'Groups of 10 to 200 participants',
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
    heroImage: 'https://images.pexels.com/photos/1578750/pexels-photo-1578750.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/1578750/pexels-photo-1578750.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      { url: 'https://images.pexels.com/photos/1578750/pexels-photo-1578750.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Forest Path' },
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
    slug: 'star-gazing',
    title: 'Star Gazing',
    category: 'activity',
    tagline: 'The Universe, Yours to Explore',
    description:
      'Away from the haze and glow of city light pollution, Sir John\'s location offers a rare window to the African night sky. On clear evenings, our knowledgeable guides will lead you on a journey through the constellations, planets, and deep-sky objects visible above. Whether you\'re an astronomy enthusiast or simply someone who has never taken the time to look up — this experience is humbling, magical, and utterly unforgettable.',
    heroImage: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      { url: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Milky Way' },
      { url: 'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Night Sky' },
      { url: 'https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Under the Stars' },
    ],
    highlights: [
      'Expert astronomical guides',
      'Telescope access for close-up viewing',
      'Best October through March season',
      'Evening sessions starting from 7:30pm',
      'Warm drinks & blankets provided',
    ],
    cta: 'Book a Star Gazing Session',
  },
];

export const FACILITIES: PageData[] = [
  {
    slug: 'camping-grounds',
    title: 'Camping Grounds',
    category: 'facility',
    tagline: 'Your Home in the Wild',
    description:
      'Spacious, well-maintained camping grounds with clearly demarcated pitches, communal fire areas, and clean ablution blocks. Our grounds are set within a serene natural environment, carefully planned to preserve the tranquillity that makes Sir John special. Whether you arrive with a family, a group of friends, or a corporate team, there\'s space and comfort enough for everyone.',
    heroImage: 'https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      { url: 'https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Campsite' },
      { url: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Campfire' },
      { url: 'https://images.pexels.com/photos/776314/pexels-photo-776314.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Grounds' },
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
    heroImage: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      { url: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Bar Area' },
      { url: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Restaurant' },
      { url: 'https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Dining' },
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
    heroImage: 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      { url: 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'The Pool' },
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
      '30+ board and card games available',
      'Suitable for all ages and group sizes',
      'Comfortable indoor lounge setting',
      'Bookable for private group use',
      'Staff on hand to explain rules',
    ],
    cta: 'Book the Games Room',
  },
  {
    slug: 'pool-table',
    title: 'Pool Table',
    category: 'facility',
    tagline: 'Line It Up',
    description:
      'Challenge a friend or strike up a game with a fellow guest over our full-size billiards table. Housed in our indoor social lounge, the pool table is the perfect centrepiece for relaxed evening entertainment. Whether you play seriously or just enjoy a casual knock-about, it\'s a guaranteed crowd-pleaser — especially when paired with a cold drink from the bar.',
    heroImage: 'https://images.pexels.com/photos/951531/pexels-photo-951531.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/951531/pexels-photo-951531.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      { url: 'https://images.pexels.com/photos/951531/pexels-photo-951531.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Billiards Table' },
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
    heroImage: 'https://images.pexels.com/photos/2116469/pexels-photo-2116469.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage: 'https://images.pexels.com/photos/2116469/pexels-photo-2116469.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      { url: 'https://images.pexels.com/photos/2116469/pexels-photo-2116469.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Table Tennis' },
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
      { url: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'The Lounge' },
      { url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=700', label: 'Game Crowd' },
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

export const ALL_PAGES: PageData[] = [...ACTIVITIES, ...FACILITIES];

export function getPageBySlug(slug: string): PageData | undefined {
  return ALL_PAGES.find(p => p.slug === slug);
}
