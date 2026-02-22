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
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero inline styles (except CSS variable dynamic values)
 * - All styling via @/styles/templates/page-service-content.css
 * - Colors mapped to global semantic tokens for auto light/dark
 * - Fonts: var(--font-primary), var(--font-secondary), var(--font-mono) only
 */

import { Container } from '../common/Container';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { RelatedServicesGrid } from '../patterns/RelatedServicesGrid';
import { IncludedInSolutions } from '../patterns/IncludedInSolutions';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { 
  PenTool, 
  Edit3, 
  FileText, 
  BookOpen, 
  Feather, 
  Layout
} from 'lucide-react';

// Import detailed data
import { contentServiceDetailed } from '../../data/services-detailed';

export function ContentServiceTemplate() {
  const data = contentServiceDetailed;

  // Icon mapping for Sub-services
  const serviceIcons: Record<string, any> = {
    'content-strategy': Layout,
    'copywriting': PenTool,
    'blog-content': BookOpen,
    'editing': Edit3
  };

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
                  {data.tagline}
                </p>
                {/* Editing Marks — uses BEM class */}
                <span className="content-page__edit-mark content-page__edit-mark--insert">^ insert magic</span>
              </div>
            </ScrollReveal>
          </div>
        </Container>
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
                {data.whyLightSpeed.title}
              </h2>
              
              <p className="content-page__section-desc">
                {data.whyLightSpeed.description}
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
            {data.subServices.map((service, index) => {
              const Icon = serviceIcons[service.id] || FileText;
              return (
                <ScrollReveal key={service.id} animation="fade-up" delay={index * 50}>
                  <div className="content-page__service-card">
                    <div className="content-page__service-icon">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="content-page__service-title">{service.title}</h3>
                    <p className="content-page__service-desc">{service.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
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
            {data.process.steps.map((step, index) => (
              <ScrollReveal key={step.id || index} animation="fade-right" delay={index * 100}>
                <div className="content-page__process-step">
                  <div className="content-page__step-marker">
                    {step.number}
                  </div>
                  <div className="content-page__step-content">
                    <h4 className="content-page__step-title">{step.title}</h4>
                    <p className="content-page__step-desc">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <RelatedServicesGrid
          title="Related Services"
          subtitle="Amplify your content with these complementary services"
          services={data.relatedServices}
        />
      )}
      <IncludedInSolutions
        serviceSlug="content"
        subtitle="Our content service is part of these comprehensive solution packages"
      />
      <ServiceTestimonial
        serviceSlug="content"
        subtitle="See how our content strategy drives real business results"
      />
      <FunkyCTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonPage={data.cta.buttonPage}
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