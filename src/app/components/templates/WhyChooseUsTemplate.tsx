/**
 * Why Choose Us Template — Funky Neon Redesign
 *
 * Full-featured page comparing LightSpeed to alternatives.
 * Mesh hero, neon-glow cards, comparison table, process steps,
 * guarantee previews, and data-driven objection handling.
 *
 * Pattern components:
 * - StatsGrid — Stats section (cards variant, 3 columns)
 * - ProcessTimeline — Our proven process
 * - FeatureList — Risk-free guarantees (glow variant, 3 columns)
 * - TestimonialGrid — Client testimonials
 * - FAQSection — FAQ section (uses whyChooseUsFAQs)
 * - FunkyCTA — Final conversion section
 *
 * Sub-components:
 * - ComparisonTable — Feature comparison grid
 * - WhenToChoose — When to pick each option
 * - ObjectionCards — Data-driven objection handling
 *
 * @see /src/styles/templates/why-choose-us.css
 * @see /src/app/data/why-choose-us.ts
 */

import '../../../styles/templates/why-choose-us.css';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { FAQSection } from '../patterns/FAQSection';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { StatsGrid } from '../patterns/StatsGrid';
import { ProcessTimeline } from '../patterns/ProcessTimeline';
import { FeatureList } from '../patterns/FeatureList';
import { ComparisonTable } from './why-choose-us/ComparisonTable';
import { WhenToChoose } from './why-choose-us/WhenToChoose';
import { ObjectionCards } from './why-choose-us/ObjectionCards';
import { testimonials } from '../../data/testimonials';
import { whyChooseUsFAQs } from '../../data/faqs/about';
import {
  Trophy,
  Users,
  Target as Crosshair,
  Gauge,
  Palette,
  Code,
  Headphones,
  ThumbsUp,
  HardDrives as Server,
  Sparkle as Sparkles,
  Medal as Award,
  SquaresFour as Blocks,
  Lightning as Zap,
  Eye,
  Shield,
  CurrencyDollar as DollarSign
} from '@phosphor-icons/react';
import {
  competitiveAdvantages,
  whyChooseUsHero,
  whyChooseUsIntro,
  whyChooseUsStats,
  whyChooseUsCTA
} from '../../data/why-choose-us';
import { developmentProcess } from '../../data/process';
import { guarantees } from '../../data/guarantees';

/* Icon map for dynamic data */
const iconMap: Record<string, React.ComponentType<any>> = {
  Trophy, Users, Crosshair, Gauge, Palette, Code, Headphones,
  ThumbsUp, Server, Award, Blocks, Zap, Eye, Shield, DollarSign
};

export function WhyChooseUsTemplate() {
  return (
    <>
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Why choose us' },
        ]}
      />

      {/* 1. Hero */}
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
              <p className="wcu__hero-desc">{whyChooseUsHero.subtitle}</p>
              <div className="wcu__hero-actions">
                <Button page="pricing" size="lg">View pricing</Button>
                <Button page={whyChooseUsHero.primaryButton.page} variant="secondary" size="lg">
                  {whyChooseUsHero.primaryButton.text}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 2. Stats */}
      <section className="wcu__stats">
        <Container>
          <StatsGrid
            stats={whyChooseUsStats.map((s) => ({
              number: s.value,
              label: s.label,
            }))}
            columns={3}
            variant="cards"
          />
        </Container>
      </section>

      {/* 3. Value propositions */}
      <section className="wcu__vp-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wcu__section-header">
              <h2 className="wcu__section-title">What sets us apart</h2>
              <p className="wcu__section-desc">{whyChooseUsIntro.description}</p>
            </div>
          </ScrollReveal>
          <div className="wcu__vp-grid">
            {competitiveAdvantages.map((item) => {
              const Icon = (item.icon && iconMap[item.icon]) || Trophy;
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

      {/* 4. Comparison table */}
      <section className="wcu__compare-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wcu__section-header">
              <h2 className="wcu__section-title">How we compare</h2>
              <p className="wcu__section-desc">
                See how LSX Design stacks up against common alternatives
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up">
            <ComparisonTable />
          </ScrollReveal>
        </Container>
      </section>

      {/* 5. When to choose */}
      <section className="wcu__choose-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wcu__section-header">
              <h2 className="wcu__section-title">Find the right fit</h2>
              <p className="wcu__section-desc">
                We're not for everyone — and that's okay. Here's how to decide.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up">
            <WhenToChoose />
          </ScrollReveal>
        </Container>
      </section>

      {/* 6. Objection handling */}
      <section className="wcu__objections-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wcu__section-header">
              <h2 className="wcu__section-title">Common concerns</h2>
              <p className="wcu__section-desc">
                We hear these a lot — here's the honest answer every time
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up">
            <ObjectionCards />
          </ScrollReveal>
        </Container>
      </section>

      {/* 7. Process */}
      <section className="wcu__process">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wcu__section-header">
              <h2 className="wcu__section-title">Our proven process</h2>
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
              icon: step.icon,
            }))}
          />
        </Container>
      </section>

      {/* 8. Guarantees preview */}
      <section className="wcu__guarantees">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wcu__section-header">
              <h2 className="wcu__section-title">Risk-free guarantees</h2>
              <p className="wcu__section-desc">
                We stand behind our work with industry-leading guarantees
              </p>
            </div>
          </ScrollReveal>
          <FeatureList
            items={guarantees.slice(0, 3).map((g) => ({
              title: g.title,
              description: g.description,
              icon: (g.icon && iconMap[g.icon]) || Trophy,
            }))}
            variant="glow"
            columns={3}
          />
          <div className="wcu__section-footer">
            <Button page="guarantees" variant="outline">
              View all guarantees &rarr;
            </Button>
          </div>
        </Container>
      </section>

      {/* 9. Testimonials */}
      <TestimonialGrid
        testimonials={testimonials.slice(0, 6)}
        variant="cards"
        showRating={true}
      />

      {/* 10. FAQ */}
      <FAQSection
        faqs={whyChooseUsFAQs}
        title="Frequently asked questions"
        description="Get answers to common questions about working with us."
      />

      {/* 11. CTA */}
      <FunkyCTA
        title={whyChooseUsCTA.title}
        description={whyChooseUsCTA.description}
        buttonText={whyChooseUsCTA.button.text}
        buttonPage={whyChooseUsCTA.button.page}
        benefits={[
          'WordPress & WooCommerce specialists',
          'Fixed pricing — no hidden fees',
          'Performance guarantee (90+ Lighthouse)',
          'WCAG 2.1 AA accessibility included',
        ]}
      />
    </>
  );
}