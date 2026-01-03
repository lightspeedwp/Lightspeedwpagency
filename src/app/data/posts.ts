/**
 * Blog Posts Mock Data (DEPRECATED - Use blog-posts.ts)
 * 
 * This file maintained for backward compatibility.
 * New code should import from /src/app/data/blog-posts.ts
 * 
 * @deprecated Use blog-posts.ts instead
 */

import {
  blogPosts as newBlogPosts,
  featuredPosts as newFeaturedPosts,
  blogAuthors as newBlogAuthors,
  blogCategories as newBlogCategories,
  postTags as newPostTags,
  getPostBySlug as getNewPostBySlug,
  getAuthorBySlug as getNewAuthorBySlug,
  getPostsByAuthor as getNewPostsByAuthor,
  getPostsByCategory as getNewPostsByCategory,
  getPostsByTag as getNewPostsByTag,
  getRecentPosts as getNewRecentPosts,
  getRelatedPosts as getNewRelatedPosts,
  searchPosts as newSearchPosts,
  type BlogPost as NewBlogPost,
  type BlogAuthor as NewBlogAuthor
} from './blog-posts';

/**
 * Legacy Blog Post Interface
 * Kept for backward compatibility
 */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  featuredImage: string;
  author: string;
  categories: string[];
  tags: string[];
  date: string;
  readingTime: string;
  featured: boolean;
}

/**
 * Legacy Author Interface
 * Kept for backward compatibility
 */
export interface Author {
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

/**
 * Blog Posts (Direct mapping - structure is identical)
 */
export const blogPosts: BlogPost[] = newBlogPosts;

/**
 * Featured Posts
 */
export const featuredPosts: BlogPost[] = newFeaturedPosts;

/**
 * Authors
 */
export const authors: Author[] = newBlogAuthors;

/**
 * Blog Categories
 */
export const blogCategories = newBlogCategories.map(c => ({
  slug: c.slug,
  name: c.name,
  count: c.count
}));

/**
 * Post Tags
 */
export const postTags = newPostTags.map(t => ({
  slug: t.slug,
  name: t.name,
  count: t.count
}));

/**
 * Helper Functions (Direct mapping - signatures are identical)
 */

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getNewPostBySlug(slug);
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return getNewAuthorBySlug(slug);
}

export function getPostsByAuthor(authorSlug: string): BlogPost[] {
  return getNewPostsByAuthor(authorSlug);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return getNewPostsByCategory(categorySlug);
}

export function getPostsByTag(tagSlug: string): BlogPost[] {
  return getNewPostsByTag(tagSlug);
}

export function getRecentPosts(limit: number = 6): BlogPost[] {
  return getNewRecentPosts(limit);
}

export function getRelatedPosts(postSlug: string, limit: number = 3): BlogPost[] {
  return getNewRelatedPosts(postSlug, limit);
}

export function searchPosts(query: string): BlogPost[] {
  return newSearchPosts(query);
}