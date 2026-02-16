/**
 * Content Audit Template
 * 
 * WordPress template: templates/page-content-audit.html
 * 
 * Sub-service page for Content Audit.
 * 
 * @see /guidelines/templates/overview-templates.md
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { CTASection } from '../patterns/CTASection';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { FileSearch, CheckCircle, BarChart } from 'lucide-react';
import { contentServiceDetailed } from '../../data/services-detailed';

export function ContentAuditTemplate() {
  const serviceData = contentServiceDetailed.subServices.find(s => s.id === 'content-audit');
  
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
                { label: 'Content Audit' }
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
                Content Audit
              </Heading>
              
              <Paragraph 
                size="lead"
                align="center"
                className="wp-mb-8 wp-max-w-2xl wp-mx-auto wp-text-muted-foreground"
              >
                {serviceData?.description || 'Comprehensive content analysis and optimization services'}
              </Paragraph>
            </div>
          </Container>
        </Section>

        {/* Benefits Grid */}
        <Section spacing="xl">
          <Container>
            <div className="wp-grid-3-cols wp-gap-8">
              <div className="wp-block-group wp-p-8 wp-bg-card wp-rounded-lg wp-border wp-border-border">
                <FileSearch size={32} className="wp-text-primary wp-mb-4" />
                <Heading level={3} className="wp-mb-3">Inventory Analysis</Heading>
                <Paragraph>
                  We catalog all existing content assets to understand what you have, where it lives, and how it performs.
                </Paragraph>
              </div>
              <div className="wp-block-group wp-p-8 wp-bg-card wp-rounded-lg wp-border wp-border-border">
                <CheckCircle size={32} className="wp-text-primary wp-mb-4" />
                <Heading level={3} className="wp-mb-3">Quality Assessment</Heading>
                <Paragraph>
                  Evaluate content against brand guidelines, SEO best practices, and user needs to identify gaps and opportunities.
                </Paragraph>
              </div>
              <div className="wp-block-group wp-p-8 wp-bg-card wp-rounded-lg wp-border wp-border-border">
                <BarChart size={32} className="wp-text-primary wp-mb-4" />
                <Heading level={3} className="wp-mb-3">Performance Data</Heading>
                <Paragraph>
                  Map analytics data to content items to determine what drives traffic, engagement, and conversion.
                </Paragraph>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <CTASection
          title="Ready to optimize your content?"
          description="Get a comprehensive audit of your website content and a roadmap for improvement."
          primaryButtonText="Request an Audit"
          primaryButtonPage="contact"
        />
    </>
  );
}