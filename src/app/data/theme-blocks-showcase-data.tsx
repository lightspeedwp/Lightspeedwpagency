/**
 * Theme Blocks Showcase — Static Data
 *
 * Extracted from ThemeBlocksShowcase.tsx for data-content separation.
 * Contains mock navigation items for the theme blocks demo.
 *
 * @split March 17, 2026
 */

export interface MockNavItem {
  label: string;
  path: string;
  id: string;
}

export const mockNavItems: MockNavItem[] = [
  { label: 'Home', path: '/', id: '1' },
  { label: 'About', path: '/about', id: '2' },
  { label: 'Services', path: '/services', id: '3' },
  { label: 'Contact', path: '/contact', id: '4' },
];
