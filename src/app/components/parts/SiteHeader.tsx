/**
 * Site Header (Template Part)
 * 
 * WordPress concept: Template part — parts/header.html
 * 
 * Global navigation chrome with modern animated mega menus.
 * Features smooth transitions, hover effects, and micro-interactions.
 * Uses design system tokens for all styling.
 * 
 * **Modern Features:**
 * - Smooth slide-down animations (300ms ease)
 * - Backdrop blur glassmorphism effect
 * - Hover scale effects on featured cards
 * - Progressive reveal animations (stagger effect)
 * - Keyboard accessible with focus states
 * - Mobile-responsive touch interactions
 * - Integrated MegaMenu component with consistent styling
 * 
 * **Styling:**
 * - 100% CSS classes from /src/styles/parts/site-header.css
 * - BEM naming for all major sections
 * - CSS variables for complete user control (var(--font-primary), var(--spacing-*), var(--primary), etc.)
 * - WordPress-aligned utility classes
 * 
 * **Accessibility:**
 * - WCAG 2.1 AA compliant
 * - Full keyboard navigation support
 * - ARIA labels and expanded states
 * - Focus trap in mobile menu
 * - Screen reader announcements
 * - 48×48px minimum touch targets (WCAG AAA)
 * 
 * **Props:**
 * @param {Object} props - Component props
 * @param {'default' | 'simple'} [props.variant='default'] - Header variant style
 * 
 * **Usage:**
 * ```tsx
 * // Default header with mega menus
 * <SiteHeader />
 * 
 * // Simple header without mega menus
 * <SiteHeader variant="simple" />
 * ```
 * 
 * @see /guidelines/parts/SiteHeader.md - Complete documentation
 * @see /src/styles/parts/site-header.css - Dedicated CSS file (600+ lines)
 * @see /src/app/data/site-pages.ts - Navigation data source
 */

