/**
 * Site Pages — Barrel Export
 *
 * Re-exports all site page data, types, navigation, and helpers.
 * Import from this module: `import { sitePages, mainNavigation } from '../data/site-pages';`
 *
 * @see /guidelines/routes.md
 */

export type { SitePage } from './types';
export { sitePages } from './pages';
export { mainNavigation, footerNavigation } from './navigation';
export {
  getPageBySlug,
  getPageTitle,
  getPageUrl,
  getChildPages,
  getBreadcrumbs,
} from './helpers';