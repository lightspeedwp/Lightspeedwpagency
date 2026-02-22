/**
 * Benefits Grid Pattern
 * 
 * Displays related benefits or items with icons and "Learn More" links.
 * Maps to WordPress pattern: lsx-design/content/benefits
 * 
 * **Design Token Compliance:**
 * - Uses /src/styles/patterns/benefits-grid.css
 * - 100% CSS variables
 * - BEM naming
 */

import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { ArrowRight, LucideIcon } from 'lucide-react';


/**
 * Benefit Item Interface
 */
export interface Benefit {
  /** Icon component from lucide-react */
  icon: LucideIcon;
  /** Benefit title */
  title: string;
  /** Benefit description */
  description: string;
  /** Optional link URL */
  link?: string;
  /** Optional link text (default: "Learn More") */
  linkText?: string;
}

/**
 * Benefits Grid Props
 */
export interface BenefitsGridProps {
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Benefits to display */
  benefits: Benefit[];
  /** Number of columns (2, 3, or 4) */
  columns?: 2 | 3 | 4;
  /** Background variant */
  variant?: 'default' | 'muted';
  /** Show link arrows */
  showArrows?: boolean;
  /** Click handler for benefit cards (alternative to links) */
  onBenefitClick?: (benefit: Benefit, index: number) => void;
}

/**
 * Benefits Grid Pattern Component
 * 
 * Displays benefits or related items in a responsive grid layout
 * with icons, descriptions, and optional "Learn More" links.
 */
export function BenefitsGrid({
  title = "Related Benefits",
  description,
  benefits,
  columns = 3,
  variant = 'default',
  showArrows = true,
  onBenefitClick
}: BenefitsGridProps) {
  // Column class mapping for WordPress utility classes
  const columnClass = columns === 2 
    ? 'wp-grid-2-cols' 
    : columns === 3 
    ? 'wp-grid-3-cols' 
    : 'wp-grid-4-cols';
    
  const variantClass = `benefits-grid--${variant}`;

  /**
   * Handle benefit click
   */
  const handleClick = (benefit: Benefit, index: number) => {
    if (onBenefitClick) {
      onBenefitClick(benefit, index);
    }
  };

  return (
    <Section 
      spacing="xl" 
      className={`benefits-grid ${variantClass}`}
    >
      <Container>
        <div className="wp-max-w-6xl">
          {/* Section Header */}
          {(title || description) && (
            <div className="benefits-grid__header">
              {title && (
                <h2 className="benefits-grid__title">
                  {title}
                </h2>
              )}

              {description && (
                <p className="benefits-grid__description">
                  {description}
                </p>
              )}
            </div>
          )}

          {/* Benefits Grid */}
          <div className={`benefits-grid__grid ${columnClass}`}>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const isClickable = !!benefit.link || !!onBenefitClick;

              return (
                <div
                  key={index}
                  onClick={() => isClickable && handleClick(benefit, index)}
                  className={`benefits-grid__card ${isClickable ? 'benefits-grid__card--clickable' : ''}`}
                >
                  {/* Icon */}
                  <div className="benefits-grid__icon-wrapper">
                    <Icon className="benefits-grid__icon" size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="benefits-grid__item-title">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="benefits-grid__item-description">
                    {benefit.description}
                  </p>

                  {/* Learn More Link */}
                  {isClickable && showArrows && (
                    <div className="benefits-grid__link">
                      {benefit.linkText || 'Learn More'}
                      <ArrowRight className="benefits-grid__arrow" size={16} />
                    </div>
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