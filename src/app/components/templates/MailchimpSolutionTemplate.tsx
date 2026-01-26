/**
 * Mailchimp Solution Page Template
 * 
 * Dedicated page for Mailchimp integration solution.
 * WordPress Mapping: Solution detail page
 * 
 * Sections:
 * - Hero (solution introduction with badge)
 * - Why Mailchimp (4 benefits in 2-column grid)
 * - Features (6 integration features in 3-column grid)
 * - Our Process (6-step grid)
 * - Pricing Packages (3-tier comparison)
 * - Case Study (with results metrics)
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
  mailchimpSolutionHero,
  whyMailchimp,
  mailchimpFeatures,
  mailchimpProcess,
  mailchimpPackages,
  mailchimpCaseStudy,
  mailchimpFAQs,
  mailchimpCTA
} from '@/app/data/mailchimp-solution-page';

/**
 * Mailchimp Solution Page Template
 */
export function MailchimpSolutionTemplate() {
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
            icon: mailchimpSolutionHero.badge.icon,
            text: mailchimpSolutionHero.badge.text
          }}
          title={mailchimpSolutionHero.title}
          titleHighlight={mailchimpSolutionHero.titleHighlight}
          description={mailchimpSolutionHero.description}
        >
          <Buttons
            buttons={[
              { text: mailchimpSolutionHero.cta.primary.text, page: mailchimpSolutionHero.cta.primary.page, variant: 'default', size: 'lg' },
              { text: mailchimpSolutionHero.cta.secondary.text, page: mailchimpSolutionHero.cta.secondary.page, variant: 'outline', size: 'lg' }
            ]}
            alignment="center"
          />
        </Hero>

        {/* Why Mailchimp Section */}
        <Section spacing="xl" sectionStyle="muted">
          <Container maxWidth="6xl">
            <div className="mailchimp__section-header">
              <h2 className="mailchimp__section-title">
                {whyMailchimp.title}
              </h2>
              <p className="mailchimp__section-description">
                {whyMailchimp.description}
              </p>
            </div>

            <div className="mailchimp__benefits-grid">
              {whyMailchimp.benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="mailchimp__benefit-card">
                    <div className="mailchimp__benefit-icon">
                      <Icon />
                    </div>
                    <h3 className="mailchimp__benefit-title">
                      {benefit.title}
                    </h3>
                    <p className="mailchimp__benefit-description">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Integration Features Section */}
        <Section spacing="xl">
          <Container maxWidth="6xl">
            <div className="mailchimp__section-header">
              <h2 className="mailchimp__section-title">
                Our Integration Services
              </h2>
              <p className="mailchimp__section-description">
                Complete Mailchimp integration tailored to your business needs
              </p>
            </div>

            <div className="mailchimp__features-grid">
              {mailchimpFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="mailchimp__feature-card">
                    <div className="mailchimp__feature-icon">
                      <Icon />
                    </div>
                    <h3 className="mailchimp__feature-title">
                      {feature.title}
                    </h3>
                    <p className="mailchimp__feature-description">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Integration Process Section */}
        <Section spacing="xl" sectionStyle="muted">
          <Container maxWidth="6xl">
            <div className="mailchimp__section-header">
              <h2 className="mailchimp__section-title">
                Our Integration Process
              </h2>
              <p className="mailchimp__section-description">
                A proven 6-step approach to successful email marketing
              </p>
            </div>

            <div className="mailchimp__process-grid">
              {mailchimpProcess.map((step, index) => (
                <div key={index} className="mailchimp__process-step">
                  <div className="mailchimp__process-number">
                    {step.step}
                  </div>
                  <div className="mailchimp__process-content">
                    <h3 className="mailchimp__process-title">
                      {step.title}
                    </h3>
                    <p className="mailchimp__process-description">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Pricing Packages Section */}
        <Section spacing="xl">
          <Container maxWidth="6xl">
            <div className="mailchimp__section-header">
              <h2 className="mailchimp__section-title">
                Integration Packages
              </h2>
              <p className="mailchimp__section-description">
                Choose the package that fits your business needs
              </p>
            </div>

            <div className="mailchimp__pricing-grid">
              {mailchimpPackages.map((plan, index) => (
                <div
                  key={index}
                  className={`mailchimp__pricing-card ${
                    plan.popular ? 'mailchimp__pricing-card--popular' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="mailchimp__pricing-badge">
                      Most Popular
                    </div>
                  )}

                  <h3 className="mailchimp__pricing-name">
                    {plan.name}
                  </h3>
                  <p className="mailchimp__pricing-tagline">
                    {plan.tagline}
                  </p>

                  <div className="mailchimp__pricing-price">
                    <span className="mailchimp__pricing-amount">
                      {plan.price.display}
                    </span>
                    <span className="mailchimp__pricing-period">
                      {plan.price.period}
                    </span>
                  </div>

                  <p className="mailchimp__pricing-description">
                    {plan.description}
                  </p>

                  <div className="mailchimp__pricing-features">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="mailchimp__pricing-feature">
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

        {/* Case Study Section */}
        <Section spacing="xl" sectionStyle="muted">
          <Container maxWidth="6xl">
            <div className="mailchimp__case-study">
              <div className="mailchimp__case-study-header">
                <h2 className="mailchimp__case-study-title">
                  {mailchimpCaseStudy.title}
                </h2>
                <blockquote className="mailchimp__case-study-quote">
                  &ldquo;{mailchimpCaseStudy.quote}&rdquo;
                </blockquote>
                <div className="mailchimp__case-study-author">
                  {mailchimpCaseStudy.author}
                </div>
                <div className="mailchimp__case-study-role">
                  {mailchimpCaseStudy.role}, {mailchimpCaseStudy.client}
                </div>
              </div>

              <div className="mailchimp__results-grid">
                {mailchimpCaseStudy.results.map((result, index) => (
                  <div key={index} className="mailchimp__result-item">
                    <div className="mailchimp__result-metric">
                      {result.metric}
                    </div>
                    <div className="mailchimp__result-label">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <FAQSection faqs={mailchimpFAQs} />

        {/* CTA Section */}
        <CTASection
          title={mailchimpCTA.title}
          description={mailchimpCTA.description}
          primaryButtonText={mailchimpCTA.buttons[0].text}
          primaryButtonPage={mailchimpCTA.buttons[0].page}
          secondaryButtonText={mailchimpCTA.buttons[1].text}
          secondaryButtonPage={mailchimpCTA.buttons[1].page}
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}
