/**
 * Testimonial Inline Pattern
 * 
 * WordPress Pattern: lsx-design/content/testimonial-inline
 * 
 * A compact testimonial component for inline placement on service/solution pages.
 * Shows 2-3 testimonials in a horizontal layout with quotes and ratings.
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @see /guidelines/patterns/TestimonialInline.md
 */

import { Star, Quote } from 'lucide-react';
import '@/styles/patterns/testimonial-inline.css';

export interface TestimonialInlineProps {
  /** Array of testimonials (2-3 recommended) */
  testimonials: Array<{
    quote: string;
    author: string;
    role: string;
    company: string;
    rating?: number;
    image?: string;
  }>;
  /** Section heading (optional) */
  heading?: string;
  /** Compact mode (smaller cards) */
  compact?: boolean;
}

export function TestimonialInline({
  testimonials,
  heading = "What Our Clients Say",
  compact = false
}: TestimonialInlineProps) {
  const gridCols = testimonials.length === 2 ? 2 : 3;

  return (
    <div className="testimonial-inline">
      {/* Section Header */}
      {heading && (
        <div className="testimonial-inline__header">
          <h2 className="testimonial-inline__title">
            {heading}
          </h2>
        </div>
      )}

      {/* Testimonials Grid */}
      <div 
        className={`testimonial-inline__grid testimonial-inline__grid--${gridCols}-cols`}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-inline__card ${compact ? 'testimonial-inline__card--compact' : 'testimonial-inline__card--default'}`}
          >
            {/* Quote Icon */}
            <Quote 
              size={32} 
              className="testimonial-inline__quote-icon"
            />

            {/* Rating */}
            {testimonial.rating && (
              <div className="testimonial-inline__rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className="testimonial-inline__star"
                  />
                ))}
              </div>
            )}

            {/* Quote */}
            <p className={`testimonial-inline__quote ${compact ? 'testimonial-inline__quote--compact' : 'testimonial-inline__quote--default'}`}>
              "{testimonial.quote}"
            </p>

            {/* Author Info */}
            <div className="testimonial-inline__author-wrapper">
              {testimonial.image && (
                <div className="testimonial-inline__avatar">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="testimonial-inline__avatar-img"
                  />
                </div>
              )}
              <div className="testimonial-inline__author-details">
                <div className="testimonial-inline__author-name">
                  {testimonial.author}
                </div>
                <div className="testimonial-inline__author-role">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
