/**
 * HostingTemplate — "Neon Server Lab" Funky Redesign
 *
 * A cyberpunk-styled hosting page with neon glow effects, glass panels,
 * scanline overlays, and animated gradients. Every piece of content is
 * driven by mock data from `/src/app/data/hosting-page.ts`.
 *
 * Sections:
 *  1. Hero  (badge → title → desc → buttons → stats)
 *  2. Plans (3-tier pricing cards)              — Server Rack style
 *  3. Features (6 tech-stack cards)             — Circuit Board style
 *  4. Why choose us (4 benefit cards)           — Holographic style
 *  5. Migration steps (4-step process)          — Data Flow style
 *  6. Guarantees (trust-signal card)            — Terminal style
 *  7. Testimonials (2 quotes)
 *  8. FAQ (accordion)
 *  9. CTA (gradient section)
 *
 * Sub-components:
 * - HostingPlanCards — Pricing tier cards (section 2)
 * - HostingLowerSections — Sections 5-8
 *
 * @split March 16, 2026 — Extracted plan cards + lower sections (499→~210 lines)
 * @see /src/styles/templates/page-service-hosting.css
 * @see /src/app/data/hosting-page.ts
 */

import { useState, useCallback } from 'react';
import '../../../styles/templates/hosting-page.css';
import '../../../styles/templates/page-service-hosting.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Button } from '../blocks/design/Buttons';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { FeatureList } from '../patterns/FeatureList';
import { StatsGrid } from '../patterns/StatsGrid';
import { RelatedServicesGrid } from '../patterns/RelatedServicesGrid';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { HostingContactModal } from '../patterns/HostingContactModal';
import { Rocket, Phone } from '@phosphor-icons/react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

import {
  hostingBreadcrumbs,
  hostingPageHero,
  hostingStats,
  hostingPlans,
  hostingFeatures,
  whyChooseHosting,
  hostingMigrationSteps,
  hostingGuarantees,
  hostingTestimonials,
  hostingCTA,
} from '../../data/hosting-page';
import { hostingFAQs } from '../../data/faqs';

import { HostingPlanCards } from './hosting/HostingPlanCards';
import { HostingLowerSections } from './hosting/HostingLowerSections';

export function HostingTemplate() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('Hosting Enquiry');

  const openModal = useCallback((subject: string) => {
    setModalSubject(subject);
    setModalOpen(true);
  }, []);

  return (
    <div className="hosting-lab">
      <BreadcrumbPart items={hostingBreadcrumbs} />

      {/* 1. HERO — "The Data Centre" */}
      <section className="hosting-lab__hero">
        <div className="hosting-lab__hero-mesh" aria-hidden="true" />
        <div className="hosting-lab__hero-grid" aria-hidden="true" />
        <div className="hosting-lab__scanlines" aria-hidden="true" />
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="hosting-lab__hero-inner">
              <div className="hosting-lab__hero-badge">
                <hostingPageHero.badge.icon size={14} className="wp-animate-pulse" />
                <span>{hostingPageHero.badge.text}</span>
              </div>
              <h1 className="hosting-lab__hero-title">
                <span className="hosting-lab__hero-title-glow">{hostingPageHero.title}</span>
              </h1>
              <p className="hosting-lab__hero-desc">{hostingPageHero.description}</p>
              <div className="hosting-lab__hero-buttons">
                <Button variant="default" size="lg" page={hostingPageHero.primaryButton.page as any} className="neon-hover">
                  <Rocket size={16} /> {hostingPageHero.primaryButton.text}
                </Button>
                <Button variant="outline" size="lg" className="neon-hover" onClick={() => openModal('Talk to Sales')}>
                  <Phone size={16} /> {hostingPageHero.secondaryButton.text}
                </Button>
              </div>
              <StatsGrid
                stats={hostingStats.map(stat => ({ number: stat.value, label: stat.label, icon: stat.icon }))}
                columns={4} variant="inline" className="hosting-lab__stats"
              />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 2. PLANS — "Choose Your Power Level" */}
      <section className="hosting-lab__section hosting-lab__plans hosting-lab__section--server-rack">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="hosting-lab__section-header">
              <div className="hosting-lab__section-tag">
                <span className="hosting-lab__led hosting-lab__led--green" aria-hidden="true" />
                <span className="hosting-lab__led hosting-lab__led--cyan" aria-hidden="true" />
                <span>Select your tier</span>
              </div>
              <h2 className="hosting-lab__section-title">Choose your power level</h2>
              <p className="hosting-lab__section-desc">
                Scalable resources dedicated to your mission-critical applications.
              </p>
            </div>
          </ScrollReveal>
          <HostingPlanCards plans={hostingPlans} onPlanSelect={openModal} />
        </Container>
      </section>

      {/* 3. FEATURES — "System Specs" */}
      <section className="hosting-lab__section hosting-lab__features hosting-lab__section--circuit-board">
        <div className="hosting-lab__scanlines" aria-hidden="true" />
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="hosting-lab__section-header">
              <div className="hosting-lab__section-tag"><span>Under the hood</span></div>
              <h2 className="hosting-lab__section-title">Enterprise-grade technology</h2>
              <p className="hosting-lab__section-desc">
                Built on a battle-tested stack engineered for speed, security, and scale.
              </p>
            </div>
          </ScrollReveal>
          <FeatureList items={hostingFeatures} columns={3} variant="glow" iconSize="md" />
        </Container>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="hosting-lab__section hosting-lab__why hosting-lab__section--holographic">
        <div className="hosting-lab__holo-sheen" aria-hidden="true" />
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="hosting-lab__section-header">
              <div className="hosting-lab__section-tag"><span>The LSX difference</span></div>
              <h2 className="hosting-lab__section-title">{whyChooseHosting.title}</h2>
              <p className="hosting-lab__section-desc">{whyChooseHosting.description}</p>
            </div>
          </ScrollReveal>
          <FeatureList items={whyChooseHosting.benefits} columns={2} variant="glass" iconSize="md" />
        </Container>
      </section>

      {/* Sections 5-8: Migration, Guarantees, Testimonials, FAQ */}
      <HostingLowerSections
        migrationSteps={hostingMigrationSteps}
        guarantees={hostingGuarantees}
        testimonials={hostingTestimonials}
        faqs={hostingFAQs}
      />

      {/* 9. CTA */}
      <ServiceTestimonial serviceSlug="hosting" subtitle="Trusted by businesses for reliable WordPress hosting" />
      <FunkyCTA
        title={hostingCTA.title}
        description={hostingCTA.description}
        buttonText={hostingCTA.buttons[0].text}
        buttonPage={hostingCTA.buttons[0].page}
        benefits={['99.9% uptime guarantee', 'Automatic daily backups', 'Free SSL certificates', 'WordPress-optimised stack', '24/7 expert support']}
      />

      <section className="hosting-lab__section hosting-lab__inline-cta">
        <Container>
          <div className="hosting-lab__guarantee-card hosting-lab__inline-cta-card">
            <div className="hosting-lab__guarantee-bar" aria-hidden="true" />
            <p className="hosting-lab__inline-cta-text">Not sure which plan is right? Let us help.</p>
            <Button variant="default" size="lg" className="neon-hover" onClick={() => openModal('Help Me Choose')}>
              <Phone size={16} /> Request a free consultation
            </Button>
          </div>
        </Container>
      </section>

      <HostingContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} subject={modalSubject} />
    </div>
  );
}
