/**
 * QueryLoopSolutions Pattern — LSX Design
 */

import { ArrowRight, CheckCircle } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { QueryLoop } from './QueryLoop';
import { useStaggerReveal } from '../../hooks/useScrollReveal';

export interface SolutionItem {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  benefits: string[];
}

export interface QueryLoopSolutionsProps {
  solutions: SolutionItem[];
  heading?: string;
  description?: string;
  columns?: 2 | 3;
}

export function QueryLoopSolutions({
  solutions,
  heading = 'Our Solutions',
  description,
  columns = 3,
}: QueryLoopSolutionsProps) {
  const { containerRef, itemStyle } = useStaggerReveal({
    animation: 'fade-up',
    stagger: 80,
  });

  return (
    <QueryLoop
      heading={heading}
      description={description}
      columns={columns}
      isEmpty={solutions.length === 0}
      emptyMessage="No solutions found."
    >
      {solutions.map((solution, index) => {
        const Icon = solution.icon;

        return (
          <Link
            key={solution.id}
            to={`/solutions/${solution.slug}`}
            className="query-loop-card query-loop-card--clickable"
            ref={index === 0 ? containerRef as any : undefined}
            style={itemStyle(index)}
            aria-label={`Explore: ${solution.name}`}
          >
            <div className="query-loop-card__body">
              <div
                className="wp-flex wp-items-center wp-justify-center wp-bg-primary-soft wp-w-12 wp-h-12 wp-rounded-xl"
              >
                <Icon size={24} className="wp-text-primary" />
              </div>

              <h3 className="query-loop-card__title">{solution.name}</h3>
              <p className="query-loop-card__excerpt">{solution.tagline}</p>

              {/* Benefits */}
              <ul className="wp-flex wp-flex-col wp-p-0 wp-m-0 wp-list-none wp-gap-2">
                {solution.benefits.slice(0, 4).map((benefit) => (
                  <li
                    key={benefit}
                    className="wp-flex wp-items-center wp-font-primary wp-text-sm wp-text-muted-foreground wp-gap-2"
                  >
                    <CheckCircle size={14} className="wp-shrink-0 wp-text-success" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="wp-mt-auto wp-pt-4">
                <span className="wp-flex wp-items-center wp-font-primary wp-text-sm wp-font-semibold wp-text-primary wp-gap-1">
                  Explore Solution <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </QueryLoop>
  );
}