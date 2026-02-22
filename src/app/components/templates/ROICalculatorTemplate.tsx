/**
 * ROI Calculator Template — Funky Neon Redesign
 *
 * An interactive ROI calculator with neon glow effects, glassmorphism
 * result cards, and a grid-mesh hero. Every piece of content is
 * driven by centralised mock data.
 *
 * Sections:
 *  1. Hero (badge → title → desc)
 *  2. Calculator (input ↔ results)
 *  3. Breakdown (3 impact cards)
 *  4. Testimonials + Social Proof + FAQ + CTA
 *
 * @see /src/styles/templates/roi-calculator.css
 * @see /src/app/data/roi-calculator-page.ts
 */

import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { SocialProof } from '../patterns/SocialProof';
import { FAQSection } from '../patterns/FAQSection';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { useState } from 'react';
import {
  Calculator,
  TrendingUp,
  Zap,
  Shield,
  Search,
  Clock
} from 'lucide-react';



/* ── Data imports ── */
import {
  roiCalculatorHero,
  roiCalculatorDefaults,
  roiCalculatorCTA
} from '../../data/roi-calculator-page';
import { testimonials } from '../../data/testimonials';
import { clientLogos } from '../../data/logos';
import { pricingTimelineFAQs } from '../../data/faqs';

