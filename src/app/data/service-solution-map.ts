/**
 * Service-Solution Mapping Data
 * 
 * Maps which services are included in which solutions.
 * Used for "Included in these solutions" sections on service pages.
 * 
 * **CRITICAL: 100% Design System Compliance**
 * - All UI uses CSS variables only
 * - Fonts: var(--font-primary), var(--font-secondary)
 * - Colors: var(--primary), var(--foreground), var(--background), etc.
 * 
 * @see /src/styles/patterns/included-solutions.css
 */

import { Package, ShoppingCart, Airplane, Globe, FileText, Newspaper } from '@phosphor-icons/react';
import type { UniversalIcon } from '../utils/icon-map';

/**
 * Solution Reference Interface
 * 
 * Lightweight solution reference for service pages
 */
export interface SolutionReference {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  icon: UniversalIcon;
  featured?: boolean;
  pricing?: {
    from: string;
    label: string;
  };
}

/**
 * Service-Solution Map Interface
 */
export interface ServiceSolutionMap {
  serviceSlug: string;
  solutions: SolutionReference[];
}

/**
 * All Solution References
 * 
 * Centralized list of all available solutions with lightweight data
 */
export const allSolutions: SolutionReference[] = [
  {
    id: 'wordpress-redesign',
    slug: 'wordpress-redesign',
    title: 'WordPress Website Redesign',
    tagline: 'Transform your WordPress site into a modern, high-performance digital experience',
    icon: Globe,
    featured: true,
    pricing: {
      from: '$5,000',
      label: 'Starting from',
    },
  },
  {
    id: 'woocommerce-redesign',
    slug: 'woocommerce-redesign',
    title: 'WooCommerce Store Redesign',
    tagline: 'Boost conversions with a modern, fast, and user-friendly e-commerce experience',
    icon: ShoppingCart,
    featured: true,
    pricing: {
      from: '$8,000',
      label: 'Starting from',
    },
  },
  {
    id: 'lsx-design',
    slug: 'lsx-design',
    title: 'LSX Design Framework',
    tagline: 'Enterprise-grade design system and component library for scalable WordPress sites',
    icon: Package,
  },
  {
    id: 'publishers-solution',
    slug: 'publishers-solution',
    title: 'Publishers & Media Solution',
    tagline: 'Content-first WordPress systems for publishers, magazines, and media companies',
    icon: Newspaper,
  },
];

/**
 * Service-Solution Mapping
 * 
 * Maps each service to the solutions it's included in
 */
