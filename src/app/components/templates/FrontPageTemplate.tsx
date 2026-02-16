/**
 * Front Page Template
 * 
 * WordPress concept: front-page.html
 * 
 * The main landing page for LightSpeed WordPress Agency.
 * Layout matches the approved homepage design:
 * 
 * 1. Hero (gradient-primary, stats)
 * 2. Why Choose LightSpeed (6 feature cards)
 * 3. Our Services (3 image cards)
 * 4. Featured Projects (3 project cards)
 * 5. Proven Track Record (4 stats)
 * 6. CTA Banner ("WordPress Experts You Can Trust")
 * 7. How We Work (4 process steps)
 * 8. What Our Clients Say (3 testimonials)
 * 9. Latest Insights (3 blog cards)
 * 10. Common Questions (FAQ accordion)
 * 11. Bottom CTA
 * 
 * **Align-wide:** All body content constrained to 1440px (--wp--style--global--wide-size)
 * via the Container component. Header and footer match the same max-width.
 * 
 * All spacing uses blockGap (CSS gap) -- zero margin.
 * All styling uses CSS variables from /src/styles/.
 * NO Tailwind classes -- WordPress utility classes + CSS variables only.
 */

import { HeroHome } from '../patterns/HeroHome';
import { FeatureGrid } from '../patterns/FeatureGrid';
import { StatsSection } from '../patterns/StatsSection';
import { CTASection } from '../patterns/CTASection';
import { ProcessSteps } from '../patterns/ProcessSteps';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { CardGrid } from '../patterns/CardGrid';
import { FAQSection } from '../patterns/FAQSection';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';

