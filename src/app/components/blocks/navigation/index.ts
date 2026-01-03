/**
 * Navigation Block Components
 * 
 * WordPress navigation blocks implemented as React components
 * for the LSX Design system.
 * 
 * **Components:**
 * - Accordion - Collapsible content sections with expand/collapse
 * - Breadcrumbs - Hierarchical navigation trail (items only)
 * - BreadcrumbsBar - Complete breadcrumb bar with background
 * - Pagination - Page navigation with prev/next
 * - SocialLinks - Social media icon links
 * - Tabs - Horizontal tab navigation
 * 
 * **Design System:**
 * - All components use CSS variables
 * - Fonts: Lexend (UI), Manrope (body)
 * - Light/dark theme support
 * - WCAG 2.1 AA compliant
 */

export { Accordion } from './Accordion';
export { Breadcrumbs } from './Breadcrumbs';
export { BreadcrumbsBar } from './BreadcrumbsBar';
export { Pagination } from './Pagination';
export { SocialLinks } from './SocialLinks';
export { Tabs } from './Tabs';

export type { BreadcrumbItem } from './BreadcrumbsBar';
