/**
 * Live Preview
 * 
 * Live component preview tool with editable props.
 * 
 * **Design System:**
 * - 100% CSS variables from theme.css
 * - WCAG 2.1 AA compliant
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';

import { Breadcrumbs } from '../common/Breadcrumbs';
import { Eye } from 'lucide-react';

export function LivePreview() {
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
                { label: 'Live Preview' }
              ]}
              className="wp-mb-8"
            />

            <div className="wp-text-center wp-max-w-4xl wp-mx-auto">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'var(--primary)',
                  marginBottom: 'var(--spacing-6)'
                }}
              >
                <Eye size={40} style={{ color: 'var(--primary-foreground)' }} />
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
                Live Preview
              </h1>

              <p
                style={{
                  fontSize: 'var(--text-xl)',
                  fontFamily: 'var(--font-secondary)',
                  fontWeight: 'var(--font-weight-regular)',
                  color: 'var(--muted-foreground)',
                  margin: 0,
                  lineHeight: 1.5
                }}
              >
                Live component preview tool with editable props
              </p>
            </div>
          </Container>
        </Section>
      </div>
    </div>
  );
}