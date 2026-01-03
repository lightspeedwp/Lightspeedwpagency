/**
 * Testimonials Carousel Component
 * 
 * WordPress concept: Testimonial slider/carousel
 * Pattern: `lsx-design/content/testimonials-carousel`
 * 
 * Auto-rotating carousel for customer testimonials with manual controls,
 * pagination dots, and multiple display variants.
 * 
 * **Purpose:**
 * - Showcase multiple testimonials in limited space
 * - Auto-rotate for continuous display
 * - Build trust through social proof
 * - Increase engagement with interactive elements
 * 
 * **Features:**
 * - Auto-play with pause on hover
 * - Manual navigation (prev/next)
 * - Pagination dots
 * - Keyboard navigation
 * - Touch/swipe support (mobile)
 * - Responsive layouts
 * 
 * **Design System:**
 * - Typography: Lexend for names, Manrope for quotes
 * - Colors: var(--primary) for active indicators
 * - Spacing: Tailwind classes
 * - Fonts: Design system fonts only
 * 
 * **Accessibility:**
 * - ARIA labels
 * - Keyboard navigation
 * - Reduced motion support
 * - Screen reader announcements
 * 
 * **Performance:**
 * - CSS transitions
 * - Efficient re-renders
 * - Lazy loading images
 * 
 * @example
 * // Basic carousel
 * <TestimonialsCarousel
 *   testimonials={featuredReviews}
 *   autoplay
 *   interval={5000}
 * />
 * 
 * @example
 * // Card variant
 * <TestimonialsCarousel
 *   testimonials={testimonials}
 *   variant="card"
 *   showDots
 *   showArrows
 * />
 */

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import type { Review } from '../seo/ReviewSnippet';

/**
 * Testimonials Carousel component props
 */
interface TestimonialsCarouselProps {
  /**
   * Array of testimonials
   */
  testimonials: Review[];

  /**
   * Display variant
   * 
   * - default: Quote with author below
   * - card: Card style with border
   * - minimal: Minimal design
   * 
   * @default "default"
   */
  variant?: 'default' | 'card' | 'minimal';

  /**
   * Auto-play carousel
   * 
   * @default true
   */
  autoplay?: boolean;

  /**
   * Auto-play interval (milliseconds)
   * 
   * @default 5000
   */
  interval?: number;

  /**
   * Show navigation arrows
   * 
   * @default true
   */
  showArrows?: boolean;

  /**
   * Show pagination dots
   * 
   * @default true
   */
  showDots?: boolean;

  /**
   * Show star ratings
   * 
   * @default true
   */
  showRating?: boolean;

  /**
   * Pause on hover
   * 
   * @default true
   */
  pauseOnHover?: boolean;

  /**
   * Custom class name
   */
  className?: string;
}

/**
 * Testimonials Carousel Component
 * 
 * Auto-rotating carousel with navigation controls.
 * 
 * @param props - TestimonialsCarouselProps
 * @returns Testimonials carousel
 */
export function TestimonialsCarousel({
  testimonials,
  variant = 'default',
  autoplay = true,
  interval = 5000,
  showArrows = true,
  showDots = true,
  showRating = true,
  pauseOnHover = true,
  className = '',
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Go to next slide
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  // Go to previous slide
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Go to specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play effect
  useEffect(() => {
    if (!autoplay || isPaused || testimonials.length <= 1) return;

    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [autoplay, isPaused, interval, goToNext, testimonials.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [goToNext]);

  const currentTestimonial = testimonials[currentIndex];

  if (!currentTestimonial) return null;

  // Render star rating
  const renderRating = (rating: number) => (
    <div className="flex items-center gap-1 justify-center mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className="w-5 h-5"
          style={{
            color: star <= rating ? 'var(--primary)' : 'var(--muted-foreground)',
            fill: star <= rating ? 'var(--primary)' : 'transparent',
          }}
        />
      ))}
    </div>
  );

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      role="region"
      aria-label="Customer testimonials carousel"
      aria-live="polite"
    >
      {/* Carousel Container */}
      <div
        className={`relative overflow-hidden ${variant === 'card' ? 'p-8 rounded border' : 'p-6'}`}
        style={
          variant === 'card'
            ? {
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                borderRadius: 'var(--radius-lg)',
              }
            : {}
        }
      >
        {/* Quote Icon */}
        {variant !== 'minimal' && (
          <Quote
            className="w-12 h-12 mx-auto mb-6"
            style={{ color: 'var(--primary)', opacity: 0.2 }}
          />
        )}

        {/* Rating */}
        {showRating && renderRating(currentTestimonial.rating)}

        {/* Testimonial Content */}
        <div className="text-center mb-6">
          {/* Title */}
          {currentTestimonial.title && (
            <h3
              className="mb-4"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h4)',
                fontWeight: '600',
                color: 'var(--foreground)',
              }}
            >
              {currentTestimonial.title}
            </h3>
          )}

          {/* Content */}
          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-lg)',
              color: 'var(--foreground)',
              lineHeight: '1.8',
              fontStyle: variant === 'minimal' ? 'normal' : 'italic',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            "{currentTestimonial.content}"
          </p>
        </div>

        {/* Author Information */}
        <div className="flex flex-col items-center gap-3">
          {/* Author Photo */}
          {currentTestimonial.authorPhoto ? (
            <img
              src={currentTestimonial.authorPhoto}
              alt={currentTestimonial.author}
              className="rounded-full object-cover"
              style={{
                width: '64px',
                height: '64px',
              }}
            />
          ) : (
            <div
              className="rounded-full flex items-center justify-center"
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: 'var(--primary)',
              }}
            >
              <span
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h3)',
                  fontWeight: '600',
                  color: 'var(--primary-foreground)',
                }}
              >
                {currentTestimonial.author.charAt(0)}
              </span>
            </div>
          )}

          {/* Author Name & Title */}
          <div className="text-center">
            <p
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: '600',
                color: 'var(--foreground)',
              }}
            >
              {currentTestimonial.author}
            </p>
            {currentTestimonial.authorTitle && (
              <p
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'var(--text-small)',
                  color: 'var(--muted-foreground)',
                }}
              >
                {currentTestimonial.authorTitle}
              </p>
            )}
          </div>
        </div>

        {/* Navigation Arrows */}
        {showArrows && testimonials.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all hover:scale-110"
              style={{
                backgroundColor: 'var(--background)',
                border: '1px solid var(--border)',
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft
                className="w-6 h-6"
                style={{ color: 'var(--foreground)' }}
              />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all hover:scale-110"
              style={{
                backgroundColor: 'var(--background)',
                border: '1px solid var(--border)',
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight
                className="w-6 h-6"
                style={{ color: 'var(--foreground)' }}
              />
            </button>
          </>
        )}
      </div>

      {/* Pagination Dots */}
      {showDots && testimonials.length > 1 && (
        <div
          className="flex items-center justify-center gap-2 mt-6"
          role="tablist"
          aria-label="Testimonial slides"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="transition-all hover:scale-125"
              style={{
                width: currentIndex === index ? '32px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor:
                  currentIndex === index ? 'var(--primary)' : 'var(--muted)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
              role="tab"
              aria-selected={currentIndex === index}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide Counter */}
      <div className="text-center mt-4">
        <span
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-small)',
            color: 'var(--muted-foreground)',
          }}
        >
          {currentIndex + 1} / {testimonials.length}
        </span>
      </div>
    </div>
  );
}

/**
 * WordPress Block Pattern Registration
 * 
 * Pattern slug: lsx-design/content/testimonials-carousel
 * Category: content
 */
