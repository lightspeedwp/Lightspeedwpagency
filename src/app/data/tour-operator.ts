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
  duration: string; // e.g. "7 Days"
  destinations: string[]; // Taxonomy slugs
  activities: string[]; // Taxonomy slugs
  amenities: string[]; // e.g. Wifi, Pool
  reviews: TourOperatorReview[];
  meta: { key: string; value: any }[];
}

export const accommodations: TourOperatorPost[] = [
  {
    id: 5001,
    title: 'Safari Lodge',
    slug: 'safari-lodge',
    type: 'accommodation',
    description: '<p>Luxury accommodation in the heart of the savannah.</p>',
    short_description: 'Luxury lodge with game drives.',
    featured_image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80',
    gallery: [
      { id: 1, url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80', alt: 'Lodge Exterior' },
      { id: 2, url: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=800&q=80', alt: 'Room Interior' }
    ],
    location: { lat: -24.0, lng: 31.0, address: 'Kruger National Park' },
    price_from: '$500 per night',
    duration: '',
    destinations: ['south-africa', 'kruger-park'],
    activities: ['game-drive', 'bush-walk'],
    amenities: ['Pool', 'Wifi', 'Spa', 'Bar'],
    reviews: [
      { id: 101, author: 'John Doe', rating: 5, date: '2023-10-15', content: 'Amazing experience!', source: 'tripadvisor' }
    ],
    meta: []
  },
  {
    id: 5002,
    title: 'Cape Town Hotel',
    slug: 'cape-town-hotel',
    type: 'accommodation',
    description: '<p>Modern city hotel with ocean views.</p>',
    short_description: 'City living at its best.',
    featured_image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    gallery: [],
    location: { lat: -33.92, lng: 18.42, address: 'V&A Waterfront, Cape Town' },
    price_from: '$200 per night',
    duration: '',
    destinations: ['south-africa', 'cape-town'],
    activities: ['city-tour', 'wine-tasting'],
    amenities: ['Gym', 'Wifi', 'Restaurant'],
    reviews: [],
    meta: []
  }
];

export const tours: TourOperatorPost[] = [
  {
    id: 6001,
    title: 'Garden Route Adventure',
    slug: 'garden-route-adventure',
    type: 'tour',
    description: '<p>Explore the beautiful coastline of South Africa.</p>',
    short_description: '7-day guided tour from Cape Town to Port Elizabeth.',
    featured_image: 'https://images.unsplash.com/photo-1552727135-4f48a278028d?w=800&q=80',
    gallery: [
      { id: 1, url: 'https://images.unsplash.com/photo-1552727135-4f48a278028d?w=800&q=80', alt: 'Knysna Heads' }
    ],
    location: { lat: -34.0, lng: 23.0, address: 'Garden Route' },
    price_from: '$1200 per person',
    duration: '7 Days',
    destinations: ['south-africa', 'garden-route'],
    activities: ['hiking', 'kayaking', 'beach'],
    amenities: ['Transport', 'Meals', 'Guide'],
    reviews: [],
    meta: [
      { key: 'itinerary', value: [
        { day: 1, title: 'Arrival in Cape Town', content: 'Welcome dinner.' },
        { day: 2, title: 'Mossel Bay', content: 'Drive to Mossel Bay.' }
      ]}
    ]
  }
];

export const destinations: TourOperatorPost[] = [
  {
    id: 7001,
    title: 'South Africa',
    slug: 'south-africa',
    type: 'destination',
    description: '<p>A world in one country.</p>',
    short_description: 'Diverse landscapes and cultures.',
    featured_image: 'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?w=800&q=80',
    gallery: [],
    location: { lat: -30.0, lng: 25.0, address: 'South Africa' },
    price_from: '',
    duration: '',
    destinations: [],
    activities: [],
    amenities: [],
    reviews: [],
    meta: []
  }
];

export const allTourContent = [...accommodations, ...tours, ...destinations];