export const serviceSolutionMap: ServiceSolutionMap[] = [
  // Design Service → All redesign solutions
  {
    serviceSlug: 'design',
    solutions: [
      allSolutions.find(s => s.slug === 'wordpress-redesign')!,
      allSolutions.find(s => s.slug === 'woocommerce-redesign')!,
    ],
  },
  
  // Development Service → All solutions (core capability)
  {
    serviceSlug: 'development',
    solutions: [
      allSolutions.find(s => s.slug === 'wordpress-redesign')!,
      allSolutions.find(s => s.slug === 'woocommerce-redesign')!,
      allSolutions.find(s => s.slug === 'lsx-design')!,
      allSolutions.find(s => s.slug === 'publishers-solution')!,
    ],
  },
  
  // Performance Service → All solutions
  {
    serviceSlug: 'performance',
    solutions: [
      allSolutions.find(s => s.slug === 'wordpress-redesign')!,
      allSolutions.find(s => s.slug === 'woocommerce-redesign')!,
      allSolutions.find(s => s.slug === 'lsx-design')!,
      allSolutions.find(s => s.slug === 'publishers-solution')!,
    ],
  },
  
  // SEO Service → Content-focused solutions
  {
    serviceSlug: 'seo',
    solutions: [
      allSolutions.find(s => s.slug === 'wordpress-redesign')!,
      allSolutions.find(s => s.slug === 'woocommerce-redesign')!,
      allSolutions.find(s => s.slug === 'publishers-solution')!,
    ],
  },
  
  // Accessibility Service → All customer-facing solutions
  {
    serviceSlug: 'accessibility',
    solutions: [
      allSolutions.find(s => s.slug === 'wordpress-redesign')!,
      allSolutions.find(s => s.slug === 'woocommerce-redesign')!,
      allSolutions.find(s => s.slug === 'publishers-solution')!,
    ],
  },
  
  // Security Service → All solutions
  {
    serviceSlug: 'security',
    solutions: [
      allSolutions.find(s => s.slug === 'wordpress-redesign')!,
      allSolutions.find(s => s.slug === 'woocommerce-redesign')!,
      allSolutions.find(s => s.slug === 'lsx-design')!,
    ],
  },
  
  // Support & Maintenance → All solutions
  {
    serviceSlug: 'support',
    solutions: [
      allSolutions.find(s => s.slug === 'wordpress-redesign')!,
      allSolutions.find(s => s.slug === 'woocommerce-redesign')!,
      allSolutions.find(s => s.slug === 'lsx-design')!,
      allSolutions.find(s => s.slug === 'publishers-solution')!,
    ],
  },
  
  // Migrations Service → Redesign solutions
  {
    serviceSlug: 'migrations',
    solutions: [
      allSolutions.find(s => s.slug === 'wordpress-redesign')!,
      allSolutions.find(s => s.slug === 'woocommerce-redesign')!,
    ],
  },
  
  // Content Strategy → Content-focused solutions
  {
    serviceSlug: 'content',
    solutions: [
      allSolutions.find(s => s.slug === 'wordpress-redesign')!,
      allSolutions.find(s => s.slug === 'publishers-solution')!,
    ],
  },
  
  // Discovery Service → All major solutions
  {
    serviceSlug: 'discovery',
    solutions: [
      allSolutions.find(s => s.slug === 'wordpress-redesign')!,
      allSolutions.find(s => s.slug === 'woocommerce-redesign')!,
    ],
  },
  
  // Newsletter Marketing → Content & e-commerce
  {
    serviceSlug: 'newsletter',
    solutions: [
      allSolutions.find(s => s.slug === 'woocommerce-redesign')!,
      allSolutions.find(s => s.slug === 'publishers-solution')!,
    ],
  },
  
  // AI Engine Optimization → Advanced solutions
  {
    serviceSlug: 'ai-engine',
    solutions: [
      allSolutions.find(s => s.slug === 'wordpress-redesign')!,
      allSolutions.find(s => s.slug === 'woocommerce-redesign')!,
      allSolutions.find(s => s.slug === 'publishers-solution')!,
    ],
  },
  
  // Answer Engine Optimization → SEO-focused solutions
  {
    serviceSlug: 'answer-engine',
    solutions: [
      allSolutions.find(s => s.slug === 'wordpress-redesign')!,
      allSolutions.find(s => s.slug === 'publishers-solution')!,
    ],
  },
];

/**
 * Get Solutions for a Service
 * 
 * Returns all solutions that include a specific service
 * 
 * @param serviceSlug - Service slug to look up
 * @returns Array of solution references
 * 
 * @example
 * const solutions = getSolutionsForService('design');
 * // Returns: [WordPress Redesign, WooCommerce Redesign, Tour Operator Design]
 */
export function getSolutionsForService(serviceSlug: string): SolutionReference[] {
  const mapping = serviceSolutionMap.find(m => m.serviceSlug === serviceSlug);
  return mapping?.solutions || [];
}

/**
 * Get Featured Solutions for a Service
 * 
 * Returns only featured solutions for a specific service
 * 
 * @param serviceSlug - Service slug to look up
 * @returns Array of featured solution references
 * 
 * @example
 * const featured = getFeaturedSolutionsForService('design');
 * // Returns: Only solutions with featured: true
 */
export function getFeaturedSolutionsForService(serviceSlug: string): SolutionReference[] {
  const solutions = getSolutionsForService(serviceSlug);
  return solutions.filter(s => s.featured);
}

/**
 * Check if a Service is in a Solution
 * 
 * Checks if a specific service is included in a specific solution
 * 
 * @param serviceSlug - Service slug
 * @param solutionSlug - Solution slug
 * @returns true if service is in solution
 * 
 * @example
 * const isIncluded = isServiceInSolution('design', 'wordpress-redesign');
 * // Returns: true
 */
export function isServiceInSolution(serviceSlug: string, solutionSlug: string): boolean {
  const solutions = getSolutionsForService(serviceSlug);
  return solutions.some(s => s.slug === solutionSlug);
}

/**
 * Get Solution Count for Service
 * 
 * Returns the number of solutions that include a service
 * 
 * @param serviceSlug - Service slug
 * @returns Number of solutions
 * 
 * @example
 * const count = getSolutionCountForService('development');
 * // Returns: 6 (development is in all solutions)
 */
export function getSolutionCountForService(serviceSlug: string): number {
  return getSolutionsForService(serviceSlug).length;
}