/**
 * Single Post Longform Template — Static Data
 *
 * Extracted from SinglePostLongformTemplate for data-content separation.
 * All article content, TOC, hero metadata, related posts, and newsletter CTA
 * are defined here so the template remains a pure layout shell.
 *
 * @split March 17, 2026
 */

import type { RelatedPost } from '../components/patterns/RelatedPosts';

/* ──────────────────────────────────────────────
 * Breadcrumbs
 * ────────────────────────────────────────────── */

export const breadcrumbItems = [
  { label: 'Home', page: 'front-page' as const },
  { label: 'Insights', href: '/insights' },
  { label: 'The Ultimate Guide to Planning Your First Safari' },
];

/* ──────────────────────────────────────────────
 * Hero metadata
 * ────────────────────────────────────────────── */

export const heroMeta = {
  category: 'Travel tips',
  title: 'The ultimate guide to planning your first safari',
  author: {
    name: 'Sarah Mitchell',
    role: 'Travel writer',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    href: '#author-sarah-mitchell',
  },
  date: 'Dec 15, 2024',
  readingTime: '8 min read',
  featuredImage: {
    src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1400',
    alt: 'African safari landscape',
  },
  currentSlug: 'ultimate-guide-first-safari',
};

/* ──────────────────────────────────────────────
 * Table of contents
 * ────────────────────────────────────────────── */

export interface TocItem {
  id: string;
  label: string;
}

export const tocItems: TocItem[] = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'planning', label: 'Planning your safari' },
  { id: 'best-season', label: 'Best season to visit' },
  { id: 'what-to-pack', label: 'What to pack' },
  { id: 'conclusion', label: 'Conclusion' },
];

/* ──────────────────────────────────────────────
 * Article sections
 * ────────────────────────────────────────────── */

export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs: string[];
  listItems?: string[];
}

export const articleSections: ArticleSection[] = [
  {
    id: 'introduction',
    heading: 'Introduction',
    paragraphs: [
      'Planning your first safari is an exciting adventure that requires careful consideration and preparation. Whether you\'re dreaming of witnessing the Great Migration in Tanzania, tracking gorillas in Rwanda, or exploring the vast plains of the Serengeti, this comprehensive guide will help you navigate every aspect of your safari planning journey.',
      'From choosing the right destination to packing essential items, we\'ll cover everything you need to know to make your first safari an unforgettable experience.',
    ],
  },
  {
    id: 'planning',
    heading: 'Planning your safari',
    paragraphs: [
      'The key to a successful safari starts with thorough planning. Begin by deciding what type of wildlife experience you\'re looking for. Are you hoping to see the Big Five? Interested in bird watching? Or perhaps you want to witness specific animal behaviours like calving season or river crossings?',
      'Your budget will also play a significant role in determining your safari style. Options range from budget camping safaris to luxury lodges with all-inclusive amenities.',
    ],
  },
  {
    id: 'best-season',
    heading: 'Best season to visit',
    paragraphs: [
      'Timing is everything when it comes to safari planning. The dry season (typically June to October in East Africa) is generally considered the best time for wildlife viewing. During this period, animals congregate around water sources, making them easier to spot.',
      'However, the green season (November to May) offers its own advantages: fewer tourists, lush landscapes, and often lower prices. It\'s also the best time to see newborn animals and migratory birds.',
    ],
  },
  {
    id: 'what-to-pack',
    heading: 'What to pack',
    paragraphs: [
      'Packing for a safari requires a balance between being prepared and travelling light. Essential items include:',
    ],
    listItems: [
      'Neutral-coloured clothing (khaki, olive, beige)',
      'Wide-brimmed hat and sunglasses',
      'High-quality binoculars and camera',
      'Sunscreen and insect repellent',
      'Comfortable walking shoes and sandals',
      'Light jacket for early morning game drives',
    ],
  },
  {
    id: 'conclusion',
    heading: 'Conclusion',
    paragraphs: [
      'Planning your first safari is a journey in itself. By choosing the right destination, time of year, and packing appropriately, you\'ll be well-prepared for an unforgettable adventure. Embrace the experience, respect the wildlife, and get ready for the trip of a lifetime.',
    ],
  },
];

/* ──────────────────────────────────────────────
 * Pull quote (appears after "planning" section)
 * ────────────────────────────────────────────── */

export const pullQuote =
  '\u201cA safari is not just about seeing animals \u2014 it\u2019s about immersing yourself in the rhythm of nature and witnessing life in its purest form.\u201d';

/** The section ID after which the pull quote is inserted */
export const pullQuoteAfterSection = 'planning';

/* ──────────────────────────────────────────────
 * Newsletter CTA
 * ────────────────────────────────────────────── */

export const newsletterCta = {
  title: 'Enjoyed this article?',
  description:
    'Subscribe to our newsletter for more travel tips and inspiration.',
  primaryLabel: 'Subscribe',
  secondaryLabel: 'Read more',
};

/* ──────────────────────────────────────────────
 * Related posts
 * ────────────────────────────────────────────── */

export const relatedPosts: RelatedPost[] = [
  {
    id: '1',
    slug: 'wildlife-photography-tips',
    title: 'Wildlife photography tips for safari enthusiasts',
    excerpt:
      'Master the art of capturing stunning wildlife moments with these essential photography tips and camera settings for your safari adventure.',
    featuredImage:
      'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=800',
    category: 'Travel tips',
    readingTime: '6 min read',
    date: '2024-12-10',
  },
  {
    id: '2',
    slug: 'choosing-safari-destination',
    title: 'How to choose the perfect safari destination',
    excerpt:
      'From the Serengeti to Kruger National Park, discover how to select the ideal African safari destination based on your interests and budget.',
    featuredImage:
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
    category: 'Destinations',
    readingTime: '7 min read',
    date: '2024-12-08',
  },
  {
    id: '3',
    slug: 'safari-safety-essentials',
    title: 'Safari safety: Essential precautions for travellers',
    excerpt:
      'Stay safe on your African safari adventure with these crucial safety tips, health precautions, and emergency preparedness guidelines.',
    featuredImage:
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800',
    category: 'Travel tips',
    readingTime: '5 min read',
    date: '2024-12-05',
  },
];
