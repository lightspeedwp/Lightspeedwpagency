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
 * - Spacing: Uses Tailwind gap classes or CSS variables
 * - Colors: Uses semantic color tokens
 * - Alignment: Supports justify-content and align-items
 * - Responsive: Optional wrapping for mobile
 * 
 * @see /guidelines/blocks/design/row.md
 */

import React from 'react';

export interface RowProps {
  /** Horizontal spacing between children */
  gap?: string;
  /** Horizontal justification (flex-start, center, flex-end, space-between, etc.) */
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  /** Vertical alignment (flex-start, center, flex-end, stretch) */
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  /** Allow items to wrap to next line */
  wrap?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
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
 * <Row gap="gap-4" justify="center" align="center">
 *   <Button variant="primary">Sign Up</Button>
 *   <Button variant="secondary">Learn More</Button>
 * </Row>
 * 
 * @example
 * <Row gap="gap-6" justify="space-between" wrap>
 *   <Logo />
 *   <Navigation />
 *   <Button>Contact</Button>
 * </Row>
 */
export function Row({
  gap = 'gap-4',
  justify = 'flex-start',
  align = 'center',
  wrap = false,
  className = '',
  style = {},
  children,
  'aria-label': ariaLabel,
  ...props
}: RowProps) {
  // Combine classes
  const combinedClassName = [
    'wp-block-row',
    'flex',
    wrap ? 'flex-wrap' : 'flex-nowrap',
    gap,
    className
  ].filter(Boolean).join(' ');

  // Combine styles
  const combinedStyle: React.CSSProperties = {
    justifyContent: justify,
    alignItems: align,
    ...style
  };

  return (
    <div
      className={combinedClassName}
      style={combinedStyle}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </div>
  );
}

export default Row;
