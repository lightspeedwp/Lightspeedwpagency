/**
 * Blog Posts Mock Data
 * 
 * WordPress & WooCommerce agency blog posts (2025).
 * Based on LightspeedWP.agency structure with authors and tags.
 * 
 * **WordPress Mapping:**
 * - Post Type: 'post' (default)
 * - Taxonomies: 'category', 'post_tag'
 * - Author relationships
 * - Featured images from Unsplash
 */

export interface BlogAuthor {
  id: string;
  slug: string;
  name: string;
  bio: string;
  avatar: string;
  role: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  postCount: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  featuredImage: string;
  author: string; // Author slug
  categories: string[];
  tags: string[];
  date: string;
  readingTime: string;
  featured: boolean;
}

/**
 * Blog Authors
 * Based on author-sitemap.xml
 */
export const blogAuthors: BlogAuthor[] = [
  {
    id: 'sarah-mitchell',
    slug: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    bio: 'WordPress developer and FSE advocate with 10+ years building block themes. Passionate about accessible, performant websites.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    role: 'Lead WordPress Developer',
    social: {
      twitter: 'https://twitter.com/sarahmitchell',
      linkedin: 'https://linkedin.com/in/sarahmitchell',
      github: 'https://github.com/sarahmitchell'
    },
    postCount: 24
  },
  {
    id: 'marcus-johnson',
    slug: 'marcus-johnson',
    name: 'Marcus Johnson',
    bio: 'WooCommerce specialist focused on high-performance e-commerce solutions. Expert in conversion optimization and payment integrations.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    role: 'Senior WooCommerce Developer',
    social: {
      twitter: 'https://twitter.com/marcusjohnson',
      linkedin: 'https://linkedin.com/in/marcusjohnson'
    },
    postCount: 18
  },
  {
    id: 'emma-rodriguez',
    slug: 'emma-rodriguez',
    name: 'Emma Rodriguez',
    bio: 'UX designer and accessibility advocate. Believes beautiful design should be available to everyone, regardless of ability.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    role: 'UX Designer & Accessibility Lead',
    social: {
      twitter: 'https://twitter.com/emmarodriguez',
      linkedin: 'https://linkedin.com/in/emmarodriguez'
    },
    postCount: 16
  },
  {
    id: 'james-parker',
    slug: 'james-parker',
    name: 'James Parker',
    bio: 'Performance optimization expert obsessed with Core Web Vitals. Makes WordPress sites blazing fast.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    role: 'Performance Engineer',
    social: {
      twitter: 'https://twitter.com/jamesparker',
      github: 'https://github.com/jamesparker'
    },
    postCount: 14
  },
  {
    id: 'lisa-chen',
    slug: 'lisa-chen',
    name: 'Lisa Chen',
    bio: 'WordPress security specialist and plugin developer. Helps agencies build secure, maintainable WordPress solutions.',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    role: 'Security Specialist',
    social: {
      twitter: 'https://twitter.com/lisachen',
      linkedin: 'https://linkedin.com/in/lisachen'
    },
    postCount: 12
  },
  {
    id: 'david-kim',
    slug: 'david-kim',
    name: 'David Kim',
    bio: 'Headless WordPress and JAMstack enthusiast. Builds modern, scalable web applications with WordPress as CMS.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    role: 'Full-Stack Developer',
    social: {
      github: 'https://github.com/davidkim',
      linkedin: 'https://linkedin.com/in/davidkim'
    },
    postCount: 10
  }
];

/**
 * Blog Categories
 */
