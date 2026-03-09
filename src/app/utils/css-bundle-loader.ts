/**
 * CSS Bundle Loader Utility
 * 
 * Utilities for dynamic CSS bundle loading per route family.
 * Enables route-based CSS splitting to reduce initial bundle size by 60-70%.
 * 
 * Bundle Strategy:
 * - Core CSS (~60-80KB): Always loaded in index.css
 * - Route Bundles (~6-25KB): Loaded dynamically per route family
 * - Preloading: CSS preloaded on navigation link hover
 * 
 * Design System Compliance:
 * - All CSS uses var(--font-primary) / var(--font-secondary)
 * - All colors use semantic CSS variables
 * - All spacing uses var(--spacing-*) tokens
 * - BEM naming + WordPress utilities
 * 
 * @see /src/styles/bundles/ — Route bundle files
 * @see /reports/2026-03/memory-optimization/route-to-css-mapping.md
 * @see /reports/2026-03/phase-3-step-2-task-2-1-complete.md
 */

/* ═══════════════════════════════════════════
 * Bundle Type Definitions
 * ═══════════════════════════════════════════ */

/**
 * Available CSS bundles
 */
export type CSSBundle =
  | 'blog'       // /insights/* (33 files, ~8-12KB)
  | 'services'   // /services/* (45 files, ~15-25KB)
  | 'portfolio'  // /work/* (15 files, ~8-12KB)
  | 'solutions'  // /solutions/* (17 files, ~10-15KB)
  | 'about'      // /about/* (12 files, ~6-8KB)
  | 'utility'    // /contact, /faq, /pricing, etc. (35 files, ~12-18KB)
  | 'media'      // /videos/*, /podcasts/* (6 files, ~6-8KB)
  | 'system';    // /systems/*, /dev/* (25+ files, ~10-15KB)

/* ═══════════════════════════════════════════
 * Bundle Loading State
 * ═══════════════════════════════════════════ */

/**
 * Track loaded bundles to prevent duplicate loading
 */
const loadedBundles = new Set<CSSBundle>();

/**
 * Track loading promises to prevent race conditions
 */
const loadingBundles = new Map<CSSBundle, Promise<void>>();

/* ═══════════════════════════════════════════
 * Bundle Loading Functions
 * ═══════════════════════════════════════════ */

/**
 * Load a CSS bundle dynamically
 * 
 * @param bundle - Bundle name to load
 * @returns Promise that resolves when bundle is loaded
 * 
 * @example
 * ```tsx
 * // Load blog bundle for /insights routes
 * await loadCSSBundle('blog');
 * ```
 */
export async function loadCSSBundle(bundle: CSSBundle): Promise<void> {
  // Already loaded, skip
  if (loadedBundles.has(bundle)) {
    return;
  }

  // Currently loading, return existing promise
  if (loadingBundles.has(bundle)) {
    return loadingBundles.get(bundle);
  }

  // Start loading
  const loadPromise = (async () => {
    try {
      // Static import with switch statement (fixes Vite build issue)
      // Dynamic template literals prevent proper code splitting in production
      switch (bundle) {
        case 'blog':
          await import('../../styles/bundles/blog-bundle.css');
          break;
        case 'services':
          await import('../../styles/bundles/services-bundle.css');
          break;
        case 'portfolio':
          await import('../../styles/bundles/portfolio-bundle.css');
          break;
        case 'solutions':
          await import('../../styles/bundles/solutions-bundle.css');
          break;
        case 'about':
          await import('../../styles/bundles/about-bundle.css');
          break;
        case 'media':
          await import('../../styles/bundles/media-bundle.css');
          break;
        case 'system':
          await import('../../styles/bundles/system-bundle.css');
          break;
        case 'utility':
          await import('../../styles/bundles/utility-bundle.css');
          break;
        default:
          console.warn(`[CSS Bundle] Unknown bundle: ${bundle}`);
          return;
      }
      
      // Mark as loaded
      loadedBundles.add(bundle);
      
      // Log in development
      if (import.meta.env.DEV) {
        console.log(`[CSS Bundle] Loaded: ${bundle}-bundle.css`);
      }
    } catch (error) {
      console.error(`[CSS Bundle] Failed to load ${bundle}-bundle.css:`, error);
      throw error;
    } finally {
      // Remove from loading map
      loadingBundles.delete(bundle);
    }
  })();

  // Track loading promise
  loadingBundles.set(bundle, loadPromise);

  return loadPromise;
}

