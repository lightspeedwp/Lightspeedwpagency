/**
 * Route Map Utility
 * 
 * Maps legacy flat slugs to hierarchical WordPress-style URL paths.
 * Provides bidirectional conversion between slug-based navigation
 * and URL-based React Router navigation.
 * 
 * @see /src/app/contexts/NavigationContext.tsx - Consumes this mapping
 * @see /src/app/routes.tsx - Route definitions
 */

/**
 * Static slug-to-path mapping
 * 
 * Maps every flat slug used in the legacy NavigationContext system
 * to its new hierarchical URL path.
 */
const SLUG_TO_PATH: Record<string, string> = {
  /* ── Home ── */
  'front-page': '/',
  'home': '/',

  /* ── About ── */
  'about': '/about',
  'about-process': '/about/process',
  'about-culture': '/about/culture',
  'about-history': '/about/history',
  'team': '/about/team',
  'careers': '/about/careers',

  /* ── Services ── */
  'services': '/services',
  'discovery': '/services/discovery',
  'design': '/services/design',
  'development': '/services/development',
  'content': '/services/content',
  'content-strategy': '/services/content/strategy',
  'content-collection': '/services/content/collection',
  'content-audit': '/services/content/audit',
  'security': '/services/security',
  'migrations': '/services/migrations',
  'support': '/services/support',
  'newsletter-service': '/services/newsletter',
  'email-marketing': '/services/email-marketing',
  'training': '/services/training',
  'hosting': '/services/hosting',
  'performance': '/services/performance',
  'seo': '/services/seo',
  'accessibility': '/services/accessibility',
  'ai-engine-optimisation': '/services/ai-engine-optimisation',
  'answer-engine-optimisation': '/services/answer-engine-optimisation',

  /* ── Journey Stage Pages ── */
  'journey-ignite': '/services/ignite',
  'journey-create': '/services/create',
  'journey-build': '/services/build',
  'journey-launch': '/services/launch',
  'journey-grow': '/services/grow',
  'journey-evolve': '/services/evolve',

  /* ── Services (legacy "with suffix" routes) ── */
  'discovery-service': '/services/discovery',
  'design-service': '/services/design',
  'development-service': '/services/development',
  'content-service': '/services/content',
  'migrations-service': '/services/migrations',
  'security-service': '/services/security',
  'support-service': '/services/support',

  /* ── Solutions ── */
  'solutions': '/solutions',
  'wordpress': '/solutions/wordpress',
  'woocommerce': '/solutions/woocommerce',
  'tour-operators': '/solutions/tour-operators',
  'publishers': '/solutions/publishers',
  'lsx': '/solutions/lsx',
  'lsx-theme': '/solutions/lsx-theme',
  'mailchimp': '/solutions/mailchimp',
  'wetu-importer': '/solutions/wetu-importer',
  'lsx-sharing': '/solutions/lsx-sharing',
  'lsx-search': '/solutions/lsx-search',

  /* ── New Solution Pages ── */
  'wordpress-redesign': '/solutions/wordpress-redesign',
  'woocommerce-redesign': '/solutions/woocommerce-redesign',
  'tour-operator-design': '/solutions/tour-operator-design',

  /* ── AI Integrations ── */
  'ai-integrations': '/solutions/ai-integrations',
  'ai-content-generation': '/solutions/ai-content-generation',
  'ai-seo': '/solutions/ai-seo',
  'ai-chatbots': '/solutions/ai-chatbots',
  'ai-analytics': '/solutions/ai-analytics',

  /* ── Solutions (legacy "with suffix" routes) ── */
  'wordpress-solutions': '/solutions/wordpress',
  'wordpress-solution': '/solutions/wordpress',
  'woocommerce-solutions': '/solutions/woocommerce',
  'woocommerce-solution': '/solutions/woocommerce',
  'tour-operator-solutions': '/solutions/tour-operators',
  'lsx-design-solutions': '/solutions/lsx',
  'lsx-design': '/solutions/lsx',

  /* ── Portfolio ── */
  'portfolio': '/portfolio',
  'portfolio-archive': '/portfolio',
  'portfolio-single': '/portfolio',

  /* ── Blog ── */
  'blog': '/blog',
  'single-post': '/blog',
  'category': '/blog/category',
  'author': '/blog/author',
  'tag-archive': '/blog/tag',
  'date-archive': '/blog/date',

  /* ── Contact ── */
  'contact': '/contact',

  /* ── FAQ ── */
  'faq': '/faq',
  'faqs': '/faq',

  /* ── Tutorials ── */
  'tutorials': '/tutorials',

  /* ── Pricing & Business ── */
  'pricing': '/pricing',
  'why-choose-us': '/why-choose-us',
  'guarantees': '/guarantees',
  'roi-calculator': '/roi-calculator',
  'testimonials': '/testimonials',

  /* ── Legal ── */
  'privacy-policy': '/privacy-policy',
  'terms-of-service': '/terms-of-service',
  'terms-conditions': '/terms-of-service',

  /* ── Search ── */
  'search': '/search',
  'search-page': '/search',

  /* ── Utility ── */
  '404': '/404',
  'site-map': '/site-map',
  'style-guide': '/style-guide',

  /* ── Legacy Service Pages ── */
  'wordpress-development': '/services',
  'woocommerce-development': '/services',
  'block-theme-development': '/services',
  'design-systems': '/services',
  'accessibility-services': '/services/accessibility',
  'performance-optimization': '/services/performance',
  'site-migration': '/services',
  'maintenance-support': '/services',

  /* ── Legacy Solution Pages ── */
  'solutions-wordpress': '/solutions/wordpress',
  'solutions-woocommerce': '/solutions/woocommerce',
  'solutions-multisite': '/solutions',
  'solutions-headless': '/solutions',

  /* ── Legacy Hosting Pages ── */
  'hosting-plans': '/services/hosting',
  'hosting-features': '/services/hosting',
  'hosting-support': '/services/hosting',

  /* ── Legacy Resource Pages ── */
  'documentation': '/faq',
  'case-studies': '/faq',
  'whitepapers': '/faq',
  'cookie-policy': '/contact',

  /* ── Dev Tools ── */
  'dev-tools': '/dev-tools',
  'template-tester': '/dev-tools/template-tester',
  'component-showcase': '/dev-tools/component-showcase',
  'feature-showcase': '/dev-tools/feature-showcase',
  'design-system-test': '/dev-tools/design-system-test',
  'compliance-scorecard': '/dev-tools/compliance-scorecard',
  'block-documentation': '/dev-tools/block-documentation',
  'component-api': '/dev-tools/component-api',
  'design-blocks-showcase': '/dev-tools/design-blocks-showcase',
  'button-showcase': '/dev-tools/button-showcase',
  'header-footer-comparison': '/dev-tools/header-footer-comparison',
  'icon-library': '/dev-tools/icon-library',
  'live-preview': '/dev-tools/live-preview',
  'section-presets-showcase': '/dev-tools/section-presets-showcase',
  'theme-blocks-showcase': '/dev-tools/theme-blocks-showcase',
  'design-tokens-reference': '/dev-tools/design-tokens-reference',
  'deployment-readiness': '/dev-tools/deployment-readiness',
  'design-playground': '/dev-tools/design-playground',
  'code-quality-dashboard': '/dev-tools/code-quality-dashboard',
  'docs-generator': '/dev-tools/docs-generator',
  'snippet-generator': '/dev-tools/snippet-generator',
  'dev-tools-style-guide': '/dev-tools/style-guide',

  /* ── Misc legacy ── */
  'wordpress-blocks-poc': '/wordpress-blocks-poc',
  'section-style-example': '/section-style-example',
  'archive': '/archive',
  'archive-filters': '/archive/filters',
  'index': '/index',
  'single': '/single',

  /* ── Post Formats (Archives) ── */
  'audio-archive': '/blog/format/audio',
  'video-archive': '/blog/format/video',
  'gallery-archive': '/blog/format/gallery',
  'image-archive': '/blog/format/image',
  'quote-archive': '/blog/format/quote',
  'link-archive': '/blog/format/link',
  'chat-archive': '/blog/format/chat',
  'status-archive': '/blog/format/status',
  'standard-archive': '/blog/format/standard',
  'aside-archive': '/blog/format/aside',
  'aside-stream': '/blog/format/aside-stream',

  /* ── Post Formats (Singles) ── */
  'audio-single': '/blog/format/audio/single',
  'video-single': '/blog/format/video/single',
  'gallery-single': '/blog/format/gallery/single',
  'image-single': '/blog/format/image/single',
  'quote-single': '/blog/format/quote/single',
  'link-single': '/blog/format/link/single',
  'chat-single': '/blog/format/chat/single',
  'status-single': '/blog/format/status/single',
  'standard-single': '/blog/format/standard/single',
  'aside-single': '/blog/format/aside/single',

  /* ── WooCommerce ── */
  'product-archive': '/shop',
  'cart': '/cart',
  'checkout': '/checkout',

  /* ── Tour Operator ── */
  'tour-operator-archive': '/tours',
  'tour-single': '/tours',

  /* ── Videos ── */
  'videos-archive': '/videos',
  'videos': '/videos',

  /* ── Podcasts ── */
  'podcast-archive': '/podcasts',
  'podcasts': '/podcasts',
};

