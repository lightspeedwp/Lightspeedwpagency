/**
 * Phosphor Icon Catalog — Recommended Icons
 * 
 * Curated collection of commonly useful Phosphor icons for quick reference.
 * 
 * **Purpose:**
 * - Guide icon selection for new features
 * - Maintain visual consistency
 * - Reduce decision fatigue
 * - Prevent icon proliferation
 * 
 * **Usage Guidelines:**
 * 1. Check this catalog BEFORE importing a new icon
 * 2. Use existing icons from icon-registry.ts when possible
 * 3. Only add new icons if no suitable alternative exists
 * 4. Prefer duotone weight for feature/stat icons (depth + neon glow)
 * 5. Prefer regular weight for UI/navigation icons (clarity + consistency)
 * 6. Prefer fill weight for social media icons (brand recognition)
 * 
 * **Icon Weights:**
 * - regular: Default choice for most UI icons
 * - duotone: Best for stats, features, benefits (two-tone neon effect)
 * - fill: Social media logos, play buttons, stars
 * - bold: Checkmarks, close buttons (needs emphasis)
 * 
 * @see https://phosphoricons.com/ - Full catalog with 9000+ icons
 * @see /src/app/data/icon-registry.ts - Icons already in use
 * @version 1.0.0
 * @created March 18, 2026
 */

export interface IconRecommendation {
  /** Phosphor icon name */
  name: string;
  /** Suggested use case */
  useCase: string;
  /** Recommended weight */
  weight: 'regular' | 'duotone' | 'fill' | 'bold';
  /** Category */
  category: string;
  /** Alternative icons to consider */
  alternatives?: string[];
  /** Already in use? */
  inUse: boolean;
}

/**
 * Recommended icons by category
 */
