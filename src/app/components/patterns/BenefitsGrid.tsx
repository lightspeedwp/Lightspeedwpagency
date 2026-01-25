/**
 * Benefits Grid Pattern
 * 
 * Displays related benefits or items with icons and "Learn More" links.
 * Maps to WordPress pattern: lsx-design/content/benefits
 * 
 * **Design Token Compliance:**
 * - Typography: Uses ONLY CSS variables (var(--text-*), var(--font-*))
 * - Fonts: var(--font-primary) and var(--font-secondary) ONLY
 * - Colors: Uses ONLY CSS variables (var(--*))
 * - Spacing: Uses ONLY CSS variables (var(--spacing-*))
 * - Border Radius: Uses ONLY CSS variables (var(--radius*))
 * 
 * **WordPress Mapping:**
 * - Block: core/group with nested core/columns
 * - Section Style: content-feature
 * - Pattern Slug: lsx-design/content/benefits
 * 
 * @example
 * ```tsx
 * import { BenefitsGrid } from '../patterns/BenefitsGrid';
 * import { Shield, Zap } from 'lucide-react';
 * 
 * <BenefitsGrid
 *   title="Additional Benefits"
 *   description="Explore more ways our solution helps you succeed"
 *   benefits={[
 *     {
 *       icon: Shield,
 *       title: "Enhanced Security",
 *       description: "Enterprise-grade security features",
 *       link: "/security"
 *     }
 *   ]}
 *   columns={3}
 * />
 * ```
 */

import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { ArrowRight, LucideIcon } from 'lucide-react';

/**
 * Benefit Item Interface
 */
export interface Benefit {
  /** Icon component from lucide-react */
  icon: LucideIcon;
  /** Benefit title */
  title: string;
  /** Benefit description */
  description: string;
  /** Optional link URL */
  link?: string;
  /** Optional link text (default: "Learn More") */
  linkText?: string;
}

/**
 * Benefits Grid Props
 */
export interface BenefitsGridProps {
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Benefits to display */
  benefits: Benefit[];
  /** Number of columns (2, 3, or 4) */
  columns?: 2 | 3 | 4;
  /** Background variant */
  variant?: 'default' | 'muted';
  /** Show link arrows */
  showArrows?: boolean;
  /** Click handler for benefit cards (alternative to links) */
  onBenefitClick?: (benefit: Benefit, index: number) => void;
}

/**
 * Benefits Grid Pattern Component
 * 
 * Displays benefits or related items in a responsive grid layout
 * with icons, descriptions, and optional "Learn More" links.
 */
export function BenefitsGrid({
  title = "Related Benefits",
  description,
  benefits,
  columns = 3,
  variant = 'default',
  showArrows = true,
  onBenefitClick
}: BenefitsGridProps) {
  // Column class mapping for WordPress utility classes
  const columnClass = columns === 2 
    ? 'wp-grid-2-cols' 
    : columns === 3 
    ? 'wp-grid-3-cols' 
    : 'wp-grid-4-cols';

  /**
   * Handle benefit click
   */
  const handleClick = (benefit: Benefit, index: number) => {
    if (onBenefitClick) {
      onBenefitClick(benefit, index);
    }
  };

  return (
    <Section 
      spacing="xl" 
      style={{ 
        backgroundColor: variant === 'muted' 
          ? 'var(--muted)' 
          : 'var(--background)' 
      }}
    >
      <Container>
        <div className="wp-max-w-6xl">
          {/* Section Header */}
          {(title || description) && (
            <div 
              className="wp-text-center" 
              style={{ marginBottom: 'var(--spacing-16)' }}
            >
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

              {description && (
                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  {description}
                </p>
              )}
            </div>
          )}

          {/* Benefits Grid */}
          <div 
            className={columnClass}
            style={{ gap: 'var(--spacing-8)' }}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const isClickable = !!benefit.link || !!onBenefitClick;

              return (
                <div
                  key={index}
                  onClick={() => isClickable && handleClick(benefit, index)}
                  style={{
                    padding: 'var(--spacing-8)',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)',
                    cursor: isClickable ? 'pointer' : 'default',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    if (isClickable) {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 12px 24px -10px var(--shadow)';
                      e.currentTarget.style.borderColor = 'var(--primary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isClickable) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'var(--border-soft)';
                    }
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'var(--primary-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 'var(--spacing-4)'
                    }}
                  >
                    <Icon 
                      size={28} 
                      style={{ color: 'var(--primary)' }} 
                    />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h4)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--foreground)',
                      marginBottom: 'var(--spacing-3)'
                    }}
                  >
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      lineHeight: '1.6',
                      color: 'var(--muted-foreground)',
                      marginBottom: 'var(--spacing-4)',
                      flex: 1
                    }}
                  >
                    {benefit.description}
                  </p>

                  {/* Learn More Link */}
                  {isClickable && showArrows && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-2)',
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--primary)',
                        marginTop: 'auto'
                      }}
                    >
                      {benefit.linkText || 'Learn More'}
                      <ArrowRight size={16} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
