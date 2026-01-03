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
    <div 
      style={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)'
      }}
    >
      {/* Skip Link for Accessibility */}
      <SkipLink targetId="main-content" />

      {/* Site Header */}
      <SiteHeader />

      {/* Main Content */}
      <main 
        id="main-content" 
        role="main"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Breadcrumbs */}
        <section 
          className="py-4"
          style={{
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border-soft)',
          }}
        >
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
        <Section spacing="lg" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-3xl mx-auto">
              <Heading level={1} style={{ marginBottom: '24px' }}>
                {title}
              </Heading>
              
              {content ? (
                <div 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    color: 'var(--foreground)',
                    lineHeight: '1.7',
                  }}
                >
                  {content}
                </div>
              ) : (
                <div 
                  className="flex items-start gap-3 p-6"
                  style={{
                    backgroundColor: 'var(--muted)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <AlertCircle 
                    size={24}
                    style={{ 
                      color: 'var(--muted-foreground)',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  />
                  <div>
                    <p 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--foreground)',
                        marginBottom: '8px',
                      }}
                    >
                      Generic Single Template
                    </p>
                    <p 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--muted-foreground)',
                        lineHeight: '1.6',
                        margin: 0,
                      }}
                    >
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