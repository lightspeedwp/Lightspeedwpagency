/**
 * Why Choose Us Template — Funky Neon Redesign
 *
 * Full-featured page comparing LightSpeed to alternatives,
 * with mesh hero, neon-glow cards, process steps, and
 * guarantee previews. All content data-driven.
 *
 * Pattern Components:
 * - ✅ StatsGrid — Stats section (cards variant, 3 columns)
 * - ✅ ProcessTimeline — Our proven process
 * - ✅ FeatureList — Risk-free guarantees (glow variant, 3 columns)
 * - ✅ TestimonialGrid — Client testimonials
 * - ✅ SocialProof — Client logos
 * - ✅ FAQSection — FAQ section
 * - ✅ FunkyCTA — Final conversion section
 *
 * @see /src/styles/templates/why-choose-us.css
 * @see /src/app/data/why-choose-us.ts
 * @migrated March 4, 2026 — Migrated process steps → ProcessTimeline, guarantees → FeatureList (~30 lines saved)
 */

import '../../../styles/templates/why-choose-us.css';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { SocialProof } from '../patterns/SocialProof';
import { FAQSection } from '../patterns/FAQSection';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { StatsGrid } from '../patterns/StatsGrid';
import { ProcessTimeline } from '../patterns/ProcessTimeline';
import { FeatureList } from '../patterns/FeatureList';
import { testimonials } from '../../data/testimonials';
import { clientLogos } from '../../data/logos';
import { aboutFAQs } from '../../data/faqs';
import {
  Rocket,
  Users,
  Target as Crosshair,
  Trophy,
  Heart,
  Gauge,
  Palette,
  Code,
  Headphones,
  GraduationCap,
  ThumbsUp,
  HardDrives as Server,
  Sparkle as Sparkles
} from '@phosphor-icons/react';



/* ── Data imports ── */
import {
  competitiveAdvantages,
  whyChooseUsHero,
  whyChooseUsIntro,
  whyChooseUsStats,
  whyChooseUsCTA
} from '../../data/why-choose-us';
import { developmentProcess } from '../../data/process';
import { guarantees } from '../../data/guarantees';

/* ── Icon Mapping for dynamic data ── */
const iconMap: Record<string, React.ComponentType<any>> = {
  Trophy, Users, Crosshair, Heart, Gauge, Palette, Code, Headphones, GraduationCap,
  ThumbsUp, Server
};

export function WhyChooseUsTemplate() {
  return (
    <>
      {/* ── Breadcrumbs ── */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Why Choose Us' },
        ]}
      />

      {/* ============================================
          1. HERO
          ============================================ */}
      <section className="wcu__hero">
        <div className="wcu__hero-grid" aria-hidden="true" />
        <div className="wcu__hero-orb" aria-hidden="true" />

        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wcu__hero-inner">
              <div className="wcu__hero-badge">
                <Sparkles size={14} />
                <span>{whyChooseUsHero.badge.text}</span>
              </div>

              <h1 className="wcu__hero-title">
                Why{' '}
                <span className="wcu__hero-title-highlight">LightSpeed</span>?
              </h1>

              <p className="wcu__hero-desc">
                {whyChooseUsHero.subtitle}
              </p>

              <div className="wcu__hero-actions">
                <Button page="pricing" size="lg">
                  View Pricing
                </Button>
                <Button page={whyChooseUsHero.primaryButton.page} variant="secondary" size="lg">
                  {whyChooseUsHero.primaryButton.text}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          2. STATS
          ============================================ */}
      <section className="wcu__stats">
        <Container>
          <StatsGrid
            stats={whyChooseUsStats.map((stat) => ({
              number: stat.value,
              label: stat.label
            }))}
            columns={3}
            variant="cards"
          />
        </Container>
      </section>

      {/* ============================================
          3. VALUE PROPOSITIONS
          ============================================ */}
      <section className="wcu__vp-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wcu__section-header">
              <h2 className="wcu__section-title">What Sets Us Apart</h2>
              <p className="wcu__section-desc">
                {whyChooseUsIntro.description}
              </p>
            </div>
          </ScrollReveal>

          <div className="wcu__vp-grid">
            {competitiveAdvantages.map((item) => {
              const Icon = item.icon ? iconMap[item.icon] : Trophy;
              return (
                <ScrollReveal key={item.id} animation="fade-up">
                  <article className="wcu__vp-card">
                    <div className="wcu__vp-icon-wrap">
                      <Icon size={28} />
                    </div>
                    <h3 className="wcu__vp-title">{item.title}</h3>
                    <p className="wcu__vp-desc">{item.description}</p>
                    {item.proof && (
                      <span className="wcu__vp-proof">{item.proof}</span>
                    )}
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          4. PROCESS STEPS
          ============================================ */}
      <section className="wcu__process">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wcu__section-header">
              <h2 className="wcu__section-title">Our Proven Process</h2>
              <p className="wcu__section-desc">
                A systematic approach refined over 150+ successful projects
              </p>
            </div>
          </ScrollReveal>

          <ProcessTimeline
            steps={developmentProcess.map((step) => ({
              id: step.id,
              number: step.number,
              title: step.title,
              description: step.description,
              icon: step.icon
            }))}
          />
        </Container>
      </section>

      {/* ============================================
          5. GUARANTEE PREVIEW
          ============================================ */}
      <section className="wcu__guarantees">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wcu__section-header">
              <h2 className="wcu__section-title">Risk-Free Guarantees</h2>
              <p className="wcu__section-desc">
                We stand behind our work with industry-leading guarantees
              </p>
            </div>
          </ScrollReveal>

          <FeatureList
            items={guarantees.slice(0, 3).map((guarantee) => ({
              title: guarantee.title,
              description: guarantee.description,
              icon: guarantee.icon ? iconMap[guarantee.icon] : Trophy
            }))}
            variant="glow"
            columns={3}
          />

          <div className="wcu__section-footer">
            <Button page="guarantees" variant="outline">
              View All Guarantees &rarr;
            </Button>
          </div>
        </Container>
      </section>

      {/* ============================================
          6. PATTERNS
          ============================================ */}
      <TestimonialGrid
        testimonials={testimonials.slice(0, 6)}
        variant="cards"
        showRating={true}
      />

      <SocialProof
        logos={clientLogos}
        heading="Trusted by Leading Brands"
        description="Join hundreds of businesses who trust our WordPress expertise."
      />

      <FAQSection
        faqs={aboutFAQs}
        title="Frequently Asked Questions"
        description="Get answers to common questions about working with us."
      />

      <FunkyCTA
        title={whyChooseUsCTA.title}
        description={whyChooseUsCTA.description}
        buttonText={whyChooseUsCTA.button.text}
        buttonPage={whyChooseUsCTA.button.page}
        benefits={[
          'WordPress & WooCommerce specialists',
          'Fixed pricing — no hidden fees',
          'Performance guarantee (90+ Lighthouse)',
          'WCAG 2.1 AA accessibility included'
        ]}
      />
    </>
  );
}