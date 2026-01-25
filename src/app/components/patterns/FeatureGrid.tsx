/**
 * Feature Grid Pattern
 * 
 * WordPress pattern: lsx-design/content/feature-grid
 * 
 * Displays a grid of features/services with icons, titles, descriptions, and optional CTAs.
 * Supports 1-4 column layouts with responsive behavior and hover effects.
 * 
 * **Usage:**
 * ```tsx
 * <FeatureGrid
 *   badge="OUR SERVICES"
 *   title="What We Offer"
 *   description="Comprehensive WordPress solutions for your business"
 *   columns={3}
 *   items={[
 *     {
 *       icon: Code,
 *       title: 'Development',
 *       description: 'Custom WordPress development',
 *       link: 'development-service'
 *     }
 *   ]}
 * />
 * ```
 * 
 * @see {@link /guidelines/patterns/FeatureGrid.md}
 */

import { LucideIcon } from 'lucide-react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { useNavigation } from '../../contexts/NavigationContext';
import { useState } from 'react';

export interface FeatureGridItem {
  /** Lucide icon component */
  icon: LucideIcon;
  /** Feature/service title */
  title: string;
  /** Feature/service description */
  description: string;
  /** Optional features list */
  features?: string[];
  /** Optional link (page slug for navigation) */
  link?: string;
  /** Optional link text (default: "Learn More →") */
  linkText?: string;
  /** Optional custom ID for hover tracking */
  id?: string;
}

export interface FeatureGridProps {
  /** Optional badge text above title */
  badge?: string;
  /** Optional badge icon */
  badgeIcon?: LucideIcon;
  /** Section title */
  title: string;
  /** Optional title highlight (applies gradient effect) */
  titleHighlight?: string;
  /** Section description */
  description?: string;
  /** Grid items */
  items: FeatureGridItem[];
  /** Number of columns (1-4, default: 3) */
  columns?: 1 | 2 | 3 | 4;
  /** Card style variant */
  variant?: 'default' | 'bordered' | 'filled';
  /** Icon style */
  iconStyle?: 'circular' | 'square' | 'rounded';
  /** Enable hover effects */
  hoverEffect?: boolean;
  /** Section spacing (sm, md, lg, xl) */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  /** Background color override */
  backgroundColor?: string;
  /** Max width for content (default: full container) */
  maxWidth?: '3xl' | '4xl' | '5xl' | '6xl' | 'full';
}

