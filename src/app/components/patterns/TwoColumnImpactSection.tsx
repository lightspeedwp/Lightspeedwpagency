/**
 * Two-Column Impact Section Pattern
 * 
 * WordPress pattern: lsx-design/content/two-column-impact
 * 
 * Two-column layout with icon features on left and content box on right.
 * Commonly used on service pages to highlight key benefits and approach.
 * 
 * **Usage:**
 * ```tsx
 * <TwoColumnImpactSection
 *   title="Empower your content's impact"
 *   features={[
 *     {
 *       icon: Zap,
 *       title: 'Uncertain about your initial steps?',
 *       description: 'We provide clear guidance...'
 *     }
 *   ]}
 *   contentBox={{
 *     content: 'At LightSpeed, we follow a three-tiered approach...',
 *     highlightStart: 'At LightSpeed, we follow a three-tiered approach:'
 *   }}
 *   imagePlaceholder={{
 *     icon: FileText,
 *     label: 'Content Strategy Workshop'
 *   }}
 * />
 * ```
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
        <p className="font-primary text-lg leading-relaxed" style={{ color: 'var(--foreground)' }}>
          {content}
        </p>
      );
    }

    // Split content at highlightStart
    const parts = content.split(highlightStart);
    
    return (
      <p className="font-primary text-lg leading-relaxed" style={{ color: 'var(--foreground)' }}>
        <strong className="font-bold">{highlightStart}</strong>
        {parts[1]}
      </p>
    );
  };

  return (
    <Section spacing={spacing} style={{ backgroundColor }}>
      <Container>
        <div 
          className="wp-grid-2-cols"
          style={{ 
            alignItems: 'center',
            flexDirection: reverseColumns ? 'row-reverse' : 'row'
          }}
        >
          {/* Left Column: Title + Features */}
          <div>
            <h2
              className="font-primary text-h1 font-bold tracking-tight"
              style={{
                lineHeight: '1.2',
                marginBottom: 'var(--spacing-8)',
                color: 'var(--foreground)'
              }}
            >
              {title}
            </h2>

            <IconFeaturesList features={features} iconSize={24} iconBoxSize={48} gap="md" />
          </div>

          {/* Right Column: Content Box + Image */}
          <div>
            {/* Content Box */}
            {contentBox && (
              <div
                style={{
                  backgroundColor: 'var(--primary-soft)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--spacing-8)',
                  marginBottom: 'var(--spacing-6)'
                }}
              >
                {renderContent()}
              </div>
            )}

            {/* Image Placeholder */}
            {imagePlaceholder && Icon && (
              <div
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--muted)',
                  aspectRatio: '16/9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{ textAlign: 'center', padding: 'var(--spacing-10)' }}>
                  <Icon 
                    size={64} 
                    style={{ 
                      color: 'var(--muted-foreground)', 
                      margin: '0 auto var(--spacing-4)' 
                    }} 
                  />
                  <p className="font-primary text-base" style={{ color: 'var(--muted-foreground)' }}>
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
