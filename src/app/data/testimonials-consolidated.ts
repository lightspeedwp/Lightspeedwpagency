/**
 * Consolidated Testimonials Data
 *
 * Unified testimonial data system combining:
 * - testimonials.ts (base client testimonials)
 * - testimonials-extended.ts (archive/single template testimonials with formats)
 * - testimonials-enhanced.ts (slider/video/featured testimonials)
 *
 * **WordPress Mapping:**
 * - Custom Post Type: 'testimonial'
 * - Custom Taxonomy: 'testimonial_category'
 * - Custom Fields: rating, video_url, audio_url, client_photo, company_logo, format, industry, service_type
 * - Post Meta: gallery images, project data, results metrics
 *
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency
 * **Last Updated:** March 5, 2026 (Consolidated from 3 files)
 */

import type { Testimonial as BaseTestimonial } from '../components/patterns/TestimonialGrid';
import type { TestimonialSlide } from '../components/patterns/TestimonialSlider';
import type { FeaturedTestimonialProps } from '../components/patterns/FeaturedTestimonial';

/* ══════════════════════════════════════════
 * TypeScript Interfaces
 * ══════════════════════════════════════════ */

/**
 * Base Testimonial Interface
 * (from testimonials.ts - minimal required fields)
 */
export interface Testimonial extends BaseTestimonial {
  id?: string;
  industry?: string[];
  serviceType?: string[];
  service?: string;
  avatar?: string;
}

/**
 * Extended Testimonial Interface
 * (from testimonials.ts - adds industry/service metadata)
 */
export interface ExtendedTestimonial extends Testimonial {}

/**
 * Testimonial Entry Interface
 * (from testimonials-extended.ts - full archive/single template support)
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

  /** Audio-specific fields */
  audio?: {
    url: string;
    duration: string;
    transcript?: string;
  };

  /** Video-specific fields */
  video?: {
    url: string;
    thumbnail: string;
    duration: string;
    description?: string;
  };

  /** Gallery-specific fields (portfolio + testimonial) */
  gallery?: {
    images: string[];
    projectTitle: string;
    projectSlug: string;
    projectDescription: string;
    technologies: string[];
    results: { metric: string; value: string }[];
  };
}

/**
 * Testimonial Category Interface
 * (from testimonials-extended.ts)
 */
export interface TestimonialCategory {
  slug: string;
  name: string;
  count: number;
}

/* ══════════════════════════════════════════
 * Base Client Testimonials
 * (from testimonials.ts)
 * ══════════════════════════════════════════ */

/**
 * Client Testimonials
 * Real testimonials from LightSpeed WordPress Agency clients
 */
