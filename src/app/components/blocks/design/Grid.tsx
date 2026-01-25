/**
 * Grid Block Component
 * 
 * WordPress Block: core/grid
 * Category: Design
 * 
 * Flexible container for organizing blocks into responsive rows and columns.
 * Supports automatic column generation and manual column counts.
 * 
 * Design System Requirements:
 * - Layout: CSS Grid with auto-fill/minmax for responsive behavior
 * - Spacing: Uses WordPress gap utilities (.wp-gap-*)
 * - Colors: Uses semantic color tokens for backgrounds
 * - Responsive: Automatically adjusts columns based on minWidth
 * 
 * @see /guidelines/blocks/design/grid.md
 */

import React from 'react';

export interface GridProps {
  /** Fixed number of columns (2, 3, 4). If undefined, uses auto-fill */
  columns?: 2 | 3 | 4;
  /** Minimum width for grid items (auto-fill mode) */
  minWidth?: string;
  /** Gap between rows and columns (0-24) */
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
  /** Sticky positioning */
  sticky?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles (CSS variables only) */
  style?: React.CSSProperties;
  /** Grid items */
  children: React.ReactNode;
  /** ARIA label */
  'aria-label'?: string;
}

/**
 * Grid Block - Flexible grid layout container
 * 
 * @example
 * // Responsive 3-column grid
 * <Grid columns={3} gap={6}>
 *   {products.map(product => (
 *     <Card key={product.id} {...product} />
 *   ))}
 * </Grid>
 * 
 * @example
 * // Fixed 4-column grid with large gap
 * <Grid columns={4} gap={8}>
 *   <FeatureCard title="Fast" />
 *   <FeatureCard title="Secure" />
 *   <FeatureCard title="Scalable" />
 *   <FeatureCard title="Reliable" />
 * </Grid>
 */
export function Grid({
  columns,
  minWidth = '300px',
  gap = 8,
  sticky = false,
  className = '',
  style = {},
  children,
  'aria-label': ariaLabel,
  ...props
}: GridProps) {
  // Build WordPress-aligned class names
  const gridClass = columns ? `wp-grid-${columns}-cols` : 'wp-grid-auto';
  const gapClass = `wp-gap-${gap}`;
  const stickyClass = sticky ? 'wp-sticky' : '';

  // Combine classes
  const combinedClassName = [
    'wp-block-grid',
    gridClass,
    gapClass,
    stickyClass,
    className
  ].filter(Boolean).join(' ');

  // Custom grid template for auto-fill (when columns not specified)
  const gridStyle = !columns ? {
    gridTemplateColumns: `repeat(auto-fill, minmax(${minWidth}, 1fr))`,
    ...style
  } : style;

  return (
    <div
      className={combinedClassName}
      style={gridStyle}
      aria-label={ariaLabel}
      role="grid"
      {...props}
    >
      {children}
    </div>
  );
}

export default Grid;