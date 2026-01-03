/**
 * Pages Mock Data (DEPRECATED - Use site-pages.ts)
 * 
 * This file maintained for backward compatibility.
 * New code should import from /src/app/data/site-pages.ts
 * 
 * @deprecated Use site-pages.ts instead
 */

import {
  sitePages,
  mainNavigation as newMainNavigation,
  footerNavigation as newFooterNavigation,
  getPageBySlug as getNewPageBySlug,
  getPageTitle as getNewPageTitle,
  getPageUrl as getNewPageUrl,
  getBreadcrumbs as getNewBreadcrumbs
} from './site-pages';

export interface PageMeta {
  id: string;
  title: string;
  slug: string;
  url: string;
  description?: string;
  parent?: string;
  template?: string;
  order?: number;
}

/**
 * Convert new site pages to legacy PageMeta format
 */
function convertToPageMeta(page: typeof sitePages[0]): PageMeta {
  return {
    id: page.id,
    title: page.title,
    slug: page.slug,
    url: getNewPageUrl(page.slug),
    description: page.excerpt,
    parent: page.parent,
    template: page.template,
    order: page.order
  };
}

// Main Pages (converted from site-pages.ts)
export const mainPages: PageMeta[] = sitePages
  .filter(p => p.showInNav)
  .map(convertToPageMeta);

// All Pages
export const allPages: PageMeta[] = sitePages.map(convertToPageMeta);

/**
 * Main Navigation
 * Maps to new structure from site-pages.ts
 */
export const mainNavigation = newMainNavigation;

/**
 * Footer Navigation
 * Maps to new structure from site-pages.ts
 */
export const footerNavigation = newFooterNavigation;

/**
 * Helper Functions (Backward Compatibility)
 */

export function getPageBySlug(slug: string): PageMeta | undefined {
  const page = getNewPageBySlug(slug);
  return page ? convertToPageMeta(page) : undefined;
}

export function getPageTitle(slug: string): string {
  return getNewPageTitle(slug);
}

export function getPageUrl(slug: string): string {
  return getNewPageUrl(slug);
}

export function getBreadcrumbs(slug: string): { label: string; url: string }[] {
  return getNewBreadcrumbs(slug);
}
