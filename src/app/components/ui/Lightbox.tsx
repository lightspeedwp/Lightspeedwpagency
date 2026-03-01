/**
 * Lightbox Component
 *
 * Full-screen image viewer with navigation
 * For portfolio galleries and image viewing
 *
 * Features:
 * - Full-screen overlay
 * - Image navigation (prev/next)
 * - Keyboard support (arrows, escape)
 * - Click outside to close
 * - Zoom indicator
 * - Image counter
 * - Smooth transitions
 *
 * Design System:
 * - 100% CSS variables
 * - BEM naming (.lightbox)
 * - Dedicated CSS file
 *
 * @see /guidelines/components/Lightbox.md
 */

import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useFocusTrap } from '../../hooks/useFocusTrap';

export interface LightboxImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export interface LightboxProps {
  images: LightboxImage[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export const Lightbox = ({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
}: LightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const focusTrapRef = useFocusTrap(isOpen);

  // Update index when initialIndex changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  // Prevent body scroll when open
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

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      ref={focusTrapRef}
    >
      {/* Close Button */}
      <button
        className="lightbox__close"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}

      {/* Image Container */}
      <div
        className="lightbox__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lightbox__image-wrapper">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="lightbox__image"
          />
          
          <div className="lightbox__zoom-indicator">
            <ZoomIn size={16} />
            Click image to zoom
          </div>
        </div>

        {/* Image Info */}
        {(currentImage.title || currentImage.description) && (
          <div className="lightbox__info">
            {currentImage.title && (
              <h3 className="lightbox__title">{currentImage.title}</h3>
            )}
            {currentImage.description && (
              <p className="lightbox__description">{currentImage.description}</p>
            )}
          </div>
        )}
      </div>

      {/* Counter */}
      {images.length > 1 && (
        <div className="lightbox__counter">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};
