/**
 * Template Tester — WordPress Archetype Testing Interface
 * 
 * Complete testing interface for all WordPress templates and page archetypes.
 * Organized by WordPress template hierarchy and archetype patterns.
 * 
 * **WordPress Page Archetypes:**
 * 1. Content Hub (Archive) — Archive listings with filters
 * 2. Taxonomy Archive — Category/tag archives
 * 3. Single Detail — Single post/page with rich content
 * 4. Editorial Listing — Blog index with sorting
 * 5. Utility Page — Contact, FAQ, 404, etc.
 * 
 * **Design System:**
 * - 100% CSS variables from theme.css
 * - Lexend for headings/body, Manrope for small text
 * - WCAG 2.1 AA compliant
 * - Responsive grid layout
 * 
 * @see {@link /guidelines/templates/overview-templates.md}
 */

import { Button } from '../blocks/design/Buttons';
import { useNavigation } from '../../contexts/NavigationContext';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { useState } from 'react';
import { 
  Home,
  Briefcase,
  ShoppingCart,
  Layers,
  BookOpen,
  Info,
  Server,
  Users,
  FileText,
  AlertCircle,
  Code,
  Search,
  Calendar,
  User,
  Tag,
  FolderOpen,
  Star,
  TrendingUp,
  MessageSquare,
  Award,
  CheckCircle,
  ArrowRight,
  Filter,
  Grid3x3,
  MapPin
} from 'lucide-react';
import '@/styles/templates/template-tester.css';

/**
 * WordPress Template Categories
 * Organized by template hierarchy and function
 */
