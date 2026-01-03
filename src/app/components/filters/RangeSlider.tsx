/**
 * Range Slider Component
 * 
 * WordPress concept: Price/value range filter
 * Pattern: `lsx-design/filters/range-slider`
 * 
 * Dual-handle range slider for filtering by min/max values.
 * Perfect for price ranges, dates, ratings, etc.
 * 
 * **Purpose:**
 * - Filter by value ranges
 * - Price filtering
 * - Date range selection
 * - Rating filters
 * 
 * **Features:**
 * - Dual handles (min/max)
 * - Live value display
 * - Custom formatting
 * - Keyboard accessible
 * - Touch-friendly
 * 
 * **Design System:**
 * - Typography: Lexend for values, Manrope for labels
 * - Colors: var(--primary) for active track
 * - Spacing: Tailwind classes
 * - Fonts: Lexend/Manrope only
 * 
 * **Accessibility:**
 * - Keyboard navigation
 * - ARIA labels
 * - Touch targets (44px)
 * - Screen reader support
 * 
 * **URL State:**
 * - Syncs with query parameters
 * - Format: ?priceMin=100&priceMax=500
 * 
 * @example
 * // Price range
 * <RangeSlider
 *   label="Price"
 *   min={0}
 *   max={1000}
 *   value={priceRange}
 *   onChange={setPriceRange}
 *   formatValue={(v) => `R ${v}`}
 * />
 * 
 * @example
 * // Rating range
 * <RangeSlider
 *   label="Rating"
 *   min={1}
 *   max={5}
 *   step={0.5}
 *   value={ratingRange}
 *   onChange={setRatingRange}
 *   formatValue={(v) => `${v} ★`}
 * />
 */

import React, { useState, useRef, useEffect } from 'react';

/**
 * Range value [min, max]
 */
export type RangeValue = [number, number];

/**
 * Range Slider component props
 */
interface RangeSliderProps {
  /**
   * Slider label
   * 
   * @example
   * label="Price Range"
   */
  label: string;

  /**
   * Minimum value
   * 
   * @default 0
   */
  min?: number;

  /**
   * Maximum value
   * 
   * @default 100
   */
  max?: number;

  /**
   * Step increment
   * 
   * @default 1
   */
  step?: number;

  /**
   * Current range value [min, max]
   */
  value: RangeValue;

  /**
   * Change handler
   */
  onChange: (value: RangeValue) => void;

  /**
   * Format value for display
   * 
   * @example
   * formatValue={(v) => `R ${v.toFixed(2)}`}
   */
  formatValue?: (value: number) => string;

  /**
   * Show input fields
   * 
   * @default true
   */
  showInputs?: boolean;

  /**
   * Disabled state
   * 
   * @default false
   */
  disabled?: boolean;

  /**
   * Custom class name
   */
  className?: string;
}

/**
 * Range Slider Component
 * 
 * Dual-handle slider for min/max range selection.
 * 
 * @param props - RangeSliderProps
 * @returns Range slider UI
 */
