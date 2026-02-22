/**
 * Videos Data
 *
 * Centralized video content for the LSX Design video library.
 *
 * **WordPress Mapping:**
 * - Custom Post Type: 'video' (or post format 'video')
 * - Taxonomies: 'video_category', 'video_tag'
 * - ACF fields for embed URL, duration, etc.
 *
 * @see /guidelines/templates/video-archive.md
 */

import { videoCategories, videoTags, TaxonomyTerm } from './taxonomies';
export { videoCategories, videoTags };

export interface Video {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  featuredImage: string;
  embedUrl: string;
  duration: string;
  durationSeconds: number;
  categories: string[];
  tags: string[];
  author: string;
  date: string;
  featured: boolean;
  views: number;
}

export type VideoCategory = TaxonomyTerm;
export type VideoTag = TaxonomyTerm;

/**
 * Videos
 */
export const videos: Video[] = [
  {
    id: 'getting-started-block-themes',
    slug: 'getting-started-block-themes',
    title: 'Getting started with WordPress block themes',
    excerpt: 'Learn the fundamentals of WordPress Full Site Editing and block themes. This tutorial covers theme.json configuration, template hierarchy, and pattern creation.',
    content: 'In this comprehensive tutorial, we walk through everything you need to know to get started with WordPress block themes. From setting up your development environment to creating your first custom template, this video covers the essentials of modern WordPress theming.',
    featuredImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '24:30',
    durationSeconds: 1470,
    categories: ['tutorials'],
    tags: ['wordpress', 'block-theme', 'gutenberg'],
    author: 'Ash Shaw',
    date: '2025-12-15',
    featured: true,
    views: 1240
  },
  {
    id: 'design-system-wordpress',
    slug: 'design-system-wordpress',
    title: 'Building a design system for WordPress',
    excerpt: 'Discover how to implement a scalable design system using CSS variables, theme.json presets, and reusable block patterns for enterprise WordPress projects.',
    content: 'Design systems are essential for maintaining consistency across large WordPress projects. This video demonstrates our approach to building token-driven design systems that integrate seamlessly with WordPress Full Site Editing.',
    featuredImage: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '18:45',
    durationSeconds: 1125,
    categories: ['tutorials'],
    tags: ['design-system', 'wordpress', 'block-theme'],
    author: 'Warwick Booth',
    date: '2025-11-28',
    featured: true,
    views: 890
  },
  {
    id: 'woocommerce-performance-webinar',
    slug: 'woocommerce-performance-webinar',
    title: 'WooCommerce performance masterclass',
    excerpt: 'Join our team as we discuss advanced performance optimization techniques for WooCommerce stores, including caching strategies, database optimization, and lazy loading.',
    content: 'In this recorded webinar, our senior developers share battle-tested strategies for optimising WooCommerce store performance. Learn about server-side caching, image optimization, critical CSS, and more.',
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '42:15',
    durationSeconds: 2535,
    categories: ['webinars'],
    tags: ['woocommerce', 'performance'],
    author: 'Ash Shaw',
    date: '2025-11-10',
    featured: false,
    views: 560
  },
  {
    id: 'accessible-wordpress-walkthrough',
    slug: 'accessible-wordpress-walkthrough',
    title: 'Accessibility audit: Real client walkthrough',
    excerpt: 'Watch as we perform a live accessibility audit on a client website, identifying WCAG 2.1 AA violations and implementing fixes in real time using block theme patterns.',
    content: 'Accessibility is not optional. In this case study video, we walk through a real client project where we audited and remediated accessibility issues to achieve full WCAG 2.1 AA compliance.',
    featuredImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '31:20',
    durationSeconds: 1880,
    categories: ['case-studies'],
    tags: ['accessibility', 'wordpress', 'gutenberg'],
    author: 'Lourens Visser',
    date: '2025-10-22',
    featured: false,
    views: 420
  }
];

/**
 * Featured Videos
 */
export const featuredVideos = videos.filter(v => v.featured);

/**
 * Helper Functions
 */

export function getVideoBySlug(slug: string): Video | undefined {
  return videos.find(v => v.slug === slug);
}

export function getVideosByCategory(categorySlug: string): Video[] {
  return videos.filter(v => v.categories.includes(categorySlug));
}

export function getVideosByTag(tagSlug: string): Video[] {
  return videos.filter(v => v.tags.includes(tagSlug));
}

export function getVideoCategoryBySlug(slug: string): VideoCategory | undefined {
  return videoCategories.find(c => c.slug === slug);
}

export function getVideoTagBySlug(slug: string): VideoTag | undefined {
  return videoTags.find(t => t.slug === slug);
}

export function getRelatedVideos(currentSlug: string, limit = 3): Video[] {
  const current = getVideoBySlug(currentSlug);
  if (!current) return videos.slice(0, limit);

  return videos
    .filter(v => v.slug !== currentSlug)
    .filter(v =>
      v.categories.some(c => current.categories.includes(c)) ||
      v.tags.some(t => current.tags.includes(t))
    )
    .slice(0, limit);
}
