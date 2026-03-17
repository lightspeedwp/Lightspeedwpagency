/**
 * Performance Service Template - Funky Redesign
 * 
 * Theme: "High Performance" (Orange/Red/Yellow)
 * 
 * Features:
 * - Speedometer Hero
 * - Lightning Bolt Effects
 * - Before/After Speed Comparison
 * - Process Workflow Timeline
 * 
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - Zero inline styles (except CSS variable dynamic values)
 * - All styling via BEM classes in performance-service.css + service-hero.css
 * - Colors mapped to global semantic tokens for auto light/dark
 * - Fonts: var(--font-primary), var(--font-secondary), var(--font-mono) only
 *
 * BEM Blocks: .perf-hero, .perf-speedometer, .perf-checklist, .perf-comparison
 *
 * @see /src/styles/templates/performance-service.css
 */

import { Container } from '../common/Container';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { FeatureList } from '../patterns/FeatureList';
import { ProcessTimeline } from '../patterns/ProcessTimeline';
import { RelatedServicesInPhase } from '../patterns/RelatedServicesInPhase';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { ServicePricingTimeline } from '../patterns/ServicePricingTimeline';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import { servicePricingTimeline } from '../../data/services';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { 
  Lightning as Zap, 
  CheckCircle, 
} from '@phosphor-icons/react';
import { performanceServiceHero, performanceServiceOverview, performanceServiceFeatures, performanceServiceProcess } from '../../data/performance-service-page';

