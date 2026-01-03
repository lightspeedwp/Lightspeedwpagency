/**
 * Image Optimization Utilities
 * 
 * Advanced image optimization techniques for better performance:
 * - Responsive image srcsets
 * - Modern format detection (WebP, AVIF)
 * - Lazy loading with blur placeholders
 * - Image dimension calculation
 * 
 * @example
 * const { src, srcSet, sizes } = generateResponsiveImageProps(imageUrl, {
 *   widths: [320, 640, 960, 1280, 1920],
 *   sizes: '(max-width: 768px) 100vw, 50vw'
 * });
 */

/**
 * Generate responsive image srcset
 * 
 * Creates multiple image sizes for responsive loading.
 */
export function generateSrcSet(baseUrl: string, widths: number[]): string {
  return widths
    .map(width => `${baseUrl}?w=${width} ${width}w`)
    .join(', ');
}

/**
 * Generate responsive image props
 * 
 * Returns complete props for responsive images.
 */
export interface ResponsiveImageProps {
  src: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
}

export interface GenerateResponsiveImageOptions {
  widths?: number[];
  sizes?: string;
  aspectRatio?: number;
}

export function generateResponsiveImageProps(
  src: string,
  options: GenerateResponsiveImageOptions = {}
): ResponsiveImageProps {
  const {
    widths = [320, 640, 960, 1280, 1920],
    sizes = '100vw',
    aspectRatio,
  } = options;

  const props: ResponsiveImageProps = {
    src,
  };

  // Generate srcSet for responsive images
  if (widths.length > 0) {
    props.srcSet = generateSrcSet(src, widths);
    props.sizes = sizes;
  }

  // Calculate dimensions if aspect ratio provided
  if (aspectRatio && widths.length > 0) {
    const baseWidth = widths[0];
    props.width = baseWidth;
    props.height = Math.round(baseWidth / aspectRatio);
  }

  return props;
}

/**
 * Check if browser supports modern image formats
 */
export function supportsWebP(): boolean {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  if (canvas.getContext && canvas.getContext('2d')) {
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
}

export function supportsAVIF(): boolean {
  if (typeof window === 'undefined') return false;
  
  const avif = new Image();
  avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
  return avif.complete && avif.width > 0;
}

/**
 * Get optimal image format based on browser support
 */
export function getOptimalImageFormat(): 'avif' | 'webp' | 'jpeg' {
  if (supportsAVIF()) return 'avif';
  if (supportsWebP()) return 'webp';
  return 'jpeg';
}

/**
 * Generate blur placeholder data URL
 * 
 * Creates a tiny base64 image for blur-up effect.
 */
export function generateBlurPlaceholder(
  width: number = 10,
  height: number = 10,
  color: string = '#e5e7eb'
): string {
  if (typeof window === 'undefined') {
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='${color}'/%3E%3C/svg%3E`;
  }

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';
  
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL();
}

/**
 * Calculate image dimensions maintaining aspect ratio
 */
export interface ImageDimensions {
  width: number;
  height: number;
}

export function calculateImageDimensions(
  originalWidth: number,
  originalHeight: number,
  maxWidth?: number,
  maxHeight?: number
): ImageDimensions {
  const aspectRatio = originalWidth / originalHeight;
  
  let width = originalWidth;
  let height = originalHeight;
  
  // Apply max width constraint
  if (maxWidth && width > maxWidth) {
    width = maxWidth;
    height = width / aspectRatio;
  }
  
  // Apply max height constraint
  if (maxHeight && height > maxHeight) {
    height = maxHeight;
    width = height * aspectRatio;
  }
  
  return {
    width: Math.round(width),
    height: Math.round(height),
  };
}

/**
 * Preload critical images
 * 
 * Adds <link rel="preload"> tags for critical images.
 */
export function preloadImage(src: string, as: 'image' = 'image'): void {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = as;
  link.href = src;
  document.head.appendChild(link);
}

/**
 * Preload multiple images
 */
export function preloadImages(srcs: string[]): void {
  srcs.forEach(src => preloadImage(src));
}

/**
 * Image loading priorities
 */
export type ImagePriority = 'high' | 'low' | 'auto';

export interface OptimizedImageOptions {
  priority?: ImagePriority;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
}

/**
 * Get optimized image attributes
 */
export function getOptimizedImageAttributes(
  options: OptimizedImageOptions = {}
): Partial<React.ImgHTMLAttributes<HTMLImageElement>> {
  const {
    priority = 'auto',
    loading = 'lazy',
    fetchPriority = 'auto',
  } = options;
  
  const attrs: Partial<React.ImgHTMLAttributes<HTMLImageElement>> = {};
  
  // High priority images should load eagerly
  if (priority === 'high') {
    attrs.loading = 'eager';
    attrs.fetchPriority = 'high';
  } else if (priority === 'low') {
    attrs.loading = 'lazy';
    attrs.fetchPriority = 'low';
  } else {
    attrs.loading = loading;
    attrs.fetchPriority = fetchPriority;
  }
  
  return attrs;
}

/**
 * Estimate image file size
 * 
 * Rough estimate based on dimensions and format.
 */
export function estimateImageSize(
  width: number,
  height: number,
  format: 'jpeg' | 'png' | 'webp' | 'avif' = 'jpeg'
): number {
  const pixels = width * height;
  
  // Compression ratios (approximate)
  const ratios = {
    jpeg: 0.1,   // 10% of uncompressed
    png: 0.3,    // 30% of uncompressed
    webp: 0.08,  // 8% of uncompressed
    avif: 0.05,  // 5% of uncompressed
  };
  
  // Assume 3 bytes per pixel (RGB) for uncompressed
  const uncompressedSize = pixels * 3;
  
  return Math.round(uncompressedSize * ratios[format]);
}

/**
 * Format file size for display
 */
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
