/**
 * StatsGrid Component
 *
 * Grid layout for displaying multiple statistics
 * Responsive grid with 2-4 columns
 *
 * Features:
 * - Responsive grid (1 → 2 → 4 columns)
 * - Optional title
 * - Optional description
 * - Section background styles
 *
 * Design System:
 * - 100% CSS variables
 * - WordPress utility classes (.wp-grid-*)
 * - BEM naming (.stats-grid)
 *
 * @see /guidelines/patterns/StatsGrid.md
 */

import { ReactNode } from 'react';

export interface StatsGridProps {
  /** Child StatCounter components */
  children: ReactNode;
  /** Optional section title */
  title?: string;
  /** Optional section description */
  description?: string;
  /** Number of columns (2, 3, or 4) */
  columns?: 2 | 3 | 4;
  /** Section background variant */
  variant?: 'default' | 'gradient' | 'glassmorphism';
}

export const StatsGrid = ({
  children,
  title,
  description,
  columns = 4,
  variant = 'default',
}: StatsGridProps) => {
  const gridClass = `wp-grid-${columns}-cols`;

  return (
    <section className={`stats-grid stats-grid--${variant}`}>
      <div className="stats-grid__container">
        {(title || description) && (
          <div className="stats-grid__header">
            {title && <h2 className="stats-grid__title">{title}</h2>}
            {description && (
              <p className="stats-grid__description">{description}</p>
            )}
          </div>
        )}

        <div className={`stats-grid__items ${gridClass}`}>{children}</div>
      </div>
    </section>
  );
};
