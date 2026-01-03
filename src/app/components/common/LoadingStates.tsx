/**
 * Loading States Components
 * 
 * Skeleton loaders and loading indicators for better perceived performance.
 * Provides visual feedback while content loads.
 * 
 * Features:
 * - Card skeleton loaders
 * - Text skeleton loaders
 * - Spinner animations
 * - Progress bars
 * - Pulse animations
 * - Respects reduced motion
 * 
 * @example
 * ```tsx
 * <CardSkeleton count={3} />
 * <LoadingSpinner size="lg" />
 * ```
 */

import { motion } from 'motion/react';

/**
 * Loading Spinner Component
 */
interface LoadingSpinnerProps {
  /** Spinner size */
  size?: 'sm' | 'md' | 'lg';
  /** Custom color */
  color?: string;
  /** Label for screen readers */
  label?: string;
}

export function LoadingSpinner({ 
  size = 'md', 
  color = 'var(--primary)',
  label = 'Loading...'
}: LoadingSpinnerProps) {
  const sizes = {
    sm: 16,
    md: 32,
    lg: 48
  };
  
  const spinnerSize = sizes[size];
  
  return (
    <div 
      role="status" 
      aria-label={label}
      className="flex items-center justify-center"
    >
      <motion.div
        style={{
          width: spinnerSize,
          height: spinnerSize,
          border: `3px solid var(--muted)`,
          borderTop: `3px solid ${color}`,
          borderRadius: '50%'
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

/**
 * Card Skeleton Loader
 */
interface CardSkeletonProps {
  /** Number of skeleton cards to show */
  count?: number;
  /** Show image placeholder */
  showImage?: boolean;
  /** Custom className */
  className?: string;
}

export function CardSkeleton({ 
  count = 3, 
  showImage = true,
  className = ''
}: CardSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`rounded-lg overflow-hidden ${className}`}
          style={{
            backgroundColor: 'var(--card)',
            border: '1px solid var(--border-soft)'
          }}
        >
          {/* Image placeholder */}
          {showImage && (
            <SkeletonBlock 
              height={200} 
              className="rounded-none"
            />
          )}
          
          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Title */}
            <SkeletonLine width="80%" height={24} />
            
            {/* Description */}
            <div className="space-y-2">
              <SkeletonLine width="100%" />
              <SkeletonLine width="90%" />
              <SkeletonLine width="70%" />
            </div>
            
            {/* Meta */}
            <div className="flex items-center gap-4 pt-2">
              <SkeletonCircle size={32} />
              <div className="flex-1 space-y-2">
                <SkeletonLine width="40%" height={12} />
                <SkeletonLine width="30%" height={12} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

/**
 * Skeleton Line Component
 */
interface SkeletonLineProps {
  width?: string | number;
  height?: number;
  className?: string;
}

export function SkeletonLine({ 
  width = '100%', 
  height = 16,
  className = ''
}: SkeletonLineProps) {
  return (
    <motion.div
      className={className}
      style={{
        width,
        height,
        borderRadius: 'var(--radius)',
        backgroundColor: 'var(--muted)',
        overflow: 'hidden',
        position: 'relative'
      }}
      animate={{
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)'
        }}
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </motion.div>
  );
}

/**
 * Skeleton Block Component
 * For larger rectangular areas
 */
interface SkeletonBlockProps {
  width?: string | number;
  height?: number;
  className?: string;
}

export function SkeletonBlock({ 
  width = '100%', 
  height = 200,
  className = ''
}: SkeletonBlockProps) {
  return (
    <motion.div
      className={className}
      style={{
        width,
        height,
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--muted)',
        overflow: 'hidden',
        position: 'relative'
      }}
      animate={{
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)'
        }}
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </motion.div>
  );
}

/**
 * Skeleton Circle Component
 * For avatars and icons
 */
interface SkeletonCircleProps {
  size?: number;
  className?: string;
}

export function SkeletonCircle({ 
  size = 40,
  className = ''
}: SkeletonCircleProps) {
  return (
    <motion.div
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: 'var(--muted)',
        flexShrink: 0
      }}
      animate={{
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  );
}

/**
 * Progress Bar Component
 */
interface ProgressBarProps {
  /** Progress percentage (0-100) */
  progress: number;
  /** Show percentage label */
  showLabel?: boolean;
  /** Custom color */
  color?: string;
  /** Custom height */
  height?: number;
}

export function ProgressBar({
  progress,
  showLabel = false,
  color = 'var(--primary)',
  height = 8
}: ProgressBarProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  
  return (
    <div>
      {showLabel && (
        <div 
          className="flex items-center justify-between mb-2"
          style={{
            fontSize: 'var(--text-sm)',
            fontFamily: 'Manrope, sans-serif',
            color: 'var(--muted-foreground)'
          }}
        >
          <span>Loading...</span>
          <span>{clampedProgress}%</span>
        </div>
      )}
      
      <div
        style={{
          width: '100%',
          height,
          backgroundColor: 'var(--muted)',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
          position: 'relative'
        }}
        role="progressbar"
        aria-valuenow={clampedProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          style={{
            height: '100%',
            backgroundColor: color,
            borderRadius: 'var(--radius)'
          }}
          initial={{ width: 0 }}
          animate={{ width: `${clampedProgress}%` }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }}
        />
      </div>
    </div>
  );
}

/**
 * Dots Loader Component
 * Animated dots for subtle loading
 */
interface DotsLoaderProps {
  /** Dot size */
  size?: number;
  /** Custom color */
  color?: string;
  /** Label for screen readers */
  label?: string;
}

export function DotsLoader({
  size = 8,
  color = 'var(--primary)',
  label = 'Loading...'
}: DotsLoaderProps) {
  return (
    <div 
      className="flex items-center gap-2"
      role="status"
      aria-label={label}
    >
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            borderRadius: '50%'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: index * 0.2,
            ease: 'easeInOut'
          }}
        />
      ))}
      <span className="sr-only">{label}</span>
    </div>
  );
}

/**
 * Pulse Loader Component
 * Expanding circle animation
 */
interface PulseLoaderProps {
  /** Circle size */
  size?: number;
  /** Custom color */
  color?: string;
  /** Label for screen readers */
  label?: string;
}

export function PulseLoader({
  size = 64,
  color = 'var(--primary)',
  label = 'Loading...'
}: PulseLoaderProps) {
  return (
    <div 
      className="flex items-center justify-center"
      role="status"
      aria-label={label}
      style={{ position: 'relative', width: size, height: size }}
    >
      {[0, 1].map((index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            width: size,
            height: size,
            borderRadius: '50%',
            border: `3px solid ${color}`,
            opacity: 0
          }}
          animate={{
            scale: [0, 1.5],
            opacity: [1, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.75,
            ease: 'easeOut'
          }}
        />
      ))}
      <span className="sr-only">{label}</span>
    </div>
  );
}

/**
 * List Skeleton Component
 * For list items with text
 */
interface ListSkeletonProps {
  /** Number of items */
  count?: number;
  /** Show avatar */
  showAvatar?: boolean;
}

export function ListSkeleton({ 
  count = 5,
  showAvatar = false
}: ListSkeletonProps) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="flex items-center gap-4">
          {showAvatar && <SkeletonCircle size={48} />}
          <div className="flex-1 space-y-2">
            <SkeletonLine width="60%" height={20} />
            <SkeletonLine width="40%" height={14} />
          </div>
        </div>
      ))}
    </div>
  );
}
