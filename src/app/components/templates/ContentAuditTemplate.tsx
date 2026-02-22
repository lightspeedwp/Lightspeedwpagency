/**
 * Content Audit Template — Funky Neon Redesign
 *
 * WordPress template: templates/page-content-audit.html
 * Sub-service page for Content Audit.
 *
 * Theme: Neon analysis motif, glassmorphism cards
 * Features:
 * - Parallax hero with floating orbs + mesh grid
 * - Neon glow badge
 * - Benefits cards with neon hover glow
 * - Breadcrumbs navigation
 * - FunkyCTA conversion section
 * - ScrollReveal entry animations
 * - 100% CSS variable compliance
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - No inline Tailwind classes
 * - All styling via BEM classes
 * - BEM naming throughout
 *
 * @see /guidelines/templates/overview-templates.md
 */

import { Container } from '../common/Container';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Button } from '../blocks/design/Buttons';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { useHeroParallax } from '../../hooks/useHeroParallax';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { FileSearch, CheckCircle, BarChart, Sparkles } from 'lucide-react';
import { contentServiceDetailed } from '../../data/services-detailed';

export function ContentAuditTemplate() {
  const serviceData = contentServiceDetailed.subServices.find(s => s.id === 'content-audit');
  const parallaxRef = useHeroParallax(0.5);

  return (
    <div className="service-detail">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Services', page: 'services' },
          { label: 'Content', page: 'content-service' },
          { label: 'Content Audit' },
        ]}
      />

      {/* ============================================
          1. HERO SECTION (Funky Neon)
          ============================================ */}
      <section className="service-detail__hero-funky">
        <img
          ref={parallaxRef}
          src="https://images.unsplash.com/photo-1708816826329-61cf56a602c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5lb24lMjBjb250ZW50JTIwYXVkaXQlMjBhbmFseXNpc3xlbnwxfHx8fDE3NzE1ODQ2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract neon content audit analysis"
          className="service-detail__hero-bg"
        />
        <div className="service-detail__hero-overlay" />
        <div className="service-detail__hero-grid" />

        {/* Floating Orbs */}
        <div className="service-detail__orb service-detail__orb--1" />
        <div className="service-detail__orb service-detail__orb--2" />

        <Container>
          <div className="service-detail__hero-content-funky">
            <span className="service-detail__hero-badge">
              <Sparkles size={16} />
              Service
            </span>

            <h1 className="service-detail__hero-title-funky">
              Content <span className="service-detail__hero-highlight">Audit</span>
            </h1>

            <p className="service-detail__hero-subtitle-funky">
              {serviceData?.description || 'Comprehensive content analysis and optimization services'}
            </p>
          </div>
        </Container>
      </section>

      {/* ============================================
          2. BENEFITS GRID
          ============================================ */}
      <section className="service-detail__benefits-section">
        <Container>
          <div className="service-detail__benefits-grid">
            <ScrollReveal animation="fade-up">
              <div className="service-detail__benefit-card">
                <div className="service-detail__benefit-glow" />
                <div className="service-detail__benefit-icon">
                  <FileSearch size={32} />
                </div>
                <Heading level={3} className="service-detail__benefit-title">Inventory Analysis</Heading>
                <Paragraph className="service-detail__benefit-desc">
                  We catalog all existing content assets to understand what you have, where it lives, and how it performs.
                </Paragraph>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <div className="service-detail__benefit-card">
                <div className="service-detail__benefit-glow" />
                <div className="service-detail__benefit-icon">
                  <CheckCircle size={32} />
                </div>
                <Heading level={3} className="service-detail__benefit-title">Quality Assessment</Heading>
                <Paragraph className="service-detail__benefit-desc">
                  Evaluate content against brand guidelines, SEO best practices, and user needs to identify gaps and opportunities.
                </Paragraph>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="service-detail__benefit-card">
                <div className="service-detail__benefit-glow" />
                <div className="service-detail__benefit-icon">
                  <BarChart size={32} />
                </div>
                <Heading level={3} className="service-detail__benefit-title">Performance Data</Heading>
                <Paragraph className="service-detail__benefit-desc">
                  Map analytics data to content items to determine what drives traffic, engagement, and conversion.
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
        title="Ready to optimize your content?"
        description="Get a comprehensive audit of your website content and a roadmap for improvement."
        buttonText="Request an Audit"
        buttonPage="contact"
        benefits={[
          'Full content inventory',
          'SEO gap analysis',
          'Performance benchmarking',
          'Actionable recommendations',
          'Priority roadmap included'
        ]}
      />
    </div>
  );
}