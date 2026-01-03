/**
 * Theme Blocks Index
 * 
 * WordPress Theme Blocks (Category: Theme)
 * 
 * These blocks represent structural elements and site identity
 * components that are part of the WordPress theme. They map
 * directly to core WordPress blocks introduced in WordPress 5.9+
 * for Full Site Editing (FSE).
 * 
 * **Block Categories:**
 * - Site Identity: Site Logo, Site Title, Site Tagline
 * - Navigation: Navigation, Search
 * - Structure: Template Part
 * 
 * **Design System:**
 * - All blocks use CSS variables from theme.css
 * - Typography uses Lexend (headings) and Manrope (body)
 * - Spacing uses Tailwind classes
 * - Colors use semantic tokens
 * 
 * **Accessibility:**
 * - WCAG AA/AAA compliant
 * - Keyboard navigation support
 * - ARIA labels and roles
 * - Focus indicators
 * 
 * @see {@link /guidelines/blocks/theme/}
 * @see {@link /THEME-BLOCKS-GUIDELINES-COMPLETE-DEC-26.md}
 */

// Site Identity Blocks
export { SiteLogo } from './SiteLogo';
export type { SiteLogoProps } from './SiteLogo';

export { SiteTitle } from './SiteTitle';
export type { SiteTitleProps } from './SiteTitle';

export { SiteTagline } from './SiteTagline';
export type { SiteTaglineProps } from './SiteTagline';

// Navigation Blocks
export { Search } from './Search';
export type { SearchProps } from './Search';

export { Navigation } from './Navigation';
export type { NavigationProps, NavMenuItem } from './Navigation';

// Structure Blocks
export { TemplatePart } from './TemplatePart';
export type { TemplatePartProps } from './TemplatePart';
