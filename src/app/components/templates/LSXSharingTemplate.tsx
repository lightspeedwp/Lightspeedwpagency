/**
 * LSX Sharing Product Page Template — Funky Neon Redesign
 *
 * Dedicated page for LSX Sharing plugin/product.
 * WordPress Mapping: Product detail page
 *
 * Theme: Neon social connections, glassmorphism cards, floating orbs
 * Features:
 * - Parallax hero with floating orbs + mesh grid
 * - Neon glow badge
 * - Glassmorphism feature/benefit cards
 * - Process steps with neon numbering
 * - Social networks showcase
 * - Free plugin highlight
 * - FAQ section
 * - FunkyCTA conversion section
 * - ScrollReveal entry animations
 * - 100% CSS variable compliance
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - No inline Tailwind classes
 * - All styling via @/styles/templates/lsx-sharing-page.css
 * - BEM naming throughout
 * 
 * PATTERN COMPONENTS:
 * - ✅ FeatureList — Key features (glassmorphism variant)
 * - ✅ FeatureList — Benefits grid (4 items, 2 columns)
 * - ✅ ProcessTimeline — 4-step process (numbered variant)
 * - ✅ FAQSection — FAQ accordion
 * - ✅ FunkyCTA — Final CTA section
 * 
 * @migrated March 3, 2026 — Phase 3.2: Migrated inline benefits + process (~65 lines saved)
 */

import '../../../styles/templates/lsx-sharing-page.css';
import { Container } from '@/app/components/common/Container';
import { FunkyCTA } from '@/app/components/patterns/FunkyCTA';
import { FAQSection } from '@/app/components/patterns/FAQSection';
import { FeatureList } from '@/app/components/patterns/FeatureList';
import { ProcessTimeline } from '@/app/components/patterns/ProcessTimeline';
import { Buttons } from '@/app/components/blocks/design/Buttons';
import { useHeroParallax } from '../../hooks/useHeroParallax';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { ShareNetwork as Share2 } from '@phosphor-icons/react';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';

import {
  lsxSharingHero,
  lsxSharingFeatures,
  lsxSharingBenefits,
  lsxSharingProcess,
  lsxSharingNetworks,
  lsxSharingSpecs,
  lsxSharingFAQs,
  lsxSharingCTA
} from '@/app/data/lsx-sharing-page';

/**
 * LSX Sharing Product Page Template
 */
