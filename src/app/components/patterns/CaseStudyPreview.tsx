/**
 * Case Study Preview Pattern
 * 
 * WordPress Pattern: lsx-design/content/case-study-preview
 * 
 * Featured case study highlights with results and key metrics.
 * Maps to WordPress Group block with Media & Text blocks.
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @see /guidelines/patterns/CaseStudyPreview.md
 */

import { ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '../blocks/design/Buttons';

export interface CaseStudyMetric {
  label: string;
  value: string;
  change?: string;
}

export interface CaseStudyPreviewProps {
  /** Case study title */
  title: string;
  /** Client/Company name */
  client: string;
  /** Industry */
  industry: string;
  /** Brief description */
  description: string;
  /** Featured image URL */
  image?: string;
  /** Key metrics/results */
  metrics: CaseStudyMetric[];
  /** CTA button text */
  ctaText?: string;
  /** Link to full case study (slug) */
  ctaLink: string;
  /** Image position (default: 'left') */
  imagePosition?: 'left' | 'right';
}

export function CaseStudyPreview({
  title,
  client,
  industry,
  description,
  image,
  metrics,
  ctaText = "View Case Study",
  ctaLink,
  imagePosition = 'left',
}: CaseStudyPreviewProps) {
  const isImageLeft = imagePosition === 'left';

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isImageLeft ? 'lg:flex-row-reverse' : ''}`}
      style={{
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-xl)',
        padding: '48px',
      }}
    >
      {/* Image */}
      <div
        className={isImageLeft ? 'lg:order-1' : 'lg:order-2'}
        style={{
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          backgroundColor: 'var(--muted)',
        }}
      >
        {image ? (
          <img
            src={image}
            alt={`${client} case study`}
            style={{
              width: '100%',
              height: 'auto',
              aspectRatio: '16 / 9',
              objectFit: 'cover',
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              aspectRatio: '16 / 9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--muted)',
            }}
          >
            <span
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                color: 'var(--muted-foreground)',
              }}
            >
              Case Study Image
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={isImageLeft ? 'lg:order-2' : 'lg:order-1'}>
        {/* Industry Badge */}
        <span
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-small)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--primary)',
            backgroundColor: 'var(--primary-soft)',
            padding: '6px 12px',
            borderRadius: 'var(--radius)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            display: 'inline-block',
            marginBottom: '16px',
          }}
        >
          {industry}
        </span>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-h3)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--foreground)',
            marginBottom: '8px',
          }}
        >
          {title}
        </h3>

        {/* Client */}
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-lg)',
            color: 'var(--muted-foreground)',
            marginBottom: '16px',
          }}
        >
          {client}
        </p>

        {/* Description */}
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-base)',
            lineHeight: '1.7',
            color: 'var(--foreground)',
            marginBottom: '32px',
          }}
        >
          {description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="flex items-center gap-2 mb-2">
                <span
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h3)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--primary)',
                  }}
                >
                  {metric.value}
                </span>
                {metric.change && (
                  <TrendingUp
                    size={20}
                    style={{ color: 'var(--success)', flexShrink: 0 }}
                  />
                )}
              </div>
              <p
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'var(--text-small)',
                  color: 'var(--muted-foreground)',
                }}
              >
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          page={ctaLink}
          variant="default"
          size="lg"
          className="group"
        >
          {ctaText}
          <ArrowRight
            size={20}
            style={{
              marginLeft: '8px',
              transition: 'transform var(--transition-base)',
            }}
            className="group-hover:translate-x-1"
          />
        </Button>
      </div>
    </div>
  );
}
