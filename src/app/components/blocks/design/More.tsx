/**
 * More Block Component
 * 
 * WordPress Block: core/more
 * Category: Design Blocks
 * 
 * @see /guidelines/blocks/design/more.md
 * @see /src/styles/blocks/design/more.css
 * 
 * CRITICAL REQUIREMENTS:
 * - 100% CSS variables (NO hardcoded values)
 * - WordPress BEM class naming (.wp-block-more)
 * - Dedicated CSS file for ALL styling
 * - WCAG 2.1 AA compliant
 * - Keyboard accessible
 */

import '@/styles/blocks/design/more.css';
import React from 'react';

export interface MoreProps {
  /** Custom link text */
  text?: string;
  
  /** Show visual indicator in editor */
  showIndicator?: boolean;
  
  /** Style variant */
  variant?: 'default' | 'minimal' | 'filled';
  
  /** Link URL (for single post) */
  href?: string;
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * More Block
 * 
 * Creates a read-more divider in post content.
 * Uses 100% CSS variables for complete user control.
 * 
 * @example
 * ```tsx
 * // Simple more block
 * <More />
 * 
 * // Custom text
 * <More text="Read full article" />
 * 
 * // Editor indicator
 * <More showIndicator />
 * 
 * // With link
 * <More 
 *   text="Continue reading" 
 *   href="/post/full-article"
 * />
 * ```
 */
export function More({
  text = 'Continue reading',
  showIndicator = false,
  variant = 'default',
  href = '#more',
  className = ''
}: MoreProps) {
  // Build BEM classes
  const blockClass = 'wp-block-more';
  const variantClass = variant !== 'default' ? `${blockClass}--${variant}` : '';
  const classes = [blockClass, variantClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {showIndicator ? (
        <span className={`${blockClass}__indicator`}>
          — Read more —
        </span>
      ) : (
        <a 
          href={href}
          className={`${blockClass}__text`}
          aria-label={`${text} - Continue to full article`}
        >
          {text}
        </a>
      )}
    </div>
  );
}
