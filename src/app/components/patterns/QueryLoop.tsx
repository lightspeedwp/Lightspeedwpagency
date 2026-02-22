/**
 * Query Loop Base Pattern
 *
 * WordPress pattern: core/query
 *
 * Shared wrapper for all query loop variations. Provides consistent
 * grid/list layout, headers, and empty states. Individual content type
 * patterns render their own card templates inside this loop.
 *
 * @see /src/styles/patterns/query-loop.css
 */

import React from 'react';


export interface QueryLoopProps {
  /** Section heading */
  heading?: string;
  /** Section description */
  description?: string;
  /** Number of columns (1-4, default 3) */
  columns?: 1 | 2 | 3 | 4;
  /** Layout mode */
  layout?: 'grid' | 'list';
  /** Max-width container class */
  maxWidth?: '3xl' | '4xl' | '6xl';
  /** Empty state message */
  emptyMessage?: string;
  /** Children (rendered cards) */
  children: React.ReactNode;
  /** Additional class */
  className?: string;
  /** Whether there are items */
  isEmpty?: boolean;
}

export function QueryLoop({
  heading,
  description,
  columns = 3,
  layout = 'grid',
  maxWidth = '6xl',
  emptyMessage = 'No items found.',
  children,
  className = '',
  isEmpty = false,
}: QueryLoopProps) {
  const maxWidthClass = `wp-max-w-${maxWidth}`;
  const gridClass = layout === 'grid'
    ? `query-loop__grid query-loop__grid--${columns}-col${columns > 1 ? 's' : ''}`
    : 'query-loop__list';

  return (
    <div className={`query-loop ${className}`}>
      {(heading || description) && (
        <div className="query-loop__header">
          {heading && <h2 className="query-loop__title">{heading}</h2>}
          {description && <p className="query-loop__description">{description}</p>}
        </div>
      )}

      <div className={maxWidthClass} style={{ margin: '0 auto' }}>
        {isEmpty ? (
          <div className="query-loop__empty">
            <p className="query-loop__empty-text">{emptyMessage}</p>
          </div>
        ) : (
          <div className={gridClass}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
