/**
 * useCountUp Hook
 *
 * Animated number counting effect
 * Counts from 0 to target value with easing
 *
 * Features:
 * - Smooth easing animation
 * - Intersection Observer trigger
 * - Configurable duration
 * - Decimal support
 * - Prefix/suffix support
 * - Reduced motion support
 * - TypeScript support
 *
 * Usage:
 * ```tsx
 * const count = useCountUp(1250, { duration: 2000 });
 * <span>{count}</span>
 * ```
 */

import { useState, useEffect, useRef } from 'react';
import { useReducedMotion } from './useReducedMotion';

export interface UseCountUpOptions {
  /** Animation duration in milliseconds */
  duration?: number;
  /** Number of decimal places */
  decimals?: number;
  /** Start counting immediately (don't wait for viewport) */
  startImmediately?: boolean;
  /** Intersection observer threshold */
  threshold?: number;
  /** Easing function */
  easing?: 'linear' | 'ease-out' | 'ease-in-out';
}

const easeOutQuad = (t: number): number => t * (2 - t);
const easeInOutQuad = (t: number): number =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

export const useCountUp = (
  end: number,
  options: UseCountUpOptions = {}
): number => {
  const {
    duration = 2000,
    decimals = 0,
    startImmediately = false,
    threshold = 0.5,
    easing = 'ease-out',
  } = options;

  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(startImmediately);
  const elementRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Reduced motion: show final value immediately
  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(end);
      setHasStarted(true);
    }
  }, [prefersReducedMotion, end]);

  // Intersection Observer to trigger animation
  useEffect(() => {
    if (startImmediately || prefersReducedMotion || hasStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [startImmediately, prefersReducedMotion, hasStarted, threshold]);

  // Count animation
  useEffect(() => {
    if (!hasStarted || prefersReducedMotion) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Apply easing
      let easedProgress = progress;
      if (easing === 'ease-out') {
        easedProgress = easeOutQuad(progress);
      } else if (easing === 'ease-in-out') {
        easedProgress = easeInOutQuad(progress);
      }

      const currentCount = end * easedProgress;
      setCount(Number(currentCount.toFixed(decimals)));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [hasStarted, end, duration, decimals, easing, prefersReducedMotion]);

  return count;
};

/**
 * useCountUpRef Hook
 *
 * Returns a ref to attach to the element that should trigger the count
 * Use this when you need to control which element triggers the animation
 *
 * Usage:
 * ```tsx
 * const { count, ref } = useCountUpRef(1250);
 * <div ref={ref}>{count}</div>
 * ```
 */
export const useCountUpRef = (
  end: number,
  options: UseCountUpOptions = {}
) => {
  const [hasStarted, setHasStarted] = useState(options.startImmediately || false);
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const {
    duration = 2000,
    decimals = 0,
    threshold = 0.5,
    easing = 'ease-out',
  } = options;

  // Reduced motion
  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(end);
      setHasStarted(true);
    }
  }, [prefersReducedMotion, end]);

  // Intersection Observer
  useEffect(() => {
    if (prefersReducedMotion || hasStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [prefersReducedMotion, hasStarted, threshold]);

  // Animation
  useEffect(() => {
    if (!hasStarted || prefersReducedMotion) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      let easedProgress = progress;
      if (easing === 'ease-out') {
        easedProgress = easeOutQuad(progress);
      } else if (easing === 'ease-in-out') {
        easedProgress = easeInOutQuad(progress);
      }

      const currentCount = end * easedProgress;
      setCount(Number(currentCount.toFixed(decimals)));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [hasStarted, end, duration, decimals, easing, prefersReducedMotion]);

  return { count, ref: elementRef };
};
