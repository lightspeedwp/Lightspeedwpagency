/**
 * Values Section Pattern
 * 
 * WordPress pattern: lsx-design/content/values
 * 
 * Displays company values or principles in a grid layout.
 * Includes icons, headings, and descriptions.
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { LucideIcon } from 'lucide-react';

export interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ValuesSectionProps {
  title: string;
  description?: string;
  values: Value[];
}

export function ValuesSection({ title, description, values }: ValuesSectionProps) {
  return (
    <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-h2)',
              fontWeight: 'var(--font-weight-semibold)',
              lineHeight: 'var(--line-height-snug)',
              letterSpacing: 'var(--letter-spacing-tight)',
              marginBottom: description ? '16px' : '0',
              color: 'var(--foreground)'
            }}
          >
            {title}
          </h2>

          {description && (
            <p 
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-lg)',
                color: 'var(--muted-foreground)',
                lineHeight: '1.7'
              }}
            >
              {description}
            </p>
          )}
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '32px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.borderColor = 'var(--border-soft)';
                }}
              >
                <div 
                  className="mb-6"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Icon size={28} strokeWidth={2} />
                </div>

                <h3 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h4)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--card-foreground)',
                    marginBottom: '12px',
                    lineHeight: '1.3'
                  }}
                >
                  {value.title}
                </h3>

                <p 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.7'
                  }}
                >
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}