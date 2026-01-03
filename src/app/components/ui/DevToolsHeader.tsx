/**
 * DevToolsHeader Component
 * 
 * Reusable header component for all developer tools pages.
 * Provides consistent layout, breadcrumbs, title, description, and optional stats.
 * 
 * **Purpose:**
 * - Standardize dev tools page headers
 * - Include breadcrumb navigation automatically
 * - Display page title, description, and stats
 * - Ensure accessibility and SEO optimization
 * 
 * **Features:**
 * - Automatic breadcrumb generation
 * - Responsive stats grid (1-4 stats)
 * - Optional stats section
 * - Centered max-width layout
 * - 100% CSS variables
 * 
 * **Design System:**
 * - Typography: Lexend (headings), Manrope (body)
 * - Colors: CSS variables from theme.css
 * - Spacing: Tailwind classes
 * - WCAG 2.1 AA compliant
 * 
 * @example
 * // Basic usage (no stats)
 * <DevToolsHeader
 *   toolName="Template Tester"
 *   description="Test all WordPress templates and page archetypes"
 * />
 * 
 * @example
 * // With stats
 * <DevToolsHeader
 *   toolName="Component Showcase"
 *   description="Complete component library"
 *   stats={[
 *     { value: '39', label: 'Components' },
 *     { value: '5', label: 'Categories' },
 *     { value: '15', label: 'Patterns' }
 *   ]}
 * />
 * 
 * @see {@link /guidelines/dev-tools/guidelines.md}
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';

/**
 * Single stat card data
 */
export interface StatCardData {
  /**
   * Stat value (number or string)
   * 
   * @example
   * value: "47"
   * 
   * @example
   * value: "100%"
   */
  value: string | number;
  
  /**
   * Stat label/description
   * 
   * @example
   * label: "Total Templates"
   */
  label: string;
}

/**
 * DevToolsHeader component props
 */
interface DevToolsHeaderProps {
  /**
   * Tool name for page title and breadcrumb
   * 
   * **Examples:**
   * - "Template Tester"
   * - "Component Showcase"
   * - "Button Showcase"
   * 
   * @example
   * toolName="Template Tester"
   */
  toolName: string;
  
  /**
   * Tool description (displayed below title)
   * 
   * Keep concise (1-2 sentences max).
   * 
   * @example
   * description="Test all WordPress templates and page archetypes in one place"
   */
  description: string;
  
  /**
   * Optional array of stat cards (1-4 stats recommended)
   * 
   * Displays as responsive grid below description.
   * 
   * @example
   * stats={[
   *   { value: '47', label: 'Total Templates' },
   *   { value: '5', label: 'Archetypes' }
   * ]}
   */
  stats?: StatCardData[];
}

/**
 * DevToolsHeader Component
 * 
 * Renders consistent header for all dev tools pages with breadcrumbs,
 * title, description, and optional stats grid.
 * 
 * @param props - DevToolsHeaderProps
 * @returns Page header section with breadcrumbs and content
 */
export function DevToolsHeader({ 
  toolName, 
  description, 
  stats 
}: DevToolsHeaderProps) {
  return (
    <Section variant="default" spacing="50">
      <Container>
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', page: 'home' },
            { label: 'Dev Tools', page: 'dev-tools' },
            { label: toolName }
          ]}
          className="mb-8"
        />
        
        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h1
            style={{
              fontSize: 'var(--text-h1)',
              fontFamily: 'Lexend, sans-serif',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--foreground)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}
          >
            {toolName}
          </h1>
          
          <p
            style={{
              fontSize: 'var(--text-xl)',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 'var(--font-weight-regular)',
              color: 'var(--muted-foreground)',
              margin: '0 0 48px 0',
              lineHeight: 1.5
            }}
          >
            {description}
          </p>

          {/* Optional Stats Grid */}
          {stats && stats.length > 0 && (
            <div 
              className={`grid gap-8 mb-12 ${
                stats.length === 1 ? 'grid-cols-1 max-w-xs mx-auto' :
                stats.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                stats.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
                'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
              }`}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  style={{
                    padding: '32px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      fontSize: 'var(--text-h1)',
                      fontFamily: 'Lexend, sans-serif',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--primary)',
                      lineHeight: 1,
                      marginBottom: '12px'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--text-base)',
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--muted-foreground)',
                      lineHeight: 1.5
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}

/**
 * WordPress Block Pattern Registration
 * 
 * This is a utility component, not a WordPress block.
 * Used within dev tools templates only.
 */
