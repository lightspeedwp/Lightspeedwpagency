/**
 * Tour Operator Data
 * 
 * Mock data for Tour Operator Plugin content types.
 * Matches standard Tour Operator fields and taxonomies.
 */

export interface TourOperatorLocation {
  lat: number;
  lng: number;
  address: string;
}

export interface TourOperatorGalleryImage {
  id: number;
  url: string;
  alt: string;
  caption?: string;
}

export interface TourOperatorReview {
  id: number;
  author: string;
  rating: number;
  date: string;
  content: string;
  source: 'direct' | 'tripadvisor' | 'google';
}

export interface TourItineraryDay {
  day: number;
  title: string;
  content: string;
  accommodation?: string;
  meals?: string[];
}

export interface TourOperatorPost {
  id: number;
  title: string;
  slug: string;
  type: 'accommodation' | 'tour' | 'destination' | 'activity';
  description: string;
  short_description: string;
  featured_image: string;
  gallery: TourOperatorGalleryImage[];
  location: TourOperatorLocation;
  price_from: string;
  duration?: string; // e.g. "7 Days"
  destinations?: string[]; // Taxonomy slugs
  activities?: string[]; // Taxonomy slugs
  amenities?: string[]; // e.g. Wifi, Pool
  reviews?: TourOperatorReview[];
  itinerary?: TourItineraryDay[]; // Explicitly typed itinerary for tours
  meta?: { key: string; value: string | number | boolean }[];
}