export function LSXSharingTemplate() {
  const parallaxRef = useHeroParallax(0.5);

  return (
    <div className="lsx-sharing">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'LSX Sharing' },
        ]}
      />

      {/* ============================================
          1. HERO SECTION (Parallax + Floating Orbs)
          ============================================ */}
      <section className="lsx-sharing__hero">
        <img
          ref={parallaxRef}
          src="https://images.unsplash.com/photo-1602731465517-820d34d5a9c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5lb24lMjBzb2NpYWwlMjBzaGFyaW5nJTIwbmV0d29ya3xlbnwxfHx8fDE3NzE1ODQ2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract neon social sharing network"
          className="lsx-sharing__hero-bg"
        />
        <div className="lsx-sharing__hero-overlay" />
        <div className="lsx-sharing__hero-grid" />

        {/* Floating Orbs */}
        <div className="lsx-sharing__orb lsx-sharing__orb--1" />
        <div className="lsx-sharing__orb lsx-sharing__orb--2" />
        <div className="lsx-sharing__orb lsx-sharing__orb--3" />

        <Container>
          <div className="lsx-sharing__hero-content">
            <span className="lsx-sharing__hero-badge">
              <Share2 size={16} />
              {lsxSharingHero.badge.text}
            </span>

            <h1 className="lsx-sharing__hero-title">
              {lsxSharingHero.title}{' '}
              <span className="lsx-sharing__hero-highlight">
                {lsxSharingHero.titleHighlight}
              </span>
            </h1>

            <p className="lsx-sharing__hero-subtitle">
              {lsxSharingHero.description}
            </p>

            <Buttons
              buttons={[
                { text: lsxSharingHero.cta.primary.text, page: lsxSharingHero.cta.primary.page, variant: 'default', size: 'lg' },
                { text: lsxSharingHero.cta.secondary.text, page: lsxSharingHero.cta.secondary.page, variant: 'outline', size: 'lg' }
              ]}
              alignment="center"
            />
          </div>
        </Container>

        <ScrollDownArrow />
      </section>

      {/* ============================================
          2. FEATURES SECTION
          ============================================ */}
      <section className="lsx-sharing__features">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="lsx-sharing__section-header">
              <h2 className="lsx-sharing__section-title">Key Features</h2>
              <p className="lsx-sharing__section-description">
                Everything you need for effective social sharing
              </p>
            </div>
          </ScrollReveal>

          <FeatureList
            items={lsxSharingFeatures}
            columns={3}
            variant="glow"
            iconSize="md"
          />
        </Container>
      </section>

      {/* ============================================
          3. BENEFITS SECTION
          ============================================ */}
      <section className="lsx-sharing__benefits">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="lsx-sharing__section-header">
              <h2 className="lsx-sharing__section-title">Why LSX Sharing?</h2>
              <p className="lsx-sharing__section-description">
                Amplify your content reach with beautiful, easy-to-use social sharing
              </p>
            </div>
          </ScrollReveal>

          <FeatureList
            items={lsxSharingBenefits}
            columns={2}
            variant="glow"
            iconSize="md"
          />
        </Container>
      </section>

      {/* ============================================
          4. HOW IT WORKS
          ============================================ */}
      <section className="lsx-sharing__process">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="lsx-sharing__section-header">
              <h2 className="lsx-sharing__section-title">How It Works</h2>
              <p className="lsx-sharing__section-description">Get started in 4 simple steps</p>
            </div>
          </ScrollReveal>

          <ProcessTimeline
            steps={lsxSharingProcess}
            variant="numbered"
          />
        </Container>
      </section>

      {/* ============================================
          5. SUPPORTED NETWORKS
          ============================================ */}
      <section className="lsx-sharing__networks">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="lsx-sharing__section-header">
              <h2 className="lsx-sharing__section-title">{lsxSharingNetworks.title}</h2>
              <p className="lsx-sharing__section-description">{lsxSharingNetworks.description}</p>
            </div>
          </ScrollReveal>

          <div className="lsx-sharing__networks-grid">
            {lsxSharingNetworks.networks.map((network, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 60}>
                <div className="lsx-sharing__network-card">
                  <div className="lsx-sharing__network-icon">
                    <Share2 />
                  </div>
                  <h3 className="lsx-sharing__network-name">{network.name}</h3>
                  <p className="lsx-sharing__network-description">{network.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          6. TECHNICAL SPECIFICATIONS
          ============================================ */}
      <section className="lsx-sharing__specs">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="lsx-sharing__section-header">
              <h2 className="lsx-sharing__section-title">{lsxSharingSpecs.title}</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <div className="lsx-sharing__specs-grid responsive-grid-2-cols">
              {lsxSharingSpecs.specs.map((spec, index) => (
                <div key={index} className="lsx-sharing__spec-item">
                  <span className="lsx-sharing__spec-label">{spec.label}</span>
                  <span className="lsx-sharing__spec-value">{spec.value}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          7. FREE PLUGIN HIGHLIGHT
          ============================================ */}
      <section className="lsx-sharing__free-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="lsx-sharing__free-highlight">
              <h2 className="lsx-sharing__free-title">100% Free Forever</h2>
              <p className="lsx-sharing__free-description">
                LSX Sharing is completely free with no hidden costs, premium versions, or upsells.
                Download from WordPress.org and start amplifying your content today.
              </p>
              <Buttons
                buttons={[
                  { text: 'Download Now', page: 'contact', variant: 'default', size: 'lg' }
                ]}
                alignment="center"
              />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          8. FAQ SECTION
          ============================================ */}
      <section className="lsx-sharing__faq">
        <Container>
          <ScrollReveal animation="fade-up">
            <FAQSection faqs={lsxSharingFAQs} />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          9. CTA SECTION (FunkyCTA)
          ============================================ */}
      <FunkyCTA
        title={lsxSharingCTA.title}
        description={lsxSharingCTA.description}
        buttonText={lsxSharingCTA.buttons[0].text}
        buttonPage={lsxSharingCTA.buttons[0].page}
        benefits={[
          'Beautiful social sharing buttons',
          '8+ supported networks',
          'WordPress native integration',
          'Lightweight & performant',
          '100% free forever'
        ]}
      />
    </div>
  );
}