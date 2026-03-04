/**
 * SolutionsDetailGrid Pattern
 * 
 * Grid of solution cards with expandable details.
 * Maps to WordPress pattern: lsx-design/listing/solutions-detail
 * 
 * **Design Token Compliance:**
 * - Uses /src/styles/patterns/solutions-detail-grid.css
 * - 100% CSS variables
 * - BEM naming
 * 
 * **Usage Example:**
 * ```tsx
 * import { SolutionsDetailGrid } from '../patterns/SolutionsDetailGrid';
 * import { Calendar, CheckCircle } from '@phosphor-icons/react';
 * 
 * <SolutionsDetailGrid
 *   badge="OUR SOLUTIONS"
 *   title="Complete Tour Operator Solutions"
 *   description="Everything you need to run a successful tour operation online"
 *   solutions={...}
 *   columns={3}
 * />
 * ```
 */

import type { UniversalIcon } from '../../utils/icon-map';
import { Section } from '../common/Section';
import { CheckCircle } from '@phosphor-icons/react';
import { useState } from 'react';


export interface SolutionDetail {
  /** Unique ID for hover state */
  id: string;
  /** Lucide icon component */
  icon: UniversalIcon;
  /** Solution title */
  title: string;
  /** Solution description */
  description: string;
  /** Array of feature items */
  features: string[];
}

export interface SolutionsDetailGridProps {
  /** Optional badge text above title */
  badge?: string;
  /** Optional badge icon */
  badgeIcon?: UniversalIcon;
  /** Main heading */
  title?: string;
  /** Description text below heading */
  description?: string;
  /** Array of solutions to display */
  solutions: SolutionDetail[];
  /** Number of columns (2 or 3) */
  columns?: 2 | 3;
  /** Section spacing */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  /** Background color */
  backgroundColor?: string;
  /** Maximum width container */
  maxWidth?: 'full' | '4xl' | '5xl' | '6xl';
  /** Feature icon (default: CheckCircle) */
  featureIcon?: UniversalIcon;
}

export function SolutionsDetailGrid({
  badge,
  badgeIcon: BadgeIcon,
  title = 'Our Solutions',
  description,
  solutions,
  columns = 3,
  spacing = 'xl',
  backgroundColor = 'var(--muted)',
  maxWidth = '6xl',
  featureIcon: FeatureIcon = CheckCircle
}: SolutionsDetailGridProps) {
  const [hoveredSolution, setHoveredSolution] = useState<string | null>(null);

  // Map columns to WordPress utility classes
  const gridClass = columns === 3 ? 'solutions-detail-grid__grid--3-cols' : 'solutions-detail-grid__grid--2-cols';

  // Max width class
  const maxWidthClass = maxWidth !== 'full' ? `wp-max-w-${maxWidth}` : 'wp-max-w-full';

  return (
    <Section spacing={spacing} style={{ backgroundColor }}>
      <div className={maxWidthClass} style={{ margin: '0 auto' }}>
        {/* Section Header */}
        {(badge || title || description) && (
          <div className="solutions-detail-grid__header">
            {/* Badge */}
            {badge && (
              <div className="solutions-detail-grid__badge">
                {BadgeIcon && <BadgeIcon size={16} className="solutions-detail-grid__badge-icon" />}
                <span className="solutions-detail-grid__badge-text">
                  {badge}
                </span>
              </div>
            )}

            {/* Title */}
            {title && (
              <h2 className="solutions-detail-grid__title">
                {title}
              </h2>
            )}

            {/* Description */}
            {description && (
              <p className="solutions-detail-grid__description">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Solutions Grid */}
        <div className={`solutions-detail-grid__grid ${gridClass}`}>
          {solutions.map((solution) => {
            const Icon = solution.icon;
            
            return (
              <div
                key={solution.id}
                className="solution-detail-card"
                onMouseEnter={() => setHoveredSolution(solution.id)}
                onMouseLeave={() => setHoveredSolution(null)}
              >
                {/* Icon */}
                <div className="solution-detail-card__icon-wrapper">
                  <Icon 
                    size={32} 
                    className="solution-detail-card__icon"
                  />
                </div>

                {/* Title */}
                <h3 className="solution-detail-card__title">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="solution-detail-card__description">
                  {solution.description}
                </p>

                {/* Features List */}
                <ul className="solution-detail-card__features">
                  {solution.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="solution-detail-card__feature-item"
                    >
                      <FeatureIcon size={16} className="solution-detail-card__feature-icon" />
                      <span className="solution-detail-card__feature-text">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}