export const testimonials: ExtendedTestimonial[] = [
  {
    id: 'armd-digital',
    quote: 'The team at LightSpeed was always very professional and innovative, and their expertise in coding was invaluable to our project. I highly recommend LightSpeed to any business looking for technical skills that involve custom coding as their developments have managed to translate our concepts into slick, working experiences.',
    author: 'Anthony Rodinis',
    role: 'Operations Manager',
    company: 'ARMD Digital',
    rating: 5,
    industry: ['Technology', 'Email Security'],
    serviceType: ['Development', 'Discovery', 'Support'],
    service: 'WooCommerce New Store'
  },
  {
    id: 'ross-spadaro-automattic',
    quote: 'Ashley and the team at LightSpeed are a true global leader in WooCommerce and WordPress space. Their dedication to WordPress and attention to detail around developing high-quality solutions is evident in their efforts to produce optimized products that meet the cutting edge of the technology. This enables their customers to get the most out of the platform while still allowing them to edit their site and theme in an intuitive way. By fully adopting the block theme structure, their new LSX Design theme is light-weight and enables their customers to build beautiful websites with ease and is an ideal theme to use on WooCommerce stores.',
    author: 'Ross Spadaro',
    role: 'Account Manager',
    company: 'Automattic',
    rating: 5,
    industry: ['Technology', 'WordPress'],
    serviceType: ['Theme Development', 'WooCommerce'],
    service: 'LSX Design Theme'
  },
  {
    id: 'jenna-laughton',
    quote: 'The LightSpeed team is kind, diligent & always ready to assist. We are grateful to have them as part of our extended team, supporting us in maintaining & evolving our WordPress website – which includes the overall health of our WordPress website as well as ongoing optimisation and webpage development. We would highly recommend LightSpeed to other companies looking for expert knowledge & support with their WordPress websites.',
    author: 'Jenna Laughton',
    role: 'Marketing Operations Specialist',
    company: 'Client Company',
    rating: 5,
    industry: ['General'],
    serviceType: ['Support', 'Maintenance', 'Development'],
    service: 'WordPress Support'
  },
  {
    id: 'safari-destinations',
    quote: 'LightSpeed has been instrumental in transforming our online booking platform. The WooCommerce integration with our tour management system has streamlined our operations and increased bookings by 40%. Their expertise in the travel industry made them the perfect partner.',
    author: 'Sarah Mitchell',
    role: 'Digital Director',
    company: 'Safari Destinations',
    rating: 5,
    industry: ['Travel', 'Tourism'],
    serviceType: ['WooCommerce', 'Development', 'Migration'],
    service: 'WooCommerce Integration'
  },
  {
    id: 'green-earth-org',
    quote: 'We needed a website that reflected our environmental mission while being easy for volunteers to update. LightSpeed delivered a beautiful block theme that our non-technical team manages effortlessly. The accessibility compliance was a huge bonus.',
    author: 'David Okonkwo',
    role: 'Communications Lead',
    company: 'Green Earth Foundation',
    rating: 5,
    industry: ['Non-Profit', 'Environmental'],
    serviceType: ['Design', 'Development', 'Training'],
    service: 'Block Theme Development'
  },
  {
    id: 'urban-retail',
    quote: 'Our WooCommerce store handles 5,000+ products and LightSpeed made it lightning fast. Page load times dropped from 6 seconds to under 2 seconds. The performance optimization alone has increased our conversion rate significantly.',
    author: 'Lisa Chen',
    role: 'E-commerce Manager',
    company: 'Urban Retail Co.',
    rating: 5,
    industry: ['Retail', 'E-commerce'],
    serviceType: ['WooCommerce', 'Performance', 'Security'],
    service: 'Performance Optimization'
  },
  {
    id: 'medical-clinic',
    quote: 'WCAG compliance was non-negotiable for our healthcare site. LightSpeed not only met AA standards but exceeded them. Their understanding of accessibility requirements in healthcare settings was impressive and saved us significant legal risk.',
    author: 'Dr. James Park',
    role: 'Practice Administrator',
    company: 'Meridian Health Clinic',
    rating: 5,
    industry: ['Healthcare', 'Medical'],
    serviceType: ['Design', 'Development', 'Accessibility'],
    service: 'Accessible Website Build'
  },
  {
    id: 'tech-startup',
    quote: 'As a startup, we needed to launch fast without sacrificing quality. LightSpeed delivered our entire web presence in 5 weeks — design system, marketing site, and blog. The design system they built scales beautifully as we grow.',
    author: 'Priya Sharma',
    role: 'Co-Founder & CTO',
    company: 'NovaTech Labs',
    rating: 5,
    industry: ['Technology', 'SaaS'],
    serviceType: ['Design', 'Development', 'Strategy'],
    service: 'Startup Website Package'
  },
  {
    id: 'publishing-house',
    quote: 'Migrating 10,000+ articles from our legacy CMS to WordPress was daunting. LightSpeed handled the entire migration with zero downtime and preserved all our SEO equity. Traffic actually increased after the switch.',
    author: 'Michael Torres',
    role: 'Head of Digital',
    company: 'Horizon Publishing',
    rating: 5,
    industry: ['Media', 'Publishing'],
    serviceType: ['Migration', 'SEO', 'Development'],
    service: 'CMS Migration'
  }
];

/**
 * Employee Testimonials
 * Internal testimonials from LSX Design team members
 */
export const employeeTestimonials: ExtendedTestimonial[] = [
  {
    id: 'emp-1',
    quote: 'Working at LSX Design has been the most rewarding experience of my career. The focus on continuous learning and work-life balance is real, not just a slogan.',
    author: 'Sarah Jenkins',
    role: 'Senior Developer',
    company: 'LSX Design',
    rating: 5,
    industry: ['Internal'],
    serviceType: ['Development'],
    service: 'Employee'
  },
  {
    id: 'emp-2',
    quote: 'I appreciate the autonomy and trust we are given. The remote-first culture allows me to work from where I am most productive.',
    author: 'Michael Chen',
    role: 'UX Designer',
    company: 'LSX Design',
    rating: 5,
    industry: ['Internal'],
    serviceType: ['Design'],
    service: 'Employee'
  },
  {
    id: 'emp-3',
    quote: 'The team support is incredible. Even though we are remote, I feel more connected to my colleagues here than I did in an office.',
    author: 'Elena Rodriguez',
    role: 'Project Manager',
    company: 'LSX Design',
    rating: 5,
    industry: ['Internal'],
    serviceType: ['Management'],
    service: 'Employee'
  }
];

