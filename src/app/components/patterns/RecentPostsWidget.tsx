/**
 * RecentPostsWidget Pattern
 *
 * Displays the latest blog posts in a responsive card grid.
 * Pulls data from centralized blog-posts.ts data file.
 *
 * WordPress equivalent: wp:latest-posts block
 *
 * @example
 * <RecentPostsWidget count={3} />
 */

import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { blogPosts, blogAuthors } from '../../data/blog-posts';
import { blogCategories } from '../../data/taxonomies';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/pages';
import { Calendar, Clock, ArrowRight } from 'lucide-react';


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

export function RecentPostsWidget({
  count = 3,
  title = 'Latest from the Blog',
  showViewAll = true,
  categoryFilter,
}: RecentPostsWidgetProps) {
  const { ref: headerRef, style: headerStyle } = useScrollReveal({ animation: 'fade-up' });
  const { containerRef, itemStyle } = useStaggerReveal({ stagger: 120, animation: 'fade-up' });

  // Filter and sort posts by date
  const filteredPosts = blogPosts
    .filter(post => !categoryFilter || post.categories.includes(categoryFilter))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);

  const getCategoryName = (categorySlug: string) => {
    const cat = blogCategories.find(c => c.slug === categorySlug);
    return cat?.name || categorySlug;
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (filteredPosts.length === 0) return null;

  return (
    <div className="recent-posts-widget">
      {/* Header */}
      <div
        className="recent-posts-widget__header"
        ref={headerRef as React.RefObject<HTMLDivElement>}
        style={headerStyle}
      >
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

      {/* Post Grid */}
      <div
        className="recent-posts-widget__grid"
        ref={containerRef as React.RefObject<HTMLDivElement>}
      >
        {filteredPosts.map((post, index) => (
          <Link
            key={post.id}
            to={`/insights/${post.slug}`}
            className="recent-posts-widget__card"
            style={itemStyle(index)}
          >
            {/* Image */}
            <div className="recent-posts-widget__image-wrap">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="recent-posts-widget__image"
                loading="lazy"
              />
              {post.categories[0] && (
                <span className="recent-posts-widget__category-badge">
                  {getCategoryName(post.categories[0])}
                </span>
              )}
            </div>

            {/* Body */}
            <div className="recent-posts-widget__body">
              <h3 className="recent-posts-widget__post-title">{post.title}</h3>
              <p className="recent-posts-widget__excerpt">{post.excerpt}</p>

              {/* Meta */}
              <div className="recent-posts-widget__meta">
                <Calendar size={12} className="recent-posts-widget__meta-icon" />
                <span>{formatDate(post.date)}</span>
                <span className="recent-posts-widget__meta-divider" />
                <Clock size={12} className="recent-posts-widget__meta-icon" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
