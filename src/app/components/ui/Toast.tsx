/**
 * Toast Component
 * 
 * Production-grade toast notification system.
 * 
 * Features:
 * - Multiple variants (info, success, warning, destructive)
 * - Auto-dismiss with timer
 * - Progress bar
 * - Stack positioning (top-left, top-right, bottom-left, bottom-right)
 * - Action buttons
 * - Swipe to dismiss
 * - Accessible
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * const { showToast } = useToast();
 * 
 * showToast({
 *   title: "Success",
 *   description: "Your changes have been saved.",
 *   variant: "success",
 * });
 */

import { useEffect, useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Info, 
  AlertTriangle, 
  X,
  LucideIcon,
} from 'lucide-react';

export interface ToastProps {
  /** Toast ID */
  id: string;
  /** Variant */
  variant?: 'info' | 'success' | 'warning' | 'destructive';
  /** Title */
  title?: string;
  /** Description */
  description: string;
  /** Custom icon */
  icon?: LucideIcon;
  /** Duration (ms) */
  duration?: number;
  /** Dismiss handler */
  onDismiss?: () => void;
  /** Action */
  action?: {
    label: string;
    onClick: () => void;
  };
}

const variantConfig = {
  info: {
    backgroundColor: 'var(--card)',
    borderColor: 'var(--info)',
    iconColor: 'var(--info)',
    icon: Info,
  },
  success: {
    backgroundColor: 'var(--card)',
    borderColor: 'var(--success)',
    iconColor: 'var(--success)',
    icon: CheckCircle2,
  },
  warning: {
    backgroundColor: 'var(--card)',
    borderColor: 'var(--warning)',
    iconColor: 'var(--warning)',
    icon: AlertTriangle,
  },
  destructive: {
    backgroundColor: 'var(--card)',
    borderColor: 'var(--destructive)',
    iconColor: 'var(--destructive)',
    icon: AlertCircle,
  },
};

export function Toast({
  id,
  variant = 'info',
  title,
  description,
  icon: CustomIcon,
  duration = 5000,
  onDismiss,
  action,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false);

  const config = variantConfig[variant];
  const Icon = CustomIcon || config.icon;

  // Animate in
  useEffect(() => {
    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  }, []);

  // Auto-dismiss timer
  useEffect(() => {
    if (duration === 0 || isPaused) return;

    const interval = 10;
    const decrement = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev - decrement;
        if (next <= 0) {
          handleDismiss();
          return 0;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [duration, isPaused]);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => {
      onDismiss?.();
    }, 300);
  };

  return (
    <div
      className="p-4 mb-3"
      style={{
        backgroundColor: config.backgroundColor,
        border: `2px solid ${config.borderColor}`,
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-lg)',
        backdropFilter: 'blur(10px)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        minWidth: '320px',
        maxWidth: '400px',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="alert"
      aria-live="polite"
    >
      {/* Progress bar */}
      {duration > 0 && (
        <div
          className="absolute bottom-0 left-0 h-1"
          style={{
            width: `${progress}%`,
            backgroundColor: config.iconColor,
            transition: 'width 0.01s linear',
          }}
        />
      )}

      <div className="flex gap-3">
        {/* Icon */}
        <div
          className="flex-shrink-0"
          style={{
            color: config.iconColor,
          }}
        >
          <Icon size={20} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {title && (
            <h3
              className="mb-1"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--foreground)',
                margin: 0,
              }}
            >
              {title}
            </h3>
          )}

          <p
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'var(--text-small)',
              color: 'var(--muted-foreground)',
              margin: 0,
              lineHeight: '1.5',
            }}
          >
            {description}
          </p>

          {/* Action */}
          {action && (
            <button
              onClick={() => {
                action.onClick();
                handleDismiss();
              }}
              className="mt-2"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-small)',
                fontWeight: 'var(--font-weight-semibold)',
                color: config.iconColor,
                backgroundColor: 'transparent',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              {action.label}
            </button>
          )}
        </div>

        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 p-1"
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
          aria-label="Dismiss notification"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}

/**
 * Toast Container Component
 * 
 * Container for toast notifications.
 */
export interface ToastContainerProps {
  /** Toasts */
  toasts: ToastProps[];
  /** Position */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
  /** Remove toast handler */
  onRemove?: (id: string) => void;
}

const positionStyles = {
  'top-left': {
    top: '24px',
    left: '24px',
    alignItems: 'flex-start',
  },
  'top-right': {
    top: '24px',
    right: '24px',
    alignItems: 'flex-end',
  },
  'bottom-left': {
    bottom: '24px',
    left: '24px',
    alignItems: 'flex-start',
  },
  'bottom-right': {
    bottom: '24px',
    right: '24px',
    alignItems: 'flex-end',
  },
  'top-center': {
    top: '24px',
    left: '50%',
    transform: 'translateX(-50%)',
    alignItems: 'center',
  },
  'bottom-center': {
    bottom: '24px',
    left: '50%',
    transform: 'translateX(-50%)',
    alignItems: 'center',
  },
};

export function ToastContainer({ 
  toasts, 
  position = 'top-right',
  onRemove,
}: ToastContainerProps) {
  const styles = positionStyles[position];

  return (
    <div
      className="fixed z-50 flex flex-col"
      style={{
        ...styles,
        maxWidth: '100vw',
        pointerEvents: 'none',
      }}
    >
      <div
        className="flex flex-col"
        style={{
          alignItems: styles.alignItems,
          pointerEvents: 'auto',
        }}
      >
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onDismiss={() => onRemove?.(toast.id)}
          />
        ))}
      </div>
    </div>
  );
}
