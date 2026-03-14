/**
 * CSS Bundle Loader Utility (Stub)
 * 
 * All route CSS is now consolidated into /src/styles/index.css.
 * Bundle files have been removed (March 13, 2026).
 * 
 * This stub preserves the exported API for backward compatibility
 * with route wrapper functions that call loadCSSBundle().
 * 
 * @see /src/styles/index.css — All CSS loaded here
 */

export type CSSBundle =
  | 'blog'
  | 'services'
  | 'portfolio'
  | 'solutions'
  | 'about'
  | 'utility'
  | 'media'
  | 'system';

/** No-op — all CSS loaded via index.css */
export async function loadCSSBundle(_bundle: CSSBundle): Promise<void> {
  return Promise.resolve();
}

/** No-op — all CSS loaded via index.css */
export function preloadCSSBundle(_bundle: CSSBundle): void {}

/** No-op stub */
export function isBundleLoaded(_bundle: CSSBundle): boolean {
  return true;
}

/** No-op stub */
export function isBundleLoading(_bundle: CSSBundle): boolean {
  return false;
}

/** No-op stub */
export function resetBundleState(): void {}

/** No-op stub */
export function getBundleForRoute(path: string): CSSBundle | null {
  const segment = path.replace(/^\/|\/$/g, '').split('/')[0];
  const map: Record<string, CSSBundle> = {
    insights: 'blog', services: 'services', work: 'portfolio',
    solutions: 'solutions', about: 'about', team: 'about',
    careers: 'about', contact: 'utility', faq: 'utility',
    pricing: 'utility', search: 'utility', sitemap: 'utility',
    hosting: 'utility', testimonials: 'utility', guarantees: 'utility',
    videos: 'media', podcasts: 'media', systems: 'system',
    journey: 'system', dev: 'system',
  };
  return map[segment] || null;
}