/**
 * WordPress Blocks Proof of Concept Template
 * 
 * This template demonstrates the new WordPress core block styling system:
 * - NO Tailwind classes
 * - NO inline styles
 * - 100% WordPress block classes from wordpress-blocks.css
 * - Full light/dark mode support via CSS variables
 * 
 * Design System Compliance:
 * - All colors: CSS variables from theme-light.css / theme-dark.css
 * - All typography: CSS variables from theme-base.css
 * - All spacing: WordPress block gap classes
 * - Fully responsive and accessible (WCAG 2.1 AA)
 * 
 * @see /guidelines/Guidelines.md
 */

import '../../../styles/templates/design-blocks-showcase.css';
import { Link } from 'react-router';
import { slugToPath } from '../../utils/route-map';
import { House, ArrowRight, Check, Star, Trophy, Shield } from '@phosphor-icons/react';

export function WordPressBlocksProofOfConcept() {
  return (
    <>
        
        {/* ============================================
            HERO SECTION
            WordPress Classes: wp-block-hero, wp-block-group
            ============================================ */}
        <section className="wp-block-hero">
          <div className="wp-block-hero__content">
            <h1 className="wp-block-hero__title">
              WordPress Block Styling System
            </h1>
            
            <p className="wp-block-hero__description">
              A proof-of-concept demonstrating 100% WordPress core block classes with zero Tailwind and zero inline styles. All styling comes from global CSS with full light/dark mode support.
            </p>
            
            {/* Buttons Block */}
            <div className="wp-block-buttons is-content-justification-center">
              <div className="wp-block-button">
                <Link 
                  to={slugToPath('front-page')}
                  className="wp-block-button__link"
                  aria-label="Get Started"
                >
                  <House size={20} />
                  Get Started
                </Link>
              </div>
              
              <div className="wp-block-button is-style-outline">
                <Link 
                  to={slugToPath('portfolio-archive')}
                  className="wp-block-button__link"
                  aria-label="View Documentation"
                >
                  View Documentation
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        
        {/* ============================================
            FEATURES SECTION
            WordPress Classes: wp-block-section, wp-block-columns
            ============================================ */}
        <section className="wp-block-section has-large-spacing has-muted-background">
          <div className="wp-block-group is-layout-constrained">
            
            {/* Section Header */}
            <div className="wp-block-group has-text-align-center">
              <h2 className="wp-block-heading">
                Key Features
              </h2>
              <p className="wp-block-paragraph is-style-lead">
                Everything you need for modern WordPress development
              </p>
            </div>
            
            {/* Features Grid */}
            <div className="wp-block-columns has-3-columns has-large-gap">
              
              {/* Feature 1 */}
              <div className="wp-block-column">
                <div className="wp-block-card">
                  <div className="wp-block-group has-small-gap">
                    <div className="wp-block-row">
                      <Shield size={32} style={{ color: 'var(--primary)' }} />
                      <h3 className="wp-block-heading">
                        100% CSS Variables
                      </h3>
                    </div>
                    <p className="wp-block-paragraph">
                      All colors, typography, and spacing use semantic CSS variables from theme.css. Update styling by editing CSS files only.
                    </p>
                    <ul className="wp-block-list">
                      <li>Semantic color tokens</li>
                      <li>Fluid typography scale</li>
                      <li>Consistent spacing system</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="wp-block-column">
                <div className="wp-block-card">
                  <div className="wp-block-group has-small-gap">
                    <div className="wp-block-row">
                      <Trophy size={32} style={{ color: 'var(--primary)' }} />
                      <h3 className="wp-block-heading">
                        WordPress Native
                      </h3>
                    </div>
                    <p className="wp-block-paragraph">
                      Uses WordPress core block classes like wp-block-button, wp-block-columns, and wp-block-group for perfect FSE compatibility.
                    </p>
                    <ul className="wp-block-list">
                      <li>Core block classes</li>
                      <li>FSE compatible</li>
                      <li>theme.json ready</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="wp-block-column">
                <div className="wp-block-card">
                  <div className="wp-block-group has-small-gap">
                    <div className="wp-block-row">
                      <Star size={32} style={{ color: 'var(--primary)' }} />
                      <h3 className="wp-block-heading">
                        Light & Dark Modes
                      </h3>
                    </div>
                    <p className="wp-block-paragraph">
                      Full light and dark mode support through CSS variables with WCAG 2.1 AA compliance. No JavaScript required for theme switching.
                    </p>
                    <ul className="wp-block-list">
                      <li>Automatic theme switching</li>
                      <li>WCAG AA compliant</li>
                      <li>CSS-only solution</li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        
        
        {/* ============================================
            COMPARISON SECTION
            WordPress Classes: wp-block-section, wp-block-columns
            ============================================ */}
        <section className="wp-block-section has-large-spacing">
          <div className="wp-block-group is-layout-constrained">
            
            <div className="wp-block-group has-text-align-center">
              <h2 className="wp-block-heading">
                Before &amp; After Comparison
              </h2>
              <p className="wp-block-paragraph is-style-lead">
                See the difference between Tailwind + inline styles vs WordPress block classes
              </p>
            </div>
            
            <div className="wp-block-columns has-2-columns has-large-gap">
              
              {/* Before */}
              <div className="wp-block-column">
                <div className="wp-block-card">
                  <h3 className="wp-block-heading">
                    ❌ Before (Old Way)
                  </h3>
                  <pre className="wp-block-code">
{`<div className="flex flex-col gap-4 p-6">
  <button 
    style={{
      backgroundColor: 'var(--primary)',
      padding: 'var(--spacing-3) var(--spacing-6)'
    }}
  >
    Click Me
  </button>
</div>`}
                  </pre>
                  <p className="wp-block-paragraph is-style-small">
                    Problems: Tailwind classes, inline styles, not FSE compatible
                  </p>
                </div>
              </div>
              
              {/* After */}
              <div className="wp-block-column">
                <div className="wp-block-card">
                  <h3 className="wp-block-heading">
                    ✅ After (New Way)
                  </h3>
                  <pre className="wp-block-code">
{`<div className="wp-block-group">
  <div className="wp-block-button">
    <button className="wp-block-button__link">
      Click Me
    </button>
  </div>
</div>`}
                  </pre>
                  <p className="wp-block-paragraph is-style-small">
                    Benefits: WordPress native, global CSS, FSE ready, light/dark modes
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        
        
        {/* ============================================
            BENEFITS SECTION
            WordPress Classes: wp-block-section, wp-block-group
            ============================================ */}
        <section className="wp-block-section has-large-spacing has-primary-background-color">
          <div className="wp-block-group is-layout-constrained">
            
            <div className="wp-block-group has-text-align-center">
              <h2 className="wp-block-heading">
                Why Switch to WordPress Block Classes?
              </h2>
            </div>
            
            <div className="wp-block-columns has-2-columns has-large-gap">
              
              <div className="wp-block-column">
                <div className="wp-block-group has-small-gap">
                  {[
                    'No Tailwind dependency — pure WordPress',
                    'No inline styles — easier maintenance',
                    'Global CSS control — edit one file',
                    'Light/Dark modes — automatic switching'
                  ].map((benefit, index) => (
                    <div key={index} className="wp-block-row">
                      <Check size={24} style={{ color: 'var(--success)', flexShrink: 0 }} />
                      <p className="wp-block-paragraph" style={{ margin: 0 }}>
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="wp-block-column">
                <div className="wp-block-group has-small-gap">
                  {[
                    'FSE compatible — works in block editor',
                    'theme.json integration — preset support',
                    'WCAG compliant — accessibility built-in',
                    'Responsive — mobile-first design'
                  ].map((benefit, index) => (
                    <div key={index} className="wp-block-row">
                      <Check size={24} style={{ color: 'var(--success)', flexShrink: 0 }} />
                      <p className="wp-block-paragraph" style={{ margin: 0 }}>
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </section>
        
        
        {/* ============================================
            CTA SECTION
            WordPress Classes: wp-block-section, wp-block-buttons
            ============================================ */}
        <section className="wp-block-section has-medium-spacing has-gradient-background">
          <div className="wp-block-group is-layout-constrained">
            
            <div className="wp-block-group has-text-align-center">
              <h2 className="wp-block-heading">
                Ready to Get Started?
              </h2>
              <p className="wp-block-paragraph">
                Explore the complete documentation and see more examples
              </p>
              
              <div className="wp-block-buttons is-content-justification-center">
                <div className="wp-block-button is-style-large">
                  <Link 
                    to={slugToPath('front-page')}
                    className="wp-block-button__link"
                    aria-label="View Homepage"
                  >
                    View Homepage
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </section>
        
    </>
  );
}