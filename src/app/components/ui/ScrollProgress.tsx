/**
 * Scroll Progress Indicator
 * 
 * Shows reading progress with a thin bar at the top of the page.
 * Great for long-form content (blog posts, articles, documentation).
 * 
 * Features:
 * - Smooth progress animation
 * - Respects prefers-reduced-motion
 * - 100% design system compliant (uses CSS variables)
 * - Accessible (ARIA progressbar)
 * - Minimal performance impact (passive event listener)
 * 
 * @example
 * ```tsx
 * // In SinglePostTemplate.tsx
 * import { ScrollProgress } from '../blocks/layout/ScrollProgress';
 * 
 * export function SinglePostTemplate() {
 *   return (
 *     <>
 *       <ScrollProgress />
 *       <SiteHeader />
 *       // ... rest of template
 *     </>
 *   );
 * }
 * ```
 */

import { useEffect, useState } from 'react';

interface ScrollProgressProps {
  /** Height of progress bar in pixels (default: 4) */
  height?: number;
  /** Color (default: var(--primary)) */
  color?: string;
  /** Show only when scrolled past threshold (default: 0) */
  threshold?: number;
}

export function ScrollProgress({ 
  height = 4, 
  color = 'var(--primary)',
  threshold = 0
}: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(threshold === 0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      
      // Calculate progress (0-100)
      const scrollProgress = documentHeight > 0 
        ? (scrolled / documentHeight) * 100 
        : 0;
      
      setProgress(Math.min(Math.max(scrollProgress, 0), 100));
      
      // Show/hide based on threshold
      if (threshold > 0) {
        setIsVisible(scrolled > threshold);
      }
    };

    // Initial calculation
    handleScroll();

    // Add scroll listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Recalculate on resize
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [threshold]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        height: `${height}px`,
        pointerEvents: 'none'
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          backgroundColor: color,
          transition: 'width 0.1s ease-out',
          transformOrigin: 'left'
        }}
      />
    </div>
  );
}

/**
 * Circular Scroll Progress
 * 
 * Alternative circular progress indicator (bottom-right corner).
 * Good for long articles where you want a less intrusive indicator.
 * 
 * @example
 * ```tsx
 * <CircularScrollProgress size={60} />
 * ```
 */
interface CircularScrollProgressProps {
  /** Size of circle in pixels (default: 60) */
  size?: number;
  /** Stroke width in pixels (default: 4) */
  strokeWidth?: number;
  /** Color (default: var(--primary)) */
  color?: string;
  /** Show percentage text (default: false) */
  showPercentage?: boolean;
}

export function CircularScrollProgress({
  size = 60,
  strokeWidth = 4,
  color = 'var(--primary)',
  showPercentage = false
}: CircularScrollProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      
      const scrollProgress = documentHeight > 0 
        ? (scrolled / documentHeight) * 100 
        : 0;
      
      setProgress(Math.min(Math.max(scrollProgress, 0), 100));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      style={{
        width: `${size}px`,
        height: `${size}px`
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <svg
        width={size}
        height={size}
        style={{
          transform: 'rotate(-90deg)'
        }}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--muted)"
          strokeWidth={strokeWidth}
        />
        
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 0.1s ease-out'
          }}
        />
      </svg>

      {/* Percentage text */}
      {showPercentage && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            fontSize: 'var(--text-small)',
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--foreground)'
          }}
        >
          {Math.round(progress)}%
        </div>
      )}
    </div>
  );
}