/**
 * Services Overview Template
 * 
 * WordPress template: templates/page-services.html
 * 
 * Main services overview page showcasing all service offerings.
 * 
 * Pattern order:
 * Hero → Services Grid → Why Choose Us → Process → Industries → CTA → FAQs
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
  Search,
  ArrowRight,
  CheckCircle,
  Palette,
  Code,
  Zap,
  Shield,
  HardDrive,
  RefreshCw,
  FileText,
  Mail,
  Users,
  TrendingUp,
  Settings,
  Globe
} from 'lucide-react';

export function ServicesTemplate() {
  const { navigateTo } = useNavigation();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // All services
  const services = [
    {
      id: 'discovery',
      icon: Search,
      title: 'Discovery',
      description: 'Website discovery and exploration to understand your needs and goals.',
      page: 'discovery-service',
      features: ['Requirements analysis', 'Competitor research', 'Project roadmap', 'Technical assessment']
    },
    {
      id: 'design',
      icon: Palette,
      title: 'Design',
      description: 'Custom design and branding that reflects your unique identity.',
      page: 'design-service',
      features: ['UI/UX design', 'Brand identity', 'Design systems', 'Prototyping']
    },
    {
      id: 'development',
      icon: Code,
      title: 'Development',
      description: 'Custom WordPress and WooCommerce development solutions.',
      page: 'development-service',
      features: ['Custom themes', 'Plugin development', 'API integrations', 'Custom functionality']
    },
    {
      id: 'content',
      icon: FileText,
      title: 'Content',
      description: 'Content strategy, creation, and optimization for better engagement.',
      page: 'content-service',
      features: ['Content strategy', 'Content creation', 'SEO optimization', 'Content audits']
    },
    {
      id: 'migrations',
      icon: RefreshCw,
      title: 'Migrations',
      description: 'Seamless platform migrations to WordPress with zero downtime.',
      page: 'migrations-service',
      features: ['Platform migration', 'Data transfer', 'SEO preservation', 'Testing & QA']
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security to protect your website and data.',
      page: 'security-service',
      features: ['Security audits', 'Malware removal', 'Firewall setup', 'Regular monitoring']
    },
    {
      id: 'hosting',
      icon: HardDrive,
      title: 'Hosting',
      description: 'Managed WordPress hosting with 99.9% uptime guarantee.',
      page: 'hosting',
      features: ['Managed hosting', 'Daily backups', 'Performance optimization', 'SSL certificates']
    },
    {
      id: 'support',
      icon: Zap,
      title: 'Support',
      description: '24/7 technical support and website maintenance services.',
      page: 'support-service',
      features: ['24/7 support', 'Regular updates', 'Bug fixes', 'Performance monitoring']
    },
    {
      id: 'mailchimp',
      icon: Mail,
      title: 'Email Marketing',
      description: 'Mailchimp integration and email marketing automation.',
      page: 'mailchimp-service',
      features: ['Mailchimp setup', 'Email campaigns', 'List management', 'Automation workflows']
    }
  ];

  // Why choose us
  const benefits = [
    {
      icon: Users,
      title: '15+ Years Experience',
      description: 'Over 15 years building WordPress and WooCommerce websites'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: '500+ successful projects delivered across all industries'
    },
    {
      icon: Settings,
      title: 'Technical Excellence',
      description: 'WordPress experts following best practices and modern standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support and communication'
    }
  ];

  // Industries we serve
  const industries = [
    'Ecommerce & Retail',
    'Travel & Tourism',
    'Healthcare & Medical',
    'Education & Training',
    'Finance & Insurance',
    'Real Estate',
    'Professional Services',
    'Non-Profit Organizations'
  ];

  // Service process
  const processSteps = [
    {
      step: 1,
      title: 'Discovery Call',
      description: 'We discuss your goals, requirements, and vision for the project'
    },
    {
      step: 2,
      title: 'Proposal & Planning',
      description: 'Detailed project scope, timeline, and pricing proposal'
    },
    {
      step: 3,
      title: 'Design & Development',
      description: 'Collaborative design and development with regular check-ins'
    },
    {
      step: 4,
      title: 'Testing & Launch',
      description: 'Comprehensive testing followed by smooth launch and training'
    },
    {
      step: 5,
      title: 'Ongoing Support',
      description: 'Continued support, maintenance, and optimization services'
    }
  ];

  // FAQs
  const servicesFAQs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer comprehensive WordPress and WooCommerce services including discovery and planning, custom design, theme and plugin development, content creation, platform migrations, security services, managed hosting, ongoing support, and email marketing integration. We can handle projects from simple website updates to complex enterprise solutions.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A simple website redesign might take 4-6 weeks, while a custom WooCommerce store could take 8-12 weeks. Complex enterprise projects may take 3-6 months. We provide detailed timelines during the proposal stage and keep you updated throughout development.'
    },
    {
      question: 'Do you work with existing WordPress sites or only build new ones?',
      answer: 'Both! We can build new WordPress sites from scratch, redesign existing sites, add new functionality to current installations, optimize performance, fix issues, and migrate sites from other platforms. Our team can work with any WordPress setup regardless of when it was built or who built it.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer both project-based pricing and hourly rates depending on your needs. Project pricing provides a fixed cost based on defined scope and deliverables. Hourly rates are ideal for ongoing support, maintenance, or projects with evolving requirements. We provide detailed quotes after understanding your specific needs.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes! We offer comprehensive support and maintenance packages including regular updates, security monitoring, performance optimization, bug fixes, content updates, and priority technical support. We can also provide training for your team to manage the site independently.'
    },
    {
      question: 'Can you help with SEO and digital marketing?',
      answer: 'Yes! We implement SEO best practices in all our websites including technical SEO, schema markup, performance optimization, and mobile responsiveness. We also offer content strategy services, email marketing integration with Mailchimp, and can recommend trusted partners for paid advertising and social media marketing.'
    }
  ];

  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Hero Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
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
              background: 'radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, transparent 70%)',
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
                OUR SERVICES
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
                WordPress & WooCommerce<br />Services
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
                From discovery to ongoing support, we provide comprehensive WordPress 
                services to help your business succeed online. Over 15 years of expertise 
                delivering exceptional results.
              </p>

              <Buttons orientation="horizontal" style={{ justifyContent: 'center' }}>
                <Button
                  variant="primary"
                  size="lg"
                  page="contact"
                  icon={<ArrowRight size={20} />}
                >
                  Contact Us
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  page="portfolio-archive"
                >
                  View Work
                </Button>
              </Buttons>
            </div>
          </Container>
        </Section>

        {/* Services Grid */}
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
                What We Do
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
                Comprehensive WordPress services for every need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.page}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(service.page);
                  }}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  style={{
                    textDecoration: 'none',
                    display: 'block',
                    cursor: 'pointer',
                  }}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <div
                    className="cursor-pointer"
                    style={{
                      padding: '32px',
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border-soft)',
                      borderRadius: 'var(--radius-lg)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                      e.currentTarget.style.borderColor = 'var(--primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'var(--border-soft)';
                    }}
                  >
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: 'var(--primary-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <service.icon 
                        size={32} 
                        style={{ 
                          color: 'var(--primary)',
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
                </a>
              ))}
            </div>
          </Container>
        </Section>

        {/* Why Choose Us */}
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
                Why Choose LightSpeed?
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
                Your trusted WordPress partner
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
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
                        width: '64px',
                        height: '64px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--primary-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px'
                      }}
                    >
                      <Icon size={32} style={{ color: 'var(--primary)' }} />
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
          </Container>
        </Section>

        {/* Process Section */}
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
                How We Work
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
                Our streamlined process from start to finish
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  style={{
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--primary)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h3)',
                      fontWeight: 'var(--font-weight-bold)'
                    }}
                  >
                    {step.step}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
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
                      fontSize: 'var(--text-small)',
                      lineHeight: '1.5',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Industries Section */}
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
                Industries We Serve
              </h2>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto 32px'
                }}
              >
                Experience across diverse sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  style={{
                    padding: '20px 24px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <CheckCircle size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)'
                    }}
                  >
                    {industry}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
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
                Ready to Start Your Project?
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
                Let's discuss your needs and create a custom solution that drives 
                results. Schedule a free consultation today.
              </p>

              <Buttons orientation="horizontal" style={{ justifyContent: 'center' }}>
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                  icon={<ArrowRight size={20} />}
                  style={{
                    backgroundColor: 'white',
                    color: 'var(--primary)',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  Contact Us
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
                  Frequently Asked Questions
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Common questions about our services
                </p>
              </div>

              <FAQSection faqs={servicesFAQs} />
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}