/**
 * Single Testimonial Template — Standard
 *
 * WordPress template: single-testimonial.html
 *
 * Full single testimonial page with hero quote, full story,
 * metadata sidebar, and related testimonials.
 *
 * Pattern order:
 * Hero (quote + author) → Full Story → Meta → Related → CTA
 *
 * @see /src/styles/templates/testimonial-single.css
 */

import '../../../../styles/templates/testimonial-single.css';
import { Star, Calendar, Briefcase, Tag, ArrowLeft } from '@phosphor-icons/react';
import { Link, useParams } from 'react-router';
import { getPageUrl } from '../../../data/site-pages';
import { Section } from '../../common/Section';
import { FunkyCTA } from '../../patterns/FunkyCTA';
import { QueryLoopTestimonials } from '../../patterns/QueryLoopTestimonials';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import {
  testimonialEntries,
  getTestimonialBySlug,
} from '../../../data/testimonials-extended';

export function SingleTestimonialTemplate({ slug }: { slug?: string }) {
  const params = useParams();
  const testimonialSlug = slug || params.slug || '';
  const testimonial = getTestimonialBySlug(testimonialSlug) || testimonialEntries[0];

  const { ref: heroRef, style: heroStyle } = useScrollReveal({ animation: 'fade-up' });
  const { ref: storyRef, style: storyStyle } = useScrollReveal({ animation: 'fade-up', delay: 100 });

  const related = testimonialEntries
    .filter((t) => t.id !== testimonial.id)
    .slice(0, 3);

  return (
    <>
      {/* Back link */}
      <Section spacing="xs" background="default">
        <div className="wp-max-w-6xl">
          <Link
            to={getPageUrl('testimonials')}
            className="single-testimonial__back-link"
          >
            <ArrowLeft size={16} /> Back to Testimonials
          </Link>
        </div>
      </Section>

      {/* Hero Section */}
      <div className="single-testimonial__hero" ref={heroRef as any} style={heroStyle}>
        <div className="single-testimonial__hero-inner">
          <div className="single-testimonial__hero-content">
            {/* Author Card */}
            <div className="single-testimonial__author-card">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="single-testimonial__avatar"
              />
              <div className="single-testimonial__author-info">
                <div className="single-testimonial__author-name">{testimonial.author}</div>
                <div className="single-testimonial__author-role">{testimonial.role}</div>
                <div className="single-testimonial__author-company">{testimonial.company}</div>
              </div>
            </div>

            {/* Rating */}
            <div className="single-testimonial__rating">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < testimonial.rating ? 'single-testimonial__star--filled' : ''}
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="single-testimonial__quote">
              "{testimonial.quote}"
            </blockquote>
          </div>
        </div>
      </div>

      {/* Full Story */}
      {testimonial.fullStory && (
        <Section spacing="xl" background="default">
          <div
            className="single-testimonial__story-inner"
            ref={storyRef as any}
            style={storyStyle}
          >
            <h2 className="single-testimonial__story-title">The full story</h2>
            <p className="single-testimonial__story-text">{testimonial.fullStory}</p>
          </div>
        </Section>
      )}

      {/* Metadata */}
      <Section spacing="xl" background="muted">
        <div className="wp-max-w-4xl">
          <div className="single-testimonial__meta">
            <div className="single-testimonial__meta-item">
              <div className="single-testimonial__meta-label">Service</div>
              <div className="single-testimonial__meta-value">{testimonial.service}</div>
            </div>
            <div className="single-testimonial__meta-item">
              <div className="single-testimonial__meta-label">Industry</div>
              <div className="single-testimonial__meta-value">{testimonial.industry.join(', ')}</div>
            </div>
            <div className="single-testimonial__meta-item">
              <div className="single-testimonial__meta-label">Date</div>
              <div className="single-testimonial__meta-value">
                {new Date(testimonial.date).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </div>
            </div>
            {testimonial.serviceType.map((st) => (
              <div key={st} className="single-testimonial__meta-item">
                <div className="single-testimonial__meta-label">Expertise</div>
                <div className="single-testimonial__meta-value">{st}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Related */}
      <Section spacing="xl" background="default">
        <div className="wp-max-w-6xl">
          <QueryLoopTestimonials
            testimonials={related}
            heading="More Success Stories"
            description="Explore more testimonials from our happy clients"
            columns={3}
          />
        </div>
      </Section>

      {/* CTA */}
      <FunkyCTA
        title="Ready to Get Started?"
        description="Let's discuss how we can achieve similar results for your business."
        buttonText="Start Your Project"
        buttonPage="contact"
        benefits={[
          'Free initial consultation',
          'Custom WordPress solutions',
          'Transparent fixed-price quotes',
          'Post-launch support included',
          'View our portfolio'
        ]}
      />
    </>
  );
}