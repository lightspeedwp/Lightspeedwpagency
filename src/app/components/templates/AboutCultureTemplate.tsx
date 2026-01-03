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

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { ValuesSection } from '../patterns/ValuesSection';
import { CTASection } from '../patterns/CTASection';
import { FAQSection } from '../patterns/FAQSection';
import { TeamGrid } from '../patterns/TeamGrid';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { Button } from '../blocks/design/Buttons';
import { cultureFAQs } from '../../data/faqs';
import { leadershipTeam } from '../../data/team';
import { employeeTestimonials } from '../../data/testimonials';
import { Heart, Users, Zap, Award, Coffee, Code, Sprout, Globe2 } from 'lucide-react';

export function AboutCultureTemplate() {
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
                { label: 'Our Culture' }
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
                Our Culture
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
                We believe in creating a workplace where talented people can do their best work while maintaining balance, learning continuously, and having fun along the way.
              </p>
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
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    marginBottom: '24px',
                    lineHeight: 'var(--line-height-snug)',
                    letterSpacing: 'var(--letter-spacing-tight)'
                  }}
                >
                  How We Work
                </h2>
                
                <div className="space-y-6">
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
                      style={{
                        backgroundColor: 'var(--card)',
                        border: '1px solid var(--border-soft)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '24px'
                      }}
                    >
                      <h3 
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-h4)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--foreground)',
                          marginBottom: '8px',
                          lineHeight: '1.3'
                        }}
                      >
                        {item.title}
                      </h3>
                      <p 
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          color: 'var(--muted-foreground)',
                          lineHeight: '1.6',
                          margin: 0
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div 
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '48px',
                  textAlign: 'center'
                }}
              >
                <Users 
                  size={64} 
                  style={{ 
                    color: 'var(--primary)',
                    marginBottom: '24px',
                    display: 'inline-block'
                  }} 
                />
                <h3 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h3)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    marginBottom: '16px',
                    lineHeight: '1.3'
                  }}
                >
                  Join Our Team
                </h3>
                <p 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.6',
                    marginBottom: '24px'
                  }}
                >
                  We're always looking for talented WordPress developers, designers, and project managers who share our values.
                </p>
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
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="text-center mb-16">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '16px',
                  lineHeight: 'var(--line-height-snug)',
                  letterSpacing: 'var(--letter-spacing-tight)'
                }}
              >
                Benefits & Perks
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
                We invest in our team's success and wellbeing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    className="flex gap-4"
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border-soft)',
                      borderRadius: 'var(--radius-xl)',
                      padding: '24px'
                    }}
                  >
                    <div 
                      style={{
                        width: '48px',
                        height: '48px',
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
                      <h3 
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-h4)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--foreground)',
                          marginBottom: '8px',
                          lineHeight: '1.3'
                        }}
                      >
                        {benefit.title}
                      </h3>
                      <p 
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          color: 'var(--muted-foreground)',
                          lineHeight: '1.6',
                          margin: 0
                        }}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Team Grid */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="text-center mb-16">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '16px',
                  lineHeight: 'var(--line-height-snug)',
                  letterSpacing: 'var(--letter-spacing-tight)'
                }}
              >
                Leadership Team
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
                Meet the team driving our success
              </p>
            </div>

            <TeamGrid
              team={leadershipTeam}
            />
          </Container>
        </Section>

        {/* Testimonial Grid */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="text-center mb-16">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '16px',
                  lineHeight: 'var(--line-height-snug)',
                  letterSpacing: 'var(--letter-spacing-tight)'
                }}
              >
                Employee Testimonials
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
                Hear from our team members about their experience
              </p>
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
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}