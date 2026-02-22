/**
 * Service Testimonial Pattern
 *
 * Auto-filters testimonials by service slug and renders 1-2 compact
 * glassmorphism cards with funky treatments. Renders nothing when
 * no testimonials match the given service — safe to include in every
 * service template without conditional checks.
 *
 * Funky treatments:
 *   - Glassmorphism card surface (backdrop-filter: blur)
 *   - Animated gradient top stripe (serviceTestimonialStripe)
 *   - Neon gradient quote icon wrapper
 *   - Gradient section title underline
 *   - Star rating neon glow
 *   - Card hover lift + neon border glow
 *   - `.dark` mode overrides
 *   - `prefers-reduced-motion` guards via CSS
 *
 * WordPress block mapping: wp:group + wp:columns
 *
 * @see /src/styles/patterns/service-testimonial.css
 */

import { Star, Quote } from 'lucide-react';
import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { testimonials, type ExtendedTestimonial } from '../../data/testimonials';

/**
 * Maps service-detail slugs (from services-detailed.ts) to the
 * `serviceType` values used in testimonials.ts.
 *
 * A service may map to multiple serviceType strings so we can
 * cast a wider net (e.g. "content" matches both "Strategy" and
 * "Content").
 */
const SERVICE_SLUG_TO_TESTIMONIAL_TYPE: Record<string, string[]> = {
  design:                       ['Design'],
  development:                  ['Development', 'Theme Development'],
  discovery:                    ['Discovery'],
  security:                     ['Security'],
  seo:                          ['SEO'],
  content:                      ['Strategy', 'Content'],
  'content-strategy':           ['Strategy', 'Content'],
  support:                      ['Support', 'Maintenance'],
  migrations:                   ['Migration'],
  performance:                  ['Performance'],
  training:                     ['Training'],
  accessibility:                ['Accessibility'],
  newsletter:                   ['Newsletter', 'Email'],
  hosting:                      ['Hosting'],
  'ai-engine-optimisation':     [],
  'answer-engine-optimisation': [],
};

/**
 * Returns testimonials whose `serviceType` array includes any of the
 * mapped types for the given service slug. Limited to `max` results.
 */
function getTestimonialsForService(
  serviceSlug: string,
  max = 2
): ExtendedTestimonial[] {
  const types = SERVICE_SLUG_TO_TESTIMONIAL_TYPE[serviceSlug];

  if (!types || types.length === 0) return [];

  const matched = testimonials.filter(
    (t) =>
      t.serviceType &&
      t.serviceType.some((st) =>
        types.some((mapped) => st.toLowerCase().includes(mapped.toLowerCase()))
      )
  );

  return matched.slice(0, max);
}

/**
 * Returns the initials (first letter of first + last name) for the
 * avatar fallback.
 */
function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

/* ── Props ── */
interface ServiceTestimonialProps {
  /** Service slug from services-detailed.ts */
  serviceSlug: string;
  /** Override section title */
  title?: string;
  /** Override section subtitle */
  subtitle?: string;
  /** Max testimonials to show (default 2) */
  max?: number;
}

export function ServiceTestimonial({
  serviceSlug,
  title = 'What Our Clients Say',
  subtitle = 'Real feedback from clients who used this service',
  max = 2,
}: ServiceTestimonialProps) {
  const matched = getTestimonialsForService(serviceSlug, max);

  // Nothing to show — bail out silently
  if (matched.length === 0) return null;

  return (
    <section
      className="service-testimonial"
      aria-label="Client testimonials for this service"
    >
      <Container>
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="service-testimonial__header">
            <h2 className="service-testimonial__title">{title}</h2>
            <p className="service-testimonial__subtitle">{subtitle}</p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div
          className={`service-testimonial__grid${
            matched.length > 1 ? ' service-testimonial__grid--2' : ''
          }`}
        >
          {matched.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.id || index}
              animation="fade-up"
              delay={index * 150}
            >
              <article
                className="service-testimonial__card"
                aria-label={`Testimonial from ${testimonial.author}`}
              >
                <div className="service-testimonial__card-inner">
                  {/* Quote Icon */}
                  <div className="service-testimonial__quote-icon-wrap">
                    <Quote size={20} strokeWidth={2} />
                  </div>

                  {/* Rating */}
                  {testimonial.rating && (
                    <div
                      className="service-testimonial__rating"
                      role="img"
                      aria-label={`${testimonial.rating} out of 5 stars`}
                    >
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="service-testimonial__star"
                          />
                        )
                      )}
                    </div>
                  )}

                  {/* Quote */}
                  <p className="service-testimonial__quote">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Service badge */}
                  {testimonial.service && (
                    <span className="service-testimonial__service-badge">
                      {testimonial.service}
                    </span>
                  )}

                  {/* Author */}
                  <div className="service-testimonial__author">
                    <div className="service-testimonial__author-avatar">
                      {getInitials(testimonial.author)}
                    </div>
                    <div className="service-testimonial__author-info">
                      <span className="service-testimonial__author-name">
                        {testimonial.author}
                      </span>
                      <span className="service-testimonial__author-role">
                        {testimonial.role}
                        {testimonial.company && `, ${testimonial.company}`}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