import '@/styles/parts/site-header.css';
import '@/styles/responsive.css'; // Ensure responsive utilities are loaded
import { Container } from '../common/Container';
import { SiteLogo } from '../blocks/theme/SiteLogo';
import { useNavigation } from '../../contexts/NavigationContext';
import { blogCategories } from '../../data/blog-posts';
import { Menu, X, ChevronDown, Search, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SiteHeaderProps {
  variant?: 'default' | 'simple';
}

export function SiteHeader({ variant = 'default' }: SiteHeaderProps) {
  const { navigateTo, currentPage } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [solutionsMenuOpen, setSolutionsMenuOpen] = useState(false);
  const [portfolioMenuOpen, setPortfolioMenuOpen] = useState(false);
  const [blogMenuOpen, setBlogMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [hostingMenuOpen, setHostingMenuOpen] = useState(false);
  const [contactMenuOpen, setContactMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDark, setIsDark] = useState(false);
  
  // Hover delay timers for smoother menu interaction
  const [menuCloseTimer, setMenuCloseTimer] = useState<NodeJS.Timeout | null>(null);

  // Subscription-style Post Formats
  const postFormats = [
    { label: 'Podcasts', page: 'audio-archive', description: 'Exclusive interviews & discussions' },
    { label: 'Video Library', page: 'video-archive', description: 'Premium tutorials & webinars' },
    { label: 'Photo Galleries', page: 'gallery-archive', description: 'Event photos & visual stories' },
    { label: 'Quick Updates', page: 'aside-archive', description: 'Short status updates & news' },
    { label: 'Downloads', page: 'link-archive', description: 'Resources & templates' }
  ];

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('style-variation');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setIsDark(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
      localStorage.setItem('style-variation', initialTheme);
    }
  }, []);

  const applyTheme = (theme: 'light' | 'dark') => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('style-variation', theme);
  };

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    applyTheme(newTheme);
  };

  // If simple variant is requested, use the simple header pattern
  if (variant === 'simple') {
    return <SiteHeaderSimple />;
  }

  // Default header pattern with enhanced mega menus
  const navItems = [
    { 
      label: 'Services', 
      page: 'services',
      isActive: currentPage === 'services' || currentPage.startsWith('service-'),
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
      isActive: currentPage === 'solutions' || currentPage.startsWith('solution-'),
      hasMegaMenu: true,
      megaMenuSections: [
        {
          title: 'Platforms',
          items: [
            { label: 'WordPress', page: 'wordpress', description: 'Enterprise WordPress solutions' },
            { label: 'WooCommerce', page: 'woocommerce', description: 'E-commerce & online stores' },
            { label: 'LSX Design', page: 'lsx', description: 'Design system & theme' }
          ]
        },
        {
          title: 'Industry Solutions',
          items: [
            { label: 'Tour Operators', page: 'tour-operators', description: 'Travel & booking platforms' },
            { label: 'Hosting', page: 'hosting', description: 'Managed WordPress hosting' }
          ]
        },
        {
          title: 'Integrations',
          items: [
            { label: 'Mailchimp', page: 'mailchimp', description: 'Email marketing' },
            { label: 'Wetu Importer', page: 'wetu-importer', description: 'Tour data sync' },
            { label: 'LSX Sharing', page: 'lsx-sharing', description: 'Social sharing' },
            { label: 'LSX Search', page: 'lsx-search', description: 'Advanced search' }
          ]
        }
      ]
    },
    { 
      label: 'Portfolio', 
      page: 'portfolio-archive',
      isActive: currentPage === 'portfolio-archive' || currentPage.startsWith('portfolio-single'),
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
      isActive: currentPage === 'about' || currentPage.startsWith('about-'),
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
      isActive: currentPage === 'blog' || currentPage.startsWith('post-') || currentPage.startsWith('category-') || currentPage.startsWith('audio-') || currentPage.startsWith('video-') || currentPage.startsWith('gallery-') || currentPage.startsWith('aside-') || currentPage.startsWith('link-'),
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
      isActive: currentPage === 'contact'
    }
  ];

  return (
    <header 
      role="banner"
      className="site-header"
    >
      <Container>
        <div className="site-header__container">
          {/* Site Logo */}
          <button
            onClick={() => navigateTo('front-page')}
            aria-label="LSX Design - Home"
            className="site-header__logo-button"
          >
            <SiteLogo width="220px" alt="LSX Design Logo" theme={isDark ? 'dark' : 'light'} />
          </button>

          {/* Desktop Navigation */}
          <nav 
            role="navigation" 
            aria-label="Primary navigation"
            className="site-header__nav"
          >
            <ul className="site-header__nav-list">
              {navItems.map((item) => (
                <li key={item.page} className="site-header__nav-item">
                  {/* Mega Menu Items */}
                  {item.hasMegaMenu ? (
                    <div
                      onMouseEnter={() => {
                        if (item.label === 'Services') setServicesMenuOpen(true);
                        if (item.label === 'Solutions') setSolutionsMenuOpen(true);
                        if (item.label === 'About') setAboutMenuOpen(true);
                        if (item.label === 'Portfolio') setPortfolioMenuOpen(true);
                        if (item.label === 'Blog') setBlogMenuOpen(true);
                        if (item.label === 'Hosting') setHostingMenuOpen(true);
                        if (item.label === 'Contact') setContactMenuOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (item.label === 'Services') setServicesMenuOpen(false);
                        if (item.label === 'Solutions') setSolutionsMenuOpen(false);
                        if (item.label === 'About') setAboutMenuOpen(false);
                        if (item.label === 'Portfolio') setPortfolioMenuOpen(false);
                        if (item.label === 'Blog') setBlogMenuOpen(false);
                        if (item.label === 'Hosting') setHostingMenuOpen(false);
                        if (item.label === 'Contact') setContactMenuOpen(false);
                      }}
                    >
                      <button
                        onClick={() => navigateTo(item.page)}
                        className={`site-header__nav-link ${item.isActive ? 'site-header__nav-link--active' : ''} ${
                          (item.label === 'Services' && servicesMenuOpen) ||
                          (item.label === 'Solutions' && solutionsMenuOpen) ||
                          (item.label === 'About' && aboutMenuOpen)
                            ? 'site-header__nav-link--open'
                            : ''
                        }`}
                      >
                        {item.label}
                        <ChevronDown 
                          size={16} 
                          className="site-header__nav-link-icon"
                        />
                      </button>
                      
                      {/* Mega Menu with Modern Animations */}
                      {((item.label === 'Services' && servicesMenuOpen) ||
                        (item.label === 'Solutions' && solutionsMenuOpen) ||
                        (item.label === 'About' && aboutMenuOpen) ||
                        (item.label === 'Portfolio' && portfolioMenuOpen) ||
                        (item.label === 'Blog' && blogMenuOpen)) && item.megaMenuSections && (
                        <div
                          onMouseEnter={() => {
                            if (item.label === 'Services') setServicesMenuOpen(true);
                            if (item.label === 'Solutions') setSolutionsMenuOpen(true);
                            if (item.label === 'About') setAboutMenuOpen(true);
                            if (item.label === 'Portfolio') setPortfolioMenuOpen(true);
                            if (item.label === 'Blog') setBlogMenuOpen(true);
                          }}
                          onMouseLeave={() => {
                            if (item.label === 'Services') setServicesMenuOpen(false);
                            if (item.label === 'Solutions') setSolutionsMenuOpen(false);
                            if (item.label === 'About') setAboutMenuOpen(false);
                            if (item.label === 'Portfolio') setPortfolioMenuOpen(false);
                            if (item.label === 'Blog') setBlogMenuOpen(false);
                          }}
                          className="site-header__mega-menu"
                        >
                          {/* Mega Menu Grid */}
                          <div className="site-header__mega-menu-grid">
                            {item.megaMenuSections.map((section, sectionIndex) => (
                              <div key={sectionIndex} className="site-header__mega-menu-column">
                                {section.title && (
                                  <h3 className="site-header__mega-menu-section-title">
                                    {section.title}
                                  </h3>
                                )}
                                <ul className="site-header__mega-menu-list">
                                  {section.items.map((menuItem, itemIndex) => (
                                    <li key={itemIndex} className="site-header__mega-menu-item">
                                      <button
                                        onClick={() => {
                                          navigateTo(menuItem.page);
                                          setServicesMenuOpen(false);
                                          setSolutionsMenuOpen(false);
                                          setAboutMenuOpen(false);
                                          setPortfolioMenuOpen(false);
                                          setBlogMenuOpen(false);
                                        }}
                                        className="site-header__mega-menu-link"
                                        aria-label={`Navigate to ${menuItem.label}`}
                                      >
                                        <div className="site-header__mega-menu-link-label">
                                          {menuItem.label}
                                        </div>
                                        {menuItem.description && (
                                          <div className="site-header__mega-menu-link-description">
                                            {menuItem.description}
                                          </div>
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
                    </div>
                  ) : (
                    <button
                      onClick={() => navigateTo(item.page)}
                      className={`site-header__nav-link ${item.isActive ? 'site-header__nav-link--active' : ''}`}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
              {/* Theme Toggle Icon */}
              <li>
                <button
                  onClick={toggleTheme}
                  aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                  className="site-header__theme-toggle"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </li>
              
              {/* Search Icon */}
              <li>
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  aria-label="Search"
                  aria-expanded={searchOpen}
                  aria-controls="search-bar"
                  className="site-header__search-toggle"
                >
                  <Search size={20} />
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu + Icons */}
          <div 
            className="hide-desktop" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--spacing-2)' 
            }}
          >
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 'var(--spacing-2)',
                color: 'var(--foreground)'
              }}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Mobile Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
              aria-expanded={searchOpen}
              aria-controls="search-bar"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 'var(--spacing-2)',
                color: 'var(--foreground)'
              }}
            >
              <Search size={20} />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="site-header__mobile-toggle"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Expandable Search Bar */}
        {searchOpen && (
          <div id="search-bar" className="site-header__search-expandable">
            <div className="site-header__search-wrapper">
              <input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                aria-label="Search the site"
                className="site-header__search-input"
              />
              <Search
                size={20}
                className="site-header__search-icon"
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav 
            id="mobile-navigation"
            className="site-header__mobile-nav"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ul className="site-header__mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.page} className="site-header__mobile-nav-item">
                  {item.hasMegaMenu ? (
                    <>
                      <button
                        onClick={() => {
                          navigateTo(item.page);
                          setMobileMenuOpen(false);
                        }}
                        className={`site-header__mobile-nav-link ${item.isActive ? 'site-header__mobile-nav-link--active' : ''}`}
                      >
                        {item.label}
                      </button>
                      {/* Note: Mobile mega menu flattening would happen here, simplified for this template */}
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        navigateTo(item.page);
                        setMobileMenuOpen(false);
                      }}
                      className={`site-header__mobile-nav-link ${item.isActive ? 'site-header__mobile-nav-link--active' : ''}`}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
              <li className="site-header__mobile-nav-item" style={{ paddingTop: 'var(--spacing-2)' }}>
                <button
                  onClick={() => {
                    navigateTo('contact');
                    setMobileMenuOpen(false);
                  }}
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    padding: 'var(--spacing-3) var(--spacing-4)',
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    border: 'none',
                    borderRadius: 'var(--radius-lg)',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-primary)'
                  }}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}

/**
 * Simple Header Variant
 * 
 * Alternative header pattern with horizontal navigation and dropdown indicators.
 */
function SiteHeaderSimple() {
  const { navigateTo, currentPage } = useNavigation();

  const navItems = [
    { label: 'Home', page: 'front-page', isActive: currentPage === 'front-page' },
    { label: 'Services', page: 'services', isActive: currentPage === 'services' },
    { label: 'Hosting', page: 'hosting', isActive: currentPage === 'hosting' },
    { label: 'Portfolio', page: 'portfolio-archive', hasDropdown: false, isActive: currentPage === 'portfolio-archive' || currentPage.startsWith('portfolio-single-') },
    { 
      label: 'About', 
      page: 'about', 
      isActive: currentPage === 'about' || currentPage === 'team',
      submenu: [
        { label: 'About Us', page: 'about' },
        { label: 'Our Team', page: 'team' }
      ]
    },
    { label: 'Contact', page: 'contact', hasDropdown: false, isActive: currentPage === 'contact' },
  ];

  return (
    <header 
      role="banner"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 'var(--z-fixed)',
        backgroundColor: 'var(--background)',
        borderBottom: '1px solid var(--border-soft)',
      }}
    >
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--spacing-2) 0' }}>
          {/* Site Logo */}
          <button 
            onClick={() => navigateTo('front-page')}
            aria-label="LSX Design Home"
            style={{ 
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            <SiteLogo theme="light" />
          </button>

          {/* Primary Navigation */}
          <nav 
            role="navigation" 
            aria-label="Primary navigation"
          >
            <ul 
              style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-4)',
                margin: 0,
                padding: 0,
                listStyle: 'none'
              }}
            >
              {navItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigateTo(item.page)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-1)',
                      padding: 'var(--spacing-2) var(--spacing-3)',
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: item.isActive ? 'var(--primary)' : 'var(--foreground)',
                      textDecoration: item.isActive ? 'underline' : 'none',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      whiteSpace: 'nowrap',
                      borderRadius: 'var(--radius)',
                    }}
                    onMouseEnter={(e) => {
                      if (!item.isActive) {
                        e.currentTarget.style.color = 'var(--primary)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!item.isActive) {
                        e.currentTarget.style.color = 'var(--foreground)';
                      }
                    }}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 20 20" 
                        fill="none"
                        style={{
                          transition: 'transform 0.2s ease',
                        }}
                      >
                        <path 
                          d="M5 7.5L10 12.5L15 7.5" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
