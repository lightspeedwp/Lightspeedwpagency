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
 */

import '../../../styles/templates/lsx-sharing-page.css';
import { Container } from '@/app/components/common/Container';
import { FunkyCTA } from '@/app/components/patterns/FunkyCTA';
import { FAQSection } from '@/app/components/patterns/FAQSection';
import { Buttons } from '@/app/components/blocks/design/Buttons';
import { useHeroParallax } from '../../hooks/useHeroParallax';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { Share2 } from 'lucide-react';

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

          <div className="lsx-sharing__features-grid">
            {lsxSharingFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                  <div className="lsx-sharing__feature-card">
                    <div className="lsx-sharing__feature-glow" />
                    <div className="lsx-sharing__feature-icon">
                      <Icon />
                    </div>
                    <h3 className="lsx-sharing__feature-title">{feature.title}</h3>
                    <p className="lsx-sharing__feature-description">{feature.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
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

          <div className="lsx-sharing__benefits-grid">
            {lsxSharingBenefits.map((benefit, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="lsx-sharing__benefit-card">
                  <h3 className="lsx-sharing__benefit-title">{benefit.title}</h3>
                  <p className="lsx-sharing__benefit-description">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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

          <div className="lsx-sharing__process-grid">
            {lsxSharingProcess.map((step, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 120}>
                <div className="lsx-sharing__process-step">
                  <div className="lsx-sharing__process-number">{step.step}</div>
                  <div className="lsx-sharing__process-content">
                    <h3 className="lsx-sharing__process-title">{step.title}</h3>
                    <p className="lsx-sharing__process-description">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
            <div className="lsx-sharing__specs-grid">
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