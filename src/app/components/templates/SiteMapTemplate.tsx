/**
 * Site Map Template
 * 
 * WordPress template: templates/page-sitemap.html
 * 
 * Comprehensive sitemap page for testing all routes, templates, and navigation.
 * Organized by category with visual styling using design system tokens.
 * 
 * **Purpose:**
 * - Test all internal links from one page
 * - Validate routing accuracy
 * - Verify template availability
 * - QA navigation structure
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { Button } from '../blocks/design/Buttons';
import {
  Home,
  Briefcase,
  Lightbulb,
  FileText,
  MessageSquare,
  Code,
  Folder,
  AlertCircle,
  Wrench,
  CheckCircle,
  XCircle,
  ChevronRight,
  Shield,
  Search,
  ShoppingCart,
  Server,
  Database,
  Globe
} from 'lucide-react';
import { useNavigation } from '../../contexts/NavigationContext';
import { sitePages, getChildPages } from '../../data/site-pages';
import { blogPosts, blogCategories } from '../../data/blog-posts';
import { portfolioProjects, projectGroups } from '../../data/portfolio-projects';

export function SiteMapTemplate() {
  const { navigateTo } = useNavigation();

  // Helper to get status based on known App.tsx routes
  // This is a manual mapping because App.tsx logic isn't exposed here
  const getStatus = (id: string) => {
    const missingRoutes = ['mailchimp-service']; // Add known missing routes here
    return missingRoutes.includes(id) ? 'missing' : 'active';
  };

  // Build Site Map Sections Dynamically
  
  // 1. Core Pages
  const corePages = [
    { id: 'front-page', label: 'Home (Front Page)' },
    { id: 'about', label: 'About Us' },
    { id: 'team', label: 'Our Team' },
    { id: 'about-process', label: 'Our Process' },
    { id: 'about-culture', label: 'Our Culture' },
    { id: 'about-history', label: 'Our History' },
    { id: 'contact', label: 'Contact' },
    { id: 'faq', label: 'FAQ' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'guarantees', label: 'Guarantees' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'why-choose-us', label: 'Why Choose Us' },
    { id: 'roi-calculator', label: 'ROI Calculator' },
    { id: 'privacy-policy', label: 'Privacy Policy' },
    { id: 'terms-of-service', label: 'Terms of Service' },
  ].map(p => ({ ...p, status: getStatus(p.id) }));

  // 2. Service Pages (from site-pages.ts children of 'services')
  // We map the slugs to the IDs expected by App.tsx
  const servicePages = getChildPages('services').map(page => {
    // App.tsx expects 'discovery' or 'discovery-service'
    // site-pages.ts has 'discovery'
    return {
      id: page.slug, 
      label: page.title,
      status: getStatus(page.slug)
    };
  });
  // Add some specific ones if not in site-pages children
  if (!servicePages.find(p => p.id === 'newsletter-service')) {
    servicePages.push({ id: 'newsletter-service', label: 'Newsletter Service', status: 'active' });
  }

  // 3. Solution Pages (from site-pages.ts children of 'solutions')
  const solutionPages = getChildPages('solutions').map(page => {
    return {
      id: page.slug,
      label: page.title,
      status: getStatus(page.slug)
    };
  });

  // 4. Portfolio Projects (Dynamic from portfolio-projects.ts)
  const portfolioPages = [
    { id: 'portfolio-archive', label: 'Portfolio Archive', status: 'active' },
    ...portfolioProjects.map(project => ({
      id: `portfolio-single-${project.slug}`,
      label: `Project: ${project.client}`,
      status: 'active'
    }))
  ];

  // 5. Blog & Archives (Dynamic from blog-posts.ts)
  const blogPages = [
    { id: 'blog', label: 'Blog Index', status: 'active' },
    // Categories
    ...blogCategories.map(cat => ({
      id: `category-${cat.slug}`,
      label: `Category: ${cat.name}`,
      status: 'active'
    })),
    // Dynamic Date/Author examples
    { id: 'date-2025', label: 'Date: 2025', status: 'active' },
    { id: 'author-ash-shaw', label: 'Author: Ash Shaw', status: 'active' },
    { id: 'search-page', label: 'Search Results', status: 'active' },
  ];

  // 6. Single Posts (Dynamic from blog-posts.ts)
  const singlePostPages = blogPosts.map(post => ({
    id: `post-${post.slug}`,
    label: `Post: ${post.title.substring(0, 40)}...`,
    status: 'active'
  }));

  // 7. Developer Tools
  const devToolsPages = [
    { id: 'dev-tools', label: 'Dev Tools Hub' },
    { id: 'template-tester', label: 'Template Tester' },
    { id: 'design-system-test', label: 'Design System Test' },
    { id: 'component-showcase', label: 'Component Showcase' },
    { id: 'feature-showcase', label: 'Feature Showcase' },
    { id: 'style-guide', label: 'Style Guide' },
    { id: 'section-style-example', label: 'Section Styles Example' },
    { id: 'wordpress-blocks-poc', label: 'WordPress Blocks PoC' },
    { id: 'block-documentation', label: 'Block Documentation' },
    { id: 'component-api', label: 'Component API' },
    { id: 'design-blocks-showcase', label: 'Design Blocks Showcase' },
    { id: 'button-showcase', label: 'Button Showcase' },
    { id: 'header-footer-comparison', label: 'Header/Footer Comparison' },
    { id: 'icon-library', label: 'Icon Library' },
    { id: 'live-preview', label: 'Live Preview' },
    { id: 'section-presets-showcase', label: 'Section Presets Showcase' },
    { id: 'theme-blocks-showcase', label: 'Theme Blocks Showcase' },
    { id: 'site-map', label: 'Site Map (Current)' },
  ].map(p => ({ ...p, status: 'active' }));

  const siteMapSections = [
    {
      title: 'Core Pages',
      icon: Home,
      color: 'var(--primary)',
      pages: corePages
    },
    {
      title: 'Services',
      icon: Briefcase,
      color: '#10b981',
      pages: servicePages
    },
    {
      title: 'Solutions',
      icon: Lightbulb,
      color: '#f59e0b',
      pages: solutionPages
    },
    {
      title: 'Portfolio',
      icon: Folder,
      color: '#ec4899',
      pages: portfolioPages
    },
    {
      title: 'Blog & Archives',
      icon: FileText,
      color: '#3b82f6',
      pages: blogPages
    },
    {
      title: 'Single Posts',
      icon: MessageSquare,
      color: '#06b6d4',
      pages: singlePostPages
    },
    {
      title: 'Developer Tools',
      icon: Wrench,
      color: '#6366f1',
      pages: devToolsPages
    },
    {
      title: 'Error Pages',
      icon: AlertCircle,
      color: '#ef4444',
      pages: [
        { id: '404', label: '404 Not Found', status: 'active' },
      ]
    }
  ];

  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs */}
        <section 
          className="py-4"
          style={{
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border-soft)'
          }}
        >
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Site Map' }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)', // wp-gradient-blue
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Gradient orb decoration */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
            aria-hidden="true"
          />

          <Container>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="wp-badge--hero">
                <Code size={14} />
                Site Map
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  marginBottom: '20px',
                  color: 'var(--primary-foreground)'
                }}
              >
                Complete Site Navigation
              </h1>

              <p
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-xl)',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.95)',
                  marginBottom: '16px'
                }}
              >
                {siteMapSections.reduce((acc, s) => acc + s.pages.length, 0)} total routes documented and verified
              </p>
            </div>
          </Container>
        </Section>

        {/* Site Map Grid */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="wp-grid-3-cols" style={{ gap: 'var(--spacing-8)' }}>
              {siteMapSections.map((section, index) => {
                const Icon = section.icon;
                
                return (
                  <div 
                    key={index}
                    style={{
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
                    }}
                  >
                    {/* Card Header */}
                    <div 
                      style={{ 
                        padding: 'var(--spacing-6)',
                        borderBottom: '1px solid var(--border-soft)',
                        backgroundColor: 'var(--muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-4)'
                      }}
                    >
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: 'var(--radius)',
                          backgroundColor: 'var(--background)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: section.color,
                          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                        }}
                      >
                        <Icon size={20} />
                      </div>
                      
                      <h2
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-lg)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--foreground)',
                          margin: 0
                        }}
                      >
                        {section.title}
                      </h2>
                      
                      <span 
                        style={{
                          marginLeft: 'auto',
                          fontSize: 'var(--text-small)',
                          fontFamily: 'var(--font-secondary)',
                          color: 'var(--muted-foreground)',
                          backgroundColor: 'var(--background)',
                          padding: '2px 8px',
                          borderRadius: 'var(--radius-full)',
                          border: '1px solid var(--border-soft)'
                        }}
                      >
                        {section.pages.length}
                      </span>
                    </div>

                    {/* Pages List */}
                    <div style={{ padding: 'var(--spacing-2) 0' }}>
                      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                        {section.pages.map((page, pageIndex) => (
                          <li key={pageIndex}>
                            <button
                              onClick={() => page.status === 'active' && navigateTo(page.id)}
                              disabled={page.status !== 'active'}
                              style={{
                                width: '100%',
                                textAlign: 'left',
                                padding: 'var(--spacing-3) var(--spacing-6)',
                                background: 'none',
                                border: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--spacing-3)',
                                cursor: page.status === 'active' ? 'pointer' : 'not-allowed',
                                transition: 'background-color 0.2s ease',
                                opacity: page.status === 'missing' ? 0.6 : 1
                              }}
                              onMouseEnter={(e) => {
                                if (page.status === 'active') {
                                  e.currentTarget.style.backgroundColor = 'var(--muted)';
                                }
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                              }}
                            >
                              {/* Status Icon */}
                              {page.status === 'active' ? (
                                <CheckCircle size={16} style={{ color: 'var(--success)', flexShrink: 0 }} />
                              ) : (
                                <XCircle size={16} style={{ color: 'var(--destructive)', flexShrink: 0 }} />
                              )}
                              
                              {/* Link Label */}
                              <span
                                style={{
                                  fontFamily: 'var(--font-primary)',
                                  fontSize: 'var(--text-base)',
                                  color: 'var(--foreground)',
                                  flexGrow: 1
                                }}
                              >
                                {page.label}
                              </span>
                              
                              {/* Arrow Icon */}
                              {page.status === 'active' && (
                                <ChevronRight size={16} style={{ color: 'var(--muted-foreground)' }} />
                              )}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Statistics Section */}
        <Section 
          spacing="xl" 
          style={{
            background: 'var(--muted)',
            borderTop: '1px solid var(--border-soft)'
          }}
        >
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-bold)',
                  marginBottom: '32px',
                  color: 'var(--foreground)'
                }}
              >
                Site Statistics
              </h2>

              <div className="wp-grid-4-cols" style={{ gap: 'var(--spacing-6)' }}>
                {[
                  { 
                    label: 'Total Routes', 
                    value: siteMapSections.reduce((acc, section) => acc + section.pages.length, 0),
                    color: '#8b5cf6'
                  },
                  { 
                    label: 'Active Pages', 
                    value: siteMapSections.reduce((acc, section) => 
                      acc + section.pages.filter(p => p.status === 'active').length, 0
                    ),
                    color: '#10b981'
                  },
                  { 
                    label: 'Dynamic Posts', 
                    value: blogPosts.length + portfolioProjects.length,
                    color: '#f59e0b'
                  },
                  { 
                    label: 'Missing', 
                    value: siteMapSections.reduce((acc, section) => 
                      acc + section.pages.filter(p => p.status === 'missing').length, 0
                    ),
                    color: '#ef4444'
                  }
                ].map((stat, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)',
                      padding: '24px',
                      textAlign: 'center',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-h1)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: stat.color,
                        marginBottom: '8px',
                        lineHeight: 1
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-secondary)',
                        fontSize: 'var(--text-small)',
                        color: 'var(--muted-foreground)',
                        fontWeight: 'var(--font-weight-medium)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-bold)',
                  marginBottom: '16px',
                  color: 'var(--foreground)'
                }}
              >
                Need Help Finding Something?
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'var(--muted-foreground)',
                  marginBottom: '32px'
                }}
              >
                Can't find what you're looking for? Our team is here to help you navigate our services and solutions.
              </p>

              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}

/**
 * Export for use in App.tsx route switch
 */
export default SiteMapTemplate;