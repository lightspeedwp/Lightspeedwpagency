/**
 * Columns Block Component
 * 
 * WordPress Block: core/columns
 * Category: Design
 * 
 * Layout container for arranging content side-by-side in columns (up to 6).
 * Each column can contain multiple inner blocks. Stacks on mobile.
 * 
 * Design System Requirements:
 * - Layout: CSS Grid or Flexbox for column distribution
 * - Spacing: Uses Tailwind gap classes or CSS variables
 * - Colors: Uses semantic color tokens
 * - Responsive: Automatically stacks on mobile devices
 * 
 * @see /guidelines/blocks/design/columns.md
 */

import React from 'react';

export interface ColumnsProps {
  /** Number of columns (1-6) */
  columns?: number;
  /** Gap between columns */
  gap?: string;
  /** Equal width columns */
  equalWidth?: boolean;
  /** Vertical alignment of columns */
  verticalAlign?: 'top' | 'center' | 'bottom' | 'stretch';
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Column children */
  children: React.ReactNode;
  /** ARIA label */
  'aria-label'?: string;
}

/**
 * Columns Block - Multi-column layout container
 * 
 * @example
 * <Columns columns={2} gap="gap-8">
 *   <Column>
 *     <Heading level={2}>Services</Heading>
 *     <Paragraph>We offer...</Paragraph>
 *   </Column>
 *   <Column>
 *     <Image src="/services.jpg" alt="Services" />
 *   </Column>
 * </Columns>
 * 
 * @example
 * <Columns columns={3} gap="gap-6" equalWidth={true}>
 *   <Column><FeatureCard title="Fast" /></Column>
 *   <Column><FeatureCard title="Secure" /></Column>
 *   <Column><FeatureCard title="Scalable" /></Column>
 * </Columns>
 */
export function Columns({
  columns = 2,
  gap = 'gap-6',
  equalWidth = true,
  verticalAlign = 'stretch',
  className = '',
  style = {},
  children,
  'aria-label': ariaLabel,
  ...props
}: ColumnsProps) {
  // Vertical alignment mapping
  const alignItems = {
    'top': 'items-start',
    'center': 'items-center',
    'bottom': 'items-end',
    'stretch': 'items-stretch'
  };

  // Responsive grid classes (stacks on mobile, columns on md+)
  const gridClasses = equalWidth
    ? `grid grid-cols-1 md:grid-cols-${columns}`
    : 'flex flex-col md:flex-row';

  // Combine classes
  const combinedClassName = [
    'wp-block-columns',
    gridClasses,
    gap,
    alignItems[verticalAlign],
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

/**
 * Column Component - Individual column within Columns block
 */
export interface ColumnProps {
  /** Column width (for variable-width layouts) */
  width?: string;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Column content */
  children: React.ReactNode;
}

export function Column({
  width,
  className = '',
  style = {},
  children,
  ...props
}: ColumnProps) {
  const combinedStyle: React.CSSProperties = {
    width,
    ...style
  };

  return (
    <div
      className={`wp-block-column ${className}`.trim()}
      style={combinedStyle}
      {...props}
    >
      {children}
    </div>
  );
}

export default Columns;
