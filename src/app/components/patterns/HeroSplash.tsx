/**
 * Hero Splash Pattern — Full-screen Parallax with Neon Orbs
 *
 * WordPress pattern: lsx-design/hero/splash
 *
 * A high-impact hero section with:
 * - Parallax background image
 * - Neon gradient grid overlay
 * - Dynamic mesh gradient orbs
 * - Animated typography
 * - Centralized CTA actions
 *
 * Designed for the Front Page and primary landing sections.
 *
 * @see /src/styles/templates/page-front-page.css — Specific styling
 * @see /src/styles/patterns/hero/hero-base.css — Base structure
 */

import { useHeroParallax } from '../../hooks/useHeroParallax';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { Sparkle } from '@phosphor-icons/react';
import type { UniversalIcon } from '../../utils/icon-map';

export interface HeroSplashButton {
  text: string;
  page: string;
}

export interface HeroSplashProps {
  badge: string;
  badgeIcon?: UniversalIcon;
  titlePrefix?: string;
  titleGradient: string;
  description: string;
  primaryButton: HeroSplashButton;
  secondaryButton: HeroSplashButton;
  bgImage: string;
  targetId?: string;
}

export function HeroSplash({
  badge,
  badgeIcon: BadgeIcon = Sparkle,
  titlePrefix,
  titleGradient,
  description,
  primaryButton,
  secondaryButton,
  bgImage,
  targetId = 'proof-strip',
}: HeroSplashProps) {
  const parallaxRef = useHeroParallax(0.4);

  return (
    <section className="hero-base hero-variant-splash hero-spacing-fullscreen front-page__hero">
      {/* Parallax Background */}
      <img 
        ref={parallaxRef}
        src={bgImage}
        alt="Hero background"
        className="hero-base__bg"
      />
      
      {/* Overlays */}
      <div className="hero-base__overlay" aria-hidden="true" />
      <div className="front-page__hero-grid" aria-hidden="true" />
      
      {/* Floating Orbs */}
      <div className="hero-base__orb hero-base__orb--primary" aria-hidden="true" />
      <div className="hero-base__orb hero-base__orb--secondary" aria-hidden="true" />
      <div className="hero-base__orb hero-base__orb--accent" aria-hidden="true" />

      <Container>
        <div className="hero-base__content hero-align-center">
          {/* Badge */}
          <div className="hero-base__badge">
            <BadgeIcon size={16} className="wp-text-white" />
            {badge}
          </div>
          
          {/* Title */}
          <h1 className="hero-base__title">
            {titlePrefix && <>{titlePrefix} <br /></>}
            <span className="front-page__hero-title-gradient">{titleGradient}</span>
          </h1>
          
          {/* Subtitle */}
          <p className="hero-base__description">
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
        </div>
      </Container>
      <ScrollDownArrow targetId={targetId} />
    </section>
  );
}