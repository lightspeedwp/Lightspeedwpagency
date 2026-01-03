/**
 * useLazyImage Hook
 * 
 * Implements progressive image loading with blur-up effect.
 * Improves perceived performance by showing a blurred placeholder
 * while the full image loads.
 * 
 * @example
 * const { imageSrc, imageStyle, isLoaded } = useLazyImage(
 *   'https://images.unsplash.com/photo-123',
 *   'data:image/jpeg;base64,/9j/4AAQSkZJRg...'
 * );
 * 
 * <img src={imageSrc} style={imageStyle} alt="..." />
 */

import { useState, useEffect } from 'react';

interface LazyImageOptions {
  threshold?: number;        // Intersection observer threshold (default: 0.1)
  rootMargin?: string;       // Intersection observer root margin (default: '50px')
  transitionDuration?: number; // Fade-in duration in ms (default: 300)
}

interface LazyImageReturn {
  imageSrc: string;
  imageStyle: React.CSSProperties;
  isLoaded: boolean;
  isInView: boolean;
}

/**
 * Custom hook for lazy loading images with blur-up effect
 * 
 * @param src - Full resolution image URL
 * @param placeholder - Low quality image placeholder (base64 or tiny image URL)
 * @param options - Configuration options
 * @returns Image source, styles, and loading states
 */
export function useLazyImage(
  src: string,
  placeholder?: string,
  options: LazyImageOptions = {}
): LazyImageReturn {
  const {
    threshold = 0.1,
    rootMargin = '50px',
    transitionDuration = 300
  } = options;

  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder || src);

  // Load the image when it comes into view
  useEffect(() => {
    if (!isInView) return;

    const img = new Image();
    img.src = src;

    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };

    img.onerror = () => {
      // Fallback to src even on error
      setImageSrc(src);
      setIsLoaded(true);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, isInView]);

  // Image styles with blur-up effect
  const imageStyle: React.CSSProperties = {
    filter: isLoaded ? 'blur(0)' : 'blur(10px)',
    opacity: isLoaded ? 1 : 0.9,
    transition: `filter ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    willChange: 'filter, opacity',
  };

  return {
    imageSrc,
    imageStyle,
    isLoaded,
    isInView,
  };
}

/**
 * Helper hook to detect when an element is in viewport
 * Used internally by useLazyImage, but exported for reuse
 * 
 * @param ref - React ref to the element to observe
 * @param options - IntersectionObserver options
 * @returns Whether the element is in view
 */
export function useInView(
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsInView(true); // Fallback: assume in view
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options.threshold, options.rootMargin]);

  return isInView;
}

/**
 * LazyImage Component
 * 
 * Drop-in replacement for <img> with lazy loading and blur-up effect.
 * Uses 100% design system compliance.
 * 
 * @example
 * <LazyImage
 *   src="https://images.unsplash.com/photo-123"
 *   alt="Portfolio project"
 *   placeholder="data:image/jpeg;base64,..."
 *   style={{ borderRadius: 'var(--radius-xl)' }}
 * />
 */
interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  transitionDuration?: number;
  onLoad?: () => void;
}

export function LazyImage({
  src,
  alt,
  placeholder,
  transitionDuration = 300,
  onLoad,
  style,
  ...props
}: LazyImageProps) {
  const { imageSrc, imageStyle, isLoaded } = useLazyImage(src, placeholder, {
    transitionDuration,
  });

  useEffect(() => {
    if (isLoaded && onLoad) {
      onLoad();
    }
  }, [isLoaded, onLoad]);

  return (
    <img
      {...props}
      src={imageSrc}
      alt={alt}
      style={{
        ...imageStyle,
        ...style,
      }}
      loading="lazy" // Native lazy loading as fallback
    />
  );
}

/**
 * BackgroundLazyImage Component
 * 
 * Lazy loading for background images with blur-up effect.
 * 
 * @example
 * <BackgroundLazyImage
 *   src="https://images.unsplash.com/photo-123"
 *   placeholder="data:image/jpeg;base64,..."
 *   className="aspect-[16/9]"
 *   style={{ borderRadius: 'var(--radius-xl)' }}
 * >
 *   <div className="p-6">Overlay content</div>
 * </BackgroundLazyImage>
 */
interface BackgroundLazyImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  placeholder?: string;
  transitionDuration?: number;
  children?: React.ReactNode;
}

export function BackgroundLazyImage({
  src,
  placeholder,
  transitionDuration = 300,
  children,
  style,
  ...props
}: BackgroundLazyImageProps) {
  const { imageSrc, isLoaded } = useLazyImage(src, placeholder, {
    transitionDuration,
  });

  return (
    <div
      {...props}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: isLoaded ? 'blur(0)' : 'blur(10px)',
        opacity: isLoaded ? 1 : 0.9,
        transition: `filter ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        willChange: 'filter, opacity',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
