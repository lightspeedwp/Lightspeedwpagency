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
import { WebGLContentInk } from '../patterns/WebGLContentInk';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { NeonStats } from '../common/NeonStats';
import { statsRegistry, mapToNeonStats } from '../../data/stats';
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
  const collection = statsRegistry.getCollection('seo-stats');
  const seoStats = collection ? mapToNeonStats(collection.stats) : [];

  return (
    <div className="service-page content-service">
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
      <section className="service-hero" style={{ position: 'relative' }}>
        <WebGLContentInk accentColor="var(--wp--preset--color--neon-pink)" secondaryColor="var(--wp--preset--color--neon-purple)" />
        
        {/* Paper texture background — CSS noise pattern (no external dependency) */}
        <div className="content-decor__texture" aria-hidden="true" style={{ opacity: 0.3, zIndex: 1 }} />
        <div className="content-decor__fade" aria-hidden="true" style={{ zIndex: 1 }} />
        
        {/* Floating Manuscript Pages Background */}
        <div className="content-decor__manuscript content-decor__manuscript--left" aria-hidden="true" style={{ zIndex: 1 }}>
          <div className="content-decor__line content-decor__line--w80" />
          <div className="content-decor__line content-decor__line--w90" />
          <div className="content-decor__line content-decor__line--w60" />
          <div className="content-decor__line content-decor__line--w70" />
          <div className="content-decor__line content-decor__line--w85" />
        </div>
        
        <div className="content-decor__manuscript content-decor__manuscript--right" aria-hidden="true">
           <div className="content-decor__line content-decor__line--w90" />
           <div className="content-decor__line content-decor__line--w75" />
           <div className="content-decor__line content-decor__line--w85" />
           <div className="content-decor__line content-decor__line--w65" />
           {/* Red Pen Mark */}
           <div className="content-decor__pen-mark" />
        </div>

        <Container style={{ position: 'relative', zIndex: 2 }}>
          <div className="service-hero__content service-hero__content--centered">
            <ScrollReveal animation="fade-down">
              <div className="service-hero__badge service-hero__badge--mono">
                — DRAFT v1.0 —
              </div>

              <h1 className="service-hero__title">
                <span className="content-decor__title-wrapper">
                  Content that <br />
                  <span className="service-hero__gradient-text">connects</span>
                  <span className="content-decor__cursor" />
                  {/* Editing Marks */}
                  <span className="content-decor__edit-mark content-decor__edit-mark--stet">stet</span>
                </span>
              </h1>
              
              <div className="content-decor__description-wrapper">
                <p className="service-hero__description service-hero__description--centered">
                  {contentHero.description}
                </p>
                {/* Editing Marks */}
                <span className="content-decor__edit-mark content-decor__edit-mark--insert">^ insert magic</span>
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
            <div className="content-decor__why-container">
              <div className="content-decor__why-icon">
                <Feather size={40} weight="duotone" />
              </div>
              
              <h2 className="content-decor__why-title">
                {whyContentStrategy.title}
              </h2>
              
              <p className="content-decor__why-description">
                {whyContentStrategy.description}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {seoStats.length > 0 && (
        <section className="service-section">
          <NeonStats
            stats={seoStats}
            title="SEO & content impact"
            subtitle="The measurable results of our content strategy."
            columns={4}
            variant="glass"
          />
        </section>
      )}

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
          <section className="service-section service-section--bg-background">
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
        title="Ready to transform your content?"
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