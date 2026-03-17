/**
 * Design Service — Lower Sections
 *
 * Showcase (Portfolio Preview), Services Grid, Process (Creative Flow),
 * Related Services, Pricing, and CTA sections.
 *
 * Extracted from DesignServiceTemplate.tsx for file size compliance.
 *
 * @see /src/styles/templates/page-service-design.css
 * @bem March 17, 2026 — Migrated ~8 inline style blocks to BEM classes
 */

import '../../../../styles/templates/design-lower-sections.css';
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
      <section className="service-section service-section--bg-background" aria-label="Recent design work">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-section__header">
              <h2 className="service-section__title">
                Recent <span className="design-lower__title-accent">work</span>
              </h2>
              <p className="service-section__description">
                A glimpse at some of our latest design projects.
              </p>
            </div>
          </ScrollReveal>

          <div className="design-lower__showcase-grid">
            {showcaseProjects.map((project, index) => (
              <ScrollReveal key={project.name} animation="fade-up" delay={index * 100}>
                <div className="design-lower__showcase-card">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="design-lower__showcase-image"
                  />
                  <div className="design-lower__showcase-overlay">
                    <span className="design-lower__showcase-tag">{project.tag}</span>
                    <span className="design-lower__showcase-name">{project.name}</span>
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
      <section className="service-section service-section--bg-muted" aria-label="Our creative suite">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-section__header">
              <h2 className="service-section__title">Our creative suite</h2>
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
      <section className="service-section service-section--bg-background" aria-label="Design process">
        <Container>
          <div className="service-section__header">
            <ScrollReveal animation="fade-up">
              <h2 className="service-section__title">The creative process</h2>
              <p className="service-section__description">
                How we take your vision from concept to reality.
              </p>
            </ScrollReveal>
          </div>

          <div className="design-lower__process-wrapper">
            <div className="design-lower__process-line" aria-hidden="true" />

            {processSteps.map((step, index) => (
              <ScrollReveal key={step.id} animation="fade-up" delay={index * 80}>
                <div className="design-lower__step-row">
                  <div className="design-lower__step-number">
                    {index + 1}
                  </div>
                  <div className="design-lower__step-content">
                    <h3 className="design-lower__step-title">
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
          <section className="design-lower__pricing-section">
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
