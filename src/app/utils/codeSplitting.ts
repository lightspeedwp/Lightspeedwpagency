/**
 * Code Splitting Utilities
 * 
 * Advanced code splitting and lazy loading utilities for performance optimization.
 * 
 * Features:
 * - Component lazy loading with retries
 * - Preloading strategies
 * - Bundle analysis helpers
 * - Dynamic imports with error handling
 * 
 * @example
 * const LazyComponent = lazyWithRetry(() => import('./Component'));
 * <Suspense fallback={<Loading />}>
 *   <LazyComponent />
 * </Suspense>
 */

import { lazy, ComponentType } from 'react';

/**
 * Lazy load component with retry logic
 * 
 * Automatically retries failed chunk loads (useful for flaky networks).
 */
export function lazyWithRetry<T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>,
  retries: number = 3,
  retryDelay: number = 1000
): React.LazyExoticComponent<T> {
  return lazy(() => {
    return new Promise<{ default: T }>((resolve, reject) => {
      const attemptLoad = (retriesLeft: number) => {
        componentImport()
          .then(resolve)
          .catch((error) => {
            if (retriesLeft === 0) {
              reject(error);
              return;
            }
            
            console.warn(
              `Failed to load component. Retrying... (${retriesLeft} attempts left)`
            );
            
            setTimeout(() => {
              attemptLoad(retriesLeft - 1);
            }, retryDelay);
          });
      };
      
      attemptLoad(retries);
    });
  });
}

/**
 * Preload a lazy component
 * 
 * Starts loading a component before it's rendered.
 */
export function preloadComponent<T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>
): Promise<{ default: T }> {
  return componentImport();
}

/**
 * Lazy load multiple components
 */
export function lazyLoadComponents<T extends Record<string, () => Promise<any>>>(
  components: T
): { [K in keyof T]: React.LazyExoticComponent<any> } {
  const result: any = {};
  
  for (const [key, importFn] of Object.entries(components)) {
    result[key] = lazy(importFn);
  }
  
  return result;
}

/**
 * Preload strategy: Preload on hover
 */
export function preloadOnHover<T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>
): {
  onMouseEnter: () => void;
  onTouchStart: () => void;
} {
  let isPreloaded = false;
  
  const preload = () => {
    if (!isPreloaded) {
      isPreloaded = true;
      preloadComponent(componentImport);
    }
  };
  
  return {
    onMouseEnter: preload,
    onTouchStart: preload,
  };
}

/**
 * Preload strategy: Preload on viewport entry
 */
export function preloadOnViewport<T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>,
  ref: React.RefObject<HTMLElement>
): void {
  if (typeof window === 'undefined') return;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          preloadComponent(componentImport);
          observer.disconnect();
        }
      });
    },
    { rootMargin: '50px' } // Preload 50px before viewport
  );
  
  if (ref.current) {
    observer.observe(ref.current);
  }
}

/**
 * Preload strategy: Preload after delay
 */
export function preloadAfterDelay<T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>,
  delay: number = 2000
): void {
  if (typeof window === 'undefined') return;
  
  setTimeout(() => {
    preloadComponent(componentImport);
  }, delay);
}

/**
 * Preload strategy: Preload on idle
 */
export function preloadOnIdle<T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>
): void {
  if (typeof window === 'undefined') return;
  
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => {
      preloadComponent(componentImport);
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      preloadComponent(componentImport);
    }, 1000);
  }
}

/**
 * Dynamic import with error handling
 */
export async function importWithErrorHandling<T>(
  importFn: () => Promise<T>,
  fallback?: T
): Promise<T> {
  try {
    return await importFn();
  } catch (error) {
    console.error('Failed to load module:', error);
    
    if (fallback) {
      return fallback;
    }
    
    throw error;
  }
}

/**
 * Bundle size analysis helper
 */
export interface BundleInfo {
  name: string;
  size: number;
  loadTime?: number;
}

export function logBundleInfo(
  bundleName: string,
  startTime: number
): BundleInfo {
  const loadTime = performance.now() - startTime;
  
  const info: BundleInfo = {
    name: bundleName,
    size: 0, // Size would come from bundler
    loadTime,
  };
  
  console.log(`Bundle "${bundleName}" loaded in ${loadTime.toFixed(2)}ms`);
  
  return info;
}

/**
 * Lazy load with loading state
 */
export interface LazyLoadOptions {
  onLoading?: () => void;
  onLoaded?: () => void;
  onError?: (error: Error) => void;
}

export function lazyWithCallbacks<T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>,
  options: LazyLoadOptions = {}
): React.LazyExoticComponent<T> {
  const { onLoading, onLoaded, onError } = options;
  
  return lazy(() => {
    if (onLoading) onLoading();
    
    return componentImport()
      .then((module) => {
        if (onLoaded) onLoaded();
        return module;
      })
      .catch((error) => {
        if (onError) onError(error);
        throw error;
      });
  });
}

/**
 * Route-based code splitting helper
 */
export interface RouteConfig {
  path: string;
  component: () => Promise<{ default: ComponentType<any> }>;
  preload?: boolean;
}

export function createLazyRoutes(
  routes: RouteConfig[]
): Map<string, React.LazyExoticComponent<any>> {
  const lazyRoutes = new Map();
  
  routes.forEach((route) => {
    const LazyComponent = lazy(route.component);
    lazyRoutes.set(route.path, LazyComponent);
    
    // Preload if specified
    if (route.preload) {
      preloadOnIdle(route.component);
    }
  });
  
  return lazyRoutes;
}

/**
 * Prefetch strategy: Prefetch all chunks
 */
export function prefetchAllChunks(): void {
  if (typeof window === 'undefined') return;
  
  // This would be implemented with webpack's magic comments
  // or vite's dynamic import analysis
  console.log('Prefetching all chunks...');
  
  // In a real implementation, this would use:
  // - Webpack: import(/* webpackPrefetch: true */ './module')
  // - Vite: import.meta.glob with eager option
}

/**
 * Progressive enhancement: Load features based on capability
 */
export interface FeatureConfig<T> {
  modern: () => Promise<T>;
  legacy: () => Promise<T>;
  test: () => boolean;
}

export async function loadByCapability<T>(
  config: FeatureConfig<T>
): Promise<T> {
  const useModern = config.test();
  
  if (useModern) {
    console.log('Loading modern implementation');
    return config.modern();
  } else {
    console.log('Loading legacy implementation');
    return config.legacy();
  }
}
