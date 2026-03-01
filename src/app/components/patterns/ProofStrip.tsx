/**
 * ProofStrip Pattern
 *
 * WordPress block: wp:group (proof strip variant)
 * BEM class: .wp-block-proof-strip / .proof-strip
 *
 * A compact horizontal bar of key trust signals placed at VP2
 * (immediately after the hero section) for maximum authority impact.
 *
 * Shows: client count, average rating, years experience, and other
 * key metrics that establish credibility before the visitor scrolls further.
 *
 * **Strategy source:** Audit 06 — Authority and Proof Placement
 * "Move social proof to VP2 on the homepage."
 *
 * @see /reports/2026-02/strategy-audit/06-authority-and-proof-placement-audit.md
 * @see /src/styles/patterns/proof-strip.css
 */

import type { LucideIcon } from 'lucide-react';
import { Users, Star, Calendar, Award } from 'lucide-react';

/* ============================================
   TYPES
   ============================================ */

export interface ProofStripStat {
  /** Icon component from lucide-react */
  icon: LucideIcon;
  /** The numeric value to display (e.g. "500+", "4.9/5") */
  value: string;
  /** Description label (e.g. "Projects Delivered") */
  label: string;
}

interface ProofStripProps {
  /** Array of stats to display */
  stats?: ProofStripStat[];
  /** Visual variant */
  variant?: 'default' | 'neon';
  /** Optional CSS class */
  className?: string;
}

/* ============================================
   DEFAULT STATS
   ============================================ */

const defaultStats: ProofStripStat[] = [
  { icon: Users, value: '500+', label: 'Projects Delivered' },
  { icon: Star, value: '4.9/5', label: 'Average Client Rating' },
  { icon: Calendar, value: '22+', label: 'Years WordPress Experience' },
  { icon: Award, value: '98%', label: 'Client Retention Rate' },
];

/* ============================================
   COMPONENT
   ============================================ */

export function ProofStrip({
  stats = defaultStats,
  variant = 'default',
  className = '',
}: ProofStripProps) {
  const variantClass = variant === 'neon' ? 'proof-strip--neon' : '';

  return (
    <div
      className={`proof-strip ${variantClass} ${className}`.trim()}
      role="region"
      aria-label="Key achievements"
    >
      <div className="proof-strip__inner">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={stat.label} style={{ display: 'contents' }}>
              {/* Divider between items (not before first) */}
              {index > 0 && <div className="proof-strip__divider" aria-hidden="true" />}

              <div className="proof-strip__item">
                <div className="proof-strip__icon" aria-hidden="true">
                  <IconComponent size={20} />
                </div>
                <div className="proof-strip__text">
                  <span className="proof-strip__value">{stat.value}</span>
                  <span className="proof-strip__label">{stat.label}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProofStrip;
