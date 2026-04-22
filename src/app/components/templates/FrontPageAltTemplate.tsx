/**
 * Front Page Alt Template
 *
 * Alternative homepage at `/home-alt`, built in the funky neon language of the
 * newest AI pages. Authority Sequencing: Promise → Proof → Process → Packages → Prompt.
 *
 * @see /src/app/data/front-page-alt.ts
 */

import '../../../styles/templates/page-front-page-alt.css';
import { Link } from 'react-router';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ArrowRight, Sparkle, CheckCircle } from '@phosphor-icons/react';
import {
  frontPageAltHero,
  frontPageAltStats,
  frontPageAltLifecycle,
  frontPageAltSolutions,
  frontPageAltTiers,
  frontPageAltCaseStudy,
  frontPageAltAIStrip,
  frontPageAltInsights,
  frontPageAltFinalCTA,
  frontPageAltLeadCapture,
} from '../../data/front-page-alt';

export function FrontPageAltTemplate() {
  return (
    <div className="front-alt">
      {/* ──────────────────────────────────────
          SECTION 1 — HERO: The Promise
          ────────────────────────────────────── */}
      <section className="front-alt__hero">
        <div className="front-alt__hero-grid-bg" aria-hidden="true" />
        <div className="front-alt__hero-orb front-alt__hero-orb--cyan" aria-hidden="true" />
        <div className="front-alt__hero-orb front-alt__hero-orb--pink" aria-hidden="true" />
        <div className="front-alt__hero-orb front-alt__hero-orb--purple" aria-hidden="true" />

        <Container>
          <ScrollReveal animation="fade-up">
            <div className="front-alt__hero-inner">
              <div className="front-alt__hero-meta">
                <Sparkle size={14} weight="fill" />
                <span>{frontPageAltHero.meta}</span>
              </div>

              <h1 className="front-alt__hero-title">
                {frontPageAltHero.headline.split('AI-Optimised').map((chunk, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {chunk}
                      <span className="front-alt__hero-title-grad">AI-Optimised</span>
                    </span>
                  ) : (
                    <span key={i}>{chunk}</span>
                  ),
                )}
              </h1>

              <p className="front-alt__hero-subcopy">{frontPageAltHero.subcopy}</p>

              <div className="front-alt__hero-actions">
                <Link
                  to={frontPageAltHero.primaryCta.href}
                  className="front-alt__btn front-alt__btn--primary"
                >
                  {frontPageAltHero.primaryCta.label}
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to={frontPageAltHero.secondaryCta.href}
                  className="front-alt__btn front-alt__btn--ghost"
                >
                  {frontPageAltHero.secondaryCta.label}
                </Link>
              </div>

              <ul className="front-alt__hero-chips" aria-label="Proof highlights">
                {frontPageAltHero.floatingChips.map((chip) => (
                  <li
                    key={chip.label}
                    className={`front-alt__chip front-alt__chip--${chip.accent}`}
                  >
                    <span className="front-alt__chip-dot" aria-hidden="true" />
                    {chip.label}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ──────────────────────────────────────
          SECTION 2 — STATS: Immediate Proof
          ────────────────────────────────────── */}
      <Section spacing="lg" className="front-alt__stats-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="front-alt__stats-grid">
              {frontPageAltStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="front-alt__stat">
                    <span className="front-alt__stat-stripe" aria-hidden="true" />
                    <div className="front-alt__stat-icon" aria-hidden="true">
                      <Icon size={26} weight="duotone" />
                    </div>
                    <div className="front-alt__stat-number">{stat.number}</div>
                    <div className="front-alt__stat-label">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* ──────────────────────────────────────
          SECTION 3 — ENGINEERING LIFECYCLE: Process
          ────────────────────────────────────── */}
      <Section spacing="xl" className="front-alt__lifecycle-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="front-alt__section-header">
              <h2 className="front-alt__section-title">{frontPageAltLifecycle.title}</h2>
              <p className="front-alt__section-intro">{frontPageAltLifecycle.intro}</p>
            </div>
          </ScrollReveal>

          <div className="front-alt__lifecycle-grid">
            {frontPageAltLifecycle.stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <ScrollReveal key={stage.number} animation="fade-up" delay={index * 80}>
                  <Link
                    to={stage.href}
                    className={`front-alt__stage front-alt__stage--${stage.accent}`}
                  >
                    <div className="front-alt__stage-head">
                      <span className="front-alt__stage-number">{stage.number}</span>
                      <span className="front-alt__stage-icon" aria-hidden="true">
                        <Icon size={24} weight="duotone" />
                      </span>
                    </div>
                    <h3 className="front-alt__stage-title">{stage.title}</h3>
                    <p className="front-alt__stage-desc">{stage.description}</p>
                    <span className="front-alt__stage-arrow" aria-hidden="true">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ──────────────────────────────────────
          SECTION 4 — INDUSTRY SOLUTIONS
          ────────────────────────────────────── */}
      <Section spacing="xl" className="front-alt__solutions-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="front-alt__section-header">
              <h2 className="front-alt__section-title">{frontPageAltSolutions.title}</h2>
              <p className="front-alt__section-intro">{frontPageAltSolutions.intro}</p>
            </div>
          </ScrollReveal>

          <div className="front-alt__solutions-grid">
            {frontPageAltSolutions.cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={card.title} animation="fade-up" delay={index * 80}>
                  <Link
                    to={card.href}
                    className={`front-alt__solution front-alt__solution--${card.accent}${
                      card.featured ? ' front-alt__solution--featured' : ''
                    }`}
                  >
                    {card.featured && (
                      <span className="front-alt__solution-flag">Featured</span>
                    )}
                    <span className="front-alt__solution-icon" aria-hidden="true">
                      <Icon size={28} weight="duotone" />
                    </span>
                    <h3 className="front-alt__solution-title">{card.title}</h3>
                    <p className="front-alt__solution-desc">{card.description}</p>
                    <span className="front-alt__solution-cta">
                      Learn more <ArrowRight size={16} />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="front-alt__section-footer">
            <Link to={frontPageAltSolutions.allLink.href} className="front-alt__link-arrow">
              {frontPageAltSolutions.allLink.label}
              <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </Section>

      {/* ──────────────────────────────────────
          SECTION 5 — PACKAGES / TIERS
          ────────────────────────────────────── */}
      <Section spacing="xl" className="front-alt__tiers-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="front-alt__section-header">
              <h2 className="front-alt__section-title">{frontPageAltTiers.title}</h2>
              <p className="front-alt__section-intro">{frontPageAltTiers.intro}</p>
            </div>
          </ScrollReveal>

          <div className="front-alt__tiers-grid">
            {frontPageAltTiers.tiers.map((tier, index) => (
              <ScrollReveal key={tier.name} animation="fade-up" delay={index * 100}>
                <article
                  className={`front-alt__tier front-alt__tier--${tier.accent}${
                    tier.featured ? ' front-alt__tier--featured' : ''
                  }`}
                >
                  {tier.featured && <span className="front-alt__tier-flag">Most popular</span>}
                  <h3 className="front-alt__tier-name">{tier.name}</h3>
                  <p className="front-alt__tier-desc">{tier.description}</p>
                  <Link to={tier.href} className="front-alt__tier-cta">
                    {tier.cta}
                    <ArrowRight size={16} />
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ──────────────────────────────────────
          SECTION 6 — CASE STUDY + SOCIAL PROOF
          ────────────────────────────────────── */}
      <Section spacing="xl" className="front-alt__case-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <h2 className="front-alt__section-title front-alt__section-title--center">
              {frontPageAltCaseStudy.title}
            </h2>
          </ScrollReveal>

          <div className="front-alt__case-grid">
            <ScrollReveal animation="fade-right">
              <div className="front-alt__quote">
                <span className="front-alt__quote-mark" aria-hidden="true">
                  “
                </span>
                <blockquote className="front-alt__quote-text">
                  {frontPageAltCaseStudy.quote}
                </blockquote>
                <figcaption className="front-alt__quote-cite">
                  <span className="front-alt__quote-name">
                    {frontPageAltCaseStudy.attribution.name}
                  </span>
                  <span className="front-alt__quote-role">
                    {frontPageAltCaseStudy.attribution.role}
                  </span>
                </figcaption>
                <div className="front-alt__quote-actions">
                  <Link
                    to={frontPageAltCaseStudy.caseStudyCta.href}
                    className="front-alt__link-arrow"
                  >
                    {frontPageAltCaseStudy.caseStudyCta.label}
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to={frontPageAltCaseStudy.archiveCta.href}
                    className="front-alt__link-arrow front-alt__link-arrow--muted"
                  >
                    {frontPageAltCaseStudy.archiveCta.label}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={150}>
              <div className="front-alt__kpi">
                <div className="front-alt__kpi-block">
                  <div className="front-alt__kpi-label">Challenge</div>
                  <p className="front-alt__kpi-text">{frontPageAltCaseStudy.challenge}</p>
                </div>
                <div className="front-alt__kpi-block front-alt__kpi-block--result">
                  <div className="front-alt__kpi-label">Result</div>
                  <p className="front-alt__kpi-text">{frontPageAltCaseStudy.result}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={200}>
            <ul className="front-alt__trust-strip" aria-label="Trust badges">
              {frontPageAltCaseStudy.badges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <li key={badge.label} className="front-alt__trust-item">
                    <Icon size={20} weight="duotone" />
                    <span>{badge.label}</span>
                  </li>
                );
              })}
            </ul>
          </ScrollReveal>
        </Container>
      </Section>

      {/* ──────────────────────────────────────
          SECTION 7 — AI PROPOSITION
          ────────────────────────────────────── */}
      <Section spacing="xl" className="front-alt__ai-section">
        <div className="front-alt__ai-mesh" aria-hidden="true" />
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="front-alt__section-header">
              <h2 className="front-alt__section-title front-alt__section-title--neon">
                {frontPageAltAIStrip.title}
              </h2>
              <p className="front-alt__section-intro">{frontPageAltAIStrip.intro}</p>
            </div>
          </ScrollReveal>

          <div className="front-alt__ai-grid">
            {frontPageAltAIStrip.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={feature.title} animation="fade-up" delay={index * 100}>
                  <div className={`front-alt__ai-card front-alt__ai-card--${feature.accent}`}>
                    <span className="front-alt__ai-icon" aria-hidden="true">
                      <Icon size={30} weight="duotone" />
                    </span>
                    <h3 className="front-alt__ai-title">{feature.title}</h3>
                    <p className="front-alt__ai-desc">{feature.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="front-alt__section-footer">
            <Link to={frontPageAltAIStrip.cta.href} className="front-alt__btn front-alt__btn--ghost">
              {frontPageAltAIStrip.cta.label}
              <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </Section>

      {/* ──────────────────────────────────────
          SECTION 8 — LATEST INSIGHTS
          ────────────────────────────────────── */}
      <Section spacing="xl" className="front-alt__insights-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <h2 className="front-alt__section-title">{frontPageAltInsights.title}</h2>
          </ScrollReveal>

          <div className="front-alt__insights-grid">
            {frontPageAltInsights.cards.map((card, index) => (
              <ScrollReveal key={card.title} animation="fade-up" delay={index * 80}>
                <article className={`front-alt__insight front-alt__insight--${card.accent}`}>
                  <div className="front-alt__insight-meta">
                    <span className="front-alt__insight-category">{card.category}</span>
                    <span className="front-alt__insight-dot" aria-hidden="true" />
                    <span className="front-alt__insight-read">{card.readTime}</span>
                  </div>
                  <h3 className="front-alt__insight-title">{card.title}</h3>
                  <span className="front-alt__insight-cta">
                    Read insight <ArrowRight size={14} />
                  </span>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="front-alt__section-footer">
            <Link to={frontPageAltInsights.allLink.href} className="front-alt__link-arrow">
              {frontPageAltInsights.allLink.label}
              <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </Section>

      {/* ──────────────────────────────────────
          SECTION 9 — FINAL CTA BANNER
          ────────────────────────────────────── */}
      <section className="front-alt__final-cta">
        <div className="front-alt__final-glow" aria-hidden="true" />
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="front-alt__final-inner">
              <h2 className="front-alt__final-title">{frontPageAltFinalCTA.headline}</h2>
              <ul className="front-alt__final-bullets">
                {frontPageAltFinalCTA.bullets.map((bullet) => (
                  <li key={bullet} className="front-alt__final-bullet">
                    <CheckCircle size={18} weight="duotone" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={frontPageAltFinalCTA.button.href}
                className="front-alt__btn front-alt__btn--primary front-alt__btn--lg"
              >
                {frontPageAltFinalCTA.button.label}
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ──────────────────────────────────────
          SECTION 10 — LEAD CAPTURE / PRE-FOOTER
          ──────────────────────────────────────
          NOTE: No real lead-magnet endpoint is defined yet.
          Form submits to /contact as a prototype fallback.
      */}
      <Section spacing="lg" className="front-alt__lead-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="front-alt__lead">
              <div className="front-alt__lead-copy">
                <h2 className="front-alt__lead-title">{frontPageAltLeadCapture.headline}</h2>
                <p className="front-alt__lead-sub">{frontPageAltLeadCapture.subcopy}</p>
              </div>
              <form
                className="front-alt__lead-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = frontPageAltLeadCapture.button.href;
                }}
              >
                <label className="front-alt__lead-label" htmlFor="front-alt-email">
                  Email address
                </label>
                <div className="front-alt__lead-row">
                  <input
                    id="front-alt-email"
                    type="email"
                    required
                    placeholder={frontPageAltLeadCapture.placeholder}
                    className="front-alt__lead-input"
                    autoComplete="email"
                  />
                  <button type="submit" className="front-alt__btn front-alt__btn--primary">
                    {frontPageAltLeadCapture.button.label}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </div>
  );
}

export default FrontPageAltTemplate;
