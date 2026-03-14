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

import '../../../styles/templates/component-showcase-optimized.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';

import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { FileCode } from '@phosphor-icons/react';

export function ComponentAPI() {
  return (
    <div className="wp-min-h-screen wp-flex wp-flex-col wp-bg-background wp-text-foreground">
      <div className="wp-flex-1">
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
                className="showcase__hero-icon wp-bg-secondary"
              >
                <FileCode size={40} className="wp-text-primary-foreground" />
              </div>

              <h1 className="wp-font-primary wp-text-h1 wp-font-medium wp-text-foreground wp-mb-4 wp-leading-tight">
                Component API Reference
              </h1>

              <p className="wp-font-secondary wp-text-xl wp-font-regular wp-text-muted-foreground wp-mb-12 wp-leading-normal">
                TypeScript interfaces, prop types, and API documentation for all components
              </p>
            </div>
          </Container>
        </Section>
      </div>
    </div>
  );
}