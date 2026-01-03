/**
 * SEO & Marketing Data
 * 
 * Centralized data for SEO components, schema markup, reviews, and trust signals.
 * This mirrors how WordPress manages SEO data through custom fields and options.
 * 
 * **Data Categories:**
 * - Organization info (for schema markup)
 * - Reviews and testimonials
 * - Trust badges
 * - Social proof metrics
 * - Meta tag templates
 * 
 * **WordPress Mapping:**
 * - Organization data → Site settings / ACF options
 * - Reviews → Custom post type: `review`
 * - Trust badges → Theme customizer settings
 * - Social proof → Live API data or cached stats
 * 
 * @see {@link /guidelines/data/README.md}
 */

import type { Review } from '../components/seo/ReviewSnippet';

/**
 * Organization Information
 * 
 * Used for Organization schema markup and site-wide SEO.
 */
export const organizationInfo = {
  name: 'LSX Design',
  legalName: 'LSX Design (Pty) Ltd',
  url: 'https://lsxdesign.com',
  logo: 'https://lsxdesign.com/images/lsx-logo.png',
  description: 'WordPress and WooCommerce web design agency specializing in modern block themes, design systems, and accessible high-performance websites.',
  
  // Contact Information
  telephone: '+27-21-123-4567',
  email: 'hello@lsxdesign.com',
  
  // Physical Address
  address: {
    streetAddress: '123 Bree Street',
    addressLocality: 'Cape Town',
    addressRegion: 'Western Cape',
    postalCode: '8001',
    addressCountry: 'ZA',
  },
  
  // Geographic Coordinates
  geo: {
    latitude: -33.9249,
    longitude: 18.4241,
  },
  
  // Business Details
  priceRange: '$$',
  openingHours: [
    'Mo-Fr 09:00-17:00',
  ],
  
  // Social Media
  sameAs: [
    'https://facebook.com/lsxdesign',
    'https://twitter.com/lsxdesign',
    'https://linkedin.com/company/lsxdesign',
    'https://instagram.com/lsxdesign',
    'https://github.com/lsxdesign',
  ],
  
  // Founding Date
  foundingDate: '2015-01-15',
  
  // Number of Employees
  numberOfEmployees: '10-50',
};

/**
 * Customer Reviews & Testimonials
 * 
 * Featured reviews for display on homepage, services pages, etc.
 */
export const featuredReviews: Review[] = [
  {
    author: 'Sarah Johnson',
    authorTitle: 'CEO, African Safari Consultants',
    authorPhoto: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    date: '2024-01-15',
    title: 'Exceptional WordPress Development',
    content: 'LSX Design delivered a stunning WordPress website that exceeded our expectations. The custom e-commerce platform they built has increased our bookings by 45%. Their attention to detail and understanding of our business needs was remarkable.',
    verified: true,
    productName: 'Custom WordPress Development',
  },
  {
    author: 'Michael Chen',
    authorTitle: 'Founder, TechStartup Co',
    authorPhoto: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    date: '2024-01-20',
    title: 'Best WooCommerce Developer',
    content: 'Working with LSX Design was a game-changer for our online store. They optimized our WooCommerce site for speed and conversions. Our load times dropped by 60% and sales increased by 30% in the first month.',
    verified: true,
    productName: 'WooCommerce Optimization',
  },
  {
    author: 'Emily Rodriguez',
    authorTitle: 'Marketing Director, GreenEnergy Solutions',
    authorPhoto: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    date: '2024-02-01',
    title: 'Professional & Responsive Team',
    content: 'The team at LSX Design is incredibly professional and responsive. They guided us through the entire process, from design to launch. Our new WordPress site is not only beautiful but also ranks higher in search results.',
    verified: true,
    productName: 'WordPress Design & SEO',
  },
  {
    author: 'David Thompson',
    authorTitle: 'Owner, Mountain Gear Outfitters',
    authorPhoto: 'https://i.pravatar.cc/150?img=8',
    rating: 5,
    date: '2024-02-10',
    title: 'Outstanding Support',
    content: 'LSX Design doesn\'t just build websites - they provide ongoing support that\'s second to none. Whenever we have a question or need an update, they\'re there. Our e-commerce site has been running flawlessly for 6 months.',
    verified: true,
    productName: 'WooCommerce Development + Support',
  },
  {
    author: 'Jessica Martinez',
    authorTitle: 'Director, Cultural Heritage Foundation',
    authorPhoto: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
    date: '2024-02-15',
    title: 'Accessibility Champions',
    content: 'LSX Design\'s commitment to web accessibility is impressive. They built our WordPress site to WCAG 2.1 AA standards, making our content accessible to all visitors. The design is elegant and the performance is excellent.',
    verified: true,
    productName: 'Accessible WordPress Development',
  },
  {
    author: 'Robert Williams',
    authorTitle: 'Managing Partner, Legal Associates',
    authorPhoto: 'https://i.pravatar.cc/150?img=14',
    rating: 5,
    date: '2024-02-20',
    title: 'Results-Driven Approach',
    content: 'LSX Design took time to understand our business goals and delivered a WordPress site that drives results. Our contact form submissions increased by 80% and we\'re ranking on page 1 for our target keywords.',
    verified: true,
    productName: 'WordPress Development & SEO',
  },
];

