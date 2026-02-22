/**
 * Stats Grid Pattern
 * 
 * WordPress pattern: lsx-design/content/stats-grid
 * 
 * Displays a grid of statistics/metrics with icons, values, and labels.
 * 
 * @see {@link /guidelines/patterns/StatsGrid.md}
 */

import { LucideIcon } from 'lucide-react';


export interface StatItem {
  /** Lucide icon component */
  icon: LucideIcon;
  /** Stat value (e.g., "15+", "98%", "500+") */
  value: string;
  /** Stat label/description */
  label: string;
  /** Optional detailed description */
  description?: string;
  /** Optional custom color for icon */
  iconColor?: string;
}

export interface StatsGridProps {
  /** Array of stat items */
  stats: StatItem[];
  /** Number of columns (2-4, default: 3) */
  columns?: 2 | 3 | 4;
  /** Visual variant */
  variant?: 'default' | 'cards' | 'hero';
  /** Alignment */
  align?: 'left' | 'center';
  /** Icon size */
  iconSize?: 'sm' | 'md' | 'lg';
  /** Background color (for card variant) */
  backgroundColor?: string;
  /** Text color override */
  textColor?: string;
  /** Custom gap between items */
  gap?: string;
}

export function StatsGrid({
  stats,
  columns = 3,
  variant = 'default',
  align = 'center',
  iconSize = 'md',
  backgroundColor,
  textColor,
  gap
}: StatsGridProps) {
  // Grid classes
  const gridClasses = [
    'stats-grid',
    `stats-grid--${columns}-cols`,
    variant === 'hero' ? 'stats-grid--hero' : ''
  ].filter(Boolean).join(' ');

  const iconSizeMap = {
    sm: 20,
    md: 24,
    lg: 28
  };

  return (
    <div 
      className={gridClasses}
      style={{ gap: gap || 'var(--spacing-8)' }}
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        
        // Item classes
        const itemClasses = [
          'stat-item',
          variant === 'cards' ? 'stat-item--cards' : '',
          `stat-item--${align}`
        ].filter(Boolean).join(' ');

        // Icon classes
        const iconWrapperClasses = [
          'stat-icon-wrapper',
          variant === 'hero' ? 'stat-icon-wrapper--hero' : 
          variant === 'cards' ? 'stat-icon-wrapper--cards' : 
          'stat-icon-wrapper--default'
        ].filter(Boolean).join(' ');

        // Value classes
        const valueClasses = [
          'stat-value',
          variant === 'hero' ? 'stat-value--hero' : 'stat-value--default'
        ].filter(Boolean).join(' ');

        // Label classes
        const labelClasses = [
          'stat-label',
          variant === 'hero' ? 'stat-label--hero' : 'stat-label--default'
        ].filter(Boolean).join(' ');

        return (
          <div
            key={index}
            className={itemClasses}
            style={{
              backgroundColor: variant === 'cards' && backgroundColor ? backgroundColor : undefined
            }}
          >
            {/* Icon */}
            <div className={iconWrapperClasses}>
              <Icon 
                size={iconSizeMap[iconSize]} 
                style={{ 
                  color: stat.iconColor || (variant === 'hero' ? 'white' : 'var(--primary)')
                }} 
              />
            </div>

            {/* Value */}
            <div 
              className={valueClasses}
              style={{ color: textColor || (variant === 'hero' ? 'white' : 'var(--foreground)') }}
            >
              {stat.value}
            </div>

            {/* Label */}
            <div 
              className={labelClasses}
              style={{ 
                color: textColor || (variant === 'hero' ? 'var(--overlay-white-strong)' : 'var(--muted-foreground)'),
                marginBottom: stat.description ? 'var(--spacing-2)' : '0'
              }}
            >
              {stat.label}
            </div>

            {/* Optional Description */}
            {stat.description && (
              <p 
                className="stat-description"
                style={{ color: textColor || 'var(--muted-foreground)' }}
              >
                {stat.description}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}