/**
 * Theme Blocks Index
 * 
 * WordPress Theme Blocks (Category: Theme)
 * 
 * These blocks represent structural elements and site identity
 * components that are part of the WordPress theme.
 * 
 * @see /guidelines/blocks/theme/
 */

// Site Identity
export { SiteLogo } from './SiteLogo';
export type { SiteLogoProps } from './SiteLogo';

// Navigation
export { Navigation } from './Navigation';
export type { NavigationProps, NavMenuItem } from './Navigation';

export { MegaMenu } from './MegaMenu';

export { Breadcrumbs } from './Breadcrumbs';
export type { BreadcrumbItem, BreadcrumbsProps } from './Breadcrumbs';

export { Pagination } from './Pagination';
export type { PaginationProps } from './Pagination';

// UI
export { StyleSwitcher } from './StyleSwitcher';
