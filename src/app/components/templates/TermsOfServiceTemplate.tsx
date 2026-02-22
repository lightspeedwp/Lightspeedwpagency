/**
 * Terms of Service Template — Funky Neon Redesign
 *
 * WordPress template: templates/page-terms-of-service.html
 *
 * Legal page displaying terms of service content.
 * Pattern order: Hero → Content → Contact Box → CTA
 *
 * Theme: Neon balance motif, glassmorphism content cards
 * Features:
 * - Parallax hero with floating orbs + mesh grid
 * - Neon glow badge
 * - Glassmorphism section cards
 * - FunkyCTA conversion section
 * - ScrollReveal entry animations
 * - 100% CSS variable compliance
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - No inline Tailwind classes
 * - All styling via @/styles/templates/page-legal.css
 * - BEM naming throughout
 */

import { Container } from '../common/Container';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { useHeroParallax } from '../../hooks/useHeroParallax';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { FileCheck, Scale, AlertTriangle, CheckCircle2, XCircle, Users } from 'lucide-react';


// Import Mock Data
import { termsOfServiceContent } from '../../data/legal';

// Icon mapping
const icons = [FileCheck, CheckCircle2, Users, CheckCircle2, Scale, XCircle, AlertTriangle];

export function TermsOfServiceTemplate() {
  const parallaxRef = useHeroParallax(0.5);

  return (
    <div className="legal-page">
      {/* ============================================
          1. HERO SECTION (Parallax + Floating Orbs)
          ============================================ */}
      <section className="legal-page__hero-funky">
        <img
          ref={parallaxRef}
          src="https://images.unsplash.com/photo-1710915125520-2bb01788996a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5lb24lMjBsZWdhbCUyMGRvY3VtZW50JTIwc2hpZWxkfGVufDF8fHx8MTc3MTU4NDYzOXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract neon legal document"
          className="legal-page__hero-bg"
        />
        <div className="legal-page__hero-overlay-funky" />
        <div className="legal-page__hero-grid" />

        {/* Floating Orbs */}
        <div className="legal-page__orb legal-page__orb--1" />
        <div className="legal-page__orb legal-page__orb--2" />

        <Container>
          <div className="legal-page__hero-content-funky">
            <span className="legal-page__hero-badge">
              <Scale size={16} />
              Terms of Service
            </span>

            <h1 className="legal-page__hero-title-funky">
              {termsOfServiceContent.title}
            </h1>

            <p className="legal-page__hero-desc-funky">
              Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
            </p>

            <p className="legal-page__hero-meta-funky">
              Last updated: {termsOfServiceContent.lastUpdated}
            </p>
          </div>
        </Container>
      </section>

      {/* ============================================
          2. CONTENT SECTIONS
          ============================================ */}
      <section className="legal-page__content-section">
        <Container>
          <div className="legal-page__content-container">
            {termsOfServiceContent.sections.map((section, index) => {
              const Icon = icons[index % icons.length];
              return (
                <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                  <div className="legal-page__section">
                    <div className="legal-page__section-header">
                      <div className="legal-page__section-icon">
                        <Icon size={24} />
                      </div>
                      <Heading level={2} className="legal-page__section-title">
                        {section.heading}
                      </Heading>
                    </div>

                    <Paragraph className="legal-page__text">
                      {section.content}
                    </Paragraph>
                  </div>
                </ScrollReveal>
              );
            })}

            {/* Contact Information */}
            <ScrollReveal animation="fade-up">
              <div className="legal-page__contact-box">
                <Heading level={3} className="legal-page__contact-title">
                  Questions About Our Terms?
                </Heading>
                <Paragraph className="legal-page__contact-text">
                  If you have questions about these Terms of Service, please contact us:
                </Paragraph>
                <Paragraph className="legal-page__contact-details">
                  <strong>Email:</strong> legal@lightspeedwp.agency<br />
                  <strong>Website:</strong> https://lightspeedwp.agency/contact<br />
                  <strong>Last Updated:</strong> {termsOfServiceContent.lastUpdated}
                </Paragraph>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          3. CTA SECTION (FunkyCTA)
          ============================================ */}
      <FunkyCTA
        title="Ready to Get Started?"
        description="Let's discuss your project requirements and create something amazing together."
        buttonText="Start Your Project"
        buttonPage="contact"
        benefits={[
          'Fixed-price project quotes',
          'Transparent terms & conditions',
          'Dedicated project manager',
          'Post-launch support included',
          'No hidden fees or surprises'
        ]}
      />
    </div>
  );
}
