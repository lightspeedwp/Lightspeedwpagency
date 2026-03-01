/**
 * Single Testimonial Template — Gallery + Portfolio
 *
 * WordPress template: single-testimonial-gallery.html
 *
 * Portfolio gallery testimonial combining project screenshots/photos,
 * project results, technology stack, and the client testimonial.
 *
 * Pattern order:
 * Back Link → Gallery → Quote → Results → Tech Stack → Related → CTA
 *
 * @see /src/styles/templates/testimonial-single.css
 */

import '../../../../styles/templates/testimonial-single.css';
import { Star, ArrowLeft, Images, ExternalLink, TrendingUp } from 'lucide-react';
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

export function SingleTestimonialGalleryTemplate({ slug }: { slug?: string }) {
  const params = useParams();
  const testimonialSlug = slug || params.slug || '';
  const galleryTestimonials = getTestimonialsByFormat('gallery');
  const testimonial = getTestimonialBySlug(testimonialSlug) || galleryTestimonials[0];
  const [selectedImage, setSelectedImage] = useState(0);

  const { ref: galleryRef, style: galleryStyle } = useScrollReveal({ animation: 'fade-up' });
  const { ref: quoteRef, style: quoteStyle } = useScrollReveal({ animation: 'fade-up', delay: 100 });
  const { ref: resultsRef, style: resultsStyle } = useScrollReveal({ animation: 'fade-up', delay: 200 });

  const images = testimonial.gallery?.images || [];
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

      {/* Project Title */}
      <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
        <div className="wp-max-w-6xl" style={{ margin: '0 auto', textAlign: 'center' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-2)',
              fontFamily: 'var(--font-secondary)',
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-weight-semibold)',
              letterSpacing: 'var(--letter-spacing-wider)',
              textTransform: 'uppercase',
              color: 'var(--primary)',
              backgroundColor: 'var(--primary-soft)',
              padding: 'var(--spacing-1-5) var(--spacing-4)',
              borderRadius: 'var(--radius-full)',
              marginBottom: 'var(--spacing-6)',
            }}
          >
            <Images size={14} /> Portfolio Case Study
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-h1)',
              fontWeight: 'var(--font-weight-medium)',
              lineHeight: 'var(--line-height-tight)',
              color: 'var(--foreground)',
              marginTop: 'var(--spacing-4)',
            }}
          >
            {testimonial.gallery?.projectTitle || testimonial.title}
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--line-height-relaxed)',
              color: 'var(--muted-foreground)',
              marginTop: 'var(--spacing-4)',
              maxWidth: '640px',
              margin: 'var(--spacing-4) auto 0',
            }}
          >
            {testimonial.gallery?.projectDescription}
          </p>
        </div>
      </Section>

      {/* Gallery */}
      <Section spacing="xl" background="muted">
        <div
          className="wp-max-w-6xl"
          style={{ margin: '0 auto' }}
          ref={galleryRef as any}
        >
          <div style={galleryStyle}>
            {/* Main image + sidebar */}
            <div className="single-testimonial__gallery single-testimonial__gallery--main">
              <img
                src={images[selectedImage] || images[0]}
                alt={`${testimonial.gallery?.projectTitle} — Screenshot ${selectedImage + 1}`}
                className="single-testimonial__gallery-main-image"
              />
              {images.length > 1 && (
                <div className="single-testimonial__gallery-sidebar">
                  {images.slice(0, 3).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      className={`single-testimonial__gallery-thumb ${i === selectedImage ? 'single-testimonial__gallery-thumb--active' : ''}`}
                      onClick={() => setSelectedImage(i)}
                      loading="lazy"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Bottom thumbnail row */}
            {images.length > 3 && (
              <div className="single-testimonial__gallery-row">
                {images.slice(3).map((img, i) => (
                  <img
                    key={i + 3}
                    src={img}
                    alt={`Gallery image ${i + 4}`}
                    className="single-testimonial__gallery-thumb"
                    onClick={() => setSelectedImage(i + 3)}
                    loading="lazy"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Client Quote */}
      <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
        <div
          className="wp-max-w-4xl"
          style={{ margin: '0 auto' }}
          ref={quoteRef as any}
        >
          <div style={quoteStyle}>
            <div className="single-testimonial__author-card" style={{ justifyContent: 'center' }}>
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

            <div className="single-testimonial__rating" style={{ justifyContent: 'center', marginTop: 'var(--spacing-4)' }}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < testimonial.rating ? 'single-testimonial__star--filled' : ''}
                />
              ))}
            </div>

            <blockquote
              className="single-testimonial__quote"
              style={{ textAlign: 'center', borderLeft: 'none', paddingLeft: 0, marginTop: 'var(--spacing-6)' }}
            >
              "{testimonial.quote}"
            </blockquote>
          </div>
        </div>
      </Section>

      {/* Project Results */}
      {testimonial.gallery?.results && (
        <Section spacing="xl" background="muted">
          <div
            className="wp-max-w-6xl"
            style={{ margin: '0 auto' }}
            ref={resultsRef as any}
          >
            <div style={resultsStyle}>
              <h2
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h3)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)',
                  textAlign: 'center',
                  marginBottom: 'var(--spacing-8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--spacing-3)',
                }}
              >
                <TrendingUp size={24} style={{ color: 'var(--primary)' }} />
                Project Results
              </h2>
              <div className="single-testimonial__results">
                {testimonial.gallery.results.map((result) => (
                  <div key={result.metric} className="single-testimonial__result-card">
                    <div className="single-testimonial__result-value">{result.value}</div>
                    <div className="single-testimonial__result-metric">{result.metric}</div>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              {testimonial.gallery.technologies && (
                <div style={{ textAlign: 'center', marginTop: 'var(--spacing-10)' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h5)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    Technologies Used
                  </h3>
                  <div className="single-testimonial__tech-stack" style={{ justifyContent: 'center' }}>
                    {testimonial.gallery.technologies.map((tech) => (
                      <span key={tech} className="single-testimonial__tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Section>
      )}

      {/* Related */}
      <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
        <div className="wp-max-w-6xl" style={{ margin: '0 auto' }}>
          <QueryLoopTestimonials
            testimonials={related}
            heading="More Case Studies"
            columns={3}
          />
        </div>
      </Section>

      {/* CTA */}
      <FunkyCTA
        title="Want Results Like These?"
        description="Let's discuss your project and create a plan for success."
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