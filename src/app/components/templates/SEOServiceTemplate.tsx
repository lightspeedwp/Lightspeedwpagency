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
import { LifecycleStageBadge } from '../parts/LifecycleStageBadge';
import { LifecycleFlowStrip } from '../parts/LifecycleFlowStrip';
import { FeatureList } from '../patterns/FeatureList';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { TestimonialCard } from '../patterns/TestimonialCard';
import { RelatedPagesGrid } from '../patterns/RelatedPagesGrid';
import { Container } from '../common/Container';
import { StatsGrid } from '../patterns/StatsGrid';
import { WebGLSearchGraph } from '../patterns/WebGLSearchGraph';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import {
  seoServiceBenefits,
  seoServiceDeliverables,
  seoServiceResults,
  seoLifecycle,
  seoTrustSignal,
  seoRelatedSolutions,
  seoRelatedServices,
  seoDifferentiation,
} from '../../data/seo-service-template-data';
import '../../../styles/templates/seo-service-optimized.css';
import '../../../styles/parts/lifecycle-flow.css';
import { Code, TrendUp, Brain } from '@phosphor-icons/react';

export const SEOServiceTemplate = () => {
  return (
    <div className="seo-service">
      {/* Hero Section */}
      <section className="sub-service-base__hero seo-service__hero" style={{ position: 'relative' }}>
        <WebGLSearchGraph accentColor="var(--wp--preset--color--neon-purple)" />
        <div className="sub-service-base__hero-content" style={{ position: 'relative', zIndex: 2 }}>
          <BreadcrumbPart
            items={[
              { label: 'Home', page: 'front-page' },
              { label: 'Services', page: 'services' },
              { label: 'SEO' },
            ]}
          />
          
          <ScrollReveal animation="fade-down">
            <LifecycleStageBadge stages={[seoLifecycle]} />
          </ScrollReveal>
          
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

      {/* Lifecycle Context Flow */}
      <section aria-label="Lifecycle context">
        <Container>
          <ScrollReveal animation="fade-up">
            <LifecycleFlowStrip
              prevStage={{
                slug: 'build',
                name: 'Build',
                icon: Code,
                accent: 'var(--category-cyan)',
              }}
              currentStage={seoLifecycle}
              nextStage={{
                slug: 'evolve',
                name: 'Evolve',
                icon: Brain,
                accent: 'var(--category-indigo)',
              }}
            />
          </ScrollReveal>
        </Container>
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

      {/* Trust Signal */}
      <section aria-label="Client testimonial">
        <Container>
          <ScrollReveal animation="fade-up">
            <TestimonialCard
              quote={seoTrustSignal.quote}
              author={seoTrustSignal.author}
              role={seoTrustSignal.role}
            />
          </ScrollReveal>
        </Container>
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

      {/* Differentiation Callout */}
      <section aria-label="Service differentiation">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="sub-service-base__callout">
              <h2 className="sub-service-base__callout-title">{seoDifferentiation.title}</h2>
              <p className="sub-service-base__callout-description">{seoDifferentiation.description}</p>
              <Link to={seoDifferentiation.ctaHref} className="sub-service-base__callout-link">
                {seoDifferentiation.ctaText} →
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Results Section */}
      <section className="sub-service-base__results seo-service__results">
        <div className="sub-service-base__section-header">
          <h2 className="sub-service-base__section-title">Expected results</h2>
          <p className="sub-service-base__section-description">
            Data-backed outcomes from our SEO campaigns
          </p>
        </div>
        
        <StatsGrid
          stats={seoServiceResults.map((r, i) => ({ id: `seo-stat-${i}`, number: r.metric, label: r.label, icon: r.icon as any }))}
          columns={4}
          variant="cards"
        />
      </section>

      {/* Related Solutions */}
      <RelatedPagesGrid
        title="Related solutions"
        description="Explore AI-powered solutions that complement SEO"
        items={seoRelatedSolutions}
        columns={3}
      />

      {/* Related Services */}
      <RelatedPagesGrid
        title="Related services"
        description="Discover other services in the AI visibility ecosystem"
        items={seoRelatedServices}
        columns={4}
      />

      {/* CTA Section */}
      <FunkyCTA
        title="Ready to rank higher?"
        description="Get a free SEO audit and discover opportunities to improve your search visibility."
        buttonText="Request free audit"
        buttonPage="contact"
        benefits={[
          'Detailed site analysis',
          'Keyword gap identification',
          'Technical SEO overview',
          'Actionable recommendations'
        ]}
      />
    </div>
  );
};