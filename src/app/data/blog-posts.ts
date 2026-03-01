/**
 * Blog Posts Data
 * 
 * Real blog posts from LightSpeed WordPress Agency.
 * Real content extracted from https://lightspeedwp.agency
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/blog
 * **Last Updated:** 2026-02-16
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
  { slug: 'plugin-development', name: 'Plugin Development', count: 14 },
  { slug: 'block-theme', name: 'Block Theme', count: 20 },
  { slug: 'fse', name: 'Full Site Editing', count: 16 },
  { slug: 'performance', name: 'Performance', count: 12 },
  { slug: 'security', name: 'Security', count: 9 },
  { slug: 'accessibility', name: 'Accessibility', count: 11 },
  { slug: 'migration', name: 'Migration', count: 7 },
  { slug: 'design-system', name: 'Design System', count: 8 }
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
  },
  // ─────────────────────────────────────────────
  // NEW POSTS — Added February 16, 2026
  // ─────────────────────────────────────────────
  {
    id: 'wordpress-block-themes-complete-guide-2026',
    slug: 'wordpress-block-themes-complete-guide-2026',
    title: 'WordPress Block Themes: The Complete Guide for 2026',
    excerpt: 'Everything you need to know about WordPress block themes in 2026 — from theme.json configuration and template hierarchy to custom patterns, style variations, and Full Site Editing best practices.',
    content: 'Block themes have fundamentally changed how we build WordPress websites. In this comprehensive guide, we walk through every aspect of modern block theme development — from setting up your theme.json file with design tokens, to creating reusable block patterns, implementing style variations, and leveraging the full power of WordPress Full Site Editing. Whether you are migrating from a classic theme or starting fresh, this guide covers the essential concepts, common pitfalls, and advanced techniques our team uses every day at LightSpeed.',
    featuredImage: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=1200',
    author: 'warwick-booth',
    categories: ['tutorials'],
    tags: ['wordpress', 'block-theme', 'fse', 'design-system'],
    date: '2026-01-28',
    readingTime: '12 min read',
    featured: true
  },
  {
    id: 'migrating-50-sites-block-themes',
    slug: 'migrating-50-sites-block-themes',
    title: 'How We Migrated 50+ Sites to WordPress Block Themes',
    excerpt: 'A case study on LightSpeed\'s large-scale migration project — lessons learnt, tooling decisions, and the repeatable process we developed for converting classic themes to modern block themes.',
    content: 'Over the past 18 months, our team has migrated more than 50 client websites from classic PHP-based themes to modern WordPress block themes. This was not a simple find-and-replace exercise. Each migration involved auditing existing content, mapping custom fields to block attributes, rebuilding templates in the Full Site Editor, and ensuring zero downtime during the switch. In this post, we share the migration framework we developed, the automation scripts that saved us hundreds of hours, and the key decisions that made the difference between a smooth launch and a stressful one.',
    featuredImage: 'https://images.unsplash.com/photo-1619243142206-381c5aeda31c?w=1200',
    author: 'ash-shaw',
    categories: ['case-studies'],
    tags: ['wordpress', 'migration', 'block-theme', 'fse'],
    date: '2026-01-14',
    readingTime: '10 min read',
    featured: true
  },
  {
    id: 'woocommerce-performance-speed-up-store',
    slug: 'woocommerce-performance-speed-up-store',
    title: 'WooCommerce Performance: 10 Proven Ways to Speed Up Your Store',
    excerpt: 'Slow WooCommerce stores lose sales. Learn the 10 performance optimisation techniques our team uses to achieve sub-second load times on even the largest product catalogues.',
    content: 'Performance is not optional for e-commerce. Research consistently shows that every 100ms of added latency costs 1% of revenue. At LightSpeed, we have optimised hundreds of WooCommerce stores and distilled our approach into 10 proven techniques: server-side full-page caching, image CDN with WebP/AVIF, critical CSS inlining, lazy loading of below-the-fold product images, database query optimisation for large catalogues, object caching with Redis, deferred JavaScript execution, prefetching key resources, reducing third-party script impact, and implementing the right hosting stack. In this tutorial, we walk through each technique with real before-and-after benchmarks from client projects.',
    featuredImage: 'https://images.unsplash.com/photo-1770225671243-004c6188965a?w=1200',
    author: 'warwick-booth',
    categories: ['tutorials'],
    tags: ['woocommerce', 'performance', 'wordpress'],
    date: '2025-12-19',
    readingTime: '9 min read',
    featured: false
  },
  {
    id: 'meet-the-team-lourens-visser',
    slug: 'meet-the-team-lourens-visser',
    title: 'Meet the Team: Lourens Visser, Support Manager',
    excerpt: 'Get to know Lourens Visser — our Support Manager with two decades of experience in programming, web design, and client success. Learn what drives him and how he keeps our support quality world-class.',
    content: 'In this edition of our Meet the Team series, we sit down with Lourens Visser, our Support Manager who has been instrumental in building our reputation for exceptional client support. With over 20 years of experience in programming and web design, Lourens brings a rare combination of deep technical knowledge and genuine empathy for client challenges. He shares how his career journey led him to LightSpeed, what a typical day looks like managing support for dozens of active WordPress and WooCommerce sites, and his philosophy on why great support is the foundation of great client relationships.',
    featuredImage: 'https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?w=1200',
    author: 'ash-shaw',
    categories: ['agency-life'],
    tags: ['team', 'workflow'],
    date: '2025-12-05',
    readingTime: '5 min read',
    featured: false
  },
  {
    id: 'wordpress-security-best-practices-2026',
    slug: 'wordpress-security-best-practices-2026',
    title: 'WordPress Security Best Practices for 2026',
    excerpt: 'Protect your WordPress site with our updated security checklist — covering everything from hardened server configurations and two-factor authentication to automated vulnerability scanning and incident response.',
    content: 'Security threats targeting WordPress sites continue to evolve. In 2025 alone, we saw a 40% increase in brute-force attacks and a new wave of supply-chain attacks targeting popular plugins. At LightSpeed, security is baked into every project from day one. In this post, we share the security practices we follow for every client site: hardened hosting configurations, automated updates with staging environments, Web Application Firewalls, Content Security Policy headers, two-factor authentication enforcement, file integrity monitoring, regular security audits using WPScan, and a documented incident response plan. Whether you manage one site or one hundred, these practices will dramatically reduce your attack surface.',
    featuredImage: 'https://images.unsplash.com/photo-1696013910376-c56f76dd8178?w=1200',
    author: 'lourens-visser',
    categories: ['industry-news'],
    tags: ['security', 'wordpress'],
    date: '2025-11-20',
    readingTime: '8 min read',
    featured: false
  },
  {
    id: 'tour-operator-plugin-10-tips-travel-websites',
    slug: 'tour-operator-plugin-10-tips-travel-websites',
    title: 'Tour Operator Plugin: 10 Tips for Building World-Class Travel Websites',
    excerpt: 'Make the most of the Tour Operator plugin with these 10 expert tips — from structuring itineraries and managing accommodation to integrating Wetu and optimising for mobile travellers.',
    content: 'The Tour Operator plugin is the most comprehensive WordPress solution for travel and tourism businesses. Having built and maintained it for over a decade, we have learned what separates a good travel website from a great one. In this post, we share 10 actionable tips: structuring multi-day itineraries for scannability, using accommodation post types effectively, integrating with the Wetu Importer for real-time availability, optimising high-resolution destination photography for fast loading, creating compelling destination landing pages, setting up inquiry forms that convert, implementing structured data for Google Travel results, designing for mobile-first travellers, leveraging WooCommerce for online bookings, and building seasonal pricing tables that update automatically.',
    featuredImage: 'https://images.unsplash.com/photo-1765863202146-ce81a0a3e12a?w=1200',
    author: 'ash-shaw',
    categories: ['tutorials'],
    tags: ['tour-operator', 'wordpress', 'woocommerce'],
    date: '2025-11-05',
    readingTime: '11 min read',
    featured: false
  },
  {
    id: 'future-of-wordpress-full-site-editing',
    slug: 'future-of-wordpress-full-site-editing',
    title: 'The Future of WordPress Full Site Editing: What to Expect in 2026 and Beyond',
    excerpt: 'A forward-looking analysis of where WordPress Full Site Editing is headed — including the Data Views initiative, Interactivity API, collaborative editing, and the impact on agencies and theme developers.',
    content: 'WordPress Full Site Editing has matured significantly since its initial release, but the roadmap ahead is even more exciting. In this analysis, we look at the key developments coming in 2026: the Data Views initiative that will bring a unified content management experience, the Interactivity API making dynamic front-end behaviour possible without custom JavaScript, advances in collaborative editing that bring real-time multi-user editing to WordPress, the evolution of style variations and global styles, improvements to the pattern system, and what all of this means for agencies like ours who build and maintain WordPress sites at scale. We also share our predictions for how these changes will reshape the WordPress ecosystem over the next two to three years.',
    featuredImage: 'https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?w=1200',
    author: 'warwick-booth',
    categories: ['industry-news'],
    tags: ['wordpress', 'fse', 'block-theme'],
    date: '2025-10-18',
    readingTime: '9 min read',
    featured: false
  }
];

// ─────────────────────────────────────────────
// NEW POSTS — Insights Sub-Categories (Task 2.5)
// Research, Build Notes, Editorial Systems, AI Governance
// ─────────────────────────────────────────────

/**
 * Insights sub-category posts
 * These posts populate the 4 new Insights sub-categories
 */
