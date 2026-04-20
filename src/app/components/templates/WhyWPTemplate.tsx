/**
 * Why WordPress Template
 *
 * Theme: "Neon Market"
 * Visuals: CMS integration, modern layout, high-performance features.
 *
 * Pattern Components:
 * - StatsGrid
 * - FeatureList
 * - TestimonialGrid
 * - FunkyCTA
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - All styling via BEM classes in page-why-wp.css
 * - Colors via scoped CSS variables (no hardcoded hex in JSX)
 * - Fonts: var(--font-primary), var(--font-secondary)
 *
 * @see /src/styles/templates/page-why-wp.css
 */

import '../../../styles/templates/page-why-wp.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { FeatureList } from '../patterns/FeatureList';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Button } from '../blocks/design/Buttons';
import {
  Code,
  MagnifyingGlass,
  Wrench,
  Globe,
  Lightning,
  PencilCircle,
  Database,
  Users
} from '@phosphor-icons/react';

export function WhyWPTemplate() {
  const features = [
    {
      title: 'Full Site Editing',
      description: 'Design every aspect of your site—headers, footers, and templates—using visual blocks without touching code.',
      icon: Wrench
    },
    {
      title: 'Unmatched SEO',
      description: 'WordPress powers the web for a reason. Built-in semantic markup, clean permalinks, and top-tier SEO plugins.',
      icon: MagnifyingGlass
    },
    {
      title: 'Complete Ownership',
      description: 'Open-source freedom means you truly own your platform, data, and content. No proprietary lock-in ever.',
      icon: Database
    },
    {
      title: 'Infinite Extensibility',
      description: 'With thousands of APIs and plugins, your website can grow and evolve exactly as your business does.',
      icon: Code
    },
    {
      title: 'Global Community',
      description: 'Backed by millions of developers. You will always find support, integrations, and continuous improvements.',
      icon: Globe
    },
    {
      title: 'Intuitive Publishing',
      description: 'The world\'s best publishing experience. Write, design, and publish rich media content effortlessly.',
      icon: PencilCircle
    }
  ];

  const painPoints = [
    {
      title: 'Stuck on Proprietary Builders?',
      description: 'Stop paying monthly premiums to rent your website. Move to open-source and own your digital real estate.'
    },
    {
      title: 'Frustrated by Slow Updates?',
      description: 'Don\'t wait for a vendor\'s roadmap. WordPress lets you add features and iterate at your own pace.'
    },
    {
      title: 'Losing SEO Traffic?',
      description: 'Many visual builders create bloated, slow code. WordPress produces clean, semantic HTML that search engines love.'
    }
  ];

  const testimonials = [
    {
      id: 'wp-test-1',
      quote: "Migrating to WordPress gave our marketing team the freedom to create landing pages instantly. Our organic traffic grew by 150% in 6 months.",
      author: "David Chen",
      role: "CMO",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 5
    }
  ];

  return (
    <div className="why-wp-page">
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Why', href: '/why' },
          { label: 'Why WordPress?' },
        ]}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="why-wp-page__hero">
        <div className="why-wp-page__hero-glow" aria-hidden="true" />
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="why-wp-page__hero-content">
              <div className="why-wp-page__badge">
                <Code size={16} />
                THE WEB'S OS
              </div>
              <h1 className="why-wp-page__title">
                Why <span className="why-wp-page__highlight">WordPress</span>?
              </h1>
              <p className="why-wp-page__desc">
                Flexible, SEO-friendly, and infinitely scalable. Discover why 43% of the web 
                trusts WordPress to power their digital presence.
              </p>
              <div className="why-wp-page__actions">
                <Button page="contact" size="lg">Start Building</Button>
                <Button page="solutions/wordpress" variant="outline" size="lg">Our Services</Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          PAIN POINTS
          ============================================ */}
      <section className="why-wp-page__pain-points">
        <Container>
          <div className="why-wp-page__pain-grid wp-grid-3-cols">
            {painPoints.map((point, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="why-wp-page__pain-card">
                  <h3 className="why-wp-page__pain-title">{point.title}</h3>
                  <p className="why-wp-page__pain-desc">{point.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          FEATURE OVERVIEW
          ============================================ */}
      <section className="why-wp-page__features">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="why-wp-page__section-header">
              <h2 className="why-wp-page__section-title">The Power of Open Source</h2>
              <p className="why-wp-page__section-desc">
                Everything you need to build a high-performance, enterprise-grade digital experience.
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
      <section className="why-wp-page__testimonial">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="why-wp-page__section-header">
              <h2 className="why-wp-page__section-title">Success Stories</h2>
            </div>
            <div className="why-wp-page__testimonial-wrapper">
              <TestimonialGrid testimonials={testimonials} variant="cards" />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          CTA
          ============================================ */}
      <FunkyCTA
        title="Ready to own your platform?"
        description="Let's build a lightning-fast WordPress site that gives your team total control."
        buttonText="Get a Proposal"
        buttonPage="contact"
        benefits={[
          'Full Site Editing (FSE)',
          '90+ Core Web Vitals',
          'Enterprise Security',
          'Zero Lock-in'
        ]}
      />
    </div>
  );
}