/**
 * Mailchimp Solution Page Template — "Growth Engine" Funky Redesign
 *
 * WordPress template: templates/page-solution-mailchimp.html
 *
 * Theme: "Growth Engine" — emerald + violet neon, data-stream visuals.
 *
 * Pattern order:
 *   Hero -> Stats -> Features -> Process -> Pricing -> Case Study -> FAQ -> CTA
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero Tailwind classes
 * - All styling via /src/styles/templates/mailchimp-solution-page-optimized.css
 * - Fonts: var(--font-primary), var(--font-secondary) only
 * - Colors: CSS variables only (--growth-* aliases)
 * - Button styling via :where(.wp-block-button__link)
 *
 * PATTERN COMPONENTS:
 * - ✅ FeatureList — Tech Stack features section (glow variant)
 * - ✅ FeatureList — Benefits grid (4 items, 2 columns, glass variant)
 * - ✅ ProcessTimeline — 4-step implementation process
 * - ✅ PricingCard — Pricing tiers (3 packages)
 * - ✅ FAQSection — FAQ section (accordion variant)
 * - ✅ FunkyCTA — Final conversion section
 *
 * @see /src/styles/templates/mailchimp-solution-page-optimized.css
 * @see /src/app/data/mailchimp-solution-page.ts
 * @migrated March 3, 2026 — Phase 3.2: Migrated inline benefits grid + process timeline (~60 lines saved)
 * @migrated March 18, 2026 — Phase 3.5: Migrated pricing cards to PricingCard (~55 lines saved)
 */

