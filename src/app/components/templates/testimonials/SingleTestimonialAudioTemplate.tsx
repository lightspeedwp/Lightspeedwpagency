/**
 * Single Testimonial Template — Audio
 *
 * WordPress template: single-testimonial-audio.html
 *
 * Audio testimonial with embedded player, waveform visualization,
 * transcript section, and author details.
 *
 * Pattern order:
 * Back Link → Hero (author + player) → Transcript → Meta → Related → CTA
 *
 * @see /src/styles/templates/testimonial-single.css
 */

import '../../../../styles/templates/testimonial-single.css';
import { Star, ArrowLeft, Play, Pause, Mic, Clock } from 'lucide-react';
import { Link, useParams } from 'react-router';
import { useState } from 'react';
import { Section } from '../../common/Section';
import { FunkyCTA } from '../../patterns/FunkyCTA';
import { QueryLoopTestimonials } from '../../patterns/QueryLoopTestimonials';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import {
  testimonialEntries,
  getTestimonialBySlug,
  getTestimonialsByFormat,
} from '../../../data/testimonials-extended';

export function SingleTestimonialAudioTemplate({ slug }: { slug?: string }) {
  const params = useParams();
  const testimonialSlug = slug || params.slug || '';
  const audioTestimonials = getTestimonialsByFormat('audio');
  const testimonial = getTestimonialBySlug(testimonialSlug) || audioTestimonials[0];
  const [isPlaying, setIsPlaying] = useState(false);

  const { ref: heroRef, style: heroStyle } = useScrollReveal({ animation: 'fade-up' });
  const { ref: playerRef, style: playerStyle } = useScrollReveal({ animation: 'fade-up', delay: 150 });

  const related = testimonialEntries
    .filter((t) => t.id !== testimonial.id)
    .slice(0, 3);

  return (
    <>
      {/* Back Link */}
      <Section spacing="xs" style={{ backgroundColor: 'var(--background)' }}>
        <div className="wp-max-w-6xl" style={{ margin: '0 auto' }}>
          <Link
            to="/testimonials"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-2)',
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-sm)',
              color: 'var(--primary)',
              textDecoration: 'none',
            }}
          >
            <ArrowLeft size={16} /> Back to Testimonials
          </Link>
        </div>
      </Section>

      {/* Hero */}
      <div className="single-testimonial__hero" ref={heroRef as any} style={heroStyle}>
        <div className="single-testimonial__hero-inner">
          <div className="single-testimonial__hero-content">
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

            <div className="single-testimonial__rating">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < testimonial.rating ? 'single-testimonial__star--filled' : ''}
                />
              ))}
            </div>

            <blockquote className="single-testimonial__quote">
              "{testimonial.quote}"
            </blockquote>
          </div>
        </div>
      </div>

      {/* Audio Player Section */}
      <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
        <div className="wp-max-w-4xl" style={{ margin: '0 auto' }}>
          <div
            className="single-testimonial__audio-player"
            ref={playerRef as any}
            style={playerStyle}
          >
            <div className="single-testimonial__audio-header">
              <button
                className="single-testimonial__audio-icon"
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
              >
                {isPlaying ? <Pause size={28} /> : <Play size={28} />}
              </button>
              <div className="single-testimonial__audio-info">
                <div className="single-testimonial__audio-title">{testimonial.title}</div>
                <div className="single-testimonial__audio-duration">
                  <Clock size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />{' '}
                  {testimonial.audio?.duration || '0:00'} &middot; Audio Testimonial
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="single-testimonial__audio-progress">
              <div
                className="single-testimonial__audio-progress-bar"
                style={{ width: isPlaying ? '65%' : '0%' }}
              />
            </div>

            {/* Waveform visualization (decorative) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '3px',
                height: 'var(--spacing-10)',
              }}
            >
              {Array.from({ length: 40 }, (_, i) => {
                const height = Math.random() * 60 + 20;
                return (
                  <div
                    key={i}
                    style={{
                      width: '3px',
                      height: `${height}%`,
                      backgroundColor: i < 14 ? 'var(--primary)' : 'var(--muted)',
                      borderRadius: 'var(--radius-full)',
                      transition: 'background-color var(--transition-base) var(--ease-in-out)',
                    }}
                  />
                );
              })}
            </div>

            {/* Transcript */}
            {testimonial.audio?.transcript && (
              <div className="single-testimonial__transcript">
                <h3 className="single-testimonial__transcript-title">
                  <Mic size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 'var(--spacing-2)' }} />
                  Transcript
                </h3>
                <p className="single-testimonial__transcript-text">
                  {testimonial.audio.transcript}
                </p>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Metadata */}
      <Section spacing="xl" background="muted">
        <div className="wp-max-w-4xl" style={{ margin: '0 auto' }}>
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
              <div className="single-testimonial__meta-value">Audio Testimonial</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related */}
      <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
        <div className="wp-max-w-6xl" style={{ margin: '0 auto' }}>
          <QueryLoopTestimonials
            testimonials={related}
            heading="More Testimonials"
            columns={3}
          />
        </div>
      </Section>

      {/* CTA */}
      <FunkyCTA
        title="Want Similar Results?"
        description="Let's discuss how we can help your business succeed."
        buttonText="Get Started"
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