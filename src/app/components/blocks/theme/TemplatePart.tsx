/**
 * Template Part Block
 * 
 * WordPress Block: `core/template-part`
 * Category: Theme
 * Introduced: WordPress 5.9
 * 
 * Enables developers to define reusable structural parts of a theme,
 * such as headers, footers, or other layout sections. Template parts
 * are theme-level constructs that can be edited in the Site Editor.
 * 
 * **Design System:**
 * - Structural composition, not content-based
 * - Uses container blocks (Group, Row, Stack, Columns)
 * - Follows consistent spacing and alignment
 * 
 * **Accessibility:**
 * - Semantic HTML (header, footer, nav, aside)
 * - ARIA labels for regions
 * - Keyboard navigation support
 * 
 * @see {@link /guidelines/blocks/theme/template-part.md}
 */

import React from 'react';

/**
 * Template Part Props
 * 
 * Defines all configuration options for the Template Part block.
 */
export interface TemplatePartProps {
  /**
   * Unique slug for the template part
   * 
   * Use descriptive names in kebab-case.
   * 
   * @example
   * name="header-main"
   * 
   * @example
   * name="footer-primary"
   */
  name: string;
  
  /**
   * Template part area
   * 
   * Defines the structural role of the template part.
   * 
   * - 'header': Site header
   * - 'footer': Site footer
   * - 'sidebar': Sidebar content
   * - 'uncategorized': Other structural parts
   * 
   * @default "uncategorized"
   * 
   * @example
   * area="header"
   */
  area?: 'header' | 'footer' | 'sidebar' | 'uncategorized';
  
  /**
   * Child components or blocks
   * 
   * Template parts are composed of other blocks
   * (Navigation, Site Logo, Site Title, etc.)
   * 
   * @example
   * children={<Row>...</Row>}
   */
  children: React.ReactNode;
  
  /**
   * Additional CSS classes
   * 
   * Use for spacing or layout adjustments.
   * 
   * @example
   * className="border-b border-border"
   */
  className?: string;
  
  /**
   * Inline style overrides
   * 
   * Use CSS variables for consistency.
   * 
   * @example
   * style={{ backgroundColor: 'var(--surface)' }}
   */
  style?: React.CSSProperties;
  
  /**
   * ARIA label for the region
   * 
   * Describes the template part's purpose for screen readers.
   * 
   * @example
   * ariaLabel="Site header"
   */
  ariaLabel?: string;
}

/**
 * Template Part Component
 * 
 * Renders a reusable structural section of the theme. Wraps child
 * components in a semantic HTML element based on the area prop.
 * 
 * **WordPress Mapping:**
 * ```html
 * <!-- wp:template-part {"slug":"header","theme":"lsx-design","area":"header"} /-->
 * ```
 * 
 * **theme.json:**
 * ```json
 * "templateParts": [
 *   {
 *     "name": "header-main",
 *     "title": "Header",
 *     "area": "header"
 *   },
 *   {
 *     "name": "footer-primary",
 *     "title": "Footer",
 *     "area": "footer"
 *   }
 * ]
 * ```
 * 
 * @param props - TemplatePartProps
 * @returns Semantic wrapper with child blocks
 * 
 * @example
 * // Header template part
 * <TemplatePart name="header-main" area="header" ariaLabel="Site header">
 *   <Row justify="space-between" align="center">
 *     <SiteLogo alt="LSX Design" />
 *     <Navigation menu={primaryMenu} />
 *   </Row>
 * </TemplatePart>
 * 
 * @example
 * // Footer template part
 * <TemplatePart name="footer-primary" area="footer" ariaLabel="Site footer">
 *   <Stack gap="gap-8">
 *     <Row justify="space-between">
 *       <SiteLogo theme="dark" />
 *       <Navigation menu={footerMenu} />
 *     </Row>
 *     <SiteTagline>WordPress and WooCommerce experts</SiteTagline>
 *   </Stack>
 * </TemplatePart>
 * 
 * @example
 * // Sidebar template part
 * <TemplatePart name="sidebar-blog" area="sidebar">
 *   <Stack gap="gap-6">
 *     <Search placeholder="Search blog…" />
 *     <Navigation menu={categoriesMenu} orientation="vertical" />
 *   </Stack>
 * </TemplatePart>
 */
export function TemplatePart({
  name,
  area = 'uncategorized',
  children,
  className = '',
  style,
  ariaLabel
}: TemplatePartProps) {
  // Determine semantic HTML tag based on area
  const Tag = area === 'header' 
    ? 'header' 
    : area === 'footer' 
    ? 'footer' 
    : area === 'sidebar' 
    ? 'aside' 
    : 'div';
  
  // Wrapper classes
  const wrapperClasses = `wp-block-template-part wp-block-template-part-${area} template-part-${name} ${className}`.trim();
  
  // Base styles
  const baseStyles: React.CSSProperties = {
    width: '100%',
    ...style
  };
  
  return (
    <Tag 
      className={wrapperClasses} 
      style={baseStyles}
      aria-label={ariaLabel}
      data-template-part-name={name}
      data-template-part-area={area}
    >
      {children}
    </Tag>
  );
}
