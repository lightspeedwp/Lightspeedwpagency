/**
 * Vertical Process Steps Pattern
 * 
 * WordPress pattern: lsx-design/content/vertical-process-steps
 * 
 * Displays a vertical list of numbered process steps in card format.
 * Different from ProcessSteps which displays horizontally.
 * 
 * @see {@link /guidelines/patterns/VerticalProcessSteps.md}
 */

import type { UniversalIcon } from '../../utils/icon-map';

export interface VerticalProcessStep {
  /** Step number */
  step: number;
  /** Step icon */
  icon: UniversalIcon;
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
  return (
    <div>
      {/* Header */}
      {(title || description) && (
        <div className="vertical-process-steps__header">
          {title && (
            <h2 className="vertical-process-steps__title">
              {title}
            </h2>
          )}

          {description && (
            <p className="vertical-process-steps__description">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Steps List */}
      <div className={`vertical-process-steps__list vertical-process-steps__list--gap-${gap}`}>
        {steps.map((step) => {
          const Icon = step.icon;
          
          return (
            <div
              key={step.step}
              className="vertical-process-steps__item"
            >
              {/* Badge */}
              <div
                className="vertical-process-steps__badge"
                style={{
                  width: `${badgeSize}px`,
                  height: `${badgeSize}px`,
                  backgroundColor: badgeBackground,
                }}
              >
                <Icon size={iconSize} style={{ color: 'var(--color-white)' }} />
              </div>

              {/* Content */}
              <div className="vertical-process-steps__content">
                <h3 className="vertical-process-steps__step-title">
                  {showStepPrefix && `Step ${step.step}: `}{step.title}
                </h3>
                
                <p className="vertical-process-steps__step-description">
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