/**
 * Hero Home Pattern
 * 
 * WordPress pattern: lsx-design/hero/home
 * 
 * Full-height hero with centered content, background image, and scroll indicator.
 * Uses design system tokens for all styling.
 */

import { Button, Buttons } from '../blocks/design/Buttons';
import { ScrollDownArrow } from '../blocks/layout/ScrollDownArrow';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Section } from '../common/Section';
import { TRANSITIONS } from '../../utils/animations';

export function HeroHome() {
  return (
    <Section 
      sectionStyle="hero-primary"
      style={{ 
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, var(--accent) 100%)',
          opacity: '0.1',
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center py-24">
        {/* Category badge - innerBlock */}
        <span 
          className="inline-flex items-center px-6 py-3 mb-8"
          style={{
            backgroundColor: 'var(--primary-foreground)',
            color: 'var(--primary)',
            borderRadius: 'var(--radius-xl)',
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-medium)',
            textTransform: 'uppercase' as const,
            letterSpacing: '0.1em',
            opacity: '0.95'
          }}
        >
          WordPress Design System
        </span>

        {/* Heading Block - H1 innerBlock */}
        <h1 
          className="mb-8"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h1)',
            fontWeight: 'var(--font-weight-medium)',
            lineHeight: 'var(--line-height-tight)',
            letterSpacing: 'var(--letter-spacing-tight)',
            margin: 0
          }}
        >
          Build Better WordPress<br />Sites Faster
        </h1>

        {/* Paragraph Block - innerBlock */}
        <p 
          className="mb-12 mx-auto"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-lead)',
            fontWeight: 'var(--font-weight-regular)',
            lineHeight: 'var(--line-height-relaxed)',
            maxWidth: '750px',
            opacity: '0.95'
          }}
        >
          A comprehensive design system and block theme framework for creating accessible, scalable WordPress websites with modern best practices.
        </p>

        {/* Buttons Block - innerBlock with Button children */}
        <Buttons orientation="horizontal" align="center" className="mb-20">
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

        {/* Stats Grid - innerBlock (could be Columns block in WordPress) */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12" 
          style={{ 
            borderTop: '1px solid var(--primary-foreground)',
            opacity: '0.8'
          }}
        >
          <div>
            <div 
              className="mb-3"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-semibold)',
                lineHeight: '1'
              }}
            >
              15K+
            </div>
            <div 
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
                opacity: '0.85',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.1em'
              }}
            >
              Happy Clients
            </div>
          </div>

          <div>
            <div 
              className="mb-3"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-semibold)',
                lineHeight: '1'
              }}
            >
              98%
            </div>
            <div 
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
                opacity: '0.85',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.1em'
              }}
            >
              Success Rate
            </div>
          </div>

          <div>
            <div 
              className="mb-3"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-semibold)',
                lineHeight: '1'
              }}
            >
              WCAG AA
            </div>
            <div 
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
                opacity: '0.85',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.1em'
              }}
            >
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