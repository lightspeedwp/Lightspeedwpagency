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

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { BackToTopButton } from '../ui/BackToTopButton';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';

export function SectionStyleExample() {
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
        {/* Example 1: CTA Primary Style */}
        <Section sectionStyle="cta-primary">
          <Container>
            <div className="section-content-narrow section-content-layer">
              <h2>Ready to Transform Your WordPress Site?</h2>
              
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
              <h2>Need Help with WordPress?</h2>
              
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
              <h2>Limited Time Offer: 20% Off All Packages</h2>
              
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
            <div className="max-w-4xl mx-auto text-center">
              <h2 style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h2)',
                fontWeight: 500,
                color: 'var(--foreground)',
                marginBottom: '2rem'
              }}>
                This Section Uses Standard Props
              </h2>
              
              <p style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-lead)',
                color: 'var(--muted-foreground)',
                marginBottom: '2.5rem'
              }}>
                Notice how this section requires inline styles for each element, 
                while the section style examples above don't need any inline styles.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
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
            <div className="max-w-4xl mx-auto">
              <h2 style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h3)',
                fontWeight: 500,
                color: 'var(--foreground)',
                marginBottom: '1.5rem'
              }}>
                How Section Styles Work
              </h2>
              
              <div style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                color: 'var(--foreground)',
                lineHeight: 1.7
              }}>
                <p style={{ marginBottom: '1rem' }}>
                  Section styles are similar to WordPress block theme section styles 
                  defined in <code style={{ 
                    fontFamily: 'monospace',
                    backgroundColor: 'var(--muted)',
                    padding: '2px 6px',
                    borderRadius: 'var(--radius)',
                    fontSize: '0.9em'
                  }}>theme.json</code>.
                </p>
                
                <h3 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 500,
                  marginTop: '2rem',
                  marginBottom: '1rem'
                }}>
                  Benefits:
                </h3>
                
                <ul style={{ 
                  marginLeft: '1.5rem',
                  marginBottom: '1.5rem',
                  listStyleType: 'disc'
                }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <strong>Single source of truth:</strong> All styling in CSS
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <strong>No inline styles:</strong> Cleaner React components
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <strong>Easy updates:</strong> Change CSS, update all instances
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <strong>WordPress-native:</strong> Maps to theme.json patterns
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <strong>Design system compliance:</strong> Uses CSS variables
                  </li>
                </ul>
                
                <h3 style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 500,
                  marginTop: '2rem',
                  marginBottom: '1rem'
                }}>
                  Usage:
                </h3>
                
                <pre style={{
                  backgroundColor: 'var(--muted)',
                  padding: '1rem',
                  borderRadius: 'var(--radius)',
                  overflow: 'auto',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  marginBottom: '1rem'
                }}>
{`<Section sectionStyle="cta-primary">
  <Container>
    <h2>Your Heading</h2>
    <p>Your description</p>
    <Button>Your CTA</Button>
  </Container>
</Section>`}
                </pre>
                
                <p style={{ marginBottom: '1rem' }}>
                  All child elements (h2, p, buttons) automatically inherit 
                  the correct styling from the section style CSS.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      {/* Site Footer */}
      <SiteFooter />

      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  );
}