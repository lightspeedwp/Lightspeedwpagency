/**
 * Migrations Service Template
 * 
 * Dedicated page for Website Migrations service.
 * WordPress Mapping: Service detail page
 * 
 * Sections:
 * - Hero (service introduction)
 * - Why Migrate with LSX (4 benefits)
 * - Migration Services (6 features)
 * - Migration Process (5 steps)
 * - Supported Platforms (8 platforms)
 * - Case Study
 * - FAQ
 * - CTA
 */

import { Hero } from '@/app/components/patterns/Hero';
import { Section } from '@/app/components/common/Section';
import { Container } from '@/app/components/common/Container';
import { CTASection } from '@/app/components/patterns/CTASection';
import { FAQSection } from '@/app/components/patterns/FAQSection';
import { Heading } from '@/app/components/blocks/text/Heading';
import { Paragraph } from '@/app/components/blocks/text/Paragraph';
import {
  migrationsHero,
  whyMigrateWithLSX,
  migrationServices,
  migrationProcess,
  supportedPlatforms,
  migrationCaseStudy,
  migrationsFAQs,
  migrationsCTA
} from '@/app/data/migrations-service-page';
import '@/styles/templates/service-detail.css';

/**
 * Migrations Service Template
 */
export function MigrationsServiceTemplate() {
  return (
    <>
      {/* Hero Section */}
        <Hero
          variant="service"
          badge={{
            icon: migrationsHero.badge.icon,
            text: migrationsHero.badge.text
          }}
          title={migrationsHero.title}
          titleHighlight={migrationsHero.titleHighlight}
          description={migrationsHero.description}
          buttons={[
            { 
              label: migrationsHero.cta.primary.text, 
              page: migrationsHero.cta.primary.page, 
              variant: 'default',
              className: 'service-detail__hero-btn-primary'
            },
            { 
              label: migrationsHero.cta.secondary.text, 
              page: migrationsHero.cta.secondary.page, 
              variant: 'outline',
              className: 'service-detail__hero-btn-outline'
            }
          ]}
          className="service-detail__hero"
        />

        {/* Why Migrate with LSX Section */}
        <Section spacing="xl" className="service-detail__overview-section">
          <Container>
            <div className="service-detail__section-header">
              <Heading level={2} align="center" className="service-detail__title">
                {whyMigrateWithLSX.title}
              </Heading>
              <Paragraph align="center" className="service-detail__description">
                {whyMigrateWithLSX.description}
              </Paragraph>
            </div>

            <div className="service-detail__stats-grid">
              {whyMigrateWithLSX.benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="service-detail__stat-card">
                    <div className="service-detail__service-icon-wrapper">
                      <Icon size={32} />
                    </div>
                    <Heading level={3} className="service-detail__service-title">
                      {benefit.title}
                    </Heading>
                    <Paragraph className="service-detail__service-desc">
                      {benefit.description}
                    </Paragraph>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Migration Services Section */}
        <Section spacing="xl" className="service-detail__services-section">
          <Container className="wp-max-w-6xl">
            <div className="service-detail__section-header">
              <Heading level={2} align="center" className="service-detail__title">
                Our Migration Services
              </Heading>
              <Paragraph align="center" className="service-detail__description">
                Comprehensive migration solutions for a seamless transition
              </Paragraph>
            </div>

            <div className="service-detail__services-grid">
              {migrationServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="service-detail__service-card">
                    <div className="service-detail__service-icon-wrapper">
                      <Icon size={24} />
                    </div>
                    <Heading level={3} className="service-detail__service-title">
                      {service.title}
                    </Heading>
                    <Paragraph className="service-detail__service-desc">
                      {service.description}
                    </Paragraph>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Migration Process Section */}
        <Section spacing="xl" className="service-detail__process-section">
          <Container>
            <div className="service-detail__section-header">
              <Heading level={2} align="center" className="service-detail__title">
                Our Migration Process
              </Heading>
              <Paragraph align="center" className="service-detail__description">
                A proven 5-step approach to successful migrations
              </Paragraph>
            </div>

            <div className="wp-grid-5-cols wp-gap-6">
              {migrationProcess.map((step, index) => (
                <div key={index} className="service-detail__process-card">
                  <div className="service-detail__process-number">
                    {step.step}
                  </div>
                  <div className="service-detail__process-content">
                    <Heading level={3} className="service-detail__process-title wp-mt-4">
                      {step.title}
                    </Heading>
                    <Paragraph className="service-detail__process-desc">
                      {step.description}
                    </Paragraph>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Supported Platforms Section */}
        <Section spacing="xl" className="service-detail__tech-section">
          <Container>
            <div className="service-detail__section-header">
              <Heading level={2} align="center" className="service-detail__title">
                {supportedPlatforms.title}
              </Heading>
              <Paragraph align="center" className="service-detail__description">
                {supportedPlatforms.description}
              </Paragraph>
            </div>

            <div className="wp-grid-4-cols wp-gap-6">
              {supportedPlatforms.platforms.map((platform, index) => (
                <div key={index} className="service-detail__tech-card wp-text-center">
                  <Heading level={3} className="service-detail__tech-title wp-mb-2">
                    {platform.name}
                  </Heading>
                  <Paragraph className="service-detail__stat-desc">
                    {platform.description}
                  </Paragraph>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Case Study Section */}
        <Section spacing="xl" className="service-detail__overview-section">
          <Container>
            <div className="service-detail__case-study">
              <div className="service-detail__case-study-header">
                <Heading level={2} className="service-detail__case-study-title">
                  {migrationCaseStudy.title}
                </Heading>
                <blockquote className="service-detail__case-study-quote">
                  &ldquo;{migrationCaseStudy.quote}&rdquo;
                </blockquote>
                <div className="service-detail__case-study-author">
                  {migrationCaseStudy.author}
                </div>
                <div className="service-detail__case-study-role">
                  {migrationCaseStudy.role}, {migrationCaseStudy.client}
                </div>
              </div>

              <div className="service-detail__results-grid">
                {migrationCaseStudy.results.map((result, index) => (
                  <div key={index} className="service-detail__result-item">
                    <div className="service-detail__result-metric">
                      {result.metric}
                    </div>
                    <div className="service-detail__result-label">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <FAQSection faqs={migrationsFAQs} variant="muted" />

        {/* CTA Section */}
        <CTASection
          title={migrationsCTA.title}
          description={migrationsCTA.description}
          primaryButtonText={migrationsCTA.buttons[0].text}
          primaryButtonPage={migrationsCTA.buttons[0].page}
          secondaryButtonText={migrationsCTA.buttons[1].text}
          secondaryButtonPage={migrationsCTA.buttons[1].page}
          gradient="blue"
        />
    </>
  );
}