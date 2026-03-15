/**
 * Case Study Preview Pattern
 * 
 * Case study card preview with metrics and CTA for LSX Design.
 * Maps to WordPress pattern: lsx-design/content/case-study-preview
 * 
 * **Design Token Compliance:**
 * - Uses /src/styles/patterns/case-study-preview.css
 * - 100% CSS variables
 * - BEM naming
 */

import '../../../styles/patterns/case-study-preview.css';
import { ArrowRight, TrendUp } from '@phosphor-icons/react';
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
  
  // Build classes
  const imageClass = isImageLeft 
    ? 'case-study-preview__image--left' 
    : 'case-study-preview__image--right';
    
  const contentClass = isImageLeft 
    ? 'case-study-preview__content--left' 
    : 'case-study-preview__content--right';

  return (
    <div className="case-study-preview">
      <div className="case-study-preview__grid">
        {/* Image */}
        <div className={`case-study-preview__image-wrapper ${imageClass}`}>
          {image ? (
            <img
              src={image}
              alt={`${client} case study`}
              className="case-study-preview__image"
            />
          ) : (
            <div className="case-study-preview__image-placeholder">
              <span className="case-study-preview__placeholder-text">
                Case Study Image
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`case-study-preview__content ${contentClass}`}>
          {/* Industry Badge */}
          <span className="case-study-preview__badge">
            {industry}
          </span>

          {/* Title */}
          <h3 className="case-study-preview__title">
            {title}
          </h3>

          {/* Client */}
          <p className="case-study-preview__client">
            {client}
          </p>

          {/* Description */}
          <p className="case-study-preview__description">
            {description}
          </p>

          {/* Metrics */}
          <div className="case-study-preview__metrics">
            {metrics.map((metric, index) => (
              <div key={index}>
                <div className="case-study-preview__metric-header">
                  <span className="case-study-preview__metric-value">
                    {metric.value}
                  </span>
                  {metric.change && (
                    <TrendUp
                      size={20}
                      className="case-study-preview__metric-icon"
                    />
                  )}
                </div>
                <p className="case-study-preview__metric-label">
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
            className="case-study-preview__button group"
          >
            {ctaText}
            <ArrowRight
              size={20}
              className="case-study-preview__button-arrow group-hover:translate-x-1"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}