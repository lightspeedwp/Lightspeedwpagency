/**
 * Process Steps Pattern
 * 
 * WordPress pattern: lsx-design/content/process-steps
 * 
 * Displays horizontal process steps with numbered badges.
 * Commonly used on services pages to show workflow or methodology.
 * 
 * @see {@link /guidelines/patterns/ProcessSteps.md}
 */

import type { UniversalIcon } from '../../utils/icon-map';


export interface ProcessStep {
  /** Step number */
  step: number;
  /** Step title */
  title: string;
  /** Step description */
  description: string;
  /** Optional icon instead of number */
  icon?: UniversalIcon;
}

export interface ProcessStepsProps {
  /** Array of process steps */
  steps: ProcessStep[];
  /** Number of columns (3-6, default: 5) */
  columns?: 3 | 4 | 5 | 6;
  /** Visual variant */
  variant?: 'default' | 'cards' | 'minimal';
  /** Badge style */
  badgeStyle?: 'circle' | 'square' | 'rounded';
  /** Badge color class */
  badgeColorClass?: string;
  /** Max width constraint */
  maxWidth?: '4xl' | '5xl' | '6xl' | 'none';
}

export function ProcessSteps({
  steps,
  columns = 5,
  variant = 'default',
  badgeStyle = 'circle',
  badgeColorClass,
  maxWidth = '6xl'
}: ProcessStepsProps) {
  // Max width class
  const maxWidthClass = maxWidth !== 'none' ? `wp-max-w-${maxWidth}` : '';
  
  // Grid column class
  const gridClass = `process-steps__grid--${columns}-cols`;

  return (
    <div className={`process-steps ${maxWidthClass}`}>
      <div
        className={`process-steps__grid ${gridClass} ${variant === 'cards' ? 'wp-gap-6' : 'wp-gap-8'}`}
      >
        {steps.map((step) => {
          const Icon = step.icon;
          const alignment = variant === 'minimal' ? 'left' : 'centered';
          const badgeShape = `process-step__badge--${badgeStyle}`;
          
          return (
            <div
              key={step.step}
              className={`process-step process-step--${variant} process-step--${alignment}`}
            >
              {/* Step Badge */}
              <div
                className={`process-step__badge ${badgeShape} ${badgeColorClass || ''}`}
              >
                {Icon ? <Icon size={variant === 'minimal' ? 20 : 28} /> : step.step}
              </div>

              {/* Step Title */}
              <h3 className="process-step__title">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="process-step__description">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
