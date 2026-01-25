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
  Users,
  FileText,
  Mail,
  HelpCircle,
  DollarSign,
  Award,
  Star,
  MessageSquare,
  Code,
  Palette,
  Search,
  Shield,
  RefreshCw,
  ShoppingCart,
  Server,
  Folder,
  Calendar,
  Tag,
  User,
  AlertCircle,
  Wrench,
  CheckCircle,
  XCircle
} from 'lucide-react';

export function SiteMapTemplate() {
  // Site map data organized by category
  const siteMapSections = [
    {
      title: 'Core Pages',
      icon: Home,
      color: '#8b5cf6',
      pages: [
        { id: 'front-page', label: 'Home (Front Page)', status: 'active' },
        { id: 'about', label: 'About Us', status: 'active' },
        { id: 'team', label: 'Our Team', status: 'active' },
        { id: 'about-process', label: 'Our Process', status: 'active' },
        { id: 'about-culture', label: 'Our Culture', status: 'active' },
        { id: 'about-history', label: 'Our History', status: 'active' },
        { id: 'contact', label: 'Contact', status: 'active' },
        { id: 'faq', label: 'FAQ', status: 'active' },
        { id: 'pricing', label: 'Pricing', status: 'active' },
        { id: 'guarantees', label: 'Guarantees', status: 'active' },
        { id: 'testimonials', label: 'Testimonials', status: 'active' },
        { id: 'why-choose-us', label: 'Why Choose Us', status: 'active' },
        { id: 'roi-calculator', label: 'ROI Calculator', status: 'active' },
      ]
    },
    {
      title: 'Service Pages',
      icon: Briefcase,
      color: '#10b981',
      pages: [
        { id: 'services', label: 'Services Overview', status: 'active' },
        { id: 'discovery-service', label: 'Discovery Service', status: 'active' },
        { id: 'design-service', label: 'Design Service', status: 'active' },
        { id: 'development-service', label: 'Development Service', status: 'active' },
        { id: 'content-service', label: 'Content Service', status: 'active' },
        { id: 'security-service', label: 'Security Service', status: 'active' },
        { id: 'migrations-service', label: 'Migrations Service', status: 'active' },
        { id: 'support-service', label: 'Support Service', status: 'missing' },
        { id: 'mailchimp-service', label: 'Mailchimp Service', status: 'missing' },
      ]
    },
    {
      title: 'Solution Pages',
      icon: Lightbulb,
      color: '#f59e0b',
      pages: [
        { id: 'solutions', label: 'Solutions Overview', status: 'active' },
        { id: 'wordpress-solution', label: 'WordPress Solutions', status: 'active' },
        { id: 'woocommerce-solution', label: 'WooCommerce Solutions', status: 'active' },
        { id: 'hosting', label: 'Hosting Solutions', status: 'active' },
        { id: 'tour-operator', label: 'Tour Operator Solutions', status: 'missing' },
        { id: 'lsx-design', label: 'LSX Design Solutions', status: 'missing' },
      ]
    },
    {
      title: 'Portfolio',
      icon: Folder,
      color: '#ec4899',
      pages: [
        { id: 'portfolio-archive', label: 'Portfolio Archive', status: 'active' },
        { id: 'portfolio-single-eco-market-woocommerce', label: 'Project: EcoMarket', status: 'active' },
        { id: 'portfolio-single-healthfirst-wellness-portal', label: 'Project: HealthFirst', status: 'active' },
        { id: 'portfolio-single-wanderlust-travel-booking', label: 'Project: Wanderlust', status: 'active' },
        { id: 'portfolio-single-techstartup-magazine', label: 'Project: TechStartup', status: 'active' },
        { id: 'portfolio-single-oceanview-real-estate', label: 'Project: OceanView', status: 'active' },
        { id: 'portfolio-single-nonprofit-foundation', label: 'Project: Global Education', status: 'active' },
      ]
    },
    {
      title: 'Blog & Archives',
      icon: FileText,
      color: '#3b82f6',
      pages: [
        { id: 'blog', label: 'Blog Index', status: 'active' },
        { id: 'index', label: 'Latest News', status: 'active' },
        { id: 'category-news', label: 'Category: News', status: 'active' },
        { id: 'category-updates', label: 'Category: Updates', status: 'active' },
        { id: 'category-tutorials', label: 'Category: Tutorials', status: 'active' },
        { id: 'category-design-insights', label: 'Category: Design Insights', status: 'active' },
        { id: 'tag-gutenberg', label: 'Tag: Gutenberg', status: 'active' },
        { id: 'tag-performance', label: 'Tag: Performance', status: 'active' },
        { id: 'date-2024', label: 'Date: 2024', status: 'active' },
        { id: 'date-2024-12', label: 'Date: December 2024', status: 'active' },
        { id: 'author', label: 'Author Archive', status: 'active' },
        { id: 'author-editor', label: 'Author: Editor', status: 'active' },
        { id: 'author-contributor', label: 'Author: Contributor', status: 'active' },
        { id: 'search-page', label: 'Search Results', status: 'active' },
      ]
    },
    {
      title: 'Single Posts',
      icon: MessageSquare,
      color: '#06b6d4',
      pages: [
        { id: 'post-design-system-guide', label: 'Post: Design System Guide', status: 'active' },
        { id: 'post-web-performance', label: 'Post: Web Performance', status: 'active' },
        { id: 'post-accessibility-tips', label: 'Post: Accessibility Tips', status: 'active' },
        { id: 'single-post', label: 'Single Post (Longform)', status: 'active' },
        { id: 'single', label: 'Single (Detail)', status: 'active' },
      ]
    },
    {
      title: 'Developer Tools',
      icon: Wrench,
      color: '#6366f1',
      pages: [
        { id: 'dev-tools', label: 'Dev Tools Hub', status: 'active' },
        { id: 'template-tester', label: 'Template Tester', status: 'active' },
        { id: 'design-system-test', label: 'Design System Test', status: 'active' },
        { id: 'component-showcase', label: 'Component Showcase', status: 'active' },
        { id: 'feature-showcase', label: 'Feature Showcase', status: 'active' },
        { id: 'style-guide', label: 'Style Guide', status: 'active' },
        { id: 'section-style-example', label: 'Section Styles Example', status: 'active' },
      ]
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
            background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Gradient orb decoration */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(167, 139, 250, 0.3) 0%, transparent 70%)',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
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
                <span style={{ 
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Complete</span> Site Navigation
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
                Comprehensive site map with all pages, templates, and routes
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.85)'
                }}
              >
                Test all internal links, verify routing accuracy, and QA navigation structure
              </p>
            </div>
          </Container>
        </Section>

        {/* Site Map Sections */}
        {siteMapSections.map((section, index) => {
          const Icon = section.icon;
          
          return (
            <Section 
              key={index}
              spacing="xl" 
              style={{ 
                backgroundColor: index % 2 === 0 ? 'var(--background)' : 'var(--muted)' 
              }}
            >
              <Container>
                <div className="max-w-6xl mx-auto">
                  {/* Section Header */}
                  <div 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '16px',
                      marginBottom: '32px'
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: 'var(--radius)',
                        backgroundColor: `${section.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={28} style={{ color: section.color }} />
                    </div>
                    
                    <div>
                      <h2
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-h2)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--foreground)',
                          marginBottom: '4px'
                        }}
                      >
                        {section.title}
                      </h2>
                      <p
                        style={{
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--text-base)',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {section.pages.length} {section.pages.length === 1 ? 'page' : 'pages'}
                      </p>
                    </div>
                  </div>

                  {/* Pages Grid */}
                  <div className="wp-grid-3-cols">
                    {section.pages.map((page, pageIndex) => (
                      <div
                        key={pageIndex}
                        style={{
                          backgroundColor: 'var(--card)',
                          borderRadius: 'var(--radius-lg)',
                          border: page.status === 'missing' 
                            ? '1px dashed var(--destructive)' 
                            : '1px solid var(--border-soft)',
                          padding: '20px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px',
                          transition: 'all 0.2s ease',
                          cursor: page.status === 'active' ? 'pointer' : 'not-allowed',
                          opacity: page.status === 'missing' ? 0.6 : 1
                        }}
                      >
                        {/* Status Badge */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {page.status === 'active' ? (
                            <CheckCircle size={16} style={{ color: '#10b981', flexShrink: 0 }} />
                          ) : (
                            <XCircle size={16} style={{ color: '#ef4444', flexShrink: 0 }} />
                          )}
                          <span
                            style={{
                              fontFamily: 'var(--font-secondary)',
                              fontSize: 'var(--text-small)',
                              fontWeight: 'var(--font-weight-semibold)',
                              color: page.status === 'active' ? '#10b981' : '#ef4444',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em'
                            }}
                          >
                            {page.status}
                          </span>
                        </div>

                        {/* Page Label */}
                        <h3
                          style={{
                            fontFamily: 'var(--font-primary)',
                            fontSize: 'var(--text-lg)',
                            fontWeight: 'var(--font-weight-semibold)',
                            color: 'var(--foreground)',
                            marginBottom: '8px'
                          }}
                        >
                          {page.label}
                        </h3>

                        {/* Route */}
                        <code
                          style={{
                            fontFamily: 'monospace',
                            fontSize: 'var(--text-small)',
                            color: 'var(--muted-foreground)',
                            backgroundColor: 'var(--muted)',
                            padding: '4px 8px',
                            borderRadius: 'var(--radius)',
                            wordBreak: 'break-all'
                          }}
                        >
                          /{page.id}
                        </code>

                        {/* Action Button */}
                        {page.status === 'active' && (
                          <Button
                            page={page.id as any}
                            size="sm"
                            variant="outline"
                            style={{ marginTop: '8px', width: '100%' }}
                          >
                            Visit Page →
                          </Button>
                        )}

                        {page.status === 'missing' && (
                          <div
                            style={{
                              marginTop: '8px',
                              padding: '8px 12px',
                              backgroundColor: 'var(--destructive-bg)',
                              borderRadius: 'var(--radius)',
                              border: '1px solid var(--destructive)',
                              textAlign: 'center'
                            }}
                          >
                            <span
                              style={{
                                fontFamily: 'var(--font-primary)',
                                fontSize: 'var(--text-small)',
                                color: 'var(--destructive)',
                                fontWeight: 'var(--font-weight-medium)'
                              }}
                            >
                              Template Missing
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Container>
            </Section>
          );
        })}

        {/* Statistics Section */}
        <Section 
          spacing="xl" 
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
            color: 'var(--primary-foreground)'
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
                  color: 'var(--primary-foreground)'
                }}
              >
                Site Statistics
              </h2>

              <div className="wp-grid-4-cols">
                {[
                  { 
                    label: 'Total Pages', 
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
                    label: 'Missing Templates', 
                    value: siteMapSections.reduce((acc, section) => 
                      acc + section.pages.filter(p => p.status === 'missing').length, 0
                    ),
                    color: '#ef4444'
                  },
                  { 
                    label: 'Categories', 
                    value: siteMapSections.length,
                    color: '#f59e0b'
                  }
                ].map((stat, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      padding: '24px',
                      textAlign: 'center'
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-h1)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: stat.color,
                        marginBottom: '8px'
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-base)',
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: 'var(--font-weight-medium)'
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
