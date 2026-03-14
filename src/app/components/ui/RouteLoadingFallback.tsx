/**
 * RouteLoadingFallback Component
 * 
 * Suspense fallback for lazy-loaded routes.
 * 
 * Design System Compliance:
 * - Uses ONLY CSS variables from /src/styles/theme-*.css
 * - Background: var(--background)
 * - Spinner border: var(--muted) / var(--primary)
 * - Respects prefers-reduced-motion
 * 
 * @see /src/styles/ui/route-loading-fallback.css
 */

import '../../../styles/ui/route-loading-fallback.css';

export const RouteLoadingFallback = () => {
  return (
    <div className="route-loading">
      <div className="route-loading__spinner" role="status" aria-live="polite">
        <span className="sr-only">Loading page...</span>
      </div>
    </div>
  );
};
