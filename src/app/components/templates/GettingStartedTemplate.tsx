/**
 * Getting Started with LightSpeed Template
 *
 * Theme: "Neon Onboarding"
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - All styling via BEM classes in page-getting-started.css
 * - Colors via scoped CSS variables
 * - Fonts: var(--font-primary), var(--font-secondary)
 *
 * @see /src/styles/templates/page-getting-started.css
 */

import '../../../styles/templates/page-getting-started.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ProcessTimeline } from '../patterns/ProcessTimeline';
import { FAQSection } from '../patterns/FAQSection';
import { Button } from '../blocks/design/Buttons';

const onboardingSteps = [
  {
    title: "1. Project Discovery",
    description: "We review your completed briefing form and schedule a kickoff meeting to align on goals and timeline."
  },
  {
    title: "2. Strategic Planning",
    description: "Our team creates a comprehensive project roadmap, architecture plan, and assigns dedicated resources."
  },
  {
    title: "3. Design & Development",
    description: "We work in agile sprints, providing regular updates and staging links for your review."
  },
  {
    title: "4. QA & Launch",
    description: "Rigorous testing across devices followed by a coordinated launch plan and post-go-live monitoring."
  }
];

const onboardingFaqs = [
  {
    question: "How do we communicate during the project?",
    answer: "We set up a dedicated Slack/Teams channel for quick questions and provide weekly status updates via email. Major milestones involve a scheduled video call."
  },
  {
    question: "What access do you need from me?",
    answer: "Depending on the project, we may need access to your current hosting environment, DNS provider, Google Analytics, and any third-party APIs we are integrating."
  },
  {
    question: "Who will be my main point of contact?",
    answer: "You will be assigned a dedicated Project Manager who will be your primary liaison throughout the entire engagement."
  }
];

export function GettingStartedTemplate() {
  return (
    <div className="onboarding-page">
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Getting Started' },
        ]}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="onboarding-page__hero">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="onboarding-page__badge">
              WELCOME
            </div>
            <h1 className="onboarding-page__title">
              Getting Started with <span className="onboarding-page__highlight">LightSpeed</span>
            </h1>
            <p className="onboarding-page__desc">
              Your comprehensive guide to our onboarding process, expectations, and how we deliver successful projects.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          PROCESS TIMELINE
          ============================================ */}
      <ProcessTimeline 
        title="Your onboarding journey"
        subtitle="What to expect in the coming weeks"
        steps={onboardingSteps}
      />

      {/* ============================================
          RESOURCES SECTION
          ============================================ */}
      <section className="onboarding-page__resources">
        <Container>
          <ScrollReveal animation="fade-up">
            <h2 className="onboarding-page__section-title">Important Resources</h2>
            <div className="wp-grid-3-cols">
              <div className="onboarding-page__card">
                <h3 className="onboarding-page__card-title">Client Intake</h3>
                <p className="onboarding-page__card-desc">If you haven't already, please complete our detailed briefing form.</p>
                <Button page="briefing" variant="outline" size="sm">Go to Briefing Form</Button>
              </div>
              <div className="onboarding-page__card">
                <h3 className="onboarding-page__card-title">Our Policies</h3>
                <p className="onboarding-page__card-desc">Review our service terms and conditions.</p>
                <Button page="terms-conditions" variant="outline" size="sm">View Terms</Button>
              </div>
              <div className="onboarding-page__card">
                <h3 className="onboarding-page__card-title">Technical Support</h3>
                <p className="onboarding-page__card-desc">Learn how to request support or maintenance.</p>
                <Button page="contact" variant="outline" size="sm">Contact Support</Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          FAQ SECTION
          ============================================ */}
      <FAQSection 
        title="Common questions"
        subtitle="Everything you need to know about starting your project"
        faqs={onboardingFaqs}
      />
    </div>
  );
}