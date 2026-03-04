/**
 * PostCard Pattern Component
 *
 * Reusable post card pattern used across blog archives, search results, and related posts.
 * Eliminates JSX duplication across 20+ templates.
 *
 * @see /src/styles/patterns/cards/post-card.css
 * @see /guidelines/patterns/PostCard.md
 */

import { Link } from 'react-router';
import { CalendarBlank, Clock, User, Tag, ArrowRight } from '@phosphor-icons/react';
import type { BlogPost } from '@/data/posts';

/**
 * PostCard component props
 */
export interface PostCardProps {
  /** Post data object */
  post: BlogPost;
  
  /** Card layout variant */
  variant?: 'vertical' | 'horizontal' | 'minimal' | 'featured';
  
  /** Show featured image */
  showImage?: boolean;
  
  /** Show post excerpt */
  showExcerpt?: boolean;
  
  /** Show post metadata (author, date, reading time) */
  showMeta?: boolean;
  
  /** Show post tags */
  showTags?: boolean;
  
  /** Show category */
  showCategory?: boolean;
  
  /** Show reading time */
  showReadingTime?: boolean;
  
  /** Custom CSS class */
  className?: string;
  
  /** Loading state */
  loading?: boolean;
}

/**
 * PostCard Component
 *
 * Displays a blog post card with configurable layout and content display options.
 * Uses 100% CSS variables for styling - NO hardcoded values.
 *
 * **Typography:**
 * - Title: var(--text-h4) with var(--font-primary)
 * - Excerpt: var(--text-base) with var(--font-secondary)
 * - Meta: var(--text-sm) with var(--font-secondary)
 * - Tags: var(--text-xs) with var(--font-secondary)
 *
 * **Variants:**
 * - `vertical`: Standard vertical card (default)
 * - `horizontal`: Horizontal layout with image on left
 * - `minimal`: Text-only, no image
 * - `featured`: Larger card with full-width image
 *
 * @example
 * ```tsx
 * <PostCard
 *   post={blogPost}
 *   variant="vertical"
 *   showImage={true}
 *   showExcerpt={true}
 *   showMeta={true}
 *   showTags={true}
 * />
 * ```
 */
export const PostCard = ({
  post,
  variant = 'vertical',
  showImage = true,
  showExcerpt = true,
  showMeta = true,
  showTags = false,
  showCategory = true,
  showReadingTime = true,
  className = '',
  loading = false,
}: PostCardProps) => {
  // Handle loading state
  if (loading) {
    return (
      <article className={`post-card post-card--loading post-card--${variant} ${className}`}>
        <div className="post-card__skeleton">
          <div className="post-card__skeleton-image" />
          <div className="post-card__skeleton-content">
            <div className="post-card__skeleton-title" />
            <div className="post-card__skeleton-excerpt" />
            <div className="post-card__skeleton-meta" />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={`post-card post-card--${variant} ${className}`}>
      <Link to={post.url} className="post-card__link">
        {/* Featured Image */}
        {showImage && post.featuredImage && (
          <div className="post-card__image-wrapper">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="post-card__image"
              loading="lazy"
            />
            <div className="post-card__image-overlay" />
            
            {/* Category Badge on Image */}
            {showCategory && post.category && (
              <span className="post-card__category-badge">
                {post.category.name}
              </span>
            )}
          </div>
        )}

        {/* Content */}
        <div className="post-card__content">
          {/* Category (if no image) */}
          {showCategory && post.category && !showImage && (
            <span className="post-card__category">
              {post.category.name}
            </span>
          )}

          {/* Title */}
          <h3 
            className="post-card__title"
            style={{
              fontSize: 'var(--text-h4)',
              fontFamily: 'var(--font-primary)',
            }}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          {showExcerpt && post.excerpt && (
            <p 
              className="post-card__excerpt"
              style={{
                fontSize: 'var(--text-base)',
                fontFamily: 'var(--font-secondary)',
              }}
            >
              {post.excerpt}
            </p>
          )}

          {/* Meta Information */}
          {showMeta && (
            <div className="post-card__meta">
              {/* Author */}
              {post.author && (
                <span 
                  className="post-card__meta-item post-card__author"
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'var(--font-secondary)',
                  }}
                >
                  <User className="post-card__icon" size={16} aria-hidden="true" />
                  <span>{post.author.name}</span>
                </span>
              )}

              {/* Date */}
              {post.date && (
                <span 
                  className="post-card__meta-item post-card__date"
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'var(--font-secondary)',
                  }}
                >
                  <CalendarBlank className="post-card__icon" size={16} aria-hidden="true" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                </span>
              )}

              {/* Reading Time */}
              {showReadingTime && post.readingTime && (
                <span 
                  className="post-card__meta-item post-card__reading-time"
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'var(--font-secondary)',
                  }}
                >
                  <Clock className="post-card__icon" size={16} aria-hidden="true" />
                  <span>{post.readingTime}</span>
                </span>
              )}
            </div>
          )}

          {/* Tags */}
          {showTags && post.tags && post.tags.length > 0 && (
            <div className="post-card__tags">
              <Tag className="post-card__tags-icon" size={14} aria-hidden="true" />
              {post.tags.slice(0, 3).map((tag) => (
                <span 
                  key={tag}
                  className="post-card__tag"
                  style={{
                    fontSize: 'var(--text-xs)',
                    fontFamily: 'var(--font-secondary)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Read More Link (minimal variant) */}
          {variant === 'minimal' && (
            <span className="post-card__read-more">
              Read article <ArrowRight size={16} aria-hidden="true" />
            </span>
          )}
        </div>
      </Link>
    </article>
  );
};

/**
 * PostCardGrid Component
 *
 * Grid wrapper for multiple PostCard components.
 * Uses responsive grid utilities from grid-utilities.css.
 */
export interface PostCardGridProps {
  /** Array of posts to display */
  posts: BlogPost[];
  
  /** Card variant */
  variant?: PostCardProps['variant'];
  
  /** Show images on cards */
  showImages?: boolean;
  
  /** Show excerpts on cards */
  showExcerpts?: boolean;
  
  /** Show metadata on cards */
  showMeta?: boolean;
  
  /** Show tags on cards */
  showTags?: boolean;
  
  /** Grid columns (2 or 3) */
  columns?: 2 | 3;
  
  /** Custom CSS class */
  className?: string;
  
  /** Loading state */
  loading?: boolean;
  
  /** Number of skeleton cards to show when loading */
  skeletonCount?: number;
}

export const PostCardGrid = ({
  posts,
  variant = 'vertical',
  showImages = true,
  showExcerpts = true,
  showMeta = true,
  showTags = false,
  columns = 3,
  className = '',
  loading = false,
  skeletonCount = 6,
}: PostCardGridProps) => {
  const gridClass = columns === 2 ? 'wp-grid-2-cols' : 'wp-grid-3-cols';

  return (
    <div className={`post-card-grid ${gridClass} ${className}`}>
      {loading
        ? Array.from({ length: skeletonCount }).map((_, index) => (
            <PostCard
              key={`skeleton-${index}`}
              post={{} as BlogPost}
              variant={variant}
              loading={true}
            />
          ))
        : posts.map((post) => (
            <PostCard
              key={post.slug}
              post={post}
              variant={variant}
              showImage={showImages}
              showExcerpt={showExcerpts}
              showMeta={showMeta}
              showTags={showTags}
            />
          ))}
    </div>
  );
};