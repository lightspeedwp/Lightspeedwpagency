/**
 * Related Services Grid Pattern
 *
 * Cross-links to related services with funky glassmorphism cards,
 * animated gradient stripes, neon icon wrappers, and hover glow.
 *
 * WordPress block mapping: wp:group + wp:columns
 *
 * @see /src/styles/patterns/related-services-grid.css
 */

import { Link } from 'react-router';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { slugToPath } from '../../utils/route-map';

interface RelatedService {
  title: string;
  description: string;
  page: string;
}

interface RelatedServicesGridProps {
  /** Section title */
  title?: string;
  /** Section subtitle */
  subtitle?: string;
  /** Related services data */
  services: RelatedService[];
}

export function RelatedServicesGrid({
  title = 'Related Services',
  subtitle = 'Complementary services that enhance your results',
  services,
}: RelatedServicesGridProps) {
  if (!services || services.length === 0) return null;

  return (
    <section className="related-services-grid">
      <Container>
        <ScrollReveal animation="fade-up">
          <div className="related-services-grid__header">
            <h2 className="related-services-grid__title">{title}</h2>
            <p className="related-services-grid__subtitle">{subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="related-services-grid__cards">
          {services.map((service, index) => (
            <ScrollReveal key={service.page} animation="fade-up" delay={index * 100}>
              <Link
                to={slugToPath(service.page) || `/services/${service.page}`}
                className="related-services-grid__card"
                aria-label={`Learn more about ${service.title}`}
              >
                <div className="related-services-grid__card-icon">
                  <Sparkles size={20} strokeWidth={1.5} />
                </div>
                <h3 className="related-services-grid__card-title">
                  {service.title}
                </h3>
                <p className="related-services-grid__card-desc">
                  {service.description}
                </p>
                <span className="related-services-grid__card-link">
                  Learn More
                  <ArrowRight size={16} />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
