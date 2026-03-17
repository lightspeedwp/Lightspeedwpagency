/**
 * AI Solutions Landing Template
 *
 * Hub page for all AI solution sub-pages under /solutions/ai
 * Route: /solutions/ai
 *
 * Pattern order:
 *   Breadcrumbs -> Hero -> Stats -> Solution Cards -> Capabilities -> CTA
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - All styling via /src/styles/templates/page-solution-ai-landing.css
 * - Fonts: var(--font-primary), var(--font-secondary) only
 *
 * @see /src/styles/templates/page-solution-ai-landing.css
 * @see /src/app/data/ai-solutions-landing-data.tsx
 */

import '../../../styles/templates/page-solution-ai-landing.css';

import React from 'react';
import { Link } from 'react-router';
import { ArrowRight } from '@phosphor-icons/react';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { StatsGrid } from '../patterns/StatsGrid';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { slugToPath } from '../../utils/route-map';

import {
  aiSolutionsHero,
  aiSolutionsStats,
  aiSolutionCards,
  aiSolutionsCapabilities,
  aiSolutionsCTA,
} from '../../data/ai-solutions-landing-data';

export function AISolutionsLandingTemplate() {
  const BadgeIcon = aiSolutionsHero.badgeIcon;

  return (
    <div className="ai-solutions">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'AI solutions' },
        ]}
      />

      {/* ════════════════ HERO ════════════════ */}
      <section className="ai-solutions__hero" aria-label="AI solutions hero">
        <div className="ai-solutions__hero-grid" aria-hidden="true" />
        <div className="ai-solutions__hero-glow" aria-hidden="true" />

        <div className="ai-solutions__hero-content">
          <ScrollReveal animation="fade-down">
            <span className="ai-solutions__badge">
              <BadgeIcon size={14} />
              {aiSolutionsHero.badge}
            </span>
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <h1 className="ai-solutions__title">
              {aiSolutionsHero.title}
              <br />
              <span className="ai-solutions__title-highlight">
                {aiSolutionsHero.highlight}
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <p className="ai-solutions__description">
              {aiSolutionsHero.description}
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="ai-solutions__hero-actions">
              <Link
                to={slugToPath(aiSolutionsHero.primaryCta.page)}
                className="ai-solutions__btn-primary"
              >
                {aiSolutionsHero.primaryCta.text}
                <ArrowRight size={18} />
              </Link>
              <Link
                to={slugToPath(aiSolutionsHero.secondaryCta.page)}
                className="ai-solutions__btn-outline"
              >
                {aiSolutionsHero.secondaryCta.text}
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <ScrollDownArrow />
      </section>

      {/* ════════════════ STATS ════════════════ */}
      <section className="ai-solutions__stats">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="ai-solutions__section-header">
              <h2 className="ai-solutions__section-title">
                AI impact by the numbers
              </h2>
              <p className="ai-solutions__section-description">
                Real results from businesses using AI with WordPress
              </p>
            </div>
            <StatsGrid
              stats={aiSolutionsStats.map((s) => ({
                number: s.value,
                label: s.label,
                description: s.description,
              }))}
              columns={4}
              variant="default"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ════════════════ SOLUTION CARDS ════════════════ */}
      <section className="ai-solutions__cards">
        <Container>
          <div className="ai-solutions__section-header">
            <ScrollReveal animation="fade-up">
              <h2 className="ai-solutions__section-title">
                Explore AI solutions
              </h2>
              <p className="ai-solutions__section-description">
                Every solution is designed to integrate seamlessly with your
                WordPress site
              </p>
            </ScrollReveal>
          </div>

          <div className="ai-solutions__cards-grid">
            {aiSolutionCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <ScrollReveal
                  key={card.href}
                  animation="fade-up"
                  delay={index * 80}
                >
                  <Link
                    to={card.href}
                    className="ai-solutions__card"
                    style={
                      {
                        '--card-accent': `var(--wp--preset--color--${card.accent})`,
                      } as React.CSSProperties
                    }
                    aria-label={`Learn more about ${card.title}`}
                  >
                    <div className="ai-solutions__card-icon">
                      <Icon size={28} />
                    </div>
                    <h3 className="ai-solutions__card-title">{card.title}</h3>
                    <p className="ai-solutions__card-description">
                      {card.description}
                    </p>
                    <ul className="ai-solutions__card-features">
                      {card.features.map((feat) => (
                        <li key={feat} className="ai-solutions__card-feature">
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <span className="ai-solutions__card-arrow">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ════════════════ CAPABILITIES ════════════════ */}
      <section className="ai-solutions__capabilities">
        <Container>
          <div className="ai-solutions__section-header">
            <ScrollReveal animation="fade-up">
              <h2 className="ai-solutions__section-title">
                Why choose LSX for AI
              </h2>
              <p className="ai-solutions__section-description">
                WordPress-native AI that respects your data, your brand, and
                your bottom line
              </p>
            </ScrollReveal>
          </div>

          <div className="ai-solutions__capabilities-grid">
            {aiSolutionsCapabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <ScrollReveal
                  key={cap.title}
                  animation="fade-up"
                  delay={index * 80}
                >
                  <div className="ai-solutions__capability">
                    <div className="ai-solutions__capability-icon">
                      <Icon size={28} />
                    </div>
                    <h3 className="ai-solutions__capability-title">
                      {cap.title}
                    </h3>
                    <p className="ai-solutions__capability-description">
                      {cap.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ════════════════ CTA ════════════════ */}
      <FunkyCTA
        title={aiSolutionsCTA.title}
        description={aiSolutionsCTA.description}
        buttonText={aiSolutionsCTA.buttonText}
        buttonPage={aiSolutionsCTA.buttonPage}
        benefits={aiSolutionsCTA.benefits}
      />
    </div>
  );
}