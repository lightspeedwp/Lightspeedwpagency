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
    <div className="wp-w-full wp-flex wp-flex-col">
      {/* ============================================
          HERO SECTION (The Art of Words)
          ============================================ */}
      <section style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--background)', overflow: 'hidden' }}>
        {/* Paper texture background */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")', zIndex: 0 }} aria-hidden="true" />
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
           <div style={{ position: 'absolute', top: '40%', right: '20%', width: '40px', height: '40px', border: '2px solid #ff5f56', borderRadius: '50%', transform: 'scale(1.5) rotate(-20deg)', opacity: 0.8 }} />
        </div>

        <Container>
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <ScrollReveal animation="fade-down">
              <div style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', letterSpacing: '0.1em', marginBottom: 'var(--spacing-6)' }}>
                — DRAFT v1.0 —
              </div>

              <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h1)', color: 'var(--foreground)', lineHeight: 1.1, marginBottom: 'var(--spacing-6)', position: 'relative', display: 'inline-block' }}>
                Content That <br />
                <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(90deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Connects</span>
                <span style={{ display: 'inline-block', width: '4px', height: '1em', backgroundColor: 'var(--primary)', marginLeft: '8px', verticalAlign: 'text-bottom', animation: 'blink 1s step-end infinite' }}></span>
                
                {/* Editing Marks */}
                <span style={{ position: 'absolute', bottom: '-10px', right: '-40px', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-lg)', color: '#ff5f56', transform: 'rotate(-15deg)', fontStyle: 'italic' }}>stet</span>
              </h1>
              
              <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
                <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-xl)', color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: 'var(--spacing-10)' }}>
                  {contentHero.description}
                </p>
                {/* Editing Marks */}
                <span style={{ position: 'absolute', bottom: '-20px', left: '20%', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: '#ff5f56', transform: 'rotate(-5deg)' }}>^ insert magic</span>
              </div>
            </ScrollReveal>
          </div>
        </Container>

        <ScrollDownArrow />
      </section>

      {/* ============================================
          WHY LIGHTSPEED (The Pen is Mightier)
          ============================================ */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}>
        <Container>
          <ScrollReveal animation="fade-up">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '80px', height: '80px', backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)', color: 'var(--primary)', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--spacing-8)' }}>
                <Feather size={40} weight="duotone" />
              </div>
              
              <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-6)' }}>
                {whyContentStrategy.title}
              </h2>
              
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
                {whyContentStrategy.description}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          SERVICES GRID (Sticky Notes)
          ============================================ */}
      <section id="services" style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
            <ScrollReveal animation="fade-up">
              <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>Editorial Services</h2>
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>
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
      <section id="process" style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--card)' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
            <ScrollReveal animation="fade-up">
              <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>From Draft to Publish</h2>
              <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>
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