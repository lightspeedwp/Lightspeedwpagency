/**
 * Why WooCommerce Template
 *
 * Theme: "Neon Market"
 * Visuals: eCommerce integration, modern layout, high-performance features.
 *
 * Pattern Components:
 * - StatsGrid
 * - FeatureList
 * - TestimonialGrid
 * - FunkyCTA
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - All styling via BEM classes in page-why-woo.css
 * - Colors via scoped CSS variables (no hardcoded hex in JSX)
 * - Fonts: var(--font-primary), var(--font-secondary)
 *
 * @see /src/styles/templates/page-why-woo.css
 */

import '../../../styles/templates/page-why-woo.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { FeatureList } from '../patterns/FeatureList';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Button } from '../blocks/design/Buttons';
import {
  ShoppingCart,
  PuzzlePiece,
  ChartLineUp,
  ShieldCheck,
  Lightning,
  ArrowsLeftRight,
  Money,
  GlobeHemisphere
} from '@phosphor-icons/react';

export function WhyWooTemplate() {
  const features = [
    {
      title: 'Seamless Integration',
      description: 'Connects perfectly with WordPress, allowing your content and commerce to live under one unified roof without friction.',
      icon: PuzzlePiece
    },
    {
      title: 'Total Ownership',
      description: 'You own your store, your data, and your customer relationships. No vendor lock-in or surprise platform fee hikes.',
      icon: ShieldCheck
    },
    {
      title: 'Limitless Flexibility',
      description: 'Customise every aspect of the checkout, product pages, and inventory rules to perfectly match your business model.',
      icon: ArrowsLeftRight
    },
    {
      title: 'Conversion Focused',
      description: 'Built-in tools for abandoned cart recovery, upsells, cross-sells, and highly optimised checkout flows.',
      icon: ChartLineUp
    },
    {
      title: 'Global Payments',
      description: 'Accept credit cards, digital wallets, bank transfers, and local payment methods securely from anywhere in the world.',
      icon: Money
    },
    {
      title: 'Scalable Architecture',
      description: 'Whether you have 10 products or 100,000, WooCommerce scales effortlessly with our high-performance hosting.',
      icon: Lightning
    }
  ];

  const painPoints = [
    {
      title: 'Tired of Platform Fees?',
      description: 'Stop giving away a percentage of every sale to SaaS platforms. Keep your hard-earned revenue.'
    },
    {
      title: 'Restricted by Templates?',
      description: 'Break free from rigid design constraints. Build the exact shopping experience your brand deserves.'
    },
    {
      title: 'Siloed Content & Commerce?',
      description: 'Bring your blog, marketing pages, and store together for a cohesive, SEO-dominating powerhouse.'
    }
  ];

  const testimonials = [
    {
      id: 'woo-test-1',
      quote: "Switching to WooCommerce gave us complete control over our checkout flow. Our conversion rate increased by 34% within the first month.",
      author: {
        name: "Sarah Jenkins",
        role: "eCommerce Director",
        company: "Urban Supply Co",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
      },
      rating: 5
    }
  ];

  return (
    <div className="why-woo-page">
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Why', href: '/why' },
          { label: 'Why WooCommerce?' },
        ]}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="why-woo-page__hero">
        <div className="why-woo-page__hero-glow" aria-hidden="true" />
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="why-woo-page__hero-content">
              <div className="why-woo-page__badge">
                <ShoppingCart size={16} />
                ECOMMERCE EXCELLENCE
              </div>
              <h1 className="why-woo-page__title">
                Why <span className="why-woo-page__highlight">WooCommerce</span>?
              </h1>
              <p className="why-woo-page__desc">
                Seamless integration, limitless flexibility, and total ownership. 
                Discover why the world's most successful independent brands choose WooCommerce.
              </p>
              <div className="why-woo-page__actions">
                <Button page="contact" size="lg">Start Your Store</Button>
                <Button page="solutions/woocommerce" variant="outline" size="lg">View Services</Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          PAIN POINTS
          ============================================ */}
      <section className="why-woo-page__pain-points">
        <Container>
          <div className="why-woo-page__pain-grid wp-grid-3-cols">
            {painPoints.map((point, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="why-woo-page__pain-card">
                  <h3 className="why-woo-page__pain-title">{point.title}</h3>
                  <p className="why-woo-page__pain-desc">{point.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          FEATURE OVERVIEW
          ============================================ */}
      <section className="why-woo-page__features">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="why-woo-page__section-header">
              <h2 className="why-woo-page__section-title">The WooCommerce Advantage</h2>
              <p className="why-woo-page__section-desc">
                Built on WordPress, designed for growth. Everything you need to succeed online.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <FeatureList
              items={features}
              columns={3}
              variant="glow"
              iconSize="md"
              iconStyle="rounded"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          TESTIMONIAL
          ============================================ */}
      <section className="why-woo-page__testimonial">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="why-woo-page__section-header">
              <h2 className="why-woo-page__section-title">Success Stories</h2>
            </div>
            <div className="why-woo-page__testimonial-wrapper">
              <TestimonialGrid testimonials={testimonials} variant="cards" />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          CTA
          ============================================ */}
      <FunkyCTA
        title="Ready to sell more?"
        description="Let's build a high-converting WooCommerce store that scales with your ambition."
        buttonText="Get a Proposal"
        buttonPage="contact"
        benefits={[
          'Custom checkout flows',
          'Advanced inventory logic',
          'Zero platform fees',
          'Total data ownership'
        ]}
      />
    </div>
  );
}