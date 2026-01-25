/**
 * Alert Block Component
 * 
 * WordPress Block: core/alert (custom design block)
 * Category: Design Blocks
 * 
 * @see /guidelines/blocks/design/alert.md
 * @see /src/styles/blocks/design/alert.css
 * 
 * CRITICAL REQUIREMENTS:
 * - 100% CSS variables (NO hardcoded values)
 * - WordPress BEM class naming (.wp-block-alert)
 * - Dedicated CSS file for ALL styling
 * - WCAG 2.1 AA compliant
 * - Approved fonts only (var(--font-primary))
 */

import '@/styles/blocks/design/alert.css';
import React from 'react';
import { AlertCircle, CheckCircle, AlertTriangle, XCircle, X } from 'lucide-react';

export interface AlertProps {
  /** Alert severity/variant */
  variant?: 'info' | 'success' | 'warning' | 'error';
  
  /** Alert title (optional) */
  title?: string;
  
  /** Alert content */
  children: React.ReactNode;
  
  /** Show dismiss button */
  dismissible?: boolean;
  
  /** Callback when dismissed */
  onDismiss?: () => void;
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * Alert Block
 * 
 * Displays important messages with semantic color variants.
 * Uses 100% CSS variables for complete user control.
 * 
 * @example
 * ```tsx
 * // Info alert
 * <Alert variant="info" title="Notice">
 *   This is important information.
 * </Alert>
 * 
 * // Success alert
 * <Alert variant="success">
 *   Operation completed successfully!
 * </Alert>
 * 
 * // Dismissible warning
 * <Alert variant="warning" dismissible onDismiss={() => console.log('dismissed')}>
 *   Please review before continuing.
 * </Alert>
 * 
 * // Error alert
 * <Alert variant="error" title="Error">
 *   Something went wrong. Please try again.
 * </Alert>
 * ```
 */
export function Alert({
  variant = 'info',
  title,
  children,
  dismissible = false,
  onDismiss,
  className = ''
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

  // Select icon based on variant
  const icons = {
    info: AlertCircle,
    success: CheckCircle,
    warning: AlertTriangle,
    error: XCircle
  };
  const Icon = icons[variant];

  // Build BEM classes
  const blockClass = 'wp-block-alert';
  const modifierClass = `${blockClass}--${variant}`;
  const dismissibleClass = dismissible ? `${blockClass}--dismissible` : '';
  const classes = [blockClass, modifierClass, dismissibleClass, className]
    .filter(Boolean)
    .join(' ');

  // Determine ARIA role
  const role = variant === 'error' || variant === 'warning' ? 'alert' : 'status';
  const ariaLive = variant === 'error' ? 'assertive' : 'polite';

  return (
    <div
      className={classes}
      role={role}
      aria-live={ariaLive}
      aria-atomic="true"
      onKeyDown={handleKeyDown}
    >
      {/* Icon */}
      <Icon className={`${blockClass}__icon`} aria-hidden="true" />

      {/* Content */}
      <div className={`${blockClass}__content`}>
        {title && (
          <strong className={`${blockClass}__title`}>
            {title}
          </strong>
        )}
        <div className={`${blockClass}__message`}>
          {children}
        </div>
      </div>

      {/* Dismiss button */}
      {dismissible && (
        <button
          className={`${blockClass}__dismiss`}
          onClick={handleDismiss}
          aria-label="Dismiss alert"
          type="button"
        >
          <X aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

/**
 * AlertTitle Component
 * 
 * Optional title component for more control over styling.
 * 
 * @example
 * ```tsx
 * <Alert variant="success">
 *   <AlertTitle>Success</AlertTitle>
 *   <AlertDescription>Changes saved.</AlertDescription>
 * </Alert>
 * ```
 */
export interface AlertTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function AlertTitle({ children, className = '' }: AlertTitleProps) {
  return (
    <strong className={`wp-block-alert__title ${className}`}>
      {children}
    </strong>
  );
}

/**
 * AlertDescription Component
 * 
 * Optional description component for more control over styling.
 * 
 * @example
 * ```tsx
 * <Alert variant="info">
 *   <AlertTitle>New Features</AlertTitle>
 *   <AlertDescription>Check out the latest updates.</AlertDescription>
 * </Alert>
 * ```
 */
export interface AlertDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function AlertDescription({ children, className = '' }: AlertDescriptionProps) {
  return (
    <div className={`wp-block-alert__message ${className}`}>
      {children}
    </div>
  );
}
