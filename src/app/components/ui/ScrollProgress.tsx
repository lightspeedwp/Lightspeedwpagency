/**
 * ScrollProgress Component
 *
 * Visual indicator of page scroll progress
 * Shows a bar at top of page
 *
 * Features:
 * - Real-time scroll tracking
 * - Smooth progress bar
 * - Customizable color
 * - Fixed positioning
 *
 * Design System:
 * - 100% CSS variables
 * - BEM naming (.scroll-progress)
 *
 * Usage:
 * ```tsx
 * <ScrollProgress />
 * ```
 */

import { useState, useEffect } from 'react';

export interface ScrollProgressProps {
  /** Progress bar color (CSS variable or hex) */
  color?: string;
  /** Progress bar height */
  height?: number;
}

export const ScrollProgress = ({
  color = 'var(--primary)',
  height = 3,
}: ScrollProgressProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(Math.min(scrollPercent, 100));
    };

    // Initial update
    updateProgress();

    // Listen to scroll
    window.addEventListener('scroll', updateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return (
    <div className="wp-fixed wp-top-0 wp-left-0 wp-right-0 wp-z-50 wp-pointer-events-none wp-bg-transparent" style={{ height: `${height}px` }}>
      <div
        className="wp-h-full wp-transition-all wp-duration-150 wp-ease-out"
        style={{
          width: `${progress}%`,
          background: color,
        }}
      />
    </div>
  );
};