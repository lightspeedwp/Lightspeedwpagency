/**
 * Values Section Pattern
 * 
 * WordPress pattern: lsx-design/content/values
 * 
 * Displays company values or principles in a grid layout.
 * Includes icons, headings, and descriptions.
 * 
 * All styling in /src/styles/patterns/values-section.css (user-editable)
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
  // Build title class
  const titleClass = [
    'values-section__title',
    description && 'values-section__title--with-description'
  ].filter(Boolean).join(' ');

  return (
    <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
      <Container>
        {/* Section Header */}
        <div className="values-section__header">
          <h2 className={titleClass}>
            {title}
          </h2>

          {description && (
            <p className="values-section__description">
              {description}
            </p>
          )}
        </div>

        {/* Values Grid */}
        <div className="values-section__grid">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="values-section__card"
              >
                <div className="values-section__icon">
                  <Icon size={28} strokeWidth={2} />
                </div>

                <h3 className="values-section__card-title">
                  {value.title}
                </h3>

                <p className="values-section__card-description">
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
