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
  return (
    <div className="w-full">
      {/* Section Header */}
      {heading && (
        <div className="text-center mb-8">
          <h2
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-h3)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground)',
              marginBottom: '8px'
            }}
          >
            {heading}
          </h2>
        </div>
      )}

      {/* Testimonials Grid */}
      <div 
        className={`grid gap-6 ${
          testimonials.length === 2 
            ? 'grid-cols-1 md:grid-cols-2' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border-soft)',
              borderRadius: 'var(--radius-lg)',
              padding: compact ? '20px' : '24px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            {/* Quote Icon */}
            <Quote 
              size={32} 
              style={{ 
                color: 'var(--primary)', 
                opacity: 0.2,
                position: 'absolute',
                top: '16px',
                right: '16px'
              }} 
            />

            {/* Rating */}
            {testimonial.rating && (
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    style={{ 
                      fill: '#fbbf24', 
                      color: '#fbbf24' 
                    }} 
                  />
                ))}
              </div>
            )}

            {/* Quote */}
            <p
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: compact ? 'var(--text-base)' : 'var(--text-lg)',
                lineHeight: '1.6',
                color: 'var(--foreground)',
                flex: 1,
                margin: 0
              }}
            >
              "{testimonial.quote}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3">
              {testimonial.image && (
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-full)',
                    overflow: 'hidden',
                    flexShrink: 0
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              )}
              <div>
                <div
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    marginBottom: '2px'
                  }}
                >
                  {testimonial.author}
                </div>
                <div
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'var(--text-small)',
                    color: 'var(--muted-foreground)'
                  }}
                >
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
