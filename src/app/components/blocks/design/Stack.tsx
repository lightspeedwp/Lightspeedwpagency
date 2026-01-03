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
 * - Spacing: Uses Tailwind gap classes or CSS variables
 * - Colors: Uses semantic color tokens
 * - Alignment: Supports justify-content and align-items
 * 
 * @see /guidelines/blocks/design/stack.md
 */

import React from 'react';

export interface StackProps {
  /** Vertical spacing between children */
  gap?: string;
  /** Vertical justification (flex-start, center, space-between, etc.) */
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  /** Horizontal alignment (flex-start, center, flex-end, stretch) */
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  /** Width constraint */
  width?: 'auto' | 'default' | 'wide' | 'full';
  /** Sticky positioning */
  sticky?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
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
 * <Stack gap="gap-6" align="center">
 *   <Heading level={2}>Features</Heading>
 *   <FeatureCard title="Fast" />
 *   <FeatureCard title="Secure" />
 *   <FeatureCard title="Scalable" />
 * </Stack>
 * 
 * @example
 * <Stack gap="gap-4" justify="space-between" width="full">
 *   <FormField label="Name" />
 *   <FormField label="Email" />
 *   <Button>Submit</Button>
 * </Stack>
 */
export function Stack({
  gap = 'gap-4',
  justify = 'flex-start',
  align = 'stretch',
  width = 'auto',
  sticky = false,
  className = '',
  style = {},
  children,
  'aria-label': ariaLabel,
  ...props
}: StackProps) {
  // Width classes
  const widthClasses = {
    'auto': '',
    'default': 'max-w-7xl mx-auto',
    'wide': 'max-w-screen-2xl mx-auto',
    'full': 'w-full'
  };

  // Combine classes
  const combinedClassName = [
    'wp-block-stack',
    'flex flex-col',
    gap,
    widthClasses[width],
    sticky ? 'sticky top-0' : '',
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

export default Stack;