/**
 * Testimonial Stats
 * Key metrics shown in the stats section of the testimonials page
 */
export const testimonialStats = [
  { number: "500+", label: "Happy Clients" },
  { number: "98%", label: "Satisfaction Rate" },
  { number: "30+", label: "Countries Served" },
  { number: "10+", label: "Years Experience" }
];

/* ══════════════════════════════════════════
 * Extended Testimonials (Archive/Single)
 * (from testimonials-extended.ts)
 * ══════════════════════════════════════════ */

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
 * Full testimonial entries with format support (standard, audio, video, gallery)
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

/* ══════════════════════════════════════════
 * Enhanced Testimonials (Slider/Video/Featured)
 * (from testimonials-enhanced.ts)
 * ══════════════════════════════════════════ */

/**
 * Video Testimonials
 * High-impact client testimonials with video content
 */
export const videoTestimonials: TestimonialSlide[] = [
  {
    id: 'armd-video',
    quote:
      'Working with LightSpeed was a game-changer. They delivered our e-commerce platform ahead of schedule with exceptional quality.',
    author: {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'ARMD Digital',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    },
    rating: 5,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoThumbnail:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
  },
  {
    id: 'techhub-video',
    quote:
      'The team at LightSpeed transformed our vision into reality. Their expertise in WordPress and WooCommerce is unmatched.',
    author: {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'TechHub Solutions',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    },
    rating: 5,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoThumbnail:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
  },
];

/**
 * Slider Testimonials
 * Text-based testimonials for carousel/slider display
 */
export const sliderTestimonials: TestimonialSlide[] = [
  {
    id: 'ecommerce-pro',
    quote:
      'LightSpeed built our entire e-commerce platform from scratch. The site is fast, beautiful, and converts like crazy. Cart abandonment dropped by 64%!',
    author: {
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'EcommercePro',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    },
    rating: 5,
  },
  {
    id: 'digital-agency',
    quote:
      'Best agency we\'ve worked with, hands down. They delivered our WordPress site in 4 weeks with full WCAG 2.1 AA compliance. Incredible quality.',
    author: {
      name: 'David Thompson',
      role: 'Marketing Director',
      company: 'Digital Agency Co.',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
    },
    rating: 5,
  },
  {
    id: 'saas-startup',
    quote:
      'Our page load times went from 4.2s to 1.5s. That\'s a 65% improvement! Mobile conversions are up 82%. LightSpeed knows performance optimization.',
    author: {
      name: 'Lisa Chang',
      role: 'Product Manager',
      company: 'SaaS Startup Inc.',
      photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200',
    },
    rating: 5,
  },
  {
    id: 'enterprise-corp',
    quote:
      'They migrated our entire enterprise site with zero downtime. Custom plugin development was flawless. Our team is thrilled with the results.',
    author: {
      name: 'Robert Anderson',
      role: 'IT Director',
      company: 'Enterprise Corp',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    },
    rating: 5,
  },
  {
    id: 'creative-studio',
    quote:
      'The design system they built is incredible. Our content editors love the block editor. Everything is so intuitive and flexible.',
    author: {
      name: 'Jessica Martinez',
      role: 'Creative Director',
      company: 'Creative Studio',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
    },
    rating: 5,
  },
];

/**
 * Featured Testimonial
 * Large, prominent testimonial for hero sections
 */
export const featuredTestimonial: Omit<FeaturedTestimonialProps, 'variant'> = {
  quote:
    'LightSpeed delivered what three other agencies couldn\'t. They built our complex WooCommerce subscription platform in just 4 months with exceptional quality, performance, and accessibility. True WordPress experts.',
  author: {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    company: 'ARMD Digital',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    companyLogo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120',
  },
  rating: 5,
  showQuoteIcon: true,
};

/**
 * Homepage Hero Testimonials
 * Short, impactful testimonials for homepage hero section
 */
export const heroTestimonials: TestimonialSlide[] = [
  {
    id: 'hero-1',
    quote:
      'Best WordPress agency we\'ve ever worked with. 5-star service, 5-star results.',
    author: {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'TechHub Solutions',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    },
    rating: 5,
  },
  {
    id: 'hero-2',
    quote:
      'Our site is 65% faster and conversions are up 82%. Incredible results!',
    author: {
      name: 'Lisa Chang',
      role: 'Product Manager',
      company: 'SaaS Startup',
      photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200',
    },
    rating: 5,
  },
  {
    id: 'hero-3',
    quote:
      'They delivered our e-commerce platform in 4 weeks. Flawless execution.',
    author: {
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'EcommercePro',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    },
    rating: 5,
  },
];

