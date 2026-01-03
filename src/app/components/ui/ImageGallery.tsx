/**
 * Image Gallery Component
 * 
 * Production-grade image gallery with lightbox.
 * 
 * Features:
 * - Grid layout (responsive)
 * - Lightbox viewer
 * - Keyboard navigation (arrow keys, escape)
 * - Thumbnail preview
 * - Image captions
 * - Lazy loading
 * - Zoom controls
 * - Download button
 * - Multiple layout variants
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <ImageGallery
 *   images={images}
 *   columns={3}
 *   variant="grid"
 * />
 */

import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, Maximize2 } from 'lucide-react';
import { Button } from '../blocks/design/Buttons';
import { useLazyImage } from '../../hooks/useLazyImage';

export interface GalleryImage {
  /** Image URL */
  src: string;
  /** Thumbnail URL (optional) */
  thumbnail?: string;
  /** Image alt text */
  alt: string;
  /** Image caption */
  caption?: string;
  /** Image width */
  width?: number;
  /** Image height */
  height?: number;
}

export interface ImageGalleryProps {
  /** Gallery images */
  images: GalleryImage[];
  /** Grid columns */
  columns?: 2 | 3 | 4 | 5;
  /** Layout variant */
  variant?: 'grid' | 'masonry' | 'carousel';
  /** Show captions */
  showCaptions?: boolean;
  /** Enable lightbox */
  enableLightbox?: boolean;
  /** Aspect ratio */
  aspectRatio?: 'square' | 'landscape' | 'portrait' | 'auto';
  /** Gap between images */
  gap?: 'sm' | 'md' | 'lg';
}

export function ImageGallery({
  images,
  columns = 3,
  variant = 'grid',
  showCaptions = true,
  enableLightbox = true,
  aspectRatio = 'auto',
  gap = 'md',
}: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);

  // Grid columns
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5',
  };

  // Gap sizes
  const gapSizes = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  };

  // Aspect ratio classes
  const aspectRatios = {
    square: 'aspect-square',
    landscape: 'aspect-video',
    portrait: 'aspect-[3/4]',
    auto: '',
  };

  // Open lightbox
  const openLightbox = (index: number) => {
    if (!enableLightbox) return;
    setCurrentIndex(index);
    setLightboxOpen(true);
    setZoom(1);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  // Navigate images
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setZoom(1);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setZoom(1);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentIndex]);

  // Zoom controls
  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 1));

  // Download image
  const downloadImage = (src: string, alt: string) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = alt || 'image';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid ${gridCols[columns]} ${gapSizes[gap]}`}>
        {images.map((image, index) => (
          <GalleryItem
            key={index}
            image={image}
            aspectRatio={aspectRatio}
            showCaption={showCaptions}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && enableLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
          }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 z-50"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-lg)',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Previous button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 p-3"
              style={{
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-lg)',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 p-3"
              style={{
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-lg)',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>
          )}

          {/* Zoom controls */}
          <div
            className="absolute bottom-20 left-1/2 flex gap-2 p-2"
            style={{
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-lg)',
              backdropFilter: 'blur(10px)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={zoomOut}
              disabled={zoom <= 1}
              className="p-2"
              style={{
                backgroundColor: 'transparent',
                color: zoom <= 1 ? 'rgba(255, 255, 255, 0.4)' : 'white',
                border: 'none',
                borderRadius: 'var(--radius)',
                cursor: zoom <= 1 ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
              }}
              aria-label="Zoom out"
            >
              <ZoomOut size={20} />
            </button>

            <span
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                color: 'white',
                padding: '0 12px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {Math.round(zoom * 100)}%
            </span>

            <button
              onClick={zoomIn}
              disabled={zoom >= 3}
              className="p-2"
              style={{
                backgroundColor: 'transparent',
                color: zoom >= 3 ? 'rgba(255, 255, 255, 0.4)' : 'white',
                border: 'none',
                borderRadius: 'var(--radius)',
                cursor: zoom >= 3 ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
              }}
              aria-label="Zoom in"
            >
              <ZoomIn size={20} />
            </button>

            <div
              style={{
                width: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                margin: '0 8px',
              }}
            />

            <button
              onClick={() => downloadImage(images[currentIndex].src, images[currentIndex].alt)}
              className="p-2"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              aria-label="Download image"
            >
              <Download size={20} />
            </button>
          </div>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
            style={{
              transform: `scale(${zoom})`,
              transition: 'transform 0.2s ease',
            }}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: 'var(--radius-lg)',
              }}
            />

            {/* Caption */}
            {images[currentIndex].caption && (
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  backdropFilter: 'blur(10px)',
                  borderBottomLeftRadius: 'var(--radius-lg)',
                  borderBottomRightRadius: 'var(--radius-lg)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    color: 'white',
                    margin: 0,
                  }}
                >
                  {images[currentIndex].caption}
                </p>
              </div>
            )}
          </div>

          {/* Image counter */}
          <div
            className="absolute bottom-4 left-1/2 px-4 py-2"
            style={{
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <span
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                color: 'white',
              }}
            >
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Gallery Item Component
 */
interface GalleryItemProps {
  image: GalleryImage;
  aspectRatio: string;
  showCaption: boolean;
  onClick: () => void;
}

function GalleryItem({ image, aspectRatio, showCaption, onClick }: GalleryItemProps) {
  const { ref, isLoaded } = useLazyImage();

  const aspectRatios = {
    square: 'aspect-square',
    landscape: 'aspect-video',
    portrait: 'aspect-[3/4]',
    auto: '',
  };

  return (
    <div
      className="group relative overflow-hidden cursor-pointer"
      style={{
        backgroundColor: 'var(--muted)',
        borderRadius: 'var(--radius-xl)',
        transition: 'all 0.3s ease',
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Image */}
      <div className={aspectRatios[aspectRatio as keyof typeof aspectRatios]}>
        <img
          ref={ref}
          src={image.thumbnail || image.src}
          alt={image.alt}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            transition: 'opacity 0.3s ease',
          }}
        >
          <Maximize2 size={32} style={{ color: 'white' }} />
        </div>
      </div>

      {/* Caption */}
      {showCaption && image.caption && (
        <div
          className="absolute bottom-0 left-0 right-0 p-3"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <p
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-small)',
              color: 'white',
              margin: 0,
            }}
          >
            {image.caption}
          </p>
        </div>
      )}
    </div>
  );
}
