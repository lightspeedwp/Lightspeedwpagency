/**
 * Development Service — Lower Sections
 *
 * Capabilities (FeatureList), Execution Pipeline (ProcessTimeline),
 * Related Services, Pricing, and CTA sections.
 *
 * Extracted from DevelopmentServiceTemplate.tsx for file size compliance.
 *
 * @see /src/styles/templates/page-service-development.css
 */

import { Container } from '../../common/Container';
import { FunkyCTA } from '../../patterns/FunkyCTA';
import { FeatureList } from '../../patterns/FeatureList';
import { ProcessTimeline } from '../../patterns/ProcessTimeline';
import { RelatedServicesInPhase } from '../../patterns/RelatedServicesInPhase';
import { IncludedInSolutions } from '../../patterns/IncludedInSolutions';
import { ServiceTestimonial } from '../../patterns/ServiceTestimonial';
import { ServicePricingTimeline } from '../../patterns/ServicePricingTimeline';
import { ScrollReveal } from '../../../hooks/useScrollReveal';
import { servicePricingTimeline } from '../../../data/services';
import {
  developmentServiceOverview,
  developmentServices as developmentServiceFeatures,
  developmentProcess,
} from '../../../data/development-service-page';

interface DevelopmentLowerSectionsProps {
  relatedServices: any[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonPage: 'contact';
  };
}

export function DevelopmentLowerSections({
  relatedServices,
  cta,
}: DevelopmentLowerSectionsProps) {
  return (
    <>
      {/* ============================================
          SERVICES GRID (Tech Stack)
          ============================================ */}
      <section className="dev-service__section">
        <Container>
          <div className="dev-service__capabilities-header">
            <ScrollReveal animation="fade-up">
              <h2 className="dev-service__heading">
                <span className="dev-service__code-tag">{'<'}</span>Capabilities<span className="dev-service__code-tag">{'/>'}</span>
              </h2>
              <p className="dev-service__description">
                Full-stack expertise for modern web applications.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList
              items={developmentServiceFeatures.map((service) => ({
                icon: service.icon,
                title: service.title,
                description: service.description,
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
          PROCESS (Execution Pipeline)
          ============================================ */}
      <section className="dev-service__section dev-service__section--alt">
        <Container>
          <ScrollReveal animation="fade-up">
            <ProcessTimeline
              heading="Execution Pipeline"
              description="Our systematic approach to deployment."
              steps={developmentProcess.map((step, i) => ({
                id: step.slug || `step-${i}`,
                number: i + 1,
                title: step.title,
                description: step.description,
                icon: step.icon,
              }))}
              showNumbers={true}
              orientation="vertical"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      {relatedServices && relatedServices.length > 0 && (
        <RelatedServicesInPhase
          title="Related services"
          subtitle="Extend your build with these complementary services"
          services={relatedServices}
        />
      )}
      <IncludedInSolutions
        serviceSlug="development"
        subtitle="Our development service is included in these complete solution packages"
      />
      <ServiceTestimonial
        serviceSlug="development"
        subtitle="Hear from clients who built exceptional WordPress experiences with us"
      />

      {/* ============================================
          PRICING & TIMELINE
          ============================================ */}
      {servicePricingTimeline.development && (
        <ScrollReveal animation="fade-up">
          <section className="dev-service__section">
            <Container>
              <ServicePricingTimeline
                pricing={servicePricingTimeline.development.pricing}
                timeline={servicePricingTimeline.development.timeline}
                showPhases={true}
                showVariables={true}
              />
            </Container>
          </section>
        </ScrollReveal>
      )}

      {/* Related Services in Build Phase */}
      <RelatedServicesInPhase
        currentPhase="build"
        currentServicePage="development"
      />

      <FunkyCTA
        title={cta.title}
        description={cta.description}
        buttonText={cta.buttonText}
        buttonPage={cta.buttonPage}
        benefits={[
          'Clean, documented codebase',
          'Automated CI/CD pipelines',
          'Enterprise-grade security',
          '99.9% uptime guarantee',
          'Ongoing maintenance & support',
        ]}
      />
    </>
  );
}