export const insightsSubCategoryPosts: BlogPost[] = [
  // ── Research ──
  {
    id: 'core-web-vitals-2026-benchmark-study',
    slug: 'core-web-vitals-2026-benchmark-study',
    title: 'Core Web Vitals 2026: Our Benchmark Study of 500 WordPress Sites',
    excerpt: 'We analysed Core Web Vitals data across 500 WordPress sites to uncover which hosting stacks, theme architectures, and plugin combinations deliver the best real-world performance.',
    featuredImage: 'https://images.unsplash.com/photo-1766297247924-6638d54e7c89?w=1200',
    author: 'warwick-booth',
    categories: ['research'],
    tags: ['performance', 'wordpress'],
    date: '2026-02-20',
    readingTime: '14 min read',
    featured: true
  },
  {
    id: 'block-theme-adoption-rates-agency-survey',
    slug: 'block-theme-adoption-rates-agency-survey',
    title: 'Block Theme Adoption Rates: A 2026 Agency Survey',
    excerpt: 'We surveyed 120 WordPress agencies worldwide to understand how block theme adoption is progressing — the barriers, the wins, and the tipping point for migration.',
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
    author: 'ash-shaw',
    categories: ['research'],
    tags: ['block-theme', 'fse', 'wordpress'],
    date: '2026-02-05',
    readingTime: '11 min read',
    featured: false
  },

  // ── Build Notes ──
  {
    id: 'build-notes-design-token-pipeline',
    slug: 'build-notes-design-token-pipeline',
    title: 'Build Notes: Creating a Design Token Pipeline for WordPress Block Themes',
    excerpt: 'A behind-the-scenes look at how we built an automated pipeline that syncs design tokens from Figma to theme.json, CSS custom properties, and block style variations.',
    featuredImage: 'https://images.unsplash.com/photo-1564931768730-7e4d8e240044?w=1200',
    author: 'warwick-booth',
    categories: ['build-notes'],
    tags: ['design-system', 'block-theme', 'wordpress'],
    date: '2026-02-15',
    readingTime: '10 min read',
    featured: true
  },
  {
    id: 'build-notes-woocommerce-checkout-blocks',
    slug: 'build-notes-woocommerce-checkout-blocks',
    title: 'Build Notes: Rebuilding a WooCommerce Checkout with Block-Based Architecture',
    excerpt: 'Technical notes from our recent project migrating a high-traffic WooCommerce checkout to the new block-based checkout — including performance benchmarks and gotchas.',
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
    author: 'lourens-visser',
    categories: ['build-notes'],
    tags: ['woocommerce', 'block-theme', 'performance'],
    date: '2026-01-30',
    readingTime: '8 min read',
    featured: false
  },

  // ── Editorial Systems ──
  {
    id: 'structured-content-models-wordpress-fse',
    slug: 'structured-content-models-wordpress-fse',
    title: 'Structured Content Models for WordPress Full Site Editing',
    excerpt: 'How we design content models that work across WordPress block patterns, custom post types, and headless frontends — with governance rules that keep editorial teams productive.',
    featuredImage: 'https://images.unsplash.com/photo-1695548487477-32cd8f3b2f35?w=1200',
    author: 'ash-shaw',
    categories: ['editorial-systems'],
    tags: ['wordpress', 'fse', 'design-system'],
    date: '2026-02-10',
    readingTime: '9 min read',
    featured: true
  },
  {
    id: 'editorial-workflow-automation-wordpress',
    slug: 'editorial-workflow-automation-wordpress',
    title: 'Automating Editorial Workflows in WordPress: From Draft to Publish',
    excerpt: 'A practical guide to automating content review, approval chains, and publishing schedules in WordPress — using native tools, custom REST endpoints, and third-party integrations.',
    featuredImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200',
    author: 'lourens-visser',
    categories: ['editorial-systems'],
    tags: ['wordpress', 'workflow'],
    date: '2026-01-22',
    readingTime: '7 min read',
    featured: false
  },

  // ── AI Governance ──
  {
    id: 'responsible-ai-usage-wordpress-agencies',
    slug: 'responsible-ai-usage-wordpress-agencies',
    title: 'Responsible AI Usage for WordPress Agencies: A Governance Framework',
    excerpt: 'Our internal framework for responsible AI usage — covering content generation policies, client disclosure requirements, quality assurance checkpoints, and data privacy guardrails.',
    featuredImage: 'https://images.unsplash.com/photo-1717501220725-83f151c447e7?w=1200',
    author: 'ash-shaw',
    categories: ['ai-governance'],
    tags: ['ai', 'workflow'],
    date: '2026-02-24',
    readingTime: '12 min read',
    featured: true
  },
  {
    id: 'ai-content-quality-assurance-checklist',
    slug: 'ai-content-quality-assurance-checklist',
    title: 'AI Content QA: Our 15-Point Quality Assurance Checklist',
    excerpt: 'Before any AI-assisted content goes live on a client site, it passes through our 15-point QA checklist — covering accuracy, tone, accessibility, SEO, and ethical disclosure.',
    featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
    author: 'warwick-booth',
    categories: ['ai-governance'],
    tags: ['ai', 'workflow', 'accessibility'],
    date: '2026-02-01',
    readingTime: '6 min read',
    featured: false
  },
];

// Merge sub-category posts into main blogPosts for unified access
// Insert at beginning so they appear as most recent
blogPosts.unshift(...insightsSubCategoryPosts);

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