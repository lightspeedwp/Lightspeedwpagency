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
 */

import { useState } from 'react';
import { useNavigation } from '../../../contexts/NavigationContext';
import { useKeyboardShortcuts, formatShortcut, type KeyboardShortcut } from '../../../hooks/useKeyboardShortcuts';
import { X, Keyboard } from 'lucide-react';

export function KeyboardShortcuts() {
  const { navigateTo } = useNavigation();
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
      action: () => navigateTo('/'),
      description: 'Go to homepage'
    },
    {
      key: 'b',
      action: () => navigateTo('/blog'),
      description: 'Go to blog'
    },
    {
      key: 'p',
      action: () => navigateTo('/portfolio'),
      description: 'Go to portfolio'
    },
    {
      key: 'c',
      action: () => navigateTo('/contact'),
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
          className="fixed inset-0 flex items-center justify-center p-6"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999,
            animation: 'fadeIn 0.2s ease-out'
          }}
          onClick={() => setShowHelp(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="shortcuts-title"
        >
          <div
            className="p-8"
            style={{
              backgroundColor: 'var(--card)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '80vh',
              overflow: 'auto',
              border: '1px solid var(--border-soft)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="p-2"
                  style={{
                    backgroundColor: 'var(--primary)',
                    borderRadius: 'var(--radius)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Keyboard 
                    size={24} 
                    style={{ color: 'var(--primary-foreground)' }} 
                  />
                </div>
                <h2 
                  id="shortcuts-title"
                  style={{ 
                    fontSize: 'var(--text-h3)', 
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    margin: 0
                  }}
                >
                  Keyboard Shortcuts
                </h2>
              </div>
              <button
                onClick={() => setShowHelp(false)}
                className="p-2"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: 'var(--muted-foreground)',
                  cursor: 'pointer',
                  borderRadius: 'var(--radius)',
                  transition: 'all 150ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--muted)';
                  e.currentTarget.style.color = 'var(--foreground)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--muted-foreground)';
                }}
                aria-label="Close keyboard shortcuts"
              >
                <X size={20} />
              </button>
            </div>

            {/* Shortcuts List */}
            <div className="space-y-3">
              {shortcuts.map((shortcut, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 px-4"
                  style={{
                    backgroundColor: 'var(--muted)',
                    borderRadius: 'var(--radius)',
                    border: '1px solid var(--border-soft)'
                  }}
                >
                  {/* Description */}
                  <span
                    style={{
                      fontSize: 'var(--text-base)',
                      fontFamily: 'Lexend, sans-serif',
                      color: 'var(--foreground)'
                    }}
                  >
                    {shortcut.description}
                  </span>

                  {/* Shortcut keys */}
                  <kbd
                    className="px-3 py-1"
                    style={{
                      fontSize: 'var(--text-small)',
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 'var(--font-weight-semibold)',
                      backgroundColor: 'var(--card)',
                      color: 'var(--foreground)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {formatShortcut(shortcut)}
                  </kbd>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div
              className="mt-6 pt-6"
              style={{
                borderTop: '1px solid var(--border-soft)'
              }}
            >
              <p
                style={{
                  fontSize: 'var(--text-small)',
                  fontFamily: 'Manrope, sans-serif',
                  color: 'var(--muted-foreground)',
                  textAlign: 'center',
                  margin: 0
                }}
              >
                Press <kbd style={{
                  padding: '2px 6px',
                  backgroundColor: 'var(--muted)',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 'var(--font-weight-semibold)'
                }}>Esc</kbd> or click outside to close
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
