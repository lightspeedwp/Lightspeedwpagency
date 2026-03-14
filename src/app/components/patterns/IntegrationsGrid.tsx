/**
 * Integrations Grid Pattern Component
 * 
 * WordPress Pattern: lsx-design/content/integrations-grid
 * 
 * Displays a grid of integration/partner cards with icons and descriptions.
 * Perfect for showcasing third-party integrations, partnerships, or tools.
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
 * - Paragraph Blocks → Integration cards
 * 
 * @see {@link /guidelines/patterns/IntegrationsGrid.md}
 */

import type { UniversalIcon } from '../../utils/icon-map';
import { Section } from '../common/Section';


export interface Integration {
  /** Integration name */
  name: string;
  /** Integration description */
  description: string;
  /** Icon component (Lucide or Phosphor) */
  icon: UniversalIcon;
}

export interface IntegrationsGridProps {
  /** Optional badge text above title */
  badge?: string;
  /** Optional badge icon */
  badgeIcon?: UniversalIcon;
  /** Main heading */
  title?: string;
  /** Description text below heading */
  description?: string;
  /** Array of integrations to display */
  integrations: Integration[];
  /** Number of columns (2, 3, or 4) */
  columns?: 2 | 3 | 4;
  /** Section spacing */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  /** Background color */
  background?: 'default' | 'card' | 'muted' | 'transparent';
  /** Maximum width container */
  maxWidth?: 'full' | '4xl' | '5xl' | '6xl';
}

export function IntegrationsGrid({
  badge,
  badgeIcon: BadgeIcon,
  title = 'Key Integrations',
  description,
  integrations,
  columns = 3,
  spacing = 'xl',
  background = 'default',
  maxWidth = '6xl'
}: IntegrationsGridProps) {
  // Map columns to WordPress utility classes
  const gridClass = columns === 4 
    ? 'wp-grid-4-cols'
    : columns === 3
    ? 'wp-grid-3-cols'
    : 'wp-grid-2-cols';

  const maxWidthClass = maxWidth !== 'full' ? `wp-max-w-${maxWidth}` : '';

  return (
    <Section spacing={spacing} background={background as any} className="integrations-grid">
      <div className={`${maxWidthClass} wp-mx-auto`}>
        {/* Section Header */}
        {(badge || title || description) && (
          <div className="integrations-grid__header">
            {/* Badge */}
            {badge && (
              <div className="integrations-grid__badge">
                {BadgeIcon && <BadgeIcon size={16} />}
                <span>{badge}</span>
              </div>
            )}

            {/* Title */}
            {title && (
              <h2 className="integrations-grid__title">
                {title}
              </h2>
            )}

            {/* Description */}
            {description && (
              <p className="integrations-grid__description">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Integrations Grid */}
        <div className={`integrations-grid__grid ${gridClass}`}>
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <div
                key={index}
                className="integrations-grid__card"
              >
                {/* Icon */}
                <div className="integrations-grid__icon-wrapper">
                  <Icon size={24} />
                </div>

                <div className="integrations-grid__content">
                  {/* Name */}
                  <h3 className="integrations-grid__item-title">
                    {integration.name}
                  </h3>

                  {/* Description */}
                  <p className="integrations-grid__item-description">
                    {integration.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}