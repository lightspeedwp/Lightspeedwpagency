/**
 * Referrals Template
 *
 * Theme: "Neon Growth"
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - All styling via BEM classes in page-referrals.css
 * - Colors via scoped CSS variables (no hardcoded hex in JSX)
 * - Fonts: var(--font-primary), var(--font-secondary)
 *
 * @see /src/styles/templates/page-referrals.css
 */

import '../../../styles/templates/page-referrals.css';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Button } from '../blocks/design/Buttons';
import { Handshake } from '@phosphor-icons/react';

export function ReferralsTemplate() {
  const steps = [
    {
      number: '1',
      title: 'Submit a Lead',
      description: 'Fill out the form below with the contact details of a business looking for a new website or eCommerce solution.'
    },
    {
      number: '2',
      title: 'We Close the Deal',
      description: 'Our team will reach out, consult with them, and put together a winning proposal tailored to their needs.'
    },
    {
      number: '3',
      title: 'You Get Paid',
      description: 'Once the project kicks off and the first deposit is paid, you receive a 10% commission on the total project value.'
    }
  ];

  return (
    <div className="referrals-page">
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Referrals' },
        ]}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="referrals-page__hero">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="referrals-page__hero-content">
              <div className="referrals-page__badge">
                <Handshake size={16} />
                PARTNER PROGRAM
              </div>
              <h1 className="referrals-page__title">
                Refer a Client. <br />
                <span className="referrals-page__highlight">Earn 10%.</span>
              </h1>
              <p className="referrals-page__desc">
                Know someone who needs a high-performance WordPress or WooCommerce site? Send them our way and earn a generous commission when they sign.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          HOW IT WORKS
          ============================================ */}
      <section className="referrals-page__steps-section">
        <Container>
          <div className="referrals-page__step-grid">
            {steps.map((step, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="referrals-page__step">
                  <div className="referrals-page__step-number">{step.number}</div>
                  <h3 className="referrals-page__step-title">{step.title}</h3>
                  <p className="referrals-page__step-desc">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================
          FORM SECTION
          ============================================ */}
      <section className="referrals-page__form-section" id="referral-form">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="referrals-page__form-wrapper">
              <h2 className="referrals-page__form-title">Submit a Referral</h2>
              <p className="referrals-page__form-desc">
                Your details will remain confidential until we contact you to confirm the lead.
              </p>

              <form className="referrals-page__form" onSubmit={(e) => e.preventDefault()}>
                <div className="wp-grid-2-cols">
                  <div className="referrals-page__form-group">
                    <label className="referrals-page__label" htmlFor="referrerName">Your Name</label>
                    <input type="text" id="referrerName" className="referrals-page__input" placeholder="Jane Doe" required />
                  </div>
                  <div className="referrals-page__form-group">
                    <label className="referrals-page__label" htmlFor="referrerEmail">Your Email</label>
                    <input type="email" id="referrerEmail" className="referrals-page__input" placeholder="jane@example.com" required />
                  </div>
                </div>

                <div className="wp-grid-2-cols wp-mt-4">
                  <div className="referrals-page__form-group">
                    <label className="referrals-page__label" htmlFor="leadName">Lead's Name</label>
                    <input type="text" id="leadName" className="referrals-page__input" placeholder="John Smith" required />
                  </div>
                  <div className="referrals-page__form-group">
                    <label className="referrals-page__label" htmlFor="leadCompany">Lead's Company</label>
                    <input type="text" id="leadCompany" className="referrals-page__input" placeholder="Acme Corp" />
                  </div>
                </div>

                <div className="referrals-page__form-group">
                  <label className="referrals-page__label" htmlFor="leadEmail">Lead's Email</label>
                  <input type="email" id="leadEmail" className="referrals-page__input" placeholder="john@acmecorp.com" required />
                </div>

                <div className="referrals-page__form-group">
                  <label className="referrals-page__label" htmlFor="leadNotes">Project Details (Optional)</label>
                  <textarea 
                    id="leadNotes" 
                    className="referrals-page__input" 
                    rows={4} 
                    placeholder="Tell us a bit about what they need..."
                  />
                </div>

                <Button type="submit" size="lg" className="wp-mt-4 wp-w-full wp-justify-center">
                  Submit Referral
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          CTA
          ============================================ */}
      <FunkyCTA
        title="Become an Agency Partner"
        description="Are you a designer or marketing agency? We offer white-label development services."
        buttonText="View Partner Program"
        buttonPage="contact"
        benefits={[
          'White-label options',
          'Dedicated staging servers',
          'Priority support SLA'
        ]}
      />
    </div>
  );
}