/**
 * Button Showcase
 * 
 * Display all button styles, sizes, and variants from the design system.
 * 
 * **Design System:**
 * - 100% CSS variables from theme.css
 * - WCAG 2.1 AA compliant
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';

import { Breadcrumbs } from '../common/Breadcrumbs';
import { Type } from 'lucide-react';

export function ButtonShowcase() {
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
        <Section background="default" spacing="sm">
          <Container>
            <Breadcrumbs
              items={[
                { label: 'Home', page: 'home' },
                { label: 'Developer Tools', page: 'dev-tools' },
                { label: 'Button Showcase' }
              ]}
              className="wp-mb-8"
            />

            <div className="wp-text-center wp-max-w-4xl wp-mx-auto">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 'var(--spacing-20)',
                  height: 'var(--spacing-20)',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'var(--accent)',
                  marginBottom: 'var(--spacing-6)'
                }}
              >
                <Type size={40} style={{ color: 'var(--primary-foreground)' }} />
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
                Button Showcase
              </h1>

              <p
                style={{
                  fontSize: 'var(--text-lead)',
                  fontFamily: 'var(--font-secondary)',
                  fontWeight: 'var(--font-weight-regular)',
                  color: 'var(--muted-foreground)',
                  margin: 0,
                  lineHeight: 1.5
                }}
              >
                Display all button styles, sizes, and variants
              </p>
            </div>
          </Container>
        </Section>
      </div>
    </div>
  );
}