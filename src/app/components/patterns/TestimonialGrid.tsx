/**
 * Testimonial Grid Pattern
 * 
 * WordPress Pattern: lsx-design/content/testimonial-grid
 * 
 * A grid of client testimonials with photos, quotes, and attribution.
 * Maps to WordPress Group block with nested Quote blocks.
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @see /guidelines/patterns/TestimonialGrid.md
 */

import { Quote } from 'lucide-react';
import { useStaggerReveal } from '../../hooks/useScrollReveal';

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating?: number;
}

export interface TestimonialGridProps {
  /** Section heading */
  heading?: string;
  /** Section description */
  description?: string;
  /** Array of testimonials */
  testimonials: Testimonial[];
  /** Grid columns (default: 3) */
  columns?: {
    mobile?: 1 | 2;
    tablet?: 2 | 3;
    desktop?: 2 | 3 | 4;
  };
  /** Show ratings (default: true) */
  showRatings?: boolean;
  /** Show avatars (default: true) */
  showAvatars?: boolean;
}

export function TestimonialGrid({
  heading = "What Our Clients Say",
  description,
  testimonials,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  showRatings = true,
  showAvatars = true,
}: TestimonialGridProps) {
  // Grid column classes
  const gridCols = `grid-cols-${columns.mobile || 1} md:grid-cols-${columns.tablet || 2} lg:grid-cols-${columns.desktop || 3}`;

  // Scroll reveal with stagger for testimonial cards
  const { containerRef, itemStyle } = useStaggerReveal({
    stagger: 70,        // 70ms delay between cards (medium stagger)
    animation: 'fade-up', // Fade and slide up
    duration: 550,      // 550ms animation duration
    threshold: 0.1      // Trigger when 10% visible
  });

  return (
    <div className="w-full">
      {/* Section Header */}
      {(heading || description) && (
        <div className="text-center mb-12">
          {heading && (
            <h2
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--foreground)',
                marginBottom: description ? '16px' : '0',
              }}
            >
              {heading}
            </h2>
          )}
          {description && (
            <p
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-lg)',
                color: 'var(--muted-foreground)',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              {description}
            </p>
          )}
        </div>
      )}

      {/* Testimonials Grid */}
      <div className={`grid ${gridCols} gap-8`} ref={containerRef}>
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="relative"
            style={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border-soft)',
              borderRadius: 'var(--radius-lg)',
              padding: '32px',
              transition: 'all var(--transition-base)',
              ...itemStyle(index),
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--primary)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 24px -8px var(--shadow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-soft)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Quote Icon */}
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
              }}
            >
              <Quote size={24} style={{ color: 'var(--primary-foreground)' }} />
            </div>

            {/* Rating Stars */}
            {showRatings && testimonial.rating && (
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill={index < testimonial.rating! ? 'var(--warning)' : 'var(--muted)'}
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M8 0l2.163 5.455L16 6.91l-4.5 4.095L12.326 16 8 13.455 3.674 16 4.5 11.005 0 6.91l5.837-1.455z" />
                  </svg>
                ))}
              </div>
            )}

            {/* Quote */}
            <blockquote
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-base)',
                lineHeight: '1.7',
                color: 'var(--foreground)',
                marginBottom: '24px',
                fontStyle: 'italic',
              }}
            >
              "{testimonial.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              {showAvatars && testimonial.avatar && (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--border)',
                  }}
                />
              )}
              {!testimonial.avatar && showAvatars && (
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-lg)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
              )}
              <div>
                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    marginBottom: '4px',
                  }}
                >
                  {testimonial.author}
                </p>
                <p
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'var(--text-small)',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}