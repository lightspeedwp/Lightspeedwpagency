/**
 * Row Block Component
 * 
 * WordPress Block: core/row
 * Category: Design
 * 
 * Container that arranges child blocks horizontally in a single row.
 * Ideal for navigation, social icons, or horizontal CTAs.
 * 
 * Design System Requirements:
 * - Layout: Flexbox with flex-direction: row
 * - Spacing: Uses WordPress gap utilities (.wp-gap-*)
 * - Colors: Uses semantic color tokens
 * - Alignment: Supports justify-content and align-items
 * - Responsive: Optional wrapping for mobile
 * 
 * @see /guidelines/blocks/design/row.md
 */

import React from 'react';

import '@/styles/blocks/design/row.css';

export interface RowProps {
  /** Horizontal spacing between children (0-24) */
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
  /** Horizontal justification */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  /** Vertical alignment */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  /** Allow items to wrap to next line */
  wrap?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles (CSS variables only) */
  style?: React.CSSProperties;
  /** Row items */
  children: React.ReactNode;
  /** ARIA label */
  'aria-label'?: string;
}

/**
 * Row Block - Horizontal layout container
 * 
 * @example
 * <Row gap={4} justify="center" align="center">
 *   <Button variant="primary">Sign Up</Button>
 *   <Button variant="secondary">Learn More</Button>
 * </Row>
 * 
 * @example
 * <Row gap={6} justify="between" wrap>
 *   <Logo />
 *   <Navigation />
 *   <Button>Contact</Button>
 * </Row>
 */
export function Row({
  gap = 4,
  justify = 'start',
  align = 'center',
  wrap = false,
  className = '',
  style = {},
  children,
  'aria-label': ariaLabel,
  ...props
}: RowProps) {
  // Build WordPress-aligned class names
  const gapClass = `wp-gap-${gap}`;
  const justifyClass = justify !== 'start' ? `wp-justify-${justify}` : '';
  const alignClass = align !== 'center' ? `wp-align-${align}` : 'wp-align-center';
  const wrapClass = wrap ? 'wp-wrap' : 'wp-nowrap';

  // Combine classes
  const combinedClassName = [
    'wp-block-row',
    'wp-flex',
    'wp-flex-row',
    gapClass,
    justifyClass,
    alignClass,
    wrapClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={combinedClassName}
      style={style}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </div>
  );
}

export default Row;