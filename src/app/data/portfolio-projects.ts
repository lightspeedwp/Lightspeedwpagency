/**
 * Portfolio Projects Mock Data
 * 
 * Real-world WordPress & WooCommerce agency portfolio projects.
 * Based on LightspeedWP.agency structure with custom taxonomies.
 * 
 * **Custom Taxonomies:**
 * - project_group: Industry/sector grouping
 * - project_tag: Technology/feature tags
 * - project_type: Project type classification
 * 
 * **WordPress Mapping:**
 * - Custom Post Type: 'portfolio' or 'project'
 * - Featured images from Unsplash
 * - ACF fields for case study data
 * - Custom taxonomies registered
 */

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  client: string;
  
  // Custom Taxonomies
  projectGroups: string[];     // project_group taxonomy
  projectTags: string[];        // project_tag taxonomy
  projectTypes: string[];       // project_type taxonomy
  
  // Case Study Data
  caseStudy: {
    challenge: string;
    solution: string;
    results: {
      metric: string;
      value: string;
      description: string;
    }[];
    technologies: string[];
    timeline: string;
    budget: string;
    url?: string;
  };
  
  // Testimonial
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
    avatar?: string;
  };
  
  // Meta
  date: string;
  featured: boolean;
}

/**
 * Project Groups (Industries/Sectors)
 * Based on project_group taxonomy
 */
export const projectGroups = [
  { slug: 'ecommerce', name: 'E-commerce', count: 12 },
  { slug: 'healthcare', name: 'Healthcare & Medical', count: 8 },
  { slug: 'travel-tourism', name: 'Travel & Tourism', count: 6 },
  { slug: 'technology', name: 'Technology & SaaS', count: 10 },
  { slug: 'nonprofit', name: 'Non-Profit & Education', count: 5 },
  { slug: 'professional-services', name: 'Professional Services', count: 7 },
  { slug: 'retail', name: 'Retail & Consumer Goods', count: 6 },
  { slug: 'real-estate', name: 'Real Estate', count: 4 }
] as const;

/**
 * Project Tags (Technologies/Features)
 * Based on project_tag taxonomy
 */
export const projectTags = [
  { slug: 'wordpress', name: 'WordPress', count: 42 },
  { slug: 'woocommerce', name: 'WooCommerce', count: 28 },
  { slug: 'block-theme', name: 'Block Theme', count: 35 },
  { slug: 'fse', name: 'Full Site Editing', count: 30 },
  { slug: 'gutenberg', name: 'Gutenberg', count: 38 },
  { slug: 'acf', name: 'Advanced Custom Fields', count: 25 },
  { slug: 'accessibility', name: 'Accessibility (WCAG)', count: 40 },
  { slug: 'performance', name: 'Performance Optimization', count: 35 },
  { slug: 'seo', name: 'SEO', count: 32 },
  { slug: 'multisite', name: 'WordPress Multisite', count: 8 },
  { slug: 'membership', name: 'Membership Site', count: 6 },
  { slug: 'multilingual', name: 'Multilingual', count: 12 },
  { slug: 'headless', name: 'Headless WordPress', count: 5 },
  { slug: 'design-system', name: 'Design System', count: 15 },
  { slug: 'migration', name: 'Site Migration', count: 10 }
] as const;

/**
 * Project Types
 * Based on project_type taxonomy
 */
export const projectTypes = [
  { slug: 'new-build', name: 'New Website Build', count: 25 },
  { slug: 'redesign', name: 'Website Redesign', count: 18 },
  { slug: 'migration', name: 'Platform Migration', count: 10 },
  { slug: 'optimization', name: 'Performance Optimization', count: 12 },
  { slug: 'maintenance', name: 'Ongoing Maintenance', count: 30 },
  { slug: 'consulting', name: 'Consulting & Strategy', count: 8 }
] as const;

