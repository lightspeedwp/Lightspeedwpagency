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
import { Star, ArrowLeft, Images, ArrowSquareOut, TrendUp } from '@phosphor-icons/react';
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

      {/* Project Title */}
      <Section spacing="xl" background="default">
        <div className="wp-max-w-6xl wp-text-center">
          <span className="single-testimonial__tech-tag wp-inline-flex wp-items-center wp-gap-2 wp-mb-6">
            <Images size={14} /> Portfolio Case Study
          </span>
          <h1 className="single-testimonial__story-title wp-mt-4">
            {testimonial.gallery?.projectTitle || testimonial.title}
          </h1>
          <p className="single-testimonial__story-text wp-max-w-3xl wp-mt-4 wp-mx-auto">
            {testimonial.gallery?.projectDescription}
          </p>
        </div>
      </Section>

      {/* Gallery */}
      <Section spacing="xl" background="muted">
        <div
          className="wp-max-w-6xl"
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
      <Section spacing="xl" background="default">
        <div
          className="wp-max-w-4xl"
          ref={quoteRef as any}
        >
          <div style={quoteStyle}>
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

            <blockquote className="single-testimonial__quote single-testimonial__quote--center">
              "{testimonial.quote}"
            </blockquote>
          </div>
        </div>
      </Section>

      {/* Project Results */}
      {testimonial.gallery?.results && (
        <Section spacing="xl" background="muted">
          <div
            className="wp-max-w-6xl wp-mx-auto"
            ref={resultsRef as any}
          >
            <div style={resultsStyle}>
              <h2 className="wp-font-primary wp-text-h3 wp-font-medium wp-text-foreground wp-text-center wp-mb-8 wp-flex wp-items-center wp-justify-center wp-gap-3">
                <TrendUp size={24} className="wp-text-primary" />
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
                <div className="wp-text-center wp-pt-10">
                  <h3
                    className="wp-font-primary wp-text-h5 wp-font-medium wp-text-foreground wp-mb-4"
                  >
                    Technologies Used
                  </h3>
                  <div className="single-testimonial__tech-stack wp-justify-center">
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
      <Section spacing="xl" className="wp-bg-background">
        <div className="wp-max-w-6xl wp-mx-auto">
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