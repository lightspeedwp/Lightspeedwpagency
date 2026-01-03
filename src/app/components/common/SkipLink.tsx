/**
 * SkipLink Component
 * 
 * WordPress concept: Accessibility utility (not a block)
 * Pattern: Skip navigation link (WCAG 2.1 AA requirement)
 * 
 * Provides a keyboard-accessible link that allows users to bypass navigation
 * and jump directly to the main content area of the page.
 * 
 * **Purpose:**
 * - Enable keyboard users to skip repetitive navigation
 * - Required for WCAG 2.1 AA compliance (Success Criterion 2.4.1)
 * - Improve screen reader user experience
 * - Reduce tab stops to reach main content
 * 
 * **Behavior:**
 * - Visually hidden by default (positioned off-screen)
 * - Becomes visible when focused via keyboard (Tab key)
 * - Positioned at top-left corner (16px, 16px)
 * - Links to element with id="main-content"
 * - Disappears when focus is lost (onBlur)
 * 
 * **Accessibility:**
 * - WCAG 2.1 AA Compliance: Required bypass mechanism
 * - Keyboard accessible (first Tab stop on page)
 * - Focus visible with 2px outline ring
 * - High contrast colors (primary/primary-foreground)
 * - Screen reader accessible
 * - No JavaScript required for functionality
 * 
 * **Design System:**
 * - Background: var(--primary) - Primary brand color
 * - Text: var(--primary-foreground) - High contrast text
 * - Font: Lexend, sans-serif - Design system primary font
 * - Font size: var(--text-base) - 16px default
 * - Font weight: var(--font-weight-medium) - 500
 * - Border radius: var(--radius) - 4px rounded corners
 * - Focus ring: var(--ring) - Focus indicator color
 * 
 * **Implementation:**
 * - Must be first interactive element in DOM
 * - Requires target element with id="main-content"
 * - Positioned absolutely at top of page
 * - Z-index: 9999 (ensures visibility above all content)
 * 
 * **WordPress theme.json mapping:**
 * ```json
 * "custom": {
 *   "accessibility": {
 *     "skipLink": {
 *       "enabled": true,
 *       "text": "Skip to main content",
 *       "target": "#main-content"
 *     }
 *   }
 * }
 * ```
 * 
 * **Usage in WordPress:**
 * - Include in header.html template part
 * - Place before site header navigation
 * - Ensure <main id="main-content"> exists
 * - First focusable element in tab order
 * 
 * **WCAG 2.1 Requirements:**
 * - 2.4.1 Bypass Blocks (Level A): Mechanism to bypass navigation
 * - 2.4.7 Focus Visible (Level AA): Visible focus indicator
 * - 4.1.2 Name, Role, Value (Level A): Accessible name present
 * 
 * **Performance:**
 * - No HTTP requests (inline styles)
 * - No external dependencies
 * - Lightweight: <1KB
 * - Instant rendering
 * - No layout shift (positioned absolutely)
 * 
 * @example
 * // Basic usage (place at top of App.tsx)
 * import { SkipLink } from './components/common/SkipLink';
 * 
 * function App() {
 *   return (
 *     <>
 *       <SkipLink />
 *       <SiteHeader />
 *       <main id="main-content">
 *         {/* Page content *\/}
 *       </main>
 *     </>
 *   );
 * }
 * 
 * @example
 * // WordPress header.html template part
 * <!-- wp:html -->
 * <a href="#main-content" class="skip-link">Skip to main content</a>
 * <!-- /wp:html -->
 * 
 * <!-- wp:template-part {"slug":"header"} /-->
 * 
 * @example
 * // Testing skip link functionality
 * 1. Load page in browser
 * 2. Press Tab key once (skip link should appear)
 * 3. Press Enter (page should scroll to main content)
 * 4. Tab again (skip link should disappear)
 * 
 * @example
 * // Verifying WCAG compliance
 * - Use keyboard only (no mouse)
 * - Tab to skip link (should be first focusable)
 * - Verify visible focus indicator (outline ring)
 * - Verify high contrast (4.5:1 minimum)
 * - Test with screen reader (should announce link)
 * 
 * @example
 * // Custom main content ID
 * // If using different ID, update href attribute
 * <a href="#primary-content">Skip to main content</a>
 * <main id="primary-content">...</main>
 * 
 * @see {@link https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html}
 * @see {@link /guidelines/components/SkipLink.md}
 */

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
  /**
   * Skip link element
   * 
   * Positioned off-screen by default using absolute positioning.
   * Moves to visible position (16px, 16px) when focused.
   * 
   * **States:**
   * - Default: Hidden off-screen using clip/clipPath
   * - Focused: Visible at top-left (16px, 16px)
   * - Blurred: Returns to hidden state
   * 
   * **Styling:**
   * - Uses CSS variables for theming
   * - Primary brand colors for emphasis
   * - High contrast for visibility
   * - Focus ring for keyboard navigation
   */
  return (
    <>
      <style>{`
        .skip-link {
          /* Hidden state (default) - Screen reader accessible */
          position: absolute;
          left: -10000px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(1px, 1px, 1px, 1px);
          clip-path: inset(50%);
          white-space: nowrap;
          z-index: 9999;
          
          /* Visible state styles */
          padding: 12px 24px;
          background-color: var(--primary);
          color: var(--primary-foreground);
          font-family: Lexend, sans-serif;
          font-size: var(--text-base);
          font-weight: var(--font-weight-medium);
          text-decoration: none;
          border-radius: var(--radius);
          transition: all 0.2s ease;
        }
        
        .skip-link:focus {
          /* Show link when focused */
          left: 16px;
          top: 16px;
          width: auto;
          height: auto;
          overflow: visible;
          clip: auto;
          clip-path: none;
          white-space: nowrap;
          outline: 2px solid var(--ring);
          outline-offset: 2px;
          box-shadow: var(--shadow-lg);
        }
      `}</style>
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>
    </>
  );
}