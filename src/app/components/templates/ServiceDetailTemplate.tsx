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
 * Pattern Components:
 * - ✅ StatsGrid — Hero quick stats section
 * - ✅ FeatureList — Service features grid
 * - ✅ FeatureList — Why choose us cards (glow variant, 3 columns)
 * - ✅ CheckList — Benefits & deliverables lists
 * - ✅ FAQSection — FAQ accordion
 * - ✅ FunkyCTA — Final conversion section
 *
 * Sub-components:
 * - ServiceDetailLowerSections — Process, sub-services, why choose,
 *   benefits, related, solutions, testimonials, case studies, FAQ, CTA
 *
 * @see /src/styles/templates/service-detail.css
 * @see /src/app/data/service-page.ts
 * @migrated March 4, 2026 — Migrated inline "Why Choose" cards to FeatureList component (~18 lines saved)
 */

import '../../../styles/templates/service-detail.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Buttons, Button } from '../blocks/design/Buttons';
import { StatsGrid } from '../patterns/StatsGrid';
import { FeatureList } from '../patterns/FeatureList';
import { Sparkle as Sparkles } from '@phosphor-icons/react';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ServiceDetailLowerSections } from './service-detail/ServiceDetailLowerSections';

// Import centralized data
import {
  servicePageHero,
  servicePageOverview,
  servicePageFeatures,
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
              <h2 className="service-detail__title">What we build</h2>
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

      {/* Lower sections extracted for file size compliance */}
      <ServiceDetailLowerSections slug={slug} />
    </div>
  );
}
