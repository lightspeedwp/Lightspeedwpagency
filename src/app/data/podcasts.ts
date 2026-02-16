/**
 * Podcasts Data
 *
 * Centralized podcast content for the LSX Design podcast feed.
 *
 * **WordPress Mapping:**
 * - Custom Post Type: 'podcast' (or post format 'audio')
 * - Taxonomies: 'podcast_category'
 * - ACF fields for audio URL, duration, season, episode, etc.
 *
 * @see /guidelines/templates/podcast-archive.md
 */

export interface Podcast {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  showNotes?: string;
  featuredImage: string;
  audioUrl: string;
  duration: string;
  durationSeconds: number;
  season: number;
  episode: number;
  categories: string[];
  guests?: { name: string; role: string; company: string }[];
  author: string;
  date: string;
  featured: boolean;
  listens: number;
  subscribeLinks?: {
    apple?: string;
    spotify?: string;
    google?: string;
    rss?: string;
  };
}

export interface PodcastCategory {
  slug: string;
  name: string;
  description: string;
  count: number;
}

/**
 * Podcast Categories
 */
export const podcastCategories: PodcastCategory[] = [
  {
    slug: 'interviews',
    name: 'Interviews',
    description: 'Conversations with WordPress community leaders, developers, and industry experts.',
    count: 2
  },
  {
    slug: 'tech-talk',
    name: 'Tech Talk',
    description: 'Deep dives into WordPress development, block themes, and modern web technologies.',
    count: 3
  },
  {
    slug: 'business',
    name: 'Business',
    description: 'Agency life, client relationships, and building a successful WordPress business.',
    count: 1
  }
];

/**
 * Podcasts
 */
