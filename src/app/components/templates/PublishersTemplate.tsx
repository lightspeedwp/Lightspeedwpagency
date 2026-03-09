/**
 * Publishers Template — Funky Neon Redesign
 *
 * WordPress template: templates/page-publishers.html
 * Landing page for the Publishers solution.
 * Target audience: Print magazines, newspapers, publishing companies.
 *
 * Theme: Neon newsroom motif, glassmorphism cards, floating orbs
 * Features:
 * - Parallax hero with floating orbs + mesh grid
 * - Neon glow badge
 * - Glassmorphism feature cards with neon hover
 * - Process steps with neon numbering
 * - Testimonial with glassmorphism card
 * - FAQ section
 * - FunkyCTA conversion section
 * - ScrollReveal entry animations
 * - 100% CSS variable compliance
 *
 * Migrations applied:
 *  - `CTASection` -> `FunkyCTA`
 *  - Inline styles -> BEM classes in publishers-page.css
 *  - `useNavigation()` -> `<Link>` (already done upstream)
 *  - `motion/react` -> `useScrollReveal`
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - No inline Tailwind classes
 * - All styling via @/styles/templates/publishers-page.css
 * - BEM naming throughout
 *
 * PATTERN COMPONENTS:
 * - ✅ StatsGrid — Overview stats section (4-column layout)
 * - ✅ FeatureList — Newsroom features section (glow variant)
 * - ✅ FAQSection — FAQ section
 * - ✅ FunkyCTA — Final conversion section
 *
 * @see /guidelines/templates/overview-templates.md
 * @migrated March 3, 2026 — Migrated inline feature grid to FeatureList component
 */

import '../../../styles/templates/publishers-page.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { FAQSection } from '../patterns/FAQSection';
import { StatsGrid } from '../patterns/StatsGrid';
import { FeatureList } from '../patterns/FeatureList';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Buttons } from '../blocks/design/Buttons';
import { useHeroParallax } from '../../hooks/useHeroParallax';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { BookOpen, Sparkle as Sparkles } from '@phosphor-icons/react';

// Import centralized data
import {
  publishersHero,
  publishersOverview,
  publishersFeatures,
  publishersProcess,
  publishersTestimonial,
  publishersFAQ,
  publishersCTA
} from '../../data/publishers-page';

export function PublishersTemplate() {
  const parallaxRef = useHeroParallax(0.5);

  return (
    <div className="publishers">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Solutions', page: 'solutions' },
          { label: 'Publishers' },
        ]}
      />

      {/* ============================================
          1. HERO SECTION (Funky Neon Parallax)
          ============================================ */}
      <section className="publishers__hero">
        <img
          ref={parallaxRef}
          src="https://images.unsplash.com/photo-1702747592938-ca8f80e709fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5lb24lMjBkaWdpdGFsJTIwcHVibGlzaGluZyUyMG5ld3Nyb29tfGVufDF8fHx8MTc3MTU4NjU4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract neon digital publishing"
          className="publishers__hero-bg"
        />
        <div className="publishers__hero-overlay" />
        <div className="publishers__hero-grid" />

        {/* Floating Orbs */}
        <div className="publishers__orb publishers__orb--1" />
        <div className="publishers__orb publishers__orb--2" />

        <Container>
          <div className="publishers__hero-content">
            <span className="publishers__hero-badge">
              <BookOpen size={16} />
              {publishersHero.badge.text}
            </span>

            <h1 className="publishers__hero-title">
              {publishersHero.title.replace(publishersHero.titleHighlight, '')}{' '}
              <span className="publishers__hero-highlight">
                {publishersHero.titleHighlight}
              </span>
            </h1>

            <p className="publishers__hero-subtitle">
              {publishersHero.description}
            </p>

            <Buttons
              buttons={publishersHero.buttons.map(btn => ({
                text: btn.text,
                page: btn.page,
                variant: btn.variant === 'default' ? 'default' : 'outline',
                size: 'lg' as const
              }))}
              alignment="center"
            />
          </div>
        </Container>
      </section>

      {/* ============================================
          2. OVERVIEW & STATS
          ============================================ */}
      <Section spacing="xl" className="publishers__overview">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="publishers__section-header">
              <Heading level={2} className="publishers__section-title">
                {publishersOverview.title}
              </Heading>
              <Paragraph className="publishers__section-description">
                {publishersOverview.description}
              </Paragraph>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <StatsGrid
              stats={publishersOverview.stats}
              columns={4}
              variant="default"
            />
          </ScrollReveal>
        </Container>
      </Section>

      {/* ============================================
          3. FEATURES GRID
          ============================================ */}
      <Section spacing="xl">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="publishers__section-header">
              <Heading level={2} className="publishers__section-title">
                Built for the Newsroom
              </Heading>
              <Paragraph className="publishers__section-description">
                Specialized features that power modern digital publishing
              </Paragraph>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList
              items={publishersFeatures.map((feature) => ({
                icon: feature.icon,
                title: feature.title,
                description: feature.description
              }))}
              columns={3}
              variant="glow"
              iconSize="md"
              iconStyle="rounded"
            />
          </ScrollReveal>
        </Container>
      </Section>

      {/* ============================================
          4. PROCESS SECTION
          ============================================ */}
      <Section spacing="xl" className="publishers__process">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="publishers__section-header">
              <Heading level={2} className="publishers__section-title">
                Our Methodology
              </Heading>
              <Paragraph className="publishers__section-description">
                From print to digital dominance
              </Paragraph>
            </div>
          </ScrollReveal>

          <div className="publishers__process-grid">
            {publishersProcess.map((step, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="publishers__process-step">
                  <div className="publishers__process-number">{step.step}</div>
                  <h3 className="publishers__process-title">{step.title}</h3>
                  <p className="publishers__process-desc">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============================================
          5. TESTIMONIAL
          ============================================ */}
      <Section spacing="xl" className="publishers__testimonial">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="publishers__section-header">
              <Heading level={2} className="publishers__section-title">
                Trusted by Publishers
              </Heading>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <div className="publishers__testimonial-card">
              <blockquote className="publishers__testimonial-quote">
                &ldquo;{publishersTestimonial.quote}&rdquo;
              </blockquote>
              <div className="publishers__testimonial-author">
                <img
                  src={publishersTestimonial.image}
                  alt={publishersTestimonial.author}
                  className="publishers__testimonial-avatar"
                  loading="lazy"
                />
                <div className="publishers__testimonial-info">
                  <div className="publishers__testimonial-name">
                    {publishersTestimonial.author}
                  </div>
                  <div className="publishers__testimonial-role">
                    {publishersTestimonial.role}, {publishersTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* ============================================
          6. FAQ SECTION
          ============================================ */}
      <section className="publishers__faq">
        <Container>
          <ScrollReveal animation="fade-up">
            <FAQSection
              title="Publisher FAQs"
              description="Common questions from media organizations"
              faqs={publishersFAQ}
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          7. CTA SECTION (FunkyCTA)
          ============================================ */}
      <FunkyCTA
        title={publishersCTA.title}
        description={publishersCTA.description}
        buttonText={publishersCTA.buttons[0].text}
        buttonPage={publishersCTA.buttons[0].page}
        benefits={[
          'Custom editorial workflows',
          'High-performance delivery',
          'Paywall & subscription models',
          'Expert migration services',
          'Dedicated publishing support'
        ]}
      />
    </div>
  );
}