/**
 * Testimonial Grid Pattern
 * 
 * WordPress pattern: lsx-design/content/testimonial-grid
 * 
 * Displays customer testimonials, reviews, and quotes in a responsive grid.
 * 
 * @see {@link /guidelines/patterns/TestimonialGrid.md}
 */

import { Star } from 'lucide-react';
import '@/styles/patterns/testimonial-grid.css';

export interface Testimonial {
  /** Testimonial quote/text */
  quote: string;
  /** Author name */
  author: string;
  /** Author role/title */
  role?: string;
  /** Author company */
  company?: string;
  /** Author avatar image URL */
  avatar?: string;
  /** Rating (1-5 stars) */
  rating?: number;
  /** Date of testimonial */
  date?: string;
  /** Optional logo of author's company */
  companyLogo?: string;
}

export interface TestimonialGridProps {
  /** Array of testimonials */
  testimonials: Testimonial[];
  /** Number of columns (1-3, default: 3) */
  columns?: 1 | 2 | 3;
  /** Visual variant */
  variant?: 'default' | 'cards' | 'minimal' | 'featured';
  /** Show ratings */
  showRating?: boolean;
  /** Show avatars */
  showAvatar?: boolean;
  /** Show company logos */
  showCompanyLogo?: boolean;
  /** Max width constraint */
  maxWidth?: '4xl' | '5xl' | '6xl' | 'none';
  /** Custom gap between testimonials */
  gap?: string;
}

export function TestimonialGrid({
  testimonials,
  columns = 3,
  variant = 'cards',
  showRating = true,
  showAvatar = true,
  showCompanyLogo = false,
  maxWidth = '6xl',
  gap = 'var(--spacing-8)'
}: TestimonialGridProps) {
  // Build grid classes
  const gridClasses = [
    'testimonial-grid',
    `testimonial-grid--${columns}-col`
  ].filter(Boolean).join(' ');

  // Max width class
  const maxWidthClass = maxWidth !== 'none' ? `wp-max-w-${maxWidth}` : '';

  // Render stars for rating
  const renderStars = (rating: number) => {
    return (
      <div className="testimonial-card__rating">
        {[...Array(5)].map((_, i) => {
          const starClasses = [
            'testimonial-card__star',
            i < rating ? 'testimonial-card__star--filled' : 'testimonial-card__star--empty'
          ].filter(Boolean).join(' ');

          return (
            <Star
              key={i}
              size={16}
              className={starClasses}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className={maxWidthClass}>
      <div
        className={gridClasses}
        style={{ gap }}
      >
        {testimonials.map((testimonial, index) => {
          // Build card classes
          const cardClasses = [
            'testimonial-card',
            `testimonial-card--${variant}`
          ].filter(Boolean).join(' ');

          return (
            <div
              key={index}
              className={cardClasses}
            >
              {/* Rating */}
              {showRating && testimonial.rating && renderStars(testimonial.rating)}

              {/* Quote */}
              <blockquote className="testimonial-card__quote">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="testimonial-card__author">
                {/* Avatar */}
                {showAvatar && testimonial.avatar && (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="testimonial-card__avatar"
                  />
                )}

                {/* Author Details */}
                <div className="testimonial-card__author-details">
                  <div className="testimonial-card__author-name">
                    {testimonial.author}
                  </div>

                  {(testimonial.role || testimonial.company) && (
                    <div className="testimonial-card__author-role">
                      {testimonial.role}
                      {testimonial.role && testimonial.company && ' at '}
                      {testimonial.company}
                    </div>
                  )}

                  {testimonial.date && (
                    <div className="testimonial-card__author-date">
                      {testimonial.date}
                    </div>
                  )}
                </div>

                {/* Company Logo */}
                {showCompanyLogo && testimonial.companyLogo && (
                  <img
                    src={testimonial.companyLogo}
                    alt={`${testimonial.company} logo`}
                    className="testimonial-card__company-logo"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
