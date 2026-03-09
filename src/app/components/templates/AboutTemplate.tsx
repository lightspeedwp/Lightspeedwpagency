/**
 * About Template — "Digital Artisans" Funky Redesign
 *
 * WordPress template: templates/page-about.html
 *
 * Pattern Components:
 * - ✅ FeatureList — Values grid (glow variant, 3 columns)
 * - ✅ FeatureList — Expertise grid (glow variant, 3 columns)
 * - ✅ StatsSection — Impact stats
 * - ✅ FAQSection — About FAQs
 * - ✅ FunkyCTA — Final conversion section
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - No inline Tailwind classes
 * - All styling via @/styles/templates/page-about.css
 * - BEM naming throughout (about-overview__*)
 *
 * @migrated March 4, 2026 — Migrated Values + Expertise inline grids to FeatureList (~40 lines saved)
 */

/* Route-level CSS */
import '../../../styles/templates/page-about-optimized.css';
import { Container } from '../common/Container';
import { FAQSection } from '../patterns/FAQSection';
import { FeatureList } from '../patterns/FeatureList';
import { Timeline } from '../patterns/Timeline';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { StatsSection } from '../patterns/StatsSection';
import { ContentStatsWidget } from '../patterns/ContentStatsWidget';
import { RelatedContentWidget } from '../patterns/RelatedContentWidget';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { useHeroParallax } from '../../hooks/useHeroParallax';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ScrollDownArrow } from '../common/ScrollDownArrow';

// Import centralized data
import {
  aboutPageHero,
  aboutPageStory,
  aboutPageMissionVision,
  aboutPageValues,
  aboutPageStats,
  aboutPageTimeline,
  aboutPageExpertise,
  aboutPageFAQs,
  aboutPageCTA
} from '../../data/about-page';

