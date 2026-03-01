/**
 * Header/Footer Comparison
 * 
 * Compare header and footer template variations side by side.
 * 
 * **Design System:**
 * - 100% CSS variables from theme.css
 * - WCAG 2.1 AA compliant
 * 
 * @see /src/styles/templates/header-footer-comparison.css
 */

import '../../../styles/templates/header-footer-comparison.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Heading } from '../common/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Layout, PanelTop, PanelBottom } from 'lucide-react';
import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';


export function HeaderFooterComparison() {
  return (
    <div className="comparison">
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'home' as const },
          { label: 'Developer Tools', page: 'dev-tools' as const },
          { label: 'Header/Footer Comparison' },
        ]}
      />

      {/* Hero */}
      <section className="comparison__hero">
        <Container>
          <ScrollReveal animation="fade-up">
            <h1 className="comparison__hero-title">Header/Footer Comparison</h1>
            <p className="comparison__hero-desc">
              Compare different header and footer configurations. 
              These are the global template parts used across the site.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <Container>
        {/* Headers */}
        <section className="comparison__section">
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="comparison__section-title">
              <PanelTop size={28} className="wp-text-primary" />
              Header Variations
            </h2>
            
            <div className="comparison__grid">
              {/* Default Header */}
              <div className="comparison__preview">
                <div className="comparison__preview-header">
                  <span>Default Header</span>
                  <span>parts/header.html</span>
                </div>
                <div className="comparison__preview-content" style={{ position: 'relative', minHeight: '100px' }}>
                  <SiteHeader />
                </div>
              </div>

              {/* Transparent Header (Simulation) */}
              <div className="comparison__preview">
                <div className="comparison__preview-header">
                  <span>Transparent Overlay Header</span>
                  <span>parts/header-transparent.html</span>
                </div>
                <div className="comparison__preview-content" style={{ position: 'relative', minHeight: '100px', background: 'var(--primary-dark)' }}>
                  <div style={{ padding: '1rem', color: 'white', textAlign: 'center', fontSize: '0.8rem' }}>
                    (Simulated dark background)
                  </div>
                  <SiteHeader />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Footers */}
        <section className="comparison__section">
          <ScrollReveal animation="fade-up" delay={200}>
            <h2 className="comparison__section-title">
              <PanelBottom size={28} className="wp-text-primary" />
              Footer Variations
            </h2>

            <div className="comparison__grid">
              {/* Default Footer */}
              <div className="comparison__preview">
                <div className="comparison__preview-header">
                  <span>Default Footer</span>
                  <span>parts/footer.html</span>
                </div>
                <div className="comparison__preview-content">
                  <SiteFooter />
                </div>
              </div>

              {/* Minimal Footer (Simulation) */}
              <div className="comparison__preview">
                <div className="comparison__preview-header">
                  <span>Minimal Footer</span>
                  <span>parts/footer-minimal.html</span>
                </div>
                <div className="comparison__preview-content">
                  {/* Simulate minimal footer by hiding some sections via CSS or passing props if supported */}
                  <div style={{ padding: 'var(--spacing-8)', textAlign: 'center', background: 'var(--background)' }}>
                    <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}>
                      &copy; {new Date().getFullYear()} LSX Design. All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </Container>
    </div>
  );
}