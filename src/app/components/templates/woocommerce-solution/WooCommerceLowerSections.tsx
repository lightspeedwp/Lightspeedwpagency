/**
 * WooCommerce Solution — Lower Sections
 *
 * Approach/Blueprint section with tech stack panel,
 * and CTA checkout section.
 *
 * BEM Blocks: .wc-approach, .wc-cta
 *
 * @see /src/styles/templates/woocommerce-solution.css
 * @see /src/app/components/templates/WooCommerceSolutionTemplate.tsx
 */

import { Container } from '../../common/Container';
import { ScrollReveal } from '../../../hooks/useScrollReveal';
import { AgencyProcessTimeline } from '../../patterns/AgencyProcessTimeline';
import {
  ShoppingBag,
  Globe,
  Lightning as Zap,
} from '@phosphor-icons/react';

interface LowerSectionsProps {
  approach: {
    title: string;
    description: string;
    steps: Array<{ number: number; title: string; description: string }>;
  };
  techStack: {
    title: string;
    items: string[];
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonPage: string;
  };
}

export function WooCommerceLowerSections({ approach, techStack, cta }: LowerSectionsProps) {
  return (
    <>
      {/* ── APPROACH — The Blueprint ── */}
      <section className="wp-py-16" style={{ backgroundColor: 'var(--muted)' }}>
        <Container>
          <div className="wp-grid-2-cols wp-gap-16">
            <ScrollReveal animation="fade-right">
              <div>
                <AgencyProcessTimeline
                  heading={approach.title}
                  subheading={approach.description}
                  steps={approach.steps.map((step, i) => ({
                    id: `step-${i}`,
                    number: step.number,
                    title: step.title,
                    description: step.description,
                    icon: Zap
                  }))}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left">
              <div className="wp-p-8 wp-flex wp-flex-col wc-approach__tech-panel">
                {/* Tech Glow */}
                <div className="wc-approach__tech-glow" />

                <h3 className="wp-m-0 wp-mb-8 wp-flex wp-items-center wp-gap-3 wc-approach__tech-heading">
                  <Globe size={24} color="var(--primary)" weight="duotone" />
                  {techStack.title}
                </h3>

                <div className="wp-flex wp-flex-col wp-gap-4 wc-approach__tech-list">
                  {techStack.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="wp-flex wp-items-center wp-gap-3 wp-px-4 wp-py-3 wc-approach__tech-item"
                    >
                      <span className="wc-approach__tech-prompt">$</span>
                      <span className="wc-approach__tech-value">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── CTA SECTION — Checkout ── */}
      <section id="contact" className="wc-cta">
        <div className="wc-cta__radial-bg" />

        <Container>
          <ScrollReveal animation="scale">
            <div className="wp-flex wp-flex-col wp-items-center wp-text-center wp-p-12 wp-mx-auto wc-cta__card">
              <div className="wp-flex wp-items-center wp-justify-center wp-mb-8 wc-cta__icon-wrapper">
                <ShoppingBag size={40} weight="duotone" />
              </div>

              <h2 className="wp-m-0 wp-mb-4 wc-cta__title">
                {cta.title}
              </h2>

              <p className="wp-m-0 wp-mb-8 wc-cta__description">
                {cta.description}
              </p>

              <div className="wp-flex wp-gap-4">
                <a
                  href={`/${cta.buttonPage}`}
                  className="wp-inline-flex wp-items-center wp-justify-center wp-gap-2 wc-cta__btn-primary"
                >
                  {cta.buttonText}
                </a>
                <a
                  href="/work"
                  className="wp-inline-flex wp-items-center wp-justify-center wp-gap-2 wc-cta__btn-secondary"
                >
                  View Case Studies
                </a>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
