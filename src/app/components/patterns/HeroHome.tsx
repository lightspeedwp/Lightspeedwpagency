/**
 * Hero Home Pattern
 * 
 * WordPress pattern: lsx-design/hero/home
 * 
 * Full-height hero with centered content, background image, and scroll indicator.
 * Uses design system tokens for all styling.
 * 
 * All styling in /src/styles/hero-home.css (user-editable)
 */

import { Button, Buttons } from '../blocks/design/Buttons';
import { ScrollDownArrow } from '../blocks/layout/ScrollDownArrow';
import { Container } from '../common/Container';
import { Section } from '../common/Section';

export function HeroHome() {
  return (
    <Section 
      sectionStyle="hero-primary"
      className="hero-home-section"
    >
      {/* Subtle gradient overlay */}
      <div 
        className="hero-home__gradient-overlay"
        aria-hidden="true"
      />

      <Container className="hero-home__container">
        {/* Category badge */}
        <span className="hero-home__badge">
          WordPress Design System
        </span>

        {/* Heading Block - H1 */}
        <h1 className="hero-home__title">
          Build Better WordPress<br />Sites Faster
        </h1>

        {/* Paragraph Block */}
        <p className="hero-home__description">
          A comprehensive design system and block theme framework for creating accessible, scalable WordPress websites with modern best practices.
        </p>

        {/* Buttons Block */}
        <Buttons 
          orientation="horizontal" 
          align="center" 
          className="hero-home__buttons"
        >
          {/* Primary CTA - White Solid Button (Maximum Prominence) */}
          <Button 
            variant="primary" 
            size="lg" 
            href="/style-guide"
          >
            View Documentation
          </Button>

          {/* Secondary CTA - Outline Button */}
          <Button 
            variant="outline" 
            size="lg" 
            href="/contact"
          >
            Get Started
          </Button>
        </Buttons>

        {/* Stats Grid */}
        <div className="hero-home__stats">
          <div className="hero-home__stat-item">
            <div className="hero-home__stat-value">
              15K+
            </div>
            <div className="hero-home__stat-label">
              Happy Clients
            </div>
          </div>

          <div className="hero-home__stat-item">
            <div className="hero-home__stat-value">
              98%
            </div>
            <div className="hero-home__stat-label">
              Success Rate
            </div>
          </div>

          <div className="hero-home__stat-item">
            <div className="hero-home__stat-value">
              WCAG AA
            </div>
            <div className="hero-home__stat-label">
              Accessible
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <ScrollDownArrow targetId="featured" />
    </Section>
  );
}