export function ROICalculatorTemplate() {
  /* ── Calculator State ── */
  const [monthlyTraffic, setMonthlyTraffic] = useState(roiCalculatorDefaults.currentMonthlyVisitors);
  const [currentConversion, setCurrentConversion] = useState(roiCalculatorDefaults.currentConversionRate);
  const [avgOrderValue, setAvgOrderValue] = useState(roiCalculatorDefaults.averageOrderValue);
  const [currentLighthouse, setCurrentLighthouse] = useState(60);

  /* ── Derived Calculations ── */
  const currentMonthlyRevenue = monthlyTraffic * (currentConversion / 100) * avgOrderValue;
  const currentAnnualRevenue = currentMonthlyRevenue * 12;

  const performanceImprovementPercent = 15;
  const newConversionRate = currentConversion * (1 + performanceImprovementPercent / 100);
  const performanceRevenue = monthlyTraffic * (newConversionRate / 100) * avgOrderValue;
  const performanceGain = performanceRevenue - currentMonthlyRevenue;

  const accessibilityAudienceIncrease = 15;
  const accessibilityRevenue = monthlyTraffic * (accessibilityAudienceIncrease / 100) * (currentConversion / 100) * avgOrderValue;

  const seoTrafficIncrease = 30;
  const seoRevenue = (monthlyTraffic * (seoTrafficIncrease / 100)) * (currentConversion / 100) * avgOrderValue;

  const totalMonthlyGain = performanceGain + accessibilityRevenue + seoRevenue;
  const totalAnnualGain = totalMonthlyGain * 12;
  const investment = roiCalculatorDefaults.projectCost;
  const roi = ((totalAnnualGain - investment) / investment) * 100;
  const paybackMonths = totalMonthlyGain > 0 ? investment / totalMonthlyGain : 0;

  const fmt = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  /* ── Testimonial mapping ── */
  const mappedTestimonials = testimonials.slice(0, 6).map((t, i) => ({
    quote: t.quote,
    author: t.author,
    role: t.role,
    company: t.company,
    avatar: t.avatar || `https://images.unsplash.com/photo-${1494790108377 + i}?w=400`,
    rating: t.rating || 5
  }));

  /* ── Breakdown Cards Data ── */
  const breakdowns = [
    {
      icon: Zap,
      title: 'Performance (+15%)',
      desc: '90+ Lighthouse scores mean faster load times. Amazon found that every 100ms delay costs 1% in sales. We improve by seconds, not milliseconds.',
      value: `+$${fmt(performanceGain)}/month`
    },
    {
      icon: Shield,
      title: 'Accessibility (+15%)',
      desc: '15% of the population has some form of disability. WCAG AA compliance makes your site usable for everyone, expanding your addressable market.',
      value: `+$${fmt(accessibilityRevenue)}/month`
    },
    {
      icon: Search,
      title: 'SEO (+30%)',
      desc: 'Google prioritises fast, accessible sites. Better Core Web Vitals = higher rankings = more organic traffic without ad spend.',
      value: `+$${fmt(seoRevenue)}/month`
    }
  ];

  return (
    <div className="roi-calc">
      {/* ── Breadcrumbs ── */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: roiCalculatorHero.title },
        ]}
      />

      {/* ============================================
          1. HERO
          ============================================ */}
      <section className="roi-calc__hero">
        <div className="roi-calc__hero-mesh" aria-hidden="true" />
        <div className="roi-calc__hero-glow" aria-hidden="true" />

        <Container>
          <ScrollReveal animation="fade-up">
            <div className="roi-calc__hero-inner">
              <div className="roi-calc__hero-badge">
                <Calculator size={14} />
                <span>{roiCalculatorHero.badge.text}</span>
              </div>

              <h1 className="roi-calc__hero-title">
                Calculate Your{' '}
                <span className="roi-calc__hero-title-highlight">ROI</span>
              </h1>

              <p className="roi-calc__hero-desc">
                {roiCalculatorHero.subtitle}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          2. CALCULATOR
          ============================================ */}
      <section className="roi-calc__calc-section">
        <Container>
          <div className="roi-calc__calc-grid">
            {/* ── Input Panel ── */}
            <div className="roi-calc__input-panel">
              <h2 className="roi-calc__panel-title">Your Current Metrics</h2>

              <div className="roi-calc__field-group">
                {/* Monthly Traffic */}
                <div className="roi-calc__field">
                  <label htmlFor="monthly-traffic" className="roi-calc__label">
                    Monthly Website Traffic
                  </label>
                  <input
                    id="monthly-traffic"
                    type="number"
                    className="roi-calc__input"
                    value={monthlyTraffic}
                    onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                    min={0}
                    step={1000}
                  />
                  <p className="roi-calc__input-hint">Number of visitors per month</p>
                </div>

                {/* Conversion Rate */}
                <div className="roi-calc__field">
                  <label htmlFor="conversion-rate" className="roi-calc__label">
                    Current Conversion Rate (%)
                  </label>
                  <input
                    id="conversion-rate"
                    type="number"
                    className="roi-calc__input"
                    value={currentConversion}
                    onChange={(e) => setCurrentConversion(Number(e.target.value))}
                    min={0}
                    max={100}
                    step={0.1}
                  />
                  <p className="roi-calc__input-hint">Percentage of visitors who convert</p>
                </div>

                {/* Average Order Value */}
                <div className="roi-calc__field">
                  <label htmlFor="order-value" className="roi-calc__label">
                    Average Order Value ($)
                  </label>
                  <input
                    id="order-value"
                    type="number"
                    className="roi-calc__input"
                    value={avgOrderValue}
                    onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                    min={0}
                    step={10}
                  />
                  <p className="roi-calc__input-hint">Average revenue per conversion</p>
                </div>

                {/* Lighthouse Score — range slider */}
                <div className="roi-calc__field">
                  <label htmlFor="lighthouse-score" className="roi-calc__label">
                    Current Lighthouse Performance Score
                  </label>
                  <input
                    id="lighthouse-score"
                    type="range"
                    className="roi-calc__range"
                    value={currentLighthouse}
                    onChange={(e) => setCurrentLighthouse(Number(e.target.value))}
                    min={0}
                    max={100}
                    step={5}
                  />
                  <div className="roi-calc__range-labels">
                    <span>0</span>
                    <span className="roi-calc__range-value">{currentLighthouse}</span>
                    <span>100</span>
                  </div>
                  <p className="roi-calc__input-hint">
                    Test at{' '}
                    <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer">
                      PageSpeed Insights
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* ── Results Panel ── */}
            <div className="roi-calc__results-panel">
              <h2 className="roi-calc__panel-title">Your Projected ROI</h2>

              <div className="roi-calc__results-stack">
                {/* Current Revenue */}
                <div className="roi-calc__result-card">
                  <p className="roi-calc__result-label">Current Annual Revenue</p>
                  <p className="roi-calc__result-value">${fmt(currentAnnualRevenue)}</p>
                </div>

                {/* Projected Annual Gain — hero card */}
                <div className="roi-calc__result-card roi-calc__result-card--hero">
                  <p className="roi-calc__result-label">
                    <TrendingUp size={16} />
                    Projected Annual Gain
                  </p>
                  <p className="roi-calc__result-value">${fmt(totalAnnualGain)}</p>
                </div>

                {/* ROI Percentage */}
                <div className="roi-calc__result-card">
                  <p className="roi-calc__result-label">Return on Investment (First Year)</p>
                  <p className="roi-calc__result-value">
                    <span className={roi > 0 ? 'roi-calc__result-accent' : undefined}>
                      {roi.toFixed(0)}%
                    </span>
                  </p>
                </div>

                {/* Payback Period */}
                <div className="roi-calc__result-card">
                  <p className="roi-calc__result-label">
                    <Clock size={16} />
                    Payback Period
                  </p>
                  <p className="roi-calc__result-value">{paybackMonths.toFixed(1)} months</p>
                </div>
              </div>

              <p className="roi-calc__result-note">
                *Based on ${fmt(investment)} investment (Professional plan)
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================
          3. BREAKDOWN
          ============================================ */}
      <section className="roi-calc__breakdown">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="roi-calc__breakdown-header">
              <h2 className="roi-calc__breakdown-title">How We Calculate</h2>
              <p className="roi-calc__breakdown-desc">
                Three proven ways a high-performance website increases revenue
              </p>
            </div>
          </ScrollReveal>

          <div className="roi-calc__breakdown-grid">
            {breakdowns.map((card) => (
              <ScrollReveal key={card.title} animation="fade-up">
                <article className="roi-calc__bk-card">
                  <div className="roi-calc__bk-icon">
                    <card.icon size={28} />
                  </div>
                  <h3 className="roi-calc__bk-title">{card.title}</h3>
                  <p className="roi-calc__bk-desc">{card.desc}</p>
                  <p className="roi-calc__bk-value">{card.value}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          4. PATTERN SECTIONS
          ============================================ */}

      <TestimonialGrid
        testimonials={mappedTestimonials}
        title="Real ROI from Real Clients"
        description="See how our work has delivered measurable results for businesses like yours."
        variant="funky"
      />

      <SocialProof
        logos={clientLogos}
        title="Trusted by Leading Brands"
        description="Join hundreds of businesses who've seen real ROI from our WordPress expertise."
        variant="funky"
      />

      <FAQSection
        faqs={pricingTimelineFAQs}
        title="ROI Calculator FAQs"
        description="Common questions about our ROI calculations and methodology."
      />

      <FunkyCTA
        title={roiCalculatorCTA.title}
        description={roiCalculatorCTA.description}
        buttonText={roiCalculatorCTA.button.text}
        buttonPage={roiCalculatorCTA.button.page}
        benefits={[
          'Custom analysis for your industry',
          'Real data-backed projections',
          'No obligation — 100% free consultation',
          'Results within 30 days of launch'
        ]}
      />
    </div>
  );
}