const templateCategories = [
  {
    id: 'archetypes',
    title: 'WordPress Page Archetypes',
    description: 'Core template patterns that every WordPress site uses',
    icon: Code,
    color: 'var(--primary)',
    templates: [
      {
        id: 'content-hub',
        name: 'Content Hub (Archive)',
        archetype: 'Archive',
        description: 'Portfolio, services, solutions archives with filters and cards',
        icon: FolderOpen,
        pages: [
          { label: 'Portfolio Archive', page: 'portfolio-archive', slug: '/portfolio', template: 'archive.html' },
          { label: 'Archive with Filters', page: 'archive-filters', slug: '/archive', template: 'archive.html' },
        ]
      },
      {
        id: 'taxonomy-archive',
        name: 'Taxonomy Archive',
        archetype: 'Taxonomy',
        description: 'Category, tag, author, date archives',
        icon: Tag,
        pages: [
          { label: 'Category: News', page: 'category-news', slug: '/blog/category/news', template: 'category.html' },
          { label: 'Tag: Gutenberg', page: 'tag-gutenberg', slug: '/blog/tag/gutenberg', template: 'tag.html' },
          { label: 'Author: Editor', page: 'author-editor', slug: '/blog/author/editor', template: 'author.html' },
          { label: 'Date: 2024', page: 'date-2024', slug: '/blog/2024', template: 'date.html' },
        ]
      },
      {
        id: 'single-detail',
        name: 'Single Detail',
        archetype: 'Single',
        description: 'Single posts, portfolio pieces with rich content',
        icon: FileText,
        pages: [
          { label: 'Single Post', page: 'single', slug: '/blog/getting-started-with-block-themes', template: 'single.html' },
          { label: 'Single Post (Longform)', page: 'single-post', slug: '/blog/longform-post', template: 'single.html' },
          { label: 'Portfolio Single: EcoMarket', page: 'portfolio-single-eco-market-woocommerce', slug: '/portfolio/eco-market-woocommerce', template: 'single-portfolio.html' },
        ]
      },
      {
        id: 'editorial-listing',
        name: 'Editorial Listing',
        archetype: 'Index',
        description: 'Blog index with sorting and category filters',
        icon: BookOpen,
        pages: [
          { label: 'Blog Index', page: 'blog', slug: '/blog', template: 'index.html' },
        ]
      },
      {
        id: 'utility-page',
        name: 'Utility Page',
        archetype: 'Page',
        description: 'Contact, FAQ, search, error pages',
        icon: AlertCircle,
        pages: [
          { label: 'Contact Page', page: 'contact', slug: '/contact', template: 'page.html' },
          { label: 'FAQs', page: 'faq', slug: '/resources/faqs', template: 'page.html' },
          { label: 'Search Results', page: 'search-page', slug: '/search', template: 'search.html' },
          { label: '404 Not Found', page: '404', slug: '/404', template: '404.html' },
        ]
      },
    ]
  },
  {
    id: 'homepage',
    title: 'Homepage',
    description: 'Front page template (front-page.html)',
    icon: Home,
    color: 'var(--primary)',
    pages: [
      { label: 'Front Page', page: 'front-page', slug: '/', template: 'front-page.html' },
    ]
  },
  {
    id: 'services',
    title: 'Services Pages',
    description: 'Service offerings and capabilities',
    icon: Briefcase,
    color: 'var(--accent)',
    pages: [
      { label: 'Services Overview', page: 'services', slug: '/services', template: 'page-services.html' },
      { label: 'Development Service', page: 'service-development', slug: '/services/development', template: 'page-service.html' },
      { label: 'Design Service', page: 'service-design', slug: '/services/design', template: 'page-service.html' },
      { label: 'Discovery Service', page: 'service-discovery', slug: '/services/discovery', template: 'page-service.html' },
      { label: 'Content Service', page: 'service-content', slug: '/services/content', template: 'page-service.html' },
      { label: 'Security Service', page: 'service-security', slug: '/services/security', template: 'page-service.html' },
      { label: 'Migrations Service', page: 'service-migrations', slug: '/services/migrations', template: 'page-service.html' },
    ]
  },
  {
    id: 'solutions',
    title: 'Solutions Pages',
    description: 'Solution-based offerings',
    icon: ShoppingCart,
    color: 'var(--secondary)',
    pages: [
      { label: 'Solutions Overview', page: 'solutions', slug: '/solutions', template: 'page-solutions.html' },
      { label: 'WordPress Solutions', page: 'solution-wordpress', slug: '/solutions/wordpress', template: 'page-solution.html' },
      { label: 'WooCommerce Solutions', page: 'solution-woocommerce', slug: '/solutions/woocommerce', template: 'page-solution.html' },
      { label: 'LSX Solutions', page: 'solution-lsx', slug: '/solutions/lsx', template: 'page-solution.html' },
    ]
  },
  {
    id: 'conversion',
    title: 'Conversion Pages',
    description: 'High-value conversion and decision pages',
    icon: TrendingUp,
    color: 'var(--primary)',
    pages: [
      { label: 'Pricing', page: 'pricing', slug: '/pricing', template: 'page-pricing.html' },
      { label: 'Why Choose Us', page: 'why-choose-us', slug: '/why-choose-us', template: 'page.html' },
      { label: 'Guarantees', page: 'guarantees', slug: '/guarantees', template: 'page.html' },
      { label: 'ROI Calculator', page: 'roi-calculator', slug: '/roi-calculator', template: 'page-roi-calculator.html' },
      { label: 'Testimonials', page: 'testimonials', slug: '/testimonials', template: 'page-testimonials.html' },
    ]
  },
  {
    id: 'about',
    title: 'About Pages',
    description: 'Company information and team',
    icon: Info,
    color: 'var(--accent)',
    pages: [
      { label: 'About Us', page: 'about', slug: '/about', template: 'page-about.html' },
      { label: 'Our Team', page: 'team', slug: '/about/team', template: 'page-team.html' },
      { label: 'Our Process', page: 'about-process', slug: '/about/process', template: 'page.html' },
      { label: 'Culture & Values', page: 'about-culture', slug: '/about/culture', template: 'page.html' },
      { label: 'Company History', page: 'about-history', slug: '/about/history', template: 'page.html' },
    ]
  },
  {
    id: 'hosting',
    title: 'Hosting Pages',
    description: 'Hosting plans and features',
    icon: Server,
    color: 'var(--secondary)',
    pages: [
      { label: 'Hosting Overview', page: 'hosting', slug: '/hosting', template: 'page-hosting.html' },
    ]
  },
  {
    id: 'post-formats',
    title: 'Post Formats',
    description: 'WordPress post format archives and single views',
    icon: Layers,
    color: 'var(--accent)',
    pages: [
      { label: 'Audio Archive', page: 'audio-archive', slug: '/audio-archive', template: 'archive-audio.html' },
      { label: 'Video Archive', page: 'video-archive', slug: '/video-archive', template: 'archive-video.html' },
      { label: 'Gallery Archive', page: 'gallery-archive', slug: '/gallery-archive', template: 'archive-gallery.html' },
      { label: 'Aside Stream', page: 'aside-stream', slug: '/aside-stream', template: 'archive-aside.html' },
      { label: 'Single Audio', page: 'audio-single', slug: '/audio-single', template: 'single-audio.html' },
      { label: 'Single Video', page: 'video-single', slug: '/video-single', template: 'single-video.html' },
      { label: 'Single Gallery', page: 'gallery-single', slug: '/gallery-single', template: 'single-gallery.html' },
      { label: 'Image Archive', page: 'image-archive', slug: '/image-archive', template: 'archive-image.html' },
      { label: 'Quote Archive', page: 'quote-archive', slug: '/quote-archive', template: 'archive-quote.html' },
      { label: 'Link Archive', page: 'link-archive', slug: '/link-archive', template: 'archive-link.html' },
      { label: 'Chat Archive', page: 'chat-archive', slug: '/chat-archive', template: 'archive-chat.html' },
      { label: 'Status Archive', page: 'status-archive', slug: '/status-archive', template: 'archive-status.html' },
      { label: 'Standard Archive', page: 'standard-archive', slug: '/standard-archive', template: 'archive.html' },
      { label: 'Audio Archive', page: 'audio-archive', slug: '/audio-archive', template: 'archive-audio.html' },
      { label: 'Video Archive', page: 'video-archive', slug: '/video-archive', template: 'archive-video.html' },
      { label: 'Gallery Archive', page: 'gallery-archive', slug: '/gallery-archive', template: 'archive-gallery.html' },
      { label: 'Image Archive', page: 'image-archive', slug: '/image-archive', template: 'archive-image.html' },
      { label: 'Aside Archive', page: 'aside-archive', slug: '/aside-archive', template: 'archive-aside.html' },
      { label: 'Single Chat', page: 'chat-single', slug: '/chat-single', template: 'single-chat.html' },
      { label: 'Single Status', page: 'status-single', slug: '/status-single', template: 'single-status.html' },
      { label: 'Single Standard', page: 'standard-single', slug: '/standard-single', template: 'single.html' },
      { label: 'Single Audio', page: 'audio-single', slug: '/audio-single', template: 'single-audio.html' },
      { label: 'Single Video', page: 'video-single', slug: '/video-single', template: 'single-video.html' },
      { label: 'Single Gallery', page: 'gallery-single', slug: '/gallery-single', template: 'single-gallery.html' },
      { label: 'Single Image', page: 'image-single', slug: '/image-single', template: 'single-image.html' },
      { label: 'Single Quote', page: 'quote-single', slug: '/quote-single', template: 'single-quote.html' },
      { label: 'Single Link', page: 'link-single', slug: '/link-single', template: 'single-link.html' },
      { label: 'Single Aside', page: 'aside-single', slug: '/aside-single', template: 'single-aside.html' },
    ]
  },
  {
    id: 'woocommerce',
    title: 'WooCommerce Store',
    description: 'E-commerce templates using mock product data',
    icon: ShoppingCart,
    color: 'var(--primary)',
    pages: [
      { label: 'Product Archive', page: 'product-archive', slug: '/shop', template: 'archive-product.html' },
      { label: 'Simple Product', page: 'product-single-lsx-theme-pro', slug: '/product/lsx-theme-pro', template: 'single-product.html' },
      { label: 'Subscription Product', page: 'product-single-agency-maintenance', slug: '/product/agency-maintenance', template: 'single-product.html' },
      { label: 'Bundle Product', page: 'product-single-developer-kit', slug: '/product/developer-kit', template: 'single-product.html' },
      { label: 'Composite Product', page: 'product-single-build-your-agency-bundle', slug: '/product/build-agency-bundle', template: 'single-product.html' },
    ]
  },
  {
    id: 'tour-operator',
    title: 'Tour Operator',
    description: 'Travel and booking templates',
    icon: MapPin,
    color: 'var(--secondary)',
    pages: [
      { label: 'Tour Operator Archive', page: 'tour-operator-archive', slug: '/tours', template: 'archive-tour.html' },
      { label: 'Single Tour', page: 'tour-single', slug: '/tours/garden-route-adventure', template: 'single-tour.html' },
    ]
  },
  {
    id: 'system',
    title: 'System Pages',
    description: 'Design system and component testing',
    icon: Code,
    color: 'var(--muted-foreground)',
    pages: [
      { label: 'Style Guide', page: 'style-guide', slug: '/style-guide', template: 'page.html' },
      { label: 'Feature Showcase', page: 'feature-showcase', slug: '/feature-showcase', template: 'page.html' },
      { label: 'Design System Test', page: 'design-system-test', slug: '/design-system-test', template: 'page.html' },
      { label: 'Section Styles Example', page: 'section-style-example', slug: '/section-style-example', template: 'page.html' },
    ]
  },
  {
    id: 'dev-tools',
    title: 'Developer Tools',
    description: 'Design system testing and documentation tools (15 tools)',
    icon: Code,
    color: 'var(--accent)',
    pages: [
      { label: 'Dev Tools Hub', page: 'dev-tools', slug: '/dev-tools', template: 'page.html' },
      { label: 'Template Tester', page: 'dev-tools/template-tester', slug: '/dev-tools/template-tester', template: 'page.html' },
      { label: 'Compliance Scorecard', page: 'dev-tools/compliance-scorecard', slug: '/dev-tools/compliance-scorecard', template: 'page.html' },
      { label: 'Component Showcase', page: 'dev-tools/component-showcase', slug: '/dev-tools/component-showcase', template: 'page.html' },
      { label: 'Feature Showcase', page: 'dev-tools/feature-showcase', slug: '/dev-tools/feature-showcase', template: 'page.html' },
      { label: 'Live Preview', page: 'dev-tools/live-preview', slug: '/dev-tools/live-preview', template: 'page.html' },
      { label: 'Design System Test', page: 'dev-tools/design-system-test', slug: '/dev-tools/design-system-test', template: 'page.html' },
      { label: 'Design Blocks Showcase', page: 'dev-tools/design-blocks-showcase', slug: '/dev-tools/design-blocks-showcase', template: 'page.html' },
      { label: 'Theme Blocks Showcase', page: 'dev-tools/theme-blocks-showcase', slug: '/dev-tools/theme-blocks-showcase', template: 'page.html' },
      { label: 'Button Showcase', page: 'dev-tools/button-showcase', slug: '/dev-tools/button-showcase', template: 'page.html' },
      { label: 'Section Presets Showcase', page: 'dev-tools/section-presets-showcase', slug: '/dev-tools/section-presets-showcase', template: 'page.html' },
      { label: 'Header/Footer Comparison', page: 'dev-tools/header-footer-comparison', slug: '/dev-tools/header-footer-comparison', template: 'page.html' },
      { label: 'Icon Library', page: 'dev-tools/icon-library', slug: '/dev-tools/icon-library', template: 'page.html' },
      { label: 'Style Guide', page: 'dev-tools/style-guide', slug: '/dev-tools/style-guide', template: 'page.html' },
      { label: 'Block Documentation', page: 'dev-tools/block-documentation', slug: '/dev-tools/block-documentation', template: 'page.html' },
      { label: 'Component API', page: 'dev-tools/component-api', slug: '/dev-tools/component-api', template: 'page.html' },
    ]
  },
];

