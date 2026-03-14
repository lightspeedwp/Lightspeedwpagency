/**
 * Why Mailchimp Template
 *
 * Theme: "Neon Market"
 * Visuals: Marketing automation, audience growth, email strategy.
 *
 * Pattern Components:
 * - StatsGrid
 * - FeatureList
 * - TestimonialGrid
 * - FunkyCTA
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - All styling via BEM classes in page-why-mailchimp.css
 * - Colors via scoped CSS variables (no hardcoded hex in JSX)
 * - Fonts: var(--font-primary), var(--font-secondary)
 *
 * @see /src/styles/templates/page-why-mailchimp.css
 */

import '../../../styles/templates/page-why-mailchimp.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { FeatureList } from '../patterns/FeatureList';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Button } from '../blocks/design/Buttons';
import {
  EnvelopeOpen,
  UsersThree,
  ChartLineUp,
  Robot,
  Palette,
  PlugsConnected
} from '@phosphor-icons/react';

export function WhyMailchimpTemplate() {
  const features = [
    {
      title: 'Advanced Automation',
      description: 'Build complex customer journeys with a visual editor. Send the right message at exactly the right time.',
      icon: Robot
    },
    {
      title: 'Audience Segmentation',
      description: 'Group your contacts based on behavior, preferences, and purchase history for hyper-targeted campaigns.',
      icon: UsersThree
    },
    {
      title: 'Actionable Insights',
      description: 'Track open rates, click-throughs, and direct revenue attribution to measure the true ROI of your email marketing.',
      icon: ChartLineUp
    },
    {
      title: 'Beautiful Templates',
      description: 'Design stunning, mobile-responsive emails with an intuitive drag-and-drop builder. No coding required.',
      icon: Palette
    },
    {
      title: 'Seamless Integrations',
      description: 'Connects directly with WooCommerce, WordPress, and hundreds of other tools in your tech stack.',
      icon: PlugsConnected
    },
    {
      title: 'A/B Testing',
      description: 'Continuously optimize your campaigns by testing subject lines, content, and send times to maximize engagement.',
      icon: EnvelopeOpen
    }
  ];

  const painPoints = [
    {
      title: 'Low Engagement?',
      description: 'Stop shouting into the void. Mailchimp ensures your messages reach the inbox and capture attention.'
    },
    {
      title: 'Scattered Data?',
      description: 'Unify your customer data in one platform to build a single source of truth for your marketing efforts.'
    },
    {
      title: 'Manual Workflows?',
      description: 'Automate repetitive tasks like welcome series and abandoned cart emails to save time and drive revenue.'
    }
  ];

  const testimonials = [
    {
      id: 'mailchimp-test-1',
      quote: "Integrating Mailchimp with our WooCommerce store transformed our business. Our abandoned cart recovery rate is up 42%.",
      author: {
        name: "Marcus Reid",
        role: "Marketing Director",
        company: "Bloom Botanicals",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
      },
      rating: 5
    }
  ];

  return (
    <div className="why-mailchimp-page">
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Why', href: '/why' },
          { label: 'Why Mailchimp?' },
        ]}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="why-mailchimp-page__hero">
        <div className="why-mailchimp-page__hero-glow" aria-hidden="true" />
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="why-mailchimp-page__hero-content">
              <div className="why-mailchimp-page__badge">
                <EnvelopeOpen size={16} />
                EMAIL MARKETING
              </div>
              <h1 className="why-mailchimp-page__title">
                Why <span className="why-mailchimp-page__highlight">Mailchimp</span>?
              </h1>
              <p className="why-mailchimp-page__desc">
                Turn emails into revenue. Build smarter automations, segment your audience, and scale your marketing effortlessly.
              </p>
              <div className="why-mailchimp-page__actions">
                <Button page="contact" size="lg">Start Campaign</Button>
                <Button page="solutions" variant="outline" size="lg">View Integrations</Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          PAIN POINTS
          ============================================ */}
      <section className="why-mailchimp-page__pain-points">
        <Container>
          <div className="why-mailchimp-page__pain-grid wp-grid-3-cols">
            {painPoints.map((point, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="why-mailchimp-page__pain-card">
                  <h3 className="why-mailchimp-page__pain-title">{point.title}</h3>
                  <p className="why-mailchimp-page__pain-desc">{point.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          FEATURE OVERVIEW
          ============================================ */}
      <section className="why-mailchimp-page__features">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="why-mailchimp-page__section-header">
              <h2 className="why-mailchimp-page__section-title">Grow Your Audience</h2>
              <p className="why-mailchimp-page__section-desc">
                Everything you need to build relationships and drive sales through email.
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
      <section className="why-mailchimp-page__testimonial">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="why-mailchimp-page__section-header">
              <h2 className="why-mailchimp-page__section-title">Success Stories</h2>
            </div>
            <div className="why-mailchimp-page__testimonial-wrapper">
              <TestimonialGrid testimonials={testimonials} variant="cards" />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          CTA
          ============================================ */}
      <FunkyCTA
        title="Ready to boost your ROI?"
        description="Let's integrate Mailchimp with your platform and build high-converting automated campaigns."
        buttonText="Get a Proposal"
        buttonPage="contact"
        benefits={[
          'Automated workflows',
          'Deep eCommerce integration',
          'Custom email templates',
          'Advanced segmentation'
        ]}
      />
    </div>
  );
}