export const accommodations: TourOperatorPost[] = [
  {
    id: 5001,
    title: 'Safari Lodge',
    slug: 'safari-lodge',
    type: 'accommodation',
    description: '<p>Experience the ultimate luxury in the heart of the African savannah. Our lodge offers 5-star amenities, private plunge pools, and world-class cuisine, all while being surrounded by the Big Five.</p>',
    short_description: 'Luxury lodge with game drives.',
    featured_image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80',
    gallery: [
      { id: 1, url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80', alt: 'Lodge Exterior' },
      { id: 2, url: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=800&q=80', alt: 'Room Interior' },
      { id: 3, url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80', alt: 'Safari Drive' }
    ],
    location: { lat: -24.0, lng: 31.0, address: 'Kruger National Park' },
    price_from: '$500 per night',
    destinations: ['south-africa', 'kruger-park'],
    activities: ['game-drive', 'bush-walk'],
    amenities: ['Pool', 'Wifi', 'Spa', 'Bar', 'Air Conditioning'],
    reviews: [
      { id: 101, author: 'John Doe', rating: 5, date: '2023-10-15', content: 'Amazing experience! The staff went above and beyond.', source: 'tripadvisor' },
      { id: 102, author: 'Jane Smith', rating: 4, date: '2023-09-20', content: 'Great location, but the wifi was spotty.', source: 'google' }
    ]
  },
  {
    id: 5002,
    title: 'Cape Town Hotel',
    slug: 'cape-town-hotel',
    type: 'accommodation',
    description: '<p>Modern city hotel located at the V&A Waterfront with stunning ocean views. Walking distance to shops, restaurants, and the aquarium.</p>',
    short_description: 'City living at its best.',
    featured_image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    gallery: [
      { id: 1, url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', alt: 'Hotel Pool' },
      { id: 2, url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80', alt: 'Room View' }
    ],
    location: { lat: -33.92, lng: 18.42, address: 'V&A Waterfront, Cape Town' },
    price_from: '$200 per night',
    destinations: ['south-africa', 'cape-town'],
    activities: ['city-tour', 'wine-tasting'],
    amenities: ['Gym', 'Wifi', 'Restaurant', 'Concierge'],
    reviews: []
  }
];

export const tours: TourOperatorPost[] = [
  {
    id: 6001,
    title: 'Garden Route Adventure',
    slug: 'garden-route-adventure',
    type: 'tour',
    description: '<p>Explore the beautiful coastline of South Africa on this 7-day guided tour. Visit Mossel Bay, Knysna, Tsitsikamma, and finish with a safari in Addo Elephant Park.</p>',
    short_description: '7-day guided tour from Cape Town to Port Elizabeth.',
    featured_image: 'https://images.unsplash.com/photo-1552727135-4f48a278028d?w=800&q=80',
    gallery: [
      { id: 1, url: 'https://images.unsplash.com/photo-1552727135-4f48a278028d?w=800&q=80', alt: 'Knysna Heads' },
      { id: 2, url: 'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?w=800&q=80', alt: 'Garden Route Coast' },
      { id: 3, url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80', alt: 'Addo Elephant Park' }
    ],
    location: { lat: -34.0, lng: 23.0, address: 'Garden Route' },
    price_from: '$1200 per person',
    duration: '7 Days',
    destinations: ['south-africa', 'garden-route'],
    activities: ['hiking', 'kayaking', 'beach', 'safari'],
    amenities: ['Transport', 'Meals', 'Guide', 'Accommodation'],
    itinerary: [
      { 
        day: 1, 
        title: 'Arrival in Cape Town', 
        content: 'Arrive at Cape Town International Airport. Transfer to your hotel. Welcome dinner at the V&A Waterfront.',
        accommodation: 'Cape Town Hotel',
        meals: ['Dinner']
      },
      { 
        day: 2, 
        title: 'Cape Town to Mossel Bay', 
        content: 'Depart Cape Town and travel along the N2 to Mossel Bay. Visit the Diaz Museum and relax on Santos Beach.',
        accommodation: 'Mossel Bay Guest House',
        meals: ['Breakfast', 'Dinner']
      },
      { 
        day: 3, 
        title: 'Mossel Bay to Knysna', 
        content: 'Travel to Knysna. Stop in Wilderness for a canoe trip. Sunset cruise on the Knysna Lagoon.',
        accommodation: 'Knysna Log Cabins',
        meals: ['Breakfast', 'Lunch']
      },
      { 
        day: 4, 
        title: 'Knysna & Plettenberg Bay', 
        content: 'Visit the Knysna Heads. Hike in Robberg Nature Reserve near Plettenberg Bay.',
        accommodation: 'Knysna Log Cabins',
        meals: ['Breakfast']
      },
      { 
        day: 5, 
        title: 'Tsitsikamma National Park', 
        content: 'Explore the Storms River Mouth. Walk across the suspension bridge. Optional bungee jump at Bloukrans Bridge.',
        accommodation: 'Tsitsikamma Village Inn',
        meals: ['Breakfast', 'Dinner']
      },
      { 
        day: 6, 
        title: 'Addo Elephant National Park', 
        content: 'Full day safari game drive in Addo Elephant Park. Spot elephants, lions, and buffalo.',
        accommodation: 'Addo Safari Lodge',
        meals: ['Breakfast', 'Lunch', 'Dinner']
      },
      { 
        day: 7, 
        title: 'Departure', 
        content: 'Transfer to Port Elizabeth Airport for your flight home.',
        meals: ['Breakfast']
      }
    ],
    reviews: [
      { id: 201, author: 'Mike Brown', rating: 5, date: '2023-11-05', content: 'Incredible journey! The guide was knowledgeable and the scenery was breathtaking.', source: 'tripadvisor' }
    ]
  },
  {
    id: 6002,
    title: 'Cape Winelands Tour',
    slug: 'cape-winelands-tour',
    type: 'tour',
    description: '<p>A full day tour of the famous Cape Winelands. Visit Stellenbosch, Franschhoek, and Paarl.</p>',
    short_description: 'Full day wine tasting tour.',
    featured_image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80',
    gallery: [
      { id: 1, url: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80', alt: 'Vineyard' }
    ],
    location: { lat: -33.93, lng: 18.86, address: 'Stellenbosch' },
    price_from: '$100 per person',
    duration: '1 Day',
    destinations: ['south-africa', 'cape-winelands'],
    activities: ['wine-tasting', 'cultural-tour'],
    amenities: ['Transport', 'Lunch', 'Guide'],
    itinerary: [
      {
        day: 1,
        title: 'Winelands Day Trip',
        content: 'Pickup from hotel. Visit 3 wine estates. Lunch in Franschhoek. Return to Cape Town.',
        meals: ['Lunch']
      }
    ]
  }
];

export const destinations: TourOperatorPost[] = [
  {
    id: 7001,
    title: 'South Africa',
    slug: 'south-africa',
    type: 'destination',
    description: '<p>A world in one country. South Africa offers diverse landscapes, rich culture, and incredible wildlife.</p>',
    short_description: 'Diverse landscapes and cultures.',
    featured_image: 'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?w=800&q=80',
    gallery: [],
    location: { lat: -30.0, lng: 25.0, address: 'South Africa' },
    price_from: '',
    destinations: [],
    activities: [],
    amenities: []
  },
  {
    id: 7002,
    title: 'Kruger National Park',
    slug: 'kruger-park',
    type: 'destination',
    description: '<p>One of Africa\'s largest game reserves. Home to the Big Five and hundreds of other mammals and birds.</p>',
    short_description: 'Premier safari destination.',
    featured_image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
    gallery: [],
    location: { lat: -24.0, lng: 31.5, address: 'Kruger National Park' },
    price_from: '',
    destinations: ['south-africa'],
    activities: ['safari'],
    amenities: []
  }
];

export const allTourContent = [...accommodations, ...tours, ...destinations];