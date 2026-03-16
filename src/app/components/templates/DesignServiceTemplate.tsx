/**
 * Design Service Template - Funky Redesign
 * 
 * Theme: "Pixel Perfect Blueprint" (Indigo/Cyan/White)
 * 
 * Features:
 * - Wireframe/Blueprint Hero
 * - Crosshair Grid Background
 * - 3D Layer Stack Visualization
 * - Process Timeline with connection lines
 * 
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - No inline Tailwind classes
 * - All styling via @/styles/templates/page-service-design.css
 * - Colors mapped to global semantic tokens for auto light/dark
 *
 * PATTERN COMPONENTS:
 * - ✅ FeatureList — Design Features section (glow variant, 3 columns)
 * - ✅ FunkyCTA — Final conversion section
 * - ✅ ServiceTestimonial — Testimonial section
 * - ✅ ServicePricingTimeline — Pricing & timeline section
 * - ✅ RelatedServicesInPhase — Related services navigation
 *
 * Sub-components:
 * - DesignLowerSections — Showcase, Services Grid, Process, Related,
 *   Pricing, CTA sections
 *
 * @migrated March 3, 2026 — Migrated inline design features grid to FeatureList component (~60 lines saved)
 */

/* Route-level CSS — optimized version loaded globally via index.css */
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { JourneyPhaseIndicator } from '../ui/JourneyPhaseIndicator';
import { 
  designServiceHero,
  designServiceOverview,
  designServiceProcess,
  designServiceCapabilities
} from '../../data/design-service-page';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { DesignLowerSections } from './design-service/DesignLowerSections';
import { 
  GridFour as Grid,
  CheckCircle,
  Stack as Layers,
} from '@phosphor-icons/react';

