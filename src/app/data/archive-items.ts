/**
 * Archive Items Mock Data
 * 
 * Centralized data for all archive templates.
 * Mirrors WordPress archive queries and post types.
 * 
 * **WordPress Mapping:**
 * - General archive: Mixed content types
 * - Portfolio archive: Custom post type 'portfolio'
 * - Category/Tag archives: Posts filtered by taxonomy
 * - Author archives: Posts filtered by author
 * - Date archives: Posts filtered by date
 * 
 * **Data Sources:**
 * - Blog posts: `/src/app/data/blog-posts.ts`
 * - Portfolio projects: `/src/app/data/portfolio-projects.ts`
 * - Taxonomies: Categories, tags, industries
 * 
 * @see {@link /guidelines/patterns/CardGrid.md}
 */

/**
 * Generic archive item interface
 * Supports multiple content types (posts, portfolio, pages)
 */
export interface ArchiveItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  imageUrl: string;
  href: string;
  author: string;
  date: string;
  contentType?: 'post' | 'portfolio' | 'page';
}

/**
 * Portfolio archive item interface
 * Extended properties for portfolio projects
 */
export interface PortfolioArchiveItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  client: string;
  category: string;
  imageUrl: string;
  tags: string[];
  industry?: string;
  completionDate?: string;
}

/**
 * General Archive Items
 * Mixed content for default archive template
 * 
 * **Usage:**
 * ```tsx
 * import { generalArchiveItems } from '../../data/archive-items';
 * ```
 */
