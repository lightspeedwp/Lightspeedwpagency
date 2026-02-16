/**
 * Header/Footer Comparison
 * 
 * Compare header and footer template variations side by side.
 * 
 * **Design System:**
 * - 100% CSS variables from theme.css
 * - WCAG 2.1 AA compliant
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';

import { Breadcrumbs } from '../common/Breadcrumbs';
import { Heading } from '../common/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Layout } from 'lucide-react';
import '@/styles/templates/component-showcase.css';

export function HeaderFooterComparison() {
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
      <div style={{ flex: 1 }}>
        <Section background="default" spacing="lg">
          <Container>
            <Breadcrumbs
              items={[
                { label: 'Home', page: 'home' },
                { label: 'Developer Tools', page: 'dev-tools' },
                { label: 'Header/Footer Comparison' }
              ]}
              className="wp-mb-8"
            />

            <div className="wp-text-center wp-max-w-4xl wp-mx-auto">
              <div
                className="wp-inline-flex wp-items-center wp-justify-center"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'var(--primary)',
                  marginBottom: 'var(--spacing-6)'
                }}
              >
                <Layout size={40} style={{ color: 'var(--primary-foreground)' }} />
              </div>

              <Heading level={1} className="wp-mb-4">
                Header/Footer Comparison
              </Heading>

              <Paragraph className="showcase__subtitle" style={{ margin: 0 }}>
                Compare header and footer template variations
              </Paragraph>
            </div>
          </Container>
        </Section>
      </div>
    </div>
  );
}