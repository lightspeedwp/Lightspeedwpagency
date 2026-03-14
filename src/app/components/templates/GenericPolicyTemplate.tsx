/**
 * Generic Policy Template
 *
 * Theme: "Neon Legal"
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - All styling via BEM classes in page-legal.css
 * - Colors via scoped CSS variables
 * - Fonts: var(--font-primary), var(--font-secondary)
 *
 * @see /src/styles/templates/page-legal.css
 */

import '../../../styles/templates/page-legal.css';
import { Container } from '../common/Container';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { useHeroParallax } from '../../hooks/useHeroParallax';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { FileText, WarningCircle as AlertCircle, CheckCircle, Shield, Handshake, Users, Scales, MapPin, MagnifyingGlass } from '@phosphor-icons/react';
import { useLocation } from 'react-router';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';

export function GenericPolicyTemplate() {
  const parallaxRef = useHeroParallax(0.5);
  const location = useLocation();
  const path = location.pathname;

  let title = "Company Policies";
  let description = "Read our guidelines and principles that govern how we operate and serve our clients.";
  let icon = <Shield size={48} weight="duotone" className="legal-hero__badge-icon" />;

  // Map route to content
  if (path.includes('publishing-principles')) {
    title = "Publishing Principles";
    description = "Our standards for accuracy, integrity, and quality in all content we publish.";
    icon = <FileText size={48} weight="duotone" className="legal-hero__badge-icon" />;
  } else if (path.includes('diversity-content')) {
    title = "Diversity Content Policy";
    description = "Our commitment to representing diverse perspectives and voices in our content.";
    icon = <Users size={48} weight="duotone" className="legal-hero__badge-icon" />;
  } else if (path.includes('diversity-staffing')) {
    title = "Diversity Staffing Policy";
    description = "Our commitment to building an inclusive and diverse team.";
    icon = <Users size={48} weight="duotone" className="legal-hero__badge-icon" />;
  } else if (path.includes('ethics')) {
    title = "Ethics Policy";
    description = "The ethical standards that guide our business decisions and partnerships.";
    icon = <Scales size={48} weight="duotone" className="legal-hero__badge-icon" />;
  } else if (path.includes('feedback')) {
    title = "Feedback Policy";
    description = "How we gather, process, and act upon client and community feedback.";
    icon = <Handshake size={48} weight="duotone" className="legal-hero__badge-icon" />;
  } else if (path.includes('corrections')) {
    title = "Corrections Policy";
    description = "Our process for addressing and rectifying errors in our published content or services.";
    icon = <CheckCircle size={48} weight="duotone" className="legal-hero__badge-icon" />;
  } else if (path.includes('ownership-funding')) {
    title = "Ownership & Funding";
    description = "Transparency regarding our company structure and financial backing.";
    icon = <MagnifyingGlass size={48} weight="duotone" className="legal-hero__badge-icon" />;
  }

  return (
    <div className="legal-page">
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Policies', href: '/policies' },
          { label: title },
        ]}
      />

      {/* ============================================
          HERO SECTION (Parallax + Floating Orbs)
          ============================================ */}
      <section className="legal-hero wp-bg-background" ref={parallaxRef}>
        <div className="legal-hero__glow" aria-hidden="true" />
        <div className="legal-hero__mesh" aria-hidden="true" />
        
        <Container>
          <div className="legal-hero__content">
            <ScrollReveal animation="fade-up">
              <div className="legal-hero__badge">
                {icon}
                <span className="legal-hero__badge-text">Last Updated: March 2026</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="legal-hero__title">
                {title}
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="legal-hero__lead">
                {description}
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          CONTENT SECTION (Glassmorphism Cards)
          ============================================ */}
      <section className="legal-content">
        <Container>
          <div className="wp-grid-3-cols wp-gap-12">
            
            {/* Sidebar Navigation */}
            <aside className="legal-content__sidebar wp-col-span-1">
              <div className="legal-content__nav-card sticky-sidebar">
                <h3 className="legal-content__nav-title">Other Policies</h3>
                <nav className="legal-content__nav">
                  <a href="/policies-publishing-principles" className={`legal-content__nav-link ${path.includes('publishing-principles') ? 'active' : ''}`}>Publishing Principles</a>
                  <a href="/policies-diversity-content" className={`legal-content__nav-link ${path.includes('diversity-content') ? 'active' : ''}`}>Diversity Content</a>
                  <a href="/policies-diversity-staffing" className={`legal-content__nav-link ${path.includes('diversity-staffing') ? 'active' : ''}`}>Diversity Staffing</a>
                  <a href="/policies-ethics" className={`legal-content__nav-link ${path.includes('ethics') ? 'active' : ''}`}>Ethics Policy</a>
                  <a href="/policies-feedback" className={`legal-content__nav-link ${path.includes('feedback') ? 'active' : ''}`}>Feedback Policy</a>
                  <a href="/policies-corrections" className={`legal-content__nav-link ${path.includes('corrections') ? 'active' : ''}`}>Corrections Policy</a>
                  <a href="/policies-ownership-funding" className={`legal-content__nav-link ${path.includes('ownership-funding') ? 'active' : ''}`}>Ownership & Funding</a>
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="legal-content__main" style={{ gridColumn: '2 / -1' }}>
              <ScrollReveal animation="fade-up">
                <div className="legal-content__document wp-block-group">
                  <Heading level={2} className="legal-content__heading">Overview</Heading>
                  <Paragraph className="legal-content__text">
                    This document outlines our official stance and operating procedures regarding {title.toLowerCase()}. We believe in complete transparency and have made these guidelines publicly available to ensure alignment with our clients, partners, and the broader community.
                  </Paragraph>
                  
                  <Heading level={2} className="legal-content__heading">Core Principles</Heading>
                  <ul className="legal-content__list wp-block-list">
                    <li>Maintain transparency in all our operations and communications.</li>
                    <li>Uphold the highest standards of integrity and professional conduct.</li>
                    <li>Ensure equitable and fair practices across all aspects of our business.</li>
                    <li>Continuously evaluate and improve our policies to meet evolving industry standards.</li>
                  </ul>

                  <Heading level={2} className="legal-content__heading">Implementation & Compliance</Heading>
                  <Paragraph className="legal-content__text">
                    All team members and partners are expected to adhere to these guidelines. We conduct regular reviews to ensure ongoing compliance and relevance. If you have any questions or concerns regarding this policy, please reach out to our team.
                  </Paragraph>

                  {/* Contact Box */}
                  <div className="legal-content__contact-box">
                    <AlertCircle size={32} weight="duotone" className="legal-content__contact-icon" />
                    <div className="legal-content__contact-text">
                      <h4 className="legal-content__contact-title">Questions about this policy?</h4>
                      <p>If you have any questions, please contact us at <a href="mailto:legal@lightspeed.co.za">legal@lightspeed.co.za</a></p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </main>
          </div>
        </Container>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <FunkyCTA
        title="Ready to build something amazing?"
        description="Let's collaborate on your next WordPress or WooCommerce project."
        primaryButtonText="Start a Project"
        primaryButtonHref="/contact"
        secondaryButtonText="View Our Work"
        secondaryButtonHref="/portfolio"
      />
    </div>
  );
}