export const blogCategories = [
  { 
    slug: 'wordpress-development', 
    name: 'WordPress Development', 
    description: 'Expert insights on WordPress core development, custom plugins, theme development, and best practices for building robust WordPress solutions.',
    count: 32 
  },
  { 
    slug: 'woocommerce', 
    name: 'WooCommerce', 
    description: 'WooCommerce optimization, payment gateway integration, store performance, and e-commerce best practices for high-converting online stores.',
    count: 24 
  },
  { 
    slug: 'block-themes', 
    name: 'Block Themes & FSE', 
    description: 'Full Site Editing tutorials, block theme development, pattern creation, and theme.json configuration for modern WordPress sites.',
    count: 28 
  },
  { 
    slug: 'accessibility', 
    name: 'Accessibility', 
    description: 'WCAG compliance guidelines, accessible WordPress development, screen reader optimization, and inclusive design practices.',
    count: 18 
  },
  { 
    slug: 'performance', 
    name: 'Performance', 
    description: 'Core Web Vitals optimization, caching strategies, image optimization, and performance tuning for faster WordPress sites.',
    count: 22 
  },
  { 
    slug: 'security', 
    name: 'Security', 
    description: 'WordPress security best practices, hardening techniques, vulnerability prevention, and secure coding standards.',
    count: 14 
  },
  { 
    slug: 'tutorials', 
    name: 'Tutorials', 
    description: 'Step-by-step WordPress tutorials, how-to guides, and practical walkthroughs for developers and site owners.',
    count: 35 
  },
  { 
    slug: 'case-studies', 
    name: 'Case Studies', 
    description: 'Real-world WordPress project case studies, client success stories, and detailed implementation breakdowns.',
    count: 12 
  },
  { 
    slug: 'news', 
    name: 'WordPress News', 
    description: 'Latest WordPress updates, community news, release announcements, and industry trends.',
    count: 16 
  }
] as const;

/**
 * Post Tags
 * Based on post_tag-sitemap.xml
 */
export const postTags = [
  { slug: 'gutenberg', name: 'Gutenberg', count: 45 },
  { slug: 'fse', name: 'Full Site Editing', count: 38 },
  { slug: 'block-patterns', name: 'Block Patterns', count: 32 },
  { slug: 'theme-json', name: 'theme.json', count: 28 },
  { slug: 'woocommerce-optimization', name: 'WooCommerce Optimization', count: 22 },
  { slug: 'wcag', name: 'WCAG Compliance', count: 24 },
  { slug: 'core-web-vitals', name: 'Core Web Vitals', count: 30 },
  { slug: 'security-best-practices', name: 'Security Best Practices', count: 18 },
  { slug: 'custom-blocks', name: 'Custom Blocks', count: 26 },
  { slug: 'acf', name: 'Advanced Custom Fields', count: 20 },
  { slug: 'migration', name: 'Site Migration', count: 12 },
  { slug: 'multisite', name: 'WordPress Multisite', count: 10 },
  { slug: 'headless-wordpress', name: 'Headless WordPress', count: 14 },
  { slug: 'rest-api', name: 'REST API', count: 16 },
  { slug: 'php', name: 'PHP', count: 22 },
  { slug: 'javascript', name: 'JavaScript', count: 28 },
  { slug: 'react', name: 'React', count: 18 }
] as const;

/**
 * Blog Posts (2025)
 * Real-world WordPress & WooCommerce agency content
 */