/**
 * Portfolio Projects Data
 * Real-world WordPress & WooCommerce agency projects
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'eco-market-woocommerce',
    slug: 'eco-market-woocommerce',
    title: 'EcoMarket - Sustainable E-commerce Platform',
    excerpt: 'Complete WooCommerce solution for sustainable products marketplace with 500+ vendors and 10,000+ SKUs.',
    featuredImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200',
    client: 'EcoMarket Inc.',
    projectGroups: ['ecommerce', 'retail'],
    projectTags: ['wordpress', 'woocommerce', 'block-theme', 'fse', 'accessibility', 'performance', 'seo'],
    projectTypes: ['new-build'],
    caseStudy: {
      challenge: 'EcoMarket needed a scalable multi-vendor marketplace that could handle thousands of products while maintaining fast page load times and WCAG 2.1 AA accessibility standards.',
      solution: 'Built a custom WooCommerce multivendor platform using FSE block theme with optimized product filtering, integrated vendor dashboards, and performance-first architecture.',
      results: [
        { metric: 'Page Load Time', value: '1.2s', description: 'Average product page load (95th percentile)' },
        { metric: 'Conversion Rate', value: '+47%', description: 'Increase in checkout completion rate' },
        { metric: 'Vendor Onboarding', value: '500+', description: 'Active vendors in first 6 months' },
        { metric: 'Accessibility Score', value: '100%', description: 'WCAG 2.1 AA compliance achieved' }
      ],
      technologies: ['WordPress 6.4', 'WooCommerce 8.5', 'Dokan Multivendor', 'Block Theme (FSE)', 'Advanced Custom Fields', 'Redis Cache', 'Cloudflare CDN'],
      timeline: '4 months',
      budget: '$85,000 - $100,000',
      url: 'https://ecomarket.example.com'
    },
    testimonial: {
      quote: 'The team delivered a world-class e-commerce platform that exceeded our expectations. The performance optimization alone has saved us thousands in hosting costs.',
      author: 'Sarah Mitchell',
      position: 'CTO',
      company: 'EcoMarket Inc.'
    },
    date: '2024-11-15',
    featured: true
  },
  
  {
    id: 'healthfirst-wellness-portal',
    slug: 'healthfirst-wellness-portal',
    title: 'HealthFirst Wellness - HIPAA-Compliant Patient Portal',
    excerpt: 'Secure, HIPAA-compliant WordPress multisite for healthcare providers with patient portals and appointment booking.',
    featuredImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200',
    client: 'HealthFirst Wellness Network',
    projectGroups: ['healthcare'],
    projectTags: ['wordpress', 'multisite', 'accessibility', 'performance', 'membership'],
    projectTypes: ['new-build'],
    caseStudy: {
      challenge: 'HealthFirst needed a HIPAA-compliant multisite network for 50+ healthcare providers with secure patient portals, appointment scheduling, and medical records access.',
      solution: 'Developed WordPress multisite with custom member areas, encrypted data storage, two-factor authentication, and integrated telehealth capabilities.',
      results: [
        { metric: 'Security Audit', value: '100%', description: 'HIPAA compliance certification achieved' },
        { metric: 'Patient Adoption', value: '15,000+', description: 'Active patient portal users' },
        { metric: 'Appointment Bookings', value: '+78%', description: 'Increase in online appointment scheduling' },
        { metric: 'Provider Satisfaction', value: '4.9/5', description: 'Average provider rating' }
      ],
      technologies: ['WordPress Multisite', 'MemberPress', 'WP Booking Calendar', 'Two-Factor Auth', 'SSL/TLS Encryption', 'HIPAA-compliant Hosting'],
      timeline: '6 months',
      budget: '$120,000 - $150,000',
      url: 'https://healthfirstwellness.example.com'
    },
    testimonial: {
      quote: 'Outstanding work on a complex project. The team understood our compliance requirements and delivered a secure, user-friendly platform.',
      author: 'Dr. Michael Chen',
      position: 'Medical Director',
      company: 'HealthFirst Wellness Network'
    },
    date: '2024-10-20',
    featured: true
  },
  
  {
    id: 'wanderlust-travel-booking',
    slug: 'wanderlust-travel-booking',
    title: 'Wanderlust Adventures - Travel Booking Platform',
    excerpt: 'Comprehensive travel booking system with custom tour packages, itinerary builder, and real-time availability.',
    featuredImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200',
    client: 'Wanderlust Adventures',
    projectGroups: ['travel-tourism'],
    projectTags: ['wordpress', 'woocommerce', 'block-theme', 'accessibility', 'multilingual'],
    projectTypes: ['new-build'],
    caseStudy: {
      challenge: 'Wanderlust needed a sophisticated booking platform for custom travel packages with dynamic pricing, multi-destination itineraries, and 24/7 customer support.',
      solution: 'Built custom WooCommerce booking system with itinerary builder, real-time availability checking, and integrated payment processing for 50+ currencies.',
      results: [
        { metric: 'Booking Volume', value: '+125%', description: 'Increase in online bookings year-over-year' },
        { metric: 'Average Order Value', value: '+32%', description: 'Increase in package value' },
        { metric: 'Customer Satisfaction', value: '4.8/5', description: 'Average booking experience rating' },
        { metric: 'Mobile Conversions', value: '+89%', description: 'Mobile booking completion rate' }
      ],
      technologies: ['WordPress 6.4', 'WooCommerce Bookings', 'WPML (Multilingual)', 'Stripe + PayPal', 'Google Maps API', 'Calendly Integration'],
      timeline: '5 months',
      budget: '$75,000 - $90,000',
      url: 'https://wanderlustadventures.example.com'
    },
    testimonial: {
      quote: 'The booking platform has transformed our business. We can now handle complex multi-destination trips with ease.',
      author: 'Emma Rodriguez',
      position: 'CEO',
      company: 'Wanderlust Adventures'
    },
    date: '2024-09-10',
    featured: true
  },
  
  {
    id: 'techstartup-magazine',
    slug: 'techstartup-magazine',
    title: 'TechStartup Magazine - Editorial Publishing Platform',
    excerpt: 'High-performance editorial WordPress site with custom article layouts, paywall, and subscriber management.',
    featuredImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200',
    client: 'TechStartup Magazine',
    projectGroups: ['technology'],
    projectTags: ['wordpress', 'block-theme', 'fse', 'gutenberg', 'membership', 'performance', 'seo'],
    projectTypes: ['redesign'],
    caseStudy: {
      challenge: 'TechStartup Magazine needed to modernize their legacy WordPress site while implementing a paywall and improving page speed for 500,000+ monthly visitors.',
      solution: 'Migrated to FSE block theme with custom Gutenberg blocks for editorial layouts, integrated MemberPress paywall, and optimized for Core Web Vitals.',
      results: [
        { metric: 'Page Speed', value: '95/100', description: 'Google PageSpeed Insights score' },
        { metric: 'Subscriber Growth', value: '+215%', description: 'Premium subscriber increase in 6 months' },
        { metric: 'Ad Revenue', value: '+42%', description: 'Increase from faster page loads' },
        { metric: 'Bounce Rate', value: '-35%', description: 'Reduction in bounce rate' }
      ],
      technologies: ['WordPress 6.4 FSE', 'Custom Gutenberg Blocks', 'MemberPress', 'WP Rocket', 'Cloudflare', 'Google Ad Manager'],
      timeline: '3 months',
      budget: '$45,000 - $60,000',
      url: 'https://techstartupmag.example.com'
    },
    testimonial: {
      quote: 'The redesign and performance optimization paid for itself in 3 months through increased ad revenue and subscriptions.',
      author: 'James Parker',
      position: 'Editor-in-Chief',
      company: 'TechStartup Magazine'
    },
    date: '2024-08-05',
    featured: true
  },
  
  {
    id: 'oceanview-real-estate',
    slug: 'oceanview-real-estate',
    title: 'OceanView Realty - Property Listing Platform',
    excerpt: 'Advanced property search platform with MLS integration, virtual tours, and mortgage calculator.',
    featuredImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200',
    client: 'OceanView Realty Group',
    projectGroups: ['real-estate'],
    projectTags: ['wordpress', 'block-theme', 'acf', 'accessibility', 'performance'],
    projectTypes: ['new-build'],
    caseStudy: {
      challenge: 'OceanView needed a sophisticated property listing platform with MLS integration, advanced search filters, and virtual tour capabilities.',
      solution: 'Built custom WordPress platform with ACF-powered property listings, IDX MLS integration, interactive maps, and 3D virtual tour embedding.',
      results: [
        { metric: 'Lead Generation', value: '+165%', description: 'Increase in qualified property inquiries' },
        { metric: 'Virtual Tour Views', value: '25,000+', description: 'Monthly virtual tour completions' },
        { metric: 'Search Accuracy', value: '98%', description: 'User satisfaction with search results' },
        { metric: 'Mobile Traffic', value: '67%', description: 'Of all property searches on mobile' }
      ],
      technologies: ['WordPress 6.4', 'Advanced Custom Fields Pro', 'IDX Broker', 'Matterport 3D Tours', 'Mapbox', 'Mortgage Calculator API'],
      timeline: '4 months',
      budget: '$65,000 - $80,000',
      url: 'https://oceanviewrealty.example.com'
    },
    testimonial: {
      quote: 'The platform has become our primary lead generation tool. The virtual tours and property search are exceptional.',
      author: 'Linda Thompson',
      position: 'Managing Broker',
      company: 'OceanView Realty Group'
    },
    date: '2024-07-18',
    featured: false
  },
  
  {
    id: 'nonprofit-foundation',
    slug: 'nonprofit-foundation',
    title: 'Global Education Foundation - Donation & Impact Platform',
    excerpt: 'Non-profit WordPress site with donation management, impact tracking, and volunteer coordination.',
    featuredImage: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200',
    client: 'Global Education Foundation',
    projectGroups: ['nonprofit'],
    projectTags: ['wordpress', 'block-theme', 'accessibility', 'multilingual', 'membership'],
    projectTypes: ['redesign'],
    caseStudy: {
      challenge: 'The foundation needed to increase online donations while showcasing impact stories and coordinating global volunteer programs.',
      solution: 'Redesigned WordPress site with GiveWP donation platform, impact dashboard, multilingual support (8 languages), and volunteer management system.',
      results: [
        { metric: 'Donations', value: '+287%', description: 'Increase in online donation revenue' },
        { metric: 'Monthly Donors', value: '3,200+', description: 'New recurring monthly donors' },
        { metric: 'Volunteer Signups', value: '+145%', description: 'Increase in volunteer registrations' },
        { metric: 'Global Reach', value: '45 countries', description: 'Donors and volunteers worldwide' }
      ],
      technologies: ['WordPress 6.4', 'GiveWP', 'WPML', 'Volunteer Management Plugin', 'Stripe', 'PayPal', 'Mailchimp Integration'],
      timeline: '3.5 months',
      budget: '$40,000 - $55,000',
      url: 'https://globaleducationfoundation.example.com'
    },
    testimonial: {
      quote: 'The new platform has transformed how we connect with donors. The impact tracking features tell our story beautifully.',
      author: 'Dr. Amina Hassan',
      position: 'Executive Director',
      company: 'Global Education Foundation'
    },
    date: '2024-06-22',
    featured: false
  },
  
  {
    id: 'fitness-studio-network',
    slug: 'fitness-studio-network',
    title: 'FitLife Studios - Multi-Location Fitness Network',
    excerpt: 'WordPress multisite for fitness studio chain with class scheduling, membership management, and online coaching.',
    featuredImage: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200',
    client: 'FitLife Studios',
    projectGroups: ['professional-services'],
    projectTags: ['wordpress', 'multisite', 'woocommerce', 'membership', 'accessibility'],
    projectTypes: ['new-build'],
    caseStudy: {
      challenge: 'FitLife needed a unified platform for 25 studio locations with centralized membership, class scheduling, and e-commerce for merchandise.',
      solution: 'Developed WordPress multisite with location-specific subsites, integrated booking system, WooCommerce for merchandise, and member app integration.',
      results: [
        { metric: 'Class Bookings', value: '+156%', description: 'Increase in online class registrations' },
        { metric: 'Membership Retention', value: '+23%', description: 'Improvement in member retention rate' },
        { metric: 'Merchandise Sales', value: '$450K', description: 'First-year online merchandise revenue' },
        { metric: 'Mobile App Downloads', value: '18,000+', description: 'Member app installations' }
      ],
      technologies: ['WordPress Multisite', 'WooCommerce', 'MemberPress', 'Bookly Pro', 'MINDBODY Integration', 'Custom Mobile App API'],
      timeline: '5.5 months',
      budget: '$95,000 - $115,000',
      url: 'https://fitlifestudios.example.com'
    },
    testimonial: {
      quote: 'Managing 25 locations is now seamless. The integrated booking and membership system has been a game-changer.',
      author: 'Marcus Johnson',
      position: 'COO',
      company: 'FitLife Studios'
    },
    date: '2024-05-30',
    featured: false
  },
  
  {
    id: 'luxury-boutique-fashion',
    slug: 'luxury-boutique-fashion',
    title: 'LuxeBoutique - High-End Fashion E-commerce',
    excerpt: 'Premium WooCommerce store with custom product configurator, virtual try-on, and concierge service.',
    featuredImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200',
    client: 'LuxeBoutique',
    projectGroups: ['ecommerce', 'retail'],
    projectTags: ['wordpress', 'woocommerce', 'block-theme', 'performance', 'accessibility'],
    projectTypes: ['redesign'],
    caseStudy: {
      challenge: 'LuxeBoutique wanted to create an ultra-premium online shopping experience matching their in-store luxury service.',
      solution: 'Built elegant WooCommerce store with custom product configurator, AR virtual try-on, personal stylist booking, and white-glove customer service integration.',
      results: [
        { metric: 'Average Order Value', value: '+94%', description: 'Increase in average transaction size' },
        { metric: 'Return Rate', value: '-68%', description: 'Reduction in product returns (virtual try-on)' },
        { metric: 'VIP Memberships', value: '2,400+', description: 'Enrolled in concierge service' },
        { metric: 'Customer Lifetime Value', value: '+127%', description: 'Increase in repeat customer value' }
      ],
      technologies: ['WordPress 6.4', 'WooCommerce', 'ARKit/ARCore Integration', 'Custom Product Configurator', 'Calendly VIP Booking', 'Intercom Chat'],
      timeline: '4 months',
      budget: '$110,000 - $130,000',
      url: 'https://luxeboutique.example.com'
    },
    testimonial: {
      quote: 'The virtual try-on feature has revolutionized our online sales. Customers love it and returns have dropped dramatically.',
      author: 'Sophia Laurent',
      position: 'Creative Director',
      company: 'LuxeBoutique'
    },
    date: '2024-12-10',
    featured: false
  },
  
  {
    id: 'lawfirm-professional',
    slug: 'lawfirm-professional',
    title: 'Sterling & Associates - Corporate Law Firm',
    excerpt: 'Professional WordPress site for law firm with attorney profiles, case results, and secure client portal.',
    featuredImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200',
    client: 'Sterling & Associates Law',
    projectGroups: ['professional-services'],
    projectTags: ['wordpress', 'block-theme', 'accessibility', 'membership', 'seo'],
    projectTypes: ['redesign'],
    caseStudy: {
      challenge: 'Sterling & Associates needed a professional WordPress site that conveyed authority while providing secure client communication and case management.',
      solution: 'Redesigned with modern FSE block theme, attorney showcase, case results database, secure client portal, and integrated consultation booking.',
      results: [
        { metric: 'Consultation Bookings', value: '+178%', description: 'Increase in online consultation requests' },
        { metric: 'Organic Traffic', value: '+245%', description: 'Increase from SEO optimization' },
        { metric: 'Case Inquiries', value: '450+', description: 'Qualified monthly case inquiries' },
        { metric: 'Client Portal Adoption', value: '95%', description: 'Active client usage rate' }
      ],
      technologies: ['WordPress 6.4 FSE', 'MemberPress', 'Yoast SEO Premium', 'Calendly', 'Secure File Sharing', 'Two-Factor Authentication'],
      timeline: '3 months',
      budget: '$35,000 - $50,000',
      url: 'https://sterlingassociates.example.com'
    },
    testimonial: {
      quote: 'The new website projects the professionalism we need while making client communication effortless.',
      author: 'David Sterling',
      position: 'Managing Partner',
      company: 'Sterling & Associates Law'
    },
    date: '2024-04-15',
    featured: false
  },
  
  {
    id: 'restaurant-group',
    slug: 'restaurant-group',
    title: 'Culinary Collective - Restaurant Group Platform',
    excerpt: 'WordPress multisite for restaurant group with online ordering, reservations, and loyalty program.',
    featuredImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200',
    client: 'Culinary Collective',
    projectGroups: ['retail'],
    projectTags: ['wordpress', 'multisite', 'woocommerce', 'membership', 'accessibility'],
    projectTypes: ['new-build'],
    caseStudy: {
      challenge: 'Culinary Collective needed unified platform for 12 restaurants with individual branding, online ordering, and centralized loyalty program.',
      solution: 'Built WordPress multisite with location-specific subsites, WooCommerce for online ordering, integrated POS system, and custom loyalty rewards.',
      results: [
        { metric: 'Online Orders', value: '$2.1M', description: 'First-year online ordering revenue' },
        { metric: 'Loyalty Members', value: '42,000+', description: 'Enrolled in rewards program' },
        { metric: 'Reservation Rate', value: '+89%', description: 'Increase in online reservations' },
        { metric: 'Customer Data', value: '100%', description: 'Unified customer insights across locations' }
      ],
      technologies: ['WordPress Multisite', 'WooCommerce', 'Square POS Integration', 'OpenTable API', 'Custom Loyalty Plugin', 'SMS Notifications'],
      timeline: '4.5 months',
      budget: '$70,000 - $85,000',
      url: 'https://culinarycollective.example.com'
    },
    testimonial: {
      quote: 'The integrated platform has unified our brand while allowing each restaurant to maintain its unique identity.',
      author: 'Chef Marco Rossi',
      position: 'Executive Chef & Partner',
      company: 'Culinary Collective'
    },
    date: '2024-03-20',
    featured: false
  },
  
  {
    id: 'university-alumni',
    slug: 'university-alumni',
    title: 'Metro University Alumni Network',
    excerpt: 'University alumni platform with directory, events, mentorship matching, and fundraising.',
    featuredImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200',
    client: 'Metro University',
    projectGroups: ['nonprofit'],
    projectTags: ['wordpress', 'membership', 'accessibility', 'multilingual', 'acf'],
    projectTypes: ['new-build'],
    caseStudy: {
      challenge: 'Metro University needed to engage 75,000+ alumni with networking, mentorship, events, and fundraising capabilities.',
      solution: 'Developed comprehensive WordPress platform with alumni directory, mentorship matching algorithm, event management, and integrated giving platform.',
      results: [
        { metric: 'Alumni Engagement', value: '+312%', description: 'Increase in active platform users' },
        { metric: 'Mentorship Matches', value: '5,600+', description: 'Student-alumni connections made' },
        { metric: 'Event Attendance', value: '+156%', description: 'Increase in event participation' },
        { metric: 'Annual Giving', value: '+89%', description: 'Increase in alumni donations' }
      ],
      technologies: ['WordPress 6.4', 'BuddyPress', 'GiveWP', 'Advanced Custom Fields', 'Event Espresso', 'Custom Matching Algorithm'],
      timeline: '6 months',
      budget: '$55,000 - $70,000',
      url: 'https://alumni.metrouniversity.example.com'
    },
    testimonial: {
      quote: 'The alumni network has become the cornerstone of our engagement strategy. The mentorship matching is particularly impressive.',
      author: 'Patricia Wong',
      position: 'Director of Alumni Relations',
      company: 'Metro University'
    },
    date: '2024-02-10',
    featured: false
  },
  
  {
    id: 'manufacturing-b2b',
    slug: 'manufacturing-b2b',
    title: 'TechManufacturing - B2B E-commerce Portal',
    excerpt: 'B2B WooCommerce platform with custom pricing, quote system, and dealer portal.',
    featuredImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200',
    client: 'TechManufacturing Inc.',
    projectGroups: ['technology'],
    projectTags: ['wordpress', 'woocommerce', 'b2b', 'performance', 'membership'],
    projectTypes: ['migration'],
    caseStudy: {
      challenge: 'TechManufacturing needed to migrate from legacy system to modern B2B e-commerce with tier pricing, quote requests, and dealer management.',
      solution: 'Migrated to WooCommerce with B2B extensions, custom pricing engine, RFQ system, dealer portal, and ERP integration.',
      results: [
        { metric: 'Order Processing Time', value: '-75%', description: 'Reduction in manual order processing' },
        { metric: 'Dealer Adoption', value: '98%', description: 'Dealers actively using portal' },
        { metric: 'Quote-to-Order Rate', value: '+52%', description: 'Improvement in quote conversion' },
        { metric: 'Customer Satisfaction', value: '4.7/5', description: 'Dealer platform rating' }
      ],
      technologies: ['WordPress 6.4', 'WooCommerce B2B', 'Custom Pricing Engine', 'NetSuite ERP Integration', 'Advanced Shipping', 'Multi-currency'],
      timeline: '5 months',
      budget: '$90,000 - $110,000',
      url: 'https://techmanufacturing.example.com'
    },
    testimonial: {
      quote: 'The B2B platform has streamlined our entire dealer network. The custom pricing and quote system work flawlessly.',
      author: 'Robert Chen',
      position: 'VP of Sales',
      company: 'TechManufacturing Inc.'
    },
    date: '2024-01-25',
    featured: false
  }
];

/**
 * Featured Projects
 * Projects marked as featured for homepage display
 */
