/**
 * ProgressBar Pattern Component
 *
 * Reusable progress bar with:
 * - Percentage display
 * - Label text
 * - Color variants
 * - Smooth animation
 *
 * Used in:
 * - TrainingTemplate (module progress)
 * - GettingStartedTemplate (materials checklist)
 *
 * @pattern Extracted March 18, 2026 — Template Migration Priority 3
 */

import '../../../styles/patterns/progress-bar.css';

export interface ProgressBarProps {
  /** Progress value (0-100) */
  value: number;
  /** Optional label */
  label?: string;
  /** Color variant */
  variant?: 'primary' | 'success' | 'warning' | 'accent';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Show percentage text */
  showPercentage?: boolean;
  /** Custom className */
  className?: string;
}

export function ProgressBar({
  value,
  label,
  variant = 'primary',
  size = 'md',
  showPercentage = false,
  className = '',
}: ProgressBarProps) {
  // Clamp value between 0-100
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={`progress-bar ${className}`}>
      {(label || showPercentage) && (
        <div className="progress-bar__header">
          {label && (
            <span className="progress-bar__label">{label}</span>
          )}
          {showPercentage && (
            <span className="progress-bar__percentage">{clampedValue}%</span>
          )}
        </div>
      )}
      
      <div className={`progress-bar__track progress-bar__track--${size}`}>
        <div
          className={`progress-bar__fill progress-bar__fill--${variant}`}
          style={{ width: `${clampedValue}%` }}
          role="progressbar"
          aria-valuenow={clampedValue}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={label || `${clampedValue}% complete`}
        />
      </div>
    </div>
  );
}
