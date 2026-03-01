/**
 * Style Guide Template — Neon Showcase
 *
 * Complete design system reference with:
 * - Neon/Glow effects gallery
 * - Shadow presets visualiser
 * - Animation library demo
 * - Color palette (light/dark adaptive)
 * - Typography specimen
 * - Border radius showcase
 * - Spacing scale
 * - Interactive states demo
 * - Card variants gallery
 *
 * 100% CSS variables — zero hardcoded values.
 */

import '../../../styles/templates/page-styleguide.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import {
  Zap,
  Sparkles,
  Type,
  Palette,
  Square,
  Layers,
  MousePointer,
  CreditCard,
  Move
} from 'lucide-react';

/* ───────── DATA ───────── */

const neonEffects = [
  { name: '--shadow-neon',         label: 'Neon' },
  { name: '--shadow-neon-intense', label: 'Neon intense' },
  { name: '--shadow-glow-sm',     label: 'Glow small' },
  { name: '--shadow-glow',        label: 'Glow' },
  { name: '--shadow-glow-lg',     label: 'Glow large' },
];

const shadowPresets = [
  { name: '--shadow-sm',    label: 'Small' },
  { name: '--shadow-md',    label: 'Medium' },
  { name: '--shadow-lg',    label: 'Large' },
  { name: '--shadow-xl',    label: 'Extra large' },
  { name: '--shadow-hover', label: 'Hover' },
  { name: '--shadow-inner', label: 'Inner' },
];

const colors = [
  { name: 'Primary',     cssVar: '--primary',     fg: '--primary-foreground' },
  { name: 'Secondary',   cssVar: '--secondary',   fg: '--color-white' },
  { name: 'Accent',      cssVar: '--accent',      fg: '--accent-foreground' },
  { name: 'Success',     cssVar: '--success',     fg: '--color-white' },
  { name: 'Warning',     cssVar: '--warning',     fg: '--color-white' },
  { name: 'Destructive', cssVar: '--destructive', fg: '--destructive-foreground' },
  { name: 'Muted',       cssVar: '--muted',       fg: '--muted-foreground' },
  { name: 'Card',        cssVar: '--card',        fg: '--card-foreground' },
];

const surfaces = [
  { name: 'Background', cssVar: '--background', fg: '--foreground' },
  { name: 'Card',       cssVar: '--card',       fg: '--card-foreground' },
  { name: 'Sidebar',    cssVar: '--sidebar',    fg: '--color-white' },
  { name: 'Muted',      cssVar: '--muted',      fg: '--muted-foreground' },
];

const typographyScale = [
  { level: 'H1', cssVar: '--text-h1', weight: '--font-weight-black',    sample: 'The quick brown fox' },
  { level: 'H2', cssVar: '--text-h2', weight: '--font-weight-bold',     sample: 'Jumps over the lazy dog' },
  { level: 'H3', cssVar: '--text-h3', weight: '--font-weight-bold',     sample: 'Design system specimen' },
  { level: 'H4', cssVar: '--text-h4', weight: '--font-weight-bold',     sample: 'Component heading style' },
  { level: 'H5', cssVar: '--text-h5', weight: '--font-weight-semibold', sample: 'Section subtitle text' },
  { level: 'H6', cssVar: '--text-h6', weight: '--font-weight-semibold', sample: 'Small label heading' },
];

const radiusPresets = [
  { name: '--radius-sm',   label: 'Small' },
  { name: '--radius',      label: 'Default' },
  { name: '--radius-lg',   label: 'Large' },
  { name: '--radius-xl',   label: 'XL' },
  { name: '--radius-2xl',  label: '2XL' },
  { name: '--radius-full', label: 'Full' },
];

const spacingScale = [
  { name: '--spacing-1',  label: '1 (4px)' },
  { name: '--spacing-2',  label: '2 (8px)' },
  { name: '--spacing-3',  label: '3 (12px)' },
  { name: '--spacing-4',  label: '4 (16px)' },
  { name: '--spacing-6',  label: '6 (24px)' },
  { name: '--spacing-8',  label: '8 (32px)' },
  { name: '--spacing-12', label: '12 (48px)' },
  { name: '--spacing-16', label: '16 (64px)' },
];

