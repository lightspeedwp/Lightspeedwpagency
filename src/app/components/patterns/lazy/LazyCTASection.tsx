/**
 * LazyCTASection Component
 * 
 * Lazy-loading wrapper for CTASection pattern.
 * Loads call-to-action section only when it enters the viewport.
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
 * <LazyCTASection 
 *   title="Ready to start?"
 *   description="Get in touch"
 *   buttonText="Contact Us"
 *   buttonHref="/contact"
 * />
 * ```
 * 
 * @see /src/app/components/patterns/CTASection.tsx
 * @see /src/app/hooks/useLazyPattern.ts
 * @see /reports/2026-03/phase-3-step-4-task-4-2-plan.md
 */

import { lazy, Suspense } from 'react';
import { useLazyPattern } from '../../../hooks/useLazyPattern';
import { PatternSkeleton } from '../PatternSkeleton';
import { PatternPlaceholder } from '../PatternPlaceholder';

// Lazy-loaded CTASection component
const CTASection = lazy(() => import('../CTASection').then(module => ({ default: module.CTASection })));

// Re-export CTASection props type
export type { CTASectionProps } from '../CTASection';

/**
 * LazyCTASection Component
 * 
 * Lazy-loading wrapper for CTASection pattern
 * 
 * @param props - CTASection props
 * @returns Lazy-loaded CTASection
 */
export function LazyCTASection(props: import('../CTASection').CTASectionProps) {
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
          minHeight="250px" 
          ariaLabel="Call-to-action section loading"
        />
      ) : (
        <Suspense fallback={<PatternSkeleton lines={3} showHeader={true} />}>
          <CTASection {...props} />
        </Suspense>
      )}
    </div>
  );
}