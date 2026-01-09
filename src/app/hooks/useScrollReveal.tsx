/**
 * useScrollReveal Hook
 * 
 * Animates elements when they scroll into view.
 * Supports fade-in, slide-up, scale, and stagger animations.
 * 
 * @example
 * const { ref, isVisible } = useScrollReveal({ animation: 'fade-up' });
 * 
 * <div ref={ref}>
 *   Content fades and slides up when scrolled into view
 * </div>
 */

import { useState, useEffect, useRef } from 'react';
import React from 'react';

type AnimationType = 'fade' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'none';

interface ScrollRevealOptions {
  animation?: AnimationType;
  duration?: number;          // Animation duration in ms (default: 600)
  delay?: number;             // Initial delay in ms (default: 0)
  threshold?: number;         // Intersection observer threshold (default: 0.1)
  rootMargin?: string;        // Intersection observer root margin (default: '0px')
  once?: boolean;             // Animate only once (default: true)
  stagger?: number;           // Stagger delay for children in ms (default: 0)
  respectReducedMotion?: boolean; // Respect prefers-reduced-motion (default: true)
}

interface ScrollRevealReturn {
  ref: React.RefObject<HTMLElement>;
  isVisible: boolean;
  style: React.CSSProperties;
}

/**
 * Custom hook for scroll-triggered reveal animations
 * 
 * @param options - Configuration options
 * @returns Ref, visibility state, and animation styles
 */
export function useScrollReveal(options: ScrollRevealOptions = {}): ScrollRevealReturn {
  const {
    animation = 'fade-up',
    duration = 600,
    delay = 0,
    threshold = 0.1,
    rootMargin = '0px',
    once = true,
    respectReducedMotion = true,
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Check for reduced motion preference
  const prefersReducedMotion = respectReducedMotion && 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Skip animation if reduced motion is preferred
    if (prefersReducedMotion) {
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          if (once) {
            setHasAnimated(true);
            observer.disconnect();
          }
        } else if (!once && hasAnimated) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once, hasAnimated, prefersReducedMotion]);

  // Get animation transform and opacity
  const getAnimationStyle = (): React.CSSProperties => {
    if (prefersReducedMotion || animation === 'none') {
      return { opacity: 1 };
    }

    const baseStyle: React.CSSProperties = {
      transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      willChange: 'opacity, transform',
    };

    if (!isVisible) {
      switch (animation) {
        case 'fade':
          return {
            ...baseStyle,
            opacity: 0,
          };
        case 'fade-up':
          return {
            ...baseStyle,
            opacity: 0,
            transform: 'translateY(40px)',
          };
        case 'fade-down':
          return {
            ...baseStyle,
            opacity: 0,
            transform: 'translateY(-40px)',
          };
        case 'fade-left':
          return {
            ...baseStyle,
            opacity: 0,
            transform: 'translateX(40px)',
          };
        case 'fade-right':
          return {
            ...baseStyle,
            opacity: 0,
            transform: 'translateX(-40px)',
          };
        case 'scale':
          return {
            ...baseStyle,
            opacity: 0,
            transform: 'scale(0.9)',
          };
        default:
          return {
            ...baseStyle,
            opacity: 0,
          };
      }
    }

    // Visible state
    return {
      ...baseStyle,
      opacity: 1,
      transform: 'translate(0, 0) scale(1)',
    };
  };

  return {
    ref,
    isVisible,
    style: getAnimationStyle(),
  };
}

/**
 * useStaggerReveal Hook
 * 
 * Reveals multiple children with staggered delays.
 * Perfect for card grids, lists, and feature sections.
 * 
 * @example
 * const { containerRef, itemStyle } = useStaggerReveal({
 *   stagger: 100,
 *   animation: 'fade-up'
 * });
 * 
 * <div ref={containerRef}>
 *   {items.map((item, i) => (
 *     <div key={item.id} style={itemStyle(i)}>
 *       {item.content}
 *     </div>
 *   ))}
 * </div>
 */
