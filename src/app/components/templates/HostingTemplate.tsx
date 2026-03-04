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
 * Pattern Components:
 * - ✅ FeatureList — Tech features (6 items) + Why choose benefits (4 items)
 * - ✅ StatsGrid — Performance stats (4 items)
 *
 * @migrated March 3, 2026 — Phase 3.1: Migrated inline stats grid and benefits grid to StatsGrid + FeatureList (~80 lines saved)
 * 
 * @see /src/styles/templates/page-service-hosting.css
 * @see /src/app/data/hosting-page.ts
 */

import { useState, useCallback } from 'react';
/* Route-level CSS */
import '../../../styles/templates/hosting-page.css';
import '../../../styles/templates/page-service-hosting.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Button } from '../blocks/design/Buttons';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { FAQSection } from '../patterns/FAQSection';
import { FeatureList } from '../patterns/FeatureList';
import { StatsGrid } from '../patterns/StatsGrid';
import { RelatedServicesGrid } from '../patterns/RelatedServicesGrid';
import { ServiceTestimonial } from '../patterns/ServiceTestimonial';
import { HostingContactModal } from '../patterns/HostingContactModal';
import { Check, X, Rocket, Phone, Shield } from '@phosphor-icons/react';
import { ScrollReveal } from '../../hooks/useScrollReveal';

/* ── Data imports (single source of truth) ── */
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
  hostingCTA
} from '../../data/hosting-page';

import { hostingFAQs } from '../../data/faqs';

