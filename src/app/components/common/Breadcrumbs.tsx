/**
 * Breadcrumbs Component
 * 
 * WordPress concept: Template part (parts/breadcrumbs.html)
 * Pattern: `lsx-design/nav/breadcrumbs`
 * 
 * A hierarchical navigation trail that shows the user's location within the site structure.
 * Improves UX by providing context and enabling quick navigation to parent pages.
 * 
 * **Purpose:**
 * - Show current page location in site hierarchy
 * - Enable quick navigation to parent pages
 * - Improve SEO with structured data
 * - Enhance user orientation on deep pages
 * 
 * **Accessibility:**
 * - Semantic <nav> element with aria-label="Breadcrumb"
 * - Ordered list (<ol>) for hierarchical structure
 * - aria-current="page" on current page
 * - Keyboard navigable links (Tab, Enter)
 * - Focus visible with 2px outline ring
 * - Screen reader friendly separators (aria-hidden)
 * 
 * **SEO Benefits:**
 * - Schema.org BreadcrumbList structured data
 * - Proper hierarchy for search engines
 * - Rich snippets in search results
 * - Improved crawlability
 * 
 * **Design System:**
 * - Typography: Manrope font, --text-small (14px)
 * - Colors: --muted-foreground (links), --foreground (current)
 * - Spacing: gap-1 (4px) between items
 * - Separator: ChevronRight icon (16px)
 * - Interactive states: Hover, focus, active
 * 
 * **Performance:**
 * - Lightweight: ~2KB gzipped
 * - Pure CSS styling (CSS variables)
 * - Minimal re-renders (static structure)
 * - SEO-optimized JSON-LD script
 * 
 * @example
 * // Homepage breadcrumb (single item)
 * <Breadcrumbs items={[
 *   { label: 'Home', page: 'front-page' }
 * ]} />
 * 
 * @example
 * // Archive page breadcrumb (2 levels)
 * <Breadcrumbs items={[
 *   { label: 'Home', page: 'front-page' },
 *   { label: 'Portfolio' }
 * ]} />
 * 
 * @example
 * // Single post breadcrumb (3 levels)
 * <Breadcrumbs items={[
 *   { label: 'Home', page: 'front-page' },
 *   { label: 'Blog', page: 'blog' },
 *   { label: 'Getting Started with WordPress' }
 * ]} />
 * 
 * @example
 * // Deep hierarchy (4+ levels)
 * <Breadcrumbs items={[
 *   { label: 'Home', page: 'front-page' },
 *   { label: 'Portfolio', page: 'portfolio-archive' },
 *   { label: 'E-commerce', page: 'portfolio-archive' },
 *   { label: 'African Safari Consultants' }
 * ]} />
 * 
 * @see {@link /guidelines/components/Breadcrumbs.md}
 */

import { ChevronRight } from 'lucide-react';
import { useNavigation } from '../../contexts/NavigationContext';

/**
 * Single breadcrumb item in the trail
 * 
 * Represents one level in the site hierarchy.
 * Can be either a link (with page prop) or plain text (current page).
 */
export interface BreadcrumbItem {
  /**
   * Display text for the breadcrumb item
   * 
   * **Best practices:**
   * - Keep short (1-3 words)
   * - Use proper nouns (Title Case)
   * - Match actual page title
   * - Avoid generic terms like "Page"
   * 
   * @example
   * label: "Home"
   * 
   * @example
   * label: "Portfolio"
   * 
   * @example
   * label: "African Safari Consultants"
   */
  label: string;
  
  /**
   * Navigation page slug for internal links
   * 
   * Uses centralized navigation from useNavigation() hook.
   * Omit for the current page (last item in breadcrumb).
   * 
   * **Valid page slugs:**
   * - 'front-page' - Homepage
   * - 'services' - Services page
   * - 'portfolio-archive' - Portfolio listing
   * - 'blog' - Blog index
   * - See /src/app/data/pages.ts for complete list
   * 
   * @example
   * page: "front-page"
   * 
   * @example
   * page: "portfolio-archive"
   */
  page?: string;
  
