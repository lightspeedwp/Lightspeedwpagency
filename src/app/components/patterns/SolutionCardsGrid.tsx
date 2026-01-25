/**
 * Solution Cards Grid Pattern
 * 
 * WordPress pattern: lsx-design/content/solution-cards-grid
 * 
 * Displays a grid of clickable solution cards with icons, descriptions, and hover effects.
 * Responsive 1-3 column layout with smooth animations and primary color highlights.
 * 
 * All styling in /src/styles/solution-cards-grid.css (user-editable)
 * 
 * **Usage:**
 * ```tsx
 * <SolutionCardsGrid
 *   badge="OUR SOLUTIONS"
 *   badgeIcon={Package}
 *   title="Expert WordPress Solutions"
 *   description="Industry-leading solutions for your business needs"
 *   solutions={[
 *     {
 *       id: 'wordpress',
 *       icon: Code,
 *       title: 'WordPress Websites',
 *       description: 'Custom WordPress development...',
 *       link: 'wordpress-solution',
 *       linkText: 'Read More →'
 *     }
 *   ]}
 * />
 * ```
 */

import { LucideIcon } from 'lucide-react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { useNavigation } from '../../contexts/NavigationContext';

export interface SolutionCard {
  /** Unique solution ID */
  id: string;
  /** Lucide icon component */
  icon: LucideIcon;
  /** Solution title */
  title: string;
  /** Solution description */
  description: string;
  /** Page slug for navigation */
  link: string;
  /** Link text (default: "Learn More →") */
  linkText?: string;
}

export interface SolutionCardsGridProps {
  /** Optional badge text above title */
  badge?: string;
  /** Optional badge icon */
  badgeIcon?: LucideIcon;
  /** Section title */
  title: string;
  /** Section description */
  description?: string;
  /** Solution cards */
  solutions: SolutionCard[];
  /** Section spacing */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  /** Background color override */
  backgroundColor?: string;
  /** Max width for content */
  maxWidth?: '4xl' | '5xl' | '6xl' | '7xl' | 'full';
}

export function SolutionCardsGrid({
  badge,
  badgeIcon: BadgeIcon,
  title,
  description,
  solutions,
  spacing = 'xl',
  backgroundColor = 'var(--background)',
  maxWidth = 'full'
}: SolutionCardsGridProps) {
  const { navigateTo } = useNavigation();

  // Build grid classes
  const gridClasses = [
    'solution-cards__grid',
    `solution-cards__grid--${maxWidth}`
  ].filter(Boolean).join(' ');

  return (
    <Section spacing={spacing} style={{ backgroundColor }}>
      <Container>
        {/* Section Header */}
        <div className="solution-cards__header">
          {/* Badge */}
          {badge && (
            <div className="solution-cards__badge">
              {BadgeIcon && <BadgeIcon size={14} />}
              {badge}
            </div>
          )}

          {/* Title */}
          <h2 className="solution-cards__title">
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p className="solution-cards__description">
              {description}
            </p>
          )}
        </div>

        {/* Solution Cards Grid */}
        <div className={gridClasses}>
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <a
                key={solution.id}
                href={`#${solution.link}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (solution.link) navigateTo(solution.link);
                }}
                className="solution-cards__card-link"
                aria-label={`Learn more about ${solution.title}`}
              >
                <article className="solution-cards__card">
                  {/* Icon */}
                  <div className="solution-cards__icon">
                    <Icon 
                      size={32} 
                      className="solution-cards__icon-svg"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="solution-cards__card-title">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="solution-cards__card-description">
                    {solution.description}
                  </p>

                  {/* Link */}
                  <div className="solution-cards__card-link-text">
                    {solution.linkText || 'Learn More →'}
                  </div>
                </article>
              </a>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default SolutionCardsGrid;
