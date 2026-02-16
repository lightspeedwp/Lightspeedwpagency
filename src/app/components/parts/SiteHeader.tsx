/**
 * Site Header (Template Part)
 * 
 * WordPress concept: Template part — parts/header.html
 * 
 * Global navigation chrome with modern animated mega menus.
 * Rebuilt to use WordPress Block classes and CSS variables.
 * 
 * **Structure:**
 * - `wp-block-group` (Header Container)
 *   - `wp-block-site-logo` (Logo)
 *   - `wp-block-navigation` (Desktop Nav)
 *   - `wp-block-group` (Actions: Theme/Search/Mobile)
 * 
 * **Styling:**
 * - Uses `wp-block-*` classes for structural layout
 * - Uses CSS variables for all styling
 * - Fully responsive with mobile menu overlay
 * 
 * @see /src/app/data/site-pages.ts - Navigation data source
 */

import { SiteLogo } from '../blocks/theme/SiteLogo';
import { useNavigation } from '../../contexts/NavigationContext';
import { useLocation as useRouterLocation } from 'react-router';
import { blogCategories } from '../../data/blog-posts';
import { Menu, X, ChevronDown, Search, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { GlobalSearchOverlay } from '../patterns/GlobalSearchOverlay';
import '@/styles/blocks/theme/site-header.css';
import '@/styles/responsive.css';

interface SiteHeaderProps {
  variant?: 'default' | 'simple';
}

export function SiteHeader({ variant = 'default' }: SiteHeaderProps) {
  const { navigateTo } = useNavigation();
  const location = useRouterLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // State for mega menus
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  const [searchOpen, setSearchOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Subscription-style Post Formats
  const postFormats = [
    { label: 'Podcasts', page: 'audio-archive', description: 'Exclusive interviews & discussions' },
    { label: 'Video Library', page: 'videos', description: 'Premium tutorials & webinars' },
    { label: 'Photo Galleries', page: 'gallery-archive', description: 'Event photos & visual stories' },
    { label: 'Quick Updates', page: 'aside-archive', description: 'Short status updates & news' },
    { label: 'Downloads', page: 'link-archive', description: 'Resources & templates' }
  ];

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
  }, [currentPath]);

  // Keyboard shortcut: Ctrl+K / Cmd+K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    document.documentElement.classList.toggle('light', !newTheme);
    localStorage.setItem('style-variation', newTheme ? 'dark' : 'light');
  };

  // Default header pattern with enhanced mega menus
  const navItems = [
    { 
      label: 'Services', 
      page: 'services',
      isActive: currentPath === '/services' || currentPath.startsWith('/services/'),
      hasMegaMenu: true,
      megaMenuSections: [
        {
          title: 'Core Services',
          items: [
            { label: 'Discovery', page: 'discovery', description: 'Website discovery & exploration' },
            { label: 'Design', page: 'design', description: 'Custom design & branding' },
            { label: 'Development', page: 'development', description: 'WordPress & WooCommerce development' },
            { label: 'Support', page: 'support', description: '24/7 technical support' }
          ]
        },
        {
          title: 'Infrastructure',
          items: [
            { label: 'Hosting', page: 'hosting', description: 'Managed WordPress hosting' },
            { label: 'Migrations', page: 'migrations', description: 'Seamless platform migrations' },
            { label: 'Security', page: 'security', description: 'WordPress security' }
          ]
        },
        {
          title: 'Content & Marketing',
          items: [
            { label: 'Content Strategy', page: 'content-strategy', description: 'Strategic planning' },
            { label: 'Content Collection', page: 'content-collection', description: 'Content gathering' },
            { label: 'Content Audit', page: 'content-audit', description: 'Content analysis' },
            { label: 'Email Marketing', page: 'email-marketing', description: 'Email campaigns' }
          ]
        },
        {
          title: 'Training',
          items: [
            { label: 'Training', page: 'training', description: 'WordPress training' }
          ]
        }
      ]
    },
    { 
      label: 'Solutions',
      page: 'solutions',
      isActive: currentPath === '/solutions' || currentPath.startsWith('/solutions/'),
      hasMegaMenu: true,
      megaMenuSections: [
        {
          title: 'Platforms',
          items: [
            { label: 'WordPress', page: 'wordpress', description: 'Enterprise WordPress solutions' },
            { label: 'WooCommerce', page: 'woocommerce', description: 'E-commerce & online stores' }
          ]
        },
        {
          title: 'Industries',
          items: [
            { label: 'Tour Operators', page: 'tour-operators', description: 'Travel & booking platforms' },
            { label: 'Publishers', page: 'publishers', description: 'Digital publishing solutions' }
          ]
        }
      ]
    },
    { 
      label: 'Portfolio', 
      page: 'portfolio-archive',
      isActive: currentPath === '/portfolio' || currentPath.startsWith('/portfolio/'),
      hasMegaMenu: true,
      megaMenuSections: [
        {
          title: 'By Industry',
          items: [
            { label: 'Travel & Tourism', page: 'portfolio-archive', description: 'Tour operators & booking' },
            { label: 'E-commerce', page: 'portfolio-archive', description: 'WooCommerce stores' },
            { label: 'Corporate', page: 'portfolio-archive', description: 'Business websites' }
          ]
        },
        {
          title: 'By Service',
          items: [
            { label: 'Redesigns', page: 'portfolio-archive', description: 'Website overhauls' },
            { label: 'Custom Development', page: 'portfolio-archive', description: 'Bespoke solutions' },
            { label: 'Migrations', page: 'portfolio-archive', description: 'Platform migrations' }
          ]
        }
      ]
    },
    { 
      label: 'About', 
      page: 'about',
      isActive: currentPath === '/about' || currentPath.startsWith('/about/'),
      hasMegaMenu: true,
      megaMenuSections: [
        {
          title: 'Company',
          items: [
            { label: 'About Us', page: 'about', description: 'Our story & mission' },
            { label: 'Our Team', page: 'team', description: 'Meet the experts' },
            { label: 'Our Culture', page: 'about-culture', description: 'Values & culture' }
          ]
        },
        {
          title: 'How We Work',
          items: [
            { label: 'Our Process', page: 'about-process', description: 'Step-by-step workflow' },
            { label: 'Case Studies', page: 'portfolio-archive', description: 'Client projects' }
          ]
        }
      ]
    },
    { 
      label: 'Blog', 
      page: 'blog',
      isActive: currentPath === '/blog' || currentPath.startsWith('/blog/'),
      hasMegaMenu: true,
      megaMenuSections: [
        {
          title: 'Categories',
          items: blogCategories.map(category => ({
            label: category.name,
            page: `category-${category.slug}`,
            description: category.description
          }))
        },
        {
          title: 'Premium Content',
          items: postFormats
        },
        {
          title: 'Resources',
          items: [
            { label: 'All Articles', page: 'blog', description: 'Browse all posts' },
            { label: 'Subscribe', page: 'newsletter-service', description: 'Get updates via email' }
          ]
        }
      ]
    },
    { 
      label: 'Contact', 
      page: 'contact',
      isActive: currentPath === '/contact'
    }
  ];

  return (
    <header className="wp-block-template-part site-header">
      <div className="site-header__container">
        
        {/* Logo Block */}
        <div className="wp-block-site-logo">
          <button
            onClick={() => navigateTo('front-page')}
            aria-label="LSX Design - Home"
            className="site-header__logo-button"
          >
            <SiteLogo width="220px" alt="LSX Design Logo" theme={isDark ? 'dark' : 'light'} />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="site-header__nav" aria-label="Main Navigation">
          <ul className="site-header__nav-list">
            {navItems.map((item) => (
              <li 
                key={item.page} 
                className={`site-header__nav-item ${item.hasMegaMenu ? 'has-child' : ''}`}
                onMouseEnter={() => item.hasMegaMenu && setActiveMenu(item.label)}
                onMouseLeave={() => item.hasMegaMenu && setActiveMenu(null)}
              >
                <button
                  onClick={() => navigateTo(item.page)}
                  className={`site-header__nav-link ${item.isActive ? 'site-header__nav-link--active' : ''} ${activeMenu === item.label ? 'site-header__nav-link--open' : ''}`}
                  aria-expanded={activeMenu === item.label}
                >
                  {item.label}
                  {item.hasMegaMenu && (
                    <ChevronDown 
                      size={14} 
                      className="site-header__nav-link-icon"
                    />
                  )}
                </button>

                {/* Mega Menu Dropdown */}
                {item.hasMegaMenu && activeMenu === item.label && item.megaMenuSections && (
                  <div className="site-header__mega-menu">
                    <div className="site-header__mega-menu-grid" style={{ gridTemplateColumns: `repeat(${item.megaMenuSections.length}, 1fr)` }}>
                      {item.megaMenuSections.map((section, idx) => (
                        <div key={idx} className="site-header__mega-menu-column">
                          {section.title && (
                            <h3 className="site-header__mega-menu-section-title">
                              {section.title}
                            </h3>
                          )}
                          <ul className="site-header__mega-menu-list">
                            {section.items.map((subItem, subIdx) => (
                              <li key={subIdx}>
                                <button
                                  onClick={() => {
                                    navigateTo(subItem.page);
                                    setActiveMenu(null);
                                  }}
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
                                </button>
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
            aria-label="Toggle theme"
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

          {/* Mobile Menu Toggle */}
          <button
            className="site-header__mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
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

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="site-header__mobile-menu">
          <div className="site-header__mobile-menu-header">
            <div className="wp-block-site-logo">
              <SiteLogo width="180px" alt="LSX Design Logo" theme={isDark ? 'dark' : 'light'} />
            </div>
            <button 
              className="site-header__mobile-menu-close"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="site-header__mobile-nav">
            <ul className="site-header__mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.page} className="site-header__mobile-nav-item">
                  <button
                    onClick={() => {
                      navigateTo(item.page);
                      setMobileMenuOpen(false);
                    }}
                    className={`site-header__mobile-nav-link ${item.isActive ? 'site-header__mobile-nav-link--active' : ''}`}
                  >
                    {item.label}
                  </button>
                  {item.hasMegaMenu && item.megaMenuSections && (
                    <div className="site-header__mobile-submenu">
                      {item.megaMenuSections.map((section, sIdx) => (
                        <div key={sIdx}>
                          {section.title && (
                            <div className="site-header__mega-menu-section-title wp-mt-4">
                              {section.title}
                            </div>
                          )}
                          <ul className="site-header__mega-menu-list">
                            {section.items.map((sub, subIdx) => (
                              <li key={subIdx}>
                                <button
                                  onClick={() => {
                                    navigateTo(sub.page);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="site-header__mobile-submenu-link"
                                >
                                  {sub.label}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              <li className="wp-mt-6">
                <button
                  onClick={() => {
                    navigateTo('contact');
                    setMobileMenuOpen(false);
                  }}
                  className="wp-block-button__link is-style-primary wp-w-full wp-justify-center"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}