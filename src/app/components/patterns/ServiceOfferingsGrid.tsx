/**
 * Service Offerings Grid Pattern
 * 
 * WordPress pattern: lsx-design/content/service-offerings-grid
 * 
 * Displays a grid of service offerings with icons, hover effects, and CTA buttons.
 * Commonly used on service pages to showcase core offerings.
 * 
 * @see {@link /guidelines/patterns/ServiceOfferingsGrid.md}
 */

import { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';
import { useState } from 'react';


export interface ServiceOffering {
  /** Unique identifier */
  id: string;
  /** Icon component */
  icon: LucideIcon;
  /** Service title */
  title: string;
  /** Service description */
  description: string;
  /** Button text */
  buttonText: string;
  /** Button page slug */
  buttonPage: string;
  /** Optional button variant */
  buttonVariant?: 'default' | 'outline' | 'ghost';
}

export interface ServiceOfferingsGridProps {
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Array of service offerings */
  offerings: ServiceOffering[];
  /** Number of columns (2-4, default: 3) */
  columns?: 2 | 3 | 4;
  /** Background color override */
  backgroundColor?: string;
  /** Section spacing */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  /** Max width constraint */
  maxWidth?: '4xl' | '5xl' | '6xl' | 'none';
}

export function ServiceOfferingsGrid({
  title,
  description,
  offerings,
  columns = 3,
  backgroundColor = 'var(--muted)',
  spacing = 'xl',
  maxWidth = '6xl'
}: ServiceOfferingsGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Grid columns class - Responsive grid handled by CSS
  const gridClass = `service-offerings__grid--${columns}-cols`;

  // Max width class
  const maxWidthClass = maxWidth !== 'none' ? `wp-max-w-${maxWidth}` : '';

  return (
    <Section spacing={spacing} style={{ backgroundColor }}>
      <Container>
        {/* Section Header */}
        {(title || description) && (
          <div className="service-offerings__header">
            {title && (
              <h2 className="service-offerings__title">
                {title}
              </h2>
            )}

            {description && (
              <p className="service-offerings__description">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Services Grid */}
        <div className={`service-offerings__grid ${gridClass} ${maxWidthClass}`} style={{ margin: '0 auto' }}>
          {offerings.map((offering) => {
            const Icon = offering.icon;
            
            return (
              <div
                key={offering.id}
                className="service-offering-card"
                onMouseEnter={() => setHoveredId(offering.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Icon */}
                <div className="service-offering-card__icon-wrapper">
                  <Icon 
                    size={40} 
                    className="service-offering-card__icon"
                  />
                </div>

                {/* Title */}
                <h3 className="service-offering-card__title">
                  {offering.title}
                </h3>

                {/* Description */}
                <p className="service-offering-card__description">
                  {offering.description}
                </p>

                {/* Button */}
                <Button
                  variant={offering.buttonVariant || 'outline'}
                  size="md"
                  page={offering.buttonPage}
                  className="service-offering-card__button"
                >
                  {offering.buttonText}
                  <ArrowRight size={20} />
                </Button>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
