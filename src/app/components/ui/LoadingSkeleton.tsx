/**
 * LoadingSkeleton Component
 *
 * Skeleton loading placeholder
 * Shows loading state while content loads
 *
 * Features:
 * - Multiple variants (text, card, image, circle)
 * - Shimmer animation
 * - Customizable sizes
 * - Responsive
 *
 * Design System:
 * - 100% CSS variables
 * - BEM naming (.skeleton)
 *
 * Usage:
 * ```tsx
 * <LoadingSkeleton variant="card" />
 * <LoadingSkeleton variant="text" width="200px" />
 * <LoadingSkeleton variant="circle" size={48} />
 * ```
 */

export interface LoadingSkeletonProps {
  /** Skeleton variant */
  variant?: 'text' | 'card' | 'image' | 'circle' | 'button';
  /** Width (for text/button variants) */
  width?: string | number;
  /** Height (for image variant) */
  height?: string | number;
  /** Size (for circle variant) */
  size?: number;
  /** Number of lines (for text variant) */
  lines?: number;
  /** Custom className */
  className?: string;
}

export const LoadingSkeleton = ({
  variant = 'text',
  width,
  height,
  size = 48,
  lines = 1,
  className = '',
}: LoadingSkeletonProps) => {
  // Text variant
  if (variant === 'text') {
    return (
      <div className={`skeleton-container ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className="skeleton skeleton--text"
            style={{
              width: width || (index === lines - 1 ? '70%' : '100%'),
            }}
          />
        ))}
      </div>
    );
  }

  // Card variant
  if (variant === 'card') {
    return (
      <div className={`skeleton skeleton--card ${className}`}>
        <div className="skeleton__image" />
        <div className="skeleton__content">
          <div className="skeleton skeleton--text" style={{ width: '60%' }} />
          <div className="skeleton skeleton--text" style={{ width: '100%' }} />
          <div className="skeleton skeleton--text" style={{ width: '80%' }} />
        </div>
      </div>
    );
  }

  // Image variant
  if (variant === 'image') {
    return (
      <div
        className={`skeleton skeleton--image ${className}`}
        style={{ width, height: height || 'auto' }}
      />
    );
  }

  // Circle variant
  if (variant === 'circle') {
    return (
      <div
        className={`skeleton skeleton--circle ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  // Button variant
  if (variant === 'button') {
    return (
      <div
        className={`skeleton skeleton--button ${className}`}
        style={{ width: width || '120px' }}
      />
    );
  }

  return null;
};
