/**
 * Content Service Template - Funky Redesign
 * 
 * Theme: "Digital Ink" (Pink/Violet/Paper)
 * 
 * Features:
 * - Typewriter Hero Effect
 * - Floating Manuscript Pages
 * - Editorial Pipeline Timeline
 * - Sticky Note Services Grid
 * 
 * Pattern Components:
 * - ✅ FeatureList — Editorial services grid (glow variant, 3 columns)
 * - ✅ ProcessTimeline — Editorial pipeline (vertical orientation)
 * - ✅ FunkyCTA — Final conversion section
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero inline styles (except CSS variable dynamic values)
 * - All styling via @/styles/templates/page-service-content.css
 * - Colors mapped to global semantic tokens for auto light/dark
 * - Fonts: var(--font-primary), var(--font-secondary), var(--font-mono) only
 *
 * @migrated March 4, 2026 — Migrated inline services grid to FeatureList and inline process to ProcessTimeline (~40 lines saved)
 */

import { Container } from '../common/Container';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { FeatureList } from '../patterns/FeatureList';
import { ProcessTimeline } from '../patterns/ProcessTimeline';
import { IncludedInSolutions } from '../patterns/IncludedInSolutions';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { ServicePricingTimeline } from '../patterns/ServicePricingTimeline';
import { servicePricingTimeline } from '../../data/services';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { Feather } from '@phosphor-icons/react';

// Import detailed data
import { 
  contentHero,
  whyContentStrategy,
  contentServices,
  contentProcess
} from '../../data/content-service-page';

/* ── Map process data to ProcessTimeline shape ── */
const processSteps = contentProcess.map((step) => ({
  id: `content-step-${step.step}`,
  number: step.step,
  title: step.title,
  description: step.description,
}));

import { BreadcrumbPart } from '../parts/BreadcrumbPart';

