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
        <div className="timeline-section__header">
          <h2 className="timeline-section__title">
            {title}
          </h2>

          {description && (
            <p className="timeline-section__description">
              {description}
            </p>
          )}
        </div>

        {/* Timeline */}
        <div className="timeline-section__wrapper">
          {items.map((item, index) => (
            <div
              key={index}
              className="timeline-section__item"
            >
              {/* Timeline Line */}
              {index < items.length - 1 && (
                <div
                  className="timeline-section__line"
                  aria-hidden="true"
                />
              )}

              {/* Year Badge */}
              <div className="timeline-section__badge">
                {item.year}
              </div>

              {/* Content */}
              <div className="timeline-section__card">
                <h3 className="timeline-section__item-title">
                  {item.title}
                </h3>

                <p className="timeline-section__item-desc">
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
