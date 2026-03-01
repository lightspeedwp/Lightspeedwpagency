/**
 * WordPress Solution Template
 * 
 * WordPress template: templates/page-solution-wordpress.html
 * 
 * WordPress solutions page for WordPress development services.
 * 
 * Pattern order:
 * Breadcrumbs → Funky Hero → Overview → Features → Use Cases → Pricing → Comparison → Benefits → FAQs → CTA
 * 
 * **Migration Status:**
 * - ✅ Hero → Custom Funky Hero (page-solution-wordpress.css)
 * - ✅ Overview → StatsGrid pattern
 * - ✅ Features → FeatureGrid pattern
 * - ✅ Use Cases → UseCasesGrid pattern
 * - ✅ Pricing → PricingTable pattern
 * - ✅ Comparison → FeatureComparison pattern (adapted)
 * - ✅ Benefits → BenefitsGrid pattern
 * - ✅ FAQs → FAQSection pattern
 * - ✅ CTA → FunkyCTA pattern
 */

import '../../../styles/templates/page-solution-wordpress.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { StatsGrid } from '../patterns/StatsGrid';
import { FeatureGrid } from '../patterns/FeatureGrid';
import { UseCasesGrid } from '../patterns/UseCasesGrid';
import { PricingTable } from '../patterns/PricingTable';
import { BenefitsGrid } from '../patterns/BenefitsGrid';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Code, ShoppingCart, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/pages';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';


// Import centralized data
import {
  wordpressSolutionHero,
  wordpressSolutionOverview,
  wordpressSolutionFeatures,
  wordpressSolutionUseCases,
  wordpressSolutionPricing,
  wordpressSolutionFAQs,
  wordpressSolutionCTA
} from '../../data/wordpress-solution-page';

import { PricingPackage } from '../../data/pricing';

