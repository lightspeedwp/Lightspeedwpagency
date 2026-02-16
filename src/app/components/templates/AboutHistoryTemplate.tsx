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


import { Container } from '../common/Container';
import { Section } from '../common/Section';

import { Rocket, Award, Users, TrendingUp, Globe, Sparkles } from 'lucide-react';
import { TimelineSection } from '../patterns/TimelineSection';
import { CTASection } from '../patterns/CTASection';
import { FAQSection } from '../patterns/FAQSection';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { aboutFAQs } from '../../data/faqs';
import '@/styles/templates/page-about.css';

export function AboutHistoryTemplate() {
  return (
    <>

        {/* Breadcrumbs */}
        <section className="wp-block-breadcrumbs-section">
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Our History' }
              ]}
            />
        </section>

        {/* Hero Section */}
        <Section 
          spacing="xl"
          className="about-page__hero"
        >
          {/* Subtle gradient overlay */}
          <div 
            className="wp-absolute wp-inset-0"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, var(--accent) 100%)',
              opacity: '0.1',
              pointerEvents: 'none'
            }}
            aria-hidden="true"
          />
          
          {/* Decorative gradient orb */}
          <div 
            className="wp-absolute wp-top-0 wp-right-0 wp-w-96 wp-h-96 wp-rounded-full"
            style={{
              background: 'var(--accent)',
              opacity: '0.1',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
            aria-hidden="true"
          />

          <Container style={{ position: 'relative', zIndex: 1 }}>
            <div className="wp-max-w-4xl">
              <span className="about-page__hero-badge">
                About Us
              </span>

              <Heading level={1} className="about-page__hero-title">
                Our History
              </Heading>

              <Paragraph size="large" className="about-page__hero-desc">
                From a small freelance operation to a leading WordPress and WooCommerce agency—discover the journey that shaped LSX Design.
              </Paragraph>
            </div>
          </Container>
        </Section>

        {/* Origin Story Section */}
        <Section spacing="xl" className="about-page__story-section">
          <Container>
            <div className="wp-max-w-4xl wp-mx-auto">
              <Heading level={2} className="about-page__section-title wp-mb-6">
                Where It All Began
              </Heading>

              <div className="wp-space-y-6">
                <Paragraph className="about-page__story-card-text">
                  LSX Design was founded in 2014 by a small team of WordPress developers who saw a gap in the market for agencies that truly understood both design systems and WordPress development. While many shops could do one or the other, few could bridge the two seamlessly.
                </Paragraph>

                <Paragraph className="about-page__story-card-text">
                  What started as weekend projects quickly grew into a full-time operation serving clients across three continents. Our focus on token-driven design systems, accessibility, and WordPress best practices set us apart from day one.
                </Paragraph>
              </div>
            </div>
          </Container>
        </Section>

        {/* Timeline Section */}
        <TimelineSection
          title="Our Journey"
          description="Key milestones that defined our growth"
          items={[
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
        <Section spacing="xl" className="about-page__stats-section">
          <Container>
            <div className="about-page__section-header">
              <Heading level={2} className="about-page__section-title">
                By The Numbers
              </Heading>
              <Paragraph className="about-page__section-desc">
                A decade of growth and achievement
              </Paragraph>
            </div>

            <div className="wp-grid-4-cols wp-gap-8">
              {[
                { number: '500+', label: 'Projects Delivered', description: 'Since 2014' },
                { number: '150+', label: 'Happy Clients', description: 'Across 30 countries' },
                { number: '10', label: 'Years', description: 'Of WordPress expertise' },
                { number: '25', label: 'Team Members', description: 'Talented professionals' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="about-page__stat-card"
                >
                  <div className="about-page__stat-value">
                    {stat.number}
                  </div>
                  <div className="about-page__stat-label wp-uppercase wp-tracking-wider">
                    {stat.label}
                  </div>
                  <Paragraph className="about-page__stat-desc">
                    {stat.description}
                  </Paragraph>
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
        <Section spacing="xl" className="about-page__mission-section">
          <Container>
            <div className="wp-max-w-4xl wp-mx-auto wp-text-center">
              <Heading level={2} className="about-page__section-title">
                Looking Forward
              </Heading>

              <Paragraph className="about-page__section-desc wp-mb-8">
                As WordPress continues to evolve, so do we. Our commitment to accessibility, performance, and developer experience remains unwavering. We're investing in AI-assisted development tools, advanced pattern libraries, and next-generation design systems that will shape the future of WordPress.
              </Paragraph>

              <Paragraph className="about-page__section-desc wp-mb-0">
                The next 10 years will be our most exciting yet. Join us on the journey.
              </Paragraph>
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
    </>
  );
}