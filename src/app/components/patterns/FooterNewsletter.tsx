/**
 * Footer Newsletter Pattern
 * 
 * WordPress concept: Block pattern — lsx-design/layout/footer-newsletter
 * 
 * Alternative footer with newsletter subscription, social links, and link columns.
 * All styling in /src/styles/footer-newsletter.css (user-editable)
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
      className="footer-newsletter"
    >
      <Container>
        <div className="footer-newsletter__container">
          {/* Main Footer Content */}
          <div className="footer-newsletter__main">
            {/* Links Section */}
            <div className="footer-newsletter__links">
              {/* Logo Column */}
              <div className="footer-newsletter__logo-column">
                <Logo theme="light" />
              </div>

              {/* Link Columns */}
              {columns.map((column, index) => (
                <div key={index} className="footer-newsletter__column">
                  <h3 className="footer-newsletter__column-title">
                    {column.title}
                  </h3>
                  <nav aria-label={column.title}>
                    <ul className="footer-newsletter__column-nav">
                      {column.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="footer-newsletter__link"
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
            <div className="footer-newsletter__subscribe">
              <div className="footer-newsletter__subscribe-content">
                <h3 className="footer-newsletter__subscribe-title">
                  Subscribe
                </h3>
                <p className="footer-newsletter__subscribe-description">
                  Join our newsletter to stay up to date on features and releases.
                </p>
              </div>

              {/* Newsletter Form */}
              <form 
                className="footer-newsletter__form"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Handle newsletter signup
                  // In production: Send to API
                }}
              >
                <div className="footer-newsletter__form-group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email address"
                    required
                    className="footer-newsletter__input"
                  />
                  <Button 
                    variant="secondary" 
                    type="submit"
                    className="footer-newsletter__submit"
                  >
                    Sign Up
                  </Button>
                </div>
                <p className="footer-newsletter__disclaimer">
                  By subscribing you agree to with our{' '}
                  <a 
                    href="#privacy" 
                    className="footer-newsletter__disclaimer-link"
                  >
                    Privacy Policy
                  </a>
                  {' '}and provide consent to receive updates from our company.
                </p>
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-newsletter__bottom">
            <div className="footer-newsletter__bottom-content">
              {/* Copyright */}
              <p className="footer-newsletter__copyright">
                © 2024 LightSpeed. All rights reserved.
              </p>

              {/* Social Links */}
              <div className="footer-newsletter__social" role="group" aria-label="Social media links">
                {socialLinks.map((social, index) => {
                  const IconComponent = getSocialIcon(social.icon);
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="footer-newsletter__social-link"
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
