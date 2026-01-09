/**
 * Newsletter Service Template
 * 
 * WordPress template: templates/page-newsletter-service.html
 * 
 * Email newsletter and marketing service page.
 * 
 * Pattern order:
 * Hero → Services → Platforms → Benefits → Process → CTA → FAQs
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
  Mail,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Target,
  Zap,
  BarChart,
  Settings,
  FileText
} from 'lucide-react';

export function NewsletterServiceTemplate() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const newsletterServices = [
    {
      id: 'integration',
      icon: Settings,
      title: 'Platform Integration',
      description: 'Seamless integration with Mailchimp, ConvertKit, and other email platforms.',
      features: ['API integration', 'Form setup', 'List management', 'Automation workflows']
    },
    {
      id: 'templates',
      icon: FileText,
      title: 'Email Templates',
      description: 'Custom-designed email templates that match your brand.',
      features: ['Responsive design', 'Brand styling', 'Template library', 'A/B testing']
    },
    {
      id: 'automation',
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Automated email sequences and customer journeys.',
      features: ['Welcome series', 'Drip campaigns', 'Behavior triggers', 'Segmentation']
    },
    {
      id: 'analytics',
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Track performance with detailed analytics and insights.',
      features: ['Open rates', 'Click tracking', 'Conversion tracking', 'Custom reports']
    },
    {
      id: 'strategy',
      icon: Target,
      title: 'Email Strategy',
      description: 'Strategic planning for effective email marketing campaigns.',
      features: ['Content calendar', 'Audience segmentation', 'Campaign planning', 'Growth strategies']
    },
    {
      id: 'optimization',
      icon: TrendingUp,
      title: 'Campaign Optimization',
      description: 'Continuous improvement of email performance and engagement.',
      features: ['A/B testing', 'Subject line optimization', 'Send time optimization', 'List hygiene']
    }
  ];

  const platforms = [
    { name: 'Mailchimp', description: 'Most popular email marketing platform' },
    { name: 'ConvertKit', description: 'For creators and bloggers' },
    { name: 'ActiveCampaign', description: 'Advanced automation platform' },
    { name: 'Constant Contact', description: 'Small business focused' },
    { name: 'SendGrid', description: 'Transactional and marketing emails' },
    { name: 'Klaviyo', description: 'Ecommerce email marketing' }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Grow Your Audience',
      description: 'Build and nurture your email list with proven strategies'
    },
    {
      icon: TrendingUp,
      title: 'Increase Engagement',
      description: 'Higher open rates and click-through rates with optimized campaigns'
    },
    {
      icon: Target,
      title: 'Better Conversions',
      description: 'Turn subscribers into customers with targeted messaging'
    },
    {
      icon: Zap,
      title: 'Save Time',
      description: 'Automated workflows that run on autopilot'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Strategy & Planning',
      description: 'Define goals, audience segments, and content strategy'
    },
    {
      step: 2,
      title: 'Platform Setup',
      description: 'Configure email platform and integrate with your website'
    },
    {
      step: 3,
      title: 'Design & Templates',
      description: 'Create branded email templates and signup forms'
    },
    {
      step: 4,
      title: 'Automation Setup',
      description: 'Build automated workflows and customer journeys'
    },
    {
      step: 5,
      title: 'Launch & Monitor',
      description: 'Launch campaigns and track performance metrics'
    },
    {
      step: 6,
      title: 'Optimize & Scale',
      description: 'Continuous testing and optimization for better results'
    }
  ];

  const newsletterFAQs = [
    {
      question: 'Which email marketing platform should I use?',
      answer: 'The best platform depends on your needs and budget. Mailchimp is great for beginners with its free tier and user-friendly interface. ConvertKit is ideal for bloggers and creators. ActiveCampaign offers advanced automation for larger businesses. Klaviyo is perfect for ecommerce stores. We help you choose the right platform and handle the complete setup and integration.'
    },
    {
      question: 'How do I grow my email list?',
      answer: 'Effective list growth strategies include: valuable lead magnets (ebooks, guides, templates), popup forms with exit intent, content upgrades for blog posts, giveaways and contests, social media promotion, and partner collaborations. We implement proven strategies tailored to your audience and regularly test and optimize for better conversion rates.'
    },
    {
      question: 'What types of emails should I send?',
      answer: 'A balanced email strategy includes: welcome series for new subscribers, regular newsletters with valuable content, promotional campaigns for products/services, educational content and tips, customer success stories, abandoned cart emails (for ecommerce), re-engagement campaigns for inactive subscribers, and seasonal or event-based campaigns. We help create a content calendar that keeps your audience engaged without overwhelming them.'
    },
    {
      question: 'How often should I send emails to my list?',
      answer: 'Email frequency depends on your industry, content value, and audience expectations. Most businesses succeed with 1-4 emails per month. Ecommerce sites may send more frequently (2-3 per week) with promotional content. The key is consistency and value - send when you have something valuable to share. We help establish the right cadence based on engagement metrics and subscriber feedback.'
    },
    {
      question: 'Can you help with email deliverability issues?',
      answer: 'Yes! Email deliverability is crucial for campaign success. We improve deliverability through: proper domain authentication (SPF, DKIM, DMARC), list hygiene and removing inactive subscribers, avoiding spam trigger words, maintaining good sender reputation, proper email structure and coding, testing across email clients, and monitoring blacklists. We can also help recover from deliverability problems.'
    },
    {
      question: 'Do you provide ongoing email marketing management?',
      answer: 'Yes! We offer comprehensive email marketing management including monthly campaign planning and execution, content creation and design, automation setup and optimization, list segmentation and management, A/B testing and optimization, analytics reporting and insights, and strategic recommendations. Packages start at $500/month depending on send volume and complexity. We also offer one-time setup services if you prefer to manage campaigns yourself.'
    }
  ];

  return (
    <>
      <RouteAnnouncer />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Hero Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
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
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
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
                NEWSLETTER SERVICES
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
                Email Marketing That<br />Drives Results
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
                Strategic email marketing services including platform integration, 
                automation setup, and campaign management to grow your business.
              </p>

              <Buttons orientation="horizontal" style={{ justifyContent: 'center' }}>
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                  style={{
                    backgroundColor: 'white',
                    color: '#0ea5e9',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  Get Started
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

        {/* Newsletter Services */}
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
                What We Offer
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
                Complete email marketing solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsletterServices.map((service) => {
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

        {/* Platforms */}
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
                Platforms We Work With
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
                Expert integration with all major email marketing platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  style={{
                    padding: '24px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <Mail size={24} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <div>
                    <div
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--foreground)',
                        marginBottom: '2px'
                      }}
                    >
                      {platform.name}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      {platform.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Benefits */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
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

        {/* Process */}
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
                How We Work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step) => (
                <div
                  key={step.step}
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

        {/* CTA Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
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
                Ready to Grow Your Email List?
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
                Let's create an email marketing strategy that drives real results 
                for your business.
              </p>

              <Buttons orientation="horizontal" style={{ justifyContent: 'center' }}>
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                  style={{
                    backgroundColor: 'white',
                    color: '#0ea5e9',
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
                  Newsletter FAQs
                </h2>
              </div>

              <FAQSection faqs={newsletterFAQs} />
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}