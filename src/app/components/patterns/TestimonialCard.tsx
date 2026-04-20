/**
 * TestimonialCard Pattern Component
 *
 * Reusable testimonial card used by TestimonialGrid, ServiceTestimonials,
 * TestimonialInline, and ServiceTestimonial patterns.
 *
 * Variants:
 *   - default: Standard card with border
 *   - glass: Glassmorphism with backdrop blur
 *   - funky: Neon gradient border (dark mode glow)
 *   - featured: Primary background
 *
 * Design System Compliance:
 *   - 100% CSS variables (fonts, colors, spacing, radius)
 *   - BEM naming: .testimonial-card__*
 *   - Dark mode neon effects
 *   - prefers-reduced-motion guards
 *   - WCAG 2.1 AA accessible
 *
 * @see /src/styles/patterns/testimonial-card.css
 * @see /guidelines/patterns/TestimonialCard.md
 */

import { Star, Quotes } from '@phosphor-icons/react';

/* ── Props ── */

export interface TestimonialCardData {
  /** Testimonial quote text */
  quote: string;
  /** Author name */
  author: string;
  /** Author role/title */
  role?: string;
  /** Author company */
  company?: string;
  /** Author avatar image URL */
  avatar?: string;
  /** Star rating (1-5) */
  rating?: number;
  /** Date string */
  date?: string;
  /** Company logo URL */
  companyLogo?: string;
  /** Service name badge */
  service?: string;
  /** Service tags */
  serviceTags?: string[];
}

export interface TestimonialCardProps {
  /** Testimonial data */
  testimonial: TestimonialCardData;
  /** Visual variant */
  variant?: 'default' | 'glass' | 'funky' | 'featured';
  /** Show star rating */
  showRating?: boolean;
  /** Show author avatar */
  showAvatar?: boolean;
  /** Show quote icon */
  showQuoteIcon?: boolean;
  /** Show company logo */
  showCompanyLogo?: boolean;
  /** Show service badge */
  showServiceBadge?: boolean;
  /** Show service tags */
  showServiceTags?: boolean;
  /** Additional CSS class */
  className?: string;
}

/**
 * Returns initials (first letter of first + last name) for avatar fallback.
 */
function getInitials(name: string): string {
  if (!name || typeof name !== 'string') return '';
  return name
    .split(' ')
    .filter(n => n.length > 0)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

/**
 * TestimonialCard Component
 *
 * A single testimonial card with quote, rating, author info, and optional
 * service badge. Supports 6 visual variants.
 */
export function TestimonialCard({
  testimonial,
  variant = 'default',
  showRating = true,
  showAvatar = true,
  showQuoteIcon = false,
  showCompanyLogo = false,
  showServiceBadge = false,
  showServiceTags = false,
  className = '',
}: TestimonialCardProps) {
  if (!testimonial) return null;

  const cardClasses = [
    'testimonial-card',
    `testimonial-card--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article
      className={cardClasses}
      aria-label={`Testimonial from ${testimonial.author}`}
    >
      {/* Quote Icon */}
      {showQuoteIcon && (
        <div className="testimonial-base__quote-icon testimonial-card__quote-icon" aria-hidden="true">
          <Quotes size={20} strokeWidth={2} />
        </div>
      )}

      {/* Rating */}
      {showRating && testimonial.rating && (
        <div
          className="testimonial-base__rating testimonial-card__rating"
          role="img"
          aria-label={`${testimonial.rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`testimonial-base__star ${
                i < testimonial.rating!
                  ? 'testimonial-card__star--filled'
                  : 'testimonial-base__star--empty'
              }`}
              fill={i < testimonial.rating! ? 'currentColor' : 'none'}
            />
          ))}
        </div>
      )}

      {/* Quote */}
      <blockquote className="testimonial-base__quote testimonial-card__quote">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Service Badge */}
      {showServiceBadge && testimonial.service && (
        <span className="testimonial-card__service-badge">
          {testimonial.service}
        </span>
      )}

      {/* Service Tags */}
      {showServiceTags &&
        testimonial.serviceTags &&
        testimonial.serviceTags.length > 0 && (
          <div className="testimonial-card__tags">
            {testimonial.serviceTags.map((tag) => (
              <span key={tag} className="testimonial-card__tag">
                {tag}
              </span>
            ))}
          </div>
        )}

      {/* Author */}
      <div className="testimonial-base__author testimonial-card__author">
        {/* Avatar */}
        {showAvatar && (
          <>
            {testimonial.avatar ? (
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="testimonial-base__avatar testimonial-card__avatar"
                width={48}
                height={48}
              />
            ) : (
              <div className="testimonial-base__avatar-initials testimonial-card__avatar-initials">
                {getInitials(testimonial.author)}
              </div>
            )}
          </>
        )}

        {/* Author Details */}
        <div className="testimonial-base__author-details testimonial-card__author-details">
          <div className="testimonial-base__author-name testimonial-card__author-name">
            {testimonial.author}
          </div>
          {(testimonial.role || testimonial.company) && (
            <div className="testimonial-base__author-role testimonial-card__author-role">
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
            className="testimonial-base__company-logo testimonial-card__company-logo"
          />
        )}
      </div>
    </article>
  );
}