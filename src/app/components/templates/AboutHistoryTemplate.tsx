/**
 * About History Template
 * 
 * WordPress template: templates/page-about-history.html
 * 
 * Page archetype: Company History detail page
 * Pattern order: Hero → Timeline → Milestones → Evolution → Vision → CTA
 * 
 * URL: /about/history/
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { Rocket, Award, Users, TrendingUp, Globe, Sparkles } from 'lucide-react';
import { TimelineSection } from '../patterns/TimelineSection';
import { CTASection } from '../patterns/CTASection';
import { FAQSection } from '../patterns/FAQSection';
import { aboutFAQs } from '../../data/faqs';

export function AboutHistoryTemplate() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs */}
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
                { label: 'About', href: '/about' },
                { label: 'Our History' }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
        <Section 
          spacing="xl"
          style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle gradient overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, var(--accent) 100%)',
              opacity: '0.1',
              pointerEvents: 'none'
            }}
            aria-hidden="true"
          />
          
          {/* Decorative gradient orb */}
          <div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{
              background: 'var(--accent)',
              opacity: '0.1',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
            aria-hidden="true"
          />

          <Container style={{ position: 'relative', zIndex: 1 }}>
            <div className="max-w-4xl">
              <span 
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
                About Us
              </span>

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
                Our History
              </h1>

              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lead)',
                  fontWeight: 'var(--font-weight-regular)',
                  lineHeight: 'var(--line-height-relaxed)',
                  color: 'var(--primary-foreground)',
                  opacity: 0.95,
                  marginBottom: 0
                }}
              >
                From a small freelance operation to a leading WordPress and WooCommerce agency—discover the journey that shaped LSX Design.
              </p>
            </div>
          </Container>
        </Section>

        {/* Origin Story Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '24px',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em'
                }}
              >
                Where It All Began
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
                  LSX Design was founded in 2014 by a small team of WordPress developers who saw a gap in the market for agencies that truly understood both design systems and WordPress development. While many shops could do one or the other, few could bridge the two seamlessly.
                </p>

                <p 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--foreground)',
                    lineHeight: '1.7'
                  }}
                >
                  What started as weekend projects quickly grew into a full-time operation serving clients across three continents. Our focus on token-driven design systems, accessibility, and WordPress best practices set us apart from day one.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Timeline Section */}
        <TimelineSection
          title="Our Journey"
          description="Key milestones that defined our growth"
          milestones={[
            {
              year: '2014',
              icon: Rocket,
              title: 'Agency Founded',
              description: 'LSX Design launches with a focus on WordPress block themes and design systems. First client project delivered within 3 months.'
            },
            {
              year: '2016',
              icon: Users,
              title: 'Team Expansion',
              description: 'Grew from 2 founders to a team of 8, including dedicated designers, developers, and project managers. First international client onboarded.'
            },
            {
              year: '2018',
              icon: Award,
              title: 'WooCommerce Experts',
              description: 'Became certified WooCommerce developers and launched our e-commerce practice. Delivered 50+ successful store implementations.'
            },
            {
              year: '2020',
              icon: Globe,
              title: 'Remote-First Transition',
              description: 'Fully embraced distributed work, enabling us to hire top talent globally and serve clients across multiple time zones.'
            },
            {
              year: '2022',
              icon: TrendingUp,
              title: 'FSE Pioneers',
              description: 'Early adoption of WordPress Full Site Editing. Developed proprietary pattern libraries and contributed to the WordPress community.'
            },
            {
              year: '2024',
              icon: Sparkles,
              title: 'Design System Leaders',
              description: 'Released LSX Design System 2.0 with enhanced token support, accessibility features, and modern development workflows. 500+ projects delivered.'
            }
          ]}
        />

        {/* Stats Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="text-center mb-16">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '16px',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em'
                }}
              >
                By The Numbers
              </h2>
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.7'
                }}
              >
                A decade of growth and achievement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Projects Delivered', description: 'Since 2014' },
                { number: '150+', label: 'Happy Clients', description: 'Across 30 countries' },
                { number: '10', label: 'Years', description: 'Of WordPress expertise' },
                { number: '25', label: 'Team Members', description: 'Talented professionals' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border-soft)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '40px 24px'
                  }}
                >
                  <div 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'clamp(48px, 8vw, 64px)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--primary)',
                      marginBottom: '12px',
                      lineHeight: '1'
                    }}
                  >
                    {stat.number}
                  </div>
                  <div 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)',
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {stat.label}
                  </div>
                  <div 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          description="Common questions about LSX Design and our journey"
          faqs={aboutFAQs}
          variant="default"
        />

        {/* Vision Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '24px',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em'
                }}
              >
                Looking Forward
              </h2>

              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--foreground)',
                  lineHeight: '1.7',
                  marginBottom: '32px'
                }}
              >
                As WordPress continues to evolve, so do we. Our commitment to accessibility, performance, and developer experience remains unwavering. We're investing in AI-assisted development tools, advanced pattern libraries, and next-generation design systems that will shape the future of WordPress.
              </p>

              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--muted-foreground)',
                  lineHeight: '1.7',
                  marginBottom: 0
                }}
              >
                The next 10 years will be our most exciting yet. Join us on the journey.
              </p>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <CTASection
          title="Become Part of Our Story"
          description="Whether you're a client, partner, or future team member—we'd love to connect"
          primaryButtonText="Get In Touch"
          primaryButtonPage="contact"
          secondaryButtonText="View Careers"
          secondaryButtonPage="careers"
          variant="highlighted"
          buttonSize="lg"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}