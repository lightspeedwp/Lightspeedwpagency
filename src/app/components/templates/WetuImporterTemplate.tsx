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
import { Hero } from '@/app/components/patterns/Hero';
import { Section } from '@/app/components/common/Section';
import { Container } from '@/app/components/common/Container';
import { CTASection } from '@/app/components/patterns/CTASection';
import { FAQSection } from '@/app/components/patterns/FAQSection';
import { Buttons } from '@/app/components/blocks/design/Buttons';
import { Heading } from '@/app/components/common/Heading';
import { Paragraph } from '@/app/components/blocks/text/Paragraph';
import '@/styles/templates/wetu-importer-page.css';
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
        <Section spacing="xl" className="wetu-importer__section--muted">
          <Container maxWidth="6xl">
            <div className="wetu-importer__section-header">
              <Heading level={2} className="wetu-importer__section-title">
                Key Features
              </Heading>
              <Paragraph className="wetu-importer__section-description">
                Everything you need to automate your tour content management
              </Paragraph>
            </div>

            <div className="wetu-importer__features-grid">
              {wetuImporterFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="wetu-importer__feature-card">
                    <div className="wetu-importer__feature-icon">
                      <Icon />
                    </div>
                    <Heading level={3} className="wetu-importer__feature-title">
                      {feature.title}
                    </Heading>
                    <Paragraph className="wetu-importer__feature-description">
                      {feature.description}
                    </Paragraph>
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
              <Heading level={2} className="wetu-importer__section-title">
                Why Choose Wetu Importer?
              </Heading>
              <Paragraph className="wetu-importer__section-description">
                Transform how you manage tour content with automation and reliability
              </Paragraph>
            </div>

            <div className="wetu-importer__benefits-grid">
              {wetuImporterBenefits.map((benefit, index) => (
                <div key={index} className="wetu-importer__benefit-card">
                  <Heading level={3} className="wetu-importer__benefit-title">
                    {benefit.title}
                  </Heading>
                  <Paragraph className="wetu-importer__benefit-description">
                    {benefit.description}
                  </Paragraph>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* How It Works Section */}
        <Section spacing="xl" className="wetu-importer__section--muted">
          <Container maxWidth="6xl">
            <div className="wetu-importer__section-header">
              <Heading level={2} className="wetu-importer__section-title">
                How It Works
              </Heading>
              <Paragraph className="wetu-importer__section-description">
                Get started in 4 simple steps
              </Paragraph>
            </div>

            <div className="wetu-importer__process-grid">
              {wetuImporterProcess.map((step, index) => (
                <div key={index} className="wetu-importer__process-step">
                  <div className="wetu-importer__process-number">
                    {step.step}
                  </div>
                  <div className="wetu-importer__process-content">
                    <Heading level={3} className="wetu-importer__process-title">
                      {step.title}
                    </Heading>
                    <Paragraph className="wetu-importer__process-description">
                      {step.description}
                    </Paragraph>
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
              <Heading level={2} className="wetu-importer__section-title">
                {wetuImporterSpecs.title}
              </Heading>
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
        <Section spacing="xl" className="wetu-importer__section--muted">
          <Container maxWidth="6xl">
            <div className="wetu-importer__section-header">
              <Heading level={2} className="wetu-importer__section-title">
                {wetuImporterPricing.title}
              </Heading>
              <Paragraph className="wetu-importer__section-description">
                {wetuImporterPricing.description}
              </Paragraph>
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

                  <Heading level={3} className="wetu-importer__pricing-name">
                    {plan.name}
                  </Heading>
                  <Paragraph className="wetu-importer__pricing-tagline">
                    {plan.tagline}
                  </Paragraph>

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
          primaryButtonText={wetuImporterCTA.buttons[0].text}
          primaryButtonPage={wetuImporterCTA.buttons[0].page}
          secondaryButtonText={wetuImporterCTA.buttons[1].text}
          secondaryButtonPage={wetuImporterCTA.buttons[1].page}
        />
    </>
  );
}
