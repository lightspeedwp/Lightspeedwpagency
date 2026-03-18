/**
 * Pricing Template — Funky Neon Redesign
 *
 * WordPress template: templates/page-pricing.html
 *
 * Pattern Components:
 * - ✅ StatsGrid — Hero quick stats (inline variant, 4 columns)
 * - ✅ PricingCard — Pricing tier cards (website & support packages)
 * - ✅ FunkyCTA — Final conversion section
 *
 * @see /src/styles/templates/pricing-page.css
 * @see /src/app/data/pricing-page.ts
 * @migrated March 4, 2026 — Migrated hero stats to StatsGrid (~12 lines saved)
 * @migrated March 18, 2026 — Migrated pricing cards to PricingCard (~120 lines saved)
 */

/* Route-level CSS */
import '../../../styles/templates/pricing-page.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { StatsGrid } from '../patterns/StatsGrid';
import { PricingCard } from '../patterns/PricingCard';
import {
  Lightning as Zap,
  Sparkle as Sparkles,
} from '@phosphor-icons/react';

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
      <section className="service-hero service-hero--pricing">
        <div className="pricing-page__grid-bg" aria-hidden="true" />
        <div className="pricing-page__hero-orb pricing-page__hero-orb--1" aria-hidden="true" />
        <div className="pricing-page__hero-orb pricing-page__hero-orb--2" aria-hidden="true" />

        <Container>
          <div ref={heroRef} className="service-hero__content service-hero__content--centered">
            <div className="service-hero__badge">
              <Sparkles size={14} />
              {pricingPageHero.badge.text}
            </div>

            <h1 className="service-hero__title">
              Simple, <span className="service-hero__gradient-text">Transparent</span> Pricing
            </h1>

            <p className="service-hero__description service-hero__description--centered">
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
      <section className="service-section service-section--bg-card pricing-page__packages-section">
        {/* Decorative orbs */}
        <div className="pricing-page__section-orb pricing-page__section-orb--1" aria-hidden="true" />
        <div className="pricing-page__section-orb pricing-page__section-orb--2" aria-hidden="true" />

        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="service-section__header">
                <h2 className="service-section__title">
                  Website Build Packages
                </h2>
                <p className="service-section__description">
                  One-time investment to build your WordPress website
                </p>
              </div>
            </ScrollReveal>

            <div className="pricing-page__packages-grid">
              {websitePackages.map((plan, idx) => (
                <PricingCard
                  key={plan.id}
                  id={plan.id}
                  name={plan.name}
                  icon={plan.icon}
                  tagline={plan.tagline}
                  price={plan.price}
                  description={plan.description}
                  popular={plan.popular}
                  features={plan.features}
                  cta={plan.cta}
                  delay={idx * 100}
                  maxFeatures={8}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Support Packages Section */}
      <section className="service-section service-section--bg-background">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="service-section__header">
                <h2 className="service-section__title">
                  Support & Maintenance Plans
                </h2>
                <p className="service-section__description">
                  Monthly plans to keep your website secure, fast, and up-to-date
                </p>
              </div>
            </ScrollReveal>

            <div className="pricing-page__packages-grid">
              {supportPackages.map((plan, idx) => (
                <PricingCard
                  key={plan.id}
                  id={plan.id}
                  name={plan.name}
                  icon={plan.icon}
                  tagline={plan.tagline}
                  price={plan.price}
                  description={plan.description}
                  popular={plan.popular}
                  features={plan.features}
                  cta={plan.cta}
                  delay={idx * 100}
                  maxFeatures={8}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Payment Options Section */}
      <section className="service-section service-section--bg-muted">
        <Container>
          <div className="wp-max-w-4xl wp-mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="service-section__header">
                <h2 className="service-section__title">
                  {paymentOptions.title}
                </h2>
                <p className="service-section__description">
                  {paymentOptions.description}
                </p>
              </div>
            </ScrollReveal>

            <div className="pricing-payment__grid">
              {paymentOptions.options.map((option, index) => (
                <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                  <div className="pricing-payment__card">
                    <div className="pricing-payment__icon">
                      <Zap size={28} />
                    </div>
                    <h3 className="pricing-payment__title">
                      {option.name}
                    </h3>
                    <p className="pricing-payment__desc">
                      {option.description}
                    </p>
                    <div className="pricing-payment__discount">
                      {option.discount}
                    </div>
                    <p className="pricing-payment__terms">
                      {option.terms}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

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