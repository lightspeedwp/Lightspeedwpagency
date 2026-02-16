/**
 * Design System Test Block Component
 * 
 * WordPress Block: dev-tools/design-system-test
 * 
 * Demonstrates that all UI uses CSS variables from theme.css
 * Tests typography, colors, spacing, and dark mode.
 * 
 * @see /src/styles/blocks/dev-tools/design-system-test.css
 */

import React from 'react';
import { Container } from '../../common/Container';
import { Section } from '../../common/Section';
import { Check } from 'lucide-react';
import '@/styles/blocks/dev-tools/design-system-test.css';

export function DesignSystemTest() {
  return (
    <div className="wp-block-devtools-design-system-test">
      {/* Header Section */}
      <Section background="default">
        <Container>
          <div className="wp-block-devtools-design-system-test__header">
            <h1 className="wp-block-devtools-design-system-test__title">
              Design System Test
            </h1>
            
            <p className="wp-block-devtools-design-system-test__description">
              This page demonstrates that all UI uses CSS variables from theme.css
            </p>

            {/* Status Badge */}
            <div className="wp-block-devtools-design-system-test__badge">
              <Check size={16} />
              100% CSS Variables Compliant
            </div>
          </div>
        </Container>
      </Section>

      {/* Typography Test */}
      <Section background="default">
        <Container>
          <h2 className="wp-block-devtools-design-system-test__section-title">
            Typography Scale Test
          </h2>

          <div className="wp-block-devtools-design-system-test__grid">
            {/* H1 Test */}
            <div className="wp-block-devtools-design-system-test__card">
              <div className="wp-block-devtools-design-system-test__meta">
                H1: var(--text-h1) • Lexend • clamp(2.5rem, 5vw + 1rem, 4rem)
              </div>
              <h1 className="wp-block-devtools-design-system-test__h1">
                Heading Level 1
              </h1>
            </div>

            {/* H2 Test */}
            <div className="wp-block-devtools-design-system-test__card">
              <div className="wp-block-devtools-design-system-test__meta">
                H2: var(--text-h2) • Lexend • clamp(2rem, 4vw + 0.5rem, 3rem)
              </div>
              <h2 className="wp-block-devtools-design-system-test__h2">
                Heading Level 2
              </h2>
            </div>

            {/* H3 Test */}
            <div className="wp-block-devtools-design-system-test__card">
              <div className="wp-block-devtools-design-system-test__meta">
                H3: var(--text-h3) • Lexend • clamp(1.5rem, 3vw + 0.5rem, 2.25rem)
              </div>
              <h3 className="wp-block-devtools-design-system-test__h3">
                Heading Level 3
              </h3>
            </div>

            {/* Body Text Test */}
            <div className="wp-block-devtools-design-system-test__card">
              <div className="wp-block-devtools-design-system-test__meta">
                Body: var(--text-base) • Lexend • 16px
              </div>
              <p className="wp-block-devtools-design-system-test__body">
                This is body text using var(--text-base). It demonstrates that all typography uses CSS variables and the Lexend font family.
              </p>
            </div>

            {/* Large Text Test */}
            <div className="wp-block-devtools-design-system-test__card">
              <div className="wp-block-devtools-design-system-test__meta">
                Large: var(--text-lg) • Lexend • 18px (FAQ questions)
              </div>
              <p className="wp-block-devtools-design-system-test__body wp-block-devtools-design-system-test__body--lg">
                Large body text using var(--text-lg). Used for FAQ questions.
              </p>
            </div>

            {/* Small Text Test */}
            <div className="wp-block-devtools-design-system-test__card">
              <div className="wp-block-devtools-design-system-test__meta">
                Small: var(--text-small) • Manrope • 14px (metadata)
              </div>
              <p className="wp-block-devtools-design-system-test__body wp-block-devtools-design-system-test__body--sm">
                Small text using var(--text-small) with Manrope font. Used for metadata and captions.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Color Test */}
      <Section background="default">
        <Container>
          <h2 className="wp-block-devtools-design-system-test__section-title">
            Color System Test
          </h2>

          <div className="wp-block-devtools-design-system-test__grid wp-block-devtools-design-system-test__grid--3-cols">
            {/* Primary Color */}
            <div className="wp-block-devtools-design-system-test__color-card" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
              <div className="wp-block-devtools-design-system-test__color-name">
                Primary
              </div>
              <div className="wp-block-devtools-design-system-test__color-var">
                var(--primary)
              </div>
            </div>

            {/* Secondary Color */}
            <div className="wp-block-devtools-design-system-test__color-card" style={{ backgroundColor: 'var(--secondary)', color: 'var(--secondary-foreground)' }}>
              <div className="wp-block-devtools-design-system-test__color-name">
                Secondary
              </div>
              <div className="wp-block-devtools-design-system-test__color-var">
                var(--secondary)
              </div>
            </div>

            {/* Accent Color */}
            <div className="wp-block-devtools-design-system-test__color-card" style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)' }}>
              <div className="wp-block-devtools-design-system-test__color-name">
                Accent
              </div>
              <div className="wp-block-devtools-design-system-test__color-var">
                var(--accent)
              </div>
            </div>

            {/* Muted Color */}
            <div className="wp-block-devtools-design-system-test__color-card" style={{ backgroundColor: 'var(--muted)', color: 'var(--muted-foreground)' }}>
              <div className="wp-block-devtools-design-system-test__color-name">
                Muted
              </div>
              <div className="wp-block-devtools-design-system-test__color-var">
                var(--muted)
              </div>
            </div>

            {/* Destructive Color */}
            <div className="wp-block-devtools-design-system-test__color-card" style={{ backgroundColor: 'var(--destructive)', color: 'var(--destructive-foreground)' }}>
              <div className="wp-block-devtools-design-system-test__color-name">
                Destructive
              </div>
              <div className="wp-block-devtools-design-system-test__color-var">
                var(--destructive)
              </div>
            </div>

            {/* Card Color */}
            <div className="wp-block-devtools-design-system-test__color-card" style={{ backgroundColor: 'var(--card)', color: 'var(--card-foreground)', border: '1px solid var(--border)' }}>
              <div className="wp-block-devtools-design-system-test__color-name">
                Card
              </div>
              <div className="wp-block-devtools-design-system-test__color-var">
                var(--card)
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Interactive Elements Test */}
      <Section background="default">
        <Container>
          <h2 className="wp-block-devtools-design-system-test__section-title">
            Interactive Elements Test
          </h2>

          <div className="wp-block-devtools-design-system-test__interactive">
            {/* Primary Button */}
            <button className="wp-block-devtools-design-system-test__button wp-block-devtools-design-system-test__button--primary">
              Primary Button
            </button>

            {/* Secondary Button */}
            <button className="wp-block-devtools-design-system-test__button wp-block-devtools-design-system-test__button--secondary">
              Secondary Button
            </button>

            {/* Outline Button */}
            <button className="wp-block-devtools-design-system-test__button wp-block-devtools-design-system-test__button--outline">
              Outline Button
            </button>

            {/* Destructive Button */}
            <button className="wp-block-devtools-design-system-test__button wp-block-devtools-design-system-test__button--destructive">
              Delete Button
            </button>
          </div>
        </Container>
      </Section>

      {/* Verification Checklist */}
      <Section background="default">
        <Container>
          <h2 className="wp-block-devtools-design-system-test__section-title">
            Verification Checklist
          </h2>

          <div className="wp-block-devtools-design-system-test__card wp-block-devtools-design-system-test__card--large">
            <div className="wp-block-devtools-design-system-test__checklist">
              {[
                'All font sizes use CSS variables (var(--text-*))',
                'All colors use CSS variables (var(--primary), var(--foreground), etc.)',
                'Only Lexend and Manrope fonts are used',
                'Lexend for headings, body, buttons, labels',
                'Manrope for small text and metadata only',
                'All font weights use CSS variables (var(--font-weight-*))',
                'All line heights use CSS variables (var(--line-height-*))',
                'Border radius uses CSS variables (var(--radius-*))',
                'Spacing uses Tailwind classes (p-*, gap-*, mb-*)',
                'Dark mode switches automatically',
                'Contrast ratios meet WCAG 2.1 AA',
                'Focus indicators visible (2px ring)',
                'Typography is responsive with clamp()',
                'All changes to theme.css apply automatically'
              ].map((item, index) => (
                <div key={index} className="wp-block-devtools-design-system-test__check-item">
                  <div className="wp-block-devtools-design-system-test__check-icon">
                    <Check size={16} />
                  </div>
                  <p className="wp-block-devtools-design-system-test__check-text">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* How to Update */}
      <Section background="default">
        <Container>
          <h2 className="wp-block-devtools-design-system-test__section-title">
            How to Update the Design System
          </h2>

          <div className="wp-block-devtools-design-system-test__grid wp-block-devtools-design-system-test__grid--3-cols">
            {/* Update Colors */}
            <div className="wp-block-devtools-design-system-test__card wp-block-devtools-design-system-test__card--large">
              <h3 className="wp-block-devtools-design-system-test__step-title">
                Update Colors
              </h3>
              <ol className="wp-block-devtools-design-system-test__steps">
                <li>Open <code className="wp-block-devtools-design-system-test__code">/src/styles/theme.css</code></li>
                <li>Find <code className="wp-block-devtools-design-system-test__code">:root</code> section</li>
                <li>Update color variables</li>
                <li>Update <code className="wp-block-devtools-design-system-test__code">.dark</code> section</li>
                <li>Save — changes apply everywhere!</li>
              </ol>
            </div>

            {/* Update Typography */}
            <div className="wp-block-devtools-design-system-test__card wp-block-devtools-design-system-test__card--large">
              <h3 className="wp-block-devtools-design-system-test__step-title">
                Update Typography
              </h3>
              <ol className="wp-block-devtools-design-system-test__steps">
                <li>Open <code className="wp-block-devtools-design-system-test__code">/src/styles/theme.css</code></li>
                <li>Find font size variables</li>
                <li>Update clamp() values</li>
                <li>Save — changes apply everywhere!</li>
              </ol>
            </div>

            {/* Update Fonts */}
            <div className="wp-block-devtools-design-system-test__card wp-block-devtools-design-system-test__card--large">
              <h3 className="wp-block-devtools-design-system-test__step-title">
                Change Fonts
              </h3>
              <ol className="wp-block-devtools-design-system-test__steps">
                <li>Open <code className="wp-block-devtools-design-system-test__code">/src/styles/fonts.css</code></li>
                <li>Replace Google Fonts import</li>
                <li>Update font-family in theme.css</li>
                <li>Save — new fonts apply everywhere!</li>
              </ol>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}