  /**
   * Legacy href support (deprecated)
   * 
   * Prefer `page` prop for internal navigation.
   * Only use href for external links (rare in breadcrumbs).
   * 
   * **Note:** Will be converted to page-based navigation in future.
   * 
   * @deprecated Use `page` prop instead
   * 
   * @example
   * href: "https://external-site.com"
   */
  href?: string;
}

/**
 * Breadcrumbs component props
 * 
 * Defines the breadcrumb trail and optional styling.
 */
interface BreadcrumbsProps {
  /**
   * Array of breadcrumb items from root to current page
   * 
   * **Order matters:**
   * - First item: Root (usually "Home")
   * - Middle items: Parent pages (with page prop)
   * - Last item: Current page (no page prop)
   * 
   * **Minimum items:** 1 (current page only)
   * **Recommended max:** 5 levels for usability
   * 
   * @example
   * items={[
   *   { label: 'Home', page: 'front-page' },
   *   { label: 'Portfolio', page: 'portfolio-archive' },
   *   { label: 'Current Project' }
   * ]}
   */
  items: BreadcrumbItem[];
  
  /**
   * Additional Tailwind classes for container styling
   * 
   * Common use cases:
   * - Margins: mb-4, mt-6
   * - Padding: px-4, py-2
   * - Background: bg-muted
   * 
   * @example
   * className="mb-6"
   */
  className?: string;
}

/**
 * Breadcrumbs Component
 * 
 * Renders a hierarchical navigation trail with SEO structured data.
 * All levels except the last (current page) are clickable and linked.
 * 
 * @param props - BreadcrumbsProps
 * @returns Breadcrumb navigation with Schema.org markup
 */
export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const { navigateTo } = useNavigation();

  /**
   * Generate Schema.org BreadcrumbList structured data for SEO
   * 
   * Benefits:
   * - Rich snippets in Google search results
   * - Improved click-through rates
   * - Better search engine understanding
   * - Enhanced mobile search display
   * 
   * @see {@link https://schema.org/BreadcrumbList}
   */
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href && { item: item.href }),
    })),
  };

  return (
    <>
      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumb navigation */}
      <nav 
        aria-label="Breadcrumb"
        className={className}
      >
        <ol 
          className="flex items-center gap-1"
          style={{
            fontFamily: 'var(--font-secondary)',
            fontSize: 'var(--text-small)',
            fontWeight: 'var(--font-weight-regular)',
            lineHeight: '1.5',
          }}
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li 
                key={index}
                className="flex items-center gap-1"
              >
                {!isLast && item.page ? (
                  <button
                    onClick={() => navigateTo(item.page!)}
                    style={{
                      color: 'var(--muted-foreground)',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-regular)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--foreground)';
                      e.currentTarget.style.textDecoration = 'underline';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--muted-foreground)';
                      e.currentTarget.style.textDecoration = 'none';
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.outline = '2px solid var(--ring)';
                      e.currentTarget.style.outlineOffset = '2px';
                      e.currentTarget.style.borderRadius = 'var(--radius-sm)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.outline = 'none';
                    }}
                  >
                    {item.label}
                  </button>
                ) : item.href && !isLast ? (
                  <a
                    href={item.href}
                    style={{
                      color: 'var(--muted-foreground)',
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-regular)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--foreground)';
                      e.currentTarget.style.textDecoration = 'underline';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--muted-foreground)';
                      e.currentTarget.style.textDecoration = 'none';
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.outline = '2px solid var(--ring)';
                      e.currentTarget.style.outlineOffset = '2px';
                      e.currentTarget.style.borderRadius = 'var(--radius-sm)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.outline = 'none';
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span
                    aria-current={isLast ? 'page' : undefined}
                    style={{
                      color: 'var(--foreground)',
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-medium)',
                    }}
                  >
                    {item.label}
                  </span>
                )}

                {/* Separator (hidden from screen readers) */}
                {!isLast && (
                  <ChevronRight 
                    className="flex-shrink-0"
                    style={{
                      width: '16px',
                      height: '16px',
                      color: 'var(--muted-foreground)',
                    }}
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

/**
 * WordPress Block Pattern Registration
 * 
 * Pattern slug: lsx-design/nav/breadcrumbs
 * Category: nav
 * 
 * Usage in templates/patterns:
 * <!-- wp:pattern {"slug":"lsx-design/nav/breadcrumbs"} /-->
 */
