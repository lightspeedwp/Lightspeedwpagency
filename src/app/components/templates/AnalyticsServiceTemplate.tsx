/**
 * Analytics Service Template
 * 
 * Sub-service page for Analytics & Data Intelligence under AI Search & Visibility
 * Route: /services/analytics
 * Parent: /services/ai-search-visibility
 * 
 * Features:
 * - Hero section with service overview
 * - Key benefits grid
 * - Analytics deliverables
 * - Results showcase
 * - CTA section
 * - Lifecycle flow strip
 * - Related pages grid
 * - Testimonial card
 * 
 * Design System Compliance:
 * - Uses CSS variables from /src/styles/theme-base.css
 * - Uses semantic colors from /src/styles/theme-light.css
 * - BEM methodology for all class names
 * - No hardcoded colors or spacing values
 * - Font families: var(--font-primary) and var(--font-secondary) only
 * 
 * Pattern Components:
 * - FeatureList — Benefits grid (6 items, 3 columns, glow variant)
 * 
 * BEM: Uses .service-hero, .service-section, .perf-checklist shared blocks
 *
 * @see /src/styles/templates/service-hero.css
 * @see /src/styles/templates/performance-service.css
 */

import { CheckCircle } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import { 
  analyticsServiceBenefits, 
  analyticsServiceDeliverables, 
  analyticsServiceResults,
  analyticsLifecycle,
  analyticsTrustSignal,
  analyticsRelatedSolutions,
  analyticsRelatedServices,
} from '../../data/analytics-service-template-data';
import { FeatureList } from '../patterns/FeatureList';
import { Container } from '../common/Container';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import { StatsGrid } from '../patterns/StatsGrid';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { LifecycleFlowStrip } from '../parts/LifecycleFlowStrip';
import { RelatedPagesGrid } from '../patterns/RelatedPagesGrid';
import { TestimonialCard } from '../patterns/TestimonialCard';
import { Rocket, Brain } from '@phosphor-icons/react';

import { WebGLDataNodes } from '../patterns/WebGLDataNodes';

export const AnalyticsServiceTemplate = () => {
  return (
    <div className="service-page analytics-service">
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Services', page: 'services' },
          { label: 'AI Search & Visibility', page: 'services/ai-search-visibility' },
          { label: 'Analytics' },
        ]}
      />

      <JourneyPhaseIndicator currentPhase="grow" currentServicePage="analytics" />

      {/* Hero Section */}
      <section className="service-hero service-hero--pricing" style={{ position: 'relative' }}>
        <WebGLDataNodes accentColor="var(--wp--preset--color--neon-cyan)" secondaryColor="var(--wp--preset--color--neon-purple)" />
        <div className="pricing-page__grid-bg" aria-hidden="true" style={{ opacity: 0.5, zIndex: 1 }} />
        
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <div className="service-hero__content service-hero__content--centered">
            <ScrollReveal animation="fade-up">
              <h1 className="service-hero__title">
                Analytics & Data Intelligence
              </h1>
              
              <p className="service-hero__description service-hero__description--centered">
                Make data-driven decisions with confidence. Our analytics solutions help you understand 
                your audience, track performance, and optimize for growth with actionable insights.
              </p>
              
              <div className="service-hero__cta-group service-hero__cta-group--centered">
                <Link to={getPageUrl('contact')} className="sub-service-base__hero-btn sub-service-base__hero-btn--primary">
                  Get analytics audit
                </Link>
                <Link to={getPageUrl('ai-search-visibility')} className="sub-service-base__hero-btn sub-service-base__hero-btn--secondary">
                  View Parent Service
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Benefits Grid */}
      <section className="service-section service-section--bg-muted">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">What we offer</h2>
              <p className="service-section__description">
                Comprehensive analytics services that turn data into actionable business intelligence
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList
              items={analyticsServiceBenefits.map(b => ({ ...b, icon: b.icon as any }))}
              columns={3}
              variant="glow"
              iconSize="lg"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="service-section service-section--bg-background">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">What you get</h2>
              <p className="service-section__description">
                Deliverables designed to give you complete visibility into your digital performance
              </p>
            </ScrollReveal>
          </div>
          
          <div className="discovery-body__deliverables-grid">
            {analyticsServiceDeliverables.map((deliverable, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="perf-checklist__card">
                  <div style={{ color: 'var(--primary)', flexShrink: 0 }}>
                    <CheckCircle size={24} weight="fill" />
                  </div>
                  <span className="perf-checklist__card-text">{deliverable}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Results */}
      <section className="service-section service-section--bg-card">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">Proven results</h2>
              <p className="service-section__description">
                Real outcomes from our analytics implementations
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <StatsGrid
              stats={analyticsServiceResults.map((r, i) => ({ id: `analytics-stat-${i}`, number: r.metric, label: r.label, icon: r.icon as any }))}
              columns={4}
              variant="cards"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Lifecycle Context Flow */}
      <section aria-label="Lifecycle context">
        <Container>
          <ScrollReveal animation="fade-up">
            <LifecycleFlowStrip
              prevStage={{
                slug: 'launch',
                name: 'Launch',
                icon: Rocket,
                accent: 'var(--category-amber)',
              }}
              currentStage={analyticsLifecycle}
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

      {/* Trust Signal */}
      <section aria-label="Client testimonial">
        <Container>
          <ScrollReveal animation="fade-up">
            <TestimonialCard
              quote={analyticsTrustSignal.quote}
              author={analyticsTrustSignal.author}
              role={analyticsTrustSignal.role}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Related Solutions */}
      <section aria-label="Related solutions">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">Related solutions</h2>
              <p className="service-section__description">
                Explore AI-powered solutions that work alongside analytics
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal animation="fade-up" delay={100}>
            <RelatedPagesGrid pages={analyticsRelatedSolutions} />
          </ScrollReveal>
        </Container>
      </section>

      {/* Related Services */}
      <section aria-label="Related services">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">Related services</h2>
              <p className="service-section__description">
                Complementary services that enhance your analytics strategy
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal animation="fade-up" delay={100}>
            <RelatedPagesGrid pages={analyticsRelatedServices} />
          </ScrollReveal>
        </Container>
      </section>

      {/* CTA */}
      <FunkyCTA
        title="Ready to unlock your data's potential?"
        description="Let's build an analytics strategy that drives measurable business growth."
        buttonText="Get Started"
        buttonPage="contact"
      />
    </div>
  );
};