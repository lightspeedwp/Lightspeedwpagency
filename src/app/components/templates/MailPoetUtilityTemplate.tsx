/**
 * MailPoet Utility Template
 *
 * Handles unsubscribe, manage subscription, and re-engagement pages.
 * Theme: "Neon Utility"
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - All styling via BEM classes in page-utility-mailpoet.css
 * - Colors via scoped CSS variables
 * - Fonts: var(--font-primary), var(--font-secondary)
 *
 * @see /src/styles/templates/page-utility-mailpoet.css
 */

import '../../../styles/templates/page-utility-mailpoet.css';
import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Button } from '../blocks/design/Buttons';
import { useLocation } from 'react-router';
import { 
  EnvelopeOpen, 
  HandWaving, 
  Gear, 
  Prohibit
} from '@phosphor-icons/react';

export function MailPoetUtilityTemplate() {
  const location = useLocation();
  const path = location.pathname;

  let content = {
    icon: <Gear size={64} weight="duotone" className="mailpoet-page__icon" />,
    title: 'Manage Subscription',
    desc: 'Update your email preferences below.',
    colorVar: 'var(--category-blue)',
    showForm: true,
    formType: 'manage'
  };

  if (path.includes('unsubscribe-success')) {
    content = {
      icon: <Prohibit size={64} weight="duotone" className="mailpoet-page__icon" />,
      title: 'Unsubscribed Successfully',
      desc: 'You have been successfully removed from this mailing list. We\'re sorry to see you go!',
      colorVar: 'var(--category-red)',
      showForm: false,
      formType: 'none'
    };
  } else if (path.includes('unsubscribe-confirmation')) {
    content = {
      icon: <EnvelopeOpen size={64} weight="duotone" className="mailpoet-page__icon" />,
      title: 'Confirm Unsubscribe',
      desc: 'Are you sure you want to unsubscribe from our newsletter?',
      colorVar: 'var(--category-yellow)',
      showForm: true,
      formType: 'confirm'
    };
  } else if (path.includes('re-engangement')) {
    content = {
      icon: <HandWaving size={64} weight="duotone" className="mailpoet-page__icon" />,
      title: 'We Miss You!',
      desc: 'It looks like you haven\'t opened our emails in a while. Would you like to stay on the list?',
      colorVar: 'var(--category-purple)',
      showForm: true,
      formType: 'reengage'
    };
  }

  return (
    <div className="mailpoet-page" style={{ '--mp-color': content.colorVar } as React.CSSProperties}>
      <Container>
        <div className="mailpoet-page__wrapper">
          <ScrollReveal animation="fade-up">
            <div className="mailpoet-page__card">
              <div className="mailpoet-page__icon-wrapper">
                {content.icon}
              </div>
              
              <h1 className="mailpoet-page__title">{content.title}</h1>
              <p className="mailpoet-page__desc">{content.desc}</p>
              
              {content.showForm && content.formType === 'manage' && (
                <form className="mailpoet-page__form" onSubmit={(e) => e.preventDefault()}>
                  <div className="mailpoet-page__form-group">
                    <label className="mailpoet-page__label" htmlFor="email">Email Address</label>
                    <input type="email" id="email" className="mailpoet-page__input" defaultValue="user@example.com" disabled />
                  </div>
                  
                  <div className="mailpoet-page__preferences">
                    <h3 className="mailpoet-page__pref-title">Your Lists</h3>
                    <label className="mailpoet-page__checkbox-label">
                      <input type="checkbox" className="mailpoet-page__checkbox" defaultChecked />
                      <span>LightSpeed Weekly Newsletter</span>
                    </label>
                    <label className="mailpoet-page__checkbox-label">
                      <input type="checkbox" className="mailpoet-page__checkbox" defaultChecked />
                      <span>Product Updates & Announcements</span>
                    </label>
                  </div>
                  
                  <Button type="submit" size="lg">Save Preferences</Button>
                </form>
              )}

              {content.showForm && content.formType === 'confirm' && (
                <div className="mailpoet-page__actions">
                  <Button variant="outline" size="lg" page="home">
                    No, keep me subscribed
                  </Button>
                  <Button variant="primary" size="lg" page="mailpoet-unsubscribe-success-page">
                    Yes, unsubscribe me
                  </Button>
                </div>
              )}

              {content.showForm && content.formType === 'reengage' && (
                <div className="mailpoet-page__actions">
                  <Button variant="primary" size="lg" page="home">
                    Yes, keep me on the list!
                  </Button>
                  <Button variant="outline" size="lg" page="mailpoet-unsubscribe-success-page">
                    No, unsubscribe me
                  </Button>
                </div>
              )}

              {!content.showForm && (
                <div className="mailpoet-page__actions">
                  <Button variant="primary" size="lg" page="home">
                    Return to Homepage
                  </Button>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </div>
  );
}