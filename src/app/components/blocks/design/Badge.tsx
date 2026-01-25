/**
 * Badge Block Component
 * 
 * WordPress Block: core/badge (custom design block)
 * Category: Design Blocks
 * 
 * @see /guidelines/blocks/design/badge.md
 * @see /src/styles/blocks/design/badge.css
 * 
 * CRITICAL REQUIREMENTS:
 * - 100% CSS variables (NO hardcoded values)
 * - WordPress BEM class naming (.wp-block-badge)
 * - Dedicated CSS file for ALL styling
 * - WCAG 2.1 AA compliant
 * - Approved fonts only (var(--font-primary))
 */

import '@/styles/blocks/design/badge.css';
import React from 'react';

export interface BadgeProps {
  /** Badge visual variant */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
  
  /** Badge size */
  size?: 'sm' | 'md' | 'lg';
  
  /** Badge content */
  children: React.ReactNode;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Accessible label for screen readers */
  ariaLabel?: string;
}

/**
 * Badge Block
 * 
 * Small status indicators, labels, tags, or counts.
 * Uses 100% CSS variables for complete user control.
 * 
 * @example
 * ```tsx
 * // Status badges
 * <Badge variant="success">Active</Badge>
 * <Badge variant="warning">Pending</Badge>
 * <Badge variant="error">Closed</Badge>
 * 
 * // Category tags
 * <Badge variant="primary">Featured</Badge>
 * <Badge variant="secondary">New</Badge>
 * 
 * // Notification count
 * <Badge variant="error" size="sm" ariaLabel="3 unread messages">3</Badge>
 * ```
 */
export function Badge({
  variant = 'default',
  size = 'md',
  children,
  className = '',
  ariaLabel
}: BadgeProps) {
  // Determine if this is a status badge (for semantic HTML)
  const isStatusBadge = ['success', 'warning', 'error'].includes(variant);

  // Build BEM classes
  const blockClass = 'wp-block-badge';
  const variantClass = `${blockClass}--${variant}`;
  const sizeClass = `${blockClass}--${size}`;
  const classes = [blockClass, variantClass, sizeClass, className]
    .filter(Boolean)
    .join(' ');

  // Use semantic HTML for status badges
  if (isStatusBadge) {
    return (
      <span
        className={classes}
        role="status"
        aria-label={ariaLabel || `Status: ${children}`}
      >
        {children}
      </span>
    );
  }

  // Standard badge
  return (
    <span
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </span>
  );
}
