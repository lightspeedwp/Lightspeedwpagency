/**
 * Site Header (Template Part)
 * 
 * WordPress concept: Template part — parts/header.html
 * 
 * Global navigation chrome with modern animated mega menus.
 * Rebuilt to use WordPress Block classes and CSS variables.
 * 
 * **Funky Neon Mobile Menu:**
 * - Opens below the header as a full-viewport overlay
 * - Burger icon morphs to X when open
 * - Accordion sub-menus with neon glow accents
 * - Staggered entrance animations
 * - Body scroll lock when open
 * 
 * **Structure:**
 * - `wp-block-group` (Header Container)
 * - `wp-block-site-logo` (Logo)
 * - `wp-block-navigation` (Desktop Nav)
 * - `wp-block-group` (Actions: Theme/Search/Mobile)
 * 
 * **Styling:**
 * - Uses `wp-block-*` classes for structural layout
 * - Uses CSS variables for all styling
 * - Fully responsive with mobile menu overlay
 * 
 * **Icons:** Migrated to Phosphor Icons (Phase 6 Task 6.1 - March 3, 2026)
 * 
 * @see /src/app/data/site-pages.ts - Navigation data source
 */

import { SiteLogo } from '../blocks/theme/SiteLogo';
import { useLocation as useRouterLocation, Link } from 'react-router';
import { slugToPath } from '../../utils/route-map';
import { buildNavItems } from '../../data/header-navigation';
import { 
  List as Menu, 
  X, 
  CaretDown as ChevronDown, 
  MagnifyingGlass as Search, 
  Sun, 
  Moon 
} from '@phosphor-icons/react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { GlobalSearchOverlay } from '../patterns/GlobalSearchOverlay';
import { MobileMenu } from './site-header/MobileMenu';
/* site-header.css and responsive.css are loaded globally via index.css */

interface SiteHeaderProps {
  variant?: 'default' | 'simple';
}

export function SiteHeader({ variant = 'default' }: SiteHeaderProps) {
  const location = useRouterLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  
  // State for mega menus
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMenuEnter = (label: string) => {
    if (menuTimerRef.current) {
      clearTimeout(menuTimerRef.current);
      menuTimerRef.current = null;
    }
    setActiveMenu(label);
  };

  const handleMenuLeave = () => {
    menuTimerRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };
  
  const [searchOpen, setSearchOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Build navigation items from extracted data
  const navItems = buildNavItems(currentPath);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('style-variation');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      document.documentElement.classList.toggle('light', savedTheme !== 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
      document.documentElement.classList.toggle('light', !prefersDark);
      localStorage.setItem('style-variation', prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
    setSearchOpen(false);
    setExpandedMobileMenu(null);
  }, [currentPath]);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [mobileMenuOpen]);

  // Set CSS variable for header height so mobile menu positions below
  // Update on mount, resize, and menu toggle
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--mobile-header-height', `${height}px`);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, [mobileMenuOpen]);

  // Keyboard shortcut: Ctrl+K / Cmd+K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        if (searchOpen) setSearchOpen(false);
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
          setExpandedMobileMenu(null);
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen, mobileMenuOpen]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    document.documentElement.classList.toggle('light', !newTheme);
    localStorage.setItem('style-variation', newTheme ? 'dark' : 'light');
  };

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => {
      if (prev) {
        setExpandedMobileMenu(null);
      }
      return !prev;
    });
  }, []);

  const toggleMobileSubmenu = useCallback((label: string) => {
    setExpandedMobileMenu(prev => prev === label ? null : label);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`wp-block-template-part site-header ${mobileMenuOpen ? 'site-header--menu-open' : ''}`}
    >
      <div className="site-header__container">
        
        {/* Logo Block */}
        <div className="wp-block-site-logo">
          <Link
            to={slugToPath('front-page')}
            aria-label="LSX Design - Home"
            className="site-header__logo-button"
          >
            <SiteLogo width="220px" alt="LSX Design Logo" theme={isDark ? 'dark' : 'light'} linkHref="" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="site-header__nav" aria-label="Main Navigation">
          <ul className="site-header__nav-list">
            {navItems.map((item) => (
              <li 
                key={item.page} 
                className={`site-header__nav-item ${item.hasMegaMenu ? 'has-child' : ''}`}
                onMouseEnter={() => item.hasMegaMenu && handleMenuEnter(item.label)}
                onMouseLeave={() => item.hasMegaMenu && handleMenuLeave()}
              >
                <Link
                  to={slugToPath(item.page)}
                  className={`site-header__nav-link ${item.isActive ? 'site-header__nav-link--active' : ''} ${activeMenu === item.label ? 'site-header__nav-link--open' : ''}`}
                  aria-expanded={activeMenu === item.label}
                  aria-haspopup={item.hasMegaMenu ? 'true' : undefined}
                >
                  {item.label}
                  {item.hasMegaMenu && (
                    <ChevronDown 
                      size={14} 
                      className="site-header__nav-link-icon"
                    />
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.hasMegaMenu && (
                  <div 
                    className="site-header__mega-menu"
                    style={{
                      display: activeMenu === item.label ? 'block' : 'none',
                    }}
                  >
                    {/* Mega Menu Header */}
                    {item.menuTitle && (
                      <div className="site-header__mega-menu-header">
                        <h2 className="site-header__mega-menu-title">{item.menuTitle}</h2>
                        {item.menuDescription && (
                          <p className="site-header__mega-menu-desc">{item.menuDescription}</p>
                        )}
                      </div>
                    )}

                    {/* Standard column rendering */}
                    <div className="site-header__mega-menu-grid">
                      {item.megaMenuSections && item.megaMenuSections.map((section, idx) => (
                        <div key={idx} className="site-header__mega-menu-column">
                          {section.title && (
                            <h3 
                              className="site-header__mega-menu-section-title"
                              style={section.accent ? { color: section.accent } : undefined}
                            >
                              {section.title}
                            </h3>
                          )}
                          <ul className="site-header__mega-menu-list">
                            {section.items.map((subItem, subIdx) => (
                              <li key={subIdx}>
                                <Link
                                  to={slugToPath(subItem.page)}
                                  onClick={() => setActiveMenu(null)}
                                  className="site-header__mega-menu-link"
                                >
                                  <span className="site-header__mega-menu-link-label">
                                    {subItem.label}
                                  </span>
                                  {subItem.description && (
                                    <span className="site-header__mega-menu-link-description">
                                      {subItem.description}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="site-header__actions">
          <button 
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="site-header__theme-toggle"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
            className="site-header__search-toggle"
          >
            <Search size={20} />
          </button>

          {/* Mobile Menu Toggle — Burger / X */}
          <button
            className={`site-header__mobile-toggle ${mobileMenuOpen ? 'site-header__mobile-toggle--open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Global Search Overlay */}
      <GlobalSearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      {/* ============================================
          FUNKY NEON MOBILE MENU
          Opens below header, full viewport height
          ============================================ */}
      {mobileMenuOpen && (
        <MobileMenu
          navItems={navItems}
          expandedMobileMenu={expandedMobileMenu}
          isDark={isDark}
          onToggleSubmenu={toggleMobileSubmenu}
          onClose={() => setMobileMenuOpen(false)}
          onToggleTheme={toggleTheme}
          onOpenSearch={() => {
            setMobileMenuOpen(false);
            setTimeout(() => setSearchOpen(true), 200);
          }}
        />
      )}
    </header>
  );
}