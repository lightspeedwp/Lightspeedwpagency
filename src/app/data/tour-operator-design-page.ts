/**
 * Tour Operator Website & Tour Design Solution Page Data
 *
 * A solution that bundles tour content design, itinerary UX, booking integration,
 * destination management, and travel-specific WordPress development.
 *
 * WordPress Mapping: Custom page template — page-solution-tour-design.html
 *
 * @see /src/app/components/templates/TourOperatorDesignTemplate.tsx
 */

import {
  MapTrifold, Compass, Camera, Calendar, Globe, Users,
  MagnifyingGlass, PenNib, Code, Rocket, CheckCircle, CreditCard,
  Airplane, Mountains, Sun, Star, FileText, GearSix
} from '@phosphor-icons/react';

/* ── Hero ── */
export const tourDesignHero = {
  badge: { text: 'TOUR DESIGN', icon: Compass },
  title: 'Tour Operator Website & Tour Design',
  highlight: 'Tour Design',
  tagline:
    'Showcase your tours with stunning itineraries, interactive maps, and a booking experience that turns browsers into travelers.',
  description:
    'We specialise in WordPress websites for tour operators — from multi-day safari itineraries to city walking tours, we make every trip irresistible.',
  primaryButton: { text: 'Request a Systems Audit', page: 'contact' },
  secondaryButton: { text: 'View Tour Demos', page: 'tour-operators' },
};

/* ── Pain Points ── */
export const tourDesignChallenges = {
  title: 'Is Your Tour Website Converting?',
  description: 'Tour operators face unique challenges that generic website builders can\'t solve.',
  items: [
    'Tours are hard to showcase with basic page builders',
    'No way to display day-by-day itineraries properly',
    'Maps and route visualisation missing or clunky',
    'Booking enquiries getting lost or delayed',
    'Destination and accommodation content scattered',
    'Mobile travellers can\'t browse tours easily',
    'No integration with WETU or booking engines',
    'Poor image galleries that don\'t do your tours justice',
  ],
};

/* ── Workflow ── */
export const tourDesignProcess = {
  title: 'From Concept to Bookings',
  description: 'Our travel-specific workflow ensures every tour is presented at its best.',
  steps: [
    {
      number: '01',
      title: 'Travel Discovery',
      icon: MagnifyingGlass,
      description: 'We learn your tour products, target travellers, booking flow, and competitive landscape to build the right strategy.',
      deliverables: ['Tour product audit', 'Traveler persona profiles', 'Competitor analysis', 'Content inventory'],
      duration: '1 Week',
    },
    {
      number: '02',
      title: 'Tour Content Design',
      icon: FileText,
      description: 'Structure your tours with compelling day-by-day itineraries, destination pages, and accommodation showcases.',
      deliverables: ['Itinerary templates', 'Destination page structure', 'Content style guide', 'Photo/video guidelines'],
      duration: '1-2 Weeks',
    },
    {
      number: '03',
      title: 'Visual Design',
      icon: PenNib,
      description: 'Create an immersive, travel-inspired design that showcases your destinations with full-width imagery and interactive maps.',
      deliverables: ['Tour page designs', 'Destination page layouts', 'Mobile booking flow', 'Interactive map prototype'],
      duration: '2-3 Weeks',
    },
    {
      number: '04',
      title: 'WordPress Build',
      icon: Code,
      description: 'Build with LSX Tour Operator plugin, custom post types for tours/destinations/accommodation, and booking integration.',
      deliverables: ['LSX Tour Operator setup', 'Custom tour post type', 'WETU importer integration', 'Booking engine connection'],
      duration: '4-6 Weeks',
    },
    {
      number: '05',
      title: 'Content & Testing',
      icon: CheckCircle,
      description: 'Populate tours, test booking flows, verify maps and galleries, and ensure everything works on mobile.',
      deliverables: ['Tour content population', 'Booking flow testing', 'Map verification', 'Cross-device QA'],
      duration: '1-2 Weeks',
    },
    {
      number: '06',
      title: 'Launch & Grow',
      icon: Rocket,
      description: 'Go live with your new tour platform, set up analytics to track enquiries, and optimise based on real traveller behaviour.',
      deliverables: ['Production deployment', 'Booking analytics setup', 'SEO for destinations', 'Training & handover'],
      duration: '1 Week',
    },
  ],
};

