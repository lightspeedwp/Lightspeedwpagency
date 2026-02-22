/**
 * Query Loop — Solutions
 *
 * WordPress pattern: core/query + solution post-template
 *
 * Renders solution packages as cards with benefits and included services.
 *
 * @see /src/styles/patterns/query-loop.css
 */

import { ArrowRight, CheckCircle } from 'lucide-react';
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
                style={{
                  width: 'var(--spacing-12)',
                  height: 'var(--spacing-12)',
                  borderRadius: 'var(--radius-xl)',
                  backgroundColor: 'var(--primary-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                <Icon size={24} style={{ color: 'var(--primary)' }} />
              </div>

              <h3 className="query-loop-card__title">{solution.name}</h3>
              <p className="query-loop-card__excerpt">{solution.tagline}</p>

              {/* Benefits */}
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                {solution.benefits.slice(0, 4).map((benefit) => (
                  <li
                    key={benefit}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-2)',
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    <CheckCircle size={14} style={{ color: 'var(--success)', flexShrink: 0 }} />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 'auto', paddingTop: 'var(--spacing-4)' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-1)',
                  }}
                >
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
