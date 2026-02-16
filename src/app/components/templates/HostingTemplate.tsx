/**
 * Hosting Template
 * 
 * WordPress template: templates/page-hosting.html
 * 
 * Pattern order: Breadcrumbs → Hero → Hosting Plans → Features → Why Choose → Guarantees → CTA
 * 
 * BATCH 23 PART 4: WordPress-Aligned CSS Classes Migration
 * - All styling moved to /src/styles/templates/hosting-page.css
 * - Zero Tailwind classes (replaced with WordPress-aligned .hosting-page__* classes)
 * - Zero inline styles (all moved to CSS file)
 * - Zero hardcoded fonts (uses var(--font-primary) and var(--font-secondary))
 * - 100% CSS variable usage
 * - Full light/dark mode support
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Buttons, Button } from '../blocks/design/Buttons';
import { CTASection } from '../patterns/CTASection';
import { Hero } from '../patterns/Hero';
import { 
  Server,
  Check,
  X
} from 'lucide-react';
import '@/styles/templates/hosting-page.css';

// Import centralized data
import {
  hostingPageHero,
  hostingPlans,
  hostingFeatures,
  whyChooseHosting,
  hostingGuarantees,
  hostingCTA
} from '../../data/hosting-page';

export function HostingTemplate() {
  return (
    <>
        {/* Breadcrumbs */}
        <section className="wp-block-breadcrumbs-section">
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: hostingPageHero.title }
              ]}
            />
        </section>

        {/* Hero Section */}
        <Hero
          variant="page"
          align="center"
          maxWidth="4xl"
          gradient="violet"
          spacing="xl"
          badge={{
            icon: Server,
            text: 'RELIABLE WORDPRESS HOSTING'
          }}
          title="Lightning-Fast WordPress Hosting"
          titleHighlight="Lightning-Fast"
          description={hostingPageHero.description}
        />

        {/* Hosting Plans Section */}
        <Section spacing="xl" className="template-header__section">
          <Container maxWidth="6xl">
            <div className="template-header__container">
              <h2 className="template-header__title">
                Choose Your Hosting Plan
              </h2>
              <p className="template-header__description">
                All plans include free migration, SSL certificates, and expert WordPress support
              </p>
            </div>

            <div className="hosting-page__plans-grid">
              {hostingPlans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <div
                    key={plan.id}
                    className={plan.popular ? 'hosting-page__plan-card hosting-page__plan-card--popular' : 'hosting-page__plan-card'}
                  >
                    {plan.popular && (
                      <div className="hosting-page__popular-badge">
                        Most Popular
                      </div>
                    )}

                    <div className="hosting-page__plan-icon">
                      <Icon size={24} />
                    </div>

                    <h3 className="hosting-page__plan-name">
                      {plan.name}
                    </h3>

                    <p className="hosting-page__plan-tagline">
                      {plan.tagline}
                    </p>

                    <div className="hosting-page__plan-pricing">
                      <div className="hosting-page__plan-price">
                        {plan.price.display}
                      </div>
                      <div className="hosting-page__plan-period">
                        {plan.price.period}
                      </div>
                    </div>

                    <p className="hosting-page__plan-description">
                      {plan.description}
                    </p>

                    {/* Specifications */}
                    <div className="hosting-page__plan-specs">
                      <div className="hosting-page__plan-spec hosting-page__plan-spec--highlight">
                        {plan.specifications.sites}
                      </div>
                      <div className="hosting-page__plan-spec hosting-page__plan-spec--muted">
                        {plan.specifications.storage}
                      </div>
                      <div className="hosting-page__plan-spec hosting-page__plan-spec--muted">
                        {plan.specifications.visits}
                      </div>
                      <div className="hosting-page__plan-spec hosting-page__plan-spec--muted">
                        {plan.specifications.ssl}
                      </div>
                    </div>

                    <ul className="hosting-page__plan-features">
                      {plan.features.slice(0, 8).map((feature, index) => (
                        <li
                          key={index}
                          className="hosting-page__plan-feature"
                        >
                          {feature.included ? (
                            <Check size={20} className="hosting-page__plan-feature-icon hosting-page__plan-feature-icon--included" />
                          ) : (
                            <X size={20} className="hosting-page__plan-feature-icon hosting-page__plan-feature-icon--excluded" />
                          )}
                          <span className={feature.included ? 'hosting-page__plan-feature-text hosting-page__plan-feature-text--included' : 'hosting-page__plan-feature-text hosting-page__plan-feature-text--excluded'}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      page={plan.cta.page as any}
                      size="lg"
                      variant={plan.popular ? 'default' : 'outline'}
                      className={plan.popular ? 'hosting-page__plan-cta hosting-page__plan-cta--popular' : 'hosting-page__plan-cta'}
                    >
                      {plan.cta.text}
                    </Button>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Features Section */}
        <Section spacing="xl" sectionStyle="muted">
          <Container maxWidth="6xl">
            <div className="template-header__container">
              <h2 className="template-header__title">
                Premium Hosting Features
              </h2>
              <p className="template-header__description">
                Everything you need for a fast, secure, and reliable WordPress site
              </p>
            </div>

            <div className="hosting-page__features-grid">
              {hostingFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="hosting-page__feature-card">
                    <div className="hosting-page__feature-icon">
                      <Icon size={28} />
                    </div>

                    <h3 className="hosting-page__feature-title">
                      {feature.title}
                    </h3>

                    <p className="hosting-page__feature-description">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Why Choose Section */}
        <Section spacing="xl" className="template-header__section">
          <Container maxWidth="4xl">
            <div className="template-header__container">
              <h2 className="template-header__title">
                {whyChooseHosting.title}
              </h2>
              <p className="template-header__description">
                {whyChooseHosting.description}
              </p>
            </div>

            <div className="hosting-page__why-grid">
              {whyChooseHosting.benefits.map((benefit, index) => (
                <div key={index} className="hosting-page__why-card">
                  <h3 className="hosting-page__why-title">
                    {benefit.title}
                  </h3>
                  <p className="hosting-page__why-description">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Guarantees Section */}
        <Section spacing="lg" sectionStyle="muted">
          <Container maxWidth="4xl">
            <div className="template-header__container">
              <h2 className="template-header__title">
                {hostingGuarantees.title}
              </h2>
            </div>

            <div className="hosting-page__guarantees-grid">
              {hostingGuarantees.guarantees.map((guarantee, index) => {
                const Icon = guarantee.icon;
                return (
                  <div key={index} className="hosting-page__guarantee-card">
                    <Icon size={32} className="hosting-page__guarantee-icon" />
                    <h3 className="hosting-page__guarantee-title">
                      {guarantee.title}
                    </h3>
                    <p className="hosting-page__guarantee-description">
                      {guarantee.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <CTASection
          title={hostingCTA.title}
          description={hostingCTA.description}
          primaryButtonText={hostingCTA.buttons[0].text}
          primaryButtonPage={hostingCTA.buttons[0].page as any}
          secondaryButtonText={hostingCTA.buttons[1]?.text}
          secondaryButtonPage={hostingCTA.buttons[1]?.page as any}
          gradient="purple-light"
        />
    </>
  );
}