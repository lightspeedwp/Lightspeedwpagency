/**
 * Pricing Template
 * 
 * WordPress template: templates/page-pricing.html
 * 
 * Pattern order: Breadcrumbs → Hero → Website Packages → Support Packages → Feature Comparison → Payment Options → CTA
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Button } from '../blocks/design/Buttons';
import { CTASection } from '../patterns/CTASection';
import { Hero } from '../patterns/Hero';
import { 
  DollarSign,
  Check,
  X,
  Zap
} from 'lucide-react';
import '@/styles/templates/pricing-page.css';

// Import centralized data
import {
  pricingPageHero,
  websitePackages,
  supportPackages,
  paymentOptions,
  pricingCTA
} from '../../data/pricing-page';

export function PricingTemplate() {
  return (
    <>
        {/* Breadcrumbs */}
        <section className="wp-block-breadcrumbs-section">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: pricingPageHero.title }
            ]}
          />
        </section>

        {/* Hero Section */}
        <Hero
          variant="service"
          align="center"
          maxWidth="4xl"
          gradient="cyan"
          badge={{
            icon: DollarSign,
            text: pricingPageHero.badge.text
          }}
          title="Simple, Transparent Pricing"
          titleHighlight="Transparent"
          description={pricingPageHero.description}
        />

        {/* Website Packages Section */}
        <Section spacing="xl" className="pricing-page__packages-section">
          <Container>
            <div className="wp-max-w-6xl">
              <div className="pricing-page__section-header">
                <h2 className="pricing-page__section-title">
                  Website Build Packages
                </h2>
                <p className="pricing-page__section-description">
                  One-time investment to build your WordPress website
                </p>
              </div>

              <div className="pricing-page__packages-grid">
                {websitePackages.map((plan) => {
                  const Icon = plan.icon;
                  return (
                    <div
                      key={plan.id}
                      className={`pricing-page__package-card ${plan.popular ? 'pricing-page__package-card--popular' : ''}`}
                    >
                      {plan.popular && (
                        <div className="pricing-page__popular-badge">
                          Most Popular
                        </div>
                      )}

                      <div className="pricing-page__package-icon">
                        <Icon size={24} style={{ color: 'var(--primary)' }} />
                      </div>

                      <h3 className="pricing-page__package-title">
                        {plan.name}
                      </h3>

                      <p className="pricing-page__package-tagline">
                        {plan.tagline}
                      </p>

                      <div className="pricing-page__package-price-wrapper">
                        <div className="pricing-page__package-price">
                          {plan.price.display}
                        </div>
                        <div className="pricing-page__package-period">
                          {plan.price.period}
                        </div>
                      </div>

                      <p className="pricing-page__package-description">
                        {plan.description}
                      </p>

                      <ul className="pricing-page__features-list">
                        {plan.features.slice(0, 8).map((feature, index) => (
                          <li
                            key={index}
                            className="pricing-page__feature-item"
                          >
                            {feature.included ? (
                              <Check size={20} className="pricing-page__feature-icon--included" />
                            ) : (
                              <X size={20} className="pricing-page__feature-icon--excluded" />
                            )}
                            <span
                              className={`pricing-page__feature-text ${feature.included ? 'pricing-page__feature-text--included' : 'pricing-page__feature-text--excluded'}`}
                            >
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        page={plan.cta.page as any}
                        size="lg"
                        variant={plan.popular ? 'default' : 'outline'}
                        className="wp-w-full"
                      >
                        {plan.cta.text}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Support Packages Section */}
        <Section spacing="xl" className="pricing-page__support-section">
          <Container>
            <div className="wp-max-w-6xl">
              <div className="pricing-page__section-header">
                <h2 className="pricing-page__section-title">
                  Support & Maintenance Plans
                </h2>
                <p className="pricing-page__section-description">
                  Monthly plans to keep your website secure, fast, and up-to-date
                </p>
              </div>

              <div className="pricing-page__packages-grid">
                {supportPackages.map((plan) => {
                  const Icon = plan.icon;
                  return (
                    <div
                      key={plan.id}
                      className={`pricing-page__package-card ${plan.popular ? 'pricing-page__package-card--popular' : ''}`}
                    >
                      {plan.popular && (
                        <div className="pricing-page__popular-badge">
                          Most Popular
                        </div>
                      )}

                      <div className="pricing-page__package-icon">
                        <Icon size={24} style={{ color: 'var(--primary)' }} />
                      </div>

                      <h3 className="pricing-page__package-title">
                        {plan.name}
                      </h3>

                      <p className="pricing-page__package-tagline">
                        {plan.tagline}
                      </p>

                      <div className="pricing-page__package-price-wrapper">
                        <div className="pricing-page__package-price">
                          {plan.price.display}
                        </div>
                        <div className="pricing-page__package-period">
                          {plan.price.period}
                        </div>
                      </div>

                      <p className="pricing-page__package-description">
                        {plan.description}
                      </p>

                      <ul className="pricing-page__features-list">
                        {plan.features.slice(0, 8).map((feature, index) => (
                          <li
                            key={index}
                            className="pricing-page__feature-item"
                          >
                            {feature.included ? (
                              <Check size={20} className="pricing-page__feature-icon--included" />
                            ) : (
                              <X size={20} className="pricing-page__feature-icon--excluded" />
                            )}
                            <span
                              className={`pricing-page__feature-text ${feature.included ? 'pricing-page__feature-text--included' : 'pricing-page__feature-text--excluded'}`}
                            >
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        page={plan.cta.page as any}
                        size="lg"
                        variant={plan.popular ? 'default' : 'outline'}
                        className="wp-w-full"
                      >
                        {plan.cta.text}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Payment Options Section */}
        <Section spacing="lg" className="pricing-page__payment-section">
          <Container>
            <div className="wp-max-w-4xl wp-mx-auto">
              <div className="pricing-page__section-header">
                <h2 className="pricing-page__section-title">
                  {paymentOptions.title}
                </h2>
                <p className="pricing-page__section-description">
                  {paymentOptions.description}
                </p>
              </div>

              <div className="pricing-page__payment-grid">
                {paymentOptions.options.map((option, index) => (
                  <div
                    key={index}
                    className="pricing-page__payment-card"
                  >
                    <Zap size={32} className="pricing-page__payment-icon" />
                    <h3 className="pricing-page__payment-title">
                      {option.name}
                    </h3>
                    <p className="pricing-page__payment-description">
                      {option.description}
                    </p>
                    <div className="pricing-page__payment-discount">
                      {option.discount}
                    </div>
                    <p className="pricing-page__payment-terms">
                      {option.terms}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <CTASection
          title={pricingCTA.title}
          description={pricingCTA.description}
          primaryButtonText={pricingCTA.buttons[0].text}
          primaryButtonPage={pricingCTA.buttons[0].page as any}
          secondaryButtonText={pricingCTA.buttons[1]?.text}
          secondaryButtonPage={pricingCTA.buttons[1]?.page as any}
          gradient="cyan"
        />
    </>
  );
}