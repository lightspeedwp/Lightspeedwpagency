/**
 * Trust Badges Component
 * 
 * Social proof badges for footer:
 * - 90+ Lighthouse scores
 * - WCAG AA certified
 * - 150+ sites delivered
 * - 15+ years experience
 * 
 * Increases credibility and conversion rates.
 */

import { Award, Zap, Shield, Briefcase } from 'lucide-react';

export function TrustBadges() {
  return (
    <div className="trust-badges">
      {[
        {
          icon: Zap,
          label: '90+ Lighthouse',
          description: 'Performance Guaranteed'
        },
        {
          icon: Shield,
          label: 'WCAG AA',
          description: 'Accessibility Certified'
        },
        {
          icon: Briefcase,
          label: '150+ Sites',
          description: 'Successfully Delivered'
        },
        {
          icon: Award,
          label: '15+ Years',
          description: 'WordPress Expertise'
        }
      ].map((badge, index) => (
        <div key={index} className="trust-badge">
          <badge.icon 
            className="trust-badge__icon"
            aria-hidden="true"
          />
          <div className="trust-badge__content">
            <div className="trust-badge__label">
              {badge.label}
            </div>
            <div className="trust-badge__description">
              {badge.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}