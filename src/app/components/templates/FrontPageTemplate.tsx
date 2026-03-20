/**
 * Front Page Template
 * 
 * WordPress concept: front-page.html
 * 
 * The main landing page for LightSpeed WordPress Agency.
 * Redesigned 2026: Clear value proposition, solutions-focused, conversion-oriented.
 * 
 * Structure:
 * 1. Hero — Clear value proposition
 * 2. Proof Strip — Client logos
 * 3. Services Slider — Complete WordPress solutions
 * 4. Solutions Overview — Grid of 6 solutions
 * 5. Services Snapshot — Three-tier model
 * 6. Case Study Proof — Testimonial + outcomes
 * 7. AI Teaser — AI-ready publishing
 * 8. Blog Preview — Latest insights
 * 9. Final CTA — Book consultation
 * 
 * **Positioning:** Structured Publishing Systems for WordPress
 * **Focus:** Tokenised design, accessible markup, measurable performance
 * 
 * @see /src/app/data/front-page.ts
 */

/* Route-level CSS */
import '../../../styles/templates/page-front-page.css';
import '../../../styles/patterns/solution-cards-grid.css';
import '../../../styles/patterns/services-tier-grid.css';
import '../../../styles/patterns/case-study-proof.css';
import '../../../styles/patterns/ai-teaser.css';
import '../../../styles/patterns/homepage-orbs.css';
import '../../../styles/patterns/section-divider.css';

import { HeroSplash } from '../patterns/HeroSplash';
import { ProofStrip } from '../patterns/ProofStrip';
import { SolutionCardsGrid } from '../patterns/SolutionCardsGrid';
import { ServicesTierGrid } from '../patterns/ServicesTierGrid';
import { ServicesSlider } from '../patterns/ServicesSlider';
import { CaseStudyProof } from '../patterns/CaseStudyProof';
import { AITeaser } from '../patterns/AITeaser';
import { CardGrid } from '../patterns/CardGrid';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { HomePageOrbs } from '../patterns/HomePageOrbs';
import { SectionDivider } from '../patterns/SectionDivider';

import { LazyFunkyCTA } from '../patterns/lazy/LazyFunkyCTA';

import {
  frontPageHero,
  frontPageSolutions,
  frontPageServices,
  frontPageCaseStudy,
  frontPageAITeaser,
  frontPageBlogPosts,
  frontPageFinalCTA
} from '../../data/front-page';

import { servicesSliderData } from '../../data/services-slider';

export function FrontPageTemplate() {
  return (
    <div className="front-page">
      {/* Animated background orbs */}
      <HomePageOrbs />

      {/* 1. Hero Section */}
      <HeroSplash {...frontPageHero} />

      {/* 2. Proof Section: Client Logos */}
      <ProofStrip />

      {/* 3. Services Slider */}
      <section className="front-page__section front-page__section--card">
        <ServicesSlider
          title="Complete WordPress solutions"
          description="From strategy to support, we deliver end-to-end WordPress services for sustainable growth."
          services={servicesSliderData}
        />
      </section>

      {/* 4. Solutions Overview */}
      <section className="front-page__section front-page__section--default">
        <Container>
          <SolutionCardsGrid {...frontPageSolutions} />
        </Container>
      </section>

      {/* 5. Services Snapshot */}
      <section className="front-page__section front-page__section--card">
        <Container>
          <ServicesTierGrid {...frontPageServices} />
        </Container>
      </section>

      {/* 6. Case Study Proof */}
      <section className="front-page__section front-page__section--default">
        <Container>
          <CaseStudyProof {...frontPageCaseStudy} />
        </Container>
      </section>

      {/* 7. AI & Thought Leadership Teaser */}
      <section className="front-page__section front-page__section--accent">
        <Container>
          <AITeaser {...frontPageAITeaser} />
        </Container>
      </section>

      {/* 8. Latest Insights (Blog Preview) */}
      <section className="front-page__section front-page__section--default">
        <Container>
          <div className="front-page__section-header">
            <h2 className="front-page__section-title">
              Latest insights
            </h2>
            <p className="front-page__section-desc">
              Thought leadership on WordPress, AI, and structured publishing.
            </p>
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
              ctaText: 'Read article →'
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
              View all articles
            </Button>
          </div>
        </Container>
      </section>

      {/* 9. Final CTA */}
      <LazyFunkyCTA
        title={frontPageFinalCTA.title}
        description={frontPageFinalCTA.description}
        buttonText={frontPageFinalCTA.primaryButton.text}
        buttonPage={frontPageFinalCTA.primaryButton.page}
        benefits={frontPageFinalCTA.benefits}
      />
    </div>
  );
}

export default FrontPageTemplate;