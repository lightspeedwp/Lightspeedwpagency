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
      <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--background)', overflow: 'hidden', padding: 'var(--spacing-24) 0' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0 }} aria-hidden="true" />
        <div className="pricing-page__hero-orb pricing-page__hero-orb--1" aria-hidden="true" />
        <div className="pricing-page__hero-orb pricing-page__hero-orb--2" aria-hidden="true" />

        <Container>
          <div ref={heroRef} style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-2)', padding: 'var(--spacing-2) var(--spacing-4)', backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-full)', color: 'var(--primary)', fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--spacing-6)' }}>
              <Sparkles size={14} />
              {pricingPageHero.badge.text}
            </div>

            <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h1)', color: 'var(--foreground)', marginBottom: 'var(--spacing-6)' }}>
              Simple, <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(90deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Transparent</span> Pricing
            </h1>

            <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-xl)', color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: 'var(--spacing-12)' }}>
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
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--card)', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative orbs */}
        <div className="pricing-page__section-orb pricing-page__section-orb--1" aria-hidden="true" />
        <div className="pricing-page__section-orb pricing-page__section-orb--2" aria-hidden="true" />

        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            <ScrollReveal animation="fade-up">
              <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
                <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>
                  Website Build Packages
                </h2>
                <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>
                  One-time investment to build your WordPress website
                </p>
              </div>
            </ScrollReveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-8)' }}>
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
                        <Icon size={24} className="wp-text-primary" />
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
      </section>

      {/* Support Packages Section */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--background)' }}>
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            <ScrollReveal animation="fade-up">
              <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
                <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>
                  Support & Maintenance Plans
                </h2>
                <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>
                  Monthly plans to keep your website secure, fast, and up-to-date
                </p>
              </div>
            </ScrollReveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-8)' }}>
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
                        <Icon size={24} className="wp-text-primary" />
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
      </section>

      {/* Payment Options Section */}
      <section style={{ padding: 'var(--spacing-24) 0', backgroundColor: 'var(--muted)' }}>
        <Container>
          <div className="wp-max-w-4xl wp-mx-auto">
            <ScrollReveal animation="fade-up">
              <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
                <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-h2)', color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>
                  {paymentOptions.title}
                </h2>
                <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>
                  {paymentOptions.description}
                </p>
              </div>
            </ScrollReveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-6)' }}>
              {paymentOptions.options.map((option, index) => (
                <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                  <div style={{ padding: 'var(--spacing-8)', backgroundColor: 'var(--background)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--spacing-6)' }}>
                      <Zap size={28} />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-xl)', color: 'var(--foreground)', marginBottom: 'var(--spacing-3)' }}>
                      {option.name}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', marginBottom: 'var(--spacing-6)', lineHeight: 1.5, flex: 1 }}>
                      {option.description}
                    </p>
                    <div style={{ display: 'inline-block', backgroundColor: 'color-mix(in srgb, var(--primary) 15%, transparent)', color: 'var(--primary)', padding: 'var(--spacing-1) var(--spacing-3)', borderRadius: 'var(--radius-full)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>
                      {option.discount}
                    </div>
                    <p style={{ fontFamily: 'var(--font-secondary)', fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)', margin: 0 }}>
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