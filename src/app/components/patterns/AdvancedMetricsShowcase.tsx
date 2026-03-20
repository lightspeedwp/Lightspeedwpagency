/**
 * Advanced Metrics Showcase Components
 *
 * Specialized metric displays for different categories:
 * - Performance Delta
 * - Enterprise Scale
 * - SEO Continuity
 * - Longevity & Trust
 * - Editor Efficiency
 *
 * Each component can be embedded in relevant service pages.
 *
 * Features:
 * - 100% CSS variable compliance
 * - Phosphor Icons (duotone weight)
 * - WCAG 2.2 AA accessible
 * - Sentence case labels
 * - Responsive grid layouts
 */

import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { StatsGrid } from './StatsGrid';
import {
  performanceDeltaMetrics,
  enterpriseScaleMetrics,
  seoContinuityMetrics,
  longevityTrustMetrics,
  editorEfficiencyMetrics,
} from '../../data/stats/advanced-metrics';

interface MetricsShowcaseProps {
  heading?: string;
  description?: string;
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'cards' | 'inline' | 'compact';
  className?: string;
}

/**
 * Performance Delta Metrics
 *
 * Shows speed improvements and Core Web Vitals enhancements.
 * Perfect for Performance service page.
 */
export function PerformanceDeltaMetrics({
  heading = 'Performance improvements',
  description = 'Average speed and Core Web Vitals improvements across client sites after optimization',
  columns = 4,
  variant = 'cards',
  className = '',
}: MetricsShowcaseProps) {
  const transformedStats = performanceDeltaMetrics.map((stat) => ({
    number: stat.value,
    label: stat.label,
    description: stat.description,
    icon: stat.icon,
  }));

  return (
    <Section className={`performance-delta-metrics ${className}`}>
      <Container>
        {heading && (
          <div className="metrics-showcase__header">
            <Heading level={2}>{heading}</Heading>
            {description && <Paragraph>{description}</Paragraph>}
          </div>
        )}
        <StatsGrid stats={transformedStats} columns={columns} variant={variant} />
      </Container>
    </Section>
  );
}

/**
 * Enterprise Scale Metrics
 *
 * Showcases large-scale migrations and data handling capabilities.
 * Perfect for Migrations and Hosting service pages.
 */
export function EnterpriseScaleMetrics({
  heading = 'Enterprise scale',
  description = 'Proven capability to handle large-scale WordPress migrations and high-traffic sites',
  columns = 4,
  variant = 'cards',
  className = '',
}: MetricsShowcaseProps) {
  const transformedStats = enterpriseScaleMetrics.map((stat) => ({
    number: stat.value,
    label: stat.label,
    description: stat.description,
    icon: stat.icon,
  }));

  return (
    <Section className={`enterprise-scale-metrics ${className}`}>
      <Container>
        {heading && (
          <div className="metrics-showcase__header">
            <Heading level={2}>{heading}</Heading>
            {description && <Paragraph>{description}</Paragraph>}
          </div>
        )}
        <StatsGrid stats={transformedStats} columns={columns} variant={variant} />
      </Container>
    </Section>
  );
}

/**
 * SEO Continuity Metrics
 *
 * Demonstrates redirect management and SEO preservation during migrations.
 * Perfect for Migrations and SEO service pages.
 */
export function SEOContinuityMetrics({
  heading = 'SEO continuity',
  description = 'Preserving search rankings and traffic during migrations with comprehensive redirect strategies',
  columns = 4,
  variant = 'cards',
  className = '',
}: MetricsShowcaseProps) {
  const transformedStats = seoContinuityMetrics.map((stat) => ({
    number: stat.value,
    label: stat.label,
    description: stat.description,
    icon: stat.icon,
  }));

  return (
    <Section className={`seo-continuity-metrics ${className}`}>
      <Container>
        {heading && (
          <div className="metrics-showcase__header">
            <Heading level={2}>{heading}</Heading>
            {description && <Paragraph>{description}</Paragraph>}
          </div>
        )}
        <StatsGrid stats={transformedStats} columns={columns} variant={variant} />
      </Container>
    </Section>
  );
}

/**
 * Longevity & Trust Metrics
 *
 * Highlights years in business, client retention, and WordPress evolution expertise.
 * Perfect for About page and Company overview.
 */
export function LongevityTrustMetrics({
  heading = 'Longevity & trust',
  description = '17+ years guiding WordPress clients through every major platform evolution',
  columns = 4,
  variant = 'cards',
  className = '',
}: MetricsShowcaseProps) {
  const transformedStats = longevityTrustMetrics.map((stat) => ({
    number: stat.value,
    label: stat.label,
    description: stat.description,
    icon: stat.icon,
  }));

  return (
    <Section className={`longevity-trust-metrics ${className}`}>
      <Container>
        {heading && (
          <div className="metrics-showcase__header">
            <Heading level={2}>{heading}</Heading>
            {description && <Paragraph>{description}</Paragraph>}
          </div>
        )}
        <StatsGrid stats={transformedStats} columns={columns} variant={variant} />
      </Container>
    </Section>
  );
}

/**
 * Editor Efficiency Metrics
 *
 * Shows workflow improvements and publishing time reductions with block themes.
 * Perfect for Development and Content services pages.
 */
export function EditorEfficiencyMetrics({
  heading = 'Editor efficiency',
  description = 'Publishing workflow improvements when migrating from page builders to block themes',
  columns = 4,
  variant = 'cards',
  className = '',
}: MetricsShowcaseProps) {
  const transformedStats = editorEfficiencyMetrics.map((stat) => ({
    number: stat.value,
    label: stat.label,
    description: stat.description,
    icon: stat.icon,
  }));

  return (
    <Section className={`editor-efficiency-metrics ${className}`}>
      <Container>
        {heading && (
          <div className="metrics-showcase__header">
            <Heading level={2}>{heading}</Heading>
            {description && <Paragraph>{description}</Paragraph>}
          </div>
        )}
        <StatsGrid stats={transformedStats} columns={columns} variant={variant} />
      </Container>
    </Section>
  );
}