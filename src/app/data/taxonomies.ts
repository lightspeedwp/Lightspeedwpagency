/**
 * Taxonomies Data
 * 
 * Centralized source of truth for all WordPress categories and tags.
 * Used across posts, products, and custom post types to ensure consistency.
 */

export interface Term {
  id: number;
  name: string;
  slug: string;
  description?: string;
  count?: number;
  parent?: number;
}

// Blog Categories
export const blogCategories: Term[] = [
  { id: 1, name: 'Uncategorized', slug: 'uncategorized', count: 0 },
  { id: 2, name: 'Industry News', slug: 'industry-news', count: 12, description: 'Latest updates from the WordPress ecosystem.' },
  { id: 3, name: 'Tutorials', slug: 'tutorials', count: 8, description: 'Step-by-step guides for developers and site owners.' },
  { id: 4, name: 'Case Studies', slug: 'case-studies', count: 5, description: 'Deep dives into our client success stories.' },
  { id: 5, name: 'Agency Life', slug: 'agency-life', count: 3, description: 'Behind the scenes at our agency.' }
];

// Blog Tags
export const blogTags: Term[] = [
  { id: 10, name: 'WordPress', slug: 'wordpress', count: 25 },
  { id: 11, name: 'React', slug: 'react', count: 15 },
  { id: 12, name: 'Gutenberg', slug: 'gutenberg', count: 10 },
  { id: 13, name: 'WooCommerce', slug: 'woocommerce', count: 12 },
  { id: 14, name: 'Performance', slug: 'performance', count: 8 },
  { id: 15, name: 'Security', slug: 'security', count: 6 },
  { id: 16, name: 'Accessibility', slug: 'accessibility', count: 9 }
];

// Product Categories (WooCommerce)
export const productCategories: Term[] = [
  { id: 20, name: 'Themes', slug: 'themes', count: 4, description: 'Premium WordPress themes.' },
  { id: 21, name: 'Plugins', slug: 'plugins', count: 8, description: 'Functionality extensions for your site.' },
  { id: 22, name: 'Services', slug: 'services', count: 5, description: 'Professional development and design services.' },
  { id: 23, name: 'Bundles', slug: 'bundles', count: 3, description: 'Save money with product packages.' },
  { id: 24, name: 'Subscriptions', slug: 'subscriptions', count: 2, description: 'Ongoing maintenance and support plans.' }
];

// Product Tags (WooCommerce)
export const productTags: Term[] = [
  { id: 30, name: 'FSE', slug: 'fse', count: 5 },
  { id: 31, name: 'Block Theme', slug: 'block-theme', count: 4 },
  { id: 32, name: 'E-commerce', slug: 'e-commerce', count: 6 },
  { id: 33, name: 'Marketing', slug: 'marketing', count: 3 },
  { id: 34, name: 'Optimization', slug: 'optimization', count: 2 }
];

// Podcast Categories
export const audioCategories: Term[] = [
  { id: 40, name: 'Interviews', slug: 'interviews', count: 15 },
  { id: 41, name: 'Tech Talk', slug: 'tech-talk', count: 10 },
  { id: 42, name: 'Business', slug: 'business', count: 8 }
];

// Video Categories
export const videoCategories: Term[] = [
  { id: 50, name: 'Tutorials', slug: 'video-tutorials', count: 20 },
  { id: 51, name: 'Webinars', slug: 'webinars', count: 5 },
  { id: 52, name: 'Vlogs', slug: 'vlogs', count: 12 }
];
