/**
 * Alert Component
 * 
 * WordPress Block: core/alert (custom block)
 * Category: Design
 * 
 * Displays important messages, notifications, and feedback to users.
 * Supports multiple variants for different message types (success, warning, error, info).
 * 
 * Design System Requirements:
 * - Typography: Uses CSS variables (--text-base, --text-small) with Lexend font
 * - Colors: Uses semantic color tokens (--success, --warning, --destructive, --info)
 * - Spacing: Uses Tailwind spacing classes (p-*, gap-*)
 * - Border Radius: Uses CSS variable (--radius)
 * - Accessibility: WCAG 2.1 AA compliant, proper ARIA roles
 * 
 * **WordPress Mapping:**
 * - Block Name: `lsx-design/alert`
 * - Pattern Slug: `lsx-design/design/alert`
 * - Used in: Forms, dashboards, notifications, user feedback
 * 
 * **Accessibility:**
 * - Uses role="alert" for important messages
 * - Uses role="status" for informational messages
 * - Color contrast meets WCAG 2.1 AA minimum (4.5:1)
 * - Does not rely on color alone to convey meaning
 * - Includes optional close button with keyboard support
 * 
 * @see /guidelines/components/Alert.md
 * 
 * @example
 * ```tsx
 * // Success alert
 * <Alert variant="success">Your changes have been saved!</Alert>
 * 
 * // Warning alert with icon
 * <Alert variant="warning" icon={<AlertTriangle />}>
 *   This action cannot be undone.
 * </Alert>
 * 
 * // Error alert with title
 * <Alert variant="destructive" title="Error">
 *   Failed to save changes. Please try again.
 * </Alert>
 * 
 * // Dismissible alert
 * <Alert variant="info" dismissible onDismiss={() => console.log('Dismissed')}>
 *   New features are now available!
 * </Alert>
 * ```
 */

import React from 'react';
import { X } from 'lucide-react';

/**
 * Alert Props
 * 
 * Configuration options for the Alert component
 * 
 * @property {ReactNode} children - Alert message content
 * @property {string} [variant] - Visual style variant based on message type
 * @property {string} [title] - Optional alert title/heading
 * @property {ReactNode} [icon] - Optional icon element
 * @property {boolean} [dismissible] - Whether alert can be dismissed
 * @property {Function} [onDismiss] - Callback when alert is dismissed
 * @property {string} [className] - Additional CSS classes
 * @property {string} [ariaLabel] - Accessible label for screen readers
 */
export interface AlertProps {
  /** Alert message content */
  children: React.ReactNode;
  /** Visual style variant */
  variant?: 'default' | 'info' | 'success' | 'warning' | 'destructive';
  /** Optional title/heading */
  title?: string;
  /** Optional icon element */
  icon?: React.ReactNode;
  /** Whether alert can be dismissed */
  dismissible?: boolean;
  /** Callback when dismissed */
  onDismiss?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Accessible label */
  ariaLabel?: string;
}

/**
 * Alert Component
 * 
 * Displays important messages with semantic color variants and optional features.
 * 
 * **Variants:**
 * - `default` — Neutral gray alert for general information
 * - `info` — Blue alert for informational messages
 * - `success` — Green alert for positive feedback (success, completed)
 * - `warning` — Yellow alert for cautionary messages (warning, attention needed)
 * - `destructive` — Red alert for errors or destructive actions
 * 
 * **Features:**
 * - Optional title for emphasis
 * - Optional icon for visual clarity
 * - Dismissible with close button
 * - Keyboard accessible (Escape to dismiss)
 * - Screen reader announcements
 * 
 * @example
 * ```tsx
 * import { Alert } from './components/blocks/design/Alert';
 * import { CheckCircle, AlertTriangle, Info } from 'lucide-react';
 * 
 * // Simple alerts
 * <Alert variant="success">Operation successful!</Alert>
 * <Alert variant="warning">Please review before continuing.</Alert>
 * 
 * // Alert with title
 * <Alert variant="destructive" title="Error">
 *   Failed to load data. Please refresh the page.
 * </Alert>
 * 
 * // Alert with icon
 * <Alert variant="info" icon={<Info />}>
 *   Did you know? You can customize your dashboard.
 * </Alert>
 * 
 * // Dismissible alert
 * <Alert 
 *   variant="success" 
 *   dismissible 
 *   onDismiss={() => console.log('Alert dismissed')}
 * >
 *   Your profile has been updated successfully.
 * </Alert>
 * ```
 */
