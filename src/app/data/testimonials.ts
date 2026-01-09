/**
 * Testimonials Data
 * 
 * Centralized client testimonials for the LSX Design portfolio.
 * Used in FrontPageTemplate, PortfolioSingleTemplate, and other pages.
 * 
 * In WordPress, this would be a Custom Post Type: 'testimonial'
 */

import { Testimonial } from '../components/patterns/TestimonialGrid';

// Extended Testimonial interface with industry and service type
export interface ExtendedTestimonial extends Testimonial {
  industry?: string[];
  serviceType?: string[];
  service?: string;
  avatar?: string;
}

export const testimonials: ExtendedTestimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'LSX Design transformed our outdated website into a modern, high-performing WooCommerce store. Sales increased 180% in the first quarter.',
    author: 'Marcus Henderson',
    role: 'CEO',
    company: 'EcoStore',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    industry: ['E-commerce', 'Retail'],
    serviceType: ['WooCommerce Development', 'Website Design'],
  },
  {
    id: 'testimonial-2',
    quote: 'The team\'s expertise in WordPress block themes is unmatched. They delivered a flexible, editor-friendly site that our content team loves.',
    author: 'Jennifer Lee',
    role: 'Marketing Director',
    company: 'TechVision',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    industry: ['Technology', 'B2B'],
    serviceType: ['WordPress Development', 'Block Theme Development'],
  },
  {
    id: 'testimonial-3',
    quote: 'Outstanding support and communication throughout the project. LSX Design exceeded our expectations on every level.',
    author: 'Robert Taylor',
    role: 'Founder',
    company: 'StartupHub',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    industry: ['Technology', 'Startup'],
    serviceType: ['Website Design', 'WordPress Development'],
  },
  {
    id: 'testimonial-4',
    quote: 'Our new website is not only beautiful but also accessible and fast. LSX Design truly understands modern web standards.',
    author: 'Sarah Chen',
    role: 'Product Manager',
    company: 'Wellness Co',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    industry: ['Healthcare', 'Wellness'],
    serviceType: ['Website Design', 'Accessibility Audit'],
  },
  {
    id: 'testimonial-5',
    quote: 'Working with LSX Design was seamless. They listened to our needs and delivered a solution that perfectly fits our business.',
    author: 'David Martinez',
    role: 'Operations Director',
    company: 'GlobalTech',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    industry: ['Technology', 'Enterprise'],
    serviceType: ['WordPress Development', 'Custom Development'],
  },
  {
    id: 'testimonial-6',
    quote: 'The migration to WordPress was handled flawlessly. Zero downtime, and our SEO rankings actually improved!',
    author: 'Amanda White',
    role: 'Digital Marketing Lead',
    company: 'FitLife',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    industry: ['Fitness', 'Health'],
    serviceType: ['Migration Services', 'SEO Services'],
  },
  {
    id: 'testimonial-7',
    quote: 'Best investment we\'ve made in our online presence. The ROI has been incredible thanks to LSX Design\'s strategic approach.',
    author: 'Thomas Anderson',
    role: 'Managing Director',
    company: 'Prime Services',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
    industry: ['Professional Services', 'B2B'],
    serviceType: ['Website Design', 'Digital Strategy'],
  },
  {
    id: 'testimonial-8',
    quote: 'Their attention to detail and commitment to quality is evident in every pixel. Highly recommend LSX Design!',
    author: 'Lisa Rodriguez',
    role: 'Brand Manager',
    company: 'Urban Fashion',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    industry: ['Fashion', 'Retail'],
    serviceType: ['Website Design', 'Brand Integration'],
  },
  {
    id: 'testimonial-9',
    quote: 'Fast, responsive, and easy to work with. LSX Design delivered our complex e-commerce site ahead of schedule.',
    author: 'Kevin Park',
    role: 'E-commerce Manager',
    company: 'GadgetZone',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    industry: ['E-commerce', 'Technology'],
    serviceType: ['WooCommerce Development', 'Performance Optimization'],
  },
];

// Featured testimonials (3-column layout)
export const featuredTestimonials = testimonials.slice(0, 3);

// Homepage testimonials (6-column layout)
export const homepageTestimonials = testimonials.slice(0, 6);

// All testimonials for dedicated testimonials page
export const allTestimonials = testimonials;

// Employee testimonials (for About Culture page)
export const employeeTestimonials: ExtendedTestimonial[] = [
  {
    id: 'employee-1',
    quote: 'Working at LSX Design has been transformative for my career. The culture of continuous learning and the support from leadership is unmatched.',
    author: 'Emma Watson',
    role: 'Senior WordPress Developer',
    company: 'LSX Design',
    rating: 5,
    industry: ['Technology'],
    serviceType: ['WordPress Development'],
  },
  {
    id: 'employee-2',
    quote: 'The flexibility and trust given to our team creates an environment where creativity thrives. I love the autonomy to work when I\'m most productive.',
    author: 'Michael Chen',
    role: 'UX Designer',
    company: 'LSX Design',
    rating: 5,
    industry: ['Technology'],
    serviceType: ['Website Design'],
  },
  {
    id: 'employee-3',
    quote: 'Best team I\'ve ever worked with. Everyone genuinely cares about quality work and supporting each other. Plus, the unlimited PTO policy actually works!',
    author: 'Sofia Martinez',
    role: 'Project Manager',
    company: 'LSX Design',
    rating: 5,
    industry: ['Technology'],
    serviceType: ['Project Management'],
  },
];

// Extract unique industries from testimonials
export const testimonialIndustries = Array.from(
  new Set(
    testimonials
      .flatMap(t => t.industry || [])
  )
).sort();

// Extract unique service types from testimonials
export const testimonialServiceTypes = Array.from(
  new Set(
    testimonials
      .flatMap(t => t.serviceType || [])
  )
).sort();

// Helper functions
export function getTestimonialById(id: string): ExtendedTestimonial | undefined {
  return testimonials.find(testimonial => testimonial.id === id);
}

export function getTestimonialsByCompany(company: string): ExtendedTestimonial[] {
  return testimonials.filter(testimonial => 
    testimonial.company.toLowerCase().includes(company.toLowerCase())
  );
}

export function getTestimonialsByRating(minRating: number): ExtendedTestimonial[] {
  return testimonials.filter(testimonial => 
    testimonial.rating && testimonial.rating >= minRating
  );
}

export function getTestimonialsByIndustry(industry: string): ExtendedTestimonial[] {
  return testimonials.filter(testimonial => 
    testimonial.industry?.includes(industry)
  );
}

export function getTestimonialsByServiceType(serviceType: string): ExtendedTestimonial[] {
  return testimonials.filter(testimonial => 
    testimonial.serviceType?.includes(serviceType)
  );
}