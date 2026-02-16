/**
 * Site Footer (Template Part)
 * 
 * WordPress concept: Template part — parts/footer.html
 * 
 * Global footer matching the approved mockup design:
 * - Top section: Brand description (left) + 3 nav columns (Services, Company, Support)
 * - Social icons row
 * - Bottom bar: Copyright + legal links
 * 
 * **Structure:**
 * - `.site-footer` (Footer Container)
 *   - `.site-footer__main` (Top Grid: Brand + 3 Nav Columns)
 *   - `.site-footer__social` (Social Icons Row)
 *   - `.site-footer__bottom` (Copyright + Legal)
 * 
 * All styling in /src/styles/blocks/theme/site-footer.css
 * 100% CSS variables — no hardcoded values.
 * Full light/dark mode support.
 * 
 * @see /src/app/data/site-pages.ts - Navigation data source
 */

import { useNavigation } from '../../contexts/NavigationContext';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import '@/styles/blocks/theme/site-footer.css';

/**
 * Footer navigation data — matches LightSpeed WP site structure.
 * Separate from main nav to allow independent editing.
 */
const footerColumns = {
  services: {
    title: 'Services',
    links: [
      { label: 'WordPress Design', page: 'design' },
      { label: 'WooCommerce Development', page: 'woocommerce-solution' },
      { label: 'WordPress Hosting', page: 'hosting' },
      { label: 'Block Theme Development', page: 'development' },
      { label: 'Support & Maintenance', page: 'support' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', page: 'about' },
      { label: 'Portfolio', page: 'portfolio' },
      { label: 'Blog', page: 'blog' },
      { label: 'Careers', page: 'careers' },
      { label: 'Contact', page: 'contact' },
    ],
  },
  support: {
    title: 'Support',
    links: [
      { label: 'Contact', page: 'contact' },
      { label: 'FAQs', page: 'faq' },
      { label: 'Tutorials', page: 'tutorials' },
      { label: 'Terms of Service', page: 'terms-of-service' },
      { label: 'Privacy Policy', page: 'privacy-policy' },
    ],
  },
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/lightspeedwp', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/lightaborns', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/lightspeedwp', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/lightspeedwp', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com/@lightspeedwp', label: 'YouTube' },
];

export function SiteFooter() {
  const { navigateTo } = useNavigation();

  return (
    <footer role="contentinfo" className="site-footer">
      <div className="site-footer__container">

        {/* ==============================
            MAIN CONTENT: Brand + 3 Columns
            ============================== */}
        <div className="site-footer__main">

          {/* Brand Column */}
          <div className="site-footer__brand">
            <button
              onClick={() => navigateTo('front-page')}
              aria-label="LightSpeed WP Home"
              className="site-footer__logo-button"
            >
              <span className="site-footer__logo-text">
                <span className="site-footer__logo-bolt">⚡</span>
                <span className="site-footer__logo-name">
                  <span className="site-footer__logo-light">Light</span>Speed
                </span>
              </span>
            </button>
            <p className="site-footer__brand-description">
              Expert WordPress and WooCommerce development for modern, accessible, high-performance websites.
            </p>
          </div>

          {/* Navigation Columns */}
          {Object.entries(footerColumns).map(([key, column]) => (
            <nav key={key} className="site-footer__column" aria-label={`${column.title} Navigation`}>
              <h3 className="site-footer__column-title">
                {column.title}
              </h3>
              <ul className="site-footer__link-list">
                {column.links.map((link) => (
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
            </nav>
          ))}
        </div>

        {/* ==============================
            SOCIAL ICONS ROW
            ============================== */}
        <div className="site-footer__social">
          <div className="site-footer__social-icons">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="site-footer__social-link"
                >
                  <IconComponent size={18} strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </div>

        {/* ==============================
            BOTTOM BAR: Copyright + Legal
            ============================== */}
        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            © {new Date().getFullYear()} LightSpeed WP. All rights reserved.
          </p>
          <nav className="site-footer__legal" aria-label="Legal Navigation">
            <button
              onClick={() => navigateTo('privacy-policy')}
              className="site-footer__legal-link"
            >
              Privacy Policy
            </button>
            <span className="site-footer__legal-separator" aria-hidden="true">·</span>
            <button
              onClick={() => navigateTo('terms-of-service')}
              className="site-footer__legal-link"
            >
              Terms of Use
            </button>
            <span className="site-footer__legal-separator" aria-hidden="true">·</span>
            <button
              onClick={() => navigateTo('site-map')}
              className="site-footer__legal-link"
            >
              Site Map
            </button>
          </nav>
        </div>

      </div>
    </footer>
  );
}