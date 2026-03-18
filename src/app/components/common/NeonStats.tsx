/**
 * Neon Stats Component
 *
 * Reusable stats display with customizable neon accent colors for dark mode.
 * Fully BEM-compliant with CSS variables for all styling.
 *
 * Features:
 * - Custom neon accent colors per page/context via CSS custom properties
 * - Automatic dark background enforcement for neon colors (per guidelines)
 * - Support for icons, labels, values, and descriptions
 * - Responsive grid layout (1/2/3/4 columns)
 * - Hover animations with neon glow effects
 * - Optional trend indicators
 *
 * @see /src/styles/components/neon-stats.css
 */

import React from 'react';
import { Icon } from '@phosphor-icons/react';

export interface NeonStat {
  /** Unique identifier */
  id: string;
  /** Stat value (number, percentage, or formatted string) */
  value: string;
  /** Stat label */
  label: string;
  /** Optional description/subtitle */
  description?: string;
  /** Optional icon (Phosphor icon component) */
  icon?: Icon;
  /** Optional trend indicator */
  trend?: {
    value: string;
    direction: 'up' | 'down' | 'neutral';
  };
}

export interface NeonStatsProps {
  /** Array of stat items to display */
  stats: NeonStat[];
  /** Optional section title */
  title?: string;
  /** Optional section subtitle */
  subtitle?: string;
  /** Grid columns layout */
  columns?: 1 | 2 | 3 | 4;
  /** Neon accent color (CSS variable or hex) - must use on dark background */
  accentColor?: string;
  /** Additional CSS class */
  className?: string;
  /** Show icons */
  showIcons?: boolean;
  /** Variant style */
  variant?: 'default' | 'glass' | 'solid';
}

export function NeonStats({
  stats,
  title,
  subtitle,
  columns = 4,
  accentColor = 'var(--wp--preset--color--neon-cyan)',
  className = '',
  showIcons = true,
  variant = 'glass',
}: NeonStatsProps) {
  return (
    <section
      className={`neon-stats neon-stats--${variant} ${className}`}
      style={{ '--neon-accent': accentColor } as React.CSSProperties}
    >
      <div className="neon-stats__container">
        {/* Header */}
        {(title || subtitle) && (
          <header className="neon-stats__header">
            {title && <h2 className="neon-stats__title">{title}</h2>}
            {subtitle && <p className="neon-stats__subtitle">{subtitle}</p>}
          </header>
        )}

        {/* Stats Grid */}
        <div
          className={`neon-stats__grid neon-stats__grid--${columns}-col`}
          role="list"
        >
          {stats.map((stat) => {
            const IconComponent = stat.icon;

            return (
              <div key={stat.id} className="neon-stats__item" role="listitem">
                {/* Icon */}
                {showIcons && IconComponent && (
                  <div className="neon-stats__icon-wrapper">
                    <IconComponent size={32} weight="duotone" />
                  </div>
                )}

                {/* Value */}
                <div className="neon-stats__value">{stat.value}</div>

                {/* Label */}
                <div className="neon-stats__label">{stat.label}</div>

                {/* Description */}
                {stat.description && (
                  <div className="neon-stats__description">
                    {stat.description}
                  </div>
                )}

                {/* Trend Indicator */}
                {stat.trend && (
                  <div
                    className={`neon-stats__trend neon-stats__trend--${stat.trend.direction}`}
                    aria-label={`Trend: ${stat.trend.direction}`}
                  >
                    {stat.trend.direction === 'up' && '↑'}
                    {stat.trend.direction === 'down' && '↓'}
                    {stat.trend.direction === 'neutral' && '→'}
                    <span className="neon-stats__trend-value">
                      {stat.trend.value}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
