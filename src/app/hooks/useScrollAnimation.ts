/**
 * Scroll Animation Hook
 * 
 * Detects when elements enter/exit viewport and triggers animations.
 * Respects prefers-reduced-motion.
 * 
 * @example
 * const ref = useScrollAnimation({ animation: 'fade-in', threshold: 0.2 });
 * return <div ref={ref}>Animated content</div>;
 */

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

export interface ScrollAnimationOptions {
  /** Animation type */
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'zoom-in' | 'zoom-out';
  /** Intersection threshold (0-1) */
  threshold?: number;
  /** Delay before animation (ms) */
  delay?: number;
  /** Animation duration (ms) */
  duration?: number;
  /** Only animate once */
  once?: boolean;
  /** Root margin */
  rootMargin?: string;
}

export function useScrollAnimation<T extends HTMLElement>({
  animation = 'fade-in',
  threshold = 0.1,
  delay = 0,
  duration = 600,
  once = true,
  rootMargin = '0px',
}: ScrollAnimationOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Check for reduced motion preference (reactive — updates if user toggles mid-session)
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Skip animation if reduced motion is preferred
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    // Skip if already animated (when once is true)
    if (once && hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            if (once) {
              setHasAnimated(true);
            }
          }, delay);

          // Disconnect if once is true
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, delay, once, hasAnimated, rootMargin, prefersReducedMotion]);

  // Apply animation styles
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const getInitialTransform = () => {
      switch (animation) {
        case 'slide-up':
          return 'translateY(40px)';
        case 'slide-down':
          return 'translateY(-40px)';
        case 'slide-left':
          return 'translateX(40px)';
        case 'slide-right':
          return 'translateX(-40px)';
        case 'zoom-in':
          return 'scale(0.8)';
        case 'zoom-out':
          return 'scale(1.2)';
        default:
          return 'none';
      }
    };

    // Initial state (hidden)
    if (!isVisible) {
      element.style.opacity = '0';
      element.style.transform = getInitialTransform();
      element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
    } else {
      // Animated state (visible)
      element.style.opacity = '1';
      element.style.transform = 'translateY(0) translateX(0) scale(1)';
    }
  }, [isVisible, animation, duration]);

  return ref;
}

/**
 * Stagger Animation Hook
 * 
 * Animates child elements with staggered delays.
 */
export function useStaggerAnimation<T extends HTMLElement>(
  itemCount: number,
  options: ScrollAnimationOptions & { staggerDelay?: number } = {}
) {
  const { staggerDelay = 100, ...animationOptions } = options;
  const refs = useRef<(T | null)[]>([]);

  // Create refs array
  if (refs.current.length !== itemCount) {
    refs.current = Array(itemCount).fill(null);
  }

  const setRef = (index: number) => (el: T | null) => {
    refs.current[index] = el;
  };

  // Check for reduced motion preference (reactive)
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const elements = refs.current.filter((el): el is T => el !== null);
    if (elements.length === 0) return;

    // Check for reduced motion
    if (prefersReducedMotion) {
      elements.forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, index * staggerDelay);
          });

          observer.disconnect();
        }
      },
      {
        threshold: animationOptions.threshold || 0.1,
      }
    );

    // Initialize styles
    elements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity ${animationOptions.duration || 600}ms ease, transform ${animationOptions.duration || 600}ms ease`;
    });

    // Observe first element
    if (elements[0]) {
      observer.observe(elements[0]);
    }

    return () => observer.disconnect();
  }, [itemCount, staggerDelay, animationOptions.threshold, animationOptions.duration, prefersReducedMotion]);

  return { setRef, refs };
}