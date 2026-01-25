/**
 * Solutions Detail Grid Pattern Component
 * 
 * WordPress Pattern: lsx-design/content/solutions-detail-grid
 * 
 * Displays a grid of detailed solution cards with icons, descriptions,
 * and feature lists. Includes hover effects for enhanced interactivity.
 * 
 * **Design System Compliance:**
 * - Typography: var(--font-primary) Lexend
 * - Spacing: CSS variables (--spacing-*)
 * - Colors: Semantic color variables
 * - Grid: WordPress utility classes (.wp-grid-*-cols)
 * - Interactions: Smooth hover transitions
 * 
 * **WordPress Mapping:**
 * - Group Block → Container
 * - Columns Block → Grid layout
 * - List Block → Features list
 * 
 * @example
 * ```tsx
 * import { SolutionsDetailGrid } from '../patterns/SolutionsDetailGrid';
 * import { Calendar, MapPin, CreditCard, CheckCircle } from 'lucide-react';
 * 
 * <SolutionsDetailGrid
 *   badge="OUR SOLUTIONS"
 *   title="Complete Tour Operator Solutions"
 *   description="Everything you need to run a successful tour operation online"
 *   solutions={[
 *     {
 *       id: 'booking-system',
 *       icon: Calendar,
 *       title: 'Advanced Booking System',
 *       description: 'Complete booking management with real-time availability, pricing rules, and automated confirmations.',
 *       features: [
 *         'Real-time availability calendar',
 *         'Dynamic pricing & seasonal rates',
 *         'Group booking management'
 *       ]
 *     }
 *   ]}
 *   columns={3}
 *   spacing="xl"
 *   backgroundColor="var(--muted)"
 * />
 * ```
 */

import { LucideIcon } from 'lucide-react';
import { Section } from '../common/Section';
import { CheckCircle } from 'lucide-react';
import { useState } from 'react';

export interface SolutionDetail {
  /** Unique ID for hover state */
  id: string;
  /** Lucide icon component */
  icon: LucideIcon;
  /** Solution title */
  title: string;
  /** Solution description */
  description: string;
  /** Array of feature items */
  features: string[];
}

export interface SolutionsDetailGridProps {
  /** Optional badge text above title */
  badge?: string;
  /** Optional badge icon */
  badgeIcon?: LucideIcon;
  /** Main heading */
  title?: string;
  /** Description text below heading */
  description?: string;
  /** Array of solutions to display */
  solutions: SolutionDetail[];
  /** Number of columns (2 or 3) */
  columns?: 2 | 3;
  /** Section spacing */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  /** Background color */
  backgroundColor?: string;
  /** Maximum width container */
  maxWidth?: 'full' | '4xl' | '5xl' | '6xl';
  /** Feature icon (default: CheckCircle) */
  featureIcon?: LucideIcon;
}

export function SolutionsDetailGrid({
  badge,
  badgeIcon: BadgeIcon,
  title = 'Our Solutions',
  description,
  solutions,
  columns = 3,
  spacing = 'xl',
  backgroundColor = 'var(--muted)',
  maxWidth = '6xl',
  featureIcon: FeatureIcon = CheckCircle
}: SolutionsDetailGridProps) {
  const [hoveredSolution, setHoveredSolution] = useState<string | null>(null);

  // Map columns to WordPress utility classes
  const gridClass = columns === 3 ? 'wp-grid-3-cols' : 'wp-grid-2-cols';

  return (
    <Section spacing={spacing} style={{ backgroundColor }}>
      <div className={`wp-max-w-${maxWidth}`}>
        {/* Section Header */}
        {(badge || title || description) && (
          <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-16)' }}>
            {/* Badge */}
            {badge && (
              <div
                className="inline-flex"
                style={{
                  alignItems: 'center',
                  gap: 'var(--spacing-2)',
                  padding: '8px 16px',
                  marginBottom: 'var(--spacing-4)',
                  backgroundColor: 'var(--primary-soft)',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-soft)'
                }}
              >
                {BadgeIcon && <BadgeIcon size={16} style={{ color: 'var(--primary)' }} />}
                <span
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-small)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}
                >
                  {badge}
                </span>
              </div>
            )}

            {/* Title */}
            {title && (
              <h2
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: 'var(--spacing-4)',
                  color: 'var(--foreground)'
                }}
              >
                {title}
              </h2>
            )}

            {/* Description */}
            {description && (
              <p
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                {description}
              </p>
            )}
          </div>
        )}

        {/* Solutions Grid */}
        <div className={gridClass} style={{ gap: 'var(--spacing-8)' }}>
          {solutions.map((solution) => {
            const Icon = solution.icon;
            const isHovered = hoveredSolution === solution.id;

            return (
              <div
                key={solution.id}
                className="cursor-pointer"
                style={{
                  padding: 'var(--spacing-8)',
                  backgroundColor: 'var(--card)',
                  borderRadius: 'var(--radius-xl)',
                  border: isHovered ? '2px solid var(--primary)' : '1px solid var(--border-soft)',
                  transition: 'all 0.3s ease',
                  transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: isHovered 
                    ? '0 20px 40px rgba(0, 0, 0, 0.15)' 
                    : '0 4px 12px rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={() => setHoveredSolution(solution.id)}
                onMouseLeave={() => setHoveredSolution(null)}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: isHovered ? 'var(--primary)' : 'var(--primary-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--spacing-5)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Icon 
                    size={32} 
                    style={{ 
                      color: isHovered ? 'white' : 'var(--primary)',
                      transition: 'color 0.3s ease'
                    }} 
                  />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--foreground)',
                    marginBottom: 'var(--spacing-3)'
                  }}
                >
                  {solution.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-base)',
                    lineHeight: '1.6',
                    color: 'var(--muted-foreground)',
                    marginBottom: 'var(--spacing-4)'
                  }}
                >
                  {solution.description}
                </p>

                {/* Features List */}
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                  {solution.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-2)'
                      }}
                    >
                      <FeatureIcon size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                      <span
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-small)',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
