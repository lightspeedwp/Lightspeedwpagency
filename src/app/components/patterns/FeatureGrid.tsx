/**
 * Feature Grid Pattern
 * 
 * WordPress pattern: lsx-design/content/feature-grid
 * 
 * Displays a grid of features/services with icons, titles, descriptions, and optional CTAs.
 * Supports 1-4 column layouts with responsive behavior and hover effects.
 * 
 * **Design Token Compliance:**
 * - Uses /src/styles/feature-grid.css
 * - 100% CSS variables
 * - BEM naming
 */

import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { getPageUrl } from '../../data/pages';


export interface FeatureGridItem {
  /** Lucide icon component */
  icon: LucideIcon;
  /** Feature/service title */
  title: string;
  /** Feature/service description */
  description: string;
  /** Optional features list */
  features?: string[];
  /** Optional link (page slug for navigation) */
  link?: string;
  /** Optional link text (default: "Learn More →") */
  linkText?: string;
  /** Optional custom ID for hover tracking */
  id?: string;
}

export interface FeatureGridProps {
  /** Optional badge text above title */
  badge?: string;
  /** Optional badge icon */
  badgeIcon?: LucideIcon;
  /** Section title */
  title: string;
  /** Optional title highlight (applies gradient effect) */
  titleHighlight?: string;
  /** Section description */
  description?: string;
  /** Grid items */
  items: FeatureGridItem[];
  /** Number of columns (1-4, default: 3) */
  columns?: 1 | 2 | 3 | 4;
  /** Card style variant */
  variant?: 'default' | 'bordered' | 'filled';
  /** Icon style */
  iconStyle?: 'circular' | 'square' | 'rounded';
  /** Section spacing (sm, md, lg, xl) */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  /** Background color override (class name) */
  backgroundColor?: string;
  /** Max width for content (default: full container) */
  maxWidth?: '3xl' | '4xl' | '5xl' | '6xl' | 'full';
}

export function FeatureGrid({
  badge,
  badgeIcon: BadgeIcon,
  title,
  titleHighlight,
  description,
  items = [],
  columns = 3,
  variant = 'default',
  iconStyle = 'rounded',
  spacing = 'xl',
  backgroundColor,
  maxWidth = 'full'
}: FeatureGridProps) {
  // Grid column classes
  const gridClasses = {
    1: 'wp-grid-1-col',
    2: 'wp-grid-2-cols',
    3: 'wp-grid-3-cols',
    4: 'wp-grid-4-cols'
  }[columns];

  // Max width classes
  const maxWidthClass = maxWidth !== 'full' ? `wp-max-w-${maxWidth}` : '';

  // Process title with highlight
  const renderTitle = () => {
    if (!titleHighlight) {
      return title;
    }

    const parts = title.split(titleHighlight);
    return (
      <>
        {parts[0]}
        <span className="feature-grid__highlight">
          {titleHighlight}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <Section spacing={spacing} className={backgroundColor}>
      <Container>
        <div className={`feature-grid__wrapper ${maxWidthClass}`}>
          {/* Section Header */}
          <div className="feature-grid__header">
            {badge && (
              <div className="feature-grid__badge">
                {BadgeIcon && <BadgeIcon size={14} />}
                {badge}
              </div>
            )}

            <h2 className="feature-grid__title">
              {renderTitle()}
            </h2>

            {description && (
              <p className="feature-grid__description">
                {description}
              </p>
            )}
          </div>

          {/* Feature Grid */}
          <div className={`feature-grid__grid ${gridClasses}`}>
            {items.map((item, index) => {
              const Icon = item.icon;
              const itemId = item.id || `feature-${index}`;

              const CardWrapper = item.link ? Link : 'div';
              const cardProps = item.link ? {
                to: getPageUrl(item.link),
                className: 'feature-grid__item-link'
              } : {};

              return (
                <CardWrapper key={itemId} {...cardProps}>
                  <article className={`feature-grid__card feature-grid__card--${variant}`}>
                    {/* Icon */}
                    <div className={`feature-grid__icon-wrapper feature-grid__icon-wrapper--${iconStyle}`}>
                      <Icon className="feature-grid__icon" size={32} />
                    </div>

                    {/* Title */}
                    <h3 className="feature-grid__item-title">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className={`feature-grid__item-description ${!item.features && !item.link ? 'feature-grid__item-description--no-margin' : ''}`}>
                      {item.description}
                    </p>

                    {/* Optional Features List */}
                    {item.features && (
                      <div className="feature-grid__features-list">
                        {item.features.map((feature, fIndex) => (
                          <div key={fIndex} className="feature-grid__feature-item">
                            <div className="feature-grid__dot" />
                            <span className="feature-grid__feature-text">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Optional Link */}
                    {item.link && (
                      <div className="feature-grid__link">
                        {item.linkText || 'Learn More →'}
                      </div>
                    )}
                  </article>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}