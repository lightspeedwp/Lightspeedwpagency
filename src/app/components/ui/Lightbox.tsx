/**
 * Lightbox Component
 * 
 * Production-grade lightbox for images and videos.
 * 
 * Features:
 * - Full-screen overlay
 * - Image/video support
 * - Navigation (prev/next)
 * - Keyboard navigation
 * - Zoom controls
 * - Download option
 * - Thumbnail strip
 * - Touch/swipe support
 * - Close on overlay click
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <Lightbox
 *   isOpen={isOpen}
 *   onClose={onClose}
 *   items={items}
 *   currentIndex={0}
 * />
 */

import { useEffect, useState, useRef } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Download,
  RotateCw,
  Share2,
} from 'lucide-react';

export interface LightboxItem {
  /** Item type */
  type: 'image' | 'video';
  /** Source URL */
  src: string;
  /** Thumbnail URL */
  thumbnail?: string;
  /** Alt text or title */
  alt: string;
  /** Caption */
  caption?: string;
  /** Download filename */
  downloadName?: string;
}

export interface LightboxProps {
  /** Is open */
  isOpen: boolean;
  /** Close handler */
  onClose: () => void;
  /** Items */
  items: LightboxItem[];
  /** Current index */
  currentIndex: number;
  /** Index change handler */
  onIndexChange?: (index: number) => void;
  /** Show thumbnails */
  showThumbnails?: boolean;
  /** Enable download */
  enableDownload?: boolean;
  /** Enable share */
  enableShare?: boolean;
}

export function Lightbox({
  isOpen,
  onClose,
  items,
  currentIndex,
  onIndexChange,
  showThumbnails = true,
  enableDownload = true,
  enableShare = false,
}: LightboxProps) {
  const [index, setIndex] = useState(currentIndex);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Sync index
  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Navigation
  const goToPrevious = () => {
    const newIndex = index === 0 ? items.length - 1 : index - 1;
    setIndex(newIndex);
    setZoom(1);
    setRotation(0);
    onIndexChange?.(newIndex);
  };

  const goToNext = () => {
    const newIndex = index === items.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
    setZoom(1);
    setRotation(0);
    onIndexChange?.(newIndex);
  };

  const goToIndex = (newIndex: number) => {
    setIndex(newIndex);
    setZoom(1);
    setRotation(0);
    onIndexChange?.(newIndex);
  };

  // Zoom controls
  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 1));
  const resetZoom = () => setZoom(1);

  // Rotation
  const rotate = () => setRotation((prev) => (prev + 90) % 360);

  // Download
  const download = () => {
    const item = items[index];
    const link = document.createElement('a');
    link.href = item.src;
    link.download = item.downloadName || item.alt || 'download';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Share
  const share = async () => {
    const item = items[index];
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.alt,
          text: item.caption,
          url: item.src,
        });
      } catch (err) {
        console.error('Share failed:', err);
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === '+') zoomIn();
      if (e.key === '-') zoomOut();
      if (e.key === '0') resetZoom();
      if (e.key === 'r') rotate();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, index, zoom, rotation]);

  // Touch/swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    setTouchStart(null);
  };

  if (!isOpen) return null;

  const currentItem = items[index];

  return (
    <div
      className="fixed inset-0 z-50"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
      }}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <div
        className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-50"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <div>
          <h3
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'white',
              margin: 0,
            }}
          >
            {currentItem.alt}
          </h3>
          {currentItem.caption && (
            <p
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-small)',
                color: 'rgba(255, 255, 255, 0.7)',
                margin: 0,
              }}
            >
              {currentItem.caption}
            </p>
          )}
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="p-2"
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
      </div>

      {/* Navigation buttons */}
      {items.length > 1 && (
        <>
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
            aria-label="Previous"
          >
            <ChevronLeft size={32} />
          </button>

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
            aria-label="Next"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}

      {/* Main content */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          padding: showThumbnails ? '80px 80px 160px 80px' : '80px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          ref={imageRef}
          style={{
            transform: `scale(${zoom}) rotate(${rotation}deg)`,
            transition: 'transform 0.3s ease',
            maxWidth: '90vw',
            maxHeight: '80vh',
          }}
        >
          {currentItem.type === 'image' ? (
            <img
              src={currentItem.src}
              alt={currentItem.alt}
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: 'var(--radius-lg)',
              }}
            />
          ) : (
            <video
              src={currentItem.src}
              controls
              autoPlay
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                borderRadius: 'var(--radius-lg)',
              }}
            />
          )}
        </div>
      </div>

      {/* Toolbar */}
      <div
        className="absolute bottom-0 left-0 right-0 p-4"
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls */}
        <div className="flex items-center justify-center gap-2 mb-4">
          {/* Zoom out */}
          {currentItem.type === 'image' && (
            <>
              <button
                onClick={zoomOut}
                disabled={zoom <= 1}
                className="p-2"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
                  minWidth: '60px',
                  textAlign: 'center',
                }}
              >
                {Math.round(zoom * 100)}%
              </span>

              <button
                onClick={zoomIn}
                disabled={zoom >= 3}
                className="p-2"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
                  height: '24px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  margin: '0 8px',
                }}
              />

              <button
                onClick={rotate}
                className="p-2"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--radius)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                aria-label="Rotate"
              >
                <RotateCw size={20} />
              </button>

              <div
                style={{
                  width: '1px',
                  height: '24px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  margin: '0 8px',
                }}
              />
            </>
          )}

          {enableDownload && (
            <button
              onClick={download}
              className="p-2"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              aria-label="Download"
            >
              <Download size={20} />
            </button>
          )}

          {enableShare && (
            <button
              onClick={share}
              className="p-2"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              aria-label="Share"
            >
              <Share2 size={20} />
            </button>
          )}
        </div>

        {/* Thumbnails */}
        {showThumbnails && items.length > 1 && (
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => goToIndex(i)}
                className="flex-shrink-0"
                style={{
                  width: '80px',
                  height: '80px',
                  padding: 0,
                  backgroundColor: 'transparent',
                  border: i === index ? '2px solid var(--primary)' : '2px solid transparent',
                  borderRadius: 'var(--radius)',
                  cursor: 'pointer',
                  opacity: i === index ? 1 : 0.6,
                  transition: 'all 0.2s ease',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  if (i !== index) {
                    e.currentTarget.style.opacity = '0.8';
                  }
                }}
                onMouseLeave={(e) => {
                  if (i !== index) {
                    e.currentTarget.style.opacity = '0.6';
                  }
                }}
                aria-label={`Go to item ${i + 1}`}
              >
                <img
                  src={item.thumbnail || item.src}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </button>
            ))}
          </div>
        )}

        {/* Counter */}
        <div className="text-center mt-2">
          <span
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              color: 'white',
            }}
          >
            {index + 1} / {items.length}
          </span>
        </div>
      </div>
    </div>
  );
}
