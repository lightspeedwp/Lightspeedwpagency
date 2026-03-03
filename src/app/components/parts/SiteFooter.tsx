/**
 * Site Footer (Template Part) — "Neon Pulse" Funky Redesign
 *
 * WordPress concept: Template part — parts/footer.html
 *
 * Complete ground-up redesign:
 *   1. Animated neon gradient top border (3 px shimmer)
 *   2. Newsletter CTA strip with glow-on-focus input
 *   3. Brand column (Logo + tagline + availability badge)
 *   4. 4 navigation columns with underline-reveal + neon text-shadow hover
 *   5. Trust metrics bar (4 key stats with neon number glow)
 *   6. Social icons with glow-on-hover
 *   7. Bottom bar: copyright · legal links · "Crafted with ⚡" signature
 *   8. Decorative gradient orbs + dot-grid overlay (dark mode only)
 *
 * Dual-mode:
 *   .site-footer--dark  → near-black with cyan neon (all-white logo)
 *   .site-footer--light → off-white with blue accents (blue bolt + black text logo)
 *
 * **Logo brand rules (CRITICAL):**
 *   Dark footer  → all-white logo  (theme="dark")
 *   Light footer → blue bolt + black text  (theme="light")
 *   NEVER red. Only white | black | blue bolt + black | light-blue bolt + black.
 *
 * All styling in /src/styles/blocks/theme/site-footer.css
 * 100 % CSS variables — zero hardcoded values.
 *
 * **Icons:** Migrated to Phosphor Icons (Phase 6 Task 6.1 - March 3, 2026)
 *
 * @see /src/styles/blocks/theme/site-footer.css
 * @see /src/app/components/common/Logo.tsx
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/pages';
import { Logo } from '../common/Logo';
import {
  FacebookLogo as Facebook,
  InstagramLogo as Instagram,
  TwitterLogo as Twitter,
  LinkedinLogo as Linkedin,
  YoutubeLogo as Youtube,
  GithubLogo as Github,
  ArrowRight,
  CheckCircle as CheckCircle2,
} from '@phosphor-icons/react';

/* ──────────────────────────────────────────────
   DATA — navigation, socials, metrics
   ────────────────────────────────────────────── */

const footerColumns = {
  company: {
    title: 'Company',
    links: [
      { label: 'About us', page: 'about' },
      { label: 'Our team', page: 'team' },
      { label: 'How we work', page: 'about-process' },
      { label: 'Our story', page: 'about-history' },
      { label: 'Careers', page: 'careers' },
    ],
  },
  systems: {
    title: 'Systems',
    links: [
      { label: 'All systems', page: 'systems' },
      { label: 'Design Tokens', page: 'design-tokens' },
      { label: 'Pattern Governance', page: 'pattern-governance' },
      { label: 'Editorial Workflows', page: 'editorial-workflows' },
      { label: 'AI & Search', page: 'ai-search-readiness' },
      { label: 'Performance', page: 'performance-reliability' },
    ],
  },
  proof: {
    title: 'Proof',
    links: [
      { label: 'Our work', page: 'portfolio' },
      { label: 'Testimonials', page: 'testimonials' },
      { label: 'Why choose us', page: 'why-choose-us' },
      { label: 'Our guarantees', page: 'guarantees' },
      { label: 'Pricing', page: 'pricing' },
    ],
  },
  contact: {
    title: 'Contact',
    links: [
      { label: 'Get in touch', page: 'contact' },
      { label: 'Request audit', page: 'contact' },
      { label: 'FAQ', page: 'faq' },
      { label: 'Support', page: 'support-service' },
      { label: 'ROI calculator', page: 'roi-calculator' },
    ],
  },
};

const socialLinks = [
  { icon: Facebook,  href: 'https://facebook.com/lightspeedwp',          label: 'Facebook' },
  { icon: Twitter,   href: 'https://twitter.com/lightspeedwp',           label: 'Twitter / X' },
  { icon: Instagram, href: 'https://instagram.com/lightspeedwp',         label: 'Instagram' },
  { icon: Linkedin,  href: 'https://linkedin.com/company/lightspeedwp',  label: 'LinkedIn' },
  { icon: Youtube,   href: 'https://youtube.com/@lightspeedwp',          label: 'YouTube' },
  { icon: Github,    href: 'https://github.com/lightspeedwp',            label: 'GitHub' },
];

const trustMetrics = [
  { value: '200+', label: 'Projects shipped', page: 'portfolio' },
  { value: '10+',  label: 'Years experience', page: 'about-history' },
  { value: '99%',  label: 'Client satisfaction', page: 'testimonials' },
  { value: '4.9',  label: 'Avg review score', page: 'why-choose-us' },
];


/* ──────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────── */

