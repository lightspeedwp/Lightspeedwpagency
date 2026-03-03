/**
 * StatCounter Component
 *
 * Animated statistic with count-up effect
 * Displays a number with optional prefix/suffix and label
 *
 * Features:
 * - Count-up animation on scroll
 * - Prefix/suffix support (e.g., "$", "+", "%")
 * - Optional icon
 * - Customizable duration
 * - Reduced motion support
 *
 * Design System:
 * - 100% CSS variables
 * - BEM naming (.stat-counter)
 * - Dedicated CSS file
 *
 * @see /guidelines/patterns/StatCounter.md
 */

import { useCountUpRef } from '../../hooks/useCountUp';
import type { UniversalIcon } from '../../utils/icon-map';

export interface StatCounterProps {
  /** Target value to count to */
  value: number;
  /** Label text below the number */
  label: string;
  /** Optional prefix (e.g., "$") */
  prefix?: string;
  /** Optional suffix (e.g., "+", "%", "K", "M") */
  suffix?: string;
  /** Number of decimal places */
  decimals?: number;
  /** Animation duration (ms) */
  duration?: number;
  /** Optional icon */
  icon?: UniversalIcon;
  /** Color variant */
  variant?: 'default' | 'primary' | 'accent';
}

export const StatCounter = ({
  value,
  label,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2000,
  icon: Icon,
  variant = 'default',
}: StatCounterProps) => {
  const { count, ref } = useCountUpRef(value, {
    duration,
    decimals,
    threshold: 0.5,
    easing: 'ease-out',
  });

  // Format number with commas
  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  return (
    <div
      ref={ref}
      className={`stat-counter stat-counter--${variant}`}
    >
      {Icon && (
        <div className="stat-counter__icon">
          <Icon size={32} />
        </div>
      )}

      <div className="stat-counter__value">
        {prefix && <span className="stat-counter__prefix">{prefix}</span>}
        <span className="stat-counter__number">{formatNumber(count)}</span>
        {suffix && <span className="stat-counter__suffix">{suffix}</span>}
      </div>

      <div className="stat-counter__label">{label}</div>
    </div>
  );
};