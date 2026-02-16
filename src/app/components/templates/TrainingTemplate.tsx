/**
 * Training Template
 * 
 * Page shell for WordPress Training service page.
 * Full content implementation coming soon.
 * 
 * @see /guidelines/templates/overview-templates.md
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Badge } from '../blocks/design/Badge';
import { Card, CardContent } from '../blocks/design/Card';
import '@/styles/templates/service-detail.css';

export function TrainingTemplate() {
  return (
    <>
        {/* Page Hero */}
        <Section spacing="lg" background="muted">
          <Container>
            <div className="wp-text-center wp-max-w-4xl wp-mx-auto">
              <Heading level={1} className="wp-mb-6">
                WordPress Training
              </Heading>
              
              <Paragraph size="lead" align="center" className="wp-mb-8 wp-max-w-3xl wp-mx-auto">
                Professional WordPress training and education services
              </Paragraph>

              <div className="wp-flex wp-justify-center">
                <Badge variant="secondary" size="md">
                  🚧 Page Under Construction
                </Badge>
              </div>
            </div>
          </Container>
        </Section>

        {/* Placeholder Content */}
        <Section spacing="lg">
          <Container>
            <Card className="wp-text-center service-detail__coming-soon">
              <CardContent>
                <Paragraph align="center">
                  Full content for this page is coming soon. Check back later!
                </Paragraph>
              </CardContent>
            </Card>
          </Container>
        </Section>
    </>
  );
}