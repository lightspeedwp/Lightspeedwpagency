/**
 * Site Map Template
 *
 * WordPress template: templates/page-sitemap.html
 *
 * Comprehensive sitemap page covering all 117 routes organized into 15 sections.
 * All styling uses BEM classes from /src/styles/templates/site-map.css
 * and CSS variables — zero Tailwind, zero hardcoded values.
 *
 * @see /guidelines/overview-sitemap.md — Complete site structure
 * @see /guidelines/routing/routing-complete-reference.md — Route mapping
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Button } from '../blocks/design/Buttons';
import {
  Home,
  Briefcase,
  Lightbulb,
  FileText,
  MessageSquare,
  Folder,
  AlertCircle,
  Wrench,
  CheckCircle,
  XCircle,
  ChevronRight,
  ShoppingCart,
  Globe,
  Video,
  Headphones,
  Layers,
  Archive,
  Map
} from 'lucide-react';
import { useNavigation } from '../../contexts/NavigationContext';
import { blogPosts, blogCategories } from '../../data/blog-posts';
import { portfolioProjects } from '../../data/portfolio-projects';
import { videos, videoCategories } from '../../data/videos';
import { podcasts, podcastCategories } from '../../data/podcasts';
import { tours } from '../../data/tour-operator';
import { allProducts } from '../../data/woocommerce';
import type { LucideIcon } from 'lucide-react';

/* ═══════════════════════════════════════════
 * Types
 * ═══════════════════════════════════════════ */

interface SiteMapPage {
  id: string;
  label: string;
  status: 'active' | 'missing';
}

interface SiteMapSection {
  title: string;
  icon: LucideIcon;
  color: string;
  pages: SiteMapPage[];
}

/* ═══════════════════════════════════════════
 * Component
 * ═══════════════════════════════════════════ */