/**
 * Service-Specific Testimonials
 */
export const wordpressDevTestimonials: TestimonialSlide[] = [
  {
    id: 'wp-dev-1',
    quote:
      'Their WordPress development skills are exceptional. Custom block theme, gutenberg blocks, performance optimization - all perfect.',
    author: {
      name: 'David Thompson',
      role: 'Marketing Director',
      company: 'Digital Agency',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
    },
    rating: 5,
  },
  {
    id: 'wp-dev-2',
    quote:
      'Block theme development done right. Our editors love the flexibility and the site is lightning fast.',
    author: {
      name: 'Jessica Martinez',
      role: 'Creative Director',
      company: 'Creative Studio',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
    },
    rating: 5,
  },
];

export const woocommerceTestimonials: TestimonialSlide[] = [
  {
    id: 'woo-1',
    quote:
      'Our WooCommerce store is now a conversion machine. Cart abandonment dropped 64%, checkout flow is seamless.',
    author: {
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'EcommercePro',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    },
    rating: 5,
  },
  {
    id: 'woo-2',
    quote:
      'Complex subscription management made simple. Payment gateways integrated perfectly. Best WooCommerce developers.',
    author: {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'ARMD Digital',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    },
    rating: 5,
  },
];

export const performanceTestimonials: TestimonialSlide[] = [
  {
    id: 'perf-1',
    quote:
      'Page load times: 4.2s → 1.5s. That\'s a 65% improvement! Mobile conversions up 82%. Performance wizards.',
    author: {
      name: 'Lisa Chang',
      role: 'Product Manager',
      company: 'SaaS Startup',
      photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200',
    },
    rating: 5,
  },
  {
    id: 'perf-2',
    quote:
      'Lighthouse scores: 95+ across all metrics. Lazy loading, critical CSS, image optimization - all handled expertly.',
    author: {
      name: 'Robert Anderson',
      role: 'IT Director',
      company: 'Enterprise Corp',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    },
    rating: 5,
  },
];

/**
 * All Testimonials Combined
 * For general use across the site
 */
export const allTestimonials: TestimonialSlide[] = [
  ...videoTestimonials,
  ...sliderTestimonials,
  ...wordpressDevTestimonials,
  ...woocommerceTestimonials,
  ...performanceTestimonials,
];

/* ══════════════════════════════════════════
 * Helper Functions
 * ══════════════════════════════════════════ */

/**
 * Get testimonial entry by slug
 * (from testimonials-extended.ts)
 */
export function getTestimonialBySlug(slug: string): TestimonialEntry | undefined {
  return testimonialEntries.find(t => t.slug === slug);
}

/**
 * Get testimonial entries by format
 * (from testimonials-extended.ts)
 */
export function getTestimonialsByFormat(format: TestimonialEntry['format']): TestimonialEntry[] {
  return testimonialEntries.filter(t => t.format === format);
}

/**
 * Get featured testimonial entries
 * (from testimonials-extended.ts)
 */
export function getFeaturedTestimonials(): TestimonialEntry[] {
  return testimonialEntries.filter(t => t.featured);
}

/**
 * Get testimonial entries by industry
 * (from testimonials-extended.ts)
 */
export function getTestimonialsByIndustry(industry: string): TestimonialEntry[] {
  return testimonialEntries.filter(t => t.industry.includes(industry));
}

/**
 * Get testimonial entries by service type
 * (from testimonials-extended.ts)
 */
export function getTestimonialsByService(service: string): TestimonialEntry[] {
  return testimonialEntries.filter(t => t.serviceType.includes(service));
}

/**
 * Get random testimonial from a collection
 * (from testimonials-enhanced.ts)
 */
export const getRandomTestimonial = (
  testimonials: TestimonialSlide[]
): TestimonialSlide => {
  const randomIndex = Math.floor(Math.random() * testimonials.length);
  return testimonials[randomIndex];
};

/**
 * Get testimonials by minimum rating
 * (from testimonials-enhanced.ts)
 */
export const getTestimonialsByRating = (
  testimonials: TestimonialSlide[],
  minRating: number
): TestimonialSlide[] => {
  return testimonials.filter((t) => t.rating >= minRating);
};
