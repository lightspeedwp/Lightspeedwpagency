/**
 * Front page lower sections
 *
 * Extracted from FrontPageTemplate.tsx for file size compliance (300 line limit).
 * Contains sections 7–11: Process, Testimonials, Logos, Expertise, Insights,
 * Activity Feed, FAQ, and Bottom CTA.
 */

import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { ProcessSteps } from '../patterns/ProcessSteps';
import { CardGrid } from '../patterns/CardGrid';
import { TrendingTopicsWidget } from '../patterns/TrendingTopicsWidget';
import { ActivityFeedWidget } from '../patterns/ActivityFeedWidget';
import { ClientLogoGrid } from '../patterns/ClientLogoGrid';
import { homepageLogos } from '../../data/client-logos';

import { LazyTestimonialGrid } from '../patterns/lazy/LazyTestimonialGrid';
import { LazyFAQSection } from '../patterns/lazy/LazyFAQSection';
import { LazyFunkyCTA } from '../patterns/lazy/LazyFunkyCTA';

import {
  frontPageProcess,
  frontPageTestimonials,
  frontPageBlogPosts,
  frontPageFAQs,
  frontPageBottomCTA
} from '../../data/front-page';

export function FrontPageLowerSections() {
  return (
    <>
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
              What our clients say
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
            title="Explore our expertise"
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
              Latest insights
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
              View all articles
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
            title="What's happening"
            subtitle="The latest from our blog, projects, and client stories"
            include={['blog', 'project', 'testimonial']}
          />
        </Container>
      </div>

      {/* ============================================
          10. COMMON QUESTIONS
          ============================================ */}
      <LazyFAQSection
        title="Common questions"
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
