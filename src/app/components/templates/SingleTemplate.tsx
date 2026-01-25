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

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../common/Heading';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { CTASection } from '../patterns/CTASection';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
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
    <div className="wp-single-page-wrapper">
      {/* Skip Link for Accessibility */}
      <SkipLink targetId="main-content" />

      {/* Site Header */}
      <SiteHeader />

      {/* Main Content */}
      <main 
        id="main-content" 
        role="main"
        className="wp-single-main"
      >
        {/* Breadcrumbs */}
        <section className="wp-single-breadcrumbs">
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', page: 'front-page' },
                { label: title }
              ]}
            />
          </Container>
        </section>

        {/* Page Header */}
        <Section spacing="lg">
          <Container>
            <div className="wp-max-w-3xl">
              <Heading level={1} className="mb-6">
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
                    <p className="wp-single-empty-state__title">
                      Generic Single Template
                    </p>
                    <p className="wp-single-empty-state__description">
                      This is a fallback template for single pages without a specific template. 
                      For actual content, use dedicated templates like SinglePostTemplate, 
                      PortfolioSingleTemplate, or ServiceDetailTemplate.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <CTASection
          title="Need a Custom Template?"
          description="We can help you create custom WordPress templates tailored to your specific content types and business needs."
          primaryButton={{
            text: 'Get Started',
            page: 'contact'
          }}
          secondaryButton={{
            text: 'View Services',
            page: 'services'
          }}
        />
      </main>

      {/* Site Footer */}
      <SiteFooter />

      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  );
}