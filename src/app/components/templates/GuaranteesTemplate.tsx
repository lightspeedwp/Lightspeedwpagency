/**
 * Guarantees Template — Funky Neon Redesign
 *
 * Full-featured guarantees page with mesh hero, neon-glow cards,
 * numbered process steps, and trust signal stats. All content is
 * driven by centralised mock data.
 *
 * Sections:
 *  1. Hero (mesh grid + orb glow + badge + title)
 *  2. Core Guarantees (icon cards with checklist details)
 *  3. How It Works (numbered step cards)
 *  4. Trust Signals (stat cards)
 *  5. FAQ + CTA
 *
 * Pattern Components:
 * - ✅ ProcessTimeline — How it works steps (horizontal orientation)
 * - ✅ StatsGrid — Trust signal stat cards (cards variant, 4 columns)
 * - ✅ FAQSection — Guarantees FAQ section
 * - ✅ FunkyCTA — Final conversion section
 *
 * @see /src/styles/templates/guarantees.css
 * @see /src/app/data/guarantees-page.ts
 * @migrated March 4, 2026 — Migrated inline process steps to ProcessTimeline and trust signals to StatsGrid (~30 lines saved)
 */

import '../../../styles/templates/guarantees.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { FAQSection } from '../patterns/FAQSection';
import { StatsGrid } from '../patterns/StatsGrid';
import { ProcessTimeline } from '../patterns/ProcessTimeline';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Check, ShieldCheck } from '@phosphor-icons/react';

/* ── Data imports ── */
import {
  guaranteesPageHero,
  mainGuarantees,
  guaranteesProcess,
  trustSignals,
  guaranteesFAQs,
  guaranteesCTA
} from '../../data/guarantees-page';

/* ── Map data to pattern component shapes ── */
const processTimelineSteps = guaranteesProcess.steps.map((s) => ({
  id: `guar-step-${s.number}`,
  number: parseInt(s.number, 10),
  title: s.title,
  description: s.description,
}));

const trustStats = trustSignals.signals.map((s) => ({
  value: s.stat,
  label: s.label,
  description: s.description,
  icon: s.icon,
}));

export function GuaranteesTemplate() {
  return (
    <>
      {/* ── Breadcrumbs ── */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: guaranteesPageHero.title },
        ]}
      />

      {/* ============================================
          1. HERO
          ============================================ */}
      <section className="guar__hero">
        <div className="guar__hero-grid" aria-hidden="true" />
        <div className="guar__hero-orb" aria-hidden="true" />

        <Container>
          <ScrollReveal animation="fade-up">
            <div className="guar__hero-inner">
              <div className="guar__hero-badge">
                <ShieldCheck size={14} />
                <span>{guaranteesPageHero.badge.text}</span>
              </div>

              <h1 className="guar__hero-title">
                Our{' '}
                <span className="guar__hero-title-highlight">Guarantees</span>
              </h1>

              <p className="guar__hero-tagline">
                {guaranteesPageHero.tagline}
              </p>

              <p className="guar__hero-desc">
                {guaranteesPageHero.description}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          2. CORE GUARANTEES
          ============================================ */}
      <section className="guar__core">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="guar__section-header">
              <h2 className="guar__section-title">Our Core Guarantees</h2>
              <p className="guar__section-desc">
                Every guarantee is backed by real commitments, not empty promises
              </p>
            </div>
          </ScrollReveal>

          <div className="guar__core-grid">
            {mainGuarantees.map((guarantee) => {
              const Icon = guarantee.icon;
              return (
                <ScrollReveal key={guarantee.id} animation="fade-up">
                  <article className="guar__card">
                    {guarantee.badge && (
                      <span className="guar__card-badge">{guarantee.badge}</span>
                    )}

                    <div className="guar__card-icon">
                      <Icon size={28} />
                    </div>

                    <h3 className="guar__card-title">{guarantee.title}</h3>
                    <p className="guar__card-desc">{guarantee.description}</p>

                    <ul className="guar__details">
                      {guarantee.details.map((detail, idx) => (
                        <li key={idx} className="guar__detail-item">
                          <Check size={16} className="guar__detail-check" />
                          <span className="guar__detail-text">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          3. HOW IT WORKS
          ============================================ */}
      <section className="guar__process">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="guar__section-header">
              <h2 className="guar__section-title">{guaranteesProcess.title}</h2>
              <p className="guar__section-desc">{guaranteesProcess.description}</p>
            </div>
          </ScrollReveal>

          <ProcessTimeline
            steps={processTimelineSteps}
            orientation="horizontal"
          />
        </Container>
      </section>

      {/* ============================================
          4. TRUST SIGNALS
          ============================================ */}
      <section className="guar__trust">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="guar__section-header">
              <h2 className="guar__section-title">{trustSignals.title}</h2>
              <p className="guar__section-desc">{trustSignals.description}</p>
            </div>
          </ScrollReveal>

          <StatsGrid
            stats={trustStats}
            columns={4}
            variant="cards"
          />
        </Container>
      </section>

      {/* ============================================
          5. FAQ + CTA
          ============================================ */}
      <FAQSection faqs={guaranteesFAQs} />

      <FunkyCTA
        title={guaranteesCTA.title}
        description={guaranteesCTA.description}
        buttonText={guaranteesCTA.buttons[0].text}
        buttonPage={guaranteesCTA.buttons[0].page}
        benefits={[
          '100% satisfaction guarantee',
          'Transparent pricing — no hidden fees',
          'Dedicated project manager',
          '24/7 support after launch'
        ]}
      />
    </>
  );
}