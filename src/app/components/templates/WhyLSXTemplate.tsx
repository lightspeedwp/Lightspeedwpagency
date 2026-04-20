/**
 * Why LSX Template
 *
 * Theme: "Neon Market"
 * Visuals: Open-source, tools for designers, system thinking.
 *
 * Pattern Components:
 * - FeatureList
 * - TestimonialGrid
 * - FunkyCTA
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - All styling via BEM classes in page-why-lsx.css
 * - Colors via scoped CSS variables (no hardcoded hex in JSX)
 * - Fonts: var(--font-primary), var(--font-secondary)
 *
 * @see /src/styles/templates/page-why-lsx.css
 */

import '../../../styles/templates/page-why-lsx.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { FeatureList } from '../patterns/FeatureList';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Button } from '../blocks/design/Buttons';
import {
  CodeBlock,
  PenNib,
  RocketLaunch,
  HandHeart,
  ArrowsMerge,
  Cpu
} from '@phosphor-icons/react';

export function WhyLSXTemplate() {
  const features = [
    {
      title: 'Free & Open Source',
      description: 'Built by the community, for the community. We believe essential tools for web professionals should be accessible to everyone.',
      icon: HandHeart
    },
    {
      title: 'Built for Designers',
      description: 'Our tools bridge the gap between design and development, mapping perfectly to modern design systems.',
      icon: PenNib
    },
    {
      title: 'System Thinking',
      description: 'Everything is built around CSS variables, BEM methodologies, and scalable component architecture.',
      icon: Cpu
    },
    {
      title: 'Developer Friendly',
      description: 'Clean, extensible code that respects WordPress core standards. Easy to modify, hook into, and extend.',
      icon: CodeBlock
    },
    {
      title: 'Seamless Integration',
      description: 'Our products work together harmoniously, creating a unified ecosystem for your digital projects.',
      icon: ArrowsMerge
    },
    {
      title: 'High Performance',
      description: 'Zero bloat, vanilla JS, and CSS-first approaches guarantee blazing fast load times for your sites.',
      icon: RocketLaunch
    }
  ];

  const painPoints = [
    {
      title: 'Bloated Themes?',
      description: 'Stop fighting themes that load megabytes of unused scripts. LSX is built for speed and efficiency.'
    },
    {
      title: 'Design Limitations?',
      description: 'Break out of rigid templates. Our tools provide the foundation, you provide the creativity.'
    },
    {
      title: 'Expensive Plugins?',
      description: 'Why pay monthly for core functionality? Our open-source ecosystem gives you the tools you need.'
    }
  ];

  const testimonials = [
    {
      id: 'lsx-test-1',
      quote: "The LSX Design System completely changed how our agency builds WordPress sites. It's clean, intuitive, and the documentation is incredible.",
      author: "Elena Rodriguez",
      role: "Lead Developer",
      company: "Studio North",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 5
    }
  ];

  return (
    <div className="why-lsx-page">
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Why', href: '/why' },
          { label: 'Why LSX?' },
        ]}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="why-lsx-page__hero">
        <div className="why-lsx-page__hero-glow" aria-hidden="true" />
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="why-lsx-page__hero-content">
              <div className="why-lsx-page__badge">
                <CodeBlock size={16} />
                OPEN SOURCE TOOLS
              </div>
              <h1 className="why-lsx-page__title">
                Why <span className="why-lsx-page__highlight">LSX</span>?
              </h1>
              <p className="why-lsx-page__desc">
                Powerful, free, and open-source products designed to help developers and designers build better WordPress websites.
              </p>
              <div className="why-lsx-page__actions">
                <Button page="contact" size="lg">Join Community</Button>
                <Button page="solutions" variant="outline" size="lg">Explore Products</Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          PAIN POINTS
          ============================================ */}
      <section className="why-lsx-page__pain-points">
        <Container>
          <div className="why-lsx-page__pain-grid wp-grid-3-cols">
            {painPoints.map((point, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="why-lsx-page__pain-card">
                  <h3 className="why-lsx-page__pain-title">{point.title}</h3>
                  <p className="why-lsx-page__pain-desc">{point.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          FEATURE OVERVIEW
          ============================================ */}
      <section className="why-lsx-page__features">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="why-lsx-page__section-header">
              <h2 className="why-lsx-page__section-title">Built Different</h2>
              <p className="why-lsx-page__section-desc">
                Discover the engineering philosophy behind our open-source ecosystem.
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
      <section className="why-lsx-page__testimonial">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="why-lsx-page__section-header">
              <h2 className="why-lsx-page__section-title">Community Love</h2>
            </div>
            <div className="why-lsx-page__testimonial-wrapper">
              <TestimonialGrid testimonials={testimonials} variant="cards" />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          CTA
          ============================================ */}
      <FunkyCTA
        title="Ready to build better?"
        description="Join thousands of professionals using LSX to craft exceptional digital experiences."
        buttonText="Get Started"
        buttonPage="contact"
        benefits={[
          '100% Free & Open Source',
          'Regular updates',
          'Community support',
          'Comprehensive docs'
        ]}
      />
    </div>
  );
}