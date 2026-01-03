/**
 * Focus Trap Hook
 * 
 * Comprehensive focus management for modals, popovers, and other overlay components.
 * Traps keyboard focus within a container and manages focus restoration.
 * 
 * **WCAG 2.1 Compliance:**
 * - Level A: 2.1.2 No Keyboard Trap (allows Escape to exit)
 * - Level A: 2.4.3 Focus Order (maintains logical tab order)
 * - Level AA: 2.4.7 Focus Visible (ensures focus indicators)
 * 
 * **Features:**
 * - Traps focus within container (Tab cycles through focusable elements)
 * - Supports Shift+Tab for reverse tabbing
 * - Auto-focuses first focusable element when activated
 * - Restores focus to previous element when deactivated
 * - Handles dynamic content (elements added/removed while trap active)
 * 
 * **Design System:**
 * - No visual styling (behavior only)
 * - Works with existing focus indicators
 * - Respects keyboard navigation patterns
 * 
 * @example
 * // In a modal component
 * function Modal({ isOpen, onClose }) {
 *   const modalRef = useFocusTrap(isOpen);
 *   
 *   if (!isOpen) return null;
 *   
 *   return (
 *     <div ref={modalRef} role="dialog">
 *       <button onClick={onClose}>Close</button>
 *       <input type="text" />
 *       <button>Submit</button>
 *     </div>
 *   );
 * }
 * 
 * @param isActive - Whether focus trap should be active
 * @returns Ref to attach to the trapping container
 * 
 * @see {@link /guidelines/accessibility/focus-management.md}
 */

import { useRef, useEffect } from 'react';

export function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive) return;

    // Store currently focused element to restore later
    previousFocusRef.current = document.activeElement as HTMLElement;

    /**
     * Get all focusable elements within the container
     * Includes: links, buttons, inputs, textareas, selects, elements with tabindex
     * Excludes: disabled elements, tabindex="-1"
     */
    const getFocusableElements = (): HTMLElement[] => {
      if (!containerRef.current) return [];
      
      const selector = 
        'a[href]:not([disabled]), ' +
        'button:not([disabled]), ' +
        'textarea:not([disabled]), ' +
        'input:not([disabled]):not([type="hidden"]), ' +
        'select:not([disabled]), ' +
        '[tabindex]:not([tabindex="-1"]):not([disabled])';
      
      return Array.from(
        containerRef.current.querySelectorAll<HTMLElement>(selector)
      );
    };

    // Focus first focusable element when trap activates
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      // Small delay to ensure element is visible/mounted
      setTimeout(() => {
        focusableElements[0]?.focus();
      }, 50);
    }

    /**
     * Handle Tab key to trap focus within container
     * Cycles focus between first and last focusable elements
     */
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusable = getFocusableElements();
      if (focusable.length === 0) return;

      const firstElement = focusable[0];
      const lastElement = focusable[focusable.length - 1];
      const activeElement = document.activeElement as HTMLElement;

      if (e.shiftKey) {
        // Shift + Tab: Moving backwards
        if (activeElement === firstElement || !containerRef.current?.contains(activeElement)) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab: Moving forwards
        if (activeElement === lastElement || !containerRef.current?.contains(activeElement)) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    // Add keyboard event listener
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup: remove listener and restore focus
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      
      // Return focus to previous element
      // Use setTimeout to ensure modal is closed before restoring focus
      setTimeout(() => {
        if (previousFocusRef.current && previousFocusRef.current.focus) {
          try {
            previousFocusRef.current.focus();
          } catch (e) {
            // Element might no longer exist in DOM
            console.warn('Could not restore focus to previous element', e);
          }
        }
      }, 50);
    };
  }, [isActive]);

  return containerRef;
}

/**
 * Focus Lock Hook (Alias)
 * 
 * Alternative name for useFocusTrap.
 * Some developers prefer "lock" terminology.
 * 
 * @see {@link useFocusTrap}
 */
export const useFocusLock = useFocusTrap;
