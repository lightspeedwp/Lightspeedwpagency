/**
 * Content Service Template
 * 
 * Dedicated page for Content Strategy & Creation service.
 * WordPress Mapping: Service detail page
 * 
 * Sections:
 * - Hero (service introduction)
 * - Why Content Strategy (4 benefits)
 * - Content Services (6 features)
 * - Content Process (5 steps)
 * - Content Types (8 types)
 * - Pricing Packages (3-tier)
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
  contentHero,
  whyContentStrategy,
  contentServices,
  contentProcess,
  contentTypes,
  contentPackages,
  contentFAQs,
  contentCTA
} from '@/app/data/content-service-page';

/**
 * Content Service Template
 */
export function ContentServiceTemplate() {
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
            icon: contentHero.badge.icon,
            text: contentHero.badge.text
          }}
          title={contentHero.title}
          titleHighlight={contentHero.titleHighlight}
          description={contentHero.description}
        >
          <Buttons
            buttons={[
              { text: contentHero.cta.primary.text, page: contentHero.cta.primary.page, variant: 'default', size: 'lg' },
              { text: contentHero.cta.secondary.text, page: contentHero.cta.secondary.page, variant: 'outline', size: 'lg' }
            ]}
            alignment="center"
          />
        </Hero>

        {/* Why Content Strategy Section */}
        <Section spacing="xl" sectionStyle="muted">
          <Container maxWidth="6xl">
            <div className="service-page__section-header">
              <h2 className="service-page__section-title">
                {whyContentStrategy.title}
              </h2>
              <p className="service-page__section-description">
                {whyContentStrategy.description}
              </p>
            </div>

            <div className="service-page__benefits-grid">
              {whyContentStrategy.benefits.map((benefit, index) => {
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

        {/* Content Services Section */}
        <Section spacing="xl">
          <Container maxWidth="6xl">
            <div className="service-page__section-header">
              <h2 className="service-page__section-title">
                Our Content Services
              </h2>
              <p className="service-page__section-description">
                Complete content solutions from strategy to publication
              </p>
            </div>

            <div className="service-page__features-grid">
              {contentServices.map((service, index) => {
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

        {/* Content Process Section */}
        <Section spacing="xl" sectionStyle="muted">
          <Container maxWidth="6xl">
            <div className="service-page__section-header">
              <h2 className="service-page__section-title">
                Our Content Process
              </h2>
              <p className="service-page__section-description">
                A proven 5-step approach to content excellence
              </p>
            </div>

            <div className="service-page__process-grid">
              {contentProcess.map((step, index) => (
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

        {/* Content Types Section */}
        <Section spacing="xl">
          <Container maxWidth="6xl">
            <div className="service-page__section-header">
              <h2 className="service-page__section-title">
                {contentTypes.title}
              </h2>
              <p className="service-page__section-description">
                {contentTypes.description}
              </p>
            </div>

            <div className="service-page__list-grid">
              {contentTypes.types.map((type, index) => (
                <div key={index} className="service-page__list-item">
                  <h3 className="service-page__list-name">
                    {type.name}
                  </h3>
                  <p className="service-page__list-description">
                    {type.description}
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
                Content Packages
              </h2>
              <p className="service-page__section-description">
                Choose the content solution that fits your business
              </p>
            </div>

            <div className="service-page__pricing-grid">
              {contentPackages.map((pkg, index) => (
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
        <FAQSection faqs={contentFAQs} />

        {/* CTA Section */}
        <CTASection
          title={contentCTA.title}
          description={contentCTA.description}
          buttons={contentCTA.buttons.map(btn => ({
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
