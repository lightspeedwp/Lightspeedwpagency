/**
 * Pricing Template
 * 
 * WordPress template: templates/page-pricing.html
 * 
 * Conversion-focused pricing page with:
 * - Hero with value proposition
 * - 3-tier pricing table (using PricingTable pattern)
 * - Detailed feature comparison (using FeatureComparison pattern)
 * - Payment options
 * - FAQ section
 * - Social proof (client logos)
 * - ROI calculator CTA
 * 
 * Pattern order: Hero → Pricing Table → Feature Comparison → Payment Options → Social Proof → FAQ → CTA
 * 
 * **Design Token Compliance:**
 * - Typography: CSS variables ONLY
 * - Fonts: Lexend (headings), Manrope (body) ONLY
 * - Colors: CSS variables ONLY
 * - Spacing: Tailwind classes ONLY
 * - Border Radius: CSS variables ONLY
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Button, Buttons } from '../blocks/design/Buttons';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { CTASection } from '../patterns/CTASection';
import { FAQSection } from '../patterns/FAQSection';
import { PricingTable } from '../patterns/PricingTable';
import { FeatureComparison } from '../patterns/FeatureComparison';
import { SocialProof } from '../patterns/SocialProof';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { StickyBookCallButton } from '../blocks/layout/StickyBookCallButton';
import { Skeleton } from '../blocks/layout/Skeleton';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem,
  viewportOptions 
} from '../../utils/scrollAnimations';
import {
  DollarSign,
  Clock,
  CreditCard,
  Shield
} from 'lucide-react';

// Import centralized data
import { websitePackages } from '../../data/pricing';
import { websiteFeatureComparison } from '../../data/comparisons';
import { clientLogos } from '../../data/logos';

// Pricing FAQ data
const pricingFAQs = [
  {
    question: 'How do I choose the right pricing tier?',
    answer: 'Start by assessing your project complexity: Starter for simple 5-10 page sites, Professional for custom features or WooCommerce stores, Enterprise for complex multi-site or membership platforms. Book a free consultation if you\'re unsure.'
  },
  {
    question: 'What\'s included in the base price?',
    answer: 'All tiers include: design, development, WCAG AA accessibility, 90+ Lighthouse scores, responsive mobile-first design, basic SEO setup, training, 30 days post-launch support, and documentation. Domain/hosting not included.'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes! We offer: 50% deposit + 50% on completion (standard), monthly installments for projects over $15K, retainer agreements for ongoing work, and upfront payment discount (5% off).'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Starter: 4-6 weeks, Professional: 8-12 weeks, Enterprise: 12-20 weeks. Timeline depends on scope, revisions, and content readiness. We provide detailed timelines during discovery.'
  },
  {
    question: 'What happens after my site launches?',
    answer: 'You get 30 days of free support (bug fixes, minor adjustments). After that, choose a maintenance plan ($200-$500/month) or pay-as-you-go ($150/hour). We offer training so your team can manage content independently.'
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Absolutely! Start with Starter, then add features as needed. We credit your initial investment toward upgrades within 6 months. Many clients start small and scale up after seeing results.'
  }
];

export function PricingTemplate() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state (in real app, this would be actual data fetching)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1000ms loading simulation
    
    return () => clearTimeout(timer);
  }, []); // Run once on mount

  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content">
        {/* Breadcrumbs */}
        <Section variant="default" className="pt-24 pb-0">
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Pricing', href: '/pricing' }
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
              <h1 
                className="mb-6"
                style={{
                  fontSize: 'var(--text-h1)',
                  fontFamily: 'Lexend, sans-serif',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)'
                }}
              >
                Transparent, Fair Pricing
              </h1>
              
              <p 
                className="mb-8"
                style={{
                  fontSize: 'var(--text-xl)',
                  fontFamily: 'Manrope, sans-serif',
                  color: 'var(--muted-foreground)',
                  lineHeight: 1.6
                }}
              >
                Choose the plan that fits your needs. All plans include WCAG AA accessibility, 
                90+ Lighthouse scores, and 30-day money-back guarantee.
              </p>

              <Buttons orientation="horizontal" align="center" className="mb-8">
                <Button 
                  page="contact" 
                  size="lg"
                  aria-label="Book a free consultation to discuss your project"
                >
                  Book Free Consultation
                </Button>
                <Button 
                  onClick={() => {
                    const element = document.getElementById('comparison');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="secondary" 
                  size="lg"
                  aria-label="Scroll to feature comparison table"
                >
                  Compare Features
                </Button>
              </Buttons>

              <p 
                className="flex items-center justify-center gap-2"
                style={{
                  fontSize: 'var(--text-sm)',
                  fontFamily: 'Manrope, sans-serif',
                  color: 'var(--muted-foreground)'
                }}
              >
                <Shield size={16} style={{ color: 'var(--primary)' }} />
                30-day money-back guarantee • No hidden fees • Flexible payment plans
              </p>
            </motion.div>
          </Container>
        </Section>

        {/* Pricing Table - NEW PATTERN COMPONENT */}
        <PricingTable 
          heading="Choose Your Plan"
          description="Transparent pricing with no hidden fees. All plans include WCAG AA compliance and 90+ Lighthouse scores."
          packages={websitePackages}
          columns={3}
          variant="featured"
        />

        {/* Feature Comparison Table - NEW PATTERN COMPONENT */}
        <div id="comparison">
          <FeatureComparison 
            heading="Compare All Features"
            description="Detailed breakdown of what's included in each plan"
            features={websiteFeatureComparison}
            columns={{
              feature: "Feature",
              basic: "Starter",
              professional: "Professional",
              enterprise: "Enterprise"
            }}
            featuredColumn={2}
          />
        </div>

        {/* Payment Options */}
        <Section variant="background">
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
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)'
                }}
              >
                Flexible Payment Options
              </h2>
              <p 
                style={{
                  fontSize: 'var(--text-lg)',
                  fontFamily: 'Manrope, sans-serif',
                  color: 'var(--muted-foreground)',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                We offer flexible payment plans to suit your budget
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {/* Standard Payment */}
              <motion.div variants={staggerItem}>
                <div 
                  className="p-6 rounded-lg text-center h-full"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)'
                  }}
                >
                  <DollarSign 
                    size={32} 
                    className="mx-auto mb-4"
                    style={{ color: 'var(--primary)' }}
                  />
                  <h3 
                    className="mb-2"
                    style={{
                      fontSize: 'var(--text-h5)',
                      fontFamily: 'Lexend, sans-serif',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)'
                    }}
                  >
                    Standard
                  </h3>
                  <p 
                    style={{
                      fontSize: 'var(--text-base)',
                      fontFamily: 'Manrope, sans-serif',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    50% deposit, 50% on completion
                  </p>
                </div>
              </motion.div>

              {/* Installments */}
              <motion.div variants={staggerItem}>
                <div 
                  className="p-6 rounded-lg text-center h-full"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)'
                  }}
                >
                  <Clock 
                    size={32} 
                    className="mx-auto mb-4"
                    style={{ color: 'var(--primary)' }}
                  />
                  <h3 
                    className="mb-2"
                    style={{
                      fontSize: 'var(--text-h5)',
                      fontFamily: 'Lexend, sans-serif',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)'
                    }}
                  >
                    Installments
                  </h3>
                  <p 
                    style={{
                      fontSize: 'var(--text-base)',
                      fontFamily: 'Manrope, sans-serif',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    Monthly payments for projects over $15K
                  </p>
                </div>
              </motion.div>

              {/* Retainer */}
              <motion.div variants={staggerItem}>
                <div 
                  className="p-6 rounded-lg text-center h-full"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)'
                  }}
                >
                  <CreditCard 
                    size={32} 
                    className="mx-auto mb-4"
                    style={{ color: 'var(--primary)' }}
                  />
                  <h3 
                    className="mb-2"
                    style={{
                      fontSize: 'var(--text-h5)',
                      fontFamily: 'Lexend, sans-serif',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)'
                    }}
                  >
                    Retainer
                  </h3>
                  <p 
                    style={{
                      fontSize: 'var(--text-base)',
                      fontFamily: 'Manrope, sans-serif',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    Ongoing work with monthly agreements
                  </p>
                </div>
              </motion.div>

              {/* Upfront Discount */}
              <motion.div variants={staggerItem}>
                <div 
                  className="p-6 rounded-lg text-center h-full"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)'
                  }}
                >
                  <Shield 
                    size={32} 
                    className="mx-auto mb-4"
                    style={{ color: 'var(--primary)' }}
                  />
                  <h3 
                    className="mb-2"
                    style={{
                      fontSize: 'var(--text-h5)',
                      fontFamily: 'Lexend, sans-serif',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)'
                    }}
                  >
                    Upfront
                  </h3>
                  <p 
                    style={{
                      fontSize: 'var(--text-base)',
                      fontFamily: 'Manrope, sans-serif',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    5% discount for full upfront payment
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </Container>
        </Section>

        {/* Social Proof - NEW PATTERN COMPONENT */}
        <SocialProof 
          heading="Trusted By Leading Brands"
          logos={clientLogos}
          columns={6}
          variant="logos"
          caption="Join hundreds of businesses that trust our services"
        />

        {/* FAQ Section */}
        <FAQSection 
          faqs={pricingFAQs}
          heading="Pricing FAQs"
          description="Common questions about our pricing and payment options"
        />

        {/* CTA Section */}
        <CTASection 
          heading="Ready to Get Started?"
          description="Book a free 30-minute consultation to discuss your project and get a custom quote."
          primaryButtonText="Book Free Consultation"
          primaryButtonHref="/contact"
          secondaryButtonText="View ROI Calculator"
          secondaryButtonHref="/roi-calculator"
        />
      </main>
      
      <SiteFooter />
      <BackToTopButton />
      <StickyBookCallButton />
    </>
  );
}