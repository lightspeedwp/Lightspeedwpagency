/**
 * Stack Block Component
 * 
 * WordPress Block: core/stack
 * Category: Design
 * 
 * Layout container that vertically stacks child blocks with consistent spacing.
 * Simplifies vertical layouts with automatic spacing between items.
 * 
 * Design System Requirements:
 * - Layout: Flexbox with flex-direction: column
 * - Spacing: Uses WordPress gap utilities (.wp-gap-*)
 * - Colors: Uses semantic color tokens
 * - Alignment: Supports justify-content and align-items
 * 
 * @see /guidelines/blocks/design/stack.md
 */

import React from 'react';

export interface StackProps {
  /** Vertical spacing between children (0-24) */
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
  /** Vertical justification */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  /** Horizontal alignment */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  /** Width constraint */
  width?: 'auto' | 'default' | 'wide' | 'full';
  /** Sticky positioning */
  sticky?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles (CSS variables only) */
  style?: React.CSSProperties;
  /** Stacked items */
  children: React.ReactNode;
  /** ARIA label */
  'aria-label'?: string;
}

/**
 * Stack Block - Vertical layout container with consistent spacing
 * 
 * @example
 * <Stack gap={6} align="center">
 *   <Heading level={2}>Features</Heading>
 *   <FeatureCard title="Fast" />
 *   <FeatureCard title="Secure" />
 *   <FeatureCard title="Scalable" />
 * </Stack>
 * 
 * @example
 * <Stack gap={4} justify="between" width="full">
 *   <FormField label="Name" />
 *   <FormField label="Email" />
 *   <Button>Submit</Button>
 * </Stack>
 */
export function Stack({
  gap = 4,
  justify = 'start',
  align = 'stretch',
  width = 'auto',
  sticky = false,
  className = '',
  style = {},
  children,
  'aria-label': ariaLabel,
  ...props
}: StackProps) {
  // Build WordPress-aligned class names
  const gapClass = `wp-gap-${gap}`;
  const justifyClass = justify !== 'start' ? `wp-justify-${justify}` : '';
  const alignClass = align !== 'stretch' ? `wp-align-${align}` : '';
  const widthClass = width !== 'auto' ? `wp-width-${width}` : '';
  const stickyClass = sticky ? 'wp-sticky' : '';

  // Combine classes
  const combinedClassName = [
    'wp-block-stack',
    'wp-flex',
    'wp-flex-col',
    gapClass,
    justifyClass,
    alignClass,
    widthClass,
    stickyClass,
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

export default Stack;