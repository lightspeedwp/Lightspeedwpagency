/**
 * Process Steps Pattern
 * 
 * WordPress pattern: lsx-design/content/process-steps
 * 
 * Displays horizontal process steps with numbered badges.
 * Commonly used on services pages to show workflow or methodology.
 * 
 * **Usage:**
 * ```tsx
 * <ProcessSteps
 *   steps={[
 *     { step: 1, title: 'Discovery', description: 'We learn about your business...' },
 *     { step: 2, title: 'Planning', description: 'We create a detailed roadmap...' }
 *   ]}
 *   columns={5}
 * />
 * ```
 * 
 * @see {@link /guidelines/patterns/ProcessSteps.md}
 */

import { LucideIcon } from 'lucide-react';

export interface ProcessStep {
  /** Step number */
  step: number;
  /** Step title */
  title: string;
  /** Step description */
  description: string;
  /** Optional icon instead of number */
  icon?: LucideIcon;
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
  /** Badge color override */
  badgeColor?: string;
  /** Max width constraint */
  maxWidth?: '4xl' | '5xl' | '6xl' | 'none';
}

export function ProcessSteps({
  steps,
  columns = 5,
  variant = 'default',
  badgeStyle = 'circle',
  badgeColor,
  maxWidth = '6xl'
}: ProcessStepsProps) {
  // Grid template based on columns
  const gridTemplate = {
    3: { gridTemplateColumns: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
    4: { gridTemplateColumns: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
    5: { gridTemplateColumns: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' },
    6: { gridTemplateColumns: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' }
  }[columns];

  // Badge border radius
  const badgeRadius = {
    circle: 'var(--radius-full)',
    square: 'var(--radius)',
    rounded: 'var(--radius-lg)'
  }[badgeStyle];

  // Max width class
  const maxWidthClass = maxWidth !== 'none' ? `wp-max-w-${maxWidth}` : '';

  return (
    <div className={maxWidthClass}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: gridTemplate.gridTemplateColumns,
          gap: variant === 'cards' ? 'var(--spacing-6)' : 'var(--spacing-8)'
        }}
      >
        {steps.map((step) => {
          const Icon = step.icon;
          
          return (
            <div
              key={step.step}
              style={{
                ...(variant === 'cards' ? {
                  padding: 'var(--spacing-6)',
                  backgroundColor: 'var(--card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-soft)',
                  transition: 'all 0.3s ease'
                } : {}),
                textAlign: variant === 'minimal' ? 'left' : 'center'
              }}
              {...(variant === 'cards' ? {
                onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                },
                onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border-soft)';
                }
              } : {})}
            >
              {/* Step Badge */}
              <div
                style={{
                  width: variant === 'minimal' ? '48px' : '64px',
                  height: variant === 'minimal' ? '48px' : '64px',
                  borderRadius: badgeRadius,
                  backgroundColor: badgeColor || 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: variant === 'minimal' ? '0 0 var(--spacing-3) 0' : '0 auto var(--spacing-4)',
                  fontFamily: 'var(--font-primary)',
                  fontSize: variant === 'minimal' ? 'var(--text-lg)' : 'var(--text-h3)',
                  fontWeight: 'var(--font-weight-bold)',
                  boxShadow: variant === 'cards' ? 'none' : '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}
              >
                {Icon ? <Icon size={variant === 'minimal' ? 20 : 28} /> : step.step}
              </div>

              {/* Step Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: variant === 'minimal' ? 'var(--text-base)' : 'var(--text-base)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: 'var(--spacing-2)'
                }}
              >
                {step.title}
              </h3>

              {/* Step Description */}
              <p
                style={{
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--text-small)',
                  lineHeight: '1.5',
                  color: 'var(--muted-foreground)',
                  margin: 0
                }}
              >
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
