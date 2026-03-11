/**
 * Generic Thank You Template
 *
 * Theme: "Neon Success"
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - All styling via BEM classes in page-thank-you.css
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
  CheckCircle, 
  EnvelopeSimpleOpen, 
  CalendarCheck, 
  Handshake, 
  RocketLaunch 
} from '@phosphor-icons/react';

export function GenericThankYouTemplate() {
  const location = useLocation();
  const path = location.pathname;

  // Determine content based on the route
  let content = {
    badge: 'SUCCESS',
    title: 'Thank You!',
    highlight: 'Submission Received',
    desc: 'We have received your information and will be in touch shortly.',
    icon: <CheckCircle size={80} weight="duotone" className="thank-you-page__icon" />,
    colorVar: 'var(--category-green)'
  };

  if (path.includes('newsletter') || path.includes('subscribing')) {
    content = {
      badge: 'SUBSCRIBED',
      title: 'You\'re on the',
      highlight: 'List',
      desc: 'Thanks for subscribing! Check your inbox for your first update from us.',
      icon: <EnvelopeSimpleOpen size={80} weight="duotone" className="thank-you-page__icon" />,
      colorVar: 'var(--category-cyan)'
    };
  } else if (path.includes('consultation')) {
    content = {
      badge: 'BOOKED',
      title: 'Consultation',
      highlight: 'Confirmed',
      desc: 'Your consultation has been scheduled. We look forward to speaking with you.',
      icon: <CalendarCheck size={80} weight="duotone" className="thank-you-page__icon" />,
      colorVar: 'var(--category-blue)'
    };
  } else if (path.includes('referrals')) {
    content = {
      badge: 'PARTNER',
      title: 'Referral',
      highlight: 'Submitted',
      desc: 'Thank you for the referral! Our team will reach out to the lead shortly.',
      icon: <Handshake size={80} weight="duotone" className="thank-you-page__icon" />,
      colorVar: 'var(--category-green)'
    };
  } else if (path.includes('intake') || path.includes('briefing')) {
    content = {
      badge: 'BRIEFING RECEIVED',
      title: 'Project Briefing',
      highlight: 'Under Review',
      desc: 'Thank you for providing the details! Our team is reviewing your requirements and will be in touch with the next steps.',
      icon: <RocketLaunch size={80} weight="duotone" className="thank-you-page__icon" />,
      colorVar: 'var(--category-purple)'
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

              <div className="thank-you-page__actions">
                <Button page="home" size="lg" variant="primary">
                  Return Home
                </Button>
                <Button page="blog" size="lg" variant="outline">
                  Read Our Insights
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}