export function WordPressSolutionTemplate() {
  // Transform pricing data for PricingTable pattern
  const pricingPlans: PricingPackage[] = wordpressSolutionPricing.packages.map((pkg, index) => ({
    id: `pkg-${index}`,
    name: pkg.name,
    slug: pkg.name.toLowerCase().replace(/\s+/g, '-'),
    tagline: pkg.description,
    description: pkg.description,
    price: {
      amount: 0,
      currency: 'USD',
      display: pkg.price,
      period: 'project'
    },
    features: pkg.features.map(f => ({ name: f, included: true })),
    cta: {
      text: 'Get Started',
      action: 'contact'
    },
    recommended: pkg.recommended,
    category: 'website'
  }));

  // Transform related solutions for BenefitsGrid pattern
  const relatedBenefits = [
    {
      icon: ShoppingCart,
      title: 'WooCommerce Solution',
      description: 'Build powerful e-commerce stores with WooCommerce and WordPress.',
      link: 'woocommerce',
      linkText: 'Learn More'
    },
    {
      icon: Shield,
      title: 'WordPress Hosting',
      description: 'Secure managed WordPress hosting with daily backups and monitoring.',
      link: 'hosting',
      linkText: 'Learn More'
    },
    {
      icon: Code,
      title: 'WordPress Security',
      description: 'Protect your WordPress site from malware, hacks, and security threats.',
      link: 'security',
      linkText: 'Learn More'
    }
  ];

  return (
    <div className="wordpress-page">
        {/* ── Breadcrumbs ── */}
        <BreadcrumbPart
          items={[
            { label: 'Home', page: 'front-page' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'WordPress' },
          ]}
        />

        {/* ============================================
            FUNKY HERO SECTION
            ============================================ */}
        <section className="wordpress-page__hero">
          <div className="wordpress-page__hero-grid"></div>
          
          <Container>
            <div className="wp-grid-2-cols wp-items-center wp-gap-12">
              {/* Left: Content */}
              <div className="wordpress-page__hero-content">
                <ScrollReveal animation="fade-right">
                  {/* Badge */}
                  <div className="wordpress-page__badge">
                    <Code size={14} />
                    {wordpressSolutionHero.badge.text}
                  </div>

                  {/* Title */}
                  <h1 className="wordpress-page__title">
                    Enterprise-Grade <br />
                    <span className="wordpress-page__highlight">WordPress Solutions</span>
                  </h1>

                  {/* Description */}
                  <p className="wordpress-page__tagline">
                    {wordpressSolutionHero.tagline}
                  </p>

                  {/* Buttons */}
                  <div className="wp-flex wp-gap-4">
                    <Link 
                      className="wordpress-page__btn-primary"
                      to={getPageUrl('contact')}
                    >
                      {wordpressSolutionHero.primaryButton.text} <ArrowRight size={18} />
                    </Link>
                    <Link 
                      className="wordpress-page__btn-outline"
                      to={getPageUrl('portfolio-archive')}
                    >
                      {wordpressSolutionHero.secondaryButton.text}
                    </Link>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right: Visual (Code Window) */}
              <div className="wordpress-page__visual wp-hide-mobile">
                <ScrollReveal animation="fade-left" delay={200}>
                  <div className="wordpress-page__orb wordpress-page__orb--1"></div>
                  <div className="wordpress-page__orb wordpress-page__orb--2"></div>
                  
                  <div className="wordpress-page__code-window">
                    <div className="wordpress-page__window-header">
                      <div className="wordpress-page__dots">
                        <div className="wordpress-page__dot wordpress-page__dot--red"></div>
                        <div className="wordpress-page__dot wordpress-page__dot--yellow"></div>
                        <div className="wordpress-page__dot wordpress-page__dot--green"></div>
                      </div>
                      <div className="wordpress-page__filename">/src/wp-config.php</div>
                    </div>
                    <div className="wordpress-page__code-content">
                      <pre>
                        <code>
<span className="token keyword">&lt;?php</span>
<span className="token comment">// LSX Design System Configuration</span>

<span className="token function">define</span>(<span className="token string">'WP_CACHE'</span>, <span className="token keyword">true</span>);
<span className="token function">define</span>(<span className="token string">'WP_ENVIRONMENT_TYPE'</span>, <span className="token string">'production'</span>);

<span className="token comment">// Performance Settings</span>
<span className="token keyword">$performance</span> = [
  <span className="token string">'caching'</span> =&gt; <span className="token string">'redis'</span>,
  <span className="token string">'loading'</span> =&gt; <span className="token string">'lazy'</span>,
  <span className="token string">'vitals'</span>  =&gt; <span className="token string">'optimized'</span>
];

<span className="token comment">// Initialize Security</span>
<span className="token function">lsx_init_security</span>(<span className="token keyword">$performance</span>);
                        </code>
                      </pre>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </Container>

          <ScrollDownArrow />
        </section>

        {/* Overview Stats Section */}
        <section className="wordpress-page__stats">
          <Container>
            <ScrollReveal animation="fade-up">
              <StatsGrid
                title={wordpressSolutionOverview.title}
                description={wordpressSolutionOverview.description}
                stats={wordpressSolutionOverview.stats.map(stat => ({
                  icon: stat.icon,
                  value: stat.value,
                  label: stat.label,
                  description: stat.description
                }))}
                columns={4}
                variant="default"
              />
            </ScrollReveal>
          </Container>
        </section>

        {/* Features Section */}
        <FeatureGrid
          title="WordPress Features & Capabilities"
          description="Everything you need for a powerful, modern website"
          items={wordpressSolutionFeatures}
          columns={4}
          variant="default"
        />

        {/* Use Cases Section */}
        <UseCasesGrid
          title="WordPress Use Cases"
          description="WordPress adapts to any industry or business type"
          useCases={wordpressSolutionUseCases}
          columns={2}
          variant="default"
        />

        {/* Pricing Section */}
        <PricingTable
          heading={wordpressSolutionPricing.title}
          description={wordpressSolutionPricing.description}
          packages={pricingPlans}
          variant="default"
        />

        {/* Benefits/Related Solutions Section */}
        <BenefitsGrid
          title="Related Solutions"
          description="Explore more ways to enhance your WordPress website"
          benefits={relatedBenefits}
          columns={3}
          variant="default"
          showArrows={true}
        />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          description="Common questions about WordPress solutions"
          faqs={wordpressSolutionFAQs}
          variant="muted"
        />

        {/* CTA Section */}
        <FunkyCTA
          title={wordpressSolutionCTA.title}
          description={wordpressSolutionCTA.description}
          buttonText={wordpressSolutionCTA.buttons[0].text}
          buttonPage={wordpressSolutionCTA.buttons[0].page}
          benefits={[
            'Custom WordPress & WooCommerce solutions',
            'Full Site Editing with block themes',
            'Enterprise-grade security & performance',
            'Ongoing maintenance & support plans'
          ]}
        />
    </div>
  );
}