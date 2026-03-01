/**
 * ToastContainer Component
 *
 * Container for managing multiple toast notifications
 * Positioned at bottom-right of screen
 *
 * Features:
 * - Stack management
 * - Auto-dismiss
 * - Manual close
 * - Smooth animations
 * - Max stack limit
 *
 * Design System:
 * - 100% CSS variables
 * - BEM naming (.toast-container)
 */

import { Toast, ToastProps } from './Toast';

export interface ToastItem extends Omit<ToastProps, 'onClose'> {
  id: string;
}

export interface ToastContainerProps {
  toasts: ToastItem[];
  onRemoveToast: (id: string) => void;
  maxToasts?: number;
}

export const ToastContainer = ({
  toasts,
  onRemoveToast,
  maxToasts = 5,
}: ToastContainerProps) => {
  const visibleToasts = toasts.slice(-maxToasts);

  return (
    <div className="toast-container" role="status" aria-live="polite">
      {visibleToasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => onRemoveToast(toast.id)}
        />
      ))}
    </div>
  );
};
