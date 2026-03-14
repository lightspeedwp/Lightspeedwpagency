/**
 * Card Grid Pattern
 * 
 * WordPress pattern: lsx-design/listing/card-grid
 * 
 * Displays a responsive grid of cards with images, titles, descriptions, and metadata.
 * Commonly used for blog posts, portfolio items, services, case studies, and generic content.
 * 
 * All styling in /src/styles/card-grid.css (user-editable)
 * 
 * **Usage:**
 * ```tsx
 * <CardGrid
 *   items={[
 *     {
 *       title: 'Blog Post Title',
 *       description: 'Post excerpt...',
 *       image: '/images/post.jpg',
 *       href: '/insights/post-slug',
 *       meta: [
 *         { icon: Calendar, label: 'Jan 21, 2025' },
 *         { icon: User, label: 'John Doe' }
 *       ]
 *     }
 *   ]}
 *   columns={3}
 *   variant="blog"
 * />
 * ```
 * 
 * @see /src/app/utils/icon-map.ts
 * @see {@link /guidelines/patterns/CardGrid.md}
 */

import { CaretRight as ChevronRight, ArrowSquareOut as ExternalLink } from '@phosphor-icons/react';
import { Link } from 'react-router';


export interface CardMeta {
  /** Icon component */
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  /** Label text */
  label: string;
  /** Optional link */
  href?: string;
}

export interface CardBadge {
  /** Badge text */
  text: string;
  /** Badge color variant */
  variant?: 'primary' | 'success' | 'warning' | 'muted';
}

export interface CardGridItem {
  /** Card title */
  title: string;
  /** Card description/excerpt */
  description?: string;
  /** Card image URL */
  image?: string;
  /** Card link */
  href?: string;
  /** Open link in new tab */
  external?: boolean;
  /** Meta information (date, author, category, etc.) */
  meta?: CardMeta[];
  /** Badge/tag */
  badge?: CardBadge;
  /** Optional CTA text (defaults to "Learn More" or "Read More") */
  ctaText?: string;
  /** Optional icon for the card */
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

export interface CardGridProps {
  /** Array of card items */
  items: CardGridItem[];
  /** Number of columns (2-4, default: 3) */
  columns?: 2 | 3 | 4;
  /** Visual variant */
  variant?: 'default' | 'blog' | 'portfolio' | 'service' | 'minimal';
  /** Show images */
  showImages?: boolean;
  /** Show descriptions */
  showDescriptions?: boolean;
  /** Show CTA buttons */
  showCTA?: boolean;
  /** Max width constraint */
  maxWidth?: '4xl' | '5xl' | '6xl' | 'none';
  /** Custom gap size (sm, md, lg, xl) */
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  /** Empty state message */
  emptyMessage?: string;
}

export function CardGrid({
  items,
  columns = 3,
  variant = 'default',
  showImages = true,
  showDescriptions = true,
  showCTA = true,
  maxWidth = '6xl',
  gap = 'lg',
  emptyMessage = 'No items found.'
}: CardGridProps) {
  // Max width class
  const maxWidthClass = maxWidth !== 'none' ? `wp-max-w-${maxWidth}` : '';

  // Grid column class based on columns count
  const gridClass = columns === 2 ? 'wp-grid-2-cols' : columns === 3 ? 'wp-grid-3-cols' : 'wp-grid-4-cols';
  
  // Map gap prop to WP utility classes
  const gapClass = {
    sm: 'wp-gap-4',
    md: 'wp-gap-6',
    lg: 'wp-gap-8',
    xl: 'wp-gap-12'
  }[gap] || 'wp-gap-8';

  // Empty state
  if (items.length === 0) {
    return (
      <div className={maxWidthClass}>
        <div className="card-grid__empty">
          <p className="card-grid__empty-message">
            {emptyMessage}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={maxWidthClass}>
      <div className={`${gridClass} ${gapClass}`}>
        {items.map((item, index) => {
          const isExternal = item.external || item.href?.startsWith('http');
          const CardIcon = item.icon;

          // Image container class
          const imageContainerClass = [
            'card-grid__image-container',
            variant === 'portfolio' ? 'card-grid__image-container--portfolio' :
            variant === 'blog' ? 'card-grid__image-container--blog' :
            'card-grid__image-container--default'
          ].filter(Boolean).join(' ');

          // Badge class (overlay)
          const badgeOverlayClass = [
            'card-grid__badge--overlay',
            `card-grid__badge--${item.badge?.variant || 'muted'}`
          ].filter(Boolean).join(' ');

          // Badge class (inline)
          const badgeInlineClass = [
            'card-grid__badge--inline',
            `card-grid__badge--${item.badge?.variant || 'muted'}`
          ].filter(Boolean).join(' ');

          // Content class
          const contentClass = [
            'card-grid__content',
            variant === 'minimal' && 'card-grid__content--minimal'
          ].filter(Boolean).join(' ');

          // Title class
          const titleClass = [
            'card-grid__title',
            variant === 'minimal' && 'card-grid__title--minimal'
          ].filter(Boolean).join(' ');

          return (
            <article key={index} className="card-grid__card">
              {/* Image */}
              {showImages && item.image && (
                <div className={imageContainerClass}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-grid__image"
                  />

                  {/* Badge overlay */}
                  {item.badge && (
                    <div className={badgeOverlayClass}>
                      {item.badge.text}
                    </div>
                  )}
                </div>
              )}

              {/* Content */}
              <div className={contentClass}>
                {/* Icon (for service cards) */}
                {variant === 'service' && CardIcon && (
                  <div className="card-grid__service-icon">
                    <CardIcon size={24} />
                  </div>
                )}

                {/* Badge (if no image) */}
                {(!showImages || !item.image) && item.badge && (
                  <div className={badgeInlineClass}>
                    {item.badge.text}
                  </div>
                )}

                {/* Meta */}
                {Array.isArray(item.meta) && item.meta.length > 0 && (
                  <div className="card-grid__meta">
                    {item.meta.map((meta, metaIndex) => {
                      const MetaIcon = meta.icon;
                      const content = (
                        <div className="card-grid__meta-item">
                          {MetaIcon && <MetaIcon size={14} />}
                          <span>{meta.label}</span>
                        </div>
                      );

                      return meta.href ? (
                        <a
                          key={metaIndex}
                          href={meta.href}
                          className="card-grid__meta-link"
                        >
                          {content}
                        </a>
                      ) : (
                        <div key={metaIndex}>{content}</div>
                      );
                    })}
                  </div>
                )}

                {/* Title */}
                <h3 className={titleClass}>
                  {item.title}
                </h3>

                {/* Description */}
                {showDescriptions && item.description && (
                  <p className="card-grid__description">
                    {item.description}
                  </p>
                )}

                {/* CTA */}
                {showCTA && item.href && (
                  isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-grid__cta"
                    >
                      {item.ctaText || (variant === 'blog' ? 'Read More' : variant === 'portfolio' ? 'View Project' : 'Learn More')}
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="card-grid__cta"
                    >
                      {item.ctaText || (variant === 'blog' ? 'Read More' : variant === 'portfolio' ? 'View Project' : 'Learn More')}
                      <ChevronRight size={16} />
                    </Link>
                  )
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}