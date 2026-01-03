/**
 * Hero Pattern - Minimal Style
 * 
 * WordPress Pattern: lsx-design/hero/minimal
 * 
 * Clean, minimal hero with centered text on solid background.
 * Used for: Blog posts, simple pages, content-focused layouts
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';

interface HeroMinimalProps {
  title: string;
  subtitle?: string;
  meta?: React.ReactNode;
  align?: 'left' | 'center';
  background?: 'default' | 'muted' | 'card';
}

export function HeroMinimal({ 
  title, 
  subtitle,
  meta,
  align = 'left',
  background = 'default'
}: HeroMinimalProps) {
  const bgColor = background === 'muted' 
    ? 'var(--muted)' 
    : background === 'card'
    ? 'var(--card)'
    : 'var(--background)';

  return (
    <Section 
      spacing="lg"
      style={{
        backgroundColor: bgColor,
        borderBottom: '1px solid var(--border-soft)'
      }}
    >
      <Container>
        <div 
          className="max-w-4xl"
          style={{ 
            textAlign: align,
            marginLeft: align === 'center' ? 'auto' : '0',
            marginRight: align === 'center' ? 'auto' : '0'
          }}
        >
          {meta && (
            <div className="mb-4">
              {meta}
            </div>
          )}

          <h1 
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-h1)',
              fontWeight: 'var(--font-weight-semibold)',
              lineHeight: 'var(--line-height-snug)',
              letterSpacing: 'var(--letter-spacing-tight)',
              marginBottom: '24px',
              color: 'var(--foreground)'
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p 
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-regular)',
                lineHeight: 'var(--line-height-normal)',
                color: 'var(--muted-foreground)',
                margin: 0
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}