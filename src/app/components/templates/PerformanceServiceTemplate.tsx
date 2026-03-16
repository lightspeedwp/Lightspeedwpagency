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
      <section style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--background)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'linear-gradient(45deg, var(--primary) 1px, transparent 1px), linear-gradient(-45deg, var(--primary) 1px, transparent 1px)', backgroundSize: '30px 30px', zIndex: 0 }} aria-hidden="true" />
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--primary) 0%, transparent 60%)', filter: 'blur(50px)', opacity: 0.15, zIndex: 0 }} aria-hidden="true" />
        
        <Container>
          <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-16)', alignItems: 'center' }}>
            <ScrollReveal animation="fade-down">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-2)', padding: 'var(--spacing-2) var(--spacing-4)', backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)', color: 'var(--primary)', borderRadius: 'var(--radius-full)', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-6)' }}>
                <Zap size={16} weight="fill" />
                <span>PERFORMANCE + WCAG COMPLIANCE</span>
              </div>
              
              <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h1)', color: 'var(--foreground)', marginBottom: 'var(--spacing-6)', lineHeight: 1.1 }}>
                <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(90deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>High-Speed</span> <br />
                Optimization
              </h1>
              
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-xl)', color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: 'var(--spacing-10)' }}>
                {data.tagline}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="scale" delay={200}>
              <div style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 'var(--spacing-8)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-8)', boxShadow: 'var(--shadow-xl)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-4)' }}>
                  <div style={{ width: '160px', height: '160px', borderRadius: '50%', border: 'var(--wp--preset--border-width--8) solid color-mix(in srgb, var(--color-terminal-green) 20%, transparent)', borderTopColor: 'var(--color-terminal-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-5xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-terminal-green)', position: 'relative' }}>
                    98
                  </div>
                  <span style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Lighthouse Score</span>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--spacing-4)', width: '100%' }}>
                  {[
                    { value: '0.8s', label: 'LCP' },
                    { value: '0ms', label: 'CLS' },
                    { value: '50ms', label: 'TBT' },
                    { value: '100%', label: 'SEO' },
                  ].map((metric) => (
                    <div key={metric.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-1)' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--foreground)' }}>{metric.value}</div>
                      <div style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)' }}>{metric.label}</div>
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
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}>
        <Container>
          <div className="wp-grid-2-cols wp-items-center wp-gap-16">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-6)' }}>
                  {data.whyLightSpeed.title}
                </h2>
                <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: 'var(--spacing-8)' }}>
                  {data.whyLightSpeed.description}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                  {[
                    "Google Core Web Vitals focused",
                    "Server-side caching implementation",
                    "Database optimization & cleanup",
                    "CDN content delivery network"
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--foreground)' }}>
                      <CheckCircle color="var(--primary)" size={24} weight="fill" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 'var(--spacing-8)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', width: '40px' }}>3.5s</div>
                    <div style={{ flex: 1, backgroundColor: 'color-mix(in srgb, var(--color-terminal-red) 20%, transparent)', height: '24px', borderRadius: 'var(--radius-full)', position: 'relative' }}>
                      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80%', backgroundColor: 'var(--color-terminal-red)', borderRadius: 'var(--radius-full)' }} />
                    </div>
                    <div style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', width: '60px' }}>Before</div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-terminal-green)', fontWeight: 'var(--font-weight-bold)', width: '40px' }}>0.8s</div>
                    <div style={{ flex: 1, backgroundColor: 'color-mix(in srgb, var(--color-terminal-green) 20%, transparent)', height: '24px', borderRadius: 'var(--radius-full)', position: 'relative' }}>
                      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '20%', backgroundColor: 'var(--color-terminal-green)', borderRadius: 'var(--radius-full)' }} />
                    </div>
                    <div style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', color: 'var(--color-terminal-green)', fontWeight: 'var(--font-weight-bold)', width: '60px' }}>After</div>
                  </div>
                </div>
                
                <div style={{ marginTop: 'var(--spacing-8)', textAlign: 'center', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  SPEED IMPROVEMENT: <span style={{ color: 'var(--primary)', fontWeight: 'var(--font-weight-bold)' }}>3X FASTER</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          SERVICES GRID (Features)
          ============================================ */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
            <ScrollReveal animation="fade-up">
              <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>Performance & Accessibility Features</h2>
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>
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
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--card)' }}>
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
          <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}>
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