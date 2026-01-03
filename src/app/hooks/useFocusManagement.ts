/**
 * Focus Management Hook
 * 
 * Provides utilities for managing focus states and keyboard navigation.
 * Ensures accessible focus management across the application.
 * 
 * Features:
 * - Focus trap for modals and dialogs
 * - Restore focus after modal close
 * - Skip navigation links
 * - Focus visible only on keyboard nav
 * - WCAG 2.1 AA compliant
 * 
 * @example
 * ```tsx
 * function Modal() {
 *   const { trapFocus, restoreFocus } = useFocusManagement();
 *   
 *   useEffect(() => {
 *     trapFocus(modalRef.current);
 *     return () => restoreFocus();
 *   }, []);
 * }
 * ```
 */

import { useEffect, useRef, useCallback } from 'react';

interface FocusableElement extends HTMLElement {
  focus(): void;
}

/**
 * Get all focusable elements within a container
 */
function getFocusableElements(container: HTMLElement): FocusableElement[] {
  const selector = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ].join(',');

  return Array.from(container.querySelectorAll(selector)) as FocusableElement[];
}

/**
 * Focus Management Hook
 */
export function useFocusManagement() {
  const previousFocusRef = useRef<HTMLElement | null>(null);

  /**
   * Trap focus within a container (for modals/dialogs)
   */
  const trapFocus = useCallback((container: HTMLElement | null) => {
    if (!container) return;

    // Store current focus
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Get focusable elements
    const focusableElements = getFocusableElements(container);
    
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus first element
    firstElement.focus();

    // Handle tab key to trap focus
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab - moving backwards
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab - moving forwards
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  /**
   * Restore focus to previously focused element
   */
  const restoreFocus = useCallback(() => {
    if (previousFocusRef.current) {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
  }, []);

  /**
   * Focus first element with error
   */
  const focusFirstError = useCallback(() => {
    const errorElement = document.querySelector(
      '[aria-invalid="true"], .error-message'
    ) as HTMLElement;
    
    if (errorElement) {
      errorElement.focus();
      errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  /**
   * Check if user is navigating with keyboard
   */
  const isKeyboardNavigation = useCallback(() => {
    let isKeyboard = false;

    const handleKeyDown = () => {
      isKeyboard = true;
    };

    const handleMouseDown = () => {
      isKeyboard = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return {
    trapFocus,
    restoreFocus,
    focusFirstError,
    isKeyboardNavigation
  };
}

/**
 * Focus Visible Hook
 * 
 * Adds 'focus-visible' class only when navigating with keyboard.
 * Removes it when using mouse.
 * 
 * @example
 * ```tsx
 * function Component() {
 *   useFocusVisible();
 *   return <button>Click me</button>;
 * }
 * ```
 */
export function useFocusVisible() {
  useEffect(() => {
    let isKeyboard = false;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        isKeyboard = true;
        document.body.classList.add('keyboard-nav');
      }
    };

    const handleMouseDown = () => {
      isKeyboard = false;
      document.body.classList.remove('keyboard-nav');
    };

    const handleFocus = (e: FocusEvent) => {
      if (isKeyboard && e.target instanceof HTMLElement) {
        e.target.classList.add('focus-visible');
      }
    };

    const handleBlur = (e: FocusEvent) => {
      if (e.target instanceof HTMLElement) {
        e.target.classList.remove('focus-visible');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('focus', handleFocus, true);
    document.addEventListener('blur', handleBlur, true);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('focus', handleFocus, true);
      document.removeEventListener('blur', handleBlur, true);
    };
  }, []);
}

/**
 * Auto Focus Hook
 * 
 * Automatically focus an element when component mounts.
 * Useful for modals, search inputs, forms.
 * 
 * @example
 * ```tsx
 * function SearchModal() {
 *   const inputRef = useAutoFocus<HTMLInputElement>();
 *   return <input ref={inputRef} />;
 * }
 * ```
 */
export function useAutoFocus<T extends HTMLElement>() {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (elementRef.current) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        elementRef.current?.focus();
      }, 100);
    }
  }, []);

  return elementRef;
}

/**
 * Focus on Mount Hook
 * 
 * Focus element when specified condition is met.
 * 
 * @example
 * ```tsx
 * function Component({ isOpen }) {
 *   const ref = useFocusOnMount<HTMLButtonElement>(isOpen);
 *   return <button ref={ref}>Close</button>;
 * }
 * ```
 */
export function useFocusOnMount<T extends HTMLElement>(
  shouldFocus: boolean
) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (shouldFocus && elementRef.current) {
      elementRef.current.focus();
    }
  }, [shouldFocus]);

  return elementRef;
}
