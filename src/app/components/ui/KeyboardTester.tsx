/**
 * KeyboardTester Component
 *
 * Interactive keyboard navigation testing tool
 * Highlights focusable elements and tracks tab order
 *
 * Features:
 * - Tab order visualization
 * - Focus highlighting
 * - Keyboard shortcut display
 * - Interactive elements count
 *
 * Design System:
 * - 100% CSS variables
 * - BEM naming (.keyboard-tester)
 * @see /src/app/utils/icon-map.ts
 *
 * Usage:
 */

import { useState, useEffect } from 'react';
import { Keyboard, Eye, EyeSlash as EyeOff } from '@phosphor-icons/react';

export const KeyboardTester = () => {
  const [isActive, setIsActive] = useState(false);
  const [focusedElement, setFocusedElement] = useState<string | null>(null);
  const [tabIndex, setTabIndex] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    // Count focusable elements
    const focusable = document.querySelectorAll(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    setTotalElements(focusable.length);

    // Track focus
    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      const className = target.className;
      const id = target.id;

      let elementDesc = tagName;
      if (id) elementDesc += `#${id}`;
      if (className) elementDesc += `.${className.split(' ')[0]}`;

      setFocusedElement(elementDesc);

      // Find index in focusable elements
      const index = Array.from(focusable).indexOf(target);
      setTabIndex(index + 1);

      // Highlight element
      target.style.outline = '3px solid hsl(var(--primary))';
      target.style.outlineOffset = '4px';
    };

    const handleBlur = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      target.style.outline = '';
      target.style.outlineOffset = '';
    };

    document.addEventListener('focus', handleFocus, true);
    document.addEventListener('blur', handleBlur, true);

    return () => {
      document.removeEventListener('focus', handleFocus, true);
      document.removeEventListener('blur', handleBlur, true);

      // Clean up highlights
      focusable.forEach((el) => {
        (el as HTMLElement).style.outline = '';
        (el as HTMLElement).style.outlineOffset = '';
      });
    };
  }, [isActive]);

  return (
    <div className="keyboard-tester">
      <div className="keyboard-tester__header">
        <div className="keyboard-tester__title">
          <Keyboard size={20} />
          <span>Keyboard Navigation Tester</span>
        </div>

        <button
          className="keyboard-tester__toggle"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? (
            <>
              <EyeOff size={16} />
              Disable
            </>
          ) : (
            <>
              <Eye size={16} />
              Enable
            </>
          )}
        </button>
      </div>

      {isActive && (
        <div className="keyboard-tester__status">
          <div className="keyboard-tester__info">
            <span className="keyboard-tester__label">Total Interactive Elements:</span>
            <span className="keyboard-tester__value">{totalElements}</span>
          </div>

          {focusedElement && (
            <>
              <div className="keyboard-tester__info">
                <span className="keyboard-tester__label">Current Element:</span>
                <code className="keyboard-tester__element">{focusedElement}</code>
              </div>

              <div className="keyboard-tester__info">
                <span className="keyboard-tester__label">Tab Order:</span>
                <span className="keyboard-tester__value">
                  {tabIndex} / {totalElements}
                </span>
              </div>
            </>
          )}

          <div className="keyboard-tester__hint">
            💡 Press <kbd>Tab</kbd> to navigate forward, <kbd>Shift + Tab</kbd> to go back
          </div>
        </div>
      )}
    </div>
  );
};