/**
 * All customer reviews (for reviews page)
 */
export const allReviews: Review[] = [
  ...featuredReviews,
  {
    author: 'Lisa Anderson',
    authorTitle: 'Owner, Boutique Bakery',
    rating: 5,
    date: '2024-01-25',
    title: 'Beautiful & Fast Website',
    content: 'Our new WordPress site is gorgeous and lightning-fast. LSX Design optimized every aspect of the site for speed. Customers love the online ordering system.',
    verified: true,
    productName: 'WordPress + WooCommerce',
  },
  {
    author: 'James Patterson',
    authorTitle: 'CEO, FinTech Solutions',
    rating: 4,
    date: '2024-02-05',
    title: 'Great Communication',
    content: 'LSX Design kept us informed throughout the project. The final product is excellent, though we had a few minor revisions. Overall very satisfied.',
    verified: true,
    productName: 'Custom WordPress Theme',
  },
  {
    author: 'Amanda Foster',
    authorTitle: 'Director, Wellness Center',
    rating: 5,
    date: '2024-02-12',
    title: 'Exceeded Expectations',
    content: 'We\'ve worked with several web agencies, but LSX Design stands out. Their WordPress expertise and design skills are top-notch. Highly recommend!',
    verified: true,
    productName: 'WordPress Development',
  },
];

/**
 * Aggregate Rating Statistics
 */
export const aggregateRating = {
  averageRating: 4.9,
  totalReviews: allReviews.length,
  ratingBreakdown: {
    5: allReviews.filter(r => r.rating === 5).length,
    4: allReviews.filter(r => r.rating === 4).length,
    3: allReviews.filter(r => r.rating === 3).length,
    2: allReviews.filter(r => r.rating === 2).length,
    1: allReviews.filter(r => r.rating === 1).length,
  },
};

/**
 * Trust Badges Configuration
 */
export const trustBadges = {
  payment: [
    { name: 'Visa', type: 'payment' as const },
    { name: 'Mastercard', type: 'payment' as const },
    { name: 'American Express', type: 'payment' as const },
    { name: 'PayPal', type: 'payment' as const },
  ],
  security: [
    { name: 'SSL Secure', type: 'security' as const, tooltip: '256-bit SSL encryption' },
    { name: 'PCI Compliant', type: 'security' as const, tooltip: 'PCI DSS Level 1 certified' },
    { name: 'GDPR Compliant', type: 'security' as const, tooltip: 'EU data protection compliant' },
  ],
  certifications: [
    { name: 'WordPress VIP Partner', type: 'certification' as const },
    { name: 'WooCommerce Expert', type: 'certification' as const },
    { name: 'Google Partner', type: 'certification' as const },
    { name: 'ISO 9001 Certified', type: 'certification' as const },
  ],
};

/**
 * Social Proof Metrics
 */
export const socialProofMetrics = {
  // Live visitor counts (would be real-time in production)
  liveVisitors: 247,
  
  // Customer statistics
  totalCustomers: 500,
  activeProjects: 42,
  projectsCompleted: 458,
  
  // Social media followers
  socialFollowers: {
    facebook: 12500,
    twitter: 8300,
    instagram: 15200,
    linkedin: 6700,
    youtube: 3400,
  },
  
  // Performance stats
  averageLoadTime: '1.2s',
  averageUptimePercentage: 99.9,
  customerSatisfaction: 98,
  
  // Trust indicators
  yearsInBusiness: 9,
  teamMembers: 24,
  countries: 12,
};

