/**
 * Pricing Template — Funky Neon Redesign
 *
 * WordPress template: templates/page-pricing.html
 *
 * Pattern Components:
 * - ✅ StatsGrid — Hero quick stats (inline variant, 4 columns)
 * - ✅ FunkyCTA — Final conversion section
 *
 * @see /src/styles/templates/pricing-page.css
 * @see /src/app/data/pricing-page.ts
 * @migrated March 4, 2026 — Migrated hero stats to StatsGrid (~12 lines saved)
 */

/* Route-level CSS */
import '../../../styles/templates/pricing-page.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Button } from '../blocks/design/Buttons';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { StatsGrid } from '../patterns/StatsGrid';
import {
  Check,
  X,
  Lightning as Zap,
  Sparkle as Sparkles,
} from '@phosphor-icons/react';
import { useScrollReveal, ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';

// Import centralized data
import {
  pricingPageHero,
  websitePackages,
  supportPackages,
  paymentOptions,
  pricingCTA,
} from '../../data/pricing-page';

export function PricingTemplate() {
  const heroRef = useScrollReveal<HTMLDivElement>();

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Pricing' },
        ]}
      />

      {/* Funky Neon Hero */}
      <section className="pricing-page__hero">
        <div className="pricing-page__hero-mesh" aria-hidden="true" />
        <div className="pricing-page__hero-orb pricing-page__hero-orb--1" aria-hidden="true" />
        <div className="pricing-page__hero-orb pricing-page__hero-orb--2" aria-hidden="true" />

        <Container>
          <div ref={heroRef} className="pricing-page__hero-inner">
            <div className="pricing-page__hero-badge">
              <Sparkles size={14} />
              {pricingPageHero.badge.text}
            </div>

            <h1 className="pricing-page__hero-title">
              Simple, <span className="pricing-page__hero-highlight">Transparent</span> Pricing
            </h1>

            <p className="pricing-page__hero-description">
              {pricingPageHero.description}
            </p>

            {/* Quick stats */}
            <StatsGrid
              stats={[
                { number: '3', label: 'Build Packages' },
                { number: '3', label: 'Support Plans' },
                { number: '100%', label: 'Transparent' },
                { number: '0', label: 'Hidden Fees' },
              ]}
            />
          </div>
        </Container>

        <ScrollDownArrow />
      </section>

      {/* Website Packages Section */}
      <Section spacing="xl" className="pricing-page__packages-section">
        {/* Decorative orbs */}
        <div className="pricing-page__section-orb pricing-page__section-orb--1" aria-hidden="true" />
        <div className="pricing-page__section-orb pricing-page__section-orb--2" aria-hidden="true" />

        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="pricing-page__section-header">
                <h2 className="pricing-page__section-title">
                  Website Build Packages
                </h2>
                <p className="pricing-page__section-description">
                  One-time investment to build your WordPress website
                </p>
              </div>
            </ScrollReveal>

            <div className="pricing-page__packages-grid responsive-grid-3-cols">
              {websitePackages.map((plan, idx) => {
                const Icon = plan.icon;
                return (
                  <ScrollReveal key={plan.id} animation="fade-up" delay={idx * 100}>
                    <div
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
                        variant={plan.popular ? 'primary' : 'outline'}
                        className="wp-w-full"
                      >
                        {plan.cta.text}
                      </Button>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Support Packages Section */}
      <Section spacing="xl" className="pricing-page__support-section">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="pricing-page__section-header">
                <h2 className="pricing-page__section-title">
                  Support & Maintenance Plans
                </h2>
                <p className="pricing-page__section-description">
                  Monthly plans to keep your website secure, fast, and up-to-date
                </p>
              </div>
            </ScrollReveal>

            <div className="pricing-page__packages-grid responsive-grid-3-cols">
              {supportPackages.map((plan, idx) => {
                const Icon = plan.icon;
                return (
                  <ScrollReveal key={plan.id} animation="fade-up" delay={idx * 100}>
                    <div
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
                        variant={plan.popular ? 'primary' : 'outline'}
                        className="wp-w-full"
                      >
                        {plan.cta.text}
                      </Button>
                    </div>
                  </ScrollReveal>
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
            <ScrollReveal animation="fade-up">
              <div className="pricing-page__section-header">
                <h2 className="pricing-page__section-title">
                  {paymentOptions.title}
                </h2>
                <p className="pricing-page__section-description">
                  {paymentOptions.description}
                </p>
              </div>
            </ScrollReveal>

            <div className="pricing-page__payment-grid">
              {paymentOptions.options.map((option, index) => (
                <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                  <div className="pricing-page__payment-card">
                    <div className="pricing-page__payment-icon-wrapper">
                      <Zap size={28} className="pricing-page__payment-icon" />
                    </div>
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
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <FunkyCTA
        title={pricingCTA.title}
        description={pricingCTA.description}
        buttonText={pricingCTA.buttons[0].text}
        buttonPage={pricingCTA.buttons[0].page}
        benefits={[
          'No hidden fees or surprises',
          'Flexible payment options',
          'Custom quotes for complex projects',
          'Money-back satisfaction guarantee',
          'Free initial consultation',
        ]}
      />
    </>
  );
}

export default PricingTemplate;