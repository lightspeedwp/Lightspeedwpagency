/**
 * Service Testimonial Pattern
 *
 * Auto-filters testimonials by service slug and renders 1-2 compact
 * glassmorphism cards with funky treatments. Renders nothing when
 * no testimonials match the given service — safe to include in every
 * service template without conditional checks.
 *
 * Uses the shared TestimonialCard component for card rendering.
 *
 * WordPress block mapping: wp:group + wp:columns
 *
 * @see /src/styles/patterns/service-testimonial.css
 * @see /src/app/components/patterns/TestimonialCard.tsx
 */

import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { testimonials, type ExtendedTestimonial } from '../../data/testimonials';
import { TestimonialCard, type TestimonialCardData } from './TestimonialCard';

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
  'content-creation':           ['Content'],
  'content-copywriting':        ['Content', 'Copywriting'],
  'content-seo':                ['SEO', 'Content'],
  'content-governance':         ['Content', 'Strategy'],
  'content-collection':         ['Content'],
  'content-audit':              ['Content', 'Strategy'],
  support:                      ['Support', 'Maintenance'],
  migrations:                   ['Migration'],
  performance:                  ['Performance'],
  training:                     ['Training'],
  accessibility:                ['Accessibility'],
  newsletter:                   ['Newsletter', 'Email'],
  'email-marketing':            ['Email', 'Newsletter'],
  hosting:                      ['Hosting'],
  'figma-prototyping':          ['Design'],
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
 * Maps an ExtendedTestimonial to TestimonialCardData.
 */
function mapToCardData(t: ExtendedTestimonial): TestimonialCardData {
  return {
    quote: t.quote,
    author: t.author,
    role: t.role,
    company: t.company,
    avatar: t.avatar,
    rating: t.rating,
    service: t.service,
  };
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
          className={`wp-grid-3-cols ${
            matched.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
          }`}
        >
          {matched.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.id || index}
              animation="fade-up"
              delay={index * 150}
            >
              <TestimonialCard
                testimonial={mapToCardData(testimonial)}
                variant="glass"
                showRating={true}
                showAvatar={true}
                showQuoteIcon={true}
                showServiceBadge={true}
              />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
