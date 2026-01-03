/**
 * Skeleton Loading Library
 * 
 * Provides skeleton screens for all component types:
 * - Text skeletons (headings, paragraphs)
 * - Card skeletons
 * - Table skeletons
 * - Form skeletons
 * - Image skeletons
 * - Custom skeletons
 * 
 * Design System Compliance:
 * - Uses CSS variables for colors
 * - Respects reduced motion preferences
 * - Smooth pulse animation
 * 
 * @example
 * <SkeletonText lines={3} />
 * <SkeletonCard />
 * <SkeletonTable rows={5} columns={4} />
 */

import { CSSProperties } from 'react';

// Base skeleton styles
const baseSkeletonStyle: CSSProperties = {
  backgroundColor: 'var(--muted)',
  borderRadius: 'var(--radius)',
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
};

/**
 * Skeleton Text Component
 * 
 * Simulates text loading (paragraphs, headings).
 */
export interface SkeletonTextProps {
  /** Number of lines */
  lines?: number;
  /** Line height */
  lineHeight?: string;
  /** Width of last line (percentage) */
  lastLineWidth?: string;
}

export function SkeletonText({ lines = 3, lineHeight = '1rem', lastLineWidth = '70%' }: SkeletonTextProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          style={{
            ...baseSkeletonStyle,
            height: lineHeight,
            width: index === lines - 1 ? lastLineWidth : '100%',
          }}
        />
      ))}
    </div>
  );
}

/**
 * Skeleton Heading Component
 * 
 * Simulates heading loading.
 */
export interface SkeletonHeadingProps {
  /** Heading size */
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Width (percentage or px) */
  width?: string;
}

export function SkeletonHeading({ size = 'h2', width = '60%' }: SkeletonHeadingProps) {
  const sizeMap = {
    h1: '3.75rem',
    h2: '2rem',
    h3: '1.5rem',
    h4: '1.25rem',
    h5: '1.125rem',
    h6: '1rem',
  };

  return (
    <div
      style={{
        ...baseSkeletonStyle,
        height: sizeMap[size],
        width,
      }}
    />
  );
}

/**
 * Skeleton Card Component
 * 
 * Simulates card loading with image, heading, and text.
 */
export interface SkeletonCardProps {
  /** Show image skeleton */
  showImage?: boolean;
  /** Image aspect ratio */
  imageAspectRatio?: string;
  /** Show button skeleton */
  showButton?: boolean;
}

export function SkeletonCard({ showImage = true, imageAspectRatio = '16 / 9', showButton = true }: SkeletonCardProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
      }}
    >
      {/* Image Skeleton */}
      {showImage && (
        <div
          style={{
            ...baseSkeletonStyle,
            aspectRatio: imageAspectRatio,
            borderRadius: 0,
          }}
        />
      )}

      {/* Content Skeleton */}
      <div style={{ padding: '1.5rem' }}>
        {/* Heading */}
        <SkeletonHeading size="h3" width="80%" />

        {/* Text */}
        <div style={{ marginTop: '1rem' }}>
          <SkeletonText lines={3} />
        </div>

        {/* Button */}
        {showButton && (
          <div
            style={{
              ...baseSkeletonStyle,
              height: '48px',
              width: '120px',
              marginTop: '1.5rem',
            }}
          />
        )}
      </div>
    </div>
  );
}

/**
 * Skeleton Table Component
 * 
 * Simulates table loading.
 */
export interface SkeletonTableProps {
  /** Number of rows */
  rows?: number;
  /** Number of columns */
  columns?: number;
}