export const iconCatalog = {
  
  /**
   * ACTIONS & NAVIGATION (20 icons)
   * Common user actions and navigation elements
   */
  actions: [
    { name: 'ArrowRight', useCase: 'Primary CTA, forward navigation', weight: 'regular', category: 'actions', inUse: true },
    { name: 'ArrowLeft', useCase: 'Back navigation, previous', weight: 'regular', category: 'actions', inUse: true },
    { name: 'Plus', useCase: 'Add new item, expand', weight: 'regular', category: 'actions', inUse: false },
    { name: 'Minus', useCase: 'Remove item, collapse', weight: 'regular', category: 'actions', inUse: false },
    { name: 'X', useCase: 'Close, dismiss, delete', weight: 'regular', category: 'actions', inUse: true },
    { name: 'Check', useCase: 'Confirm, select, checkbox', weight: 'bold', category: 'actions', inUse: true },
    { name: 'ArrowsClockwise', useCase: 'Refresh, reload, retry', weight: 'regular', category: 'actions', inUse: true },
    { name: 'Download', useCase: 'Download file', weight: 'regular', category: 'actions', inUse: false },
    { name: 'Upload', useCase: 'Upload file', weight: 'regular', category: 'actions', inUse: false },
    { name: 'Copy', useCase: 'Copy to clipboard', weight: 'regular', category: 'actions', inUse: true },
    { name: 'Pencil', useCase: 'Edit content', weight: 'regular', category: 'actions', inUse: false },
    { name: 'Trash', useCase: 'Delete permanently', weight: 'regular', category: 'actions', inUse: false },
    { name: 'DotsThreeVertical', useCase: 'More options menu', weight: 'regular', category: 'actions', inUse: false },
    { name: 'Export', useCase: 'Export data', weight: 'regular', category: 'actions', inUse: false },
    { name: 'ShareNetwork', useCase: 'Share content', weight: 'regular', category: 'actions', inUse: true },
    { name: 'Heart', useCase: 'Favorite, like', weight: 'regular', category: 'actions', alternatives: ['HeartFill'], inUse: false },
    { name: 'BookmarkSimple', useCase: 'Save, bookmark', weight: 'regular', category: 'actions', inUse: true },
    { name: 'Eye', useCase: 'View, preview', weight: 'regular', category: 'actions', inUse: true },
    { name: 'EyeSlash', useCase: 'Hide, password toggle', weight: 'regular', category: 'actions', inUse: true }
  ] as IconRecommendation[],

  /**
   * FEEDBACK & STATUS (12 icons)
   * Success, error, warning, info states
   */
  feedback: [
    { name: 'CheckCircle', useCase: 'Success state, completed', weight: 'regular', category: 'feedback', inUse: true },
    { name: 'XCircle', useCase: 'Error state, failed', weight: 'regular', category: 'feedback', inUse: true },
    { name: 'Warning', useCase: 'Warning, caution', weight: 'regular', category: 'feedback', inUse: true },
    { name: 'Info', useCase: 'Information, help', weight: 'regular', category: 'feedback', inUse: true },
    { name: 'Spinner', useCase: 'Loading state', weight: 'regular', category: 'feedback', inUse: true },
    { name: 'CircleNotch', useCase: 'Loading spinner', weight: 'regular', category: 'feedback', inUse: false },
    { name: 'Prohibit', useCase: 'Forbidden, not allowed', weight: 'regular', category: 'feedback', inUse: false },
    { name: 'ShieldCheck', useCase: 'Verified, secure', weight: 'duotone', category: 'feedback', inUse: false },
    { name: 'Bell', useCase: 'Notification', weight: 'regular', category: 'feedback', inUse: false },
    { name: 'BellRinging', useCase: 'Active notification', weight: 'regular', category: 'feedback', inUse: false }
  ] as IconRecommendation[],

  /**
   * TECHNOLOGY & DEVELOPMENT (18 icons)
   * AI, code, tech, infrastructure
   */
  technology: [
    { name: 'Brain', useCase: 'AI, intelligence, thinking', weight: 'duotone', category: 'technology', inUse: false },
    { name: 'BrainCircuit', useCase: 'AI services, neural network', weight: 'duotone', category: 'technology', alternatives: ['Brain'], inUse: false },
    { name: 'Code', useCase: 'Development, coding', weight: 'regular', category: 'technology', inUse: true },
    { name: 'Terminal', useCase: 'Command line, CLI', weight: 'regular', category: 'technology', inUse: false },
    { name: 'Database', useCase: 'Data storage, database', weight: 'duotone', category: 'technology', inUse: false },
    { name: 'CloudArrowUp', useCase: 'Upload to cloud, backup', weight: 'regular', category: 'technology', inUse: false },
    { name: 'CloudArrowDown', useCase: 'Download from cloud', weight: 'regular', category: 'technology', inUse: false },
    { name: 'Server', useCase: 'Server, hosting', weight: 'duotone', category: 'technology', inUse: false },
    { name: 'Cpu', useCase: 'Processing, performance', weight: 'duotone', category: 'technology', inUse: false },
    { name: 'ChartLine', useCase: 'Analytics, metrics', weight: 'duotone', category: 'technology', inUse: false },
    { name: 'MagnifyingGlass', useCase: 'Search, SEO', weight: 'regular', category: 'technology', inUse: true },
    { name: 'Robot', useCase: 'Automation, bots', weight: 'duotone', category: 'technology', inUse: false },
    { name: 'Gear', useCase: 'Settings, configuration', weight: 'regular', category: 'technology', inUse: false },
    { name: 'GearSix', useCase: 'Advanced settings', weight: 'regular', category: 'technology', alternatives: ['Gear'], inUse: false },
    { name: 'Wrench', useCase: 'Tools, utilities', weight: 'regular', category: 'technology', inUse: false },
    { name: 'ChartBar', useCase: 'Bar chart, stats', weight: 'duotone', category: 'technology', inUse: false },
    { name: 'ChartPie', useCase: 'Pie chart, distribution', weight: 'duotone', category: 'technology', inUse: false },
    { name: 'TrendUp', useCase: 'Growth, improvement', weight: 'regular', category: 'technology', inUse: true }
  ] as IconRecommendation[],

  /**
   * BUSINESS & COMMERCE (14 icons)
   * Professional services, payments, users
   */
  business: [
    { name: 'Briefcase', useCase: 'Business, professional', weight: 'duotone', category: 'business', inUse: true },
    { name: 'Users', useCase: 'Team, multiple users', weight: 'regular', category: 'business', inUse: true },
    { name: 'User', useCase: 'Single user, profile', weight: 'regular', category: 'business', inUse: true },
    { name: 'UserCircle', useCase: 'User avatar, profile pic', weight: 'regular', category: 'business', inUse: false },
    { name: 'Trophy', useCase: 'Achievement, award', weight: 'duotone', category: 'business', inUse: true },
    { name: 'Shield', useCase: 'Security, protection', weight: 'duotone', category: 'business', inUse: true },
    { name: 'ShieldCheck', useCase: 'Verified security', weight: 'duotone', category: 'business', inUse: false },
    { name: 'CurrencyDollar', useCase: 'Price, budget', weight: 'regular', category: 'business', inUse: true },
    { name: 'CreditCard', useCase: 'Payment method', weight: 'regular', category: 'business', inUse: false },
    { name: 'Invoice', useCase: 'Billing, invoice', weight: 'regular', category: 'business', inUse: false },
    { name: 'Package', useCase: 'Product, deliverable', weight: 'regular', category: 'business', inUse: true },
    { name: 'Rocket', useCase: 'Launch, deployment', weight: 'regular', category: 'business', inUse: true },
    { name: 'Target', useCase: 'Goal, objective', weight: 'duotone', category: 'business', inUse: false },
    { name: 'Handshake', useCase: 'Partnership, agreement', weight: 'duotone', category: 'business', inUse: false }
  ] as IconRecommendation[],

  /**
   * COMMUNICATION (12 icons)
   * Email, phone, chat, social
   */
  communication: [
    { name: 'EnvelopeSimple', useCase: 'Email, contact', weight: 'regular', category: 'communication', inUse: true },
    { name: 'Phone', useCase: 'Phone call', weight: 'regular', category: 'communication', inUse: true },
    { name: 'ChatDots', useCase: 'Chat, messaging', weight: 'regular', category: 'communication', inUse: true },
    { name: 'ChatCircle', useCase: 'Comment, discussion', weight: 'regular', category: 'communication', alternatives: ['ChatDots'], inUse: false },
    { name: 'VideoCamera', useCase: 'Video call, meeting', weight: 'regular', category: 'communication', inUse: false },
    { name: 'Megaphone', useCase: 'Announcement, marketing', weight: 'regular', category: 'communication', inUse: false },
    { name: 'PaperPlane', useCase: 'Send message', weight: 'regular', category: 'communication', alternatives: ['Send'], inUse: false },
    { name: 'LinkedinLogo', useCase: 'LinkedIn link', weight: 'fill', category: 'communication', inUse: true },
    { name: 'TwitterLogo', useCase: 'Twitter/X link', weight: 'fill', category: 'communication', inUse: true },
    { name: 'FacebookLogo', useCase: 'Facebook link', weight: 'fill', category: 'communication', inUse: true },
    { name: 'InstagramLogo', useCase: 'Instagram link', weight: 'fill', category: 'communication', inUse: true },
    { name: 'YoutubeLogo', useCase: 'YouTube link', weight: 'fill', category: 'communication', inUse: true }
  ] as IconRecommendation[],

  /**
   * CONTENT & MEDIA (14 icons)
   * Documents, images, video, files
   */
  content: [
    { name: 'FileText', useCase: 'Document, article', weight: 'regular', category: 'content', inUse: true },
    { name: 'File', useCase: 'Generic file', weight: 'regular', category: 'content', inUse: false },
    { name: 'Image', useCase: 'Image file, photo', weight: 'regular', category: 'content', inUse: false },
    { name: 'Images', useCase: 'Image gallery', weight: 'regular', category: 'content', inUse: true },
    { name: 'Video', useCase: 'Video file', weight: 'regular', category: 'content', inUse: true },
    { name: 'Play', useCase: 'Play video/audio', weight: 'fill', category: 'content', inUse: true },
    { name: 'Pause', useCase: 'Pause playback', weight: 'fill', category: 'content', inUse: false },
    { name: 'Microphone', useCase: 'Audio, recording', weight: 'regular', category: 'content', inUse: true },
    { name: 'Quotes', useCase: 'Quote, testimonial', weight: 'regular', category: 'content', inUse: true },
    { name: 'Article', useCase: 'Blog post, article', weight: 'regular', category: 'content', alternatives: ['FileText'], inUse: false },
    { name: 'Newspaper', useCase: 'News, blog', weight: 'regular', category: 'content', inUse: false },
    { name: 'Folder', useCase: 'Directory, collection', weight: 'regular', category: 'content', inUse: false },
    { name: 'FolderOpen', useCase: 'Open folder', weight: 'regular', category: 'content', inUse: false }
  ] as IconRecommendation[],

  /**
   * DESIGN & CREATIVE (10 icons)
   * Design tools, creativity, visual elements
   */
  design: [
    { name: 'Palette', useCase: 'Design, color', weight: 'regular', category: 'design', inUse: true },
    { name: 'PaintBrush', useCase: 'Painting, creative', weight: 'regular', category: 'design', inUse: false },
    { name: 'Pencil', useCase: 'Drawing, sketch', weight: 'regular', category: 'design', inUse: false },
    { name: 'PenNib', useCase: 'Writing, typography', weight: 'regular', category: 'design', inUse: true },
    { name: 'Sparkle', useCase: 'AI, magic, enhancement', weight: 'regular', category: 'design', inUse: true },
    { name: 'Lightbulb', useCase: 'Idea, innovation', weight: 'regular', category: 'design', inUse: true },
    { name: 'Lightning', useCase: 'Speed, performance', weight: 'duotone', category: 'design', inUse: true },
    { name: 'Cube', useCase: '3D, modeling', weight: 'duotone', category: 'design', inUse: false },
    { name: 'SquaresFour', useCase: 'Grid layout', weight: 'regular', category: 'design', inUse: true },
    { name: 'Layout', useCase: 'Page layout', weight: 'regular', category: 'design', inUse: false }
  ] as IconRecommendation[],

  /**
   * TIME & CALENDAR (6 icons)
   * Dates, times, scheduling
   */
  dateTime: [
    { name: 'CalendarBlank', useCase: 'Date, event', weight: 'regular', category: 'date-time', inUse: true },
    { name: 'Calendar', useCase: 'Specific date', weight: 'regular', category: 'date-time', inUse: true },
    { name: 'Clock', useCase: 'Time, duration', weight: 'regular', category: 'date-time', inUse: true },
    { name: 'Timer', useCase: 'Countdown, timer', weight: 'regular', category: 'date-time', inUse: false },
    { name: 'Hourglass', useCase: 'Waiting, in progress', weight: 'regular', category: 'date-time', inUse: false },
    { name: 'ClockClockwise', useCase: 'History, recent', weight: 'regular', category: 'date-time', inUse: false }
  ] as IconRecommendation[],

  /**
   * LOCATION & NAVIGATION (8 icons)
   * Maps, directions, places
   */
  location: [
    { name: 'MapPin', useCase: 'Location, address', weight: 'regular', category: 'location', inUse: true },
    { name: 'Globe', useCase: 'Website, global', weight: 'regular', category: 'location', inUse: true },
    { name: 'House', useCase: 'Home navigation', weight: 'regular', category: 'location', inUse: true },
    { name: 'Buildings', useCase: 'Office, company', weight: 'duotone', category: 'location', inUse: false },
    { name: 'Storefront', useCase: 'Store, retail', weight: 'duotone', category: 'location', inUse: false },
    { name: 'Compass', useCase: 'Navigation, explore', weight: 'regular', category: 'location', inUse: false },
    { name: 'SignOut', useCase: 'Logout, exit', weight: 'regular', category: 'location', inUse: false },
    { name: 'SignIn', useCase: 'Login, enter', weight: 'regular', category: 'location', inUse: false }
  ] as IconRecommendation[]
};

