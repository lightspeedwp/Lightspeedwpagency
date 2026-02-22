/**
 * Privacy Policy Template — Funky Neon Redesign
 *
 * WordPress template: templates/page-privacy-policy.html
 *
 * Legal page displaying privacy policy content.
 * Pattern order: Hero → Content → Contact Box → CTA
 *
 * Theme: Neon shield motif, glassmorphism content cards
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
import { Shield, Lock, Eye, FileText, AlertCircle, CheckCircle } from 'lucide-react';


// Import Mock Data
import { privacyPolicyContent } from '../../data/legal';

// Icon mapping
const icons = [FileText, CheckCircle, Eye, Lock, AlertCircle];

export function PrivacyPolicyTemplate() {
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
          alt="Abstract neon legal shield"
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
              <Shield size={16} />
              Privacy Policy
            </span>

            <h1 className="legal-page__hero-title-funky">
              {privacyPolicyContent.title}
            </h1>

            <p className="legal-page__hero-desc-funky">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>

            <p className="legal-page__hero-meta-funky">
              Last updated: {privacyPolicyContent.lastUpdated}
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
            {privacyPolicyContent.sections.map((section, index) => {
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
                  Contact Us
                </Heading>
                <Paragraph className="legal-page__contact-text">
                  If you have questions about this Privacy Policy, please contact us:
                </Paragraph>
                <Paragraph className="legal-page__contact-details">
                  <strong>Email:</strong> privacy@lightspeedwp.agency<br />
                  <strong>Website:</strong> https://lightspeedwp.agency/contact<br />
                  <strong>Last Updated:</strong> {privacyPolicyContent.lastUpdated}
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
        title="Have Questions About Privacy?"
        description="Our team is here to help. Contact us for any privacy-related inquiries."
        buttonText="Contact Us"
        buttonPage="contact"
        benefits={[
          'Transparent data practices',
          'GDPR compliant',
          'Your data is never sold',
          '24-hour response time',
          'Dedicated privacy team'
        ]}
      />
    </div>
  );
}
