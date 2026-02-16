/**
 * Why Choose Us Pattern Component
 * 
 * WordPress Pattern: lsx-design/content/why-choose-us
 * 
 * Displays value propositions/reasons to choose the service.
 * Uses InteractiveCard for hover effects.
 * 
 * @see {@link /guidelines/patterns/WhyChooseUs.md}
 */

import { LucideIcon } from 'lucide-react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { InteractiveCard, InteractiveCardContent } from '../common/InteractiveCard';
import '@/styles/patterns/why-choose-us.css';

export interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface WhyChooseUsProps {
  title?: string;
  description?: string;
  reasons: Reason[];
  columns?: 3; // Fixed to 3 for now, expandable later
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  backgroundColor?: string;
}

export function WhyChooseUs({
  title,
  description,
  reasons,
  columns = 3,
  spacing = 'xl',
  backgroundColor
}: WhyChooseUsProps) {
  return (
    <Section spacing={spacing} style={{ backgroundColor }}>
      <Container>
        {/* Section Header */}
        {(title || description) && (
          <div className="why-choose-us__header">
            {title && (
              <h2 className="why-choose-us__title">
                {title}
              </h2>
            )}

            {description && (
              <p className="why-choose-us__description">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Reasons Grid */}
        <div className="why-choose-us__grid why-choose-us__grid--3-cols">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="why-choose-us__card">
                <InteractiveCard variant="elevated" hoverEffect="lift" className="h-full">
                  <InteractiveCardContent className="why-choose-us__card-content">
                    <Icon 
                      size={48} 
                      className="why-choose-us__icon"
                    />
                    <h3 className="why-choose-us__card-title">
                      {reason.title}
                    </h3>
                    <p className="why-choose-us__card-description">
                      {reason.description}
                    </p>
                  </InteractiveCardContent>
                </InteractiveCard>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
