/**
 * Design Tokens System Template
 *
 * Dedicated page for Design Tokens pillar of LSX Design's systems framework.
 * Visual consistency at scale through centralized design variables.
 *
 * Route: /systems/design-tokens
 *
 * Design System Compliance:
 * - Typography: ONLY var(--font-primary) and var(--font-secondary)
 * - Colors: ONLY semantic variables
 * - Spacing: ONLY var(--spacing-*) tokens
 * - Font sizes: ONLY var(--text-*) tokens
 * - BEM naming: .design-tokens-system__*
 *
 * @see /src/app/data/systems-hub.ts
 * @see /src/styles/templates/design-tokens-system.css
 */

import { Link } from 'react-router';
import { CaretRight, Palette, Check } from '@phosphor-icons/react';
import { designTokensSystem } from '../../data/systems-hub';
import { serviceTiers } from '../../data/three-tier-model';
import '@/styles/templates/design-tokens-system.css';

export const DesignTokensSystemTemplate = () => {
  const system = designTokensSystem;
  const tiers = serviceTiers.filter(tier => system.tiers.includes(tier.id));

  return (
    <div className="system-page">
      {/* Breadcrumbs */}
      <nav className="system-page__breadcrumbs">
        <Link to="/systems" className="system-page__breadcrumb-link">
          Systems
        </Link>
        <CaretRight className="system-page__breadcrumb-separator" />
        <span className="system-page__breadcrumb-current">Design Tokens</span>
      </nav>

      {/* Hero Section */}
      <section className="system-page__hero">
        <div className="system-page__hero-content">
          <div className="system-page__hero-icon">
            <Palette className="system-page__hero-icon-svg" />
          </div>
          <h1 className="system-page__hero-title">{system.name}</h1>
          <p className="system-page__hero-tagline">{system.tagline}</p>
          <p className="system-page__hero-description">{system.description}</p>
        </div>
      </section>

      {/* What Section */}
      <section className="system-page__what">
        <div className="system-page__section-content">
          <h2 className="system-page__section-heading">What Are Design Tokens?</h2>
          <p className="system-page__section-text">
            Design tokens are centralized variables that store your brand's visual
            decisions — colors, typography, spacing, borders, and shadows. They replace
            hardcoded values scattered across your codebase with a single source of truth.
          </p>
          <p className="design-tokens-system__section-text">
            Instead of writing <code>color: #1E6AFF</code> in 50 different files, you
            write <code>color: var(--primary)</code>. Update the token once, and the
            change propagates site-wide in seconds.
          </p>
          <div className="design-tokens-system__example-grid">
            <div className="design-tokens-system__example-card">
              <h3 className="design-tokens-system__example-title">Colors</h3>
              <p className="design-tokens-system__example-text">
                <code>--primary</code>, <code>--accent</code>, <code>--background</code>
              </p>
            </div>
            <div className="design-tokens-system__example-card">
              <h3 className="design-tokens-system__example-title">Typography</h3>
              <p className="design-tokens-system__example-text">
                <code>--text-h1</code>, <code>--font-primary</code>, <code>--line-height-snug</code>
              </p>
            </div>
            <div className="design-tokens-system__example-card">
              <h3 className="design-tokens-system__example-title">Spacing</h3>
              <p className="design-tokens-system__example-text">
                <code>--spacing-4</code>, <code>--spacing-8</code>, <code>--spacing-16</code>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="design-tokens-system__why">
        <div className="design-tokens-system__section-content">
          <h2 className="design-tokens-system__section-heading">
            Why Design Tokens Matter
          </h2>
          <p className="design-tokens-system__section-text">
            Without tokens, design changes require developer time, code reviews, and QA
            testing. With tokens, non-technical stakeholders can update colors, fonts, and
            spacing by editing a single CSS file — no deployment required.
          </p>
          <ul className="design-tokens-system__benefits-list">
            {system.benefits.map((benefit, index) => (
              <li key={index} className="design-tokens-system__benefit">
                <Check className="design-tokens-system__benefit-icon" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How Section */}
      <section className="design-tokens-system__how">
        <div className="design-tokens-system__section-content">
          <h2 className="design-tokens-system__section-heading">How We Implement It</h2>
          <div className="design-tokens-system__steps">
            <div className="design-tokens-system__step">
              <div className="design-tokens-system__step-number">1</div>
              <div className="design-tokens-system__step-content">
                <h3 className="design-tokens-system__step-title">Audit Existing Styles</h3>
                <p className="design-tokens-system__step-text">
                  We analyze your current codebase to identify every color, font, and
                  spacing value. This reveals inconsistencies and duplication.
                </p>
              </div>
            </div>
            <div className="design-tokens-system__step">
              <div className="design-tokens-system__step-number">2</div>
              <div className="design-tokens-system__step-content">
                <h3 className="design-tokens-system__step-title">Define Token System</h3>
                <p className="design-tokens-system__step-text">
                  We create a semantic token hierarchy aligned with WordPress theme.json
                  standards. Light/dark mode variants included.
                </p>
              </div>
            </div>
            <div className="design-tokens-system__step">
              <div className="design-tokens-system__step-number">3</div>
              <div className="design-tokens-system__step-content">
                <h3 className="design-tokens-system__step-title">Migrate Codebase</h3>
                <p className="design-tokens-system__step-text">
                  We replace hardcoded values with token references across your theme,
                  plugins, and custom blocks. Automated testing ensures visual parity.
                </p>
              </div>
            </div>
            <div className="design-tokens-system__step">
              <div className="design-tokens-system__step-number">4</div>
              <div className="design-tokens-system__step-content">
                <h3 className="design-tokens-system__step-title">Documentation & Training</h3>
                <p className="design-tokens-system__step-text">
                  We document every token with usage examples and provide training for
                  your team to maintain the system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tier Integration */}
      <section className="design-tokens-system__tiers">
        <div className="design-tokens-system__section-content">
          <h2 className="design-tokens-system__section-heading">
            Included in These Service Tiers
          </h2>
          <div className="design-tokens-system__tier-cards">
            {tiers.map(tier => (
              <div key={tier.id} className="design-tokens-system__tier-card">
                <h3 className="design-tokens-system__tier-name">{tier.name}</h3>
                <p className="design-tokens-system__tier-tagline">{tier.tagline}</p>
                <p className="design-tokens-system__tier-description">
                  {tier.description}
                </p>
                <Link to="/services" className="design-tokens-system__tier-link">
                  Learn More
                  <CaretRight className="design-tokens-system__tier-link-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="design-tokens-system__cta">
        <div className="design-tokens-system__cta-content">
          <h2 className="design-tokens-system__cta-heading">
            Ready to Eliminate Design Debt?
          </h2>
          <p className="design-tokens-system__cta-description">
            Request a free design audit to see how tokens can standardize your brand and
            reduce development time by 60%.
          </p>
          <Link to="/contact" className="design-tokens-system__cta-button">
            Request a Design Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DesignTokensSystemTemplate;