/**
 * Image Block Component
 * 
 * WordPress Block: core/image
 * Category: Media Blocks
 * 
 * @see /guidelines/blocks/media/image.md
 * @see /src/styles/blocks/media/image.css
 * 
 * CRITICAL REQUIREMENTS:
 * - 100% CSS variables (NO hardcoded values)
 * - WordPress BEM class naming (.wp-block-image)
 * - Dedicated CSS file for ALL styling
 * - WCAG 2.1 AA compliant
 * - Approved fonts only (var(--font-primary))
 */

import '@/styles/blocks/media/image.css';
import React from 'react';

export interface ImageProps {
  /** Image source URL */
  src: string;
  
  /** Alternative text for accessibility (REQUIRED) */
  alt: string;
  
  /** Image caption (optional) */
  caption?: string;
  
  /** Image size variant */
  size?: 'thumbnail' | 'medium' | 'large' | 'full';
  
  /** Alignment */
  align?: 'left' | 'center' | 'right' | 'wide' | 'full';
  
  /** Border radius */
  rounded?: boolean;
  
  /** Enable lazy loading */
  loading?: 'lazy' | 'eager';
  
  /** Link URL (clickable image) */
  href?: string;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Image width */
  width?: number;
  
  /** Image height */
  height?: number;
}

/**
 * Image Block
 * 
 * Displays single images with optional captions and links.
 * Uses 100% CSS variables for complete user control.
 * 
 * @example
 * ```tsx
 * // Simple image
 * <Image 
 *   src="/photo.jpg" 
 *   alt="Beautiful landscape"
 * />
 * 
 * // Image with caption
 * <Image 
 *   src="/photo.jpg" 
 *   alt="Sunset over mountains"
 *   caption="Photo by John Doe"
 *   size="large"
 *   align="center"
 * />
 * 
 * // Clickable image
 * <Image 
 *   src="/product.jpg" 
 *   alt="View product details"
 *   href="/products/item-1"
 *   size="medium"
 *   rounded
 * />
 * ```
 */
export function Image({
  src,
  alt,
  caption,
  size = 'large',
  align = 'center',
  rounded = false,
  loading = 'lazy',
  href,
  className = '',
  width,
  height
}: ImageProps) {
  // Build BEM classes
  const blockClass = 'wp-block-image';
  const sizeClass = `${blockClass}--${size}`;
  const alignClass = align === 'full' ? `${blockClass}--full-width` : `${blockClass}--${align}`;
  const roundedClass = rounded ? `${blockClass}--rounded` : '';
  const classes = [blockClass, sizeClass, alignClass, roundedClass, className]
    .filter(Boolean)
    .join(' ');

  // Image element
  const imageElement = (
    <img
      className={`${blockClass}__img`}
      src={src}
      alt={alt}
      loading={loading}
      width={width}
      height={height}
      decoding="async"
    />
  );

  // Wrap in link if href provided
  const content = href ? (
    <a href={href} aria-label={alt}>
      {imageElement}
    </a>
  ) : (
    imageElement
  );

  return (
    <figure className={classes}>
      {content}
      {caption && (
        <figcaption className={`${blockClass}__caption`}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
