/**
 * Pattern Governance System Template
 *
 * Route: /systems/pattern-governance
 * Uses shared system page styles
 *
 * @see /src/app/data/systems-hub.ts
 * @see /src/styles/templates/pattern-governance-system.css
 */

import { Link } from 'react-router';
import { CaretRight, Layout, Check } from '@phosphor-icons/react';
import { patternGovernanceSystem } from '../../data/systems-hub';
import { serviceTiers } from '../../data/three-tier-model';
import { getPageUrl } from '../../data/site-pages';
import '@/styles/templates/pattern-governance-system.css';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';

export const PatternGovernanceSystemTemplate = () => {
  const system = patternGovernanceSystem;
  const tiers = serviceTiers.filter(tier => system.tiers.includes(tier.id));

  return (
    <div className="system-page">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Systems', href: '/systems' },
          { label: 'Pattern Governance' },
        ]}
      />

      <section className="system-page__hero">
        <div className="system-page__hero-content">
          <div className="system-page__hero-icon">
            <Layout className="system-page__hero-icon-svg" />
          </div>
          <h1 className="system-page__hero-title">{system.name}</h1>
          <p className="system-page__hero-tagline">{system.tagline}</p>
          <p className="system-page__hero-description">{system.description}</p>
        </div>
      </section>

      <section className="system-page__what">
        <div className="system-page__section-content">
          <h2 className="system-page__section-heading">
            What Is Pattern Governance?
          </h2>
          <p className="system-page__section-text">
            Pattern governance is a system of reusable WordPress block patterns that
            editors can drag-and-drop to compose pages. No code required. Every pattern
            follows design token standards and accessibility guidelines.
          </p>
          <p className="system-page__section-text">
            Instead of building each page from scratch, editors choose from a library of
            pre-built, pre-tested patterns — hero sections, card grids, CTAs,
            testimonials, pricing tables — that snap together like LEGO blocks.
          </p>
        </div>
      </section>

      <section className="system-page__why">
        <div className="system-page__section-content">
          <h2 className="system-page__section-heading">
            Why Pattern Governance Matters
          </h2>
          <p className="system-page__section-text">
            Without patterns, every page requires developer time. With patterns, editors
            compose pages in minutes. This reduces production time by 50-70% while
            guaranteeing visual consistency.
          </p>
          <ul className="system-page__benefits-list">
            {system.benefits.map((benefit, index) => (
              <li key={index} className="system-page__benefit">
                <Check className="system-page__benefit-icon" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="system-page__how">
        <div className="system-page__section-content">
          <h2 className="system-page__section-heading">How We Implement It</h2>
          <div className="system-page__steps">
            <div className="system-page__step">
              <div className="system-page__step-number">1</div>
              <div className="system-page__step-content">
                <h3 className="system-page__step-title">Audit Content Patterns</h3>
                <p className="system-page__step-text">
                  We analyze your existing pages to identify recurring layout patterns —
                  heroes, card grids, CTAs, testimonials, etc.
                </p>
              </div>
            </div>
            <div className="system-page__step">
              <div className="system-page__step-number">2</div>
              <div className="system-page__step-content">
                <h3 className="system-page__step-title">Build Pattern Library</h3>
                <p className="system-page__step-text">
                  We create WordPress FSE block patterns for each layout, following
                  design token standards and accessibility guidelines.
                </p>
              </div>
            </div>
            <div className="system-page__step">
              <div className="system-page__step-number">3</div>
              <div className="system-page__step-content">
                <h3 className="system-page__step-title">Register & Document</h3>
                <p className="system-page__step-text">
                  We register patterns in your theme and create documentation with
                  screenshots and usage examples.
                </p>
              </div>
            </div>
            <div className="system-page__step">
              <div className="system-page__step-number">4</div>
              <div className="system-page__step-content">
                <h3 className="system-page__step-title">Train Editors</h3>
                <p className="system-page__step-text">
                  We train your team to compose pages using patterns, eliminating
                  developer dependency for content changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="system-page__tiers">
        <div className="system-page__section-content">
          <h2 className="system-page__section-heading">
            Included in These Service Tiers
          </h2>
          <div className="system-page__tier-cards">
            {tiers.map(tier => (
              <div key={tier.id} className="system-page__tier-card">
                <h3 className="system-page__tier-name">{tier.name}</h3>
                <p className="system-page__tier-tagline">{tier.tagline}</p>
                <p className="system-page__tier-description">{tier.description}</p>
                <Link to={getPageUrl('services')} className="system-page__tier-link">
                  Learn More
                  <CaretRight className="system-page__tier-link-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="system-page__cta">
        <div className="system-page__cta-content">
          <h2 className="system-page__cta-heading">
            Ready to Accelerate Page Production?
          </h2>
          <p className="system-page__cta-description">
            Request a free pattern audit to see how governance can reduce production
            time by 50-70% while maintaining design consistency.
          </p>
          <Link to={getPageUrl('contact')} className="system-page__cta-button">
            Request a Pattern Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PatternGovernanceSystemTemplate;