export function TemplateTester() {
  const { navigateTo } = useNavigation();
  const [sortBy, setSortBy] = useState<'category' | 'type'>('category');

  // Calculate stats
  const totalTemplates = templateCategories.reduce((acc, cat) => {
    if (cat.templates) {
      return acc + cat.templates.reduce((sum, t) => sum + t.pages.length, 0);
    }
    return acc + (cat.pages?.length || 0);
  }, 0);

  const archetypes = templateCategories.find(c => c.id === 'archetypes')?.templates?.length || 0;
  const categories = templateCategories.length;

  // Group templates by type when sorting by type
  const getTemplatesByType = () => {
    const byType: { [key: string]: any[] } = {};
    
    templateCategories.forEach(category => {
      if (category.templates) {
        // Archetype templates
        category.templates.forEach(template => {
          const type = template.archetype;
          if (!byType[type]) byType[type] = [];
          template.pages.forEach(page => {
            byType[type].push({
              ...page,
              categoryTitle: category.title,
              archetypeName: template.name
            });
          });
        });
      } else if (category.pages) {
        // Regular pages
        const type = category.title;
        if (!byType[type]) byType[type] = [];
        category.pages.forEach(page => {
          byType[type].push({
            ...page,
            categoryTitle: category.title
          });
        });
      }
    });

    return byType;
  };

  const templatesByType = sortBy === 'type' ? getTemplatesByType() : {};

  return (
    <>
        {/* Breadcrumbs */}
        <section className="wp-block-breadcrumbs-section">
            <Breadcrumbs
              items={[
                { label: 'Home', page: 'home' },
                { label: 'Developer Tools', page: 'dev-tools' },
                { label: 'Template Tester' }
              ]}
            />
        </section>

        {/* Hero Header */}
        <Section background="default" spacing="lg">
          <Container>
            <div className="wp-max-w-4xl wp-text-center wp-mx-auto">
              <h1 className="template-tester__hero-title">
                WordPress Template Tester
              </h1>
              
              <p className="template-tester__hero-subtitle">
                Test all WordPress templates, page archetypes, and design patterns in one place
              </p>

              {/* Stats Grid */}
              <div className="wp-grid-3-cols template-tester__stats-grid">
                <div className="template-tester__stat-card">
                  <div className="template-tester__stat-value">
                    {totalTemplates}
                  </div>
                  <div className="template-tester__stat-label">
                    Total Templates
                  </div>
                </div>

                <div className="template-tester__stat-card">
                  <div className="template-tester__stat-value">
                    {archetypes}
                  </div>
                  <div className="template-tester__stat-label">
                    Page Archetypes
                  </div>
                </div>

                <div className="template-tester__stat-card">
                  <div className="template-tester__stat-value">
                    {categories}
                  </div>
                  <div className="template-tester__stat-label">
                    Categories
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Toolbar: Sort & Component Showcase */}
        <Section background="default" spacing="sm">
          <Container>
            <div className="template-tester__toolbar">
              {/* Sort Controls */}
              <div className="template-tester__sort-controls">
                <Filter size={20} style={{ color: 'var(--muted-foreground)' }} />
                <span className="template-tester__sort-label">
                  Sort by:
                </span>
                <div className="template-tester__sort-buttons">
                  <button
                    onClick={() => setSortBy('category')}
                    className={`template-tester__sort-button ${sortBy === 'category' ? 'template-tester__sort-button--active' : ''}`}
                  >
                    Category
                  </button>
                  <button
                    onClick={() => setSortBy('type')}
                    className={`template-tester__sort-button ${sortBy === 'type' ? 'template-tester__sort-button--active' : ''}`}
                  >
                    Type
                  </button>
                </div>
              </div>

              {/* Component Showcase Link */}
              <Button
                variant="outline"
                size="md"
                page="component-showcase"
                icon={<Grid3x3 size={20} />}
                aria-label="View Component Showcase"
              >
                Component Showcase
              </Button>
            </div>
          </Container>
        </Section>

        {/* Template Categories */}
        {sortBy === 'category' ? (
          templateCategories.map((category) => (
            <Section key={category.id} background="default" spacing="lg">
              <Container>
                {/* Category Header */}
                <div className="template-tester__category-header">
                  <div
                    className="template-tester__category-icon"
                    style={{ backgroundColor: category.color }}
                  >
                    <category.icon size={24} />
                  </div>
                  <div>
                    <h2 className="template-tester__category-title">
                      {category.title}
                    </h2>
                    <p className="template-tester__category-desc">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Archetypes (if applicable) */}
                {category.templates ? (
                  <div className="template-tester__archetype-list">
                    {category.templates.map((archetype) => (
                      <div key={archetype.id}>
                        {/* Archetype Header */}
                        <div className="template-tester__archetype-card">
                          <div className="template-tester__archetype-inner">
                            <archetype.icon
                              size={20}
                              className="template-tester__archetype-icon"
                            />
                            <div>
                              <div className="template-tester__archetype-title-row">
                                <h3 className="template-tester__archetype-title">
                                  {archetype.name}
                                </h3>
                                <span className="template-tester__archetype-badge">
                                  {archetype.archetype}
                                </span>
                              </div>
                              <p className="template-tester__archetype-desc">
                                {archetype.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Archetype Pages Grid */}
                        <div className="wp-grid-3-cols template-tester__pages-grid">
                          {archetype.pages.map((page) => (
                            <button
                              key={page.page}
                              onClick={() => navigateTo(page.page)}
                              className="template-tester__page-button"
                            >
                              <div className="template-tester__page-button-header">
                                <span className="template-tester__page-label">
                                  {page.label}
                                </span>
                                <ArrowRight size={16} style={{ color: 'var(--primary)' }} />
                              </div>
                              <span className="template-tester__page-slug">
                                {page.slug}
                              </span>
                              <span className="template-tester__page-template">
                                {page.template}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Regular Pages Grid */
                  <div className="wp-grid-3-cols template-tester__pages-grid">
                    {category.pages?.map((page) => (
                      <button
                        key={page.page}
                        onClick={() => navigateTo(page.page)}
                        className="template-tester__page-button"
                      >
                        <div className="template-tester__page-button-header">
                          <span className="template-tester__page-label">
                            {page.label}
                          </span>
                          <ArrowRight size={16} style={{ color: 'var(--primary)' }} />
                        </div>
                        <span className="template-tester__page-slug">
                          {page.slug}
                        </span>
                        <span className="template-tester__page-template">
                          {page.template}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </Container>
            </Section>
          ))
        ) : (
          // Sort by type
          Object.keys(templatesByType).map(type => (
            <Section key={type} background="default" spacing="lg">
              <Container>
                {/* Category Header */}
                <div className="template-tester__category-header">
                  <div
                    className="template-tester__category-icon"
                    style={{ backgroundColor: 'var(--primary)' }}
                  >
                    <Code size={24} />
                  </div>
                  <div>
                    <h2 className="template-tester__category-title">
                      {type}
                    </h2>
                    <p className="template-tester__category-desc">
                      Template type
                    </p>
                  </div>
                </div>

                {/* Archetype Pages Grid */}
                <div className="wp-grid-3-cols template-tester__pages-grid">
                  {templatesByType[type].map((page) => (
                    <button
                      key={page.page}
                      onClick={() => navigateTo(page.page)}
                      className="template-tester__page-button"
                    >
                      <div className="template-tester__page-button-header">
                        <span className="template-tester__page-label">
                          {page.label}
                        </span>
                        <ArrowRight size={16} style={{ color: 'var(--primary)' }} />
                      </div>
                      <span className="template-tester__page-slug">
                        {page.slug}
                      </span>
                      <span className="template-tester__page-template">
                        {page.template}
                      </span>
                    </button>
                  ))}
                </div>
              </Container>
            </Section>
          ))
        )}

        {/* Footer Note */}
        <Section background="default" spacing="lg">
          <Container>
            <div className="template-tester__footer-card">
              <p className="template-tester__footer-text">
                All templates use 100% CSS variables from <code className="template-tester__code">theme.css</code> • Lexend/Manrope fonts • WCAG 2.1 AA compliant • WordPress FSE compatible
              </p>
            </div>
          </Container>
        </Section>
    </>
  );
}