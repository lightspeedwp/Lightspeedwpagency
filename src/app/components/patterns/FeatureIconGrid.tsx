/**
 * Feature Icon Grid Pattern
 * 
 * WordPress pattern: lsx-design/content/feature-icon-grid
 * 
 * Grid of features/benefits with large icons and descriptions.
 * Commonly used on solution/service pages to highlight key features.
 */

import '../../../styles/patterns/feature-icon-grid.css';
import type { UniversalIcon } from '../../utils/icon-map';
import { Container } from '../common/Container';
import { Section } from '../common/Section';


export interface FeatureIcon {
  /** Unique identifier */
  id: string;
  /** Icon component */
  icon: UniversalIcon;
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
}

export interface FeatureIconGridProps {
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Array of features */
  features: FeatureIcon[];
  /** Number of columns (2-4, default: 3) */
  columns?: 2 | 3 | 4;
  /** Icon size in pixels (default: 32) */
  iconSize?: number;
  /** Icon box class */
  iconBoxClass?: string;
  /** Background color */
  background?: 'default' | 'card' | 'muted' | 'transparent';
  /** Section spacing */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  /** Max width constraint */
  maxWidth?: '4xl' | '5xl' | '6xl' | 'none';
}

export function FeatureIconGrid({
  title,
  description,
  features,
  columns = 3,
  iconSize = 32,
  iconBoxClass = 'wp-w-16 wp-h-16',
  background = 'default',
  spacing = 'xl',
  maxWidth = '6xl'
}: FeatureIconGridProps) {
  // Grid columns - WordPress-aligned responsive grid
  const gridClass = {
    2: 'wp-grid-2-cols',
    3: 'wp-grid-3-cols',
    4: 'wp-grid-4-cols'
  }[columns];

  // Max width class
  const maxWidthClass = maxWidth !== 'none' ? `wp-max-w-${maxWidth}` : '';

  return (
    <Section spacing={spacing} background={background as any}>
      <Container>
        {/* Section Header */}
        {(title || description) && (
          <div className="feature-icon-grid__header">
            {title && (
              <h2 className="feature-icon-grid__title">
                {title}
              </h2>
            )}

            {description && (
              <p className="feature-icon-grid__description">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Features Grid */}
        <div className={`feature-icon-grid__grid ${gridClass} ${maxWidthClass}`}>
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="feature-icon-grid__card"
              >
                {/* Icon Box */}
                <div
                  className={`feature-icon-grid__icon-box ${iconBoxClass}`}
                >
                  <Icon size={iconSize} />
                </div>

                {/* Title */}
                <h3 className="feature-icon-grid__item-title">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="feature-icon-grid__item-description">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}