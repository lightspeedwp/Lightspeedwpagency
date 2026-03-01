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
 * @see /src/app/data/site-pages.ts - Navigation data source
 */

import { SiteLogo } from '../blocks/theme/SiteLogo';
import { useLocation as useRouterLocation, Link } from 'react-router';
import { slugToPath } from '../../utils/route-map';
import { blogCategories } from '../../data/taxonomies';
import { Menu, X, ChevronDown, Search, Sun, Moon } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { GlobalSearchOverlay } from '../patterns/GlobalSearchOverlay';
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

  // Default header pattern with enhanced mega menus
  // Updated Feb 27, 2026 for Phase 1 Task 1.3: Work / Solutions / Systems / Insights / About / Contact
  const navItems = [
    { 
      label: 'Work', 
      page: 'portfolio-archive',
      isActive: currentPath === '/work' || currentPath.startsWith('/work/'),
      hasMegaMenu: true,
      menuTitle: 'Our work speaks for itself',
      menuDescription: 'Browse real client projects by industry or service type.',
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
      label: 'Solutions', 
      page: 'solutions',
      isActive: currentPath === '/solutions' || currentPath.startsWith('/solutions/'),
      hasMegaMenu: true,
      menuTitle: 'Built for your industry',
      menuDescription: 'Platform-specific and industry-targeted solutions tailored to your sector.',
      megaMenuSections: [
        {
          title: 'Platforms',
          items: [
            { label: 'WordPress', page: 'wordpress', description: 'Enterprise WordPress solutions' },
            { label: 'WooCommerce', page: 'woocommerce', description: 'E-commerce & online stores' }
          ]
        },
        {
          title: 'Website Projects',
          items: [
            { label: 'WordPress Redesign', page: 'wordpress-redesign', description: 'Transform your existing site' },
            { label: 'WooCommerce Redesign', page: 'woocommerce-redesign', description: 'Rebuild your online store' },
            { label: 'Tour Operator Design', page: 'tour-operator-design', description: 'Custom tour website & itineraries' }
          ]
        },
        {
          title: 'Industries',
          items: [
            { label: 'Tour Operators', page: 'tour-operators', description: 'Travel & booking platforms' },
            { label: 'Publishers', page: 'publishers', description: 'Digital publishing solutions' }
          ]
        },
        {
          title: 'AI Solutions',
          items: [
            { label: 'AI Integrations', page: 'ai-integrations', description: 'AI-powered WordPress' },
            { label: 'AI Content Generation', page: 'ai-content-generation', description: 'Automated content at scale' },
            { label: 'AI-Powered SEO', page: 'ai-seo', description: 'Intelligent search optimisation' },
            { label: 'AI Chatbots', page: 'ai-chatbots', description: 'Conversational agents 24/7' },
            { label: 'AI Analytics', page: 'ai-analytics', description: 'Predictive insights & reporting' }
          ]
        }
      ]
    },
    { 
      label: 'Services', 
      page: 'services',
      isActive: currentPath === '/services' || currentPath.startsWith('/services/'),
      hasMegaMenu: true,
      menuTitle: '6-Phase Website Lifecycle',
      menuDescription: 'From strategy to AI evolution — our proven process takes you through every stage of your website journey.',
      megaMenuSections: [
        {
          title: '01 — Ignite',
          accent: 'var(--category-violet)',
          items: [
            { label: 'Discovery & Strategy', page: 'journey-ignite', description: 'Uncover. Research. Strategise.' },
            { label: 'Content Audit', page: 'content-audit', description: 'Analyse every page' },
            { label: 'Content Strategy', page: 'content-strategy', description: 'Define your voice & plan' }
          ]
        },
        {
          title: '02 — Create',
          accent: 'var(--category-pink)',
          items: [
            { label: 'Web Design', page: 'journey-create', description: 'Design. Prototype. Inspire.' },
            { label: 'Figma Prototyping', page: 'figma-prototyping', description: 'Interactive prototypes' },
            { label: 'Design Systems', page: 'design-systems', description: 'Tokens & governance' },
            { label: 'Content Collection', page: 'content-collection', description: 'Gather & organize assets' }
          ]
        },
        {
          title: '03 — Build',
          accent: 'var(--category-cyan)',
          items: [
            { label: 'WordPress Development', page: 'journey-build', description: 'Develop. Integrate. Harden.' },
            { label: 'WooCommerce Development', page: 'woocommerce-service', description: 'E-commerce platforms' },
            { label: 'Plugin Development', page: 'development-service', description: 'Custom functionality' },
            { label: 'Theme Development', page: 'development-service', description: 'Block themes & FSE' }
          ]
        },
        {
          title: '04 — Launch',
          accent: 'var(--category-amber)',
          items: [
            { label: 'Deployment', page: 'journey-launch', description: 'Deploy. Train. Go live.' },
            { label: 'Managed Hosting', page: 'hosting', description: 'High-performance infrastructure' },
            { label: 'Team Training', page: 'training', description: 'WordPress editor training' }
          ]
        },
        {
          title: '05 — Grow',
          accent: 'var(--category-green)',
          items: [
            { label: 'SEO & Performance', page: 'journey-grow', description: 'Optimise. Rank. Scale.' },
            { label: 'Performance Optimisation', page: 'performance-service', description: 'Core Web Vitals' },
            { label: 'Accessibility', page: 'accessibility-service', description: 'WCAG compliance' },
            { label: 'Support & Maintenance', page: 'support-service', description: 'Ongoing care' }
          ]
        },
        {
          title: '06 — Evolve',
          accent: 'var(--category-indigo)',
          items: [
            { label: 'AI Integration', page: 'journey-evolve', description: 'AI-power. Future-proof.' },
            { label: 'AI Engine Optimisation', page: 'ai-engine-optimisation', description: 'Cut AI costs 60%' },
            { label: 'Answer Engine Optimisation', page: 'answer-engine-optimisation', description: 'Get cited by AI' }
          ]
        }
      ]
    },
    { 
      label: 'Systems', 
      page: 'systems-hub',
      isActive: currentPath === '/systems' || currentPath.startsWith('/systems/'),
      hasMegaMenu: true,
      menuTitle: 'WordPress Systems That Scale',
      menuDescription: 'Five core pillars that power every LSX Design project. From design tokens to AI search readiness.',
      megaMenuSections: [
        {
          title: 'Core Systems',
          items: [
            { label: 'Design Tokens', page: 'design-tokens', description: 'Visual consistency at scale' },
            { label: 'Pattern Governance', page: 'pattern-governance', description: 'Reusable component architecture' },
            { label: 'Editorial Workflows', page: 'editorial-workflows', description: 'Content efficiency & quality' }
          ]
        },
        {
          title: 'Advanced Systems',
          items: [
            { label: 'AI Search Readiness', page: 'ai-search-readiness', description: 'Answer Engine Optimization' },
            { label: 'Performance & Reliability', page: 'performance-reliability', description: 'Core Web Vitals & uptime' }
          ]
        },
        {
          title: 'Get Started',
          items: [
            { label: 'Request a Systems Audit', page: 'contact', description: 'Free consultation & analysis' },
            { label: 'Explore Service Tiers', page: 'services', description: 'Foundation, Growth, Enterprise' }
          ]
        }
      ]
    },
    { 
      label: 'Insights', 
      page: 'blog',
      isActive: currentPath === '/insights' || currentPath.startsWith('/insights/'),
      hasMegaMenu: true,
      menuTitle: 'Insights & resources',
      menuDescription: 'Stay updated with the latest in WordPress, WooCommerce, and web development.',
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
      label: 'About', 
      page: 'about',
      isActive: currentPath === '/about' || currentPath.startsWith('/about/'),
      hasMegaMenu: true,
      menuTitle: 'Get to know us',
      menuDescription: 'Learn about the team, culture, and process behind our work.',
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
      label: 'Contact', 
      page: 'contact',
      isActive: currentPath === '/contact'
    }
  ];

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
                    {/* Main nav link row */}
                    {item.hasMegaMenu ? (
                      <button
                        onClick={() => toggleMobileSubmenu(item.label)}
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
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{item.label}</span>
                      </Link>
                    )}

                    {/* Accordion submenu */}
                    {item.hasMegaMenu && expandedMobileMenu === item.label && (
                      <div className="site-header__mobile-submenu">
                        {/* Menu description for mobile */}
                        {item.menuTitle && (
                          <div className="site-header__mobile-submenu-header">
                            <div className="site-header__mobile-submenu-header-title">{item.menuTitle}</div>
                            {item.menuDescription && (
                              <div className="site-header__mobile-submenu-header-desc">{item.menuDescription}</div>
                            )}
                          </div>
                        )}

                        {/* View all link for parent */}
                        <ul className="site-header__mobile-submenu-list">
                          <li>
                            <Link
                              to={slugToPath(item.page)}
                              className="site-header__mobile-submenu-link site-header__mobile-submenu-link--view-all"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              View all {item.label.toLowerCase()}
                            </Link>
                          </li>
                        </ul>

                        {/* Standard mobile submenu sections */}
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
                                    onClick={() => setMobileMenuOpen(false)}
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
                onClick={() => setMobileMenuOpen(false)}
              >
                Request a Systems Audit
              </Link>
            </div>

            {/* Theme & Search row */}
            <div className="site-header__mobile-actions-row">
              <button onClick={toggleTheme} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                <span>{isDark ? 'Light mode' : 'Dark mode'}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setTimeout(() => setSearchOpen(true), 200);
                }}
                aria-label="Search"
              >
                <Search size={18} />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}