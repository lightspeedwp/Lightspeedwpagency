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

import { RouteAnnouncer } from '@/app/components/blocks/utility/RouteAnnouncer';
import { SkipLink } from '@/app/components/common/SkipLink';
import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { BackToTopButton } from '@/app/components/blocks/layout/BackToTopButton';
import { Hero } from '@/app/components/patterns/Hero';
import { Section } from '@/app/components/common/Section';
import { Container } from '@/app/components/common/Container';
import { CTASection } from '@/app/components/patterns/CTASection';
import { FAQSection } from '@/app/components/patterns/FAQSection';
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

/**
 * Migrations Service Template
 */
export function MigrationsServiceTemplate() {
  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
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
              variant: 'primary' 
            },
            { 
              label: migrationsHero.cta.secondary.text, 
              page: migrationsHero.cta.secondary.page, 
              variant: 'outline' 
            }
          ]}
        />

        {/* Why Migrate with LSX Section */}
        <Section spacing="xl" background="muted">
          <Container width="default">
            <div className="service-page__section-header">
              <h2 className="service-page__section-title">
                {whyMigrateWithLSX.title}
              </h2>
              <p className="service-page__section-description">
                {whyMigrateWithLSX.description}
              </p>
            </div>

            <div className="service-page__benefits-grid">
              {whyMigrateWithLSX.benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="service-page__benefit-card">
                    <div className="service-page__benefit-icon">
                      <Icon />
                    </div>
                    <h3 className="service-page__benefit-title">
                      {benefit.title}
                    </h3>
                    <p className="service-page__benefit-description">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Migration Services Section */}
        <Section spacing="xl">
          <Container width="default">
            <div className="service-page__section-header">
              <h2 className="service-page__section-title">
                Our Migration Services
              </h2>
              <p className="service-page__section-description">
                Comprehensive migration solutions for a seamless transition
              </p>
            </div>

            <div className="service-page__features-grid">
              {migrationServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="service-page__feature-card">
                    <div className="service-page__feature-icon">
                      <Icon />
                    </div>
                    <h3 className="service-page__feature-title">
                      {service.title}
                    </h3>
                    <p className="service-page__feature-description">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Migration Process Section */}
        <Section spacing="xl" background="muted">
          <Container width="default">
            <div className="service-page__section-header">
              <h2 className="service-page__section-title">
                Our Migration Process
              </h2>
              <p className="service-page__section-description">
                A proven 5-step approach to successful migrations
              </p>
            </div>

            <div className="service-page__process-grid">
              {migrationProcess.map((step, index) => (
                <div key={index} className="service-page__process-step">
                  <div className="service-page__process-number">
                    {step.step}
                  </div>
                  <div className="service-page__process-content">
                    <h3 className="service-page__process-title">
                      {step.title}
                    </h3>
                    <p className="service-page__process-description">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Supported Platforms Section */}
        <Section spacing="xl">
          <Container width="default">
            <div className="service-page__section-header">
              <h2 className="service-page__section-title">
                {supportedPlatforms.title}
              </h2>
              <p className="service-page__section-description">
                {supportedPlatforms.description}
              </p>
            </div>

            <div className="service-page__list-grid">
              {supportedPlatforms.platforms.map((platform, index) => (
                <div key={index} className="service-page__list-item">
                  <h3 className="service-page__list-name">
                    {platform.name}
                  </h3>
                  <p className="service-page__list-description">
                    {platform.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Case Study Section */}
        <Section spacing="xl" background="muted">
          <Container width="default">
            <div className="service-page__case-study">
              <div className="service-page__case-study-header">
                <h2 className="service-page__case-study-title">
                  {migrationCaseStudy.title}
                </h2>
                <blockquote className="service-page__case-study-quote">
                  &ldquo;{migrationCaseStudy.quote}&rdquo;
                </blockquote>
                <div className="service-page__case-study-author">
                  {migrationCaseStudy.author}
                </div>
                <div className="service-page__case-study-role">
                  {migrationCaseStudy.role}, {migrationCaseStudy.client}
                </div>
              </div>

              <div className="service-page__results-grid">
                {migrationCaseStudy.results.map((result, index) => (
                  <div key={index} className="service-page__result-item">
                    <div className="service-page__result-metric">
                      {result.metric}
                    </div>
                    <div className="service-page__result-label">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <FAQSection faqs={migrationsFAQs} />

        {/* CTA Section */}
        <CTASection
          title={migrationsCTA.title}
          description={migrationsCTA.description}
          primaryButtonText={migrationsCTA.buttons[0].text}
          primaryButtonPage={migrationsCTA.buttons[0].page}
          secondaryButtonText={migrationsCTA.buttons[1].text}
          secondaryButtonPage={migrationsCTA.buttons[1].page}
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}