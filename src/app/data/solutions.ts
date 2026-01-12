/**
 * Solutions Data
 * 
 * Centralized solution offerings data for LSX Design.
 * Solutions are comprehensive service packages for specific business needs.
 * 
 * **WordPress Mapping:**
 * - Custom Post Type: 'solution' with custom fields
 * - Taxonomies: 'solution_category', 'industry'
 * - Related to 'service' post type
 * 
 * @see {@link /guidelines/data/solutions.md}
 */

import { LucideIcon, Palette, Code, ShoppingCart } from 'lucide-react';

/**
 * Solution Category Types
 */
export type SolutionCategory = 'agency' | 'cms' | 'ecommerce';

/**
 * Solution Interface
 * 
 * Defines the structure for a solution offering.
 * Solutions are comprehensive packages combining multiple services.
 * 
 * @property {string} id - Unique identifier
 * @property {string} name - Solution name
 * @property {string} slug - URL-friendly slug
 * @property {string} tagline - Short one-liner
 * @property {string} description - Detailed description
 * @property {SolutionCategory} category - Solution category
 * @property {LucideIcon} icon - Icon component
 * @property {string[]} features - Key features list
 * @property {string[]} services - Included services (references service slugs)
 * @property {SolutionPricing} pricing - Pricing information
 * @property {string[]} benefits - Solution benefits
 * @property {string[]} deliverables - What clients receive
 * @property {string[]} industries - Target industries
 * @property {string} buttonText - CTA button text
 * @property {string} buttonPage - CTA destination
 * @property {boolean} featured - Featured solution
 */
export interface Solution {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: SolutionCategory;
  icon: LucideIcon;
  features: string[];
  services: string[]; // Service slugs
  pricing: SolutionPricing;
  benefits: string[];
  deliverables: string[];
  industries: string[];
  buttonText: string;
  buttonPage: string;
  featured?: boolean;
}

/**
 * Solution Pricing Interface
 * 
 * @property {string} starting - Starting price
 * @property {string} typical - Typical project price
 * @property {string} timeframe - Typical timeframe
 * @property {string} model - Pricing model
 */
export interface SolutionPricing {
  starting: string;
  typical: string;
  timeframe: string;
  model: string;
}

/**
 * All Solutions (3 comprehensive packages)
 */
export const solutions: Solution[] = [
  // LSX Design Complete Solution
  {
    id: 'lsx-design-complete',
    name: 'LSX Design Complete',
    slug: 'lsx-design',
    tagline: 'Full-service WordPress & WooCommerce agency solutions',
    description: 'Our complete agency solution combines design, development, strategy, and ongoing support for businesses that need a comprehensive digital presence. From initial discovery to post-launch maintenance, we handle everything.',
    category: 'agency',
    icon: Palette,
    features: [
      'Complete design system & brand integration',
      'Custom WordPress block theme development',
      'Full Site Editing (FSE) setup',
      'Performance optimization (Core Web Vitals)',
      'WCAG 2.1 AA accessibility compliance',
      'SEO optimization & content strategy',
      'Security hardening & monitoring',
      '3 months post-launch support included',
      'Training & documentation',
      'Analytics & conversion tracking setup',
    ],
    services: [
      'web-design',
      'wordpress-development',
      'discovery-strategy',
      'content-strategy',
      'seo-optimization',
      'security-hardening',
      'website-maintenance',
    ],
    pricing: {
      starting: '$25,000',
      typical: '$35,000 - $60,000',
      timeframe: '12-16 weeks',
      model: 'Fixed-price project',
    },
    benefits: [
      'Single point of contact for all services',
      'Integrated team with consistent communication',
      'Comprehensive documentation & training',
      'Post-launch support included',
      'Faster project delivery (coordinated workflow)',
      'Better ROI (no duplicate work across vendors)',
      'Long-term partnership potential',
      'Scalable architecture for future growth',
    ],
    deliverables: [
      'Custom WordPress block theme',
      'Complete design system documentation',
      'Content management system setup',
      'SEO-optimized content structure',
      'Security hardening implementation',
      'Performance optimization',
      'Analytics & tracking setup',
      'Training materials & documentation',
      'Post-launch support (3 months)',
      'Source code & design files',
    ],
    industries: [
      'Professional Services',
      'SaaS Companies',
      'Nonprofit Organizations',
      'Healthcare',
      'Education',
      'Real Estate',
      'Financial Services',
    ],
    buttonText: 'Get Started',
    buttonPage: 'contact',
    featured: true,
  },

  // WordPress Solution
  {
    id: 'wordpress-solution',
    name: 'WordPress Core Solution',
    slug: 'wordpress-solution',
    tagline: 'Modern WordPress websites with Full Site Editing',
    description: 'Focused WordPress solution for businesses that need a content-driven website with modern block theme architecture. Perfect for blogs, corporate sites, and content-heavy platforms.',
    category: 'cms',
    icon: Code,
    features: [
      'Custom block theme development',
      'Full Site Editing (FSE) setup',
      'Block pattern library creation',
      'theme.json configuration',
      'Responsive design (mobile-first)',
      'Performance optimization',
      'Basic SEO setup',
      'Content migration (if needed)',
      'Editor training',
      '1 month post-launch support',
    ],
    services: [
      'wordpress-development',
      'web-design',
      'content-strategy',
      'website-migration',
    ],
    pricing: {
      starting: '$12,000',
      typical: '$15,000 - $25,000',
      timeframe: '6-8 weeks',
      model: 'Fixed-price project',
    },
    benefits: [
      'Modern FSE architecture (future-proof)',
      'Easy content editing with Gutenberg',
      'No page builder dependencies',
      'Fast performance (optimized blocks)',
      'Accessible (WCAG 2.1 AA)',
      'Mobile-responsive by default',
      'Regular WordPress core updates supported',
      'Scalable for future growth',
    ],
    deliverables: [
      'Custom WordPress block theme',
      'Block pattern library',
      'theme.json configuration',
      'Responsive design files',
      'Content structure setup',
      'Editor training documentation',
      'Performance optimization',
      '1 month support',
      'Source code',
    ],
    industries: [
      'Content Publishers',
      'Blogs & Media',
      'Corporate Websites',
      'Marketing Agencies',
      'Consulting Firms',
      'Nonprofit Organizations',
    ],
    buttonText: 'Learn More',
    buttonPage: 'wordpress-solution',
    featured: false,
  },

  // WooCommerce Solution
  {
    id: 'woocommerce-solution',
    name: 'WooCommerce E-commerce Solution',
    slug: 'woocommerce-solution',
    tagline: 'High-performance online stores that convert',
    description: 'Complete e-commerce solution powered by WooCommerce. From product catalog setup to payment gateway integration, we build online stores that sell.',
    category: 'ecommerce',
    icon: ShoppingCart,
    features: [
      'Custom WooCommerce store setup',
      'Product catalog & taxonomy structure',
      'Payment gateway integration (Stripe, PayPal, etc.)',
      'Shipping calculator & tax setup',
      'Mobile-optimized checkout',
      'Performance optimization for products',
      'Cart abandonment tracking',
      'Analytics & conversion tracking',
      'Inventory management setup',
      '2 months post-launch support',
    ],
    services: [
      'ecommerce-development',
      'web-design',
      'seo-optimization',
      'security-hardening',
      'website-maintenance',
    ],
    pricing: {
      starting: '$18,000',
      typical: '$25,000 - $45,000',
      timeframe: '8-12 weeks',
      model: 'Fixed-price project',
    },
    benefits: [
      'WooCommerce expertise (not generic WordPress)',
      'Optimized for conversions',
      'Secure payment processing',
      'Mobile-friendly checkout (reduce cart abandonment)',
      'Performance optimized (fast product pages)',
      'Inventory management included',
      'Marketing integrations (email, analytics)',
      'Scalable (grow from 10 to 10,000 products)',
    ],
    deliverables: [
      'Custom WooCommerce store',
      'Product catalog setup',
      'Payment gateway integration',
      'Shipping & tax configuration',
      'Mobile-optimized checkout',
      'Analytics tracking setup',
      'Security implementation',
      'Store management training',
      '2 months support',
      'Source code',
    ],
    industries: [
      'Retail',
      'Fashion & Apparel',
      'Health & Wellness',
      'Food & Beverage',
      'Electronics',
      'Home & Garden',
      'Subscription Services',
    ],
    buttonText: 'Build Your Store',
    buttonPage: 'woocommerce-solution',
    featured: true,
  },
];