export const generalArchiveItems: ArchiveItem[] = [
  {
    id: '1',
    slug: 'wordpress-block-theme-best-practices',
    title: 'WordPress Block Theme Best Practices for 2025',
    excerpt: 'Learn the latest best practices for building modern WordPress block themes with Full Site Editing capabilities.',
    category: 'WordPress Development',
    tags: ['Block Themes', 'FSE', 'Best Practices'],
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    href: '/blog/wordpress-block-theme-best-practices',
    author: 'Sarah Mitchell',
    date: 'Jan 15, 2025',
    contentType: 'post'
  },
  {
    id: '2',
    slug: 'woocommerce-performance-optimization',
    title: 'WooCommerce Performance Optimization Guide',
    excerpt: 'Speed up your WooCommerce store with proven optimization techniques for faster load times and better conversions.',
    category: 'WooCommerce',
    tags: ['Performance', 'WooCommerce', 'Optimization'],
    imageUrl: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800',
    href: '/blog/woocommerce-performance-optimization',
    author: 'Marcus Johnson',
    date: 'Jan 12, 2025',
    contentType: 'post'
  },
  {
    id: '3',
    slug: 'accessibility-wcag-compliance',
    title: 'Website Accessibility: Complete WCAG 2.1 Compliance',
    excerpt: 'Ensure your website meets WCAG 2.1 AA standards with this comprehensive accessibility compliance guide.',
    category: 'Accessibility',
    tags: ['WCAG', 'Accessibility', 'Compliance'],
    imageUrl: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800',
    href: '/blog/accessibility-wcag-compliance',
    author: 'Emma Rodriguez',
    date: 'Jan 10, 2025',
    contentType: 'post'
  },
  {
    id: '4',
    slug: 'wordpress-security-hardening',
    title: 'WordPress Security Hardening: Essential Steps',
    excerpt: 'Protect your WordPress site from common vulnerabilities with these essential security hardening techniques.',
    category: 'Security',
    tags: ['Security', 'WordPress', 'Best Practices'],
    imageUrl: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
    href: '/blog/wordpress-security-hardening',
    author: 'David Chen',
    date: 'Jan 8, 2025',
    contentType: 'post'
  },
  {
    id: '5',
    slug: 'headless-wordpress-jamstack',
    title: 'Headless WordPress with Jamstack Architecture',
    excerpt: 'Build lightning-fast websites by decoupling WordPress as a headless CMS with modern frontend frameworks.',
    category: 'Development',
    tags: ['Headless', 'Jamstack', 'React'],
    imageUrl: 'https://images.unsplash.com/photo-1535338454770-11f3ebb6e1a9?w=800',
    href: '/blog/headless-wordpress-jamstack',
    author: 'James Wilson',
    date: 'Jan 5, 2025',
    contentType: 'post'
  },
  {
    id: '6',
    slug: 'wordpress-multisite-management',
    title: 'WordPress Multisite Network Management',
    excerpt: 'Manage large WordPress multisite networks efficiently with proven strategies and automation tools.',
    category: 'WordPress',
    tags: ['Multisite', 'Management', 'Enterprise'],
    imageUrl: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
    href: '/blog/wordpress-multisite-management',
    author: 'Sarah Mitchell',
    date: 'Jan 3, 2025',
    contentType: 'post'
  },
  {
    id: '7',
    slug: 'woocommerce-payment-gateways',
    title: 'WooCommerce Payment Gateway Integration Guide',
    excerpt: 'Set up and optimize payment gateways for your WooCommerce store with this comprehensive integration guide.',
    category: 'WooCommerce',
    tags: ['Payments', 'WooCommerce', 'Integration'],
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    href: '/blog/woocommerce-payment-gateways',
    author: 'Marcus Johnson',
    date: 'Jan 1, 2025',
    contentType: 'post'
  },
  {
    id: '8',
    slug: 'wordpress-seo-optimization',
    title: 'WordPress SEO: Complete Optimization Checklist',
    excerpt: 'Improve your WordPress site rankings with this complete SEO optimization checklist covering technical and content SEO.',
    category: 'SEO',
    tags: ['SEO', 'WordPress', 'Optimization'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    href: '/blog/wordpress-seo-optimization',
    author: 'Emma Rodriguez',
    date: 'Dec 28, 2024',
    contentType: 'post'
  },
  {
    id: '9',
    slug: 'wordpress-rest-api-development',
    title: 'WordPress REST API Development Guide',
    excerpt: 'Build custom integrations and applications using the WordPress REST API with this developer guide.',
    category: 'Development',
    tags: ['REST API', 'WordPress', 'Development'],
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    href: '/blog/wordpress-rest-api-development',
    author: 'David Chen',
    date: 'Dec 25, 2024',
    contentType: 'post'
  }
];

/**
 * Portfolio Archive Items
 * Portfolio projects for portfolio archive template
 * 
 * **Usage:**
 * ```tsx
 * import { portfolioArchiveItems } from '../../data/archive-items';
 * ```
 */
export const portfolioArchiveItems: PortfolioArchiveItem[] = [
  {
    id: '1',
    slug: 'african-safari-consultants',
    title: 'African Safari Consultants',
    excerpt: 'Custom WordPress and WooCommerce platform for a luxury safari booking company with advanced filtering and booking systems.',
    client: 'African Safari Consultants',
    category: 'WooCommerce',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    tags: ['WordPress', 'WooCommerce', 'Custom Development'],
    industry: 'Tourism',
    completionDate: 'December 2024'
  },
  {
    id: '2',
    slug: 'techstartup-magazine',
    title: 'TechStartup Magazine',
    excerpt: 'Modern editorial WordPress block theme with custom Gutenberg blocks for magazine-style content layouts.',
    client: 'TechStartup Magazine',
    category: 'Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800',
    tags: ['Block Theme', 'Editorial', 'Custom Blocks'],
    industry: 'Media',
    completionDate: 'November 2024'
  },
  {
    id: '3',
    slug: 'greenenergy-solutions',
    title: 'GreenEnergy Solutions',
    excerpt: 'Corporate WordPress website with integrated customer portal and service booking functionality.',
    client: 'GreenEnergy Solutions',
    category: 'Corporate',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
    tags: ['Corporate', 'Portal', 'Custom Development'],
    industry: 'Energy',
    completionDate: 'October 2024'
  },
  {
    id: '4',
    slug: 'luxury-hotel-collection',
    title: 'Luxury Hotel Collection',
    excerpt: 'Multi-property hotel booking platform with advanced room management and reservation systems.',
    client: 'Luxury Hotel Collection',
    category: 'WooCommerce',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    tags: ['WooCommerce', 'Bookings', 'Multi-site'],
    industry: 'Hospitality',
    completionDate: 'September 2024'
  },
  {
    id: '5',
    slug: 'fitness-coaching-academy',
    title: 'Fitness Coaching Academy',
    excerpt: 'Online learning platform with membership management, video courses, and progress tracking.',
    client: 'Fitness Coaching Academy',
    category: 'E-Learning',
    imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800',
    tags: ['LMS', 'Membership', 'Video Platform'],
    industry: 'Education',
    completionDate: 'August 2024'
  },
  {
    id: '6',
    slug: 'artisan-marketplace',
    title: 'Artisan Marketplace',
    excerpt: 'Multi-vendor WooCommerce marketplace for handmade crafts with vendor dashboards and commission management.',
    client: 'Artisan Marketplace',
    category: 'WooCommerce',
    imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800',
    tags: ['Marketplace', 'Multi-vendor', 'WooCommerce'],
    industry: 'Retail',
    completionDate: 'July 2024'
  },
  {
    id: '7',
    slug: 'nonprofit-foundation',
    title: 'Nonprofit Foundation',
    excerpt: 'Donation platform with recurring giving, impact reporting, and donor management features.',
    client: 'Nonprofit Foundation',
    category: 'Nonprofit',
    imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800',
    tags: ['Donations', 'Nonprofit', 'Custom Development'],
    industry: 'Nonprofit',
    completionDate: 'June 2024'
  },
  {
    id: '8',
    slug: 'restaurant-group',
    title: 'Restaurant Group',
    excerpt: 'Multi-location restaurant website with online ordering, reservations, and menu management.',
    client: 'Restaurant Group',
    category: 'WooCommerce',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    tags: ['WooCommerce', 'Reservations', 'Multi-location'],
    industry: 'Food & Beverage',
    completionDate: 'May 2024'
  }
];

/**
 * Category archive filter options
 * Used for FilterBar component
 */
export const archiveCategories = [
  { value: 'all', label: 'All Categories' },
  { value: 'wordpress', label: 'WordPress Development' },
  { value: 'woocommerce', label: 'WooCommerce' },
  { value: 'accessibility', label: 'Accessibility' },
  { value: 'security', label: 'Security' },
  { value: 'seo', label: 'SEO' },
  { value: 'development', label: 'Development' }
];

/**
 * Portfolio filter options
 * Industry and category filters
 */
export const portfolioCategories = [
  { value: 'all', label: 'All Projects' },
  { value: 'woocommerce', label: 'WooCommerce' },
  { value: 'editorial', label: 'Editorial' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'elearning', label: 'E-Learning' },
  { value: 'nonprofit', label: 'Nonprofit' }
];

export const portfolioIndustries = [
  { value: 'all', label: 'All Industries' },
  { value: 'tourism', label: 'Tourism' },
  { value: 'media', label: 'Media' },
  { value: 'energy', label: 'Energy' },
  { value: 'hospitality', label: 'Hospitality' },
  { value: 'education', label: 'Education' },
  { value: 'retail', label: 'Retail' },
  { value: 'nonprofit', label: 'Nonprofit' },
  { value: 'food-beverage', label: 'Food & Beverage' }
];

/**
 * Helper Functions
 */

/**
 * Get archive items by category
 */
export function getArchiveItemsByCategory(category: string): ArchiveItem[] {
  if (category === 'all') return generalArchiveItems;
  return generalArchiveItems.filter(item => 
    item.category.toLowerCase().includes(category.toLowerCase())
  );
}

/**
 * Get portfolio items by category
 */
export function getPortfolioItemsByCategory(category: string): PortfolioArchiveItem[] {
  if (category === 'all') return portfolioArchiveItems;
  return portfolioArchiveItems.filter(item => 
    item.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get portfolio items by industry
 */
export function getPortfolioItemsByIndustry(industry: string): PortfolioArchiveItem[] {
  if (industry === 'all') return portfolioArchiveItems;
  return portfolioArchiveItems.filter(item => 
    item.industry?.toLowerCase().replace(/\s+/g, '-') === industry.toLowerCase()
  );
}

/**
 * Get archive items by tag
 */
export function getArchiveItemsByTag(tag: string): ArchiveItem[] {
  return generalArchiveItems.filter(item => 
    item.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get archive items by author
 */
export function getArchiveItemsByAuthor(author: string): ArchiveItem[] {
  return generalArchiveItems.filter(item => 
    item.author.toLowerCase().includes(author.toLowerCase())
  );
}

/**
 * Search archive items by query
 */
export function searchArchiveItems(query: string): ArchiveItem[] {
  const lowerQuery = query.toLowerCase();
  return generalArchiveItems.filter(item =>
    item.title.toLowerCase().includes(lowerQuery) ||
    item.excerpt.toLowerCase().includes(lowerQuery) ||
    item.category.toLowerCase().includes(lowerQuery) ||
    item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Service archive item interface
 * For ArchiveWithFilters template (services browsing)
 */
export interface ServiceArchiveItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  href: string;
  duration: string;
  price: string;
}

/**
 * Service Archive Items
 * Mock data for the filterable services archive
 */
export const serviceArchiveItems: ServiceArchiveItem[] = [
  {
    id: '1',
    title: 'Enterprise E-commerce Platform',
    excerpt: 'Scalable headless commerce solution with custom checkout experience.',
    category: 'ecommerce',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    href: '/services/development',
    duration: '6 months',
    price: 'From $25,000'
  },
  {
    id: '2',
    title: 'Design System Implementation',
    excerpt: 'Component library and design tokens for consistent brand experience.',
    category: 'design',
    imageUrl: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800',
    href: '/services/design',
    duration: '3 months',
    price: 'From $15,000'
  },
  {
    id: '3',
    title: 'SaaS Dashboard Interface',
    excerpt: 'Modern analytics dashboard with real-time data visualization.',
    category: 'webapp',
    imageUrl: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800',
    href: '/services/development',
    duration: '4 months',
    price: 'From $18,000'
  },
  {
    id: '4',
    title: 'Brand Identity & Guidelines',
    excerpt: 'Complete brand system including logo, typography, and visual language.',
    category: 'branding',
    imageUrl: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
    href: '/services/design',
    duration: '2 months',
    price: 'From $12,000'
  },
  {
    id: '5',
    title: 'WordPress Block Theme',
    excerpt: 'Full Site Editing theme with custom blocks and pattern library.',
    category: 'wordpress',
    imageUrl: 'https://images.unsplash.com/photo-1535338454770-11f3ebb6e1a9?w=800',
    href: '/services/development',
    duration: '4 months',
    price: 'From $20,000'
  },
  {
    id: '6',
    title: 'Mobile App Design',
    excerpt: 'Native iOS and Android app with seamless user experience.',
    category: 'design',
    imageUrl: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
    href: '/services/design',
    duration: '5 months',
    price: 'From $22,000'
  },
  {
    id: '7',
    title: 'Performance Optimization',
    excerpt: 'Speed improvements and Core Web Vitals optimization for existing site.',
    category: 'development',
    imageUrl: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800',
    href: '/services/development',
    duration: '1 month',
    price: 'From $8,000'
  },
  {
    id: '8',
    title: 'Accessibility Audit & Remediation',
    excerpt: 'WCAG 2.1 AA compliance audit with implementation support.',
    category: 'development',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    href: '/services/development',
    duration: '2 months',
    price: 'From $10,000'
  },
];

/**
 * Service filter options
 * For ArchiveWithFilters FilterBar
 */
export const serviceFilterOptions = [
  { id: 'all', label: 'All Services', count: 8 },
  { id: 'design', label: 'Design', count: 2 },
  { id: 'development', label: 'Development', count: 2 },
  { id: 'ecommerce', label: 'E-commerce', count: 1 },
  { id: 'wordpress', label: 'WordPress', count: 1 },
  { id: 'branding', label: 'Branding', count: 1 },
  { id: 'webapp', label: 'Web Apps', count: 1 },
];

/**
 * Archive with filters page data
 */
export const archiveWithFiltersPage = {
  title: 'Our Services',
  description: 'Explore our comprehensive range of web design and development services.',
};

/**
 * Get service archive items by category
 */
export function getServiceItemsByCategory(category: string): ServiceArchiveItem[] {
  if (category === 'all') return serviceArchiveItems;
  return serviceArchiveItems.filter(item =>
    item.category.toLowerCase() === category.toLowerCase()
  );
}