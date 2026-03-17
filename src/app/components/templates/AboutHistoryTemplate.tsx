/**
 * About History Template — "Neon Legacy" Funky Redesign
 *
 * Features:
 * - Neon Amber/Cyan Theme
 * - Parallax Hero with floating orbs
 * - Alternating Milestone Timeline with glow cards
 * - Glassmorphism Stats Section
 * - 100% CSS variable compliance, zero Tailwind classes
 * 
 * PATTERN COMPONENTS:
 * - ✅ StatsGrid — Company milestones (3 stats, 3 columns)
 * - ✅ FAQSection — FAQ accordion
 * - ✅ FunkyCTA — Final CTA section
 * - ⚠️ Milestones Timeline — Custom year-based layout (kept inline due to specialized structure)
 * 
 * @note Milestones timeline kept inline due to year-based vertical layout with custom positioning
 * @migrated March 3, 2026 — Phase 3.3: Documented pattern usage, no additional extraction needed
 */

/* Route-level CSS */
import '../../../styles/templates/page-about-history.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { FAQSection } from '../patterns/FAQSection';
import { StatsGrid } from '../patterns/StatsGrid';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { useHeroParallax } from '../../hooks/useHeroParallax';
import { aboutFAQs } from '../../data/faqs';
import {
  ClockCounterClockwise as History
} from '@phosphor-icons/react';
import { aboutHistoryMilestones } from '../../data/about-history-template-data';

export function AboutHistoryTemplate() {
  const parallaxRef = useHeroParallax(0.4);

  const milestones = aboutHistoryMilestones;

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Our Story' },
        ]}
      />

      {/* ── Hero ── */}
      <section className="history-page__hero">
        <img
          ref={parallaxRef}
          src="https://images.unsplash.com/photo-1628359732420-d5d4337b810f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFtYmVyJTIwbmVvbiUyMHRpbWV8ZW58MXx8fHwxNzcxMzU4Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract amber neon time visualization"
          className="history-page__hero-bg"
        />
        <div className="history-page__hero-overlay" />

        {/* Floating Orbs */}
        <div className="history-page__hero-orb history-page__hero-orb--1" />
        <div className="history-page__hero-orb history-page__hero-orb--2" />

        <Container>
          <div className="history-page__hero-content">
            <span className="history-page__hero-badge">
              <History size={16} className="history-page__hero-badge-icon" />
              Our Legacy
            </span>

            <h1 className="history-page__hero-title">
              Our History
            </h1>

            <p className="history-page__hero-subtitle">
              From a small freelance operation to a leading WordPress agency—discover the journey that shaped LSX Design.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Origin Story ── */}
      <section className="history-page__origin">
        <Container>
          <div className="history-page__section-header">
            <Heading level={2} className="history-page__section-title">
              Where it all began
            </Heading>
          </div>

          <div className="history-page__origin-container">
            <div className="history-page__origin-card">
              <div className="history-page__origin-glow" />
              <div className="history-page__origin-content">
                <Paragraph className="history-page__origin-text">
                  LSX Design was founded in 2003 by Ash Shaw in Cape Town, South Africa. Starting as a web development consultancy, the team saw a gap in the market for agencies that truly understood both design systems and WordPress development. While many shops could do one or the other, few could bridge the two seamlessly.
                </Paragraph>

                <Paragraph className="history-page__origin-text">
                  What started as weekend projects quickly grew into a full-time operation serving clients across three continents. Our focus on token-driven design systems, accessibility, and WordPress best practices set us apart from day one.
                </Paragraph>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Milestones ── */}
      <section className="history-page__timeline">
        <Container>
          <div className="history-page__section-header">
            <Heading level={2} className="history-page__section-title">
              Our journey
            </Heading>
            <p className="history-page__section-desc">
              Key milestones that defined our growth.
            </p>
          </div>

          <div className="history-page__timeline-container">
            <div className="history-page__timeline-line" />

            {milestones.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="history-page__milestone">
                  {/* Year Node */}
                  <div className="history-page__year">
                    {item.year}
                  </div>

                  {/* Content Card */}
                  <div className="history-page__card">
                    <div className="history-page__card-header">
                      <div className="history-page__card-icon">
                        <Icon size={24} />
                      </div>
                      <Heading level={3} className="history-page__card-title">
                        {item.title}
                      </Heading>
                    </div>
                    <Paragraph className="history-page__card-desc">
                      {item.description}
                    </Paragraph>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Stats Section ── */}
      <section className="history-page__stats">
        <Container>
          <div className="history-page__stats-header">
            <h2 className="history-page__stats-header-title">
              By the numbers
            </h2>
            <p className="history-page__stats-header-desc">
              A decade of growth and achievement.
            </p>
          </div>

          <StatsGrid
            stats={[
              { number: '500+', label: 'Projects Delivered' },
              { number: '150+', label: 'Happy Clients' },
              { number: '20+', label: 'Years Experience' },
              { number: '13', label: 'Team Members' }
            ]}
          />
        </Container>
      </section>

      {/* ── FAQ Section ── */}
      <section className="history-page__faq">
        <Container>
          <div className="history-page__faq-wrapper">
            <FAQSection
              title="History FAQs"
              description="Common questions about our journey."
              faqs={aboutFAQs}
              variant="default"
            />
          </div>
        </Container>
      </section>

      {/* ── CTA Section ── */}
      <FunkyCTA
        title="Become part of our story"
        description="Whether you're a client, partner, or future team member—we'd love to connect."
        buttonText="Get In Touch"
        buttonPage="contact"
        benefits={[
          'Over 20 years of WordPress expertise',
          'Long-term partnership approach',
          'Transparent & honest communication',
          'Join a growing success story'
        ]}
      />
    </>
  );
}