/**
 * Badge Component
 * 
 * WordPress Block: core/badge (custom block)
 * Category: Design
 * 
 * Small label component for displaying status, categories, tags, or metadata.
 * Supports multiple color variants and sizes for different use cases.
 * 
 * Design System Requirements:
 * - Typography: Uses CSS variables (--text-small, --text-tiny) with Lexend font
 * - Colors: Uses semantic color tokens (--primary, --muted, --destructive, etc.)
 * - Spacing: Uses Tailwind spacing classes (px-*, py-*)
 * - Border Radius: Uses CSS variable (--radius)
 * - Accessibility: WCAG 2.1 AA compliant contrast ratios
 * 
 * **WordPress Mapping:**
 * - Block Name: `lsx-design/badge`
 * - Pattern Slug: `lsx-design/design/badge`
 * - Used in: Cards, metadata displays, status indicators, category lists
 * 
 * **Accessibility:**
 * - Semantic HTML using <span> with role="status" for status badges
 * - Color contrast meets WCAG 2.1 AA minimum (4.5:1)
 * - Text remains readable when color-blind or in high-contrast mode
 * - Does not rely on color alone to convey meaning
 * 
 * @see /guidelines/components/Badge.md
 * 
 * @example
 * ```tsx
 * // Status badge
 * <Badge variant="success">Published</Badge>
 * 
 * // Category badge
 * <Badge variant="primary" size="sm">WordPress</Badge>
 * 
 * // Tag badge
 * <Badge variant="muted" size="sm">Design</Badge>
 * 
 * // Warning badge
 * <Badge variant="warning">Draft</Badge>
 * ```
 */

import React from 'react';

/**
 * Badge Props
 * 
 * Configuration options for the Badge component
 * 
 * @property {ReactNode} children - Badge label text
 * @property {string} [variant] - Color variant based on semantic meaning
 * @property {string} [size] - Size of the badge (affects padding and font size)
 * @property {boolean} [pill] - Rounded pill shape vs standard rounded corners
 * @property {string} [className] - Additional CSS classes for customization
 * @property {string} [ariaLabel] - Accessible label for screen readers
 */
export interface BadgeProps {
  /** Badge label text */
  children: React.ReactNode;
  /** Color variant */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'destructive' | 'muted' | 'outline';
  /** Badge size */
  size?: 'sm' | 'md' | 'lg';
  /** Rounded pill shape */
  pill?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Accessible label */
  ariaLabel?: string;
}

/**
 * Badge Component
 * 
 * Displays a small label with semantic color variants and configurable sizes.
 * 
 * **Variants:**
 * - `default` — Neutral gray badge for general use
 * - `primary` — Brand primary color for highlighted content
 * - `secondary` — Secondary brand color for alternative highlighting
 * - `success` — Green badge for positive status (published, completed, success)
 * - `warning` — Yellow badge for cautionary status (draft, pending, in progress)
 * - `destructive` — Red badge for negative status (error, failed, deleted)
 * - `muted` — Low-contrast badge for subtle labeling
 * - `outline` — Transparent background with border
 * 
 * **Sizes:**
 * - `sm` — Small badge (12px text, compact padding)
 * - `md` — Medium badge (14px text, standard padding)
 * - `lg` — Large badge (14px text, generous padding)
 * 
 * @example
 * ```tsx
 * import { Badge } from './components/blocks/design/Badge';
 * 
 * // Status indicators
 * <Badge variant="success">Active</Badge>
 * <Badge variant="warning">Pending</Badge>
 * <Badge variant="destructive">Failed</Badge>
 * 
 * // Categories and tags
 * <Badge variant="primary" size="sm">WordPress</Badge>
 * <Badge variant="muted" size="sm">Tutorial</Badge>
 * 
 * // Pill-shaped badges
 * <Badge variant="primary" pill>Featured</Badge>
 * ```
 */
