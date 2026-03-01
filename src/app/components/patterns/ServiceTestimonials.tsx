/**
 * ServiceTestimonials Component
 * 
 * Displays client testimonials specific to a service offering.
 * Shows real client feedback with ratings, quotes, and attribution.
 * 
 * WordPress Equivalent: Custom Query Loop with testimonial post type
 * 
 * @component
 * @example
 * ```tsx
 * <ServiceTestimonials
 *   serviceSlug="design"
 *   title="What Our Clients Say"
 *   limit={3}
 * />
 * ```
 */

import { Star } from 'lucide-react';
import { getTestimonialsForService, getFeaturedTestimonials, type ServiceTestimonial } from '../../data/service-testimonials';
import { ScrollReveal } from '../../hooks/useScrollReveal';
// CSS imported centrally via /src/styles/index.css

export interface ServiceTestimonialsProps {
  /** Service slug to fetch testimonials for */
  serviceSlug: string;
  
  /** Section title */
  title?: string;
  
  /** Section description */
  description?: string;
  
  /** Maximum number of testimonials to display */
  limit?: number;
  
  /** Show only featured (5-star) testimonials */
  featuredOnly?: boolean;
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * ServiceTestimonials Component
 * 
 * Displays client testimonials specific to a service.
 */
export const ServiceTestimonials = ({ 
  serviceSlug, 
  title = "What Our Clients Say",
  description = "Real feedback from real clients who've experienced our services.",
  limit = 3,
  featuredOnly = false,
  className = ''
}: ServiceTestimonialsProps) => {
  // Get testimonials
  const testimonials = featuredOnly 
    ? getFeaturedTestimonials(serviceSlug) 
    : getTestimonialsForService(serviceSlug);
  
  // Limit results
  const displayTestimonials = limit 
    ? testimonials.slice(0, limit) 
    : testimonials;
  
  // Don't render if no testimonials
  if (displayTestimonials.length === 0) {
    return null;
  }
  
  return (
    <div className={`service-testimonials ${className}`}>
      {/* Header */}
      <div className="service-testimonials__header">
        <h2 style={{ 
          fontFamily: 'var(--font-primary)',
          fontSize: 'var(--text-h2)',
          color: 'var(--foreground)'
        }}>
          {title}
        </h2>
        {description && (
          <p style={{ 
            fontFamily: 'var(--font-secondary)',
            fontSize: 'var(--text-base)',
            color: 'var(--muted-foreground)'
          }}>
            {description}
          </p>
        )}
      </div>
      
      {/* Testimonials Grid */}
      <div className="service-testimonials__grid">
        {displayTestimonials.map((testimonial) => (
          <ScrollReveal key={testimonial.id} animation="fade-up">
            <TestimonialCard testimonial={testimonial} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

/**
 * TestimonialCard Sub-Component
 * 
 * Individual testimonial card with quote, rating, and client info.
 */
const TestimonialCard = ({ testimonial }: { testimonial: ServiceTestimonial }) => {
  return (
    <div className="service-testimonials__card">
      {/* Quote */}
      <blockquote className="service-testimonials__quote" style={{
        fontFamily: 'var(--font-primary)',
        fontSize: 'var(--text-base)',
        color: 'var(--foreground)'
      }}>
        "{testimonial.quote}"
      </blockquote>
      
      {/* Rating (if exists) */}
      {testimonial.rating && (
        <div className="service-testimonials__rating" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={i < testimonial.rating! ? 'filled' : 'empty'}
              size={16}
              fill={i < testimonial.rating! ? 'currentColor' : 'none'}
            />
          ))}
        </div>
      )}
      
      {/* Client Info */}
      <div className="service-testimonials__client">
        {testimonial.photo && (
          <img 
            src={testimonial.photo} 
            alt={testimonial.clientName}
            className="service-testimonials__photo"
            width={48}
            height={48}
          />
        )}
        <div className="service-testimonials__details">
          <p className="service-testimonials__name" style={{
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--text-base)',
            color: 'var(--foreground)'
          }}>
            {testimonial.clientName}
          </p>
          <p className="service-testimonials__role" style={{
            fontFamily: 'var(--font-secondary)',
            fontSize: 'var(--text-sm)',
            color: 'var(--muted-foreground)'
          }}>
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
      
      {/* Service Tags */}
      {testimonial.serviceTags && testimonial.serviceTags.length > 0 && (
        <div className="service-testimonials__tags">
          {testimonial.serviceTags.map(tag => (
            <span 
              key={tag} 
              className="service-testimonials__tag"
              style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-xs)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {/* Project Details (if exists) */}
      {testimonial.project && (
        <div className="service-testimonials__project" style={{
          fontFamily: 'var(--font-secondary)',
          fontSize: 'var(--text-sm)',
          color: 'var(--muted-foreground)'
        }}>
          <strong style={{ color: 'var(--foreground)' }}>
            {testimonial.project.name}
          </strong>
          {testimonial.project.description && (
            <span> — {testimonial.project.description}</span>
          )}
        </div>
      )}
    </div>
  );
};
