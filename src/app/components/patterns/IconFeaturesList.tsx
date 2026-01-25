/**
 * Icon Features List Pattern
 * 
 * WordPress pattern: lsx-design/content/icon-features-list
 * 
 * Displays a vertical list of features/benefits with icon boxes.
 * Commonly used in two-column layouts where features are listed on one side.
 * 
 * **Usage:**
 * ```tsx
 * <IconFeaturesList
 *   features={[
 *     {
 *       icon: Zap,
 *       title: 'Uncertain about your initial steps?',
 *       description: 'We provide clear guidance...'
 *     }
 *   ]}
 *   iconSize={24}
 *   iconBoxSize={48}
 * />
 * ```
 */

import { LucideIcon } from 'lucide-react';

export interface IconFeature {
  /** Icon component */
  icon: LucideIcon;
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
}

export interface IconFeaturesListProps {
  /** Array of features */
  features: IconFeature[];
  /** Icon size in pixels (default: 24) */
  iconSize?: number;
  /** Icon box size in pixels (default: 48) */
  iconBoxSize?: number;
  /** Gap between items */
  gap?: 'sm' | 'md' | 'lg';
  /** Icon background color override */
  iconBackground?: string;
  /** Icon color override */
  iconColor?: string;
}

export function IconFeaturesList({
  features,
  iconSize = 24,
  iconBoxSize = 48,
  gap = 'md',
  iconBackground = 'var(--primary)',
  iconColor = 'white'
}: IconFeaturesListProps) {
  // Gap spacing
  const gapValue = {
    sm: 'var(--spacing-4)',
    md: 'var(--spacing-6)',
    lg: 'var(--spacing-8)'
  }[gap];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: gapValue }}>
      {features.map((feature, index) => {
        const Icon = feature.icon;
        
        return (
          <div
            key={index}
            style={{
              display: 'flex',
              gap: 'var(--spacing-4)',
              alignItems: 'flex-start'
            }}
          >
            {/* Icon Box */}
            <div
              style={{
                width: `${iconBoxSize}px`,
                height: `${iconBoxSize}px`,
                borderRadius: 'var(--radius-lg)',
                backgroundColor: iconBackground,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Icon size={iconSize} style={{ color: iconColor }} />
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              <h3
                className="font-primary text-lg font-semibold"
                style={{
                  color: 'var(--foreground)',
                  marginBottom: 'var(--spacing-2)'
                }}
              >
                {feature.title}
              </h3>
              
              <p
                className="font-primary text-base leading-relaxed"
                style={{
                  color: 'var(--muted-foreground)'
                }}
              >
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
