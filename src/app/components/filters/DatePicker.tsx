/**
 * Date Picker Component
 * 
 * WordPress concept: Date range filter for posts/events
 * Pattern: `lsx-design/filters/date-picker`
 * 
 * Date range picker with calendar interface for filtering by date.
 * Supports single date, date range, and preset ranges.
 * 
 * **Purpose:**
 * - Filter posts by publish date
 * - Event date selection
 * - Booking date ranges
 * - Date-based search
 * 
 * **Features:**
 * - Calendar interface
 * - Date range selection
 * - Preset ranges (Today, This Week, This Month)
 * - Custom range input
 * - Keyboard navigation
 * 
 * **Design System:**
 * - Typography: Lexend for headings, Manrope for dates
 * - Colors: var(--primary) for selected dates
 * - Spacing: Tailwind classes
 * - Fonts: Lexend/Manrope only
 * 
 * **Accessibility:**
 * - Keyboard navigation
 * - ARIA labels
 * - Screen reader support
 * - Date format helpers
 * 
 * **URL State:**
 * - Syncs with query parameters
 * - Format: ?dateFrom=2024-01-01&dateTo=2024-01-31
 * 
 * @example
 * // Single date
 * <DatePicker
 *   label="Select Date"
 *   value={selectedDate}
 *   onChange={setSelectedDate}
 * />
 * 
 * @example
 * // Date range
 * <DatePicker
 *   label="Date Range"
 *   mode="range"
 *   value={dateRange}
 *   onChange={setDateRange}
 *   showPresets
 * />
 */

import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Date picker mode
 */
type DatePickerMode = 'single' | 'range';

/**
 * Date range value
 */
export interface DateRange {
  from: Date | null;
  to: Date | null;
}

/**
 * Date preset
 */
interface DatePreset {
  label: string;
  getValue: () => DateRange;
}

/**
 * Date Picker component props
 */
interface DatePickerProps {
  /**
   * Picker label
   */
  label: string;

  /**
   * Selection mode
   * 
   * @default "single"
   */
  mode?: DatePickerMode;

  /**
   * Selected date (single mode)
   */
  value?: Date | null;

  /**
   * Selected date range (range mode)
   */
  rangeValue?: DateRange;

  /**
   * Change handler (single mode)
   */
  onChange?: (date: Date | null) => void;

  /**
   * Change handler (range mode)
   */
  onRangeChange?: (range: DateRange) => void;

  /**
   * Show date presets
   * 
   * @default true
   */
  showPresets?: boolean;

  /**
   * Minimum selectable date
   */
  minDate?: Date;

  /**
   * Maximum selectable date
   */
  maxDate?: Date;

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
 * Predefined date presets
 */
const datePresets: DatePreset[] = [
  {
    label: 'Today',
    getValue: () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return { from: today, to: today };
    },
  },
  {
    label: 'Yesterday',
    getValue: () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      yesterday.setHours(0, 0, 0, 0);
      return { from: yesterday, to: yesterday };
    },
  },
  {
    label: 'Last 7 Days',
    getValue: () => {
      const today = new Date();
      today.setHours(23, 59, 59, 999);
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      sevenDaysAgo.setHours(0, 0, 0, 0);
      return { from: sevenDaysAgo, to: today };
    },
  },
  {
    label: 'Last 30 Days',
    getValue: () => {
      const today = new Date();
      today.setHours(23, 59, 59, 999);
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      thirtyDaysAgo.setHours(0, 0, 0, 0);
      return { from: thirtyDaysAgo, to: today };
    },
  },
  {
    label: 'This Month',
    getValue: () => {
      const today = new Date();
      const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
      const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      lastDay.setHours(23, 59, 59, 999);
      return { from: firstDay, to: lastDay };
    },
  },
  {
    label: 'Last Month',
    getValue: () => {
      const today = new Date();
      const firstDay = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      const lastDay = new Date(today.getFullYear(), today.getMonth(), 0);
      lastDay.setHours(23, 59, 59, 999);
      return { from: firstDay, to: lastDay };
    },
  },
];

/**
 * Format date to YYYY-MM-DD
 */
function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Format date for display
 */
function formatDisplayDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Get calendar days for a month
 */
function getCalendarDays(year: number, month: number): Date[] {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  const days: Date[] = [];

  // Add empty days for previous month
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(new Date(0)); // Empty placeholder
  }

  // Add days of current month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(new Date(year, month, day));
  }

  return days;
}

/**
 * Check if two dates are the same day
 */
function isSameDay(date1: Date | null, date2: Date | null): boolean {
  if (!date1 || !date2) return false;
  return formatDate(date1) === formatDate(date2);
}

/**
 * Check if date is in range
 */
function isDateInRange(date: Date, range: DateRange): boolean {
  if (!range.from || !range.to) return false;
  const time = date.getTime();
  return time >= range.from.getTime() && time <= range.to.getTime();
}

/**
 * Date Picker Component
 * 
 * Calendar-based date picker with presets.
 * 
 * @param props - DatePickerProps
 * @returns Date picker UI
 */
