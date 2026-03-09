/**
 * LazyPricingTable Component
 * 
 * Lazy-loading wrapper for PricingTable pattern.
 * Loads pricing table only when it enters the viewport.
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
 * <LazyPricingTable plans={pricingPlans} />
 * ```
 * 
 * @see /src/app/components/patterns/PricingTable.tsx
 * @see /src/app/hooks/useLazyPattern.ts
 * @see /reports/2026-03/phase-3-step-4-task-4-2-plan.md
 */

import { lazy, Suspense } from 'react';
import { useLazyPattern } from '../../../hooks/useLazyPattern';
import { PatternSkeleton } from '../PatternSkeleton';
import { PatternPlaceholder } from '../PatternPlaceholder';

// Lazy-loaded PricingTable component
const PricingTable = lazy(() => import('../PricingTable').then(module => ({ default: module.PricingTable })));

// Re-export PricingTable props type
export type { PricingTableProps } from '../PricingTable';

/**
 * LazyPricingTable Component
 * 
 * Lazy-loading wrapper for PricingTable pattern
 * 
 * @param props - PricingTable props
 * @returns Lazy-loaded PricingTable
 */
export function LazyPricingTable(props: import('../PricingTable').PricingTableProps) {
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
          ariaLabel="Pricing table loading"
        />
      ) : (
        <Suspense fallback={<PatternSkeleton lines={6} showHeader={true} />}>
          <PricingTable {...props} />
        </Suspense>
      )}
    </div>
  );
}