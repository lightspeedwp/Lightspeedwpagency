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
 *
 * Sub-components:
 * - StyleGuideLowerSections — Typography, Border radius, Spacing,
 *   Interactive states, Card variants sections
 *
 * BEM block: .styleguide
 * @see /src/styles/templates/page-styleguide.css
 * @see /src/app/data/style-guide-data.ts — Token arrays
 */

import '../../../styles/templates/page-styleguide.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import {
  Lightning as Zap,
  Sparkle as Sparkles,
  Palette,
  Stack as Layers,
  ArrowsOut as Move
} from '@phosphor-icons/react';
import {
  neonEffects,
  shadowPresets,
  colors,
  surfaces,
  animationPresets,
} from '../../data/style-guide-data';
import { StyleGuideLowerSections } from './style-guide/StyleGuideLowerSections';

export function StyleGuideTemplate() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="styleguide__hero">
        <div className="styleguide__hero__orb styleguide__hero__orb--1" />
        <div className="styleguide__hero__orb styleguide__hero__orb--2" />
        <Container>
          <div className="styleguide__hero__content">
            <span className="styleguide__hero__badge">
              <Sparkles size={16} />
              Design system
            </span>
            <h1 className="styleguide__hero__title">Neon style guide</h1>
            <p className="styleguide__hero__subtitle">
              A complete showcase of the LSX Design system tokens, effects, and interactive patterns.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 1. NEON / GLOW EFFECTS ── */}
      <Section spacing="xl" className="styleguide__section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="styleguide__section__header">
              <Zap size={24} className="styleguide__section__icon" />
              <h2 className="styleguide__section__title">Neon & glow effects</h2>
              <p className="styleguide__section__desc">Shadow presets that create neon and ambient glow effects</p>
            </div>
          </ScrollReveal>

          <div className="styleguide__neon__grid">
            {neonEffects.map((fx, i) => (
              <ScrollReveal key={fx.name} animation="fade-up" delay={i * 80}>
                <div className="styleguide__neon__card" style={{ boxShadow: `var(${fx.name})` }}>
                  <div className="styleguide__neon__dot" />
                  <code className="styleguide__neon__code">{fx.name}</code>
                  <span className="styleguide__neon__label">{fx.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 2. SHADOW PRESETS ── */}
      <Section spacing="xl" className="styleguide__section styleguide__section--alt">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="styleguide__section__header">
              <Layers size={24} className="styleguide__section__icon" />
              <h2 className="styleguide__section__title">Shadow presets</h2>
              <p className="styleguide__section__desc">Elevation system for depth and hierarchy</p>
            </div>
          </ScrollReveal>

          <div className="styleguide__shadows__grid">
            {shadowPresets.map((s, i) => (
              <ScrollReveal key={s.name} animation="fade-up" delay={i * 60}>
                <div className="styleguide__shadows__card" style={{ boxShadow: `var(${s.name})` }}>
                  <code className="styleguide__shadows__code">{s.name}</code>
                  <span className="styleguide__shadows__label">{s.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 3. ANIMATION LIBRARY ── */}
      <Section spacing="xl" className="styleguide__section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="styleguide__section__header">
              <Move size={24} className="styleguide__section__icon" />
              <h2 className="styleguide__section__title">Animation library</h2>
              <p className="styleguide__section__desc">CSS keyframe animations available in the design system</p>
            </div>
          </ScrollReveal>

          <div className="styleguide__anim__grid">
            {animationPresets.map((a, i) => (
              <ScrollReveal key={a.mod} animation="fade-up" delay={i * 80}>
                <div className="styleguide__anim__card">
                  <div className={`styleguide__anim__dot styleguide__anim__dot--${a.mod}`} />
                  <code className="styleguide__anim__code">{a.code}</code>
                  <span className="styleguide__anim__label">{a.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 4. COLOR PALETTE ── */}
      <Section spacing="xl" className="styleguide__section styleguide__section--alt">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="styleguide__section__header">
              <Palette size={24} className="styleguide__section__icon" />
              <h2 className="styleguide__section__title">Color palette</h2>
              <p className="styleguide__section__desc">Semantic color tokens — adapts to light and dark mode automatically</p>
            </div>
          </ScrollReveal>

          <div className="styleguide__colors__grid">
            {colors.map((c, i) => (
              <ScrollReveal key={c.name} animation="fade-up" delay={i * 50}>
                <div className="styleguide__colors__swatch">
                  <div className="styleguide__colors__fill" style={{ backgroundColor: `var(${c.cssVar})`, color: `var(${c.fg})` }}>
                    {c.name}
                  </div>
                  <div className="styleguide__colors__meta">
                    <code className="styleguide__colors__code">{c.cssVar}</code>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={200}>
            <h3 className="styleguide__sub__title">Surfaces</h3>
            <div className="styleguide__surfaces__grid">
              {surfaces.map((s) => (
                <div key={s.name} className="styleguide__surfaces__card" style={{ backgroundColor: `var(${s.cssVar})`, color: `var(${s.fg})` }}>
                  <span className="styleguide__surfaces__name">{s.name}</span>
                  <code className="styleguide__surfaces__code">{s.cssVar}</code>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Lower sections extracted for file size compliance */}
      <StyleGuideLowerSections />
    </>
  );
}
