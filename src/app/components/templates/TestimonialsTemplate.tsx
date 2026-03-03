/**
 * Testimonials Template — Funky Neon Redesign
 *
 * Full-featured testimonials page with mesh hero, neon-glow stat
 * cards, filtering controls, video section, and social proof.
 * All content is driven by centralised mock data.
 *
 * Sections:
 *  1. Hero (mesh grid + orb glow + rating badge)
 *  2. Stats (4-column stat cards)
 *  3. Featured Testimonials (TestimonialGrid)
 *  4. Filters + All Testimonials (select controls + grid)
 *  5. Video Testimonials (VideoTestimonial)
 *  6. Patterns (SocialProof, FAQ, CTA)
 *
 * @see /src/styles/templates/testimonials-page.css
 * @see /src/app/data/testimonials.ts
 */

import '../../../styles/templates/testimonials-page.css';
import { useState } from 'react';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { VideoTestimonial } from '../patterns/VideoTestimonial';
import { SocialProof } from '../patterns/SocialProof';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { StatsGrid } from '../patterns/StatsGrid';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Filter, Star, MessageSquare } from 'lucide-react';



/* ── Data imports ── */
import {
  testimonials as centralizedTestimonials,
  testimonialStats,
  videoTestimonials
} from '../../data/testimonials';
import { clientLogos } from '../../data/logos';
import { testimonialPageFAQs } from '../../data/faqs';

export function TestimonialsTemplate() {
  const [filterIndustry, setFilterIndustry] = useState<string>('all');
  const [filterService, setFilterService] = useState<string>('all');

  /* ── Transform data ── */
  const testimonials = centralizedTestimonials.map((t, index) => ({
    quote: t.quote,
    author: t.author,
    role: t.role,
    company: t.company,
    avatar: t.avatar || `https://images.unsplash.com/photo-${1494790108377 + index}?w=400`,
    rating: t.rating || 5,
    industry: t.industry?.[0] || 'General',
    service: t.serviceType?.[0] || 'WordPress'
  }));

  const filteredTestimonials = testimonials.filter((t) => {
    const industryMatch = filterIndustry === 'all' || t.industry === filterIndustry;
    const serviceMatch = filterService === 'all' || t.service.includes(filterService);
    return industryMatch && serviceMatch;
  });

  const featuredTestimonials = testimonials.slice(0, 3);
  const industries = ['all', ...Array.from(new Set(testimonials.map((t) => t.industry)))];
  const services = ['all', 'WordPress', 'WooCommerce', 'Design', 'Development', 'Migration', 'Security'];

  const videoTestimonialsData = videoTestimonials.map((v) => ({
    title: v.title,
    clientName: v.name,
    clientRole: v.role,
    company: v.company,
    thumbnail: v.thumbnail,
    videoUrl: v.url,
    duration: v.duration,
    description: v.description
  }));

  return (
    <>
      {/* ── Breadcrumbs ── */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Testimonials' },
        ]}
      />

      {/* ============================================
          1. HERO
          ============================================ */}
      <section className="test-page__hero">
        <div className="test-page__hero-grid" aria-hidden="true" />
        <div className="test-page__hero-orb" aria-hidden="true" />

        <Container>
          <ScrollReveal animation="fade-up">
            <div className="test-page__hero-inner">
              <div className="test-page__hero-badge">
                <MessageSquare size={14} />
                <span>CLIENT TESTIMONIALS</span>
              </div>

              <div className="test-page__hero-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="test-page__hero-rating-star" fill="currentColor" />
                ))}
                <span className="test-page__hero-rating-text">4.9 / 5 average rating</span>
              </div>

              <h1 className="test-page__hero-title">
                Trusted by{' '}
                <span className="test-page__hero-title-highlight">500+ Happy Clients</span>
              </h1>

              <p className="test-page__hero-desc">
                Don't just take our word for it. See what our clients say about
                working with LightSpeed and the results we've achieved together.
              </p>

              <div className="test-page__hero-actions">
                <Button href="/contact" size="lg">
                  Get Started
                </Button>
                <Button href="/portfolio" variant="secondary" size="lg">
                  View Portfolio
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          2. STATS
          ============================================ */}
      <section className="test-page__stats">
        <Container>
          <StatsGrid
            stats={testimonialStats.map((stat) => ({
              number: stat.number,
              label: stat.label,
              icon: Star
            }))}
            columns={4}
            variant="cards"
          />
        </Container>
      </section>

      {/* ============================================
          3. FEATURED TESTIMONIALS
          ============================================ */}
      <section className="test-page__featured">
        <Container>
          <ScrollReveal animation="fade-up">
            <TestimonialGrid
              testimonials={featuredTestimonials}
              columns={3}
              variant="cards"
              showRating={true}
              maxWidth="6xl"
            />
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          4. FILTERS + ALL TESTIMONIALS
          ============================================ */}
      <section className="test-page__filter-section">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="test-page__filter-header">
              <h2 className="test-page__filter-title">All Client Testimonials</h2>
              <p className="test-page__filter-desc">
                Filter by industry or service to find relevant success stories
              </p>

              <div className="test-page__filter-row">
                {/* Industry Filter */}
                <div className="test-page__filter-group">
                  <Filter size={20} className="test-page__filter-icon" />
                  <span className="test-page__filter-label">Industry:</span>
                  <select
                    className="test-page__filter-select"
                    value={filterIndustry}
                    onChange={(e) => setFilterIndustry(e.target.value)}
                    aria-label="Filter testimonials by industry"
                  >
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry === 'all' ? 'All Industries' : industry}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Service Filter */}
                <div className="test-page__filter-group">
                  <span className="test-page__filter-label">Service:</span>
                  <select
                    className="test-page__filter-select"
                    value={filterService}
                    onChange={(e) => setFilterService(e.target.value)}
                    aria-label="Filter testimonials by service"
                  >
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service === 'all' ? 'All Services' : service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Filtered Grid */}
          {filteredTestimonials.length > 0 ? (
            <TestimonialGrid
              testimonials={filteredTestimonials}
              columns={3}
              variant="cards"
              showRating={true}
              maxWidth="none"
            />
          ) : (
            <div className="test-page__empty">
              <p className="test-page__empty-text">
                No testimonials found for the selected filters.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* ============================================
          5. VIDEO TESTIMONIALS
          ============================================ */}
      <section className="test-page__video-section">
        <Container>
          <VideoTestimonial
            videos={videoTestimonialsData}
            heading="Video Testimonials"
            description="Watch our clients share their success stories"
            variant="grid"
            columns={3}
            maxWidth="6xl"
          />
        </Container>
      </section>

      {/* ============================================
          6. PATTERNS
          ============================================ */}
      <section className="test-page__social">
        <Container>
          <SocialProof
            logos={clientLogos.filter((logo) => logo.category === 'client')}
            heading="Trusted by Leading Brands"
            description="Join 500+ companies who trust LightSpeed with their WordPress & WooCommerce solutions"
          />
        </Container>
      </section>

      <FAQSection
        faqs={testimonialPageFAQs}
        title="Frequently Asked Questions"
        description="Common questions about our testimonials and client references"
      />

      <FunkyCTA
        title="Ready to Become Our Next Success Story?"
        description="Join 500+ happy clients who have transformed their WordPress websites with LightSpeed. Let's achieve remarkable results together."
        buttonText="Start Your Project"
        buttonPage="contact"
        benefits={[
          '500+ successful projects delivered',
          '4.9/5 average client rating',
          '98% client satisfaction rate',
          'Risk-free guarantees on every project'
        ]}
      />
    </>
  );
}