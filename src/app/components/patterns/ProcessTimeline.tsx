/**
 * Process Timeline Pattern
 * 
 * WordPress Pattern: lsx-design/content/process-timeline
 * 
 * A vertical timeline showing step-by-step process flow.
 * 
 * @see /guidelines/patterns/ProcessTimeline.md
 */

import { Check, LucideIcon } from 'lucide-react';
import React from 'react';
import '@/styles/patterns/process-timeline.css';

export interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
  icon?: LucideIcon;
  duration?: string;
}

export interface ProcessTimelineProps {
  /** Section heading */
  heading?: string;
  /** Section description */
  description?: string;
  /** Array of process steps */
  steps: ProcessStep[];
  /** Show step numbers (default: true) */
  showNumbers?: boolean;
  /** Show duration badges (default: true) */
  showDuration?: boolean;
  /** Orientation (default: 'vertical') */
  orientation?: 'vertical' | 'horizontal';
}

export function ProcessTimeline({
  heading = "Our Process",
  description,
  steps,
  showNumbers = true,
  showDuration = true,
  orientation = 'vertical',
}: ProcessTimelineProps) {
  const isVertical = orientation === 'vertical';

  return (
    <div className="process-timeline">
      {/* Section Header */}
      {(heading || description) && (
        <div className="process-timeline__header">
          {heading && (
            <h2 className={`process-timeline__title ${description ? 'process-timeline__title--with-desc' : ''}`}>
              {heading}
            </h2>
          )}
          {description && (
            <p className="process-timeline__desc">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Timeline */}
      <div className={isVertical ? 'process-timeline__vertical' : 'process-timeline__grid'}>
        {steps.map((step, index) => {
          const Icon = step.icon || Check;
          const isLast = index === steps.length - 1;

          // Step wrapper class
          const stepClasses = isVertical ? 'process-step--vertical' : 'process-step--horizontal';

          return (
            <div
              key={step.id}
              className={stepClasses}
            >
              {/* Vertical Timeline: Left side with icon and connector */}
              {isVertical && (
                <div className="process-step__sidebar">
                  {/* Icon Circle */}
                  <div className="process-step__icon-circle">
                    <Icon size={28} />
                  </div>

                  {/* Connector Line */}
                  {!isLast && (
                    <div className="process-step__line" />
                  )}
                </div>
              )}

              {/* Content */}
              <div className="process-step__content">
                {/* Horizontal Timeline: Icon at top */}
                {!isVertical && (
                  <div className="process-step__icon-circle--horizontal">
                    <Icon size={28} />
                  </div>
                )}

                {/* Step Number Badge */}
                {showNumbers && (
                  <div className="process-step__badge">
                    <span className="process-step__number">
                      Step {step.number}
                    </span>
                    {showDuration && step.duration && (
                      <span className="process-step__duration">
                        {step.duration}
                      </span>
                    )}
                  </div>
                )}

                {/* Title */}
                <h3 className="process-step__title">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="process-step__desc">
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
