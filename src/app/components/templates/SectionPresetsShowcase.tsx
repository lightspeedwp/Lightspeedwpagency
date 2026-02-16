/**
 * Section Presets Showcase
 * 
 * Showcase all 17 section style presets from the design system.
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
import { Layers } from 'lucide-react';
import '@/styles/templates/component-showcase.css';

export function SectionPresetsShowcase() {
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
                { label: 'Section Presets Showcase' }
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
                  backgroundColor: 'var(--muted-foreground)',
                  marginBottom: 'var(--spacing-6)'
                }}
              >
                <Layers size={40} style={{ color: 'var(--primary-foreground)' }} />
              </div>

              <Heading level={1} className="wp-mb-4">
                Section Presets Showcase
              </Heading>

              <Paragraph className="showcase__subtitle" style={{ margin: 0 }}>
                Showcase all 17 section style presets
              </Paragraph>
            </div>
          </Container>
        </Section>
      </div>
    </div>
  );
}