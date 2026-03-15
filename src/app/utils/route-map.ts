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
  'content-services-landing': '/services/content',
  'content-overview': '/services/content/overview',
  'content-strategy': '/services/content/strategy',
  'content-collection': '/services/content/collection',
  'content-audit': '/services/content/audit',
  'content-creation': '/services/content/creation',
  'content-copywriting': '/services/content/copywriting',
  'content-seo-content': '/services/content/seo-content',
  'content-governance': '/services/content/governance',
  'security': '/services/security',
  'migrations': '/services/migrations',
  'support': '/services/support',
  'newsletter-service': '/services/newsletter',
  'email-marketing': '/services/email-marketing',
  'training': '/services/training',
  'hosting': '/services/hosting',
  'performance': '/services/performance',
  'ai-services-landing': '/services/ai',
  'ai-search-visibility': '/services/ai/search-visibility',
  'seo': '/services/ai/seo',
  'accessibility': '/services/accessibility',
  'ai-engine-optimisation': '/services/ai/engine-optimisation',
  'answer-engine-optimisation': '/services/ai/answer-engine-optimisation',
  'analytics': '/services/ai/analytics',
  'figma-prototyping': '/services/figma-prototyping',
  'design-systems-service': '/services/design-systems',

  /* ── Journey Stage Pages ── */
  'journey-ignite': '/services/ignite',
  'journey-create': '/services/create',
  'journey-build': '/services/build',
  'journey-launch': '/services/launch',
  'journey-grow': '/services/grow',
  'journey-evolve': '/services/evolve',

  /* ── Systems Hub (Phase 1 - Tasks 1.1, 1.2) ── */
  'systems': '/systems',
  'systems-hub': '/systems',
  'design-tokens': '/systems/design-tokens',
  'pattern-governance': '/systems/pattern-governance',
  'editorial-workflows': '/systems/editorial-workflows',
  'ai-search-readiness': '/systems/ai-search-readiness',
  'performance-reliability': '/systems/performance-reliability',

  /* ── Services (legacy "with suffix" routes) ── */
  'discovery-service': '/services/discovery',
  'design-service': '/services/design',
  'development-service': '/services/development',
  'content-service': '/services/content',
  'migrations-service': '/services/migrations',
  'security-service': '/services/security',
  'support-service': '/services/support',
  'performance-service': '/services/performance',
  'accessibility-service': '/services/accessibility',
  'hosting-service': '/services/hosting',
  'training-service': '/services/training',
  'woocommerce-service': '/solutions/woocommerce',

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
  'publishers-solution': '/solutions/publishers',

  /* ── Work ── */
  'portfolio': '/work',
  'portfolio-archive': '/work',
  'portfolio-single': '/work',
  'work': '/work',
  'work-archive': '/work',

  /* ── Insights ── */
  'blog': '/insights',  // Backward compatibility
  'insights': '/insights',  // New preferred slug
  'insights-archive': '/insights',
  'single-post': '/insights',
  'category': '/insights/category',
  'author': '/insights/author',
  'tag-archive': '/insights/tag',
  'date-archive': '/insights/date',

  /* ── Insights Sub-Categories (Task 2.5) ── */
  'insights-research': '/insights/category/research',
  'insights-build-notes': '/insights/category/build-notes',
  'insights-editorial-systems': '/insights/category/editorial-systems',
  'insights-ai-governance': '/insights/category/ai-governance',

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
  'design-systems': '/services/design-systems',   // Active route exists
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
  'audio-archive': '/insights/format/audio',
  'video-archive': '/insights/format/video',
  'gallery-archive': '/insights/format/gallery',
  'image-archive': '/insights/format/image',
  'quote-archive': '/insights/format/quote',
  'link-archive': '/insights/format/link',
  'chat-archive': '/insights/format/chat',
  'status-archive': '/insights/format/status',
  'standard-archive': '/insights/format/standard',
  'aside-archive': '/insights/format/aside',
  'aside-stream': '/insights/format/aside-stream',

  /* ── Post Formats (Singles) ── */
  'audio-single': '/insights/format/audio/single',
  'video-single': '/insights/format/video/single',
  'gallery-single': '/insights/format/gallery/single',
  'image-single': '/insights/format/image/single',
  'quote-single': '/insights/format/quote/single',
  'link-single': '/insights/format/link/single',
  'chat-single': '/insights/format/chat/single',
  'status-single': '/insights/format/status/single',
  'standard-single': '/insights/format/standard/single',
  'aside-single': '/insights/format/aside/single',

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
 * - `work-single-{project}` → `/work/{project}`
 * - `insight-{slug}` → `/insights/{slug}`
 * - `category-{slug}` → `/insights/category/{slug}`
 * - `author-{slug}` → `/insights/author/{slug}`
 * - `tag-{tag}` → `/insights/tag/{tag}`
 * - `date-{year}-{month}` → `/insights/date/{year}/{month}`
 * - `service-{name}` → `/services/{name}`
 * - `solution-{name}` → `/solutions/{name}`
 * 
 * @param slug - Flat slug from legacy navigation
 * @returns Hierarchical URL path
 */