import '../../../styles/templates/mailchimp-solution-page-optimized.css';
import { Rocket, ArrowRight, Quotes as Quote, EnvelopeSimple as Mail, ChartLineUp as TrendingUp, BriefcaseMetal as Briefcase } from '@phosphor-icons/react';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { FeatureList } from '../patterns/FeatureList';
import { ProcessTimeline } from '../patterns/ProcessTimeline';
import { PricingCard } from '../patterns/PricingCard';
import { ScrollReveal, StaggerReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';

import {
  whyMailchimp,
  mailchimpFeatures,
  mailchimpProcess,
  mailchimpPackages,
  mailchimpCaseStudy,
  mailchimpFAQs,
  mailchimpCTA
} from '../../data/mailchimp-solution-page';

/* ═══════════════════════════════════════════
 * COMPONENT
 * ═══════════════════════════════════════════ */

export function MailchimpSolutionTemplate() {
  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Mailchimp' },
        ]}
      />

      {/* ════════════════════════════════════════
          1. HERO — "The Launchpad"
          ════════════════════════════════════════ */}
      <section className="mailchimp-page__hero">
        {/* Background effects */}
        <div className="mailchimp-page__data-stream" />
        <div className="mailchimp-page__orb mailchimp-page__orb--1" />
        <div className="mailchimp-page__orb mailchimp-page__orb--2" />

        <Container>
          <div className="mailchimp-page__hero-content">
            <ScrollReveal animation="fade-up">
              <div className="mailchimp-page__hero-badge">
                <Rocket size={16} />
                <span>GROWTH ENGINE ACTIVE</span>
              </div>

              <h1 className="mailchimp-page__hero-title">
                Supercharge Your <br />
                <span className="mailchimp-page__hero-gradient">Email Marketing</span>
              </h1>

              <p className="mailchimp-page__hero-desc">
                Unlock the full potential of your audience with our data-driven
                Mailchimp integration strategies. Automation, segmentation, and
                growth — simplified.
              </p>

              <div className="mailchimp-page__hero-actions">
                <Button
                  variant="primary"
                  size="lg"
                  page="contact"
                  className="mailchimp-page__btn--growth"
                >
                  Start Growing Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  page="portfolio-archive"
                  className="mailchimp-page__btn--outline"
                >
                  View Case Studies
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>

        <ScrollDownArrow />
      </section>

      {/* ════════════════════════════════════════
          2. WHY MAILCHIMP — "The Metrics"
          ════════════════════════════════════════ */}
      <section className="mailchimp-page__stats">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="mailchimp-page__section-header">
              <h2 className="mailchimp-page__section-title">
                {whyMailchimp.title}
              </h2>
              <p className="mailchimp-page__section-desc">
                {whyMailchimp.description}
              </p>
            </div>
          </ScrollReveal>

          <FeatureList
            items={whyMailchimp.benefits}
            columns={2}
            variant="glass"
            iconSize="md"
          />
        </Container>
      </section>

      {/* ════════════════════════════════════════
          3. FEATURES — "The Tech Stack"
          ════════════════════════════════════════ */}
      <section className="mailchimp-page__features">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="mailchimp-page__section-header">
              <span className="mailchimp-page__section-badge">
                Seamless Integration
              </span>
              <h2 className="mailchimp-page__section-title">
                Connect Your{' '}
                <span className="mailchimp-page__text-gradient">
                  Entire Stack
                </span>
              </h2>
              <p className="mailchimp-page__section-desc">
                We don't just set up Mailchimp; we integrate it deeply into your
                business ecosystem for maximum efficiency.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList
              items={mailchimpFeatures.map((feature) => ({
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
      </section>

      {/* ════════════════════════════════════════
          4. PROCESS — "The Growth Loop"
          ════════════════════════════════════════ */}
      <section className="mailchimp-page__process">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="mailchimp-page__process-header">
              <div className="mailchimp-page__process-header-text">
                <h2 className="mailchimp-page__section-title">
                  The Growth Loop
                </h2>
                <p className="mailchimp-page__section-desc">
                  A continuous cycle of optimization and scaling designed to
                  maximize your ROI.
                </p>
              </div>
              <div className="mailchimp-page__pulse-dots" aria-hidden="true">
                <span className="mailchimp-page__pulse-dot mailchimp-page__pulse-dot--1" />
                <span className="mailchimp-page__pulse-dot mailchimp-page__pulse-dot--2" />
                <span className="mailchimp-page__pulse-dot mailchimp-page__pulse-dot--3" />
              </div>
            </div>
          </ScrollReveal>

          <ProcessTimeline
            steps={mailchimpProcess.map((step) => ({
              step: step.step,
              title: step.title,
              description: step.description
            }))}
            variant="numbered"
          />
        </Container>
      </section>

      {/* ═══════════════════════════════════════
          5. PRICING — "The Investment"
          ════════════════════════════════════════ */}
      <section className="mailchimp-page__pricing">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="mailchimp-page__section-header">
              <h2 className="mailchimp-page__section-title">
                Transparent Pricing
              </h2>
              <p className="mailchimp-page__section-desc">
                Choose the package that fits your growth stage. No hidden fees.
              </p>
            </div>
          </ScrollReveal>

          <div className="mailchimp-page__pricing-grid">
            <PricingCard
              id="mailchimp-starter"
              name={mailchimpPackages[0].name}
              icon={Mail}
              tagline={mailchimpPackages[0].tagline}
              price={{
                display: mailchimpPackages[0].price.display,
                period: mailchimpPackages[0].price.period,
              }}
              description={mailchimpPackages[0].description}
              popular={mailchimpPackages[0].popular}
              features={mailchimpPackages[0].features}
              cta={mailchimpPackages[0].cta}
              delay={0}
            />
            <PricingCard
              id="mailchimp-professional"
              name={mailchimpPackages[1].name}
              icon={TrendingUp}
              tagline={mailchimpPackages[1].tagline}
              price={{
                display: mailchimpPackages[1].price.display,
                period: mailchimpPackages[1].price.period,
              }}
              description={mailchimpPackages[1].description}
              popular={mailchimpPackages[1].popular}
              features={mailchimpPackages[1].features}
              cta={mailchimpPackages[1].cta}
              delay={120}
            />
            <PricingCard
              id="mailchimp-enterprise"
              name={mailchimpPackages[2].name}
              icon={Briefcase}
              tagline={mailchimpPackages[2].tagline}
              price={{
                display: mailchimpPackages[2].price.display,
                period: mailchimpPackages[2].price.period,
              }}
              description={mailchimpPackages[2].description}
              popular={mailchimpPackages[2].popular}
              features={mailchimpPackages[2].features}
              cta={mailchimpPackages[2].cta}
              delay={240}
            />
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          6. CASE STUDY — "The Proof"
          ════════════════════════════════════════ */}
      <section className="mailchimp-page__case-study">
        <div className="mailchimp-page__case-study-overlay" />

        <Container>
          <div className="mailchimp-page__case-study-inner responsive-grid-2-cols">
            {/* Quote side */}
            <ScrollReveal animation="fade-right">
              <div className="mailchimp-page__case-study-quote">
                <span className="mailchimp-page__case-study-label">
                  /// CASE STUDY: {mailchimpCaseStudy.client.toUpperCase()}
                </span>

                <blockquote className="mailchimp-page__blockquote">
                  <Quote size={32} className="mailchimp-page__quote-icon" />
                  {mailchimpCaseStudy.quote}
                </blockquote>

                <div className="mailchimp-page__case-study-author">
                  <div className="mailchimp-page__author-avatar">
                    {mailchimpCaseStudy.author.charAt(0)}
                  </div>
                  <div className="mailchimp-page__author-info">
                    <span className="mailchimp-page__author-name">
                      {mailchimpCaseStudy.author}
                    </span>
                    <span className="mailchimp-page__author-role">
                      {mailchimpCaseStudy.role}, {mailchimpCaseStudy.client}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Results side */}
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="mailchimp-page__results-grid">
                {mailchimpCaseStudy.results.map((result, index) => (
                  <div key={index} className="mailchimp-page__result-card">
                    <span className="mailchimp-page__result-metric">
                      {result.metric}
                    </span>
                    <span className="mailchimp-page__result-label">
                      {result.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════
          7. FAQ
          ════════════════════════════════════════ */}
      <FAQSection
        faqs={mailchimpFAQs}
        title="Growth engine FAQs"
        description="Everything you need to know about scaling with Mailchimp"
        variant="accordion"
      />

      {/* ════════════════════════════════════════
          8. CTA
          ════════════════════════════════════════ */}
      <FunkyCTA
        title={mailchimpCTA.title}
        description={mailchimpCTA.description}
        buttonText={mailchimpCTA.buttons[0].text}
        buttonPage={mailchimpCTA.buttons[0].page}
        benefits={[
          'Expert Mailchimp + WordPress setup',
          'WooCommerce e-commerce tracking',
          'Automated email workflows',
          'GDPR-compliant integration',
          'Ongoing support & optimization'
        ]}
      />
    </>
  );
}