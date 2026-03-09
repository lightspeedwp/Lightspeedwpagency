/**
 * Recent Posts Widget — LSX Design
 */

import React from 'react';
import { getPageUrl } from '../../data/site-pages';
import { Link } from 'react-router';
import { ArrowRight } from '@phosphor-icons/react';
import { blogPosts, blogCategories, blogAuthors } from '../../data/blog-posts';
import { PostCardGrid } from './PostCard';

interface RecentPostsWidgetProps {
  /** Number of posts to display (default: 3) */
  count?: number;
  /** Section title */
  title?: string;
  /** Show "View All" link */
  showViewAll?: boolean;
  /** Optional category filter slug */
  categoryFilter?: string;
}

/**
 * Convert blog post to PostCard format
 */
function convertToPostCardFormat(post: any) {
  const getCategoryName = (categorySlug: string) => {
    const cat = blogCategories.find(c => c.slug === categorySlug);
    return cat?.name || categorySlug;
  };

  const author = blogAuthors.find(a => a.slug === post.author);

  return {
    ...post,
    url: `/insights/${post.slug}`,
    category: post.categories[0] ? {
      name: getCategoryName(post.categories[0]),
      slug: post.categories[0]
    } : undefined,
    author: author ? {
      name: author.name,
      slug: author.slug,
      avatar: author.avatar,
      bio: author.bio
    } : undefined,
    tags: post.categories.slice(1).map((cat: string) => getCategoryName(cat))
  };
}

export function RecentPostsWidget({
  count = 3,
  title = 'Latest from the Blog',
  showViewAll = true,
  categoryFilter,
}: RecentPostsWidgetProps) {
  // Filter and sort posts by date
  const filteredPosts = blogPosts
    .filter(post => !categoryFilter || post.categories.includes(categoryFilter))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);

  if (filteredPosts.length === 0) return null;

  return (
    <div className="recent-posts-widget">
      {/* Header */}
      <div className="recent-posts-widget__header">
        <h2 className="recent-posts-widget__title">{title}</h2>
        {showViewAll && (
          <Link
            to={getPageUrl('blog')}
            className="recent-posts-widget__view-all"
          >
            View All <ArrowRight size={14} />
          </Link>
        )}
      </div>

      {/* Post Grid - Using PostCardGrid */}
      <PostCardGrid
        posts={filteredPosts.map(convertToPostCardFormat)}
        variant="vertical"
        columns={3}
        showImages={true}
        showExcerpts={true}
        showMeta={true}
        showCategory={true}
        showReadingTime={true}
      />
    </div>
  );
}