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
        <div className="design-decor__wireframe design-decor__wireframe--right" aria-hidden="true">
          <div className="design-decor__bar design-decor__bar--primary design-decor__bar--w40" />
          <div className="design-decor__bar design-decor__bar--w80" />
          <div className="design-decor__bar design-decor__bar--block design-decor__bar--w100" />
          <div className="design-decor__bar design-decor__bar--w60" />
        </div>
        <div className="design-decor__wireframe design-decor__wireframe--left" aria-hidden="true">
          <div className="design-decor__bar design-decor__bar--block-lg design-decor__bar--w100" />
          <div className="design-decor__bar design-decor__bar--w90" />
          <div className="design-decor__bar design-decor__bar--w70" />
          <div className="design-decor__bar design-decor__bar--secondary design-decor__bar--w50" />
        </div>

        <div className="service-hero__content service-hero__content--centered">
          <ScrollReveal animation="fade-down">
            <div className="service-hero__badge service-hero__badge--outline">
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
              <div className="design-decor__stack">
                <div className="design-decor__layer design-decor__layer--back" />
                <div className="design-decor__layer design-decor__layer--mid" />
                <div className="design-decor__layer design-decor__layer--front">
                  <Layers size={48} className="design-decor__layer-icon" />
                  <h3 className="design-decor__layer-title">Design systems</h3>
                  <p className="design-decor__layer-subtitle">Scalable & consistent</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div>
                <h2 className="design-decor__overview-title">
                  Design that <span className="design-decor__overview-highlight">works</span>
                </h2>
                <p className="design-decor__overview-description">
                  {data.whyLightSpeed.description}
                </p>
                <div className="design-decor__checklist-grid">
                  {[
                    'User-centric approach',
                    'Accessibility first (WCAG 2.1)',
                    'Conversion optimized layouts',
                    'Brand consistency'
                  ].map((item, i) => (
                    <div key={i} className="perf-checklist__card">
                      <CheckCircle size={20} className="design-decor__checklist-icon" />
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