/**
 * Recent Activity (for notifications)
 */
export const recentActivities = [
  {
    user: 'Sarah from Cape Town',
    action: 'purchased',
    item: 'WordPress Development Package',
    timeAgo: '3 minutes ago',
  },
  {
    user: 'Michael from Johannesburg',
    action: 'signed up for',
    item: 'WooCommerce Optimization',
    timeAgo: '12 minutes ago',
  },
  {
    user: 'Emily from Durban',
    action: 'requested a quote for',
    item: 'Custom Theme Development',
    timeAgo: '28 minutes ago',
  },
  {
    user: 'David from Pretoria',
    action: 'downloaded',
    item: 'WordPress Best Practices Guide',
    timeAgo: '45 minutes ago',
  },
  {
    user: 'Jessica from Port Elizabeth',
    action: 'subscribed to',
    item: 'Monthly Newsletter',
    timeAgo: '1 hour ago',
  },
];

/**
 * SEO Meta Templates
 * 
 * Reusable meta tag templates for different page types.
 */
export const metaTemplates = {
  homepage: {
    title: 'LSX Design | WordPress & WooCommerce Web Design Agency',
    description: 'Expert WordPress and WooCommerce web design agency in Cape Town. Custom themes, plugins, and e-commerce solutions.',
    keywords: ['WordPress', 'WooCommerce', 'Web Design', 'Cape Town', 'E-commerce'],
    ogImage: 'https://lsxdesign.com/images/og-homepage.jpg',
  },
  
  services: {
    title: 'WordPress Development Services | LSX Design',
    description: 'Professional WordPress development services including custom themes, plugins, WooCommerce, and performance optimization.',
    keywords: ['WordPress Development', 'Custom Themes', 'Plugin Development', 'WooCommerce'],
    ogImage: 'https://lsxdesign.com/images/og-services.jpg',
  },
  
  portfolio: {
    title: 'Portfolio | WordPress & WooCommerce Projects | LSX Design',
    description: 'View our portfolio of successful WordPress and WooCommerce projects. From e-commerce to corporate websites.',
    keywords: ['Portfolio', 'Case Studies', 'WordPress Projects', 'Client Work'],
    ogImage: 'https://lsxdesign.com/images/og-portfolio.jpg',
  },
  
  about: {
    title: 'About Us | LSX Design Team',
    description: 'Meet the LSX Design team. WordPress and WooCommerce experts passionate about building accessible, high-performance websites.',
    keywords: ['About', 'Team', 'Company', 'WordPress Agency'],
    ogImage: 'https://lsxdesign.com/images/og-about.jpg',
  },
  
  contact: {
    title: 'Contact Us | Get a Free Quote | LSX Design',
    description: 'Get in touch with LSX Design for WordPress development, WooCommerce solutions, or general inquiries. Free consultation available.',
    keywords: ['Contact', 'Quote', 'Consultation', 'Get in Touch'],
    ogImage: 'https://lsxdesign.com/images/og-contact.jpg',
  },
};

/**
 * Helper Functions
 */

/**
 * Get reviews by rating
 */
export function getReviewsByRating(rating: number): Review[] {
  return allReviews.filter(review => review.rating === rating);
}

/**
 * Get verified reviews only
 */
export function getVerifiedReviews(): Review[] {
  return allReviews.filter(review => review.verified);
}

/**
 * Get reviews for a specific product/service
 */
export function getReviewsByProduct(productName: string): Review[] {
  return allReviews.filter(review => review.productName === productName);
}

/**
 * Get recent reviews (last N days)
 */
export function getRecentReviews(days: number = 30): Review[] {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);
  
  return allReviews.filter(review => {
    const reviewDate = new Date(review.date);
    return reviewDate >= cutoffDate;
  });
}

/**
 * Calculate average rating
 */
export function calculateAverageRating(reviews: Review[]): number {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return sum / reviews.length;
}

/**
 * Format social follower count
 */
export function formatFollowerCount(count: number): string {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
}

/**
 * Export all data
 */
export const seoData = {
  organization: organizationInfo,
  reviews: {
    featured: featuredReviews,
    all: allReviews,
    aggregate: aggregateRating,
  },
  trustBadges,
  socialProof: socialProofMetrics,
  recentActivities,
  metaTemplates,
};

export default seoData;
