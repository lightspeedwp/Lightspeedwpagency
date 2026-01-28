/**
 * Timeline Section Pattern
 * 
 * WordPress pattern: lsx-design/content/timeline
 * 
 * Displays company history or milestones in a vertical timeline.
 * Includes dates, titles, and descriptions.
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { LucideIcon } from 'lucide-react';

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon?: LucideIcon; // Optional icon for timeline items
}

interface TimelineSectionProps {
  title: string;
  description?: string;
  items: TimelineItem[];
}

export function TimelineSection({ title, description, items = [] }: TimelineSectionProps) {
  // Guard against undefined items
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            style={{
              fontFamily: 'var(--font-primary)',
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
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-lg)',
                color: 'var(--muted-foreground)',
                lineHeight: '1.7'
              }}
            >
              {description}
            </p>
          )}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                paddingLeft: '80px',
                paddingBottom: index < items.length - 1 ? '48px' : '0'
              }}
            >
              {/* Timeline Line */}
              {index < items.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    left: '31px',
                    top: '60px',
                    bottom: '0',
                    width: '2px',
                    backgroundColor: 'var(--border-soft)'
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Year Badge */}
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '8px',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-bold)',
                  boxShadow: '0 4px 12px rgba(30, 106, 255, 0.3)',
                  zIndex: 1
                }}
              >
                {item.year}
              </div>

              {/* Content */}
              <div
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '24px 32px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                }}
              >
                <h3 
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h4)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--card-foreground)',
                    marginBottom: '12px',
                    lineHeight: '1.3'
                  }}
                >
                  {item.title}
                </h3>

                <p 
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-base)',
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.7',
                    margin: 0
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}