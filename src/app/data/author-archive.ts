/**
 * Author Archive Data
 *
 * Centralized data for author archive template.
 * Contains author profiles and their published posts.
 *
 * **WordPress Mapping:**
 * - Author archives: templates/archive-author.html
 * - Author posts: WP_Query by author
 *
 * @see /src/app/components/templates/AuthorArchiveTemplate.tsx
 */

/**
 * Author profile interface
 */
export interface AuthorProfile {
  name: string;
  slug: string;
  bio: string;
  avatar: string;
  location: string;
  website: string;
  twitter: string;
  linkedin: string;
  postCount: number;
  joinDate: string;
}

/**
 * Author post interface
 */
export interface AuthorPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  featuredImage: string;
  href: string;
  date: string;
  readTime: string;
}

/**
 * Author profiles keyed by slug
 */
export const authorProfiles: Record<string, AuthorProfile> = {
  'sarah-mitchell': {
    name: 'Sarah Mitchell',
    slug: 'sarah-mitchell',
    bio: 'Senior WordPress Developer and Technical Writer with 10+ years of experience building high-performance websites. Passionate about accessibility, block themes, and sharing knowledge with the community.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    location: 'Cape Town, SA',
    website: 'https://sarahmitchell.com',
    twitter: '@sarahwpdev',
    linkedin: 'sarahmitchell',
    postCount: 24,
    joinDate: 'Jan 2023',
  },
  'editor': {
    name: 'Alex Chen',
    slug: 'editor',
    bio: 'Chief Editor and Lead Developer at LightSpeed WP. Specialises in WordPress architecture, WooCommerce optimisation, and scalable design systems for enterprise clients.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    location: 'London, UK',
    website: 'https://alexchen.com',
    twitter: '@alexchen',
    linkedin: 'alexchen',
    postCount: 38,
    joinDate: 'Mar 2022',
  },
  'contributor': {
    name: 'Emma Rodriguez',
    slug: 'contributor',
    bio: 'Freelance WordPress contributor specialising in performance optimisation, security hardening, and WooCommerce development. Always exploring the latest in web technology.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    location: 'Austin, TX',
    website: 'https://emmarodriguez.com',
    twitter: '@emmawpdev',
    linkedin: 'emmarodriguez',
    postCount: 16,
    joinDate: 'Jul 2023',
  },
};

/**
 * Author posts (mock data for all authors)
 */
export const authorPosts: AuthorPost[] = [
  {
    id: '1',
    slug: 'wordpress-block-theme-best-practices',
    title: 'WordPress Block Theme Best Practices for 2025',
    excerpt: 'Learn the latest best practices for building modern WordPress block themes with Full Site Editing capabilities, design tokens, and custom patterns.',
    category: 'WordPress Development',
    featuredImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    href: '/blog/wordpress-block-theme-best-practices',
    date: 'Jan 15, 2025',
    readTime: '8 min read'
  },
  {
    id: '2',
    slug: 'woocommerce-performance-optimization',
    title: 'WooCommerce Performance: Speed Up Your Store',
    excerpt: 'Proven strategies for optimising WooCommerce performance, from database queries to caching and CDN configuration.',
    category: 'WooCommerce',
    featuredImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
    href: '/blog/woocommerce-performance-optimization',
    date: 'Dec 5, 2024',
    readTime: '9 min read'
  },
  {
    id: '3',
    slug: 'accessibility-wcag-compliance',
    title: 'WCAG 2.1 AA Compliance: A Developer\'s Guide',
    excerpt: 'Comprehensive guide to achieving WCAG 2.1 AA compliance in WordPress themes, covering semantic HTML, ARIA, and keyboard navigation.',
    category: 'Accessibility',
    featuredImage: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800',
    href: '/blog/accessibility-wcag-compliance',
    date: 'Nov 12, 2024',
    readTime: '5 min read'
  },
  {
    id: '4',
    slug: 'wordpress-security-hardening',
    title: 'WordPress Security Hardening: Essential Steps',
    excerpt: 'Protect your WordPress site from common vulnerabilities with these essential security hardening techniques and best practices.',
    category: 'Security',
    featuredImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    href: '/blog/wordpress-security-hardening',
    date: 'Nov 2, 2024',
    readTime: '10 min read'
  },
  {
    id: '5',
    slug: 'design-tokens-css-variables',
    title: 'Design Tokens with CSS Variables in WordPress',
    excerpt: 'How to implement a design token system using CSS custom properties that maps directly to WordPress theme.json presets.',
    category: 'Design Systems',
    featuredImage: 'https://images.unsplash.com/photo-1544413660-299165566b1d?w=800',
    href: '/blog/design-tokens-css-variables',
    date: 'Oct 28, 2024',
    readTime: '7 min read'
  },
  {
    id: '6',
    slug: 'headless-wordpress-guide',
    title: 'Headless WordPress: The Complete Guide',
    excerpt: 'Everything you need to know about headless WordPress architecture, from REST API to GraphQL, with real-world implementation examples.',
    category: 'Development',
    featuredImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    href: '/blog/headless-wordpress-guide',
    date: 'Oct 15, 2024',
    readTime: '12 min read'
  },
];

/**
 * Get author profile by slug
 */
export function getAuthorBySlug(slug: string): AuthorProfile {
  return authorProfiles[slug] || authorProfiles['sarah-mitchell'];
}

/**
 * Get all author slugs
 */
export function getAllAuthorSlugs(): string[] {
  return Object.keys(authorProfiles);
}

/**
 * Get author posts (in a real WP site, this would be a WP_Query)
 */
export function getAuthorPosts(authorSlug: string): AuthorPost[] {
  // In prototype, all authors share the same post pool
  return authorPosts;
}
