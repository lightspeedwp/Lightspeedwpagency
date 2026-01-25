/**
 * Gallery Block Component
 * 
 * WordPress Block: core/gallery
 * Category: Media Blocks
 * 
 * @see /guidelines/blocks/media/gallery.md
 * @see /src/styles/blocks/media/gallery.css
 * 
 * CRITICAL REQUIREMENTS:
 * - 100% CSS variables (NO hardcoded values)
 * - WordPress BEM class naming (.wp-block-gallery)
 * - Dedicated CSS file for ALL styling
 * - WCAG 2.1 AA compliant
 */

import '@/styles/blocks/media/gallery.css';
import React from 'react';

export interface GalleryProps {
  /** Gallery items */
  children: React.ReactNode;
  
  /** Number of columns */
  columns?: 2 | 3 | 4 | 5 | 6;
  
  /** Gap between images */
  gap?: 'sm' | 'md' | 'lg';
  
  /** Image aspect ratio */
  aspectRatio?: 'auto' | 'square' | 'portrait' | 'landscape';
  
  /** Additional CSS classes */
  className?: string;
}

export interface GalleryItemProps {
  /** Image source */
  src: string;
  
  /** Alt text (REQUIRED) */
  alt: string;
  
  /** Caption */
  caption?: string;
  
  /** Link URL */
  href?: string;
  
  /** Additional CSS classes */
  className?: string;
}

/**
 * Gallery Block
 * 
 * Displays multiple images in a responsive grid.
 * Uses 100% CSS variables for complete user control.
 * 
 * @example
 * ```tsx
 * <Gallery columns={3} gap="lg">
 *   <GalleryItem src="/img1.jpg" alt="Image 1" />
 *   <GalleryItem src="/img2.jpg" alt="Image 2" caption="Photo 2" />
 *   <GalleryItem src="/img3.jpg" alt="Image 3" href="/view/3" />
 * </Gallery>
 * ```
 */
export function Gallery({
  children,
  columns = 3,
  gap = 'md',
  aspectRatio = 'auto',
  className = ''
}: GalleryProps) {
  // Build BEM classes
  const blockClass = 'wp-block-gallery';
  const columnsClass = `${blockClass}--${columns}-cols`;
  const gapClass = `${blockClass}--gap-${gap}`;
  const aspectClass = aspectRatio !== 'auto' ? `${blockClass}--${aspectRatio}` : '';
  const classes = [blockClass, columnsClass, gapClass, aspectClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <ul className={classes}>
      {children}
    </ul>
  );
}

/**
 * GalleryItem Component
 * 
 * Individual item within a Gallery.
 */
export function GalleryItem({
  src,
  alt,
  caption,
  href,
  className = ''
}: GalleryItemProps) {
  const blockClass = 'wp-block-gallery__item';
  const classes = [blockClass, className].filter(Boolean).join(' ');

  const imageElement = (
    <>
      <img
        className="wp-block-gallery__img"
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
      {caption && (
        <figcaption className="wp-block-gallery__caption">
          {caption}
        </figcaption>
      )}
    </>
  );

  return (
    <li className={classes}>
      {href ? (
        <a href={href} aria-label={alt}>
          {imageElement}
        </a>
      ) : (
        imageElement
      )}
    </li>
  );
}
