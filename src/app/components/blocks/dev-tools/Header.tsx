/**
 * DevTools Header Block Component
 * 
 * WordPress Block: dev-tools/header
 * 
 * Renders consistent header for all dev tools pages with breadcrumbs,
 * title, description, and optional stats grid.
 * 
 * @see /src/styles/blocks/dev-tools/header.css
 */

import React from 'react';
import { Breadcrumbs } from '../../common/Breadcrumbs';
import '@/styles/blocks/dev-tools/header.css';

/**
 * Single stat card data
 */
export interface StatCardData {
  value: string | number;
  label: string;
}

export interface DevToolsHeaderProps {
  toolName: string;
  description: string;
  stats?: StatCardData[];
}

export function DevToolsHeader({ 
  toolName, 
  description, 
  stats 
}: DevToolsHeaderProps) {
  const statsCount = stats?.length || 0;
  
  // Determine grid class based on stats count
  const statsGridClass = statsCount === 1 ? 'wp-block-devtools-header__stats--1' :
                        statsCount === 2 ? 'wp-block-devtools-header__stats--2' :
                        statsCount === 3 ? 'wp-block-devtools-header__stats--3' :
                        'wp-block-devtools-header__stats--4';

  return (
    <section className="wp-block-devtools-header">
      <div className="wp-block-devtools-header__content">
        {/* Breadcrumbs */}
        <div className="wp-block-devtools-header__breadcrumbs">
          <Breadcrumbs
            items={[
              { label: 'Home', page: 'home' },
              { label: 'Dev Tools', page: 'dev-tools' },
              { label: toolName }
            ]}
          />
        </div>
        
        {/* Page Header */}
        <h1 className="wp-block-devtools-header__title">
          {toolName}
        </h1>
        
        <p className="wp-block-devtools-header__description">
          {description}
        </p>

        {/* Optional Stats Grid */}
        {stats && stats.length > 0 && (
          <div className={`wp-block-devtools-header__stats ${statsGridClass}`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="wp-block-devtools-header__stat-card"
              >
                <div className="wp-block-devtools-header__stat-value">
                  {stat.value}
                </div>
                <div className="wp-block-devtools-header__stat-label">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
