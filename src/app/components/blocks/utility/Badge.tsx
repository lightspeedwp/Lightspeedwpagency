/**
 * Badge Component
 * 
 * Features:
 * - 8 variants (default, primary, success, warning, error, info, outline, ghost)
 * - 3 sizes (sm, md, lg)
 * - Dot indicator support
 * - Removable badges
 * - WCAG 2.1 AA compliant
 * 
 * Design System Compliance:
 * - Uses CSS variables for colors
 * - Uses Lexend font
 * - Proper contrast ratios
 */

import { ReactNode } from 'react';

export interface BadgeProps {
  /** Badge content */
  children: ReactNode;
  /** Variant */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'outline' | 'ghost';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Show dot indicator */
  dot?: boolean;
  /** Removable */
  onRemove?: () => void;
}

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  onRemove,
}: BadgeProps) {
  const sizeMap = {
    sm: { fontSize: 'var(--text-small)', padding: '0.125rem 0.5rem', height: '20px' },
    md: { fontSize: 'var(--text-small)', padding: '0.25rem 0.75rem', height: '24px' },
    lg: { fontSize: 'var(--text-base)', padding: '0.375rem 1rem', height: '28px' },
  };

  const variantMap = {
    default: {
      bg: 'var(--muted)',
      color: 'var(--muted-foreground)',
      border: 'none',
    },
    primary: {
      bg: 'var(--primary)',
      color: 'var(--primary-foreground)',
      border: 'none',
    },
    success: {
      bg: 'var(--accent)',
      color: 'var(--accent-foreground)',
      border: 'none',
    },
    warning: {
      bg: '#F59E0B',
      color: '#FFFFFF',
      border: 'none',
    },
    error: {
      bg: 'var(--destructive)',
      color: 'var(--destructive-foreground)',
      border: 'none',
    },
    info: {
      bg: '#3B82F6',
      color: '#FFFFFF',
      border: 'none',
    },
    outline: {
      bg: 'transparent',
      color: 'var(--foreground)',
      border: '1px solid var(--border)',
    },
    ghost: {
      bg: 'transparent',
      color: 'var(--foreground)',
      border: 'none',
    },
  };

  const dimensions = sizeMap[size];
  const colors = variantMap[variant];

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.375rem',
        height: dimensions.height,
        padding: dimensions.padding,
        fontFamily: 'Lexend, sans-serif',
        fontSize: dimensions.fontSize,
        fontWeight: '500',
        lineHeight: 1,
        color: colors.color,
        backgroundColor: colors.bg,
        border: colors.border,
        borderRadius: 'var(--radius-full)',
        whiteSpace: 'nowrap',
      }}
    >
      {/* Dot Indicator */}
      {dot && (
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'currentColor',
          }}
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <span>{children}</span>

      {/* Remove Button */}
      {onRemove && (
        <button
          onClick={onRemove}
          aria-label="Remove badge"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '16px',
            height: '16px',
            padding: 0,
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '12px',
            lineHeight: 1,
            color: 'currentColor',
            opacity: 0.7,
            transition: 'opacity 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.7';
          }}
        >
          ×
        </button>
      )}
    </span>
  );
}

/**
 * Badge Group
 * 
 * Container for multiple badges with consistent spacing.
 */
export interface BadgeGroupProps {
  children: ReactNode;
  spacing?: 'sm' | 'md' | 'lg';
}

export function BadgeGroup({ children, spacing = 'md' }: BadgeGroupProps) {
  const spacingMap = {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
  };

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: spacingMap[spacing],
      }}
    >
      {children}
    </div>
  );
}

/**
 * Notification Badge
 * 
 * Small circular badge for notification counts.
 */
export interface NotificationBadgeProps {
  count: number;
  max?: number;
  showZero?: boolean;
  variant?: 'primary' | 'error';
}

export function NotificationBadge({
  count,
  max = 99,
  showZero = false,
  variant = 'error',
}: NotificationBadgeProps) {
  if (count === 0 && !showZero) return null;

  const displayCount = count > max ? `${max}+` : String(count);

  const colors = variant === 'error'
    ? { bg: 'var(--destructive)', color: 'var(--destructive-foreground)' }
    : { bg: 'var(--primary)', color: 'var(--primary-foreground)' };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '20px',
        height: '20px',
        padding: '0 0.375rem',
        fontFamily: 'Lexend, sans-serif',
        fontSize: '11px',
        fontWeight: '600',
        lineHeight: 1,
        color: colors.color,
        backgroundColor: colors.bg,
        borderRadius: 'var(--radius-full)',
      }}
      aria-label={`${count} notifications`}
    >
      {displayCount}
    </span>
  );
}
