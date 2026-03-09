/**
 * PatternSkeleton Component
 * 
 * Loading skeleton for lazy-loaded patterns.
 * Shows animated placeholder while pattern loads.
 * 
 * Design System Compliance:
 * - All colors use CSS variables (var(--muted), var(--background), var(--border))
 * - Animation respects prefers-reduced-motion
 * - Spacing uses var(--spacing-*) tokens
 * - Border radius uses var(--radius*) tokens
 * - NO hardcoded values
 * 
 * Usage:
 * ```tsx
 * <Suspense fallback={<PatternSkeleton />}>
 *   <LazyPattern />
 * </Suspense>
 * ```
 * 
 * @see /reports/2026-03/phase-3-step-4-task-4-1-plan.md
 * @see /src/styles/patterns/pattern-skeleton.css
 */

import '@/styles/patterns/pattern-skeleton.css';

export interface PatternSkeletonProps {
  /**
   * Number of content lines to show
   * @default 3
   */
  lines?: number;
  
  /**
   * Show header placeholder
   * @default true
   */
  showHeader?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * PatternSkeleton Component
 * 
 * @param props - Component props
 * @returns Loading skeleton element
 */
export function PatternSkeleton({ 
  lines = 3, 
  showHeader = true,
  className = '' 
}: PatternSkeletonProps) {
  return (
    <div 
      className={`pattern-skeleton ${className}`}
      role="status" 
      aria-label="Loading pattern"
    >
      {showHeader && (
        <div className="pattern-skeleton__header"></div>
      )}
      
      <div className="pattern-skeleton__content">
        {Array.from({ length: lines }).map((_, index) => (
          <div 
            key={index}
            className={`pattern-skeleton__line ${
              index === lines - 1 ? 'pattern-skeleton__line--short' : ''
            }`}
          />
        ))}
      </div>
      
      <span className="sr-only">Loading...</span>
    </div>
  );
}
