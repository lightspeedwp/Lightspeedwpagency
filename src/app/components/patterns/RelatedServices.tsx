/**
 * Related Services Pattern
 * 
 * Shows services related to the current service.
 * Used on service detail pages for cross-linking.
 * 
 * WordPress equivalent: Custom query block showing related services
 * 
 * Design: Compact cards with icon + title + description
 * 
 * CRITICAL: 100% Design System Compliance
 * - Fonts: var(--font-primary), var(--font-secondary) ONLY
 * - Colors: var(--primary), var(--foreground), var(--background), etc.
 * - Spacing: var(--spacing-*)
 * - Borders: var(--radius-*)
 * - NO hardcoded values
 * 
 * @see /src/styles/patterns/related-services.css
 * @see /src/app/data/related-services-map.ts
 * 
 * @example
 * <RelatedServices serviceSlug="design" />
 * <RelatedServices serviceSlug="development" title="Complementary Services" />
 */

import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { getRelatedServices, type ServiceReference } from '../../data/related-services-map';
import { ScrollReveal } from '../../hooks/useScrollReveal';
// CSS imported centrally via /src/styles/index.css

export interface RelatedServicesProps {
  /** Service slug to look up related services for */
  serviceSlug: string;
  
  /** Section title */
  title?: string;
  
  /** Section description */
  description?: string;
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * Related Services Pattern Component
 * 
 * Displays services related to the current service
 */
export function RelatedServices({
  serviceSlug,
  title = 'Related Services',
  description = 'These services work great together with this offering.',
  className = '',
}: RelatedServicesProps) {
  // Get related services
  const relatedServices = getRelatedServices(serviceSlug);
  
  // Don't render if no related services
  if (relatedServices.length === 0) {
    return null;
  }
  
  return (
    <div className={`related-services ${className}`}>
      {/* Header */}
      <ScrollReveal animation="fade-up" duration={600}>
        <div className="related-services__header">
          <h2 className="related-services__title">{title}</h2>
          {description && (
            <p className="related-services__description">{description}</p>
          )}
        </div>
      </ScrollReveal>
      
      {/* Services Grid */}
      <div className="related-services__grid">
        {relatedServices.map((service, index) => (
          <ScrollReveal
            key={service.id}
            animation="fade-up"
            delay={100 + (index * 50)}
            duration={600}
          >
            <ServiceCard service={service} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

/**
 * Service Card Sub-component
 * 
 * Individual service card with icon and CTA
 */
interface ServiceCardProps {
  service: ServiceReference;
}

function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  
  return (
    <Link
      to={`/services/${service.slug}`}
      className="related-services__card"
      aria-label={`View ${service.title}`}
    >
      {/* Icon */}
      <div className="related-services__card-icon-wrapper">
        <Icon size={20} className="related-services__card-icon" aria-hidden="true" />
      </div>
      
      {/* Content */}
      <div className="related-services__card-content">
        <h3 className="related-services__card-title">{service.title}</h3>
        <p className="related-services__card-description">{service.description}</p>
        
        {/* CTA */}
        <div className="related-services__card-cta">
          <span>Learn More</span>
          <ArrowRight size={12} className="related-services__card-cta-icon" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}
