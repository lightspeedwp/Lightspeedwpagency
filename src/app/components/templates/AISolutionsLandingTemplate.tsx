/**
 * AI Solutions Landing Template — FUNKY REDESIGN
 *
 * Hub page for all AI solution sub-pages under /solutions/ai
 * Route: /solutions/ai
 *
 * Structure:
 *   Hero → Sticky Nav → Trust → Stats → 5 Solution Sections → Capabilities → CTA
 *
 * Each solution section:
 *   - Full-viewport dark background (neon compliance)
 *   - Title, description, benefits list
 *   - Links to sub-page + related services
 *   - Section-specific accent color
 *
 * FUNKY REDESIGN FEATURES:
 * - Neural network animated hero background
 * - Glassmorphism cards with neon borders
 * - Smooth scroll reveals and micro-interactions
 * - NeonStats component for metrics (forced dark)
 * - Particle background effects
 * - Depth effects with neon shadows
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - All styling via /src/styles/templates/ai-solutions-mega.css
 * - Typography: var(--font-primary), var(--font-secondary) only
 * - Colors: 100% CSS variables
 * - Neon colors only on dark backgrounds (WCAG 2.2 AA/AAA compliant)
 * - BEM methodology: .ai-solutions-mega__*
 *
 * LIGHT/DARK MODE COMPLIANCE:
 * - Light mode: Professional clean aesthetic for trust section
 * - Dark mode: Full Funky neon with glowing elements
 * - Forced dark: Hero, solution sections, stats, CTA (neon requirement)
 * - All text meets 4.5:1 minimum contrast ratio (AA)
 *
 * @see /src/styles/templates/ai-solutions-mega.css
 * @see /src/app/data/ai-solutions-hub-data.tsx
 * @see /prompts/ai-services-restructure/solutions-ai.md
 */

import '../../../styles/templates/ai-solutions-mega.css';

import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, Check } from '@phosphor-icons/react';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { StickyAnchorNav } from '../parts/StickyAnchorNav';
import { NeonStats } from '../common/NeonStats';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';

import { aiSolutionsHubData } from '../../data/ai-solutions-hub-data';

