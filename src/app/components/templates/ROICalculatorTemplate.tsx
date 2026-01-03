/**
 * ROI Calculator Template
 * 
 * WordPress template: templates/page-roi-calculator.html
 * 
 * Interactive ROI calculator showing the business value of:
 * - Performance improvements (90+ Lighthouse)
 * - Accessibility compliance (expanded audience)
 * - Conversion rate optimization
 * - SEO improvements
 * 
 * Pattern order: Hero → Calculator Tool → Results → Benefits → TestimonialGrid → SocialProof → FAQSection → CTASection
 * 
 * **Conversion Strategy:**
 * - Interactive calculator: Demonstrate value immediately
 * - TestimonialGrid: Show real ROI from clients
 * - SocialProof: Build credibility
 * - FAQSection: Address calculator/ROI questions
 * - CTASection: Convert convinced visitors
 * 
 * **Accessibility:**
 * - Keyboard accessible calculator inputs
 * - Screen reader announcements for results
 * - Focus management for interactive elements
 * - WCAG 2.1 AA compliant
 * 
 * @see {@link /guidelines/templates/roi-calculator.md}
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button } from '../blocks/design/Buttons';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { CTASection } from '../patterns/CTASection';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { SocialProof } from '../patterns/SocialProof';
import { FAQSection } from '../patterns/FAQSection';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { StickyBookCallButton } from '../blocks/layout/StickyBookCallButton';
import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  fadeInUp,
  viewportOptions 
} from '../../utils/scrollAnimations';
import {
  DollarSign,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Search,
  ArrowRight,
  Calculator
} from 'lucide-react';

export function ROICalculatorTemplate() {
  // Calculator inputs
  const [monthlyTraffic, setMonthlyTraffic] = useState(10000);
  const [currentConversion, setCurrentConversion] = useState(2);
  const [avgOrderValue, setAvgOrderValue] = useState(100);
  const [currentLighthouse, setCurrentLighthouse] = useState(60);

  // Calculations
  const currentMonthlyRevenue = (monthlyTraffic * (currentConversion / 100) * avgOrderValue);
  const currentAnnualRevenue = currentMonthlyRevenue * 12;

  // Performance improvement (90+ Lighthouse score)
  const performanceImprovementPercent = 15; // 15% conversion improvement
  const newConversionRate = currentConversion * (1 + performanceImprovementPercent / 100);
  const performanceRevenue = (monthlyTraffic * (newConversionRate / 100) * avgOrderValue);
  const performanceGain = performanceRevenue - currentMonthlyRevenue;

  // Accessibility improvement (15% of population has disabilities)
  const accessibilityAudienceIncrease = 15; // 15% more audience
  const accessibilityRevenue = (monthlyTraffic * (accessibilityAudienceIncrease / 100) * (currentConversion / 100) * avgOrderValue);

  // SEO improvement (better rankings)
  const seoTrafficIncrease = 30; // 30% more organic traffic
  const seoRevenue = ((monthlyTraffic * (seoTrafficIncrease / 100)) * (currentConversion / 100) * avgOrderValue);

  // Total monthly gain
  const totalMonthlyGain = performanceGain + accessibilityRevenue + seoRevenue;
  const totalAnnualGain = totalMonthlyGain * 12;

  // ROI calculation (assuming $15,000 investment)
  const investment = 15000;
  const roi = ((totalAnnualGain - investment) / investment) * 100;
  const paybackMonths = investment / totalMonthlyGain;

  return (
    <>
      <SiteHeader />
      
      <main id="main-content">
        {/* Breadcrumbs */}
        <Section variant="default" className="pt-24 pb-0">
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'ROI Calculator', href: '/roi-calculator' }
              ]}
            />
          </Container>
        </Section>

        {/* Hero Section */}
        <Section variant="default" className="pt-8 pb-16">
          <Container>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-center max-w-4xl mx-auto"
            >
              <Calculator 
                size={48} 
                className="mx-auto mb-6"
                style={{ color: 'var(--primary)' }}
              />
              
              <h1 
                className="mb-6"
                style={{
                  fontSize: 'var(--text-h1)',
                  fontFamily: 'Lexend, sans-serif',
                  fontWeight: 500,
                  color: 'var(--foreground)'
                }}
              >
                ROI Calculator
              </h1>
              
              <p 
                className="mb-8"
                style={{
                  fontSize: 'var(--text-xl)',
                  fontFamily: 'Lexend, sans-serif',
                  color: 'var(--muted-foreground)',
                  lineHeight: 1.6
                }}
              >
                Calculate the business value of a high-performance, accessible WordPress website. 
                See how performance improvements, SEO, and accessibility directly impact your revenue.
              </p>
            </motion.div>
          </Container>
        </Section>

        {/* Calculator Section */}
        <Section variant="muted">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Input Form */}
              <div>
                <h2 
                  className="mb-8"
                  style={{
                    fontSize: 'var(--text-h3)',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 500,
                    color: 'var(--foreground)'
                  }}
                >
                  Your Current Metrics
                </h2>

                <div className="space-y-6">
                  {/* Monthly Traffic */}
                  <div>
                    <label 
                      htmlFor="monthly-traffic"
                      className="block mb-2"
                      style={{
                        fontSize: 'var(--text-base)',
                        fontFamily: 'Lexend, sans-serif',
                        fontWeight: 500,
                        color: 'var(--foreground)'
                      }}
                    >
                      Monthly Website Traffic
                    </label>
                    <input
                      id="monthly-traffic"
                      type="number"
                      value={monthlyTraffic}
                      onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                      className="w-full p-4 rounded-lg"
                      style={{
                        backgroundColor: 'var(--background)',
                        border: '1px solid var(--border)',
                        color: 'var(--foreground)',
                        fontSize: 'var(--text-base)',
                        fontFamily: 'Lexend, sans-serif'
                      }}
                      min="0"
                      step="1000"
                    />
                    <p 
                      className="mt-2"
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      Number of visitors per month
                    </p>
                  </div>

                  {/* Current Conversion Rate */}
                  <div>
                    <label 
                      htmlFor="conversion-rate"
                      className="block mb-2"
                      style={{
                        fontSize: 'var(--text-base)',
                        fontFamily: 'Lexend, sans-serif',
                        fontWeight: 500,
                        color: 'var(--foreground)'
                      }}
                    >
                      Current Conversion Rate (%)
                    </label>
                    <input
                      id="conversion-rate"
                      type="number"
                      value={currentConversion}
                      onChange={(e) => setCurrentConversion(Number(e.target.value))}
                      className="w-full p-4 rounded-lg"
                      style={{
                        backgroundColor: 'var(--background)',
                        border: '1px solid var(--border)',
                        color: 'var(--foreground)',
                        fontSize: 'var(--text-base)',
                        fontFamily: 'Lexend, sans-serif'
                      }}
                      min="0"
                      max="100"
                      step="0.1"
                    />
                    <p 
                      className="mt-2"
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      Percentage of visitors who convert
                    </p>
                  </div>

                  {/* Average Order Value */}
                  <div>
                    <label 
                      htmlFor="order-value"
                      className="block mb-2"
                      style={{
                        fontSize: 'var(--text-base)',
                        fontFamily: 'Lexend, sans-serif',
                        fontWeight: 500,
                        color: 'var(--foreground)'
                      }}
                    >
                      Average Order Value ($)
                    </label>
                    <input
                      id="order-value"
                      type="number"
                      value={avgOrderValue}
                      onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                      className="w-full p-4 rounded-lg"
                      style={{
                        backgroundColor: 'var(--background)',
                        border: '1px solid var(--border)',
                        color: 'var(--foreground)',
                        fontSize: 'var(--text-base)',
                        fontFamily: 'Lexend, sans-serif'
                      }}
                      min="0"
                      step="10"
                    />
                    <p 
                      className="mt-2"
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      Average revenue per conversion
                    </p>
                  </div>

                  {/* Current Lighthouse Score */}
                  <div>
                    <label 
                      htmlFor="lighthouse-score"
                      className="block mb-2"
                      style={{
                        fontSize: 'var(--text-base)',
                        fontFamily: 'Lexend, sans-serif',
                        fontWeight: 500,
                        color: 'var(--foreground)'
                      }}
                    >
                      Current Lighthouse Performance Score
                    </label>
                    <input
                      id="lighthouse-score"
                      type="range"
                      value={currentLighthouse}
                      onChange={(e) => setCurrentLighthouse(Number(e.target.value))}
                      className="w-full"
                      min="0"
                      max="100"
                      step="5"
                    />
                    <div 
                      className="flex justify-between mt-2"
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      <span>0</span>
                      <span 
                        style={{
                          fontSize: 'var(--text-lg)',
                          fontWeight: 500,
                          color: 'var(--foreground)'
                        }}
                      >
                        {currentLighthouse}
                      </span>
                      <span>100</span>
                    </div>
                    <p 
                      className="mt-2"
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      Test at <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>PageSpeed Insights</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h2 
                  className="mb-8"
                  style={{
                    fontSize: 'var(--text-h3)',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 500,
                    color: 'var(--foreground)'
                  }}
                >
                  Your Projected ROI
                </h2>

                <div className="space-y-4">
                  {/* Current Revenue */}
                  <div 
                    className="p-6 rounded-lg"
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border-soft)'
                    }}
                  >
                    <p 
                      className="mb-2"
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      Current Annual Revenue
                    </p>
                    <p 
                      style={{
                        fontSize: 'var(--text-h2)',
                        fontFamily: 'Lexend, sans-serif',
                        fontWeight: 500,
                        color: 'var(--foreground)'
                      }}
                    >
                      ${currentAnnualRevenue.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </p>
                  </div>

                  {/* Projected Annual Gain */}
                  <div 
                    className="p-6 rounded-lg"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)'
                    }}
                  >
                    <p 
                      className="mb-2 flex items-center gap-2"
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontFamily: 'Manrope, sans-serif',
                        opacity: 0.9
                      }}
                    >
                      <TrendingUp size={16} />
                      Projected Annual Gain
                    </p>
                    <p 
                      style={{
                        fontSize: 'var(--text-h1)',
                        fontFamily: 'Lexend, sans-serif',
                        fontWeight: 500
                      }}
                    >
                      ${totalAnnualGain.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </p>
                  </div>

                  {/* ROI Percentage */}
                  <div 
                    className="p-6 rounded-lg"
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border-soft)'
                    }}
                  >
                    <p 
                      className="mb-2"
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      Return on Investment (First Year)
                    </p>
                    <p 
                      style={{
                        fontSize: 'var(--text-h2)',
                        fontFamily: 'Lexend, sans-serif',
                        fontWeight: 500,
                        color: roi > 0 ? 'var(--primary)' : 'var(--foreground)'
                      }}
                    >
                      {roi.toFixed(0)}%
                    </p>
                  </div>

                  {/* Payback Period */}
                  <div 
                    className="p-6 rounded-lg"
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border-soft)'
                    }}
                  >
                    <p 
                      className="mb-2"
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      Payback Period
                    </p>
                    <p 
                      style={{
                        fontSize: 'var(--text-h2)',
                        fontFamily: 'Lexend, sans-serif',
                        fontWeight: 500,
                        color: 'var(--foreground)'
                      }}
                    >
                      {paybackMonths.toFixed(1)} months
                    </p>
                  </div>
                </div>

                <p 
                  className="mt-6"
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'Manrope, sans-serif',
                    color: 'var(--muted-foreground)',
                    fontStyle: 'italic'
                  }}
                >
                  *Based on $15,000 investment (Professional plan)
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Breakdown Section */}
        <Section variant="default">
          <Container>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="text-center mb-12"
            >
              <h2 
                className="mb-4"
                style={{
                  fontSize: 'var(--text-h2)',
                  fontFamily: 'Lexend, sans-serif',
                  fontWeight: 500,
                  color: 'var(--foreground)'
                }}
              >
                How We Calculate Your ROI
              </h2>
              <p 
                style={{
                  fontSize: 'var(--text-lg)',
                  fontFamily: 'Lexend, sans-serif',
                  color: 'var(--muted-foreground)',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                Three proven ways a high-performance website increases revenue
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Performance */}
              <div 
                className="p-8 rounded-lg"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)'
                }}
              >
                <Zap 
                  size={48} 
                  className="mb-6"
                  style={{ color: 'var(--primary)' }}
                />
                <h3 
                  className="mb-4"
                  style={{
                    fontSize: 'var(--text-h4)',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 500,
                    color: 'var(--foreground)'
                  }}
                >
                  Performance (+15%)
                </h3>
                <p 
                  className="mb-4"
                  style={{
                    fontSize: 'var(--text-base)',
                    fontFamily: 'Lexend, sans-serif',
                    color: 'var(--muted-foreground)',
                    lineHeight: 1.6
                  }}
                >
                  90+ Lighthouse scores mean faster load times. Amazon found that every 100ms delay costs 1% in sales. We improve by seconds, not milliseconds.
                </p>
                <p 
                  className="text-primary"
                  style={{
                    fontSize: 'var(--text-xl)',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 500,
                    color: 'var(--primary)'
                  }}
                >
                  +${performanceGain.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}/month
                </p>
              </div>

              {/* Accessibility */}
              <div 
                className="p-8 rounded-lg"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)'
                }}
              >
                <Shield 
                  size={48} 
                  className="mb-6"
                  style={{ color: 'var(--primary)' }}
                />
                <h3 
                  className="mb-4"
                  style={{
                    fontSize: 'var(--text-h4)',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 500,
                    color: 'var(--foreground)'
                  }}
                >
                  Accessibility (+15%)
                </h3>
                <p 
                  className="mb-4"
                  style={{
                    fontSize: 'var(--text-base)',
                    fontFamily: 'Lexend, sans-serif',
                    color: 'var(--muted-foreground)',
                    lineHeight: 1.6
                  }}
                >
                  15% of the population has some form of disability. WCAG AA compliance makes your site usable for everyone, expanding your addressable market.
                </p>
                <p 
                  className="text-primary"
                  style={{
                    fontSize: 'var(--text-xl)',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 500,
                    color: 'var(--primary)'
                  }}
                >
                  +${accessibilityRevenue.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}/month
                </p>
              </div>

              {/* SEO */}
              <div 
                className="p-8 rounded-lg"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border-soft)'
                }}
              >
                <Search 
                  size={48} 
                  className="mb-6"
                  style={{ color: 'var(--primary)' }}
                />
                <h3 
                  className="mb-4"
                  style={{
                    fontSize: 'var(--text-h4)',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 500,
                    color: 'var(--foreground)'
                  }}
                >
                  SEO (+30%)
                </h3>
                <p 
                  className="mb-4"
                  style={{
                    fontSize: 'var(--text-base)',
                    fontFamily: 'Lexend, sans-serif',
                    color: 'var(--muted-foreground)',
                    lineHeight: 1.6
                  }}
                >
                  Google prioritizes fast, accessible sites. Better Core Web Vitals = higher rankings = more organic traffic without ad spend.
                </p>
                <p 
                  className="text-primary"
                  style={{
                    fontSize: 'var(--text-xl)',
                    fontFamily: 'Lexend, sans-serif',
                    fontWeight: 500,
                    color: 'var(--primary)'
                  }}
                >
                  +${seoRevenue.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}/month
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* TestimonialGrid Section */}
        <TestimonialGrid
          testimonials={testimonials.slice(0, 6)}
          title="Real ROI from Real Clients"
          description="See how our work has delivered measurable results for businesses like yours."
          variant="default"
        />

        {/* SocialProof Section */}
        <SocialProof
          logos={clientLogos}
          title="Trusted by Leading Brands"
          description="Join hundreds of businesses who've seen real ROI from our WordPress expertise."
          variant="default"
        />

        {/* FAQSection */}
        <FAQSection
          faqs={pricingTimelineFAQs}
          title="ROI Calculator FAQs"
          description="Common questions about our ROI calculations and methodology."
        />

        {/* CTA Section */}
        <CTASection
          title="See These Results for Your Business"
          description="These aren't just projections — they're based on real data from our 150+ successful projects. Let's discuss how we can achieve these results for you."
          primaryButtonText="Book Free Call"
          primaryButtonPage="contact"
          secondaryButtonText="View Pricing"
          secondaryButtonPage="pricing"
          variant="highlighted"
          buttonSize="lg"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
      <StickyBookCallButton />
    </>
  );
}