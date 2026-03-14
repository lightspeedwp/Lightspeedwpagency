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

import type { UniversalIcon } from '../../utils/icon-map';
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
  icon: UniversalIcon;
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
  background?: 'default' | 'card' | 'muted' | 'transparent';
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
  background = 'default',
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
    <Section spacing={spacing} background={background as any}>
      <Container>
        <div 
          className={`impact-section__grid ${reverseColumns ? 'impact-section__grid--reverse' : ''}`}
        >
          {/* Left Column: Title + Features */}
          <div className={`impact-section__col ${reverseColumns ? 'impact-section__col--last' : 'impact-section__col--first'}`}>
            <h2 className="impact-section__title">
              {title}
            </h2>

            <IconFeaturesList features={features} iconSize={24} iconBoxSize={48} gap="md" />
          </div>

          {/* Right Column: Content Box + Image */}
          <div className={`impact-section__col ${reverseColumns ? 'impact-section__col--first' : 'impact-section__col--last'}`}>
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