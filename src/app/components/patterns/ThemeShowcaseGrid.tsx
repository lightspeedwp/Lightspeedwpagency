/**
 * Theme Showcase Grid Pattern
 * 
 * WordPress pattern: lsx-design/content/theme-showcase-grid
 * 
 * Grid of theme/product cards with category badges, hover effects, and feature lists.
 * Commonly used to showcase products, themes, or offerings with checkmark features.
 * 
 * All styling in /src/styles/theme-showcase-grid.css (user-editable)
 * 
 * @see {@link /guidelines/patterns/ThemeShowcaseGrid.md}
 */

import { CheckCircle } from 'lucide-react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';


export interface ThemeShowcase {
  /** Unique identifier */
  id: string;
  /** Theme/product name */
  name: string;
  /** Description */
  description: string;
  /** Category label */
  category: string;
  /** Features checklist */
  features: string[];
}

export interface ThemeShowcaseGridProps {
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Array of themes/products */
  themes: ThemeShowcase[];
  /** Number of columns (2-4, default: 2) */
  columns?: 2 | 3 | 4;
  /** Background color */
  backgroundColor?: string;
  /** Section spacing */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  /** Max width constraint */
  maxWidth?: '4xl' | '5xl' | '6xl' | 'none';
  /** Checkmark icon size */
  checkmarkSize?: number;
}

export function ThemeShowcaseGrid({
  title,
  description,
  themes,
  columns = 2,
  backgroundColor = 'var(--muted)',
  spacing = 'xl',
  maxWidth = '6xl',
  checkmarkSize = 16
}: ThemeShowcaseGridProps) {
  // Grid columns class
  const gridClass = `theme-showcase__grid--${columns}-cols`;

  // Max width class
  const maxWidthClass = maxWidth !== 'none' ? `wp-max-w-${maxWidth}` : '';

  return (
    <Section spacing={spacing} style={{ backgroundColor }}>
      <Container>
        {/* Section Header */}
        {(title || description) && (
          <div className="theme-showcase__header">
            {title && (
              <h2 className="theme-showcase__title">
                {title}
              </h2>
            )}

            {description && (
              <p className="theme-showcase__description">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Themes Grid */}
        <div className={`theme-showcase__grid ${gridClass} ${maxWidthClass}`} style={{ margin: '0 auto' }}>
          {themes.map((theme) => {
            return (
              <div
                key={theme.id}
                className="theme-showcase__card"
              >
                {/* Category Badge */}
                <div className="theme-showcase__badge">
                  <span className="theme-showcase__badge-text">
                    {theme.category}
                  </span>
                </div>

                {/* Theme Name */}
                <h3 className="theme-showcase__name">
                  {theme.name}
                </h3>

                {/* Description */}
                <p className="theme-showcase__card-description">
                  {theme.description}
                </p>

                {/* Features Checklist (2-column grid) */}
                <div className="theme-showcase__features">
                  {theme.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="theme-showcase__feature"
                    >
                      <CheckCircle 
                        size={checkmarkSize} 
                        className="theme-showcase__feature-icon"
                      />
                      <span className="theme-showcase__feature-text">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
