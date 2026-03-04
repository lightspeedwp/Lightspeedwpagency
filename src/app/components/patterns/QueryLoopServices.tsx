/**
 * QueryLoopServices Pattern — LSX Design
 */

import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { QueryLoop } from './QueryLoop';
import type { Service } from '../../data/services';

export interface QueryLoopServicesProps {
  services: Service[];
  heading?: string;
  description?: string;
  columns?: 2 | 3;
}

export function QueryLoopServices({
  services,
  heading = 'Our Services',
  description,
  columns = 3,
}: QueryLoopServicesProps) {
  return (
    <QueryLoop
      heading={heading}
      description={description}
      columns={columns}
      isEmpty={services.length === 0}
      emptyMessage="No services found."
    >
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <Link
            key={service.id}
            to={`/services/${service.slug}`}
            className="query-loop-card query-loop-card--clickable"
            aria-label={`Learn more: ${service.name}`}
          >
            <div className="query-loop-card__body">
              {/* Icon */}
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

              <span className="query-loop-card__badge">{service.category}</span>
              <h3 className="query-loop-card__title">{service.name}</h3>
              <p className="query-loop-card__excerpt">{service.tagline}</p>

              {/* Features list */}
              <div className="query-loop-card__tags">
                {service.features.slice(0, 3).map((f) => (
                  <span key={f} className="query-loop-card__tag">{f}</span>
                ))}
              </div>

              <div className="query-loop-card__footer" style={{ border: 'none', padding: 0 }}>
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
                  Learn More <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </QueryLoop>
  );
}