/**
 * Contact Page Template — "Communication Hub" Funky Redesign
 *
 * Theme: Neon communication, glassmorphism form, floating orbs
 * Features:
 * - Parallax hero with floating orbs
 * - Neon glow badge
 * - Glassmorphism form wrapper
 * - Contact method cards with neon hover
 * - "Why Contact Us" reason cards
 * - Stats bar with neon grid overlay
 * - FAQ section
 * - FunkyCTA conversion section
 * - ScrollReveal entry animations
 * - 100% CSS variable compliance
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - No inline Tailwind classes
 * - All styling via @/styles/templates/contact-page.css
 * - BEM naming throughout
 */

/* Route-level CSS */
import '../../../styles/templates/contact-page.css';
import '../../../styles/templates/page-contact.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { CheckList } from '../patterns/CheckList';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { StatsSection } from '../patterns/StatsSection';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { useHeroParallax } from '../../hooks/useHeroParallax';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import {
  Mail,
  MessageSquare,
  Headphones,
  MapPin,
  Clock,
  ArrowRight,
  Award,
  Users,
  Zap
} from 'lucide-react';

// Import centralized data
import {
  contactPageHero,
  contactPageMethods,
  contactPageReasons,
  contactPageFAQs,
  contactPageOffice
} from '../../data/contact-page';
import { contactHeroMessaging } from '../../data/three-tier-model';

