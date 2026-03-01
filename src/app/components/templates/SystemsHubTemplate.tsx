/**
 * Systems Hub Template
 *
 * Landing page for LSX Design's 5-pillar systems framework.
 * Showcases Design Tokens, Pattern Governance, Editorial Workflows,
 * AI Search Readiness, and Performance Reliability systems.
 *
 * Route: /systems
 *
 * Design System Compliance:
 * - Typography: ONLY var(--font-primary) and var(--font-secondary)
 * - Colors: ONLY semantic variables (var(--primary), var(--accent), etc.)
 * - Spacing: ONLY var(--spacing-*) tokens
 * - Font sizes: ONLY var(--text-*) tokens
 * - BEM naming: .systems-hub__*
 *
 * @see /src/app/data/systems-hub.ts
 * @see /src/styles/templates/systems-hub-template.css
 */

import { Link } from 'react-router';
import * as Icons from 'lucide-react';
import {
  systemPillars,
  systemsHubHero,
  systemsOverview,
  tierIntegration,
} from '../../data/systems-hub';
import { serviceTiers } from '../../data/three-tier-model';
import { slugToPath } from '../../utils/route-map';
import '@/styles/templates/systems-hub-template.css';

export const SystemsHubTemplate = () => {
  return (
    <div className="systems-hub">
      {/* Hero Section */}
      <section className="systems-hub__hero">
        <div className="systems-hub__hero-content">
          {/* Badge */}
          <div className="systems-hub__hero-badge">{systemsHubHero.badge}</div>

          {/* Title */}
          <h1 className="systems-hub__hero-title">
            <span className="systems-hub__hero-title-line1">
              {systemsHubHero.title.line1}
            </span>
            <span className="systems-hub__hero-title-line2">
              {systemsHubHero.title.line2}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="systems-hub__hero-subtitle">{systemsHubHero.subtitle}</p>

          {/* CTA Buttons */}
          <div className="systems-hub__hero-cta">
            <Link
              to={slugToPath(systemsHubHero.cta.primary.page)}
              className="systems-hub__hero-cta-primary"
            >
              {systemsHubHero.cta.primary.text}
            </Link>
            <Link
              to={slugToPath(systemsHubHero.cta.secondary.page)}
              className="systems-hub__hero-cta-secondary"
            >
              {systemsHubHero.cta.secondary.text}
            </Link>
          </div>
        </div>
      </section>

      {/* Systems Overview Section */}
      <section className="systems-hub__overview">
        <div className="systems-hub__overview-header">
          <h2 className="systems-hub__overview-heading">{systemsOverview.heading}</h2>
          <p className="systems-hub__overview-description">
            {systemsOverview.description}
          </p>
        </div>

        {/* Systems Grid */}
        <div className="systems-hub__systems-grid">
          {systemPillars.map(system => {
            const IconComponent = Icons[system.icon as keyof typeof Icons] as React.FC<{
              className?: string;
            }>;

            return (
              <Link
                key={system.id}
                to={system.route}
                className="systems-hub__system-card"
              >
                {/* Icon */}
                <div className="systems-hub__system-icon">
                  {IconComponent && <IconComponent className="systems-hub__system-icon-svg" />}
                </div>

                {/* Content */}
                <div className="systems-hub__system-content">
                  <h3 className="systems-hub__system-name">{system.name}</h3>
                  <p className="systems-hub__system-tagline">{system.tagline}</p>
                  <p className="systems-hub__system-description">{system.description}</p>

                  {/* Benefits */}
                  <ul className="systems-hub__system-benefits">
                    {system.benefits.map((benefit, index) => (
                      <li key={index} className="systems-hub__system-benefit">
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* Tier badges */}
                  <div className="systems-hub__system-tiers">
                    {system.tiers.map(tierId => {
                      const tier = serviceTiers.find(t => t.id === tierId);
                      return tier ? (
                        <span
                          key={tierId}
                          className="systems-hub__system-tier-badge"
                          style={{ borderColor: tier.color }}
                        >
                          {tier.name}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="systems-hub__system-arrow">
                  <Icons.ArrowRight className="systems-hub__system-arrow-icon" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Tier Integration Section */}
      <section className="systems-hub__tier-integration">
        <div className="systems-hub__tier-integration-header">
          <h2 className="systems-hub__tier-integration-heading">
            {tierIntegration.heading}
          </h2>
          <p className="systems-hub__tier-integration-description">
            {tierIntegration.description}
          </p>
        </div>

        {/* Tier Cards */}
        <div className="systems-hub__tier-cards">
          {/* Foundation Tier */}
          <div className="systems-hub__tier-card">
            <div className="systems-hub__tier-card-header">
              <h3 className="systems-hub__tier-card-title">Foundation</h3>
              <p className="systems-hub__tier-card-tagline">Core Infrastructure</p>
            </div>
            <ul className="systems-hub__tier-card-systems">
              {tierIntegration.foundation.systems.map((system, index) => (
                <li key={index} className="systems-hub__tier-card-system">
                  <Icons.Check className="systems-hub__tier-card-system-icon" />
                  <span>{system}</span>
                </li>
              ))}
            </ul>
            <p className="systems-hub__tier-card-description">
              {tierIntegration.foundation.description}
            </p>
            <Link to="/services" className="systems-hub__tier-card-link">
              Learn More
              <Icons.ArrowRight className="systems-hub__tier-card-link-icon" />
            </Link>
          </div>

          {/* Growth Tier */}
          <div className="systems-hub__tier-card systems-hub__tier-card--featured">
            <div className="systems-hub__tier-card-badge">RECOMMENDED</div>
            <div className="systems-hub__tier-card-header">
              <h3 className="systems-hub__tier-card-title">Growth</h3>
              <p className="systems-hub__tier-card-tagline">Strategic Optimization</p>
            </div>
            <ul className="systems-hub__tier-card-systems">
              {tierIntegration.growth.systems.map((system, index) => (
                <li key={index} className="systems-hub__tier-card-system">
                  <Icons.Check className="systems-hub__tier-card-system-icon" />
                  <span>{system}</span>
                </li>
              ))}
            </ul>
            <p className="systems-hub__tier-card-description">
              {tierIntegration.growth.description}
            </p>
            <Link to="/services" className="systems-hub__tier-card-link">
              Learn More
              <Icons.ArrowRight className="systems-hub__tier-card-link-icon" />
            </Link>
          </div>

          {/* Enterprise Tier */}
          <div className="systems-hub__tier-card">
            <div className="systems-hub__tier-card-header">
              <h3 className="systems-hub__tier-card-title">Enterprise</h3>
              <p className="systems-hub__tier-card-tagline">Custom Solutions</p>
            </div>
            <ul className="systems-hub__tier-card-systems">
              {tierIntegration.enterprise.systems.map((system, index) => (
                <li key={index} className="systems-hub__tier-card-system">
                  <Icons.Check className="systems-hub__tier-card-system-icon" />
                  <span>{system}</span>
                </li>
              ))}
            </ul>
            <p className="systems-hub__tier-card-description">
              {tierIntegration.enterprise.description}
            </p>
            <Link to="/services" className="systems-hub__tier-card-link">
              Learn More
              <Icons.ArrowRight className="systems-hub__tier-card-link-icon" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="systems-hub__final-cta">
        <div className="systems-hub__final-cta-content">
          <h2 className="systems-hub__final-cta-heading">
            Ready to Build Systems That Scale?
          </h2>
          <p className="systems-hub__final-cta-description">
            Request a free systems audit to see how these pillars can transform your
            WordPress site. Delivered in 5 business days.
          </p>
          <Link to={slugToPath('contact')} className="systems-hub__final-cta-button">
            Request a Systems Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SystemsHubTemplate;
