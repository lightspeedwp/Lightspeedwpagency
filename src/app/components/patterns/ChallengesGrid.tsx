/**
 * Challenges Grid Pattern Component
 * 
 * WordPress Pattern: lsx-design/content/challenges-grid
 * 
 * Displays a grid of challenge/problem cards with icons, typically used
 * to highlight pain points or problems that a solution addresses.
 * 
 * **Design System Compliance:**
 * - Typography: var(--font-primary) Lexend
 * - Spacing: CSS variables (--spacing-*)
 * - Colors: Semantic color variables
 * - Grid: WordPress utility classes (.wp-grid-*-cols)
 * 
 * **WordPress Mapping:**
 * - Group Block → Container
 * - Columns Block → Grid layout
 * - Paragraph Blocks → Challenge cards
 * 
 * @see {@link /guidelines/patterns/ChallengesGrid.md}
 */

import type { UniversalIcon } from '../../utils/icon-map';
import { Section } from '../common/Section';


export interface Challenge {
  /** Lucide icon component */
  icon: UniversalIcon;
  /** Challenge title */
  title: string;
  /** Challenge description */
  description: string;
}

export interface ChallengesGridProps {
  /** Optional badge text above title */
  badge?: string;
  /** Optional badge icon */
  badgeIcon?: UniversalIcon;
  /** Main heading */
  title?: string;
  /** Description text below heading */
  description?: string;
  /** Array of challenges to display */
  challenges: Challenge[];
  /** Number of columns (2, 3, or 4) */
  columns?: 2 | 3 | 4;
  /** Section spacing */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  /** Background color */
  background?: 'default' | 'card' | 'muted' | 'transparent';
  /** Maximum width container */
  maxWidth?: 'full' | '4xl' | '5xl' | '6xl';
}

export function ChallengesGrid({
  badge,
  badgeIcon: BadgeIcon,
  title = 'Challenges We Solve',
  description,
  challenges,
  columns = 4,
  spacing = 'xl',
  background = 'default',
  maxWidth = '6xl'
}: ChallengesGridProps) {
  // Map columns to WordPress utility classes
  const gridClass = columns === 4 
    ? 'wp-grid-4-cols'
    : columns === 3
    ? 'wp-grid-3-cols'
    : 'wp-grid-2-cols';

  const maxWidthClass = maxWidth === 'full' 
    ? '' 
    : `wp-max-w-${maxWidth} wp-mx-auto`;

  return (
    <Section spacing={spacing} background={background as any}>
      <div className={maxWidthClass}>
        {/* Section Header */}
        {(badge || title || description) && (
          <div className="challenges-grid__header">
            {/* Badge */}
            {badge && (
              <div className="challenges-grid__badge">
                {BadgeIcon && <BadgeIcon size={16} className="challenges-grid__badge-icon" />}
                <span>{badge}</span>
              </div>
            )}

            {/* Title */}
            {title && (
              <h2 className="challenges-grid__title">
                {title}
              </h2>
            )}

            {/* Description */}
            {description && (
              <p className="challenges-grid__description">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Challenges Grid */}
        <div className={`challenges-grid__grid ${gridClass}`}>
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <div
                key={index}
                className="challenges-grid__card"
              >
                {/* Icon */}
                <div className="challenges-grid__icon-wrapper">
                  <Icon size={32} />
                </div>

                {/* Title */}
                <h3 className="challenges-grid__item-title">
                  {challenge.title}
                </h3>

                {/* Description */}
                <p className="challenges-grid__item-description">
                  {challenge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
