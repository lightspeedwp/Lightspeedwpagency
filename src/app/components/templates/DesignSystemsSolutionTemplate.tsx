/**
 * Design Systems Solution Template
 *
 * Funky strategic solution page merging design tokens + pattern governance.
 * Built as a thin wrapper around SolutionDetailTemplate primitives, pushed
 * into a bolder neon/editorial direction for the `/solutions/design-systems`
 * route.
 *
 * @see /src/app/data/design-systems-solution-page.ts
 */

import '../../../styles/templates/solution-detail.css';
import '../../../styles/templates/design-systems-solution.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Button } from '../blocks/design/Buttons';
import { FeatureList } from '../patterns/FeatureList';
import { CheckList } from '../patterns/CheckList';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Check, Sparkle } from '@phosphor-icons/react';
import { SolutionDetailLowerSections } from './solution-detail/SolutionDetailLowerSections';
import {
  designSystemsSolution,
  designSystemsImpact,
  designSystemsWorkflow,
  designSystemsCTA,
} from '../../data/design-systems-solution-page';

export function DesignSystemsSolutionTemplate() {
  const solution = designSystemsSolution;

  return (
    <>
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: solution.title },
        ]}
      />

      {/* ── HERO — Neon Mesh Split ── */}
      <section className="solution-detail__hero ds-solution__hero">
        <div className="solution-detail__hero-mesh" aria-hidden="true" />
        <div className="solution-detail__hero-orb solution-detail__hero-orb--1" aria-hidden="true" />
        <div className="solution-detail__hero-orb solution-detail__hero-orb--2" aria-hidden="true" />

        <Container>
          <div className="ds-solution__hero-grid">
            <ScrollReveal animation="fade-right">
              <div className="solution-detail__hero-inner ds-solution__hero-copy">
                <div className="solution-detail__hero-badge">
                  <Sparkle size={14} className="solution-detail__badge-pulse" />
                  <span>{solution.category}</span>
                </div>

                <h1 className="solution-detail__hero-title ds-solution__hero-title">
                  {solution.hero.headline}
                </h1>
                <p className="solution-detail__hero-tagline">{solution.hero.subtitle}</p>

                <div className="solution-detail__hero-actions">
                  <Button variant="default" size="lg" page="contact" className="neon-hover">
                    {solution.hero.primaryCta}
                  </Button>
                  <Button variant="outline" size="lg" page="contact" className="neon-hover">
                    {solution.hero.secondaryCta}
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Figma → theme.json visual panel */}
            <ScrollReveal animation="fade-left" delay={150}>
              <div className="ds-solution__hero-visual" aria-hidden="true">
                <div className="ds-solution__panel ds-solution__panel--figma">
                  <div className="ds-solution__panel-head">
                    <span className="ds-solution__panel-dot" />
                    <span className="ds-solution__panel-dot" />
                    <span className="ds-solution__panel-dot" />
                    <span className="ds-solution__panel-title">Figma · Variables</span>
                  </div>
                  <ul className="ds-solution__token-list">
                    <li className="ds-solution__token">
                      <span className="ds-solution__swatch ds-solution__swatch--primary" />
                      <span className="ds-solution__token-name">color/primary</span>
                      <span className="ds-solution__token-val">#ff2bd6</span>
                    </li>
                    <li className="ds-solution__token">
                      <span className="ds-solution__swatch ds-solution__swatch--accent" />
                      <span className="ds-solution__token-name">color/accent</span>
                      <span className="ds-solution__token-val">#00f5d4</span>
                    </li>
                    <li className="ds-solution__token">
                      <span className="ds-solution__swatch ds-solution__swatch--surface" />
                      <span className="ds-solution__token-name">color/surface</span>
                      <span className="ds-solution__token-val">#0b0820</span>
                    </li>
                    <li className="ds-solution__token">
                      <span className="ds-solution__type">Aa</span>
                      <span className="ds-solution__token-name">font/display</span>
                      <span className="ds-solution__token-val">Lexend</span>
                    </li>
                    <li className="ds-solution__token">
                      <span className="ds-solution__type">◻︎</span>
                      <span className="ds-solution__token-name">spacing/lg</span>
                      <span className="ds-solution__token-val">24px</span>
                    </li>
                  </ul>
                </div>

                <div className="ds-solution__bridge" aria-hidden="true">
                  <span className="ds-solution__bridge-pulse" />
                </div>

                <div className="ds-solution__panel ds-solution__panel--code">
                  <div className="ds-solution__panel-head">
                    <span className="ds-solution__panel-title">theme.json</span>
                  </div>
                  <pre className="ds-solution__code">
{`{
  "settings": {
    "color": {
      "palette": [
        { "slug": "primary", "color": "var(--color-primary)" },
        { "slug": "accent",  "color": "var(--color-accent)" }
      ]
    },
    "typography": {
      "fontFamilies": [
        { "slug": "display", "fontFamily": "Lexend" }
      ]
    },
    "spacing": {
      "spacingScale": { "steps": 8 }
    }
  }
}`}
                  </pre>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── Stats Proof Grid ── */}
      <Section spacing="lg" className="ds-solution__stats-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="ds-solution__stats-grid">
              {solution.stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="ds-solution__stat-card">
                    <span className="ds-solution__stat-stripe" aria-hidden="true" />
                    <div className="ds-solution__stat-icon" aria-hidden="true">
                      <Icon size={28} weight="duotone" />
                    </div>
                    <div className="ds-solution__stat-number">{stat.number}</div>
                    <div className="ds-solution__stat-label">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* ── Why Token-Driven Design Matters ── */}
      <Section spacing="xl" className="ds-solution__impact-section" id="details">
        <Container>
          <div className="ds-solution__impact-grid">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="solution-detail__section-heading ds-solution__impact-title">
                  {designSystemsImpact.title}
                </h2>
                <p className="solution-detail__description">{designSystemsImpact.body}</p>
                <div className="ds-solution__impact-actions">
                  <Button variant="default" size="md" page="contact" className="neon-hover">
                    Book a Design System Audit
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={150}>
              <div className="ds-solution__token-proof" aria-hidden="true">
                <div className="ds-solution__token-proof-glow" />
                <ul className="ds-solution__token-proof-list">
                  {designSystemsImpact.tokenCallouts.map((item, index) => (
                    <li key={index} className="ds-solution__token-proof-item">
                      <code className="ds-solution__token-proof-key">{item.token}</code>
                      <span className="ds-solution__token-proof-arrow">→</span>
                      <span className="ds-solution__token-proof-val">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ── Overview + Pricing Sidebar ── */}
      <Section spacing="xl" className="solution-detail__overview-section">
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

            <ScrollReveal animation="fade-left" delay={200}>
              <div>
                <div className="solution-detail__pricing-sidebar ds-solution__pricing-sidebar">
                  <h3 className="solution-detail__sidebar-title">Engagement</h3>
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
                  <Button variant="default" size="md" page="contact" className="neon-hover">
                    Book a Design System Audit
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ── Funky Capabilities Grid ── */}
      <Section spacing="xl" className="solution-detail__features-section ds-solution__features-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="solution-detail__section-header">
              <h2 className="solution-detail__section-heading">Capabilities</h2>
              <p className="solution-detail__section-desc">
                Six pillars of a mature, token-driven design system — from Figma variables to
                WordPress theme.json parity.
              </p>
            </div>
          </ScrollReveal>
          <FeatureList items={solution.features} columns={3} variant="glass" iconStyle="rounded" />
        </Container>
      </Section>

      {/* ── Design-to-Dev Workflow ── */}
      <Section spacing="xl" className="ds-solution__workflow-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="solution-detail__section-header">
              <h2 className="solution-detail__section-heading">{designSystemsWorkflow.title}</h2>
              <p className="solution-detail__section-desc">
                A four-stage operational progression from Figma foundations to WordPress governance.
              </p>
            </div>
          </ScrollReveal>

          <div className="ds-solution__workflow">
            <span className="ds-solution__workflow-spine" aria-hidden="true" />
            {designSystemsWorkflow.steps.map((step, index) => (
              <ScrollReveal key={step.number} animation="fade-up" delay={index * 120}>
                <article className="ds-solution__step">
                  <div className="ds-solution__step-marker" aria-hidden="true">
                    <span className="ds-solution__step-marker-glow" />
                    <span className="ds-solution__step-marker-number">{step.number}</span>
                  </div>
                  <div className="ds-solution__step-body">
                    <h3 className="ds-solution__step-title">{step.title}</h3>
                    <p className="ds-solution__step-desc">{step.description}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Lower sections: technical specs, use cases, related solutions, testimonials, FAQ */}
      <SolutionDetailLowerSections solution={solution} />

      {/* ── Primary CTA Banner ── */}
      <FunkyCTA
        title={designSystemsCTA.title}
        description={designSystemsCTA.description}
        buttonText={designSystemsCTA.buttonText}
        buttonPage="contact"
        benefits={designSystemsCTA.benefits}
      />
    </>
  );
}
