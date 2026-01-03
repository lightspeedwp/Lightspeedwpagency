/**
 * Micro-interactions Hook
 * 
 * Provides utilities for adding subtle, delightful micro-interactions.
 * Enhances UX with smooth animations and feedback.
 * 
 * Features:
 * - Hover scale effects
 * - Press/active states
 * - Ripple effects
 * - Smooth transitions
 * - Respects prefers-reduced-motion
 * - 100% design system compliant
 * 
 * @example
 * ```tsx
 * function Button() {
 *   const { hoverScale, activePress } = useMicroInteractions();
 *   return <button {...hoverScale()} {...activePress()}>Click me</button>;
 * }
 * ```
 */

import { useState, useCallback, CSSProperties } from 'react';

interface MicroInteractionOptions {
  /** Scale factor on hover (default: 1.02) */
  scaleOnHover?: number;
  /** Scale factor on press (default: 0.98) */
  scaleOnPress?: number;
  /** Transition duration in ms (default: 150) */
  duration?: number;
  /** Respect prefers-reduced-motion (default: true) */
  respectReducedMotion?: boolean;
}

/**
 * Micro-interactions Hook
 */
export function useMicroInteractions(options: MicroInteractionOptions = {}) {
  const {
    scaleOnHover = 1.02,
    scaleOnPress = 0.98,
    duration = 150,
    respectReducedMotion = true
  } = options;

  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Check for reduced motion preference
  const prefersReducedMotion = respectReducedMotion && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * Hover scale effect
   */
  const hoverScale = useCallback(() => {
    if (prefersReducedMotion) return {};

    return {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      style: {
        transform: isHovered ? `scale(${scaleOnHover})` : 'scale(1)',
        transition: `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`
      } as CSSProperties
    };
  }, [isHovered, scaleOnHover, duration, prefersReducedMotion]);

  /**
   * Active/press effect
   */
  const activePress = useCallback(() => {
    if (prefersReducedMotion) return {};

    return {
      onMouseDown: () => setIsPressed(true),
      onMouseUp: () => setIsPressed(false),
      onMouseLeave: () => setIsPressed(false),
      style: {
        transform: isPressed ? `scale(${scaleOnPress})` : 'scale(1)',
        transition: `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`
      } as CSSProperties
    };
  }, [isPressed, scaleOnPress, duration, prefersReducedMotion]);

  /**
   * Combined hover + press effect
   */
  const hoverAndPress = useCallback(() => {
    if (prefersReducedMotion) return {};

    let scale = 1;
    if (isPressed) scale = scaleOnPress;
    else if (isHovered) scale = scaleOnHover;

    return {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => {
        setIsHovered(false);
        setIsPressed(false);
      },
      onMouseDown: () => setIsPressed(true),
      onMouseUp: () => setIsPressed(false),
      style: {
        transform: `scale(${scale})`,
        transition: `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`
      } as CSSProperties
    };
  }, [isHovered, isPressed, scaleOnHover, scaleOnPress, duration, prefersReducedMotion]);

  /**
   * Lift effect (translate Y on hover)
   */
  const hoverLift = useCallback((liftDistance: number = 4) => {
    if (prefersReducedMotion) return {};

    return {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      style: {
        transform: isHovered ? `translateY(-${liftDistance}px)` : 'translateY(0)',
        transition: `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        boxShadow: isHovered 
          ? '0 12px 24px rgba(0, 0, 0, 0.15)' 
          : '0 4px 6px rgba(0, 0, 0, 0.05)'
      } as CSSProperties
    };
  }, [isHovered, duration, prefersReducedMotion]);

  /**
   * Glow effect on hover
   */
  const hoverGlow = useCallback((color: string = 'var(--primary)') => {
    if (prefersReducedMotion) return {};

    return {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      style: {
        boxShadow: isHovered
          ? `0 0 20px ${color}40, 0 0 40px ${color}20`
          : 'none',
        transition: `box-shadow ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`
      } as CSSProperties
    };
  }, [isHovered, duration, prefersReducedMotion]);

  /**
   * Border color change on hover
   */
  const hoverBorder = useCallback((
    normalColor: string = 'var(--border-soft)',
    hoverColor: string = 'var(--primary)'
  ) => {
    return {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      style: {
        borderColor: isHovered ? hoverColor : normalColor,
        transition: `border-color ${duration}ms ease`
      } as CSSProperties
    };
  }, [isHovered, duration]);

  /**
   * Opacity fade on hover
   */
  const hoverFade = useCallback((
    normalOpacity: number = 1,
    hoverOpacity: number = 0.8
  ) => {
    return {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      style: {
        opacity: isHovered ? hoverOpacity : normalOpacity,
        transition: `opacity ${duration}ms ease`
      } as CSSProperties
    };
  }, [isHovered, duration]);

  return {
    hoverScale,
    activePress,
    hoverAndPress,
    hoverLift,
    hoverGlow,
    hoverBorder,
    hoverFade,
    isHovered,
    isPressed
  };
}

/**
 * Ripple Effect Hook
 * 
 * Creates Material Design-style ripple effect on click.
 * 
 * @example
 * ```tsx
 * function Button() {
 *   const ripple = useRipple();
 *   return <button {...ripple}>Click me</button>;
 * }
 * ```
 */
export function useRipple() {
  const createRipple = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    
    const ripple = document.createElement('span');
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${e.clientX - rect.left - radius}px`;
    ripple.style.top = `${e.clientY - rect.top - radius}px`;
    ripple.classList.add('ripple');

    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(ripple);

    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }, []);

  return {
    onClick: createRipple,
    style: {
      position: 'relative' as const,
      overflow: 'hidden' as const
    }
  };
}

/**
 * Loading Pulse Hook
 * 
 * Adds pulsing animation for loading states.
 * 
 * @example
 * ```tsx
 * function LoadingCard() {
 *   const pulse = useLoadingPulse();
 *   return <div {...pulse}>Loading...</div>;
 * }
 * ```
 */
export function useLoadingPulse() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return {
      style: {
        opacity: 0.6
      } as CSSProperties
    };
  }

  return {
    style: {
      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      opacity: 1
    } as CSSProperties
  };
}

/**
 * Shake Animation Hook
 * 
 * Triggers shake animation (useful for errors).
 * 
 * @example
 * ```tsx
 * function ErrorInput() {
 *   const [shake, triggerShake] = useShake();
 *   
 *   const handleInvalid = () => {
 *     triggerShake();
 *   };
 *   
 *   return <input {...shake} onInvalid={handleInvalid} />;
 * }
 * ```
 */
export function useShake(): [
  { style: CSSProperties },
  () => void
] {
  const [isShaking, setIsShaking] = useState(false);

  const triggerShake = useCallback(() => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  }, []);

  return [
    {
      style: {
        animation: isShaking ? 'shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97)' : 'none'
      }
    },
    triggerShake
  ];
}