import {
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

import '@/styles/homepage-sections.css';

export function FrontPageTemplate() {
  return (
    <>
      {/* ============================================
          1. HERO SECTION
          ============================================ */}
      <HeroHome />

      {/* ============================================
          2. WHY CHOOSE LIGHTSPEED -- 6 features, 3 cols
          ============================================ */}
      <FeatureGrid
        title={frontPageWhyChoose.title}
        description={frontPageWhyChoose.description}
        items={frontPageWhyChoose.features}
        columns={3}
        variant="bordered"
        iconStyle="rounded"
        spacing="xl"
      />

      {/* ============================================
          3. OUR SERVICES -- 3 cards with images
          ============================================ */}
      <Section spacing="xl" background="card">
        <Container>
          <div className="homepage-section__inner">
            {/* Section Header */}
            <div className="homepage-section__header">
              <h2 className="homepage-section__title">
                {frontPageServices.title}
              </h2>
              <p className="homepage-section__description">
                {frontPageServices.description}
              </p>
            </div>

            {/* Service Cards */}
            <CardGrid
              items={frontPageServices.items.map(service => ({
                title: service.title,
                description: service.description,
                image: service.image,
                href: `/${service.link}`,
                ctaText: 'Learn More →'
              }))}
              columns={3}
              variant="service"
              showImages={true}
              showDescriptions={true}
              showCTA={true}
              maxWidth="none"
            />
          </div>
        </Container>
      </Section>

      {/* ============================================
          4. FEATURED PROJECTS -- 3 project cards
          ============================================ */}
      <Section spacing="xl" background="default">
        <Container>
          <div className="homepage-section__inner">
            {/* Section Header */}
            <div className="homepage-section__header">
              <h2 className="homepage-section__title">
                {frontPageProjects.title}
              </h2>
              <p className="homepage-section__description">
                {frontPageProjects.description}
              </p>
            </div>

            {/* Project Cards */}
            <CardGrid
              items={frontPageProjects.projects.map(project => ({
                title: project.title,
                description: project.description,
                image: project.image,
                badge: { text: project.category, variant: 'primary' as const },
                href: `/portfolio/${project.slug}`,
                ctaText: 'View Case Study →'
              }))}
              columns={3}
              variant="portfolio"
              showImages={true}
              showDescriptions={true}
              showCTA={true}
              maxWidth="none"
            />

            {/* View All Projects Button */}
            <div className="homepage-section__cta-wrapper">
              <Button
                variant="outline"
                size="md"
                page={frontPageProjects.cta.page}
              >
                {frontPageProjects.cta.text}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================
          5. PROVEN TRACK RECORD -- heading + 4 stats
          ============================================ */}
      <StatsSection
        title="Proven Track Record"
        stats={frontPageStats}
        variant="default"
      />

      {/* ============================================
          6. CTA BANNER -- "WordPress Experts You Can Trust"
          ============================================ */}
      <CTASection
        title={frontPageMidCTA.title}
        description={frontPageMidCTA.description}
        primaryButtonText={frontPageMidCTA.primaryButton.text}
        primaryButtonPage={frontPageMidCTA.primaryButton.page}
        variant="highlighted"
        gradient="blue"
      />

      {/* ============================================
          7. HOW WE WORK -- 4 process steps
          ============================================ */}
      <Section spacing="xl">
        <Container>
          <div className="homepage-section__inner">
            {/* Section Header */}
            <div className="homepage-section__header">
              <h2 className="homepage-section__title">
                {frontPageProcess.title}
              </h2>
              <p className="homepage-section__description">
                {frontPageProcess.description}
              </p>
            </div>

            {/* Process Steps */}
            <ProcessSteps
              steps={frontPageProcess.steps}
              columns={4}
              variant="cards"
              badgeStyle="circle"
              maxWidth="none"
            />
          </div>
        </Container>
      </Section>

      {/* ============================================
          8. WHAT OUR CLIENTS SAY -- 3 testimonials
          ============================================ */}
      <Section spacing="xl" background="card">
        <Container>
          <div className="homepage-section__inner">
            {/* Section Header */}
            <div className="homepage-section__header">
              <h2 className="homepage-section__title">
                What Our Clients Say
              </h2>
            </div>

            {/* Testimonial Grid */}
            <TestimonialGrid
              testimonials={frontPageTestimonials}
              columns={3}
              variant="cards"
              showRating={true}
              showAvatar={false}
              maxWidth="none"
            />
          </div>
        </Container>
      </Section>

      {/* ============================================
          9. LATEST INSIGHTS -- 3 blog cards
          ============================================ */}
      <Section spacing="xl">
        <Container>
          <div className="homepage-section__inner">
            {/* Section Header */}
            <div className="homepage-section__header">
              <h2 className="homepage-section__title">
                Latest Insights
              </h2>
            </div>

            {/* Blog Cards */}
            <CardGrid
              items={frontPageBlogPosts.map(post => ({
                title: post.title,
                description: post.excerpt,
                image: post.image,
                badge: { text: post.category, variant: 'primary' as const },
                meta: [
                  { label: post.date },
                  { label: post.readingTime }
                ],
                href: `/blog/${post.slug}`,
                ctaText: 'Read Article →'
              }))}
              columns={3}
              variant="blog"
              showImages={true}
              showDescriptions={true}
              showCTA={true}
              maxWidth="none"
            />

            {/* View All Button */}
            <div className="homepage-section__cta-wrapper">
              <Button
                variant="outline"
                size="md"
                page="blog"
              >
                View All Articles
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================
          10. COMMON QUESTIONS -- FAQ Accordion
          ============================================ */}
      <FAQSection
        title="Common Questions"
        faqs={frontPageFAQs}
        variant="default"
      />

      {/* ============================================
          11. BOTTOM CTA
          ============================================ */}
      <CTASection
        title={frontPageBottomCTA.title}
        description={frontPageBottomCTA.description}
        primaryButtonText={frontPageBottomCTA.primaryButton.text}
        primaryButtonPage={frontPageBottomCTA.primaryButton.page}
        secondaryButtonText={frontPageBottomCTA.secondaryButton.text}
        secondaryButtonPage={frontPageBottomCTA.secondaryButton.page}
        variant="highlighted"
        gradient="blue"
      />
    </>
  );
}
