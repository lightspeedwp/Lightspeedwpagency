/**
 * Content Strategy Template
 * 
 * WordPress template: templates/page-content-strategy.html
 * 
 * Sub-service page for Content Strategy.
 * 
 * @see /guidelines/templates/overview-templates.md
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { CTASection } from '../patterns/CTASection';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Map, Target, Users } from 'lucide-react';
import { contentServiceDetailed } from '../../data/services-detailed';

export function ContentStrategyTemplate() {
  const serviceData = contentServiceDetailed.subServices.find(s => s.id === 'content-strategy');
  
  return (
    <>
        {/* Breadcrumbs */}
        <Section className="wp-bg-muted wp-py-4">
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', page: 'front-page' },
                { label: 'Services', page: 'services' },
                { label: 'Content', page: 'content-service' },
                { label: 'Content Strategy' }
              ]}
            />
          </Container>
        </Section>

        {/* Page Hero */}
        <Section background="default" className="wp-py-12 md:wp-py-20">
          <Container>
            <div className="wp-text-center wp-max-w-4xl wp-mx-auto">
              <span className="wp-badge wp-badge--primary wp-mb-4">
                Service
              </span>
              <Heading level={1} align="center" className="wp-mb-6">
                Content Strategy
              </Heading>
              
              <Paragraph 
                size="lead"
                align="center"
                className="wp-mb-8 wp-max-w-2xl wp-mx-auto wp-text-muted-foreground"
              >
                {serviceData?.description || 'Strategic content planning and implementation services'}
              </Paragraph>
            </div>
          </Container>
        </Section>

        {/* Benefits Grid */}
        <Section spacing="xl">
          <Container>
            <div className="wp-grid-3-cols wp-gap-8">
              <div className="wp-block-group wp-p-8 wp-bg-card wp-rounded-lg wp-border wp-border-border">
                <Map size={32} className="wp-text-primary wp-mb-4" />
                <Heading level={3} className="wp-mb-3">Roadmap Development</Heading>
                <Paragraph>
                  Create a clear path forward for your content ecosystem, defining channels, formats, and publishing cadences.
                </Paragraph>
              </div>
              <div className="wp-block-group wp-p-8 wp-bg-card wp-rounded-lg wp-border wp-border-border">
                <Target size={32} className="wp-text-primary wp-mb-4" />
                <Heading level={3} className="wp-mb-3">Goal Alignment</Heading>
                <Paragraph>
                  Ensure every piece of content serves a specific business objective and user need, eliminating waste.
                </Paragraph>
              </div>
              <div className="wp-block-group wp-p-8 wp-bg-card wp-rounded-lg wp-border wp-border-border">
                <Users size={32} className="wp-text-primary wp-mb-4" />
                <Heading level={3} className="wp-mb-3">Audience Targeting</Heading>
                <Paragraph>
                  Define detailed personas and user journeys to deliver the right message to the right person at the right time.
                </Paragraph>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <CTASection
          title="Develop a winning strategy"
          description="Let's build a content strategy that drives measurable results for your business."
          primaryButtonText="Start Strategy Session"
          primaryButtonPage="contact"
        />
    </>
  );
}