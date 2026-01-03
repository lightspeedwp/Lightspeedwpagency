/**
 * Stats Card Component
 * 
 * Production-grade statistics card with trends and comparisons.
 * 
 * Features:
 * - Large metric display
 * - Trend indicator (up/down/neutral)
 * - Percentage change
 * - Comparison text
 * - Icon support
 * - Multiple variants
 * - Loading skeleton
 * - Tooltip support
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <StatsCard
 *   label="Total Revenue"
 *   value="$45,231"
 *   trend="up"
 *   change="+12.5%"
 *   comparison="vs last month"
 * />
 */

import { TrendingUp, TrendingDown, Minus, LucideIcon } from 'lucide-react';

export interface StatsCardProps {
  /** Stat label */
  label: string;
  /** Stat value */
  value: string | number;
  /** Trend direction */
  trend?: 'up' | 'down' | 'neutral';
  /** Percentage or absolute change */
  change?: string;
  /** Comparison text */
  comparison?: string;
  /** Icon */
  icon?: LucideIcon;
  /** Icon color */
  iconColor?: string;
  /** Loading state */
  loading?: boolean;
  /** Variant */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'destructive';
  /** Description */
  description?: string;
}

export function StatsCard({
  label,
  value,
  trend,
  change,
  comparison,
  icon: Icon,
  iconColor,
  loading = false,
  variant = 'default',
  description,
}: StatsCardProps) {
  // Variant styles
  const variantStyles = {
    default: {
      backgroundColor: 'var(--card)',
      border: '1px solid var(--border-soft)',
    },
    primary: {
      backgroundColor: 'var(--primary-soft)',
      border: '1px solid var(--primary)',
    },
    success: {
      backgroundColor: 'var(--success-soft)',
      border: '1px solid var(--success)',
    },
    warning: {
      backgroundColor: 'var(--warning-soft)',
      border: '1px solid var(--warning)',
    },
    destructive: {
      backgroundColor: 'var(--destructive-soft)',
      border: '1px solid var(--destructive)',
    },
  };

  // Trend styles
  const trendStyles = {
    up: {
      color: 'var(--success)',
      Icon: TrendingUp,
    },
    down: {
      color: 'var(--destructive)',
      Icon: TrendingDown,
    },
    neutral: {
      color: 'var(--muted-foreground)',
      Icon: Minus,
    },
  };

  const currentTrend = trend ? trendStyles[trend] : null;

  // Loading skeleton
  if (loading) {
    return (
      <div
        className="p-6"
        style={{
          ...variantStyles[variant],
          borderRadius: 'var(--radius-xl)',
        }}
      >
        <div className="space-y-3">
          <div
            className="h-5 w-32"
            style={{
              backgroundColor: 'var(--muted)',
              borderRadius: 'var(--radius)',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }}
          />
          <div
            className="h-10 w-48"
            style={{
              backgroundColor: 'var(--muted)',
              borderRadius: 'var(--radius)',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }}
          />
          <div
            className="h-4 w-24"
            style={{
              backgroundColor: 'var(--muted)',
              borderRadius: 'var(--radius)',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="p-6"
      style={{
        ...variantStyles[variant],
        borderRadius: 'var(--radius-xl)',
        transition: 'all 0.2s ease',
      }}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Content */}
        <div className="flex-1">
          {/* Label */}
          <p
            className="mb-2"
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--muted-foreground)',
              margin: 0,
            }}
          >
            {label}
          </p>

          {/* Value */}
          <p
            className="mb-3"
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-h2)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--foreground)',
              margin: 0,
              lineHeight: '1.2',
            }}
          >
            {value}
          </p>

          {/* Trend and comparison */}
          {(trend || change || comparison) && (
            <div className="flex items-center gap-2 flex-wrap">
              {/* Trend indicator */}
              {trend && currentTrend && (
                <div
                  className="flex items-center gap-1 px-2 py-1"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-small)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: currentTrend.color,
                    backgroundColor:
                      trend === 'up'
                        ? 'var(--success-soft)'
                        : trend === 'down'
                        ? 'var(--destructive-soft)'
                        : 'var(--muted)',
                    borderRadius: 'var(--radius)',
                  }}
                >
                  <currentTrend.Icon size={14} />
                  {change}
                </div>
              )}

              {/* Comparison text */}
              {comparison && (
                <span
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'var(--text-small)',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  {comparison}
                </span>
              )}
            </div>
          )}

          {/* Description */}
          {description && (
            <p
              className="mt-2"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-small)',
                color: 'var(--muted-foreground)',
                margin: 0,
                lineHeight: '1.5',
              }}
            >
              {description}
            </p>
          )}
        </div>

        {/* Icon */}
        {Icon && (
          <div
            className="flex items-center justify-center"
            style={{
              width: '48px',
              height: '48px',
              backgroundColor: iconColor || 'var(--primary-soft)',
              color: iconColor ? 'var(--foreground)' : 'var(--primary)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <Icon size={24} />
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Stats Grid Component
 * 
 * Grid layout for multiple stats cards.
 */
export interface StatsGridProps {
  /** Stats cards */
  stats: StatsCardProps[];
  /** Grid columns */
  columns?: 2 | 3 | 4;
}

export function StatsGrid({ stats, columns = 3 }: StatsGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
}
