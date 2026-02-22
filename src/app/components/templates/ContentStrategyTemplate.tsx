/**
 * Content Strategy Template — "Strategic Blueprint" Funky Redesign
 *
 * WordPress template: templates/page-service-strategy.html
 *
 * Theme: "Strategic Blueprint" — technical precision, grid-based, red accents.
 *
 * Pattern order:
 *   Breadcrumbs -> Hero -> Benefits Grid -> CTA
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - All styling via /src/styles/templates/page-service-strategy.css
 * - Fonts: var(--font-primary), var(--font-secondary), var(--font-mono) only
 * - Button styling via :where(.wp-block-button__link)
 *
 * @see /src/styles/templates/page-service-strategy.css
 */

import { Container } from '../common/Container';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Button } from '../blocks/design/Buttons';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Map, Target, Users } from 'lucide-react';
import { contentServiceDetailed } from '../../data/services-detailed';


export function ContentStrategyTemplate() {
  const serviceData = contentServiceDetailed.subServices.find(
    (s) => s.id === 'content-strategy'
  );

  const benefitCards = [
    {
      icon: Map,
      title: 'Roadmap Development',
      description:
        'Create a clear path forward for your content ecosystem, defining channels, formats, and publishing cadences with precision.',
      status: 'Status: Ready',
    },
    {
      icon: Target,
      title: 'Goal Alignment',
      description:
        'Ensure every piece of content serves a specific business objective and user need, eliminating waste and redundancy.',
      status: 'Target: Locked',
    },
    {
      icon: Users,
      title: 'Audience Targeting',
      description:
        'Define detailed personas and user journeys to deliver the right message to the right person at the precise moment.',
      status: 'Analysis: Complete',
    },
  ];

  return (
    <>
      {/* ════════════════════════════════════════
          BREADCRUMBS (Coordinates)
          ════════════════════════════════════════ */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Services', page: 'services' },
          { label: 'Content', page: 'content-service' },
          { label: 'Strategy' },
        ]}
      />

      {/* ════════════════════════════════════════
          HERO — "The War Room"
          ════════════════════════════════════════ */}
      <section className="strategy-page__hero">
        <div className="strategy-page__grid" />
        <div className="strategy-page__compass" />

        <Container>
          <ScrollReveal animation="scale">
            <div className="strategy-page__hero-content">
              <span className="strategy-page__label">
                Tactical Operations
              </span>

              <h1 className="strategy-page__hero-title">
                Content{' '}
                <span className="strategy-page__hero-accent">Strategy</span>
              </h1>

              <p className="strategy-page__hero-desc">
                {serviceData?.description ||
                  'Strategic content planning and implementation services for maximum impact.'}
              </p>

              <div className="strategy-page__hero-actions">
                <Button
                  variant="primary"
                  size="lg"
                  page="contact"
                  className="strategy-page__btn--primary"
                >
                  Initiate Plan
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          BENEFITS — "Tactical Advantages"
          ════════════════════════════════════════ */}
      <section className="strategy-page__benefits">
        <Container>
          <div className="strategy-page__benefits-grid">
            {benefitCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <ScrollReveal
                  key={index}
                  animation="fade-up"
                  delay={index * 120}
                >
                  <div className="strategy-page__card">
                    <div className="strategy-page__card-icon">
                      <Icon size={40} />
                    </div>
                    <h3 className="strategy-page__card-title">{card.title}</h3>
                    <p className="strategy-page__card-desc">
                      {card.description}
                    </p>
                    <div className="strategy-page__card-status">
                      {card.status}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          CTA
          ════════════════════════════════════════ */}
      <FunkyCTA
        title="Develop a Winning Strategy"
        description="Let's build a content strategy that drives measurable results for your business."
        buttonText="Start Strategy Session"
        buttonPage="contact"
        benefits={[
          'Comprehensive content audit',
          'Competitor landscape analysis',
          'Goal-aligned content roadmap',
          'Measurable KPI framework',
          'Ongoing strategy refinement',
        ]}
      />
    </>
  );
}