export const blogPosts: BlogPost[] = [
  {
    id: 'wordpress-6-5-fse-features',
    slug: 'wordpress-6-5-fse-features',
    title: 'WordPress 6.5 FSE Features: What\'s New for Block Theme Developers',
    excerpt: 'Explore the latest Full Site Editing features in WordPress 6.5, including improved template controls, new design tools, and enhanced block patterns.',
    featuredImage: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1200',
    author: 'sarah-mitchell',
    categories: ['wordpress-development', 'block-themes', 'news'],
    tags: ['fse', 'gutenberg', 'block-patterns', 'theme-json'],
    date: '2025-01-15',
    readingTime: '8 min read',
    featured: true
  },
  {
    id: 'woocommerce-performance-optimization',
    slug: 'woocommerce-performance-optimization',
    title: 'WooCommerce Performance: 10 Techniques to Speed Up Your Store',
    excerpt: 'Proven strategies to optimize WooCommerce performance, from database queries to image optimization and caching strategies.',
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
    author: 'marcus-johnson',
    categories: ['woocommerce', 'performance'],
    tags: ['woocommerce-optimization', 'core-web-vitals', 'performance'],
    date: '2025-01-12',
    readingTime: '12 min read',
    featured: true
  },
  {
    id: 'wcag-2-2-compliance-guide',
    slug: 'wcag-2-2-compliance-guide',
    title: 'WCAG 2.2 Compliance: Complete Guide for WordPress Sites',
    excerpt: 'Step-by-step guide to achieving WCAG 2.2 Level AA compliance on WordPress sites, with practical code examples and testing tools.',
    featuredImage: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200',
    author: 'emma-rodriguez',
    categories: ['accessibility', 'tutorials'],
    tags: ['wcag', 'accessibility', 'fse'],
    date: '2025-01-10',
    readingTime: '15 min read',
    featured: true
  },
  {
    id: 'core-web-vitals-2025',
    slug: 'core-web-vitals-2025',
    title: 'Core Web Vitals in 2025: What Changed and How to Optimize',
    excerpt: 'Google\'s latest Core Web Vitals updates and proven optimization techniques for WordPress sites to maintain high rankings.',
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
    author: 'james-parker',
    categories: ['performance', 'tutorials'],
    tags: ['core-web-vitals', 'performance', 'gutenberg'],
    date: '2025-01-08',
    readingTime: '10 min read',
    featured: true
  },
  {
    id: 'custom-gutenberg-blocks-tutorial',
    slug: 'custom-gutenberg-blocks-tutorial',
    title: 'Building Custom Gutenberg Blocks: Complete 2025 Tutorial',
    excerpt: 'Learn to build custom Gutenberg blocks using @wordpress/create-block, with TypeScript support and modern React patterns.',
    featuredImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200',
    author: 'sarah-mitchell',
    categories: ['wordpress-development', 'tutorials'],
    tags: ['gutenberg', 'custom-blocks', 'javascript', 'react'],
    date: '2025-01-05',
    readingTime: '20 min read',
    featured: false
  },
  {
    id: 'wordpress-security-checklist',
    slug: 'wordpress-security-checklist',
    title: 'WordPress Security Checklist: 25 Essential Steps for 2025',
    excerpt: 'Comprehensive security checklist covering authentication, authorization, data validation, and protection against common vulnerabilities.',
    featuredImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200',
    author: 'lisa-chen',
    categories: ['security', 'tutorials'],
    tags: ['security-best-practices', 'php', 'wordpress'],
    date: '2025-01-03',
    readingTime: '14 min read',
    featured: false
  },
  {
    id: 'headless-wordpress-nextjs',
    slug: 'headless-wordpress-nextjs',
    title: 'Headless WordPress with Next.js: Complete Implementation Guide',
    excerpt: 'Build a headless WordPress site with Next.js 14, using App Router, Server Components, and incremental static regeneration.',
    featuredImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200',
    author: 'david-kim',
    categories: ['wordpress-development', 'tutorials'],
    tags: ['headless-wordpress', 'rest-api', 'javascript', 'react'],
    date: '2024-12-28',
    readingTime: '18 min read',
    featured: false
  },
  {
    id: 'theme-json-deep-dive',
    slug: 'theme-json-deep-dive',
    title: 'theme.json Deep Dive: Mastering Global Styles and Settings',
    excerpt: 'Advanced theme.json techniques for creating flexible, maintainable design systems in WordPress block themes.',
    featuredImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200',
    author: 'sarah-mitchell',
    categories: ['block-themes', 'tutorials'],
    tags: ['theme-json', 'fse', 'block-patterns'],
    date: '2024-12-22',
    readingTime: '16 min read',
    featured: false
  },
  {
    id: 'woocommerce-b2b-customization',
    slug: 'woocommerce-b2b-customization',
    title: 'WooCommerce B2B Customization: Custom Pricing and Quote Systems',
    excerpt: 'Build enterprise-grade B2B features in WooCommerce with custom pricing tiers, quote requests, and bulk ordering.',
    featuredImage: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200',
    author: 'marcus-johnson',
    categories: ['woocommerce', 'tutorials'],
    tags: ['woocommerce-optimization', 'php', 'custom-blocks'],
    date: '2024-12-18',
    readingTime: '22 min read',
    featured: false
  },
  {
    id: 'accessible-block-patterns',
    slug: 'accessible-block-patterns',
    title: 'Creating Accessible Block Patterns: Best Practices for Inclusive Design',
    excerpt: 'Learn to build accessible WordPress block patterns that work for all users, with proper semantics and keyboard navigation.',
    featuredImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200',
    author: 'emma-rodriguez',
    categories: ['accessibility', 'block-themes'],
    tags: ['wcag', 'block-patterns', 'fse'],
    date: '2024-12-15',
    readingTime: '11 min read',
    featured: false
  },
  {
    id: 'wordpress-multisite-management',
    slug: 'wordpress-multisite-management',
    title: 'WordPress Multisite Management: Enterprise-Scale Best Practices',
    excerpt: 'Strategies for managing large WordPress multisite networks, from plugin management to performance optimization.',
    featuredImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200',
    author: 'lisa-chen',
    categories: ['wordpress-development', 'tutorials'],
    tags: ['multisite', 'performance', 'security-best-practices'],
    date: '2024-12-10',
    readingTime: '13 min read',
    featured: false
  },
  {
    id: 'acf-blocks-vs-gutenberg',
    slug: 'acf-blocks-vs-gutenberg',
    title: 'ACF Blocks vs Native Gutenberg: When to Use Each Approach',
    excerpt: 'Compare ACF block development with native Gutenberg blocks, exploring pros, cons, and ideal use cases for each.',
    featuredImage: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200',
    author: 'sarah-mitchell',
    categories: ['wordpress-development', 'tutorials'],
    tags: ['acf', 'custom-blocks', 'gutenberg'],
    date: '2024-12-05',
    readingTime: '9 min read',
    featured: false
  },
  {
    id: 'woocommerce-payment-gateways',
    slug: 'woocommerce-payment-gateways',
    title: 'WooCommerce Payment Gateway Integration: Stripe, PayPal, and Beyond',
    excerpt: 'Comprehensive guide to integrating and customizing payment gateways in WooCommerce, with security considerations.',
    featuredImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200',
    author: 'marcus-johnson',
    categories: ['woocommerce', 'tutorials'],
    tags: ['woocommerce-optimization', 'security-best-practices'],
    date: '2024-11-28',
    readingTime: '17 min read',
    featured: false
  },
  {
    id: 'wordpress-rest-api-authentication',
    slug: 'wordpress-rest-api-authentication',
    title: 'WordPress REST API Authentication: JWT, OAuth, and Application Passwords',
    excerpt: 'Implement secure REST API authentication in WordPress using JWT tokens, OAuth 2.0, and application passwords.',
    featuredImage: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200',
    author: 'david-kim',
    categories: ['wordpress-development', 'security'],
    tags: ['rest-api', 'security-best-practices', 'headless-wordpress'],
    date: '2024-11-22',
    readingTime: '14 min read',
    featured: false
  },
  {
    id: 'image-optimization-wordpress',
    slug: 'image-optimization-wordpress',
    title: 'Advanced Image Optimization in WordPress: WebP, AVIF, and Lazy Loading',
    excerpt: 'Modern image optimization techniques including next-gen formats, responsive images, and progressive loading.',
    featuredImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200',
    author: 'james-parker',
    categories: ['performance', 'tutorials'],
    tags: ['core-web-vitals', 'performance', 'wordpress'],
    date: '2024-11-18',
    readingTime: '12 min read',
    featured: false
  },
  {
    id: 'wordpress-migration-checklist',
    slug: 'wordpress-migration-checklist',
    title: 'WordPress Site Migration Checklist: Zero-Downtime Deployment',
    excerpt: 'Step-by-step checklist for migrating WordPress sites with zero downtime, including database, files, and DNS management.',
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
    author: 'lisa-chen',
    categories: ['wordpress-development', 'tutorials'],
    tags: ['migration', 'php', 'security-best-practices'],
    date: '2024-11-12',
    readingTime: '16 min read',
    featured: false
  },
  {
    id: 'block-pattern-library',
    slug: 'block-pattern-library',
    title: 'Building a Block Pattern Library for Your WordPress Agency',
    excerpt: 'Create a reusable block pattern library for faster client site development and consistent design systems.',
    featuredImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200',
    author: 'sarah-mitchell',
    categories: ['block-themes', 'tutorials'],
    tags: ['block-patterns', 'theme-json', 'fse'],
    date: '2024-11-08',
    readingTime: '10 min read',
    featured: false
  },
  {
    id: 'woocommerce-subscriptions',
    slug: 'woocommerce-subscriptions',
    title: 'WooCommerce Subscriptions: Recurring Revenue Implementation Guide',
    excerpt: 'Implement subscription-based products in WooCommerce with automatic renewals, payment retries, and customer management.',
    featuredImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200',
    author: 'marcus-johnson',
    categories: ['woocommerce', 'tutorials'],
    tags: ['woocommerce-optimization', 'php'],
    date: '2024-11-02',
    readingTime: '19 min read',
    featured: false
  },
  {
    id: 'keyboard-navigation-wordpress',
    slug: 'keyboard-navigation-wordpress',
    title: 'Keyboard Navigation in WordPress: Accessibility Testing and Implementation',
    excerpt: 'Ensure full keyboard accessibility in WordPress themes with focus management, skip links, and ARIA attributes.',
    featuredImage: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1200',
    author: 'emma-rodriguez',
    categories: ['accessibility', 'tutorials'],
    tags: ['wcag', 'accessibility', 'javascript'],
    date: '2024-10-28',
    readingTime: '13 min read',
    featured: false
  },
  {
    id: 'wordpress-caching-strategies',
    slug: 'wordpress-caching-strategies',
    title: 'WordPress Caching Strategies: Object Cache, Page Cache, and CDN',
    excerpt: 'Comprehensive caching strategies for WordPress including Redis, Varnish, and CDN configuration for maximum performance.',
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
    author: 'james-parker',
    categories: ['performance', 'tutorials'],
    tags: ['performance', 'core-web-vitals', 'php'],
    date: '2024-10-22',
    readingTime: '15 min read',
    featured: false
  }
];

