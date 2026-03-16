/**
 * QueryLoopOfferings Pattern — LSX Design
 *
 * Consolidated offerings query loop for Services and Solutions.
 * Replaces: QueryLoopServices, QueryLoopSolutions
 *
 * @see /src/styles/patterns/query-loop.css
 */

import { ArrowRight, CheckCircle } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { QueryLoop } from './QueryLoop';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import type { Service } from '../../data/services';

export interface SolutionItem {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>;
  benefits: string[];
}

export type OfferingsVariant = 'services' | 'solutions';

export interface QueryLoopOfferingsProps {
  variant: OfferingsVariant;
  items: Service[] | SolutionItem[];
  heading?: string;
  description?: string;
  columns?: 2 | 3;
}

export function QueryLoopOfferings({
  variant,
  items,
  heading,
  description,
  columns = 3,
}: QueryLoopOfferingsProps) {
  const { containerRef, itemStyle } = useStaggerReveal({
    animation: 'fade-up',
    stagger: 80,
  });

  const defaultHeading = variant === 'services' ? 'Our Services' : 'Our Solutions';
  const emptyMessage = variant === 'services' ? 'No services found.' : 'No solutions found.';
  const basePath = variant === 'services' ? '/services' : '/solutions';
  const ctaLabel = variant === 'services' ? 'Learn More' : 'Explore Solution';

  return (
    <QueryLoop
      heading={heading ?? defaultHeading}
      description={description}
      columns={columns}
      isEmpty={items.length === 0}
      emptyMessage={emptyMessage}
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        const slug = item.slug;
        const name = 'name' in item ? item.name : '';
        const tagline = item.tagline;

        return (
          <Link
            key={item.id}
            to={`${basePath}/${slug}`}
            className="query-loop-card query-loop-card--clickable"
            ref={index === 0 ? containerRef as any : undefined}
            style={itemStyle(index)}
            aria-label={`${ctaLabel}: ${name}`}
          >
            <div className="query-loop-card__body">
              {/* Icon */}
              <div
                className="wp-flex wp-items-center wp-justify-center wp-bg-primary-soft wp-w-12 wp-h-12 wp-rounded-xl"
              >
                <Icon size={24} className="wp-text-primary" />
              </div>

              {/* Service: category badge */}
              {variant === 'services' && 'category' in item && (
                <span className="query-loop-card__badge">{(item as Service).category}</span>
              )}

              <h3 className="query-loop-card__title">{name}</h3>
              <p className="query-loop-card__excerpt">{tagline}</p>

              {/* Service: feature tags */}
              {variant === 'services' && 'features' in item && (
                <div className="query-loop-card__tags">
                  {(item as Service).features.slice(0, 3).map((f) => (
                    <span key={f} className="query-loop-card__tag">{f}</span>
                  ))}
                </div>
              )}

              {/* Solution: benefits list */}
              {variant === 'solutions' && 'benefits' in item && (
                <ul className="wp-flex wp-flex-col wp-p-0 wp-m-0 wp-list-none wp-gap-2">
                  {(item as SolutionItem).benefits.slice(0, 4).map((benefit) => (
                    <li
                      key={benefit}
                      className="wp-flex wp-items-center wp-font-primary wp-text-sm wp-text-muted-foreground wp-gap-2"
                    >
                      <CheckCircle size={14} className="wp-shrink-0 wp-text-success" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA */}
              <div className={variant === 'services' ? 'query-loop-card__footer wp-border-none wp-p-0' : 'wp-mt-auto wp-pt-4'}>
                <span className="wp-flex wp-items-center wp-font-primary wp-text-sm wp-font-semibold wp-text-primary wp-gap-1">
                  {ctaLabel} <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </QueryLoop>
  );
}

/* ── Backward-compatible aliases ── */

export interface QueryLoopServicesProps {
  services: Service[];
  heading?: string;
  description?: string;
  columns?: 2 | 3;
}

export interface QueryLoopSolutionsProps {
  solutions: SolutionItem[];
  heading?: string;
  description?: string;
  columns?: 2 | 3;
}

export const QueryLoopServices = ({ services, ...rest }: QueryLoopServicesProps) => (
  <QueryLoopOfferings variant="services" items={services} {...rest} />
);

export const QueryLoopSolutions = ({ solutions, ...rest }: QueryLoopSolutionsProps) => (
  <QueryLoopOfferings variant="solutions" items={solutions} {...rest} />
);
