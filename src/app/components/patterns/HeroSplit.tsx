/**
 * Hero Pattern - Split Layout
 * 
 * WordPress Pattern: lsx-design/hero/split
 * 
 * Two-column hero with content on left and visual on right.
 * Used for: Landing pages, product pages, feature showcases
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';

interface HeroSplitProps {
  badge?: string;
  title: string;
  description: string;
  primaryCta?: {
    text: string;
    onClick: () => void;
  };
  secondaryCta?: {
    text: string;
    onClick: () => void;
  };
  visual?: React.ReactNode;
  reverseLayout?: boolean;
}

export function HeroSplit({ 
  badge,
  title, 
  description,
  primaryCta,
  secondaryCta,
  visual,
  reverseLayout = false
}: HeroSplitProps) {
  const content = (
    <div className="flex flex-col justify-center">
      {badge && (
        <span 
          className="inline-flex items-center px-4 py-2 mb-6"
          style={{
            backgroundColor: 'var(--secondary)',
            color: 'var(--secondary-foreground)',
            borderRadius: 'var(--radius-lg)',
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-small)',
            fontWeight: 'var(--font-weight-medium)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            alignSelf: 'flex-start'
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
          color: 'var(--foreground)'
        }}
      >
        {title}
      </h1>

      <p 
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-weight-regular)',
          lineHeight: 'var(--line-height-relaxed)',
          color: 'var(--muted-foreground)',
          marginBottom: (primaryCta || secondaryCta) ? '32px' : '0'
        }}
      >
        {description}
      </p>

      {(primaryCta || secondaryCta) && (
        <div className="flex flex-wrap gap-4">
          {primaryCta && (
            <Button variant="primary" onClick={primaryCta.onClick}>
              {primaryCta.text}
            </Button>
          )}
          {secondaryCta && (
            <Button variant="outline" onClick={secondaryCta.onClick}>
              {secondaryCta.text}
            </Button>
          )}
        </div>
      )}
    </div>
  );

  const visualElement = visual ? (
    <div className="flex items-center justify-center">
      {visual}
    </div>
  ) : (
    <div 
      className="flex items-center justify-center"
      style={{
        backgroundColor: 'var(--muted)',
        borderRadius: 'var(--radius-xl)',
        aspectRatio: '4/3',
        border: '1px solid var(--border-soft)'
      }}
    >
      <p 
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-base)',
          color: 'var(--muted-foreground)'
        }}
      >
        Visual placeholder
      </p>
    </div>
  );

  return (
    <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {reverseLayout ? (
            <>
              {visualElement}
              {content}
            </>
          ) : (
            <>
              {content}
              {visualElement}
            </>
          )}
        </div>
      </Container>
    </Section>
  );
}