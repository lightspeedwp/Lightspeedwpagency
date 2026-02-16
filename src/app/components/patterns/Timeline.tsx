/**
 * Timeline Pattern
 * 
 * WordPress pattern: lsx-design/content/timeline
 * 
 * Displays chronological events, process steps, or milestones with vertical timeline.
 * Commonly used in about pages (company history) and service pages (process steps).
 * 
 * @see {@link /guidelines/patterns/Timeline.md}
 */

import { LucideIcon } from 'lucide-react';
import '@/styles/patterns/timeline.css';

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
  // Max width classes
  const maxWidthClass = maxWidth !== 'none' ? `wp-max-w-${maxWidth}` : '';
  
  // Line classes
  const lineClasses = [
    'timeline__line',
    variant === 'minimal' ? 'timeline__line--minimal' : 'timeline__line--default'
  ].filter(Boolean).join(' ');

  return (
    <div className={maxWidthClass}>
      <div className="timeline">
        {/* Timeline Vertical Line */}
        <div
          className={lineClasses}
          style={{
            backgroundColor: lineColor || 'var(--border-soft)'
          }}
        />

        {/* Timeline Items */}
        <div className="timeline__items">
          {items.map((item, index) => {
            const Icon = item.icon;
            const displayText = item.year || (item.step ? `${item.step}` : `${index + 1}`);
            
            // Item Classes
            const itemClasses = [
              'timeline__item',
              variant === 'minimal' ? 'timeline__item--minimal' : 'timeline__item--default'
            ].filter(Boolean).join(' ');

            // Dot Classes
            const dotClasses = [
              'timeline__dot',
              `timeline__dot--${dotSize}`,
              variant === 'process' ? 'timeline__dot--rounded' : 'timeline__dot--circle',
              variant === 'cards' ? 'timeline__dot--cards' : ''
            ].filter(Boolean).join(' ');

            // Title Classes
            const titleClasses = [
              'timeline__title',
              variant === 'minimal' ? 'timeline__title--md' : 'timeline__title--lg'
            ].filter(Boolean).join(' ');

            return (
              <div key={index} className={itemClasses}>
                {/* Timeline Dot/Icon */}
                <div
                  className={dotClasses}
                  style={{
                    backgroundColor: item.dotColor || 'var(--primary)'
                  }}
                >
                  {Icon ? <Icon size={24} /> : displayText}
                </div>

                {/* Content */}
                {variant === 'cards' ? (
                  <div className="timeline__card">
                    <h3 className={titleClasses}>
                      {item.title}
                    </h3>
                    <p className="timeline__description">
                      {item.description}
                    </p>
                  </div>
                ) : (
                  // Default/Process/Minimal variant
                  <div>
                    <h3 className={titleClasses}>
                      {item.title}
                    </h3>
                    <p className="timeline__description">
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
