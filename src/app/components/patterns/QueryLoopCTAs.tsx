/**
 * Query Loop — CTAs (Call to Action)
 *
 * WordPress pattern: core/query + cta post-template
 *
 * Renders CTA blocks as cards with gradient backgrounds, headings,
 * descriptions, and action buttons. Perfect for mashup pages.
 *
 * @see /src/styles/patterns/query-loop.css
 */

import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { QueryLoop } from './QueryLoop';
import { useStaggerReveal } from '../../hooks/useScrollReveal';

export interface CTAItem {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonPage: string;
  gradient?: string;
}

export interface QueryLoopCTAsProps {
  ctas: CTAItem[];
  heading?: string;
  description?: string;
  columns?: 1 | 2 | 3;
}

const defaultCTAs: CTAItem[] = [
  {
    id: 'cta-contact',
    title: 'Start Your Project',
    description: 'Get a free consultation and discover how we can transform your WordPress website.',
    buttonText: 'Get in Touch',
    buttonPage: '/contact',
    gradient: 'var(--gradient-blue)',
  },
  {
    id: 'cta-portfolio',
    title: 'See Our Work',
    description: 'Browse our portfolio of successful WordPress and WooCommerce projects.',
    buttonText: 'View Portfolio',
    buttonPage: '/portfolio',
    gradient: 'var(--gradient-purple)',
  },
  {
    id: 'cta-services',
    title: 'Explore Services',
    description: 'From design to development, we offer a full range of WordPress services.',
    buttonText: 'Our Services',
    buttonPage: '/services',
    gradient: 'var(--gradient-cyan)',
  },
];

export function QueryLoopCTAs({
  ctas = defaultCTAs,
  heading,
  description,
  columns = 3,
}: QueryLoopCTAsProps) {
  const { containerRef, itemStyle } = useStaggerReveal({
    animation: 'scale',
    stagger: 100,
  });

  return (
    <QueryLoop
      heading={heading}
      description={description}
      columns={columns}
      isEmpty={ctas.length === 0}
    >
      {ctas.map((cta, index) => (
        <Link
          key={cta.id}
          to={cta.buttonPage}
          className="query-loop-card query-loop-card--clickable query-loop-card--cta"
          ref={index === 0 ? containerRef as any : undefined}
          style={{
            ...itemStyle(index),
            background: cta.gradient || 'var(--gradient-blue)',
          }}
          aria-label={cta.title}
        >
          <div
            className="query-loop-card__body"
            style={{ textAlign: 'center', alignItems: 'center' }}
          >
            <h3
              className="query-loop-card__title"
              style={{ color: 'var(--color-white)' }}
            >
              {cta.title}
            </h3>
            <p
              className="query-loop-card__excerpt"
              style={{ color: 'var(--overlay-white-heavy)' }}
            >
              {cta.description}
            </p>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-2)',
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-white)',
                backgroundColor: 'var(--overlay-white-15)',
                padding: 'var(--spacing-3) var(--spacing-6)',
                borderRadius: 'var(--radius-full)',
                marginTop: 'var(--spacing-4)',
                transition: 'background-color var(--transition-base) var(--ease-in-out)',
              }}
            >
              {cta.buttonText} <ArrowRight size={16} />
            </span>
          </div>
        </Link>
      ))}
    </QueryLoop>
  );
}
