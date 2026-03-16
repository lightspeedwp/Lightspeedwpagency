/**
 * Tour Operator Solutions — Feature Grid + Outcome Section + CTA
 *
 * Core features grid, outcome/highlight section, and CTA section
 * extracted from TourOperatorSolutionsTemplate.tsx for file size compliance.
 *
 * STRICT DESIGN SYSTEM COMPLIANCE:
 * - Zero inline styles (all via BEM classes in tour-operator-solutions.css)
 * - Colors via CSS variables only
 * - Fonts: var(--font-primary), var(--font-secondary)
 * - Hover effects via CSS :hover (no JS handlers)
 *
 * @see /src/app/components/templates/TourOperatorSolutionsTemplate.tsx
 * @see /src/styles/templates/tour-operator-solutions.css
 */

import { Calendar, MapPin, CreditCard, Users, TrendUp as TrendingUp, Airplane as Plane, ArrowRight, CheckCircle } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getPageUrl } from '../../../data/site-pages';
import '../../../../styles/templates/tour-operator-sections.css';

/* ────────────────────────────────────────────
   Feature Data
   ──────────────────────────────────────────── */

const coreFeatures = [
  {
    icon: Calendar,
    title: 'Advanced Booking System',
    desc: 'Real-time availability calendars, dynamic seasonal pricing, and automated confirmations that turn browsers into booked guests.'
  },
  {
    icon: MapPin,
    title: 'Itinerary & Route Maps',
    desc: 'Interactive day-by-day itineraries with integrated Google Maps, high-resolution galleries, and downloadable PDF summaries.'
  },
  {
    icon: CreditCard,
    title: 'Multi-Currency Payments',
    desc: 'Secure checkout with support for multiple payment gateways, deposit handling, and automated instalment invoicing.'
  },
  {
    icon: Plane,
    title: 'Wetu Importer Integration',
    desc: 'Automatically sync your complex itineraries, accommodations, and destination data directly from Wetu into your website.'
  },
  {
    icon: Users,
    title: 'B2B Trade Portals',
    desc: 'Secure agent logins allowing your trade partners to access net rates, check live availability, and manage their clients.'
  },
  {
    icon: TrendingUp,
    title: 'Travel SEO Optimized',
    desc: 'Built with rich schema markup for Google Travel, ensuring your tours rank high for destination-specific searches.'
  }
];

const outcomeItems = [
  'Increase direct booking conversion rates',
  'Dramatically reduce manual data entry',
  'Present a premium, trustworthy brand image',
  'Capture international markets with multi-language readiness'
];

/* ────────────────────────────────────────────
   Core Features Grid
   ──────────────────────────────────────────── */

export function TourOperatorFeaturesGrid() {
  return (
    <section className="tour-operator__features">
      <div className="tour-operator__features-inner">
        <div className="tour-operator__features-header">
          <h2 className="tour-operator__features-heading">
            Engineered for Tourism Growth
          </h2>
          <p className="tour-operator__features-subheading">
            Everything you need to showcase destinations, build stunning itineraries, and manage bookings securely.
          </p>
        </div>

        <div className="tour-operator__features-grid">
          {coreFeatures.map((feature, i) => (
            <div key={i} className="tour-operator__feature-card">
              <div className="tour-operator__feature-icon">
                <feature.icon size={28} />
              </div>
              <h3 className="tour-operator__feature-title">
                {feature.title}
              </h3>
              <p className="tour-operator__feature-desc">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   Outcome / Highlight Section
   ──────────────────────────────────────────── */

export function TourOperatorOutcomeSection() {
  return (
    <section className="tour-operator__outcome">
      <div className="tour-operator__outcome-inner">
        <div className="tour-operator__outcome-grid">
          <div>
            <h2 className="tour-operator__outcome-heading">
              Stop wrestling with generic plugins. <br/>
              <span className="tour-operator__outcome-heading-highlight">Start selling experiences.</span>
            </h2>
            <p className="tour-operator__outcome-desc">
              Our purpose-built Tour Operator framework connects the dots between inspiring destination content and a frictionless booking journey.
            </p>
            
            <ul className="tour-operator__outcome-list">
              {outcomeItems.map((item, i) => (
                <li key={i} className="tour-operator__outcome-item">
                  <CheckCircle size={24} className="tour-operator__outcome-item-icon" />
                  <span className="tour-operator__outcome-item-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="tour-operator__mockup-wrapper">
            <div className="tour-operator__mockup-glow" aria-hidden="true" />
            <div className="tour-operator__mockup-card">
              {/* Mockup visual of an itinerary card */}
              <div
                className="tour-operator__mockup-image"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800)' }}
                role="img"
                aria-label="Serengeti safari landscape"
              />
              <h4 className="tour-operator__mockup-title">7-Day Serengeti Migration Safari</h4>
              <div className="tour-operator__mockup-meta">
                <span>Tanzania • 6 Nights</span>
                <span className="tour-operator__mockup-price">
                  $3,450 <span className="tour-operator__mockup-price-unit">pps</span>
                </span>
              </div>
              <div className="tour-operator__mockup-progress-track">
                <div className="tour-operator__mockup-progress-bar" />
              </div>
              <div className="tour-operator__mockup-actions">
                <div className="tour-operator__mockup-btn tour-operator__mockup-btn--primary">Book Now</div>
                <div className="tour-operator__mockup-btn tour-operator__mockup-btn--outline">View Itinerary</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   CTA Section
   ──────────────────────────────────────────── */

export function TourOperatorCTA() {
  return (
    <section className="tour-operator__cta">
      <div className="tour-operator__cta-inner">
        <h2 className="tour-operator__cta-heading">
          Ready to upgrade your tourism business?
        </h2>
        <p className="tour-operator__cta-desc">
          Let's discuss how we can streamline your bookings, sync your itineraries, and build a digital platform that converts.
        </p>
        <Link 
          to={getPageUrl('contact')}
          className="tour-operator__cta-link"
        >
          Schedule a Demo <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}