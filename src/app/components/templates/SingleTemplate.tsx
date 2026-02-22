/**
 * Single Template (Generic Fallback)
 * 
 * WordPress template: templates/single.html
 * 
 * **Purpose:** Generic fallback for single post types without specific templates.
 * In a real WordPress site, this would display any single post type that doesn't
 * have a dedicated template (single-{post-type}.html).
 * 
 * **Usage in React:** This is a placeholder/fallback. Specific content types should use:
 * - Blog posts: SinglePostTemplate
 * - Portfolio: PortfolioSingleTemplate
 * - Services: ServiceDetailTemplate
 * - Solutions: SolutionDetailTemplate
 * 
 * **Pattern Order:**
 * - Breadcrumbs
 * - PageHeader (title + meta)
 * - Content area
 * - CTASection
 * 
 * **Design System:**
 * - 100% CSS variables from theme.css
 * - Lexend for headings/body
 * - Manrope for small text
 * - Tailwind spacing classes
 * 
 * @see {@link /guidelines/templates/single.md}
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../common/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { AlertCircle } from 'lucide-react';

/**
 * SingleTemplate Props
 * 
 * @property {string} title - Page title
 * @property {string} content - Page content (optional)
 */
interface SingleTemplateProps {
  title?: string;
  content?: string;
}

export function SingleTemplate({ 
  title = 'Single Page',
  content 
}: SingleTemplateProps) {
  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: title },
        ]}
      />

      {/* Page Header */}
      <Section spacing="lg">
        <Container>
          <div className="wp-max-w-3xl">
            <Heading level={1} className="wp-mb-6">
              {title}
            </Heading>
            
            {content ? (
              <div className="wp-single-content">
                {content}
              </div>
            ) : (
              <div className="wp-single-empty-state">
                <AlertCircle 
                  size={24}
                  className="wp-single-empty-state__icon"
                />
                <div>
                  <Heading level={3} className="wp-single-empty-state__title">
                    Generic Single Template
                  </Heading>
                  <Paragraph className="wp-single-empty-state__description">
                    This is a fallback template for single pages without a specific template. 
                    For actual content, use dedicated templates like SinglePostTemplate, 
                    PortfolioSingleTemplate, or ServiceDetailTemplate.
                  </Paragraph>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <FunkyCTA
        title="Need a Custom Template?"
        description="We can help you create custom WordPress templates tailored to your specific content types and business needs."
        buttonText="Get Started"
        buttonPage="contact"
        benefits={[
          'Custom post type templates',
          'Block pattern libraries',
          'Full Site Editing support',
          'Accessibility built-in'
        ]}
      />
    </>
  );
}