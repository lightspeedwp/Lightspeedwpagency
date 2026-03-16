/**
 * Style Guide — Lower Sections
 *
 * Typography specimen, Border radius, Spacing scale,
 * Interactive states, and Card variants sections.
 *
 * Extracted from StyleGuideTemplate.tsx for file size compliance.
 *
 * @see /src/styles/templates/page-styleguide.css
 * @see /src/app/data/style-guide-data.ts
 */

import { Container } from '../../common/Container';
import { Section } from '../../common/Section';
import { Button } from '../../blocks/design/Buttons';
import { ScrollReveal } from '../../../hooks/useScrollReveal';
import {
  TextAa as Type,
  Square,
  CursorClick as MousePointer,
  CreditCard,
  ArrowsOut as Move,
} from '@phosphor-icons/react';
import {
  typographyScale,
  radiusPresets,
  spacingScale,
} from '../../../data/style-guide-data';

export function StyleGuideLowerSections() {
  return (
    <>
      {/* ── 5. TYPOGRAPHY SPECIMEN ── */}
      <Section spacing="xl" className="sg-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="sg-section__header">
              <Type size={24} className="sg-section__icon" />
              <h2 className="sg-section__title">Typography specimen</h2>
              <p className="sg-section__desc">Heading scale using Lexend (primary) and Manrope (secondary)</p>
            </div>
          </ScrollReveal>

          <div className="sg-type__list">
            {typographyScale.map((t, i) => (
              <ScrollReveal key={t.level} animation="fade-up" delay={i * 60}>
                <div className="sg-type__item">
                  <div className="sg-type__meta">
                    <code className="sg-type__code">{t.cssVar}</code>
                    <span className="sg-type__level">{t.level}</span>
                  </div>
                  <div
                    className="sg-type__sample"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: `var(${t.cssVar})`,
                      fontWeight: `var(${t.weight})`,
                      color: 'var(--foreground)',
                      lineHeight: 'var(--line-height-snug)',
                    }}
                  >
                    {t.sample}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal animation="fade-up" delay={400}>
              <div className="sg-type__item">
                <div className="sg-type__meta">
                  <code className="sg-type__code">--font-primary</code>
                  <span className="sg-type__level">Body (Lexend)</span>
                </div>
                <p className="wp-font-primary wp-text-base wp-text-foreground wp-m-0 wp-leading-relaxed">
                  The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={450}>
              <div className="sg-type__item">
                <div className="sg-type__meta">
                  <code className="sg-type__code">--font-secondary</code>
                  <span className="sg-type__level">Body (Manrope)</span>
                </div>
                <p className="wp-font-secondary wp-text-base wp-text-muted-foreground wp-m-0 wp-leading-relaxed">
                  The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ── 6. BORDER RADIUS ── */}
      <Section spacing="xl" className="sg-section sg-section--alt">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="sg-section__header">
              <Square size={24} className="sg-section__icon" />
              <h2 className="sg-section__title">Border radius</h2>
              <p className="sg-section__desc">Corner radius tokens from sharp to fully rounded</p>
            </div>
          </ScrollReveal>

          <div className="sg-radius__grid">
            {radiusPresets.map((r, i) => (
              <ScrollReveal key={r.name} animation="fade-up" delay={i * 60}>
                <div className="sg-radius__card">
                  <div className="sg-radius__box" style={{ borderRadius: `var(${r.name})` }} />
                  <code className="sg-radius__code">{r.name}</code>
                  <span className="sg-radius__label">{r.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 7. SPACING SCALE ── */}
      <Section spacing="xl" className="sg-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="sg-section__header">
              <Move size={24} className="sg-section__icon" />
              <h2 className="sg-section__title">Spacing scale</h2>
              <p className="sg-section__desc">Spacing tokens for padding, margin, and gap</p>
            </div>
          </ScrollReveal>

          <div className="sg-spacing__list">
            {spacingScale.map((sp, i) => (
              <ScrollReveal key={sp.name} animation="fade-left" delay={i * 50}>
                <div className="sg-spacing__row">
                  <code className="sg-spacing__code">{sp.name}</code>
                  <div className="sg-spacing__bar" style={{ width: `var(${sp.name})` }} />
                  <span className="sg-spacing__label">{sp.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 8. INTERACTIVE STATES ── */}
      <Section spacing="xl" className="sg-section sg-section--alt">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="sg-section__header">
              <MousePointer size={24} className="sg-section__icon" />
              <h2 className="sg-section__title">Interactive states</h2>
              <p className="sg-section__desc">Hover, focus, and active states for all interactive elements</p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <div className="sg-states__grid">
              <div className="sg-states__group">
                <h3 className="sg-states__group-title">Buttons</h3>
                <div className="sg-states__row">
                  <Button variant="primary" size="lg">Primary</Button>
                  <Button variant="secondary" size="lg">Secondary</Button>
                  <Button variant="outline" size="lg">Outline</Button>
                  <Button variant="ghost" size="lg">Ghost</Button>
                </div>
                <div className="sg-states__row">
                  <Button variant="primary" size="md">Medium</Button>
                  <Button variant="primary" size="sm">Small</Button>
                </div>
              </div>

              <div className="sg-states__group">
                <h3 className="sg-states__group-title">Form inputs</h3>
                <div className="sg-states__inputs">
                  <input className="sg-states__input" type="text" placeholder="Default input — click to see focus glow" />
                  <textarea className="sg-states__textarea" placeholder="Textarea — click to see focus glow" rows={3} />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* ── 9. CARD VARIANTS ── */}
      <Section spacing="xl" className="sg-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="sg-section__header">
              <CreditCard size={24} className="sg-section__icon" />
              <h2 className="sg-section__title">Card variants</h2>
              <p className="sg-section__desc">Card patterns used across the design system</p>
            </div>
          </ScrollReveal>

          <div className="sg-cards__grid">
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="sg-cards__item sg-cards__item--default">
                <h4 className="sg-cards__card-title">Default card</h4>
                <p className="sg-cards__card-desc">Standard card with border and background</p>
                <code className="sg-cards__card-code">var(--card) + var(--border-soft)</code>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={80}>
              <div className="sg-cards__item sg-cards__item--glow">
                <div className="sg-cards__glow-border" />
                <div className="sg-cards__glow-inner">
                  <h4 className="sg-cards__card-title">Glow card</h4>
                  <p className="sg-cards__card-desc">Gradient border with hover glow effect</p>
                  <code className="sg-cards__card-code">Gradient border + neon hover</code>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={160}>
              <div className="sg-cards__item sg-cards__item--glass">
                <h4 className="sg-cards__card-title">Glass card</h4>
                <p className="sg-cards__card-desc">Glassmorphism with backdrop blur</p>
                <code className="sg-cards__card-code">var(--glass-bg) + backdrop-filter</code>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={240}>
              <div className="sg-cards__item sg-cards__item--elevated">
                <h4 className="sg-cards__card-title">Elevated card</h4>
                <p className="sg-cards__card-desc">Deep shadow for floating elements</p>
                <code className="sg-cards__card-code">var(--shadow-xl) elevation</code>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
