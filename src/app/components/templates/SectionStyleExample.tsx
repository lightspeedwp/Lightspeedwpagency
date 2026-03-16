/**
 * Section Style Example Template
 * 
 * Demonstrates WordPress-style section variations (section styles)
 * All styling controlled through CSS, similar to theme.json section styles.
 * 
 * This template shows how section styles work:
 * - Single sectionStyle prop controls ALL child element styling
 * - No inline styles needed for headings, paragraphs, buttons
 * - Consistent with WordPress FSE section style system
 */

import '../../../styles/templates/section-presets-showcase.css';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { Heading } from '../common/Heading';
import { Paragraph } from '../blocks/text/Paragraph';

export function SectionStyleExample() {
  return (
    <>
      <div className="wp-flex-1 wp-flex wp-flex-col">
        {/* Example 1: CTA Primary Style */}
        <Section sectionStyle="cta-primary">
          <Container>
            <div className="section-content-narrow section-content-layer">
              <h2>Ready to transform your WordPress site?</h2>
              
              <p className="lead">
                Get started with our expert WordPress development services today. 
                No credit card required, no commitments.
              </p>
              
              <div className="button-group">
                <Button variant="primary" data-variant="primary" size="lg" page="contact">
                  Get Started Free
                </Button>
                
                <Button variant="outline" data-variant="outline" size="lg" page="portfolio-archive">
                  View Our Work
                </Button>
              </div>
              
              <div className="trust-indicators">
                <span>✓ Free consultation</span>
                <span>✓ Expert guides</span>
                <span>✓ Flexible booking</span>
              </div>
            </div>
          </Container>
        </Section>

        {/* Example 2: CTA Secondary Style */}
        <Section sectionStyle="cta-secondary">
          <Container>
            <div className="section-content-narrow section-content-layer">
              <h2>Need help with WordPress?</h2>
              
              <p className="lead">
                Our team of WordPress experts is here to help you build, optimize, 
                and maintain your website.
              </p>
              
              <div className="button-group">
                <Button variant="primary" size="lg" page="services">
                  Explore Services
                </Button>
                
                <Button variant="outline" size="lg" page="about">
                  Learn More
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Example 3: CTA Accent Style */}
        <Section sectionStyle="cta-accent">
          <Container>
            <div className="section-content-narrow section-content-layer">
              <h2>Limited time offer: 20% off all packages</h2>
              
              <p className="lead">
                Special offer for new clients. Book a consultation this month 
                and save 20% on your first project.
              </p>
              
              <div className="button-group">
                <Button variant="primary" data-variant="primary" size="lg" page="pricing">
                  View Pricing
                </Button>
                
                <Button variant="outline" data-variant="outline" size="lg" page="contact">
                  Contact Us
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Example 4: Standard Section (no section style) */}
        <Section spacing="xl" background="muted">
          <Container>
            <div className="wp-max-w-4xl wp-mx-auto wp-text-center">
              <Heading level={2} className="wp-mb-8">
                This Section Uses Standard Props
              </Heading>
              
              <Paragraph className="wp-text-lead wp-text-muted-foreground wp-mb-10">
                Notice how this section requires utility classes for each element, 
                while the section style examples above don't need any utility classes.
              </Paragraph>
              
              <div className="wp-flex wp-flex-wrap wp-gap-4 wp-justify-center">
                <Button variant="primary" size="lg" page="front-page">
                  Back to Home
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Documentation Section */}
        <Section spacing="xl" background="card">
          <Container>
            <div className="wp-max-w-4xl wp-mx-auto">
              <Heading level={2} className="wp-mb-6 wp-text-3xl">
                How Section Styles Work
              </Heading>
              
              <div className="wp-text-base wp-text-foreground">
                <Paragraph className="wp-mb-4">
                  Section styles are similar to WordPress block theme section styles 
                  defined in <code className="wp-bg-muted wp-p-1 wp-rounded wp-text-sm wp-font-mono">theme.json</code>.
                </Paragraph>
                
                <Heading level={3} className="wp-mt-8 wp-mb-4 wp-text-lg">
                  Benefits:
                </Heading>
                
                <ul className="wp-pl-6 wp-mb-6" style={{ listStyleType: 'disc' }}>
                  <li className="wp-mb-2">
                    <strong>Single source of truth:</strong> All styling in CSS
                  </li>
                  <li className="wp-mb-2">
                    <strong>No inline styles:</strong> Cleaner React components
                  </li>
                  <li className="wp-mb-2">
                    <strong>Easy updates:</strong> Change CSS, update all instances
                  </li>
                  <li className="wp-mb-2">
                    <strong>WordPress-native:</strong> Maps to theme.json patterns
                  </li>
                  <li className="wp-mb-2">
                    <strong>Design system compliance:</strong> Uses CSS variables
                  </li>
                </ul>
                
                <Heading level={3} className="wp-mt-8 wp-mb-4 wp-text-lg">
                  Usage:
                </Heading>
                
                <pre className="wp-bg-muted wp-p-4 wp-rounded wp-overflow-auto wp-font-mono wp-text-sm wp-mb-4">
{`<Section sectionStyle="cta-primary">
  <Container>
    <h2>Your heading</h2>
    <p>Your description</p>
    <Button>Your CTA</Button>
  </Container>
</Section>`}
                </pre>
                
                <Paragraph className="wp-mb-4">
                  All child elements (h2, p, buttons) automatically inherit 
                  the correct styling from the section style CSS.
                </Paragraph>
              </div>
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
}