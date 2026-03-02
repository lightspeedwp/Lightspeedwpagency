/**
 * Testimonial Inline Pattern
 * 
 * WordPress Pattern: lsx-design/content/testimonial-inline
 * 
 * A compact testimonial component for inline placement on service/solution pages.
 * Shows 2-3 testimonials in a horizontal layout with quotes and ratings.
 * 
 * Uses the shared TestimonialCard component for card rendering.
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Fonts: var(--font-primary), var(--font-secondary)
 * 
 * @see /src/styles/patterns/testimonial-inline.css
 * @see /src/app/components/patterns/TestimonialCard.tsx
 */

import { TestimonialCard, type TestimonialCardData } from './TestimonialCard';


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
        {testimonials.map((testimonial, index) => {
          const cardData: TestimonialCardData = {
            quote: testimonial.quote,
            author: testimonial.author,
            role: testimonial.role,
            company: testimonial.company,
            rating: testimonial.rating,
            avatar: testimonial.image,
          };

          return (
            <TestimonialCard
              key={index}
              testimonial={cardData}
              variant={compact ? 'compact' : 'default'}
              showRating={true}
              showAvatar={!!testimonial.image}
              showQuoteIcon={true}
            />
          );
        })}
      </div>
    </div>
  );
}
