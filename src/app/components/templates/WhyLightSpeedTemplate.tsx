/**
 * Why LightSpeed Template
 *
 * Theme: "Neon Market"
 * Visuals: Expertise, agency, performance, partnership.
 *
 * Pattern Components:
 * - FeatureList
 * - TestimonialGrid
 * - FunkyCTA
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - All styling via BEM classes in page-why-lightspeed.css
 * - Colors via scoped CSS variables (no hardcoded hex in JSX)
 * - Fonts: var(--font-primary), var(--font-secondary)
 *
 * @see /src/styles/templates/page-why-lightspeed.css
 */

import '../../../styles/templates/page-why-lightspeed.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { FeatureList } from '../patterns/FeatureList';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Button } from '../blocks/design/Buttons';
import {
  RocketLaunch,
  ShieldCheck,
  TrendUp,
  Handshake,
  Lightbulb,
  Headset
} from '@phosphor-icons/react';

export function WhyLightSpeedTemplate() {
  const features = [
    {
      title: 'WordPress Experts',
      description: 'We live and breathe WordPress. From custom blocks to headless architecture, we know the ecosystem inside out.',
      icon: Lightbulb
    },
    {
      title: 'Performance First',
      description: 'Speed is a feature. We build lightweight, optimized digital experiences that pass Core Web Vitals with flying colors.',
      icon: RocketLaunch
    },
    {
      title: 'Strategic Partners',
      description: 'We do not just write code. We partner with you to understand your business goals and build solutions that drive growth.',
      icon: Handshake
    },
    {
      title: 'Data-Driven Design',
      description: 'Every design decision is backed by analytics, user research, and conversion rate optimization best practices.',
      icon: TrendUp
    },
    {
      title: 'Enterprise Security',
      description: 'Rigorous security protocols, automated testing, and proactive maintenance keep your digital assets safe.',
      icon: ShieldCheck
    },
    {
      title: 'Dedicated Support',
      description: 'Direct access to the engineers who built your project. No layers of account managers, just fast, technical support.',
      icon: Headset
    }
  ];

  const painPoints = [
    {
      title: 'Tired of Slow Agencies?',
      description: 'Stop waiting weeks for simple updates. Our agile methodology ensures rapid deployment and continuous iteration.'
    },
    {
      title: 'Broken Promises?',
      description: 'We deliver on time and on budget. Transparent communication and realistic timelines are at our core.'
    },
    {
      title: 'Generic Templates?',
      description: 'Stand out from the crowd. We build bespoke, scalable solutions tailored exactly to your brand and workflow.'
    }
  ];

  const testimonials = [
    {
      id: 'ls-test-1',
      quote: "LightSpeed did not just build us a website; they transformed our entire digital infrastructure. The performance gains were immediate.",
      author: {
        name: "James Wilson",
        role: "CTO",
        company: "Vanguard Tech",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
      },
      rating: 5
    }
  ];

  return (
    <div className="why-lightspeed-page">
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Why', href: '/why' },
          { label: 'Why LightSpeed?' },
        ]}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="why-lightspeed-page__hero">
        <div className="why-lightspeed-page__hero-glow" aria-hidden="true" />
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="why-lightspeed-page__hero-content">
              <div className="why-lightspeed-page__badge">
                <RocketLaunch size={16} />
                YOUR DIGITAL PARTNER
              </div>
              <h1 className="why-lightspeed-page__title">
                Why <span className="why-lightspeed-page__highlight">LightSpeed</span>?
              </h1>
              <p className="why-lightspeed-page__desc">
                Expert engineering, strategic thinking, and a relentless focus on performance. We build digital products that move the needle.
              </p>
              <div className="why-lightspeed-page__actions">
                <Button page="contact" size="lg">Start a Project</Button>
                <Button page="portfolio" variant="outline" size="lg">View Our Work</Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          PAIN POINTS
          ============================================ */}
      <section className="why-lightspeed-page__pain-points">
        <Container>
          <div className="why-lightspeed-page__pain-grid wp-grid-3-cols">
            {painPoints.map((point, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="why-lightspeed-page__pain-card">
                  <h3 className="why-lightspeed-page__pain-title">{point.title}</h3>
                  <p className="why-lightspeed-page__pain-desc">{point.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          FEATURE OVERVIEW
          ============================================ */}
      <section className="why-lightspeed-page__features">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="why-lightspeed-page__section-header">
              <h2 className="why-lightspeed-page__section-title">The LightSpeed Difference</h2>
              <p className="why-lightspeed-page__section-desc">
                We combine deep technical expertise with a genuine passion for solving complex business problems.
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
      <section className="why-lightspeed-page__testimonial">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="why-lightspeed-page__section-header">
              <h2 className="why-lightspeed-page__section-title">Client Success</h2>
            </div>
            <div className="why-lightspeed-page__testimonial-wrapper">
              <TestimonialGrid testimonials={testimonials} variant="cards" />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          CTA
          ============================================ */}
      <FunkyCTA
        title="Ready to accelerate your growth?"
        description="Let's collaborate on a high-performance solution tailored to your business."
        buttonText="Book a Discovery Call"
        buttonPage="contact"
        benefits={[
          'Dedicated engineering team',
          'Transparent process',
          'Performance guaranteed',
          'Ongoing support'
        ]}
      />
    </div>
  );
}