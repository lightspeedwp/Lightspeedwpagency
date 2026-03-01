/**
 * Testimonial Slider Pattern
 *
 * WordPress pattern: Testimonial carousel/slider
 * Auto-rotating testimonials with manual controls
 *
 * Features:
 * - Auto-rotation with pause on hover
 * - Manual navigation (prev/next)
 * - Dot indicators
 * - Smooth transitions
 * - Star ratings
 * - Client photos
 * - Video testimonial support
 * - ScrollReveal animations
 *
 * Design System:
 * - 100% CSS variables
 * - WordPress utility classes
 * - BEM naming (.testimonial-slider)
 * - Dedicated CSS file
 *
 * @see /guidelines/patterns/TestimonialSlider.md
 */

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Play } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export interface TestimonialSlide {
  id: string;
  quote: string;
  author: {
    name: string;
    role: string;
    company: string;
    photo?: string;
  };
  rating: number;
  videoUrl?: string;
  videoThumbnail?: string;
}

export interface TestimonialSliderProps {
  testimonials: TestimonialSlide[];
  autoRotate?: boolean;
  rotateInterval?: number; // milliseconds
  showRatings?: boolean;
  variant?: 'default' | 'glassmorphism';
}

export const TestimonialSlider = ({
  testimonials,
  autoRotate = true,
  rotateInterval = 5000,
  showRatings = true,
  variant = 'glassmorphism',
}: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const currentTestimonial = testimonials[currentIndex];

  // Auto-rotation logic
  useEffect(() => {
    if (!autoRotate || isPaused || prefersReducedMotion || showVideo) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, rotateInterval);

    return () => clearInterval(timer);
  }, [autoRotate, isPaused, rotateInterval, testimonials.length, prefersReducedMotion, showVideo]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setShowVideo(false);
  }, [testimonials.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setShowVideo(false);
  }, [testimonials.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setShowVideo(false);
  }, []);

  const handleVideoPlay = useCallback(() => {
    setShowVideo(true);
    setIsPaused(true);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={`testimonial-slider__star ${
          i < rating ? 'testimonial-slider__star--filled' : ''
        }`}
        fill={i < rating ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <section
      className="testimonial-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="testimonial-slider__container wp-max-w-4xl">
        {/* Main Testimonial */}
        <div
          className={`testimonial-slider__slide testimonial-slider__slide--${variant}`}
        >
          {/* Video Thumbnail (if video testimonial) */}
          {currentTestimonial.videoUrl && !showVideo && (
            <div
              className="testimonial-slider__video-thumbnail"
              onClick={handleVideoPlay}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleVideoPlay();
                }
              }}
              aria-label="Play video testimonial"
            >
              {currentTestimonial.videoThumbnail && (
                <img
                  src={currentTestimonial.videoThumbnail}
                  alt="Video testimonial thumbnail"
                  className="testimonial-slider__video-thumbnail-image"
                />
              )}
              <div className="testimonial-slider__play-button">
                <Play size={48} />
              </div>
            </div>
          )}

          {/* Video Embed (when playing) */}
          {currentTestimonial.videoUrl && showVideo && (
            <div className="testimonial-slider__video-embed">
              <iframe
                src={currentTestimonial.videoUrl}
                title="Video testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="testimonial-slider__video-iframe"
              />
            </div>
          )}

          {/* Quote */}
          <blockquote className="testimonial-slider__quote">
            "{currentTestimonial.quote}"
          </blockquote>

          {/* Rating */}
          {showRatings && (
            <div className="testimonial-slider__rating" aria-label={`Rating: ${currentTestimonial.rating} out of 5 stars`}>
              {renderStars(currentTestimonial.rating)}
            </div>
          )}

          {/* Author */}
          <div className="testimonial-slider__author">
            {currentTestimonial.author.photo && (
              <img
                src={currentTestimonial.author.photo}
                alt={currentTestimonial.author.name}
                className="testimonial-slider__author-photo"
              />
            )}
            <div className="testimonial-slider__author-info">
              <div className="testimonial-slider__author-name">
                {currentTestimonial.author.name}
              </div>
              <div className="testimonial-slider__author-role">
                {currentTestimonial.author.role}, {currentTestimonial.author.company}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="testimonial-slider__controls">
          <button
            onClick={goToPrevious}
            className="testimonial-slider__nav-button testimonial-slider__nav-button--prev"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Dot Indicators */}
          <div className="testimonial-slider__indicators" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`testimonial-slider__indicator ${
                  index === currentIndex ? 'testimonial-slider__indicator--active' : ''
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-selected={index === currentIndex}
                role="tab"
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="testimonial-slider__nav-button testimonial-slider__nav-button--next"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Progress Bar (if auto-rotating) */}
        {autoRotate && !isPaused && !showVideo && !prefersReducedMotion && (
          <div className="testimonial-slider__progress-bar">
            <div
              className="testimonial-slider__progress-fill"
              style={{
                animation: `progress-fill ${rotateInterval}ms linear`,
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
};
