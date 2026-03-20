/**
 * Hero Splash Pattern — Modern Minimal Hero with Glassmorphic Design
 *
 * WordPress pattern: lsx-design/hero/splash
 *
 * A high-impact hero section with:
 * - Clean, focused layout
 * - Glassmorphic gradient background
 * - Animated gradient mesh
 * - Stats badges
 * - Centralized CTA actions
 *
 * Designed for the Front Page and primary landing sections.
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - BEM methodology
 * - Typography: var(--font-primary), var(--font-secondary)
 * - Colors: 100% CSS variables
 *
 * @see /src/styles/templates/page-front-page.css — Specific styling
 */

import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { Sparkle } from '@phosphor-icons/react';
import type { UniversalIcon } from '../../utils/icon-map';

export interface HeroSplashButton {
  text: string;
  page: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroSplashProps {
  badge: string;
  badgeIcon?: UniversalIcon;
  title: string;
  description: string;
  primaryButton: HeroSplashButton;
  secondaryButton: HeroSplashButton;
  stats?: HeroStat[];
  targetId?: string;
}

export function HeroSplash({
  badge,
  badgeIcon: BadgeIcon = Sparkle,
  title,
  description,
  primaryButton,
  secondaryButton,
  stats,
  targetId = 'proof-strip',
}: HeroSplashProps) {
  return (
    <section className="hero-base hero-variant-splash hero-spacing-fullscreen front-page__hero">
      {/* Gradient Background Mesh */}
      <div className="front-page__hero-mesh" aria-hidden="true" />
      
      {/* Grid Overlay */}
      <div className="front-page__hero-grid" aria-hidden="true" />

      <Container>
        <div className="hero-base__content hero-align-center">
          {/* Badge */}
          <div className="hero-base__badge">
            <BadgeIcon size={16} />
            {badge}
          </div>
          
          {/* Title */}
          <h1 className="hero-base__title front-page__hero-title">
            {title}
          </h1>
          
          {/* Description */}
          <p className="hero-base__description front-page__hero-description">
            {description}
          </p>

          {/* Actions */}
          <div className="front-page__hero-actions">
            <Button
              variant="primary"
              size="xl"
              page={primaryButton.page as any}
              className="has-shadow-neon"
            >
              {primaryButton.text}
            </Button>
            <Button
              variant="outline"
              size="xl"
              page={secondaryButton.page as any}
              className="front-page__hero-btn--outline"
            >
              {secondaryButton.text}
            </Button>
          </div>

          {/* Stats Badges */}
          {stats && stats.length > 0 && (
            <div className="front-page__hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="front-page__hero-stat">
                  <div className="front-page__hero-stat-value">{stat.value}</div>
                  <div className="front-page__hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
      <ScrollDownArrow targetId={targetId} />
    </section>
  );
}