export function PerformanceServiceTemplate() {
  // Build unified data object
  const data = {
    headline: performanceServiceHero.title,
    tagline: performanceServiceHero.subtitle,
    whyLightSpeed: {
      title: performanceServiceOverview.title,
      description: performanceServiceOverview.description
    },
    cta: {
      title: "Ready to Speed Up Your Site?",
      description: "Let's optimize your WordPress performance for better user experience and SEO.",
      buttonText: "Get Started",
      buttonPage: "contact" as const
    },
    relatedServices: []
  };

  return (
    <div className="wp-w-full wp-flex wp-flex-col">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Services', page: 'services' },
          { label: 'Performance & Accessibility' },
        ]}
      />

      {/* Journey Phase Indicator */}
      <JourneyPhaseIndicator currentPhase="grow" currentServicePage="performance" />

      {/* ============================================
          HERO SECTION (Light Speed)
          ============================================ */}
      <section className="perf-hero">
        <div className="perf-hero__grid-bg" aria-hidden="true" />
        <div className="perf-hero__orb" aria-hidden="true" />
        
        <Container>
          <div className="perf-hero__grid">
            <ScrollReveal animation="fade-down">
              <div className="service-hero__badge service-hero__badge--primary service-hero__badge--bold">
                <Zap size={16} weight="fill" />
                <span>PERFORMANCE + WCAG COMPLIANCE</span>
              </div>
              
              <h1 className="service-hero__title">
                <span className="service-hero__gradient-text">High-Speed</span> <br />
                Optimization
              </h1>
              
              <p className="service-hero__description">
                {data.tagline}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="scale" delay={200}>
              <div className="perf-speedometer">
                <div className="perf-speedometer__gauge-wrapper">
                  <div className="perf-speedometer__gauge">
                    98
                  </div>
                  <span className="service-stat__label service-stat__label--wide">Lighthouse Score</span>
                </div>
                
                <div className="perf-speedometer__metrics">
                  {[
                    { value: '0.8s', label: 'LCP' },
                    { value: '0ms', label: 'CLS' },
                    { value: '50ms', label: 'TBT' },
                    { value: '100%', label: 'SEO' },
                  ].map((metric) => (
                    <div key={metric.label} className="perf-speedometer__metric">
                      <div className="perf-speedometer__metric-value">{metric.value}</div>
                      <div className="perf-speedometer__metric-label">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>

        <ScrollDownArrow />
      </section>

      {/* ============================================
          WHY LIGHTSPEED (Speed Kills Latency)
          ============================================ */}
      <section className="service-section service-section--bg-muted">
        <Container>
          <div className="wp-grid-2-cols wp-items-center wp-gap-16">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="service-section__title perf-section__title">
                  {data.whyLightSpeed.title}
                </h2>
                <p className="service-section__description service-section__description--left perf-section__description">
                  {data.whyLightSpeed.description}
                </p>
                <div className="perf-checklist">
                  {[
                    "Google Core Web Vitals focused",
                    "Server-side caching implementation",
                    "Database optimization & cleanup",
                    "CDN content delivery network"
                  ].map((item, i) => (
                    <div key={i} className="perf-checklist__item">
                      <CheckCircle color="var(--primary)" size={24} weight="fill" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div className="perf-comparison">
                <div className="perf-comparison__bars">
                  <div className="perf-comparison__row">
                    <div className="perf-comparison__time perf-comparison__time--before">3.5s</div>
                    <div className="perf-comparison__bar-track perf-comparison__bar-track--before">
                      <div className="perf-comparison__bar-fill perf-comparison__bar-fill--before" />
                    </div>
                    <div className="perf-comparison__label perf-comparison__label--before">Before</div>
                  </div>
                  
                  <div className="perf-comparison__row">
                    <div className="perf-comparison__time perf-comparison__time--after">0.8s</div>
                    <div className="perf-comparison__bar-track perf-comparison__bar-track--after">
                      <div className="perf-comparison__bar-fill perf-comparison__bar-fill--after" />
                    </div>
                    <div className="perf-comparison__label perf-comparison__label--after">After</div>
                  </div>
                </div>
                
                <div className="perf-comparison__result">
                  <span className="service-stat__label service-stat__label--wide">
                    SPEED IMPROVEMENT: <span className="perf-comparison__result-highlight">3X FASTER</span>
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          SERVICES GRID (Features)
          ============================================ */}
      <section className="service-section service-section--bg-background">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">Performance & accessibility features</h2>
              <p className="service-section__description">
                Comprehensive optimization covering every layer of your stack.
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList
              items={performanceServiceFeatures.features.map((feat) => ({
                icon: feat.icon as any,
                title: feat.title,
                description: feat.description
              }))}
              columns={3}
              variant="glow"
              iconSize="md"
              iconStyle="rounded"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          PROCESS STEPS (Workflow)
          ============================================ */}
      <section className="service-section service-section--bg-card">
        <Container>
          <ScrollReveal animation="fade-up">
            <ProcessTimeline
              heading={performanceServiceProcess.title}
              description="Our systematic approach to WordPress performance optimization"
              steps={performanceServiceProcess.steps.map((step, i) => ({
                id: step.step.toLowerCase(),
                number: i + 1,
                title: step.step,
                description: step.description,
                icon: step.icon as any
              }))}
              showNumbers={true}
              orientation="vertical"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* CTA Section */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <RelatedServicesInPhase
          title="Related services"
          subtitle="Maximise site speed with these complementary services"
          services={data.relatedServices}
        />
      )}
      <ServiceTestimonial
        serviceSlug="performance"
        subtitle="Hear from clients who experienced dramatic speed improvements"
      />
      
      {/* ============================================
          PRICING & TIMELINE
          ============================================ */}
      {servicePricingTimeline.performance && (
        <ScrollReveal animation="fade-up">
          <section className="service-section service-section--bg-muted">
            <Container>
              <ServicePricingTimeline
                pricing={servicePricingTimeline.performance.pricing}
                timeline={servicePricingTimeline.performance.timeline}
                showPhases={true}
                showVariables={true}
              />
            </Container>
          </section>
        </ScrollReveal>
      )}
      
      {/* Related Services in Grow Phase */}
      <RelatedServicesInPhase 
        currentPhase="grow"
        currentServicePage="performance"
      />

      <FunkyCTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonPage={data.cta.buttonPage}
        benefits={[
          'Instant Load Time Reduction',
          'Better Google Rankings',
          'WCAG 2.1 AA/AAA Compliance',
          'Detailed Speed & Accessibility Report'
        ]}
      />
    </div>
  );
}