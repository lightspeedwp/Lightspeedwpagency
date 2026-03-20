/**
 * Aggregated Metrics Banner Component
 *
 * Displays company-wide aggregated metrics in a prominent banner format.
 * Perfect for homepage hero sections or about page overviews.
 *
 * Features:
 * - Responsive grid layout (2-4 columns)
 * - Phosphor Icons (duotone weight)
 * - 100% CSS variable compliance
 * - WCAG 2.2 AA accessible
 * - Sentence case labels
 *
 * @see /src/styles/patterns/aggregated-metrics-banner.css
 */

import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { StatsGrid } from './StatsGrid';
import { aggregatedCompanyMetrics } from '../../data/stats/advanced-metrics';
import '@/styles/patterns/aggregated-metrics-banner.css';

export interface AggregatedMetricsBannerProps {
  /** Optional custom heading */
  heading?: string;
  /** Optional description */
  description?: string;
  /** Number of columns (defaults to 4) */
  columns?: 2 | 3 | 4;
  /** Visual variant */
  variant?: 'default' | 'cards' | 'inline';
  /** Optional custom stats (defaults to aggregatedCompanyMetrics) */
  stats?: Array<{
    value: string;
    label: string;
    icon: any;
    description?: string;
  }>;
}

/**
 * AggregatedMetricsBanner Component
 *
 * Displays company-wide metrics showcasing overall achievements.
 * Uses the centralized aggregatedCompanyMetrics by default.
 *
 * @example
 * ```tsx
 * <AggregatedMetricsBanner
 *   heading="Trusted by industry leaders"
 *   description="Real results from real projects"
 *   columns={4}
 *   variant="cards"
 * />
 * ```
 */
export function AggregatedMetricsBanner({
  heading = 'By the numbers',
  description = 'Real results from 17+ years of WordPress engineering excellence',
  columns = 4,
  variant = 'cards',
  stats = aggregatedCompanyMetrics,
}: AggregatedMetricsBannerProps) {
  // Transform stats format from value/label to number/label for StatsGrid
  const transformedStats = stats.map((stat) => ({
    number: stat.value,
    label: stat.label,
    description: stat.description,
    icon: stat.icon,
  }));

  return (
    <Section className="aggregated-metrics-banner">
      <Container>
        <div className="aggregated-metrics-banner__header">
          <Heading level={2} className="aggregated-metrics-banner__heading">
            {heading}
          </Heading>
          {description && (
            <Paragraph className="aggregated-metrics-banner__description">
              {description}
            </Paragraph>
          )}
        </div>

        <StatsGrid stats={transformedStats} columns={columns} variant={variant} />
      </Container>
    </Section>
  );
}