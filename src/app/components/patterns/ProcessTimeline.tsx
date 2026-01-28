/**
 * Process Timeline Pattern
 * 
 * WordPress Pattern: lsx-design/content/process-timeline
 * 
 * A vertical timeline showing step-by-step process flow.
 * Maps to WordPress Group block with nested Column blocks.
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @see /guidelines/patterns/ProcessTimeline.md
 */

import { Check, LucideIcon } from 'lucide-react';
import React from 'react';

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
    <div className="w-full">
      {/* Section Header */}
      {(heading || description) && (
        <div className="text-center mb-12">
          {heading && (
            <h2
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--foreground)',
                marginBottom: description ? '16px' : '0',
              }}
            >
              {heading}
            </h2>
          )}
          {description && (
            <p
              style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-lg)',
                color: 'var(--muted-foreground)',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              {description}
            </p>
          )}
        </div>
      )}

      {/* Timeline */}
      <div className={isVertical ? 'space-y-0' : 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'}>
        {steps.map((step, index) => {
          const Icon = step.icon || Check;
          const isLast = index === steps.length - 1;

          return (
            <div
              key={step.id}
              className={isVertical ? 'relative' : ''}
              style={{
                display: 'flex',
                gap: isVertical ? '24px' : '0',
                paddingBottom: isVertical && !isLast ? '48px' : '0',
              }}
            >
              {/* Vertical Timeline: Left side with icon and connector */}
              {isVertical && (
                <div className="relative flex flex-col items-center" style={{ flexShrink: 0 }}>
                  {/* Icon Circle */}
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      zIndex: 2,
                    }}
                  >
                    <Icon size={28} style={{ color: 'var(--primary-foreground)' }} />
                  </div>

                  {/* Connector Line */}
                  {!isLast && (
                    <div
                      style={{
                        width: '2px',
                        flex: 1,
                        backgroundColor: 'var(--border)',
                        marginTop: '8px',
                        marginBottom: '8px',
                      }}
                    />
                  )}
                </div>
              )}

              {/* Content */}
              <div className={isVertical ? 'flex-1 pt-2' : 'text-center'}>
                {/* Horizontal Timeline: Icon at top */}
                {!isVertical && (
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px',
                    }}
                  >
                    <Icon size={28} style={{ color: 'var(--primary-foreground)' }} />
                  </div>
                )}

                {/* Step Number Badge */}
                {showNumbers && (
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '12px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-small)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--primary)',
                        backgroundColor: 'var(--primary-soft)',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      Step {step.number}
                    </span>
                    {showDuration && step.duration && (
                      <span
                        style={{
                          fontFamily: 'var(--font-secondary)',
                          fontSize: 'var(--text-small)',
                          color: 'var(--muted-foreground)',
                        }}
                      >
                        {step.duration}
                      </span>
                    )}
                  </div>
                )}

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h4)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    marginBottom: '12px',
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-secondary)',
                    fontSize: 'var(--text-base)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)',
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
