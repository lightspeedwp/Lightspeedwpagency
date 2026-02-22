/**
 * Taxonomies Data
 *
 * Centralized category and tag definitions for all content types.
 *
 * Includes:
 * - Blog Categories
 * - Project Taxonomies (Groups, Tags, Types)
 * - Video Taxonomies (Categories, Tags)
 * - Audio / Podcast Taxonomies (Categories)
 * - WooCommerce Product Taxonomies (Categories, Tags)
 * - Team Departments
 */

export interface TaxonomyTerm {
  id?: number;
  slug: string;
  name: string;
  count?: number;
  description?: string;
}

// ─────────────────────────────────────────────
// Blog Taxonomies
// ─────────────────────────────────────────────

export const blogCategories: TaxonomyTerm[] = [
  { id: 1, slug: 'industry-news', name: 'Industry News', count: 12 },
  { id: 2, slug: 'tutorials', name: 'Tutorials', count: 24 },
  { id: 3, slug: 'case-studies', name: 'Case Studies', count: 8 },
  { id: 4, slug: 'agency-life', name: 'Agency Life', count: 15 },
  { id: 5, slug: 'development', name: 'Development', count: 30 },
  { id: 6, slug: 'design', name: 'Design', count: 18 }
];

export const blogTags: TaxonomyTerm[] = [
  { id: 100, slug: 'wordpress', name: 'WordPress', count: 45 },
  { id: 101, slug: 'block-theme', name: 'Block Theme', count: 22 },
  { id: 102, slug: 'gutenberg', name: 'Gutenberg', count: 30 },
  { id: 103, slug: 'woocommerce', name: 'WooCommerce', count: 18 },
  { id: 104, slug: 'accessibility', name: 'Accessibility', count: 14 },
  { id: 105, slug: 'performance', name: 'Performance', count: 12 }
];

// ─────────────────────────────────────────────
// Project Taxonomies
// ─────────────────────────────────────────────

/**
 * Project Groups (Industries/Sectors)
 * Based on project_group taxonomy
 */
export const projectGroups: TaxonomyTerm[] = [
  { slug: 'ecommerce', name: 'E-commerce', count: 12 },
  { slug: 'healthcare', name: 'Healthcare & Medical', count: 8 },
  { slug: 'travel-tourism', name: 'Travel & Tourism', count: 6 },
  { slug: 'technology', name: 'Technology & SaaS', count: 10 },
  { slug: 'nonprofit', name: 'Non-Profit & Education', count: 5 },
  { slug: 'professional-services', name: 'Professional Services', count: 7 },
  { slug: 'retail', name: 'Retail & Consumer Goods', count: 6 },
  { slug: 'real-estate', name: 'Real Estate', count: 4 }
];

/**
 * Project Tags (Technologies/Features)
 * Based on project_tag taxonomy
 */
export const projectTags: TaxonomyTerm[] = [
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
  { slug: 'migration', name: 'Site Migration', count: 10 },
  { slug: 'tour-operator', name: 'Tour Operator Plugin', count: 8 },
  { slug: 'lsx-theme', name: 'LSX Theme', count: 12 },
  { slug: 'custom-plugin', name: 'Custom Plugin', count: 18 },
  { slug: 'api-integration', name: 'API Integration', count: 14 },
  { slug: 'booking-system', name: 'Booking System', count: 9 }
];

/**
 * Project Types
 * Based on project_type taxonomy
 */
export const projectTypes: TaxonomyTerm[] = [
  { slug: 'new-build', name: 'New Website Build', count: 25 },
  { slug: 'redesign', name: 'Website Redesign', count: 18 },
  { slug: 'migration', name: 'Platform Migration', count: 10 },
  { slug: 'optimization', name: 'Performance Optimization', count: 12 },
  { slug: 'maintenance', name: 'Ongoing Maintenance', count: 30 },
  { slug: 'consulting', name: 'Consulting & Strategy', count: 8 }
];

// ─────────────────────────────────────────────
// Audio / Podcast Taxonomies
// ─────────────────────────────────────────────

