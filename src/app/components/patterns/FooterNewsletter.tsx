/**
 * Footer Newsletter Pattern
 * 
 * WordPress concept: Block pattern — lsx-design/layout/footer-newsletter
 * 
 * Alternative footer with newsletter subscription, social links, and link columns.
 * Uses design system tokens for all styling.
 */

import { Logo } from '../common/Logo';
import { Button } from '../blocks/design/Buttons';
import { Container } from '../common/Container';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

interface FooterColumn {
  title: string;
  links: Array<{ label: string; href: string }>;
}

interface FooterNewsletterProps {
  columns?: FooterColumn[];
  socialLinks?: Array<{ icon: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'youtube'; href: string; label: string }>;
}

export function FooterNewsletter({ 
  columns = [
    {
      title: 'Services',
      links: [
        { label: 'Web Design', href: '#web-design' },
        { label: 'Development', href: '#development' },
        { label: 'Branding', href: '#branding' },
        { label: 'UX/UI Design', href: '#ux-ui' },
        { label: 'E-commerce', href: '#ecommerce' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Case Studies', href: '#case-studies' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Design Blog', href: '#blog' },
        { label: 'Documentation', href: '#docs' },
        { label: 'Guides', href: '#guides' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Our Team', href: '#team' },
        { label: 'Careers', href: '#careers' },
        { label: 'Press', href: '#press' },
        { label: 'Contact', href: '#contact' },
      ]
    },
  ],
  socialLinks = [
    { icon: 'facebook', href: '#facebook', label: 'Facebook' },
    { icon: 'instagram', href: '#instagram', label: 'Instagram' },
    { icon: 'twitter', href: '#twitter', label: 'Twitter' },
    { icon: 'linkedin', href: '#linkedin', label: 'LinkedIn' },
    { icon: 'youtube', href: '#youtube', label: 'YouTube' },
  ]
}: FooterNewsletterProps) {
  
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'facebook': return Facebook;
      case 'instagram': return Instagram;
      case 'twitter': return Twitter;
      case 'linkedin': return Linkedin;
      case 'youtube': return Youtube;
      default: return Facebook;
    }
  };

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
                <Logo theme="light" />
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
                          <a
                            href={link.href}
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
                          </a>
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
                  // Handle newsletter signup
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
                      backgroundColor: 'var(--input)',
                      color: 'var(--foreground)',
                      border: '1px solid var(--border)',
                      outline: 'none',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.outline = '2px solid var(--ring)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.outline = 'none';
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
                <p 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-small)',
                    color: 'var(--foreground)',
                    margin: 0,
                    lineHeight: '1.5',
                  }}
                >
                  By subscribing you agree to with our{' '}
                  <a 
                    href="#privacy" 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                      textDecoration: 'underline',
                    }}
                  >
                    Privacy Policy
                  </a>
                  {' '}and provide consent to receive updates from our company.
                </p>
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8" style={{ borderTop: '1px solid var(--border-extra-soft)' }}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              {/* Copyright & Legal Links */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <p 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-small)',
                    color: 'var(--foreground)',
                    margin: 0,
                  }}
                >
                  © 2024 LightSpeed. All rights reserved.
                </p>
                <div className="flex gap-5">
                  {['Privacy Policy', 'Terms of Service', 'Cookies Settings'].map((label, index) => (
                    <a
                      key={index}
                      href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-small)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--foreground)',
                        textDecoration: 'underline',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--foreground)';
                      }}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-5" role="group" aria-label="Social media links">
                {socialLinks.map((social, index) => {
                  const IconComponent = getSocialIcon(social.icon);
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