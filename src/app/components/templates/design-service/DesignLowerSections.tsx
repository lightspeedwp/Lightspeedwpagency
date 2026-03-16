/**
 * Design Service — Lower Sections
 *
 * Showcase (Portfolio Preview), Services Grid, Process (Creative Flow),
 * Related Services, Pricing, and CTA sections.
 *
 * Extracted from DesignServiceTemplate.tsx for file size compliance.
 *
 * @see /src/styles/templates/page-service-design.css
 */

import { Container } from '../../common/Container';
import { FunkyCTA } from '../../patterns/FunkyCTA';
import { FeatureList } from '../../patterns/FeatureList';
import { RelatedServicesGrid } from '../../patterns/RelatedServicesGrid';
import { RelatedServicesInPhase } from '../../patterns/RelatedServicesInPhase';
import { IncludedInSolutions } from '../../patterns/IncludedInSolutions';
import { ServiceTestimonial } from '../../patterns/ServiceTestimonial';
import { ServicePricingTimeline } from '../../patterns/ServicePricingTimeline';
import { ScrollReveal } from '../../../hooks/useScrollReveal';
import { servicePricingTimeline } from '../../../data/services';
import { designServiceOverview } from '../../../data/design-service-page';

interface DesignLowerSectionsProps {
  processSteps: { id: string; title: string; description: string }[];
  relatedServices: any[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonPage: 'contact';
  };
}

const showcaseProjects = [
  {
    name: 'E-Commerce Redesign',
    tag: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1604074131228-9d48b811bd80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwJTIwZGVza3RvcHxlbnwxfHx8fDE3NzE0NTU0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Brand Identity System',
    tag: 'Branding',
    image: 'https://images.unsplash.com/photo-1759390304277-df4f95509186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJyYW5kaW5nJTIwZWRpdGlvbiUyMGRlc2lnbnxlbnwxfHx8fDE3NzE0ODY2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Mobile App Interface',
    tag: 'App Design',
    image: 'https://images.unsplash.com/photo-1565268878251-eb6848dc481c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbiUyMHdpcmVmcmFtZXxlbnwxfHx8fDE3NzE0ODY2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function DesignLowerSections({
  processSteps,
  relatedServices,
  cta,
}: DesignLowerSectionsProps) {
  return (
    <>
      {/* ============================================
          SHOWCASE (Portfolio Preview)
          ============================================ */}
      <section className="service-section service-section--bg-background">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-section__header">
              <h2 className="service-section__title">
                Recent <span style={{ color: 'var(--secondary)' }}>Work</span>
              </h2>
              <p className="service-section__description">
                A glimpse at some of our latest design projects.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-8)' }}>
            {showcaseProjects.map((project, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', aspectRatio: '4/3', border: '1px solid var(--border)', cursor: 'pointer' }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'var(--spacing-6)', background: 'var(--gradient-overlay-dark)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', pointerEvents: 'none' }}>
                    <span style={{ display: 'inline-block', padding: 'var(--spacing-1) var(--spacing-3)', backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius-full)', fontSize: 'var(--text-xs)', fontWeight: 'var(--font-weight-bold)', width: 'fit-content' }}>{project.tag}</span>
                    <span style={{ color: 'var(--primary-foreground)', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h4)', fontWeight: 'var(--font-weight-bold)' }}>{project.name}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          SERVICES GRID
          ============================================ */}
      <section className="service-section service-section--bg-muted">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-section__header">
              <h2 className="service-section__title">Our Creative Suite</h2>
              <p className="service-section__description">
                From branding to full-scale UI/UX design, we cover every pixel.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList
              items={designServiceOverview.features.map((feat) => ({
                icon: feat.icon as any,
                title: feat.title,
                description: feat.description,
              }))}
              columns={3}
              variant="glow"
              iconSize="lg"
              iconStyle="rounded"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          PROCESS (Creative Flow)
          ============================================ */}
      <section className="service-section service-section--bg-background">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">The Creative Process</h2>
              <p className="service-section__description">
                How we take your vision from concept to reality.
              </p>
            </ScrollReveal>
          </div>

          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ position: 'absolute', top: '24px', bottom: '24px', left: '24px', width: '2px', backgroundColor: 'var(--border)', zIndex: 0 }} aria-hidden="true" />

            {processSteps.map((step, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: 'var(--spacing-8)' }}>
                  <div style={{ flexShrink: 0, width: '48px', height: '48px', backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-bold)', border: '4px solid var(--background)', boxShadow: '0 0 0 1px var(--border)' }}>
                    {index + 1}
                  </div>
                  <div style={{ paddingTop: 'var(--spacing-2)' }}>
                    <h3 style={{ margin: '0 0 var(--spacing-2) 0', fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h4)', color: 'var(--foreground)' }}>
                      {step.title}
                    </h3>
                    <p className="service-body-text" style={{ lineHeight: 'var(--line-height-comfortable)' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      {relatedServices && relatedServices.length > 0 && (
        <RelatedServicesGrid
          title="Related services"
          subtitle="Pair design with these services for a complete digital experience"
          services={relatedServices}
        />
      )}
      <IncludedInSolutions
        serviceSlug="design"
        subtitle="Our design service is bundled into these complete solution packages"
      />
      <ServiceTestimonial
        serviceSlug="design"
        subtitle="Hear from clients who transformed their brand with our design expertise"
      />

      {/* ============================================
          PRICING & TIMELINE
          ============================================ */}
      {servicePricingTimeline.design && (
        <ScrollReveal animation="fade-up">
          <section style={{ padding: 'var(--spacing-16) 0', backgroundColor: 'var(--muted)' }}>
            <Container>
              <ServicePricingTimeline
                pricing={servicePricingTimeline.design.pricing}
                timeline={servicePricingTimeline.design.timeline}
                showPhases={true}
                showVariables={true}
              />
            </Container>
          </section>
        </ScrollReveal>
      )}

      {/* Related Services in Create Phase */}
      <RelatedServicesInPhase
        currentPhase="create"
        currentServicePage="design"
      />

      <FunkyCTA
        title={cta.title}
        description={cta.description}
        buttonText={cta.buttonText}
        buttonPage={cta.buttonPage}
        benefits={[
          'User-centric design methodology',
          'WCAG 2.1 AA accessibility baked in',
          'Conversion-optimised layouts',
          'Full design system handoff',
        ]}
      />
    </>
  );
}
