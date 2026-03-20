/**
 * Phosphor Icon Usage Registry
 * 
 * Central inventory of all Phosphor icons used throughout the application.
 * 
 * **Purpose:**
 * - Track which icons are actually in use
 * - Prevent duplicate icon implementations
 * - Quick reference for available icons
 * - Guide icon selection for new features
 * - Validate icon imports match this registry
 * 
 * **Icon Naming Convention:**
 * - Phosphor uses PascalCase names (e.g., `ArrowRight`, `MagnifyingGlass`)
 * - Some icons are aliased for clarity (e.g., `MagnifyingGlass as Search`)
 * - All icons are imported from `@phosphor-icons/react`
 * 
 * **Icon Weights:**
 * - thin (100): Very lightweight, minimal
 * - light (300): Light, delicate
 * - regular (400): Default, balanced (RECOMMENDED)
 * - bold (700): Heavy, prominent
 * - fill: Filled variant
 * - duotone: Two-tone variant (RECOMMENDED for stats/feature icons)
 * 
 * @see https://phosphoricons.com/ - Full icon catalog
 * @version 1.0.0
 * @created March 18, 2026
 */

export interface IconUsage {
  /** Phosphor icon name (PascalCase) */
  name: string;
  /** Common alias used in codebase (if different from name) */
  alias?: string;
  /** Category for organizational purposes */
  category: IconCategory;
  /** Number of times used across codebase (approximate) */
  usageCount: number;
  /** Files where this icon is used (sample, not exhaustive) */
  usedIn: string[];
  /** Semantic purpose/meaning in our application */
  purpose: string;
  /** Recommended weight for this icon */
  recommendedWeight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
}

export type IconCategory = 
  | 'navigation'      // Arrows, carets, menu icons
  | 'ui-controls'     // Buttons, toggles, interactive elements
  | 'social'          // Social media logos
  | 'communication'   // Email, phone, chat
  | 'content'         // Documents, media, files
  | 'business'        // Finance, office, professional
  | 'feedback'        // Success, error, warning, info
  | 'actions'         // Common user actions
  | 'system'          // Settings, tools, utilities
  | 'branding'        // Logos, awards, badges
  | 'date-time'       // Calendar, clock, time
  | 'commerce'        // Shopping, payments
  | 'media'           // Video, images, audio
  | 'accessibility'   // A11y icons
  | 'search-filter'   // Search, filter, sort
  | 'misc';           // Uncategorized

/**
 * Complete registry of all Phosphor icons in use
 * Sorted by category, then alphabetically within category
 */
