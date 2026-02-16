/**
 * Email Marketing Template
 * 
 * Page shell for Email Marketing service page.
 * Full content implementation coming soon.
 * 
 * @see /guidelines/templates/overview-templates.md
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../common/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Hero } from '../patterns/Hero';
import '@/styles/templates/service-detail.css';

export function EmailMarketingTemplate() {
  return (
    <>
        {/* Page Hero */}
        <Hero
          variant="default"
          align="center"
          title="Email Marketing"
          description="Strategic email campaigns that drive engagement and conversions"
          gradient="blue"
        />

        {/* Placeholder Content */}
        <Section background="default" spacing="lg">
          <Container>
            <div className="service-detail__coming-soon">
              <Paragraph>
                Full content for this page is coming soon. Check back later!
              </Paragraph>
              <div className="service-detail__coming-soon-badge">
                🚧 Page Under Construction
              </div>
            </div>
          </Container>
        </Section>
    </>
  );
}