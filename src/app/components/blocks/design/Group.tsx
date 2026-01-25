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
 * - Spacing: Uses WordPress padding utilities (.p-*, .px-*, .py-*)
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
  /** Padding (0-24) */
  padding?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
  /** Border radius (CSS variable) */
  borderRadius?: string;
  /** Layout direction */
  layout?: 'stack' | 'row';
  /** Gap between children (0-24) */
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles (CSS variables only) */
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
 * <Group as="section" backgroundColor="var(--surface)" padding={8}>
 *   <Heading level={2}>Features</Heading>
 *   <Paragraph>Our features include...</Paragraph>
 * </Group>
 * 
 * @example
 * <Group as="div" align="wide" layout="stack" gap={6}>
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
  padding,
  borderRadius,
  layout = 'stack',
  gap = 0,
  className = '',
  style = {},
  children,
  'aria-label': ariaLabel,
  ...props
}: GroupProps) {
  // Build WordPress-aligned class names
  const alignClass = align !== 'default' ? `wp-width-${align}` : 'wp-width-default';
  const paddingClass = padding ? `p-${padding}` : '';
  const layoutClass = layout === 'stack' ? 'wp-flex wp-flex-col' : 'wp-flex wp-flex-row';
  const gapClass = gap > 0 ? `wp-gap-${gap}` : '';

  // Combine classes
  const combinedClassName = [
    'wp-block-group',
    alignClass,
    layoutClass,
    gapClass,
    paddingClass,
    className
  ].filter(Boolean).join(' ');

  // Combine styles (CSS variables only)
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