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

import '../../../styles/templates/service-detail.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Buttons, Button } from '../blocks/design/Buttons';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { StatsGrid } from '../patterns/StatsGrid';
import { FeatureList } from '../patterns/FeatureList';
import { CheckList } from '../patterns/CheckList';
import { RelatedServices } from '../patterns/RelatedServices';
import { IncludedSolutions } from '../patterns/IncludedSolutions';
import { ServiceTestimonials } from '../patterns/ServiceTestimonials';
import { ServiceCaseStudies } from '../patterns/ServiceCaseStudies';
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

          <StatsGrid stats={servicePageOverview.stats} />
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

          <FeatureList 
            items={servicePageFeatures}
            columns={3}
            variant="glass"
            iconStyle="rounded"
          />
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
                    <CheckList items={subService.features} variant="compact" />
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
                <CheckList items={servicePageBenefits} />
              </div>
            </ScrollReveal>

            {/* Deliverables */}
            <ScrollReveal animation="fade-left" delay={150}>
              <div>
                <h2 className="service-detail__section-subtitle">
                  What You'll Receive
                </h2>
                <CheckList items={servicePageDeliverables} />
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
          INCLUDED IN SOLUTIONS
          ============================================ */}
      <Section spacing="lg">
        <Container>
          <IncludedSolutions
            serviceSlug={slug}
            title="Included in These Solutions"
            description="This service is a core component of these comprehensive solutions."
          />
        </Container>
      </Section>

      {/* ============================================
          RELATED SERVICES
          ============================================ */}
      <Section spacing="lg">
        <Container>
          <RelatedServices
            serviceSlug={slug}
            title="Services That Work Great Together"
            description="These complementary services enhance and extend this offering."
          />
        </Container>
      </Section>

      {/* ============================================
          CLIENT TESTIMONIALS
          ============================================ */}
      <Section spacing="lg">
        <Container>
          <ServiceTestimonials
            serviceSlug={slug}
            title="What Our Clients Say"
            description="Real feedback from real clients who've experienced our services."
            limit={3}
          />
        </Container>
      </Section>

      {/* ============================================
          CASE STUDIES
          ============================================ */}
      <Section spacing="lg">
        <Container>
          <ServiceCaseStudies
            serviceSlug={slug}
            title="Real Projects, Real Results"
            description="See how we've helped clients succeed with this service."
            limit={2}
          />
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