/**
 * Section Presets Showcase
 * 
 * Showcase all 17 section style presets from the design system.
 * These map to WordPress block style variations in theme.json.
 * 
 * **Design System:**
 * - 100% CSS variables from theme.css
 * - WCAG 2.1 AA compliant
 * 
 * @see /src/styles/section-styles.css
 */

import '../../../styles/templates/section-presets-showcase.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Button } from '../blocks/design/Buttons';
import { Stack } from '@phosphor-icons/react';

const presetCategories = [
  {
    category: 'Hero',
    styles: [
      { className: 'section-style-hero-primary', name: 'Primary Hero' },
      { className: 'section-style-hero-secondary', name: 'Secondary Hero' },
      { className: 'section-style-hero-minimal', name: 'Minimal Hero' },
    ]
  },
  {
    category: 'Call to Action',
    styles: [
      { className: 'section-style-cta-primary', name: 'Primary CTA' },
      { className: 'section-style-cta-secondary', name: 'Secondary CTA' },
      { className: 'section-style-cta-accent', name: 'Accent CTA' },
    ]
  },
  {
    category: 'Content',
    styles: [
      { className: 'section-style-content-default', name: 'Default Content' },
      { className: 'section-style-content-feature', name: 'Feature Content' },
      { className: 'section-style-content-editorial', name: 'Editorial Content' },
    ]
  },
  {
    category: 'Testimonials',
    styles: [
      { className: 'section-style-testimonial-default', name: 'Default Testimonials' },
      { className: 'section-style-testimonial-highlight', name: 'Highlight Testimonials' },
    ]
  },
  {
    category: 'Stats',
    styles: [
      { className: 'section-style-stats-default', name: 'Default Stats' },
      { className: 'section-style-stats-highlight', name: 'Highlight Stats' },
    ]
  }
];

export function SectionPresetsShowcase() {
  const breadcrumbs = [
    { label: 'Home', page: 'home' as const },
    { label: 'Developer Tools', page: 'dev-tools' as const },
    { label: 'Section Presets' },
  ];

  return (
    <div className="presets-showcase">
      <BreadcrumbPart items={breadcrumbs} />

      {/* Hero */}
      <section className="presets-showcase__hero">
        <Container>
          <ScrollReveal animation="fade-up">
            <h1 className="presets-showcase__hero-title">Section Presets</h1>
            <p className="presets-showcase__hero-desc">
              Pre-configured section styles that map to WordPress block variations.
              Consistent padding, typography, and color themes.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <Container>
        {presetCategories.map((category, catIndex) => (
          <div key={category.category} className="wp-mb-12">
            <ScrollReveal animation="fade-up" delay={catIndex * 100}>
              <div className="wp-flex wp-items-center wp-gap-3 wp-mb-6">
                <Stack size={20} className="wp-text-primary" />
                <h2 className="wp-text-h3 wp-font-bold">{category.category} Styles</h2>
              </div>

              {category.styles.map((style) => (
                <div key={style.className} className="presets-showcase__item">
                  <div className="presets-showcase__item-header">
                    <span className="presets-showcase__item-title">{style.name}</span>
                    <code className="presets-showcase__item-code">.{style.className}</code>
                  </div>
                  
                  <div className={`presets-showcase__preview ${style.className}`}>
                    <Container>
                      {category.category === 'Hero' && (
                        <>
                          <h1>Hero Headline</h1>
                          <p>Subheading text that explains the value proposition clearly and concisely.</p>
                          <div className="button-group">
                            <Button variant="primary">Primary Action</Button>
                            <Button variant="outline">Learn More</Button>
                          </div>
                        </>
                      )}

                      {category.category === 'Call to Action' && (
                        <>
                          <h2>Ready to get started?</h2>
                          <p>Join thousands of other developers building with our tools.</p>
                          <div className="button-group">
                            <Button variant={style.className.includes('primary') ? 'primary' : 'outline'} className={style.className.includes('primary') ? 'wp-bg-background wp-text-foreground' : ''}>
                              Get Started
                            </Button>
                          </div>
                        </>
                      )}

                      {category.category === 'Content' && (
                        <>
                          <h2>Content Heading</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          <h3>Subheading</h3>
                          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </>
                      )}

                      {category.category === 'Testimonials' && (
                        <>
                          <h2>What our users say</h2>
                          <div className="testimonial-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                            <p className="testimonial-quote">"This design system has completely transformed how we build websites. It's fast, accessible, and looks amazing."</p>
                            <div className="testimonial-author">Jane Doe</div>
                            <div className="testimonial-role">CTO, TechCorp</div>
                          </div>
                        </>
                      )}

                      {category.category === 'Stats' && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center' }}>
                          <div>
                            <div className="stat-number">100%</div>
                            <div className="stat-label">Uptime</div>
                          </div>
                          <div>
                            <div className="stat-number">50k+</div>
                            <div className="stat-label">Users</div>
                          </div>
                          <div>
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Support</div>
                          </div>
                        </div>
                      )}
                    </Container>
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>
        ))}
      </Container>
    </div>
  );
}