export function StyleGuideTemplate() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="sg-hero">
        <div className="sg-hero__orb sg-hero__orb--1" />
        <div className="sg-hero__orb sg-hero__orb--2" />
        <Container>
          <div className="sg-hero__content">
            <span className="sg-hero__badge">
              <Sparkles size={16} />
              Design system
            </span>
            <h1 className="sg-hero__title">Neon style guide</h1>
            <p className="sg-hero__subtitle">
              A complete showcase of the LSX Design system tokens, effects, and interactive patterns.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 1. NEON / GLOW EFFECTS ── */}
      <Section spacing="xl" className="sg-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="sg-section__header">
              <Zap size={24} className="sg-section__icon" />
              <h2 className="sg-section__title">Neon & glow effects</h2>
              <p className="sg-section__desc">Shadow presets that create neon and ambient glow effects</p>
            </div>
          </ScrollReveal>

          <div className="sg-neon__grid">
            {neonEffects.map((fx, i) => (
              <ScrollReveal key={fx.name} animation="fade-up" delay={i * 80}>
                <div className="sg-neon__card" style={{ boxShadow: `var(${fx.name})` }}>
                  <div className="sg-neon__dot" />
                  <code className="sg-neon__code">{fx.name}</code>
                  <span className="sg-neon__label">{fx.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 2. SHADOW PRESETS ── */}
      <Section spacing="xl" className="sg-section sg-section--alt">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="sg-section__header">
              <Layers size={24} className="sg-section__icon" />
              <h2 className="sg-section__title">Shadow presets</h2>
              <p className="sg-section__desc">Elevation system for depth and hierarchy</p>
            </div>
          </ScrollReveal>

          <div className="sg-shadows__grid">
            {shadowPresets.map((s, i) => (
              <ScrollReveal key={s.name} animation="fade-up" delay={i * 60}>
                <div className="sg-shadows__card" style={{ boxShadow: `var(${s.name})` }}>
                  <code className="sg-shadows__code">{s.name}</code>
                  <span className="sg-shadows__label">{s.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 3. ANIMATION LIBRARY ── */}
      <Section spacing="xl" className="sg-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="sg-section__header">
              <Move size={24} className="sg-section__icon" />
              <h2 className="sg-section__title">Animation library</h2>
              <p className="sg-section__desc">CSS keyframe animations available in the design system</p>
            </div>
          </ScrollReveal>

          <div className="sg-anim__grid">
            {[
              { mod: 'pulse',       code: 'Glow pulse',       label: 'Badge / notification glow' },
              { mod: 'float',       code: 'Float',            label: 'Decorative orb movement' },
              { mod: 'border-flow', code: 'Neon border flow', label: 'Animated gradient border' },
              { mod: 'grid-drift',  code: 'Grid drift',       label: 'Background pattern movement' },
            ].map((a, i) => (
              <ScrollReveal key={a.mod} animation="fade-up" delay={i * 80}>
                <div className="sg-anim__card">
                  <div className={`sg-anim__dot sg-anim__dot--${a.mod}`} />
                  <code className="sg-anim__code">{a.code}</code>
                  <span className="sg-anim__label">{a.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 4. COLOR PALETTE ── */}
      <Section spacing="xl" className="sg-section sg-section--alt">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="sg-section__header">
              <Palette size={24} className="sg-section__icon" />
              <h2 className="sg-section__title">Color palette</h2>
              <p className="sg-section__desc">Semantic color tokens — adapts to light and dark mode automatically</p>
            </div>
          </ScrollReveal>

          <div className="sg-colors__grid">
            {colors.map((c, i) => (
              <ScrollReveal key={c.name} animation="fade-up" delay={i * 50}>
                <div className="sg-colors__swatch">
                  <div
                    className="sg-colors__fill"
                    style={{ backgroundColor: `var(${c.cssVar})`, color: `var(${c.fg})` }}
                  >
                    {c.name}
                  </div>
                  <div className="sg-colors__meta">
                    <code className="sg-colors__code">{c.cssVar}</code>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={200}>
            <h3 className="sg-sub__title">Surfaces</h3>
            <div className="sg-surfaces__grid">
              {surfaces.map((s) => (
                <div
                  key={s.name}
                  className="sg-surfaces__card"
                  style={{ backgroundColor: `var(${s.cssVar})`, color: `var(${s.fg})` }}
                >
                  <span className="sg-surfaces__name">{s.name}</span>
                  <code className="sg-surfaces__code">{s.cssVar}</code>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </Section>

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
                <p style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--foreground)',
                  lineHeight: 'var(--line-height-relaxed)',
                  margin: 0,
                }}>
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
                <p style={{
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--muted-foreground)',
                  lineHeight: 'var(--line-height-relaxed)',
                  margin: 0,
                }}>
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
                  <input
                    className="sg-states__input"
                    type="text"
                    placeholder="Default input — click to see focus glow"
                  />
                  <textarea
                    className="sg-states__textarea"
                    placeholder="Textarea — click to see focus glow"
                    rows={3}
                  />
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