export function slugToPath(slug: string): string {
  // 1. Check static map
  if (SLUG_TO_PATH[slug]) return SLUG_TO_PATH[slug];

  // 2. Dynamic patterns
  if (slug.startsWith('portfolio-single-') || slug.startsWith('work-single-')) {
    return `/work/${slug.replace('portfolio-single-', '').replace('work-single-', '')}`;
  }
  if (slug.startsWith('portfolio-category-') || slug.startsWith('work-category-')) {
    return `/work/category/${slug.replace('portfolio-category-', '').replace('work-category-', '')}`;
  }
  if (slug.startsWith('portfolio-tag-') || slug.startsWith('work-tag-')) {
    return `/work/tag/${slug.replace('portfolio-tag-', '').replace('work-tag-', '')}`;
  }
  if (slug.startsWith('post-') || slug.startsWith('insight-')) {
    return `/insights/${slug.replace('post-', '').replace('insight-', '')}`;
  }
  if (slug.startsWith('category-')) {
    return `/insights/category/${slug.replace('category-', '')}`;
  }
  if (slug.startsWith('author-')) {
    return `/insights/author/${slug.replace('author-', '')}`;
  }
  if (slug.startsWith('tag-')) {
    return `/insights/tag/${slug.replace('tag-', '')}`;
  }
  if (slug.startsWith('date-')) {
    const parts = slug.replace('date-', '').split('-');
    return `/insights/date/${parts[0]}${parts[1] ? '/' + parts[1] : ''}`;
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
  if (slug.startsWith('tutorial-')) {
    return `/tutorials/${slug.replace('tutorial-', '')}`;
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
  if (dateYearMatch) return `/insights/date/${dateYearMatch[1]}`;

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
  const workMatch = normalized.match(/^\/work\/(?!category|tag)(.+)$/);
  if (workMatch) return `work-single-${workMatch[1]}`;

  const workCatMatch = normalized.match(/^\/work\/category\/(.+)$/);
  if (workCatMatch) return `work-category-${workCatMatch[1]}`;

  const workTagMatch = normalized.match(/^\/work\/tag\/(.+)$/);
  if (workTagMatch) return `work-tag-${workTagMatch[1]}`;

  const insightsPostMatch = normalized.match(/^\/insights\/(?!category|author|tag|date|format)(.+)$/);
  if (insightsPostMatch) return `post-${insightsPostMatch[1]}`;

  const categoryMatch = normalized.match(/^\/insights\/category\/(.+)$/);
  if (categoryMatch) return `category-${categoryMatch[1]}`;

  const authorMatch = normalized.match(/^\/insights\/author\/(.+)$/);
  if (authorMatch) return `author-${authorMatch[1]}`;

  const tagMatch = normalized.match(/^\/insights\/tag\/(.+)$/);
  if (tagMatch) return `tag-${tagMatch[1]}`;

  const dateMatch = normalized.match(/^\/insights\/date\/(\d{4})(?:\/(\d{1,2}))?$/);
  if (dateMatch) return `date-${dateMatch[1]}${dateMatch[2] ? '-' + dateMatch[2] : ''}`;

  const tutorialsMatch = normalized.match(/^\/tutorials\/(.+)$/);
  if (tutorialsMatch) return `tutorial-${tutorialsMatch[1]}`;

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
  const dateYearMatch = normalized.match(/^\/insights\/date\/(\d{4})$/);
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