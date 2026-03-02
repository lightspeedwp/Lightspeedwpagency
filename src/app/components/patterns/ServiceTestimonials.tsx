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

import { getTestimonialsForService, getFeaturedTestimonials, type ServiceTestimonial } from '../../data/service-testimonials';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { TestimonialCard, type TestimonialCardData } from './TestimonialCard';
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
 * Maps a ServiceTestimonial to TestimonialCardData
 */
function mapToCardData(t: ServiceTestimonial): TestimonialCardData {
  return {
    quote: t.quote,
    author: t.clientName,
    role: t.role,
    company: t.company,
    avatar: t.photo,
    rating: t.rating,
    companyLogo: t.companyLogo,
    serviceTags: t.serviceTags,
  };
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
            <TestimonialCard
              testimonial={mapToCardData(testimonial)}
              variant="glass"
              showRating={true}
              showAvatar={true}
              showServiceTags={true}
            />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};