export const iconUsageRegistry: IconUsage[] = [
  // === NAVIGATION (16 icons) ===
  {
    name: 'ArrowRight',
    category: 'navigation',
    usageCount: 45,
    usedIn: ['CTAInline', 'ServicesCard', 'CardGrid', 'PostCard', 'BlogIndex'],
    purpose: 'Primary forward action, "learn more", "view details"',
    recommendedWeight: 'regular'
  },
  {
    name: 'ArrowLeft',
    category: 'navigation',
    usageCount: 3,
    usedIn: ['Pagination', 'Carousel'],
    purpose: 'Navigate to previous item',
    recommendedWeight: 'regular'
  },
  {
    name: 'CaretDown',
    alias: 'ChevronDown',
    category: 'navigation',
    usageCount: 12,
    usedIn: ['DropdownMenu', 'HeaderSimple', 'TaxonomyFilter', 'QueryLoopFAQs'],
    purpose: 'Dropdown indicator, expandable sections',
    recommendedWeight: 'regular'
  },
  {
    name: 'CaretUp',
    alias: 'ChevronUp',
    category: 'navigation',
    usageCount: 2,
    usedIn: ['AccessibilityReport'],
    purpose: 'Collapse indicator',
    recommendedWeight: 'regular'
  },
  {
    name: 'CaretLeft',
    alias: 'ChevronLeft',
    category: 'navigation',
    usageCount: 5,
    usedIn: ['Lightbox', 'PaginationNav', 'PortfolioSlider'],
    purpose: 'Previous navigation in carousels',
    recommendedWeight: 'regular'
  },
  {
    name: 'CaretRight',
    alias: 'ChevronRight',
    category: 'navigation',
    usageCount: 5,
    usedIn: ['CardGrid', 'Lightbox', 'PaginationNav', 'PortfolioSlider'],
    purpose: 'Next navigation in carousels',
    recommendedWeight: 'regular'
  },
  {
    name: 'ArrowSquareOut',
    alias: 'ExternalLink',
    category: 'navigation',
    usageCount: 6,
    usedIn: ['CardGrid', 'FeaturedProjectShowcase', 'PortfolioCard', 'PortfolioSlider'],
    purpose: 'External link indicator',
    recommendedWeight: 'regular'
  },
  {
    name: 'ArrowElbowDownLeft',
    alias: 'CornerDownLeft',
    category: 'navigation',
    usageCount: 1,
    usedIn: ['SearchResultsPanel'],
    purpose: 'Enter key indicator',
    recommendedWeight: 'regular'
  },
  {
    name: 'House',
    category: 'navigation',
    usageCount: 2,
    usedIn: ['404Template', 'Breadcrumbs'],
    purpose: 'Home navigation',
    recommendedWeight: 'regular'
  },
  {
    name: 'List',
    alias: 'Menu',
    category: 'navigation',
    usageCount: 2,
    usedIn: ['SiteHeader', 'MobileMenu'],
    purpose: 'Mobile menu toggle (hamburger)',
    recommendedWeight: 'regular'
  },
  {
    name: 'Columns',
    category: 'navigation',
    usageCount: 1,
    usedIn: ['ViewSwitcher'],
    purpose: 'Column layout view',
    recommendedWeight: 'regular'
  },
  {
    name: 'SquaresFour',
    alias: 'LayoutGrid',
    category: 'navigation',
    usageCount: 1,
    usedIn: ['ViewSwitcher'],
    purpose: 'Grid layout view',
    recommendedWeight: 'regular'
  },

  // === UI CONTROLS (9 icons) ===
  {
    name: 'X',
    category: 'ui-controls',
    usageCount: 12,
    usedIn: ['Toast', 'Lightbox', 'GlobalSearchOverlay', 'FilterBar', 'TaxonomyFilter'],
    purpose: 'Close/dismiss action',
    recommendedWeight: 'regular'
  },
  {
    name: 'Check',
    category: 'ui-controls',
    usageCount: 15,
    usedIn: ['DropdownMenu', 'TaxonomyFilter', 'NewsletterSignup', 'PricingTable', 'ServiceComparisonTable'],
    purpose: 'Selection indicator, checkbox state',
    recommendedWeight: 'bold'
  },
  {
    name: 'Eye',
    category: 'ui-controls',
    usageCount: 3,
    usedIn: ['KeyboardTester', 'ComponentDocumentation', 'PortfolioCard'],
    purpose: 'Preview/view action, visibility toggle',
    recommendedWeight: 'regular'
  },
  {
    name: 'EyeSlash',
    alias: 'EyeOff',
    category: 'ui-controls',
    usageCount: 1,
    usedIn: ['KeyboardTester'],
    purpose: 'Hide content, visibility toggle',
    recommendedWeight: 'regular'
  },
  {
    name: 'Sun',
    category: 'ui-controls',
    usageCount: 1,
    usedIn: ['SiteHeader'],
    purpose: 'Light mode toggle',
    recommendedWeight: 'regular'
  },
  {
    name: 'Moon',
    category: 'ui-controls',
    usageCount: 1,
    usedIn: ['SiteHeader'],
    purpose: 'Dark mode toggle',
    recommendedWeight: 'regular'
  },
  {
    name: 'Copy',
    category: 'ui-controls',
    usageCount: 1,
    usedIn: ['ComponentDocumentation'],
    purpose: 'Copy to clipboard action',
    recommendedWeight: 'regular'
  },
  {
    name: 'Play',
    category: 'ui-controls',
    usageCount: 3,
    usedIn: ['FeaturedProjectVideo', 'TestimonialSlider', 'QueryLoopMedia'],
    purpose: 'Play video/audio',
    recommendedWeight: 'fill'
  },
  {
    name: 'PlayCircle',
    category: 'ui-controls',
    usageCount: 1,
    usedIn: ['VideoTestimonial'],
    purpose: 'Play video with circular button',
    recommendedWeight: 'fill'
  },

  // === FEEDBACK (11 icons) ===
  {
    name: 'CheckCircle',
    category: 'feedback',
    usageCount: 18,
    usedIn: ['Toast', 'AccessibilityReport', 'ContactForm', 'ServicesCard', 'UseCasesGrid'],
    purpose: 'Success state, completed items',
    recommendedWeight: 'regular'
  },
  {
    name: 'XCircle',
    category: 'feedback',
    usageCount: 2,
    usedIn: ['Toast', 'AccessibilityReport'],
    purpose: 'Error state, failed items',
    recommendedWeight: 'regular'
  },
  {
    name: 'Warning',
    alias: 'AlertTriangle',
    category: 'feedback',
    usageCount: 6,
    usedIn: ['Toast', 'ErrorBoundary', 'AccessibilityReport', '404Template', 'ProjectCaseStudy'],
    purpose: 'Warning state, caution indicator',
    recommendedWeight: 'regular'
  },
  {
    name: 'WarningCircle',
    alias: 'AlertCircle',
    category: 'feedback',
    usageCount: 2,
    usedIn: ['ContactForm', 'SingleTemplate'],
    purpose: 'Alert/warning with circular badge',
    recommendedWeight: 'regular'
  },
  {
    name: 'Info',
    category: 'feedback',
    usageCount: 2,
    usedIn: ['Toast', 'AccessibilityReport'],
    purpose: 'Information state, help indicator',
    recommendedWeight: 'regular'
  },
  {
    name: 'Spinner',
    category: 'feedback',
    usageCount: 1,
    usedIn: ['HostingContactModal'],
    purpose: 'Loading state',
    recommendedWeight: 'regular'
  },

  // === SOCIAL MEDIA (6 icons) ===
  {
    name: 'FacebookLogo',
    alias: 'Facebook',
    category: 'social',
    usageCount: 1,
    usedIn: ['FooterNewsletter'],
    purpose: 'Facebook social link',
    recommendedWeight: 'fill'
  },
  {
    name: 'InstagramLogo',
    alias: 'Instagram',
    category: 'social',
    usageCount: 1,
    usedIn: ['FooterNewsletter'],
    purpose: 'Instagram social link',
    recommendedWeight: 'fill'
  },
  {
    name: 'TwitterLogo',
    alias: 'Twitter',
    category: 'social',
    usageCount: 3,
    usedIn: ['FooterNewsletter', 'TeamGrid', 'AuthorBio'],
    purpose: 'Twitter/X social link',
    recommendedWeight: 'fill'
  },
  {
    name: 'LinkedinLogo',
    alias: 'Linkedin',
    category: 'social',
    usageCount: 3,
    usedIn: ['FooterNewsletter', 'TeamGrid', 'AuthorBio'],
    purpose: 'LinkedIn social link',
    recommendedWeight: 'fill'
  },
  {
    name: 'YoutubeLogo',
    alias: 'Youtube',
    category: 'social',
    usageCount: 1,
    usedIn: ['FooterNewsletter'],
    purpose: 'YouTube social link',
    recommendedWeight: 'fill'
  },

  // === COMMUNICATION (6 icons) ===
  {
    name: 'EnvelopeSimple',
    alias: 'Mail',
    category: 'communication',
    usageCount: 8,
    usedIn: ['NewsletterSignup', 'ContactInfo', 'TeamGrid', 'AuthorBio'],
    purpose: 'Email contact, newsletter signup',
    recommendedWeight: 'regular'
  },
  {
    name: 'Phone',
    category: 'communication',
    usageCount: 1,
    usedIn: ['ContactInfo'],
    purpose: 'Phone contact',
    recommendedWeight: 'regular'
  },
  {
    name: 'Chat',
    alias: 'MessageCircle',
    category: 'communication',
    usageCount: 1,
    usedIn: ['ContactInfo'],
    purpose: 'Chat/messaging',
    recommendedWeight: 'regular'
  },
  {
    name: 'ChatDots',
    category: 'communication',
    usageCount: 1,
    usedIn: ['ActivityFeedWidget'],
    purpose: 'Comments, discussion',
    recommendedWeight: 'regular'
  },
  {
    name: 'Send',
    category: 'communication',
    usageCount: 1,
    usedIn: ['ContactForm'],
    purpose: 'Send message action',
    recommendedWeight: 'regular'
  },
  {
    name: 'ShareNetwork',
    category: 'communication',
    usageCount: 1,
    usedIn: ['SinglePostLongform'],
    purpose: 'Share content',
    recommendedWeight: 'regular'
  },

  // === DATE/TIME (4 icons) ===
  {
    name: 'CalendarBlank',
    category: 'date-time',
    usageCount: 6,
    usedIn: ['PostCard', 'BlogIndex', 'ActivityFeedWidget', 'ProofStrip'],
    purpose: 'Date indicator, event calendar',
    recommendedWeight: 'regular'
  },
  {
    name: 'Calendar',
    category: 'date-time',
    usageCount: 3,
    usedIn: ['BlogIndex', 'CategoryArchive', 'PortfolioSingle'],
    purpose: 'Date with specific day shown',
    recommendedWeight: 'regular'
  },
  {
    name: 'Clock',
    category: 'date-time',
    usageCount: 8,
    usedIn: ['ContactInfo', 'VideoTestimonial', 'PostCard', 'BlogIndex', 'SearchResultsPanel'],
    purpose: 'Time indicator, duration, reading time',
    recommendedWeight: 'regular'
  },

  // === SEARCH & FILTER (5 icons) ===
  {
    name: 'MagnifyingGlass',
    alias: 'Search',
    category: 'search-filter',
    usageCount: 6,
    usedIn: ['FilterBar', 'GlobalSearchOverlay', 'SearchResultsPanel', '404Template'],
    purpose: 'Search action, magnify',
    recommendedWeight: 'regular'
  },
  {
    name: 'MagnifyingGlassPlus',
    alias: 'ZoomIn',
    category: 'search-filter',
    usageCount: 1,
    usedIn: ['Lightbox'],
    purpose: 'Zoom in action',
    recommendedWeight: 'regular'
  },
  {
    name: 'Funnel',
    alias: 'Filter',
    category: 'search-filter',
    usageCount: 2,
    usedIn: ['TaxonomyFilter'],
    purpose: 'Filter content',
    recommendedWeight: 'regular'
  },
  {
    name: 'Sliders',
    alias: 'SlidersHorizontal',
    category: 'search-filter',
    usageCount: 2,
    usedIn: ['FilterBar', 'TaxonomyFilter'],
    purpose: 'Advanced filters',
    recommendedWeight: 'regular'
  },
  {
    name: 'ArrowsDownUp',
    alias: 'ArrowUpDown',
    category: 'search-filter',
    usageCount: 2,
    usedIn: ['FilterBar', 'ArchiveTemplate'],
    purpose: 'Sort toggle',
    recommendedWeight: 'regular'
  },

  // === CONTENT (8 icons) ===
  {
    name: 'FileText',
    category: 'content',
    usageCount: 2,
    usedIn: ['ActivityFeedWidget', 'ContentStatsWidget'],
    purpose: 'Document, article, text content',
    recommendedWeight: 'regular'
  },
  {
    name: 'Code',
    category: 'content',
    usageCount: 3,
    usedIn: ['ComponentDocumentation', 'PortfolioSingle'],
    purpose: 'Code snippet, development',
    recommendedWeight: 'regular'
  },
  {
    name: 'FilmStrip',
    alias: 'Film',
    category: 'content',
    usageCount: 1,
    usedIn: ['FeaturedProjectVideo'],
    purpose: 'Video content',
    recommendedWeight: 'regular'
  },
  {
    name: 'Video',
    category: 'content',
    usageCount: 2,
    usedIn: ['QueryLoopTestimonials', 'QueryLoopMedia'],
    purpose: 'Video media type',
    recommendedWeight: 'regular'
  },
  {
    name: 'Images',
    category: 'content',
    usageCount: 2,
    usedIn: ['QueryLoopTestimonials', 'QueryLoopMedia'],
    purpose: 'Image gallery',
    recommendedWeight: 'regular'
  },
  {
    name: 'Microphone',
    alias: 'Mic',
    category: 'content',
    usageCount: 1,
    usedIn: ['QueryLoopTestimonials'],
    purpose: 'Audio testimonial',
    recommendedWeight: 'regular'
  },
  {
    name: 'Quotes',
    alias: 'Quote',
    category: 'content',
    usageCount: 2,
    usedIn: ['QueryLoopTestimonials', 'TestimonialCard'],
    purpose: 'Quote, testimonial',
    recommendedWeight: 'regular'
  },
  {
    name: 'BookmarkSimple',
    category: 'content',
    usageCount: 1,
    usedIn: ['SinglePostLongform'],
    purpose: 'Bookmark, save content',
    recommendedWeight: 'regular'
  },

  // === BUSINESS (10 icons) ===
  {
    name: 'Briefcase',
    category: 'business',
    usageCount: 3,
    usedIn: ['TrustBadges', 'ActivityFeedWidget'],
    purpose: 'Business, professional services',
    recommendedWeight: 'duotone'
  },
  {
    name: 'Users',
    category: 'business',
    usageCount: 3,
    usedIn: ['ProofStrip', 'PortfolioSingle'],
    purpose: 'Team size, user count',
    recommendedWeight: 'regular'
  },
  {
    name: 'User',
    category: 'business',
    usageCount: 5,
    usedIn: ['PostCard', 'BlogIndex', 'CategoryArchive'],
    purpose: 'Author, single user',
    recommendedWeight: 'regular'
  },
  {
    name: 'Trophy',
    alias: 'Award',
    category: 'business',
    usageCount: 2,
    usedIn: ['TrustBadges', 'ProofStrip'],
    purpose: 'Achievement, award',
    recommendedWeight: 'duotone'
  },
  {
    name: 'Shield',
    category: 'business',
    usageCount: 1,
    usedIn: ['TrustBadges'],
    purpose: 'Security, protection',
    recommendedWeight: 'duotone'
  },
  {
    name: 'CurrencyDollar',
    category: 'business',
    usageCount: 2,
    usedIn: ['ServicePricingTimeline', 'PortfolioSingle'],
    purpose: 'Pricing, budget',
    recommendedWeight: 'regular'
  },
  {
    name: 'Package',
    category: 'business',
    usageCount: 1,
    usedIn: ['IncludedSolutions'],
    purpose: 'Product, package',
    recommendedWeight: 'regular'
  },
  {
    name: 'Rocket',
    category: 'business',
    usageCount: 1,
    usedIn: ['HostingContactModal'],
    purpose: 'Launch, deployment',
    recommendedWeight: 'regular'
  },
  {
    name: 'TrendUp',
    category: 'business',
    usageCount: 3,
    usedIn: ['CaseStudyPreview', 'ProjectCaseStudy'],
    purpose: 'Growth, metrics improvement',
    recommendedWeight: 'regular'
  },

  // === MISC/DECORATIVE (12 icons) ===
  {
    name: 'Star',
    category: 'misc',
    usageCount: 5,
    usedIn: ['TestimonialSlider', 'TestimonialCard', 'ProofStrip', 'FeaturedProjectText'],
    purpose: 'Rating, featured item',
    recommendedWeight: 'fill'
  },
  {
    name: 'Sparkle',
    alias: 'Sparkles',
    category: 'misc',
    usageCount: 3,
    usedIn: ['HeroSplash', 'RelatedServicesGrid', 'ServiceDetailTemplate'],
    purpose: 'AI features, magic, enhancement',
    recommendedWeight: 'regular'
  },
  {
    name: 'Lightning',
    alias: 'Zap',
    category: 'misc',
    usageCount: 1,
    usedIn: ['TrustBadges'],
    purpose: 'Speed, performance',
    recommendedWeight: 'duotone'
  },
  {
    name: 'Lightbulb',
    category: 'misc',
    usageCount: 2,
    usedIn: ['ComponentDocumentation', 'ProjectCaseStudy'],
    purpose: 'Idea, insight',
    recommendedWeight: 'regular'
  },
  {
    name: 'Globe',
    category: 'misc',
    usageCount: 4,
    usedIn: ['ContactInfo', 'TeamGrid', 'AuthorBio'],
    purpose: 'Website, global',
    recommendedWeight: 'regular'
  },
  {
    name: 'MapPin',
    category: 'misc',
    usageCount: 1,
    usedIn: ['ContactInfo'],
    purpose: 'Location, address',
    recommendedWeight: 'regular'
  },
  {
    name: 'Tag',
    category: 'misc',
    usageCount: 1,
    usedIn: ['PostCard'],
    purpose: 'Category tag',
    recommendedWeight: 'regular'
  },
  {
    name: 'Palette',
    category: 'misc',
    usageCount: 1,
    usedIn: ['ComponentDocumentation'],
    purpose: 'Design, color',
    recommendedWeight: 'regular'
  },
  {
    name: 'Keyboard',
    category: 'misc',
    usageCount: 1,
    usedIn: ['KeyboardTester'],
    purpose: 'Keyboard input',
    recommendedWeight: 'regular'
  },
  {
    name: 'Wheelchair',
    alias: 'Accessibility',
    category: 'misc',
    usageCount: 1,
    usedIn: ['ComponentDocumentation'],
    purpose: 'Accessibility features',
    recommendedWeight: 'regular'
  },
  {
    name: 'Question',
    alias: 'HelpCircle',
    category: 'misc',
    usageCount: 1,
    usedIn: ['QueryLoopFAQs'],
    purpose: 'FAQ, help',
    recommendedWeight: 'regular'
  },
  {
    name: 'PenNib',
    category: 'misc',
    usageCount: 1,
    usedIn: ['AuthorArchive'],
    purpose: 'Writing, author',
    recommendedWeight: 'regular'
  },
  {
    name: 'ArrowsClockwise',
    alias: 'RefreshCw',
    category: 'misc',
    usageCount: 1,
    usedIn: ['ErrorBoundary'],
    purpose: 'Refresh, retry',
    recommendedWeight: 'regular'
  },

  // === SPECIAL PURPOSE (2 icons) ===
  {
    name: 'Icon',
    category: 'system',
    usageCount: 100,
    usedIn: ['NeonStats', 'Data files'],
    purpose: 'Generic icon type for dynamic icon rendering',
    recommendedWeight: 'regular'
  }
];

