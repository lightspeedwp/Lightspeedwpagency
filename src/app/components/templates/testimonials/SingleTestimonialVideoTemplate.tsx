/**
 * Single Testimonial Template — Video
 *
 * WordPress template: single-testimonial-video.html
 *
 * Video testimonial with embedded video player, full quote,
 * author details, and related testimonials.
 *
 * Pattern order:
 * Back Link → Video Player → Quote + Author → Meta → Related → CTA
 *
 * @see /src/styles/templates/testimonial-single.css
 */

import '../../../../styles/templates/testimonial-single.css';
import { Star, ArrowLeft, Play, Clock, VideoCamera } from '@phosphor-icons/react';
import { Link, useParams } from 'react-router';
import { Section } from '../../common/Section';
import { FunkyCTA } from '../../patterns/FunkyCTA';
import { QueryLoopTestimonials } from '../../patterns/QueryLoopTestimonials';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import {
  testimonialEntries,
  getTestimonialBySlug,
  getTestimonialsByFormat,
} from '../../../data/testimonials-extended';

export function SingleTestimonialVideoTemplate({ slug }: { slug?: string }) {
  const params = useParams();
  const testimonialSlug = slug || params.slug || '';
  const videoTestimonials = getTestimonialsByFormat('video');
  const testimonial = getTestimonialBySlug(testimonialSlug) || videoTestimonials[0];

  const { ref: videoRef, style: videoStyle } = useScrollReveal({ animation: 'scale' });
  const { ref: quoteRef, style: quoteStyle } = useScrollReveal({ animation: 'fade-up', delay: 200 });

  const related = testimonialEntries
    .filter((t) => t.id !== testimonial.id)
    .slice(0, 3);

  return (
    <>
      {/* Back Link */}
      <Section spacing="xs" background="default">
        <div className="wp-max-w-6xl">
          <Link
            to="/testimonials"
            className="single-testimonial__back-link"
          >
            <ArrowLeft size={16} /> Back to Testimonials
          </Link>
        </div>
      </Section>

      {/* Video Player */}
      <Section spacing="xl" background="default">
        <div className="wp-max-w-6xl">
          <div
            ref={videoRef as any}
            style={videoStyle}
            className="single-testimonial__video-player"
            onClick={() => {
              if (testimonial.video?.url) {
                window.open(testimonial.video.url, '_blank');
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Play video: ${testimonial.title}`}
            onKeyDown={(e) => {
              if ((e.key === 'Enter' || e.key === ' ') && testimonial.video?.url) {
                e.preventDefault();
                window.open(testimonial.video.url, '_blank');
              }
            }}
          >
            <img
              src={testimonial.video?.thumbnail || testimonial.avatar}
              alt={testimonial.title}
              className="single-testimonial__video-thumbnail"
            />
            <div className="single-testimonial__video-overlay">
              <Play size={72} className="single-testimonial__video-play" />
            </div>
            {testimonial.video?.duration && (
              <div className="single-testimonial__video-duration">
                <Clock size={14} /> {testimonial.video.duration}
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Quote + Author */}
      <Section spacing="xl" background="muted">
        <div
          className="wp-max-w-4xl wp-text-center wp-mx-auto"
          ref={quoteRef as any}
        >
          <div style={quoteStyle}>
            {/* Title */}
            <h1 className="single-testimonial__story-title">
              {testimonial.title}
            </h1>

            {/* Author Card */}
            <div className="single-testimonial__author-center">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="single-testimonial__avatar"
              />
              <div className="wp-text-center">
                <div className="single-testimonial__author-name">{testimonial.author}</div>
                <div className="single-testimonial__author-role">{testimonial.role}</div>
                <div className="single-testimonial__author-company">{testimonial.company}</div>
              </div>

              <div className="single-testimonial__rating single-testimonial__rating--center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < testimonial.rating ? 'single-testimonial__star--filled' : ''}
                  />
                ))}
              </div>
            </div>

            {/* Quote */}
            <blockquote className="single-testimonial__quote single-testimonial__quote--center">
              "{testimonial.quote}"
            </blockquote>

            {/* Video description */}
            {testimonial.video?.description && (
              <p className="single-testimonial__story-text wp-mt-8">
                {testimonial.video.description}
              </p>
            )}
          </div>
        </div>
      </Section>

      {/* Metadata */}
      <Section spacing="xl" background="default">
        <div className="wp-max-w-4xl wp-mx-auto">
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
              <div className="single-testimonial__meta-label">Format</div>
              <div className="single-testimonial__meta-value">
                <VideoCamera size={14} className="single-testimonial__icon-inline" /> Video Testimonial
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related */}
      <Section spacing="xl" background="muted">
        <div className="wp-max-w-6xl">
          <QueryLoopTestimonials
            testimonials={related}
            heading="More Testimonials"
            columns={3}
          />
        </div>
      </Section>

      {/* CTA */}
      <FunkyCTA
        title="Inspired by This Story?"
        description="Let's create your success story together."
        buttonText="Start Your Project"
        buttonPage="contact"
        benefits={[
          'Free initial consultation',
          'Custom WordPress solutions',
          'Transparent fixed-price quotes',
          'Post-launch support included',
          'Proven track record'
        ]}
      />
    </>
  );
}