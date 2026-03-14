/**
 * Free WooCommerce Consultation Template
 *
 * Theme: "Neon Commerce Booking"
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - All styling via BEM classes in page-free-woo-consultation.css
 * - Colors via scoped CSS variables (no hardcoded hex in JSX)
 * - Fonts: var(--font-primary), var(--font-secondary)
 *
 * @see /src/styles/templates/page-free-woo-consultation.css
 */

import '../../../styles/templates/page-free-woo-consultation.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Button } from '../blocks/design/Buttons';
import { FunkyCTA } from '../patterns/FunkyCTA';
import {
  CalendarPlus,
  VideoCamera,
  ShoppingCart,
  TrendUp,
  Clock,
  CheckCircle,
  CurrencyCircleDollar
} from '@phosphor-icons/react';

export function FreeWooConsultationTemplate() {
  return (
    <div className="woo-consult-page">
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Free Woo Consultation' },
        ]}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="woo-consult-page__hero">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="woo-consult-page__hero-content">
              <div className="woo-consult-page__badge">
                <CurrencyCircleDollar size={16} weight="fill" />
                ECOMMERCE EXPERTS
              </div>
              <h1 className="woo-consult-page__title">
                Free <span className="woo-consult-page__highlight">WooCommerce</span> Consultation
              </h1>
              <p className="woo-consult-page__desc">
                Struggling with slow checkout, conversion bottlenecks, or complex shipping rules? Let our WooCommerce experts diagnose your store.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          SCHEDULER SECTION
          ============================================ */}
      <section className="woo-consult-page__scheduler-section">
        <Container>
          <div className="woo-consult-page__layout">
            
            {/* LEFT: INFO PANEL */}
            <ScrollReveal animation="fade-right">
              <div className="woo-consult-page__info">
                <div className="woo-consult-page__info-card">
                  <h3 className="woo-consult-page__info-title">Store Audit Topics</h3>
                  <ul className="woo-consult-page__info-list">
                    <li className="woo-consult-page__info-item">
                      <TrendUp className="woo-consult-page__info-icon" size={24} weight="duotone" />
                      <span><strong>Conversion Rate Optimization:</strong> Identify checkout friction and UI/UX improvements.</span>
                    </li>
                    <li className="woo-consult-page__info-item">
                      <ShoppingCart className="woo-consult-page__info-icon" size={24} weight="duotone" />
                      <span><strong>Technical Architecture:</strong> Review hosting, caching, and plugin stack for performance gains.</span>
                    </li>
                    <li className="woo-consult-page__info-item">
                      <CheckCircle className="woo-consult-page__info-icon" size={24} weight="duotone" />
                      <span><strong>Integration Strategy:</strong> Connecting ERPs, CRMs, and payment gateways seamlessly.</span>
                    </li>
                  </ul>
                </div>

                <div className="woo-consult-page__info-card">
                  <h3 className="woo-consult-page__info-title">Meeting Details</h3>
                  <ul className="woo-consult-page__info-list">
                    <li className="woo-consult-page__info-item">
                      <Clock className="woo-consult-page__info-icon" size={20} />
                      <span>45 Minutes Deep-Dive</span>
                    </li>
                    <li className="woo-consult-page__info-item">
                      <VideoCamera className="woo-consult-page__info-icon" size={20} />
                      <span>Google Meet or Zoom</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT: MOCK CALENDAR EMBED */}
            <ScrollReveal animation="fade-left" delay={100}>
              <div className="woo-consult-page__calendar-wrapper">
                <div className="woo-consult-page__calendar-mock-icon">
                  <CalendarPlus size={40} weight="duotone" />
                </div>
                <h2 className="woo-consult-page__calendar-title">Select a Date & Time</h2>
                <p className="woo-consult-page__calendar-desc">
                  This is a placeholder for a scheduling widget like Calendly, SavvyCal, or HubSpot Meetings.
                </p>
                <Button size="lg" className="wp-mt-4">
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
        title="Looking for a custom build?"
        description="Provide us with your detailed requirements and technical specifications through our project briefing form."
        buttonText="Go to Project Briefing"
        buttonPage="briefing"
        benefits={[
          'Accurate timeline estimation',
          'Architecture recommendations',
          'Detailed cost breakdown'
        ]}
      />
    </div>
  );
}