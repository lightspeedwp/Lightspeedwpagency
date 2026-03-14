/**
 * Live Preview Template
 * 
 * Interactive component preview environment with live code editing
 * and real-time rendering.
 * 
 * **Design System:**
 * - 100% CSS variables from theme.css
 * - WCAG 2.1 AA compliant
 */

import '../../../styles/templates/component-showcase-optimized.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';

import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Eye } from '@phosphor-icons/react';

export function LivePreview() {
  return (
    <div className="wp-min-h-screen wp-flex wp-flex-col wp-bg-background wp-text-foreground">
      <div className="wp-flex-1">
        <BreadcrumbPart
          items={[
            { label: 'Home', page: 'home' },
            { label: 'Developer Tools', page: 'dev-tools' },
            { label: 'Live Preview' },
          ]}
        />

        <Section background="default" spacing="lg">
          <Container>
            <div className="wp-text-center wp-max-w-4xl wp-mx-auto">
              <div
                className="showcase__hero-icon wp-bg-primary"
              >
                <Eye size={40} className="wp-text-primary-foreground" />
              </div>

              <h1 className="wp-font-primary wp-text-h1 wp-font-medium wp-text-foreground wp-mb-4 wp-leading-tight">
                Live Preview
              </h1>

              <p className="wp-font-secondary wp-text-xl wp-font-regular wp-text-muted-foreground wp-m-0 wp-leading-normal">
                Interactive component preview environment with live code editing
                and real-time rendering.
              </p>
            </div>
          </Container>
        </Section>
      </div>
    </div>
  );
}