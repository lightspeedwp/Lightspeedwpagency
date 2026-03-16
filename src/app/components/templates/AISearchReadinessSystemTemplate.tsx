/**
 * AI Search Readiness System Template
 *
 * Route: /systems/ai-search-readiness
 * Uses shared system page styles
 *
 * @see /src/app/data/systems-hub.ts
 * @see /src/styles/templates/ai-search-readiness-system.css
 */

import { Link } from 'react-router';
import { CaretRight, Sparkle, Check } from '@phosphor-icons/react';
import { aiSearchReadinessSystem } from '../../data/systems-hub';
import { serviceTiers } from '../../data/three-tier-model';
import { getPageUrl } from '../../data/site-pages';
import '@/styles/templates/ai-search-readiness-system.css';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';

export const AISearchReadinessSystemTemplate = () => {
  const system = aiSearchReadinessSystem;
  const tiers = serviceTiers.filter(tier => system.tiers.includes(tier.id));

  return (
    <div className="system-page">
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Systems', href: '/systems' },
          { label: 'AI Search Readiness' },
        ]}
      />

      <section className="system-page__hero">
        <div className="system-page__hero-content">
          <div className="system-page__hero-icon">
            <Sparkle className="system-page__hero-icon-svg" />
          </div>
          <h1 className="system-page__hero-title">{system.name}</h1>
          <p className="system-page__hero-tagline">{system.tagline}</p>
          <p className="system-page__hero-description">{system.description}</p>
        </div>
      </section>

      <section className="system-page__what">
        <div className="system-page__section-content">
          <h2 className="system-page__section-heading">
            What Is AI Search Readiness?
          </h2>
          <p className="system-page__section-text">
            AI Search Readiness (Answer Engine Optimization) optimizes your content for
            AI-powered search tools like ChatGPT, Perplexity, Google SGE, and Bing AI.
            Advanced schema markup and structured data make your site the source these
            tools cite.
          </p>
          <p className="system-page__section-text">
            Traditional SEO targets keywords and backlinks. AEO targets citation-worthy
            content formatted for AI extraction — clear answers, structured data, FAQ
            schema, and How-to markup.
          </p>
        </div>
      </section>

      <section className="system-page__why">
        <div className="system-page__section-content">
          <h2 className="system-page__section-heading">
            Why AI Search Readiness Matters
          </h2>
          <p className="system-page__section-text">
            AI search engines are replacing traditional Google searches. If your content
            isn't structured for AI extraction, you're invisible to 40% of search traffic.
            AEO gives you first-mover advantage.
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
                <h3 className="system-page__step-title">Content Structure Audit</h3>
                <p className="system-page__step-text">
                  We analyze your content to identify citation-worthy sections and gaps
                  in structured data implementation.
                </p>
              </div>
            </div>
            <div className="system-page__step">
              <div className="system-page__step-number">2</div>
              <div className="system-page__step-content">
                <h3 className="system-page__step-title">Schema Markup Strategy</h3>
                <p className="system-page__step-text">
                  We design a schema markup plan using FAQ, How-to, Product, Service, and
                  Organization schemas tailored to your content types.
                </p>
              </div>
            </div>
            <div className="system-page__step">
              <div className="system-page__step-number">3</div>
              <div className="system-page__step-content">
                <h3 className="system-page__step-title">Implementation & Testing</h3>
                <p className="system-page__step-text">
                  We implement schema markup site-wide, validate with Google's Rich
                  Results Test, and test extraction with AI search tools.
                </p>
              </div>
            </div>
            <div className="system-page__step">
              <div className="system-page__step-number">4</div>
              <div className="system-page__step-content">
                <h3 className="system-page__step-title">Monitor & Optimize</h3>
                <p className="system-page__step-text">
                  We track AI citation metrics, monitor Google SGE appearances, and
                  refine content formatting based on performance data.
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
            Ready to Dominate AI Search Results?
          </h2>
          <p className="system-page__cta-description">
            Request a free AEO audit to see how schema markup can increase AI search
            visibility by 3-5x and position you as the cited authority.
          </p>
          <Link to={getPageUrl('contact')} className="system-page__cta-button">
            Request an AEO Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AISearchReadinessSystemTemplate;