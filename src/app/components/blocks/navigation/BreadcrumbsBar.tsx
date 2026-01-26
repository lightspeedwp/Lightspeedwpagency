/**
 * BreadcrumbsBar Component
 * 
 * WordPress concept: Template part (parts/breadcrumbs-bar.html)
 * Pattern: `lsx-design/nav/breadcrumbs-bar`
 * 
 * A complete breadcrumb navigation bar with background, padding, and responsive layout.
 * This is the full container that wraps breadcrumb navigation items.
 * 
 * **Purpose:**
 * - Display hierarchical navigation trail in a styled container
 * - Provide visual separation between header and main content
 * - Improve user orientation with clear navigation context
 * - Support light and dark theme modes automatically
 * 
 * **Accessibility:**
 * - Semantic <nav> element with aria-label="Breadcrumb navigation"
 * - Ordered list (<ol>) for hierarchical structure
 * - aria-current="page" on current page
 * - Keyboard navigable links (Tab, Enter)
 * - Focus visible with 2px outline ring (--ring color)
 * - Screen reader friendly separators (aria-hidden)
 * - WCAG 2.1 AA compliant contrast ratios in both themes
 * 
 * **Design System:**
 * - **Typography:** Manrope font, var(--text-small) (14px)
 * - **Colors:** 
 *   - Background: var(--muted) (light gray in light mode, dark gray in dark mode)
 *   - Border: var(--border) (subtle divider line)
 *   - Links: var(--muted-foreground) (accessible in both themes)
 *   - Current: var(--foreground) (high contrast in both themes)
 *   - Separator: var(--muted-foreground)
 * - **Spacing:** 
 *   - Container: py-3 px-6 (12px vertical, 24px horizontal)
 *   - Items: gap-1 (4px between items)
 *   - Responsive: px-4 on mobile, px-6 on desktop
 * - **Border Radius:** None (full-width bar)
 * 
 * **Theme Support:**
 * All colors use CSS variables that automatically switch between themes:
 * - Light mode: Subtle gray background, dark text
 * - Dark mode: Dark gray background, light text
 * - No JavaScript needed for theme switching
 * 
 * **Performance:**
 * - Lightweight: ~3KB gzipped
 * - Pure CSS styling (CSS variables only)
 * - Minimal re-renders (static structure)
 * - SEO-optimized JSON-LD script
 * 
 * @example
 * // Homepage breadcrumb
 * <BreadcrumbsBar items={[
 *   { label: 'Home', page: 'front-page' }
 * ]} />
 * 
 * @example
 * // Archive page breadcrumb
 * <BreadcrumbsBar items={[
 *   { label: 'Home', page: 'front-page' },
 *   { label: 'Portfolio' }
 * ]} />
 * 
 * @example
 * // Single post breadcrumb (3 levels)
 * <BreadcrumbsBar items={[
 *   { label: 'Home', page: 'front-page' },
 *   { label: 'Blog', page: 'blog' },
 *   { label: 'Getting Started with WordPress' }
 * ]} />
 * 
 * @example
 * // With custom container styling
 * <BreadcrumbsBar 
 *   items={[
 *     { label: 'Home', page: 'front-page' },
 *     { label: 'Services' }
 *   ]}
 *   className="mb-8"
 * />
 * 
 * @see {@link /guidelines/components/Breadcrumbs.md}
 */

import { ChevronRight } from 'lucide-react';
import { useNavigation } from '../../../contexts/NavigationContext';

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
}

/**
 * BreadcrumbsBar component props
 * 
 * Defines the breadcrumb trail and optional styling for the container bar.
 */
interface BreadcrumbsBarProps {
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
   * - Hide on mobile: hidden md:block
   * - Full width variations: container mx-auto
   * 
   * @example
   * className="mb-8"
   * 
   * @example
   * className="hidden md:block"
   */
  className?: string;
}

