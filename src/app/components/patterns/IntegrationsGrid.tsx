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
 * @example
 * ```tsx
 * import { IntegrationsGrid } from '../patterns/IntegrationsGrid';
 * import { Globe, Calendar, CreditCard, MapPin } from 'lucide-react';
 * 
 * <IntegrationsGrid
 *   badge="INTEGRATIONS"
 *   title="Key Integrations"
 *   description="Connect with the tools and platforms you already use"
 *   integrations={[
 *     {
 *       name: 'Wetu',
 *       description: 'Tour operator content management and distribution platform',
 *       icon: Globe
 *     },
 *     {
 *       name: 'TourCMS',
 *       description: 'Online booking and reservation system for tour operators',
 *       icon: Calendar
 *     }
 *   ]}
 *   columns={3}
 *   spacing="xl"
 *   backgroundColor="var(--background)"
 * />
 * ```
 */

import { LucideIcon } from 'lucide-react';
import { Section } from '../common/Section';

export interface Integration {
  /** Integration name */
  name: string;
  /** Integration description */
  description: string;
  /** Lucide icon component */
  icon: LucideIcon;
}

export interface IntegrationsGridProps {
  /** Optional badge text above title */
  badge?: string;
  /** Optional badge icon */
  badgeIcon?: LucideIcon;
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
  backgroundColor?: string;
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
  backgroundColor = 'var(--background)',
  maxWidth = '6xl'
}: IntegrationsGridProps) {
  // Map columns to WordPress utility classes
  const gridClass = columns === 4 
    ? 'wp-grid-4-cols'
    : columns === 3
    ? 'wp-grid-3-cols'
    : 'wp-grid-2-cols';

  return (
    <Section spacing={spacing} style={{ backgroundColor }}>
      <div className={`wp-max-w-${maxWidth}`}>
        {/* Section Header */}
        {(badge || title || description) && (
          <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-16)' }}>
            {/* Badge */}
            {badge && (
              <div
                className="inline-flex"
                style={{
                  alignItems: 'center',
                  gap: 'var(--spacing-2)',
                  padding: '8px 16px',
                  marginBottom: 'var(--spacing-4)',
                  backgroundColor: 'var(--primary-soft)',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-soft)'
                }}
              >
                {BadgeIcon && <BadgeIcon size={16} style={{ color: 'var(--primary)' }} />}
                <span
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-small)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}
                >
                  {badge}
                </span>
              </div>
            )}

            {/* Title */}
            {title && (
              <h2
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: 'var(--spacing-4)',
                  color: 'var(--foreground)'
                }}
              >
                {title}
              </h2>
            )}

            {/* Description */}
            {description && (
              <p
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                {description}
              </p>
            )}
          </div>
        )}

        {/* Integrations Grid */}
        <div className={gridClass} style={{ gap: 'var(--spacing-8)' }}>
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <div
                key={index}
                style={{
                  padding: 'var(--spacing-8)',
                  backgroundColor: 'var(--card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-soft)',
                  display: 'flex',
                  gap: 'var(--spacing-4)',
                  alignItems: 'flex-start'
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--primary-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Icon size={24} style={{ color: 'var(--primary)' }} />
                </div>

                <div>
                  {/* Name */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-lg)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)',
                      marginBottom: 'var(--spacing-1)'
                    }}
                  >
                    {integration.name}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      lineHeight: '1.6',
                      color: 'var(--muted-foreground)'
                    }}
                  >
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
