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

export function ContentServiceTemplate() {
  return (
    <div className="content-page">
      {/* ============================================
          HERO SECTION (The Art of Words)
          ============================================ */}
      <section className="content-page__hero">
        {/* Floating Manuscript Pages Background */}
        <div className="content-page__floating-page content-page__floating-page--left" aria-hidden="true">
          <div className="content-page__line content-page__line--long"></div>
          <div className="content-page__line content-page__line--long"></div>
          <div className="content-page__line content-page__line--short"></div>
          <div className="content-page__line content-page__line--medium"></div>
          <div className="content-page__line content-page__line--long"></div>
        </div>
        
        <div className="content-page__floating-page content-page__floating-page--right" aria-hidden="true">
           <div className="content-page__line content-page__line--long"></div>
           <div className="content-page__line content-page__line--medium"></div>
           <div className="content-page__line content-page__line--long"></div>
           <div className="content-page__line content-page__line--long"></div>
           {/* Red Pen Mark — uses BEM class */}
           <div className="content-page__pen-mark" />
        </div>

        <Container>
          <div className="content-page__hero-content">
            <ScrollReveal animation="fade-down">
              <div className="content-page__draft-badge">
                — DRAFT v1.0 —
              </div>

              <h1 className="content-page__title">
                Content That <br />
                <span className="content-page__highlight">Connects</span>
                <span className="content-page__cursor"></span>
                
                {/* Editing Marks — uses BEM class */}
                <span className="content-page__edit-mark content-page__edit-mark--stet">stet</span>
              </h1>
              
              <div className="content-page__description-wrapper">
                <p className="content-page__description">
                  {contentHero.description}
                </p>
                {/* Editing Marks — uses BEM class */}
                <span className="content-page__edit-mark content-page__edit-mark--insert">^ insert magic</span>
              </div>
            </ScrollReveal>
          </div>
        </Container>

        <ScrollDownArrow />
      </section>

      {/* ============================================
          WHY LIGHTSPEED (The Pen is Mightier)
          ============================================ */}
      <section className="content-page__why">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="content-page__why-content">
              <div className="content-page__icon-circle">
                <Feather size={32} />
              </div>
              
              <h2 className="content-page__section-title">
                {whyContentStrategy.title}
              </h2>
              
              <p className="content-page__section-desc">
                {whyContentStrategy.description}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          SERVICES GRID (Sticky Notes)
          ============================================ */}
      <section className="content-page__services" id="services">
        <Container>
          <div className="content-page__text-center">
            <ScrollReveal animation="fade-up">
              <h2 className="content-page__section-title">Editorial Services</h2>
              <p className="content-page__section-desc content-page__max-w-2xl">
                Comprehensive content solutions for your brand.
              </p>
            </ScrollReveal>
          </div>

          <div className="content-page__services-grid">
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
      <section className="content-page__process" id="process">
        <Container>
          <div className="content-page__process-header">
            <ScrollReveal animation="fade-up">
              <h2 className="content-page__section-title">From Draft to Publish</h2>
              <p className="content-page__section-desc content-page__max-w-2xl">
                Our rigorous editorial process ensures quality.
              </p>
            </ScrollReveal>
          </div>

          <div className="content-page__process-timeline">
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
          <section className="content-service__pricing-section">
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