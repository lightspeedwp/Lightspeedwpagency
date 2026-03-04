/**
 * LSX Design Solution Template — Funky Neon Redesign
 *
 * WordPress template: templates/page-lsx-design.html
 *
 * Theme: "Neon Blueprint"
 * Features:
 * - Bespoke Neon Mesh Hero
 * - Feature Icon Grid
 * - Theme Showcase (Funky Cards)
 * - Process Steps (Neon Gradient)
 * - FunkyCTA
 *
 * @see /src/styles/templates/page-lsx-design.css
 */

import '../../../styles/templates/page-lsx-design.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FeatureIconGrid } from '../patterns/FeatureIconGrid';
import { ThemeShowcaseGrid } from '../patterns/ThemeShowcaseGrid';
import { FeatureGrid } from '../patterns/FeatureGrid';
import { ProcessSteps } from '../patterns/ProcessSteps';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { FAQSection } from '../patterns/FAQSection';
import { Button } from '../blocks/design/Buttons';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { Stack as Layers, Lightning as Zap, ArrowRight, Sparkle as Sparkles } from '@phosphor-icons/react';


// Import centralized data
import {
  lsxDesignFeatures,
  lsxThemes,
  lsxBenefits,
  lsxProcessSteps,
  lsxFAQs
} from '../../data/lsx-design-page';

export function LSXDesignTemplate() {
  return (
    <div className="lsx-design">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'LSX Design' },
        ]}
      />

      {/* ============================================
          1. HERO — NEON BLUEPRINT
          ============================================ */}
      <section className="lsx-design__hero">
        <div className="lsx-design__hero-grid" aria-hidden="true" />
        <div className="lsx-design__hero-orb lsx-design__hero-orb--1" aria-hidden="true" />
        <div className="lsx-design__hero-orb lsx-design__hero-orb--2" aria-hidden="true" />

        <Container>
          <ScrollReveal animation="fade-up">
            <div className="lsx-design__hero-content">
              <div className="lsx-design__hero-badge">
                <Layers size={14} />
                LSX Design System
              </div>

              <h1 className="lsx-design__hero-title">
                WordPress Block Themes <br />
                Built the <span className="lsx-design__hero-highlight">Right Way</span>
              </h1>

              <p className="lsx-design__hero-desc">
                Modern WordPress themes built with Full Site Editing, comprehensive design systems, 
                and performance-first architecture. No page builders, no bloat, just fast and flexible WordPress.
              </p>

              <div className="lsx-design__hero-actions">
                <Button variant="default" size="lg" page="contact" className="neon-hover">
                  Get Started <ArrowRight size={16} />
                </Button>
                <Button variant="outline" size="lg" page="portfolio-archive" className="neon-hover">
                  View Projects
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>

        <ScrollDownArrow />
      </section>

      {/* ============================================
          2. FEATURES
          ============================================ */}
      <section className="lsx-design__features">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="lsx-design__section-header">
              <h2 className="lsx-design__section-title">Why Choose LSX Design?</h2>
              <p className="lsx-design__section-desc">
                Built on WordPress best practices with modern development standards.
              </p>
            </div>
          </ScrollReveal>

          <FeatureIconGrid
            features={lsxDesignFeatures}
            columns={3}
            spacing="md"
            backgroundColor="transparent"
          />
        </Container>
      </section>

      {/* ============================================
          3. THEMES SHOWCASE
          ============================================ */}
      <section className="lsx-design__themes">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="lsx-design__section-header">
              <h2 className="lsx-design__section-title">LSX Theme Collection</h2>
              <p className="lsx-design__section-desc">
                Professional WordPress themes for every industry.
              </p>
            </div>
          </ScrollReveal>

          <ThemeShowcaseGrid
            themes={lsxThemes}
            columns={2}
            spacing="md"
            backgroundColor="transparent"
          />
        </Container>
      </section>

      {/* ============================================
          4. BENEFITS
          ============================================ */}
      <section className="lsx-design__benefits">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="lsx-design__section-header">
              <h2 className="lsx-design__section-title">Performance First</h2>
              <p className="lsx-design__section-desc">
                Optimised for speed, accessibility, and SEO.
              </p>
            </div>
          </ScrollReveal>

          <FeatureGrid
            features={lsxBenefits}
            columns={4}
            variant="centered"
            spacing="md"
            backgroundColor="transparent"
          />
        </Container>
      </section>

      {/* ============================================
          5. PROCESS
          ============================================ */}
      <section className="lsx-design__process">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="lsx-design__section-header">
              <h2 className="lsx-design__section-title">Our Theme Process</h2>
              <p className="lsx-design__section-desc">
                From concept to launch in a structured, collaborative workflow.
              </p>
            </div>
          </ScrollReveal>

          <ProcessSteps
            steps={lsxProcessSteps}
            columns={5}
            variant="dark-gradient"
            spacing="md"
          />
        </Container>
      </section>

      {/* ============================================
          6. FAQs
          ============================================ */}
      <Section spacing="xl">
        <Container>
          <FAQSection
            title="LSX Design FAQs"
            description="Common questions about our themes and system"
            faqs={lsxFAQs}
            variant="default"
          />
        </Container>
      </Section>

      {/* ============================================
          7. CTA
          ============================================ */}
      <FunkyCTA
        title="Ready for a Better WordPress Theme?"
        description="Experience the difference of professionally crafted block themes. Get started with LSX Design today."
        buttonText="Get Started"
        buttonPage="contact"
        benefits={[
          'Full Site Editing architecture',
          'Comprehensive design system',
          'Performance-first approach',
          'WCAG 2.1 AA accessible',
          'Ongoing support & updates'
        ]}
      />
    </div>
  );
}

export default LSXDesignTemplate;