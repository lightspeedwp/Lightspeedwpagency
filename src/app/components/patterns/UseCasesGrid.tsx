/**
 * Use Cases Grid Pattern
 * 
 * Displays industry-specific use cases with features and tags.
 * Maps to WordPress pattern: lsx-design/content/use-cases
 * 
 * **Design Token Compliance:**
 * - Typography: Uses ONLY CSS variables (var(--text-*), var(--font-*))
 * - Fonts: var(--font-primary) and var(--font-secondary) ONLY
 * - Colors: Uses ONLY CSS variables (var(--*))
 * - Spacing: Uses ONLY CSS variables (var(--spacing-*))
 * - Border Radius: Uses ONLY CSS variables (var(--radius*))
 * 
 * **WordPress Mapping:**
 * - Block: core/group with nested core/columns
 * - Section Style: content-feature
 * - Pattern Slug: lsx-design/content/use-cases
 * 
 * @example
 * ```tsx
 * import { UseCasesGrid } from '../patterns/UseCasesGrid';
 * 
 * <UseCasesGrid
 *   title="Use Cases"
 *   description="See how our solution adapts to different industries"
 *   useCases={[
 *     {
 *       title: "E-commerce",
 *       description: "Build powerful online stores",
 *       industries: ["Retail", "Fashion", "Electronics"],
 *       features: ["Product catalogs", "Payment gateways", "Inventory management"]
 *     }
 *   ]}
 *   columns={2}
 * />
 * ```
 */

import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { CheckCircle } from 'lucide-react';

/**
 * Use Case Item Interface
 */
export interface UseCase {
  /** Use case title */
  title: string;
  /** Use case description */
  description: string;
  /** Relevant industries */
  industries: string[];
  /** Key features */
  features: string[];
}

/**
 * Use Cases Grid Props
 */
export interface UseCasesGridProps {
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Use cases to display */
  useCases: UseCase[];
  /** Number of columns (1, 2, or 3) */
  columns?: 1 | 2 | 3;
  /** Background variant */
  variant?: 'default' | 'muted';
}

/**
 * Use Cases Grid Pattern Component
 * 
 * Displays industry-specific use cases in a responsive grid layout
 * with features, industries, and checkmark icons.
 */
export function UseCasesGrid({
  title = "Use Cases",
  description,
  useCases,
  columns = 2,
  variant = 'default'
}: UseCasesGridProps) {
  // Column class mapping for WordPress utility classes
  const columnClass = columns === 1 
    ? 'wp-grid-1-col' 
    : columns === 2 
    ? 'wp-grid-2-cols' 
    : 'wp-grid-3-cols';

  return (
    <Section 
      spacing="xl" 
      style={{ 
        backgroundColor: variant === 'muted' 
          ? 'var(--muted)' 
          : 'var(--background)' 
      }}
    >
      <Container>
        <div className="wp-max-w-6xl">
          {/* Section Header */}
          {(title || description) && (
            <div 
              className="wp-text-center" 
              style={{ marginBottom: 'var(--spacing-16)' }}
            >
              {title && (
                <h2
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: 'var(--spacing-4)',
                    color: 'var(--foreground)'
                  }}
                >
                  {title}
                </h2>
              )}

              {description && (
                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  {description}
                </p>
              )}
            </div>
          )}

          {/* Use Cases Grid */}
          <div 
            className={columnClass}
            style={{ gap: 'var(--spacing-8)' }}
          >
            {useCases.map((useCase, index) => (
              <div
                key={index}
                style={{
                  padding: 'var(--spacing-8)',
                  backgroundColor: 'var(--card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-soft)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h3)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--foreground)',
                    marginBottom: 'var(--spacing-3)'
                  }}
                >
                  {useCase.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-base)',
                    lineHeight: '1.6',
                    color: 'var(--muted-foreground)',
                    marginBottom: 'var(--spacing-4)'
                  }}
                >
                  {useCase.description}
                </p>

                {/* Industries */}
                {useCase.industries && useCase.industries.length > 0 && (
                  <div style={{ marginBottom: 'var(--spacing-4)' }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-secondary)',
                        fontSize: 'var(--text-small)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--muted-foreground)',
                        marginBottom: 'var(--spacing-2)'
                      }}
                    >
                      Industries:
                    </div>
                    <div 
                      style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: 'var(--spacing-1-5)' 
                      }}
                    >
                      {useCase.industries.map((industry, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: 'var(--text-small)',
                            fontFamily: 'var(--font-secondary)',
                            color: 'var(--primary)',
                            backgroundColor: 'var(--primary-soft)',
                            padding: 'var(--spacing-1) var(--spacing-2-5)',
                            borderRadius: 'var(--radius)',
                            border: '1px solid var(--primary)'
                          }}
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                {useCase.features && useCase.features.length > 0 && (
                  <ul 
                    style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      marginTop: 'auto'
                    }}
                  >
                    {useCase.features.map((feature, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--spacing-2)',
                          marginBottom: 'var(--spacing-2)'
                        }}
                      >
                        <CheckCircle 
                          size={16} 
                          style={{ 
                            color: 'var(--success)', 
                            flexShrink: 0 
                          }} 
                        />
                        <span
                          style={{
                            fontFamily: 'var(--font-primary)',
                            fontSize: 'var(--text-small)',
                            color: 'var(--foreground)'
                          }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
