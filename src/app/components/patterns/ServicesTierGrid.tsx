/**
 * Services Tier Grid Pattern
 *
 * Displays three-tier service model (Foundation, Growth, Enterprise)
 * for homepage with icons, descriptions, and service lists.
 *
 * BEM block: .services-tier-grid
 *
 * @see /src/styles/patterns/services-tier-grid.css
 */

import { Link } from 'react-router';
import type { UniversalIcon } from '../../utils/icon-map';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ArrowRight, CheckCircle } from '@phosphor-icons/react';

interface ServiceTier {
  icon: UniversalIcon;
  title: string;
  description: string;
  services: string[];
  link: string;
  color?: string;
  featured?: boolean;
}

interface ServicesTierGridProps {
  title: string;
  description: string;
  tiers: ServiceTier[];
}

export function ServicesTierGrid({ title, description, tiers }: ServicesTierGridProps) {
  return (
    <section className="services-tier-grid" aria-labelledby="services-heading">
      <ScrollReveal animation="fade-up">
        <div className="services-tier-grid__header">
          <h2 id="services-heading" className="services-tier-grid__title">{title}</h2>
          <p className="services-tier-grid__description">{description}</p>
        </div>
      </ScrollReveal>

      <div className="services-tier-grid__grid">
        {tiers.map((tier, index) => {
          const Icon = tier.icon;
          return (
            <ScrollReveal key={tier.title} animation="fade-up" delay={index * 120}>
              <Link
                to={tier.link}
                className={`services-tier-grid__card${
                  tier.featured ? ' services-tier-grid__card--featured' : ''
                }${tier.color ? ` services-tier-grid__card--${tier.color}` : ''}`}
                aria-label={`Learn more about ${tier.title} services`}
              >
                <div className="services-tier-grid__card-icon">
                  <Icon size={32} weight="duotone" />
                </div>
                
                <h3 className="services-tier-grid__card-title">{tier.title}</h3>
                <p className="services-tier-grid__card-description">{tier.description}</p>
                
                <ul className="services-tier-grid__services-list">
                  {tier.services.map((service) => (
                    <li key={service} className="services-tier-grid__service-item">
                      <CheckCircle size={14} weight="fill" />
                      {service}
                    </li>
                  ))}
                </ul>
                
                <span className="services-tier-grid__card-link">
                  Explore services
                  <ArrowRight size={16} weight="bold" />
                </span>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