export function HostingTemplate() {
  /* ── Modal state ── */
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('Hosting Enquiry');

  const openModal = useCallback((subject: string) => {
    setModalSubject(subject);
    setModalOpen(true);
  }, []);

  return (
    <div className="hosting-lab">
      {/* ============================================
          BREADCRUMBS
          ============================================ */}
      <BreadcrumbPart items={hostingBreadcrumbs} />

      {/* ============================================
          1. HERO — "The Data Centre"
          ============================================ */}
      <section className="hosting-lab__hero">
        {/* Decorative layers */}
        <div className="hosting-lab__hero-mesh" aria-hidden="true" />
        <div className="hosting-lab__hero-grid" aria-hidden="true" />
        <div className="hosting-lab__scanlines" aria-hidden="true" />

        <Container>
          <ScrollReveal animation="fade-up">
            <div className="hosting-lab__hero-inner">
              {/* Badge */}
              <div className="hosting-lab__hero-badge">
                <hostingPageHero.badge.icon size={14} className="animate-pulse" />
                <span>{hostingPageHero.badge.text}</span>
              </div>

              {/* Title */}
              <h1 className="hosting-lab__hero-title">
                <span className="hosting-lab__hero-title-glow">
                  {hostingPageHero.title}
                </span>
              </h1>

              {/* Description */}
              <p className="hosting-lab__hero-desc">
                {hostingPageHero.description}
              </p>

              {/* Buttons — "View plans" navigates, "Talk to sales" opens modal */}
              <div className="hosting-lab__hero-buttons">
                <Button
                  variant="default"
                  size="lg"
                  page={hostingPageHero.primaryButton.page as any}
                  className="neon-hover"
                >
                  <Rocket size={16} />
                  {hostingPageHero.primaryButton.text}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="neon-hover"
                  onClick={() => openModal('Talk to Sales')}
                >
                  <Phone size={16} />
                  {hostingPageHero.secondaryButton.text}
                </Button>
              </div>

              {/* Stats strip — with uptime tick animation on values */}
              <StatsGrid
                stats={hostingStats.map(stat => ({
                  number: stat.value,
                  label: stat.label,
                  icon: stat.icon
                }))}
                columns={4}
                variant="inline"
                className="hosting-lab__stats"
              />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          2. PLANS — "Choose Your Power Level"
          ★ Server Rack section style (LED indicators)
          ============================================ */}
      <section className="hosting-lab__section hosting-lab__plans hosting-lab__section--server-rack">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="hosting-lab__section-header">
              <div className="hosting-lab__section-tag">
                {/* LED status indicators */}
                <span className="hosting-lab__led hosting-lab__led--green" aria-hidden="true" />
                <span className="hosting-lab__led hosting-lab__led--cyan" aria-hidden="true" />
                <span>Select your tier</span>
              </div>
              <h2 className="hosting-lab__section-title">
                Choose your power level
              </h2>
              <p className="hosting-lab__section-desc">
                Scalable resources dedicated to your mission-critical applications.
              </p>
            </div>
          </ScrollReveal>

          <div className="hosting-lab__plans-grid">
            {hostingPlans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <ScrollReveal key={plan.id} animation="fade-up" delay={index * 100}>
                  <div
                    className={`hosting-lab__plan ${plan.popular ? 'hosting-lab__plan--popular neon-glow-pulse' : ''}`}
                  >
                    {plan.popular && (
                      <span className="hosting-lab__popular-tag">Most popular</span>
                    )}

                    {/* Icon */}
                    <div className="hosting-lab__plan-icon-wrap">
                      <Icon size={28} />
                    </div>

                    {/* Name + tagline */}
                    <h3 className="hosting-lab__plan-name">{plan.name}</h3>
                    <p className="hosting-lab__plan-tagline">{plan.tagline}</p>

                    {/* Price */}
                    <div className="hosting-lab__plan-price">
                      <span className="hosting-lab__price-amount">{plan.price.display}</span>
                      <span className="hosting-lab__price-period">{plan.price.period}</span>
                    </div>

                    {/* Specs */}
                    <div className="hosting-lab__specs">
                      <div className="hosting-lab__spec">
                        <div className="hosting-lab__spec-label">Storage</div>
                        <div className="hosting-lab__spec-value">{plan.specifications.storage}</div>
                      </div>
                      <div className="hosting-lab__spec">
                        <div className="hosting-lab__spec-label">Traffic</div>
                        <div className="hosting-lab__spec-value">{plan.specifications.visits}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="hosting-lab__feature-list">
                      {plan.features.map((f, i) => (
                        <li
                          key={i}
                          className={`hosting-lab__feature-row ${
                            f.included
                              ? 'hosting-lab__feature-row--included'
                              : 'hosting-lab__feature-row--excluded'
                          }`}
                        >
                          {f.included ? (
                            <Check size={16} className="hosting-lab__check" />
                          ) : (
                            <X size={16} className="hosting-lab__cross" />
                          )}
                          <span>{f.name}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA — opens modal with plan-specific subject */}
                    <Button
                      size="lg"
                      variant={plan.popular ? 'default' : 'outline'}
                      className="neon-hover"
                      onClick={() => openModal(`${plan.name} Plan Enquiry`)}
                    >
                      {plan.cta.text}
                    </Button>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          3. FEATURES — "System Specs"
          ★ Circuit Board section style (PCB traces)
          ============================================ */}
      <section className="hosting-lab__section hosting-lab__features hosting-lab__section--circuit-board">
        <div className="hosting-lab__scanlines" aria-hidden="true" />
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="hosting-lab__section-header">
              <div className="hosting-lab__section-tag">
                <span>Under the hood</span>
              </div>
              <h2 className="hosting-lab__section-title">
                Enterprise-grade technology
              </h2>
              <p className="hosting-lab__section-desc">
                Built on a battle-tested stack engineered for speed, security, and scale.
              </p>
            </div>
          </ScrollReveal>

          <FeatureList
            items={hostingFeatures}
            columns={3}
            variant="glow"
            iconSize="md"
          />
        </Container>
      </section>

      {/* ============================================
          4. WHY CHOOSE US
          ★ Holographic section style (iridescent sheen)
          ============================================ */}
      <section className="hosting-lab__section hosting-lab__why hosting-lab__section--holographic">
        {/* Holographic sheen overlay */}
        <div className="hosting-lab__holo-sheen" aria-hidden="true" />
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="hosting-lab__section-header">
              <div className="hosting-lab__section-tag">
                <span>The LSX difference</span>
              </div>
              <h2 className="hosting-lab__section-title">
                {whyChooseHosting.title}
              </h2>
              <p className="hosting-lab__section-desc">
                {whyChooseHosting.description}
              </p>
            </div>
          </ScrollReveal>

          <FeatureList
            items={whyChooseHosting.benefits}
            columns={2}
            variant="glass"
            iconSize="md"
          />
        </Container>
      </section>

      {/* ============================================
          5. MIGRATION STEPS
          ★ Data Flow section style (animated streams)
          ============================================ */}
      <section className="hosting-lab__section hosting-lab__migration hosting-lab__section--data-flow">
        {/* Bottom data stream */}
        <div className="hosting-lab__data-stream-bottom" aria-hidden="true" />
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="hosting-lab__section-header">
              <div className="hosting-lab__section-tag">
                <span>Zero-downtime migration</span>
              </div>
              <h2 className="hosting-lab__section-title">
                Switching is effortless
              </h2>
              <p className="hosting-lab__section-desc">
                Four simple steps — we handle the heavy lifting so you can sit back and relax.
              </p>
            </div>
          </ScrollReveal>

          <div className="hosting-lab__steps">
            {hostingMigrationSteps.map((s, index) => (
              <ScrollReveal key={s.step} animation="fade-right" delay={index * 150}>
                <div className="hosting-lab__step">
                  <div className="hosting-lab__step-number hosting-lab__heartbeat">{s.step}</div>
                  <h3 className="hosting-lab__step-title">{s.title}</h3>
                  <p className="hosting-lab__step-desc">{s.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          6. GUARANTEES — "SLA Dashboard"
          ★ Terminal section style (command-prompt aesthetic)
          ============================================ */}
      <section className="hosting-lab__section hosting-lab__guarantees">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="hosting-lab__section-header">
              <div className="hosting-lab__section-tag">
                <Shield size={12} />
                <span>Written in code</span>
              </div>
              <h2 className="hosting-lab__section-title">
                {hostingGuarantees.title}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="hosting-lab__guarantee-card hosting-lab__section--terminal">
              {/* Terminal title bar */}
              <div className="hosting-lab__terminal-bar">
                <span className="hosting-lab__terminal-dot hosting-lab__terminal-dot--red" />
                <span className="hosting-lab__terminal-dot hosting-lab__terminal-dot--yellow" />
                <span className="hosting-lab__terminal-dot hosting-lab__terminal-dot--green" />
                <span className="hosting-lab__terminal-title">
                  sla-dashboard — lightspeed-wp
                  <span className="hosting-lab__terminal-cursor" aria-hidden="true" />
                </span>
              </div>

              <div className="hosting-lab__guarantee-bar" aria-hidden="true" />

              <div className="hosting-lab__guarantee-grid hosting-lab__guarantee-grid--padded">
                {hostingGuarantees.guarantees.map((g, idx) => {
                  const Icon = g.icon;
                  return (
                    <div key={idx} className="hosting-lab__guarantee-item">
                      <div className="hosting-lab__guarantee-icon hosting-lab__shield-activate">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="hosting-lab__guarantee-title">{g.title}</h3>
                        <p className="hosting-lab__guarantee-desc">{g.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          7. TESTIMONIALS
          ============================================ */}
      <section className="hosting-lab__section hosting-lab__testimonials">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="hosting-lab__section-header">
              <div className="hosting-lab__section-tag">
                <span>Customer voices</span>
              </div>
              <h2 className="hosting-lab__section-title">
                Trusted by agencies worldwide
              </h2>
            </div>
          </ScrollReveal>

          <div className="hosting-lab__testimonial-grid">
            {hostingTestimonials.map((t, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 150}>
                <div className="hosting-lab__testimonial hosting-lab__card--holographic">
                  <p className="hosting-lab__testimonial-quote">{t.quote}</p>
                  <div className="hosting-lab__testimonial-author">
                    <div className="hosting-lab__testimonial-avatar">{t.avatar}</div>
                    <div>
                      <div className="hosting-lab__testimonial-name">{t.author}</div>
                      <div className="hosting-lab__testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          8. FAQ
          ============================================ */}
      <section className="hosting-lab__section hosting-lab__faq">
        <Container>
          <ScrollReveal animation="fade-up">
            <FAQSection
              faqs={hostingFAQs}
              title="Hosting questions answered"
              description="Everything you need to know about our managed WordPress hosting."
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          9. CTA — with modal trigger
          ============================================ */}
      <ServiceTestimonial
        serviceSlug="hosting"
        subtitle="Trusted by businesses for reliable WordPress hosting"
      />
      <FunkyCTA
        title={hostingCTA.title}
        description={hostingCTA.description}
        buttonText={hostingCTA.buttons[0].text}
        buttonPage={hostingCTA.buttons[0].page}
        benefits={[
          '99.9% uptime guarantee',
          'Automatic daily backups',
          'Free SSL certificates',
          'WordPress-optimised stack',
          '24/7 expert support'
        ]}
      />

      {/* Inline CTA bar before footer — triggers modal */}
      <section className="hosting-lab__section hosting-lab__inline-cta">
        <Container>
          <div className="hosting-lab__guarantee-card hosting-lab__inline-cta-card">
            <div className="hosting-lab__guarantee-bar" aria-hidden="true" />
            <p className="hosting-lab__inline-cta-text">
              Not sure which plan is right? Let us help.
            </p>
            <Button
              variant="default"
              size="lg"
              className="neon-hover"
              onClick={() => openModal('Help Me Choose')}
            >
              <Phone size={16} />
              Request a free consultation
            </Button>
          </div>
        </Container>
      </section>

      {/* ============================================
          CONTACT MODAL
          ============================================ */}
      <HostingContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        subject={modalSubject}
      />
    </div>
  );
}