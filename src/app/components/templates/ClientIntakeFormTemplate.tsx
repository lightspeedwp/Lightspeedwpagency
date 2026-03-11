/**
 * Client Intake Form Template
 *
 * Theme: "Neon Form"
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - All styling via BEM classes in page-briefing.css
 * - Colors via scoped CSS variables (no hardcoded hex in JSX)
 * - Fonts: var(--font-primary), var(--font-secondary)
 *
 * @see /src/styles/templates/page-briefing.css
 */

import '../../../styles/templates/page-briefing.css';
import { useState } from 'react';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Button } from '../blocks/design/Buttons';
import { Check } from '@phosphor-icons/react';

export function ClientIntakeFormTemplate() {
  const [step, setStep] = useState(1);

  return (
    <div className="briefing-page">
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Client Intake Form' },
        ]}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="briefing-page__hero">
        <Container>
          <ScrollReveal animation="fade-up">
            <h1 className="briefing-page__title">
              Project <span className="briefing-page__highlight">Briefing</span>
            </h1>
            <p className="briefing-page__desc">
              Help us understand your project requirements, goals, and technical specifications so we can provide an accurate estimate and timeline.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          FORM SECTION
          ============================================ */}
      <section className="briefing-page__form-section">
        <Container>
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="briefing-page__form-container">
              
              {/* Stepper */}
              <div className="briefing-page__stepper">
                <div className={`briefing-page__step ${step >= 1 ? 'briefing-page__step--active' : ''} ${step > 1 ? 'briefing-page__step--completed' : ''}`}>
                  <div className="briefing-page__step-icon">
                    {step > 1 ? <Check size={16} weight="bold" /> : '1'}
                  </div>
                  <span>Basics</span>
                </div>
                <div className={`briefing-page__step ${step >= 2 ? 'briefing-page__step--active' : ''} ${step > 2 ? 'briefing-page__step--completed' : ''}`}>
                  <div className="briefing-page__step-icon">
                    {step > 2 ? <Check size={16} weight="bold" /> : '2'}
                  </div>
                  <span>Scope</span>
                </div>
                <div className={`briefing-page__step ${step >= 3 ? 'briefing-page__step--active' : ''}`}>
                  <div className="briefing-page__step-icon">3</div>
                  <span>Details</span>
                </div>
              </div>

              {/* Form Content */}
              <form className="briefing-page__form" onSubmit={(e) => { e.preventDefault(); setStep(Math.min(step + 1, 3)); }}>
                
                {/* STEP 1: BASICS */}
                {step === 1 && (
                  <div className="briefing-page__step-content">
                    <div className="wp-grid-2-cols">
                      <div className="briefing-page__form-group">
                        <label className="briefing-page__label" htmlFor="firstName">First Name *</label>
                        <input type="text" id="firstName" className="briefing-page__input" required />
                      </div>
                      <div className="briefing-page__form-group">
                        <label className="briefing-page__label" htmlFor="lastName">Last Name *</label>
                        <input type="text" id="lastName" className="briefing-page__input" required />
                      </div>
                    </div>

                    <div className="wp-grid-2-cols" style={{ marginTop: 'var(--spacing-6)' }}>
                      <div className="briefing-page__form-group">
                        <label className="briefing-page__label" htmlFor="email">Email Address *</label>
                        <input type="email" id="email" className="briefing-page__input" required />
                      </div>
                      <div className="briefing-page__form-group">
                        <label className="briefing-page__label" htmlFor="company">Company Name</label>
                        <input type="text" id="company" className="briefing-page__input" />
                      </div>
                    </div>

                    <div className="briefing-page__form-group" style={{ marginTop: 'var(--spacing-6)' }}>
                      <label className="briefing-page__label" htmlFor="currentWebsite">Current Website URL (if applicable)</label>
                      <input type="url" id="currentWebsite" className="briefing-page__input" placeholder="https://" />
                    </div>
                  </div>
                )}

                {/* STEP 2: SCOPE */}
                {step === 2 && (
                  <div className="briefing-page__step-content">
                    <div className="briefing-page__form-group">
                      <label className="briefing-page__label">What type of project is this?</label>
                      <div className="briefing-page__radio-grid">
                        <label className="briefing-page__radio-card">
                          <input type="radio" name="projectType" value="new-wp" defaultChecked />
                          <span className="briefing-page__radio-title">New WordPress Site</span>
                          <span className="briefing-page__radio-desc">Starting from scratch</span>
                        </label>
                        <label className="briefing-page__radio-card">
                          <input type="radio" name="projectType" value="redesign-wp" />
                          <span className="briefing-page__radio-title">WordPress Redesign</span>
                          <span className="briefing-page__radio-desc">Revamping existing site</span>
                        </label>
                        <label className="briefing-page__radio-card">
                          <input type="radio" name="projectType" value="new-woo" />
                          <span className="briefing-page__radio-title">New WooCommerce</span>
                          <span className="briefing-page__radio-desc">New eCommerce store</span>
                        </label>
                        <label className="briefing-page__radio-card">
                          <input type="radio" name="projectType" value="custom-dev" />
                          <span className="briefing-page__radio-title">Custom Development</span>
                          <span className="briefing-page__radio-desc">Plugins or API integrations</span>
                        </label>
                      </div>
                    </div>

                    <div className="briefing-page__form-group" style={{ marginTop: 'var(--spacing-6)' }}>
                      <label className="briefing-page__label" htmlFor="budget">Estimated Budget</label>
                      <select id="budget" className="briefing-page__select">
                        <option value="">Select a range...</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k+">$50,000+</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* STEP 3: DETAILS */}
                {step === 3 && (
                  <div className="briefing-page__step-content">
                    <div className="briefing-page__form-group">
                      <label className="briefing-page__label" htmlFor="projectGoals">What are the primary goals for this project? *</label>
                      <textarea id="projectGoals" className="briefing-page__textarea" placeholder="e.g. Increase conversion rate, modernize brand, integrate with our CRM..." required></textarea>
                    </div>

                    <div className="briefing-page__form-group" style={{ marginTop: 'var(--spacing-6)' }}>
                      <label className="briefing-page__label" htmlFor="timeline">Expected Launch Timeline</label>
                      <select id="timeline" className="briefing-page__select">
                        <option value="">Select timeline...</option>
                        <option value="asap">ASAP (1-2 months)</option>
                        <option value="standard">Standard (3-4 months)</option>
                        <option value="flexible">Flexible (4+ months)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="briefing-page__actions">
                  {step > 1 && (
                    <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                      Back
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button type="submit">
                      Next Step
                    </Button>
                  ) : (
                    <Button type="submit" onClick={() => alert("Form Submitted!")}>
                      Submit Briefing
                    </Button>
                  )}
                </div>
              </form>

            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}