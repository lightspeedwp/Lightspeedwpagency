/**
 * Wetu Importer Product Page Template
 * 
 * Dedicated page for Wetu Importer plugin/product.
 * WordPress Mapping: Product detail page
 * 
 * Sections:
 * - Hero (product introduction with badge)
 * - Features (6 key features in 3-column grid)
 * - Benefits (4 benefits in 2-column grid)
 * - How It Works (4-step process)
 * - Technical Specifications
 * - Pricing (3-tier comparison)
 * - FAQ
 * - CTA
 */

import { Check } from 'lucide-react';
import { RouteAnnouncer } from '@/app/components/blocks/utility/RouteAnnouncer';
import { SkipLink } from '@/app/components/blocks/utility/SkipLink';
import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { BackToTopButton } from '@/app/components/blocks/navigation/BackToTopButton';
import { Hero } from '@/app/components/patterns/Hero';
import { Section } from '@/app/components/common/Section';
import { Container } from '@/app/components/common/Container';
import { CTASection } from '@/app/components/patterns/CTASection';
import { FAQSection } from '@/app/components/patterns/FAQSection';
import { Buttons } from '@/app/components/blocks/design/Buttons';
import {
  wetuImporterHero,
  wetuImporterFeatures,
  wetuImporterBenefits,
  wetuImporterProcess,
  wetuImporterSpecs,
  wetuImporterPricing,
  wetuImporterFAQs,
  wetuImporterCTA
} from '@/app/data/wetu-importer-page';

/**
 * Wetu Importer Product Page Template
 */
export function WetuImporterTemplate() {
  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Hero Section */}
        <Hero
          variant="solution"
          badge={{
            icon: wetuImporterHero.badge.icon,
            text: wetuImporterHero.badge.text
          }}
          title={wetuImporterHero.title}
          titleHighlight={wetuImporterHero.titleHighlight}
          description={wetuImporterHero.description}
        >
          <Buttons
            buttons={[
              { text: wetuImporterHero.cta.primary.text, page: wetuImporterHero.cta.primary.page, variant: 'default', size: 'lg' },
              { text: wetuImporterHero.cta.secondary.text, page: wetuImporterHero.cta.secondary.page, variant: 'outline', size: 'lg' }
            ]}
            alignment="center"
          />
        </Hero>

        {/* Features Section */}
        <Section spacing="xl" sectionStyle="muted">
          <Container maxWidth="6xl">
            <div className="wetu-importer__section-header">
              <h2 className="wetu-importer__section-title">
                Key Features
              </h2>
              <p className="wetu-importer__section-description">
                Everything you need to automate your tour content management
              </p>
            </div>

            <div className="wetu-importer__features-grid">
              {wetuImporterFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="wetu-importer__feature-card">
                    <div className="wetu-importer__feature-icon">
                      <Icon />
                    </div>
                    <h3 className="wetu-importer__feature-title">
                      {feature.title}
                    </h3>
                    <p className="wetu-importer__feature-description">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Benefits Section */}
        <Section spacing="xl">
          <Container maxWidth="6xl">
            <div className="wetu-importer__section-header">
              <h2 className="wetu-importer__section-title">
                Why Choose Wetu Importer?
              </h2>
              <p className="wetu-importer__section-description">
                Transform how you manage tour content with automation and reliability
              </p>
            </div>

            <div className="wetu-importer__benefits-grid">
              {wetuImporterBenefits.map((benefit, index) => (
                <div key={index} className="wetu-importer__benefit-card">
                  <h3 className="wetu-importer__benefit-title">
                    {benefit.title}
                  </h3>
                  <p className="wetu-importer__benefit-description">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* How It Works Section */}
        <Section spacing="xl" sectionStyle="muted">
          <Container maxWidth="6xl">
            <div className="wetu-importer__section-header">
              <h2 className="wetu-importer__section-title">
                How It Works
              </h2>
              <p className="wetu-importer__section-description">
                Get started in 4 simple steps
              </p>
            </div>

            <div className="wetu-importer__process-grid">
              {wetuImporterProcess.map((step, index) => (
                <div key={index} className="wetu-importer__process-step">
                  <div className="wetu-importer__process-number">
                    {step.step}
                  </div>
                  <div className="wetu-importer__process-content">
                    <h3 className="wetu-importer__process-title">
                      {step.title}
                    </h3>
                    <p className="wetu-importer__process-description">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Technical Specifications Section */}
        <Section spacing="xl">
          <Container maxWidth="6xl">
            <div className="wetu-importer__section-header">
              <h2 className="wetu-importer__section-title">
                {wetuImporterSpecs.title}
              </h2>
            </div>

            <div className="wetu-importer__specs-grid">
              {wetuImporterSpecs.specs.map((spec, index) => (
                <div key={index} className="wetu-importer__spec-item">
                  <span className="wetu-importer__spec-label">
                    {spec.label}
                  </span>
                  <span className="wetu-importer__spec-value">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Pricing Section */}
        <Section spacing="xl" sectionStyle="muted">
          <Container maxWidth="6xl">
            <div className="wetu-importer__section-header">
              <h2 className="wetu-importer__section-title">
                {wetuImporterPricing.title}
              </h2>
              <p className="wetu-importer__section-description">
                {wetuImporterPricing.description}
              </p>
            </div>

            <div className="wetu-importer__pricing-grid">
              {wetuImporterPricing.plans.map((plan, index) => (
                <div
                  key={index}
                  className={`wetu-importer__pricing-card ${
                    plan.popular ? 'wetu-importer__pricing-card--popular' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="wetu-importer__pricing-badge">
                      Most Popular
                    </div>
                  )}

                  <h3 className="wetu-importer__pricing-name">
                    {plan.name}
                  </h3>
                  <p className="wetu-importer__pricing-tagline">
                    {plan.tagline}
                  </p>

                  <div className="wetu-importer__pricing-price">
                    <span className="wetu-importer__pricing-amount">
                      {plan.price.display}
                    </span>
                    <span className="wetu-importer__pricing-period">
                      {plan.price.period}
                    </span>
                  </div>

                  <div className="wetu-importer__pricing-features">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="wetu-importer__pricing-feature">
                        <Check />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Buttons
                    buttons={[
                      {
                        text: plan.cta.text,
                        page: plan.cta.page,
                        variant: plan.popular ? 'default' : 'outline',
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
        <FAQSection faqs={wetuImporterFAQs} />

        {/* CTA Section */}
        <CTASection
          title={wetuImporterCTA.title}
          description={wetuImporterCTA.description}
          buttons={wetuImporterCTA.buttons.map(btn => ({
            text: btn.text,
            page: btn.page
          }))}
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}
