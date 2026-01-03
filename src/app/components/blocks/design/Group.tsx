/**
 * Group Block Component
 * 
 * WordPress Block: core/group
 * Category: Design
 * 
 * A versatile container block for grouping other blocks together with shared styling.
 * Allows applying background colors, spacing, width constraints and other styles.
 * 
 * Design System Requirements:
 * - Typography: Inherits from child blocks (no typography enforcement)
 * - Colors: Uses semantic color tokens (--background, --foreground, etc.)
 * - Spacing: Uses Tailwind classes for padding/margin
 * - Border Radius: Uses CSS variable (--radius)
 * - Semantic HTML: Supports multiple tag names (div, section, article, etc.)
 * 
 * @see /guidelines/blocks/design/group.md
 */

import React from 'react';

export interface GroupProps {
  /** HTML tag for semantic structure */
  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'nav' | 'main';
  /** Width alignment */
  align?: 'default' | 'wide' | 'full';
  /** Background color (CSS variable) */
  backgroundColor?: string;
  /** Text color (CSS variable) */
  color?: string;
  /** Padding (Tailwind classes) */
  padding?: string;
  /** Margin (Tailwind classes) */
  margin?: string;
  /** Border radius (CSS variable or Tailwind) */
  borderRadius?: string;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Child blocks */
  children: React.ReactNode;
  /** ARIA label for accessibility */
  'aria-label'?: string;
}

/**
 * Group Block - Container for grouping blocks with shared styling
 * 
 * @example
 * <Group as="section" backgroundColor="var(--surface)" padding="p-8">
 *   <Heading level={2}>Features</Heading>
 *   <Paragraph>Our features include...</Paragraph>
 * </Group>
 * 
 * @example
 * <Group as="div" align="wide" className="my-8">
 *   <Columns columns={2}>
 *     <Column>Left content</Column>
 *     <Column>Right content</Column>
 *   </Columns>
 * </Group>
 */
export function Group({
  as: Tag = 'div',
  align = 'default',
  backgroundColor,
  color,
  padding = '',
  margin = '',
  borderRadius,
  className = '',
  style = {},
  children,
  'aria-label': ariaLabel,
  ...props
}: GroupProps) {
  // Width alignment classes
  const alignClasses = {
    'default': 'max-w-7xl mx-auto',
    'wide': 'max-w-screen-2xl mx-auto',
    'full': 'w-full'
  };

  // Combine classes
  const combinedClassName = [
    'wp-block-group',
    alignClasses[align],
    padding,
    margin,
    className
  ].filter(Boolean).join(' ');

  // Combine styles
  const combinedStyle: React.CSSProperties = {
    backgroundColor,
    color,
    borderRadius,
    ...style
  };

  return (
    <Tag
      className={combinedClassName}
      style={combinedStyle}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Group;