export const podcasts: Podcast[] = [
  {
    id: 'welcome-to-lsx-design',
    slug: 'welcome-to-lsx-design',
    title: 'Welcome to the LSX Design Podcast',
    excerpt: 'In our inaugural episode, we introduce the LSX Design podcast — a show about modern WordPress development, block themes, design systems, and building better websites for our clients.',
    content: 'Welcome to the very first episode of the LSX Design Podcast! In this introductory episode, we share who we are, what drives our passion for WordPress and WooCommerce development, and what you can expect from this podcast series. We discuss our journey from a small Cape Town agency to a globally recognised WordPress partner, the evolution of block themes, and our vision for the future of web development.',
    showNotes: '- Introduction to the LSX Design team\n- Our WordPress journey since 2009\n- What to expect from this podcast\n- The evolution of block themes and Full Site Editing\n- Why design systems matter\n- Upcoming episodes preview',
    featuredImage: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200',
    audioUrl: 'https://example.com/podcasts/welcome-to-lsx-design.mp3',
    duration: '22:15',
    durationSeconds: 1335,
    season: 1,
    episode: 1,
    categories: ['tech-talk'],
    guests: [],
    author: 'Ash Shaw',
    date: '2025-12-01',
    featured: true,
    listens: 342,
    subscribeLinks: {
      apple: 'https://podcasts.apple.com/lsx-design',
      spotify: 'https://open.spotify.com/show/lsx-design',
      google: 'https://podcasts.google.com/lsx-design',
      rss: 'https://lsxdesign.com/feed/podcast'
    }
  },
  // ─────────────────────────────────────────────
  // NEW EPISODES — Added February 16, 2026
  // ─────────────────────────────────────────────
  {
    id: 'block-theme-deep-dive',
    slug: 'block-theme-deep-dive',
    title: 'Block Theme Deep Dive: theme.json, Patterns, and Style Variations',
    excerpt: 'We break down the three pillars of modern WordPress block themes — theme.json configuration, reusable patterns, and style variations — and share the techniques we use on every client project.',
    content: 'In this technical episode, Warwick walks through the architecture of a production-ready block theme. Starting with theme.json, we cover how to define design tokens for colours, typography, and spacing that map directly to the WordPress editor. Then we move into block patterns — the reusable content sections that make up every page — and explain our pattern naming convention, registration strategy, and composition rules. Finally, we explore style variations and how they allow a single theme to offer multiple visual styles without duplicating code. This is the episode for developers who want to build themes the right way.',
    showNotes: '- theme.json deep dive: settings, styles, and customTemplates\n- Design tokens and CSS variable mapping\n- Pattern creation workflow: slug naming, categories, and PHP registration\n- Style variations for light/dark mode and brand variants\n- Common mistakes and how to avoid them\n- Tools and linting setup for block theme development',
    featuredImage: 'https://images.unsplash.com/photo-1627667050609-d4ba6483a368?w=1200',
    audioUrl: 'https://example.com/podcasts/block-theme-deep-dive.mp3',
    duration: '38:42',
    durationSeconds: 2322,
    season: 1,
    episode: 2,
    categories: ['tech-talk'],
    guests: [],
    author: 'Warwick Booth',
    date: '2025-12-15',
    featured: true,
    listens: 287,
    subscribeLinks: {
      apple: 'https://podcasts.apple.com/lsx-design',
      spotify: 'https://open.spotify.com/show/lsx-design',
      rss: 'https://lsxdesign.com/feed/podcast'
    }
  },
  {
    id: 'interview-wordpress-community-leader',
    slug: 'interview-wordpress-community-leader',
    title: 'Building Community: A Conversation with a WordPress Core Contributor',
    excerpt: 'We sit down with a long-time WordPress core contributor to discuss the open-source community, the challenges of scaling Gutenberg, and what it takes to contribute meaningfully to the project.',
    content: 'In our first interview episode, Ash speaks with a seasoned WordPress core contributor about the inner workings of the WordPress open-source project. We discuss how contribution decisions are made, the challenges of maintaining backward compatibility while pushing Gutenberg forward, and practical advice for developers who want to get involved. The conversation also touches on the diversity and inclusion efforts within the WordPress community and how meetups and WordCamps have shaped the ecosystem.',
    showNotes: '- How WordPress core contributions work\n- The Gutenberg roadmap: phases and priorities\n- Advice for first-time contributors\n- Diversity and inclusion in WordPress\n- The role of WordCamps and community meetups\n- What excites core contributors about WordPress in 2026',
    featuredImage: 'https://images.unsplash.com/photo-1758520144437-f068ecaf0d83?w=1200',
    audioUrl: 'https://example.com/podcasts/interview-wordpress-community-leader.mp3',
    duration: '45:18',
    durationSeconds: 2718,
    season: 1,
    episode: 3,
    categories: ['interviews'],
    guests: [
      { name: 'Sarah Chen', role: 'Core Contributor', company: 'WordPress.org' }
    ],
    author: 'Ash Shaw',
    date: '2026-01-05',
    featured: false,
    listens: 198,
    subscribeLinks: {
      apple: 'https://podcasts.apple.com/lsx-design',
      spotify: 'https://open.spotify.com/show/lsx-design',
      rss: 'https://lsxdesign.com/feed/podcast'
    }
  },
  {
    id: 'accessibility-first-development',
    slug: 'accessibility-first-development',
    title: 'Accessibility-First Development: Why It Matters and How We Do It',
    excerpt: 'Accessibility is not an afterthought at LightSpeed — it is a core development principle. We explain our accessibility-first workflow and share practical techniques for building WCAG 2.1 AA compliant WordPress sites.',
    content: 'In this episode, Lourens and Warwick discuss why accessibility is a non-negotiable part of every LightSpeed project. We cover the legal and ethical reasons for building accessible websites, the specific WCAG 2.1 AA criteria we target, and the tools and testing methods we use during development. Lourens shares stories from support cases where accessibility improvements dramatically improved client satisfaction, and Warwick walks through code examples of common accessibility patterns — from keyboard navigation and focus management to ARIA attributes and semantic HTML. Whether you are new to accessibility or looking to level up, this episode has actionable takeaways.',
    showNotes: '- Why accessibility is a business requirement, not just a nice-to-have\n- WCAG 2.1 AA criteria overview\n- Our testing workflow: automated tools + manual keyboard testing\n- Common accessibility pitfalls in WordPress themes\n- Focus management in single-page applications\n- ARIA attributes: when to use them and when to avoid them\n- Colour contrast and the role of design tokens',
    featuredImage: 'https://images.unsplash.com/photo-1761122912306-13d8f83892c1?w=1200',
    audioUrl: 'https://example.com/podcasts/accessibility-first-development.mp3',
    duration: '34:50',
    durationSeconds: 2090,
    season: 1,
    episode: 4,
    categories: ['tech-talk'],
    guests: [],
    author: 'Lourens Visser',
    date: '2026-01-20',
    featured: false,
    listens: 156,
    subscribeLinks: {
      apple: 'https://podcasts.apple.com/lsx-design',
      spotify: 'https://open.spotify.com/show/lsx-design',
      rss: 'https://lsxdesign.com/feed/podcast'
    }
  },
  {
    id: 'running-wordpress-agency-2026',
    slug: 'running-wordpress-agency-2026',
    title: 'Running a WordPress Agency in 2026: Lessons from 22 Years',
    excerpt: 'Ash reflects on two decades of building a WordPress agency — the pivots that worked, the mistakes that taught us, and the principles that have kept LightSpeed growing through every era of the web.',
    content: 'In this candid business-focused episode, Ash shares the real story behind running a WordPress agency for over two decades. From the early days of building PHP sites on shared hosting to today\u2019s enterprise block theme projects, the journey has been anything but predictable. We discuss the decision to specialise in WordPress when many agencies were diversifying, the importance of building a remote team across multiple time zones, how we weathered the Gutenberg transition, and the business model changes that kept us profitable. Ash also shares advice for developers thinking about starting their own agency and the mistakes he wishes he had avoided.',
    showNotes: '- The early days: building sites in the 2000s\n- The decision to go all-in on WordPress\n- Building and managing a remote team\n- Weathering the Gutenberg transition\n- Client relationships and pricing strategies\n- Advice for aspiring agency owners\n- What keeps us excited about WordPress in 2026',
    featuredImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200',
    audioUrl: 'https://example.com/podcasts/running-wordpress-agency-2026.mp3',
    duration: '41:30',
    durationSeconds: 2490,
    season: 1,
    episode: 5,
    categories: ['business'],
    guests: [],
    author: 'Ash Shaw',
    date: '2026-02-03',
    featured: true,
    listens: 124,
    subscribeLinks: {
      apple: 'https://podcasts.apple.com/lsx-design',
      spotify: 'https://open.spotify.com/show/lsx-design',
      rss: 'https://lsxdesign.com/feed/podcast'
    }
  },
  {
    id: 'woocommerce-expert-interview',
    slug: 'woocommerce-expert-interview',
    title: 'WooCommerce at Scale: An Interview with an E-commerce Specialist',
    excerpt: 'We chat with a WooCommerce expert about running large-scale stores, performance gotchas, payment gateway selection, and the evolving role of WooCommerce in the enterprise.',
    content: 'In this interview episode, we bring on a WooCommerce specialist who has helped scale online stores from startup to millions in annual revenue. We discuss the architecture decisions that matter at scale — from choosing the right hosting stack and caching layer to database optimization and inventory management. The conversation also covers the payment gateway landscape in 2026, subscription commerce trends, and how WooCommerce competes with dedicated e-commerce platforms like Shopify and BigCommerce. This is essential listening for anyone building or managing a WooCommerce store.',
    showNotes: '- WooCommerce architecture for high-traffic stores\n- Hosting and caching strategies\n- Payment gateway comparison: Stripe, PayPal, Mollie, and more\n- Subscription commerce with WooCommerce\n- WooCommerce vs Shopify: an honest comparison\n- Performance profiling and bottleneck identification\n- The future of WooCommerce and WordPress commerce',
    featuredImage: 'https://images.unsplash.com/photo-1763872011479-aa293bf083a8?w=1200',
    audioUrl: 'https://example.com/podcasts/woocommerce-expert-interview.mp3',
    duration: '48:22',
    durationSeconds: 2902,
    season: 1,
    episode: 6,
    categories: ['interviews'],
    guests: [
      { name: 'Marcus Reid', role: 'E-commerce Consultant', company: 'ScaleWoo' }
    ],
    author: 'Ash Shaw',
    date: '2026-02-14',
    featured: false,
    listens: 89,
    subscribeLinks: {
      apple: 'https://podcasts.apple.com/lsx-design',
      spotify: 'https://open.spotify.com/show/lsx-design',
      rss: 'https://lsxdesign.com/feed/podcast'
    }
  }
];

/**
 * Featured Podcasts
 */
export const featuredPodcasts = podcasts.filter(p => p.featured);

/**
 * Helper Functions
 */

export function getPodcastBySlug(slug: string): Podcast | undefined {
  return podcasts.find(p => p.slug === slug);
}

export function getPodcastsByCategory(categorySlug: string): Podcast[] {
  return podcasts.filter(p => p.categories.includes(categorySlug));
}

export function getPodcastCategoryBySlug(slug: string): PodcastCategory | undefined {
  return podcastCategories.find(c => c.slug === slug);
}

export function getRelatedPodcasts(currentSlug: string, limit = 3): Podcast[] {
  const current = getPodcastBySlug(currentSlug);
  if (!current) return podcasts.slice(0, limit);

  return podcasts
    .filter(p => p.slug !== currentSlug)
    .filter(p =>
      p.categories.some(c => current.categories.includes(c)) ||
      p.season === current.season
    )
    .slice(0, limit);
}