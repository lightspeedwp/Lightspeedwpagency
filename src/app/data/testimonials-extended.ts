/**
 * Extended Testimonials Data
 *
 * Comprehensive testimonial entries with format types for archive/single templates.
 * Supports: standard, audio, video, gallery (portfolio+testimonial) formats.
 *
 * WordPress Mapping:
 * - Custom Post Type: 'testimonial'
 * - Custom Taxonomy: 'testimonial_category'
 * - Post Meta: format, media URLs, gallery images
 *
 * @see /src/app/components/templates/testimonials/
 */

export interface TestimonialEntry {
  id: string;
  slug: string;
  title: string;
  quote: string;
  fullStory?: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  date: string;
  format: 'standard' | 'audio' | 'video' | 'gallery';
  industry: string[];
  serviceType: string[];
  service: string;
  featured: boolean;

  /** Audio-specific */
  audio?: {
    url: string;
    duration: string;
    transcript?: string;
  };

  /** Video-specific */
  video?: {
    url: string;
    thumbnail: string;
    duration: string;
    description?: string;
  };

  /** Gallery-specific (portfolio + testimonial) */
  gallery?: {
    images: string[];
    projectTitle: string;
    projectSlug: string;
    projectDescription: string;
    technologies: string[];
    results: { metric: string; value: string }[];
  };
}

export interface TestimonialCategory {
  slug: string;
  name: string;
  count: number;
}

/**
 * Testimonial Categories
 */
export const testimonialCategories: TestimonialCategory[] = [
  { slug: 'all', name: 'All Testimonials', count: 12 },
  { slug: 'standard', name: 'Written', count: 5 },
  { slug: 'audio', name: 'Audio', count: 3 },
  { slug: 'video', name: 'Video', count: 2 },
  { slug: 'gallery', name: 'Portfolio', count: 2 },
];

/**
 * Extended Testimonials Collection
 */
