/**
 * Toast Component
 *
 * Notification toast with auto-dismiss
 * For success, error, warning, and info messages
 *
 * Features:
 * - Auto-dismiss timer
 * - Manual close button
 * - 4 variants (success, error, warning, info)
 * - Icon support
 * - Progress bar
 * - Smooth animations
 *
 * Design System:
 * - 100% CSS variables
 * - BEM naming (.toast)
 * - Dedicated CSS file
 *
 * @see /guidelines/components/Toast.md
 */

import { useEffect, useState } from 'react';
import { X, CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';

export interface ToastProps {
  /** Toast message */
  message: string;
  /** Toast variant */
  variant?: 'success' | 'error' | 'warning' | 'info';
  /** Auto-dismiss duration (ms), 0 to disable */
  duration?: number;
  /** Close callback */
  onClose: () => void;
  /** Show close button */
  showClose?: boolean;
}

export const Toast = ({
  message,
  variant = 'info',
  duration = 5000,
  onClose,
  showClose = true,
}: ToastProps) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (duration === 0) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev - (100 / (duration / 100));
        if (newProgress <= 0) {
          clearInterval(interval);
          onClose();
          return 0;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [duration, onClose]);

  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertTriangle,
    info: Info,
  };

  const Icon = icons[variant];

  return (
    <div className={`toast toast--${variant}`}>
      <div className="toast__content">
        <div className="toast__icon">
          <Icon size={20} />
        </div>

        <div className="toast__message">{message}</div>

        {showClose && (
          <button
            className="toast__close"
            onClick={onClose}
            aria-label="Close notification"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {duration > 0 && (
        <div className="toast__progress">
          <div
            className="toast__progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};
