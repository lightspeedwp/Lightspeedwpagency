/**
 * Stats Section Pattern
 * 
 * WordPress pattern: lsx-design/content/stats
 * 
 * Displays key statistics in a grid layout.
 * Used for showcasing company metrics, achievements, or impact.
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';

export interface Stat {
  number: string;
  label: string;
  description?: string;
}

interface StatsSectionProps {
  stats: Stat[];
  variant?: 'default' | 'highlighted';
}

export function StatsSection({ stats, variant = 'default' }: StatsSectionProps) {
  const isHighlighted = variant === 'highlighted';

  return (
    <Section 
      spacing="lg"
      style={{
        backgroundColor: isHighlighted ? 'var(--primary)' : 'var(--muted)',
        color: isHighlighted ? 'var(--primary-foreground)' : 'var(--foreground)'
      }}
    >
      <Container>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              role="listitem"
              className="text-center"
            >
              <div 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-semibold)',
                  lineHeight: '1',
                  letterSpacing: 'var(--letter-spacing-tight)',
                  marginBottom: '12px',
                  color: isHighlighted ? 'var(--primary-foreground)' : 'var(--primary)'
                }}
              >
                {stat.number}
              </div>

              <div 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h4)',
                  fontWeight: 'var(--font-weight-semibold)',
                  marginBottom: stat.description ? '8px' : '0',
                  color: isHighlighted ? 'var(--primary-foreground)' : 'var(--foreground)'
                }}
              >
                {stat.label}
              </div>

              {stat.description && (
                <p 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    color: isHighlighted 
                      ? 'var(--primary-foreground)' 
                      : 'var(--muted-foreground)',
                    lineHeight: '1.6',
                    opacity: isHighlighted ? 0.9 : 1
                  }}
                >
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}