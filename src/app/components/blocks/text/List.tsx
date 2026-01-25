/**
 * List Block Component
 * 
 * WordPress Block: core/list
 * Category: Text Blocks
 * 
 * @see /guidelines/blocks/text/list.md
 * @see /src/styles/blocks/text/list.css
 * 
 * CRITICAL REQUIREMENTS:
 * - 100% CSS variables (NO hardcoded values)
 * - WordPress BEM class naming (.wp-block-list)
 * - Dedicated CSS file for ALL styling
 * - WCAG 2.1 AA compliant
 * - Approved fonts only (var(--font-primary))
 */

import '@/styles/blocks/text/list.css';
import React from 'react';

export interface ListProps {
  /** List type */
  type?: 'ordered' | 'unordered';
  
  /** List style variant */
  variant?: 'default' | 'checkmarks' | 'custom' | 'none' | 'horizontal';
  
  /** Spacing between items */
  spacing?: 'tight' | 'normal' | 'relaxed' | 'compact';
  
  /** List items */
  children: React.ReactNode;
  
  /** Additional CSS classes */
  className?: string;
}

export interface ListItemProps {
  /** Item content */
  children: React.ReactNode;
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * List Block
 * 
 * Displays ordered (numbered) or unordered (bulleted) lists.
 * Uses 100% CSS variables for complete user control.
 * 
 * @example
 * ```tsx
 * // Unordered list
 * <List type="unordered">
 *   <ListItem>Item 1</ListItem>
 *   <ListItem>Item 2</ListItem>
 *   <ListItem>Item 3</ListItem>
 * </List>
 * 
 * // Ordered list
 * <List type="ordered">
 *   <ListItem>Step 1</ListItem>
 *   <ListItem>Step 2</ListItem>
 *   <ListItem>Step 3</ListItem>
 * </List>
 * 
 * // Checkmarks variant
 * <List type="unordered" variant="checkmarks">
 *   <ListItem>Feature 1</ListItem>
 *   <ListItem>Feature 2</ListItem>
 * </List>
 * 
 * // Relaxed spacing
 * <List type="ordered" spacing="relaxed">
 *   <ListItem>Instruction 1</ListItem>
 *   <ListItem>Instruction 2</ListItem>
 * </List>
 * ```
 */
export function List({
  type = 'unordered',
  variant = 'default',
  spacing,
  children,
  className = ''
}: ListProps) {
  // Build BEM classes
  const blockClass = 'wp-block-list';
  const typeClass = `${blockClass}--${type}`;
  const variantClass = variant !== 'default' ? `${blockClass}--${variant}` : '';
  const spacingClass = spacing ? `${blockClass}--${spacing}` : '';
  const classes = [blockClass, typeClass, variantClass, spacingClass, className]
    .filter(Boolean)
    .join(' ');

  // Choose the appropriate HTML element
  const ListElement = type === 'ordered' ? 'ol' : 'ul';

  return (
    <ListElement className={classes} role="list">
      {children}
    </ListElement>
  );
}

/**
 * ListItem Component
 * 
 * Individual list item within a List block.
 * 
 * @example
 * ```tsx
 * <ListItem>Simple item</ListItem>
 * 
 * <ListItem>
 *   Item with nested content
 *   <List type="unordered">
 *     <ListItem>Nested item 1</ListItem>
 *     <ListItem>Nested item 2</ListItem>
 *   </List>
 * </ListItem>
 * ```
 */
export function ListItem({
  children,
  className = ''
}: ListItemProps) {
  const classes = ['wp-block-list__item', className]
    .filter(Boolean)
    .join(' ');

  return (
    <li className={classes}>
      {children}
    </li>
  );
}
