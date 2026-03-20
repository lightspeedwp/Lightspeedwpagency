/**
 * Section Divider Pattern
 *
 * Decorative divider between homepage sections with gradient lines
 * and glowing orbs. Adds visual rhythm and funky atmosphere.
 *
 * BEM block: .section-divider
 *
 * @see /src/styles/patterns/section-divider.css
 */

interface SectionDividerProps {
  variant?: 'default' | 'glow' | 'minimal';
}

export function SectionDivider({ variant = 'default' }: SectionDividerProps) {
  return (
    <div className={`section-divider section-divider--${variant}`} aria-hidden="true">
      <div className="section-divider__line section-divider__line--left"></div>
      <div className="section-divider__orb"></div>
      <div className="section-divider__line section-divider__line--right"></div>
    </div>
  );
}
