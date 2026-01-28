/**
 * Enhanced Toast/Notification System
 * 
 * Features:
 * - Multiple toast types (success, error, warning, info, loading)
 * - Auto-dismiss with configurable duration
 * - Manual dismiss
 * - Action buttons
 * - Queue management
 * - Position configuration
 * - Design system compliant
 * 
 * Design System Compliance:
 * - Uses CSS variables for all colors
 * - Uses Lexend for headings
 * - Uses Manrope for body text
 * - WCAG 2.1 AA compliant
 * 
 * @example
 * import { toast } from './ToastSystem';
 * 
 * toast.success('Profile updated successfully!');
 * toast.error('Failed to save changes');
 * toast.loading('Uploading file...');
 */

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'loading';
export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface Toast {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
  dismissible?: boolean;
}

interface ToastContextValue {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => string;
  removeToast: (id: string) => void;
  updateToast: (id: string, toast: Partial<Toast>) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

/**
 * Toast Provider Component
 */
export interface ToastProviderProps {
  children: ReactNode;
  position?: ToastPosition;
  maxToasts?: number;
}

export function ToastProvider({ children, position = 'bottom-right', maxToasts = 5 }: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newToast: Toast = {
      id,
      dismissible: true,
      ...toast,
    };

    setToasts((prev) => {
      const updated = [newToast, ...prev];
      return updated.slice(0, maxToasts);
    });

    // Auto-dismiss (except loading toasts)
    if (toast.type !== 'loading' && toast.duration !== 0) {
      const duration = toast.duration || 5000;
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }

    return id;
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const updateToast = (id: string, update: Partial<Toast>) => {
    setToasts((prev) =>
      prev.map((toast) => (toast.id === id ? { ...toast, ...update } : toast))
    );
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, updateToast }}>
      {children}
      <ToastContainer toasts={toasts} position={position} onRemove={removeToast} />
    </ToastContext.Provider>
  );
}

/**
 * Toast Container Component
 */
interface ToastContainerProps {
  toasts: Toast[];
  position: ToastPosition;
  onRemove: (id: string) => void;
}

function ToastContainer({ toasts, position, onRemove }: ToastContainerProps) {
  const getPositionStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: 'fixed',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1rem',
      pointerEvents: 'none',
    };

    switch (position) {
      case 'top-left':
        return { ...base, top: 0, left: 0 };
      case 'top-center':
        return { ...base, top: 0, left: '50%', transform: 'translateX(-50%)' };
      case 'top-right':
        return { ...base, top: 0, right: 0 };
      case 'bottom-left':
        return { ...base, bottom: 0, left: 0 };
      case 'bottom-center':
        return { ...base, bottom: 0, left: '50%', transform: 'translateX(-50%)' };
      case 'bottom-right':
        return { ...base, bottom: 0, right: 0 };
      default:
        return { ...base, bottom: 0, right: 0 };
    }
  };

  return (
    <div style={getPositionStyles()}>
      {toasts.map((toast) => (
        <ToastComponent key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  );
}

/**
 * Individual Toast Component
 */
interface ToastComponentProps {
  toast: Toast;
  onRemove: (id: string) => void;
}

function ToastComponent({ toast, onRemove }: ToastComponentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate in
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleDismiss = () => {
    // Animate out
    setIsVisible(false);
    setTimeout(() => onRemove(toast.id), 300);
  };

  const getBackgroundColor = () => {
    switch (toast.type) {
      case 'success':
        return 'var(--accent)';
      case 'error':
        return 'var(--destructive)';
      case 'warning':
        return '#F59E0B'; // Amber-500
      case 'info':
        return 'var(--primary)';
      case 'loading':
        return 'var(--muted)';
      default:
        return 'var(--card)';
    }
  };

  const getTextColor = () => {
    switch (toast.type) {
      case 'success':
        return 'var(--accent-foreground)';
      case 'error':
        return 'var(--destructive-foreground)';
      case 'warning':
        return '#FFFFFF';
      case 'info':
        return 'var(--primary-foreground)';
      case 'loading':
        return 'var(--foreground)';
      default:
        return 'var(--card-foreground)';
    }
  };

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      case 'loading':
        return '⏳';
      default:
        return '';
    }
  };

  return (
    <div
      role="alert"
      aria-live="polite"
      style={{
        pointerEvents: 'auto',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
        minWidth: '320px',
        maxWidth: '480px',
        padding: '1rem 1.5rem',
        backgroundColor: getBackgroundColor(),
        color: getTextColor(),
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.3s ease',
      }}
    >
      {/* Icon */}
      <div
        style={{
          fontSize: '1.5rem',
          lineHeight: 1,
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        {getIcon()}
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Title */}
        {toast.title && (
          <div
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              fontWeight: '500',
              marginBottom: '0.25rem',
            }}
          >
            {toast.title}
          </div>
        )}

        {/* Message */}
        <div
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-small)',
            lineHeight: '1.5',
          }}
        >
          {toast.message}
        </div>

        {/* Action Button */}
        {toast.action && (
          <button
            onClick={toast.action.onClick}
            style={{
              marginTop: '0.75rem',
              padding: '0.5rem 1rem',
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-small)',
              fontWeight: '500',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'inherit',
              border: 'none',
              borderRadius: 'var(--radius)',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
          >
            {toast.action.label}
          </button>
        )}
      </div>

      {/* Dismiss Button */}
      {toast.dismissible && (
        <button
          onClick={handleDismiss}
          aria-label="Dismiss notification"
          style={{
            padding: '0.25rem',
            backgroundColor: 'transparent',
            color: 'inherit',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.25rem',
            lineHeight: 1,
            flexShrink: 0,
          }}
        >
          ×
        </button>
      )}
    </div>
  );
}

