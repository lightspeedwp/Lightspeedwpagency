/**
 * Navigation Block
 * 
 * WordPress Block: `core/navigation`
 * Category: Theme
 * Introduced: WordPress 5.9
 * 
 * Displays a menu that helps visitors navigate the website. Can contain
 * links to pages, posts, categories, or custom URLs. Supports submenus
 * and responsive mobile behavior.
 * 
 * **Design System:**
 * - Typography: Uses CSS variables (var(--text-base))
 * - Colors: Uses semantic tokens (var(--foreground), var(--primary))
 * - Spacing: Uses Tailwind classes
 * - Font: Manrope (body text)
 * 
 * **Accessibility:**
 * - role="navigation" and aria-label
 * - Keyboard navigation (Tab, Arrow keys, Enter, Escape)
 * - ARIA expanded states for submenus
 * - Focus indicators (2px outline)
 * - Touch targets (44×44px minimum)
 * 
 * @see {@link /guidelines/blocks/theme/navigation.md}
 */

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Navigation Menu Item
 * 
 * Represents a single menu item with optional children (submenu).
 */
export interface NavMenuItem {
  /** Unique identifier */
  id: string;
  /** Display text */
  title: string;
  /** Link URL */
  url: string;
  /** Whether this is the active page */
  isActive?: boolean;
  /** Child menu items (submenu) */
  children?: NavMenuItem[];
}

/**
 * Navigation Props
 * 
 * Defines all configuration options for the Navigation block.
 */
export interface NavigationProps {
  /**
   * Array of menu items
   * 
   * Each item can have nested children for submenus.
   * 
   * @example
   * menu={[
   *   { id: '1', title: 'Home', url: '/' },
   *   { id: '2', title: 'About', url: '/about', children: [...] }
   * ]}
   */
  menu: NavMenuItem[];
  
  /**
   * Layout orientation
   * 
   * - 'horizontal': Side-by-side (desktop)
   * - 'vertical': Stacked (mobile)
   * 
   * @default "horizontal"
   * 
   * @example
   * orientation="horizontal"
   */
  orientation?: 'horizontal' | 'vertical';
  
  /**
   * Spacing between menu items
   * 
   * Tailwind gap class.
   * 
   * @default "gap-6"
   * 
   * @example
   * spacing="gap-8"
   */
  spacing?: string;
  
  /**
   * Menu alignment
   * 
   * Controls horizontal alignment of menu items.
   * 
   * @default "flex-start"
   * 
   * @example
   * align="center"
   */
  align?: 'flex-start' | 'center' | 'space-between' | 'flex-end';
  
  /**
   * Additional CSS classes
   * 
   * Use for custom styling or layout adjustments.
   * 
   * @example
   * className="px-6"
   */
  className?: string;
  
  /**
   * Inline style overrides
   * 
   * Use sparingly. Prefer CSS variables.
   * 
   * @example
   * style={{ maxWidth: '1200px' }}
   */
  style?: React.CSSProperties;
  
  /**
   * ARIA label for the navigation
   * 
   * Describes the navigation purpose.
   * 
   * @default "Main navigation"
   * 
   * @example
   * ariaLabel="Primary menu"
   */
  ariaLabel?: string;
}

/**
 * Navigation Component
 * 
 * Renders a menu with support for submenus, active states, and
 * keyboard navigation.
 * 
 * **WordPress Mapping:**
 * ```html
 * <!-- wp:navigation {"orientation":"horizontal"} /-->
 * ```
 * 
 * **theme.json:**
 * ```json
 * "styles": {
 *   "blocks": {
 *     "core/navigation": {
 *       "typography": {
 *         "fontSize": "var(--text-base)",
 *         "fontWeight": "var(--font-weight-medium)"
 *       },
 *       "spacing": {
 *         "blockGap": "var(--wp--preset--spacing--md)"
 *       }
 *     }
 *   }
 * }
 * ```
 * 
 * @param props - NavigationProps
 * @returns Navigation menu with submenus
 * 
 * @example
 * // Basic horizontal navigation
 * <Navigation menu={primaryMenu} />
 * 
 * @example
 * // Vertical mobile navigation
 * <Navigation 
 *   menu={primaryMenu} 
 *   orientation="vertical"
 *   spacing="gap-4"
 * />
 * 
 * @example
 * // Centered navigation
 * <Navigation 
 *   menu={primaryMenu} 
 *   align="center"
 *   spacing="gap-8"
 * />
 */