export function Alert({
  children,
  variant = 'default',
  title,
  icon,
  dismissible = false,
  onDismiss,
  className = '',
  ariaLabel
}: AlertProps) {
  const [isVisible, setIsVisible] = React.useState(true);
  
  // Handle dismiss
  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) {
      onDismiss();
    }
  };

  // Handle keyboard dismiss (Escape key)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && dismissible) {
      handleDismiss();
    }
  };

  // Don't render if dismissed
  if (!isVisible) {
    return null;
  }

  // Determine ARIA role based on variant
  const role = variant === 'destructive' || variant === 'warning' ? 'alert' : 'status';

  // Alert classes
  const alertClasses = `
    relative
    flex
    gap-3
    p-4
    ${className}
  `.trim();

  // Variant-specific styles using CSS variables
  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: 'var(--muted)',
      color: 'var(--muted-foreground)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-base)'
    },
    info: {
      backgroundColor: 'var(--info)',
      color: 'var(--info-foreground)',
      border: '1px solid var(--info)',
      borderRadius: 'var(--radius)',
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-base)'
    },
    success: {
      backgroundColor: 'var(--success)',
      color: 'var(--success-foreground)',
      border: '1px solid var(--success)',
      borderRadius: 'var(--radius)',
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-base)'
    },
    warning: {
      backgroundColor: 'var(--warning)',
      color: 'var(--warning-foreground)',
      border: '1px solid var(--warning)',
      borderRadius: 'var(--radius)',
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-base)'
    },
    destructive: {
      backgroundColor: 'var(--destructive)',
      color: 'var(--destructive-foreground)',
      border: '1px solid var(--destructive)',
      borderRadius: 'var(--radius)',
      fontFamily: 'var(--font-primary)',
      fontSize: 'var(--text-base)'
    }
  };

  const style = variantStyles[variant];

  // Title styles
  const titleStyle: React.CSSProperties = {
    fontFamily: 'var(--font-primary)',
    fontSize: 'var(--text-base)',
    fontWeight: 'var(--font-weight-semibold)',
    lineHeight: 'var(--line-height-normal)',
    marginBottom: title && children ? 'var(--spacing-1)' : '0'
  };

  // Message styles
  const messageStyle: React.CSSProperties = {
    fontFamily: 'var(--font-primary)',
    fontSize: 'var(--text-base)',
    fontWeight: 'var(--font-weight-regular)',
    lineHeight: 'var(--line-height-normal)'
  };

  return (
    <div
      className={alertClasses}
      style={style}
      role={role}
      aria-label={ariaLabel}
      aria-live={variant === 'destructive' ? 'assertive' : 'polite'}
      onKeyDown={handleKeyDown}
    >
      {/* Icon */}
      {icon && (
        <div 
          className="flex-shrink-0 pt-0.5"
          aria-hidden="true"
        >
          {icon}
        </div>
      )}

      {/* Content */}
      <div className="flex-1">
        {/* Title */}
        {title && (
          <div style={titleStyle}>
            {title}
          </div>
        )}
        
        {/* Message */}
        <div style={messageStyle}>
          {children}
        </div>
      </div>

      {/* Dismiss button */}
      {dismissible && (
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 inline-flex items-center justify-center"
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '0',
            width: '20px',
            height: '20px',
            borderRadius: 'var(--radius)',
            transition: 'opacity 0.2s ease'
          }}
          aria-label="Dismiss alert"
          type="button"
        >
          <X 
            size={16} 
            style={{
              color: 'currentColor',
              opacity: 0.7
            }}
          />
        </button>
      )}
    </div>
  );
}

/**
 * AlertTitle Component
 * 
 * Optional title component for Alert.
 * Can be used when you need more control over the title styling.
 * 
 * @example
 * ```tsx
 * <Alert variant="success">
 *   <AlertTitle>Success</AlertTitle>
 *   <AlertDescription>Your changes have been saved.</AlertDescription>
 * </Alert>
 * ```
 */
export interface AlertTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function AlertTitle({ children, className = '' }: AlertTitleProps) {
  return (
    <div
      className={className}
      style={{
        fontFamily: 'var(--font-primary)',
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--font-weight-semibold)',
        lineHeight: 'var(--line-height-normal)',
        marginBottom: 'var(--spacing-1)'
      }}
    >
      {children}
    </div>
  );
}

/**
 * AlertDescription Component
 * 
 * Optional description component for Alert.
 * Can be used when you need more control over the message styling.
 * 
 * @example
 * ```tsx
 * <Alert variant="info">
 *   <AlertTitle>New Features</AlertTitle>
 *   <AlertDescription>
 *     We've added new customization options to your dashboard.
 *   </AlertDescription>
 * </Alert>
 * ```
 */
export interface AlertDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function AlertDescription({ children, className = '' }: AlertDescriptionProps) {
  return (
    <div
      className={className}
      style={{
        fontFamily: 'var(--font-primary)',
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--font-weight-regular)',
        lineHeight: 'var(--line-height-normal)'
      }}
    >
      {children}
    </div>
  );
}