export const featuredProjects = portfolioProjects.filter(p => p.featured);

/**
 * Helper Functions
 */

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find(p => p.slug === slug);
}

/**
 * Get projects by project group (industry)
 */
export function getProjectsByGroup(groupSlug: string): PortfolioProject[] {
  return portfolioProjects.filter(p => p.projectGroups.includes(groupSlug));
}

/**
 * Get projects by project tag (technology)
 */
export function getProjectsByTag(tagSlug: string): PortfolioProject[] {
  return portfolioProjects.filter(p => p.projectTags.includes(tagSlug));
}

/**
 * Get projects by project type
 */
export function getProjectsByType(typeSlug: string): PortfolioProject[] {
  return portfolioProjects.filter(p => p.projectTypes.includes(typeSlug));
}

/**
 * Get recent projects (by date)
 */
export function getRecentProjects(limit: number = 6): PortfolioProject[] {
  return [...portfolioProjects]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

/**
 * Search projects by title or excerpt
 */
export function searchProjects(query: string): PortfolioProject[] {
  const lowerQuery = query.toLowerCase();
  return portfolioProjects.filter(p =>
    p.title.toLowerCase().includes(lowerQuery) ||
    p.excerpt.toLowerCase().includes(lowerQuery) ||
    p.client.toLowerCase().includes(lowerQuery)
  );
}