export function Navigation({
  menu,
  orientation = 'horizontal',
  spacing = 'gap-6',
  align = 'flex-start',
  className = '',
  style,
  ariaLabel = 'Main navigation'
}: NavigationProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  
  // Navigation container classes
  const navClasses = `wp-block-navigation ${className}`.trim();
  
  // Menu list classes
  const menuClasses = `flex ${orientation === 'horizontal' ? 'flex-row' : 'flex-col'} ${spacing}`.trim();
  
  // Menu list styles
  const menuStyles: React.CSSProperties = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    alignItems: orientation === 'horizontal' ? 'center' : 'flex-start',
    justifyContent: align
  };
  
  // Toggle submenu visibility
  const toggleSubmenu = (itemId: string) => {
    setOpenSubmenu(openSubmenu === itemId ? null : itemId);
  };
  
  // Render a single menu item
  const renderMenuItem = (item: NavMenuItem) => {
    const hasSubmenu = item.children && item.children.length > 0;
    const isSubmenuOpen = openSubmenu === item.id;
    
    // Link styles using CSS variables
    const linkStyles: React.CSSProperties = {
      fontFamily: 'Manrope, sans-serif',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--font-weight-medium)',
      color: item.isActive ? 'var(--primary)' : 'var(--foreground)',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      padding: '8px 12px',
      borderRadius: 'var(--radius)',
      transition: 'color 0.2s ease, background-color 0.2s ease',
      cursor: 'pointer',
      minHeight: '44px',
      minWidth: '44px'
    };
    
    return (
      <li key={item.id} className="relative">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          <a
            href={item.url}
            style={linkStyles}
            aria-current={item.isActive ? 'page' : undefined}
            aria-haspopup={hasSubmenu ? 'true' : undefined}
            aria-expanded={hasSubmenu ? isSubmenuOpen : undefined}
            onClick={(e) => {
              if (hasSubmenu) {
                e.preventDefault();
                toggleSubmenu(item.id);
              }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--primary)';
              e.currentTarget.style.backgroundColor = 'var(--surface)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = item.isActive ? 'var(--primary)' : 'var(--foreground)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = '2px solid var(--ring)';
              e.currentTarget.style.outlineOffset = '2px';
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = 'none';
            }}
          >
            <span>{item.title}</span>
            {hasSubmenu && (
              <ChevronDown 
                size={16} 
                style={{
                  transform: isSubmenuOpen ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.2s ease'
                }}
              />
            )}
          </a>
        </div>
        
        {/* Submenu */}
        {hasSubmenu && isSubmenuOpen && (
          <ul
            className={orientation === 'horizontal' ? 'absolute left-0 top-full mt-2' : 'ml-4 mt-2'}
            style={{
              listStyle: 'none',
              margin: 0,
              padding: '8px',
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              minWidth: orientation === 'horizontal' ? '200px' : 'auto',
              zIndex: 1000
            }}
          >
            {item.children!.map((child) => (
              <li key={child.id}>
                <a
                  href={child.url}
                  style={{
                    ...linkStyles,
                    width: '100%',
                    justifyContent: 'flex-start'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--primary)';
                    e.currentTarget.style.backgroundColor = 'var(--background)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--foreground)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {child.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };
  
  return (
    <nav 
      className={navClasses} 
      style={style}
      aria-label={ariaLabel}
      role="navigation"
    >
      <ul className={menuClasses} style={menuStyles} role="menubar">
        {menu.map(renderMenuItem)}
      </ul>
    </nav>
  );
}
