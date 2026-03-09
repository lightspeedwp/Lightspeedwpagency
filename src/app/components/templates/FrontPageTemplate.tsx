/**
 * Front Page Template
 * 
 * WordPress concept: front-page.html
 * 
 * The main landing page for LightSpeed WordPress Agency.
 * Funky Redesign Version: "Neon Future"
 * 
 * Features:
 * - Full-screen Parallax Hero with Neon Orbs
 * - Glassmorphism Feature Grids
 * - Gradient Text & Borders
 * - Floating Elements
 * 
 * **Align-wide:** All body content constrained to 1440px (--wp--style--global--wide-size)
 * via the Container component. Header and footer match the same max-width.
 */

/* Route-level CSS */
import '../../../styles/templates/page-front-page.css';
import { HeroSplash } from '../patterns/HeroSplash';
import { FeatureGrid } from '../patterns/FeatureGrid';
import { StatsSection } from '../patterns/StatsSection';
import { ProcessSteps } from '../patterns/ProcessSteps';
import { CardGrid } from '../patterns/CardGrid';
import { TrendingTopicsWidget } from '../patterns/TrendingTopicsWidget';
import { ActivityFeedWidget } from '../patterns/ActivityFeedWidget';
import { ClientLogoGrid } from '../patterns/ClientLogoGrid';
import { homepageLogos } from '../../data/client-logos';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { ArrowRight } from '@phosphor-icons/react';
import { ProofStrip } from '../patterns/ProofStrip';

// ✨ LAZY-LOADED PATTERNS (Phase 3 Week 2 - March 6, 2026)
// Below-the-fold patterns loaded on-demand for better performance
import { LazyTestimonialGrid } from '../patterns/lazy/LazyTestimonialGrid';
import { LazyFAQSection } from '../patterns/lazy/LazyFAQSection';
import { LazyFunkyCTA } from '../patterns/lazy/LazyFunkyCTA';

import {
  frontPageHero,
  frontPageWhyChoose,
  frontPageServices,
  frontPageProjects,
  frontPageStats,
  frontPageMidCTA,
  frontPageProcess,
  frontPageTestimonials,
  frontPageBlogPosts,
  frontPageFAQs,
  frontPageBottomCTA
} from '../../data/front-page';