export function SkeletonTable({ rows = 5, columns = 4 }: SkeletonTableProps) {
  return (
    <div
      style={{
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
      }}
    >
      {/* Header Row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '1rem',
          padding: '1rem',
          backgroundColor: 'var(--muted)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {Array.from({ length: columns }).map((_, index) => (
          <div
            key={index}
            style={{
              ...baseSkeletonStyle,
              height: '1rem',
            }}
          />
        ))}
      </div>

      {/* Body Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: '1rem',
            padding: '1rem',
            borderBottom: rowIndex < rows - 1 ? '1px solid var(--border)' : 'none',
          }}
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <div
              key={colIndex}
              style={{
                ...baseSkeletonStyle,
                height: '1rem',
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

/**
 * Skeleton Form Component
 * 
 * Simulates form loading.
 */
export interface SkeletonFormProps {
  /** Number of fields */
  fields?: number;
  /** Show submit button */
  showButton?: boolean;
}

export function SkeletonForm({ fields = 4, showButton = true }: SkeletonFormProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {Array.from({ length: fields }).map((_, index) => (
        <div key={index}>
          {/* Label */}
          <div
            style={{
              ...baseSkeletonStyle,
              height: '1rem',
              width: '120px',
              marginBottom: '0.5rem',
            }}
          />

          {/* Input */}
          <div
            style={{
              ...baseSkeletonStyle,
              height: '48px',
              width: '100%',
            }}
          />
        </div>
      ))}

      {/* Submit Button */}
      {showButton && (
        <div
          style={{
            ...baseSkeletonStyle,
            height: '48px',
            width: '120px',
            marginTop: '0.5rem',
          }}
        />
      )}
    </div>
  );
}

/**
 * Skeleton Image Component
 * 
 * Simulates image loading.
 */
export interface SkeletonImageProps {
  /** Image width */
  width?: string;
  /** Image height */
  height?: string;
  /** Aspect ratio */
  aspectRatio?: string;
  /** Border radius */
  borderRadius?: string;
}

export function SkeletonImage({
  width = '100%',
  height,
  aspectRatio = '16 / 9',
  borderRadius = 'var(--radius-lg)',
}: SkeletonImageProps) {
  return (
    <div
      style={{
        ...baseSkeletonStyle,
        width,
        height,
        aspectRatio: !height ? aspectRatio : undefined,
        borderRadius,
      }}
    />
  );
}

/**
 * Skeleton Avatar Component
 * 
 * Simulates avatar loading.
 */
export interface SkeletonAvatarProps {
  /** Avatar size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function SkeletonAvatar({ size = 'md' }: SkeletonAvatarProps) {
  const sizeMap = {
    sm: '32px',
    md: '48px',
    lg: '64px',
    xl: '96px',
  };

  return (
    <div
      style={{
        ...baseSkeletonStyle,
        width: sizeMap[size],
        height: sizeMap[size],
        borderRadius: '50%',
      }}
    />
  );
}

/**
 * Skeleton List Component
 * 
 * Simulates list loading.
 */
export interface SkeletonListProps {
  /** Number of items */
  items?: number;
  /** Show avatar */
  showAvatar?: boolean;
  /** Show icon */
  showIcon?: boolean;
}

export function SkeletonList({ items = 5, showAvatar = false, showIcon = false }: SkeletonListProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {Array.from({ length: items }).map((_, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          {/* Avatar/Icon */}
          {showAvatar && <SkeletonAvatar size="sm" />}
          {showIcon && (
            <div
              style={{
                ...baseSkeletonStyle,
                width: '24px',
                height: '24px',
              }}
            />
          )}

          {/* Text */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                ...baseSkeletonStyle,
                height: '1rem',
                width: '80%',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Skeleton Grid Component
 * 
 * Simulates grid of cards loading.
 */
export interface SkeletonGridProps {
  /** Number of items */
  items?: number;
  /** Columns */
  columns?: number;
  /** Item type */
  itemType?: 'card' | 'image' | 'text';
}

export function SkeletonGrid({ items = 6, columns = 3, itemType = 'card' }: SkeletonGridProps) {
  const renderItem = () => {
    switch (itemType) {
      case 'card':
        return <SkeletonCard />;
      case 'image':
        return <SkeletonImage />;
      case 'text':
        return <SkeletonText lines={3} />;
      default:
        return <SkeletonCard />;
    }
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(300px, 1fr))`,
        gap: '1.5rem',
      }}
    >
      {Array.from({ length: items }).map((_, index) => (
        <div key={index}>{renderItem()}</div>
      ))}
    </div>
  );
}

/**
 * Custom Skeleton Component
 * 
 * Build your own skeleton with custom dimensions.
 */
export interface SkeletonProps {
  /** Width */
  width?: string;
  /** Height */
  height?: string;
  /** Border radius */
  borderRadius?: string;
  /** Variant */
  variant?: 'text' | 'circular' | 'rectangular';
}

export function Skeleton({ width = '100%', height = '1rem', borderRadius, variant = 'rectangular' }: SkeletonProps) {
  const getRadius = () => {
    if (borderRadius) return borderRadius;
    if (variant === 'circular') return '50%';
    if (variant === 'text') return 'var(--radius-sm)';
    return 'var(--radius)';
  };

  return (
    <div
      style={{
        ...baseSkeletonStyle,
        width,
        height,
        borderRadius: getRadius(),
      }}
    />
  );
}

// CSS Animation (add to global.css)
/*
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
  }
}
*/
