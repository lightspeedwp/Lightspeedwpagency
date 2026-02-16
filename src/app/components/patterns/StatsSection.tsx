/**
 * Stats Section Pattern
 * 
 * WordPress pattern: lsx-design/content/stats
 * 
 * Displays key statistics in a grid layout with optional section title.
 * Used for showcasing company metrics, achievements, or impact.
 * 
 * All styling in /src/styles/patterns/stats-section.css (user-editable)
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import '@/styles/patterns/stats-section.css';

export interface Stat {
  number: string;
  label: string;
  description?: string;
}

interface StatsSectionProps {
  /** Optional section title displayed above the stats grid */
  title?: string;
  /** Optional section description below the title */
  description?: string;
  stats: Stat[];
  variant?: 'default' | 'highlighted';
}

export function StatsSection({ title, description, stats, variant = 'default' }: StatsSectionProps) {
  // Build section class
  const sectionClass = `stats-section--${variant}`;

  return (
    <Section 
      spacing="lg"
      className={sectionClass}
    >
      <Container>
        <div className="stats-section__inner">
          {/* Optional Section Header */}
          {(title || description) && (
            <div className="stats-section__header">
              {title && (
                <h2 className="stats-section__title">
                  {title}
                </h2>
              )}
              {description && (
                <p className="stats-section__subtitle">
                  {description}
                </p>
              )}
            </div>
          )}

          <div 
            className="stats-section__grid"
            role="list"
          >
            {stats.map((stat, index) => {
              // Build label class
              const labelClass = [
                'stats-section__label',
                stat.description && 'stats-section__label--with-description'
              ].filter(Boolean).join(' ');

              return (
                <div
                  key={index}
                  role="listitem"
                  className="stats-section__item"
                >
                  <div className="stats-section__number">
                    {stat.number}
                  </div>

                  <div className={labelClass}>
                    {stat.label}
                  </div>

                  {stat.description && (
                    <p className="stats-section__description">
                      {stat.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}