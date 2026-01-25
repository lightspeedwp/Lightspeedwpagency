/**
 * Timeline Pattern
 * 
 * WordPress pattern: lsx-design/content/timeline
 * 
 * Displays chronological events, process steps, or milestones with vertical timeline.
 * Commonly used in about pages (company history) and service pages (process steps).
 * 
 * **Usage:**
 * ```tsx
 * <Timeline
 *   items={[
 *     { year: '2003', title: 'Founded', description: 'Company established...' },
 *     { year: '2010', title: 'Expansion', description: 'Opened new office...' }
 *   ]}
 *   variant="default"
 * />
 * ```
 * 
 * @see {@link /guidelines/patterns/Timeline.md}
 */

import { LucideIcon } from 'lucide-react';

export interface TimelineItem {
  /** Year or step number */
  year?: string;
  /** Step number (for process timelines) */
  step?: number;
  /** Event/step title */
  title: string;
  /** Event/step description */
  description: string;
  /** Optional icon for the timeline dot */
  icon?: LucideIcon;
  /** Optional custom color for the dot */
  dotColor?: string;
}

export interface TimelineProps {
  /** Array of timeline items */
  items: TimelineItem[];
  /** Visual variant */
  variant?: 'default' | 'process' | 'minimal' | 'cards';
  /** Dot size */
  dotSize?: 'sm' | 'md' | 'lg';
  /** Line color override */
  lineColor?: string;
  /** Max width constraint */
  maxWidth?: '3xl' | '4xl' | '5xl' | 'none';
}

export function Timeline({
  items,
  variant = 'default',
  dotSize = 'lg',
  lineColor,
  maxWidth = '4xl'
}: TimelineProps) {
  // Dot size mapping
  const dotSizeMap = {
    sm: { width: '48px', height: '48px', fontSize: 'var(--text-sm)' },
    md: { width: '56px', height: '56px', fontSize: 'var(--text-base)' },
    lg: { width: '64px', height: '64px', fontSize: 'var(--text-base)' }
  };

  const dotStyles = dotSizeMap[dotSize];

  // Max width classes
  const maxWidthClass = maxWidth !== 'none' ? `wp-max-w-${maxWidth}` : '';

  return (
    <div className={maxWidthClass}>
      <div style={{ position: 'relative' }}>
        {/* Timeline Vertical Line */}
        <div
          style={{
            position: 'absolute',
            left: variant === 'minimal' ? '16px' : '32px',
            top: 0,
            bottom: 0,
            width: '2px',
            backgroundColor: lineColor || 'var(--border-soft)',
            zIndex: 0
          }}
        />

        {/* Timeline Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
          {items.map((item, index) => {
            const Icon = item.icon;
            const displayText = item.year || (item.step ? `${item.step}` : `${index + 1}`);

            return (
              <div 
                key={index} 
                style={{ 
                  position: 'relative', 
                  paddingLeft: variant === 'minimal' ? '60px' : '80px' 
                }}
              >
                {/* Timeline Dot/Icon */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    ...dotStyles,
                    borderRadius: variant === 'process' ? 'var(--radius-lg)' : 'var(--radius-full)',
                    backgroundColor: item.dotColor || 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: dotStyles.fontSize,
                    fontFamily: 'var(--font-primary)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--primary-foreground)',
                    zIndex: 1,
                    border: variant === 'cards' ? '3px solid var(--background)' : 'none',
                    boxShadow: variant === 'cards' ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none'
                  }}
                >
                  {Icon ? <Icon size={24} /> : displayText}
                </div>

                {/* Content Card */}
                {variant === 'cards' ? (
                  <div
                    style={{
                      padding: 'var(--spacing-6)',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(4px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
                      e.currentTarget.style.borderColor = 'var(--primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'var(--border-soft)';
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: variant === 'minimal' ? 'var(--text-lg)' : 'var(--text-xl)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--foreground)',
                        marginBottom: 'var(--spacing-2)'
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-base)',
                        lineHeight: '1.6',
                        color: 'var(--muted-foreground)',
                        margin: 0
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                ) : (
                  // Default/Process/Minimal variant
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: variant === 'minimal' ? 'var(--text-lg)' : 'var(--text-xl)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--foreground)',
                        marginBottom: 'var(--spacing-2)'
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-base)',
                        lineHeight: '1.6',
                        color: 'var(--muted-foreground)',
                        margin: 0
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
