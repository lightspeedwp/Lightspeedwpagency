/**
 * Spacer Block Component
 * 
 * WordPress Block: core/spacer
 * Category: Design Blocks
 * 
 * @see /guidelines/blocks/design/spacer.md
 * @see /src/styles/blocks/design/spacer.css
 */

import React from 'react';

export interface SpacerProps {
  /** Spacer height (use CSS variables) */
  height?: string;
  
  /** Preset height size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * Spacer Block
 * 
 * Creates vertical spacing between content blocks.
 * Uses 100% CSS variables for complete user control.
 * 
 * @example
 * ```tsx
 * // Preset sizes
 * <Spacer size="sm" />
 * <Spacer size="md" />
 * <Spacer size="lg" />
 * 
 * // Custom height
 * <Spacer height="var(--spacing-8)" />
 * ```
 */
export function Spacer({
  height,
  size,
  className = ''
}: SpacerProps) {
  const blockClass = 'wp-block-spacer';
  const sizeClass = size ? `${blockClass}--${size}` : '';
  const classes = [blockClass, sizeClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div 
      className={classes}
      style={height ? { height } : undefined}
      aria-hidden="true"
      role="presentation"
    />
  );
}
