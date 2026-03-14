/**
 * Unified Search Index
 * 
 * Centralized search functionality for the prototype.
 * Aggregates content from all data sources into a normalized search index.
 */

import { sitePages } from './site-pages';
import { blogPosts } from './blog-posts';
import { portfolioProjects } from './portfolio-projects';
import { videos } from './videos';
import { podcasts } from './podcasts';

export type ContentType = 'blog' | 'portfolio' | 'video' | 'podcast' | 'page';

export type SortOption = 'relevance' | 'recent' | 'popular' | 'featured';

export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  contentType: ContentType;
  url: string;
  date?: string;
  meta?: {
    duration?: string;
    views?: string;
    readingTime?: string;
  };
  relevance?: number; // Internal scoring
}

export const contentTypeLabels: Record<ContentType, string> = {
  blog: 'Article',
  portfolio: 'Project',
  video: 'Video',
  podcast: 'Podcast',
  page: 'Page',
};

export const contentTypeColorClass: Record<ContentType, string> = {
  blog: 'wp-text-primary',
  portfolio: 'wp-text-accent',
  video: 'wp-text-category-red', 
  podcast: 'wp-text-category-violet',
  page: 'wp-text-muted-foreground',
};

interface SearchOptions {
  query: string;
  contentTypes?: ContentType[];
  sort?: SortOption;
}

/**
 * Search all content across the site
 */
export const searchAllContent = ({ query, contentTypes = [], sort = 'relevance' }: SearchOptions): SearchResult[] => {
  const q = query.toLowerCase();
  
  // If no query and sort is relevance, return nothing (or everything if you prefer empty state to be full list)
  // For this search page, usually empty query means "show nothing" or "show recent" if sort is recent.
  // But SearchResultsTemplate handles empty query by showing empty state.
  if (!q && sort === 'relevance') return [];

  let results: SearchResult[] = [];

  // Map Pages
  sitePages.forEach(page => {
    if (!q || page.title.toLowerCase().includes(q) || (page.excerpt && page.excerpt.toLowerCase().includes(q))) {
      results.push({
        id: page.id,
        title: page.title,
        excerpt: page.excerpt || '',
        contentType: 'page',
        url: `/${page.slug}`
      });
    }
  });

  // Map Blog Posts
  blogPosts.forEach(post => {
    if (!q || post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q)) {
      results.push({
        id: post.id,
        title: post.title,
        excerpt: post.excerpt,
        contentType: 'blog',
        url: `/blog/${post.slug}`,
        date: post.date,
        meta: { readingTime: post.readingTime }
      });
    }
  });

  // Map Portfolio
  portfolioProjects.forEach(project => {
    if (!q || project.title.toLowerCase().includes(q) || project.excerpt.toLowerCase().includes(q)) {
      results.push({
        id: project.id,
        title: project.title,
        excerpt: project.excerpt,
        contentType: 'portfolio',
        url: `/portfolio/${project.slug}`,
        date: project.date
      });
    }
  });

  // Map Videos
  videos.forEach(video => {
     if (!q || video.title.toLowerCase().includes(q) || video.excerpt.toLowerCase().includes(q)) {
       results.push({
         id: video.id,
         title: video.title,
         excerpt: video.excerpt,
         contentType: 'video',
         url: `/video/${video.slug}`,
         date: video.date,
         meta: { duration: video.duration, views: video.views?.toString() }
       });
     }
  });

  // Map Podcasts
  podcasts.forEach(podcast => {
     if (!q || podcast.title.toLowerCase().includes(q) || podcast.excerpt.toLowerCase().includes(q)) {
       results.push({
         id: podcast.id,
         title: podcast.title,
         excerpt: podcast.excerpt,
         contentType: 'podcast',
         url: `/podcast/${podcast.slug}`,
         date: podcast.date,
         meta: { duration: podcast.duration }
       });
     }
  });
  
  // Filter by content type
  if (contentTypes.length > 0) {
    results = results.filter(r => contentTypes.includes(r.contentType));
  }

  // Sort
  if (sort === 'recent') {
    results.sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    });
  } else if (sort === 'popular') {
    // Simple mock popularity: videos/podcasts with views/listens come first, then others
    results.sort((a, b) => {
      const viewsA = parseInt(a.meta?.views || '0');
      const viewsB = parseInt(b.meta?.views || '0');
      return viewsB - viewsA;
    });
  }
  
  return results;
};

/**
 * Get counts for each content type from a result set
 */
export const getResultCountsByType = (results: SearchResult[]) => {
  const counts: Record<ContentType | 'all', number> = {
    all: results.length,
    blog: 0,
    portfolio: 0,
    video: 0,
    podcast: 0,
    page: 0
  };

  results.forEach(result => {
    if (Object.prototype.hasOwnProperty.call(counts, result.contentType)) {
      counts[result.contentType]++;
    }
  });

  return counts;
};

// Legacy support for older components (if any)
export const performSearch = (query: string): (SearchResult & { type?: ContentType })[] => {
  return searchAllContent({ query }).map(r => ({
    ...r,
    type: r.contentType // map contentType back to type for legacy
  }));
};