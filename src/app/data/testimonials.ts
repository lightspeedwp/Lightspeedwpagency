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
  }
];