/**
 * SEO Service Template
 * 
 * Sub-service page for SEO optimization under AI Search & Visibility
 * Route: /services/ai/seo
 * Parent: /services/ai
 *
 * Layout classes: sub-service-base__* (from sub-service-base.css)
 * Theme classes: seo-service__* (from seo-service-optimized.css)
 *
 * Pattern Components:
 * - FeatureList — Benefits grid (6 items, 3 columns, glow variant)
 *
 * @see /src/styles/templates/seo-service-optimized.css
 * @see /src/styles/templates/sub-service-base.css
 */

import { Link } from 'react-router';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FeatureList } from '../patterns/FeatureList';
import { seoServiceBenefits, seoServiceDeliverables, seoServiceResults } from '../../data/seo-service-template-data';
import '../../../styles/templates/seo-service-optimized.css';

export const SEOServiceTemplate = () => {
  return (
    <div className="seo-service">
      {/* Hero Section */}
      <section className="sub-service-base__hero seo-service__hero">
        <div className="sub-service-base__hero-content">
          <BreadcrumbPart
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'AI Services', href: '/services/ai' },
              { label: 'SEO' },
            ]}
          />
          
          <h1 className="sub-service-base__hero-title">
            SEO services
          </h1>
          
          <p className="sub-service-base__hero-description">
            Get found by the right audience at the right time. Our data-driven SEO strategies 
            help you rank higher, drive quality traffic, and convert visitors into customers.
          </p>
          
          <div className="sub-service-base__hero-cta">
            <Link to="/contact" className="sub-service-base__cta-button sub-service-base__cta-button--primary">
              Get SEO audit
            </Link>
            <Link to="/services/ai" className="sub-service-base__cta-button sub-service-base__cta-button--secondary">
              View AI services
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="sub-service-base__benefits seo-service__benefits">
        <div className="sub-service-base__section-header">
          <h2 className="sub-service-base__section-title">What we do</h2>
          <p className="sub-service-base__section-description">
            Comprehensive SEO services that cover every aspect of search optimization
          </p>
        </div>
        
        <FeatureList 
          items={seoServiceBenefits} 
          columns={3} 
          variant="glow" 
          iconSize="lg"
        />
      </section>

      {/* Deliverables Timeline */}
      <section className="sub-service-base__benefits seo-service__deliverables">
        <div className="sub-service-base__section-header">
          <h2 className="sub-service-base__section-title">What you get</h2>
          <p className="sub-service-base__section-description">
            Comprehensive deliverables across four key phases
          </p>
        </div>
        
        <div className="sub-service-base__types-grid">
          {seoServiceDeliverables.map((phase, index) => (
            <div key={index} className="sub-service-base__type-card">
              <h3 className="sub-service-base__type-card-title">
                <span className="sub-service-base__type-list-dot" /> {phase.phase}
              </h3>
              <ul className="sub-service-base__type-list">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="sub-service-base__type-list-item">
                    <span className="sub-service-base__type-list-dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="sub-service-base__results seo-service__results">
        <div className="sub-service-base__section-header">
          <h2 className="sub-service-base__section-title">Expected results</h2>
          <p className="sub-service-base__section-description">
            Data-backed outcomes from our SEO campaigns
          </p>
        </div>
        
        <div className="sub-service-base__results-grid">
          {seoServiceResults.map((result, index) => (
            <div key={index} className="sub-service-base__result-card">
              <div className="sub-service-base__result-metric">{result.metric}</div>
              <div className="sub-service-base__result-label">{result.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="sub-service-base__cta seo-service__cta">
        <div className="sub-service-base__cta-content">
          <h2 className="sub-service-base__cta-title">Ready to rank higher?</h2>
          <p className="sub-service-base__cta-description">
            Get a free SEO audit and discover opportunities to improve your search visibility.
          </p>
          <Link to="/contact" className="sub-service-base__cta-button sub-service-base__cta-button--primary">
            Request free audit
          </Link>
        </div>
      </section>
    </div>
  );
};