export function FeatureGrid({
  badge,
  badgeIcon: BadgeIcon,
  title,
  titleHighlight,
  description,
  items,
  columns = 3,
  variant = 'default',
  iconStyle = 'rounded',
  hoverEffect = true,
  spacing = 'xl',
  backgroundColor = 'var(--background)',
  maxWidth = 'full'
}: FeatureGridProps) {
  const { navigateTo } = useNavigation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Grid column classes
  const gridClasses = {
    1: 'wp-grid-1-col',
    2: 'wp-grid-2-cols',
    3: 'wp-grid-3-cols',
    4: 'wp-grid-4-cols'
  }[columns];

  // Icon border radius
  const iconRadius = {
    circular: 'var(--radius-full)',
    square: '0',
    rounded: 'var(--radius-lg)'
  }[iconStyle];

  // Max width classes
  const maxWidthClass = maxWidth !== 'full' ? `wp-max-w-${maxWidth}` : '';

  // Process title with highlight
  const renderTitle = () => {
    if (!titleHighlight) {
      return title;
    }

    const parts = title.split(titleHighlight);
    return (
      <>
        {parts[0]}
        <span style={{ 
          background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          {titleHighlight}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <Section spacing={spacing} style={{ backgroundColor }}>
      <Container>
        <div className={maxWidthClass} style={{ margin: maxWidth !== 'full' ? '0 auto' : undefined }}>
          {/* Section Header */}
          <div className="wp-text-center" style={{ marginBottom: 'var(--spacing-16)' }}>
            {badge && (
              <div
                className="wp-badge"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-2)',
                  padding: 'var(--spacing-2) var(--spacing-4)',
                  marginBottom: 'var(--spacing-6)',
                  backgroundColor: 'var(--primary-soft)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-small)',
                  fontFamily: 'var(--font-secondary)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {BadgeIcon && <BadgeIcon size={14} />}
                {badge}
              </div>
            )}

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
              {renderTitle()}
            </h2>

            {description && (
              <p
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-xl)',
                  lineHeight: '1.7',
                  color: 'var(--muted-foreground)',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}
              >
                {description}
              </p>
            )}
          </div>

          {/* Feature Grid */}
          <div className={gridClasses} style={{ gap: 'var(--spacing-8)' }}>
            {items.map((item, index) => {
              const Icon = item.icon;
              const itemId = item.id || `feature-${index}`;
              const isHovered = hoverEffect && hoveredItem === itemId;

              const CardWrapper = item.link ? 'a' : 'div';
              const cardProps = item.link ? {
                href: `#${item.link}`,
                onClick: (e: React.MouseEvent) => {
                  e.preventDefault();
                  navigateTo(item.link!);
                },
                style: { textDecoration: 'none', display: 'block', cursor: 'pointer' }
              } : {};

              return (
                <CardWrapper key={itemId} {...cardProps}>
                  <article
                    style={{
                      backgroundColor: variant === 'filled' ? 'var(--card)' : variant === 'bordered' ? 'var(--card)' : 'transparent',
                      border: variant === 'default' ? 'none' : isHovered ? '1px solid var(--primary)' : '1px solid var(--border-soft)',
                      borderRadius: 'var(--radius-xl)',
                      padding: 'var(--spacing-8)',
                      transition: 'all 0.3s ease',
                      transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                      boxShadow: isHovered ? '0 20px 60px rgba(0, 0, 0, 0.1)' : variant === 'default' ? 'none' : '0 4px 12px rgba(0, 0, 0, 0.05)',
                      cursor: item.link ? 'pointer' : 'default'
                    }}
                    onMouseEnter={() => hoverEffect && setHoveredItem(itemId)}
                    onMouseLeave={() => hoverEffect && setHoveredItem(null)}
                  >
                    {/* Icon */}
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: iconRadius,
                        backgroundColor: isHovered ? 'var(--primary)' : 'var(--primary-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 'var(--spacing-6)',
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
                        fontSize: 'var(--text-h3)',
                        fontWeight: 'var(--font-weight-semibold)',
                        lineHeight: '1.3',
                        color: 'var(--foreground)',
                        marginBottom: 'var(--spacing-3)'
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-base)',
                        lineHeight: '1.7',
                        color: 'var(--muted-foreground)',
                        marginBottom: item.features ? 'var(--spacing-6)' : item.link ? 'var(--spacing-6)' : '0'
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Optional Features List */}
                    {item.features && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', marginBottom: item.link ? 'var(--spacing-6)' : '0' }}>
                        {item.features.map((feature, fIndex) => (
                          <div key={fIndex} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                            <div
                              style={{
                                width: '4px',
                                height: '4px',
                                borderRadius: 'var(--radius-full)',
                                backgroundColor: 'var(--primary)',
                                flexShrink: 0
                              }}
                            />
                            <span
                              style={{
                                fontFamily: 'var(--font-secondary)',
                                fontSize: 'var(--text-small)',
                                color: 'var(--muted-foreground)'
                              }}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Optional Link */}
                    {item.link && (
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 'var(--spacing-2)',
                          color: 'var(--primary)',
                          fontSize: 'var(--text-base)',
                          fontFamily: 'var(--font-primary)',
                          fontWeight: 'var(--font-weight-semibold)',
                          opacity: isHovered ? 1 : 0.8,
                          transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {item.linkText || 'Learn More →'}
                      </div>
                    )}
                  </article>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
