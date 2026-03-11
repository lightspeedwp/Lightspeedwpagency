/**
 * Why Landing Template
 *
 * Theme: "Neon Hub"
 * Acts as the parent route for all "Why X?" pages.
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - All styling via BEM classes in page-why-landing.css
 * - Colors via scoped CSS variables (no hardcoded hex in JSX)
 * - Fonts: var(--font-primary), var(--font-secondary)
 *
 * @see /src/styles/templates/page-why-landing.css
 */

import '../../../styles/templates/page-why-landing.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Link } from 'react-router';
import {
  RocketLaunch,
  CodeBlock,
  ShoppingCart,
  EnvelopeOpen,
  AirplaneTilt,
  Question,
  ArrowRight
} from '@phosphor-icons/react';

export function WhyLandingTemplate() {
  const whyPages = [
    {
      id: 'lightspeed',
      title: 'Why LightSpeed?',
      description: 'Expert engineering, strategic thinking, and a relentless focus on performance. Discover why we are the right digital partner.',
      icon: <RocketLaunch size={24} weight="duotone" />,
      link: '/why-lightspeed'
    },
    {
      id: 'wp',
      title: 'Why WordPress?',
      description: 'Flexible, SEO-friendly, and powering over 40% of the web. Learn why WordPress is our CMS of choice.',
      icon: <CodeBlock size={24} weight="duotone" />,
      link: '/why-wp'
    },
    {
      id: 'woo',
      title: 'Why Woo?',
      description: 'Seamless integration, total data ownership, and ultimate flexibility. Discover the power of WooCommerce.',
      icon: <ShoppingCart size={24} weight="duotone" />,
      link: '/why-woo'
    },
    {
      id: 'mailchimp',
      title: 'Why Mailchimp?',
      description: 'Turn emails into revenue with powerful automation, deep segmentation, and beautiful templates.',
      icon: <EnvelopeOpen size={24} weight="duotone" />,
      link: '/why-mailchimp'
    },
    {
      id: 'lsx',
      title: 'Why LSX?',
      description: 'Free, open-source products designed to help developers and designers build better WordPress websites.',
      icon: <CodeBlock size={24} weight="duotone" />,
      link: '/why-lsx'
    },
    {
      id: 'tour',
      title: 'Why Tour Operator?',
      description: 'The ultimate digital solution for DMCs and travel agencies to build itineraries and capture direct bookings.',
      icon: <AirplaneTilt size={24} weight="duotone" />,
      link: '/why-tour-operator'
    }
  ];

  return (
    <div className="why-landing-page">
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Why' },
        ]}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="why-landing-page__hero">
        <div className="why-landing-page__hero-glow" aria-hidden="true" />
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="why-landing-page__hero-content">
              <div className="why-landing-page__badge">
                <Question size={16} />
                OUR PHILOSOPHY
              </div>
              <h1 className="why-landing-page__title">
                The <span className="why-landing-page__highlight">Why</span> Behind Our Work
              </h1>
              <p className="why-landing-page__desc">
                We believe in open-source ecosystems, data ownership, and high-performance digital experiences. Explore the technologies and principles that power our agency.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          GRID SECTION
          ============================================ */}
      <section className="why-landing-page__grid-section">
        <Container>
          <div className="why-landing-page__grid wp-grid-3-cols">
            {whyPages.map((page, index) => (
              <ScrollReveal key={page.id} animation="fade-up" delay={index * 100}>
                <Link to={page.link} className="why-landing-page__card" data-topic={page.id}>
                  <div className="why-landing-page__card-icon">
                    {page.icon}
                  </div>
                  <h3 className="why-landing-page__card-title">{page.title}</h3>
                  <p className="why-landing-page__card-desc">{page.description}</p>
                  <div className="why-landing-page__card-arrow">
                    Read More <ArrowRight size={16} weight="bold" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          CTA
          ============================================ */}
      <FunkyCTA
        title="Ready to choose your stack?"
        description="Whether you need a custom WordPress site or a complex WooCommerce integration, we have the expertise to deliver."
        buttonText="Get in Touch"
        buttonPage="contact"
        benefits={[
          'Platform agnostic approach',
          'Data migration assistance',
          'Performance optimization',
          'Ongoing technical support'
        ]}
      />
    </div>
  );
}