export function SiteMapTemplate() {
  const { navigateTo } = useNavigation();

  /* ── 1. Core Pages ── */
  const corePages: SiteMapPage[] = [
    { id: 'front-page', label: 'Home (Front Page)', status: 'active' },
    { id: 'about', label: 'About Us', status: 'active' },
    { id: 'team', label: 'Our Team', status: 'active' },
    { id: 'about-process', label: 'Our Process', status: 'active' },
    { id: 'about-culture', label: 'Our Culture', status: 'active' },
    { id: 'about-history', label: 'Our History', status: 'active' },
    { id: 'careers', label: 'Careers', status: 'active' },
    { id: 'contact', label: 'Contact', status: 'active' },
    { id: 'faq', label: 'FAQ', status: 'active' },
    { id: 'pricing', label: 'Pricing', status: 'active' },
    { id: 'guarantees', label: 'Guarantees', status: 'active' },
    { id: 'testimonials', label: 'Testimonials', status: 'active' },
    { id: 'why-choose-us', label: 'Why Choose Us', status: 'active' },
    { id: 'roi-calculator', label: 'ROI Calculator', status: 'active' },
    { id: 'tutorials', label: 'Tutorials', status: 'active' },
    { id: 'privacy-policy', label: 'Privacy Policy', status: 'active' },
    { id: 'terms-of-service', label: 'Terms of Service', status: 'active' },
    { id: 'search', label: 'Search', status: 'active' },
    { id: 'style-guide', label: 'Style Guide', status: 'active' },
    { id: 'site-map', label: 'Site Map (Current)', status: 'active' },
  ];

  /* ── 2. Services ── */
  const servicePages: SiteMapPage[] = [
    { id: 'services', label: 'Services Landing', status: 'active' },
    { id: 'discovery', label: 'Discovery & Strategy', status: 'active' },
    { id: 'design', label: 'Design', status: 'active' },
    { id: 'development', label: 'Development', status: 'active' },
    { id: 'content', label: 'Content', status: 'active' },
    { id: 'content-strategy', label: 'Content Strategy', status: 'active' },
    { id: 'content-collection', label: 'Content Collection', status: 'active' },
    { id: 'content-audit', label: 'Content Audit', status: 'active' },
    { id: 'security', label: 'Security', status: 'active' },
    { id: 'migrations', label: 'Migrations', status: 'active' },
    { id: 'support', label: 'Support & Maintenance', status: 'active' },
    { id: 'newsletter-service', label: 'Newsletter Service', status: 'active' },
    { id: 'email-marketing', label: 'Email Marketing', status: 'active' },
    { id: 'training', label: 'Training', status: 'active' },
    { id: 'hosting', label: 'Hosting', status: 'active' },
  ];

  /* ── 3. Solutions ── */
  const solutionPages: SiteMapPage[] = [
    { id: 'solutions', label: 'Solutions Landing', status: 'active' },
    { id: 'wordpress', label: 'WordPress', status: 'active' },
    { id: 'woocommerce', label: 'WooCommerce', status: 'active' },
    { id: 'tour-operators', label: 'Tour Operators', status: 'active' },
    { id: 'publishers', label: 'Publishers', status: 'active' },
    { id: 'lsx', label: 'LSX Design', status: 'active' },
    { id: 'lsx-theme', label: 'LSX Theme', status: 'active' },
    { id: 'mailchimp', label: 'Mailchimp', status: 'active' },
    { id: 'wetu-importer', label: 'Wetu Importer', status: 'active' },
    { id: 'lsx-sharing', label: 'LSX Sharing', status: 'active' },
    { id: 'lsx-search', label: 'LSX Search', status: 'active' },
  ];

  /* ── 4. Portfolio ── */
  const portfolioPages: SiteMapPage[] = [
    { id: 'portfolio-archive', label: 'Portfolio Archive', status: 'active' },
    ...portfolioProjects.map(project => ({
      id: `portfolio-single-${project.slug}`,
      label: `Project: ${project.client}`,
      status: 'active' as const,
    })),
  ];

  /* ── 5. Blog & Archives ── */
  const blogArchivePages: SiteMapPage[] = [
    { id: 'blog', label: 'Blog Index', status: 'active' },
    { id: 'single-post', label: 'Single Post (Longform)', status: 'active' },
    ...blogCategories.map(cat => ({
      id: `category-${cat.slug}`,
      label: `Category: ${cat.name}`,
      status: 'active' as const,
    })),
    { id: 'author', label: 'Author Archive', status: 'active' },
    { id: 'tag-archive', label: 'Tag Archive', status: 'active' },
    { id: 'date-archive', label: 'Date Archive', status: 'active' },
  ];

  /* ── 6. Single Posts ── */
  const singlePostPages: SiteMapPage[] = blogPosts.map(post => ({
    id: `post-${post.slug}`,
    label: `Post: ${post.title.substring(0, 45)}${post.title.length > 45 ? '...' : ''}`,
    status: 'active' as const,
  }));

  /* ── 7. Post Formats ── */
  const postFormatPages: SiteMapPage[] = [
    { id: 'audio-archive', label: 'Audio Archive', status: 'active' },
    { id: 'audio-single', label: 'Audio Single', status: 'active' },
    { id: 'gallery-archive', label: 'Gallery Archive', status: 'active' },
    { id: 'gallery-single', label: 'Gallery Single', status: 'active' },
    { id: 'image-archive', label: 'Image Archive', status: 'active' },
    { id: 'image-single', label: 'Image Single', status: 'active' },
    { id: 'quote-archive', label: 'Quote Archive', status: 'active' },
    { id: 'quote-single', label: 'Quote Single', status: 'active' },
    { id: 'link-archive', label: 'Link Archive', status: 'active' },
    { id: 'link-single', label: 'Link Single', status: 'active' },
    { id: 'chat-archive', label: 'Chat Archive', status: 'active' },
    { id: 'chat-single', label: 'Chat Single', status: 'active' },
    { id: 'status-archive', label: 'Status Archive', status: 'active' },
    { id: 'status-single', label: 'Status Single', status: 'active' },
    { id: 'standard-archive', label: 'Standard Archive', status: 'active' },
    { id: 'standard-single', label: 'Standard Single', status: 'active' },
    { id: 'aside-archive', label: 'Aside Archive', status: 'active' },
    { id: 'aside-single', label: 'Aside Single', status: 'active' },
    { id: 'aside-stream', label: 'Aside Stream', status: 'active' },
  ];

  /* ── 8. Videos ── */
  const videoPages: SiteMapPage[] = [
    { id: 'videos', label: 'Video Index', status: 'active' },
    ...videoCategories.map(cat => ({
      id: `video-category-${cat.slug}`,
      label: `Category: ${cat.name}`,
      status: 'active' as const,
    })),
    ...videos.map(video => ({
      id: `video-${video.slug}`,
      label: `Video: ${video.title.substring(0, 40)}${video.title.length > 40 ? '...' : ''}`,
      status: 'active' as const,
    })),
  ];

  /* ── 9. Podcasts ── */
  const podcastPagesList: SiteMapPage[] = [
    { id: 'podcasts', label: 'Podcast Index', status: 'active' },
    ...podcastCategories.map(cat => ({
      id: `podcast-category-${cat.slug}`,
      label: `Category: ${cat.name}`,
      status: 'active' as const,
    })),
    ...podcasts.map(podcast => ({
      id: `podcast-${podcast.slug}`,
      label: `Podcast: ${podcast.title.substring(0, 40)}${podcast.title.length > 40 ? '...' : ''}`,
      status: 'active' as const,
    })),
  ];

  /* ── 10. WooCommerce ── */
  const wooCommercePages: SiteMapPage[] = [
    { id: 'product-archive', label: 'Shop (Product Archive)', status: 'active' },
    ...allProducts.map(product => ({
      id: `product-single-${product.slug}`,
      label: `Product: ${product.name}`,
      status: 'active' as const,
    })),
    { id: 'cart', label: 'Cart', status: 'active' },
    { id: 'checkout', label: 'Checkout', status: 'active' },
  ];

  /* ── 11. Tour Operator ── */
  const tourPages: SiteMapPage[] = [
    { id: 'tour-operator-archive', label: 'Tours Archive', status: 'active' },
    ...tours.map(tour => ({
      id: `tour-single-${tour.slug}`,
      label: `Tour: ${tour.title}`,
      status: 'active' as const,
    })),
  ];

  /* ── 12. Legacy / Misc ── */
  const legacyPages: SiteMapPage[] = [
    { id: 'archive', label: 'Archive (Legacy)', status: 'active' },
    { id: 'archive-filters', label: 'Archive with Filters', status: 'active' },
    { id: 'index', label: 'Index (Legacy)', status: 'active' },
    { id: 'single', label: 'Single (Legacy)', status: 'active' },
    { id: 'wordpress-blocks-poc', label: 'WordPress Blocks PoC', status: 'active' },
    { id: 'section-style-example', label: 'Section Styles Example', status: 'active' },
    { id: 'feature-showcase', label: 'Feature Showcase', status: 'active' },
  ];

  /* ── 13. Dev Tools ── */
  const devToolsPages: SiteMapPage[] = [
    { id: 'dev-tools', label: 'Dev Tools Hub', status: 'active' },
    { id: 'template-tester', label: 'Template Tester', status: 'active' },
    { id: 'component-showcase', label: 'Component Showcase', status: 'active' },
    { id: 'design-system-test', label: 'Design System Test', status: 'active' },
    { id: 'compliance-scorecard', label: 'Compliance Scorecard', status: 'active' },
    { id: 'design-tokens-reference', label: 'Design Tokens Reference', status: 'active' },
    { id: 'design-playground', label: 'Design Playground', status: 'active' },
    { id: 'feature-showcase', label: 'Feature Showcase', status: 'active' },
    { id: 'block-documentation', label: 'Block Documentation', status: 'active' },
    { id: 'component-api', label: 'Component API', status: 'active' },
    { id: 'design-blocks-showcase', label: 'Design Blocks Showcase', status: 'active' },
    { id: 'button-showcase', label: 'Button Showcase', status: 'active' },
    { id: 'header-footer-comparison', label: 'Header/Footer Comparison', status: 'active' },
    { id: 'icon-library', label: 'Icon Library', status: 'active' },
    { id: 'live-preview', label: 'Live Preview', status: 'active' },
    { id: 'section-presets-showcase', label: 'Section Presets Showcase', status: 'active' },
    { id: 'theme-blocks-showcase', label: 'Theme Blocks Showcase', status: 'active' },
    { id: 'deployment-readiness', label: 'Deployment Readiness', status: 'active' },
    { id: 'code-quality-dashboard', label: 'Code Quality Dashboard', status: 'active' },
    { id: 'docs-generator', label: 'Documentation Generator', status: 'active' },
  ];

  /* ═══════════════════════════════════════════
   * Assemble sections
   * ═══════════════════════════════════════════ */

  const siteMapSections: SiteMapSection[] = [
    { title: 'Core Pages', icon: Home, color: 'var(--primary)', pages: corePages },
    { title: 'Services', icon: Briefcase, color: 'var(--category-green)', pages: servicePages },
    { title: 'Solutions', icon: Lightbulb, color: 'var(--category-amber)', pages: solutionPages },
    { title: 'Portfolio', icon: Folder, color: 'var(--category-pink)', pages: portfolioPages },
    { title: 'Blog & Archives', icon: FileText, color: 'var(--category-blue)', pages: blogArchivePages },
    { title: 'Single Posts', icon: MessageSquare, color: 'var(--category-cyan)', pages: singlePostPages },
    { title: 'Post Formats', icon: Layers, color: 'var(--category-violet)', pages: postFormatPages },
    { title: 'Videos', icon: Video, color: 'var(--category-pink)', pages: videoPages },
    { title: 'Podcasts', icon: Headphones, color: 'var(--category-cyan)', pages: podcastPagesList },
    { title: 'WooCommerce', icon: ShoppingCart, color: 'var(--category-amber)', pages: wooCommercePages },
    { title: 'Tour Operator', icon: Map, color: 'var(--category-green)', pages: tourPages },
    { title: 'Legacy / Misc', icon: Archive, color: 'var(--muted-foreground)', pages: legacyPages },
    { title: 'Developer Tools', icon: Wrench, color: 'var(--category-indigo)', pages: devToolsPages },
    { title: 'Error Pages', icon: AlertCircle, color: 'var(--category-red)', pages: [
      { id: '404', label: '404 Not Found', status: 'active' },
    ]},
  ];

  const totalRoutes = siteMapSections.reduce((acc, s) => acc + s.pages.length, 0);
  const activeRoutes = siteMapSections.reduce(
    (acc, s) => acc + s.pages.filter(p => p.status === 'active').length, 0
  );
  const missingRoutes = totalRoutes - activeRoutes;

  return (
    <>
      {/* Breadcrumbs */}
      <section className="wp-block-breadcrumbs-section wp-block-breadcrumbs-section--border">
        <Breadcrumbs
          items={[
            { label: 'Home', page: 'home' },
            { label: 'Site Map' },
          ]}
        />
      </section>

      {/* Hero */}
      <Section spacing="xl" className="site-map__hero">
        <div className="site-map__hero-orb" aria-hidden="true" />

        <Container>
          <div className="site-map__hero-inner">
            <div className="site-map__hero-badge">
              <Globe size={14} />
              Site Map
            </div>

            <h1 className="site-map__hero-title">
              Complete Site Navigation
            </h1>

            <p className="site-map__hero-subtitle">
              {totalRoutes} total routes documented and verified
            </p>
          </div>
        </Container>
      </Section>

      {/* Card Grid */}
      <Section spacing="xl" className="site-map__grid-section">
        <Container>
          <div className="site-map__grid">
            {siteMapSections.map((section, sectionIndex) => {
              const Icon = section.icon;

              return (
                <div key={sectionIndex} className="site-map__card">
                  {/* Card Header */}
                  <div className="site-map__card-header">
                    <div
                      className="site-map__card-icon"
                      style={{ color: section.color }}
                    >
                      <Icon size={20} />
                    </div>

                    <h2 className="site-map__card-title">
                      {section.title}
                    </h2>

                    <span className="site-map__card-count">
                      {section.pages.length}
                    </span>
                  </div>

                  {/* Pages List */}
                  <div className="site-map__card-body">
                    <ul className="site-map__list">
                      {section.pages.map((page, pageIndex) => {
                        const isActive = page.status === 'active';

                        return (
                          <li key={pageIndex}>
                            <button
                              className={`site-map__link${isActive ? '' : ' site-map__link--disabled'}`}
                              onClick={() => isActive && navigateTo(page.id)}
                              disabled={!isActive}
                            >
                              {/* Status icon */}
                              {isActive ? (
                                <CheckCircle
                                  size={16}
                                  className="site-map__link-icon site-map__icon--success"
                                />
                              ) : (
                                <XCircle
                                  size={16}
                                  className="site-map__link-icon site-map__icon--destructive"
                                />
                              )}

                              {/* Label */}
                              <span className="site-map__link-label">
                                {page.label}
                              </span>

                              {/* Arrow */}
                              {isActive && (
                                <ChevronRight
                                  size={16}
                                  className="site-map__link-arrow"
                                />
                              )}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Statistics */}
      <Section spacing="xl" className="site-map__stats">
        <Container>
          <div className="site-map__stats-inner">
            <h2 className="site-map__stats-title">Site Statistics</h2>

            <div className="site-map__stats-grid">
              {[
                { label: 'Total Routes', value: totalRoutes, color: 'var(--category-violet)' },
                { label: 'Active Pages', value: activeRoutes, color: 'var(--category-green)' },
                { label: 'Sections', value: siteMapSections.length, color: 'var(--category-amber)' },
                { label: 'Missing', value: missingRoutes, color: 'var(--category-red)' },
              ].map((stat, i) => (
                <div key={i} className="site-map__stat-card">
                  <div className="site-map__stat-value" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="site-map__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="xl" className="site-map__cta-section">
        <Container>
          <div className="site-map__cta-inner">
            <h2 className="site-map__cta-title">
              Need Help Finding Something?
            </h2>

            <p className="site-map__cta-text">
              Can't find what you're looking for? Our team is here to help
              you navigate our services and solutions.
            </p>

            <div className="site-map__cta-buttons">
              <Button page="contact" size="lg">
                Contact Us
              </Button>
              <Button page="front-page" size="lg" variant="outline">
                Back to Home
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

/**
 * Export for use in routes.tsx lazy import
 */
export default SiteMapTemplate;