export const testimonialEntries: TestimonialEntry[] = [
  /* ── Standard Testimonials ── */
  {
    id: 'armd-digital',
    slug: 'armd-digital-woocommerce',
    title: 'LightSpeed Transformed Our WooCommerce Store',
    quote: 'The team at LightSpeed was always very professional and innovative, and their expertise in coding was invaluable to our project. I highly recommend LightSpeed to any business looking for technical skills that involve custom coding.',
    fullStory: 'When we first approached LightSpeed, our WooCommerce store was slow and losing customers. Within 8 weeks, they rebuilt the entire front-end with their block theme approach, resulting in page loads under 2 seconds and a 40% increase in conversions. Their attention to detail and technical expertise made the entire process seamless.',
    author: 'Anthony Rodinis',
    role: 'Operations Manager',
    company: 'ARMD Digital',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    rating: 5,
    date: '2025-11-15',
    format: 'standard',
    industry: ['Technology', 'Email Security'],
    serviceType: ['Development', 'Discovery', 'Support'],
    service: 'WooCommerce New Store',
    featured: true,
  },
  {
    id: 'ross-spadaro',
    slug: 'ross-spadaro-automattic',
    title: 'A True Global Leader in WordPress',
    quote: 'Ashley and the team at LightSpeed are a true global leader in the WooCommerce and WordPress space. Their dedication to WordPress and attention to detail around developing high-quality solutions is evident.',
    fullStory: 'Having worked with dozens of WordPress agencies globally, LightSpeed stands out for their commitment to the block theme architecture. The LSX Design theme they built is not only beautiful but technically superior — lightweight, accessible, and fully compatible with the Site Editor. Their clients can build stunning websites without touching code.',
    author: 'Ross Spadaro',
    role: 'Account Manager',
    company: 'Automattic',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    rating: 5,
    date: '2025-10-22',
    format: 'standard',
    industry: ['Technology', 'WordPress'],
    serviceType: ['Theme Development', 'WooCommerce'],
    service: 'LSX Design Theme',
    featured: true,
  },
  {
    id: 'jenna-laughton',
    slug: 'jenna-laughton-marketing',
    title: 'Kind, Diligent & Always Ready to Assist',
    quote: 'The LightSpeed team is kind, diligent & always ready to assist. We are grateful to have them as part of our extended team, supporting us in maintaining & evolving our WordPress website.',
    author: 'Jenna Laughton',
    role: 'Marketing Operations Specialist',
    company: 'Client Company',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    rating: 5,
    date: '2025-09-05',
    format: 'standard',
    industry: ['General'],
    serviceType: ['Support', 'Maintenance', 'Development'],
    service: 'WordPress Support',
    featured: false,
  },
  {
    id: 'medical-clinic',
    slug: 'meridian-health-accessibility',
    title: 'WCAG Compliance Was Non-Negotiable',
    quote: 'WCAG compliance was non-negotiable for our healthcare site. LightSpeed not only met AA standards but exceeded them. Their understanding of accessibility requirements in healthcare settings was impressive.',
    author: 'Dr. James Park',
    role: 'Practice Administrator',
    company: 'Meridian Health Clinic',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
    rating: 5,
    date: '2025-08-18',
    format: 'standard',
    industry: ['Healthcare', 'Medical'],
    serviceType: ['Design', 'Development', 'Accessibility'],
    service: 'Accessible Website Build',
    featured: false,
  },
  {
    id: 'tech-startup',
    slug: 'novatech-labs-startup',
    title: 'Launched Our Entire Web Presence in 5 Weeks',
    quote: 'As a startup, we needed to launch fast without sacrificing quality. LightSpeed delivered our entire web presence in 5 weeks — design system, marketing site, and blog.',
    author: 'Priya Sharma',
    role: 'Co-Founder & CTO',
    company: 'NovaTech Labs',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400',
    rating: 5,
    date: '2025-07-12',
    format: 'standard',
    industry: ['Technology', 'SaaS'],
    serviceType: ['Design', 'Development', 'Strategy'],
    service: 'Startup Website Package',
    featured: false,
  },

  /* ── Audio Testimonials ── */
  {
    id: 'audio-safari-destinations',
    slug: 'safari-destinations-audio',
    title: 'How LightSpeed Transformed Our Booking Platform',
    quote: 'LightSpeed has been instrumental in transforming our online booking platform. The WooCommerce integration with our tour management system has streamlined our operations and increased bookings by 40%.',
    author: 'Sarah Mitchell',
    role: 'Digital Director',
    company: 'Safari Destinations',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    rating: 5,
    date: '2025-06-20',
    format: 'audio',
    industry: ['Travel', 'Tourism'],
    serviceType: ['WooCommerce', 'Development', 'Migration'],
    service: 'WooCommerce Integration',
    featured: true,
    audio: {
      url: 'https://example.com/audio/safari-destinations-testimonial.mp3',
      duration: '6:42',
      transcript: 'Sarah Mitchell from Safari Destinations discusses how LightSpeed rebuilt their booking platform, integrating WooCommerce with their existing tour management system. She shares how the migration process was handled with zero downtime and how the new system increased online bookings by 40% in the first quarter after launch.',
    },
  },
  {
    id: 'audio-green-earth',
    slug: 'green-earth-foundation-audio',
    title: 'A Beautiful Block Theme Our Volunteers Love',
    quote: 'We needed a website that reflected our environmental mission while being easy for volunteers to update. LightSpeed delivered a beautiful block theme that our non-technical team manages effortlessly.',
    author: 'David Okonkwo',
    role: 'Communications Lead',
    company: 'Green Earth Foundation',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    rating: 5,
    date: '2025-05-10',
    format: 'audio',
    industry: ['Non-Profit', 'Environmental'],
    serviceType: ['Design', 'Development', 'Training'],
    service: 'Block Theme Development',
    featured: false,
    audio: {
      url: 'https://example.com/audio/green-earth-testimonial.mp3',
      duration: '8:15',
      transcript: 'David Okonkwo explains how Green Earth Foundation needed an accessible, easy-to-manage website. LightSpeed built a custom block theme that allows their volunteer team to update content without technical knowledge, while maintaining WCAG AA compliance throughout.',
    },
  },
  {
    id: 'audio-urban-retail',
    slug: 'urban-retail-performance-audio',
    title: 'Page Loads Dropped from 6 Seconds to Under 2',
    quote: 'Our WooCommerce store handles 5,000+ products and LightSpeed made it lightning fast. Page load times dropped from 6 seconds to under 2 seconds.',
    author: 'Lisa Chen',
    role: 'E-commerce Manager',
    company: 'Urban Retail Co.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    rating: 5,
    date: '2025-04-25',
    format: 'audio',
    industry: ['Retail', 'E-commerce'],
    serviceType: ['WooCommerce', 'Performance', 'Security'],
    service: 'Performance Optimization',
    featured: false,
    audio: {
      url: 'https://example.com/audio/urban-retail-testimonial.mp3',
      duration: '5:30',
    },
  },

  /* ── Video Testimonials ── */
  {
    id: 'video-horizon-publishing',
    slug: 'horizon-publishing-migration-video',
    title: 'Migrating 10,000+ Articles with Zero Downtime',
    quote: 'Migrating 10,000+ articles from our legacy CMS to WordPress was daunting. LightSpeed handled the entire migration with zero downtime and preserved all our SEO equity.',
    author: 'Michael Torres',
    role: 'Head of Digital',
    company: 'Horizon Publishing',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    rating: 5,
    date: '2025-03-15',
    format: 'video',
    industry: ['Media', 'Publishing'],
    serviceType: ['Migration', 'SEO', 'Development'],
    service: 'CMS Migration',
    featured: true,
    video: {
      url: 'https://www.youtube.com/watch?v=example-horizon',
      thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop',
      duration: '5:48',
      description: 'Michael Torres explains how LightSpeed migrated over 10,000 articles from a legacy CMS to WordPress, preserving SEO rankings and achieving zero downtime during the transition.',
    },
  },
  {
    id: 'video-armd-digital',
    slug: 'armd-digital-woocommerce-video',
    title: 'How LightSpeed Rebuilt Our E-commerce Platform',
    quote: 'Their developments have managed to translate our concepts into slick, working experiences that our customers love.',
    author: 'Anthony Rodinis',
    role: 'Operations Manager',
    company: 'ARMD Digital',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    rating: 5,
    date: '2025-02-28',
    format: 'video',
    industry: ['Technology', 'Email Security'],
    serviceType: ['Development', 'WooCommerce'],
    service: 'WooCommerce New Store',
    featured: false,
    video: {
      url: 'https://www.youtube.com/watch?v=example-armd',
      thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=450&fit=crop',
      duration: '4:32',
      description: 'Anthony Rodinis shares how LightSpeed rebuilt the ARMD Digital WooCommerce store, resulting in a 40% increase in conversions and dramatically improved page load times.',
    },
  },

  /* ── Gallery/Portfolio Testimonials ── */
  {
    id: 'gallery-safari-destinations',
    slug: 'safari-destinations-portfolio',
    title: 'Safari Destinations: Complete Platform Overhaul',
    quote: 'The WooCommerce integration with our tour management system has streamlined our operations and increased bookings by 40%. Their expertise in the travel industry made them the perfect partner.',
    author: 'Sarah Mitchell',
    role: 'Digital Director',
    company: 'Safari Destinations',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    rating: 5,
    date: '2025-01-20',
    format: 'gallery',
    industry: ['Travel', 'Tourism'],
    serviceType: ['WooCommerce', 'Development', 'Migration'],
    service: 'WooCommerce Integration',
    featured: true,
    gallery: {
      images: [
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80',
        'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80',
        'https://images.unsplash.com/photo-1504598318550-17eba1008a68?w=800&q=80',
        'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80',
        'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80',
      ],
      projectTitle: 'Safari Destinations Booking Platform',
      projectSlug: 'safari-destinations',
      projectDescription: 'Complete overhaul of the Safari Destinations booking platform, integrating WooCommerce with their existing tour management system for seamless online bookings.',
      technologies: ['WordPress', 'WooCommerce', 'Wetu Importer', 'Block Theme', 'REST API'],
      results: [
        { metric: 'Booking Increase', value: '40%' },
        { metric: 'Page Load Time', value: '1.8s' },
        { metric: 'Mobile Conversions', value: '+55%' },
        { metric: 'SEO Rankings', value: 'Top 3' },
      ],
    },
  },
  {
    id: 'gallery-novatech',
    slug: 'novatech-labs-portfolio',
    title: 'NovaTech Labs: From Zero to Launch in 5 Weeks',
    quote: 'The design system they built scales beautifully as we grow. Every component is reusable and our marketing team can create new pages without developer help.',
    author: 'Priya Sharma',
    role: 'Co-Founder & CTO',
    company: 'NovaTech Labs',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400',
    rating: 5,
    date: '2024-12-10',
    format: 'gallery',
    industry: ['Technology', 'SaaS'],
    serviceType: ['Design', 'Development', 'Strategy'],
    service: 'Startup Website Package',
    featured: false,
    gallery: {
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
      ],
      projectTitle: 'NovaTech Labs Marketing Site',
      projectSlug: 'novatech-labs',
      projectDescription: 'Complete startup web presence built in 5 weeks — custom design system, marketing site with 15+ pages, blog, and documentation portal.',
      technologies: ['WordPress', 'Block Theme', 'Design System', 'ACF', 'REST API'],
      results: [
        { metric: 'Time to Launch', value: '5 weeks' },
        { metric: 'Pages Created', value: '15+' },
        { metric: 'Lighthouse Score', value: '98/100' },
        { metric: 'Content Updates/Week', value: '12' },
      ],
    },
  },
];

/* ── Helper functions ── */

export function getTestimonialBySlug(slug: string): TestimonialEntry | undefined {
  return testimonialEntries.find(t => t.slug === slug);
}

export function getTestimonialsByFormat(format: TestimonialEntry['format']): TestimonialEntry[] {
  return testimonialEntries.filter(t => t.format === format);
}

export function getFeaturedTestimonials(): TestimonialEntry[] {
  return testimonialEntries.filter(t => t.featured);
}

export function getTestimonialsByIndustry(industry: string): TestimonialEntry[] {
  return testimonialEntries.filter(t => t.industry.includes(industry));
}

export function getTestimonialsByService(service: string): TestimonialEntry[] {
  return testimonialEntries.filter(t => t.serviceType.includes(service));
}