/**
 * Build reverse map (path → slug) for the most common lookups
 */
const PATH_TO_SLUG: Record<string, string> = {};
for (const [slug, path] of Object.entries(SLUG_TO_PATH)) {
  // First slug wins (avoids aliases overwriting the canonical slug)
  if (!PATH_TO_SLUG[path]) {
    PATH_TO_SLUG[path] = slug;
  }
}

/**
 * Convert a legacy flat slug to a hierarchical URL path.
 * 
 * Handles both static slugs and dynamic patterns like:
 * - `portfolio-single-{project}` → `/portfolio/{project}`
 * - `post-{slug}` → `/blog/{slug}`
 * - `category-{slug}` → `/blog/category/{slug}`
 * - `author-{slug}` → `/blog/author/{slug}`
 * - `tag-{tag}` → `/blog/tag/{tag}`
 * - `date-{year}-{month}` → `/blog/date/{year}/{month}`
 * - `service-{name}` → `/services/{name}`
 * - `solution-{name}` → `/solutions/{name}`
 * - `product-single-{slug}` → `/shop/{slug}`
 * 
 * @param slug - Flat slug from legacy navigation
 * @returns Hierarchical URL path
 */
export function slugToPath(slug: string): string {
  // 1. Check static map
  if (SLUG_TO_PATH[slug]) return SLUG_TO_PATH[slug];

  // 2. Dynamic patterns
  if (slug.startsWith('portfolio-single-')) {
    return `/portfolio/${slug.replace('portfolio-single-', '')}`;
  }
  if (slug.startsWith('portfolio-category-')) {
    return `/portfolio/category/${slug.replace('portfolio-category-', '')}`;
  }
  if (slug.startsWith('portfolio-tag-')) {
    return `/portfolio/tag/${slug.replace('portfolio-tag-', '')}`;
  }
  if (slug.startsWith('product-single-')) {
    return `/shop/${slug.replace('product-single-', '')}`;
  }
  if (slug.startsWith('post-')) {
    return `/blog/${slug.replace('post-', '')}`;
  }
  if (slug.startsWith('category-')) {
    return `/blog/category/${slug.replace('category-', '')}`;
  }
  if (slug.startsWith('author-')) {
    return `/blog/author/${slug.replace('author-', '')}`;
  }
  if (slug.startsWith('tag-')) {
    return `/blog/tag/${slug.replace('tag-', '')}`;
  }
  if (slug.startsWith('date-')) {
    const parts = slug.replace('date-', '').split('-');
    return `/blog/date/${parts[0]}${parts[1] ? '/' + parts[1] : ''}`;
  }
  if (slug.startsWith('service-')) {
    const serviceName = slug.replace('service-', '');
    return SLUG_TO_PATH[serviceName] || `/services/${serviceName}`;
  }
  if (slug.startsWith('solution-')) {
    const solutionName = slug.replace('solution-', '');
    return SLUG_TO_PATH[solutionName] || `/solutions/${solutionName}`;
  }
  if (slug.startsWith('dev-tools/')) {
    return `/dev-tools/${slug.replace('dev-tools/', '')}`;
  }
  if (slug.startsWith('tour-single-')) {
    return `/tours/${slug.replace('tour-single-', '')}`;
  }

  // Video patterns
  if (slug.startsWith('video-category-')) {
    return `/videos/category/${slug.replace('video-category-', '')}`;
  }
  if (slug.startsWith('video-tag-')) {
    return `/videos/tag/${slug.replace('video-tag-', '')}`;
  }
  if (slug.startsWith('video-') && !slug.startsWith('video-archive') && !slug.startsWith('video-tag-')) {
    return `/video/${slug.replace('video-', '')}`;
  }

  // Podcast patterns
  if (slug.startsWith('podcast-category-')) {
    return `/podcasts/category/${slug.replace('podcast-category-', '')}`;
  }
  if (slug.startsWith('podcast-') && !slug.startsWith('podcast-archive')) {
    return `/podcast/${slug.replace('podcast-', '')}`;
  }

  // Testimonial patterns
  if (slug === 'testimonial-archive') return '/testimonials/archive';
  if (slug.startsWith('testimonial-audio-')) {
    return `/testimonials/audio/${slug.replace('testimonial-audio-', '')}`;
  }
  if (slug.startsWith('testimonial-video-')) {
    return `/testimonials/video/${slug.replace('testimonial-video-', '')}`;
  }
  if (slug.startsWith('testimonial-gallery-')) {
    return `/testimonials/gallery/${slug.replace('testimonial-gallery-', '')}`;
  }
  if (slug.startsWith('testimonial-standard-')) {
    return `/testimonials/${slug.replace('testimonial-standard-', '')}`;
  }
  if (slug.startsWith('testimonial-')) {
    return `/testimonials/${slug.replace('testimonial-', '')}`;
  }

  // Date archive patterns
  const dateYearMatch = slug.match(/^date-(\d{4})$/);
  if (dateYearMatch) return `/blog/date/${dateYearMatch[1]}`;

  // 3. Fallback: treat as path
  return `/${slug}`;
}

