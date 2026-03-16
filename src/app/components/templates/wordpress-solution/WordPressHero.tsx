/**
 * WordPress Solution — Funky Hero Section
 *
 * Neon grid hero with code window visual, floating orbs,
 * and syntax-highlighted PHP snippet.
 *
 * BEM Block: .wp-solution-hero
 *
 * @see /src/styles/templates/wordpress-solution.css
 * @see /src/app/components/templates/WordPressSolutionTemplate.tsx
 */

import { Container } from '../../common/Container';
import { ScrollReveal } from '../../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../../common/ScrollDownArrow';
import { Code, ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getPageUrl } from '../../../data/site-pages';

interface WordPressHeroProps {
  hero: {
    badge: { text: string };
    tagline: string;
    primaryButton: { text: string };
    secondaryButton: { text: string };
  };
}

export function WordPressHero({ hero }: WordPressHeroProps) {
  return (
    <section className="wp-solution-hero">
      {/* Neon Grid Background */}
      <div className="wp-solution-hero__grid-bg" />

      <Container>
        <div className="wp-grid-2-cols wp-items-center wp-gap-12 wp-solution-hero__content">
          {/* Left: Content */}
          <div className="wp-flex wp-flex-col">
            <ScrollReveal animation="fade-right">
              <div className="wp-inline-flex wp-items-center wp-gap-2 wp-mb-6 wp-solution-hero__badge">
                <Code size={14} weight="bold" />
                {hero.badge.text}
              </div>

              <h1 className="wp-m-0 wp-mb-6 wp-solution-hero__title">
                Enterprise-Grade <br />
                <span className="wp-solution-hero__gradient-text">
                  WordPress Solutions
                </span>
              </h1>

              <p className="wp-m-0 wp-mb-8 wp-max-w-xl wp-solution-hero__description">
                {hero.tagline}
              </p>

              <div className="wp-flex wp-gap-4">
                <Link
                  to={getPageUrl('contact')}
                  className="wp-inline-flex wp-items-center wp-justify-center wp-gap-2 wp-solution-hero__btn-primary"
                >
                  {hero.primaryButton.text} <ArrowRight size={18} weight="bold" />
                </Link>
                <Link
                  to={getPageUrl('portfolio-archive')}
                  className="wp-inline-flex wp-items-center wp-justify-center wp-gap-2 wp-solution-hero__btn-secondary"
                >
                  {hero.secondaryButton.text}
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Code Window Visual */}
          <div className="wp-hide-mobile wp-solution-hero__visual-wrapper">
            <ScrollReveal animation="fade-left" delay={200}>
              {/* Floating Orbs */}
              <div className="wp-solution-hero__orb wp-solution-hero__orb--primary" />
              <div className="wp-solution-hero__orb wp-solution-hero__orb--secondary" />

              {/* Code Window */}
              <div className="wp-solution-hero__code-window">
                {/* Window Header */}
                <div className="wp-flex wp-items-center wp-justify-between wp-px-4 wp-py-3 wp-solution-hero__window-header">
                  <div className="wp-flex wp-gap-2">
                    <div className="wp-solution-hero__traffic-dot wp-solution-hero__traffic-dot--red" />
                    <div className="wp-solution-hero__traffic-dot wp-solution-hero__traffic-dot--yellow" />
                    <div className="wp-solution-hero__traffic-dot wp-solution-hero__traffic-dot--green" />
                  </div>
                  <div className="wp-solution-hero__filename">
                    /src/wp-config.php
                  </div>
                  <div className="wp-solution-hero__header-spacer" />
                </div>

                {/* Code Content */}
                <div className="wp-p-6 wp-solution-hero__code-content">
                  <pre className="wp-solution-hero__code-pre">
                    <code className="wp-solution-hero__code">
<span className="wp-solution-hero__syntax-keyword">&lt;?php</span>
<span className="wp-solution-hero__syntax-comment">// LSX Design System Configuration</span>
{'\n'}
<span className="wp-solution-hero__syntax-function">define</span>(<span className="wp-solution-hero__syntax-string">'WP_CACHE'</span>, <span className="wp-solution-hero__syntax-variable">true</span>);
<span className="wp-solution-hero__syntax-function">define</span>(<span className="wp-solution-hero__syntax-string">'WP_ENVIRONMENT_TYPE'</span>, <span className="wp-solution-hero__syntax-string">'production'</span>);
{'\n'}
<span className="wp-solution-hero__syntax-comment">// Performance Settings</span>
<span className="wp-solution-hero__syntax-variable">$performance</span> <span className="wp-solution-hero__syntax-operator">=</span> [
  <span className="wp-solution-hero__syntax-string">'caching'</span> <span className="wp-solution-hero__syntax-operator">=&gt;</span> <span className="wp-solution-hero__syntax-string">'redis'</span>,
  <span className="wp-solution-hero__syntax-string">'loading'</span> <span className="wp-solution-hero__syntax-operator">=&gt;</span> <span className="wp-solution-hero__syntax-string">'lazy'</span>,
  <span className="wp-solution-hero__syntax-string">'vitals'</span>  <span className="wp-solution-hero__syntax-operator">=&gt;</span> <span className="wp-solution-hero__syntax-string">'optimized'</span>
];
{'\n'}
<span className="wp-solution-hero__syntax-comment">// Initialize Security</span>
<span className="wp-solution-hero__syntax-function">lsx_init_security</span>(<span className="wp-solution-hero__syntax-variable">$performance</span>);
                    </code>
                  </pre>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>

      <div className="wp-solution-hero__scroll-arrow">
        <ScrollDownArrow />
      </div>
    </section>
  );
}