/**
 * Featured Posts
 * Posts marked as featured for homepage display
 */
export const featuredPosts = blogPosts.filter(p => p.featured);

/**
 * Helper Functions
 */

/**
 * Get post by slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

/**
 * Get author by slug
 */
export function getAuthorBySlug(slug: string): BlogAuthor | undefined {
  return blogAuthors.find(a => a.slug === slug);
}

/**
 * Get posts by author
 */
export function getPostsByAuthor(authorSlug: string): BlogPost[] {
  return blogPosts.filter(p => p.author === authorSlug);
}

/**
 * Get posts by category
 */
export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter(p => p.categories.includes(categorySlug));
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tagSlug: string): BlogPost[] {
  return blogPosts.filter(p => p.tags.includes(tagSlug));
}

/**
 * Get recent posts (by date)
 */
export function getRecentPosts(limit: number = 6): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

/**
 * Search posts by title or excerpt
 */
export function searchPosts(query: string): BlogPost[] {
  const lowerQuery = query.toLowerCase();
  return blogPosts.filter(p =>
    p.title.toLowerCase().includes(lowerQuery) ||
    p.excerpt.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get related posts based on shared categories and tags
 * 
 * **Algorithm:**
 * 1. Find posts with matching categories (higher weight)
 * 2. Find posts with matching tags
 * 3. Sort by relevance (category matches > tag matches)
 * 4. Exclude the current post
 * 5. Return limited results
 * 
 * @param slug - Current post slug
 * @param limit - Maximum number of related posts (default: 3)
 * @returns Array of related blog posts
 * 
 * @example
 * const related = getRelatedPosts('getting-started-with-block-themes', 3);
 */
export function getRelatedPosts(slug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(slug);
  
  if (!currentPost) {
    return getRecentPosts(limit);
  }
  
  // Score each post based on shared categories and tags
  const scoredPosts = blogPosts
    .filter(p => p.slug !== slug) // Exclude current post
    .map(post => {
      let score = 0;
      
      // Category matches (weight: 3)
      const sharedCategories = post.categories.filter(cat => 
        currentPost.categories.includes(cat)
      );
      score += sharedCategories.length * 3;
      
      // Tag matches (weight: 1)
      const sharedTags = post.tags.filter(tag => 
        currentPost.tags.includes(tag)
      );
      score += sharedTags.length;
      
      return { post, score };
    })
    .filter(item => item.score > 0) // Only posts with some relevance
    .sort((a, b) => b.score - a.score) // Sort by score descending
    .slice(0, limit)
    .map(item => item.post);
  
  // If we don't have enough related posts, fill with recent posts
  if (scoredPosts.length < limit) {
    const recentPosts = getRecentPosts(limit)
      .filter(p => p.slug !== slug && !scoredPosts.includes(p));
    return [...scoredPosts, ...recentPosts].slice(0, limit);
  }
  
  return scoredPosts;
}