export function FrontPageTemplate() {
  return (
    <>
      {/* ============================================
          1. HERO SECTION (Neon Splash)
          ============================================ */}
      <HeroSplash 
        badge={frontPageHero.badge}
        titlePrefix="Build Better WordPress Sites"
        titleGradient="Faster & Funkier"
        description={frontPageHero.description}
        primaryButton={{
          text: frontPageHero.primaryButton.text,
          page: frontPageHero.primaryButton.page
        }}
        secondaryButton={{
          text: frontPageHero.secondaryButton.text,
          page: frontPageHero.secondaryButton.page
        }}
        bgImage="https://images.unsplash.com/photo-1635776063328-153b13e3c245?q=80&w=2832&auto=format&fit=crop"
        targetId="proof-strip"
      />

      {/* ============================================
          1b. PROOF STRIP (VP2 — Social Proof)
          ============================================ */}
      <div id="proof-strip">
        <ProofStrip variant="neon" />
      </div>

      {/* ============================================
          2. WHY CHOOSE LIGHTSPEED
          ============================================ */}
      <div id="why-choose-section" className="front-page__section front-page__section--default">
        <FeatureGrid
          title={frontPageWhyChoose.title}
          description={frontPageWhyChoose.description}
          items={frontPageWhyChoose.features}
          columns={3}
          variant="bordered"
          iconStyle="rounded"
          spacing="xl"
        />
      </div>

      {/* ============================================
          3. OUR SERVICES
          ============================================ */}
      <div className="front-page__section front-page__section--card">
        <Container>
          <div className="front-page__section-header">
            <h2 className="front-page__section-title">
              {frontPageServices.title}
            </h2>
            <p className="front-page__section-desc">
              {frontPageServices.description}
            </p>
          </div>

          <CardGrid
            items={frontPageServices.items.map(service => ({
              title: service.title,
              description: service.description,
              image: service.image,
              href: `/${service.link}`,
              ctaText: 'Learn More →',
              badge: { text: 'Service', variant: 'muted' }
            }))}
            columns={3}
            variant="service"
            showImages={true}
            showDescriptions={true}
            showCTA={true}
            maxWidth="none"
          />
        </Container>
      </div>

      {/* ============================================
          4. FEATURED PROJECTS
          ============================================ */}
      <div className="front-page__section front-page__section--default">
        <Container>
          <div className="front-page__section-header">
            <h2 className="front-page__section-title">
              {frontPageProjects.title}
            </h2>
            <p className="front-page__section-desc">
              {frontPageProjects.description}
            </p>
          </div>

          <CardGrid
            items={frontPageProjects.projects.map(project => ({
              title: project.title,
              description: project.description,
              image: project.image,
              badge: { text: project.category, variant: 'primary' },
              href: `/work/${project.slug}`,
              ctaText: 'View Case Study →'
            }))}
            columns={3}
            variant="portfolio"
            showImages={true}
            showDescriptions={true}
            showCTA={true}
            maxWidth="none"
          />

          <div className="front-page__section-footer">
            <Button
              variant="outline"
              size="lg"
              page={frontPageProjects.cta.page as any}
            >
              {frontPageProjects.cta.text}
            </Button>
          </div>
        </Container>
      </div>

      {/* ============================================
          5. PROVEN TRACK RECORD
          ============================================ */}
      <StatsSection
        title="Proven Track Record"
        stats={frontPageStats}
        variant="proven-track"
      />

      {/* ============================================
          6. CTA BANNER
          ============================================ */}
      <LazyFunkyCTA
        title={frontPageMidCTA.title}
        description={frontPageMidCTA.description}
        buttonText={frontPageMidCTA.primaryButton.text}
        buttonPage={frontPageMidCTA.primaryButton.page}
        benefits={[
          'Free strategy consultation',
          'Custom WordPress solutions',
          'Transparent project pricing',
          'Dedicated project manager'
        ]}
      />

      {/* ============================================
          7. HOW WE WORK
          ============================================ */}
      <div className="front-page__section front-page__section--default">
        <Container>
          <div className="front-page__section-header">
            <h2 className="front-page__section-title">
              {frontPageProcess.title}
            </h2>
            <p className="front-page__section-desc">
              {frontPageProcess.description}
            </p>
          </div>

          <ProcessSteps
            steps={frontPageProcess.steps}
            columns={4}
            variant="cards"
            badgeStyle="circle"
            maxWidth="none"
          />
        </Container>
      </div>

      {/* ============================================
          8. WHAT OUR CLIENTS SAY
          ============================================ */}
      <div className="front-page__section front-page__section--card">
        <Container>
          <div className="front-page__section-header">
            <h2 className="front-page__section-title">
              What Our Clients Say
            </h2>
          </div>

          <LazyTestimonialGrid
            testimonials={frontPageTestimonials}
            columns={3}
            variant="cards"
            showRating={true}
            showAvatar={false}
            maxWidth="none"
          />
        </Container>
      </div>

      {/* ============================================
          8b. TRUSTED BY (Client Logos)
          ============================================ */}
      <div className="front-page__section front-page__section--glass">
        <ClientLogoGrid
          logos={homepageLogos}
          title="Trusted by industry leaders"
          description="We partner with the best tools and platforms to deliver exceptional WordPress solutions"
          columns={4}
          size="md"
          variant="glassmorphism"
        />
      </div>

      {/* ============================================
          8c. EXPLORE OUR EXPERTISE (Dynamic Widget)
          ============================================ */}
      <div className="front-page__section front-page__section--default">
        <Container>
          <TrendingTopicsWidget
            sources={['blog-categories', 'project-groups', 'project-tags']}
            title="Explore Our Expertise"
            label="What We Do"
            description="Browse our work by industry, technology, or topic."
            maxPerSection={8}
          />
        </Container>
      </div>

      {/* ============================================
          9. LATEST INSIGHTS
          ============================================ */}
      <div className="front-page__section front-page__section--default">
        <Container>
          <div className="front-page__section-header">
            <h2 className="front-page__section-title">
              Latest Insights
            </h2>
          </div>

          <CardGrid
            items={frontPageBlogPosts.map(post => ({
              title: post.title,
              description: post.excerpt,
              image: post.image,
              badge: { text: post.category, variant: 'primary' },
              meta: [
                { label: post.date },
                { label: post.readingTime }
              ],
              href: `/insights/${post.slug}`,
              ctaText: 'Read Article →'
            }))}
            columns={3}
            variant="blog"
            showImages={true}
            showDescriptions={true}
            showCTA={true}
            maxWidth="none"
          />

          <div className="front-page__section-footer">
            <Button
              variant="outline"
              size="lg"
              page="blog"
            >
              View All Articles
            </Button>
          </div>
        </Container>
      </div>

      {/* ============================================
          9b. LATEST ACTIVITY (Dynamic Widget)
          ============================================ */}
      <div className="front-page__section front-page__section--card">
        <Container>
          <ActivityFeedWidget
            count={5}
            title="What's Happening"
            subtitle="The latest from our blog, projects, and client stories"
            include={['blog', 'project', 'testimonial']}
          />
        </Container>
      </div>

      {/* ============================================
          10. COMMON QUESTIONS
          ============================================ */}
      <LazyFAQSection
        title="Common Questions"
        faqs={frontPageFAQs}
        variant="default"
      />

      {/* ============================================
          11. BOTTOM CTA
          ============================================ */}
      <LazyFunkyCTA
        title={frontPageBottomCTA.title}
        description={frontPageBottomCTA.description}
        buttonText={frontPageBottomCTA.primaryButton.text}
        buttonPage={frontPageBottomCTA.primaryButton.page}
        benefits={[
          'Modern WordPress block themes',
          'WCAG 2.1 AA accessibility',
          'Sub-second page load times',
          'Ongoing support & maintenance',
          '15+ years WordPress expertise'
        ]}
      />
    </>
  );
}