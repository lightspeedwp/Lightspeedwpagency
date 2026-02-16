/**
 * Service Detail Template
 * 
 * WordPress template: templates/page-service-detail.html
 * 
 * Pattern order: Breadcrumbs → Hero → Overview → Features → Process → Sub-Services → Why Choose → Benefits → Related Services → FAQs → CTA
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Buttons, Button } from '../blocks/design/Buttons';
import { FAQSection } from '../patterns/FAQSection';
import { CTASection } from '../patterns/CTASection';
import { Hero } from '../patterns/Hero';
import { 
  Code,
  CheckCircle,
  ArrowRight,
  Clock
} from 'lucide-react';
import { useNavigation } from '../../contexts/NavigationContext';
import '@/styles/templates/service-detail.css';

// Import centralized data
import {
  servicePageHero,
  servicePageOverview,
  servicePageFeatures,
  servicePageProcess,
  servicePageSubServices,
  servicePageWhyChoose,
  servicePageBenefits,
  servicePageDeliverables,
  servicePageRelated,
  servicePageFAQs,
  servicePageCTA
} from '../../data/service-page';

interface ServiceDetailTemplateProps {
  slug?: string;
}

export function ServiceDetailTemplate({ slug = 'wordpress-development' }: ServiceDetailTemplateProps) {
  const { navigateTo } = useNavigation();

  return (
    <>
      {/* Breadcrumbs */}
      <section className="wp-block-breadcrumbs-section">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: servicePageHero.title }
          ]}
        />
      </section>

      {/* Hero Section */}
      <Section 
        spacing="xl"
        className="service-detail__hero"
      >
        {/* Gradient orb decorations */}
        <div className="service-detail__hero-orb" />

        <Container>
          <div className="service-detail__hero-content">
            <div className="service-detail__hero-badge">
              <Code size={14} style={{ display: 'inline', marginRight: 'var(--spacing-2)' }} />
              {servicePageHero.badge.text}
            </div>

            <h1 className="service-detail__hero-title">
              Expert <span className="service-detail__hero-highlight">WordPress</span> Development Services
            </h1>

            <p className="service-detail__hero-tagline">
              {servicePageHero.tagline}
            </p>

            <p className="wp-block-service-hero__description">
              {servicePageHero.description}
            </p>

            <Buttons alignment="center" gap="md">
              <Button 
                page="contact" 
                size="lg"
                variant="default"
                className="service-detail__hero-btn-primary"
              >
                Get a Quote
              </Button>
              <Button 
                page="portfolio" 
                size="lg"
                variant="outline"
                className="service-detail__hero-btn-outline"
              >
                View Our Work
              </Button>
            </Buttons>
          </div>
        </Container>
      </Section>

      {/* Overview Section */}
      <Section spacing="xl" className="service-detail__overview-section">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            <div className="service-detail__section-header">
              <h2 className="service-detail__title">
                {servicePageOverview.title}
              </h2>

              <p className="service-detail__description">
                {servicePageOverview.description}
              </p>
            </div>

            {/* Stats */}
            <div className="service-detail__stats-grid">
              {servicePageOverview.stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="service-detail__stat-card"
                  >
                    <Icon size={32} className="service-detail__stat-icon" />
                    <div className="service-detail__stat-value">
                      {stat.value}
                    </div>
                    <div className="service-detail__stat-label">
                      {stat.label}
                    </div>
                    <p className="service-detail__stat-desc">
                      {stat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section spacing="xl" className="service-detail__features-section">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            <div className="service-detail__section-header">
              <h2 className="service-detail__title">
                What We Build
              </h2>

              <p className="service-detail__description">
                Comprehensive WordPress development services for modern websites
              </p>
            </div>

            <div className="wp-grid-3-cols wp-gap-8">
              {servicePageFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="service-detail__feature-card"
                  >
                    <div className="service-detail__feature-icon-wrapper">
                      <Icon size={28} className="service-detail__feature-icon" />
                    </div>

                    <h3 className="service-detail__feature-title">
                      {feature.title}
                    </h3>
                    <p className="service-detail__feature-desc">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section spacing="xl" className="service-detail__process-section">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            <div className="service-detail__section-header">
              <h2 className="service-detail__title">
                Our Development Process
              </h2>

              <p className="service-detail__description">
                From discovery to launch, we follow a proven process
              </p>
            </div>

            <div className="wp-grid-3-cols wp-gap-8">
              {servicePageProcess.map((step, index) => (
                <div
                  key={index}
                  className="service-detail__process-card"
                >
                  {/* Step Number Badge */}
                  <div className="service-detail__process-number">
                    {step.number}
                  </div>

                  <h3 className="service-detail__process-title wp-mt-2">
                    {step.title}
                  </h3>

                  {step.duration && (
                    <div className="wp-flex wp-items-center wp-text-small wp-font-semibold wp-text-primary wp-mb-3">
                      <Clock size={14} className="wp-mr-2" />
                      {step.duration}
                    </div>
                  )}

                  <p className="service-detail__process-desc">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Sub-Services Section */}
      <Section spacing="xl" className="service-detail__services-section">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            <div className="service-detail__section-header">
              <h2 className="service-detail__title">
                Specialized Services
              </h2>

              <p className="service-detail__description">
                Deep expertise in specific WordPress development areas
              </p>
            </div>

            <div className="wp-grid-2-cols wp-gap-8">
              {servicePageSubServices.map((subService, index) => {
                const Icon = subService.icon;
                return (
                  <div
                    key={index}
                    className="service-detail__package-card"
                  >
                    <div className="service-detail__service-icon-wrapper">
                      <Icon size={32} />
                    </div>

                    <h3 className="service-detail__service-title">
                      {subService.title}
                    </h3>

                    <p className="service-detail__service-desc">
                      {subService.description}
                    </p>

                    {/* Features List */}
                    <ul className="service-detail__feature-list">
                      {subService.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="service-detail__feature-item"
                        >
                          <CheckCircle 
                            size={20} 
                            className="service-detail__feature-icon wp-mt-1"
                          />
                          <span className="service-detail__feature-text">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Choose LightSpeed Section */}
      <Section spacing="xl" className="service-detail__overview-section">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            <div className="service-detail__section-header">
              <h2 className="service-detail__title">
                Why Choose LightSpeed
              </h2>

              <p className="service-detail__description">
                What sets us apart from other WordPress development agencies
              </p>
            </div>

            <div className="wp-grid-2-cols wp-gap-8">
              {servicePageWhyChoose.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={index}
                    className="service-detail__stat-card"
                  >
                    <div className="service-detail__service-icon-wrapper">
                      <Icon size={28} />
                    </div>

                    <h3 className="service-detail__service-title">
                      {reason.title}
                    </h3>
                    <p className="service-detail__service-desc">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits & Deliverables Section */}
      <Section spacing="xl" className="service-detail__benefits-section">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            <div className="wp-grid-2-cols wp-gap-12">
              {/* Benefits */}
              <div>
                <h2 className="service-detail__section-subtitle">
                  Service Benefits
                </h2>

                <ul className="service-detail__feature-list">
                  {servicePageBenefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="service-detail__feature-item wp-mb-4"
                    >
                      <CheckCircle 
                        size={20} 
                        className="service-detail__feature-icon wp-mt-1"
                      />
                      <span className="service-detail__feature-text wp-text-base">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div>
                <h2 className="service-detail__section-subtitle">
                  What You'll Receive
                </h2>

                <ul className="service-detail__feature-list">
                  {servicePageDeliverables.map((deliverable, index) => (
                    <li
                      key={index}
                      className="service-detail__feature-item wp-mb-4"
                    >
                      <CheckCircle 
                        size={20} 
                        className="service-detail__feature-icon wp-mt-1"
                      />
                      <span className="service-detail__feature-text wp-text-base">
                        {deliverable}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Services Section */}
      <Section spacing="xl" className="service-detail__related-section">
        <Container>
          <div className="wp-max-w-6xl wp-mx-auto">
            <div className="service-detail__section-header">
              <h2 className="service-detail__title">
                Related Services
              </h2>

              <p className="service-detail__description">
                Complementary services to enhance your WordPress website
              </p>
            </div>

            <div className="wp-grid-3-cols wp-gap-8">
              {servicePageRelated.map((relatedService, index) => (
                <div
                  key={index}
                  onClick={() => navigateTo(relatedService.page as any)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigateTo(relatedService.page as any); } }}
                  className="service-detail__related-card"
                >
                  <h3 className="service-detail__related-title">
                    {relatedService.title}
                  </h3>
                  <p className="service-detail__related-desc">
                    {relatedService.description}
                  </p>
                  <div className="service-detail__related-link">
                    Learn More <ArrowRight size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        description="Common questions about WordPress development"
        faqs={servicePageFAQs}
        variant="muted"
      />

      {/* CTA Section */}
      <CTASection
        title={servicePageCTA.title}
        description={servicePageCTA.description}
        primaryButtonText={servicePageCTA.buttons[0].text}
        primaryButtonPage={servicePageCTA.buttons[0].page as any}
        secondaryButtonText={servicePageCTA.buttons[1].text}
        secondaryButtonPage={servicePageCTA.buttons[1].page as any}
        gradient="blue"
      />
    </>
  );
}