/**
 * Review Snippet Component
 * 
 * WordPress concept: Testimonial/review display
 * Pattern: `lsx-design/marketing/review-snippet`
 * 
 * Rich review display component with author information, ratings,
 * verified badges, and responsive layouts.
 * 
 * **Purpose:**
 * - Display customer reviews prominently
 * - Show social proof through testimonials
 * - Highlight verified buyer reviews
 * - Support rich snippets in search results
 * 
 * **Use Cases:**
 * - Product pages (customer reviews)
 * - Service pages (client testimonials)
 * - Homepage (featured reviews)
 * - Dedicated testimonials page
 * 
 * **Design System:**
 * - Typography: Manrope font, var(--text-base) for body
 * - Colors: var(--primary) for ratings, var(--muted) for backgrounds
 * - Spacing: Tailwind classes (p-6, gap-4)
 * - Fonts: Lexend for reviewer names, Manrope for review text
 * 
 * **Accessibility:**
 * - Semantic HTML structure
 * - ARIA labels for ratings
 * - High contrast in both themes
 * - Keyboard accessible
 * 
 * **SEO Benefits:**
 * - Review schema markup
 * - Rich snippets with stars
 * - Aggregate rating display
 * - Increased trust signals
 * 
 * @example
 * // Single review
 * <ReviewSnippet
 *   review={{
 *     author: "Sarah Johnson",
 *     rating: 5,
 *     date: "2024-01-15",
 *     title: "Exceptional WordPress Development",
 *     content: "LSX Design delivered a stunning WordPress site...",
 *     verified: true
 *   }}
 * />
 * 
 * @example
 * // Multiple reviews in grid
 * <ReviewGrid reviews={reviewsArray} layout="grid" />
 */

import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';

/**
 * Single review data structure
 */
export interface Review {
  /**
   * Reviewer name
   */
  author: string;

  /**
   * Author photo URL (optional)
   */
  authorPhoto?: string;

  /**
   * Author job title or company (optional)
   */
  authorTitle?: string;

  /**
   * Rating (1-5 stars)
   */
  rating: number;

  /**
   * Review date (ISO format or formatted string)
   */
  date: string;

  /**
   * Review title/headline
   */
  title: string;

  /**
   * Review content/body
   */
  content: string;

  /**
   * Verified purchase/buyer badge
   */
  verified?: boolean;

  /**
   * Product/service being reviewed (optional)
   */
  productName?: string;
}

/**
 * Review Snippet component props
 */
interface ReviewSnippetProps {
  review: Review;
  variant?: 'default' | 'compact' | 'card';
  showDate?: boolean;
  className?: string;
}

/**
 * Render star rating
 */
function StarRating({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className="flex items-center gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={sizeMap[size]}
          style={{
            color: star <= rating ? 'var(--primary)' : 'var(--muted-foreground)',
            fill: star <= rating ? 'var(--primary)' : 'transparent',
          }}
        />
      ))}
    </div>
  );
}

/**
 * Review Snippet Component
 * 
 * Single review display with multiple style variants.
 * 
 * @param props - ReviewSnippetProps
 * @returns Formatted review display
 */
