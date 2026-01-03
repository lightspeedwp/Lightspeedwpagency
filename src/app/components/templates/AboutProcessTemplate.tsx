/**
 * About Process Template
 * 
 * WordPress template: templates/page-about-process.html
 * 
 * Page archetype: Process & Methodology detail page
 * Pattern order: Hero → Process Steps → Methodology → Tools & Technologies → CTA
 * 
 * URL: /about/process/
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { TimelineSection } from '../patterns/TimelineSection';
import { ProcessTimeline } from '../patterns/ProcessTimeline';
import { CTASection } from '../patterns/CTASection';
import { FAQSection } from '../patterns/FAQSection';
import { Button } from '../blocks/design/Buttons';
import { processFAQs } from '../../data/faqs';
import { designProcess } from '../../data/process';
import { CheckCircle, Target, Users, Rocket, Code, Palette, TestTube, Globe } from 'lucide-react';

export function AboutProcessTemplate() {
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
                { label: 'Our Process' }
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
                Our Process
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
                A proven methodology that transforms ideas into exceptional WordPress experiences. Our systematic approach ensures quality, efficiency, and success at every stage.
              </p>
            </div>
          </Container>
        </Section>

        {/* Process Steps Section */}
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
                Four-Phase Development Cycle
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
                From discovery to delivery, every project follows our battle-tested framework
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  phase: '01',
                  icon: Target,
                  title: 'Discovery & Strategy',
                  description: 'We begin every project with comprehensive discovery workshops to understand your business goals, user needs, and technical requirements.',
                  deliverables: [
                    'Stakeholder interviews',
                    'Competitive analysis',
                    'User research & personas',
                    'Technical requirements doc',
                    'Project roadmap & timeline'
                  ]
                },
                {
                  phase: '02',
                  icon: Palette,
                  title: 'Design & Planning',
                  description: 'Token-driven design systems are created with WordPress FSE compatibility, accessibility standards, and scalability in mind.',
                  deliverables: [
                    'Design system & tokens',
                    'Wireframes & prototypes',
                    'Pattern library',
                    'Accessibility audit',
                    'Content structure plan'
                  ]
                },
                {
                  phase: '03',
                  icon: Code,
                  title: 'Development & Build',
                  description: 'Modern WordPress development using blocks, patterns, and best practices for performance, security, and maintainability.',
                  deliverables: [
                    'Custom block development',
                    'Pattern implementation',
                    'theme.json configuration',
                    'Performance optimization',
                    'Security hardening'
                  ]
                },
                {
                  phase: '04',
                  icon: Rocket,
                  title: 'Testing & Launch',
                  description: 'Rigorous QA testing, accessibility validation, and smooth deployment with comprehensive training and documentation.',
                  deliverables: [
                    'Cross-browser testing',
                    'Accessibility testing',
                    'Performance testing',
                    'Editor training',
                    'Launch & handoff'
                  ]
                }
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border-soft)',
                      borderRadius: 'var(--radius-xl)',
                      padding: '40px',
                      position: 'relative'
                    }}
                  >
                    {/* Phase Number Background */}
                    <div 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'clamp(64px, 8vw, 96px)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--primary)',
                        opacity: 0.08,
                        position: 'absolute',
                        top: '24px',
                        right: '24px',
                        lineHeight: '1',
                        pointerEvents: 'none'
                      }}
                    >
                      {step.phase}
                    </div>

                    {/* Icon */}
                    <div 
                      className="mb-6"
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary-foreground)'
                      }}
                    >
                      <Icon size={32} strokeWidth={2} />
                    </div>

                    {/* Title */}
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
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--muted-foreground)',
                        lineHeight: '1.6',
                        marginBottom: '24px'
                      }}
                    >
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div>
                      <h4 
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--foreground)',
                          marginBottom: '12px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}
                      >
                        Key Deliverables
                      </h4>
                      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                        {step.deliverables.map((item, i) => (
                          <li 
                            key={i}
                            className="flex items-start gap-2 mb-2"
                          >
                            <CheckCircle 
                              size={18} 
                              style={{ 
                                color: 'var(--primary)',
                                flexShrink: 0,
                                marginTop: '2px'
                              }} 
                            />
                            <span 
                              style={{
                                fontFamily: 'Lexend, sans-serif',
                                fontSize: 'var(--text-base)',
                                color: 'var(--foreground)',
                                lineHeight: '1.5'
                              }}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Methodology Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: '24px',
                  lineHeight: 'var(--line-height-snug)',
                  letterSpacing: 'var(--letter-spacing-tight)',
                  textAlign: 'center'
                }}
              >
                Our Core Principles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {[
                  {
                    icon: Users,
                    title: 'Collaborative Partnership',
                    description: 'We work as an extension of your team, not as external vendors. Regular communication and feedback loops keep everyone aligned.'
                  },
                  {
                    icon: TestTube,
                    title: 'Iterative Development',
                    description: 'Agile sprints with regular demos and testing ensure we stay on track and adapt quickly to changing requirements.'
                  },
                  {
                    icon: Globe,
                    title: 'Standards-First Approach',
                    description: 'WCAG AA compliance, semantic HTML, and WordPress coding standards are non-negotiable in every project.'
                  },
                  {
                    icon: CheckCircle,
                    title: 'Quality Assurance',
                    description: 'Multiple rounds of testing across devices, browsers, and assistive technologies before launch.'
                  }
                ].map((principle, index) => {
                  const Icon = principle.icon;
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
                          backgroundColor: 'var(--primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--primary-foreground)',
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
                          {principle.title}
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
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          description="Common questions about our development process and methodology"
          faqs={processFAQs}
          variant="default"
        />

        {/* CTA Section */}
        <Section 
          spacing="xl"
          style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)',
            textAlign: 'center'
          }}
        >
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-semibold)',
                  marginBottom: '24px',
                  lineHeight: 'var(--line-height-snug)',
                  letterSpacing: 'var(--letter-spacing-tight)'
                }}
              >
                Ready to Start Your Project?
              </h2>
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  marginBottom: '32px',
                  lineHeight: '1.7',
                  opacity: 0.95
                }}
              >
                Let's discuss how our proven process can bring your WordPress vision to life
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                page="contact"
                aria-label="Schedule a consultation"
                style={{
                  backgroundColor: 'var(--primary-foreground)',
                  color: 'var(--primary)'
                }}
              >
                Schedule a Consultation
              </Button>
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}