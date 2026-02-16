/**
 * SkipLink Component
 * 
 * WordPress concept: Accessibility utility (not a block)
 * Pattern: Skip navigation link (WCAG 2.1 AA requirement)
 * 
 * @see {@link /guidelines/components/SkipLink.md}
 */

import '@/styles/components/skip-link.css';

/**
 * SkipLink Component
 * 
 * Renders an accessibility skip link that appears on keyboard focus.
 * Allows users to bypass navigation and jump to main content.
 * 
 * **No props required** - This component is self-contained.
 * 
 * @returns Accessible skip navigation link
 */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link"
    >
      Skip to main content
    </a>
  );
}
