/**
 * Site Footer (Template Part)
 * 
 * WordPress concept: Template part — parts/footer.html
 * 
 * Global footer chrome. Appears on all page templates.
 * Supports multiple footer patterns that can be switched.
 * Uses design system tokens for all styling.
 */

import { Container } from '../common/Container';
import { Logo } from '../common/Logo';
import { SiteLogo } from '../blocks/theme/SiteLogo';
import { Button } from '../blocks/design/Buttons';
import { TrustBadges } from '../common/TrustBadges';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { useNavigation } from '../../contexts/NavigationContext';
import { footerNavigation } from '../../data/pages';

interface SiteFooterProps {
  variant?: 'default' | 'newsletter';
}

export function SiteFooter({ variant = 'default' }: SiteFooterProps) {
  const { navigateTo } = useNavigation();

  // If newsletter variant is requested, use the newsletter footer pattern
  if (variant === 'newsletter') {
    return <SiteFooterNewsletter />;
  }

  // Default footer pattern
  const footerLinks = {
    services: [
      { label: 'WordPress Design', page: 'services' },
      { label: 'WooCommerce Development', page: 'services' },
      { label: 'WordPress Hosting', page: 'hosting' },
      { label: 'Block Theme Development', page: 'services' },
    ],
    company: [
      { label: 'About Us', page: 'about' },
      { label: 'Portfolio', page: 'portfolio-archive' },
      { label: 'Blog', page: 'blog' },
      { label: 'Style Guide', page: 'style-guide' },
    ],
    support: [
      { label: 'Contact', page: 'contact' },
      { label: 'FAQs', page: 'contact' },
      { label: 'Template Tester', page: 'template-tester' },
      { label: 'Search', page: 'search-page' },
    ],
  };

  return (
    <footer 
      role="contentinfo"
      className="py-16"
      style={{
        backgroundColor: 'var(--sidebar)',
        color: 'var(--sidebar-foreground)',
      }}
    >
      <Container>
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
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
            <p 
              className="mt-6"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-regular)',
                color: 'var(--sidebar-foreground)',
                lineHeight: '1.6',
                opacity: 0.8
              }}
            >
              Expert WordPress and WooCommerce development for modern, accessible, high-performance websites.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h4)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: '24px',
                  color: 'var(--sidebar-foreground)',
                  textTransform: 'capitalize',
                }}
              >
                {category}
              </h3>
              <ul className="space-y-3" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => navigateTo(link.page)}
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-regular)',
                        color: 'var(--sidebar-foreground)',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        textAlign: 'left',
                        opacity: 0.7,
                        transition: 'opacity 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.color = 'var(--sidebar-accent)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '0.7';
                        e.currentTarget.style.color = 'var(--sidebar-foreground)';
                      }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <TrustBadges />

        {/* Copyright */}
        <div 
          className="pt-8"
          style={{ borderTop: '1px solid var(--sidebar-border)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Left: Copyright + Test All Pages Link (same line) */}
            <div className="flex items-center gap-3 justify-start">
              <p 
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'var(--text-small)',
                  color: 'var(--sidebar-foreground)',
                  opacity: 0.6,
                  margin: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                © {new Date().getFullYear()} LSX Design. All rights reserved.
              </p>
              <button
                onClick={() => navigateTo('template-tester')}
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-small)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--sidebar-foreground)',
                  textDecoration: 'underline',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--sidebar-foreground)';
                }}
                aria-label="Test all pages"
              >
                Test All Pages →
              </button>
              <button
                onClick={() => navigateTo('design-system-test')}
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-small)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--sidebar-foreground)',
                  textDecoration: 'underline',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--sidebar-foreground)';
                }}
                aria-label="Design system dev tools"
              >
                Dev Tools →
              </button>
            </div>

            {/* Center: Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => navigateTo('privacy-policy')}
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-small)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--sidebar-foreground)',
                  textDecoration: 'underline',
                  transition: 'color 0.2s ease',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--sidebar-foreground)';
                }}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => navigateTo('terms-of-service')}
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-small)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--sidebar-foreground)',
                  textDecoration: 'underline',
                  transition: 'color 0.2s ease',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--sidebar-foreground)';
                }}
              >
                Terms of Service
              </button>
              <button
                onClick={() => navigateTo('style-guide')}
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-small)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--sidebar-foreground)',
                  textDecoration: 'underline',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--sidebar-foreground)';
                }}
                aria-label="View style guide"
              >
                Style Guide →
              </button>
            </div>

            {/* Right: Social Icons */}
            <div className="flex gap-5 justify-end" role="group" aria-label="Social media links">
              {[
                { icon: Facebook, href: '#facebook', label: 'Facebook' },
                { icon: Instagram, href: '#instagram', label: 'Instagram' },
                { icon: Twitter, href: '#twitter', label: 'Twitter' },
                { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
                { icon: Youtube, href: '#youtube', label: 'YouTube' },
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center"
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--sidebar-foreground)',
                      color: 'var(--sidebar)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--sidebar-foreground)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <IconComponent size={16} strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/**
 * Newsletter Footer Variant
 * 
 * Alternative footer pattern with newsletter subscription and social links.
 */
function SiteFooterNewsletter() {
  const { navigateTo } = useNavigation();

  const columns = [
    {
      title: 'Services',
      links: [
        { label: 'Web Design', page: 'archive' },
        { label: 'Development', page: 'archive' },
        { label: 'Branding', page: 'archive' },
        { label: 'UX/UI Design', page: 'archive' },
        { label: 'E-commerce', page: 'archive' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Case Studies', page: 'single' },
        { label: 'Portfolio', page: 'single' },
        { label: 'Design Blog', page: 'blog' },
        { label: 'Documentation', page: 'single' },
        { label: 'Guides', page: 'single' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', page: 'single' },
        { label: 'Our Team', page: 'single' },
        { label: 'Blog', page: 'blog' },
        { label: 'Contact', page: 'contact' },
        { label: 'Style Guide', page: 'style-guide' },
      ]
    },
  ];

  const socialLinks = [
    { icon: 'facebook', href: '#facebook', label: 'Facebook', Icon: Facebook },
    { icon: 'instagram', href: '#instagram', label: 'Instagram', Icon: Instagram },
    { icon: 'twitter', href: '#twitter', label: 'Twitter', Icon: Twitter },
    { icon: 'linkedin', href: '#linkedin', label: 'LinkedIn', Icon: Linkedin },
    { icon: 'youtube', href: '#youtube', label: 'YouTube', Icon: Youtube },
  ];

  return (
    <footer 
      role="contentinfo"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
      }}
    >
      <Container>
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-16">
            {/* Links Section */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 flex-1">
              {/* Logo Column */}
              <div className="flex-1">
                <SiteLogo theme="light" width="140px" />
              </div>

              {/* Link Columns */}
              {columns.map((column, index) => (
                <div key={index} className="flex-1">
                  <h3 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                      marginBottom: '10px',
                    }}
                  >
                    {column.title}
                  </h3>
                  <nav aria-label={column.title}>
                    <ul className="flex flex-col gap-1" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {column.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <button
                            onClick={() => navigateTo(link.page)}
                            className="inline-block py-1"
                            style={{
                              fontFamily: 'Lexend, sans-serif',
                              fontSize: 'var(--text-small)',
                              fontWeight: 'var(--font-weight-regular)',
                              color: 'var(--foreground)',
                              textDecoration: 'none',
                              transition: 'color 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = 'var(--primary)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = 'var(--foreground)';
                            }}
                          >
                            {link.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              ))}
            </div>

            {/* Newsletter Section */}
            <div className="w-full lg:w-[500px]">
              <div className="mb-6">
                <h3 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                    marginBottom: '16px',
                  }}
                >
                  Subscribe
                </h3>
                <p 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-regular)',
                    color: 'var(--foreground)',
                    margin: 0,
                    lineHeight: '1.5',
                  }}
                >
                  Join our newsletter to stay up to date on features and releases.
                </p>
              </div>

              {/* Newsletter Form */}
              <form 
                className="pt-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log('Newsletter signup submitted');
                }}
              >
                <div className="flex gap-2 mb-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email address"
                    required
                    className="flex-1 px-3 py-3 rounded-[var(--radius)]"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      backgroundColor: 'var(--input-background)',
                      color: 'var(--foreground)',
                      border: '1px solid var(--border-soft)',
                      outline: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(30, 106, 255, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-soft)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                  <Button 
                    variant="secondary" 
                    type="submit"
                    style={{
                      whiteSpace: 'nowrap',
                      padding: '8px 24px',
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'var(--text-small)', lineHeight: '1.6', opacity: 0.9 }}>
                  By subscribing you agree to with our{' '}
                  <Button 
                    variant="link"
                    page="privacy"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-small)',
                      color: 'var(--primary-foreground)',
                      textDecoration: 'underline',
                      padding: 0,
                      height: 'auto',
                      display: 'inline'
                    }}
                  >
                    Privacy Policy
                  </Button>
                </p>
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8" style={{ borderTop: '1px solid var(--border-extra-soft)' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Left: Copyright & Test Link */}
              <div className="flex flex-wrap items-center gap-3 justify-start">
                <p 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-small)',
                    color: 'var(--foreground)',
                    margin: 0,
                    whiteSpace: 'nowrap',
                  }}
                >
                  © {new Date().getFullYear()} LSX Design. All rights reserved.
                </p>
                <button
                  onClick={() => navigateTo('template-tester')}
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-small)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                    textDecoration: 'underline',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--foreground)';
                  }}
                  aria-label="Test all pages"
                >
                  Test All Pages →
                </button>
                <button
                  onClick={() => navigateTo('design-system-test')}
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-small)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                    textDecoration: 'underline',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--foreground)';
                  }}
                  aria-label="Design system dev tools"
                >
                  Dev Tools →
                </button>
              </div>

              {/* Center: Legal Links */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => navigateTo('privacy-policy')}
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-small)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                    textDecoration: 'underline',
                    transition: 'color 0.2s ease',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--foreground)';
                  }}
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => navigateTo('terms-of-service')}
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-small)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                    textDecoration: 'underline',
                    transition: 'color 0.2s ease',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--foreground)';
                  }}
                >
                  Terms of Service
                </button>
              </div>

              {/* Right: Social Links */}
              <div className="flex gap-5 justify-end" role="group" aria-label="Social media links">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.Icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="flex items-center justify-center"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--foreground)',
                        color: 'var(--background)',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--primary)';
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--foreground)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <IconComponent size={16} strokeWidth={2} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}