/**
 * StatsGrid Pattern Component
 * 
 * WordPress pattern: lsx-design/content/stats-grid
 * 
 * Inline stats grid component WITHOUT Section/Container wrappers.
 * Use for embedding stats within existing sections (e.g., hero headers, overview sections).
 * 
 * For standalone stats sections with Section/Container wrappers, use StatsSection instead.
 * 
 * Features:
 * - Inline display (no Section/Container wrappers)
 * - Responsive grid (1-4 columns)
 * - Optional icons
 * - Optional descriptions
 * - 100% CSS variable compliance (colors, spacing, typography, borders)
 * - ONLY uses var(--font-primary) and var(--font-secondary)
 * 
 * Variants:
 *   - default: Standard grid with borders
 *   - inline: Compact inline display (for hero headers)
 *   - compact: Smaller sizing
 *   - cards: Card-style with backgrounds
 * 
 * @see /src/styles/patterns/stats-grid.css
 */

import '@/styles/patterns/stats-grid.css';
import { LucideIcon } from 'lucide-react';

export interface Stat {
  /** Stat number/value (e.g., "150+", "98%", "5 years") */
  number: string;
  /** Stat label/description */
  label: string;
  /** Optional extended description */
  description?: string;
  /** Optional icon */
  icon?: LucideIcon;
}

export interface StatsGridProps {
  /** Array of stats to display */
  stats: Stat[];
  /** Number of columns (responsive, defaults to 3) */
  columns?: 2 | 3 | 4;
  /** Visual variant */
  variant?: 'default' | 'inline' | 'compact' | 'cards';
  /** Optional CSS class name */
  className?: string;
}

/**
 * StatsGrid Component
 * 
 * Renders an inline stats grid without Section/Container wrappers.
 * Perfect for embedding within existing sections.
 * 
 * @example
 * ```tsx
 * <div className="hero__content">
 *   <h1>Portfolio</h1>
 *   <p>Description...</p>
 *   <StatsGrid
 *     stats={[
 *       { number: '150+', label: 'Projects Delivered' },
 *       { number: '98%', label: 'Client Satisfaction' },
 *       { number: '15+', label: 'Industries Served' }
 *     ]}
 *     columns={3}
 *     variant="inline"
 *   />
 * </div>
 * ```
 */
export function StatsGrid({
  stats,
  columns = 3,
  variant = 'default',
  className = ''
}: StatsGridProps) {
  return (
    <div 
      className={`stats-grid stats-grid--cols-${columns} stats-grid--${variant} ${className}`}
      role="list"
      aria-label="Statistics"
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        
        return (
          <div
            key={index}
            className="stats-grid__item"
            role="listitem"
          >
            {Icon && (
              <div className="stats-grid__icon-wrapper">
                <Icon className="stats-grid__icon" aria-hidden="true" />
              </div>
            )}
            
            <div className="stats-grid__number">
              {stat.number}
            </div>
            
            <div className="stats-grid__label">
              {stat.label}
            </div>
            
            {stat.description && (
              <p className="stats-grid__description">
                {stat.description}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}