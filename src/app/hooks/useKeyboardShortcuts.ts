/**
 * Keyboard Shortcuts Hook
 * 
 * Provides global keyboard shortcut functionality.
 * Improves power user experience and accessibility.
 * 
 * Features:
 * - Customizable shortcuts
 * - Modifier key support (Ctrl, Alt, Shift)
 * - Accessible (doesn't interfere with screen readers)
 * - Auto-cleanup on unmount
 * 
 * @example
 * ```tsx
 * useKeyboardShortcuts([
 *   {
 *     key: '/',
 *     action: () => focusSearch(),
 *     description: 'Focus search'
 *   },
 *   {
 *     key: 'k',
 *     ctrl: true,
 *     action: () => openCommandPalette(),
 *     description: 'Open command palette'
 *   }
 * ]);
 * ```
 */

import { useEffect } from 'react';

export interface KeyboardShortcut {
  /** Key to trigger (e.g., '/', 'k', 'Escape') */
  key: string;
  /** Require Ctrl/Cmd key */
  ctrl?: boolean;
  /** Require Alt key */
  alt?: boolean;
  /** Require Shift key */
  shift?: boolean;
  /** Action to perform */
  action: () => void;
  /** Human-readable description */
  description: string;
  /** Disable in input fields (default: true) */
  disableInInputs?: boolean;
}

export function useKeyboardShortcuts(shortcuts: KeyboardShortcut[]) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if we're in an input field
      const target = e.target as HTMLElement;
      const isInput = 
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable;

      shortcuts.forEach(({ 
        key, 
        ctrl, 
        alt, 
        shift, 
        action, 
        disableInInputs = true 
      }) => {
        // Skip if in input field and shortcut is disabled there
        if (isInput && disableInInputs) {
          return;
        }

        // Check modifier keys
        const ctrlMatch = ctrl ? e.ctrlKey || e.metaKey : !e.ctrlKey && !e.metaKey;
        const altMatch = alt ? e.altKey : !e.altKey;
        const shiftMatch = shift ? e.shiftKey : !e.shiftKey;

        // Check if all conditions match
        if (
          e.key === key &&
          ctrlMatch &&
          altMatch &&
          shiftMatch
        ) {
          e.preventDefault();
          action();
        }
      });
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
}

/**
 * Format shortcut for display
 * 
 * @example
 * ```tsx
 * formatShortcut({ key: 'k', ctrl: true, shift: true })
 * // Returns: "Ctrl + Shift + K"
 * ```
 */
export function formatShortcut(shortcut: Omit<KeyboardShortcut, 'action' | 'description'>): string {
  const parts: string[] = [];

  if (shortcut.ctrl) {
    // Use Cmd on Mac, Ctrl on other platforms
    const isMac = typeof navigator !== 'undefined' && navigator.platform.includes('Mac');
    parts.push(isMac ? '⌘' : 'Ctrl');
  }

  if (shortcut.alt) {
    parts.push('Alt');
  }

  if (shortcut.shift) {
    parts.push('Shift');
  }

  // Format key name
  const keyName = shortcut.key === ' ' 
    ? 'Space' 
    : shortcut.key.length === 1 
      ? shortcut.key.toUpperCase() 
      : shortcut.key;

  parts.push(keyName);

  return parts.join(' + ');
}
