/**
 * Component API Reference
 * 
 * Complete API reference for all React components with TypeScript
 * prop types, interfaces, and usage examples.
 * 
 * **Design System:**
 * - 100% CSS variables from theme.css
 * - WCAG 2.1 AA compliant
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';

import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FileCode } from 'lucide-react';

export function ComponentAPI() {
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
        {/* Breadcrumbs */}
        <BreadcrumbPart
          items={[
            { label: 'Home', page: 'home' },
            { label: 'Developer Tools', page: 'dev-tools' },
            { label: 'Component API' },
          ]}
        />

        <Section background="default" spacing="lg">
          <Container>
            <div className="wp-text-center wp-max-w-4xl wp-mx-auto">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 'var(--spacing-20)',
                  height: 'var(--spacing-20)',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'var(--secondary)',
                  marginBottom: 'var(--spacing-6)'
                }}
              >
                <FileCode size={40} style={{ color: 'var(--primary-foreground)' }} />
              </div>

              <h1
                style={{
                  fontSize: 'var(--text-h1)',
                  fontFamily: 'var(--font-primary)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)',
                  margin: '0 0 var(--spacing-4) 0',
                  lineHeight: 1.2
                }}
              >
                Component API Reference
              </h1>

              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  fontFamily: 'var(--font-secondary)',
                  fontWeight: 'var(--font-weight-regular)',
                  color: 'var(--muted-foreground)',
                  margin: '0 0 var(--spacing-12) 0',
                  lineHeight: 1.5
                }}
              >
                TypeScript interfaces, prop types, and API documentation for all components
              </p>
            </div>
          </Container>
        </Section>
      </div>
    </div>
  );
}