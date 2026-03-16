/**
 * Security Service — Lower Sections
 *
 * Defense Protocols, System Scan (Process), Stats, FAQ,
 * Related Services, Pricing, and CTA sections.
 *
 * Extracted from SecurityServiceTemplate.tsx for file size compliance.
 *
 * @see /src/styles/templates/page-service-security.css
 */

import { Container } from '../../common/Container';
import { FAQSection } from '../../patterns/FAQSection';
import { FunkyCTA } from '../../patterns/FunkyCTA';
import { FeatureList } from '../../patterns/FeatureList';
import { ProcessTimeline } from '../../patterns/ProcessTimeline';
import { RelatedServicesGrid } from '../../patterns/RelatedServicesGrid';
import { RelatedServicesInPhase } from '../../patterns/RelatedServicesInPhase';
import { IncludedInSolutions } from '../../patterns/IncludedInSolutions';
import { ServiceTestimonial } from '../../patterns/ServiceTestimonial';
import { ServicePricingTimeline } from '../../patterns/ServicePricingTimeline';
import { StatsGrid } from '../../patterns/StatsGrid';
import { ScrollReveal } from '../../../hooks/useScrollReveal';
import { servicePricingTimeline } from '../../../data/services';
import {
  securityServiceFeatures,
  securityServiceProcess,
  securityServiceCTA,
} from '../../../data/security-service-page';

interface SecurityLowerSectionsProps {
  relatedServices: any[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonPage: 'contact';
}

export function SecurityLowerSections({
  relatedServices,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaButtonPage,
}: SecurityLowerSectionsProps) {
  return (
    <>
      {/* ============================================
          DEFENSE PROTOCOLS (Sub-Services)
          ============================================ */}
      <section className="service-section service-section--bg-background">
        <Container>
          <div className="service-section__header">
            <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }} />
            <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-wider)', margin: 0 }}>
              Defense Protocols
            </h2>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)' }} />
          </div>

          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList
              items={securityServiceFeatures.features.map((feat) => ({
                icon: feat.icon as any,
                title: feat.title,
                description: feat.description,
              }))}
              columns={4}
              variant="glow"
              iconSize="md"
              iconStyle="rounded"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          SYSTEM SCAN (Process)
          ============================================ */}
      <section className="service-section service-section--bg-card" style={{ borderTop: '1px solid var(--border)' }}>
        <Container>
          <ScrollReveal animation="fade-up">
            <ProcessTimeline
              heading={securityServiceProcess.title}
              description={securityServiceProcess.description || 'Our systematic approach to securing your WordPress site'}
              steps={securityServiceProcess.steps.map((step, i) => ({
                id: `step-${i}`,
                number: i + 1,
                title: step.step,
                description: step.description,
              }))}
              showNumbers={true}
              orientation="vertical"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          STATS (Metrics)
          ============================================ */}
      <section className="service-section service-section--bg-background">
        <Container>
          <StatsGrid
            stats={[
              { number: '24/7', label: 'Monitoring' },
              { number: '100%', label: 'Uptime Goal' },
              { number: '<1hr', label: 'Response Time' },
              { number: 'Zero', label: 'Data Loss' },
            ]}
            columns={4}
            variant="cards"
          />
        </Container>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={[
          { question: 'How often do you scan my site?', answer: 'We perform real-time monitoring and daily deep scans of all file changes.' },
          { question: 'Can you fix a hacked site?', answer: 'Yes, our Malware Removal service is designed specifically to clean and restore compromised websites.' },
          { question: 'Do I need security if I have hosting?', answer: 'While hosting provides server-level security, our service protects the application layer (WordPress) where most hacks occur.' },
          { question: 'Will security plugins slow down my site?', answer: 'No, our security measures are optimized for performance and run efficiently at the server level where possible.' },
        ]}
        variant="dark"
      />

      {/* CTA Section */}
      {relatedServices && relatedServices.length > 0 && (
        <RelatedServicesGrid
          title="Related services"
          subtitle="Strengthen your security posture with these additional services"
          services={relatedServices}
        />
      )}
      <IncludedInSolutions
        serviceSlug="security"
        subtitle="Our security service is part of these comprehensive solution packages"
      />
      <ServiceTestimonial
        serviceSlug="security"
        subtitle="Clients who trust us to protect their WordPress infrastructure"
      />

      {/* ============================================
          PRICING & TIMELINE
          ============================================ */}
      {servicePricingTimeline.security && (
        <ScrollReveal animation="fade-up">
          <section className="service-section service-section--bg-card" style={{ borderTop: '1px solid var(--border)' }}>
            <Container>
              <ServicePricingTimeline
                pricing={servicePricingTimeline.security.pricing}
                timeline={servicePricingTimeline.security.timeline}
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
        currentServicePage="security"
      />

      <FunkyCTA
        title={ctaTitle}
        description={ctaDescription}
        buttonText={ctaButtonText}
        buttonPage={ctaButtonPage}
        benefits={[
          'Comprehensive vulnerability assessment',
          'Malware removal & prevention',
          '24/7 monitoring & rapid response',
          'SSL, firewall & hardening included',
        ]}
      />
    </>
  );
}