export function SiteFooter() {
  /* ---- Newsletter state ---- */
  const [email, setEmail]       = useState('');
  const [subscribed, setSubscribed] = useState(false);

  /* ---- Dark / light detection ---- */
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;

    const check = () => setIsDark(root.classList.contains('dark'));
    check();                                         // initial read

    const observer = new MutationObserver(check);    // watch for class changes
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const mode = isDark ? 'dark' : 'light';

  /* ---- Newsletter submit ---- */
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer
      role="contentinfo"
      className={`site-footer site-footer--${mode}`}
    >
      {/* Animated neon top border */}
      <div className="site-footer__neon-border" aria-hidden="true" />

      {/* Decorative gradient orbs (dark mode only via CSS) */}
      <div className="site-footer__orb site-footer__orb--1" aria-hidden="true" />
      <div className="site-footer__orb site-footer__orb--2" aria-hidden="true" />
      <div className="site-footer__orb site-footer__orb--3" aria-hidden="true" />

      <div className="site-footer__container">

        {/* ════════════════════════════════════════
            1. NEWSLETTER CTA STRIP
            ════════════════════════════════════════ */}
        <section className="site-footer__newsletter" aria-label="Newsletter signup">
          <div className="site-footer__newsletter-text">
            <h3 className="site-footer__newsletter-heading">
              {subscribed
                ? "You're on the list"
                : (<>Stay in the <span className="site-footer__neon-text">loop</span></>)}
            </h3>
            <p className="site-footer__newsletter-sub">
              {subscribed
                ? "Thanks for subscribing — expect WordPress gold in your inbox."
                : 'WordPress tips, design insights & product updates. No spam, ever.'}
            </p>
          </div>

          {subscribed ? (
            <div className="site-footer__newsletter-success">
              <CheckCircle2 size={16} strokeWidth={2} aria-hidden="true" />
              Subscribed
            </div>
          ) : (
            <form
              className="site-footer__newsletter-form"
              onSubmit={handleSubscribe}
              aria-label="Newsletter subscription"
            >
              <input
                type="email"
                className="site-footer__newsletter-input"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <button
                type="submit"
                className="site-footer__newsletter-button"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
              </button>
            </form>
          )}
        </section>

        <hr className="site-footer__divider" />

        {/* ════════════════════════════════════════
            2. MAIN GRID — Brand + 4 Nav Columns
            ════════════════════════════════════════ */}
        <div className="site-footer__main">

          {/* Brand Column */}
          <div className="site-footer__brand">
            <Link
              to={getPageUrl('front-page')}
              aria-label="LightSpeed — go to homepage"
              className="site-footer__logo-link"
            >
              <Logo
                theme={mode === 'dark' ? 'dark' : 'light'}
                width="160px"
              />
            </Link>

            <p className="site-footer__brand-tagline">
              Modern WordPress &amp; WooCommerce agency building accessible,
              high-performance block themes.
            </p>

            <div className="site-footer__badge">
              <span className="site-footer__badge-dot" aria-hidden="true" />
              Available for projects
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(footerColumns).map(([key, column]) => (
            <nav
              key={key}
              className="site-footer__column"
              aria-label={`${column.title} navigation`}
            >
              <h3 className="site-footer__column-title">
                {column.title}
              </h3>
              <ul className="site-footer__link-list">
                {column.links.map((link) => (
                  <li key={link.label} className="site-footer__link-item">
                    <Link
                      to={getPageUrl(link.page)}
                      className="site-footer__link-button"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <hr className="site-footer__divider" />

        {/* ════════════════════════════════════════
            3. TRUST METRICS BAR
            ════════════════════════════════════════ */}
        <div className="site-footer__metrics" aria-label="Company statistics">
          {trustMetrics.map((metric) => (
            <Link
              key={metric.label}
              className="site-footer__metric site-footer__metric--linked"
              to={getPageUrl(metric.page)}
              aria-label={`${metric.value} ${metric.label} — view details`}
            >
              <span className="site-footer__metric-value">{metric.value}</span>
              <span className="site-footer__metric-label">{metric.label}</span>
            </Link>
          ))}
        </div>

        <hr className="site-footer__divider" />

        {/* ════════════════════════════════════════
            4. SOCIAL ICONS ROW
            ════════════════════════════════════════ */}
        <div className="site-footer__social">
          <span className="site-footer__social-label">Follow us</span>

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
                  <IconComponent size={16} strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </div>

        <hr className="site-footer__divider" />

        {/* ════════════════════════════════════════
            5. BOTTOM BAR — Copyright + Legal + Signature
            ════════════════════════════════════════ */}
        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            &copy; {new Date().getFullYear()} LightSpeed WP. All rights reserved.
          </p>

          <nav className="site-footer__legal" aria-label="Legal navigation">
            <Link
              to={getPageUrl('privacy-policy')}
              className="site-footer__legal-link"
            >
              Privacy
            </Link>
            <span className="site-footer__legal-sep" aria-hidden="true">&middot;</span>
            <Link
              to={getPageUrl('terms-of-service')}
              className="site-footer__legal-link"
            >
              Terms
            </Link>
            <span className="site-footer__legal-sep" aria-hidden="true">&middot;</span>
            <Link
              to={getPageUrl('site-map')}
              className="site-footer__legal-link"
            >
              Sitemap
            </Link>
          </nav>

          <p className="site-footer__signature">
            Crafted with{' '}
            <span className="site-footer__signature-bolt" aria-hidden="true">⚡</span>
            {' '}in Cape Town
          </p>
        </div>

      </div>
    </footer>
  );
}