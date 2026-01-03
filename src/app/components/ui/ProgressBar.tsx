/**
 * Progress Bar Component
 * 
 * Production-grade progress indicator with multiple variants.
 * 
 * Features:
 * - Linear progress bar
 * - Circular progress (donut chart)
 * - Step progress indicator
 * - Percentage display
 * - Label support
 * - Multiple color variants
 * - Size variants
 * - Animated transitions
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <ProgressBar
 *   value={65}
 *   label="Upload Progress"
 *   showPercentage
 * />
 */

import { Check } from 'lucide-react';

export interface ProgressBarProps {
  /** Progress value (0-100) */
  value: number;
  /** Max value */
  max?: number;
  /** Label */
  label?: string;
  /** Show percentage */
  showPercentage?: boolean;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Variant */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'destructive';
  /** Show label inline */
  inline?: boolean;
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showPercentage = false,
  size = 'md',
  variant = 'primary',
  inline = false,
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  // Size styles
  const heights = {
    sm: '6px',
    md: '8px',
    lg: '12px',
  };

  // Variant colors
  const colors = {
    default: 'var(--foreground)',
    primary: 'var(--primary)',
    success: 'var(--success)',
    warning: 'var(--warning)',
    destructive: 'var(--destructive)',
  };

  const ContainerComponent = inline ? 'div' : 'div';
  const containerClasses = inline ? 'flex items-center gap-4' : 'space-y-2';

  return (
    <ContainerComponent className={containerClasses}>
      {/* Label and percentage */}
      {(label || showPercentage) && (
        <div className={`flex items-center justify-between ${inline ? '' : 'mb-2'}`}>
          {label && (
            <span
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--foreground)',
              }}
            >
              {label}
            </span>
          )}

          {showPercentage && (
            <span
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--foreground)',
              }}
            >
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}

      {/* Progress bar */}
      <div
        className={inline ? 'flex-1' : ''}
        style={{
          width: '100%',
          height: heights[size],
          backgroundColor: 'var(--muted)',
          borderRadius: 'var(--radius-full)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: '100%',
            backgroundColor: colors[variant],
            borderRadius: 'var(--radius-full)',
            transition: 'width 0.3s ease',
          }}
        />
      </div>
    </ContainerComponent>
  );
}

/**
 * Circular Progress Component
 * 
 * Donut chart style progress indicator.
 */
export interface CircularProgressProps {
  /** Progress value (0-100) */
  value: number;
  /** Max value */
  max?: number;
  /** Size in pixels */
  size?: number;
  /** Stroke width */
  strokeWidth?: number;
  /** Show percentage */
  showPercentage?: boolean;
  /** Variant */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'destructive';
  /** Label */
  label?: string;
}

export function CircularProgress({
  value,
  max = 100,
  size = 120,
  strokeWidth = 8,
  showPercentage = true,
  variant = 'primary',
  label,
}: CircularProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  // Variant colors
  const colors = {
    default: 'var(--foreground)',
    primary: 'var(--primary)',
    success: 'var(--success)',
    warning: 'var(--warning)',
    destructive: 'var(--destructive)',
  };

  return (
    <div className="inline-flex flex-col items-center gap-2">
      {/* SVG Circle */}
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          style={{
            transform: 'rotate(-90deg)',
          }}
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--muted)"
            strokeWidth={strokeWidth}
          />

          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={colors[variant]}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 0.3s ease',
            }}
          />
        </svg>

        {/* Percentage text */}
        {showPercentage && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-h4)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--foreground)',
            }}
          >
            {Math.round(percentage)}%
          </div>
        )}
      </div>

      {/* Label */}
      {label && (
        <span
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--muted-foreground)',
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

/**
 * Step Progress Component
 * 
 * Multi-step progress indicator.
 */
export interface Step {
  /** Step label */
  label: string;
  /** Step description */
  description?: string;
}

export interface StepProgressProps {
  /** Steps */
  steps: Step[];
  /** Current step (0-based index) */
  currentStep: number;
  /** Variant */
  variant?: 'default' | 'primary' | 'success';
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
}

export function StepProgress({
  steps,
  currentStep,
  variant = 'primary',
  orientation = 'horizontal',
}: StepProgressProps) {
  // Variant colors
  const colors = {
    default: 'var(--foreground)',
    primary: 'var(--primary)',
    success: 'var(--success)',
  };

  if (orientation === 'vertical') {
    return (
      <div className="space-y-4">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isPending = index > currentStep;

          return (
            <div key={index} className="flex gap-4">
              {/* Step indicator */}
              <div className="flex flex-col items-center">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: isCompleted || isCurrent ? colors[variant] : 'var(--muted)',
                    color: isCompleted || isCurrent ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
                    borderRadius: '50%',
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-semibold)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {isCompleted ? <Check size={20} /> : index + 1}
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div
                    style={{
                      width: '2px',
                      height: '100%',
                      minHeight: '40px',
                      backgroundColor: isCompleted ? colors[variant] : 'var(--muted)',
                      transition: 'all 0.2s ease',
                    }}
                  />
                )}
              </div>

              {/* Step content */}
              <div className="flex-1 pb-8">
                <h3
                  className="mb-1"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: isCurrent ? 'var(--foreground)' : 'var(--muted-foreground)',
                    margin: 0,
                  }}
                >
                  {step.label}
                </h3>

                {step.description && (
                  <p
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)',
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Horizontal orientation
  return (
    <div className="flex items-center gap-2">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        const isPending = index > currentStep;

        return (
          <div key={index} className="flex items-center flex-1">
            {/* Step */}
            <div className="flex flex-col items-center gap-2 flex-1">
              {/* Step indicator */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: isCompleted || isCurrent ? colors[variant] : 'var(--muted)',
                  color: isCompleted || isCurrent ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
                  borderRadius: '50%',
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-semibold)',
                  transition: 'all 0.2s ease',
                }}
              >
                {isCompleted ? <Check size={20} /> : index + 1}
              </div>

              {/* Step label */}
              <div className="text-center">
                <p
                  className="mb-1"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-small)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: isCurrent ? 'var(--foreground)' : 'var(--muted-foreground)',
                    margin: 0,
                  }}
                >
                  {step.label}
                </p>

                {step.description && (
                  <p
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)',
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                )}
              </div>
            </div>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div
                style={{
                  height: '2px',
                  flex: 1,
                  backgroundColor: isCompleted ? colors[variant] : 'var(--muted)',
                  transition: 'all 0.2s ease',
                  marginTop: '-40px',
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
