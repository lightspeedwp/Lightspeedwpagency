/**
 * Included In Solutions Pattern
 *
 * Shows which LSX solutions include a given service. Helps users
 * discover bundled offerings and understand the value of purchasing
 * a complete solution vs. individual services.
 *
 * Funky treatments:
 *   - Glassmorphism cards with `backdrop-filter: blur`
 *   - Animated gradient top stripe
 *   - Neon gradient icon wrappers
 *   - Gradient section title underline
 *   - Featured-solution badge glow
 *   - `.dark` mode overrides
 *   - `prefers-reduced-motion` guards via CSS
 *
 * WordPress block mapping: wp:group + wp:columns
 *
 * @see /src/styles/patterns/included-in-solutions.css
 */

import { Link } from 'react-router';
import { ArrowRight, Check } from 'lucide-react';
import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { slugToPath } from '../../utils/route-map';
import { solutions, type Solution } from '../../data/solutions';

/**
 * Maps service-detail slugs to the service-reference slugs used
 * inside `solutions[].services[]`.
 *
 * If a service slug is not listed here the component falls back
 * to an exact match, which handles cases where both systems use
 * the same string (e.g. future additions).
 */
const SERVICE_SLUG_TO_SOLUTION_REF: Record<string, string[]> = {
  design:                  ['web-design'],
  development:             ['wordpress-development'],
  discovery:               ['discovery-strategy'],
  content:                 ['content-strategy'],
  'content-strategy':      ['content-strategy'],
  seo:                     ['seo-optimization'],
  security:                ['security-hardening'],
  support:                 ['website-maintenance'],
  migrations:              ['website-migration'],
  /* Services that don't appear in any solution yet */
  training:                [],
  hosting:                 [],
  performance:             [],
  accessibility:           [],
  newsletter:              [],
  'ai-engine-optimisation':[],
  'answer-engine-optimisation': [],
};

/**
 * Returns every Solution that includes the given service slug
 * in its `services` array.
 */
function getSolutionsForService(serviceSlug: string): Solution[] {
  const refs = SERVICE_SLUG_TO_SOLUTION_REF[serviceSlug];

  // If we have an explicit mapping, use it
  if (refs !== undefined) {
    if (refs.length === 0) return [];
    return solutions.filter((sol) =>
      refs.some((ref) => sol.services.includes(ref))
    );
  }

  // Fallback: exact match
  return solutions.filter((sol) => sol.services.includes(serviceSlug));
}

/* ── Friendly label map for service slugs shown as tags ── */
const SERVICE_LABELS: Record<string, string> = {
  'web-design':          'Web Design',
  'wordpress-development': 'WordPress Dev',
  'discovery-strategy':  'Discovery',
  'content-strategy':    'Content Strategy',
  'seo-optimization':    'SEO',
  'security-hardening':  'Security',
  'website-maintenance': 'Maintenance',
  'website-migration':   'Migration',
  'ecommerce-development': 'E-Commerce Dev',
};

function labelForServiceRef(ref: string): string {
  return SERVICE_LABELS[ref] ?? ref.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

/* ── Props ── */
interface IncludedInSolutionsProps {
  /** The slug of the current service (as used in services-detailed.ts) */
  serviceSlug: string;
  /** Override section title */
  title?: string;
  /** Override section subtitle */
  subtitle?: string;
}

export function IncludedInSolutions({
  serviceSlug,
  title = 'Part of Our Solutions',
  subtitle = 'This service is included in these comprehensive solution packages',
}: IncludedInSolutionsProps) {
  const matched = getSolutionsForService(serviceSlug);

  // Nothing to show — bail out silently
  if (matched.length === 0) return null;

  // Determine which solution-ref slugs correspond to the current service
  const currentRefs = SERVICE_SLUG_TO_SOLUTION_REF[serviceSlug] ?? [serviceSlug];

  return (
    <section className="included-in-solutions" aria-label="Solutions containing this service">
      <Container>
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="included-in-solutions__header">
            <h2 className="included-in-solutions__title">{title}</h2>
            <p className="included-in-solutions__subtitle">{subtitle}</p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="included-in-solutions__cards">
          {matched.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <ScrollReveal key={sol.id} animation="fade-up" delay={index * 120}>
                <Link
                  to={slugToPath(sol.slug) || `/solutions/${sol.slug}`}
                  className={`included-in-solutions__card${
                    sol.featured ? ' included-in-solutions__card--featured' : ''
                  }`}
                  aria-label={`Learn more about the ${sol.name} solution`}
                >
                  {/* Icon */}
                  <div className="included-in-solutions__card-icon">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  {/* Name + badge */}
                  <div className="included-in-solutions__card-header">
                    <h3 className="included-in-solutions__card-name">{sol.name}</h3>
                    {sol.featured && (
                      <span className="included-in-solutions__badge">Featured</span>
                    )}
                  </div>

                  {/* Tagline */}
                  <p className="included-in-solutions__card-tagline">{sol.tagline}</p>

                  {/* Included services — highlight the current one */}
                  <p className="included-in-solutions__services-label">Includes:</p>
                  <ul className="included-in-solutions__services-list">
                    {sol.services.map((svcRef) => (
                      <li
                        key={svcRef}
                        className={`included-in-solutions__service-tag${
                          currentRefs.includes(svcRef)
                            ? ' included-in-solutions__service-tag--current'
                            : ''
                        }`}
                      >
                        {currentRefs.includes(svcRef) && <Check size={10} />}
                        {labelForServiceRef(svcRef)}
                      </li>
                    ))}
                  </ul>

                  {/* Pricing hint */}
                  <div className="included-in-solutions__pricing">
                    <span className="included-in-solutions__pricing-label">From</span>
                    <span className="included-in-solutions__pricing-value">
                      {sol.pricing.starting}
                    </span>
                    <span className="included-in-solutions__pricing-label">
                      &middot; {sol.pricing.timeframe}
                    </span>
                  </div>

                  {/* Link arrow */}
                  <span className="included-in-solutions__card-link">
                    View Solution
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
