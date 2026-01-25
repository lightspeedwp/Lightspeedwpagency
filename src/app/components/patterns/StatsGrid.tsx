/**
 * Stats Grid Pattern
 * 
 * WordPress pattern: lsx-design/content/stats-grid
 * 
 * Displays a grid of statistics/metrics with icons, values, and labels.
 * Commonly used in hero sections, about pages, and feature showcases.
 * 
 * **Usage:**
 * ```tsx
 * <StatsGrid
 *   stats={[
 *     { icon: Award, value: '15+', label: 'Years Experience' },
 *     { icon: Users, value: '500+', label: 'Happy Clients' },
 *     { icon: Trophy, value: '98%', label: 'Success Rate' }
 *   ]}
 *   variant="default"
 *   columns={3}
 * />
 * ```
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
  variant?: 'default' | 'cards' | 'minimal' | 'hero';
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
  gap = 'var(--spacing-8)'
}: StatsGridProps) {
  // Icon sizes
  const iconSizeMap = {
    sm: 20,
    md: 24,
    lg: 28
  };

  // Grid classes based on columns
  const gridClasses = {
    2: 'wp-grid-2-cols',
    3: 'wp-grid-3-cols',
    4: 'wp-grid-4-cols'
  }[columns];

  // Alignment classes
  const alignmentStyle = align === 'center' ? { textAlign: 'center' as const } : { textAlign: 'left' as const };

  return (
    <div 
      className={gridClasses}
      style={{ 
        gap,
        ...(variant === 'hero' ? {
          padding: 'var(--spacing-8) 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
        } : {})
      }}
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        
        return (
          <div
            key={index}
            style={{
              ...(variant === 'cards' ? {
                padding: 'var(--spacing-6)',
                backgroundColor: backgroundColor || 'var(--card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-soft)',
                transition: 'all 0.3s ease'
              } : {}),
              ...alignmentStyle
            }}
            {...(variant === 'cards' ? {
              onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
              },
              onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }
            } : {})}
          >
            {/* Icon */}
            {variant !== 'minimal' && (
              <div
                style={{
                  marginBottom: variant === 'hero' ? 'var(--spacing-3)' : 'var(--spacing-4)',
                  display: 'flex',
                  justifyContent: align === 'center' ? 'center' : 'flex-start'
                }}
              >
                <div
                  style={{
                    width: variant === 'hero' ? '40px' : '48px',
                    height: variant === 'hero' ? '40px' : '48px',
                    borderRadius: variant === 'cards' ? 'var(--radius-lg)' : 'var(--radius-full)',
                    backgroundColor: variant === 'hero' ? 'rgba(255, 255, 255, 0.15)' : 'var(--primary-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: variant === 'hero' ? 'blur(10px)' : 'none'
                  }}
                >
                  <Icon 
                    size={iconSizeMap[iconSize]} 
                    style={{ 
                      color: stat.iconColor || (variant === 'hero' ? 'white' : 'var(--primary)')
                    }} 
                  />
                </div>
              </div>
            )}

            {/* Value */}
            <div
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: variant === 'hero' ? 'var(--text-h2)' : 'var(--text-h1)',
                fontWeight: 'var(--font-weight-bold)',
                lineHeight: '1.2',
                color: textColor || (variant === 'hero' ? 'white' : 'var(--foreground)'),
                marginBottom: 'var(--spacing-2)'
              }}
            >
              {stat.value}
            </div>

            {/* Label */}
            <div
              style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: variant === 'hero' ? 'var(--text-small)' : 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
                color: textColor || (variant === 'hero' ? 'rgba(255, 255, 255, 0.9)' : 'var(--muted-foreground)'),
                textTransform: variant === 'hero' ? 'uppercase' : 'none',
                letterSpacing: variant === 'hero' ? '0.05em' : 'normal',
                marginBottom: stat.description ? 'var(--spacing-2)' : '0'
              }}
            >
              {stat.label}
            </div>

            {/* Optional Description */}
            {stat.description && (
              <p
                style={{
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--text-small)',
                  lineHeight: '1.5',
                  color: textColor || 'var(--muted-foreground)',
                  margin: 0
                }}
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