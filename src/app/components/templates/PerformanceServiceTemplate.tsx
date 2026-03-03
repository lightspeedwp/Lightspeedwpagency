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
 * - All styling via @/styles/templates/page-service-performance.css
 * - Colors mapped to global semantic tokens for auto light/dark
 * - Fonts: var(--font-primary), var(--font-secondary), var(--font-mono) only
 */

import '../../../styles/templates/page-service-performance.css';
import { Container } from '../common/Container';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { RelatedServicesGrid } from '../patterns/RelatedServicesGrid';
import { RelatedServicesInPhase } from '../patterns/RelatedServicesInPhase';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { ServicePricingTimeline } from '../patterns/ServicePricingTimeline';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import { servicePricingTimeline } from '../../data/services';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { 
  Zap, 
  Gauge, 
  Server, 
  Activity, 
  BarChart, 
  CheckCircle, 
  Settings, 
  Smartphone,
  Layers,
  Search,
  Eye,
  Shield,
} from 'lucide-react';

import { performanceServiceDetailed } from '../../data/services';

export function PerformanceServiceTemplate() {
  const data = performanceServiceDetailed;

  // Icon mapping for Sub-services
  const serviceIcons: Record<string, any> = {
    'speed-audit': Gauge,
    'code-optimization': Layers,
    'caching-strategy': Server,
    'asset-optimization': Smartphone,
    'wcag-audit': Eye,
    'remediation': Shield,
  };

  // Icon mapping for Process steps
  const processIcons: Record<string, any> = {
    'benchmark': BarChart,
    'analysis': Search,
    'optimization': Zap,
    'validation': CheckCircle,
    'monitoring': Activity
  };

  return (
    <div className="performance-page">
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
      <section className="perf-page__hero">
        <div className="perf-page__speed-lines" aria-hidden="true" />
        <div className="perf-page__lightning" aria-hidden="true" />
        
        <Container>
          <div className="perf-page__hero-content">
            <ScrollReveal animation="fade-down">
              <div className="perf-page__badge">
                <Zap size={14} fill="currentColor" />
                <span>PERFORMANCE + WCAG COMPLIANCE</span>
              </div>
              
              <h1 className="perf-page__title">
                {data.headline}
              </h1>
              
              <p className="perf-page__description">
                {data.tagline}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="scale" delay={200}>
              <div className="perf-page__dashboard">
                <div className="perf-page__score-wrapper">
                  <div className="perf-page__score-ring">
                    98
                  </div>
                  <span className="perf-page__score-label">Lighthouse Score</span>
                </div>
                
                <div className="perf-page__metrics-grid">
                  <div className="perf-page__metric-item">
                    <div className="perf-page__metric-value">0.8s</div>
                    <div className="perf-page__metric-name">LCP</div>
                  </div>
                  <div className="perf-page__metric-item">
                    <div className="perf-page__metric-value">0ms</div>
                    <div className="perf-page__metric-name">CLS</div>
                  </div>
                  <div className="perf-page__metric-item">
                    <div className="perf-page__metric-value">50ms</div>
                    <div className="perf-page__metric-name">TBT</div>
                  </div>
                  <div className="perf-page__metric-item">
                    <div className="perf-page__metric-value">100%</div>
                    <div className="perf-page__metric-name">SEO</div>
                  </div>
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
      <section className="perf-page__why">
        <Container>
          <div className="perf-page__why-grid">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="perf-page__section-title">
                  {data.whyLightSpeed.title}
                </h2>
                <p className="perf-page__section-desc">
                  {data.whyLightSpeed.description}
                </p>
                <div className="perf-page__why-list">
                  {[
                    "Google Core Web Vitals focused",
                    "Server-side caching implementation",
                    "Database optimization & cleanup",
                    "CDN content delivery network"
                  ].map((item, i) => (
                    <div key={i} className="perf-page__why-item">
                      <CheckCircle className="perf-page__why-icon" size={20} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div className="perf-page__comparison">
                <div className="perf-page__chart-container">
                  <div className="perf-page__bar-group">
                    <div className="perf-page__bar-tag perf-page__bar-tag--muted">3.5s</div>
                    <div className="perf-page__bar perf-page__bar--slow" style={{ height: '30%' }} />
                    <div className="perf-page__bar-label">Before</div>
                  </div>
                  <div className="perf-page__bar-group">
                    <div className="perf-page__bar-tag perf-page__bar-tag--fast">0.8s</div>
                    <div className="perf-page__bar perf-page__bar--fast" style={{ height: '90%' }} />
                    <div className="perf-page__bar-label perf-page__bar-label--fast">After</div>
                  </div>
                </div>
                <div className="perf-page__comparison-label">
                  SPEED IMPROVEMENT: <span className="perf-page__comparison-accent">3X FASTER</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          SERVICES GRID (Features)
          ============================================ */}
      <section className="perf-page__services">
        <Container>
          <div className="perf-page__text-center">
            <ScrollReveal animation="fade-up">
              <h2 className="perf-page__section-title">Performance & Accessibility Features</h2>
              <p className="perf-page__section-desc perf-page__max-w-2xl">
                Comprehensive optimization covering every layer of your stack.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="perf-page__services-grid">
            {data.subServices.map((service, index) => {
              const Icon = serviceIcons[service.id] || Zap;
              return (
                <ScrollReveal key={service.id || index} animation="fade-up" delay={index * 50}>
                  <div className="perf-page__service-card">
                    <div className="perf-page__service-icon">
                      <Icon size={24} />
                    </div>
                    <h3 className="perf-page__service-title">{service.title}</h3>
                    <p className="perf-page__service-desc">{service.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          PROCESS STEPS (Workflow)
          ============================================ */}
      <section className="perf-page__process">
        <Container>
          <div className="perf-page__process-header">
            <ScrollReveal animation="fade-up">
              <h2 className="perf-page__section-title">
                {data.process.title}
              </h2>
              <p className="perf-page__section-desc perf-page__max-w-2xl">
                {data.process.description}
              </p>
            </ScrollReveal>
          </div>

          <div className="perf-page__step-list">
            {data.process.steps.map((step, index) => {
              const Icon = processIcons[step.id] || Settings;
              return (
                <ScrollReveal key={step.id || index} animation="fade-up" delay={index * 100}>
                  <div className="perf-page__step-card">
                    <div className="perf-page__step-icon">
                      <Icon size={32} />
                    </div>
                    <div>
                      <h3 className="perf-page__step-title">{step.title}</h3>
                      <p className="perf-page__step-desc">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <RelatedServicesGrid
          title="Related Services"
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
          <section className="performance-service__pricing-section">
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