/**
 * Convert a URL path back to a legacy flat slug.
 * Used by the NavigationContext bridge for backward compatibility.
 * 
 * @param path - URL path from React Router location
 * @returns Legacy flat slug
 */
export function pathToSlug(path: string): string {
  // Normalize path
  const normalized = path.endsWith('/') && path !== '/'
    ? path.slice(0, -1)
    : path;

  // 1. Check static reverse map
  if (PATH_TO_SLUG[normalized]) return PATH_TO_SLUG[normalized];

  // 2. Dynamic patterns
  const portfolioMatch = normalized.match(/^\/portfolio\/(?!category|tag)(.+)$/);
  if (portfolioMatch) return `portfolio-single-${portfolioMatch[1]}`;

  const portfolioCatMatch = normalized.match(/^\/portfolio\/category\/(.+)$/);
  if (portfolioCatMatch) return `portfolio-category-${portfolioCatMatch[1]}`;

  const portfolioTagMatch = normalized.match(/^\/portfolio\/tag\/(.+)$/);
  if (portfolioTagMatch) return `portfolio-tag-${portfolioTagMatch[1]}`;

  const shopMatch = normalized.match(/^\/shop\/(.+)$/);
  if (shopMatch) return `product-single-${shopMatch[1]}`;

  const blogPostMatch = normalized.match(/^\/blog\/(?!category|author|tag|date|format)(.+)$/);
  if (blogPostMatch) return `post-${blogPostMatch[1]}`;

  const categoryMatch = normalized.match(/^\/blog\/category\/(.+)$/);
  if (categoryMatch) return `category-${categoryMatch[1]}`;

  const authorMatch = normalized.match(/^\/blog\/author\/(.+)$/);
  if (authorMatch) return `author-${authorMatch[1]}`;

  const tagMatch = normalized.match(/^\/blog\/tag\/(.+)$/);
  if (tagMatch) return `tag-${tagMatch[1]}`;

  const dateMatch = normalized.match(/^\/blog\/date\/(\d{4})(?:\/(\d{1,2}))?$/);
  if (dateMatch) return `date-${dateMatch[1]}${dateMatch[2] ? '-' + dateMatch[2] : ''}`;

  const toursMatch = normalized.match(/^\/tours\/(.+)$/);
  if (toursMatch) return `tour-single-${toursMatch[1]}`;

  // Video patterns
  const videoCatMatch = normalized.match(/^\/videos\/category\/(.+)$/);
  if (videoCatMatch) return `video-category-${videoCatMatch[1]}`;

  const videoTagMatch = normalized.match(/^\/videos\/tag\/(.+)$/);
  if (videoTagMatch) return `video-tag-${videoTagMatch[1]}`;

  const videoMatch = normalized.match(/^\/video\/(.+)$/);
  if (videoMatch) return `video-${videoMatch[1]}`;

  // Podcast patterns
  const podcastCatMatch = normalized.match(/^\/podcasts\/category\/(.+)$/);
  if (podcastCatMatch) return `podcast-category-${podcastCatMatch[1]}`;

  const podcastMatch = normalized.match(/^\/podcast\/(.+)$/);
  if (podcastMatch) return `podcast-${podcastMatch[1]}`;

  // Testimonial patterns
  if (normalized === '/testimonials/archive') return 'testimonial-archive';
  const testimonialAudioMatch = normalized.match(/^\/testimonials\/audio\/(.+)$/);
  if (testimonialAudioMatch) return `testimonial-audio-${testimonialAudioMatch[1]}`;
  const testimonialVideoMatch = normalized.match(/^\/testimonials\/video\/(.+)$/);
  if (testimonialVideoMatch) return `testimonial-video-${testimonialVideoMatch[1]}`;
  const testimonialGalleryMatch = normalized.match(/^\/testimonials\/gallery\/(.+)$/);
  if (testimonialGalleryMatch) return `testimonial-gallery-${testimonialGalleryMatch[1]}`;
  const testimonialStandardMatch = normalized.match(/^\/testimonials\/(.+)$/);
  if (testimonialStandardMatch) return `testimonial-standard-${testimonialStandardMatch[1]}`;

  // Date archive patterns
  const dateYearMatch = normalized.match(/^\/blog\/date\/(\d{4})$/);
  if (dateYearMatch) return `date-${dateYearMatch[1]}`;

  // 3. Fallback: strip leading slash
  return normalized.replace(/^\//, '') || 'front-page';
}

/**
 * Get all static slug entries (for debugging/sitemap)
 */
export function getAllStaticRoutes(): Array<{ slug: string; path: string }> {
  return Object.entries(SLUG_TO_PATH).map(([slug, path]) => ({ slug, path }));
}