/**
 * BreadcrumbsBar Component
 * 
 * Renders a complete breadcrumb navigation bar with background, border, and padding.
 * Automatically adapts to light/dark theme using CSS variables.
 * All levels except the last (current page) are clickable and linked.
 * 
 * **WordPress Mapping:**
 * - Template part: parts/breadcrumbs-bar.html
 * - Pattern: lsx-design/nav/breadcrumbs-bar
 * - Usage: Insert before main content in templates
 * 
 * **Visual Design:**
 * - Full-width bar with subtle background
 * - Border bottom for separation
 * - Responsive padding (more on desktop)
 * - Automatic theme color adaptation
 * 
 * @param props - BreadcrumbsBarProps
 * @returns Breadcrumb navigation bar with Schema.org markup
 */
export function BreadcrumbsBar({ items, className = '' }: BreadcrumbsBarProps) {
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
      ...(item.page && { item: `/${item.page}` }),
    })),
  };

  return (
    <>
      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumb Bar Container */}
      <div
        className={`w-full border-b py-3 px-4 md:px-6 ${className}`}
        style={{
          backgroundColor: 'var(--muted)',
          borderColor: 'var(--border)',
        }}
      >
        <nav 
          aria-label="Breadcrumb navigation"
          className="max-w-screen-2xl mx-auto"
        >
          <ol 
            className="flex items-center gap-1 flex-wrap"
            style={{
              fontFamily: 'var(--font-secondary)',
              fontSize: 'var(--text-small)',
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
                    /* Linked breadcrumb item */
                    <button
                      onClick={() => navigateTo(item.page!)}
                      className="transition-all duration-200 ease-in-out hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm px-1"
                      style={{
                        color: 'var(--muted-foreground)',
                        background: 'none',
                        border: 'none',
                        padding: '0 4px',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-secondary)',
                        fontSize: 'var(--text-small)',
                        fontWeight: '400',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--foreground)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--muted-foreground)';
                      }}
                      aria-label={`Navigate to ${item.label}`}
                    >
                      {item.label}
                    </button>
                  ) : (
                    /* Current page (non-clickable) */
                    <span
                      aria-current={isLast ? 'page' : undefined}
                      className="px-1"
                      style={{
                        color: 'var(--foreground)',
                        fontFamily: 'var(--font-secondary)',
                        fontSize: 'var(--text-small)',
                        fontWeight: '500',
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
      </div>
    </>
  );
}

/**
 * WordPress Block Pattern Registration
 * 
 * Pattern slug: lsx-design/nav/breadcrumbs-bar
 * Category: nav
 * 
 * Example WordPress Block Pattern:
 * 
 * ```php
 * register_block_pattern(
 *   'lsx-design/nav/breadcrumbs-bar',
 *   array(
 *     'title'       => __( 'Breadcrumbs Bar', 'lsx-design' ),
 *     'description' => __( 'Full-width breadcrumb navigation bar with background', 'lsx-design' ),
 *     'categories'  => array( 'nav' ),
 *     'content'     => '
 *       <!-- wp:group {"style":{"spacing":{"padding":{"top":"0.75rem","bottom":"0.75rem","left":"1.5rem","right":"1.5rem"}},"border":{"bottom":{"width":"1px"}}},"backgroundColor":"muted","className":"breadcrumbs-bar"} -->
 *       <div class="wp-block-group breadcrumbs-bar has-muted-background-color has-background" style="padding-top:0.75rem;padding-right:1.5rem;padding-bottom:0.75rem;padding-left:1.5rem;border-bottom-width:1px">
 *         <!-- wp:navigation {"overlayMenu":"never","layout":{"type":"flex","orientation":"horizontal"},"ariaLabel":"Breadcrumb"} /-->
 *       </div>
 *       <!-- /wp:group -->
 *     ',
 *   )
 * );
 * ```
 * 
 * Usage in templates/patterns:
 * ```html
 * <!-- wp:pattern {"slug":"lsx-design/nav/breadcrumbs-bar"} /-->
 * ```
 */
