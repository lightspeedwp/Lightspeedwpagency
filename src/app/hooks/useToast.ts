/**
 * useToast Hook
 *
 * Manage toast notifications
 * Simple API for showing success/error/warning/info messages
 *
 * Features:
 * - Add toast notifications
 * - Auto-dismiss
 * - Manual dismiss
 * - Toast queue
 * - TypeScript support
 *
 * Usage:
 * ```tsx
 * const { showToast, toasts, removeToast } = useToast();
 * 
 * showToast('Success!', 'success');
 * showToast('Error occurred', 'error');
 * showToast('Warning', 'warning', 10000);
 * ```
 */

import { useState, useCallback } from 'react';
import { ToastItem } from '../components/ui/ToastContainer';

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback(
    (
      message: string,
      variant: 'success' | 'error' | 'warning' | 'info' = 'info',
      duration: number = 5000
    ) => {
      const id = `toast-${Date.now()}-${Math.random()}`;
      const newToast: ToastItem = {
        id,
        message,
        variant,
        duration,
      };

      setToasts((prev) => [...prev, newToast]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const clearToasts = useCallback(() => {
    setToasts([]);
  }, []);

  return {
    toasts,
    showToast,
    removeToast,
    clearToasts,
  };
};
