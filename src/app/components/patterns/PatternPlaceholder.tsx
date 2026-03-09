/**
 * PatternPlaceholder Component
 * 
 * Reserves space for lazy-loaded patterns to prevent layout shift (CLS).
 * Minimal styling - just background to indicate loading area.
 * 
 * Design System Compliance:
 * - All colors use CSS variables (var(--muted))
 * - Border radius uses var(--radius*) tokens
 * - NO hardcoded values
 * - No animations (just placeholder)
 * 
 * Usage:
 * ```tsx
 * {!isVisible && <PatternPlaceholder minHeight="400px" />}
 * {isVisible && <Pattern />}
 * ```
 * 
 * @see /reports/2026-03/phase-3-step-4-task-4-1-plan.md
 * @see /src/styles/patterns/pattern-placeholder.css
 */

import '@/styles/patterns/pattern-placeholder.css';

export interface PatternPlaceholderProps {
  /**
   * Minimum height to reserve space
   * Should match approximate height of actual pattern
   * @default '400px'
   */
  minHeight?: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Accessible label for screen readers
   * @default 'Content loading'
   */
  ariaLabel?: string;
}

/**
 * PatternPlaceholder Component
 * 
 * Reserves space to prevent layout shift when pattern loads
 * 
 * @param props - Component props
 * @returns Placeholder element
 */
export function PatternPlaceholder({ 
  minHeight = '400px',
  className = '',
  ariaLabel = 'Content loading'
}: PatternPlaceholderProps) {
  return (
    <div 
      className={`pattern-placeholder ${className}`}
      style={{ minHeight }}
      role="status"
      aria-label={ariaLabel}
      aria-hidden="true"
    >
      <span className="sr-only">{ariaLabel}</span>
    </div>
  );
}
