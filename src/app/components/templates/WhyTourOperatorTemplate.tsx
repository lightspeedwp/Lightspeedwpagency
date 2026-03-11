/**
 * Why Tour Operator Template
 *
 * Theme: "Neon Market"
 * Visuals: Travel booking, itinerary management, WooCommerce extension.
 *
 * Pattern Components:
 * - FeatureList
 * - TestimonialGrid
 * - FunkyCTA
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - All styling via BEM classes in page-why-tour.css
 * - Colors via scoped CSS variables (no hardcoded hex in JSX)
 * - Fonts: var(--font-primary), var(--font-secondary)
 *
 * @see /src/styles/templates/page-why-tour.css
 */

import '../../../styles/templates/page-why-tour.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { FeatureList } from '../patterns/FeatureList';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Button } from '../blocks/design/Buttons';
import {
  AirplaneTilt,
  CalendarCheck,
  MapPin,
  CurrencyCircleDollar,
  Users,
  Compass
} from '@phosphor-icons/react';

export function WhyTourOperatorTemplate() {
  const features = [
    {
      title: 'Itinerary Builder',
      description: 'Create beautiful, detailed day-by-day itineraries with integrated maps, galleries, and accommodation details.',
      icon: MapPin
    },
    {
      title: 'Advanced Availability',
      description: 'Manage complex booking rules, seasonal pricing, and real-time inventory for both group tours and custom packages.',
      icon: CalendarCheck
    },
    {
      title: 'WooCommerce Powered',
      description: 'Built on top of WooCommerce, giving you access to hundreds of payment gateways and global tax compliance.',
      icon: CurrencyCircleDollar
    },
    {
      title: 'Agent Management',
      description: 'Set up B2B portals with custom commission rates, allowing travel agents to book inventory directly.',
      icon: Users
    },
    {
      title: 'Dynamic Pricing',
      description: 'Automatically adjust rates based on group size, age tiers (adults/children), or booking lead time.',
      icon: Compass
    },
    {
      title: 'Custom Inquiries',
      description: 'Capture highly qualified leads with advanced inquiry forms tailored to specific destinations and budgets.',
      icon: AirplaneTilt
    }
  ];

  const painPoints = [
    {
      title: 'Messy Spreadsheets?',
      description: 'Stop managing bookings manually. Centralize your operations, from initial inquiry to final payment.'
    },
    {
      title: 'Third-Party Fees?',
      description: 'Why pay 20% commission to OTAs? Build your direct booking engine and keep your margins.'
    },
    {
      title: 'Complex Packages?',
      description: 'Easily handle multi-day tours, add-ons (flights, transfers), and varied accommodation types in a single checkout.'
    }
  ];

  const testimonials = [
    {
      id: 'tour-test-1',
      quote: "The Tour Operator plugin completely digitized our safari booking process. Our direct bookings increased by 60% in the first season.",
      author: {
        name: "Sarah van der Merwe",
        role: "Operations Director",
        company: "Savannah Trails",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=150&h=150"
      },
      rating: 5
    }
  ];

  return (
    <div className="why-tour-page">
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Why', href: '/why' },
          { label: 'Why Tour Operator?' },
        ]}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="why-tour-page__hero">
        <div className="why-tour-page__hero-glow" aria-hidden="true" />
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="why-tour-page__hero-content">
              <div className="why-tour-page__badge">
                <AirplaneTilt size={16} />
                TRAVEL TECH
              </div>
              <h1 className="why-tour-page__title">
                Why <span className="why-tour-page__highlight">Tour Operator</span>?
              </h1>
              <p className="why-tour-page__desc">
                The ultimate WordPress solution for DMCs, tour operators, and travel agencies. 
                Build stunning itineraries and capture direct bookings seamlessly.
              </p>
              <div className="why-tour-page__actions">
                <Button page="contact" size="lg">Request a Demo</Button>
                <Button page="solutions" variant="outline" size="lg">View Features</Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          PAIN POINTS
          ============================================ */}
      <section className="why-tour-page__pain-points">
        <Container>
          <div className="why-tour-page__pain-grid wp-grid-3-cols">
            {painPoints.map((point, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="why-tour-page__pain-card">
                  <h3 className="why-tour-page__pain-title">{point.title}</h3>
                  <p className="why-tour-page__pain-desc">{point.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          FEATURE OVERVIEW
          ============================================ */}
      <section className="why-tour-page__features">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="why-tour-page__section-header wp-text-center">
              <h2 className="why-tour-page__section-title">Built for Travel</h2>
              <p className="why-tour-page__section-desc">
                Purpose-built tools to handle the unique complexities of travel eCommerce.
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
      <section className="why-tour-page__testimonial">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="why-tour-page__section-header wp-text-center">
              <h2 className="why-tour-page__section-title">Operator Success</h2>
            </div>
            <div className="why-tour-page__testimonial-wrapper">
              <TestimonialGrid testimonials={testimonials} variant="cards" />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          CTA
          ============================================ */}
      <FunkyCTA
        title="Ready to digitize your operations?"
        description="Let's build a platform that turns lookers into bookers while streamlining your back-office."
        buttonText="Get a Proposal"
        buttonPage="contact"
        benefits={[
          'Increase direct bookings',
          'Reduce admin time',
          'Beautiful itinerary design',
          'Global payment support'
        ]}
      />
    </div>
  );
}