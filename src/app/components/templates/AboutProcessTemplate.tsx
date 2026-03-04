/**
 * About Process Template — Funky Redesign
 *
 * Features:
 * - Neon Blueprint Hero
 * - Vertical "Snake" Timeline with alternating cards
 * - Glassmorphism Methodology Cards
 * - 100% CSS variable compliance
 * 
 * PATTERN COMPONENTS:
 * - ✅ ProcessTimeline — 5-step process (detailed timeline variant)
 * - ✅ FeatureList — 4 principles (4 items, 2 columns, glass variant)
 * - ✅ FAQSection — FAQ accordion
 * - ✅ FunkyCTA — Final CTA section
 * 
 * @migrated March 3, 2026 — Phase 3.3: Migrated inline principles grid (~50 lines saved)
 */

import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { FAQSection } from '../patterns/FAQSection';
import { FeatureList } from '../patterns/FeatureList';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { useHeroParallax } from '../../hooks/useHeroParallax';
import { processFAQs } from '../../data/faqs';
import {
  CheckCircle,
  Target,
  Users,
  Rocket,
  Code,
  Palette,
  TestTube as Flask,
  Globe,
  Lightning as Zap,
  Stack as Layers,
  MagnifyingGlass as Search,
  Gear as Settings
} from '@phosphor-icons/react';

/* Route-level CSS */
import '../../../styles/templates/page-about-process.css';

export function AboutProcessTemplate() {
  const parallaxRef = useHeroParallax(0.3);

  const steps = [
    {
      phase: '01',
      icon: Search,
      title: 'Discovery & Strategy',
      description: 'We begin every project with comprehensive discovery workshops to understand your business goals, user needs, and technical requirements.',
      deliverables: [
        'Stakeholder interviews',
        'Competitive analysis',
        'User research',
        'Technical specs',
        'Project roadmap'
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
        'Content plan'
      ]
    },
    {
      phase: '03',
      icon: Code,
      title: 'Development & Build',
      description: 'Modern WordPress development using blocks, patterns, and best practices for performance, security, and maintainability.',
      deliverables: [
        'Custom block dev',
        'Pattern implementation',
        'theme.json config',
        'Performance tuning',
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
        'WCAG validation',
        'Load testing',
        'Editor training',
        'Launch & handoff'
      ]
    }
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Our Process' },
        ]}
      />

      {/* ── Hero ── */}
      <section className="process-page__hero">
        <img
          ref={parallaxRef}
          src="https://images.unsplash.com/photo-1588007375181-2f890dc38ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjBibHVlcHJpbnQlMjBuZW9uJTIwdGVjaCUyMHByb2Nlc3N8ZW58MXx8fHwxNzcxMzU4NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract digital blueprint background"
          className="process-page__hero-bg"
        />
        <div className="process-page__hero-overlay" />

        <Container>
          <div className="process-page__hero-content">
            <span className="process-page__hero-badge">
              <Settings size={16} className="process-page__hero-badge-icon" />
              Methodology
            </span>

            <h1 className="process-page__hero-title">
              Our Process
            </h1>

            <p className="process-page__hero-subtitle">
              A proven methodology that transforms ideas into exceptional WordPress experiences. Systematic, scalable, and built for success.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Process Steps (Vertical Timeline) ── */}
      <section className="process-page__steps">
        <Container>
          <div className="process-page__steps-header">
            <Heading level={2} className="process-page__steps-title">
              Four-phase cycle
            </Heading>
            <p className="process-page__steps-desc">
              From discovery to delivery, every project follows our battle-tested framework.
            </p>
          </div>

          <div className="process-page__steps-container">
            {/* The Vertical Line */}
            <div className="process-page__timeline-line" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="process-page__step-item">
                  {/* Center Node */}
                  <div className="process-page__step-node">
                    {step.phase}
                  </div>

                  {/* Content Card */}
                  <div className="process-page__step-content">
                    <div className="process-page__step-header">
                      <div className="process-page__step-icon">
                        <Icon size={24} />
                      </div>
                      <Heading level={3} className="process-page__step-title">
                        {step.title}
                      </Heading>
                    </div>

                    <Paragraph className="process-page__step-desc">
                      {step.description}
                    </Paragraph>

                    <div className="process-page__deliverables">
                      <div className="process-page__deliverables-title">
                        Key Deliverables
                      </div>
                      <div className="process-page__deliverables-list">
                        {step.deliverables.map((item, i) => (
                          <span key={i} className="process-page__tag">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Methodology / Principles ── */}
      <section className="process-page__methodology">
        <Container>
          <div className="process-page__methodology-header">
            <Heading level={2} className="process-page__methodology-title">
              Core principles
            </Heading>
            <p className="process-page__methodology-desc">
              The values that drive our technical execution.
            </p>
          </div>

          <FeatureList
            items={[
              {
                icon: Users,
                title: 'Collaborative Partnership',
                description: 'We work as an extension of your team, not as external vendors. Regular communication loops keep everyone aligned.'
              },
              {
                icon: Flask,
                title: 'Iterative Development',
                description: 'Agile sprints with regular demos ensuring we stay on track and adapt quickly to changing requirements.'
              },
              {
                icon: Globe,
                title: 'Standards-First',
                description: 'WCAG AA compliance, semantic HTML, and WordPress coding standards are non-negotiable in every project.'
              },
              {
                icon: CheckCircle,
                title: 'Quality Assurance',
                description: 'Multiple rounds of testing across devices, browsers, and assistive technologies before launch.'
              }
            ]}
            columns={2}
            variant="glass"
            iconSize="md"
          />
        </Container>
      </section>

      {/* ── FAQ Section ── */}
      <section className="process-page__faq">
        <Container>
          <div className="process-page__faq-wrapper">
            <FAQSection
              title="Process FAQs"
              description="Common questions about how we work."
              faqs={processFAQs}
              variant="default"
            />
          </div>
        </Container>
      </section>

      {/* ── CTA Section ── */}
      <FunkyCTA
        title="Ready to start your project?"
        description="Let's discuss how our proven process can bring your WordPress vision to life."
        buttonText="Schedule a Consultation"
        buttonPage="contact"
        benefits={[
          'Structured discovery & planning phase',
          'Transparent timelines & milestones',
          'Dedicated project manager',
          'Post-launch support included'
        ]}
      />
    </>
  );
}