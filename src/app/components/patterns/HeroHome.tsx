/**
 * Hero Home Pattern — Fresh Asymmetric Split Layout
 *
 * WordPress pattern: lsx-design/hero/home
 *
 * Full-viewport hero with asymmetric two-column layout:
 *   Left  → badge, display heading, lead text, CTA buttons
 *   Right → floating glassmorphism capability cards with neon glow
 *   Bottom → trust metrics bar
 *
 * Background features animated glow orbs and a dot-grid overlay.
 * Content constrained to 1440px via the .alignwide utility class.
 *
 * All styling in /src/styles/patterns/hero-home.css (user-editable).
 * 100% CSS variables — no hardcoded values.
 */

import { Button, Buttons } from '../blocks/design/Buttons';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { Heading } from '../common/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Section } from '../common/Section';
import {
  Sparkles,
  Layers,
  ShoppingCart,
  Palette,
  ShieldCheck,
} from 'lucide-react';
import { frontPageHero } from '../../data/front-page';
import '@/styles/patterns/hero-home.css';

/**
 * Showcase card data — capability highlights displayed as
 * floating glass cards on the right side of the hero.
 */
const showcaseCards = [
  {
    icon: Layers,
    label: 'Block Themes',
    meta: 'WordPress FSE',
  },
  {
    icon: ShoppingCart,
    label: 'WooCommerce',
    meta: 'Certified Partner',
  },
  {
    icon: Palette,
    label: 'Design Systems',
    meta: 'Token-Driven',
  },
  {
    icon: ShieldCheck,
    label: 'WCAG AA',
    meta: 'Accessible',
  },
];

export function HeroHome() {
  return (
    <Section
      sectionStyle="gradient-primary"
      className="hero-home"
    >
      {/* ------------------------------------------------
          BACKDROP — dot grid pattern + animated glow orbs
          ------------------------------------------------ */}
      <div className="hero-home__backdrop" aria-hidden="true">
        <div className="hero-home__orb--primary" />
        <div className="hero-home__orb--accent" />
      </div>

      {/* ------------------------------------------------
          INNER — alignwide constraint (1440px)
          ------------------------------------------------ */}
      <div className="hero-home__inner alignwide">
        <div className="hero-home__grid">

          {/* ---------- LEFT: Text content ---------- */}
          <div className="hero-home__content">

            {/* Badge */}
            <span className="hero-home__badge">
              <Sparkles className="hero-home__badge-icon" size={16} />
              {frontPageHero.badge}
            </span>

            {/* Display heading — "Faster" gets accent gradient */}
            <Heading level={1} className="hero-home__title">
              Build Better WordPress Sites{' '}
              <span className="hero-home__title-accent">Faster</span>
            </Heading>

            {/* Lead paragraph */}
            <Paragraph size="lead" className="hero-home__description">
              {frontPageHero.description}
            </Paragraph>

            {/* CTA Buttons */}
            <Buttons
              orientation="horizontal"
              align="start"
              className="hero-home__actions"
            >
              <Button
                variant="default"
                size="lg"
                page={frontPageHero.primaryButton.page}
                className="hero-home__btn--primary"
              >
                {frontPageHero.primaryButton.text}
              </Button>
              <Button
                variant="outline"
                size="lg"
                page={frontPageHero.secondaryButton.page}
                className="hero-home__btn--secondary"
              >
                {frontPageHero.secondaryButton.text}
              </Button>
            </Buttons>
          </div>

          {/* ---------- RIGHT: Floating showcase cards ---------- */}
          <div className="hero-home__visual" aria-hidden="true">
            <div className="hero-home__showcase">
              {/* Decorative neon ring */}
              <div className="hero-home__ring" />

              {showcaseCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.label}
                    className={`hero-home__card hero-home__card--${index + 1}`}
                  >
                    <div className="hero-home__card-icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="hero-home__card-label">{card.label}</span>
                    <span className="hero-home__card-meta">{card.meta}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* ------------------------------------------------
          TRUST STRIP — bottom metrics bar
          ------------------------------------------------ */}
      <div className="hero-home__trust alignwide">
        <div className="hero-home__trust-bar">
          {frontPageHero.stats.map((stat, index) => (
            <div key={index} className="hero-home__trust-item">
              <span className="hero-home__trust-value">{stat.value}</span>
              <span className="hero-home__trust-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollDownArrow targetId="why-choose" />
    </Section>
  );
}
