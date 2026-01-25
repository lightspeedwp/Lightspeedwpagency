/**
 * Feature Icon Grid Pattern
 * 
 * WordPress pattern: lsx-design/content/feature-icon-grid
 * 
 * Grid of features/benefits with large icons and descriptions.
 * Commonly used on solution/service pages to highlight key features.
 * 
 * **Usage:**
 * ```tsx
 * <FeatureIconGrid
 *   title="Why Choose LSX Design?"
 *   description="Built on WordPress best practices"
 *   features={[
 *     {
 *       id: 'performance',
 *       icon: Zap,
 *       title: 'Performance Optimized',
 *       description: 'Lightning-fast load times...'
 *     }
 *   ]}
 *   columns={3}
 *   iconSize={32}
 *   iconBoxSize={64}
 * />
 * ```
 */

import { LucideIcon } from 'lucide-react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';

export interface FeatureIcon {
  /** Unique identifier */
  id: string;
  /** Icon component */
  icon: LucideIcon;
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
  /** Icon box size in pixels (default: 64) */
  iconBoxSize?: number;
  /** Background color */
  backgroundColor?: string;
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
  iconBoxSize = 64,
  backgroundColor = 'var(--background)',
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
    <Section spacing={spacing} style={{ backgroundColor }}>
      <Container>
        {/* Section Header */}
        {(title || description) && (
          <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-16)' }}>
            {title && (
              <h2
                className="font-primary text-h1 font-bold tracking-tight"
                style={{
                  lineHeight: '1.2',
                  marginBottom: 'var(--spacing-4)',
                  color: 'var(--foreground)'
                }}
              >
                {title}
              </h2>
            )}

            {description && (
              <p
                className="font-primary text-lg leading-relaxed"
                style={{
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

        {/* Features Grid */}
        <div className={`${gridClass} ${maxWidthClass}`}>
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                style={{
                  padding: 'var(--spacing-8)',
                  backgroundColor: 'var(--card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-soft)'
                }}
              >
                {/* Icon Box */}
                <div
                  style={{
                    width: `${iconBoxSize}px`,
                    height: `${iconBoxSize}px`,
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--primary-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--spacing-5)'
                  }}
                >
                  <Icon size={iconSize} style={{ color: 'var(--primary)' }} />
                </div>

                {/* Title */}
                <h3
                  className="font-primary text-xl font-bold"
                  style={{
                    color: 'var(--foreground)',
                    marginBottom: 'var(--spacing-3)'
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="font-primary text-base leading-snug"
                  style={{
                    color: 'var(--muted-foreground)'
                  }}
                >
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
