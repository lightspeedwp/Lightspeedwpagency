/**
 * Content Collection Template
 * 
 * Page shell for Content Collection service page.
 * Full content implementation coming soon.
 * 
 * @see /guidelines/templates/overview-templates.md
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../common/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Badge } from '../blocks/design/Badge';

export function ContentCollectionTemplate() {
  return (
    <>
        {/* Page Hero */}
        <Section background="default" spacing="lg">
          <Container>
            <div className="wp-text-center">
              <Heading level={1} className="wp-mb-4">
                Content Collection
              </Heading>
              
              <Paragraph 
                size="large"
                className="wp-mb-8 wp-max-w-2xl wp-mx-auto"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Professional content gathering and curation services
              </Paragraph>

              {/* Coming Soon Badge */}
              <div className="wp-inline-flex wp-items-center wp-justify-center">
                <Badge variant="secondary">
                   🚧 Page Under Construction
                </Badge>
              </div>
            </div>
          </Container>
        </Section>

        {/* Placeholder Content */}
        <Section background="default" spacing="lg">
          <Container>
            <div
              className="wp-text-center"
              style={{
                padding: 'var(--spacing-12)',
                backgroundColor: 'var(--card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
              }}
            >
              <Paragraph>
                Full content for this page is coming soon. Check back later!
              </Paragraph>
            </div>
          </Container>
        </Section>
    </>
  );
}