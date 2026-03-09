/**
 * LazyNewsletterSignup Component
 * 
 * Lazy-loading wrapper for NewsletterSignup pattern.
 * Loads newsletter form only when it enters the viewport.
 * 
 * Design System Compliance:
 * - All placeholder/skeleton styles use CSS variables
 * - Animation respects prefers-reduced-motion
 * - Font families use var(--font-primary)
 * 
 * Performance:
 * - Reduces initial bundle size (~2KB gzipped)
 * - Progressive enhancement for below-the-fold content
 * - Better UX on slow connections
 * 
 * Usage:
 * ```tsx
 * <LazyNewsletterSignup />
 * ```
 * 
 * @see /src/app/components/patterns/NewsletterSignup.tsx
 * @see /src/app/hooks/useLazyPattern.ts
 * @see /reports/2026-03/phase-3-step-4-task-4-2-plan.md
 */

import { lazy, Suspense } from 'react';
import { useLazyPattern } from '../../../hooks/useLazyPattern';
import { PatternSkeleton } from '../PatternSkeleton';
import { PatternPlaceholder } from '../PatternPlaceholder';

// Lazy-loaded NewsletterSignup component
const NewsletterSignup = lazy(() => import('../NewsletterSignup').then(module => ({ default: module.NewsletterSignup })));

// Re-export NewsletterSignup props type
export type { NewsletterSignupProps } from '../NewsletterSignup';

/**
 * LazyNewsletterSignup Component
 * 
 * Lazy-loading wrapper for NewsletterSignup pattern
 * 
 * @param props - NewsletterSignup props
 * @returns Lazy-loaded NewsletterSignup
 */
export function LazyNewsletterSignup(props: import('../NewsletterSignup').NewsletterSignupProps) {
  const { ref, isVisible } = useLazyPattern({
    threshold: 0.1,
    rootMargin: '200px',
    preloadOnFastConnection: true,
    debug: process.env.NODE_ENV === 'development'
  });
  
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      {!isVisible ? (
        <PatternPlaceholder 
          minHeight="200px" 
          ariaLabel="Newsletter signup form loading"
        />
      ) : (
        <Suspense fallback={<PatternSkeleton lines={2} showHeader={true} />}>
          <NewsletterSignup {...props} />
        </Suspense>
      )}
    </div>
  );
}