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

import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { AgencyStats } from '../patterns/AgencyStats';
import { ServiceCapabilitiesGrid } from '../patterns/ServiceCapabilitiesGrid';
import { ServiceUseCases } from '../patterns/ServiceUseCases';
import { PricingTable } from '../patterns/PricingTable';
import { ServiceRelatedSolutions } from '../patterns/ServiceRelatedSolutions';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Code, ShoppingBag as ShoppingCart, Shield, ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
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
    <div className="wp-w-full wp-flex wp-flex-col">
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
        <section 
          style={{
            position: 'relative',
            padding: 'var(--spacing-24) 0',
            backgroundColor: 'var(--background)',
            overflow: 'hidden'
          }}
        >
          {/* Neon Grid Background */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'linear-gradient(to right, var(--border-soft) 1px, transparent 1px), linear-gradient(to bottom, var(--border-soft) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              opacity: 0.1,
              zIndex: 0
            }}
          />
          
          <Container>
            <div className="wp-grid-2-cols wp-items-center wp-gap-12" style={{ position: 'relative', zIndex: 1 }}>
              {/* Left: Content */}
              <div className="wp-flex wp-flex-col">
                <ScrollReveal animation="fade-right">
                  {/* Badge */}
                  <div 
                    className="wp-inline-flex wp-items-center wp-gap-2 wp-mb-6"
                    style={{
                      padding: 'var(--spacing-2) var(--spacing-4)',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      color: 'var(--primary)',
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                      boxShadow: '0 0 10px var(--primary-soft)'
                    }}
                  >
                    <Code size={14} weight="bold" />
                    {wordpressSolutionHero.badge.text}
                  </div>

                  {/* Title */}
                  <h1 
                    className="wp-m-0 wp-mb-6"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h1)',
                      color: 'var(--foreground)',
                      lineHeight: '1.1'
                    }}
                  >
                    Enterprise-Grade <br />
                    <span style={{
                      color: 'var(--primary)',
                      textShadow: '0 0 30px var(--primary-soft)'
                    }}>
                      WordPress Solutions
                    </span>
                  </h1>

                  {/* Description */}
                  <p 
                    className="wp-m-0 wp-mb-8 wp-max-w-xl"
                    style={{
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--muted-foreground)',
                      lineHeight: '1.6'
                    }}
                  >
                    {wordpressSolutionHero.tagline}
                  </p>

                  {/* Buttons */}
                  <div className="wp-flex wp-gap-4">
                    <Link 
                      to={getPageUrl('contact')}
                      className="wp-inline-flex wp-items-center wp-justify-center wp-gap-2"
                      style={{
                        padding: 'var(--spacing-3) var(--spacing-6)',
                        backgroundColor: 'var(--primary)',
                        color: 'var(--primary-foreground)',
                        borderRadius: 'var(--radius)',
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-semibold)',
                        textDecoration: 'none',
                        transition: 'box-shadow var(--transition-base)',
                        boxShadow: '0 4px 15px var(--primary-soft)'
                      }}
                    >
                      {wordpressSolutionHero.primaryButton.text} <ArrowRight size={18} weight="bold" />
                    </Link>
                    <Link 
                      to={getPageUrl('portfolio-archive')}
                      className="wp-inline-flex wp-items-center wp-justify-center wp-gap-2"
                      style={{
                        padding: 'var(--spacing-3) var(--spacing-6)',
                        backgroundColor: 'transparent',
                        border: '1px solid var(--border)',
                        color: 'var(--foreground)',
                        borderRadius: 'var(--radius)',
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-medium)',
                        textDecoration: 'none'
                      }}
                    >
                      {wordpressSolutionHero.secondaryButton.text}
                    </Link>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right: Visual (Code Window) */}
              <div className="wp-hide-mobile" style={{ position: 'relative' }}>
                <ScrollReveal animation="fade-left" delay={200}>
                  
                  {/* Floating Glowing Orbs */}
                  <div style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-10%',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)',
                    filter: 'blur(60px)',
                    opacity: 0.3,
                    zIndex: 0
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '-10%',
                    left: '-10%',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--secondary)',
                    filter: 'blur(70px)',
                    opacity: 0.2,
                    zIndex: 0
                  }} />
                  
                  {/* Code Window */}
                  <div 
                    style={{
                      position: 'relative',
                      backgroundColor: 'var(--terminal-bg)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)',
                      boxShadow: 'var(--shadow-2xl), 0 0 20px var(--primary-soft)',
                      overflow: 'hidden',
                      zIndex: 1
                    }}
                  >
                    {/* Mac-style Window Header */}
                    <div 
                      className="wp-flex wp-items-center wp-justify-between wp-px-4 wp-py-3"
                      style={{
                        backgroundColor: 'var(--terminal-header-bg)',
                        borderBottom: '1px solid var(--terminal-border)'
                      }}
                    >
                      <div className="wp-flex wp-gap-2">
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-terminal-red)' }} />
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-terminal-yellow)' }} />
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-terminal-green)' }} />
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-secondary)',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--syntax-comment)'
                      }}>
                        /src/wp-config.php
                      </div>
                      <div style={{ width: '44px' }} /> {/* Spacer to center the title */}
                    </div>

                    {/* Code Content */}
                    <div className="wp-p-6" style={{ overflowX: 'auto' }}>
                      <pre style={{ margin: 0, padding: 0 }}>
                        <code style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 'var(--text-sm)',
                          lineHeight: '1.6',
                          color: 'var(--terminal-text)'
                        }}>
