/**
 * LazyRelatedPosts Component
 * 
 * Lazy-loading wrapper for RelatedPosts pattern.
 * Loads related posts grid only when it enters the viewport.
 * 
 * Design System Compliance:
 * - All placeholder/skeleton styles use CSS variables
 * - Animation respects prefers-reduced-motion
 * - Font families use var(--font-primary)
 * 
 * Performance:
 * - Reduces initial bundle size (~3KB gzipped)
 * - Progressive enhancement for below-the-fold content
 * - Better UX on slow connections
 * 
 * Usage:
 * ```tsx
 * <LazyRelatedPosts posts={relatedPosts} />
 * ```
 * 
 * @see /src/app/components/patterns/RelatedPosts.tsx
 * @see /src/app/hooks/useLazyPattern.ts
 * @see /reports/2026-03/phase-3-step-4-task-4-2-plan.md
 */

import { lazy, Suspense } from 'react';
import { useLazyPattern } from '../../../hooks/useLazyPattern';
import { PatternSkeleton } from '../PatternSkeleton';
import { PatternPlaceholder } from '../PatternPlaceholder';

// Lazy-loaded RelatedPosts component
const RelatedPosts = lazy(() => import('../RelatedPosts').then(module => ({ default: module.RelatedPosts })));

// Re-export RelatedPosts props type
export type { RelatedPostsProps } from '../RelatedPosts';

/**
 * LazyRelatedPosts Component
 * 
 * Lazy-loading wrapper for RelatedPosts pattern
 * 
 * @param props - RelatedPosts props
 * @returns Lazy-loaded RelatedPosts
 */
export function LazyRelatedPosts(props: import('../RelatedPosts').RelatedPostsProps) {
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
          minHeight="500px" 
          ariaLabel="Related posts loading"
        />
      ) : (
        <Suspense fallback={<PatternSkeleton lines={6} showHeader={true} />}>
          <RelatedPosts {...props} />
        </Suspense>
      )}
    </div>
  );
}