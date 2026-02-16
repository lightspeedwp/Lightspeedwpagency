/**
 * Search Data & Utilities
 *
 * Unified search index across all content types:
 * blog posts, portfolio projects, videos, podcasts, and site pages.
 *
 * **WordPress Mapping:**
 * - WP_Query with 's' parameter for native search
 * - Custom post types included via 'post_type' => array(...)
 * - Relevance weighting via custom SQL or Relevanssi/SearchWP plugin
 *
 * @see /src/app/components/templates/SearchResultsTemplate.tsx
 */

import { blogPosts, type BlogPost } from './blog-posts';
import { portfolioProjects, type PortfolioProject } from './portfolio-projects';
import { videos, type Video } from './videos';
import { podcasts, type Podcast } from './podcasts';
import { sitePages, type SitePage } from './site-pages';

/* ═══════════════════════════════════════════
 * Types
 * ═══════════════════════════════════════════ */

export type ContentType = 'blog' | 'portfolio' | 'video' | 'podcast' | 'page';

export type SortOption = 'relevance' | 'recent' | 'popular' | 'featured';

export interface SearchResult {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  contentType: ContentType;
  date: string;
  url: string;
  featuredImage?: string;
  relevanceScore: number;
  /** Extra metadata for display (duration, author, category, etc.) */
  meta?: Record<string, string>;
}

export interface SearchFilters {
  query: string;
  contentTypes: ContentType[];
  sort: SortOption;
}

/* ═══════════════════════════════════════════
 * Content-Type Labels & Colors
 * ═══════════════════════════════════════════ */

export const contentTypeLabels: Record<ContentType, string> = {
  blog: 'Blog',
  portfolio: 'Portfolio',
  video: 'Video',
  podcast: 'Podcast',
  page: 'Page',
};

export const contentTypeColors: Record<ContentType, string> = {
  blog: 'var(--primary)',
  portfolio: 'var(--accent)',
  video: 'var(--info)',
  podcast: 'var(--success)',
  page: 'var(--muted-foreground)',
};

/* ═══════════════════════════════════════════
 * Scoring Helpers
 * ═══════════════════════════════════════════ */

