/**
 * Testimonial Archive Template
 *
 * WordPress template: archive-testimonial.html
 *
 * Displays all testimonials with format-based filtering (Written, Audio, Video, Portfolio).
 * Uses QueryLoopTestimonials pattern for the card grid.
 *
 * Pattern order:
 * Hero → Stats → Format Filters → Filtered Grid → CTA
 *
 * @see /src/styles/templates/testimonial-archive.css
 */

import '../../../../styles/templates/testimonial-archive-optimized.css';
import { useState } from 'react';
import { Section } from '../../common/Section';
import { Hero } from '../../patterns/Hero';
import { FunkyCTA } from '../../patterns/FunkyCTA';
import { QueryLoopTestimonials } from '../../patterns/QueryLoopTestimonials';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import {
  testimonialEntries,
  testimonialCategories,
  type TestimonialEntry,
} from '../../../data/testimonials-extended';
import { Star, Microphone, VideoCamera, Images, Quotes, Users } from '@phosphor-icons/react';

export function TestimonialArchiveTemplate() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref: statsRef, style: statsStyle } = useScrollReveal({ animation: 'fade-up' });
  const { ref: filterRef, style: filterStyle } = useScrollReveal({ animation: 'fade-up', delay: 100 });

  const filteredTestimonials: TestimonialEntry[] =
    activeFilter === 'all'
      ? testimonialEntries
      : testimonialEntries.filter((t) => t.format === activeFilter);

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Star, value: '4.9/5', label: 'Average Rating' },
    { icon: Quotes, value: `${testimonialEntries.length}`, label: 'Testimonials' },
    { icon: VideoCamera, value: '30+', label: 'Countries Served' },
  ];

  const formatIcons: Record<string, any> = {
    all: Users,
    standard: Quotes,
    audio: Microphone,
    video: VideoCamera,
    gallery: Images,
  };

  return (
    <>
      {/* Hero */}
      <Hero
        badge={{ text: 'CLIENT TESTIMONIALS' }}
        title="Hear From Our Clients"
        description="Real stories from real businesses. See how LightSpeed has helped companies transform their WordPress and WooCommerce platforms."
        variant="service"
        gradient="blue"
        buttons={[
          { label: 'Get Started', page: 'contact', variant: 'primary' },
          { label: 'View Portfolio', page: 'portfolio', variant: 'outline' },
        ]}
      />

      {/* Stats */}
      <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
        <div
          ref={statsRef as any}
          style={statsStyle}
          className="testimonial-archive__stats"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="testimonial-archive__stat">
                <Icon size={24} style={{ color: 'var(--primary)', marginBottom: 'var(--spacing-2)' }} />
                <div className="testimonial-archive__stat-value">{stat.value}</div>
                <div className="testimonial-archive__stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Filter + Grid */}
      <Section spacing="xl" background="muted">
        <div className="wp-max-w-6xl" style={{ margin: '0 auto' }}>
          {/* Format Filters */}
          <div
            ref={filterRef as any}
            style={filterStyle}
            className="testimonial-archive__filters"
            role="group"
            aria-label="Filter testimonials by format"
          >
            {testimonialCategories.map((cat) => {
              const Icon = formatIcons[cat.slug] || Quotes;
              return (
                <button
                  key={cat.slug}
                  className={`testimonial-archive__filter-btn ${
                    activeFilter === cat.slug ? 'testimonial-archive__filter-btn--active' : ''
                  }`}
                  onClick={() => setActiveFilter(cat.slug)}
                  aria-pressed={activeFilter === cat.slug}
                >
                  <Icon size={16} />
                  {cat.name}
                  <span className="testimonial-archive__filter-count">({cat.count})</span>
                </button>
              );
            })}
          </div>

          {/* Testimonials Grid */}
          <QueryLoopTestimonials
            testimonials={filteredTestimonials}
            columns={3}
            showFormat={true}
          />
        </div>
      </Section>

      {/* CTA */}
      <FunkyCTA
        title="Ready to Become Our Next Success Story?"
        description="Join 500+ happy clients who have transformed their WordPress websites with LightSpeed."
        buttonText="Start Your Project"
        buttonPage="contact"
        benefits={[
          'Dedicated project manager',
          'Transparent fixed-price quotes',
          'WordPress & WooCommerce experts',
          'Post-launch support included',
          'Over 500 happy clients'
        ]}
      />
    </>
  );
}