/**
 * Preload a CSS bundle (e.g., on hover)
 * 
 * Same as loadCSSBundle but non-blocking and silent errors.
 * Used for preloading bundles before navigation.
 * 
 * @param bundle - Bundle name to preload
 * 
 * @example
 * ```tsx
 * // Preload blog bundle on link hover
 * <Link to="/insights" onMouseEnter={() => preloadCSSBundle('blog')}>
 *   Blog
 * </Link>
 * ```
 */
export function preloadCSSBundle(bundle: CSSBundle): void {
  // Don't block on preload, just start loading
  loadCSSBundle(bundle).catch(() => {
    // Silent error, preload is optional optimization
  });
}

/**
 * Check if a bundle is loaded
 * 
 * @param bundle - Bundle name to check
 * @returns True if bundle is loaded
 */
export function isBundleLoaded(bundle: CSSBundle): boolean {
  return loadedBundles.has(bundle);
}

/**
 * Check if a bundle is currently loading
 * 
 * @param bundle - Bundle name to check
 * @returns True if bundle is loading
 */
export function isBundleLoading(bundle: CSSBundle): boolean {
  return loadingBundles.has(bundle);
}

/**
 * Reset bundle loading state (for testing)
 * 
 * @internal
 */
export function resetBundleState(): void {
  loadedBundles.clear();
  loadingBundles.clear();
}

/* ═══════════════════════════════════════════
 * Bundle Metadata
 * ═══════════════════════════════════════════ */

/**
 * Bundle metadata for debugging and monitoring
 */
export const bundleMetadata: Record<CSSBundle, {
  routes: string[];
  files: number;
  size: string;
  priority: 'critical' | 'medium' | 'low';
}> = {
  blog: {
    routes: ['/insights/*'],
    files: 33,
    size: '8-12KB',
    priority: 'critical',
  },
  services: {
    routes: ['/services/*'],
    files: 45,
    size: '15-25KB',
    priority: 'critical',
  },
  portfolio: {
    routes: ['/work/*'],
    files: 15,
    size: '8-12KB',
    priority: 'critical',
  },
  solutions: {
    routes: ['/solutions/*'],
    files: 17,
    size: '10-15KB',
    priority: 'critical',
  },
  about: {
    routes: ['/about/*', '/team', '/careers'],
    files: 12,
    size: '6-8KB',
    priority: 'medium',
  },
  utility: {
    routes: ['/contact', '/faq', '/pricing', '/search', '/sitemap', '/hosting/*', '/testimonials/*'],
    files: 35,
    size: '12-18KB',
    priority: 'medium',
  },
  media: {
    routes: ['/videos/*', '/podcasts/*'],
    files: 6,
    size: '6-8KB',
    priority: 'low',
  },
  system: {
    routes: ['/systems/*', '/journey/*', '/dev/*'],
    files: 25,
    size: '10-15KB',
    priority: 'low',
  },
};

/**
 * Get bundle name from route path
 * 
 * @param path - Route path (e.g., '/insights/post-slug')
 * @returns Bundle name or null if no bundle matches
 * 
 * @example
 * ```tsx
 * getBundleForRoute('/insights/post-slug'); // 'blog'
 * getBundleForRoute('/services/development'); // 'services'
 * getBundleForRoute('/'); // null (core routes, no bundle)
 * ```
 */
export function getBundleForRoute(path: string): CSSBundle | null {
  // Remove leading/trailing slashes
  const cleanPath = path.replace(/^\/|\/$/g, '');
  
  // Get first segment
  const firstSegment = cleanPath.split('/')[0];
  
  // Map segments to bundles
  const segmentToBundleMap: Record<string, CSSBundle> = {
    'insights': 'blog',
    'services': 'services',
    'work': 'portfolio',
    'solutions': 'solutions',
    'about': 'about',
    'team': 'about',
    'careers': 'about',
    'contact': 'utility',
    'faq': 'utility',
    'privacy-policy': 'utility',
    'terms': 'utility',
    'styleguide': 'utility',
    'pricing': 'utility',
    'roi-calculator': 'utility',
    'why-choose-us': 'utility',
    'guarantees': 'utility',
    'testimonials': 'utility',
    'hosting': 'utility',
    'search': 'utility',
    'sitemap': 'utility',
    'tutorials': 'utility',
    'publishers': 'utility',
    'videos': 'media',
    'podcasts': 'media',
    'systems': 'system',
    'journey': 'system',
    'dev': 'system',
  };
  
  return segmentToBundleMap[firstSegment] || null;
}