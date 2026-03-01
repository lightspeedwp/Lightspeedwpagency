/**
 * Enhanced Testimonials Data
 *
 * Comprehensive testimonial data with video support,
 * ratings, and detailed client information
 *
 * **WordPress Mapping:**
 * - Custom post type: testimonial
 * - Custom fields: rating, video_url, client_photo, company_logo
 * - Taxonomy: testimonial_type (text, video, featured)
 */

import type { TestimonialSlide } from '../components/patterns/TestimonialSlider';
import type { FeaturedTestimonialProps } from '../components/patterns/FeaturedTestimonial';

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

/**
 * Random Testimonial Helper
 * Get a random testimonial from a collection
 */
export const getRandomTestimonial = (
  testimonials: TestimonialSlide[]
): TestimonialSlide => {
  const randomIndex = Math.floor(Math.random() * testimonials.length);
  return testimonials[randomIndex];
};

/**
 * Get Testimonials by Rating
 * Filter testimonials by minimum rating
 */
export const getTestimonialsByRating = (
  testimonials: TestimonialSlide[],
  minRating: number
): TestimonialSlide[] => {
  return testimonials.filter((t) => t.rating >= minRating);
};
