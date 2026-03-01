/**
 * Related Services In Phase Component
 * 
 * Displays related services within the same journey phase.
 * Helps users discover other offerings in the current stage of their website journey.
 * 
 * Features:
 * - Shows services from the same journey phase
 * - Excludes the current service
 * - Icon-driven service cards
 * - Links to service pages
 * - Responsive grid layout
 * 
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - Zero inline styles except CSS variable dynamic values
 * - All styling via @/styles/patterns/related-services-in-phase.css
 * - Fonts: var(--font-primary), var(--font-secondary) only
 * 
 * @example
 * ```tsx
 * <RelatedServicesInPhase 
 *   currentPhase="create" 
 *   currentServicePage="figma-prototyping"
 * />
 * ```
 * 
 * @see /src/app/data/journey-stage-pages.ts
 * @see /src/styles/patterns/related-services-in-phase.css
 */

import '../../../styles/patterns/related-services-in-phase.css';
import { useEffect } from 'react';
import { Link } from 'react-router';
import { slugToPath } from '../../utils/route-map';
import { journeyStages } from '../../data/journey-stage-pages';
import type { JourneyServiceCard } from '../../data/journey-stage-pages';
import { ArrowRight } from 'lucide-react';
import { 
  trackRelatedServiceClick, 
  trackViewAllPhaseServices,
  trackRelatedServicesImpression,
  type JourneyPhase 
} from '../../utils/analytics';

export interface RelatedServicesInPhaseProps {
  /** Current phase slug (e.g. "create") */
  currentPhase: string;
  /** Current service page slug to exclude (e.g. "figma-prototyping") */
  currentServicePage: string;
  /** Optional className for wrapper */
  className?: string;
  /** Optional heading override */
  heading?: string;
}

export function RelatedServicesInPhase({
  currentPhase,
  currentServicePage,
  className = '',
  heading,
}: RelatedServicesInPhaseProps) {
  // Find the current phase data
  const phaseData = journeyStages.find((stage) => stage.slug === currentPhase);

  if (!phaseData) {
    return null;
  }

  // Filter out the current service
  const relatedServices = phaseData.services.filter(
    (service) => service.page !== currentServicePage
  );

  // Don't render if no related services
  if (relatedServices.length === 0) {
    return null;
  }

  const defaultHeading = `Other Services in ${phaseData.name} Phase`;

  // Track impression when component mounts
  useEffect(() => {
    trackRelatedServicesImpression(
      currentPhase as JourneyPhase,
      currentServicePage,
      relatedServices.length
    );
  }, [currentPhase, currentServicePage, relatedServices.length]);

  // Handle service card click
  const handleServiceClick = (clickedServicePage: string) => {
    trackRelatedServiceClick(
      currentPhase as JourneyPhase,
      currentServicePage,
      clickedServicePage
    );
  };

  // Handle "View All" link click
  const handleViewAllClick = () => {
    trackViewAllPhaseServices(
      currentPhase as JourneyPhase,
      currentServicePage
    );
  };

  return (
    <section 
      className={`related-services-in-phase ${className}`.trim()}
      aria-labelledby="related-services-heading"
    >
      <div className="related-services-in-phase__container">
        <div className="related-services-in-phase__header">
          <h2 
            id="related-services-heading"
            className="related-services-in-phase__heading"
          >
            {heading || defaultHeading}
          </h2>
          <p className="related-services-in-phase__subtitle">
            Explore more services in the <strong>{phaseData.name}</strong> phase of your website journey
          </p>
        </div>

        <div className="related-services-in-phase__grid">
          {relatedServices.map((service) => {
            const ServiceIcon = service.icon;

            return (
              <Link
                key={service.page}
                to={slugToPath(service.page)}
                className="related-services-in-phase__card"
                style={{ '--card-accent': phaseData.accent } as React.CSSProperties}
                onClick={() => handleServiceClick(service.page)}
              >
                <div className="related-services-in-phase__icon">
                  <ServiceIcon size={24} aria-hidden="true" />
                </div>

                <div className="related-services-in-phase__content">
                  <h3 className="related-services-in-phase__title">
                    {service.title}
                    {service.badge && (
                      <span className="related-services-in-phase__badge">
                        {service.badge}
                      </span>
                    )}
                  </h3>

                  <p className="related-services-in-phase__description">
                    {service.description}
                  </p>
                </div>

                <div className="related-services-in-phase__arrow" aria-hidden="true">
                  <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Link to phase landing page */}
        <div className="related-services-in-phase__footer">
          <Link
            to={slugToPath(`journey-${currentPhase}`)}
            className="related-services-in-phase__view-all"
            onClick={handleViewAllClick}
          >
            View All {phaseData.name} Services
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
