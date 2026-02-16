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


import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../blocks/theme/Breadcrumbs';
import { CTASection } from '../patterns/CTASection';
import { FAQSection } from '../patterns/FAQSection';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { processFAQs } from '../../data/faqs';
import { CheckCircle, Target, Users, Rocket, Code, Palette, TestTube, Globe } from 'lucide-react';
import '@/styles/templates/page-about.css';

export function AboutProcessTemplate() {
  return (
    <>
      {/* Breadcrumbs */}
        <section className="wp-block-breadcrumbs-section">
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Our Process' }
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
                Our Process
              </Heading>

              <Paragraph size="large" className="about-page__hero-desc">
                A proven methodology that transforms ideas into exceptional WordPress experiences. Our systematic approach ensures quality, efficiency, and success at every stage.
              </Paragraph>
            </div>
          </Container>
        </Section>

        {/* Process Steps Section */}
        <Section spacing="xl" className="about-page__story-section">
          <Container>
            <div className="about-page__section-header">
              <Heading level={2} className="about-page__section-title">
                Four-Phase Development Cycle
              </Heading>
              <Paragraph className="about-page__section-desc">
                From discovery to delivery, every project follows our battle-tested framework
              </Paragraph>
            </div>

            <div className="wp-grid-2-cols wp-gap-8">
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
                    className="about-page__story-card wp-relative"
                  >
                    {/* Phase Number Background */}
                    <div 
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'clamp(64px, 8vw, 96px)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--primary)',
                        opacity: 0.08,
                        position: 'absolute',
                        top: 'var(--spacing-6)',
                        right: 'var(--spacing-6)',
                        lineHeight: '1',
                        pointerEvents: 'none'
                      }}
                    >
                      {step.phase}
                    </div>

                    {/* Icon */}
                    <div 
                      className="wp-mb-6"
                      style={{
                        width: 'var(--spacing-16)',
                        height: 'var(--spacing-16)',
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
                    <Heading level={3} className="about-page__story-card-title">
                      {step.title}
                    </Heading>

                    {/* Description */}
                    <Paragraph className="about-page__story-card-text wp-mb-6">
                      {step.description}
                    </Paragraph>

                    {/* Deliverables */}
                    <div>
                      <Heading 
                        level={4}
                        style={{
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--foreground)',
                          marginBottom: 'var(--spacing-3)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}
                      >
                        Key Deliverables
                      </Heading>
                      <ul className="wp-m-0 wp-p-0 wp-list-none">
                        {step.deliverables.map((item, i) => (
                          <li 
                            key={i}
                            className="wp-flex wp-items-start wp-gap-2 wp-mb-2"
                          >
                            <CheckCircle 
                              size={18} 
                              style={{ 
                                color: 'var(--primary)', 
                                flexShrink: 0,
                                marginTop: 'var(--spacing-0-5)'
                              }} 
                            />
                            <Paragraph 
                              style={{
                                fontSize: 'var(--text-base)',
                                color: 'var(--foreground)',
                                lineHeight: '1.5'
                              }}
                            >
                              {item}
                            </Paragraph>
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
        <Section spacing="xl" className="about-page__mission-section">
          <Container>
            <div className="about-page__section-header">
              <Heading level={2} className="about-page__section-title">
                Our Core Principles
              </Heading>
            </div>

            <div className="wp-grid-2-cols wp-gap-6 wp-mt-12">
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
                    className="wp-flex wp-gap-4 wp-p-6 wp-bg-card wp-border wp-border-border-soft wp-rounded-xl"
                  >
                    <div 
                      style={{
                        width: 'var(--spacing-12)',
                        height: 'var(--spacing-12)',
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
                      <Heading level={3} className="about-page__story-card-title wp-mb-2">
                        {principle.title}
                      </Heading>
                      <Paragraph className="about-page__story-card-text wp-m-0">
                        {principle.description}
                      </Paragraph>
                    </div>
                  </div>
                );
              })}
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
        <CTASection
          title="Ready to Start Your Project?"
          description="Let's discuss how our proven process can bring your WordPress vision to life"
          primaryButtonText="Schedule a Consultation"
          primaryButtonPage="contact"
          variant="highlighted"
          buttonSize="lg"
        />
    </>
  );
}