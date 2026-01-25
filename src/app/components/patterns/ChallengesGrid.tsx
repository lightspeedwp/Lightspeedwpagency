/**
 * Challenges Grid Pattern Component
 * 
 * WordPress Pattern: lsx-design/content/challenges-grid
 * 
 * Displays a grid of challenge/problem cards with icons, typically used
 * to highlight pain points or problems that a solution addresses.
 * 
 * **Design System Compliance:**
 * - Typography: var(--font-primary) Lexend
 * - Spacing: CSS variables (--spacing-*)
 * - Colors: Semantic color variables
 * - Grid: WordPress utility classes (.wp-grid-*-cols)
 * 
 * **WordPress Mapping:**
 * - Group Block → Container
 * - Columns Block → Grid layout
 * - Paragraph Blocks → Challenge cards
 * 
 * @example
 * ```tsx
 * import { ChallengesGrid } from '../patterns/ChallengesGrid';
 * import { Calendar, CreditCard, Users, Globe } from 'lucide-react';
 * 
 * <ChallengesGrid
 *   badge="CHALLENGES WE SOLVE"
 *   title="Tour Industry Challenges"
 *   description="Common challenges faced by tour operators and how we address them"
 *   challenges={[
 *     {
 *       icon: Calendar,
 *       title: 'Complex Booking Management',
 *       description: 'Managing availability, pricing, and reservations across multiple tours and dates'
 *     },
 *     {
 *       icon: CreditCard,
 *       title: 'Payment Processing',
 *       description: 'Secure payment handling with multiple currencies and payment methods'
 *     }
 *   ]}
 *   columns={4}
 *   spacing="xl"
 *   backgroundColor="var(--background)"
 * />
 * ```
 */

import { LucideIcon } from 'lucide-react';
import { Section } from '../common/Section';

export interface Challenge {
  /** Lucide icon component */
  icon: LucideIcon;
  /** Challenge title */
  title: string;
  /** Challenge description */
  description: string;
}

export interface ChallengesGridProps {
  /** Optional badge text above title */
  badge?: string;
  /** Optional badge icon */
  badgeIcon?: LucideIcon;
  /** Main heading */
  title?: string;
  /** Description text below heading */
  description?: string;
  /** Array of challenges to display */
  challenges: Challenge[];
  /** Number of columns (2, 3, or 4) */
  columns?: 2 | 3 | 4;
  /** Section spacing */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  /** Background color */
  backgroundColor?: string;
  /** Maximum width container */
  maxWidth?: 'full' | '4xl' | '5xl' | '6xl';
}

export function ChallengesGrid({
  badge,
  badgeIcon: BadgeIcon,
  title = 'Challenges We Solve',
  description,
  challenges,
  columns = 4,
  spacing = 'xl',
  backgroundColor = 'var(--background)',
  maxWidth = '6xl'
}: ChallengesGridProps) {
  // Map columns to WordPress utility classes
  const gridClass = columns === 4 
    ? 'wp-grid-4-cols'
    : columns === 3
    ? 'wp-grid-3-cols'
    : 'wp-grid-2-cols';

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

        {/* Challenges Grid */}
        <div className={gridClass} style={{ gap: 'var(--spacing-8)' }}>
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <div
                key={index}
                style={{
                  padding: 'var(--spacing-8)',
                  backgroundColor: 'var(--card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-soft)',
                  textAlign: 'center'
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--primary-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--spacing-5)'
                  }}
                >
                  <Icon size={32} style={{ color: 'var(--primary)' }} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    marginBottom: 'var(--spacing-2)'
                  }}
                >
                  {challenge.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-base)',
                    lineHeight: '1.6',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  {challenge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
