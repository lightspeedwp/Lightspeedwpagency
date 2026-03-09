/**
 * LazyPatternExample Component
 * 
 * Example implementation of lazy-loaded pattern using useLazyPattern hook
 * 
 * This demonstrates the complete pattern:
 * 1. Use useLazyPattern hook
 * 2. Show placeholder when not visible
 * 3. Use React.lazy + Suspense for actual pattern
 * 4. Show skeleton while loading
 * 
 * Design System Compliance:
 * - All components use CSS variables
 * - All animations respect prefers-reduced-motion
 * - Font families use var(--font-primary)
 * 
 * @example
 * ```tsx
 * // In a template
 * <LazyPatternExample />
 * ```
 * 
 * @see /src/app/hooks/useLazyPattern.ts
 * @see /reports/2026-03/phase-3-step-4-task-4-1-plan.md
 */

import { lazy, Suspense } from 'react';
import { useLazyPattern } from '../../hooks/useLazyPattern';
import { PatternSkeleton } from './PatternSkeleton';
import { PatternPlaceholder } from './PatternPlaceholder';

/**
 * Lazy-loaded pattern component
 * In production, this would be your actual pattern (e.g., TestimonialPattern)
 */
const LazyPattern = lazy(() => 
  // Simulate loading delay (remove in production)
  new Promise<{ default: React.ComponentType }>(resolve => {
    setTimeout(() => {
      resolve({
        default: () => (
          <div style={{ 
            padding: 'var(--spacing-8)',
            backgroundColor: 'var(--background)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)'
          }}>
            <h3 style={{ 
              fontSize: 'var(--text-h3)',
              fontFamily: 'var(--font-primary)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--foreground)',
              marginBottom: 'var(--spacing-4)'
            }}>
              Pattern Loaded!
            </h3>
            <p style={{ 
              fontSize: 'var(--text-base)',
              fontFamily: 'var(--font-primary)',
              color: 'var(--foreground)',
              lineHeight: '1.6'
            }}>
              This pattern was lazy-loaded using the useLazyPattern hook.
              It only loaded when you scrolled near it, reducing initial bundle size.
            </p>
          </div>
        )
      });
    }, 1000); // Simulate network delay
  })
);

/**
 * LazyPatternExample Component
 * 
 * Demonstrates lazy-loading pattern implementation
 */
export function LazyPatternExample() {
  // Use lazy pattern hook
  const { ref, isVisible, loadingState } = useLazyPattern({
    threshold: 0.1,
    rootMargin: '200px',
    preloadOnFastConnection: true,
    debug: process.env.NODE_ENV === 'development'
  });
  
  return (
    <section ref={ref as React.RefObject<HTMLElement>}>
      {!isVisible ? (
        // Not visible yet - show placeholder to reserve space
        <PatternPlaceholder 
          minHeight="200px" 
          ariaLabel="Pattern loading"
        />
      ) : (
        // Visible - load actual pattern with Suspense
        <Suspense fallback={<PatternSkeleton lines={3} showHeader={true} />}>
          <LazyPattern />
        </Suspense>
      )}
      
      {/* Debug info (remove in production) */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{ 
          marginTop: 'var(--spacing-4)',
          padding: 'var(--spacing-4)',
          backgroundColor: 'var(--muted)',
          borderRadius: 'var(--radius)',
          fontSize: 'var(--text-sm)',
          fontFamily: 'var(--font-secondary)',
          color: 'var(--muted-foreground)'
        }}>
          <strong>Debug:</strong> Loading state: {loadingState}, Visible: {isVisible ? 'Yes' : 'No'}
        </div>
      )}
    </section>
  );
}