/**
 * About Template
 * 
 * WordPress template: templates/page-about.html
 * 
 * About page showcasing company story, mission, values, and stats.
 * Pattern order: Hero → Story → Values → Stats → Timeline → CTA
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { ValuesSection } from '../patterns/ValuesSection';
import { StatsSection } from '../patterns/StatsSection';
import { TimelineSection } from '../patterns/TimelineSection';
import { CTASection } from '../patterns/CTASection';
import { CTAInline } from '../patterns/CTAInline';
import { FAQSection } from '../patterns/FAQSection';
import { SocialProof } from '../patterns/SocialProof';
import { NewsletterSignup } from '../patterns/NewsletterSignup';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { StickyBookCallButton } from '../blocks/layout/StickyBookCallButton';
import { useNavigation } from '../../contexts/NavigationContext';
import { aboutFAQs } from '../../data/faqs';
import { partnerLogos, certificationLogos } from '../../data/logos';
import { Target, Users, Zap, Heart, Shield, Lightbulb } from 'lucide-react';

export function AboutTemplate() {
  const stats = [
    {
      number: '500+',
      label: 'Projects Delivered',
      description: 'WordPress sites built'
    },
    {
      number: '150+',
      label: 'Happy Clients',
      description: 'Across 30 countries'
    },
    {
      number: '10+',
      label: 'Years Experience',
      description: 'In WordPress development'
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      description: 'Average rating'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We never compromise on code quality, accessibility, or performance. Every project meets WCAG 2.1 AA standards and follows WordPress best practices.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We work collaboratively with our clients as partners, not vendors. Your success is our success, and we\'re committed to long-term relationships.'
    },
    {
      icon: Zap,
      title: 'Speed & Performance',
      description: 'Fast websites matter. We optimize every site for Core Web Vitals, implementing advanced caching, image optimization, and database tuning.'
    },
    {
      icon: Heart,
      title: 'Open Source',
      description: 'We believe in giving back to the WordPress community through open-source contributions, documentation, and knowledge sharing.'
    },
    {
      icon: Shield,
      title: 'Security Focused',
      description: 'Security is built into every project from day one. We follow security best practices and keep all sites updated and protected.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of WordPress trends, embracing Full Site Editing, block themes, and modern development workflows to deliver cutting-edge solutions.'
    }
  ];

  const timeline = [
    {
      year: '2014',
      title: 'LSX Design Founded',
      description: 'Started as a small WordPress consultancy focused on custom theme development and helping businesses establish their online presence.'
    },
    {
      year: '2016',
      title: 'WooCommerce Specialization',
      description: 'Expanded services to include e-commerce development, becoming a WooCommerce expert agency with over 50 online stores delivered.'
    },
    {
      year: '2019',
      title: 'Design Systems Approach',
      description: 'Pioneered token-driven design systems for WordPress, creating scalable and maintainable theme architectures for enterprise clients.'
    },
    {
      year: '2021',
      title: 'Full Site Editing Adoption',
      description: 'Early adopters of WordPress FSE and block themes, helping clients transition to modern WordPress development practices.'
    },
    {
      year: '2023',
      title: 'Managed Hosting Launch',
      description: 'Launched our own WordPress managed hosting platform, offering optimized infrastructure for all our client projects.'
    },
    {
      year: '2024',
      title: 'Global Team Expansion',
      description: 'Grew to a diverse team of 25+ WordPress specialists across 10 countries, serving clients worldwide with 24/7 support.'
    }
  ];

  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs - Modern styling */}
        <section 
          className="py-4"
          style={{
            backgroundColor: 'var(--background)',
          }}
        >
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'About Us' }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Gradient orb decorations */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{
              background: 'var(--glass-bg-strong)',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
            style={{
              background: 'var(--glass-bg)',
              filter: 'blur(80px)',
              transform: 'translate(-30%, 30%)'
            }}
          />

          <Container style={{ position: 'relative', zIndex: 1 }}>
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div
                className="inline-flex items-center px-6 py-3 mb-8"
                style={{
                  backgroundColor: 'var(--glass-bg-strong)',
                  backdropFilter: 'blur(10px)',
                  color: 'var(--primary-foreground)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--glass-border)',
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                About LSX Design
              </div>

              <h1 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-semibold)',
                  lineHeight: 'var(--line-height-tight)',
                  letterSpacing: 'var(--letter-spacing-tight)',
                  marginBottom: '24px',
                  color: 'var(--primary-foreground)'
                }}
              >
                Building the Future of WordPress
              </h1>

              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lead)',
                  fontWeight: 'var(--font-weight-regular)',
                  lineHeight: 'var(--line-height-relaxed)',
                  color: 'var(--primary-foreground)',
                  opacity: 0.95,
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                We\'re a WordPress and WooCommerce design agency passionate about creating accessible, scalable websites through modern development practices and comprehensive design systems.
              </p>
            </div>
          </Container>
        </Section>

        {/* Story Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-semibold)',
                    lineHeight: 'var(--line-height-snug)',
                    letterSpacing: 'var(--letter-spacing-tight)',
                    marginBottom: '24px',
                    color: 'var(--foreground)'
                  }}
                >
                  Our Story
                </h2>

                <div className="space-y-6">
                  <p 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.7'
                    }}
                  >
                    LSX Design was born from a simple belief: WordPress deserves better design systems. In 2014, we started as a small team frustrated with the inconsistent, hard-to-maintain WordPress themes we encountered.
                  </p>

                  <p 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.7'
                    }}
                  >
                    We pioneered the token-driven approach to WordPress development, creating scalable design systems that map perfectly to theme.json and Full Site Editing. Today, we're proud to be recognized experts in WordPress block themes, WooCommerce development, and accessibility compliance.
                  </p>

                  <p 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.7'
                    }}
                  >
                    Our mission is simple: empower businesses and developers to build beautiful, performant, accessible WordPress websites that stand the test of time.
                  </p>
                </div>
              </div>

              <div 
                style={{
                  backgroundColor: 'var(--muted)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '48px',
                  border: '1px solid var(--border-soft)'
                }}
              >
                <h3 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h3)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    marginBottom: '24px'
                  }}
                >
                  What Sets Us Apart
                </h3>

                <ul 
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}
                >
                  {[
                    'Token-driven design systems that scale',
                    'WordPress FSE and block theme experts',
                    'WCAG 2.1 AA accessibility compliance',
                    'Core Web Vitals optimization',
                    'WooCommerce specialization',
                    'Open source contributors',
                    'Managed WordPress hosting',
                    '24/7 expert support'
                  ].map((item, index) => (
                    <li 
                      key={index}
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--foreground)',
                        paddingLeft: '28px',
                        position: 'relative'
                      }}
                    >
                      <span 
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: '8px',
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--primary)'
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* Values Section */}
        <ValuesSection
          title="Our Core Values"
          description="The principles that guide everything we do at LSX Design"
          values={values}
        />

        {/* CTA Inline - Mid-Content Conversion */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <CTAInline 
              heading="Want to Work Together?"
              description="Let's discuss your WordPress project and create something amazing together. Our team is ready to help you succeed."
              primaryButtonText="Get In Touch"
              primaryButtonPage="contact"
              secondaryButtonText="View Our Work"
              secondaryButtonPage="portfolio"
            />
          </Container>
        </Section>

        {/* Stats Section */}
        <StatsSection stats={stats} variant="highlighted" />

        {/* Timeline Section */}
        <TimelineSection
          title="Our Journey"
          description="From a small consultancy to a global WordPress agency"
          items={timeline}
        />

        {/* CTA Section */}
        <CTASection
          title="Ready to Work Together?"
          description="Let's discuss your WordPress project and create something amazing together. Our team is ready to help you succeed."
          primaryButtonText="Get In Touch"
          primaryButtonPage="contact"
          secondaryButtonText="Learn About Our Process"
          secondaryButtonPage="about-process"
          variant="highlighted"
          buttonSize="lg"
        />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          description="Answers to common questions about our services and process"
          faqs={aboutFAQs}
        />

        {/* Partner Logos - NEW PATTERN COMPONENT */}
        <SocialProof 
          heading="Trusted Technology Partners"
          logos={partnerLogos}
          columns={5}
          variant="logos"
          caption="We partner with industry-leading platforms and tools"
        />

        {/* Certifications - NEW PATTERN COMPONENT */}
        <SocialProof 
          heading="Certified & Recognized"
          logos={certificationLogos}
          columns={4}
          variant="certifications"
          caption="Our team holds professional certifications and industry recognition"
        />

        {/* Newsletter Signup */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <NewsletterSignup 
              heading="Stay Updated"
              description="Subscribe to our newsletter to receive the latest news, tips, and updates from LSX Design."
              buttonText="Subscribe"
            />
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
      <StickyBookCallButton />
    </>
  );
}