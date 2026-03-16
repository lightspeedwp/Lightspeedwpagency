/**
 * Site Header — Mobile Menu
 *
 * Funky Neon mobile menu overlay with accordion sub-menus,
 * staggered animations, and neon glow accents.
 *
 * @see /src/app/components/parts/SiteHeader.tsx
 */

import { Link } from 'react-router';
import { slugToPath } from '../../../utils/route-map';
import {
  CaretDown as ChevronDown,
  MagnifyingGlass as Search,
  Sun,
  Moon,
} from '@phosphor-icons/react';

interface MobileMenuSection {
  title?: string;
  accent?: string;
  items: Array<{
    page: string;
    label: string;
    description?: string;
  }>;
}

interface MobileNavItem {
  page: string;
  label: string;
  isActive: boolean;
  hasMegaMenu: boolean;
  menuTitle?: string;
  menuDescription?: string;
  megaMenuSections?: MobileMenuSection[];
}

interface MobileMenuProps {
  navItems: MobileNavItem[];
  expandedMobileMenu: string | null;
  isDark: boolean;
  onToggleSubmenu: (label: string) => void;
  onClose: () => void;
  onToggleTheme: () => void;
  onOpenSearch: () => void;
}

export function MobileMenu({
  navItems,
  expandedMobileMenu,
  isDark,
  onToggleSubmenu,
  onClose,
  onToggleTheme,
  onOpenSearch,
}: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      className="site-header__mobile-menu"
      role="navigation"
      aria-label="Mobile navigation"
    >
      <div className="site-header__mobile-menu-inner">
        <nav className="site-header__mobile-nav">
          <ul className="site-header__mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.page} className="site-header__mobile-nav-item">
                {item.hasMegaMenu ? (
                  <button
                    onClick={() => onToggleSubmenu(item.label)}
                    className={`site-header__mobile-nav-link ${item.isActive ? 'site-header__mobile-nav-link--active' : ''}`}
                    aria-expanded={expandedMobileMenu === item.label}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={18}
                      className={`site-header__mobile-nav-chevron ${expandedMobileMenu === item.label ? 'site-header__mobile-nav-chevron--open' : ''}`}
                    />
                  </button>
                ) : (
                  <Link
                    to={slugToPath(item.page)}
                    className={`site-header__mobile-nav-link ${item.isActive ? 'site-header__mobile-nav-link--active' : ''}`}
                    onClick={onClose}
                  >
                    <span>{item.label}</span>
                  </Link>
                )}

                {/* Accordion submenu */}
                {item.hasMegaMenu && expandedMobileMenu === item.label && (
                  <div className="site-header__mobile-submenu">
                    {item.menuTitle && (
                      <div className="site-header__mobile-submenu-header">
                        <div className="site-header__mobile-submenu-header-title">{item.menuTitle}</div>
                        {item.menuDescription && (
                          <div className="site-header__mobile-submenu-header-desc">{item.menuDescription}</div>
                        )}
                      </div>
                    )}

                    <ul className="site-header__mobile-submenu-list">
                      <li>
                        <Link
                          to={slugToPath(item.page)}
                          className="site-header__mobile-submenu-link site-header__mobile-submenu-link--view-all"
                          onClick={onClose}
                        >
                          View all {item.label.toLowerCase()}
                        </Link>
                      </li>
                    </ul>

                    {item.megaMenuSections && item.megaMenuSections.map((section, sIdx) => (
                      <div key={sIdx}>
                        {section.title && (
                          <div
                            className="site-header__mobile-submenu-section-title"
                            style={section.accent ? { color: section.accent } : undefined}
                          >
                            {section.title}
                          </div>
                        )}
                        <ul className="site-header__mobile-submenu-list">
                          {section.items.map((sub, subIdx) => (
                            <li key={subIdx}>
                              <Link
                                to={slugToPath(sub.page)}
                                className="site-header__mobile-submenu-link"
                                onClick={onClose}
                              >
                                <span>{sub.label}</span>
                                {sub.description && (
                                  <span className="site-header__mobile-submenu-link-desc">
                                    {sub.description}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="site-header__mobile-cta-wrapper">
          <Link
            to={slugToPath('contact')}
            className="site-header__mobile-cta"
            onClick={onClose}
          >
            Request a Systems Audit
          </Link>
        </div>

        {/* Theme & Search row */}
        <div className="site-header__mobile-actions-row">
          <button onClick={onToggleTheme} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
            <span>{isDark ? 'Light mode' : 'Dark mode'}</span>
          </button>
          <button onClick={onOpenSearch} aria-label="Search">
            <Search size={18} />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}