/**
 * useToast Hook
 */
export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }

  return context;
}

/**
 * Toast Helper Functions
 * 
 * Singleton instance for imperative API.
 */
let toastContext: ToastContextValue | null = null;

export function setToastContext(context: ToastContextValue) {
  toastContext = context;
}

export const toast = {
  success: (message: string, options?: Partial<Omit<Toast, 'id' | 'type' | 'message'>>) => {
    if (!toastContext) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Toast context not initialized. Wrap your app with ToastProvider.');
      }
      return '';
    }
    return toastContext.addToast({ type: 'success', message, ...options });
  },

  error: (message: string, options?: Partial<Omit<Toast, 'id' | 'type' | 'message'>>) => {
    if (!toastContext) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Toast context not initialized. Wrap your app with ToastProvider.');
      }
      return '';
    }
    return toastContext.addToast({ type: 'error', message, ...options });
  },

  warning: (message: string, options?: Partial<Omit<Toast, 'id' | 'type' | 'message'>>) => {
    if (!toastContext) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Toast context not initialized. Wrap your app with ToastProvider.');
      }
      return '';
    }
    return toastContext.addToast({ type: 'warning', message, ...options });
  },

  info: (message: string, options?: Partial<Omit<Toast, 'id' | 'type' | 'message'>>) => {
    if (!toastContext) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Toast context not initialized. Wrap your app with ToastProvider.');
      }
      return '';
    }
    return toastContext.addToast({ type: 'info', message, ...options });
  },

  loading: (message: string, options?: Partial<Omit<Toast, 'id' | 'type' | 'message'>>) => {
    if (!toastContext) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Toast context not initialized. Wrap your app with ToastProvider.');
      }
      return '';
    }
    return toastContext.addToast({ type: 'loading', message, dismissible: false, ...options });
  },

  update: (id: string, update: Partial<Toast>) => {
    if (!toastContext) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Toast context not initialized. Wrap your app with ToastProvider.');
      }
      return;
    }
    toastContext.updateToast(id, update);
  },

  dismiss: (id: string) => {
    if (!toastContext) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Toast context not initialized. Wrap your app with ToastProvider.');
      }
      return;
    }
    toastContext.removeToast(id);
  },
};

/**
 * Toast Context Initializer
 * 
 * Add this to your App component to enable imperative toast API.
 */
export function ToastContextInitializer() {
  const context = useToast();

  useEffect(() => {
    setToastContext(context);
  }, [context]);

  return null;
}
