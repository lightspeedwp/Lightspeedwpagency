/**
 * Training Template
 * 
 * Page shell for WordPress Training service page.
 * Full content implementation coming soon.
 * 
 * @see /guidelines/templates/overview-templates.md
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { Container } from '../common/Container';
import { Section } from '../common/Section';

export function TrainingTemplate() {
  return (
    <>
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Page Hero */}
        <Section variant="canvas" className="py-12">
          <Container>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{
                fontSize: 'var(--text-h1)',
                fontFamily: 'var(--font-primary)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--foreground)',
                marginBottom: 'var(--spacing-4)'
              }}>
                WordPress Training
              </h1>
              
              <p style={{
                fontSize: 'var(--text-lead)',
                fontFamily: 'var(--font-primary)',
                color: 'var(--muted-foreground)',
                marginBottom: 'var(--spacing-8)',
                maxWidth: '800px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                Professional WordPress training and education services
              </p>

              {/* Coming Soon Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-2)',
                padding: 'var(--spacing-2) var(--spacing-4)',
                backgroundColor: 'var(--muted)',
                borderRadius: 'var(--radius)',
                fontSize: 'var(--text-small)',
                fontFamily: 'var(--font-secondary)',
                color: 'var(--muted-foreground)'
              }}>
                🚧 Page Under Construction
              </div>
            </div>
          </Container>
        </Section>

        {/* Placeholder Content */}
        <Section variant="white" className="py-12">
          <Container>
            <div style={{
              textAlign: 'center',
              padding: 'var(--spacing-12)',
              backgroundColor: 'var(--card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border)'
            }}>
              <p style={{
                fontSize: 'var(--text-base)',
                fontFamily: 'var(--font-primary)',
                color: 'var(--foreground)'
              }}>
                Full content for this page is coming soon. Check back later!
              </p>
            </div>
          </Container>
        </Section>
      </main>
      
      <SiteFooter />
    </>
  );
}
