/**
 * Featured Testimonial Pattern
 *
 * WordPress pattern: Large, prominent testimonial display
 * For use in hero sections or as page highlights
 *
 * Features:
 * - Large quote display
 * - Client photo with company logo
 * - Star rating
 * - Background gradient orb
 * - Glassmorphism card
 * - ScrollReveal animation
 *
 * Design System:
 * - 100% CSS variables
 * - WordPress utility classes
 * - BEM naming (.featured-testimonial)
 * - Dedicated CSS file
 *
 * @see /guidelines/patterns/FeaturedTestimonial.md
 */

import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Star, Quotes } from '@phosphor-icons/react';

export interface FeaturedTestimonialProps {
  quote: string;
  author: {
    name: string;
    role: string;
    company: string;
    photo?: string;
    companyLogo?: string;
  };
  rating?: number;
  variant?: 'default' | 'glassmorphism' | 'gradient';
  showQuoteIcon?: boolean;
}

export const FeaturedTestimonial = ({
  quote,
  author,
  rating,
  variant = 'glassmorphism',
  showQuoteIcon = true,
}: FeaturedTestimonialProps) => {
  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={24}
        className={`featured-testimonial__star ${
          i < count ? 'featured-testimonial__star--filled' : ''
        }`}
        fill={i < count ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <section className="featured-testimonial">
      <div className="featured-testimonial__container wp-max-w-5xl">
        <ScrollReveal animation="fade-up" duration={600}>
          <div
            className={`featured-testimonial__card featured-testimonial__card--${variant}`}
          >
            {/* Background Gradient Orb */}
            <div
              className="featured-testimonial__gradient-orb"
              aria-hidden="true"
            />

            {/* Quote Icon */}
            {showQuoteIcon && (
              <div className="testimonial-base__quote-icon featured-testimonial__quote-icon" aria-hidden="true">
                <Quotes size={48} />
              </div>
            )}

            {/* Rating (if provided) */}
            {rating && (
              <div
                className="testimonial-base__rating featured-testimonial__rating"
                aria-label={`Rating: ${rating} out of 5 stars`}
              >
                {renderStars(rating)}
              </div>
            )}

            {/* Quote */}
            <blockquote className="testimonial-base__quote featured-testimonial__quote">
              "{quote}"
            </blockquote>

            {/* Author Section */}
            <div className="testimonial-base__author featured-testimonial__author">
              {/* Author Photo */}
              {author.photo && (
                <img
                  src={author.photo}
                  alt={author.name}
                  className="testimonial-base__avatar featured-testimonial__author-photo"
                />
              )}

              <div className="testimonial-base__author-details featured-testimonial__author-info">
                {/* Name */}
                <div className="testimonial-base__author-name featured-testimonial__author-name">
                  {author.name}
                </div>

                {/* Role & Company */}
                <div className="testimonial-base__author-role featured-testimonial__author-role">
                  {author.role} at {author.company}
                </div>
              </div>

              {/* Company Logo */}
              {author.companyLogo && (
                <img
                  src={author.companyLogo}
                  alt={`${author.company} logo`}
                  className="testimonial-base__company-logo featured-testimonial__company-logo"
                />
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};