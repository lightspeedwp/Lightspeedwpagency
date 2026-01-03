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
      hasMegaMenu: true,
      megaMenu: {
        title: 'Our Services',
        description: 'WordPress & WooCommerce solutions',
        featured: [
          {
            title: 'WordPress Development',
            description: 'Custom block themes & FSE solutions',
            image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?w=800',
            page: 'services'
          },
          {
            title: 'WooCommerce Solutions',
            description: 'E-commerce platforms that convert',
            image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?w=800',
            page: 'services'
          }
        ],
        columns: [
          {
            title: 'Development',
            items: [
              { label: 'WordPress Block Themes', page: 'services', description: 'Custom FSE themes' },
              { label: 'WooCommerce Solutions', page: 'services', description: 'E-commerce platforms' },
              { label: 'Design Systems', page: 'services', description: 'Token-driven systems' },
              { label: 'Theme Customization', page: 'services', description: 'Tailored solutions' },
            ]
          },
          {
            title: 'Support & Hosting',
            items: [
              { label: 'Managed Hosting', page: 'hosting', description: 'WordPress hosting' },
              { label: 'Maintenance & Support', page: 'services', description: 'Ongoing care' },
              { label: 'Consulting Services', page: 'contact', description: 'Expert guidance' },
              { label: 'Training & Workshops', page: 'contact', description: 'Team enablement' },
            ]
          },
          {
            title: 'Specializations',
            items: [
              { label: 'Accessibility (WCAG)', page: 'services', description: 'Inclusive design' },
              { label: 'Performance Optimization', page: 'services', description: 'Speed & SEO' },
              { label: 'Site Migrations', page: 'services', description: 'Platform transitions' },
              { label: 'Security Hardening', page: 'services', description: 'Protection & monitoring' },
            ]
          }
        ]
      }
    },
    { 
      label: 'Portfolio', 
      page: 'portfolio-archive',
      isActive: currentPage === 'portfolio-archive' || currentPage === 'portfolio-single',
      hasMegaMenu: true,
      megaMenu: {
        title: 'Featured Work',
        description: 'Real-world WordPress & WooCommerce projects',
        featured: [
          {
            title: 'EcoMarket Platform',
            description: 'Sustainable e-commerce marketplace',
            image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800',
            page: 'portfolio-single-eco-market-woocommerce' // Fixed: Use actual project slug
          },
          {
            title: 'HealthFirst Portal',
            description: 'HIPAA-compliant healthcare system',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
            page: 'portfolio-single-healthfirst-wellness-portal' // Fixed: Use actual project slug
          }
        ],
        columns: [
          {
            title: 'By Industry',
            items: [
              { label: 'E-commerce & Retail', page: 'portfolio-archive', description: 'WooCommerce solutions' },
              { label: 'Healthcare & Medical', page: 'portfolio-archive', description: 'HIPAA-compliant sites' },
              { label: 'Travel & Tourism', page: 'portfolio-archive', description: 'Booking platforms' },
              { label: 'Technology & SaaS', page: 'portfolio-archive', description: 'Startups & scale-ups' },
            ]
          },
          {
            title: 'By Type',
            items: [
              { label: 'New Build', page: 'portfolio-archive', description: 'Ground-up development' },
              { label: 'Redesign', page: 'portfolio-archive', description: 'Site refreshes' },
              { label: 'Migration', page: 'portfolio-archive', description: 'Platform moves' },
              { label: 'Performance', page: 'portfolio-archive', description: 'Speed optimization' },
            ]
          },
          {
            title: 'Explore',
            items: [
              { label: 'All Projects', page: 'portfolio-archive', description: 'View full portfolio' },
              { label: 'Case Studies', page: 'portfolio-archive', description: 'Detailed results' },
              { label: 'Testimonials', page: 'about', description: 'Client feedback' },
            ]
          }
        ]
      }
    },
    { 
      label: 'Blog', 
      page: 'blog',
      isActive: currentPage === 'blog' || currentPage === 'single' || currentPage.startsWith('post-'),
      hasMegaMenu: true,
      megaMenu: {
        title: 'WordPress Insights',
        description: 'Tutorials, best practices & industry news',
        columns: [
          {
            title: 'Popular Topics',
            items: [
              { label: 'WordPress Development', page: 'blog', description: 'Code & tutorials' },
              { label: 'WooCommerce Tips', page: 'blog', description: 'E-commerce guides' },
              { label: 'Design Systems', page: 'blog', description: 'Token-based design' },
              { label: 'Performance & SEO', page: 'blog', description: 'Speed optimization' },
            ]
          },
          {
            title: 'Resources',
            items: [
              { label: 'All Articles', page: 'blog', description: 'Browse all posts' },
              { label: 'Getting Started', page: 'blog', description: 'Beginner guides' },
              { label: 'Advanced Techniques', page: 'blog', description: 'Expert tips' },
              { label: 'News & Updates', page: 'blog', description: 'Latest releases' },
            ]
          }
        ]
      }
    },
    { 
      label: 'About', 
      page: 'about',
      hasSubmenu: true,
      isActive: currentPage === 'about' || currentPage === 'team' || currentPage.startsWith('about-'),
      submenu: [
        { label: 'About Us', page: 'about' },
        { label: 'Our Team', page: 'team' },
        { label: 'Our Process', page: 'about-process' },
        { label: 'Culture & Values', page: 'about-culture' },
        { label: 'Company History', page: 'about-history' }
      ]
    },
    { 
      label: 'Hosting', 
      page: 'hosting',
      isActive: currentPage === 'hosting',
      hasMegaMenu: true,
      megaMenu: {
        title: 'WordPress Hosting',
        description: 'Managed WordPress hosting solutions',
        columns: [
          {
            title: 'Hosting Plans',
            items: [
              { label: 'Starter Plan', page: 'hosting', description: '1-3 sites, 10GB storage' },
              { label: 'Business Plan', page: 'hosting', description: '5-10 sites, 50GB storage' },
              { label: 'Enterprise Plan', page: 'hosting', description: 'Unlimited sites, custom' },
              { label: 'Compare Plans', page: 'hosting', description: 'See all features' },
            ]
          },
          {
            title: 'Features',
            items: [
              { label: 'Automatic Backups', page: 'hosting', description: 'Daily backups' },
              { label: 'Security Monitoring', page: 'hosting', description: '24/7 protection' },
              { label: 'Performance Optimization', page: 'hosting', description: 'CDN & caching' },
              { label: 'Expert Support', page: 'contact', description: 'WordPress specialists' },
            ]
          }
        ]
      }
    },
    { 
      label: 'Contact', 
      page: 'contact',
      isActive: currentPage === 'contact',
      hasMegaMenu: true,
      megaMenu: {
        title: 'Get In Touch',
        description: 'We\'d love to hear from you',
        featured: [
          {
            title: 'Start Your Project',
            description: 'Free consultation & quote',
            image: 'https://images.unsplash.com/photo-1653212883731-4d5bc66e0181?w=800',
            page: 'contact'
          }
        ],
        columns: [
          {
            title: 'Contact Options',
            items: [
              { label: 'Request a Quote', page: 'contact', description: 'Free project estimate' },
              { label: 'Schedule Consultation', page: 'contact', description: '30-min discovery call' },
              { label: 'General Inquiries', page: 'contact', description: 'Questions & support' },
              { label: 'Partner With Us', page: 'contact', description: 'Agency partnerships' },
            ]
          },
          {
            title: 'Support',
            items: [
              { label: 'FAQs', page: 'faq', description: 'Common questions' }, // Fixed: Point to FAQ page
              { label: 'Documentation', page: 'blog', description: 'Guides & resources' },
              { label: 'Client Portal', page: 'contact', description: 'Existing clients' },
              { label: 'Emergency Support', page: 'contact', description: '24/7 critical issues' },
            ]
          }
        ]
      }
    },
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
            onClick={() => navigateTo('front-page')}
            aria-label="LSX Design Home"
            style={{ 
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            <SiteLogo width="220px" alt="LSX Design Logo" />
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
                  {item.hasMegaMenu ? (
                    <div
                      onMouseEnter={() => {
                        if (item.label === 'Services') setServicesMenuOpen(true);
                        if (item.label === 'Portfolio') setPortfolioMenuOpen(true);
                        if (item.label === 'Blog') setBlogMenuOpen(true);
                        if (item.label === 'Hosting') setHostingMenuOpen(true);
                        if (item.label === 'Contact') setContactMenuOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (item.label === 'Services') setServicesMenuOpen(false);
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
                        (item.label === 'Portfolio' && portfolioMenuOpen) ||
                        (item.label === 'Blog' && blogMenuOpen) ||
                        (item.label === 'Hosting' && hostingMenuOpen) ||
                        (item.label === 'Contact' && contactMenuOpen)) && item.megaMenu && (
                        <div
                          onMouseEnter={() => {
                            if (item.label === 'Services') setServicesMenuOpen(true);
                            if (item.label === 'Portfolio') setPortfolioMenuOpen(true);
                            if (item.label === 'Blog') setBlogMenuOpen(true);
                            if (item.label === 'Hosting') setHostingMenuOpen(true);
                            if (item.label === 'Contact') setContactMenuOpen(true);
                          }}
                          onMouseLeave={() => {
                            if (item.label === 'Services') setServicesMenuOpen(false);
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
                              {item.megaMenu.title}
                            </h3>
                            <p style={{
                              fontFamily: 'Lexend, sans-serif',
                              fontSize: 'var(--text-small)',
                              color: 'var(--muted-foreground)',
                              margin: 0
                            }}>
                              {item.megaMenu.description}
                            </p>
                          </div>

                          {/* Featured Items with Images */}
                          {item.megaMenu.featured && item.megaMenu.featured.length > 0 && (
                            <div
                              style={{
                                display: 'grid',
                                gridTemplateColumns: `repeat(${item.megaMenu.featured.length}, 1fr)`,
                                gap: '16px',
                                marginBottom: '24px'
                              }}
                            >
                              {item.megaMenu.featured.map((featuredItem, featIndex) => (
                                <button
                                  key={featIndex}
                                  onClick={() => {
                                    navigateTo(featuredItem.page);
                                    setServicesMenuOpen(false);
                                    setPortfolioMenuOpen(false);
                                    setContactMenuOpen(false);
                                  }}
                                  style={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: 'var(--radius-lg)',
                                    border: '1px solid var(--border-soft)',
                                    background: 'none',
                                    padding: 0,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    textAlign: 'left'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                                    e.currentTarget.style.borderColor = 'var(--primary)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = 'var(--border-soft)';
                                  }}
                                >
                                  {/* Featured Image */}
                                  <div style={{
                                    width: '100%',
                                    height: '140px',
                                    overflow: 'hidden',
                                    backgroundColor: 'var(--muted)'
                                  }}>
                                    <img
                                      src={featuredItem.image}
                                      alt={featuredItem.title}
                                      style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease'
                                      }}
                                      onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                      }}
                                    />
                                  </div>
                                  
                                  {/* Featured Content */}
                                  <div style={{
                                    padding: '16px'
                                  }}>
                                    <div style={{
                                      fontFamily: 'Lexend, sans-serif',
                                      fontSize: 'var(--text-base)',
                                      fontWeight: 'var(--font-weight-semibold)',
                                      color: 'var(--foreground)',
                                      marginBottom: '6px'
                                    }}>
                                      {featuredItem.title}
                                    </div>
                                    <div style={{
                                      fontFamily: 'Lexend, sans-serif',
                                      fontSize: 'var(--text-small)',
                                      color: 'var(--muted-foreground)',
                                      fontWeight: 'var(--font-weight-regular)'
                                    }}>
                                      {featuredItem.description}
                                    </div>
                                  </div>
                                </button>
                              ))}
                            </div>
                          )}

                          {/* Mega Menu Columns */}
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: `repeat(${item.megaMenu.columns.length}, 1fr)`,
                            gap: '32px'
                          }}>
                            {item.megaMenu.columns.map((column, colIndex) => (
                              <div key={colIndex}>
                                <h4 style={{
                                  fontFamily: 'Lexend, sans-serif',
                                  fontSize: 'var(--text-base)',
                                  fontWeight: 'var(--font-weight-medium)', // Reduced from semibold to medium
                                  color: 'var(--foreground)',
                                  marginBottom: '12px'
                                }}>
                                  {column.title}
                                </h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                  {column.items.map((menuItem, itemIndex) => (
                                    <li key={itemIndex} style={{ marginBottom: '8px' }}>
                                      <button
                                        onClick={() => {
                                          navigateTo(menuItem.page);
                                          setServicesMenuOpen(false);
                                          setPortfolioMenuOpen(false);
                                          setBlogMenuOpen(false);
                                          setHostingMenuOpen(false);
                                          setContactMenuOpen(false);
                                        }}
                                        style={{
                                          width: '100%',
                                          textAlign: 'left',
                                          padding: '10px 12px',
                                          fontFamily: 'Lexend, sans-serif',
                                          fontSize: 'var(--text-base)',
                                          fontWeight: 'var(--font-weight-regular)',
                                          color: 'var(--foreground)',
                                          background: 'none',
                                          border: 'none',
                                          borderRadius: 'var(--radius)',
                                          cursor: 'pointer',
                                          transition: 'all 0.2s ease',
                                          display: 'block'
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
                                          fontWeight: 'var(--font-weight-medium)',
                                          marginBottom: '2px'
                                        }}>
                                          {menuItem.label}
                                        </div>
                                        {menuItem.description && (
                                          <div style={{
                                            fontSize: 'var(--text-small)',
                                            color: 'var(--muted-foreground)',
                                            fontWeight: 'var(--font-weight-regular)'
                                          }}>
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
                  ) : item.hasSubmenu ? (
                    // Regular Submenu (About)
                    <div
                      onMouseEnter={() => setAboutMenuOpen(true)}
                      onMouseLeave={() => setAboutMenuOpen(false)}
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
                            transform: aboutMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                          }}
                        />
                      </button>
                      
                      {/* Submenu */}
                      {aboutMenuOpen && item.submenu && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            marginTop: '8px',
                            backgroundColor: 'var(--card)',
                            border: '1px solid var(--border-soft)',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-lg)',
                            minWidth: '180px',
                            padding: '8px',
                            zIndex: 100
                          }}
                        >
                          {item.submenu.map((subItem) => (
                            <button
                              key={subItem.page}
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
                                transition: 'all 0.2s ease'
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
                              {subItem.label}
                            </button>
                          ))}
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