/**
 * DefinitionBlock Pattern
 * 
 * WordPress pattern: lsx-design/content/definition-block
 * 
 * Structured content pattern for Systems pages using "What / Why / How / Proof" framework.
 * Maps to WordPress Group block with constrained editing.
 * 
 * **Structure:**
 * - What: Definition and core concept
 * - Why: Business value and importance
 * - How: Implementation approach
 * - Proof: Evidence and validation
 * 
 * **Usage:**
 * Used on Systems hub pages to explain each system pillar with consistent structure.
 * 
 * @see /guidelines/patterns/DefinitionBlock.md
 */

import '@/styles/patterns/definition-block.css';

export interface DefinitionSection {
  /** Section heading (What/Why/How/Proof) */
  heading: string;
  /** Section content (can include HTML) */
  content: string;
  /** Optional list of bullet points */
  items?: string[];
}

export interface DefinitionBlockProps {
  /** System name or topic */
  title: string;
  /** Optional tagline or subtitle */
  tagline?: string;
  /** Four definition sections */
  sections: [DefinitionSection, DefinitionSection, DefinitionSection, DefinitionSection];
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * DefinitionBlock Component
 * 
 * Renders a structured "What/Why/How/Proof" content block for Systems pages.
 * Uses BEM naming and CSS variables for complete design system compliance.
 */
export const DefinitionBlock = ({
  title,
  tagline,
  sections,
  className = ''
}: DefinitionBlockProps) => {
  return (
    <div className={`definition-block ${className}`}>
      <div className="definition-block__container">
        {/* Header */}
        {(title || tagline) && (
          <header className="definition-block__header">
            {title && (
              <h2 
                className="definition-block__title wp-font-primary wp-text-h2 wp-font-semibold wp-text-foreground"
              >
                {title}
              </h2>
            )}
            {tagline && (
              <p 
                className="definition-block__tagline wp-font-secondary wp-text-lg wp-text-muted-foreground"
              >
                {tagline}
              </p>
            )}
          </header>
        )}

        {/* Sections Grid */}
        <div className="definition-block__sections">
          {sections.map((section, index) => (
            <section 
              key={index} 
              className="definition-block__section"
              aria-labelledby={`definition-section-${index}`}
            >
              {/* Section Heading */}
              <h3 
                id={`definition-section-${index}`}
                className="definition-block__section-heading wp-font-primary wp-text-h4 wp-font-semibold wp-text-primary"
              >
                {section.heading}
              </h3>

              {/* Section Content */}
              <div 
                className="definition-block__section-content wp-font-secondary wp-text-base wp-text-foreground"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />

              {/* Optional Items List */}
              {section.items && section.items.length > 0 && (
                <ul 
                  className="definition-block__section-items wp-font-secondary wp-text-base wp-text-foreground"
                >
                  {section.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="definition-block__section-item"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