export function DatePicker({
  label,
  mode = 'single',
  value,
  rangeValue = { from: null, to: null },
  onChange,
  onRangeChange,
  showPresets = true,
  minDate,
  maxDate,
  disabled = false,
  className = '',
}: DatePickerProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const calendarDays = getCalendarDays(year, month);

  // Navigate months
  const previousMonth = () => {
    setCurrentMonth(new Date(year, month - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1));
  };

  // Handle date selection
  const selectDate = (date: Date) => {
    if (disabled) return;
    if (date.getTime() === 0) return; // Empty placeholder

    if (mode === 'single') {
      onChange?.(date);
      setIsOpen(false);
    } else {
      // Range mode
      if (!rangeValue.from || (rangeValue.from && rangeValue.to)) {
        // Start new range
        onRangeChange?.({ from: date, to: null });
      } else {
        // Complete range
        if (date >= rangeValue.from) {
          onRangeChange?.({ from: rangeValue.from, to: date });
          setIsOpen(false);
        } else {
          onRangeChange?.({ from: date, to: rangeValue.from });
          setIsOpen(false);
        }
      }
    }
  };

  // Apply preset
  const applyPreset = (preset: DatePreset) => {
    const range = preset.getValue();
    onRangeChange?.(range);
    setIsOpen(false);
  };

  const displayValue =
    mode === 'single'
      ? value
        ? formatDisplayDate(value)
        : 'Select date'
      : rangeValue.from && rangeValue.to
      ? `${formatDisplayDate(rangeValue.from)} - ${formatDisplayDate(rangeValue.to)}`
      : rangeValue.from
      ? `${formatDisplayDate(rangeValue.from)} - ...`
      : 'Select date range';

  return (
    <div className={`relative ${className}`}>
      {/* Label */}
      <label
        className="block mb-2"
        style={{
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-base)',
          fontWeight: '600',
          color: 'var(--foreground)',
        }}
      >
        {label}
      </label>

      {/* Trigger Button */}
      <button
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 rounded border transition-colors hover:opacity-80"
        style={{
          backgroundColor: 'var(--input-background)',
          borderColor: 'var(--border)',
          borderRadius: 'var(--radius)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1,
        }}
        disabled={disabled}
      >
        <span
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-base)',
            color: value || (rangeValue.from && rangeValue.to) ? 'var(--foreground)' : 'var(--muted-foreground)',
          }}
        >
          {displayValue}
        </span>
        <Calendar className="w-5 h-5" style={{ color: 'var(--muted-foreground)' }} />
      </button>

      {/* Calendar Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Calendar Panel */}
          <div
            className="absolute left-0 mt-2 p-4 rounded border shadow-lg z-50"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
              borderRadius: 'var(--radius-lg)',
              minWidth: '320px',
            }}
          >
            {/* Presets */}
            {showPresets && mode === 'range' && (
              <div className="mb-4 pb-4 border-b" style={{ borderBottomColor: 'var(--border)' }}>
                <div className="grid grid-cols-2 gap-2">
                  {datePresets.map((preset, index) => (
                    <button
                      key={index}
                      onClick={() => applyPreset(preset)}
                      className="px-3 py-2 rounded transition-colors hover:opacity-80"
                      style={{
                        backgroundColor: 'var(--muted)',
                        border: 'none',
                        borderRadius: 'var(--radius)',
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        color: 'var(--foreground)',
                        cursor: 'pointer',
                      }}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={previousMonth}
                className="p-1 rounded transition-colors hover:opacity-80"
                style={{
                  backgroundColor: 'var(--muted)',
                  border: 'none',
                  borderRadius: 'var(--radius)',
                  cursor: 'pointer',
                }}
                aria-label="Previous month"
              >
                <ChevronLeft className="w-5 h-5" style={{ color: 'var(--foreground)' }} />
              </button>

              <span
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: '600',
                  color: 'var(--foreground)',
                }}
              >
                {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </span>

              <button
                onClick={nextMonth}
                className="p-1 rounded transition-colors hover:opacity-80"
                style={{
                  backgroundColor: 'var(--muted)',
                  border: 'none',
                  borderRadius: 'var(--radius)',
                  cursor: 'pointer',
                }}
                aria-label="Next month"
              >
                <ChevronRight className="w-5 h-5" style={{ color: 'var(--foreground)' }} />
              </button>
            </div>

            {/* Day Names */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                <div
                  key={day}
                  className="text-center py-2"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'var(--text-small)',
                    fontWeight: '600',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((date, index) => {
                const isEmpty = date.getTime() === 0;
                const isSelected =
                  mode === 'single'
                    ? isSameDay(date, value || null)
                    : isDateInRange(date, rangeValue);
                const isRangeStart = mode === 'range' && isSameDay(date, rangeValue.from);
                const isRangeEnd = mode === 'range' && isSameDay(date, rangeValue.to);

                return (
                  <button
                    key={index}
                    onClick={() => selectDate(date)}
                    disabled={isEmpty}
                    className="aspect-square flex items-center justify-center rounded transition-colors hover:opacity-80"
                    style={{
                      backgroundColor: isSelected
                        ? 'var(--primary)'
                        : isEmpty
                        ? 'transparent'
                        : 'transparent',
                      color: isSelected ? 'var(--primary-foreground)' : 'var(--foreground)',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-base)',
                      border: 'none',
                      borderRadius: 'var(--radius)',
                      cursor: isEmpty ? 'default' : 'pointer',
                      fontWeight: isRangeStart || isRangeEnd ? '600' : '400',
                    }}
                  >
                    {!isEmpty && date.getDate()}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/**
 * WordPress Block Pattern Registration
 * 
 * Pattern slug: lsx-design/filters/date-picker
 * Category: filters
 */