/* ── Tour-Specific Features ── */
export const tourDesignFeatures = {
  title: 'Built for the Travel Industry',
  description: 'Specialised features that generic website builders simply cannot offer.',
  items: [
    { icon: MapTrifold, title: 'Interactive Route Maps', description: 'Visualise tour routes with interactive maps showing stops, distances, and points of interest.' },
    { icon: Calendar, title: 'Day-by-Day Itineraries', description: 'Beautiful itinerary layouts with daily activities, meals, accommodation, and travel details.' },
    { icon: Camera, title: 'Immersive Galleries', description: 'Full-screen photo and video galleries that bring destinations to life.' },
    { icon: Globe, title: 'Destination Pages', description: 'Rich destination content with related tours, travel info, and seasonal highlights.' },
    { icon: CreditCard, title: 'Booking Integration', description: 'Connect with booking engines, accept deposits, and manage availability calendars.' },
    { icon: Users, title: 'Traveller Reviews', description: 'Collect and showcase authentic traveller reviews with photos and ratings.' },
    { icon: Mountains, title: 'Accommodation Showcases', description: 'Dedicated accommodation pages linked to tours with amenities and photos.' },
    { icon: Star, title: 'WETU Integration', description: 'Import and sync tour content directly from WETU for African tour operators.' },
  ],
};

/* ── Included Services ── */
export const tourDesignServices = {
  title: 'What\'s Included',
  description: 'A complete tour website solution from strategy to launch.',
  items: [
    { icon: MagnifyingGlass, title: 'Travel Discovery', page: 'discovery', description: 'Tour product & market research.' },
    { icon: PenNib, title: 'Tour UX Design', page: 'design', description: 'Travel-focused responsive design.' },
    { icon: Code, title: 'WordPress + LSX TO', page: 'development', description: 'LSX Tour Operator plugin setup.' },
    { icon: Globe, title: 'Content Design', page: 'content', description: 'Tour & destination content creation.' },
    { icon: MapTrifold, title: 'WETU Importer', page: 'wetu-importer', description: 'Automated tour content sync.' },
    { icon: CreditCard, title: 'Booking Setup', page: 'woocommerce', description: 'Booking engine integration.' },
  ],
};

/* ── Results Stats ── */
export const tourDesignResults = [
  { stat: '60%', label: 'More Enquiries', description: 'Average increase in booking enquiries after launch.' },
  { stat: '3min', label: 'Avg. Time on Tour', description: 'Travellers spend 3+ minutes browsing each tour page.' },
  { stat: '85%', label: 'Mobile Traffic', description: 'Optimised for the majority of travel browsing.' },
  { stat: '50+', label: 'Tour Operators', description: 'Tour operators trust our LSX Tour Operator platform.' },
];

/* ── Pricing ── */
export const tourDesignPricing = {
  title: 'Tour Website Packages',
  description: 'Pricing based on the number of tours and integration complexity.',
  packages: [
    {
      name: 'Starter',
      description: 'For small operators with up to 15 tours',
      price: 'From $10,000',
      features: ['Up to 15 tours', 'LSX Tour Operator plugin', 'Itinerary builder', 'Destination pages', 'Enquiry forms', 'Mobile responsive', '30-day support'],
      recommended: false,
    },
    {
      name: 'Professional',
      description: 'For established operators with 50+ tours',
      price: 'From $22,000',
      features: ['Up to 50 tours', 'Custom tour design', 'WETU integration', 'Interactive maps', 'Booking engine', 'Review system', 'SEO for destinations', '90-day support'],
      recommended: true,
    },
    {
      name: 'Enterprise',
      description: 'For large operators and DMCs',
      price: 'Custom',
      features: ['Unlimited tours', 'Bespoke design', 'Multi-destination', 'API integrations', 'Multi-language', 'Agent portal', 'Priority SLA', 'Dedicated manager'],
      recommended: false,
    },
  ],
};

/* ── FAQs ── */
export const tourDesignFAQs = [
  {
    question: 'What is the LSX Tour Operator plugin?',
    answer: 'LSX Tour Operator is our custom WordPress plugin ecosystem designed specifically for tour operators. It provides custom post types for Tours, Destinations, and Accommodation, along with an itinerary builder, interactive maps, and review system — all integrated with WordPress Full Site Editing.',
  },
  {
    question: 'Can you import my tours from WETU?',
    answer: 'Yes. Our WETU Importer plugin syncs your tour content — including itineraries, images, and accommodation — directly from WETU into WordPress. Changes in WETU automatically update on your website.',
  },
  {
    question: 'Do you integrate with booking engines?',
    answer: 'We integrate with popular booking engines like Rezdy, FareHarbor, Bokun, and others. We can also build custom booking flows using WooCommerce Bookings for a fully integrated experience.',
  },
  {
    question: 'How are tours displayed on mobile?',
    answer: 'Our tour pages are mobile-first with swipeable galleries, collapsible itinerary days, tap-to-call buttons, and a sticky booking CTA. Over 85% of travel research happens on mobile, so we prioritise this experience.',
  },
  {
    question: 'Can I manage my tours without a developer?',
    answer: 'Absolutely. The LSX Tour Operator plugin uses the WordPress block editor, so you can add and edit tours, update itineraries, swap images, and manage availability calendars without any code. We provide training as part of every package.',
  },
];

/* ── CTA ── */
export const tourDesignCTA = {
  title: 'Ready to Showcase Your Tours?',
  description: 'Book a free consultation and we\'ll show you how tour operators are using our platform to drive more bookings.',
  buttonText: 'Book Free Consultation',
  buttonPage: 'contact',
};