/**
 * Security Service Template
 * 
 * Dedicated page for Security & Compliance service.
 * WordPress Mapping: Service detail page
 * 
 * Sections:
 * - Hero (service introduction)
 * - Why Security Matters (4 benefits)
 * - Security Services (6 features)
 * - Security Process (5 steps)
 * - Security Standards (6 standards)
 * - Pricing Packages (3-tier)
 * - FAQ
 * - CTA
 */

import { Check } from 'lucide-react';
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
import { Buttons } from '@/app/components/blocks/design/Buttons';
import {
  securityHero,
  whySecurityMatters,
  securityServices,
  securityProcess,
  securityStandards,
  securityPackages,
  securityFAQs,
  securityCTA
} from '@/app/data/security-service-page';

/**
 * Security Service Template
 */
export function SecurityServiceTemplate() {
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
            icon: securityHero.badge.icon,
            text: securityHero.badge.text
          }}
          title={securityHero.title}
          titleHighlight={securityHero.titleHighlight}
          description={securityHero.description}
        >
          <Buttons
            buttons={[
              { text: securityHero.cta.primary.text, page: securityHero.cta.primary.page, variant: 'default', size: 'lg' },
              { text: securityHero.cta.secondary.text, page: securityHero.cta.secondary.page, variant: 'outline', size: 'lg' }
            ]}
            alignment="center"
          />
        </Hero>

        {/* Why Security Matters Section */}
        <Section spacing="xl" sectionStyle="muted">
          <Container maxWidth="6xl">
            <div className="service-page__section-header">
              <h2 className="service-page__section-title">
                {whySecurityMatters.title}
              </h2>
              <p className="service-page__section-description">
                {whySecurityMatters.description}
              </p>
            </div>

            <div className="service-page__benefits-grid">
              {whySecurityMatters.benefits.map((benefit, index) => {
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

        {/* Security Services Section */}
        <Section spacing="xl">
          <Container maxWidth="6xl">
            <div className="service-page__section-header">
              <h2 className="service-page__section-title">
                Our Security Services
              </h2>
              <p className="service-page__section-description">
                Comprehensive protection for your WordPress website
              </p>
            </div>

            <div className="service-page__features-grid">
              {securityServices.map((service, index) => {
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

        {/* Security Process Section */}
        <Section spacing="xl" sectionStyle="muted">
          <Container maxWidth="6xl">
            <div className="service-page__section-header">
              <h2 className="service-page__section-title">
                Our Security Process
              </h2>
              <p className="service-page__section-description">
                A comprehensive 5-step security methodology
              </p>
            </div>

            <div className="service-page__process-grid">
              {securityProcess.map((step, index) => (
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

        {/* Security Standards Section */}
        <Section spacing="xl">
          <Container maxWidth="6xl">
            <div className="service-page__section-header">
              <h2 className="service-page__section-title">
                {securityStandards.title}
              </h2>
              <p className="service-page__section-description">
                {securityStandards.description}
              </p>
            </div>

            <div className="service-page__list-grid">
              {securityStandards.standards.map((standard, index) => (
                <div key={index} className="service-page__list-item">
                  <h3 className="service-page__list-name">
                    {standard.name}
                  </h3>
                  <p className="service-page__list-description">
                    {standard.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Pricing Packages Section */}
        <Section spacing="xl" sectionStyle="muted">
          <Container maxWidth="6xl">
            <div className="service-page__section-header">
              <h2 className="service-page__section-title">
                Security Packages
              </h2>
              <p className="service-page__section-description">
                Choose the security level that fits your needs
              </p>
            </div>

            <div className="service-page__pricing-grid">
              {securityPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`service-page__pricing-card ${
                    pkg.popular ? 'service-page__pricing-card--popular' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="service-page__pricing-badge">
                      Most Popular
                    </div>
                  )}

                  <h3 className="service-page__pricing-name">
                    {pkg.name}
                  </h3>
                  <p className="service-page__pricing-tagline">
                    {pkg.tagline}
                  </p>

                  <div className="service-page__pricing-price">
                    <span className="service-page__pricing-amount">
                      {pkg.price.display}
                    </span>
                    <span className="service-page__pricing-period">
                      {pkg.price.period}
                    </span>
                  </div>

                  <p className="service-page__pricing-description">
                    {pkg.description}
                  </p>

                  <div className="service-page__pricing-features">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="service-page__pricing-feature">
                        <Check />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Buttons
                    buttons={[
                      {
                        text: pkg.cta.text,
                        page: pkg.cta.page,
                        variant: pkg.popular ? 'default' : 'outline',
                        size: 'md'
                      }
                    ]}
                    alignment="center"
                  />
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <FAQSection faqs={securityFAQs} />

        {/* CTA Section */}
        <CTASection
          title={securityCTA.title}
          description={securityCTA.description}
          primaryButtonText={securityCTA.buttons[0].text}
          primaryButtonPage={securityCTA.buttons[0].page}
          secondaryButtonText={securityCTA.buttons[1].text}
          secondaryButtonPage={securityCTA.buttons[1].page}
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}
