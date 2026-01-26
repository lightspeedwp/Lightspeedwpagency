/**
 * Site Footer (Template Part)
 * 
 * WordPress concept: Template part — parts/footer.html
 * 
 * Global footer with navigation columns, trust badges, legal links, and social media.
 * Uses centralized navigation data and design system tokens for all styling.
 * 
 * **Features:**
 * - Multi-column navigation layout (4 columns)
 * - Brand/logo section with description
 * - Trust badges integration (WooExpert, accessibility, etc.)
 * - Legal links (Privacy Policy, Terms of Service)
 * - Social media icons (Facebook, Instagram, Twitter, LinkedIn, YouTube)
 * - Dynamic copyright year
 * - Developer tools links (Site Map, Template Tester, Design System Test)
 * 
 * **Styling:**
 * - 100% CSS classes from /src/styles/footer.css
 * - BEM naming for all sections
 * - CSS variables for complete user control (var(--font-primary), var(--spacing-*), var(--foreground), etc.)
 * - WordPress-aligned utility classes
 * - Zero inline styles
 * 
 * **Accessibility:**
 * - WCAG 2.1 AA compliant
 * - Semantic HTML with proper landmarks (role="contentinfo")
 * - ARIA labels for all interactive elements
 * - Keyboard accessible navigation
 * - Focus states on all links
 * - Social media links with descriptive labels
 * 
 * **Navigation Data:**
 * Uses centralized footer navigation from `/src/app/data/pages.ts`:
 * - About Us section (About, Team, Process, Culture, Portfolio, Blog, Site Map)
 * - Our Products section (LSX Theme, Tour Operator, Wetu Importer, LSX Sharing, LSX Search)
 * - Our Services section (Discovery, Design, Development, Support, Hosting)
 * - Our Solutions section (WooCommerce, WordPress, Tour Operators, Mailchimp)
 * - Legal section (Privacy Policy, Terms of Service)
 * 
 * **Props:**
 * @param {Object} props - Component props
 * @param {string} [props.className=''] - Additional CSS classes to apply
 * 
 * **Usage:**
 * ```tsx
 * // Default footer
 * <SiteFooter />
 * 
 * // Footer with custom class
 * <SiteFooter className="custom-footer-class" />
 * ```
 * 
 * **WordPress Mapping:**
 * - Template Part: `parts/footer.html`
 * - Uses WordPress `wp:navigation` blocks
 * - Uses WordPress `wp:site-logo` block
 * - Uses WordPress `wp:group` for sections
 * 
 * @see /guidelines/parts/SiteFooter.md - Complete documentation
 * @see /src/styles/footer.css - Dedicated CSS file
 * @see /src/app/data/pages.ts - Navigation data (footerNavigation export)
 * @see /src/app/components/common/TrustBadges.tsx - Trust badges component
 */

import { Container } from '../common/Container';
import { SiteLogo } from '../blocks/theme/SiteLogo';
import { TrustBadges } from '../common/TrustBadges';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { useNavigation } from '../../contexts/NavigationContext';
import { footerNavigation } from '../../data/pages';

interface SiteFooterProps {
  className?: string;
}

export function SiteFooter({ className = '' }: SiteFooterProps) {
  const { navigateTo } = useNavigation();

  return (
    <footer 
      role="contentinfo"
      className={`site-footer ${className}`}
    >
      <Container>
        {/* Footer Content */}
        <div className="site-footer__content">
          {/* Brand Column */}
          <div className="site-footer__brand">
            <button 
              onClick={() => navigateTo('front-page')}
              aria-label="LSX Design Home"
              className="site-footer__logo-button"
            >
              <SiteLogo width="220px" alt="LSX Design Logo" />
            </button>
            <p className="site-footer__brand-description">
              Expert WordPress and WooCommerce development for modern, accessible, high-performance websites.
            </p>
          </div>

          {/* Link Columns - Using centralized navigation */}
          {Object.entries(footerNavigation).map(([key, section]) => (
            <div key={key} className="site-footer__column">
              <h3 className="site-footer__column-title">
                {section.title}
              </h3>
              <ul className="site-footer__link-list">
                {section.links.map((link) => (
                  <li key={link.label} className="site-footer__link-item">
                    <button
                      onClick={() => navigateTo(link.page)}
                      className="site-footer__link-button"
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
        <div className="site-footer__bottom">
          <div className="site-footer__bottom-grid">
            {/* Left: Copyright */}
            <div className="site-footer__copyright-section">
              <p className="site-footer__copyright-text">
                © {new Date().getFullYear()} LSX Design. All rights reserved.
              </p>
              {/* Dev Tools Links */}
              <div className="site-footer__dev-links">
                <button
                  onClick={() => navigateTo('site-map')}
                  className="site-footer__dev-link"
                  aria-label="View site map"
                >
                  Site Map →
                </button>
                <button
                  onClick={() => navigateTo('template-tester')}
                  className="site-footer__dev-link"
                  aria-label="Test all pages"
                >
                  Test All Pages →
                </button>
                <button
                  onClick={() => navigateTo('dev-tools')}
                  className="site-footer__dev-link"
                  aria-label="Design system dev tools"
                >
                  Dev Tools →
                </button>
              </div>
            </div>

            {/* Center: Legal Links */}
            <div className="site-footer__legal-links">
              <button
                onClick={() => navigateTo('privacy-policy')}
                className="site-footer__legal-link"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => navigateTo('terms-of-service')}
                className="site-footer__legal-link"
              >
                Terms of Service
              </button>
              <button
                onClick={() => navigateTo('style-guide')}
                className="site-footer__legal-link"
                aria-label="View style guide"
              >
                Style Guide →
              </button>
            </div>

            {/* Right: Social Icons */}
            <div className="site-footer__social-icons" role="group" aria-label="Social media links">
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
                    className="site-footer__social-link"
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
