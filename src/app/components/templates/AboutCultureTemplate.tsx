/**
 * About Culture Template
 * 
 * WordPress template: templates/page-about-culture.html
 * 
 * Page archetype: Company Culture detail page
 * Pattern order: Hero → Values → Work Environment → Benefits → Team Life → CTA
 * 
 * URL: /about/culture/
 */


import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';

import { ValuesSection } from '../patterns/ValuesSection';
import { CTASection } from '../patterns/CTASection';
import { FAQSection } from '../patterns/FAQSection';
import { TeamGrid } from '../patterns/TeamGrid';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { Button } from '../blocks/design/Buttons';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { cultureFAQs } from '../../data/faqs';
import { leadershipTeam } from '../../data/team';
import { employeeTestimonials } from '../../data/testimonials';
import { Heart, Users, Zap, Award, Coffee, Code, Sprout, Globe2 } from 'lucide-react';
import '@/styles/templates/page-about.css';

export function AboutCultureTemplate() {
  return (
    <>

        {/* Breadcrumbs */}
        <section className="wp-block-breadcrumbs-section">
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Our Culture' }
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
                Our Culture
              </Heading>

              <Paragraph size="large" className="about-page__hero-desc">
                We believe in creating a workplace where talented people can do their best work while maintaining balance, learning continuously, and having fun along the way.
              </Paragraph>
            </div>
          </Container>
        </Section>

        {/* Core Values Section */}
        <ValuesSection
          values={[
            {
              icon: Heart,
              title: 'People First',
              description: 'We prioritize the wellbeing and growth of our team members above all else.',
              color: 'var(--primary)'
            },
            {
              icon: Zap,
              title: 'Excellence',
              description: 'We maintain the highest standards in our code, design, and client relationships.',
              color: 'var(--secondary)'
            },
            {
              icon: Sprout,
              title: 'Continuous Growth',
              description: 'Learning and improvement are built into our daily work and culture.',
              color: 'var(--accent)'
            },
            {
              icon: Globe2,
              title: 'Remote-First',
              description: 'We embrace distributed work, giving everyone flexibility and autonomy.',
              color: 'var(--primary)'
            }
          ]}
        />

        {/* Work Environment Section */}
        <Section spacing="xl" className="about-page__mission-section">
          <Container>
            <div className="wp-grid-2-cols wp-gap-12 wp-items-center">
              <div>
                <Heading level={2} className="about-page__section-title wp-text-left wp-mb-6">
                  How We Work
                </Heading>
                
                <div className="wp-space-y-6">
                  {[
                    {
                      title: 'Flexible Hours',
                      description: 'Work when you\'re most productive. We focus on output, not hours logged.'
                    },
                    {
                      title: 'Async Communication',
                      description: 'Deep work time is protected. Most communication happens asynchronously through well-documented processes.'
                    },
                    {
                      title: 'Regular Sync Points',
                      description: 'Weekly team meetings and daily standups keep everyone aligned without micromanagement.'
                    },
                    {
                      title: 'Continuous Learning',
                      description: 'Monthly learning budget, conference attendance, and dedicated time for skill development.'
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="about-page__story-card"
                    >
                      <Heading level={3} className="about-page__story-card-title wp-mb-2">
                        {item.title}
                      </Heading>
                      <Paragraph className="about-page__story-card-text wp-m-0">
                        {item.description}
                      </Paragraph>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-page__mission-card wp-text-center">
                <Users 
                  size={64} 
                  className="wp-text-primary wp-mb-6 wp-inline-block"
                />
                <Heading level={3} className="about-page__card-title wp-mb-4">
                  Join Our Team
                </Heading>
                <Paragraph className="about-page__card-desc wp-mb-6">
                  We're always looking for talented WordPress developers, designers, and project managers who share our values.
                </Paragraph>
                <Button 
                  variant="primary" 
                  size="md" 
                  page="contact"
                  aria-label="View open positions"
                >
                  View Open Positions
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Benefits Section */}
        <Section spacing="xl" className="about-page__story-section">
          <Container>
            <div className="about-page__section-header">
              <Heading level={2} className="about-page__section-title">
                Benefits & Perks
              </Heading>
              <Paragraph className="about-page__section-desc">
                We invest in our team's success and wellbeing
              </Paragraph>
            </div>

            <div className="wp-grid-3-cols wp-gap-8">
              {[
                {
                  icon: Award,
                  title: 'Competitive Salary',
                  description: 'Market-rate compensation reviewed annually with performance-based bonuses.'
                },
                {
                  icon: Coffee,
                  title: 'Home Office Budget',
                  description: '$2,000 annual budget for equipment, ergonomic furniture, and workspace improvements.'
                },
                {
                  icon: Code,
                  title: 'Learning & Development',
                  description: 'Unlimited access to learning platforms, conference tickets, and certification programs.'
                },
                {
                  icon: Heart,
                  title: 'Health & Wellness',
                  description: 'Comprehensive health insurance, mental health support, and fitness allowance.'
                },
                {
                  icon: Globe2,
                  title: 'Work From Anywhere',
                  description: 'Fully remote with option for co-working space memberships globally.'
                },
                {
                  icon: Zap,
                  title: 'Unlimited PTO',
                  description: 'Take the time you need to recharge. We trust our team to manage their own time.'
                }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="wp-flex wp-gap-4 wp-p-6 wp-bg-card wp-border wp-border-border-soft wp-rounded-xl"
                  >
                    <div 
                      style={{
                        width: 'var(--spacing-12)',
                        height: 'var(--spacing-12)',
                        borderRadius: 'var(--radius)',
                        backgroundColor: 'var(--secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--secondary-foreground)',
                        flexShrink: 0
                      }}
                    >
                      <Icon size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <Heading level={3} className="about-page__story-card-title wp-text-h4 wp-mb-2">
                        {benefit.title}
                      </Heading>
                      <Paragraph className="about-page__story-card-text wp-m-0">
                        {benefit.description}
                      </Paragraph>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Team Grid */}
        <Section spacing="xl" className="about-page__stats-section">
          <Container>
            <div className="about-page__section-header">
              <Heading level={2} className="about-page__section-title">
                Leadership Team
              </Heading>
              <Paragraph className="about-page__section-desc">
                Meet the team driving our success
              </Paragraph>
            </div>

            <TeamGrid
              team={leadershipTeam}
            />
          </Container>
        </Section>

        {/* Testimonial Grid */}
        <Section spacing="xl" className="about-page__story-section">
          <Container>
            <div className="about-page__section-header">
              <Heading level={2} className="about-page__section-title">
                Employee Testimonials
              </Heading>
              <Paragraph className="about-page__section-desc">
                Hear from our team members about their experience
              </Paragraph>
            </div>

            <TestimonialGrid
              testimonials={employeeTestimonials}
            />
          </Container>
        </Section>

        {/* CTA Section */}
        <CTASection
          title="Want to Learn More?"
          description="Explore our open positions or reach out to learn more about life at LSX Design"
          primaryButtonText="View Careers"
          primaryButtonPage="careers"
          secondaryButtonText="Contact Us"
          secondaryButtonPage="contact"
          variant="highlighted"
          buttonSize="lg"
        />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          description="Have more questions about our culture? Check out our FAQ section."
          faqs={cultureFAQs}
        />
    </>
  );
}