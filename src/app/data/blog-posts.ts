/**
 * Blog Posts Data
 * 
 * Real blog posts from LightSpeed WordPress Agency.
 * Real content extracted from https://lightspeedwp.agency
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/blog
 * **Last Updated:** 2025-01-09
 * 
 * **WordPress Mapping:**
 * - Post Type: 'post' (default)
 * - Taxonomies: 'category', 'post_tag'
 * - Author relationships
 * - Featured images
 */

import { blogCategories } from './taxonomies';

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
 * Real LightSpeed team members who write blog posts
 */
export const blogAuthors: BlogAuthor[] = [
  {
    id: 'ash-shaw',
    slug: 'ash-shaw',
    name: 'Ash Shaw',
    bio: 'CEO and founder of LightSpeed WordPress Agency. Passionate about WordPress, web design and building awesome user experiences. WordCamp community member since 2008.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    role: 'Chief Executive Officer',
    social: {
      linkedin: 'https://linkedin.com/in/ashleyshaw',
      github: 'https://github.com/lightspeedwp'
    },
    postCount: 15
  },
  {
    id: 'warwick-booth',
    slug: 'warwick-booth',
    name: 'Warwick Booth',
    bio: 'Lead Developer at LightSpeed. Building exceptional websites with coding skills, involved in project planning and mentoring team mates.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    role: 'Lead Developer',
    social: {
      github: 'https://github.com/warwickbooth'
    },
    postCount: 12
  },
  {
    id: 'lourens-visser',
    slug: 'lourens-visser',
    name: 'Lourens Visser',
    bio: 'Support Manager at LightSpeed. 2 decades of experience in programming, web design, and ensuring agile workflow.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    role: 'Support Manager',
    postCount: 8
  }
];

// Re-export categories from taxonomies for backward compatibility
export { blogCategories };

/**
 * Post Tags
 * Real tags from LightSpeed blog
 */
export const postTags = [
  { slug: 'ai', name: 'AI', count: 8 },
  { slug: 'team', name: 'Team', count: 12 },
  { slug: 'workflow', name: 'Workflow', count: 15 },
  { slug: 'bugherd', name: 'BugHerd', count: 5 },
  { slug: 'webinar', name: 'Webinar', count: 6 },
  { slug: 'tour-operator', name: 'Tour Operator', count: 18 },
  { slug: 'lsx-theme', name: 'LSX Theme', count: 10 },
  { slug: 'wordpress', name: 'WordPress', count: 30 },
  { slug: 'woocommerce', name: 'WooCommerce', count: 22 },
  { slug: 'plugin-development', name: 'Plugin Development', count: 14 }
] as const;

/**
 * Blog Posts
 * Real blog posts from LightSpeed WordPress Agency
 * 
 * **Source:** https://lightspeedwp.agency (homepage + blog index)
 */
export const blogPosts: BlogPost[] = [
  {
    id: 'lightspeed-growth-team-ai',
    slug: 'lightspeed-growth-team-ai',
    title: 'LightSpeed\'s Growth: Building a Team, Shaping Developers, and Riding the AI Wave',
    excerpt: 'Discover how LightSpeed has evolved over the years, building a talented team of developers while embracing AI technology to enhance our WordPress and WooCommerce solutions.',
    featuredImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200',
    author: 'ash-shaw',
    categories: ['agency-life'],
    tags: ['ai', 'team', 'workflow'],
    date: '2025-09-15',
    readingTime: '6 min read',
    featured: true
  },
  {
    id: 'deep-dive-ai-workflow',
    slug: 'deep-dive-ai-workflow',
    title: 'A Deep Dive into LightSpeed\'s AI Workflow',
    excerpt: 'Explore how we integrate AI tools into our development workflow to improve efficiency, code quality, and deliver better WordPress solutions for our clients.',
    featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
    author: 'warwick-booth',
    categories: ['tutorials'],
    tags: ['ai', 'workflow', 'wordpress'],
    date: '2025-09-11',
    readingTime: '8 min read',
    featured: true
  },
  {
    id: 'tour-operator-2-1-release',
    slug: 'tour-operator-2-1-release',
    title: 'Tour Operator 2.1 Release',
    excerpt: 'Announcing the latest release of our Tour Operator plugin with new features, performance improvements, and enhanced compatibility with the latest WordPress version.',
    featuredImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200',
    author: 'ash-shaw',
    categories: ['industry-news'],
    tags: ['tour-operator', 'lsx-theme', 'plugin-development'],
    date: '2025-09-03',
    readingTime: '5 min read',
    featured: true
  },
  {
    id: 'design-to-launch-bugherd-webinar',
    slug: 'design-to-launch-bugherd-webinar',
    title: 'From Design to Launch: Recap of webinar with BugHerd',
    excerpt: 'Key takeaways from our collaborative webinar with BugHerd, covering best practices for streamlining the website design and development process from concept to launch.',
    featuredImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200',
    author: 'lourens-visser',
    categories: ['tutorials'],
    tags: ['bugherd', 'webinar', 'workflow'],
    date: '2025-08-22',
    readingTime: '7 min read',
    featured: true
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
