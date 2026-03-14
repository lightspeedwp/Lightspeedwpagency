/**
 * Button Showcase Template
 * 
 * Interactive display of all button variants, sizes, and states.
 * demonstratesthe "Funky" design system's interactive elements.
 * 
 * Features:
 * - Variant gallery (Primary, Secondary, Outline, CTA)
 * - Size comparison
 * - Icon integration
 * - Grouping patterns
 * - Light/Dark mode ready (via CSS variables)
 * 
 * @see /src/styles/templates/button-showcase.css
 */

import '../../../styles/templates/button-showcase.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Button, Buttons } from '../blocks/design/Buttons';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { 
  TextT, 
  Palette, 
  ArrowsOutSimple, 
  Cursor, 
  Lightning, 
  ArrowRight, 
  DownloadSimple, 
  Gear,
  Play
} from '@phosphor-icons/react';


export function ButtonShowcase() {
  const breadcrumbs = [
    { label: 'Home', page: 'home' as const },
    { label: 'Developer Tools', page: 'dev-tools' as const },
    { label: 'Button Showcase' },
  ];

  return (
    <div className="btn-showcase">
      <BreadcrumbPart items={breadcrumbs} />

      {/* Hero */}
      <section className="btn-showcase__hero">
        <Container>
          <ScrollReveal animation="fade-up">
            <h1 className="btn-showcase__hero-title">Button System</h1>
            <p className="btn-showcase__hero-desc">
              Standardized interactive elements with neon glow states, 
              fluid scaling, and WCAG AA compliance.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <Container>
        {/* 1. Variants */}
        <ScrollReveal animation="fade-up" delay={100}>
          <section className="btn-showcase__section">
            <div className="btn-showcase__section-header">
              <Palette className="btn-showcase__section-icon" size={20} />
              <h2 className="btn-showcase__section-title">Style Variants</h2>
            </div>
            
            <div className="btn-showcase__card">
              <span className="btn-showcase__card-title">Core Styles</span>
              <Buttons>
                <Button variant="primary">Primary Action</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline Style</Button>
                <Button variant="cta">CTA Special</Button>
              </Buttons>
            </div>
          </section>
        </ScrollReveal>

        {/* 2. Sizes */}
        <ScrollReveal animation="fade-up" delay={200}>
          <section className="btn-showcase__section">
            <div className="btn-showcase__section-header">
              <ArrowsOutSimple className="btn-showcase__section-icon" size={20} />
              <h2 className="btn-showcase__section-title">Size Scale</h2>
            </div>

            <div className="btn-showcase__grid">
              <div className="btn-showcase__card">
                <span className="btn-showcase__card-title">Small (Compact UI)</span>
                <Buttons>
                  <Button size="sm" variant="primary">Small Button</Button>
                  <Button size="sm" variant="outline">Small Outline</Button>
                </Buttons>
              </div>

              <div className="btn-showcase__card">
                <span className="btn-showcase__card-title">Medium (Default)</span>
                <Buttons>
                  <Button size="md" variant="primary">Medium Button</Button>
                  <Button size="md" variant="outline">Medium Outline</Button>
                </Buttons>
              </div>

              <div className="btn-showcase__card">
                <span className="btn-showcase__card-title">Large (Hero/CTA)</span>
                <Buttons>
                  <Button size="lg" variant="primary">Large Button</Button>
                  <Button size="lg" variant="outline">Large Outline</Button>
                </Buttons>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 3. Icons */}
        <ScrollReveal animation="fade-up" delay={300}>
          <section className="btn-showcase__section">
            <div className="btn-showcase__section-header">
              <Lightning className="btn-showcase__section-icon" size={20} />
              <h2 className="btn-showcase__section-title">Icon Integration</h2>
            </div>

            <div className="btn-showcase__card">
              <span className="btn-showcase__card-title">Leading & Trailing Icons</span>
              <Buttons>
                <Button variant="primary" icon={<Play size={16} />}>
                  Start Now
                </Button>
                <Button variant="secondary" icon={<Gear size={16} />}>
                  Configure
                </Button>
                <Button variant="outline" icon={<DownloadSimple size={16} />}>
                  Download
                </Button>
                {/* Note: Button component doesn't explicitly support trailing icon prop yet, 
                    but we can compose it inside children if needed, or stick to leading icons per design system */}
              </Buttons>
            </div>
          </section>
        </ScrollReveal>

        {/* 4. States */}
        <ScrollReveal animation="fade-up" delay={400}>
          <section className="btn-showcase__section">
            <div className="btn-showcase__section-header">
              <Cursor className="btn-showcase__section-icon" size={20} />
              <h2 className="btn-showcase__section-title">Interactive States</h2>
            </div>

            <div className="btn-showcase__grid">
              <div className="btn-showcase__card">
                <span className="btn-showcase__card-title">Disabled</span>
                <Buttons>
                  <Button variant="primary" disabled>Processing...</Button>
                  <Button variant="outline" disabled>Unavailable</Button>
                </Buttons>
              </div>
              
              <div className="btn-showcase__card">
                <span className="btn-showcase__card-title">CTA Variant (Glows on Hover)</span>
                <Buttons>
                  <Button variant="cta" size="lg">
                    Get Started <span className="wp-ml-2">→</span>
                  </Button>
                </Buttons>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </Container>
    </div>
  );
}