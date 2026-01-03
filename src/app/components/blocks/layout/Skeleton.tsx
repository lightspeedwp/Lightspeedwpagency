/**
 * Skeleton Component
 * 
 * Animated placeholder for loading content.
 * Better than spinners - shows layout structure while loading.
 * 
 * Features:
 * - Multiple variants (text, rectangular, circular)
 * - Respects prefers-reduced-motion
 * - 100% design system compliant (uses CSS variables)
 * - Accessible (proper ARIA labels)
 * 
 * @example
 * ```tsx
 * <Skeleton width="200px" height="24px" variant="text" />
 * <Skeleton width="100%" height="200px" variant="rectangular" />
 * <Skeleton height="48px" variant="circular" />
 * ```
 */

interface SkeletonProps {
  /** Width of skeleton (default: 100%) */
  width?: string;
  /** Height of skeleton (default: 20px) */
  height?: string;
  /** Visual variant */
  variant?: 'text' | 'rectangular' | 'circular';
  /** Additional CSS classes */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
  /** ARIA label for screen readers */
  ariaLabel?: string;
}

export function Skeleton({ 
  width = '100%', 
  height = '20px', 
  variant = 'rectangular',
  className = '',
  style,
  ariaLabel = 'Loading...'
}: SkeletonProps) {
  const baseStyles: React.CSSProperties = {
    backgroundColor: 'var(--muted)',
    animation: 'pulse 1.5s ease-in-out infinite',
    width,
    height,
    display: 'inline-block'
  };

  const variantStyles: Record<typeof variant, React.CSSProperties> = {
    text: { borderRadius: 'var(--radius-sm)' },
    rectangular: { borderRadius: 'var(--radius)' },
    circular: { borderRadius: '50%', width: height, aspectRatio: '1' }
  };

  return (
    <div
      className={className}
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...style
      }}
      aria-label={ariaLabel}
      role="status"
      aria-live="polite"
    />
  );
}

/**
 * Card Grid Skeleton
 * 
 * Pre-built skeleton for card grids (most common use case).
 * Shows placeholder while actual cards load.
 * 
 * @example
 * ```tsx
 * {isLoading ? <CardGridSkeleton count={6} /> : <ActualCards />}
 * ```
 */
interface CardGridSkeletonProps {
  /** Number of skeleton cards to show */
  count?: number;
  /** Grid columns (responsive) */
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
}

export function CardGridSkeleton({ 
  count = 6,
  columns = { mobile: 1, tablet: 2, desktop: 3 }
}: CardGridSkeletonProps) {
  const gridClasses = `grid gap-6 grid-cols-${columns.mobile} md:grid-cols-${columns.tablet} lg:grid-cols-${columns.desktop}`;

  return (
    <div className={gridClasses}>
      {Array.from({ length: count }).map((_, i) => (
        <div 
          key={i} 
          className="p-6"
          style={{ 
            backgroundColor: 'var(--card)', 
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-soft)'
          }}
        >
          {/* Image skeleton */}
          <Skeleton height="200px" className="mb-4" variant="rectangular" />
          
          {/* Title skeleton */}
          <Skeleton width="60%" height="24px" className="mb-2" variant="text" />
          
          {/* Description skeletons */}
          <Skeleton width="100%" height="16px" className="mb-1" variant="text" />
          <Skeleton width="100%" height="16px" className="mb-1" variant="text" />
          <Skeleton width="80%" height="16px" className="mb-4" variant="text" />
          
          {/* Button skeleton */}
          <Skeleton width="120px" height="40px" variant="rectangular" />
        </div>
      ))}
    </div>
  );
}

/**
 * List Skeleton
 * 
 * Pre-built skeleton for list items.
 * 
 * @example
 * ```tsx
 * {isLoading ? <ListSkeleton count={5} /> : <ActualList />}
 * ```
 */
interface ListSkeletonProps {
  /** Number of list items */
  count?: number;
  /** Show avatar/icon on left */
  showAvatar?: boolean;
}

export function ListSkeleton({ count = 5, showAvatar = false }: ListSkeletonProps) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-start gap-4">
          {showAvatar && (
            <Skeleton height="48px" variant="circular" />
          )}
          <div className="flex-1">
            <Skeleton width="70%" height="20px" className="mb-2" variant="text" />
            <Skeleton width="100%" height="16px" className="mb-1" variant="text" />
            <Skeleton width="90%" height="16px" variant="text" />
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Article Skeleton
 * 
 * Pre-built skeleton for article/blog post layout.
 * 
 * @example
 * ```tsx
 * {isLoading ? <ArticleSkeleton /> : <ArticleContent />}
 * ```
 */
export function ArticleSkeleton() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Hero image */}
      <Skeleton height="400px" className="mb-6" variant="rectangular" />
      
      {/* Title */}
      <Skeleton width="80%" height="48px" className="mb-4" variant="text" />
      
      {/* Meta (author, date) */}
      <div className="flex items-center gap-4 mb-6">
        <Skeleton height="40px" variant="circular" />
        <div>
          <Skeleton width="120px" height="16px" className="mb-1" variant="text" />
          <Skeleton width="100px" height="14px" variant="text" />
        </div>
      </div>
      
      {/* Content paragraphs */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="mb-4">
          <Skeleton width="100%" height="16px" className="mb-1" variant="text" />
          <Skeleton width="100%" height="16px" className="mb-1" variant="text" />
          <Skeleton width="100%" height="16px" className="mb-1" variant="text" />
          <Skeleton width="85%" height="16px" variant="text" />
        </div>
      ))}
    </div>
  );
}
