/**
 * Education Solution Template
 *
 * Thin wrapper around SolutionDetailTemplate for the education industry.
 * Adds a custom AI integrations section between features and lower sections.
 *
 * Route: /solutions/education
 *
 * @see /src/app/data/education-solution-page.ts
 * @see /src/app/components/templates/SolutionDetailTemplate.tsx
 */

import '../../../styles/templates/solution-detail.css';
import '../../../styles/templates/education-solution.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Button } from '../blocks/design/Buttons';
import { FeatureList } from '../patterns/FeatureList';
import { CheckList } from '../patterns/CheckList';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Check, Sparkle, ArrowRight, Robot } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { SolutionDetailLowerSections } from './solution-detail/SolutionDetailLowerSections';
import {
  educationSolution,
  educationAISection,
  educationCaseStudy,
  educationCTA,
} from '../../data/education-solution-page';

export function EducationSolutionTemplate() {
  const solution = educationSolution;

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: solution.title },
        ]}
      />

      {/* ── HERO — Neon Mesh ── */}
      <section className="solution-detail__hero">
        <div className="solution-detail__hero-mesh" aria-hidden="true" />
        <div className="solution-detail__hero-orb solution-detail__hero-orb--1" aria-hidden="true" />
        <div className="solution-detail__hero-orb solution-detail__hero-orb--2" aria-hidden="true" />

        <Container>
          <ScrollReveal animation="fade-up">
            <div className="solution-detail__hero-inner">
              <div className="solution-detail__hero-badge">
                <Sparkle size={14} className="solution-detail__badge-pulse" />
                <span>{solution.category}</span>
              </div>

              <h1 className="solution-detail__hero-title">{solution.title}</h1>
              <p className="solution-detail__hero-tagline">{solution.tagline}</p>

              <div className="solution-detail__hero-actions">
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                  className="neon-hover"
                  aria-label="Request a systems audit for education"
                >
                  Request a systems audit
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="neon-hover"
                  aria-label="Learn more about education solutions"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Overview section */}
      <Section spacing="xl" className="solution-detail__overview-section" id="details">
        <Container>
          <div className="solution-detail__overview-grid">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="solution-detail__section-title">Overview</h2>
                <p className="solution-detail__description">{solution.description}</p>
                <h3 className="solution-detail__subsection-title">Key benefits</h3>
                <CheckList items={solution.benefits} />
              </div>
            </ScrollReveal>

            {/* Pricing sidebar */}
            <ScrollReveal animation="fade-left" delay={200}>
              <div>
                <div className="solution-detail__pricing-sidebar">
                  <h3 className="solution-detail__sidebar-title">Pricing</h3>
                  <div className="solution-detail__sidebar-item">
                    <dt className="solution-detail__sidebar-label">Model</dt>
                    <dd className="solution-detail__sidebar-value">{solution.pricing.model}</dd>
                  </div>
                  <div className="solution-detail__sidebar-item">
                    <dt className="solution-detail__sidebar-label">Starting at</dt>
                    <dd className="solution-detail__price-value">{solution.pricing.starting}</dd>
                  </div>
                  <div className="solution-detail__sidebar-item">
                    <dt className="solution-detail__sidebar-label">Includes</dt>
                    <dd>
                      <ul className="solution-detail__includes-list">
                        {solution.pricing.includes.map((item, index) => (
                          <li key={index} className="solution-detail__include-item">
                            <Check size={16} className="solution-detail__check-icon" />
                            <span className="solution-detail__include-text">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <Button
                    variant="default"
                    size="md"
                    page="contact"
                    className="neon-hover"
                    aria-label="Get started with education solutions"
                  >
                    Get started
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Features section */}
      <Section spacing="xl" className="solution-detail__features-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="solution-detail__section-header">
              <h2 className="solution-detail__section-heading">Features &amp; capabilities</h2>
              <p className="solution-detail__section-desc">
                Everything you need to build a scalable education platform on WordPress.
              </p>
            </div>
          </ScrollReveal>
          <FeatureList items={solution.features} columns={3} variant="glass" iconStyle="rounded" />
        </Container>
      </Section>

      {/* ── AI Integrations Section (custom) ── */}
      <Section spacing="xl" className="education-ai-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="solution-detail__section-header">
              <h2 className="solution-detail__section-heading">{educationAISection.title}</h2>
              <p className="solution-detail__section-desc">{educationAISection.description}</p>
            </div>
          </ScrollReveal>

          <div className="education-ai-section__grid">
            {educationAISection.cards.map((card, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="education-ai-section__card">
                  <div className="education-ai-section__card-icon" aria-hidden="true">
                    <Robot size={28} weight="duotone" />
                  </div>
                  <h3 className="education-ai-section__card-title">{card.title}</h3>
                  <p className="education-ai-section__card-desc">{card.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={350}>
            <div className="education-ai-section__cta-wrap">
              {/*
                NOTE: The repo currently also has AI integrations routed under
                /solutions/ai/integrations, so this link may need confirmation later.
              */}
              <Link to={educationAISection.ctaLink} className="education-ai-section__cta-link">
                {educationAISection.ctaText}
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* ── Case Study Reference ── */}
      <Section spacing="lg" className="education-proof-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="education-proof-section__inner">
              <p className="education-proof-section__text">{educationCaseStudy.text}</p>
              <a
                href={educationCaseStudy.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="education-proof-section__link"
              >
                {educationCaseStudy.linkLabel}
                <ArrowRight size={16} />
              </a>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Lower sections (use cases, specs, related, testimonials, FAQ) */}
      <SolutionDetailLowerSections solution={solution} />

      {/* Custom CTA (overrides the default from lower sections) */}
      <FunkyCTA
        title={educationCTA.title}
        description={educationCTA.description}
        buttonText={educationCTA.buttonText}
        buttonPage="contact"
        benefits={educationCTA.benefits}
      />
    </>
  );
}