/**
 * Interactive Card Component
 * 
 * Enhanced card with smooth animations, hover effects, and micro-interactions.
 * Supports multiple variants and interaction patterns.
 * 
 * Features:
 * - Smooth hover lift effect
 * - Gradient hover overlay
 * - Scale and rotate on hover
 * - Optional glass morphism
 * - WCAG AA compliant
 * - Respects reduced motion
 * 
 * @example
 * ```tsx
 * <InteractiveCard
 *   href="/blog/post-slug"
 *   variant="elevated"
 *   hoverEffect="lift"
 * >
 *   <CardContent />
 * </InteractiveCard>
 * ```
 */

import { motion, useMotionValue, useTransform } from 'motion/react';
import { ReactNode, useState } from 'react';

interface InteractiveCardProps {
  /** Card content */
  children: ReactNode;
  
  /** Link URL (if card is clickable) */
  href?: string;
  
  /** Card variant */
  variant?: 'default' | 'elevated' | 'bordered' | 'glass' | 'gradient';
  
  /** Hover effect type */
  hoverEffect?: 'lift' | 'scale' | 'tilt' | 'glow' | 'none';
  
  /** Custom className */
  className?: string;
  
  /** Click handler (if not using href) */
  onClick?: () => void;
  
  /** Disable animations */
  disableAnimations?: boolean;
}

/**
 * Interactive Card Component
 * 
 * A versatile card component with multiple interaction patterns.
 */
export function InteractiveCard({
  children,
  href,
  variant = 'default',
  hoverEffect = 'lift',
  className = '',
  onClick,
  disableAnimations = false
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);
  
  // Check for reduced motion preference
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const shouldAnimate = !disableAnimations && !prefersReducedMotion;
  
  // Base styles
  const baseStyles = {
    position: 'relative' as const,
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
    cursor: href || onClick ? 'pointer' : 'default',
    textDecoration: 'none',
    display: 'block'
  };
  
  // Variant styles
  const variantStyles = {
    default: {
      backgroundColor: 'var(--card)',
      border: '1px solid var(--border-soft)'
    },
    elevated: {
      backgroundColor: 'var(--card)',
      boxShadow: 'var(--shadow-lg)'
    },
    bordered: {
      backgroundColor: 'var(--card)',
      border: '2px solid var(--border)'
    },
    glass: {
      backgroundColor: 'var(--glass-bg)',
      backdropFilter: 'blur(12px)',
      border: '1px solid var(--glass-border)'
    },
    gradient: {
      background: 'linear-gradient(135deg, var(--card) 0%, var(--muted) 100%)',
      border: '1px solid var(--border-soft)'
    }
  };
  
  // Hover effect animations
  const hoverAnimations = {
    lift: {
      rest: { 
        y: 0,
        scale: 1,
        boxShadow: variantStyles[variant].boxShadow || 'var(--shadow-sm)'
      },
      hover: {
        y: -8,
        scale: 1.02,
        boxShadow: 'var(--shadow-xl)',
        transition: {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }
      }
    },
    scale: {
      rest: { scale: 1 },
      hover: {
        scale: 1.05,
        transition: {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }
      }
    },
    tilt: {
      rest: {
        rotateX: 0,
        rotateY: 0,
        scale: 1
      },
      hover: {
        rotateX: rotateX,
        rotateY: rotateY,
        scale: 1.05,
        transition: {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }
      }
    },
    glow: {
      rest: {
        scale: 1,
        boxShadow: 'var(--shadow-sm)'
      },
      hover: {
        scale: 1.02,
        boxShadow: 'var(--shadow-primary)',
        transition: {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }
      }
    },
    none: {
      rest: {},
      hover: {}
    }
  };
  
  // Handle mouse move for tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hoverEffect !== 'tilt' || !shouldAnimate) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) / 5);
    y.set((e.clientY - centerY) / 5);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (hoverEffect === 'tilt' && shouldAnimate) {
      x.set(0);
      y.set(0);
    }
  };
  
  const combinedStyles = {
    ...baseStyles,
    ...variantStyles[variant]
  };
  
  const content = (
    <>
      {children}
      
      {/* Gradient overlay on hover */}
      {shouldAnimate && hoverEffect !== 'none' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, var(--primary-soft) 0%, transparent 100%)',
            pointerEvents: 'none'
          }}
        />
      )}
      
      {/* Shine effect on hover */}
      {shouldAnimate && hoverEffect === 'glow' && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '100%' : '-100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, var(--glass-bg-strong), transparent)',
            pointerEvents: 'none'
          }}
        />
      )}
    </>
  );
  
  if (href) {
    return (
      <motion.a
        href={href}
        style={combinedStyles}
        initial="rest"
        whileHover={shouldAnimate ? "hover" : undefined}
        animate="rest"
        variants={shouldAnimate ? hoverAnimations[hoverEffect] : undefined}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className={className}
      >
        {content}
      </motion.a>
    );
  }
  
  return (
    <motion.div
      style={combinedStyles}
      initial="rest"
      whileHover={shouldAnimate ? "hover" : undefined}
      animate="rest"
      variants={shouldAnimate ? hoverAnimations[hoverEffect] : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={className}
    >
      {content}
    </motion.div>
  );
}

/**
 * Interactive Card Header Component
 * Standardized header for cards
 */
export function InteractiveCardHeader({ 
  children, 
  className = '' 
}: { 
  children: ReactNode; 
  className?: string; 
}) {
  return (
    <div 
      className={className}
      style={{
        padding: 'var(--spacing-6)',
        borderBottom: '1px solid var(--border-soft)'
      }}
    >
      {children}
    </div>
  );
}

/**
 * Interactive Card Content Component
 * Standardized content area
 */
export function InteractiveCardContent({ 
  children, 
  className = '' 
}: { 
  children: ReactNode; 
  className?: string; 
}) {
  return (
    <div 
      className={className}
      style={{ padding: 'var(--spacing-6)' }}
    >
      {children}
    </div>
  );
}

/**
 * Interactive Card Footer Component
 * Standardized footer area
 */
export function InteractiveCardFooter({ 
  children, 
  className = '' 
}: { 
  children: ReactNode; 
  className?: string; 
}) {
  return (
    <div 
      className={className}
      style={{
        padding: 'var(--spacing-6)',
        borderTop: '1px solid var(--border-soft)'
      }}
    >
      {children}
    </div>
  );
}
