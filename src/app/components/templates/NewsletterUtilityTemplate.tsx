/**
 * Newsletter Utility Template (MailPoet & CRM)
 *
 * Theme: "Neon Utility"
 *
 * Handles various newsletter lifecycle states:
 * - Unsubscribe Confirmation
 * - Unsubscribe Success
 * - Manage Subscription
 * - Re-engagement
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - All styling via BEM classes in page-thank-you.css (reused)
 * - Colors via scoped CSS variables
 * - Fonts: var(--font-primary), var(--font-secondary)
 *
 * @see /src/styles/templates/page-thank-you.css
 */

import '../../../styles/templates/page-thank-you.css';
import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Button } from '../blocks/design/Buttons';
import { useLocation } from 'react-router';
import { 
  EnvelopeOpen, 
  UserMinus, 
  Faders, 
  HandWaving
} from '@phosphor-icons/react';

export function NewsletterUtilityTemplate() {
  const location = useLocation();
  const path = location.pathname;

  // Default to manage subscription
  let content = {
    badge: 'PREFERENCES',
    title: 'Manage Your',
    highlight: 'Subscription',
    desc: 'Update your email preferences to ensure you receive the content most relevant to you.',
    icon: <Faders size={80} weight="duotone" className="thank-you-page__icon" />,
    colorVar: 'var(--category-blue)',
    showForm: true,
    formType: 'manage'
  };

  if (path.includes('unsubscribe-success')) {
    content = {
      badge: 'UNSUBSCRIBED',
      title: 'You Have Been',
      highlight: 'Unsubscribed',
      desc: 'You have been successfully removed from this mailing list. You will no longer receive these emails.',
      icon: <UserMinus size={80} weight="duotone" className="thank-you-page__icon" />,
      colorVar: 'var(--category-purple)',
      showForm: false,
      formType: 'none'
    };
  } else if (path.includes('unsubscribe-confirmation')) {
    content = {
      badge: 'CONFIRM',
      title: 'Confirm',
      highlight: 'Unsubscribe',
      desc: 'Are you sure you want to unsubscribe from our newsletter? You\'ll miss out on our latest updates and insights.',
      icon: <EnvelopeOpen size={80} weight="duotone" className="thank-you-page__icon" />,
      colorVar: 'var(--category-yellow)',
      showForm: true,
      formType: 'confirm'
    };
  } else if (path.includes('re-engagement') || path.includes('re-engangement')) {
    content = {
      badge: 'STAY CONNECTED',
      title: 'Still want to hear',
      highlight: 'from us?',
      desc: 'We noticed you haven\'t been reading our emails lately. Click the button below if you still want to receive our updates.',
      icon: <HandWaving size={80} weight="duotone" className="thank-you-page__icon" />,
      colorVar: 'var(--category-green)',
      showForm: true,
      formType: 'reengage'
    };
  }

  return (
    <div className="thank-you-page" style={{ '--page-color': content.colorVar } as React.CSSProperties}>
      <section className="thank-you-page__hero">
        <div className="thank-you-page__hero-glow" aria-hidden="true" />
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="thank-you-page__content">
              {content.icon}
              
              <div className="thank-you-page__badge">
                {content.badge}
              </div>
              
              <h1 className="thank-you-page__title">
                {content.title} <br />
                <span className="thank-you-page__highlight">{content.highlight}</span>
              </h1>
              
              <p className="thank-you-page__desc">
                {content.desc}
              </p>

              {content.showForm && content.formType === 'manage' && (
                <form className="thank-you-page__form wp-mb-8">
                  <div className="wp-flex wp-flex-col wp-gap-4 wp-text-left wp-bg-background wp-p-6 wp-rounded-lg wp-border wp-border-border-soft">
                    <label className="wp-flex wp-items-center wp-gap-3 wp-cursor-pointer">
                      <input type="checkbox" defaultChecked className="wp-w-5 wp-h-5 wp-accent-primary" />
                      <span className="wp-font-secondary wp-text-base wp-text-foreground">Weekly Insights & Updates</span>
                    </label>
                    <label className="wp-flex wp-items-center wp-gap-3 wp-cursor-pointer">
                      <input type="checkbox" defaultChecked className="wp-w-5 wp-h-5 wp-accent-primary" />
                      <span className="wp-font-secondary wp-text-base wp-text-foreground">Product Releases</span>
                    </label>
                    <label className="wp-flex wp-items-center wp-gap-3 wp-cursor-pointer">
                      <input type="checkbox" className="wp-w-5 wp-h-5 wp-accent-primary" />
                      <span className="wp-font-secondary wp-text-base wp-text-foreground">Partner Offers</span>
                    </label>
                    <div className="wp-mt-4">
                      <Button type="button" variant="primary">Save Preferences</Button>
                    </div>
                  </div>
                </form>
              )}

              {content.showForm && content.formType === 'confirm' && (
                <div className="thank-you-page__actions wp-mb-8">
                  <Button page="thank-you-newsletter-subscribe" size="lg" variant="primary">
                    Yes, Unsubscribe Me
                  </Button>
                  <Button page="home" size="lg" variant="outline">
                    Nevermind, keep me subscribed
                  </Button>
                </div>
              )}

              {content.showForm && content.formType === 'reengage' && (
                <div className="thank-you-page__actions wp-mb-8">
                  <Button page="home" size="lg" variant="primary">
                    Yes, Keep Me Subscribed!
                  </Button>
                  <Button page="thank-you-newsletter-subscribe" size="lg" variant="outline">
                    No, please unsubscribe me
                  </Button>
                </div>
              )}

              {(!content.showForm || content.formType === 'manage') && (
                <div className="thank-you-page__actions">
                  <Button page="home" size="lg" variant="primary">
                    Return Home
                  </Button>
                  <Button page="blog" size="lg" variant="outline">
                    Read Our Insights
                  </Button>
                </div>
              )}
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}