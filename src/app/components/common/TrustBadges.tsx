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
    <div 
      className="grid grid-cols-2 md:grid-cols-4 gap-6"
      style={{
        padding: '24px 0',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)'
      }}
    >
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
        <div 
          key={index}
          className="flex flex-col items-center text-center gap-2"
        >
          <badge.icon 
            size={32}
            style={{ color: 'var(--primary)' }}
            aria-hidden="true"
          />
          <div>
            <div 
              style={{
                fontSize: 'var(--text-base)',
                fontFamily: 'var(--font-primary)',
                fontWeight: 500,
                color: 'var(--sidebar-foreground)'
              }}
            >
              {badge.label}
            </div>
            <div 
              style={{
                fontSize: 'var(--text-xs)',
                fontFamily: 'Manrope, sans-serif',
                color: 'var(--primary-foreground)' // White text for high contrast on dark backgrounds
              }}
            >
              {badge.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}