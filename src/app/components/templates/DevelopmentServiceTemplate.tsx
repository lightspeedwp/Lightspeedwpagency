/**
 * Development Service Template
 * 
 * WordPress template: templates/page-development-service.html
 * 
 * Development service page showcasing WordPress and WooCommerce development.
 * 
 * Pattern order:
 * Hero → Development Services → Technologies → Process → Benefits → CTA → FAQs
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
import { useNavigation } from '../../contexts/NavigationContext';
import { useState } from 'react';
import { 
  Code,
  ArrowRight,
  CheckCircle,
  Layers,
  Settings,
  Zap,
  Shield,
  Database,
  GitBranch,
  Package
} from 'lucide-react';

export function DevelopmentServiceTemplate() {
  const { navigateTo } = useNavigation();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const devServices = [
    {
      id: 'theme-dev',
      icon: Layers,
      title: 'Custom Theme Development',
      description: 'Block themes built with FSE, theme.json, and modern WordPress best practices.',
      features: ['Block-based themes', 'Full Site Editing', 'Global styles', 'Pattern libraries']
    },
    {
      id: 'plugin-dev',
      icon: Package,
      title: 'Custom Plugin Development',
      description: 'Secure, scalable plugins that extend WordPress functionality.',
      features: ['Custom post types', 'Admin interfaces', 'Shortcodes & blocks', 'RESTful APIs']
    },
    {
      id: 'woocommerce',
      icon: Settings,
      title: 'WooCommerce Development',
      description: 'Complete ecommerce solutions with custom functionality.',
      features: ['Product customization', 'Payment gateways', 'Shipping methods', 'Custom checkout']
    },
    {
      id: 'api-integration',
      icon: GitBranch,
      title: 'API Integration',
      description: 'Connect WordPress with third-party services and platforms.',
      features: ['REST API', 'GraphQL', 'Webhook integration', 'Data synchronization']
    },
    {
      id: 'optimization',
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed optimization for faster loading and better UX.',
      features: ['Code optimization', 'Caching strategies', 'CDN integration', 'Database tuning']
    },
    {
      id: 'maintenance',
      icon: Shield,
      title: 'Maintenance & Support',
      description: 'Ongoing updates, security patches, and technical support.',
      features: ['Regular updates', 'Security monitoring', 'Bug fixes', 'Performance monitoring']
    }
  ];

  const technologies = [
    { name: 'WordPress', category: 'CMS' },
    { name: 'WooCommerce', category: 'Ecommerce' },
    { name: 'PHP', category: 'Backend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'MySQL', category: 'Database' },
    { name: 'REST API', category: 'Integration' },
    { name: 'GraphQL', category: 'Integration' }
  ];

  const devFAQs = [
    {
      question: 'What type of WordPress development do you specialize in?',
      answer: 'We specialize in modern WordPress development using Full Site Editing (FSE), block themes, custom plugins, WooCommerce stores, headless WordPress, and API integrations. We follow WordPress coding standards and best practices for all development work.'
    },
    {
      question: 'Do you build custom plugins or only use existing ones?',
      answer: 'Both! We evaluate whether existing plugins meet your needs or if custom development is more appropriate. Custom plugins give you complete control, better performance, and ongoing support. We build secure, scalable plugins following WordPress coding standards.'
    },
    {
      question: 'Can you work with our existing WordPress site?',
      answer: 'Yes! We can add features, fix bugs, optimize performance, or completely rebuild your existing WordPress site. We work with any WordPress installation regardless of when it was built or who created it.'
    },
    {
      question: 'How do you ensure code quality and security?',
      answer: 'We follow WordPress coding standards, conduct code reviews, implement security best practices, use version control (Git), perform thorough testing, and keep all code well-documented. Security includes input validation, data sanitization, prepared SQL statements, and regular security audits.'
    },
    {
      question: 'Do you provide documentation and training?',
      answer: 'Yes! We provide comprehensive documentation including code comments, developer guides, user manuals, and video tutorials. We also offer training sessions for your team on managing and updating the custom functionality we build.'
    },
    {
      question: 'What happens after the development is complete?',
      answer: 'We provide ongoing support and maintenance packages including bug fixes, security updates, performance monitoring, and feature enhancements. You also receive all source code, documentation, and can choose to manage the site independently or continue working with us.'
    }
  ];

  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px',
            paddingBottom: '80px'
          }}
        >
          <Container>
            <div className="max-w-4xl mx-auto text-center">
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
                DEVELOPMENT SERVICES
              </div>

              <h1
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  marginBottom: '20px'
                }}
              >
                Expert WordPress & WooCommerce<br />Development
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
                Custom WordPress development built with modern best practices, scalable 
                architecture, and performance-first approach.
              </p>

              <Buttons orientation="horizontal" style={{ justifyContent: 'center' }}>
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                  icon={<ArrowRight size={20} />}
                  style={{
                    backgroundColor: 'white',
                    color: '#10b981',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  Start Project
                </Button>
              </Buttons>
            </div>
          </Container>
        </Section>

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
                Development Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devServices.map((service) => {
                const Icon = service.icon;
                const isHovered = hoveredService === service.id;

                return (
                  <div
                    key={service.id}
                    style={{
                      padding: '32px',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-xl)',
                      border: isHovered ? '2px solid var(--primary)' : '1px solid var(--border-soft)',
                      transition: 'all 0.3s ease',
                      transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                      boxShadow: isHovered ? '0 20px 40px rgba(0, 0, 0, 0.15)' : '0 4px 12px rgba(0, 0, 0, 0.05)'
                    }}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
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
                      {service.title}
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
                      {service.description}
                    </p>

                    <ul className="space-y-2" style={{ listStyle: 'none', padding: 0 }}>
                      {service.features.map((feature, idx) => (
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
                Technologies We Use
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  style={{
                    padding: '24px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)',
                      marginBottom: '4px'
                    }}
                  >
                    {tech.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    {tech.category}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

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
                  Development FAQs
                </h2>
              </div>

              <FAQSection faqs={devFAQs} />
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}