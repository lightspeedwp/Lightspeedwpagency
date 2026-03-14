/**
 * Client Feedback Form Template
 *
 * Theme: "Neon Rating"
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - All styling via BEM classes in page-client-feedback.css
 * - Colors via scoped CSS variables (no hardcoded hex in JSX)
 * - Fonts: var(--font-primary), var(--font-secondary)
 *
 * @see /src/styles/templates/page-client-feedback.css
 */

import '../../../styles/templates/page-client-feedback.css';
import { useState } from 'react';
import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Button } from '../blocks/design/Buttons';
import { Star } from '@phosphor-icons/react';

export function ClientFeedbackTemplate() {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);

  const getRatingLabel = (val: number) => {
    switch (val) {
      case 1: return "Needs Improvement";
      case 2: return "Below Expectations";
      case 3: return "Met Expectations";
      case 4: return "Exceeded Expectations";
      case 5: return "Outstanding";
      default: return "Select a Rating";
    }
  };

  return (
    <div className="feedback-page">
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Client Feedback' },
        ]}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="feedback-page__hero">
        <Container>
          <ScrollReveal animation="fade-up">
            <h1 className="feedback-page__title">
              How did we <span className="feedback-page__highlight">do?</span>
            </h1>
            <p className="feedback-page__desc">
              Your feedback is crucial to helping us improve our services and process. Thank you for taking the time to share your experience.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          FORM SECTION
          ============================================ */}
      <section className="feedback-page__form-section">
        <Container>
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="feedback-page__form-container">
              
              {/* Star Rating Interactive */}
              <div className="feedback-page__rating">
                <span className="feedback-page__rating-label">
                  {getRatingLabel(hoveredRating || rating)}
                </span>
                <div className="feedback-page__stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`feedback-page__star-btn ${(hoveredRating || rating) >= star ? 'feedback-page__star-btn--active' : ''}`}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      onClick={() => setRating(star)}
                      aria-label={`Rate ${star} stars`}
                    >
                      <Star 
                        size={48} 
                        weight={(hoveredRating || rating) >= star ? "fill" : "regular"} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <form className="feedback-page__form" onSubmit={(e) => e.preventDefault()}>
                <div className="wp-grid-2-cols">
                  <div className="feedback-page__form-group">
                    <label className="feedback-page__label" htmlFor="clientName">Your Name</label>
                    <input type="text" id="clientName" className="feedback-page__input" placeholder="Jane Doe" required />
                  </div>
                  <div className="feedback-page__form-group">
                    <label className="feedback-page__label" htmlFor="companyName">Company Name</label>
                    <input type="text" id="companyName" className="feedback-page__input" placeholder="Acme Corp" required />
                  </div>
                </div>

                <div className="feedback-page__form-group">
                  <label className="feedback-page__label" htmlFor="projectHighlight">What was the highlight of working with us?</label>
                  <textarea id="projectHighlight" className="feedback-page__textarea" placeholder="Tell us what went well..." required></textarea>
                </div>

                <div className="feedback-page__form-group">
                  <label className="feedback-page__label" htmlFor="projectImprovement">What could we have done better?</label>
                  <textarea id="projectImprovement" className="feedback-page__textarea" placeholder="We value honest feedback..." required></textarea>
                </div>

                <div className="feedback-page__form-group wp-mt-4">
                  <label className="feedback-page__checkbox-label">
                    <input type="checkbox" className="feedback-page__checkbox" />
                    <span>I give permission for LightSpeed to use this feedback as a testimonial on their website and marketing materials.</span>
                  </label>
                </div>

                <div className="feedback-page__actions">
                  <Button type="submit" size="lg" disabled={rating === 0}>
                    Submit Feedback
                  </Button>
                </div>
              </form>

            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}