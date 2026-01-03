/**
 * Team Grid Pattern
 * 
 * WordPress Pattern: lsx-design/content/team-grid
 * 
 * A grid of team member cards with photos, names, roles, and social links.
 * Maps to WordPress Group block with nested Column blocks.
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @see /guidelines/patterns/TeamGrid.md
 */

import { Mail, Linkedin, Twitter, Globe } from 'lucide-react';
import { LazyImage } from '../ui/LazyImage';
import { useStaggerReveal } from '../../hooks/useScrollReveal';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export interface TeamGridProps {
  /** Section heading */
  heading?: string;
  /** Section description */
  description?: string;
  /** Array of team members */
  members: TeamMember[];
  /** Grid columns (default: 4) */
  columns?: {
    mobile?: 1 | 2;
    tablet?: 2 | 3;
    desktop?: 3 | 4;
  };
  /** Show bios (default: false) */
  showBios?: boolean;
  /** Show social links (default: true) */
  showSocial?: boolean;
}

export function TeamGrid({
  heading = "Meet Our Team",
  description,
  members,
  columns = { mobile: 1, tablet: 2, desktop: 4 },
  showBios = false,
  showSocial = true,
}: TeamGridProps) {
  // Grid column classes
  const gridCols = `grid-cols-${columns.mobile || 1} md:grid-cols-${columns.tablet || 2} lg:grid-cols-${columns.desktop || 4}`;

  // Scroll reveal with stagger for team cards
  const { containerRef, itemStyle } = useStaggerReveal({
    stagger: 60,        // 60ms delay between cards (faster for smaller cards)
    animation: 'fade-up', // Fade and slide up
    duration: 500,      // 500ms animation duration
    threshold: 0.1      // Trigger when 10% visible
  });

  return (
    <div className="w-full">
      {/* Section Header */}
      {(heading || description) && (
        <div className="text-center mb-12">
          {heading && (
            <h2
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--foreground)',
                marginBottom: description ? '16px' : '0',
              }}
            >
              {heading}
            </h2>
          )}
          {description && (
            <p
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-lg)',
                color: 'var(--muted-foreground)',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              {description}
            </p>
          )}
        </div>
      )}

      {/* Team Grid */}
      <div className={`grid ${gridCols} gap-8`} ref={containerRef}>
        {members.map((member, index) => (
          <div
            key={member.id}
            className="text-center"
            style={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border-soft)',
              borderRadius: 'var(--radius-lg)',
              padding: '32px',
              transition: 'all var(--transition-base)',
              ...itemStyle(index),
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--primary)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 24px -8px var(--shadow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-soft)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Avatar */}
            {member.avatar ? (
              <LazyImage
                src={member.avatar}
                alt={member.name}
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto 24px',
                  border: '4px solid var(--border)',
                }}
              />
            ) : (
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  border: '4px solid var(--border)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--muted-foreground)',
                  }}
                >
                  {member.name.charAt(0)}
                </span>
              </div>
            )}

            {/* Name */}
            <h3
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h4)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--foreground)',
                marginBottom: '8px',
              }}
            >
              {member.name}
            </h3>

            {/* Role */}
            <p
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'var(--text-base)',
                color: 'var(--primary)',
                fontWeight: 'var(--font-weight-medium)',
                marginBottom: showBios && member.bio ? '16px' : '24px',
              }}
            >
              {member.role}
            </p>

            {/* Bio (Optional) */}
            {showBios && member.bio && (
              <p
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'var(--text-small)',
                  lineHeight: '1.6',
                  color: 'var(--muted-foreground)',
                  marginBottom: '24px',
                }}
              >
                {member.bio}
              </p>
            )}

            {/* Social Links */}
            {showSocial && (member.email || member.linkedin || member.twitter || member.website) && (
              <div className="flex justify-center gap-3">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius)',
                      backgroundColor: 'var(--muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all var(--transition-base)',
                      color: 'var(--muted-foreground)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary)';
                      e.currentTarget.style.color = 'var(--primary-foreground)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--muted)';
                      e.currentTarget.style.color = 'var(--muted-foreground)';
                    }}
                  >
                    <Mail size={18} />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius)',
                      backgroundColor: 'var(--muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all var(--transition-base)',
                      color: 'var(--muted-foreground)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary)';
                      e.currentTarget.style.color = 'var(--primary-foreground)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--muted)';
                      e.currentTarget.style.color = 'var(--muted-foreground)';
                    }}
                  >
                    <Linkedin size={18} />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on Twitter`}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius)',
                      backgroundColor: 'var(--muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all var(--transition-base)',
                      color: 'var(--muted-foreground)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary)';
                      e.currentTarget.style.color = 'var(--primary-foreground)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--muted)';
                      e.currentTarget.style.color = 'var(--muted-foreground)';
                    }}
                  >
                    <Twitter size={18} />
                  </a>
                )}
                {member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s website`}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius)',
                      backgroundColor: 'var(--muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all var(--transition-base)',
                      color: 'var(--muted-foreground)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary)';
                      e.currentTarget.style.color = 'var(--primary-foreground)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--muted)';
                      e.currentTarget.style.color = 'var(--muted-foreground)';
                    }}
                  >
                    <Globe size={18} />
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}