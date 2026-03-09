/**
 * Site Pages — Type Definitions
 *
 * Shared TypeScript interfaces for site page data.
 *
 * @see /guidelines/overview-sitemap.md
 */

export interface SitePage {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  template?: string;
  parent?: string; // Parent page slug
  showInNav?: boolean;
  order?: number;
}