function scoreMatch(text: string, query: string): number {
  const lower = text.toLowerCase();
  const q = query.toLowerCase();
  if (!q) return 0;

  // Exact title match
  if (lower === q) return 100;
  // Title starts with query
  if (lower.startsWith(q)) return 80;
  // Title contains query as whole word
  const wordBoundary = new RegExp(`\\b${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
  if (wordBoundary.test(text)) return 60;
  // Partial match
  if (lower.includes(q)) return 40;

  // Multi-word: check each word
  const words = q.split(/\s+/).filter(Boolean);
  const matchCount = words.filter(w => lower.includes(w)).length;
  if (matchCount > 0) return (matchCount / words.length) * 30;

  return 0;
}

/* ═══════════════════════════════════════════
 * Index Builders
 * ═══════════════════════════════════════════ */

function indexBlogPosts(query: string): SearchResult[] {
  return blogPosts
    .map((post: BlogPost) => {
      const titleScore = scoreMatch(post.title, query);
      const excerptScore = scoreMatch(post.excerpt, query) * 0.5;
      const tagScore = post.tags.some(t =>
        t.toLowerCase().includes(query.toLowerCase())
      )
        ? 20
        : 0;
      const relevanceScore = titleScore + excerptScore + tagScore;
      if (relevanceScore === 0) return null;
      return {
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        contentType: 'blog' as ContentType,
        date: post.date,
        url: `/blog/${post.slug}`,
        featuredImage: post.featuredImage,
        relevanceScore,
        meta: {
          author: post.author,
          readingTime: post.readingTime,
          categories: post.categories.join(', '),
        },
      };
    })
    .filter(Boolean) as SearchResult[];
}

function indexPortfolioProjects(query: string): SearchResult[] {
  return portfolioProjects
    .map((project: PortfolioProject) => {
      const titleScore = scoreMatch(project.title, query);
      const clientScore = scoreMatch(project.client, query) * 0.6;
      const excerptScore = scoreMatch(project.excerpt, query) * 0.4;
      const tagScore = project.projectTags.some(t =>
        t.toLowerCase().includes(query.toLowerCase())
      )
        ? 15
        : 0;
      const relevanceScore = titleScore + clientScore + excerptScore + tagScore;
      if (relevanceScore === 0) return null;
      return {
        id: project.id,
        slug: project.slug,
        title: project.title,
        excerpt: project.excerpt,
        contentType: 'portfolio' as ContentType,
        date: '',
        url: `/portfolio/${project.slug}`,
        featuredImage: project.featuredImage,
        relevanceScore,
        meta: {
          client: project.client,
          groups: project.projectGroups.join(', '),
        },
      };
    })
    .filter(Boolean) as SearchResult[];
}

function indexVideos(query: string): SearchResult[] {
  return videos
    .map((video: Video) => {
      const titleScore = scoreMatch(video.title, query);
      const excerptScore = scoreMatch(video.excerpt, query) * 0.5;
      const tagScore = video.tags.some(t =>
        t.toLowerCase().includes(query.toLowerCase())
      )
        ? 15
        : 0;
      const relevanceScore = titleScore + excerptScore + tagScore;
      if (relevanceScore === 0) return null;
      return {
        id: video.id,
        slug: video.slug,
        title: video.title,
        excerpt: video.excerpt,
        contentType: 'video' as ContentType,
        date: video.date,
        url: `/video/${video.slug}`,
        featuredImage: video.featuredImage,
        relevanceScore,
        meta: {
          duration: video.duration,
          author: video.author,
          views: String(video.views),
        },
      };
    })
    .filter(Boolean) as SearchResult[];
}

function indexPodcasts(query: string): SearchResult[] {
  return podcasts
    .map((pod: Podcast) => {
      const titleScore = scoreMatch(pod.title, query);
      const excerptScore = scoreMatch(pod.excerpt, query) * 0.5;
      const catScore = pod.categories.some(c =>
        c.toLowerCase().includes(query.toLowerCase())
      )
        ? 10
        : 0;
      const relevanceScore = titleScore + excerptScore + catScore;
      if (relevanceScore === 0) return null;
      return {
        id: pod.id,
        slug: pod.slug,
        title: pod.title,
        excerpt: pod.excerpt,
        contentType: 'podcast' as ContentType,
        date: pod.date,
        url: `/podcast/${pod.slug}`,
        featuredImage: pod.featuredImage,
        relevanceScore,
        meta: {
          season: `S${pod.season}`,
          episode: `E${pod.episode}`,
          duration: pod.duration,
          listens: String(pod.listens),
        },
      };
    })
    .filter(Boolean) as SearchResult[];
}

function indexPages(query: string): SearchResult[] {
  return sitePages
    .map((page: SitePage) => {
      const titleScore = scoreMatch(page.title, query);
      const excerptScore = page.excerpt
        ? scoreMatch(page.excerpt, query) * 0.4
        : 0;
      const relevanceScore = titleScore + excerptScore;
      if (relevanceScore === 0) return null;
      return {
        id: page.id,
        slug: page.slug,
        title: page.title,
        excerpt: page.excerpt || '',
        contentType: 'page' as ContentType,
        date: '',
        url: page.slug === 'home' ? '/' : `/${page.slug}`,
        relevanceScore,
      };
    })
    .filter(Boolean) as SearchResult[];
}

/* ═══════════════════════════════════════════
 * Main Search Function
 * ═══════════════════════════════════════════ */

/**
 * Search all content types
 *
 * @param filters - Search query, content type filters, and sort option
 * @returns Filtered and sorted search results
 */
export function searchAllContent(filters: SearchFilters): SearchResult[] {
  const { query, contentTypes, sort } = filters;
  if (!query.trim()) return [];

  const allResults: SearchResult[] = [];

  if (contentTypes.length === 0 || contentTypes.includes('blog')) {
    allResults.push(...indexBlogPosts(query));
  }
  if (contentTypes.length === 0 || contentTypes.includes('portfolio')) {
    allResults.push(...indexPortfolioProjects(query));
  }
  if (contentTypes.length === 0 || contentTypes.includes('video')) {
    allResults.push(...indexVideos(query));
  }
  if (contentTypes.length === 0 || contentTypes.includes('podcast')) {
    allResults.push(...indexPodcasts(query));
  }
  if (contentTypes.length === 0 || contentTypes.includes('page')) {
    allResults.push(...indexPages(query));
  }

  // Sort
  switch (sort) {
    case 'relevance':
      allResults.sort((a, b) => b.relevanceScore - a.relevanceScore);
      break;
    case 'recent':
      allResults.sort((a, b) => {
        if (!a.date && !b.date) return 0;
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      break;
    case 'popular':
      // For blog: featured first, for video: views, etc.
      allResults.sort((a, b) => {
        const aViews = parseInt(a.meta?.views || '0');
        const bViews = parseInt(b.meta?.views || '0');
        return bViews - aViews || b.relevanceScore - a.relevanceScore;
      });
      break;
    case 'featured':
      // Featured content first, then by relevance
      allResults.sort((a, b) => b.relevanceScore - a.relevanceScore);
      break;
  }

  return allResults;
}

/**
 * Get result counts by content type
 */
export function getResultCountsByType(
  results: SearchResult[]
): Record<ContentType, number> {
  return {
    blog: results.filter(r => r.contentType === 'blog').length,
    portfolio: results.filter(r => r.contentType === 'portfolio').length,
    video: results.filter(r => r.contentType === 'video').length,
    podcast: results.filter(r => r.contentType === 'podcast').length,
    page: results.filter(r => r.contentType === 'page').length,
  };
}
