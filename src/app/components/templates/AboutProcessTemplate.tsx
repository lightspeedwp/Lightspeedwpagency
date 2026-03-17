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
import { aboutProcessSteps } from '../../data/about-process-template-data';
import {
  CheckCircle,
  Target,
  Users,
  Rocket,
  TestTube as Flask,
  Globe,
  Lightning as Zap,
  Stack as Layers,
  Gear as Settings
} from '@phosphor-icons/react';

/* Route-level CSS */
import '../../../styles/templates/page-about-process.css';

export function AboutProcessTemplate() {
  const parallaxRef = useHeroParallax(0.3);

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
      <section className="about-process__hero">
        <img
          ref={parallaxRef}
          src="https://images.unsplash.com/photo-1588007375181-2f890dc38ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjBibHVlcHJpbnQlMjBuZW9uJTIwdGVjaCUyMHByb2Nlc3N8ZW58MXx8fHwxNzcxMzU4NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract digital blueprint background"
          className="about-process__hero-bg"
        />
        <div className="about-process__hero-overlay" />

        <Container>
          <div className="about-process__hero-content">
            <span className="about-process__hero-badge">
              <Settings size={16} className="about-process__hero-badge-icon" />
              Methodology
            </span>

            <h1 className="about-process__hero-title">
              Our Process
            </h1>

            <p className="about-process__hero-subtitle">
              A proven methodology that transforms ideas into exceptional WordPress experiences. Systematic, scalable, and built for success.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Process Steps (Vertical Timeline) ── */}
      <section className="about-process__steps">
        <Container>
          <div className="about-process__steps-header">
            <Heading level={2} className="about-process__steps-title">
              Four-phase cycle
            </Heading>
            <p className="about-process__steps-desc">
              From discovery to delivery, every project follows our battle-tested framework.
            </p>
          </div>

          <div className="about-process__steps-container">
            {/* The Vertical Line */}
            <div className="about-process__timeline-line" />

            {aboutProcessSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="about-process__step-item">
                  {/* Center Node */}
                  <div className="about-process__step-node">
                    {step.phase}
                  </div>

                  {/* Content Card */}
                  <div className="about-process__step-content">
                    <div className="about-process__step-header">
                      <div className="about-process__step-icon">
                        <Icon size={24} />
                      </div>
                      <Heading level={3} className="about-process__step-title">
                        {step.title}
                      </Heading>
                    </div>

                    <Paragraph className="about-process__step-desc">
                      {step.description}
                    </Paragraph>

                    <div className="about-process__deliverables">
                      <div className="about-process__deliverables-title">
                        Key Deliverables
                      </div>
                      <div className="about-process__deliverables-list">
                        {step.deliverables.map((item, i) => (
                          <span key={i} className="about-process__tag">
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
      <section className="about-process__methodology">
        <Container>
          <div className="about-process__methodology-header">
            <Heading level={2} className="about-process__methodology-title">
              Core principles
            </Heading>
            <p className="about-process__methodology-desc">
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
      <section className="about-process__faq">
        <Container>
          <div className="about-process__faq-wrapper">
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