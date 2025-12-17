const PlacesList = [
  {
    id: 1,
    name: "Mysore Palace",
    image: "/MysorePalace.jpg",
    slug: "mysore-palace",
    category: ["Palace", "Heritage", "Architecture"],
    shortDescription: "Iconic royal palace of the Wodeyar dynasty.",
    longDescription:
      "Mysore Palace, also known as Amba Vilas Palace, is the historical residence of the Wodeyar dynasty. Built in Indo-Saracenic style, the palace is famous for its ornate interiors, Durbar Hall, stained glass ceilings, and grand illumination on Sundays and festivals using over 100,000 lights.",
    history: {
      builtYear: 1912,
      dynasty: "Wodeyar Dynasty",
      architect: "Henry Irwin",
      significance: "Seat of power of the Kingdom of Mysore"
    },
    location: {
      address: "Sayyaji Rao Road, Mysuru, Karnataka",
      latitude: 12.3051,
      longitude: 76.6551
    },
    visitingInfo: {
      timings: "10:00 AM – 5:30 PM",
      illumination: "Sunday & Public Holidays, 7:00 PM – 7:45 PM",
      entryFee: {
        indian: 70,
        foreigner: 200,
        children: 30
      },
      bestTimeToVisit: "Evening or early morning",
      recommendedDuration: "1–2 hours"
    },
    highlights: [
      "Durbar Hall",
      "Royal artifacts",
      "Illumination at night",
      "Dussehra celebrations"
    ],
    facilities: [
      "Parking",
      "Restrooms",
      "Guided tours",
      "Wheelchair access"
    ],
    images: {
      thumbnail: "/images/mysore-palace-thumb.jpg",
      gallery: [
        "/images/mysore-palace-1.jpg",
        "/images/mysore-palace-2.jpg"
      ]
    },
    rating: 4.8,
    reviewsCount: 245000,
    isPopular: true,
    isMustVisit: true
  },

  {
    id: 2,
    name: "Chamundi Hill & Chamundeshwari Temple",
    image: "/ChamundiHill.jpg",
    slug: "chamundi-hill",
    category: ["Temple", "Hill", "Spiritual"],
    shortDescription: "Sacred hill temple overlooking Mysore city.",
    longDescription:
      "Chamundi Hill is home to the Chamundeshwari Temple dedicated to Goddess Durga. Located at an elevation of about 1,000 meters, the hill offers breathtaking panoramic views of Mysore and holds immense religious and cultural importance.",
    location: {
      address: "Chamundi Hill Road, Mysuru",
      latitude: 12.2756,
      longitude: 76.6701
    },
    visitingInfo: {
      timings: "7:30 AM – 2:00 PM",
      entryFee: "Free",
      bestTimeToVisit: "Early morning or sunset",
      recommendedDuration: "1 hour"
    },
    highlights: [
      "Chamundeshwari Temple",
      "Giant Nandi Statue",
      "City viewpoint"
    ],
    rating: 4.7,
    isPopular: true,
    isMustVisit: true
  },

  {
    id: 3,
    name: "Brindavan Gardens",
    image: "/Brindavan.webp",
    slug: "brindavan-gardens",
    category: ["Garden", "Nature", "Fountain"],
    shortDescription: "Famous for musical fountain shows.",
    longDescription:
      "Brindavan Gardens are terraced gardens located near the Krishnaraja Sagar Dam. The gardens are world-famous for their musical fountain, symmetrical layout, illuminated terraces, and evening shows.",
    location: {
      address: "Krishnaraja Sagar Dam, Mysuru"
    },
    visitingInfo: {
      timings: "6:30 PM – 9:00 PM",
      entryFee: 50,
      bestTimeToVisit: "Evening",
      recommendedDuration: "2 hours"
    },
    highlights: [
      "Musical fountain",
      "Illuminated gardens",
      "Boating"
    ],
    rating: 4.7,
    isPopular: true
  },

  {
    id: 4,
    name: "Sri Chamarajendra Zoological Gardens (Mysore Zoo)",
    image: "/Zoo.jpg",
    slug: "mysore-zoo",
    category: ["Zoo", "Wildlife", "Family"],
    shortDescription: "One of the oldest and best-maintained zoos in India.",
    longDescription:
      "Established in 1892, Mysore Zoo is renowned for its spacious enclosures, diverse species, conservation programs, and clean environment, making it a favorite among families and wildlife enthusiasts.",
    visitingInfo: {
      timings: "8:30 AM – 5:30 PM",
      entryFee: {
        adults: 100,
        children: 50
      },
      recommendedDuration: "2–3 hours"
    },
    highlights: [
      "Wide variety of animals",
      "Clean and spacious enclosures",
      "Educational exhibits"
    ],
    rating: 4.5,
    isFamilyFriendly: true
  },

  {
    id: 5,
    name: "St. Philomena’s Cathedral",
    image: "/Chruch.jpg",
    slug: "st-philomena-cathedral",
    category: ["Church", "Architecture", "Religious"],
    shortDescription: "Majestic neo-gothic style cathedral.",
    longDescription:
      "St. Philomena’s Cathedral is one of the tallest churches in Asia, inspired by Cologne Cathedral in Germany. It is known for its stunning stained glass windows and serene atmosphere.",
    visitingInfo: {
      timings: "5:00 AM – 6:00 PM",
      entryFee: "Free",
      recommendedDuration: "30–45 minutes"
    },
    highlights: [
      "Neo-gothic architecture",
      "Stained glass windows",
      "Peaceful ambience"
    ],
    rating: 4.6,
    isPopular: true
  },

  {
    id: 6,
    name: "Jaganmohan Palace & Art Gallery",
    image: "/Jaganmohan.webp",
    slug: "jaganmohan-palace",
    category: ["Museum", "Art", "Heritage"],
    shortDescription: "Historic palace turned art gallery.",
    longDescription:
      "Jaganmohan Palace houses one of the finest art galleries in South India, featuring traditional Mysore paintings, sculptures, and artifacts from the royal era.",
    visitingInfo: {
      timings: "10:00 AM – 5:30 PM",
      entryFee: 20,
      recommendedDuration: "1 hour"
    },
    highlights: [
      "Traditional Mysore paintings",
      "Historic palace architecture"
    ],
    rating: 4.4
  },

  {
    id: 7,
    name: "Lalitha Mahal Palace",
    image: "/LalithaMahalPalace.jpg",
    slug: "lalitha-mahal",
    category: ["Palace", "Heritage", "Hotel"],
    shortDescription: "Elegant white palace overlooking Chamundi Hills.",
    longDescription:
      "Lalitha Mahal Palace is the second-largest palace in Mysore, built in European architectural style. It currently operates as a luxury heritage hotel.",
    visitingInfo: {
      timings: "10:00 AM – 6:00 PM",
      recommendedDuration: "45 minutes"
    },
    highlights: [
      "European-style architecture",
      "Scenic views",
      "Luxury heritage hotel"
    ],
    rating: 4.3
  },

  {
    id: 8,
    name: "Karanji Lake",
    image: "/KaranjiLake.webp",
    slug: "karanji-lake",
    category: ["Nature", "Lake", "Bird Sanctuary"],
    shortDescription: "Peaceful lake with butterfly park.",
    longDescription:
      "Karanji Lake is a serene nature destination featuring boating facilities, a large walk-through aviary, butterfly park, and scenic walking paths.",
    visitingInfo: {
      timings: "8:30 AM – 5:30 PM",
      entryFee: 30,
      recommendedDuration: "1–2 hours"
    },
    highlights: [
      "Butterfly park",
      "Boating",
      "Bird watching"
    ],
    rating: 4.4
  },

  {
    id: 9,
    name: "Devaraja Market",
    image: "/DevarajaMarket.jpg",
    slug: "devaraja-market",
    category: ["Shopping", "Culture", "Local Experience"],
    shortDescription: "Vibrant traditional market in the heart of Mysore.",
    longDescription:
      "Devaraja Market is a bustling local market famous for flowers, fruits, spices, sandalwood products, incense sticks, and everyday local life.",
    visitingInfo: {
      timings: "6:00 AM – 8:00 PM",
      entryFee: "Free",
      bestTimeToVisit: "Morning"
    },
    highlights: [
      "Local spices",
      "Flower stalls",
      "Cultural experience"
    ],
    rating: 4.4,
    isPopular: true
  },
  {
  id: 10,
  name: "Railway Museum Mysuru",
  image: "/RailwayMuseum.jpg",
  slug: "railway-museum-mysuru",
  category: ["Museum", "Heritage", "Family"],
  shortDescription: "Outdoor railway museum showcasing vintage locomotives.",
  longDescription:
    "The Railway Museum in Mysuru is a unique attraction that displays a collection of vintage steam engines, royal coaches, railway artifacts, and photographs showcasing the evolution of Indian Railways. It is especially popular among children and history lovers.",
  history: {
    establishedYear: 1979,
    managedBy: "Indian Railways",
    significance: "Preserves heritage of Indian rail transport"
  },
  location: {
    address: "KRS Road, Mysuru",
    latitude: 12.3242,
    longitude: 76.6413
  },
  visitingInfo: {
    timings: "10:00 AM – 5:30 PM (Closed Mondays)",
    entryFee: {
      adults: 50,
      children: 25
    },
    bestTimeToVisit: "Morning",
    recommendedDuration: "1 hour"
  },
  highlights: [
    "Vintage steam engines",
    "Royal railway coaches",
    "Mini toy train"
  ],
  facilities: [
    "Parking",
    "Restrooms",
    "Children play area"
  ],
  rating: 4.4,
  isFamilyFriendly: true
},

{
  id: 11,
  name: "Sand Sculpture Museum",
  image: "/SandSculpture.jpg",
  slug: "sand-sculpture-museum",
  category: ["Museum", "Art", "Culture"],
  shortDescription: "India’s first sand sculpture museum.",
  longDescription:
    "The Sand Sculpture Museum features over 150 sand sculptures created by artist M.N. Gowri. The exhibits cover themes such as mythology, wildlife, historical figures, and social messages, all crafted using sand and water.",
  history: {
    establishedYear: 2014,
    founder: "M.N. Gowri",
    significance: "First sand sculpture museum in India"
  },
  location: {
    address: "Chamundi Hill Road, Mysuru"
  },
  visitingInfo: {
    timings: "9:00 AM – 7:00 PM",
    entryFee: 40,
    recommendedDuration: "45 minutes"
  },
  highlights: [
    "150+ sand sculptures",
    "Mythological themes",
    "Eco-friendly art"
  ],
  rating: 4.3
},

{
  id: 12,
  name: "Regional Museum of Natural History",
  image: "/RegionalMuseum.jpg",
  slug: "natural-history-museum-mysuru",
  category: ["Museum", "Education", "Nature"],
  shortDescription: "Museum focused on South Indian biodiversity.",
  longDescription:
    "The Regional Museum of Natural History in Mysuru showcases the rich biodiversity of South India, including flora, fauna, ecosystems, and environmental conservation through exhibits, models, and interactive displays.",
  history: {
    establishedYear: 1995,
    managedBy: "Ministry of Environment, Forest and Climate Change",
    significance: "Environmental awareness and education"
  },
  location: {
    address: "Siddhartha Nagar, Mysuru"
  },
  visitingInfo: {
    timings: "10:00 AM – 5:30 PM (Closed Mondays)",
    entryFee: "Free",
    recommendedDuration: "1–1.5 hours"
  },
  highlights: [
    "Wildlife exhibits",
    "Interactive learning",
    "Educational displays"
  ],
  rating: 4.2,
  isFamilyFriendly: true
},

{
  id: 13,
  name: "Folklore Museum",
  image: "/FolkloreMuseum.jpg",
  slug: "folklore-museum-mysuru",
  category: ["Museum", "Culture", "History"],
  shortDescription: "Largest folklore museum in India.",
  longDescription:
    "The Folklore Museum houses an extensive collection of folk art, costumes, musical instruments, masks, and traditional items from across Karnataka and India. The building itself reflects traditional architectural styles.",
  history: {
    establishedYear: 1968,
    founder: "Dr. H.L. Nage Gowda",
    significance: "Preservation of Indian folk culture"
  },
  location: {
    address: "Manasagangothri, Mysuru"
  },
  visitingInfo: {
    timings: "10:00 AM – 5:30 PM",
    entryFee: 30,
    recommendedDuration: "1–1.5 hours"
  },
  highlights: [
    "Folk costumes",
    "Traditional artifacts",
    "Cultural exhibits"
  ],
  rating: 4.5
},

{
  id: 14,
  name: "Ranganathittu Bird Sanctuary",
  image: "/RanganathittuBird.webp",
  slug: "ranganathittu-bird-sanctuary",
  category: ["Wildlife", "Nature", "Bird Sanctuary"],
  shortDescription: "Famous bird sanctuary near Mysuru.",
  longDescription:
    "Ranganathittu Bird Sanctuary is a protected area along the Kaveri River and is home to numerous migratory birds like painted storks, pelicans, herons, and spoonbills. Boat safaris allow visitors to observe birds up close in their natural habitat.",
  history: {
    declaredSanctuaryYear: 1940,
    significance: "Major migratory bird habitat in South India"
  },
  location: {
    address: "Near Srirangapatna, Mysuru District"
  },
  visitingInfo: {
    timings: "9:00 AM – 6:00 PM",
    entryFee: {
      adults: 75,
      children: 25
    },
    bestTimeToVisit: "November to March",
    recommendedDuration: "2 hours"
  },
  highlights: [
    "Boat safari",
    "Migratory birds",
    "River ecosystem"
  ],
  facilities: [
    "Parking",
    "Guides",
    "Restrooms"
  ],
  rating: 4.6,
  isMustVisit: true
}
];

export default PlacesList;