/**
 * Get solution by slug
 * 
 * @param {string} slug - Solution slug
 * @returns {Solution | undefined} Solution or undefined
 * 
 * @example
 * const solution = getSolutionBySlug('lsx-design');
 */
export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find(s => s.slug === slug);
}

/**
 * Get solutions by category
 * 
 * @param {SolutionCategory} category - Solution category
 * @returns {Solution[]} Array of solutions
 * 
 * @example
 * const agencySolutions = getSolutionsByCategory('agency');
 */
export function getSolutionsByCategory(category: SolutionCategory): Solution[] {
  return solutions.filter(s => s.category === category);
}

/**
 * Get featured solutions
 * 
 * @returns {Solution[]} Array of featured solutions
 * 
 * @example
 * const featured = getFeaturedSolutions();
 */
export function getFeaturedSolutions(): Solution[] {
  return solutions.filter(s => s.featured === true);
}

/**
 * Get solutions by industry
 * 
 * @param {string} industry - Industry name
 * @returns {Solution[]} Array of solutions
 * 
 * @example
 * const retailSolutions = getSolutionsByIndustry('Retail');
 */
export function getSolutionsByIndustry(industry: string): Solution[] {
  return solutions.filter(s => s.industries.includes(industry));
}

/**
 * LSX Design Stats Interface
 * 
 * Statistics for the LSX Design solution page.
 */
export interface LSXDesignStat {
  number: string;
  label: string;
}

/**
 * LSX Design Solution Statistics
 * 
 * Key metrics showcasing LSX Design theme performance.
 */
export const lsxDesignStats: LSXDesignStat[] = [
  { number: '3x', label: 'Faster than page builders' },
  { number: '100%', label: 'WCAG 2.1 AA compliant' },
  { number: '50+', label: 'Block patterns included' },
  { number: '24/7', label: 'Priority support' }
];

/**
 * Solution categories with display information
 */
export const solutionCategories = [
  {
    slug: 'agency',
    name: 'Full Agency',
    description: 'Complete agency solutions with all services included',
    count: solutions.filter(s => s.category === 'agency').length,
  },
  {
    slug: 'cms',
    name: 'WordPress CMS',
    description: 'Content management solutions powered by WordPress',
    count: solutions.filter(s => s.category === 'cms').length,
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce',
    description: 'Online store solutions powered by WooCommerce',
    count: solutions.filter(s => s.category === 'ecommerce').length,
  },
] as const;