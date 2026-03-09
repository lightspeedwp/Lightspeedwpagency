/**
 * Journey Stage Template
 *
 * Shared template for all 6 website-journey phase landing pages
 * (Ignite → Create → Build → Launch → Grow → Evolve).
 *
 * Features:
 * - Horizontal journey progress bar (all 6 phases, clickable)
 * - Phase-specific neon accent colour
 * - Rich content: description, outcomes, services, deliverables
 * - Prev / next navigation for horizontal flow between stages
 * - FunkyCTA at the bottom
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - Zero inline styles except CSS variable dynamic values
 * - All styling via @/styles/templates/page-journey-stage.css
 * - Fonts: var(--font-primary), var(--font-secondary) only
 *
 * @see /src/app/data/journey-stage-pages.ts
 * @see /src/styles/templates/page-journey-stage.css
 */

import '../../../styles/templates/page-journey-stage.css';
import { Link } from 'react-router';
import React from 'react';
import { slugToPath } from '../../utils/route-map';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import {
  journeyStages,
  type JourneyStageData,
} from '../../data/journey-stage-pages';
import {
  CheckCircle, ArrowRight, ArrowLeft, Clock, FileText,
  CaretRight,
} from '@phosphor-icons/react';


/* ─────────────────────────────────────────────
   Sub-components
   ───────────────────────────────────────────── */

/**
 * Horizontal Journey Progress Bar
 *
 * Shows all 6 phases with the current phase highlighted.
 * Completed (previous) phases are filled, future phases are dimmed.
 */