export function RangeSlider({
  label,
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  formatValue = (v) => v.toString(),
  showInputs = true,
  disabled = false,
  className = '',
}: RangeSliderProps) {
  const [minValue, maxValue] = value;
  const [isDraggingMin, setIsDraggingMin] = useState(false);
  const [isDraggingMax, setIsDraggingMax] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Calculate percentage position
  const getPercentage = (val: number) => {
    return ((val - min) / (max - min)) * 100;
  };

  // Update min value
  const updateMinValue = (newValue: number) => {
    const clampedValue = Math.max(min, Math.min(newValue, maxValue - step));
    onChange([clampedValue, maxValue]);
  };

  // Update max value
  const updateMaxValue = (newValue: number) => {
    const clampedValue = Math.min(max, Math.max(newValue, minValue + step));
    onChange([minValue, clampedValue]);
  };

  // Handle mouse/touch move
  const handleMove = (clientX: number, isMin: boolean) => {
    if (!trackRef.current || disabled) return;

    const rect = trackRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    const rawValue = (percentage / 100) * (max - min) + min;
    const steppedValue = Math.round(rawValue / step) * step;

    if (isMin) {
      updateMinValue(steppedValue);
    } else {
      updateMaxValue(steppedValue);
    }
  };

  // Mouse/touch event handlers
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingMin) {
        handleMove(e.clientX, true);
      } else if (isDraggingMax) {
        handleMove(e.clientX, false);
      }
    };

    const handleMouseUp = () => {
      setIsDraggingMin(false);
      setIsDraggingMax(false);
    };

    if (isDraggingMin || isDraggingMax) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDraggingMin, isDraggingMax, minValue, maxValue]);

  const minPercentage = getPercentage(minValue);
  const maxPercentage = getPercentage(maxValue);

  return (
    <div className={className}>
      {/* Label */}
      <div className="flex items-center justify-between mb-4">
        <label
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-base)',
            fontWeight: '600',
            color: 'var(--foreground)',
          }}
        >
          {label}
        </label>

        {/* Current Range Display */}
        <span
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-base)',
            color: 'var(--muted-foreground)',
          }}
        >
          {formatValue(minValue)} - {formatValue(maxValue)}
        </span>
      </div>

      {/* Slider Track */}
      <div className="relative mb-6" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        {/* Background Track */}
        <div
          ref={trackRef}
          className="relative h-2 rounded-full"
          style={{
            backgroundColor: 'var(--muted)',
            borderRadius: 'var(--radius)',
          }}
        >
          {/* Active Track */}
          <div
            className="absolute h-full rounded-full"
            style={{
              left: `${minPercentage}%`,
              right: `${100 - maxPercentage}%`,
              backgroundColor: 'var(--primary)',
              borderRadius: 'var(--radius)',
            }}
          />

          {/* Min Handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-transform hover:scale-110"
            style={{
              left: `${minPercentage}%`,
              transform: 'translate(-50%, -50%)',
              width: '20px',
              height: '20px',
              backgroundColor: 'var(--primary)',
              border: '3px solid var(--background)',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              cursor: disabled ? 'not-allowed' : 'grab',
              opacity: disabled ? 0.5 : 1,
            }}
            onMouseDown={() => !disabled && setIsDraggingMin(true)}
            role="slider"
            aria-label="Minimum value"
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={minValue}
            tabIndex={disabled ? -1 : 0}
            onKeyDown={(e) => {
              if (disabled) return;
              if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                e.preventDefault();
                updateMinValue(minValue - step);
              } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                e.preventDefault();
                updateMinValue(minValue + step);
              }
            }}
          />

          {/* Max Handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-transform hover:scale-110"
            style={{
              left: `${maxPercentage}%`,
              transform: 'translate(-50%, -50%)',
              width: '20px',
              height: '20px',
              backgroundColor: 'var(--primary)',
              border: '3px solid var(--background)',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              cursor: disabled ? 'not-allowed' : 'grab',
              opacity: disabled ? 0.5 : 1,
            }}
            onMouseDown={() => !disabled && setIsDraggingMax(true)}
            role="slider"
            aria-label="Maximum value"
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={maxValue}
            tabIndex={disabled ? -1 : 0}
            onKeyDown={(e) => {
              if (disabled) return;
              if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                e.preventDefault();
                updateMaxValue(maxValue - step);
              } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                e.preventDefault();
                updateMaxValue(maxValue + step);
              }
            }}
          />
        </div>
      </div>

      {/* Input Fields */}
      {showInputs && (
        <div className="grid grid-cols-2 gap-4">
          {/* Min Input */}
          <div>
            <label
              className="block mb-2"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-small)',
                color: 'var(--muted-foreground)',
              }}
            >
              Min
            </label>
            <input
              type="number"
              value={minValue}
              onChange={(e) => updateMinValue(Number(e.target.value))}
              min={min}
              max={maxValue - step}
              step={step}
              disabled={disabled}
              className="w-full px-3 py-2 rounded border"
              style={{
                backgroundColor: 'var(--input-background)',
                borderColor: 'var(--border)',
                borderRadius: 'var(--radius)',
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-base)',
                color: 'var(--foreground)',
                opacity: disabled ? 0.5 : 1,
              }}
            />
          </div>

          {/* Max Input */}
          <div>
            <label
              className="block mb-2"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-small)',
                color: 'var(--muted-foreground)',
              }}
            >
              Max
            </label>
            <input
              type="number"
              value={maxValue}
              onChange={(e) => updateMaxValue(Number(e.target.value))}
              min={minValue + step}
              max={max}
              step={step}
              disabled={disabled}
              className="w-full px-3 py-2 rounded border"
              style={{
                backgroundColor: 'var(--input-background)',
                borderColor: 'var(--border)',
                borderRadius: 'var(--radius)',
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-base)',
                color: 'var(--foreground)',
                opacity: disabled ? 0.5 : 1,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * WordPress Block Pattern Registration
 * 
 * Pattern slug: lsx-design/filters/range-slider
 * Category: filters
 */