export const audioCategories: TaxonomyTerm[] = [
  {
    id: 200,
    slug: 'interviews',
    name: 'Interviews',
    description: 'Conversations with WordPress community leaders, developers, and industry experts.',
    count: 2
  },
  {
    id: 201,
    slug: 'tech-talk',
    name: 'Tech Talk',
    description: 'Deep dives into WordPress development, block themes, and modern web technologies.',
    count: 3
  },
  {
    id: 202,
    slug: 'business',
    name: 'Business',
    description: 'Agency life, client relationships, and building a successful WordPress business.',
    count: 1
  }
];

export const podcastCategories: TaxonomyTerm[] = [
  {
    id: 300,
    slug: 'interviews',
    name: 'Interviews',
    description: 'Conversations with WordPress community leaders, developers, and industry experts.',
    count: 2
  },
  {
    id: 301,
    slug: 'tech-talk',
    name: 'Tech Talk',
    description: 'Deep dives into WordPress development, block themes, and modern web technologies.',
    count: 3
  },
  {
    id: 302,
    slug: 'business',
    name: 'Business',
    description: 'Agency life, client relationships, and building a successful WordPress business.',
    count: 1
  }
];

// ─────────────────────────────────────────────
// Video Taxonomies
// ─────────────────────────────────────────────

export const videoCategories: TaxonomyTerm[] = [
  {
    id: 600,
    slug: 'tutorials',
    name: 'Tutorials',
    description: 'Step-by-step guides for WordPress and WooCommerce development.',
    count: 2
  },
  {
    id: 601,
    slug: 'webinars',
    name: 'Webinars',
    description: 'Live and recorded sessions with industry experts.',
    count: 1
  },
  {
    id: 602,
    slug: 'case-studies',
    name: 'Case Studies',
    description: 'Video walkthroughs of our client projects and results.',
    count: 1
  }
];

export const videoTags: TaxonomyTerm[] = [
  { id: 700, slug: 'wordpress', name: 'WordPress', count: 3 },
  { id: 701, slug: 'block-theme', name: 'Block Theme', count: 2 },
  { id: 702, slug: 'gutenberg', name: 'Gutenberg', count: 2 },
  { id: 703, slug: 'woocommerce', name: 'WooCommerce', count: 1 },
  { id: 704, slug: 'performance', name: 'Performance', count: 1 },
  { id: 705, slug: 'accessibility', name: 'Accessibility', count: 1 },
  { id: 706, slug: 'design-system', name: 'Design System', count: 1 }
];

// ─────────────────────────────────────────────
// WooCommerce Product Taxonomies
// ─────────────────────────────────────────────

export const productCategories: TaxonomyTerm[] = [
  { id: 400, slug: 'themes', name: 'Themes', count: 8 },
  { id: 401, slug: 'plugins', name: 'Plugins', count: 12 },
  { id: 402, slug: 'templates', name: 'Templates', count: 6 },
  { id: 403, slug: 'bundles', name: 'Bundles', count: 4 },
  { id: 404, slug: 'subscriptions', name: 'Subscriptions', count: 3 }
];

export const productTags: TaxonomyTerm[] = [
  { id: 500, slug: 'fse', name: 'Full Site Editing', count: 10 },
  { id: 501, slug: 'block-theme', name: 'Block Theme', count: 8 },
  { id: 502, slug: 'services', name: 'Services', count: 5 },
  { id: 503, slug: 'starter', name: 'Starter', count: 3 },
  { id: 504, slug: 'premium', name: 'Premium', count: 6 }
];

// ─────────────────────────────────────────────
// Team Taxonomies
// ─────────────────────────────────────────────

export const teamDepartments: TaxonomyTerm[] = [
  { slug: 'leadership', name: 'Leadership' },
  { slug: 'development', name: 'Development' },
  { slug: 'design', name: 'Design' },
  { slug: 'support', name: 'Support' },
  { slug: 'marketing', name: 'Marketing' }
];