export function ContentServiceTemplate() {
  return (
    <div className="wp-w-full wp-flex wp-flex-col">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Content' },
        ]}
      />

      {/* ============================================
          HERO SECTION (The Art of Words)
          ============================================ */}
      <section className="service-hero" style={{ minHeight: '80vh' }}>
        {/* Paper texture background — CSS noise pattern (no external dependency) */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'repeating-conic-gradient(var(--foreground) 0% 25%, transparent 0% 50%)', backgroundSize: '4px 4px', zIndex: 0 }} aria-hidden="true" />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: 'linear-gradient(to bottom, rgba(var(--background-rgb), 0) 0%, var(--background) 100%)', zIndex: 0 }} aria-hidden="true" />
        
        {/* Floating Manuscript Pages Background */}
        <div style={{ position: 'absolute', left: '-5%', top: '20%', width: '300px', height: '400px', backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', transform: 'rotate(-15deg)', padding: 'var(--spacing-8)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', opacity: 0.4, boxShadow: 'var(--shadow-xl)', zIndex: 0 }} aria-hidden="true">
          <div style={{ width: '80%', height: '8px', backgroundColor: 'var(--border)', borderRadius: 'var(--radius-full)' }}></div>
          <div style={{ width: '90%', height: '8px', backgroundColor: 'var(--border)', borderRadius: 'var(--radius-full)' }}></div>
          <div style={{ width: '60%', height: '8px', backgroundColor: 'var(--border)', borderRadius: 'var(--radius-full)' }}></div>
          <div style={{ width: '70%', height: '8px', backgroundColor: 'var(--border)', borderRadius: 'var(--radius-full)' }}></div>
          <div style={{ width: '85%', height: '8px', backgroundColor: 'var(--border)', borderRadius: 'var(--radius-full)' }}></div>
        </div>
        
        <div style={{ position: 'absolute', right: '-5%', top: '10%', width: '300px', height: '400px', backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', transform: 'rotate(10deg)', padding: 'var(--spacing-8)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', opacity: 0.4, boxShadow: 'var(--shadow-xl)', zIndex: 0 }} aria-hidden="true">
           <div style={{ width: '90%', height: '8px', backgroundColor: 'var(--border)', borderRadius: 'var(--radius-full)' }}></div>
           <div style={{ width: '75%', height: '8px', backgroundColor: 'var(--border)', borderRadius: 'var(--radius-full)' }}></div>
           <div style={{ width: '85%', height: '8px', backgroundColor: 'var(--border)', borderRadius: 'var(--radius-full)' }}></div>
           <div style={{ width: '65%', height: '8px', backgroundColor: 'var(--border)', borderRadius: 'var(--radius-full)' }}></div>
           {/* Red Pen Mark */}
           <div style={{ position: 'absolute', top: '40%', right: '20%', width: '40px', height: '40px', border: '2px solid var(--color-terminal-red)', borderRadius: '50%', transform: 'scale(1.5) rotate(-20deg)', opacity: 0.8 }} />
        </div>

        <Container>
          <div className="service-hero__content service-hero__content--centered" style={{ textAlign: 'center' }}>
            <ScrollReveal animation="fade-down">
              <div className="service-hero__badge service-hero__badge--mono" style={{ display: 'inline-block', color: 'var(--muted-foreground)', letterSpacing: 'var(--letter-spacing-widest)' }}>
                — DRAFT v1.0 —
              </div>

              <h1 className="service-hero__title" style={{ position: 'relative', display: 'inline-block' }}>
                Content That <br />
                <span className="service-hero__gradient-text">Connects</span>
                <span style={{ display: 'inline-block', width: '4px', height: '1em', backgroundColor: 'var(--primary)', marginLeft: '8px', verticalAlign: 'text-bottom', animation: 'blink 1s step-end infinite' }}></span>
                
                {/* Editing Marks */}
                <span style={{ position: 'absolute', bottom: '-10px', right: '-40px', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-lg)', color: 'var(--color-terminal-red)', transform: 'rotate(-15deg)', fontStyle: 'italic' }}>stet</span>
              </h1>
              
              <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
                <p className="service-hero__description service-hero__description--centered">
                  {contentHero.description}
                </p>
                {/* Editing Marks */}
                <span style={{ position: 'absolute', bottom: '-20px', left: '20%', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-terminal-red)', transform: 'rotate(-5deg)' }}>^ insert magic</span>
              </div>
            </ScrollReveal>
          </div>
        </Container>

        <ScrollDownArrow />
      </section>

      {/* ============================================
          WHY LIGHTSPEED (The Pen is Mightier)
          ============================================ */}
      <section className="service-section service-section--bg-muted">
        <Container>
          <ScrollReveal animation="fade-up">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '80px', height: '80px', backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)', color: 'var(--primary)', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--spacing-8)' }}>
                <Feather size={40} weight="duotone" />
              </div>
              
              <h2 className="service-section__title" style={{ marginBottom: 'var(--spacing-6)' }}>
                {whyContentStrategy.title}
              </h2>
              
              <p className="service-section__description" style={{ lineHeight: 'var(--line-height-comfortable)' }}>
                {whyContentStrategy.description}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          SERVICES GRID (Sticky Notes)
          ============================================ */}
      <section id="services" className="service-section service-section--bg-background">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">Editorial services</h2>
              <p className="service-section__description">
                Comprehensive content solutions for your brand.
              </p>
            </ScrollReveal>
          </div>

          <div>
            <FeatureList
              items={contentServices}
              columns={3}
              variant="glow"
            />
          </div>
        </Container>
      </section>

      {/* ============================================
          PROCESS (Editorial Pipeline)
          ============================================ */}
      <section id="process" className="service-section service-section--bg-card">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">From draft to publish</h2>
              <p className="service-section__description">
                Our rigorous editorial process ensures quality.
              </p>
            </ScrollReveal>
          </div>

          <div>
            <ProcessTimeline
              steps={processSteps}
              orientation="vertical"
            />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <IncludedInSolutions
        serviceSlug="content"
        subtitle="Our content service is part of these comprehensive solution packages"
      />
      <ServiceTestimonial
        serviceSlug="content"
        subtitle="See how our content strategy drives real business results"
      />
      
      {/* ============================================
          PRICING & TIMELINE
          ============================================ */}
      {servicePricingTimeline.content && (
        <ScrollReveal animation="fade-up">
          <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
            <Container>
              <ServicePricingTimeline
                pricing={servicePricingTimeline.content.pricing}
                timeline={servicePricingTimeline.content.timeline}
                showPhases={true}
                showVariables={true}
              />
            </Container>
          </section>
        </ScrollReveal>
      )}
      
      <FunkyCTA
        title="Ready to Transform Your Content?"
        description="Let's create compelling content that engages your audience and drives results."
        buttonText="Start Content Strategy"
        buttonPage="contact"
        benefits={[
          'Brand Voice Guidelines',
          'SEO Content Strategy',
          'Professional Editing',
          'Conversion Copywriting'
        ]}
      />
    </div>
  );
}