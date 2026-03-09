/**
 * LazyFeatureComparison Component
 * 
 * Lazy-loading wrapper for FeatureComparison pattern.
 * Loads feature comparison table only when it enters the viewport.
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
 * <LazyFeatureComparison features={features} />
 * ```
 * 
 * @see /src/app/components/patterns/FeatureComparison.tsx
 * @see /src/app/hooks/useLazyPattern.ts
 * @see /reports/2026-03/phase-3-step-4-task-4-2-plan.md
 */

import { lazy, Suspense } from 'react';
import { useLazyPattern } from '../../../hooks/useLazyPattern';
import { PatternSkeleton } from '../PatternSkeleton';
import { PatternPlaceholder } from '../PatternPlaceholder';

// Lazy-loaded FeatureComparison component
const FeatureComparison = lazy(() => import('../FeatureComparison').then(module => ({ default: module.FeatureComparison })));

// Re-export FeatureComparison props type
export type { FeatureComparisonProps } from '../FeatureComparison';

/**
 * LazyFeatureComparison Component
 * 
 * Lazy-loading wrapper for FeatureComparison pattern
 * 
 * @param props - FeatureComparison props
 * @returns Lazy-loaded FeatureComparison
 */
export function LazyFeatureComparison(props: import('../FeatureComparison').FeatureComparisonProps) {
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
          minHeight="600px" 
          ariaLabel="Feature comparison table loading"
        />
      ) : (
        <Suspense fallback={<PatternSkeleton lines={8} showHeader={true} />}>
          <FeatureComparison {...props} />
        </Suspense>
      )}
    </div>
  );
}