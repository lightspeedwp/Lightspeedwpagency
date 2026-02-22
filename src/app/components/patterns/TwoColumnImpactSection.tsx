/**
 * Two-Column Impact Section Pattern
 * 
 * WordPress pattern: lsx-design/content/two-column-impact
 * 
 * Two-column layout with icon features on left and content box on right.
 * Commonly used on service pages to highlight key benefits and approach.
 * 
 * @see {@link /guidelines/patterns/TwoColumnImpactSection.md}
 */

import { LucideIcon } from 'lucide-react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { IconFeaturesList, IconFeature } from './IconFeaturesList';


export interface ContentBox {
  /** Main content text */
  content: string;
  /** Text to highlight (will be bolded) */
  highlightStart?: string;
}

export interface ImagePlaceholder {
  /** Placeholder icon */
  icon: LucideIcon;
  /** Placeholder label */
  label: string;
}

export interface TwoColumnImpactSectionProps {
  /** Section title */
  title: string;
  /** Left column: Icon features list */
  features: IconFeature[];
  /** Right column: Content box */
  contentBox?: ContentBox;
  /** Right column: Image placeholder */
  imagePlaceholder?: ImagePlaceholder;
  /** Background color */
  backgroundColor?: string;
  /** Section spacing */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  /** Reverse column order */
  reverseColumns?: boolean;
}

export function TwoColumnImpactSection({
  title,
  features,
  contentBox,
  imagePlaceholder,
  backgroundColor = 'var(--background)',
  spacing = 'xl',
  reverseColumns = false
}: TwoColumnImpactSectionProps) {
  const Icon = imagePlaceholder?.icon;

  // Split content text to highlight the start
  const renderContent = () => {
    if (!contentBox) return null;

    const { content, highlightStart } = contentBox;

    if (!highlightStart) {
      return (
        <p className="impact-section__text">
          {content}
        </p>
      );
    }

    // Split content at highlightStart
    const parts = content.split(highlightStart);
    
    return (
      <p className="impact-section__text">
        <strong className="impact-section__highlight">{highlightStart}</strong>
        {parts[1]}
      </p>
    );
  };

  return (
    <Section spacing={spacing} style={{ backgroundColor }}>
      <Container>
        <div 
          className={`impact-section__grid ${reverseColumns ? 'impact-section__grid--reverse' : ''}`}
          style={{ 
            flexDirection: reverseColumns ? 'row-reverse' : 'row'
          }}
        >
          {/* Left Column: Title + Features */}
          <div style={{ order: reverseColumns ? 2 : 1 }}>
            <h2 className="impact-section__title">
              {title}
            </h2>

            <IconFeaturesList features={features} iconSize={24} iconBoxSize={48} gap="md" />
          </div>

          {/* Right Column: Content Box + Image */}
          <div style={{ order: reverseColumns ? 1 : 2 }}>
            {/* Content Box */}
            {contentBox && (
              <div className="impact-section__content-box">
                {renderContent()}
              </div>
            )}

            {/* Image Placeholder */}
            {imagePlaceholder && Icon && (
              <div className="impact-section__image-placeholder">
                <div className="impact-section__placeholder-content">
                  <Icon 
                    size={64} 
                    className="impact-section__placeholder-icon"
                  />
                  <p className="impact-section__placeholder-label">
                    {imagePlaceholder.label}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
