/**
 * Countdown Timer Component
 * 
 * WordPress concept: Dynamic countdown widget
 * Pattern: `lsx-design/content/countdown-timer`
 * 
 * Real-time countdown timer with multiple display formats,
 * timezone support, and completion callbacks.
 * 
 * **Purpose:**
 * - Create urgency for sales/events
 * - Display time remaining for limited offers
 * - Show event start/end times
 * - Drive conversions through FOMO
 * 
 * **Features:**
 * - Multiple display formats (days, hours, minutes, seconds)
 * - Timezone support
 * - Custom labels
 * - Completion callbacks
 * - Auto-refresh every second
 * 
 * **Design System:**
 * - Typography: Lexend for numbers, Manrope for labels
 * - Colors: var(--primary) for highlights
 * - Spacing: Tailwind classes
 * - Fonts: Design system fonts only
 * 
 * **Accessibility:**
 * - ARIA live regions for screen readers
 * - Semantic HTML
 * - High contrast
 * - Keyboard accessible
 * 
 * **Performance:**
 * - Efficient re-renders (1s intervals)
 * - Cleanup on unmount
 * - Memoized calculations
 * 
 * @example
 * // Sale countdown
 * <CountdownTimer
 *   targetDate="2024-12-31T23:59:59"
 *   title="Flash Sale Ends In"
 *   variant="card"
 * />
 * 
 * @example
 * // Event countdown
 * <CountdownTimer
 *   targetDate="2024-06-15T09:00:00"
 *   title="Event Starts In"
 *   variant="inline"
 *   showLabels
 * />
 */

import React, { useState, useEffect } from 'react';
import { Clock, Calendar, AlertCircle } from 'lucide-react';

/**
 * Time remaining structure
 */
interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

/**
 * Countdown Timer component props
 */
interface CountdownTimerProps {
  /**
   * Target date/time (ISO 8601 format or Date object)
   * 
   * @example
   * targetDate="2024-12-31T23:59:59"
   * targetDate="2024-06-15T09:00:00Z"
   * targetDate={new Date('2024-12-31')}
   */
  targetDate: string | Date;

  /**
   * Timer title/heading
   * 
   * @example
   * title="Flash Sale Ends In"
   */
  title?: string;

  /**
   * Display variant
   * 
   * - card: Full card with background
   * - inline: Compact inline display
   * - large: Large display for hero sections
   * 
   * @default "card"
   */
  variant?: 'card' | 'inline' | 'large';

  /**
   * Show unit labels (days, hours, etc.)
   * 
   * @default true
   */
  showLabels?: boolean;

  /**
   * Show days
   * 
   * @default true
   */
  showDays?: boolean;

  /**
   * Show hours
   * 
   * @default true
   */
  showHours?: boolean;

  /**
   * Show minutes
   * 
   * @default true
   */
  showMinutes?: boolean;

  /**
   * Show seconds
   * 
   * @default true
   */
  showSeconds?: boolean;

  /**
   * Custom completion message
   * 
   * @default "Time's up!"
   */
  completionMessage?: string;

  /**
   * Callback when countdown completes
   */
  onComplete?: () => void;

  /**
   * Show completion message
   * 
   * @default true
   */
  showCompletionMessage?: boolean;

  /**
   * Custom class name
   */
  className?: string;
}

/**
 * Calculate time remaining
 */
function calculateTimeRemaining(targetDate: Date): TimeRemaining {
  const now = new Date().getTime();
  const target = targetDate.getTime();
  const total = target - now;

  if (total <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      total: 0,
    };
  }

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((total % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
    total,
  };
}

/**
 * Format number with leading zero
 */
function formatNumber(num: number): string {
  return num.toString().padStart(2, '0');
}

/**
 * Countdown Timer Component
 * 
 * Real-time countdown with auto-refresh.
 * 
 * @param props - CountdownTimerProps
 * @returns Countdown timer display
 */
export function CountdownTimer({
  targetDate,
  title,
  variant = 'card',
  showLabels = true,
  showDays = true,
  showHours = true,
  showMinutes = true,
  showSeconds = true,
  completionMessage = "Time's up!",
  onComplete,
  showCompletionMessage = true,
  className = '',
}: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(() =>
    calculateTimeRemaining(new Date(targetDate))
  );
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const targetDateTime = new Date(targetDate);

    // Update every second
    const interval = setInterval(() => {
      const remaining = calculateTimeRemaining(targetDateTime);
      setTimeRemaining(remaining);

      // Check if completed
      if (remaining.total <= 0 && !isComplete) {
        setIsComplete(true);
        onComplete?.();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, isComplete, onComplete]);

  // Time unit component
  const TimeUnit = ({ value, label }: { value: number; label: string }) => {
    const sizeClasses = {
      card: {
        numberSize: 'var(--text-h2)',
        labelSize: 'var(--text-small)',
        padding: 'p-4',
      },
      inline: {
        numberSize: 'var(--text-lg)',
        labelSize: 'var(--text-small)',
        padding: 'p-2',
      },
      large: {
        numberSize: 'var(--text-h1)',
        labelSize: 'var(--text-base)',
        padding: 'p-6',
      },
    };

    const sizes = sizeClasses[variant];

    return (
      <div
        className={`flex flex-col items-center justify-center ${sizes.padding} rounded`}
        style={{
          backgroundColor: variant === 'inline' ? 'transparent' : 'var(--muted)',
          borderRadius: 'var(--radius)',
          minWidth: variant === 'large' ? '120px' : variant === 'card' ? '80px' : '60px',
        }}
      >
        <div
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: sizes.numberSize,
            fontWeight: '700',
            color: 'var(--primary)',
            lineHeight: '1',
          }}
        >
          {formatNumber(value)}
        </div>
        {showLabels && (
          <div
            className="mt-1"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: sizes.labelSize,
              color: 'var(--muted-foreground)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {label}
          </div>
        )}
      </div>
    );
  };

  // Completion message
  if (isComplete && showCompletionMessage) {
    return (
      <div
        className={`flex items-center justify-center gap-3 p-6 rounded ${className}`}
        style={{
          backgroundColor: 'var(--primary)',
          borderRadius: 'var(--radius-lg)',
        }}
        role="status"
        aria-live="polite"
      >
        <AlertCircle
          className="w-6 h-6"
          style={{ color: 'var(--primary-foreground)' }}
        />
        <p
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-lg)',
            fontWeight: '600',
            color: 'var(--primary-foreground)',
          }}
        >
          {completionMessage}
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Title */}
      {title && (
        <div className="flex items-center justify-center gap-2 mb-4">
          <Clock
            className="w-5 h-5"
            style={{ color: 'var(--primary)' }}
          />
          <h3
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: variant === 'large' ? 'var(--text-h2)' : 'var(--text-h4)',
              fontWeight: '600',
              color: 'var(--foreground)',
              textAlign: 'center',
            }}
          >
            {title}
          </h3>
        </div>
      )}

      {/* Countdown Display */}
      <div
        className={`flex items-center justify-center ${variant === 'inline' ? 'gap-2' : 'gap-4'}`}
        role="timer"
        aria-live="polite"
        aria-atomic="true"
      >
        {showDays && <TimeUnit value={timeRemaining.days} label="Days" />}
        {showHours && <TimeUnit value={timeRemaining.hours} label="Hours" />}
        {showMinutes && <TimeUnit value={timeRemaining.minutes} label="Min" />}
        {showSeconds && <TimeUnit value={timeRemaining.seconds} label="Sec" />}
      </div>
    </div>
  );
}

