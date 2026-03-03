/**
 * FeatureList Pattern Component
 * 
 * WordPress pattern: lsx-design/content/feature-list
 * 
 * Inline feature list component WITHOUT Section/Container wrappers.
 * Use for embedding feature grids within existing sections (e.g., service pages, solution pages).
 * 
 * For standalone feature sections with Section/Container wrappers, use FeatureGrid instead.
 * 
 * Features:
 * - Inline display (no Section/Container wrappers)
 * - Responsive grid (1-4 columns)
 * - Icon + title + description cards
 * - Optional features checklist per item
 * - Optional links
 * - 100% CSS variable compliance (colors, spacing, typography, borders)
 * - ONLY uses var(--font-primary) and var(--font-secondary)
 * 
 * Variants:
 *   - cards: Card-style with borders and backgrounds (default)
 *   - glass: Glassmorphism effect (dark mode optimized)
 *   - minimal: Clean minimal style without borders
 *   - compact: Smaller sizing for tight spaces
 *   - glow: Neon glow border with gradient accent (dark mode optimized)
 * 
 * Icon Sizes:
 *   - sm: 32×32px icon wrapper, 16px icon
 *   - md: 48×48px icon wrapper, 24px icon (default)
 *   - lg: 56×56px icon wrapper, 28px icon
 * 
 * @see /src/styles/patterns/feature-list.css
 */

import '@/styles/patterns/feature-list.css';
import type { UniversalIcon } from '../../utils/icon-map';
import { Link } from 'react-router';
import { slugToPath } from '../../utils/route-map';

export interface FeatureItem {
  /** Icon component (Lucide or Phosphor) */
  icon: UniversalIcon;
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
  /** Optional checklist of sub-features */
  features?: string[];
  /** Optional link (page slug or full URL) */
  link?: string;
  /** Optional link text (default: "Learn More →") */
  linkText?: string;
}

export interface FeatureListProps {
  /** Array of features to display */
  items: FeatureItem[];
  /** Number of columns (responsive, defaults to 3) */
  columns?: 1 | 2 | 3 | 4;
  /** Visual variant */
  variant?: 'cards' | 'glass' | 'minimal' | 'compact' | 'glow';
  /** Icon style */
  iconStyle?: 'circular' | 'square' | 'rounded';
  /** Icon size */
  iconSize?: 'sm' | 'md' | 'lg';
  /** Optional CSS class name */
  className?: string;
}

/**
 * FeatureList Component
 * 
 * Renders an inline feature grid without Section/Container wrappers.
 * Perfect for embedding within existing sections like service detail pages.
 * 
 * @example
 * ```tsx
 * <Section spacing="xl">
 *   <Container>
 *     <h2>What We Build</h2>
 *     <p>Description...</p>
 *     
 *     <FeatureList
 *       items={[
 *         {
 *           icon: Code,
 *           title: 'Custom Themes',
 *           description: 'Build beautiful WordPress themes',
 *           features: ['Block-based', 'FSE compatible', 'Accessible']
 *         },
 *         {
 *           icon: Palette,
 *           title: 'Design Systems',
 *           description: 'Create scalable design systems',
 *           link: 'design-systems'
 *         }
 *       ]}
 *       columns={3}
 *       variant="glass"
 *     />
 *   </Container>
 * </Section>
 * ```
 */
export function FeatureList({
  items,
  columns = 3,
  variant = 'cards',
  iconStyle = 'rounded',
  iconSize = 'md',
  className = ''
}: FeatureListProps) {
  return (
    <div 
      className={`feature-list feature-list--cols-${columns} feature-list--${variant} ${className}`}
      role="list"
      aria-label="Features"
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        const CardWrapper = item.link ? Link : 'div';
        const cardProps = item.link ? {
          to: item.link.startsWith('/') || item.link.startsWith('http') 
            ? item.link 
            : slugToPath(item.link),
          className: 'feature-list__item-link'
        } : {};
        
        return (
          <CardWrapper key={index} {...cardProps}>
            <article
              className="feature-list__item"
              role="listitem"
            >
              {/* Icon */}
              <div className={`feature-list__icon-wrapper feature-list__icon-wrapper--${iconStyle} feature-list__icon-wrapper--${iconSize}`}>
                <Icon className="feature-list__icon" aria-hidden="true" />
              </div>
              
              {/* Title */}
              <h3 className="feature-list__title">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="feature-list__description">
                {item.description}
              </p>
              
              {/* Optional Features Checklist */}
              {item.features && item.features.length > 0 && (
                <ul className="feature-list__checklist">
                  {item.features.map((feature, fIndex) => (
                    <li key={fIndex} className="feature-list__checklist-item">
                      <div className="feature-list__check-icon" aria-hidden="true" />
                      <span className="feature-list__checklist-text">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              
              {/* Optional Link */}
              {item.link && (
                <div className="feature-list__link-text">
                  {item.linkText || 'Learn More →'}
                </div>
              )}
            </article>
          </CardWrapper>
        );
      })}
    </div>
  );
}