export function Badge({
  children,
  variant = 'default',
  size = 'md',
  pill = false,
  className = '',
  ariaLabel
}: BadgeProps) {
  // Determine if this is a status badge (for semantic HTML)
  const isStatusBadge = ['success', 'warning', 'destructive'].includes(variant);

  // Size classes (padding and font size)
  const sizeClasses = {
    sm: 'px-2 py-0.5',      // 8px horizontal, 2px vertical
    md: 'px-2.5 py-0.5',    // 10px horizontal, 2px vertical
    lg: 'px-3 py-1'         // 12px horizontal, 4px vertical
  }[size];

  // Border radius (pill vs standard)
  const radiusClass = pill ? 'rounded-full' : '';

  // Combine all classes
  const badgeClasses = `
    inline-flex items-center justify-center
    ${sizeClasses}
    ${radiusClass}
    font-medium
    whitespace-nowrap
    ${className}
  `.trim();

  // Variant-specific inline styles using CSS variables
  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: 'var(--muted)',
      color: 'var(--muted-foreground)',
      borderRadius: pill ? '9999px' : 'var(--radius)',
      fontFamily: 'var(--font-primary)',
      fontSize: size === 'sm' ? 'var(--text-tiny)' : 'var(--text-small)',
      fontWeight: 'var(--font-weight-medium)',
      letterSpacing: 'var(--letter-spacing-wide)'
    },
    primary: {
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-foreground)',
      borderRadius: pill ? '9999px' : 'var(--radius)',
      fontFamily: 'var(--font-primary)',
      fontSize: size === 'sm' ? 'var(--text-tiny)' : 'var(--text-small)',
      fontWeight: 'var(--font-weight-medium)',
      letterSpacing: 'var(--letter-spacing-wide)'
    },
    secondary: {
      backgroundColor: 'var(--secondary)',
      color: 'var(--secondary-foreground)',
      borderRadius: pill ? '9999px' : 'var(--radius)',
      fontFamily: 'var(--font-primary)',
      fontSize: size === 'sm' ? 'var(--text-tiny)' : 'var(--text-small)',
      fontWeight: 'var(--font-weight-medium)',
      letterSpacing: 'var(--letter-spacing-wide)'
    },
    success: {
      backgroundColor: 'var(--success)',
      color: 'var(--success-foreground)',
      borderRadius: pill ? '9999px' : 'var(--radius)',
      fontFamily: 'var(--font-primary)',
      fontSize: size === 'sm' ? 'var(--text-tiny)' : 'var(--text-small)',
      fontWeight: 'var(--font-weight-medium)',
      letterSpacing: 'var(--letter-spacing-wide)'
    },
    warning: {
      backgroundColor: 'var(--warning)',
      color: 'var(--warning-foreground)',
      borderRadius: pill ? '9999px' : 'var(--radius)',
      fontFamily: 'var(--font-primary)',
      fontSize: size === 'sm' ? 'var(--text-tiny)' : 'var(--text-small)',
      fontWeight: 'var(--font-weight-medium)',
      letterSpacing: 'var(--letter-spacing-wide)'
    },
    destructive: {
      backgroundColor: 'var(--destructive)',
      color: 'var(--destructive-foreground)',
      borderRadius: pill ? '9999px' : 'var(--radius)',
      fontFamily: 'var(--font-primary)',
      fontSize: size === 'sm' ? 'var(--text-tiny)' : 'var(--text-small)',
      fontWeight: 'var(--font-weight-medium)',
      letterSpacing: 'var(--letter-spacing-wide)'
    },
    muted: {
      backgroundColor: 'var(--muted)',
      color: 'var(--muted-foreground)',
      borderRadius: pill ? '9999px' : 'var(--radius)',
      fontFamily: 'var(--font-primary)',
      fontSize: size === 'sm' ? 'var(--text-tiny)' : 'var(--text-small)',
      fontWeight: 'var(--font-weight-regular)',
      letterSpacing: 'var(--letter-spacing-wide)',
      opacity: 0.8
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--foreground)',
      border: '1px solid var(--border)',
      borderRadius: pill ? '9999px' : 'var(--radius)',
      fontFamily: 'var(--font-primary)',
      fontSize: size === 'sm' ? 'var(--text-tiny)' : 'var(--text-small)',
      fontWeight: 'var(--font-weight-medium)',
      letterSpacing: 'var(--letter-spacing-wide)'
    }
  };

  const style = variantStyles[variant];

  // Use semantic HTML for status badges
  if (isStatusBadge) {
    return (
      <span
        className={badgeClasses}
        style={style}
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
      className={badgeClasses}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </span>
  );
}