export function AISolutionsLandingTemplate() {
  const { hero, stickyNav, solutions, stats, trustSignals, capabilities, cta, sectionHeadings } = aiSolutionsHubData;

  return (
    <div className="ai-solutions-mega">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'AI solutions' },
        ]}
      />

      {/* Hero */}
      <section className="ai-solutions-mega__hero" aria-label="AI solutions hero">
        <div className="ai-solutions-mega__hero-grid" aria-hidden="true" />
        <div className="ai-solutions-mega__hero-glow" aria-hidden="true" />

        <div className="ai-solutions-mega__hero-content">
          <ScrollReveal animation="fade-down">
            <span className="ai-solutions-mega__badge">
              {hero.badge}
            </span>
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <h1 className="ai-solutions-mega__title">
              {hero.title}
              <br />
              <span className="ai-solutions-mega__title-highlight">
                {hero.highlight}
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <p className="ai-solutions-mega__description">
              {hero.description}
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="ai-solutions-mega__hero-actions">
              <a
                href="#integrations"
                className="ai-solutions-mega__btn-primary"
              >
                {hero.primaryCta.text}
                <ArrowRight size={18} />
              </a>
              <Link
                to="/services/ai"
                className="ai-solutions-mega__btn-outline"
              >
                {hero.secondaryCta.text}
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <ScrollDownArrow />
      </section>

      {/* Sticky Nav */}
      <StickyAnchorNav items={stickyNav} />

      {/* Trust signals */}
      <section className="ai-solutions-mega__trust" aria-label="Client testimonials">
        <Container>
          <ScrollReveal animation="fade-up">
            <h2 className="ai-solutions-mega__section-title">
              {sectionHeadings.trust}
            </h2>
          </ScrollReveal>

          <div className="ai-solutions-mega__trust-grid">
            {trustSignals.map((testimonial, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="ai-solutions-mega__trust-card">
                  <p className="ai-solutions-mega__trust-quote">
                    "{testimonial.quote}"
                  </p>
                  <p className="ai-solutions-mega__trust-author">
                    <strong>{testimonial.author}</strong>
                    <span className="ai-solutions-mega__trust-role">
                      {testimonial.role}
                    </span>
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="ai-solutions-mega__stats">
        <Container>
          <ScrollReveal animation="fade-up">
            <NeonStats
              title={sectionHeadings.stats.title}
              subtitle={sectionHeadings.stats.subtitle}
              stats={stats.map((s, index) => ({
                id: `ai-stat-${index}`,
                value: s.value,
                label: s.label,
                description: s.description,
              }))}
              columns={4}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* Solution sections (5 full-page sections) */}
      {solutions.map((solution, index) => {
        const Icon = solution.icon;
        return (
          <section
            key={solution.id}
            id={solution.id}
            className="ai-solutions-mega__solution"
            style={{ '--solution-accent': solution.accent } as React.CSSProperties}
            aria-labelledby={`solution-${solution.id}-title`}
          >
            <Container>
              <div className="ai-solutions-mega__solution-inner">
                {/* Left: Content */}
                <div className="ai-solutions-mega__solution-content">
                  <ScrollReveal animation="fade-up">
                    <div className="ai-solutions-mega__solution-icon">
                      <Icon size={32} />
                    </div>
                  </ScrollReveal>

                  <ScrollReveal animation="fade-up" delay={100}>
                    <h2
                      id={`solution-${solution.id}-title`}
                      className="ai-solutions-mega__solution-title"
                    >
                      {solution.title}
                    </h2>
                  </ScrollReveal>

                  <ScrollReveal animation="fade-up" delay={150}>
                    <p className="ai-solutions-mega__solution-description">
                      {solution.description}
                    </p>
                  </ScrollReveal>

                  {/* Benefits list */}
                  <ScrollReveal animation="fade-up" delay={200}>
                    <ul className="ai-solutions-mega__benefits">
                      {solution.benefits.map((benefit, i) => (
                        <li key={i} className="ai-solutions-mega__benefit">
                          <Check size={20} className="ai-solutions-mega__benefit-icon" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </ScrollReveal>

                  {/* CTA Buttons */}
                  <ScrollReveal animation="fade-up" delay={250}>
                    <div className="ai-solutions-mega__solution-actions">
                      <Link
                        to={solution.href}
                        className="ai-solutions-mega__solution-btn ai-solutions-mega__solution-btn--primary"
                      >
                        Explore {solution.title}
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Right: Related services */}
                <div className="ai-solutions-mega__solution-sidebar">
                  <ScrollReveal animation="fade-up" delay={300}>
                    <div className="ai-solutions-mega__related">
                      <h3 className="ai-solutions-mega__related-title">
                        {sectionHeadings.relatedServices}
                      </h3>
                      <ul className="ai-solutions-mega__related-list">
                        {solution.relatedServices.map((service, i) => (
                          <li key={i} className="ai-solutions-mega__related-item">
                            <Link
                              to={service.href}
                              className="ai-solutions-mega__related-link"
                            >
                              {service.label}
                              <ArrowRight size={14} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      {/* Capabilities */}
      <section className="ai-solutions-mega__capabilities">
        <Container>
          <div className="ai-solutions-mega__section-header">
            <ScrollReveal animation="fade-up">
              <h2 className="ai-solutions-mega__section-title">
                {sectionHeadings.capabilities.title}
              </h2>
              <p className="ai-solutions-mega__section-description">
                {sectionHeadings.capabilities.description}
              </p>
            </ScrollReveal>
          </div>

          <div className="ai-solutions-mega__capabilities-grid">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <ScrollReveal
                  key={cap.title}
                  animation="fade-up"
                  delay={index * 80}
                >
                  <div className="ai-solutions-mega__capability">
                    <div className="ai-solutions-mega__capability-icon">
                      <Icon size={28} />
                    </div>
                    <h3 className="ai-solutions-mega__capability-title">
                      {cap.title}
                    </h3>
                    <p className="ai-solutions-mega__capability-description">
                      {cap.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <FunkyCTA
        title={cta.title}
        description={cta.description}
        buttonText={cta.buttonText}
        buttonPage={cta.buttonPage}
        benefits={cta.benefits}
      />
    </div>
  );
}