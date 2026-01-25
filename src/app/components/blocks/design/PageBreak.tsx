/**
 * Page Break Block Component
 * 
 * WordPress Block: core/nextpage
 * Category: Design Blocks
 * 
 * @see /guidelines/blocks/design/page-break.md
 * @see /src/styles/blocks/design/page-break.css
 */

import '@/styles/blocks/design/page-break.css';
import React from 'react';

export interface PageBreakProps {
  /** Additional CSS classes */
  className?: string;
  
  /** Show visual indicator in editor */
  showIndicator?: boolean;
}

/**
 * Page Break Block
 * 
 * Creates pagination points in long-form content.
 * Uses 100% CSS variables for complete user control.
 * 
 * @example
 * ```tsx
 * // Simple page break
 * <PageBreak />
 * 
 * // With visual indicator
 * <PageBreak showIndicator />
 * ```
 */
export function PageBreak({
  className = '',
  showIndicator = true
}: PageBreakProps) {
  const blockClass = 'wp-block-page-break';
  const classes = [blockClass, className].filter(Boolean).join(' ');

  return (
    <div 
      className={classes}
      aria-hidden="true"
      role="presentation"
    >
      {showIndicator && (
        <span className={`${blockClass}__indicator`}>
          Page Break
        </span>
      )}
    </div>
  );
}
