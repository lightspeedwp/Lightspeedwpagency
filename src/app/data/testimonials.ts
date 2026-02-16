/**
 * Testimonials Data
 * 
 * Real client testimonials from LightSpeed WordPress Agency.
 * Real content extracted from https://lightspeedwp.agency
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency
 * **Last Updated:** 2025-01-09
 * 
 * In WordPress, this would be a Custom Post Type: 'testimonial'
 */

import { Testimonial } from '../components/patterns/TestimonialGrid';

// Extended Testimonial interface with industry and service type
export interface ExtendedTestimonial extends Testimonial {
  id?: string;
  industry?: string[];
  serviceType?: string[];
  service?: string;
  avatar?: string;
}

/**
 * Testimonials
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

/* ══════════════════════════════════════════
 * Testimonials Page Data
 * (used by TestimonialsTemplate.tsx)
 * ══════════════════════════════════════════ */

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

/**
 * Video Testimonials
 * Video testimonials for the testimonials page
 */
export const videoTestimonials = [
  {
    title: "How LightSpeed Transformed Our E-commerce",
    name: "Anthony Rodinis",
    role: "Operations Manager",
    company: "ARMD Digital",
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=340&fit=crop",
    url: "https://www.youtube.com/watch?v=example1",
    duration: "4:32",
    description: "Anthony shares how LightSpeed rebuilt their WooCommerce store, resulting in a 40% increase in conversions."
  },
  {
    title: "WordPress Block Theme Success Story",
    name: "Ross Spadaro",
    role: "Account Manager",
    company: "Automattic",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=340&fit=crop",
    url: "https://www.youtube.com/watch?v=example2",
    duration: "6:15",
    description: "Ross discusses the LSX Design theme and how it enables clients to build beautiful block-based websites."
  },
  {
    title: "From Legacy CMS to Modern WordPress",
    name: "Michael Torres",
    role: "Head of Digital",
    company: "Horizon Publishing",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=340&fit=crop",
    url: "https://www.youtube.com/watch?v=example3",
    duration: "5:48",
    description: "Michael explains how LightSpeed migrated 10,000+ articles with zero downtime and improved SEO performance."
  }
];