export function ReviewSnippet({
  review,
  variant = 'default',
  showDate = true,
  className = '',
}: ReviewSnippetProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (variant === 'compact') {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <div className="flex items-center justify-between">
          <StarRating rating={review.rating} size="sm" />
          {review.verified && (
            <div className="flex items-center gap-1">
              <CheckCircle2
                className="w-4 h-4"
                style={{ color: 'var(--primary)' }}
              />
              <span
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'var(--text-small)',
                  color: 'var(--muted-foreground)',
                }}
              >
                Verified
              </span>
            </div>
          )}
        </div>

        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-base)',
            color: 'var(--foreground)',
            lineHeight: '1.6',
          }}
        >
          "{review.content}"
        </p>

        <p
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-small)',
            fontWeight: '600',
            color: 'var(--foreground)',
          }}
        >
          — {review.author}
          {review.authorTitle && (
            <span
              style={{
                fontWeight: '400',
                color: 'var(--muted-foreground)',
              }}
            >
              , {review.authorTitle}
            </span>
          )}
        </p>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div
        className={`p-6 rounded border ${className}`}
        style={{
          backgroundColor: 'var(--background)',
          borderColor: 'var(--border)',
          borderRadius: 'var(--radius-lg)',
        }}
      >
        {/* Quote Icon */}
        <Quote
          className="w-8 h-8 mb-4"
          style={{ color: 'var(--primary)', opacity: 0.3 }}
        />

        {/* Rating */}
        <StarRating rating={review.rating} />

        {/* Title */}
        <h3
          className="mt-4 mb-3"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-lg)',
            fontWeight: '600',
            color: 'var(--foreground)',
          }}
        >
          {review.title}
        </h3>

        {/* Content */}
        <p
          className="mb-4"
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-base)',
            color: 'var(--foreground)',
            lineHeight: '1.6',
          }}
        >
          {review.content}
        </p>

        {/* Author Info */}
        <div className="flex items-center justify-between pt-4 border-t"
          style={{ borderColor: 'var(--border)' }}
        >
          <div className="flex items-center gap-3">
            {review.authorPhoto ? (
              <img
                src={review.authorPhoto}
                alt={review.author}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--primary)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: '600',
                    color: 'var(--primary-foreground)',
                  }}
                >
                  {review.author.charAt(0)}
                </span>
              </div>
            )}

            <div>
              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: '600',
                  color: 'var(--foreground)',
                }}
              >
                {review.author}
              </p>
              {review.authorTitle && (
                <p
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'var(--text-small)',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  {review.authorTitle}
                </p>
              )}
            </div>
          </div>

          {review.verified && (
            <div
              className="flex items-center gap-1 px-2 py-1 rounded"
              style={{
                backgroundColor: 'var(--primary)',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              <CheckCircle2
                className="w-3 h-3"
                style={{ color: 'var(--primary-foreground)' }}
              />
              <span
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'var(--text-small)',
                  fontWeight: '600',
                  color: 'var(--primary-foreground)',
                }}
              >
                Verified
              </span>
            </div>
          )}
        </div>

        {/* Date */}
        {showDate && (
          <p
            className="mt-2"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-small)',
              color: 'var(--muted-foreground)',
            }}
          >
            {formatDate(review.date)}
          </p>
        )}
      </div>
    );
  }

  // Default variant
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <StarRating rating={review.rating} />
          <h3
            className="mt-2"
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-lg)',
              fontWeight: '600',
              color: 'var(--foreground)',
            }}
          >
            {review.title}
          </h3>
        </div>

        {review.verified && (
          <div
            className="flex items-center gap-1 px-3 py-1 rounded"
            style={{
              backgroundColor: 'var(--primary)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            <CheckCircle2
              className="w-4 h-4"
              style={{ color: 'var(--primary-foreground)' }}
            />
            <span
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-small)',
                fontWeight: '600',
                color: 'var(--primary-foreground)',
              }}
            >
              Verified Buyer
            </span>
          </div>
        )}
      </div>

      {/* Review Content */}
      <p
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'var(--text-base)',
          color: 'var(--foreground)',
          lineHeight: '1.6',
        }}
      >
        {review.content}
      </p>

      {/* Author & Date */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {review.authorPhoto && (
            <img
              src={review.authorPhoto}
              alt={review.author}
              className="w-8 h-8 rounded-full object-cover"
            />
          )}
          <div>
            <p
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: '600',
                color: 'var(--foreground)',
              }}
            >
              {review.author}
            </p>
            {review.authorTitle && (
              <p
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'var(--text-small)',
                  color: 'var(--muted-foreground)',
                }}
              >
                {review.authorTitle}
              </p>
            )}
          </div>
        </div>

        {showDate && (
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-small)',
              color: 'var(--muted-foreground)',
            }}
          >
            {formatDate(review.date)}
          </p>
        )}
      </div>
    </div>
  );
}

/**
 * Review Grid Component
 * 
 * Display multiple reviews in a grid layout.
 */
interface ReviewGridProps {
  reviews: Review[];
  layout?: 'grid' | 'list';
  variant?: 'default' | 'compact' | 'card';
  columns?: 1 | 2 | 3;
  className?: string;
}

export function ReviewGrid({
  reviews,
  layout = 'grid',
  variant = 'card',
  columns = 3,
  className = '',
}: ReviewGridProps) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div
      className={
        layout === 'grid'
          ? `grid ${gridClasses[columns]} gap-6 ${className}`
          : `space-y-6 ${className}`
      }
    >
      {reviews.map((review, index) => (
        <ReviewSnippet key={index} review={review} variant={variant} />
      ))}
    </div>
  );
}

/**
 * Aggregate Rating Display
 * 
 * Show overall rating statistics.
 */
interface AggregateRatingProps {
  averageRating: number;
  totalReviews: number;
  ratingBreakdown?: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
  className?: string;
}

export function AggregateRating({
  averageRating,
  totalReviews,
  ratingBreakdown,
  className = '',
}: AggregateRatingProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {/* Average Rating */}
      <div className="flex items-center gap-4">
        <div className="text-center">
          <div
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-h1)',
              fontWeight: '700',
              color: 'var(--foreground)',
            }}
          >
            {averageRating.toFixed(1)}
          </div>
          <StarRating rating={Math.round(averageRating)} size="lg" />
          <p
            className="mt-2"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-small)',
              color: 'var(--muted-foreground)',
            }}
          >
            {totalReviews.toLocaleString()} reviews
          </p>
        </div>

        {/* Rating Breakdown */}
        {ratingBreakdown && (
          <div className="flex-1 space-y-2">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = ratingBreakdown[stars as keyof typeof ratingBreakdown];
              const percentage = (count / totalReviews) * 100;

              return (
                <div key={stars} className="flex items-center gap-2">
                  <span
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)',
                      minWidth: '3ch',
                    }}
                  >
                    {stars}★
                  </span>
                  <div
                    className="flex-1 h-2 rounded-full overflow-hidden"
                    style={{ backgroundColor: 'var(--muted)' }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: 'var(--primary)',
                        width: `${percentage}%`,
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)',
                      minWidth: '3ch',
                      textAlign: 'right',
                    }}
                  >
                    {count}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * WordPress Block Pattern Registration
 * 
 * Pattern slug: lsx-design/marketing/review-snippet
 * Category: marketing
 */