/**
 * Flash Sale Countdown
 * 
 * Pre-configured countdown for sales.
 */
interface FlashSaleCountdownProps {
  endDate: string | Date;
  title?: string;
  className?: string;
}

export function FlashSaleCountdown({
  endDate,
  title = '🔥 Flash Sale Ends In',
  className = '',
}: FlashSaleCountdownProps) {
  return (
    <div
      className={`p-6 rounded ${className}`}
      style={{
        backgroundColor: 'var(--card)',
        borderRadius: 'var(--radius-lg)',
        border: '2px solid var(--primary)',
      }}
    >
      <CountdownTimer
        targetDate={endDate}
        title={title}
        variant="card"
        completionMessage="Sale Ended!"
      />
    </div>
  );
}

/**
 * Event Countdown
 * 
 * Pre-configured countdown for events.
 */
interface EventCountdownProps {
  eventDate: string | Date;
  eventName: string;
  className?: string;
}

export function EventCountdown({
  eventDate,
  eventName,
  className = '',
}: EventCountdownProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3 mb-4">
        <Calendar
          className="w-6 h-6"
          style={{ color: 'var(--primary)' }}
        />
        <h3
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h3)',
            fontWeight: '600',
            color: 'var(--foreground)',
          }}
        >
          {eventName}
        </h3>
      </div>

      <CountdownTimer
        targetDate={eventDate}
        title="Starts In"
        variant="large"
        completionMessage="Event is Live!"
      />
    </div>
  );
}

/**
 * Inline Countdown
 * 
 * Compact inline countdown for banners.
 */
interface InlineCountdownProps {
  targetDate: string | Date;
  prefix?: string;
  className?: string;
}

export function InlineCountdown({
  targetDate,
  prefix = 'Offer ends in',
  className = '',
}: InlineCountdownProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Clock
        className="w-5 h-5"
        style={{ color: 'var(--primary)' }}
      />
      <span
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'var(--text-base)',
          color: 'var(--foreground)',
        }}
      >
        {prefix}:
      </span>
      <CountdownTimer
        targetDate={targetDate}
        variant="inline"
        showLabels={false}
        showDays={false}
      />
    </div>
  );
}

/**
 * WordPress Block Pattern Registration
 * 
 * Pattern slug: lsx-design/content/countdown-timer
 * Category: content
 * 
 * Example WordPress shortcode:
 * 
 * ```php
 * function lsx_countdown_shortcode( $atts ) {
 *   $atts = shortcode_atts( array(
 *     'date' => '',
 *     'title' => 'Countdown',
 *     'variant' => 'card',
 *   ), $atts );
 *   
 *   if ( empty( $atts['date'] ) ) {
 *     return '<p>Please specify a target date.</p>';
 *   }
 *   
 *   ob_start();
 *   ?>
 *   <div class="countdown-timer" data-target-date="<?php echo esc_attr( $atts['date'] ); ?>">
 *     <h3><?php echo esc_html( $atts['title'] ); ?></h3>
 *     <div class="countdown-display">
 *       <div class="countdown-unit">
 *         <span class="countdown-value" data-unit="days">00</span>
 *         <span class="countdown-label">Days</span>
 *       </div>
 *       <div class="countdown-unit">
 *         <span class="countdown-value" data-unit="hours">00</span>
 *         <span class="countdown-label">Hours</span>
 *       </div>
 *       <div class="countdown-unit">
 *         <span class="countdown-value" data-unit="minutes">00</span>
 *         <span class="countdown-label">Minutes</span>
 *       </div>
 *       <div class="countdown-unit">
 *         <span class="countdown-value" data-unit="seconds">00</span>
 *         <span class="countdown-label">Seconds</span>
 *       </div>
 *     </div>
 *   </div>
 *   <?php
 *   return ob_get_clean();
 * }
 * add_shortcode( 'countdown', 'lsx_countdown_shortcode' );
 * ```
 */
