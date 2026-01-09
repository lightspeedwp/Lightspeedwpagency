/**
 * Migrations Service Template
 * 
 * WordPress template: templates/page-migrations-service.html
 * 
 * Website migration service page for platform migrations to WordPress.
 * 
 * Pattern order:
 * Hero → Migration Types → Process → Why Migrate → Benefits → CTA → FAQs
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Buttons, Button } from '../blocks/design/Buttons';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { FAQSection } from '../patterns/FAQSection';
import { useState } from 'react';
import { 
  RefreshCw,
  ArrowRight,
  CheckCircle,
  Database,
  Shield,
  Zap,
  Search,
  FileText,
  Globe,
  TrendingUp,
  Settings
} from 'lucide-react';

export function MigrationsServiceTemplate() {
  const [hoveredType, setHoveredType] = useState<string | null>(null);

  const migrationTypes = [
    {
      id: 'wix',
      icon: Globe,
      title: 'Wix to WordPress',
      description: 'Migrate from Wix to WordPress for more flexibility and control.',
      features: ['Content transfer', 'Design recreation', 'SEO preservation', 'Domain migration']
    },
    {
      id: 'squarespace',
      icon: Globe,
      title: 'Squarespace to WordPress',
      description: 'Move from Squarespace to WordPress for advanced features.',
      features: ['Site structure', 'Blog migration', 'Image optimization', 'URL redirects']
    },
    {
      id: 'shopify',
      icon: Database,
      title: 'Shopify to WooCommerce',
      description: 'Migrate your online store from Shopify to WooCommerce.',
      features: ['Product migration', 'Order history', 'Customer data', 'Payment integration']
    },
    {
      id: 'custom',
      icon: Settings,
      title: 'Custom Platform to WordPress',
      description: 'Migrate from any custom CMS or platform to WordPress.',
      features: ['Data extraction', 'Content mapping', 'Custom import scripts', 'Testing & QA']
    },
    {
      id: 'wordpress',
      icon: RefreshCw,
      title: 'WordPress to WordPress',
      description: 'Upgrade, redesign, or move your WordPress site to a new host.',
      features: ['Theme migration', 'Plugin updates', 'Database optimization', 'Performance tuning']
    },
    {
      id: 'drupal',
      icon: Database,
      title: 'Drupal/Joomla to WordPress',
      description: 'Migrate from other CMS platforms to WordPress.',
      features: ['Content migration', 'User accounts', 'Taxonomy mapping', 'Module equivalents']
    }
  ];

  const migrationProcess = [
    {
      step: 1,
      title: 'Audit & Planning',
      description: 'Comprehensive audit of your current site including content, structure, and functionality.',
      icon: Search
    },
    {
      step: 2,
      title: 'Backup & Preparation',
      description: 'Full backup of existing site and preparation of WordPress environment.',
      icon: Shield
    },
    {
      step: 3,
      title: 'Content Migration',
      description: 'Automated and manual content transfer with data validation.',
      icon: Database
    },
    {
      step: 4,
      title: 'Design & Functionality',
      description: 'Recreate design and implement equivalent functionality in WordPress.',
      icon: Settings
    },
    {
      step: 5,
      title: 'SEO Preservation',
      description: 'URL redirects, metadata transfer, and SEO optimization.',
      icon: TrendingUp
    },
    {
      step: 6,
      title: 'Testing & Launch',
      description: 'Comprehensive testing followed by smooth launch with zero downtime.',
      icon: Zap
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Zero Downtime',
      description: 'Seamless migration with no interruption to your website'
    },
    {
      icon: Shield,
      title: 'Data Integrity',
      description: 'Complete data preservation with validation and verification'
    },
    {
      icon: TrendingUp,
      title: 'SEO Maintained',
      description: 'Preserve search rankings with proper redirects and metadata'
    },
    {
      icon: FileText,
      title: 'Content Preserved',
      description: 'All content, images, and media transferred accurately'
    }
  ];

  const whyMigrate = [
    'Greater flexibility and customization options',
    'Lower long-term costs and no monthly platform fees',
    'Better SEO capabilities and performance',
    'Full ownership and control of your website',
    'Extensive plugin ecosystem (60,000+ plugins)',
    'No vendor lock-in or platform limitations',
    'Easier content management and editing',
    'Better scalability for growing businesses'
  ];

  const migrationFAQs = [
    {
      question: 'How long does a website migration take?',
      answer: 'Migration timelines vary based on site size and complexity. A small website (10-50 pages) typically takes 2-4 weeks. Medium sites (50-200 pages) take 4-8 weeks. Large or complex sites may take 8-12 weeks. We provide detailed timelines after the initial audit and always work to minimize downtime.'
    },
    {
      question: 'Will I lose my search engine rankings?',
      answer: 'No! We implement 301 redirects for all URLs, transfer all metadata, maintain site structure, and follow SEO best practices to preserve your search rankings. We also submit updated sitemaps to search engines and monitor rankings post-migration. Most sites maintain or improve rankings after migration.'
    },
    {
      question: 'What happens to my existing content and images?',
      answer: 'All content, images, documents, and media files are transferred to WordPress. We optimize images for web performance, maintain folder structures, update internal links, and verify all content displays correctly. You receive a complete audit report showing what was migrated.'
    },
    {
      question: 'Can you migrate my ecommerce store without losing orders?',
      answer: 'Yes! We migrate product catalogs, customer accounts, order history, and transaction data. We can also pause new orders during final migration or implement a two-phase migration to maintain operations. All customer data is transferred securely and verified before launch.'
    },
    {
      question: 'Will my website design stay the same?',
      answer: 'We can either recreate your existing design in WordPress or take the opportunity to redesign and modernize. Many clients choose a redesign during migration to leverage WordPress\'s capabilities. We provide mockups and get your approval before proceeding with design implementation.'
    },
    {
      question: 'What support do you provide after migration?',
      answer: 'We provide 30-60 days of post-migration support including bug fixes, content adjustments, training on WordPress, performance monitoring, and technical assistance. We also offer ongoing maintenance packages for long-term support, updates, and optimization.'
    }
  ];

  return (
    <>
      <SkipLink />
      <SiteHeader />
      <RouteAnnouncer />
      <BackToTopButton />
      
      <main id="main-content" role="main">
        {/* Hero Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px',
            paddingBottom: '80px'
          }}
        >
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
          />

          <Container>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div
                className="inline-block px-4 py-2 mb-6"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: 'var(--text-small)',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 'var(--font-weight-semibold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                MIGRATION SERVICES
              </div>

              <h1
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  marginBottom: '20px',
                  color: 'var(--primary-foreground)'
                }}
              >
                Seamless Website Migration<br />to WordPress
              </h1>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.95)',
                  marginBottom: '32px',
                  maxWidth: '700px',
                  margin: '0 auto 32px'
                }}
              >
                Expert website migrations from any platform to WordPress with zero downtime, 
                preserved SEO rankings, and complete data integrity.
              </p>

              <Buttons orientation="horizontal" style={{ justifyContent: 'center' }}>
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                  style={{
                    backgroundColor: 'white',
                    color: '#8b5cf6',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  Start Migration
                  <ArrowRight size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  page="portfolio-archive"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    backgroundColor: 'transparent'
                  }}
                >
                  View Work
                </Button>
              </Buttons>
            </div>
          </Container>
        </Section>

        {/* Migration Types */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="text-center mb-16">
              <h2
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                  color: 'var(--foreground)'
                }}
              >
                Migration Services
              </h2>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                We migrate from any platform to WordPress
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {migrationTypes.map((type) => {
                const Icon = type.icon;
                const isHovered = hoveredType === type.id;

                return (
                  <div
                    key={type.id}
                    style={{
                      padding: '32px',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-xl)',
                      border: isHovered ? '2px solid var(--primary)' : '1px solid var(--border-soft)',
                      transition: 'all 0.3s ease',
                      transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                      boxShadow: isHovered ? '0 20px 40px rgba(0, 0, 0, 0.15)' : '0 4px 12px rgba(0, 0, 0, 0.05)'
                    }}
                    onMouseEnter={() => setHoveredType(type.id)}
                    onMouseLeave={() => setHoveredType(null)}
                  >
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: isHovered ? 'var(--primary)' : 'var(--primary-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Icon 
                        size={32} 
                        style={{ 
                          color: isHovered ? 'white' : 'var(--primary)',
                          transition: 'color 0.3s ease'
                        }} 
                      />
                    </div>

                    <h3
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-xl)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--foreground)',
                        marginBottom: '12px'
                      }}
                    >
                      {type.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        lineHeight: '1.6',
                        color: 'var(--muted-foreground)',
                        marginBottom: '16px'
                      }}
                    >
                      {type.description}
                    </p>

                    <ul className="space-y-2" style={{ listStyle: 'none', padding: 0 }}>
                      {type.features.map((feature, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }}
                        >
                          <CheckCircle size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                          <span
                            style={{
                              fontFamily: 'Lexend, sans-serif',
                              fontSize: 'var(--text-small)',
                              color: 'var(--muted-foreground)'
                            }}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Migration Process */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="text-center mb-16">
              <h2
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                  color: 'var(--foreground)'
                }}
              >
                Our Migration Process
              </h2>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                Structured approach ensuring smooth transitions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {migrationProcess.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    style={{
                      padding: '32px',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)'
                    }}
                  >
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--primary-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        position: 'relative'
                      }}
                    >
                      <Icon size={32} style={{ color: 'var(--primary)' }} />
                      <div
                        style={{
                          position: 'absolute',
                          top: '-8px',
                          right: '-8px',
                          width: '32px',
                          height: '32px',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor: 'var(--primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-small)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'white'
                        }}
                      >
                        {step.step}
                      </div>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-lg)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--foreground)',
                        marginBottom: '8px'
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        lineHeight: '1.6',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Why Migrate */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                    color: 'var(--foreground)'
                  }}
                >
                  Why Migrate to WordPress?
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)',
                    marginBottom: '32px'
                  }}
                >
                  WordPress powers 43% of all websites for good reasons
                </p>

                <ul className="space-y-3" style={{ listStyle: 'none', padding: 0 }}>
                  {whyMigrate.map((reason, index) => (
                    <li
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px'
                      }}
                    >
                      <CheckCircle size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          lineHeight: '1.6',
                          color: 'var(--foreground)'
                        }}
                      >
                        {reason}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      style={{
                        padding: '32px',
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-soft)'
                      }}
                    >
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: 'var(--radius-lg)',
                          backgroundColor: 'var(--primary-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '16px'
                        }}
                      >
                        <Icon size={24} style={{ color: 'var(--primary)' }} />
                      </div>

                      <h3
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-lg)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--foreground)',
                          marginBottom: '8px'
                        }}
                      >
                        {benefit.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          lineHeight: '1.6',
                          color: 'var(--muted-foreground)'
                        }}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
            color: 'var(--primary-foreground)',
            textAlign: 'center'
          }}
        >
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: '20px'
                }}
              >
                Ready to Migrate to WordPress?
              </h2>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  marginBottom: '32px',
                  opacity: 0.95
                }}
              >
                Get a free migration assessment and custom quote for your project.
              </p>

              <Buttons orientation="horizontal" style={{ justifyContent: 'center' }}>
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                  style={{
                    backgroundColor: 'white',
                    color: '#8b5cf6',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  Get Started
                  <ArrowRight size={20} />
                </Button>
              </Buttons>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                    color: 'var(--foreground)'
                  }}
                >
                  Migration FAQs
                </h2>
              </div>

              <FAQSection faqs={migrationFAQs} />
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}