export function ContactPageTemplate() {
  const parallaxRef = useHeroParallax(0.5);

  return (
    <div className="contact-page">
      {/* ============================================
          1. HERO SECTION (Parallax + Floating Orbs)
          ============================================ */}
      <section className="contact-page__hero">
        {/* Parallax Background */}
        <img
          ref={parallaxRef}
          src="https://images.unsplash.com/photo-1760112982272-ddca9a4a7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5lb24lMjBjb21tdW5pY2F0aW9uJTIwZGlnaXRhbCUyMHdhdmVzfGVufDF8fHx8MTc3MTQ5MjM3OXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract neon communication waves"
          className="contact-page__hero-bg"
        />

        {/* Gradient Overlay */}
        <div className="contact-page__hero-overlay" />

        {/* Floating Orbs */}
        <div className="contact-page__orb contact-page__orb--1" />
        <div className="contact-page__orb contact-page__orb--2" />
        <div className="contact-page__orb contact-page__orb--3" />

        {/* Floating Icons (decorative) */}
        <div className="contact-page__floating-icon contact-page__floating-icon--1">
          <MessageSquare width="100%" height="100%" />
        </div>
        <div className="contact-page__floating-icon contact-page__floating-icon--2">
          <Mail width="100%" height="100%" />
        </div>
        <div className="contact-page__floating-icon contact-page__floating-icon--3">
          <Headphones width="100%" height="100%" />
        </div>

        <Container>
          <div className="contact-page__hero-content">
            <span className="contact-page__hero-badge">
              <MessageSquare size={16} />
              {contactHeroMessaging.badge}
            </span>

            <h1 className="contact-page__hero-title">
              {contactHeroMessaging.title.line1} <br />
              <span style={{ color: 'var(--accent)' }}>
                {contactHeroMessaging.title.line2}
              </span>
            </h1>

            <p className="contact-page__hero-subtitle">
              {contactHeroMessaging.subtitle}
            </p>

            {/* Systems Audit Features List */}
            <div className="contact-page__hero-features-wrapper">
              <CheckList 
                items={contactHeroMessaging.features}
                icon={Award}
                variant="default"
                className="contact-page__hero-features"
              />
            </div>
          </div>
        </Container>
        <ScrollDownArrow targetId="contact-main" />
      </section>

      {/* ============================================
          2. MAIN SECTION (Form + Contact Info)
          ============================================ */}
      <section id="contact-main" className="contact-page__main">
        <Container>
          <div className="contact-page__layout">
            {/* Left Column: Info + Methods */}
            <ScrollReveal animation="fade-up">
              <div className="contact-page__info">
                <div className="contact-page__info-header">
                  <Heading level={2} className="contact-page__info-title">
                    Get in touch
                  </Heading>
                  <Paragraph className="contact-page__info-desc">
                    Choose the best way to reach us. We respond to all inquiries within 24 hours.
                  </Paragraph>
                </div>

                <div className="contact-page__methods">
                  {contactPageMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <div key={index} className="contact-page__method-card">
                        <div className="contact-page__method-icon">
                          <Icon size={22} />
                        </div>
                        <div className="contact-page__method-content">
                          <span className="contact-page__method-label">{method.title}</span>
                          <span className="contact-page__method-value">{method.value}</span>
                          {method.href && method.href !== '#' && (
                            <a href={method.href} className="contact-page__method-link">
                              {method.title === 'Email Us' || method.title === 'Support Email'
                                ? 'Send a message'
                                : method.title === 'Visit Our Office'
                                ? 'View on map'
                                : 'Connect'}
                              <ArrowRight size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Form */}
            <ScrollReveal animation="fade-up" delay={150}>
              <div className="contact-page__form-wrapper">
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          3. WHY CONTACT US (Reason Cards)
          ============================================ */}
      <section className="contact-page__reasons">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="contact-page__section-header">
              <h2 className="contact-page__section-title">
                Why work with us?
              </h2>
              <p className="contact-page__section-desc">
                We deliver exceptional WordPress solutions backed by years of expertise.
              </p>
            </div>
          </ScrollReveal>

          <div className="contact-page__reasons-grid">
            {contactPageReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                  <div className="contact-page__reason-card">
                    <div className="contact-page__reason-glow" />
                    <div className="contact-page__reason-inner">
                      <div className="contact-page__reason-icon">
                        <Icon size={28} />
                      </div>
                      <Heading level={3} className="contact-page__reason-title">
                        {reason.title}
                      </Heading>
                      <Paragraph className="contact-page__reason-desc">
                        {reason.description}
                      </Paragraph>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          4. STATS BAR (Gradient + Neon Grid)
          ============================================ */}
      <div className="contact-page__stats-wrapper">
        <StatsSection
          stats={contactPageHero.stats}
          variant="funky"
        />
      </div>

      {/* ============================================
          5. OFFICE CARD
          ============================================ */}
      <section className="contact-page__office">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="contact-page__office-card">
              <MapPin size={32} style={{ color: 'var(--primary)', margin: '0 auto var(--spacing-4)' }} />
              <h3 className="contact-page__office-name">
                {contactPageOffice.name}
              </h3>
              <p className="contact-page__office-address">
                {contactPageOffice.address.street}, {contactPageOffice.address.suburb}<br />
                {contactPageOffice.address.city}, {contactPageOffice.address.postalCode}<br />
                {contactPageOffice.address.country}
              </p>
              <p className="contact-page__office-hours">
                <Clock size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 'var(--spacing-1)' }} />
                {contactPageOffice.hours}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          6. FAQ SECTION
          ============================================ */}
      <section className="contact-page__faq">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="contact-page__section-header">
              <h2 className="contact-page__section-title">
                Questions?
              </h2>
              <p className="contact-page__section-desc">
                Find answers to common questions about working with us.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <div className="contact-page__faq-wrapper">
              <FAQSection
                faqs={contactPageFAQs}
                variant="default"
              />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          7. CTA SECTION (FunkyCTA)
          ============================================ */}
      <FunkyCTA
        title="Ready to start your project?"
        description="Let's discuss your requirements and create something extraordinary together."
        buttonText="Book a Free Consultation"
        buttonPage="contact"
        benefits={[
          'Free initial consultation',
          'Fixed-price project quotes',
          'Dedicated project manager',
          '24-hour response time',
          'Post-launch support included'
        ]}
      />
    </div>
  );
}