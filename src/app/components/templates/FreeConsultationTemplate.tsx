/**
 * Free Consultation Template
 *
 * Theme: "Neon Booking"
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - All styling via BEM classes in page-free-consultation.css
 * - Colors via scoped CSS variables (no hardcoded hex in JSX)
 * - Fonts: var(--font-primary), var(--font-secondary)
 *
 * @see /src/styles/templates/page-free-consultation.css
 */

import '../../../styles/templates/page-free-consultation.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Button } from '../blocks/design/Buttons';
import { FunkyCTA } from '../patterns/FunkyCTA';
import {
  CalendarPlus,
  VideoCamera,
  Target,
  ChatCircleText,
  Clock,
  CheckCircle,
  Lightning
} from '@phosphor-icons/react';

export function FreeConsultationTemplate() {
  return (
    <div className="consultation-page">
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Free Consultation' },
        ]}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="consultation-page__hero">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="consultation-page__hero-content">
              <div className="consultation-page__badge">
                <Lightning size={16} weight="fill" />
                NO OBLIGATION
              </div>
              <h1 className="consultation-page__title">
                Book Your <span className="consultation-page__highlight">Discovery Call</span>
              </h1>
              <p className="consultation-page__desc">
                Let's discuss your project goals, technical requirements, and how we can help your business scale efficiently.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          SCHEDULER SECTION
          ============================================ */}
      <section className="consultation-page__scheduler-section">
        <Container>
          <div className="consultation-page__layout">
            
            {/* LEFT: INFO PANEL */}
            <ScrollReveal animation="fade-right">
              <div className="consultation-page__info">
                <div className="consultation-page__info-card">
                  <h3 className="consultation-page__info-title">What to expect</h3>
                  <ul className="consultation-page__info-list">
                    <li className="consultation-page__info-item">
                      <Target className="consultation-page__info-icon" size={24} weight="duotone" />
                      <span><strong>Goal Alignment:</strong> We'll discuss your primary business objectives and current bottlenecks.</span>
                    </li>
                    <li className="consultation-page__info-item">
                      <ChatCircleText className="consultation-page__info-icon" size={24} weight="duotone" />
                      <span><strong>Technical Review:</strong> High-level overview of your existing stack and potential solutions.</span>
                    </li>
                    <li className="consultation-page__info-item">
                      <CheckCircle className="consultation-page__info-icon" size={24} weight="duotone" />
                      <span><strong>Next Steps:</strong> Clear actionable advice and an understanding of our process.</span>
                    </li>
                  </ul>
                </div>

                <div className="consultation-page__info-card">
                  <h3 className="consultation-page__info-title">Meeting Details</h3>
                  <ul className="consultation-page__info-list">
                    <li className="consultation-page__info-item">
                      <Clock className="consultation-page__info-icon" size={20} />
                      <span>30 Minutes</span>
                    </li>
                    <li className="consultation-page__info-item">
                      <VideoCamera className="consultation-page__info-icon" size={20} />
                      <span>Google Meet or Zoom</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT: MOCK CALENDAR EMBED */}
            <ScrollReveal animation="fade-left" delay={100}>
              <div className="consultation-page__calendar-wrapper">
                <div className="consultation-page__calendar-mock-icon">
                  <CalendarPlus size={40} weight="duotone" />
                </div>
                <h2 className="consultation-page__calendar-title">Select a Date & Time</h2>
                <p className="consultation-page__calendar-desc">
                  This is a placeholder for a scheduling widget like Calendly, SavvyCal, or HubSpot Meetings.
                </p>
                <Button size="lg" style={{ marginTop: 'var(--spacing-4)' }}>
                  Mock Open Scheduler
                </Button>
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ============================================
          CTA
          ============================================ */}
      <FunkyCTA
        title="Not ready for a call?"
        description="Fill out our project briefing form to give us more details async, or send us an email directly."
        buttonText="Go to Project Briefing"
        buttonPage="briefing"
        benefits={[
          'Detailed scoping',
          'Asynchronous process',
          'Accurate estimates'
        ]}
      />
    </div>
  );
}