/**
 * Get all icons marked as in-use
 */
export function getIconsInUse(): IconRecommendation[] {
  return Object.values(iconCatalog)
    .flat()
    .filter(icon => icon.inUse);
}

/**
 * Get all icons NOT in-use (available for new features)
 */
export function getAvailableIcons(): IconRecommendation[] {
  return Object.values(iconCatalog)
    .flat()
    .filter(icon => !icon.inUse);
}

/**
 * Search icons by use case keyword
 */
export function searchIcons(keyword: string): IconRecommendation[] {
  const lowerKeyword = keyword.toLowerCase();
  return Object.values(iconCatalog)
    .flat()
    .filter(icon => 
      icon.name.toLowerCase().includes(lowerKeyword) ||
      icon.useCase.toLowerCase().includes(lowerKeyword)
    );
}

/**
 * Catalog statistics
 */
export const catalogStats = {
  totalRecommended: Object.values(iconCatalog).flat().length,
  inUse: getIconsInUse().length,
  available: getAvailableIcons().length,
  byCategory: Object.fromEntries(
    Object.entries(iconCatalog).map(([key, icons]) => [key, icons.length])
  ),
  byWeight: Object.fromEntries(
    ['regular', 'duotone', 'fill', 'bold'].map(weight => [
      weight,
      Object.values(iconCatalog).flat().filter(icon => icon.weight === weight).length
    ])
  )
};
