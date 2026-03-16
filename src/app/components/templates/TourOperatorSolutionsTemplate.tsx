/**
 * Tour Operator Solutions Template
 *
 * Full-page solution template for tour operators with hero,
 * feature grid, outcome section, and CTA.
 *
 * Sub-components:
 * - TourOperatorFeaturesGrid — core features grid
 * - TourOperatorOutcomeSection — outcome/highlight section
 * - TourOperatorCTA — call-to-action section
 *   (tour-operator-solutions/TourOperatorSections.tsx)
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - All styling via BEM classes in tour-operator-solutions.css
 * - Colors via CSS variables only
 * - Fonts: var(--font-primary), var(--font-secondary)
 *
 * @see /src/styles/templates/tour-operator-solutions.css
 */

import '../../../styles/templates/tour-operator-solutions.css';
import { Compass, ArrowRight } from '@phosphor-icons/react';
import { loadCSSBundle } from '../../utils/css-bundle-loader';
import { Link } from 'react-router';
import { getPageUrl } from '../../data/site-pages';
import {
  TourOperatorFeaturesGrid,
  TourOperatorOutcomeSection,
  TourOperatorCTA,
} from './tour-operator-solutions/TourOperatorSections';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';

// Load any necessary CSS bundle
loadCSSBundle('solutions');

export function TourOperatorSolutionsTemplate() {
  return (
    <div className="tour-operator">
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'Tour Operators' },
        ]}
      />

      {/* HERO SECTION */}
      <section className="tour-operator__hero">
        {/* Neon Glow Effects */}
        <div className="tour-operator__glow--left" aria-hidden="true" />
        <div className="tour-operator__glow--right" aria-hidden="true" />

        <div className="tour-operator__hero-inner">
          <div className="tour-operator__badge">
            <Compass size={18} className="tour-operator__badge-icon" />
            <span className="tour-operator__badge-text">Tour Operator Platform</span>
          </div>

          <h1 className="tour-operator__title">
            The Ultimate Digital Engine<br />
            <span className="tour-operator__title-highlight">for Travel Pioneers</span>
          </h1>

          <p className="tour-operator__tagline">
            A high-performance, booking-ready WordPress solution tailored specifically for DMCs, safari operators, and adventure travel companies. Beautiful itineraries, seamless Wetu integration, and direct bookings built in.
          </p>

          <div className="tour-operator__btn-row">
            <Link
              to={getPageUrl('contact')}
              className="tour-operator__btn-primary"
            >
              Start Your Journey <ArrowRight size={20} />
            </Link>
            
            <Link
              to={getPageUrl('work')}
              className="tour-operator__btn-outline"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Extracted lower sections */}
      <TourOperatorFeaturesGrid />
      <TourOperatorOutcomeSection />
      <TourOperatorCTA />
    </div>
  );
}

export default TourOperatorSolutionsTemplate;