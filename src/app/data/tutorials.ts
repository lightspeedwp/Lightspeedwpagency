/**
 * Tutorials Data
 *
 * Centralized data for the Tutorials & Resources page.
 * Mirrors a future WordPress custom post type `tutorial`.
 *
 * @see /src/app/components/templates/TutorialsTemplate.tsx
 */

/* ═══════════════════════════════════════════
 * TYPES
 * ═══════════════════════════════════════════ */

/** Difficulty levels for tutorials */
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

/** Categories for filtering */
export type TutorialCategory =
  | 'All'
  | 'WordPress'
  | 'WooCommerce'
  | 'Design'
  | 'Performance'
  | 'Security'
  | 'Development';

/** Single tutorial entry */
export interface Tutorial {
  /** Unique slug identifier */
  id: string;
  /** Display title */
  title: string;
  /** Short description (1-2 sentences) */
  excerpt: string;
  /** Primary category */
  category: TutorialCategory;
  /** Difficulty level */
  difficulty: Difficulty;
  /** Estimated reading time */
  readTime: string;
  /** Featured image URL */
  image: string;
  /** Publication date (ISO 8601) */
  date: string;
}

/* ═══════════════════════════════════════════
 * CATEGORIES
 * ═══════════════════════════════════════════ */

export const tutorialCategories: TutorialCategory[] = [
  'All',
  'WordPress',
  'WooCommerce',
  'Design',
  'Performance',
  'Security',
  'Development',
];

/* ═══════════════════════════════════════════
 * TUTORIALS
 * ═══════════════════════════════════════════ */

export const tutorials: Tutorial[] = [
  {
    id: 'getting-started-block-themes',
    title: 'Getting Started with WordPress Block Themes',
    excerpt:
      'Learn the fundamentals of Full Site Editing and how to build your first block theme from scratch.',
    category: 'WordPress',
    difficulty: 'beginner',
    readTime: '12 min',
    image:
      'https://images.unsplash.com/photo-1705904506592-d8a0d5392c66?w=600&q=80&auto=format&fit=crop',
    date: '2025-02-10',
  },
  {
    id: 'custom-block-development',
    title: 'Custom Block Development with React',
    excerpt:
      'Build interactive WordPress blocks using React, the Block API, and modern JavaScript tooling.',
    category: 'Development',
    difficulty: 'advanced',
    readTime: '25 min',
    image:
      'https://images.unsplash.com/photo-1675495666589-94cdafbcfcc8?w=600&q=80&auto=format&fit=crop',
    date: '2025-02-07',
  },
  {
    id: 'design-tokens-wordpress',
    title: 'Design Tokens in WordPress theme.json',
    excerpt:
      'Implement a scalable design token system using theme.json presets, CSS variables, and block styles.',
    category: 'Design',
    difficulty: 'intermediate',
    readTime: '18 min',
    image:
      'https://images.unsplash.com/photo-1750056393331-82e69d28c9d9?w=600&q=80&auto=format&fit=crop',
    date: '2025-02-03',
  },
  {
    id: 'woocommerce-checkout-optimization',
    title: 'WooCommerce Checkout Optimization Guide',
    excerpt:
      'Reduce cart abandonment with a streamlined checkout flow, payment integration, and UX best practices.',
    category: 'WooCommerce',
    difficulty: 'intermediate',
    readTime: '20 min',
    image:
      'https://images.unsplash.com/photo-1658297063569-162817482fb6?w=600&q=80&auto=format&fit=crop',
    date: '2025-01-28',
  },
  {
    id: 'wordpress-security-hardening',
    title: 'WordPress Security Hardening Checklist',
    excerpt:
      'A comprehensive guide to securing your WordPress site with headers, 2FA, rate limiting, and monitoring.',
    category: 'Security',
    difficulty: 'intermediate',
    readTime: '15 min',
    image:
      'https://images.unsplash.com/photo-1682637275957-8e62180efd1b?w=600&q=80&auto=format&fit=crop',
    date: '2025-01-22',
  },
  {
    id: 'core-web-vitals-wordpress',
    title: 'Core Web Vitals Optimization for WordPress',
    excerpt:
      'Achieve near-perfect Lighthouse scores with lazy loading, critical CSS, caching, and CDN strategies.',
    category: 'Performance',
    difficulty: 'advanced',
    readTime: '22 min',
    image:
      'https://images.unsplash.com/photo-1653138667197-ea4d8ee6ec58?w=600&q=80&auto=format&fit=crop',
    date: '2025-01-15',
  },
  {
    id: 'wordpress-patterns-guide',
    title: 'Creating Reusable Block Patterns',
    excerpt:
      'Learn how to register, organize, and compose block patterns for a scalable WordPress pattern library.',
    category: 'WordPress',
    difficulty: 'beginner',
    readTime: '10 min',
    image:
      'https://images.unsplash.com/photo-1705904506592-d8a0d5392c66?w=600&q=80&auto=format&fit=crop',
    date: '2025-01-10',
  },
  {
    id: 'woocommerce-product-blocks',
    title: 'Building Custom WooCommerce Product Blocks',
    excerpt:
      'Extend WooCommerce with custom product display blocks, filters, and dynamic pricing components.',
    category: 'WooCommerce',
    difficulty: 'advanced',
    readTime: '30 min',
    image:
      'https://images.unsplash.com/photo-1658297063569-162817482fb6?w=600&q=80&auto=format&fit=crop',
    date: '2025-01-05',
  },
  {
    id: 'accessible-wordpress-themes',
    title: 'Building Accessible WordPress Themes',
    excerpt:
      'Ensure WCAG 2.1 AA compliance with proper semantics, keyboard navigation, focus management, and ARIA.',
    category: 'Design',
    difficulty: 'intermediate',
    readTime: '16 min',
    image:
      'https://images.unsplash.com/photo-1750056393331-82e69d28c9d9?w=600&q=80&auto=format&fit=crop',
    date: '2024-12-28',
  },
];

/* ═══════════════════════════════════════════
 * HELPERS
 * ═══════════════════════════════════════════ */

/** Get tutorials filtered by category */
export function getTutorialsByCategory(category: TutorialCategory): Tutorial[] {
  if (category === 'All') return tutorials;
  return tutorials.filter((t) => t.category === category);
}

/** Get tutorials filtered by difficulty */
export function getTutorialsByDifficulty(difficulty: Difficulty): Tutorial[] {
  return tutorials.filter((t) => t.difficulty === difficulty);
}

/** Get a single tutorial by slug */
export function getTutorialBySlug(slug: string): Tutorial | undefined {
  return tutorials.find((t) => t.id === slug);
}
