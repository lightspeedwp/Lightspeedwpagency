/**
 * Site Pages — Helper Functions
 *
 * Utility functions for querying site page data.
 *
 * @see /guidelines/overview-sitemap.md
 */

import type { SitePage } from './types';
import { sitePages } from './pages';
import { slugToPath } from '../../utils/route-map';

/**
 * Get page by slug
 */
export function getPageBySlug(slug: string): SitePage | undefined {
  return sitePages.find(p => p.slug === slug);
}

/**
 * Get page title by slug
 */
export function getPageTitle(slug: string): string {
  const page = getPageBySlug(slug);
  return page ? page.title : 'Page Not Found';
}

/**
 * Get page URL by slug
 *
 * Delegates to slugToPath() in route-map.ts which maintains the
 * canonical slug -> hierarchical-URL mapping for the entire site.
 */
export function getPageUrl(slug: string): string {
  return slugToPath(slug);
}

/**
 * Get child pages
 */
export function getChildPages(parentSlug: string): SitePage[] {
  return sitePages.filter(p => p.parent === parentSlug);
}

/**
 * Get breadcrumb trail
 */
export function getBreadcrumbs(slug: string): { label: string; url: string }[] {
  const breadcrumbs: { label: string; url: string }[] = [
    { label: 'Home', url: '/' }
  ];

  const page = getPageBySlug(slug);
  if (!page) return breadcrumbs;

  // Add parent if exists
  if (page.parent) {
    const parent = getPageBySlug(page.parent);
    if (parent) {
      breadcrumbs.push({
        label: parent.title,
        url: getPageUrl(parent.slug)
      });
    }
  }

  // Add current page
  breadcrumbs.push({
    label: page.title,
    url: getPageUrl(page.slug)
  });

  return breadcrumbs;
}