function JourneyProgressBar({ currentIndex }: { currentIndex: number }) {
  return (
    <nav className="journey-progress" aria-label="Website journey progress">
      <div className="journey-progress__track">
        {journeyStages.map((stage, idx) => {
          const state =
            idx < currentIndex
              ? 'completed'
              : idx === currentIndex
              ? 'active'
              : 'future';

          return (
            <div key={stage.slug} style={{ display: 'contents' }}>
              {/* Connector line (before each node except the first) */}
              {idx > 0 && (
                <div
                  className={`journey-progress__connector ${
                    idx <= currentIndex ? 'journey-progress__connector--filled' : ''
                  }`}
                  style={
                    idx <= currentIndex
                      ? ({
                          '--connector-from': journeyStages[idx - 1].accent,
                          '--connector-to': stage.accent,
                        } as React.CSSProperties)
                      : undefined
                  }
                  aria-hidden="true"
                />
              )}

              {/* Phase node */}
              <Link
                to={slugToPath(`journey-${stage.slug}`)}
                className={`journey-progress__node journey-progress__node--${state}`}
                style={{ '--node-accent': stage.accent } as React.CSSProperties}
                aria-label={`Phase ${stage.step}: ${stage.name}${state === 'active' ? ' (current)' : ''}`}
                aria-current={state === 'active' ? 'step' : undefined}
              >
                <span className="journey-progress__pip">{stage.step}</span>
                <span className="journey-progress__label">{stage.name}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

/**
 * Prev / Next Stage Navigation
 */
function StageNavigation({ currentIndex }: { currentIndex: number }) {
  const prev = currentIndex > 0 ? journeyStages[currentIndex - 1] : null;
  const next = currentIndex < journeyStages.length - 1 ? journeyStages[currentIndex + 1] : null;

  return (
    <div className="journey-stage__nav">
      <div className="journey-stage__nav-inner">
        {prev ? (
          <Link
            to={slugToPath(`journey-${prev.slug}`)}
            className="journey-stage__nav-link journey-stage__nav-link--prev"
            style={{ '--nav-accent': prev.accent } as React.CSSProperties}
          >
            <div
              className="journey-stage__nav-pip"
              style={{ '--nav-accent': prev.accent } as React.CSSProperties}
            >
              <ArrowLeft size={20} />
            </div>
            <div className="journey-stage__nav-text">
              <span className="journey-stage__nav-label">Previous phase</span>
              <span className="journey-stage__nav-name">
                {prev.step} {prev.name}
              </span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            to={slugToPath(`journey-${next.slug}`)}
            className="journey-stage__nav-link journey-stage__nav-link--next"
            style={{ '--nav-accent': next.accent } as React.CSSProperties}
          >
            <div
              className="journey-stage__nav-pip"
              style={{ '--nav-accent': next.accent } as React.CSSProperties}
            >
              <ArrowRight size={20} />
            </div>
            <div className="journey-stage__nav-text">
              <span className="journey-stage__nav-label">Next phase</span>
              <span className="journey-stage__nav-name">
                {next.step} {next.name}
              </span>
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Template
   ───────────────────────────────────────────── */

interface JourneyStageTemplateProps {
  /** URL slug for the stage (e.g. "ignite") */
  slug: string;
}

export function JourneyStageTemplate({ slug }: JourneyStageTemplateProps) {
  const currentIndex = journeyStages.findIndex((s) => s.slug === slug);
  const data: JourneyStageData | undefined = journeyStages[currentIndex];

  if (!data) {
    return (
      <div style={{ padding: 'var(--section-padding-y) var(--section-padding-x)', textAlign: 'center' }}>
        <h1>Stage not found</h1>
        <p>The journey stage "{slug}" does not exist.</p>
      </div>
    );
  }

  const PhaseIcon = data.icon;

  const breadcrumbs = [
    { label: 'Home', page: 'front-page' },
    { label: 'Services', page: 'services' },
    { label: `${data.step} ${data.name}` },
  ];

  return (
    <>
      {/* ── Breadcrumbs ── */}
      <BreadcrumbPart items={breadcrumbs} />

      {/* ── Journey Progress Bar ── */}
      <JourneyProgressBar currentIndex={currentIndex} />

      {/* ============================================
          1. HERO
          ============================================ */}
      <section
        className="journey-stage__hero"
        style={{ '--phase-accent': data.accent } as React.CSSProperties}
      >
        <div className="journey-stage__hero-grid" aria-hidden="true" />
        <div className="journey-stage__hero-glow" aria-hidden="true" />

        <ScrollReveal animation="fade-up">
          <div className="journey-stage__hero-inner">
            <div className="journey-stage__badge">
              <PhaseIcon size={16} className="journey-stage__badge-icon" />
              <span>Phase {data.step}</span>
            </div>

            <h1 className="journey-stage__title">
              <span className="journey-stage__title-accent">{data.name}.</span>{' '}
              {data.tagline}
            </h1>

            <p className="journey-stage__tagline">{data.description.split('.').slice(0, 2).join('.') + '.'}</p>

            <div className="journey-stage__duration">
              <Clock size={16} className="journey-stage__duration-icon" />
              <span>Typical duration: {data.duration}</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ============================================
          2. DESCRIPTION — What Happens / Why It Matters
          ============================================ */}
      <section
        className="journey-stage__description"
        style={{ '--phase-accent': data.accent } as React.CSSProperties}
      >
        <ScrollReveal animation="fade-up">
          <div className="journey-stage__description-inner">
            <div className="journey-stage__desc-block">
              <h2 className="journey-stage__desc-heading">What happens during {data.name}?</h2>
              <p className="journey-stage__desc-text">{data.description}</p>
            </div>
            <div className="journey-stage__desc-block">
              <h2 className="journey-stage__desc-heading">Why it matters</h2>
              <p className="journey-stage__desc-text">{data.whyItMatters}</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ============================================
          3. OUTCOMES — Key Results
          ============================================ */}
      <section
        className="journey-stage__outcomes"
        style={{ '--phase-accent': data.accent } as React.CSSProperties}
      >
        <div className="journey-stage__outcomes-inner">
          <ScrollReveal animation="fade-up">
            <h2 className="journey-stage__outcomes-heading">
              What you'll achieve in {data.name}
            </h2>
          </ScrollReveal>

          <div className="journey-stage__outcomes-grid">
            {data.outcomes.map((outcome, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
                <div className="journey-stage__outcome-item">
                  <CheckCircle size={20} className="journey-stage__outcome-icon" />
                  <span className="journey-stage__outcome-text">{outcome}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          4. SERVICES — Cards linking to service pages
          ============================================ */}
      <section
        className="journey-stage__services"
        style={{ '--phase-accent': data.accent } as React.CSSProperties}
      >
        <div className="journey-stage__services-inner">
          <ScrollReveal animation="fade-up">
            <h2 className="journey-stage__services-heading">
              Services in this phase
            </h2>
            <p className="journey-stage__services-subheading">
              Each service can be engaged individually or as part of the full journey.
            </p>
          </ScrollReveal>

          <div className="journey-stage__services-grid">
            {data.services.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <ScrollReveal key={service.page} animation="fade-up" delay={idx * 100}>
                  <Link
                    to={slugToPath(service.page)}
                    className="journey-stage__service-card"
                  >
                    {service.badge && (
                      <span className="journey-stage__service-badge">{service.badge}</span>
                    )}

                    <div className="journey-stage__service-card-header">
                      <div className="journey-stage__service-icon">
                        <ServiceIcon size={22} />
                      </div>
                      <h3 className="journey-stage__service-title">{service.title}</h3>
                    </div>

                    <p className="journey-stage__service-desc">{service.description}</p>

                    <div className="journey-stage__service-arrow">
                      Learn more <CaretRight size={16} />
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          5. DELIVERABLES + CLIENT ROLE
          ============================================ */}
      <section
        className="journey-stage__deliverables"
        style={{ '--phase-accent': data.accent } as React.CSSProperties}
      >
        <div className="journey-stage__deliverables-inner">
          {/* Left: Deliverables list */}
          <div>
            <ScrollReveal animation="fade-up">
              <h2 className="journey-stage__deliverables-heading">
                What you'll receive
              </h2>
            </ScrollReveal>

            <div className="journey-stage__deliverables-list">
              {data.deliverables.map((item, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
                  <div className="journey-stage__deliverable-item">
                    <div className="journey-stage__deliverable-marker">
                      <FileText size={18} />
                    </div>
                    <div className="journey-stage__deliverable-content">
                      <span className="journey-stage__deliverable-label">{item.label}</span>
                      <span className="journey-stage__deliverable-desc">{item.description}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: Client role sidebar */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="journey-stage__client-role">
              <h3 className="journey-stage__client-role-heading">{data.clientRole.title}</h3>
              <ul className="journey-stage__client-role-list">
                {data.clientRole.items.map((item, idx) => (
                  <li key={idx} className="journey-stage__client-role-item">
                    <CheckCircle size={16} className="journey-stage__client-role-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          6. TESTIMONIAL
          ============================================ */}
      <section
        className="journey-stage__testimonial"
        style={{ '--phase-accent': data.accent } as React.CSSProperties}
      >
        <ScrollReveal animation="fade-up">
          <div className="journey-stage__testimonial-inner">
            <p className="journey-stage__testimonial-quote">{data.testimonial.quote}</p>
            <p className="journey-stage__testimonial-author">
              <strong>{data.testimonial.author}</strong> — {data.testimonial.role}
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ============================================
          7. PREV / NEXT NAVIGATION
          ============================================ */}
      <StageNavigation currentIndex={currentIndex} />

      {/* ============================================
          8. CTA
          ============================================ */}
      <FunkyCTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonPage={data.cta.buttonPage}
        benefits={data.outcomes.slice(0, 3)}
      />
    </>
  );
}