<span style={{ color: 'var(--syntax-keyword)' }}>&lt;?php</span>
<span style={{ color: 'var(--syntax-comment)', fontStyle: 'italic' }}>// LSX Design System Configuration</span>

<span style={{ color: 'var(--syntax-function)' }}>define</span>(<span style={{ color: 'var(--syntax-string)' }}>'WP_CACHE'</span>, <span style={{ color: 'var(--syntax-variable)' }}>true</span>);
<span style={{ color: 'var(--syntax-function)' }}>define</span>(<span style={{ color: 'var(--syntax-string)' }}>'WP_ENVIRONMENT_TYPE'</span>, <span style={{ color: 'var(--syntax-string)' }}>'production'</span>);

<span style={{ color: 'var(--syntax-comment)', fontStyle: 'italic' }}>// Performance Settings</span>
<span style={{ color: 'var(--syntax-variable)' }}>$performance</span> <span style={{ color: 'var(--syntax-operator)' }}>=</span> [
  <span style={{ color: 'var(--syntax-string)' }}>'caching'</span> <span style={{ color: 'var(--syntax-operator)' }}>=&gt;</span> <span style={{ color: 'var(--syntax-string)' }}>'redis'</span>,
  <span style={{ color: 'var(--syntax-string)' }}>'loading'</span> <span style={{ color: 'var(--syntax-operator)' }}>=&gt;</span> <span style={{ color: 'var(--syntax-string)' }}>'lazy'</span>,
  <span style={{ color: 'var(--syntax-string)' }}>'vitals'</span>  <span style={{ color: 'var(--syntax-operator)' }}>=&gt;</span> <span style={{ color: 'var(--syntax-string)' }}>'optimized'</span>
];

<span style={{ color: 'var(--syntax-comment)', fontStyle: 'italic' }}>// Initialize Security</span>
<span style={{ color: 'var(--syntax-function)' }}>lsx_init_security</span>(<span style={{ color: 'var(--syntax-variable)' }}>$performance</span>);
                        </code>
                      </pre>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </Container>

          <div style={{ marginTop: 'var(--spacing-12)' }}>
            <ScrollDownArrow />
          </div>
        </section>

        {/* Overview Stats Section */}
        <section className="wordpress-page__stats">
          <Container>
            <ScrollReveal animation="fade-up">
              <AgencyStats
                heading={wordpressSolutionOverview.title}
                subheading={wordpressSolutionOverview.description}
                stats={wordpressSolutionOverview.stats.map((stat, i) => ({
                  id: `stat-${i}`,
                  icon: stat.icon,
                  value: stat.value,
                  label: stat.label,
                  description: stat.description
                }))}
                columns={4}
              />
            </ScrollReveal>
          </Container>
        </section>

        {/* Features Section */}
        <Container>
          <ServiceCapabilitiesGrid
            heading="WordPress Features & Capabilities"
            subheading="Everything you need for a powerful, modern website"
            capabilities={wordpressSolutionFeatures.map((feature, i) => ({
              id: `feature-${i}`,
              title: feature.title,
              description: feature.description,
              icon: feature.icon,
            }))}
            columns={3}
          />
        </Container>

        {/* Use Cases Section */}
        <Container>
          <ServiceUseCases
            heading="WordPress Use Cases"
            subheading="WordPress adapts to any industry or business type"
            useCases={wordpressSolutionUseCases.map((useCase, i) => ({
              id: `use-case-${i}`,
              title: useCase.title,
              description: useCase.description,
              industries: useCase.industries,
              features: useCase.features
            }))}
            columns={2}
          />
        </Container>

        {/* Pricing Section */}
        <PricingTable
          heading={wordpressSolutionPricing.title}
          description={wordpressSolutionPricing.description}
          packages={pricingPlans}
          variant="default"
        />

        {/* Benefits/Related Solutions Section */}
        <Container>
          <ServiceRelatedSolutions
            heading="Related Solutions"
            subheading="Explore more ways to enhance your WordPress website"
            solutions={relatedBenefits.map((b, i) => ({
              id: `related-${i}`,
              icon: b.icon,
              title: b.title,
              description: b.description,
              link: b.link,
              linkText: b.linkText
            }))}
            columns={3}
          />
        </Container>

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