/**
 * Dialog Component
 * 
 * Production-grade modal dialog.
 * 
 * Features:
 * - Modal overlay
 * - Focus trap
 * - Keyboard navigation (escape to close)
 * - Header with title and close button
 * - Footer with actions
 * - Scrollable content
 * - Multiple sizes
 * - Accessible
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <Dialog
 *   isOpen={isOpen}
 *   onClose={onClose}
 *   title="Confirm Delete"
 *   description="Are you sure?"
 *   onConfirm={handleDelete}
 * />
 */

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Button } from '../blocks/design/Buttons';

export interface DialogProps {
  /** Is open */
  isOpen: boolean;
  /** Close handler */
  onClose: () => void;
  /** Title */
  title: string;
  /** Description */
  description?: string;
  /** Children (content) */
  children?: React.ReactNode;
  /** Size */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Show close button */
  showCloseButton?: boolean;
  /** Close on overlay click */
  closeOnOverlayClick?: boolean;
  /** Close on escape */
  closeOnEscape?: boolean;
  /** Confirm button */
  confirmButton?: {
    label: string;
    onClick: () => void;
    variant?: 'default' | 'destructive';
    loading?: boolean;
  };
  /** Cancel button */
  cancelButton?: {
    label: string;
    onClick?: () => void;
  };
  /** Custom footer */
  footer?: React.ReactNode;
  /** Prevent body scroll */
  preventScroll?: boolean;
}

const sizeStyles = {
  sm: { maxWidth: '400px' },
  md: { maxWidth: '600px' },
  lg: { maxWidth: '800px' },
  xl: { maxWidth: '1000px' },
  full: { maxWidth: '90vw' },
};

export function Dialog({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  confirmButton,
  cancelButton,
  footer,
  preventScroll = true,
}: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Lock body scroll
  useEffect(() => {
    if (!isOpen || !preventScroll) return;

    previousFocusRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      previousFocusRef.current?.focus();
    };
  }, [isOpen, preventScroll]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeOnEscape, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !dialogRef.current) return;

    const dialog = dialogRef.current;
    const focusableElements = dialog.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
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

    dialog.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      dialog.removeEventListener('keydown', handleTabKey);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCancel = () => {
    cancelButton?.onClick?.();
    onClose();
  };

  const handleConfirm = () => {
    confirmButton?.onClick();
    // Note: Dialog stays open on confirm - parent should close it
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(4px)',
      }}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      aria-describedby={description ? 'dialog-description' : undefined}
    >
      <div
        ref={dialogRef}
        className="relative w-full"
        style={{
          ...sizeStyles[size],
          backgroundColor: 'var(--card)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-2xl)',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-start justify-between p-6 pb-4"
          style={{
            borderBottom: '1px solid var(--border-soft)',
          }}
        >
          <div className="flex-1 pr-4">
            <h2
              id="dialog-title"
              className="mb-1"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-h4)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--foreground)',
                margin: 0,
              }}
            >
              {title}
            </h2>

            {description && (
              <p
                id="dialog-description"
                style={{
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--muted-foreground)',
                  margin: 0,
                  lineHeight: '1.5',
                }}
              >
                {description}
              </p>
            )}
          </div>

          {showCloseButton && (
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--muted-foreground)',
                border: 'none',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--muted)';
                e.currentTarget.style.color = 'var(--foreground)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--muted-foreground)';
              }}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Content */}
        <div
          className="flex-1 p-6 overflow-y-auto"
          style={{
            fontFamily: 'var(--font-secondary)',
            fontSize: 'var(--text-base)',
            color: 'var(--foreground)',
            lineHeight: '1.6',
          }}
        >
          {children}
        </div>

        {/* Footer */}
        {(footer || confirmButton || cancelButton) && (
          <div
            className="flex items-center justify-end gap-3 p-6 pt-4"
            style={{
              borderTop: '1px solid var(--border-soft)',
            }}
          >
            {footer ? (
              footer
            ) : (
              <>
                {cancelButton && (
                  <Button
                    onClick={handleCancel}
                    variant="outline"
                  >
                    {cancelButton.label}
                  </Button>
                )}

                {confirmButton && (
                  <Button
                    onClick={handleConfirm}
                    variant={confirmButton.variant || 'default'}
                    disabled={confirmButton.loading}
                  >
                    {confirmButton.loading ? (
                      <>
                        <div
                          style={{
                            width: '16px',
                            height: '16px',
                            border: '2px solid var(--primary-foreground)',
                            borderTopColor: 'transparent',
                            borderRadius: '50%',
                            animation: 'spin 0.6s linear infinite',
                          }}
                        />
                        Loading...
                      </>
                    ) : (
                      confirmButton.label
                    )}
                  </Button>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Confirm Dialog Component
 * 
 * Pre-configured confirmation dialog.
 */
export interface ConfirmDialogProps {
  /** Is open */
  isOpen: boolean;
  /** Close handler */
  onClose: () => void;
  /** Confirm handler */
  onConfirm: () => void;
  /** Title */
  title: string;
  /** Message */
  message: string;
  /** Confirm label */
  confirmLabel?: string;
  /** Cancel label */
  cancelLabel?: string;
  /** Destructive action */
  destructive?: boolean;
  /** Loading state */
  loading?: boolean;
}

export function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  destructive = false,
  loading = false,
}: ConfirmDialogProps) {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      description={message}
      size="sm"
      confirmButton={{
        label: confirmLabel,
        onClick: onConfirm,
        variant: destructive ? 'destructive' : 'default',
        loading,
      }}
      cancelButton={{
        label: cancelLabel,
        onClick: onClose,
      }}
    />
  );
}

/**
 * Alert Dialog Component
 * 
 * Pre-configured alert dialog (single button).
 */
export interface AlertDialogProps {
  /** Is open */
  isOpen: boolean;
  /** Close handler */
  onClose: () => void;
  /** Title */
  title: string;
  /** Message */
  message: string;
  /** Button label */
  buttonLabel?: string;
}

export function AlertDialog({
  isOpen,
  onClose,
  title,
  message,
  buttonLabel = 'OK',
}: AlertDialogProps) {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      description={message}
      size="sm"
      confirmButton={{
        label: buttonLabel,
        onClick: onClose,
      }}
    />
  );
}
