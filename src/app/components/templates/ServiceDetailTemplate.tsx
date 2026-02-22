/**
 * Service Detail Template — Funky Neon Redesign
 *
 * Generic service detail page with neon mesh hero, glass feature cards,
 * holographic process steps, and FunkyCTA. All content driven by
 * centralised data from `/src/app/data/service-page.ts`.
 *
 * Migration notes:
 *  - `useNavigation()` → declarative `<Link>` from react-router
 *  - `CTASection` → `FunkyCTA`
 *  - Inline styles → BEM classes in service-detail.css
 *  - `motion/react` → `useScrollReveal`
 *
 * @see /src/styles/templates/service-detail.css
 * @see /src/app/data/service-page.ts
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Buttons, Button } from '../blocks/design/Buttons';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import {
  CheckCircle,
  ArrowRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { slugToPath } from '../../utils/route-map';

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
  servicePageCTA,
} from '../../data/service-page';

interface ServiceDetailTemplateProps {
  slug?: string;
}

export function ServiceDetailTemplate({
  slug = 'wordpress-development',
}: ServiceDetailTemplateProps) {
  return (
    <div className="service-detail">
      {/* ============================================
          BREADCRUMBS
          ============================================ */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: servicePageHero.title },
        ]}
      />

      {/* ============================================
          HERO — Neon Mesh
          ============================================ */}
      <section className="service-detail__hero">
        {/* Decorative layers */}
        <div className="service-detail__hero-mesh" aria-hidden="true" />
        <div className="service-detail__hero-orb service-detail__hero-orb--1" aria-hidden="true" />
        <div className="service-detail__hero-orb service-detail__hero-orb--2" aria-hidden="true" />

        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-detail__hero-content">
              {/* Neon Badge */}
              <div className="service-detail__hero-badge">
                <Sparkles size={14} className="service-detail__badge-icon" />
                <span>{servicePageHero.badge.text}</span>
              </div>

              <h1 className="service-detail__hero-title">
                Expert{' '}
                <span className="service-detail__hero-highlight">WordPress</span>{' '}
                Development Services
              </h1>

              <p className="service-detail__hero-tagline">
                {servicePageHero.tagline}
              </p>

              <p className="service-detail__hero-desc">
                {servicePageHero.description}
              </p>

              <Buttons align="center">
                <Button
                  page="contact"
                  size="lg"
                  variant="default"
                  className="neon-hover"
                >
                  Get a Quote
                </Button>
                <Button
                  page="portfolio"
                  size="lg"
                  variant="outline"
                  className="neon-hover"
                >
                  View Our Work
                </Button>
              </Buttons>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          OVERVIEW — Stats Grid
          ============================================ */}
      <Section spacing="xl" className="service-detail__overview-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-detail__section-header">
              <h2 className="service-detail__title">
                {servicePageOverview.title}
              </h2>
              <p className="service-detail__description">
                {servicePageOverview.description}
              </p>
            </div>
          </ScrollReveal>

          <div className="service-detail__stats-grid">
            {servicePageOverview.stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                  <div className="service-detail__stat-card">
                    <Icon size={32} className="service-detail__stat-icon" />
                    <div className="service-detail__stat-value">{stat.value}</div>
                    <div className="service-detail__stat-label">{stat.label}</div>
                    <p className="service-detail__stat-desc">{stat.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ============================================
          FEATURES — Glass Cards
          ============================================ */}
      <Section spacing="xl" className="service-detail__features-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-detail__section-header">
              <h2 className="service-detail__title">What We Build</h2>
              <p className="service-detail__description">
                Comprehensive WordPress development services for modern websites
              </p>
            </div>
          </ScrollReveal>

          <div className="service-detail__features-grid">
            {servicePageFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                  <div className="service-detail__feature-card">
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
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ============================================
          PROCESS — Numbered Steps
          ============================================ */}
      <Section spacing="xl" className="service-detail__process-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-detail__section-header">
              <h2 className="service-detail__title">Our Development Process</h2>
              <p className="service-detail__description">
                From discovery to launch, we follow a proven process
              </p>
            </div>
          </ScrollReveal>

          <div className="service-detail__process-grid">
            {servicePageProcess.map((step, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="service-detail__process-card">
                  <div className="service-detail__process-number">
                    {step.number}
                  </div>
                  <h3 className="service-detail__process-title">{step.title}</h3>
                  {step.duration && (
                    <div className="service-detail__process-duration">
                      <Clock size={14} />
                      {step.duration}
                    </div>
                  )}
                  <p className="service-detail__process-desc">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============================================
          SUB-SERVICES
          ============================================ */}
      <Section spacing="xl" className="service-detail__services-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-detail__section-header">
              <h2 className="service-detail__title">Specialized Services</h2>
              <p className="service-detail__description">
                Deep expertise in specific WordPress development areas
              </p>
            </div>
          </ScrollReveal>

          <div className="service-detail__sub-services-grid">
            {servicePageSubServices.map((subService, index) => {
              const Icon = subService.icon;
              return (
                <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                  <div className="service-detail__package-card">
                    <div className="service-detail__service-icon-wrapper">
                      <Icon size={32} />
                    </div>
                    <h3 className="service-detail__service-title">
                      {subService.title}
                    </h3>
                    <p className="service-detail__service-desc">
                      {subService.description}
                    </p>
                    <ul className="service-detail__feature-list">
                      {subService.features.map((feature, idx) => (
                        <li key={idx} className="service-detail__feature-item">
                          <CheckCircle
                            size={20}
                            className="service-detail__check-icon"
                          />
                          <span className="service-detail__feature-text">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ============================================
          WHY CHOOSE LIGHTSPEED
          ============================================ */}
      <Section spacing="xl" className="service-detail__overview-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-detail__section-header">
              <h2 className="service-detail__title">Why Choose LightSpeed</h2>
              <p className="service-detail__description">
                What sets us apart from other WordPress development agencies
              </p>
            </div>
          </ScrollReveal>

          <div className="service-detail__why-grid">
            {servicePageWhyChoose.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                  <div className="service-detail__stat-card">
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
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ============================================
          BENEFITS & DELIVERABLES
          ============================================ */}
      <Section spacing="xl" className="service-detail__benefits-section">
        <Container>
          <div className="service-detail__benefits-grid">
            {/* Benefits */}
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="service-detail__section-subtitle">
                  Service Benefits
                </h2>
                <ul className="service-detail__feature-list">
                  {servicePageBenefits.map((benefit, index) => (
                    <li key={index} className="service-detail__feature-item">
                      <CheckCircle
                        size={20}
                        className="service-detail__check-icon"
                      />
                      <span className="service-detail__feature-text">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Deliverables */}
            <ScrollReveal animation="fade-left" delay={150}>
              <div>
                <h2 className="service-detail__section-subtitle">
                  What You'll Receive
                </h2>
                <ul className="service-detail__feature-list">
                  {servicePageDeliverables.map((deliverable, index) => (
                    <li key={index} className="service-detail__feature-item">
                      <CheckCircle
                        size={20}
                        className="service-detail__check-icon"
                      />
                      <span className="service-detail__feature-text">
                        {deliverable}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ============================================
          RELATED SERVICES — <Link> navigation
          ============================================ */}
      <Section spacing="xl" className="service-detail__related-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="service-detail__section-header">
              <h2 className="service-detail__title">Related Services</h2>
              <p className="service-detail__description">
                Complementary services to enhance your WordPress website
              </p>
            </div>
          </ScrollReveal>

          <div className="service-detail__related-grid">
            {servicePageRelated.map((relatedService, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <Link
                  to={slugToPath(relatedService.page) || `/services/${relatedService.page}`}
                  className="service-detail__related-card"
                  aria-label={`Learn more about ${relatedService.title}`}
                >
                  <h3 className="service-detail__related-title">
                    {relatedService.title}
                  </h3>
                  <p className="service-detail__related-desc">
                    {relatedService.description}
                  </p>
                  <span className="service-detail__related-link">
                    Learn More <ArrowRight size={16} />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============================================
          FAQ
          ============================================ */}
      <ScrollReveal animation="fade-up">
        <FAQSection
          title="Frequently Asked Questions"
          description="Common questions about WordPress development"
          faqs={servicePageFAQs}
          variant="muted"
        />
      </ScrollReveal>

      {/* ============================================
          CTA — FunkyCTA
          ============================================ */}
      <FunkyCTA
        title={servicePageCTA.title}
        description={servicePageCTA.description}
        buttonText={servicePageCTA.buttons[0].text}
        buttonPage={servicePageCTA.buttons[0].page}
        benefits={[
          'Expert WordPress developers',
          'Transparent project management',
          'Fixed-price project quotes',
          'Post-launch support included',
          'WCAG 2.1 AA compliant builds',
        ]}
      />
    </div>
  );
}