/**
 * AI Sub-Page Template (shared layout)
 *
 * Reusable template for each AI sub-page:
 *   - AI Content Generation
 *   - AI-Powered SEO
 *   - AI Chatbots for WordPress
 *   - AI Analytics & Insights
 *
 * Pattern order:
 * Hero -> Lifecycle Badge -> Stats -> Features -> Use Cases -> Trust Signal -> Pricing (optional) -> FAQs -> Related -> CTA
 *
 * BEM: .ai-page + .ai-page--{variant} (content | seo | chatbots | analytics)
 * All hero/button/visual styles via /src/styles/templates/ai-solution-hero.css
 * Variant scoping overrides --ai-accent / --ai-accent-alt per sub-page.
 *
 * @see /src/styles/templates/ai-solution-hero.css
 */

import '../../../styles/templates/page-solution-ai-optimized.css';
import '../../../styles/parts/lifecycle-badge.css';
import { Container } from '../common/Container';
import { StatsGrid } from '../patterns/StatsGrid';
import { FeatureGrid } from '../patterns/FeatureGrid';
import { UseCasesGrid } from '../patterns/UseCasesGrid';
import { PricingTable } from '../patterns/PricingTable';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { ArrowRight, type Icon } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { slugToPath } from '../../utils/route-map';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { LifecycleStageBadge } from '../parts/LifecycleStageBadge';
import { PricingPackage } from '../../data/pricing';
import type { UniversalIcon } from '../../utils/icon-map';

import type {
  AIHero,
  AIStat,
  AIFeature,
  AIUseCase,
  AIFAQ,
  AICTA,
  AIPricingPackage,
} from '../../data/ai-integrations-page';

interface LifecycleStageInfo {
  slug: string;
  name: string;
  icon: UniversalIcon;
  accent: string;
}

