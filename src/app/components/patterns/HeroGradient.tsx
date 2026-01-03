/**
 * Hero Pattern - Gradient Style
 * 
 * WordPress Pattern: lsx-design/hero/gradient
 * 
 * Modern gradient hero with glassmorphism badge and gradient orbs.
 * Used for: About, Services, Team, Portfolio, Contact pages
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';

interface HeroGradientProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  showOrbs?: boolean;
}

export function HeroGradient({ 
  badge, 
  title, 
  subtitle,
  description,
  showOrbs = true 
}: HeroGradientProps) {
  return (
    <Section 
      spacing="xl"
      style={{
        backgroundColor: 'var(--primary)',
        color: 'var(--primary-foreground)',
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
      
      {/* Decorative gradient orb */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full"
        style={{
          background: 'var(--accent)',
          opacity: '0.1',
          filter: 'blur(80px)',
          transform: 'translate(30%, -30%)'
        }}
        aria-hidden="true"
      />

      <Container style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center max-w-4xl mx-auto">
          {badge && (
            <span 
              className="inline-flex items-center px-6 py-3 mb-8"
              style={{
                backgroundColor: 'var(--primary-foreground)',
                color: 'var(--primary)',
                borderRadius: 'var(--radius-xl)',
                border: 'none',
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                opacity: 0.95
              }}
            >
              {badge}
            </span>
          )}

          <h1 
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-h1)',
              fontWeight: 'var(--font-weight-semibold)',
              lineHeight: 'var(--line-height-tight)',
              letterSpacing: 'var(--letter-spacing-tight)',
              marginBottom: '24px',
              color: 'var(--primary-foreground)'
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p 
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-lead)',
                fontWeight: 'var(--font-weight-regular)',
                lineHeight: 'var(--line-height-relaxed)',
                color: 'var(--primary-foreground)',
                opacity: 0.95,
                maxWidth: '700px',
                margin: '0 auto'
              }}
            >
              {subtitle}
            </p>
          )}

          {description && (
            <p 
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'clamp(18px, 2vw, 22px)',
                fontWeight: 'var(--font-weight-regular)',
                lineHeight: '1.7',
                color: 'var(--primary-foreground)',
                opacity: 0.95,
                maxWidth: '700px',
                margin: '0 auto'
              }}
            >
              {description}
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}