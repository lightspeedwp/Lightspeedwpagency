/**
 * Route Announcer Component
 * 
 * Non-WordPress utility component for accessibility
 * Category: Utility
 * 
 * Announces page navigation changes to screen readers using aria-live region.
 * This non-visual component significantly improves the navigation experience
 * for users with assistive technologies.
 * 
 * **WCAG 2.1 Compliance:**
 * - Level A: 2.4.1 Bypass Blocks
 * - Level AA: 2.4.2 Page Titled
 * - Level AA: 4.1.3 Status Messages
 * 
 * **Design System:**
 * - Component is visually hidden (screen reader only)
 * - No visual styling needed
 * - Uses semantic HTML with proper ARIA attributes
 * 
 * **Usage:**
 * Place once at the top level of your application:
 * 
 * @example
 * function App() {
 *   return (
 *     <>
 *       <RouteAnnouncer />
 *       <SkipLink />
 *       <SiteHeader />
 *       // ... rest of app
 *     </>
 *   );
 * }
 * 
 * @see {@link /guidelines/accessibility/screen-readers.md}
 * @see {@link /guidelines/accessibility/live-regions.md}
 */

import { useState, useEffect } from 'react';
import { useLocation } from '@/app/contexts/NavigationContext';

export function RouteAnnouncer() {
  const [announcement, setAnnouncement] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Get page title from document
    const pageTitle = document.title || 'Page';
    
    // Create announcement message
    const message = `Navigated to ${pageTitle}`;
    setAnnouncement(message);
    
    // Clear announcement after screen reader has time to read it
    // This prevents the announcement from being read again if user navigates back
    const timer = setTimeout(() => {
      setAnnouncement('');
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'absolute',
        left: '-10000px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap'
      }}
    >
      {announcement}
    </div>
  );
}