interface TrustSignal {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

interface RelatedLink {
  label: string;
  href: string;
  description?: string;
}

interface AISubPageProps {
  /** BEM modifier for accent colour: 'content' | 'seo' | 'chatbots' | 'analytics' */
  variant: string;
  hero: AIHero;
  /** Icon displayed in the animated brain graphic */
  heroIcon: Icon;
  stats: AIStat[];
  statsTitle: string;
  statsDescription: string;
  features: AIFeature[];
  featuresTitle: string;
  featuresDescription: string;
  useCases: AIUseCase[];
  useCasesTitle: string;
  useCasesDescription: string;
  pricing: { title: string; description: string; packages: AIPricingPackage[] };
  faqs: AIFAQ[];
  cta: AICTA;
  ctaBenefits: string[];
  /** Optional lifecycle stage badge(s) to display after hero */
  lifecycleStages?: LifecycleStageInfo[];
  /** Optional trust signal (testimonial) to display after use cases */
  trustSignal?: TrustSignal;
  /** Optional related services links */
  relatedServices?: RelatedLink[];
  /** Optional related solutions links */
  relatedSolutions?: RelatedLink[];
  /** Show pricing section (default: false) */
  showPricing?: boolean;
}

export function AISubPageTemplate({
  variant,
  hero,
  heroIcon: HeroIcon,
  stats,
  statsTitle,
  statsDescription,
  features,
  featuresTitle,
  featuresDescription,
  useCases,
  useCasesTitle,
  useCasesDescription,
  pricing,
  faqs,
  cta,
  ctaBenefits,
  lifecycleStages,
  trustSignal,
  relatedServices,
  relatedSolutions,
  showPricing = false,
}: AISubPageProps) {
  /* Transform pricing data for the PricingTable pattern */
  const pricingPlans: PricingPackage[] = pricing.packages.map((pkg, i) => ({
    id: `ai-${variant}-${i}`,
    name: pkg.name,
    slug: pkg.name.toLowerCase().replace(/\s+/g, '-'),
    tagline: pkg.description,
    description: pkg.description,
    price: {
      amount: 0,
      currency: 'USD',
      display: pkg.price,
      period: 'month',
    },
    features: pkg.features.map((f) => ({ name: f, included: true })),
    cta: { text: 'Get Started', action: 'contact' },
    recommended: pkg.recommended,
    category: 'custom',
  }));

  const BadgeIcon = hero.badge.icon;

  return (
    <div className={`ai-page ai-page--${variant}`}>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'AI Integrations', href: '/solutions/ai-integrations' },
          { label: hero.title },
        ]}
      />

      {/* ════════════════ HERO ════════════════ */}
      <section className="ai-page__hero" aria-label={`${hero.title} hero`}>
        <div className="ai-page__hero-grid" />
        <div className="ai-page__orb ai-page__orb--1" />
        <div className="ai-page__orb ai-page__orb--2" />

        <Container>
          <div className="wp-grid-2-cols wp-items-center wp-gap-12">
            {/* Left: Content */}
            <div className="ai-page__hero-content">
              <ScrollReveal animation="fade-right">
                <div className="ai-page__badge">
                  <BadgeIcon size={14} />
                  {hero.badge.text}
                </div>

                <h1 className="ai-page__title">
                  <span className="ai-page__highlight">{hero.titleHighlight}</span>
                  <br />
                  {hero.title.replace(hero.titleHighlight, '').trim()}
                </h1>

                <p className="ai-page__tagline">{hero.tagline}</p>

                <div className="wp-flex wp-gap-4">
                  <Link
                    to={slugToPath(hero.primaryButton.page)}
                    className="ai-page__btn-primary"
                  >
                    {hero.primaryButton.text} <ArrowRight size={18} />
                  </Link>
                  <Link
                    to={slugToPath(hero.secondaryButton.page)}
                    className="ai-page__btn-outline"
                  >
                    {hero.secondaryButton.text}
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Animated AI graphic */}
            <div className="ai-page__visual">
              <ScrollReveal animation="fade-left" delay={200}>
                <div className="ai-page__brain-graphic">
                  <div className="ai-page__brain-ring ai-page__brain-ring--1" />
                  <div className="ai-page__brain-ring ai-page__brain-ring--2" />
                  <div className="ai-page__brain-ring ai-page__brain-ring--3" />
                  <HeroIcon size={72} className="ai-page__brain-icon" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>

        {/* Optional lifecycle stage badges */}
        {lifecycleStages && (
          <div className="ai-page__lifecycle-badges">
            <LifecycleStageBadge stages={lifecycleStages} />
          </div>
        )}

        <ScrollDownArrow />
      </section>

      {/* ════════════════ STATS ════════════════ */}
      <section className="ai-page__stats" aria-label={statsTitle}>
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="ai-page__section-header">
              <h2 className="ai-page__section-title">{statsTitle}</h2>
              <p className="ai-page__section-description">{statsDescription}</p>
            </div>
            <StatsGrid
              stats={stats.map((s) => ({
                icon: s.icon,
                value: s.value,
                label: s.label,
                description: s.description,
              }))}
              columns={4}
              variant="default"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ════════════════ FEATURES ════════════════ */}
      <FeatureGrid
        title={featuresTitle}
        description={featuresDescription}
        items={features}
        columns={3}
        variant="default"
      />

      {/* ════════════════ USE CASES ════════════════ */}
      <UseCasesGrid
        title={useCasesTitle}
        description={useCasesDescription}
        useCases={useCases}
        columns={2}
        variant="default"
      />

      {/* Optional trust signal (testimonial) */}
      {trustSignal && (
        <section className="ai-page__trust-signal">
          <Container>
            <div className="wp-grid-2-cols wp-items-center wp-gap-12">
              <div className="ai-page__trust-signal-content">
                <blockquote className="ai-page__trust-quote">
                  &ldquo;{trustSignal.quote}&rdquo;
                </blockquote>
                <p className="ai-page__trust-author">
                  {trustSignal.author}, {trustSignal.role}
                  {trustSignal.company && `, ${trustSignal.company}`}
                </p>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Optional pricing section */}
      {showPricing && (
        <PricingTable
          heading={pricing.title}
          description={pricing.description}
          packages={pricingPlans}
          variant="default"
        />
      )}

      {/* ════════════════ FAQS ════════════════ */}
      <FAQSection
        title="Frequently asked questions"
        description={`Common questions about ${hero.title.toLowerCase()}`}
        faqs={faqs}
        variant="muted"
      />

      {/* Optional related links */}
      {(relatedServices || relatedSolutions) && (
        <section className="ai-page__related-links">
          <Container>
            <div className="wp-grid-2-cols wp-items-center wp-gap-12">
              {relatedServices && (
                <div className="ai-page__related-content">
                  <h3 className="ai-page__related-title">Related Services</h3>
                  <ul className="ai-page__related-list">
                    {relatedServices.map((link) => (
                      <li key={link.href} className="ai-page__related-item">
                        <Link to={link.href} className="ai-page__related-link">
                          {link.label}
                        </Link>
                        {link.description && (
                          <p className="ai-page__related-description">
                            {link.description}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {relatedSolutions && (
                <div className="ai-page__related-content">
                  <h3 className="ai-page__related-title">Related Solutions</h3>
                  <ul className="ai-page__related-list">
                    {relatedSolutions.map((link) => (
                      <li key={link.href} className="ai-page__related-item">
                        <Link to={link.href} className="ai-page__related-link">
                          {link.label}
                        </Link>
                        {link.description && (
                          <p className="ai-page__related-description">
                            {link.description}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* ════════════════ CTA ════════════════ */}
      <FunkyCTA
        title={cta.title}
        description={cta.description}
        buttonText={cta.buttons[0].text}
        buttonPage={cta.buttons[0].page}
        benefits={ctaBenefits}
      />
    </div>
  );
}