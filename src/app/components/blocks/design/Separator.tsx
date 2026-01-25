/**
 * Separator Block Component
 * 
 * WordPress Block: core/separator
 * Category: Design Blocks
 * 
 * @see /guidelines/blocks/design/separator.md
 * @see /src/styles/blocks/design/separator.css
 * 
 * CRITICAL REQUIREMENTS:
 * - 100% CSS variables (NO hardcoded values)
 * - WordPress BEM class naming (.wp-block-separator)
 * - Dedicated CSS file for ALL styling
 * - WCAG 2.1 AA compliant
 * - Semantic HTML (<hr>)
 */

import '@/styles/blocks/design/separator.css';
import React from 'react';

export interface SeparatorProps {
  /** Separator style variant */
  variant?: 'default' | 'wide' | 'dots';
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * Separator Block
 * 
 * Creates horizontal dividers between sections of content.
 * Uses 100% CSS variables for complete user control.
 * 
 * @example
 * ```tsx
 * // Default separator
 * <Separator />
 * 
 * // Wide separator
 * <Separator variant="wide" />
 * 
 * // Dots separator
 * <Separator variant="dots" />
 * ```
 */
export function Separator({
  variant = 'default',
  className = ''
}: SeparatorProps) {
  // Build BEM classes
  const blockClass = 'wp-block-separator';
  const variantClass = `${blockClass}--${variant}`;
  const classes = [blockClass, variantClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <hr className={classes} />
  );
}
