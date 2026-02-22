/**
 * Scroll Animation Utilities
 * 
 * Reusable Motion variants and hooks for scroll-triggered animations.
 * Uses motion/react (Framer Motion) for smooth, performant animations.
 * 
 * Features:
 * - Fade in animations
 * - Slide in from various directions
 * - Scale animations
 * - Stagger effects for lists
 * - Scroll progress indicators
 * 
 * @example
 * ```tsx
 * <motion.div variants={fadeInUp} initial="hidden" whileInView="visible">
 *   Content
 * </motion.div>
 * ```
 */

import { Variants } from 'motion/react';
import { prefersReducedMotion } from './animations';

/**
 * Fade In Animation
 * Simple opacity fade with configurable duration
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

/**
 * Fade In Up Animation
 * Opacity + vertical movement (most common)
 */
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] // Custom ease for smooth deceleration
    }
  }
};

/**
 * Fade In Down Animation
 * Opacity + downward movement
 */
export const fadeInDown: Variants = {
  hidden: { 
    opacity: 0, 
    y: -40 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * Fade In Left Animation
 * Opacity + horizontal movement from left
 */
export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -40 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * Fade In Right Animation
 * Opacity + horizontal movement from right
 */
export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 40 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * Scale In Animation
 * Opacity + scale effect (zoom in)
 */
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * Scale Out Animation
 * Opacity + scale effect (zoom out)
 */
export const scaleOut: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 1.1 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * Slide In Up Animation
 * More dramatic vertical movement (no fade)
 */
export const slideInUp: Variants = {
  hidden: { 
    y: 100 
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * Stagger Container
 * Parent container for staggered children animations
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

/**
 * Stagger Item
 * Child element within staggered container
 */
export const staggerItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * Card Hover Animation
 * Interactive hover effect for cards
 */
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  hover: {
    scale: 1.02,
    y: -8,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

/**
 * Button Press Animation
 * Tactile feedback for buttons
 */
export const buttonPress = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  },
  press: { 
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: 'easeInOut'
    }
  }
};

/**
 * Reveal Animation
 * Gradual reveal with clip-path (for text/images)
 */
export const reveal: Variants = {
  hidden: {
    opacity: 0,
    clipPath: 'inset(0 100% 0 0)'
  },
  visible: {
    opacity: 1,
    clipPath: 'inset(0 0% 0 0)',
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * Viewport Options
 * Recommended settings for whileInView animations
 */
export const viewportOptions = {
  once: true, // Animate only once
  amount: 0.3, // Trigger when 30% visible
  margin: '0px 0px -100px 0px' // Trigger slightly before element enters viewport
};

/**
 * Viewport Options (Repeat)
 * For animations that should repeat on scroll
 */
export const viewportRepeat = {
  once: false,
  amount: 0.5,
  margin: '0px 0px -50px 0px'
};

/**
 * Reduced Motion Variants
 * Respects user's motion preferences
 */
export const createAccessibleVariants = (variants: Variants): Variants => {
  const reducedMotion = prefersReducedMotion();
  
  if (reducedMotion) {
    // Return simplified variants without motion
    return {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 0.01 }
      }
    };
  }
  
  return variants;
};

/**
 * Scroll Progress Hook
 * Track scroll progress for progress bars/indicators
 * 
 * @example
 * ```tsx
 * const { scrollYProgress } = useViewportScroll();
 * <motion.div style={{ scaleX: scrollYProgress }} />
 * ```
 */
export const scrollProgressConfig = {
  style: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    backgroundColor: 'var(--primary)',
    transformOrigin: '0%',
    zIndex: 9999
  }
};

/**
 * Parallax Effect
 * Simple parallax scrolling
 */
export const parallaxVariants = {
  initial: { y: 0 },
  animate: (custom: number = 50) => ({
    y: custom,
    transition: {
      duration: 0,
      ease: 'linear'
    }
  })
};

/**
 * Bounce In Animation
 * Playful bounce effect
 */
export const bounceIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15
    }
  }
};

/**
 * Rotate In Animation
 * Spinning entrance effect
 */
export const rotateIn: Variants = {
  hidden: {
    opacity: 0,
    rotate: -180
  },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * Blur In Animation
 * Opacity + blur effect (modern)
 */
export const blurIn: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)'
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * Slide and Fade
 * Combined slide + fade for dramatic effect
 */
export const slideAndFade: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    x: -20
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

/**
 * Type Animation Variants
 * For text that types in character by character
 */
export const typeAnimation = {
  hidden: { width: 0 },
  visible: {
    width: 'auto',
    transition: {
      duration: 2,
      ease: 'linear'
    }
  }
};

/**
 * Default Animation Config
 * Recommended defaults for most use cases
 */
export const defaultAnimationConfig = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: viewportOptions,
  variants: fadeInUp
};

/**
 * Quick Animation Presets
 * Ready-to-use animation configurations
 */
export const animationPresets = {
  // Simple fade
  fade: {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: viewportOptions,
    variants: fadeIn
  },
  
  // Slide up (most common)
  slideUp: {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: viewportOptions,
    variants: fadeInUp
  },
  
  // Scale (for emphasis)
  scale: {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: viewportOptions,
    variants: scaleIn
  },
  
  // Stagger (for lists)
  stagger: {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: viewportOptions,
    variants: staggerContainer
  }
};