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

import type { UniversalIcon } from '../../utils/icon-map';

export interface IconFeature {
  /** Icon component */
  icon: UniversalIcon;
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
  
  const listClass = `icon-features-list icon-features-list--gap-${gap}`;

  return (
    <div className={listClass}>
      {features.map((feature, index) => {
        const Icon = feature.icon;
        
        return (
          <div
            key={index}
            className="icon-features-list__item"
          >
            {/* Icon Box */}
            <div
              className="icon-features-list__icon-box"
              style={{
                width: `${iconBoxSize}px`,
                height: `${iconBoxSize}px`,
                backgroundColor: iconBackground,
              }}
            >
              <Icon size={iconSize} style={{ color: iconColor }} />
            </div>

            {/* Content */}
            <div className="icon-features-list__content">
              <h3 className="icon-features-list__title">
                {feature.title}
              </h3>
              
              <p className="icon-features-list__description">
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}