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
 */

import { Container } from '../common/Container';
import { Logo } from '../common/Logo';
import { SiteLogo } from '../blocks/theme/SiteLogo';
import { useNavigation } from '../../contexts/NavigationContext';
import { mainNavigation } from '../../data/pages';
import { Menu, X, ChevronDown, Search, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { TRANSITIONS } from '../../utils/animations';

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
      isActive: currentPage === 'services',
      hasSubmenu: true,
      submenu: [
        { label: 'Discovery', page: 'discovery-service', description: 'Website discovery & exploration' },
        { label: 'Design', page: 'design-service', description: 'Custom design & branding' },
        { label: 'Development', page: 'development-service', description: 'WordPress & WooCommerce development' },
        { label: 'Support', page: 'support-service', description: '24/7 technical support' },
        { label: 'Hosting', page: 'hosting', description: 'Managed WordPress hosting' },
        { label: 'Migrations', page: 'migrations-service', description: 'Seamless platform migrations' },
        { label: 'Security', page: 'security-service', description: 'Security & compliance' },
        { label: 'Content', page: 'content-service', description: 'Content strategy & creation' },
        { label: 'Mailchimp', page: 'mailchimp-service', description: 'Email marketing integration' }
      ]
    },
    { 
      label: 'Solutions',
      page: 'solutions',
      isActive: currentPage === 'solutions',
      hasSubmenu: true,
      submenu: [
        { label: 'WordPress', page: 'wordpress-solution', description: 'Enterprise WordPress solutions' },
        { label: 'WooCommerce', page: 'woocommerce-solution', description: 'Ecommerce & online stores' },
        { label: 'Tour Operators', page: 'tour-operator', description: 'Travel & booking platforms' },
        { label: 'Hosting', page: 'hosting', description: 'Managed WordPress hosting' },
        { label: 'LSX Design', page: 'lsx-design', description: 'Design system & theme' }
      ]
    },
    { 
      label: 'Portfolio', 
      page: 'portfolio-archive',
      isActive: currentPage === 'portfolio-archive' || currentPage.startsWith('portfolio-single')
    },
    { 
      label: 'About', 
      page: 'about',
      isActive: currentPage === 'about' || currentPage.startsWith('about-'),
      hasSubmenu: true,
      submenu: [
        { label: 'About Us', page: 'about', description: 'Our story & mission' },
        { label: 'Our Team', page: 'team', description: 'Meet the experts' },
        { label: 'Our Process', page: 'about-process', description: 'How we work' },
        { label: 'Culture', page: 'about-culture', description: 'Our values & culture' },
        { label: 'History', page: 'about-history', description: 'Our journey' }
      ]
    },
    { 
      label: 'Blog', 
      page: 'blog',
      isActive: currentPage === 'blog' || currentPage.startsWith('post-')
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
      className="sticky top-0 z-50"
      style={{
        backgroundColor: 'var(--background)',
        borderBottom: '1px solid var(--border-soft)',
        backdropFilter: 'blur(12px)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Site Logo */}
          <button
            onClick={() => navigateTo('/')}
            aria-label="LSX Design - Home"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            <SiteLogo width="220px" alt="LSX Design Logo" theme={isDark ? 'dark' : 'light'} />
          </button>

          {/* Desktop Navigation */}
          <nav 
            role="navigation" 
            aria-label="Primary navigation"
            className="hidden md:block"
          >
            <ul className="flex items-center gap-8 m-0 p-0" style={{ listStyle: 'none' }}>
              {navItems.map((item) => (
                <li key={item.page} style={{ position: 'relative' }}>
                  {/* Mega Menu Items (Services, Portfolio) */}
                  {item.hasSubmenu ? (
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
                        className="inline-flex items-center gap-1 px-2"
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          fontWeight: item.isActive ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
                          color: item.isActive ? 'var(--primary)' : 'var(--foreground)',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'color 0.2s ease'
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
                        {item.label}
                        <ChevronDown 
                          size={16} 
                          style={{
                            transition: 'transform 0.2s ease',
                            transform: (
                              (item.label === 'Services' && servicesMenuOpen) ||
                              (item.label === 'Solutions' && solutionsMenuOpen) ||
                              (item.label === 'About' && aboutMenuOpen) ||
                              (item.label === 'Portfolio' && portfolioMenuOpen) ||
                              (item.label === 'Blog' && blogMenuOpen) ||
                              (item.label === 'Hosting' && hostingMenuOpen) ||
                              (item.label === 'Contact' && contactMenuOpen)
                            ) ? 'rotate(180deg)' : 'rotate(0deg)'
                          }}
                        />
                      </button>
                      
                      {/* Mega Menu with Modern Animations */}
                      {((item.label === 'Services' && servicesMenuOpen) ||
                        (item.label === 'Solutions' && solutionsMenuOpen) ||
                        (item.label === 'About' && aboutMenuOpen) ||
                        (item.label === 'Portfolio' && portfolioMenuOpen) ||
                        (item.label === 'Blog' && blogMenuOpen) ||
                        (item.label === 'Hosting' && hostingMenuOpen) ||
                        (item.label === 'Contact' && contactMenuOpen)) && item.submenu && (
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
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: 'var(--card)',
                            backdropFilter: 'blur(20px) saturate(180%)',
                            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                            border: '1px solid var(--border-soft)',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                            minWidth: 'min(600px, calc(100vw - 32px))', // Responsive: fit within viewport with 16px margins
                            maxWidth: 'min(800px, calc(100vw - 32px))', // Responsive: never exceed viewport
                            width: 'max-content',
                            padding: 'clamp(20px, 4vw, 32px)', // Fluid padding
                            paddingTop: 'clamp(32px, 5vw, 44px)', // Add pointer cursor area above menu to prevent flickering
                            marginTop: '0',
                            zIndex: 100,
                            animation: 'megaMenuSlideDown 0.3s ease-out forwards',
                            transformOrigin: 'top center'
                          }}
                        >
                          <style>{`
                            @keyframes megaMenuSlideDown {
                              from {
                                opacity: 0;
                                transform: translateX(-50%) translateY(-10px) scale(0.98);
                              }
                              to {
                                opacity: 1;
                                transform: translateX(-50%) translateY(0) scale(1);
                              }
                            }
                            
                            @keyframes featuredCardStagger {
                              from {
                                opacity: 0;
                                transform: translateY(8px);
                              }
                              to {
                                opacity: 1;
                                transform: translateY(0);
                              }
                            }
                          `}</style>
                          
                          {/* Mega Menu Title */}
                          <div style={{ marginBottom: '20px' }}>
                            <h3 style={{
                              fontFamily: 'Lexend, sans-serif',
                              fontSize: 'var(--text-h4)',
                              fontWeight: 'var(--font-weight-medium)', // Reduced from bold to medium
                              color: 'var(--foreground)',
                              marginBottom: '4px'
                            }}>
                              {item.label}
                            </h3>
                            <p style={{
                              fontFamily: 'Lexend, sans-serif',
                              fontSize: 'var(--text-small)',
                              color: 'var(--muted-foreground)',
                              margin: 0
                            }}>
                              {item.label === 'Services' ? 'WordPress & WooCommerce solutions' : ''}
                            </p>
                          </div>

                          {/* Featured Items with Images */}
                          {item.label === 'Services' && (
                            <div
                              style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns max for usability
                                gap: '12px',
                                marginBottom: '20px'
                              }}
                            >
                              {item.submenu.map((featuredItem, featIndex) => (
                                <button
                                  key={featIndex}
                                  onClick={() => {
                                    navigateTo(featuredItem.page);
                                    setServicesMenuOpen(false);
                                  }}
                                  style={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: 'var(--radius-lg)',
                                    border: '1px solid var(--border-soft)',
                                    background: 'var(--card)',
                                    padding: '16px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    textAlign: 'left'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                                    e.currentTarget.style.borderColor = 'var(--primary)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = 'var(--border-soft)';
                                  }}
                                >
                                  <div style={{
                                    fontFamily: 'Lexend, sans-serif',
                                    fontSize: 'var(--text-base)',
                                    fontWeight: 'var(--font-weight-semibold)',
                                    color: 'var(--foreground)',
                                    marginBottom: '4px'
                                  }}>
                                    {featuredItem.label}
                                  </div>
                                  <div style={{
                                    fontFamily: 'Lexend, sans-serif',
                                    fontSize: 'var(--text-small)',
                                    color: 'var(--muted-foreground)',
                                    fontWeight: 'var(--font-weight-regular)',
                                    lineHeight: '1.4'
                                  }}>
                                    {featuredItem.description}
                                  </div>
                                </button>
                              ))}
                            </div>
                          )}

                          {/* About submenu - simpler list */}
                          {item.label === 'About' && (
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                              {item.submenu.map((subItem, subIndex) => (
                                <li key={subIndex} style={{ marginBottom: '4px' }}>
                                  <button
                                    onClick={() => {
                                      navigateTo(subItem.page);
                                      setAboutMenuOpen(false);
                                    }}
                                    style={{
                                      width: '100%',
                                      textAlign: 'left',
                                      padding: '12px 16px',
                                      fontFamily: 'Lexend, sans-serif',
                                      fontSize: 'var(--text-base)',
                                      fontWeight: 'var(--font-weight-regular)',
                                      color: 'var(--foreground)',
                                      background: 'none',
                                      border: 'none',
                                      borderRadius: 'var(--radius)',
                                      cursor: 'pointer',
                                      transition: 'all 0.2s ease',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      gap: '4px'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.backgroundColor = 'var(--muted)';
                                      e.currentTarget.style.color = 'var(--primary)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.backgroundColor = 'transparent';
                                      e.currentTarget.style.color = 'var(--foreground)';
                                    }}
                                  >
                                    <div style={{
                                      fontWeight: 'var(--font-weight-medium)'
                                    }}>
                                      {subItem.label}
                                    </div>
                                    <div style={{
                                      fontSize: 'var(--text-small)',
                                      color: 'var(--muted-foreground)',
                                      fontWeight: 'var(--font-weight-regular)'
                                    }}>
                                      {subItem.description}
                                    </div>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Solutions submenu - simple list */}
                          {item.label === 'Solutions' && (
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                              {item.submenu.map((subItem, subIndex) => (
                                <li key={subIndex} style={{ marginBottom: '4px' }}>
                                  <button
                                    onClick={() => {
                                      navigateTo(subItem.page);
                                      setSolutionsMenuOpen(false);
                                    }}
                                    style={{
                                      width: '100%',
                                      textAlign: 'left',
                                      padding: '12px 16px',
                                      fontFamily: 'Lexend, sans-serif',
                                      fontSize: 'var(--text-base)',
                                      fontWeight: 'var(--font-weight-regular)',
                                      color: 'var(--foreground)',
                                      background: 'none',
                                      border: 'none',
                                      borderRadius: 'var(--radius)',
                                      cursor: 'pointer',
                                      transition: 'all 0.2s ease',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      gap: '4px'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.backgroundColor = 'var(--muted)';
                                      e.currentTarget.style.color = 'var(--primary)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.backgroundColor = 'transparent';
                                      e.currentTarget.style.color = 'var(--foreground)';
                                    }}
                                  >
                                    <div style={{
                                      fontWeight: 'var(--font-weight-medium)'
                                    }}>
                                      {subItem.label}
                                    </div>
                                    <div style={{
                                      fontSize: 'var(--text-small)',
                                      color: 'var(--muted-foreground)',
                                      fontWeight: 'var(--font-weight-regular)'
                                    }}>
                                      {subItem.description}
                                    </div>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => navigateTo(item.page)}
                      className="inline-block px-2"
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: item.isActive ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
                        color: item.isActive ? 'var(--primary)' : 'var(--foreground)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'color 0.2s ease'
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
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px',
                    color: 'var(--foreground)',
                    borderRadius: 'var(--radius)',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--muted)';
                    e.currentTarget.style.color = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--foreground)';
                  }}
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </li>
              
              {/* Search Icon */}
              <li>
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  aria-label="Search"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px',
                    color: 'var(--foreground)',
                    borderRadius: 'var(--radius)',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--muted)';
                    e.currentTarget.style.color = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--foreground)';
                  }}
                >
                  <Search size={20} />
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu + Icons */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                color: 'var(--foreground)'
              }}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Mobile Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                color: 'var(--foreground)'
              }}
            >
              <Search size={20} />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                color: 'var(--foreground)'
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Expandable Search Bar */}
        {searchOpen && (
          <div
            style={{
              paddingBottom: '16px',
              animation: 'slideDown 0.3s ease-out forwards'
            }}
          >
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                style={{
                  width: '100%',
                  padding: '12px 48px 12px 16px',
                  fontSize: 'var(--text-base)',
                  fontFamily: 'Lexend, sans-serif',
                  color: 'var(--foreground)',
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(30, 106, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              <Search
                size={20}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--muted-foreground)',
                  pointerEvents: 'none'
                }}
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav 
            className="md:hidden pb-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-2 m-0 p-0" style={{ listStyle: 'none' }}>
              {navItems.map((item) => (
                <li key={item.page}>
                  {item.hasSubmenu ? (
                    <>
                      <button
                        onClick={() => {
                          navigateTo(item.page);
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-3"
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          fontWeight: item.isActive ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
                          color: item.isActive ? 'var(--primary)' : 'var(--foreground)',
                          background: 'none',
                          border: 'none',
                          borderRadius: 'var(--radius)',
                          cursor: 'pointer'
                        }}
                      >
                        {item.label}
                      </button>
                      {item.submenu && (
                        <ul className="ml-4 mt-1" style={{ listStyle: 'none', padding: 0 }}>
                          {item.submenu.map((subItem) => (
                            <li key={subItem.page}>
                              <button
                                onClick={() => {
                                  navigateTo(subItem.page);
                                  setMobileMenuOpen(false);
                                }}
                                className="w-full text-left px-4 py-2"
                                style={{
                                  fontFamily: 'Lexend, sans-serif',
                                  fontSize: 'var(--text-base)',
                                  fontWeight: 'var(--font-weight-regular)',
                                  color: 'var(--muted-foreground)',
                                  background: 'none',
                                  border: 'none',
                                  borderRadius: 'var(--radius)',
                                  cursor: 'pointer'
                                }}
                              >
                                {subItem.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        navigateTo(item.page);
                        setMobileMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-3"
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: item.isActive ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
                        color: item.isActive ? 'var(--primary)' : 'var(--foreground)',
                        background: 'none',
                        border: 'none',
                        borderRadius: 'var(--radius)',
                        cursor: 'pointer'
                      }}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => {
                    navigateTo('contact');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-center px-4 py-3"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    fontFamily: 'Lexend, sans-serif',
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
      className="sticky top-0 z-50"
      style={{
        backgroundColor: 'var(--background)',
        borderBottom: '1px solid var(--border-soft)',
      }}
    >
      <Container>
        <div className="flex items-center justify-between py-2">
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
              className="flex items-center gap-2" 
              style={{ listStyle: 'none', padding: 0, margin: 0 }}
            >
              {navItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigateTo(item.page)}
                    className="flex items-center gap-1 px-3 py-2"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
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