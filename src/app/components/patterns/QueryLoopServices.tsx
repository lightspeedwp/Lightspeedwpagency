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
                className="wp-flex wp-items-center wp-justify-center wp-bg-primary-soft wp-w-12 wp-h-12 wp-rounded-xl"
              >
                <Icon size={24} className="wp-text-primary" />
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

              <div className="query-loop-card__footer wp-border-none wp-p-0">
                <span className="wp-font-primary wp-text-sm wp-font-semibold wp-text-primary wp-flex wp-items-center wp-gap-1">
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