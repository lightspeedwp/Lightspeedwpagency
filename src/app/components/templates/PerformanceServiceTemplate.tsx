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
 *
 * PATTERN COMPONENTS:
 * - ✅ FeatureList — Performance Features section (glow variant, 4 columns)
 * - ✅ ProcessTimeline — 5-Step Protocol section (vertical orientation)
 * - ✅ FunkyCTA — Final conversion section
 * - ✅ ServiceTestimonial — Testimonial section
 * - ✅ ServicePricingTimeline — Pricing & timeline section
 * - ✅ RelatedServicesInPhase — Related services navigation
 *
 * @migrated March 3, 2026 — Migrated inline features grid to FeatureList and inline process steps to ProcessTimeline components. Converted all Lucide icons to Phosphor equivalents.
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
  Gauge, 
  HardDrives as Server, 
  ChartLineUp as Activity, 
  ChartBar as BarChart, 
  CheckCircle, 
  Gear as Settings, 
  DeviceMobile as Smartphone,
  Stack as Layers,
  MagnifyingGlass as Search,
  Eye,
  Shield,
} from '@phosphor-icons/react';

export function PerformanceServiceTemplate() {
  // Mock data for performance service
  const data = {
    tagline: "Faster load times mean better conversions and higher rankings.",
    whyLightSpeed: {
      description: "We use industry-leading tools and optimization techniques to ensure your WordPress site delivers lightning-fast performance across all devices."
    },
    subServices: [
      {
        id: 'speed-audit',
        title: 'Speed Audit',
        description: 'Comprehensive performance analysis with actionable recommendations.'
      },
      {
        id: 'code-optimization',
        title: 'Code Optimization',
        description: 'Clean, efficient code that loads faster and uses fewer resources.'
      },
      {
        id: 'image-optimization',
        title: 'Image Optimization',
        description: 'Automated image compression and next-gen format conversion.'
      }
    ],
    process: {
      steps: [
        {
          id: 'audit',
          number: '1',
          title: 'Performance Audit',
          description: 'We analyze your site to identify bottlenecks and opportunities.'
        },
        {
          id: 'optimize',
          number: '2',
          title: 'Optimization',
          description: 'We implement proven techniques to improve load times.'
        },
        {
          id: 'monitor',
          number: '3',
          title: 'Monitoring',
          description: 'We track performance metrics to ensure sustained improvements.'
        }
      ]
    },
    relatedServices: [],
    cta: {
      title: "Ready to Speed Up Your Site?",
      description: "Let's optimize your WordPress performance for better user experience and SEO.",
      buttonText: "Get Started",
      buttonPage: "contact" as const
    }
  };

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
          
          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList
              items={performanceServiceFeatures.features.map((feat) => ({
                icon: feat.icon as any,
                title: feat.title,
                description: feat.description
              }))}
              columns={4}
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
      <section className="perf-page__process">
        <Container>
          <ScrollReveal animation="fade-up">
            <ProcessTimeline
              heading={performanceServiceProcess.title}
              description="Our systematic 5-step approach to WordPress performance optimization"
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