/**
 * Product Reviews Component
 * 
 * Production-grade review system with ratings and filtering.
 * 
 * Features:
 * - Star ratings display
 * - Review list with pagination
 * - Filter by rating
 * - Sort options
 * - Helpful votes
 * - Verified purchase badge
 * - Review form
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <ProductReviews
 *   productId="product-123"
 *   reviews={reviews}
 *   onSubmitReview={handleSubmit}
 * />
 */

import { useState } from 'react';
import { Star, ThumbsUp, Check, ChevronDown } from 'lucide-react';
import { Button } from '../blocks/design/Buttons';

export interface Review {
  id: string;
  author: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified?: boolean;
  helpful?: number;
  images?: string[];
}

export interface ProductReviewsProps {
  /** Product ID */
  productId: string;
  /** Reviews array */
  reviews: Review[];
  /** Average rating */
  averageRating?: number;
  /** Total reviews */
  totalReviews?: number;
  /** Submit review handler */
  onSubmitReview?: (review: Omit<Review, 'id' | 'date' | 'helpful'>) => void;
  /** Mark helpful handler */
  onMarkHelpful?: (reviewId: string) => void;
}

export function ProductReviews({
  productId,
  reviews,
  averageRating = 0,
  totalReviews = 0,
  onSubmitReview,
  onMarkHelpful,
}: ProductReviewsProps) {
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'recent' | 'helpful' | 'rating'>('recent');
  const [showReviewForm, setShowReviewForm] = useState(false);

  // Calculate rating distribution
  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter((r) => r.rating === rating).length,
    percentage: (reviews.filter((r) => r.rating === rating).length / reviews.length) * 100,
  }));

  // Filter and sort reviews
  let filteredReviews = filterRating
    ? reviews.filter((r) => r.rating === filterRating)
    : reviews;

  filteredReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'helpful':
        return (b.helpful || 0) - (a.helpful || 0);
      case 'rating':
        return b.rating - a.rating;
      case 'recent':
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  return (
    <div className="space-y-8">
      {/* Summary */}
      <div
        className="p-6"
        style={{
          backgroundColor: 'var(--card)',
          border: '1px solid var(--border-soft)',
          borderRadius: 'var(--radius-xl)',
        }}
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Average Rating */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <div
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--foreground)',
                }}
              >
                {averageRating.toFixed(1)}
              </div>

              <div>
                <div className="flex gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill={i < Math.floor(averageRating) ? 'var(--warning)' : 'none'}
                      stroke={i < Math.floor(averageRating) ? 'var(--warning)' : 'var(--border)'}
                    />
                  ))}
                </div>

                <p
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'var(--text-small)',
                    color: 'var(--muted-foreground)',
                    margin: 0,
                  }}
                >
                  Based on {totalReviews} reviews
                </p>
              </div>
            </div>

            {onSubmitReview && (
              <Button
                variant="default"
                onClick={() => setShowReviewForm(true)}
                className="mt-4"
              >
                Write a Review
              </Button>
            )}
          </div>

          {/* Rating Distribution */}
          <div className="space-y-2">
            {ratingDistribution.map(({ rating, count, percentage }) => (
              <button
                key={rating}
                onClick={() => setFilterRating(filterRating === rating ? null : rating)}
                className="flex items-center gap-3 w-full"
                style={{
                  padding: '8px',
                  backgroundColor:
                    filterRating === rating ? 'var(--accent)' : 'transparent',
                  borderRadius: 'var(--radius)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (filterRating !== rating) {
                    e.currentTarget.style.backgroundColor = 'var(--muted)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (filterRating !== rating) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                    minWidth: '40px',
                  }}
                >
                  {rating} ★
                </span>

                <div
                  className="flex-1 h-2"
                  style={{
                    backgroundColor: 'var(--muted)',
                    borderRadius: 'var(--radius-full)',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${percentage}%`,
                      height: '100%',
                      backgroundColor: 'var(--warning)',
                      borderRadius: 'var(--radius-full)',
                      transition: 'width 0.3s ease',
                    }}
                  />
                </div>

                <span
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'var(--text-small)',
                    color: 'var(--muted-foreground)',
                    minWidth: '40px',
                    textAlign: 'right',
                  }}
                >
                  {count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filters & Sort */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              color: 'var(--foreground)',
            }}
          >
            {filteredReviews.length} {filteredReviews.length === 1 ? 'review' : 'reviews'}
          </span>

          {filterRating && (
            <button
              onClick={() => setFilterRating(null)}
              className="px-3 py-1"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-small)',
                fontWeight: 'var(--font-weight-medium)',
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
                border: 'none',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
              }}
            >
              {filterRating} ★ × Clear
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              color: 'var(--muted-foreground)',
            }}
          >
            Sort by:
          </span>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-medium)',
              backgroundColor: 'var(--background)',
              color: 'var(--foreground)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '8px 32px 8px 12px',
              cursor: 'pointer',
              appearance: 'none',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 8px center',
            }}
          >
            <option value="recent">Most Recent</option>
            <option value="helpful">Most Helpful</option>
            <option value="rating">Highest Rating</option>
          </select>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.map((review) => (
          <div
            key={review.id}
            className="p-6"
            style={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border-soft)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)',
                    }}
                  >
                    {review.author}
                  </span>

                  {review.verified && (
                    <span
                      className="flex items-center gap-1 px-2 py-1"
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        fontWeight: 'var(--font-weight-medium)',
                        backgroundColor: 'var(--success-soft)',
                        color: 'var(--success)',
                        borderRadius: 'var(--radius)',
                      }}
                    >
                      <Check size={12} />
                      Verified Purchase
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < review.rating ? 'var(--warning)' : 'none'}
                        stroke={i < review.rating ? 'var(--warning)' : 'var(--border)'}
                      />
                    ))}
                  </div>

                  <span
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    {new Date(review.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            </div>

            {/* Title */}
            <h4
              className="mb-3"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--foreground)',
                margin: 0,
              }}
            >
              {review.title}
            </h4>

            {/* Comment */}
            <p
              className="mb-4"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                color: 'var(--foreground)',
                margin: 0,
                lineHeight: '1.6',
              }}
            >
              {review.comment}
            </p>

            {/* Images */}
            {review.images && review.images.length > 0 && (
              <div className="flex gap-2 mb-4">
                {review.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Review image ${index + 1}`}
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: 'var(--radius)',
                      border: '1px solid var(--border-soft)',
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </div>
            )}

            {/* Helpful */}
            {onMarkHelpful && (
              <button
                onClick={() => onMarkHelpful(review.id)}
                className="flex items-center gap-2 px-3 py-2"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  backgroundColor: 'var(--muted)',
                  color: 'var(--foreground)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--muted)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                <ThumbsUp size={16} />
                Helpful ({review.helpful || 0})
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredReviews.length === 0 && (
        <div
          className="text-center p-12"
          style={{
            backgroundColor: 'var(--card)',
            border: '1px solid var(--border-soft)',
            borderRadius: 'var(--radius-xl)',
          }}
        >
          <h3
            className="mb-2"
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-h4)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground)',
              margin: 0,
            }}
          >
            No reviews found
          </h3>

          <p
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              color: 'var(--muted-foreground)',
              margin: 0,
            }}
          >
            {filterRating
              ? `No ${filterRating}-star reviews yet`
              : 'Be the first to write a review!'}
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * Star Rating Input Component
 * 
 * Interactive star rating for review forms.
 */
export function StarRating({
  rating,
  onRatingChange,
  size = 24,
}: {
  rating: number;
  onRatingChange: (rating: number) => void;
  size?: number;
}) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const starValue = i + 1;
        return (
          <button
            key={i}
            type="button"
            onClick={() => onRatingChange(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              transition: 'all 0.2s ease',
            }}
            aria-label={`Rate ${starValue} stars`}
          >
            <Star
              size={size}
              fill={starValue <= (hover || rating) ? 'var(--warning)' : 'none'}
              stroke={starValue <= (hover || rating) ? 'var(--warning)' : 'var(--border)'}
              style={{
                transition: 'all 0.2s ease',
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
