/**
 * Performance Reliability System Template
 *
 * Route: /systems/performance-reliability
 * Uses shared system page styles
 *
 * @see /src/app/data/systems-hub.ts
 * @see /src/styles/templates/performance-reliability-system.css
 */

import { Link } from 'react-router';
import { ChevronRight, Zap, Check } from 'lucide-react';
import { performanceReliabilitySystem } from '../../data/systems-hub';
import { serviceTiers } from '../../data/three-tier-model';
import '@/styles/templates/performance-reliability-system.css';

export const PerformanceReliabilitySystemTemplate = () => {
  const system = performanceReliabilitySystem;
  const tiers = serviceTiers.filter(tier => system.tiers.includes(tier.id));

  return (
    <div className="system-page">
      <nav className="system-page__breadcrumbs">
        <Link to="/systems" className="system-page__breadcrumb-link">
          Systems
        </Link>
        <ChevronRight className="system-page__breadcrumb-separator" />
        <span className="system-page__breadcrumb-current">Performance Reliability</span>
      </nav>

      <section className="system-page__hero">
        <div className="system-page__hero-content">
          <div className="system-page__hero-icon">
            <Zap className="system-page__hero-icon-svg" />
          </div>
          <h1 className="system-page__hero-title">{system.name}</h1>
          <p className="system-page__hero-tagline">{system.tagline}</p>
          <p className="system-page__hero-description">{system.description}</p>
        </div>
      </section>

      <section className="system-page__what">
        <div className="system-page__section-content">
          <h2 className="system-page__section-heading">
            What Is Performance Reliability?
          </h2>
          <p className="system-page__section-text">
            Performance reliability engineering ensures your site loads in under 1 second
            and stays online 99.9% of the time. We optimize Core Web Vitals (LCP, FID,
            CLS), implement caching strategies, and configure redundancy systems.
          </p>
          <p className="system-page__section-text">
            Slow sites lose 7% of conversions for every 100ms delay. Downtime costs
            revenue and trust. Performance reliability makes speed and uptime
            non-negotiable.
          </p>
        </div>
      </section>

      <section className="system-page__why">
        <div className="system-page__section-content">
          <h2 className="system-page__section-heading">
            Why Performance Reliability Matters
          </h2>
          <p className="system-page__section-text">
            Google uses Core Web Vitals as a ranking factor. Users abandon slow sites.
            Performance directly impacts SEO, conversions, and user satisfaction. It's
            not optional — it's table stakes.
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
                <h3 className="system-page__step-title">Performance Baseline Audit</h3>
                <p className="system-page__step-text">
                  We measure current Core Web Vitals, identify bottlenecks (images,
                  scripts, database queries), and establish performance benchmarks.
                </p>
              </div>
            </div>
            <div className="system-page__step">
              <div className="system-page__step-number">2</div>
              <div className="system-page__step-content">
                <h3 className="system-page__step-title">Optimization Strategy</h3>
                <p className="system-page__step-text">
                  We create a plan covering image optimization, lazy loading, caching,
                  CDN configuration, and database query optimization.
                </p>
              </div>
            </div>
            <div className="system-page__step">
              <div className="system-page__step-number">3</div>
              <div className="system-page__step-content">
                <h3 className="system-page__step-title">Infrastructure Hardening</h3>
                <p className="system-page__step-text">
                  We configure redundancy systems, automated backups, uptime monitoring,
                  and failover protocols to ensure 99.9% availability.
                </p>
              </div>
            </div>
            <div className="system-page__step">
              <div className="system-page__step-number">4</div>
              <div className="system-page__step-content">
                <h3 className="system-page__step-title">Continuous Monitoring</h3>
                <p className="system-page__step-text">
                  We deploy real-time performance dashboards, set up alerts for
                  degradation, and provide monthly optimization reports.
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
                <Link to="/services" className="system-page__tier-link">
                  Learn More
                  <ChevronRight className="system-page__tier-link-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="system-page__cta">
        <div className="system-page__cta-content">
          <h2 className="system-page__cta-heading">
            Ready to Achieve Sub-1-Second Page Loads?
          </h2>
          <p className="system-page__cta-description">
            Request a free performance audit to see how optimization can improve Core Web
            Vitals, boost conversions, and ensure 99.9% uptime.
          </p>
          <Link to="/contact" className="system-page__cta-button">
            Request a Performance Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PerformanceReliabilitySystemTemplate;
