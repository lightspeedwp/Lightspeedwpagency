/**
 * Keyboard Shortcuts Component
 * 
 * Global keyboard shortcuts for the application.
 * Also provides a help modal to show available shortcuts.
 * 
 * Features:
 * - Common shortcuts (search, navigation, help)
 * - Discoverable (Shift + ? shows help)
 * - Accessible (proper ARIA attributes)
 * - 100% design system compliant
 * 
 * @example
 * ```tsx
 * // In App.tsx or layout
 * import { KeyboardShortcuts } from './components/blocks/layout/KeyboardShortcuts';
 * 
 * <KeyboardShortcuts />
 * ```
 * @see /src/app/utils/icon-map.ts
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { useKeyboardShortcuts, formatShortcut, type KeyboardShortcut } from '@/app/hooks/useKeyboardShortcuts';
import { Keyboard, X } from '@phosphor-icons/react';

export function KeyboardShortcuts() {
  const navigate = useNavigate();
  const [showHelp, setShowHelp] = useState(false);

  // Define all keyboard shortcuts
  const shortcuts: KeyboardShortcut[] = [
    {
      key: '/',
      action: () => {
        const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
          searchInput.select();
        }
      },
      description: 'Focus search',
      disableInInputs: false
    },
    {
      key: 'Escape',
      action: () => {
        // Close modals, popovers, and blur focused elements
        const closeButtons = document.querySelectorAll('[aria-label*="Close"], [aria-label*="Dismiss"]');
        if (closeButtons.length > 0) {
          (closeButtons[0] as HTMLElement)?.click();
        } else {
          // Blur any focused element
          (document.activeElement as HTMLElement)?.blur();
        }
      },
      description: 'Close modal or blur focus',
      disableInInputs: false
    },
    {
      key: '?',
      shift: true,
      action: () => setShowHelp(true),
      description: 'Show keyboard shortcuts',
      disableInInputs: false
    },
    {
      key: 'h',
      action: () => navigate('/'),
      description: 'Go to homepage'
    },
    {
      key: 'b',
      action: () => navigate('/blog'),
      description: 'Go to blog'
    },
    {
      key: 'p',
      action: () => navigate('/portfolio'),
      description: 'Go to portfolio'
    },
    {
      key: 'c',
      action: () => navigate('/contact'),
      description: 'Go to contact'
    }
  ];

  // Register shortcuts
  useKeyboardShortcuts(shortcuts);

  return (
    <>
      {/* Help Modal */}
      {showHelp && (
        <div
          className="keyboard-shortcuts__backdrop"
          onClick={() => setShowHelp(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="shortcuts-title"
        >
          <div
            className="keyboard-shortcuts__panel"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="keyboard-shortcuts__header">
              <div className="keyboard-shortcuts__header-left">
                <div className="keyboard-shortcuts__icon-box">
                  <Keyboard 
                    size={24} 
                    className="wp-text-primary-foreground"
                  />
                </div>
                <h2 
                  id="shortcuts-title"
                  className="keyboard-shortcuts__title"
                >
                  Keyboard Shortcuts
                </h2>
              </div>
              <button
                onClick={() => setShowHelp(false)}
                className="keyboard-shortcuts__close-btn"
                aria-label="Close keyboard shortcuts"
              >
                <X size={20} />
              </button>
            </div>

            {/* Shortcuts List */}
            <div className="keyboard-shortcuts__list">
              {shortcuts.map((shortcut, index) => (
                <div
                  key={index}
                  className="keyboard-shortcuts__row"
                >
                  {/* Description */}
                  <span className="keyboard-shortcuts__description">
                    {shortcut.description}
                  </span>

                  {/* Shortcut keys */}
                  <kbd className="keyboard-shortcuts__key">
                    {formatShortcut(shortcut)}
                  </kbd>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div
              className="keyboard-shortcuts__footer"
            >
              <p
                className="keyboard-shortcuts__footer-text"
              >
                Press <kbd className="keyboard-shortcuts__footer-key">Esc</kbd> or click outside to close
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}