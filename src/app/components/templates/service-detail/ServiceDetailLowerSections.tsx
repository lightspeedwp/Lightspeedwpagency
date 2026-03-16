/**
 * Service Detail — Lower Sections
 *
 * Process steps, sub-services, why choose us, benefits/deliverables,
 * related services, solutions, testimonials, case studies, FAQ, and CTA.
 *
 * Extracted from ServiceDetailTemplate.tsx for file size compliance.
 *
 * @see /src/styles/templates/service-detail.css
 * @see /src/app/data/service-page.ts
 */

import { Container } from '../../common/Container';
import { Section } from '../../common/Section';
import { FAQSection } from '../../patterns/FAQSection';
import { FunkyCTA } from '../../patterns/FunkyCTA';
import { FeatureList } from '../../patterns/FeatureList';
import { CheckList } from '../../patterns/CheckList';
import { RelatedServices } from '../../patterns/RelatedServices';
import { IncludedSolutions } from '../../patterns/IncludedSolutions';
import { ServiceTestimonials } from '../../patterns/ServiceTestimonials';
import { ServiceCaseStudies } from '../../patterns/ServiceCaseStudies';
import { ArrowRight, Clock } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { ScrollReveal } from '../../../hooks/useScrollReveal';
import { slugToPath } from '../../../utils/route-map';
import {
  servicePageProcess,
  servicePageSubServices,
  servicePageWhyChoose,
  servicePageBenefits,
  servicePageDeliverables,
  servicePageRelated,
  servicePageFAQs,
  servicePageCTA,
} from '../../../data/service-page';

interface ServiceDetailLowerSectionsProps {
  slug: string;
}

export function ServiceDetailLowerSections({ slug }: ServiceDetailLowerSectionsProps) {
  return (
    <>
      {/* ============================================
          PROCESS — Numbered Steps
          ============================================ */}
      <Section spacing="xl" className="service-detail__process-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-detail__section-header">
              <h2 className="service-detail__title">Our Development Process</h2>
              <p className="service-detail__description">
                From discovery to launch, we follow a proven process
              </p>
            </div>
          </ScrollReveal>

          <div className="service-detail__process-grid">
            {servicePageProcess.map((step, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="service-detail__process-card">
                  <div className="service-detail__process-number">
                    {step.number}
                  </div>
                  <h3 className="service-detail__process-title">{step.title}</h3>
                  {step.duration && (
                    <div className="service-detail__process-duration">
                      <Clock size={14} />
                      {step.duration}
                    </div>
                  )}
                  <p className="service-detail__process-desc">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============================================
          SUB-SERVICES
          ============================================ */}
      <Section spacing="xl" className="service-detail__services-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-detail__section-header">
              <h2 className="service-detail__title">Specialized Services</h2>
              <p className="service-detail__description">
                Deep expertise in specific WordPress development areas
              </p>
            </div>
          </ScrollReveal>

          <div className="service-detail__sub-services-grid">
            {servicePageSubServices.map((subService, index) => {
              const Icon = subService.icon;
              return (
                <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                  <div className="service-detail__package-card">
                    <div className="service-detail__service-icon-wrapper">
                      <Icon size={32} />
                    </div>
                    <h3 className="service-detail__service-title">
                      {subService.title}
                    </h3>
                    <p className="service-detail__service-desc">
                      {subService.description}
                    </p>
                    <CheckList items={subService.features} variant="compact" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ============================================
          WHY CHOOSE LIGHTSPEED
          ============================================ */}
      <Section spacing="xl" className="service-detail__overview-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-detail__section-header">
              <h2 className="service-detail__title">Why Choose LightSpeed</h2>
              <p className="service-detail__description">
                What sets us apart from other WordPress development agencies
              </p>
            </div>
          </ScrollReveal>

          <FeatureList
            items={servicePageWhyChoose}
            columns={3}
            variant="glow"
            iconStyle="rounded"
          />
        </Container>
      </Section>

      {/* ============================================
          BENEFITS & DELIVERABLES
          ============================================ */}
      <Section spacing="xl" className="service-detail__benefits-section">
        <Container>
          <div className="service-detail__benefits-grid">
            {/* Benefits */}
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="service-detail__section-subtitle">
                  Service Benefits
                </h2>
                <CheckList items={servicePageBenefits} />
              </div>
            </ScrollReveal>

            {/* Deliverables */}
            <ScrollReveal animation="fade-left" delay={150}>
              <div>
                <h2 className="service-detail__section-subtitle">
                  What You'll Receive
                </h2>
                <CheckList items={servicePageDeliverables} />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ============================================
          RELATED SERVICES — <Link> navigation
          ============================================ */}
      <Section spacing="xl" className="service-detail__related-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-detail__section-header">
              <h2 className="service-detail__title">Related Services</h2>
              <p className="service-detail__description">
                Complementary services to enhance your WordPress website
              </p>
            </div>
          </ScrollReveal>

          <div className="service-detail__related-grid">
            {servicePageRelated.map((relatedService, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <Link
                  to={slugToPath(relatedService.page) || `/services/${relatedService.page}`}
                  className="service-detail__related-card"
                  aria-label={`Learn more about ${relatedService.title}`}
                >
                  <h3 className="service-detail__related-title">
                    {relatedService.title}
                  </h3>
                  <p className="service-detail__related-desc">
                    {relatedService.description}
                  </p>
                  <span className="service-detail__related-link">
                    Learn More <ArrowRight size={16} />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============================================
          INCLUDED IN SOLUTIONS
          ============================================ */}
      <Section spacing="lg">
        <Container>
          <IncludedSolutions
            serviceSlug={slug}
            title="Included in These Solutions"
            description="This service is a core component of these comprehensive solutions."
          />
        </Container>
      </Section>

      {/* ============================================
          RELATED SERVICES
          ============================================ */}
      <Section spacing="lg">
        <Container>
          <RelatedServices
            serviceSlug={slug}
            title="Services that work great together"
            description="These complementary services enhance and extend this offering."
          />
        </Container>
      </Section>

      {/* ============================================
          CLIENT TESTIMONIALS
          ============================================ */}
      <Section spacing="lg">
        <Container>
          <ServiceTestimonials
            serviceSlug={slug}
            title="What our clients say"
            description="Real feedback from real clients who've experienced our services."
            limit={3}
          />
        </Container>
      </Section>

      {/* ============================================
          CASE STUDIES
          ============================================ */}
      <Section spacing="lg">
        <Container>
          <ServiceCaseStudies
            serviceSlug={slug}
            title="Real projects, real results"
            description="See how we've helped clients succeed with this service."
            limit={2}
          />
        </Container>
      </Section>

      {/* ============================================
          FAQ
          ============================================ */}
      <ScrollReveal animation="fade-up">
        <FAQSection
          title="Frequently asked questions"
          description="Common questions about WordPress development"
          faqs={servicePageFAQs}
          variant="muted"
        />
      </ScrollReveal>

      {/* ============================================
          CTA — FunkyCTA
          ============================================ */}
      <FunkyCTA
        title={servicePageCTA.title}
        description={servicePageCTA.description}
        buttonText={servicePageCTA.buttons[0].text}
        buttonPage={servicePageCTA.buttons[0].page}
        benefits={[
          'Expert WordPress developers',
          'Transparent project management',
          'Fixed-price project quotes',
          'Post-launch support included',
          'WCAG 2.1 AA compliant builds',
        ]}
      />
    </>
  );
}