export function DesignServiceTemplate() {
  // Build a unified data object from imports
  const data = {
    tagline: designServiceHero.subtitle || "Strategic, user-focused design that drives results",
    whyLightSpeed: {
      description: designServiceOverview.description
    },
    process: {
      steps: designServiceProcess.steps.map((step, i) => ({
        id: `step-${i}`,
        title: step.title,
        description: step.description
      }))
    },
    relatedServices: [],
    cta: {
      title: "Ready to Elevate Your Brand?",
      description: "Let's create stunning designs that captivate your audience and drive conversions.",
      buttonText: "Start Design Project",
      buttonPage: "contact" as const
    }
  };

  return (
    <div className="wp-w-full wp-flex wp-flex-col">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Services', page: 'services' },
          { label: 'Web Design' },
        ]}
      />

      {/* Journey Phase Indicator */}
      <JourneyPhaseIndicator currentPhase="create" currentServicePage="design" />

      {/* ============================================
          HERO SECTION (The Blueprint)
          ============================================ */}
      <section className="service-hero">
        {/* Crosshairs & Grid Background */}
        <div className="service-hero__decor-grid" />
        <div className="service-hero__crosshair service-hero__crosshair--tl" />
        <div className="service-hero__crosshair service-hero__crosshair--tr" />
        <div className="service-hero__crosshair service-hero__crosshair--bl" />
        <div className="service-hero__crosshair service-hero__crosshair--br" />

        {/* Floating Wireframes */}
        <div style={{ position: 'absolute', top: '20%', right: '5%', width: '200px', padding: 'var(--spacing-4)', background: 'rgba(var(--card-rgb), 0.5)', backdropFilter: 'blur(10px)', border: '1px solid rgba(var(--primary-rgb), 0.2)', borderRadius: 'var(--radius-lg)', transform: 'perspective(1000px) rotateY(-15deg) rotateX(10deg)', opacity: 0.6, zIndex: 0, pointerEvents: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }} aria-hidden="true">
          <div style={{ width: '40%', height: '8px', background: 'rgba(var(--primary-rgb), 0.3)', borderRadius: 'var(--radius-full)' }} />
          <div style={{ width: '80%', height: '8px', background: 'rgba(var(--muted-foreground-rgb), 0.2)', borderRadius: 'var(--radius-full)' }} />
          <div style={{ width: '100%', height: '80px', background: 'rgba(var(--muted-foreground-rgb), 0.1)', borderRadius: 'var(--radius)' }} />
          <div style={{ width: '60%', height: '8px', background: 'rgba(var(--muted-foreground-rgb), 0.2)', borderRadius: 'var(--radius-full)' }} />
        </div>
        <div style={{ position: 'absolute', bottom: '15%', left: '5%', width: '250px', padding: 'var(--spacing-4)', background: 'rgba(var(--card-rgb), 0.5)', backdropFilter: 'blur(10px)', border: '1px solid rgba(var(--secondary-rgb), 0.2)', borderRadius: 'var(--radius-lg)', transform: 'perspective(1000px) rotateY(15deg) rotateX(5deg)', opacity: 0.6, zIndex: 0, pointerEvents: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }} aria-hidden="true">
          <div style={{ width: '100%', height: '120px', background: 'rgba(var(--muted-foreground-rgb), 0.1)', borderRadius: 'var(--radius)' }} />
          <div style={{ width: '90%', height: '8px', background: 'rgba(var(--muted-foreground-rgb), 0.2)', borderRadius: 'var(--radius-full)' }} />
          <div style={{ width: '70%', height: '8px', background: 'rgba(var(--muted-foreground-rgb), 0.2)', borderRadius: 'var(--radius-full)' }} />
          <div style={{ width: '50%', height: '8px', background: 'rgba(var(--secondary-rgb), 0.3)', borderRadius: 'var(--radius-full)' }} />
        </div>

        <div className="service-hero__content" style={{ padding: '0 var(--spacing-8)' }}>
          <ScrollReveal animation="fade-down">
            <div className="service-hero__badge service-hero__badge--outline" style={{ letterSpacing: 'var(--letter-spacing-wider)' }}>
              <Grid size={16} />
              PIXEL PERFECT ARCHITECTURE
            </div>

            <h1 className="service-hero__title service-hero__title--uppercase">
              We Craft <br />
              <span className="service-hero__gradient-text">Digital Masterpieces</span>
            </h1>

            <p className="service-hero__description service-hero__description--centered">
              {data.tagline}
            </p>

            <div className="wp-flex wp-justify-center wp-gap-4">
              <Button variant="default" size="lg" page="contact">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" page="portfolio-archive">
                Explore Portfolio
              </Button>
            </div>
          </ScrollReveal>
        </div>
        <ScrollDownArrow targetId="design-overview" />
      </section>

      {/* ============================================
          OVERVIEW (Why LightSpeed)
          ============================================ */}
      <section id="design-overview" className="service-section service-section--bg-card service-section--overflow-hidden">
        <Container>
          <div className="wp-grid-2-cols wp-items-center wp-gap-16">
            <ScrollReveal animation="fade-right">
              {/* Visual Stack */}
              <div style={{ position: 'relative', width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', width: '280px', height: '200px', backgroundColor: 'var(--background)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', transform: 'perspective(1000px) rotateX(60deg) rotateZ(-45deg) translateZ(-60px)', opacity: 0.4, boxShadow: 'var(--shadow-lg)' }} />
                <div style={{ position: 'absolute', width: '280px', height: '200px', backgroundColor: 'var(--background)', border: '1px solid var(--primary)', borderRadius: 'var(--radius-lg)', transform: 'perspective(1000px) rotateX(60deg) rotateZ(-45deg) translateZ(0px)', opacity: 0.7, boxShadow: '0 10px 30px rgba(var(--primary-rgb),0.1)' }} />
                <div style={{ position: 'absolute', width: '280px', height: '200px', backgroundColor: 'var(--background)', border: '2px solid var(--secondary)', borderRadius: 'var(--radius-lg)', transform: 'perspective(1000px) rotateX(60deg) rotateZ(-45deg) translateZ(60px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 40px rgba(var(--secondary-rgb),0.2)', padding: 'var(--spacing-6)', textAlign: 'center' }}>
                  <Layers size={48} style={{ color: 'var(--secondary)', marginBottom: 'var(--spacing-4)' }} />
                  <h3 className="service-section__title" style={{ margin: 0, fontSize: 'var(--text-h4)' }}>Design Systems</h3>
                  <p className="service-section__description" style={{ margin: 'var(--spacing-2) 0 0 0', fontSize: 'var(--text-sm)' }}>Scalable & Consistent</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div>
                <h2 className="service-section__title" style={{ marginBottom: 'var(--spacing-6)' }}>
                  Design that <span style={{ color: 'var(--primary)' }}>Works</span>
                </h2>
                <p className="service-section__description service-section__description--left" style={{ marginBottom: 'var(--spacing-8)', lineHeight: 'var(--line-height-comfortable)' }}>
                  {data.whyLightSpeed.description}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--spacing-4)' }}>
                  {[
                    'User-Centric Approach',
                    'Accessibility First (WCAG 2.1)',
                    'Conversion Optimized Layouts',
                    'Brand Consistency'
                  ].map((item, i) => (
                    <div key={i} className="perf-checklist__card">
                      <CheckCircle size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                      <span className="perf-checklist__card-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Lower sections extracted for file size compliance */}
      <DesignLowerSections
        processSteps={data.process.steps}
        relatedServices={data.relatedServices}
        cta={data.cta}
      />
    </div>
  );
}