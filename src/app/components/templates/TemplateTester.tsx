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

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';
import { useNavigation } from '../../contexts/NavigationContext';
import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { Breadcrumbs } from '../common/Breadcrumbs';
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
  Grid3x3
} from 'lucide-react';

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
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)'
      }}
    >
      {/* Skip Link for Accessibility */}
      <SkipLink targetId="main-content" />

      {/* Site Header */}
      <SiteHeader />

      {/* Main Content */}
      <main
        id="main-content"
        role="main"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Hero Header */}
        <Section variant="default" spacing="50">
          <Container>
            {/* Breadcrumbs */}
            <div style={{ marginBottom: 'var(--spacing-8)' }}>
              <Breadcrumbs
                items={[
                  { label: 'Home', page: 'home' },
                  { label: 'Developer Tools', page: 'dev-tools' },
                  { label: 'Template Tester' }
                ]}
              />
            </div>
            
            <div className="wp-max-w-4xl" style={{ margin: '0 auto', textAlign: 'center' }}>
              <h1
                style={{
                  fontSize: 'var(--text-h1)',
                  fontFamily: 'var(--font-primary)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)',
                  margin: '0 0 16px 0',
                  lineHeight: 1.2
                }}
              >
                WordPress Template Tester
              </h1>
              
              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  fontFamily: 'var(--font-secondary)',
                  fontWeight: 'var(--font-weight-regular)',
                  color: 'var(--muted-foreground)',
                  margin: '0 0 48px 0',
                  lineHeight: 1.5
                }}
              >
                Test all WordPress templates, page archetypes, and design patterns in one place
              </p>

              {/* Stats Grid */}
              <div className="wp-grid-3-cols" style={{ gap: 'var(--spacing-8)', marginBottom: 'var(--spacing-12)' }}>
                <div
                  style={{
                    padding: '32px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      fontSize: 'var(--text-h1)',
                      fontFamily: 'var(--font-primary)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--primary)',
                      lineHeight: 1,
                      marginBottom: '12px'
                    }}
                  >
                    {totalTemplates}
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--text-base)',
                      fontFamily: 'var(--font-secondary)',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--muted-foreground)',
                      lineHeight: 1.5
                    }}
                  >
                    Total Templates
                  </div>
                </div>

                <div
                  style={{
                    padding: '32px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      fontSize: 'var(--text-h1)',
                      fontFamily: 'var(--font-primary)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--primary)',
                      lineHeight: 1,
                      marginBottom: '12px'
                    }}
                  >
                    {archetypes}
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--text-base)',
                      fontFamily: 'var(--font-secondary)',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--muted-foreground)',
                      lineHeight: 1.5
                    }}
                  >
                    Page Archetypes
                  </div>
                </div>

                <div
                  style={{
                    padding: '32px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      fontSize: 'var(--text-h1)',
                      fontFamily: 'var(--font-primary)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--primary)',
                      lineHeight: 1,
                      marginBottom: '12px'
                    }}
                  >
                    {categories}
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--text-base)',
                      fontFamily: 'var(--font-secondary)',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--muted-foreground)',
                      lineHeight: 1.5
                    }}
                  >
                    Categories
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Toolbar: Sort & Component Showcase */}
        <Section variant="default" spacing="30">
          <Container>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--spacing-4)' }}>
              {/* Sort Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
                <Filter size={20} style={{ color: 'var(--muted-foreground)' }} />
                <span
                  style={{
                    fontSize: 'var(--text-base)',
                    fontFamily: 'var(--font-secondary)',
                    fontWeight: 'var(--font-weight-regular)',
                    color: 'var(--foreground)'
                  }}
                >
                  Sort by:
                </span>
                <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
                  <button
                    onClick={() => setSortBy('category')}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: sortBy === 'category' ? 'var(--primary)' : 'var(--background)',
                      color: sortBy === 'category' ? 'var(--primary-foreground)' : 'var(--foreground)',
                      border: `1px solid ${sortBy === 'category' ? 'var(--primary)' : 'var(--border-soft)'}`,
                      borderRadius: 'var(--radius-lg)',
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (sortBy !== 'category') {
                        e.currentTarget.style.borderColor = 'var(--primary)';
                        e.currentTarget.style.backgroundColor = 'var(--card)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (sortBy !== 'category') {
                        e.currentTarget.style.borderColor = 'var(--border-soft)';
                        e.currentTarget.style.backgroundColor = 'var(--background)';
                      }
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.outline = '2px solid var(--ring)';
                      e.currentTarget.style.outlineOffset = '2px';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.outline = 'none';
                    }}
                  >
                    Category
                  </button>
                  <button
                    onClick={() => setSortBy('type')}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: sortBy === 'type' ? 'var(--primary)' : 'var(--background)',
                      color: sortBy === 'type' ? 'var(--primary-foreground)' : 'var(--foreground)',
                      border: `1px solid ${sortBy === 'type' ? 'var(--primary)' : 'var(--border-soft)'}`,
                      borderRadius: 'var(--radius-lg)',
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (sortBy !== 'type') {
                        e.currentTarget.style.borderColor = 'var(--primary)';
                        e.currentTarget.style.backgroundColor = 'var(--card)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (sortBy !== 'type') {
                        e.currentTarget.style.borderColor = 'var(--border-soft)';
                        e.currentTarget.style.backgroundColor = 'var(--background)';
                      }
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.outline = '2px solid var(--ring)';
                      e.currentTarget.style.outlineOffset = '2px';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.outline = 'none';
                    }}
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
            <Section key={category.id} variant="default" spacing="50">
              <Container>
                {/* Category Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-4)', marginBottom: 'var(--spacing-8)' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: category.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <category.icon
                      size={24}
                      style={{ color: 'var(--primary-foreground)' }}
                    />
                  </div>
                  <div>
                    <h2
                      style={{
                        fontSize: 'var(--text-h2)',
                        fontFamily: 'var(--font-primary)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--foreground)',
                        margin: '0 0 8px 0',
                        lineHeight: 1.25
                      }}
                    >
                      {category.title}
                    </h2>
                    <p
                      style={{
                        fontSize: 'var(--text-base)',
                        fontFamily: 'var(--font-secondary)',
                        fontWeight: 'var(--font-weight-regular)',
                        color: 'var(--muted-foreground)',
                        margin: 0,
                        lineHeight: 1.5
                      }}
                    >
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Archetypes (if applicable) */}
                {category.templates ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
                    {category.templates.map((archetype) => (
                      <div key={archetype.id}>
                        {/* Archetype Header */}
                        <div
                          style={{
                            padding: '20px 24px',
                            backgroundColor: 'var(--card)',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--border-soft)',
                            marginBottom: '16px'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-3)' }}>
                            <archetype.icon
                              size={20}
                              style={{
                                color: 'var(--primary)',
                                marginTop: '2px',
                                flexShrink: 0
                              }}
                            />
                            <div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', marginBottom: 'var(--spacing-2)' }}>
                                <h3
                                  style={{
                                    fontSize: 'var(--text-h4)',
                                    fontFamily: 'var(--font-primary)',
                                    fontWeight: 'var(--font-weight-medium)',
                                    color: 'var(--foreground)',
                                    margin: 0,
                                    lineHeight: 1.25
                                  }}
                                >
                                  {archetype.name}
                                </h3>
                                <span
                                  style={{
                                    fontSize: 'var(--text-small)',
                                    fontFamily: 'var(--font-secondary)',
                                    fontWeight: 'var(--font-weight-regular)',
                                    color: 'var(--muted-foreground)',
                                    padding: '4px 8px',
                                    backgroundColor: 'var(--background)',
                                    borderRadius: 'var(--radius)',
                                    border: '1px solid var(--border-soft)'
                                  }}
                                >
                                  {archetype.archetype}
                                </span>
                              </div>
                              <p
                                style={{
                                  fontSize: 'var(--text-base)',
                                  fontFamily: 'var(--font-secondary)',
                                  fontWeight: 'var(--font-weight-regular)',
                                  color: 'var(--muted-foreground)',
                                  margin: 0,
                                  lineHeight: 1.5
                                }}
                              >
                                {archetype.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Archetype Pages Grid */}
                        <div className="wp-grid-3-cols" style={{ gap: 'var(--spacing-4)' }}>
                          {archetype.pages.map((page) => (
                            <button
                              key={page.page}
                              onClick={() => navigateTo(page.page)}
                              style={{
                                padding: '16px 20px',
                                backgroundColor: 'var(--background)',
                                border: '1px solid var(--border-soft)',
                                borderRadius: 'var(--radius-lg)',
                                textAlign: 'left',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--card)';
                                e.currentTarget.style.borderColor = 'var(--primary)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--background)';
                                e.currentTarget.style.borderColor = 'var(--border-soft)';
                                e.currentTarget.style.transform = 'translateY(0)';
                              }}
                              onFocus={(e) => {
                                e.currentTarget.style.outline = '2px solid var(--ring)';
                                e.currentTarget.style.outlineOffset = '2px';
                              }}
                              onBlur={(e) => {
                                e.currentTarget.style.outline = 'none';
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span
                                  style={{
                                    fontSize: 'var(--text-base)',
                                    fontFamily: 'var(--font-primary)',
                                    fontWeight: 'var(--font-weight-medium)',
                                    color: 'var(--foreground)',
                                    lineHeight: 1.5
                                  }}
                                >
                                  {page.label}
                                </span>
                                <ArrowRight size={16} style={{ color: 'var(--primary)' }} />
                              </div>
                              <span
                                style={{
                                  fontSize: 'var(--text-small)',
                                  fontFamily: 'var(--font-secondary)',
                                  fontWeight: 'var(--font-weight-regular)',
                                  color: 'var(--muted-foreground)',
                                  lineHeight: 1.5
                                }}
                              >
                                {page.slug}
                              </span>
                              <span
                                style={{
                                  fontSize: 'var(--text-small)',
                                  fontFamily: 'var(--font-secondary)',
                                  fontWeight: 'var(--font-weight-regular)',
                                  color: 'var(--primary)',
                                  lineHeight: 1.5
                                }}
                              >
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
                  <div className="wp-grid-3-cols" style={{ gap: 'var(--spacing-4)' }}>
                    {category.pages?.map((page) => (
                      <button
                        key={page.page}
                        onClick={() => navigateTo(page.page)}
                        style={{
                          padding: '16px 20px',
                          backgroundColor: 'var(--background)',
                          border: '1px solid var(--border-soft)',
                          borderRadius: 'var(--radius-lg)',
                          textAlign: 'left',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--card)';
                          e.currentTarget.style.borderColor = 'var(--primary)';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--background)';
                          e.currentTarget.style.borderColor = 'var(--border-soft)';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.outline = '2px solid var(--ring)';
                          e.currentTarget.style.outlineOffset = '2px';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.outline = 'none';
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span
                            style={{
                              fontSize: 'var(--text-base)',
                              fontFamily: 'var(--font-primary)',
                              fontWeight: 'var(--font-weight-medium)',
                              color: 'var(--foreground)',
                              lineHeight: 1.5
                            }}
                          >
                            {page.label}
                          </span>
                          <ArrowRight size={16} style={{ color: 'var(--primary)' }} />
                        </div>
                        <span
                          style={{
                            fontSize: 'var(--text-small)',
                            fontFamily: 'var(--font-secondary)',
                            fontWeight: 'var(--font-weight-regular)',
                            color: 'var(--muted-foreground)',
                            lineHeight: 1.5
                          }}
                        >
                          {page.slug}
                        </span>
                        <span
                          style={{
                            fontSize: 'var(--text-small)',
                            fontFamily: 'var(--font-secondary)',
                            fontWeight: 'var(--font-weight-regular)',
                            color: 'var(--primary)',
                            lineHeight: 1.5
                          }}
                        >
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
            <Section key={type} variant="default" spacing="50">
              <Container>
                {/* Category Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-4)', marginBottom: 'var(--spacing-8)' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Code
                      size={24}
                      style={{ color: 'var(--primary-foreground)' }}
                    />
                  </div>
                  <div>
                    <h2
                      style={{
                        fontSize: 'var(--text-h2)',
                        fontFamily: 'var(--font-primary)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--foreground)',
                        margin: '0 0 8px 0',
                        lineHeight: 1.25
                      }}
                    >
                      {type}
                    </h2>
                    <p
                      style={{
                        fontSize: 'var(--text-base)',
                        fontFamily: 'var(--font-secondary)',
                        fontWeight: 'var(--font-weight-regular)',
                        color: 'var(--muted-foreground)',
                        margin: 0,
                        lineHeight: 1.5
                      }}
                    >
                      Template type
                    </p>
                  </div>
                </div>

                {/* Archetype Pages Grid */}
                <div className="wp-grid-3-cols" style={{ gap: 'var(--spacing-4)' }}>
                  {templatesByType[type].map((page) => (
                    <button
                      key={page.page}
                      onClick={() => navigateTo(page.page)}
                      style={{
                        padding: '16px 20px',
                        backgroundColor: 'var(--background)',
                        border: '1px solid var(--border-soft)',
                        borderRadius: 'var(--radius-lg)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--card)';
                        e.currentTarget.style.borderColor = 'var(--primary)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--background)';
                        e.currentTarget.style.borderColor = 'var(--border-soft)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.outline = '2px solid var(--ring)';
                        e.currentTarget.style.outlineOffset = '2px';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.outline = 'none';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span
                          style={{
                            fontSize: 'var(--text-base)',
                            fontFamily: 'var(--font-primary)',
                            fontWeight: 'var(--font-weight-medium)',
                            color: 'var(--foreground)',
                            lineHeight: 1.5
                          }}
                        >
                          {page.label}
                        </span>
                        <ArrowRight size={16} style={{ color: 'var(--primary)' }} />
                      </div>
                      <span
                        style={{
                          fontSize: 'var(--text-small)',
                          fontFamily: 'var(--font-secondary)',
                          fontWeight: 'var(--font-weight-regular)',
                          color: 'var(--muted-foreground)',
                          lineHeight: 1.5
                        }}
                      >
                        {page.slug}
                      </span>
                      <span
                        style={{
                          fontSize: 'var(--text-small)',
                          fontFamily: 'var(--font-secondary)',
                          fontWeight: 'var(--font-weight-regular)',
                          color: 'var(--primary)',
                          lineHeight: 1.5
                        }}
                      >
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
        <Section variant="canvas" spacing="50">
          <Container>
            <div
              style={{
                padding: '24px',
                backgroundColor: 'var(--card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-soft)',
                textAlign: 'center'
              }}
            >
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  fontFamily: 'var(--font-secondary)',
                  fontWeight: 'var(--font-weight-regular)',
                  color: 'var(--muted-foreground)',
                  margin: 0,
                  lineHeight: 1.5
                }}
              >
                All templates use 100% CSS variables from <code style={{ 
                  fontFamily: 'monospace',
                  fontSize: 'var(--text-small)',
                  padding: '2px 6px',
                  backgroundColor: 'var(--background)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border-soft)'
                }}>theme.css</code> • Lexend/Manrope fonts • WCAG 2.1 AA compliant • WordPress FSE compatible
              </p>
            </div>
          </Container>
        </Section>
      </main>

      {/* Site Footer */}
      <SiteFooter />
      <BackToTopButton />
    </div>
  );
}
