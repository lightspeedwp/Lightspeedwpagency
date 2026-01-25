/**
 * Vertical Process Steps Pattern
 * 
 * WordPress pattern: lsx-design/content/vertical-process-steps
 * 
 * Displays a vertical list of numbered process steps in card format.
 * Different from ProcessSteps which displays horizontally.
 * 
 * **Usage:**
 * ```tsx
 * <VerticalProcessSteps
 *   title="A dynamic path to content generation"
 *   description="Our repeated and proven process gets you measured results."
 *   steps={[
 *     {
 *       step: 1,
 *       icon: Search,
 *       title: 'Content Audit',
 *       description: 'Conduct a thorough assessment...'
 *     }
 *   ]}
 * />
 * ```
 */

import { LucideIcon } from 'lucide-react';

export interface VerticalProcessStep {
  /** Step number */
  step: number;
  /** Step icon */
  icon: LucideIcon;
  /** Step title */
  title: string;
  /** Step description */
  description: string;
}

export interface VerticalProcessStepsProps {
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Array of process steps */
  steps: VerticalProcessStep[];
  /** Step badge size (default: 40) */
  badgeSize?: number;
  /** Icon size (default: 20) */
  iconSize?: number;
  /** Gap between steps */
  gap?: 'sm' | 'md' | 'lg';
  /** Badge background color */
  badgeBackground?: string;
  /** Show step prefix (default: true) */
  showStepPrefix?: boolean;
}

export function VerticalProcessSteps({
  title,
  description,
  steps,
  badgeSize = 40,
  iconSize = 20,
  gap = 'md',
  badgeBackground = 'var(--primary)',
  showStepPrefix = true
}: VerticalProcessStepsProps) {
  // Gap spacing
  const gapValue = {
    sm: 'var(--spacing-4)',
    md: 'var(--spacing-6)',
    lg: 'var(--spacing-8)'
  }[gap];

  return (
    <div>
      {/* Header */}
      {(title || description) && (
        <div style={{ marginBottom: 'var(--spacing-8)' }}>
          {title && (
            <h2
              className="font-primary text-h1 font-bold tracking-tight"
              style={{
                lineHeight: '1.2',
                marginBottom: 'var(--spacing-4)',
                color: 'var(--foreground)'
              }}
            >
              {title}
            </h2>
          )}

          {description && (
            <p
              className="font-primary text-base leading-relaxed"
              style={{
                color: 'var(--muted-foreground)'
              }}
            >
              {description}
            </p>
          )}
        </div>
      )}

      {/* Steps List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: gapValue }}>
        {steps.map((step) => {
          const Icon = step.icon;
          
          return (
            <div
              key={step.step}
              style={{
                display: 'flex',
                gap: 'var(--spacing-4)',
                alignItems: 'flex-start',
                padding: 'var(--spacing-5)',
                backgroundColor: 'var(--card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-soft)'
              }}
            >
              {/* Badge */}
              <div
                style={{
                  width: `${badgeSize}px`,
                  height: `${badgeSize}px`,
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: badgeBackground,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Icon size={iconSize} style={{ color: 'white' }} />
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3
                  className="font-primary text-base font-semibold"
                  style={{
                    color: 'var(--foreground)',
                    marginBottom: 'var(--spacing-1)'
                  }}
                >
                  {showStepPrefix && `Step ${step.step}: `}{step.title}
                </h3>
                
                <p
                  className="font-primary text-small leading-snug"
                  style={{
                    color: 'var(--muted-foreground)'
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