interface StaggerRevealOptions extends ScrollRevealOptions {
  stagger?: number;
}

interface StaggerRevealReturn {
  containerRef: React.RefObject<HTMLElement>;
  isVisible: boolean;
  itemStyle: (index: number) => React.CSSProperties;
}

export function useStaggerReveal(options: StaggerRevealOptions = {}): StaggerRevealReturn {
  const {
    stagger = 100,
    animation = 'fade-up',
    duration = 600,
    threshold = 0.1,
    rootMargin = '0px',
    once = true,
    respectReducedMotion = true,
  } = options;

  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const prefersReducedMotion = respectReducedMotion && 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once, prefersReducedMotion]);

  const itemStyle = (index: number): React.CSSProperties => {
    if (prefersReducedMotion) {
      return { opacity: 1 };
    }

    const itemDelay = index * stagger;
    const baseStyle: React.CSSProperties = {
      transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${itemDelay}ms, transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${itemDelay}ms`,
      willChange: 'opacity, transform',
    };

    if (!isVisible) {
      switch (animation) {
        case 'fade':
          return {
            ...baseStyle,
            opacity: 0,
          };
        case 'fade-up':
          return {
            ...baseStyle,
            opacity: 0,
            transform: 'translateY(40px)',
          };
        case 'fade-down':
          return {
            ...baseStyle,
            opacity: 0,
            transform: 'translateY(-40px)',
          };
        case 'fade-left':
          return {
            ...baseStyle,
            opacity: 0,
            transform: 'translateX(40px)',
          };
        case 'fade-right':
          return {
            ...baseStyle,
            opacity: 0,
            transform: 'translateX(-40px)',
          };
        case 'scale':
          return {
            ...baseStyle,
            opacity: 0,
            transform: 'scale(0.9)',
          };
        default:
          return {
            ...baseStyle,
            opacity: 0,
          };
      }
    }

    return {
      ...baseStyle,
      opacity: 1,
      transform: 'translate(0, 0) scale(1)',
    };
  };

  return {
    containerRef,
    isVisible,
    itemStyle,
  };
}

/**
 * ScrollReveal Component
 * 
 * Wrapper component for scroll-triggered animations.
 * Uses 100% design system compliance.
 * 
 * @example
 * <ScrollReveal animation="fade-up" duration={600}>
 *   <div className="p-6" style={{ backgroundColor: 'var(--card)' }}>
 *     Content that animates on scroll
 *   </div>
 * </ScrollReveal>
 */
interface ScrollRevealProps extends ScrollRevealOptions {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
}

export function ScrollReveal({
  children,
  as: Component = 'div',
  className,
  style: customStyle,
  ...options
}: ScrollRevealProps) {
  const { ref, style } = useScrollReveal(options);

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        ...style,
        ...customStyle,
      }}
    >
      {children}
    </Component>
  );
}

/**
 * StaggerReveal Component
 * 
 * Wrapper component for staggered reveal animations.
 * 
 * @example
 * <StaggerReveal stagger={100} animation="fade-up">
 *   {items.map((item) => (
 *     <div key={item.id} style={{ backgroundColor: 'var(--card)' }}>
 *       {item.content}
 *     </div>
 *   ))}
 * </StaggerReveal>
 */
interface StaggerRevealProps extends StaggerRevealOptions {
  children: React.ReactNode[];
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
}

export function StaggerReveal({
  children,
  as: Component = 'div',
  className,
  style: customStyle,
  ...options
}: StaggerRevealProps) {
  const { containerRef, itemStyle } = useStaggerReveal(options);

  return (
    <Component
      ref={containerRef}
      className={className}
      style={customStyle}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            style: {
              ...itemStyle(index),
              ...(child.props.style || {}),
            },
          } as any);
        }
        return child;
      })}
    </Component>
  );
}
