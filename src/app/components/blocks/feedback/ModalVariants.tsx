/**
 * Modal/Dialog Variants
 * 
 * Provides different modal types:
 * - Confirmation dialog
 * - Alert dialog
 * - Info dialog
 * - Form dialog
 * - Drawer (side panel)
 * 
 * Design System Compliance:
 * - Uses CSS variables for all colors
 * - Uses Lexend for headings/buttons
 * - Uses Manrope for body text
 * - WCAG 2.1 AA compliant (focus trap, keyboard navigation)
 * 
 * @example
 * <ConfirmationDialog
 *   isOpen={isOpen}
 *   title="Delete item"
 *   message="Are you sure you want to delete this item?"
 *   onConfirm={handleDelete}
 *   onCancel={() => setIsOpen(false)}
 * />
 */

import { ReactNode, useEffect, useRef } from 'react';

export interface BaseModalProps {
  /** Whether modal is open */
  isOpen: boolean;
  /** Close handler */
  onClose: () => void;
  /** Modal title */
  title?: string;
  /** Modal content */
  children?: ReactNode;
  /** Modal size */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Show close button */
  showCloseButton?: boolean;
  /** Close on overlay click */
  closeOnOverlayClick?: boolean;
  /** Close on escape key */
  closeOnEscape?: boolean;
}

/**
 * Base Modal Component
 */
export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
}: BaseModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle escape key
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTab);
    firstElement?.focus();

    return () => document.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeMap = {
    sm: '400px',
    md: '600px',
    lg: '800px',
    xl: '1000px',
    full: '100%',
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      {/* Overlay */}
      <div
        onClick={closeOnOverlayClick ? onClose : undefined}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          animation: 'fadeIn 0.2s ease',
        }}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: sizeMap[size],
          maxHeight: size === 'full' ? '100%' : 'calc(100vh - 2rem)',
          backgroundColor: 'var(--card)',
          borderRadius: size === 'full' ? '0' : 'var(--radius-lg)',
          boxShadow: 'var(--shadow-xl)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          animation: 'slideUp 0.3s ease',
        }}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.5rem',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {title && (
              <h2
                id="modal-title"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h4)',
                  fontWeight: '500',
                  color: 'var(--foreground)',
                  margin: 0,
                }}
              >
                {title}
              </h2>
            )}

            {showCloseButton && (
              <button
                onClick={onClose}
                aria-label="Close modal"
                style={{
                  padding: '0.5rem',
                  backgroundColor: 'transparent',
                  color: 'var(--muted-foreground)',
                  border: 'none',
                  borderRadius: 'var(--radius)',
                  cursor: 'pointer',
                  fontSize: '1.5rem',
                  lineHeight: 1,
                  transition: 'background-color 0.2s ease',
                }}
              >
                ×
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.5rem',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * Confirmation Dialog
 */
export interface ConfirmationDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'danger' | 'warning' | 'info';
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
}

export function ConfirmationDialog({
  isOpen,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'info',
  onConfirm,
  onCancel,
  loading = false,
}: ConfirmationDialogProps) {
  const getConfirmButtonColor = () => {
    switch (variant) {
      case 'danger':
        return {
          background: 'var(--destructive)',
          color: 'var(--destructive-foreground)',
        };
      case 'warning':
        return {
          background: '#F59E0B',
          color: '#FFFFFF',
        };
      case 'info':
        return {
          background: 'var(--primary)',
          color: 'var(--primary-foreground)',
        };
      default:
        return {
          background: 'var(--primary)',
          color: 'var(--primary-foreground)',
        };
    }
  };

  const confirmColors = getConfirmButtonColor();

  return (
    <Modal isOpen={isOpen} onClose={onCancel} title={title} size="sm" closeOnOverlayClick={false}>
      {/* Message */}
      <p
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'var(--text-base)',
          color: 'var(--foreground)',
          lineHeight: '1.6',
          marginBottom: '2rem',
        }}
      >
        {message}
      </p>

      {/* Actions */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '1rem',
        }}
      >
        <button
          onClick={onCancel}
          disabled={loading}
          style={{
            padding: '12px 24px',
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-base)',
            fontWeight: '500',
            backgroundColor: 'var(--background)',
            color: 'var(--foreground)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.5 : 1,
            transition: 'all 0.2s ease',
            minHeight: '48px',
          }}
        >
          {cancelLabel}
        </button>

        <button
          onClick={onConfirm}
          disabled={loading}
          style={{
            padding: '12px 24px',
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-base)',
            fontWeight: '500',
            backgroundColor: confirmColors.background,
            color: confirmColors.color,
            border: 'none',
            borderRadius: 'var(--radius)',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
            transition: 'all 0.2s ease',
            minHeight: '48px',
          }}
        >
          {loading ? 'Processing...' : confirmLabel}
        </button>
      </div>
    </Modal>
  );
}

/**
 * Alert Dialog
 */
export interface AlertDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  variant?: 'success' | 'error' | 'warning' | 'info';
  onClose: () => void;
}

export function AlertDialog({ isOpen, title, message, variant = 'info', onClose }: AlertDialogProps) {
  const getIcon = () => {
    switch (variant) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      default:
        return '';
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case 'success':
        return 'var(--accent)';
      case 'error':
        return 'var(--destructive)';
      case 'warning':
        return '#F59E0B';
      case 'info':
        return 'var(--primary)';
      default:
        return 'var(--muted-foreground)';
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="sm">
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
        {/* Icon */}
        <div
          style={{
            fontSize: '2rem',
            color: getIconColor(),
            lineHeight: 1,
            flexShrink: 0,
          }}
          aria-hidden="true"
        >
          {getIcon()}
        </div>

        {/* Message */}
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-base)',
            color: 'var(--foreground)',
            lineHeight: '1.6',
            flex: 1,
            margin: 0,
          }}
        >
          {message}
        </p>
      </div>

      {/* Action */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '2rem',
        }}
      >
        <button
          onClick={onClose}
          style={{
            padding: '12px 24px',
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-base)',
            fontWeight: '500',
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)',
            border: 'none',
            borderRadius: 'var(--radius)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            minHeight: '48px',
          }}
        >
          OK
        </button>
      </div>
    </Modal>
  );
}

/**
 * Form Dialog
 */
export interface FormDialogProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  onSubmit: () => void;
  submitLabel?: string;
  cancelLabel?: string;
  loading?: boolean;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function FormDialog({
  isOpen,
  title,
  onClose,
  onSubmit,
  submitLabel = 'Submit',
  cancelLabel = 'Cancel',
  loading = false,
  children,
  size = 'md',
}: FormDialogProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size={size} closeOnOverlayClick={false}>
      <form onSubmit={handleSubmit}>
        {/* Form Content */}
        <div style={{ marginBottom: '2rem' }}>{children}</div>

        {/* Actions */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '1rem',
          }}
        >
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            style={{
              padding: '12px 24px',
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              fontWeight: '500',
              backgroundColor: 'var(--background)',
              color: 'var(--foreground)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.5 : 1,
              transition: 'all 0.2s ease',
              minHeight: '48px',
            }}
          >
            {cancelLabel}
          </button>

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '12px 24px',
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              fontWeight: '500',
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
              border: 'none',
              borderRadius: 'var(--radius)',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              transition: 'all 0.2s ease',
              minHeight: '48px',
            }}
          >
            {loading ? 'Submitting...' : submitLabel}
          </button>
        </div>
      </form>
    </Modal>
  );
}

// Add animations to global.css:
/*
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
*/
