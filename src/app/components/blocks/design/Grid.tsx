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
 * - Spacing: Uses Tailwind gap classes or CSS variables
 * - Colors: Uses semantic color tokens for backgrounds
 * - Responsive: Automatically adjusts columns based on minWidth
 * 
 * @see /guidelines/blocks/design/grid.md
 */

import React from 'react';

export interface GridProps {
  /** Fixed number of columns (1-12). If undefined, uses auto-fill */
  columns?: number;
  /** Minimum width for grid items (auto-fill mode) */
  minWidth?: string;
  /** Gap between rows */
  rowGap?: string;
  /** Gap between columns */
  columnGap?: string;
  /** Gap for both rows and columns (shorthand) - can be Tailwind class or CSS value */
  gap?: string | number;
  /** Sticky positioning */
  sticky?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
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
 * // Auto-fill grid with minimum 250px columns
 * <Grid minWidth="250px" gap="gap-6">
 *   {products.map(product => (
 *     <Card key={product.id} {...product} />
 *   ))}
 * </Grid>
 * 
 * @example
 * // Fixed 3-column grid
 * <Grid columns={3} gap="gap-8">
 *   <FeatureCard title="Fast" />
 *   <FeatureCard title="Secure" />
 *   <FeatureCard title="Scalable" />
 * </Grid>
 */
export function Grid({
  columns,
  minWidth = '250px',
  rowGap,
  columnGap,
  gap,
  sticky = false,
  className = '',
  style = {},
  children,
  'aria-label': ariaLabel,
  ...props
}: GridProps) {
  // Determine grid template columns
  const gridTemplateColumns = columns
    ? `repeat(${columns}, 1fr)`
    : `repeat(auto-fill, minmax(${minWidth}, 1fr))`;

  // Convert gap to string if it's a number (e.g., 8 -> "2rem")
  let gapString: string | undefined;
  if (typeof gap === 'number') {
    // Convert number to rem (assuming 1 unit = 0.25rem, Tailwind scale)
    gapString = `${gap * 0.25}rem`;
  } else if (typeof gap === 'string') {
    gapString = gap;
  }

  // Gap handling - use gap prop if provided, otherwise use rowGap/columnGap
  const gapValue = gapString || `${rowGap || '1rem'} ${columnGap || '1rem'}`;

  // Combine classes
  const combinedClassName = [
    'wp-block-grid',
    // Only add gap class if it's a Tailwind class (starts with "gap-")
    typeof gap === 'string' && gap.startsWith('gap-') ? gap : '',
    sticky ? 'sticky top-0' : '',
    className
  ].filter(Boolean).join(' ');

  // Combine styles
  const combinedStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns,
    // Only set gap style if it's NOT a Tailwind class
    gap: typeof gap === 'string' && gap.startsWith('gap-') ? undefined : gapValue,
    ...style
  };

  return (
    <div
      className={combinedClassName}
      style={combinedStyle}
      aria-label={ariaLabel}
      role="grid"
      {...props}
    >
      {children}
    </div>
  );
}

export default Grid;