export function AboutTemplate() {
  const parallaxRef = useHeroParallax(0.5);

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
      />

      {/* ============================================
          1. HERO SECTION (Parallax + Floating Orbs)
          ============================================ */}
      <section className="about-overview__hero">
        {/* Parallax Background */}
        <img
          ref={parallaxRef}
          src="https://images.unsplash.com/photo-1704730777582-dd8bef55a8c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5lb24lMjBkaWdpdGFsJTIwYXJ0aXNhbiUyMHRlYW13b3JrfGVufDF8fHx8MTc3MTQ5MzMxNnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract neon digital artisan teamwork"
          className="about-overview__hero-bg"
        />

        {/* Gradient Overlay */}
        <div className="about-overview__hero-overlay" />

        {/* Floating Orbs */}
        <div className="about-overview__hero-orb about-overview__hero-orb--1" />
        <div className="about-overview__hero-orb about-overview__hero-orb--2" />
        <div className="about-overview__hero-orb about-overview__hero-orb--3" />

        <Container>
          <div className="about-overview__hero-content">
            <span className="about-overview__hero-badge">
              ⚡ About LightSpeed
            </span>

            <h1 className="about-overview__hero-title">
              {aboutPageHero.title}
            </h1>

            <p className="about-overview__hero-subtitle">
              {aboutPageHero.description}
            </p>
          </div>
        </Container>
        <ScrollDownArrow targetId="about-story" />
      </section>

      {/* ============================================
          2. STORY SECTION
          ============================================ */}
      <section id="about-story" className="about-overview__story">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="about-overview__story-header">
              <h2 className="about-overview__section-title">
                {aboutPageStory.title}
              </h2>
              <p className="about-overview__section-desc">
                {aboutPageStory.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="about-overview__story-grid">
            {aboutPageStory.content.map((block, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 120}>
                <div className="about-overview__card">
                  <div className="about-overview__card-glow" />
                  <div className="about-overview__card-inner">
                    <Heading level={3} className="about-overview__card-title">
                      {block.heading}
                    </Heading>
                    <Paragraph className="about-overview__card-desc">
                      {block.text}
                    </Paragraph>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          3. MISSION & VISION (Glow Cards)
          ============================================ */}
      <section className="about-overview__cards-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="about-overview__story-header">
              <h2 className="about-overview__section-title">
                Our purpose
              </h2>
              <p className="about-overview__section-desc">
                What drives us every single day.
              </p>
            </div>
          </ScrollReveal>

          <div className="about-overview__cards-grid">
            {/* Mission Card */}
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="about-overview__card">
                <div className="about-overview__card-glow" />
                <div className="about-overview__card-inner">
                  <div className="about-overview__card-icon-wrapper">
                    🎯
                  </div>
                  <Heading level={3} className="about-overview__card-title">
                    {aboutPageMissionVision.mission.title}
                  </Heading>
                  <Paragraph className="about-overview__card-desc">
                    {aboutPageMissionVision.mission.description}
                  </Paragraph>
                </div>
              </div>
            </ScrollReveal>

            {/* Vision Card */}
            <ScrollReveal animation="fade-up" delay={120}>
              <div className="about-overview__card">
                <div className="about-overview__card-glow" />
                <div className="about-overview__card-inner">
                  <div className="about-overview__card-icon-wrapper">
                    🔮
                  </div>
                  <Heading level={3} className="about-overview__card-title">
                    {aboutPageMissionVision.vision.title}
                  </Heading>
                  <Paragraph className="about-overview__card-desc">
                    {aboutPageMissionVision.vision.description}
                  </Paragraph>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          4. VALUES (Icon Glow Cards)
          ============================================ */}
      <section className="about-overview__cards-section" style={{ backgroundColor: 'var(--background)' }}>
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="about-overview__story-header">
              <h2 className="about-overview__section-title">
                Our values
              </h2>
              <p className="about-overview__section-desc">
                The principles that guide everything we do.
              </p>
            </div>
          </ScrollReveal>

          <FeatureList
            items={aboutPageValues.map(value => ({
              icon: value.icon,
              title: value.title,
              description: value.description
            }))}
            variant="glow"
            columns={3}
          />
        </Container>
      </section>

      {/* ============================================
          5. STATS BAR (Gradient + Neon Grid)
          ============================================ */}
      <div className="about-overview__stats">
        <StatsSection
          title="Our impact in numbers"
          description="Over a decade of delivering digital excellence."
          stats={aboutPageStats}
          variant="funky"
        />
      </div>

      {/* ============================================
          6. TIMELINE
          ============================================ */}
      <section className="about-overview__story">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="about-overview__story-header">
              <h2 className="about-overview__section-title">
                Our journey
              </h2>
              <p className="about-overview__section-desc">
                Key milestones that shaped who we are today.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <Timeline items={aboutPageTimeline} />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          7. EXPERTISE (Glow Cards)
          ============================================ */}
      <section className="about-overview__cards-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="about-overview__story-header">
              <h2 className="about-overview__section-title">
                Our expertise
              </h2>
              <p className="about-overview__section-desc">
                Deep specializations that set us apart.
              </p>
            </div>
          </ScrollReveal>

          <FeatureList
            items={aboutPageExpertise.map(item => ({
              icon: item.icon,
              title: item.title,
              description: item.description
            }))}
            variant="glow"
            columns={3}
          />
        </Container>
      </section>

      {/* ============================================
          8. FAQ SECTION
          ============================================ */}
      <section className="about-overview__story">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="about-overview__story-header">
              <h2 className="about-overview__section-title">
                Questions about us?
              </h2>
              <p className="about-overview__section-desc">
                Everything you need to know about working with LightSpeed.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <div className="about-overview__faq-wrapper">
              <FAQSection
                faqs={aboutPageFAQs}
                variant="default"
              />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          8b. AGENCY STATS (Dynamic Content Widget)
          ============================================ */}
      <section className="about-overview__cards-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="about-overview__story-header">
              <h2 className="about-overview__section-title">
                By the Numbers
              </h2>
              <p className="about-overview__section-desc">
                Real content from our blog, portfolio, and client testimonials.
              </p>
            </div>
          </ScrollReveal>
          <ContentStatsWidget
            include={['blog', 'portfolio', 'testimonials', 'experience']}
            variant="funky"
          />
        </Container>
      </section>

      {/* ============================================
          8c. RELATED CONTENT (Dynamic Widget)
          ============================================ */}
      <section className="about-overview__story">
        <Container>
          <RelatedContentWidget
            tags={['wordpress', 'block-theme', 'accessibility']}
            count={4}
            title="From Our Blog & Portfolio"
            label="See Our Work"
          />
        </Container>
      </section>

      {/* ============================================
          9. CTA SECTION (FunkyCTA)
          ============================================ */}
      <FunkyCTA
        title={aboutPageCTA.title}
        description={aboutPageCTA.description}
        buttonText={aboutPageCTA.buttons[0].text}
        buttonPage={aboutPageCTA.buttons[0].page}
        benefits={[
          'Free initial consultation',
          '15+ years of WordPress expertise',
          'Transparent project pricing',
          'Post-launch support included'
        ]}
      />
    </>
  );
}