/**
 * Get icons by category
 */
export function getIconsByCategory(category: IconCategory): IconUsage[] {
  return iconUsageRegistry.filter(icon => icon.category === category);
}

/**
 * Get most used icons (top N)
 */
export function getMostUsedIcons(limit: number = 10): IconUsage[] {
  return [...iconUsageRegistry]
    .sort((a, b) => b.usageCount - a.usageCount)
    .slice(0, limit);
}

/**
 * Find icon by name or alias
 */
export function findIcon(nameOrAlias: string): IconUsage | undefined {
  return iconUsageRegistry.find(
    icon => icon.name === nameOrAlias || icon.alias === nameOrAlias
  );
}

/**
 * Registry statistics
 */
export const iconStats = {
  total: iconUsageRegistry.length,
  totalUsages: iconUsageRegistry.reduce((sum, icon) => sum + icon.usageCount, 0),
  byCategory: Object.fromEntries(
    (['navigation', 'ui-controls', 'feedback', 'social', 'communication', 'date-time', 'search-filter', 'content', 'business', 'misc', 'system'] as IconCategory[])
      .map(cat => [cat, getIconsByCategory(cat).length])
  ),
  topIcons: getMostUsedIcons(5).map(icon => ({ name: icon.name, count: icon.usageCount }))
};
