/**
 * Team Grid Pattern
 * 
 * WordPress pattern: lsx-design/content/team-grid
 * 
 * Displays team members in a responsive grid with photos, names, roles, and optional bio/social links.
 * Commonly used on About pages, Team pages, and leadership sections.
 * 
 * **Usage:**
 * ```tsx
 * <TeamGrid
 *   members={[
 *     {
 *       name: 'Jane Doe',
 *       role: 'CEO & Founder',
 *       bio: 'Leading the company with vision.',
 *       photo: '/team/jane.jpg',
 *       social: { linkedin: 'https://linkedin.com/in/janedoe' }
 *     }
 *   ]}
 *   columns={4}
 *   variant="cards"
 * />
 * ```
 * 
 * @see {@link /guidelines/patterns/TeamGrid.md}
 */

import { Linkedin, Twitter, Mail, Globe } from 'lucide-react';

export interface TeamMember {
  /** Member name */
  name: string;
  /** Member role/title */
  role: string;
  /** Member bio/description */
  bio?: string;
  /** Member photo URL */
  photo?: string;
  /** Social media links */
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
    website?: string;
  };
  /** Optional department/category */
  department?: string;
}

export interface TeamGridProps {
  /** Array of team members */
  members: TeamMember[];
  /** Number of columns (2-4, default: 4) */
  columns?: 2 | 3 | 4;
  /** Visual variant */
  variant?: 'default' | 'cards' | 'minimal' | 'compact';
  /** Show bio text */
  showBio?: boolean;
  /** Show social links */
  showSocial?: boolean;
  /** Max width constraint */
  maxWidth?: '4xl' | '5xl' | '6xl' | 'none';
  /** Custom gap between members */
  gap?: string;
  /** Align content */
  align?: 'center' | 'left';
}

export function TeamGrid({
  members,
  columns = 4,
  variant = 'cards',
  showBio = true,
  showSocial = true,
  maxWidth = '6xl',
  gap = 'var(--spacing-8)',
  align = 'center'
}: TeamGridProps) {
  // Grid template based on columns with responsive breakpoints
  const gridStyles = {
    2: { gridTemplateColumns: 'repeat(1, 1fr)' },
    3: { gridTemplateColumns: 'repeat(1, 1fr)' },
    4: { gridTemplateColumns: 'repeat(1, 1fr)' }
  }[columns];

  // Max width class
  const maxWidthClass = maxWidth !== 'none' ? `wp-max-w-${maxWidth}` : '';

  return (
    <div className={maxWidthClass}>
      <div
        style={{
          display: 'grid',
          ...gridStyles,
          gap
        }}
      >
        {members.map((member, index) => (
          <div
            key={index}
            style={{
              ...(variant === 'cards' ? {
                backgroundColor: 'var(--card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-soft)',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              } : variant === 'minimal' ? {
                textAlign: align
              } : variant === 'compact' ? {
                display: 'flex',
                gap: 'var(--spacing-4)',
                alignItems: 'center',
                padding: 'var(--spacing-4)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)'
              } : {
                textAlign: align
              })
            }}
            {...(variant === 'cards' ? {
              onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.12)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              },
              onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--border-soft)';
              }
            } : {})}
          >
            {/* Photo */}
            {member.photo && variant !== 'compact' && (
              <div
                style={{
                  width: '100%',
                  ...(variant === 'cards' ? {
                    aspectRatio: '1',
                    overflow: 'hidden'
                  } : {
                    marginBottom: 'var(--spacing-4)'
                  })
                }}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    ...(variant === 'minimal' || variant === 'default' ? {
                      borderRadius: 'var(--radius-full)',
                      maxWidth: '200px',
                      margin: align === 'center' ? '0 auto' : '0'
                    } : {})
                  }}
                />
              </div>
            )}

            {/* Content Container */}
            <div
              style={{
                ...(variant === 'cards' ? {
                  padding: 'var(--spacing-6)'
                } : variant === 'compact' ? {
                  flex: 1
                } : {})
              }}
            >
              {/* Compact Photo */}
              {member.photo && variant === 'compact' && (
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: 'var(--radius-full)',
                    objectFit: 'cover',
                    flexShrink: 0,
                    border: '2px solid var(--border)'
                  }}
                />
              )}

              {/* Department Badge (optional) */}
              {member.department && variant !== 'compact' && (
                <div
                  style={{
                    fontFamily: 'var(--font-secondary)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--primary)',
                    backgroundColor: 'var(--primary-soft)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius)',
                    display: 'inline-block',
                    marginBottom: 'var(--spacing-3)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {member.department}
                </div>
              )}

              {/* Name */}
              <h3
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: variant === 'compact' ? 'var(--text-base)' : 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                  marginBottom: 'var(--spacing-2)'
                }}
              >
                {member.name}
              </h3>

              {/* Role */}
              <div
                style={{
                  fontFamily: 'var(--font-secondary)',
                  fontSize: variant === 'compact' ? 'var(--text-sm)' : 'var(--text-base)',
                  color: 'var(--muted-foreground)',
                  marginBottom: showBio && member.bio ? 'var(--spacing-3)' : 'var(--spacing-4)'
                }}
              >
                {member.role}
              </div>

              {/* Bio */}
              {showBio && member.bio && variant !== 'compact' && (
                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-sm)',
                    lineHeight: '1.6',
                    color: 'var(--muted-foreground)',
                    marginBottom: showSocial && member.social ? 'var(--spacing-4)' : '0'
                  }}
                >
                  {member.bio}
                </p>
              )}

              {/* Social Links */}
              {showSocial && member.social && (
                <div
                  style={{
                    display: 'flex',
                    gap: 'var(--spacing-3)',
                    ...(align === 'center' && variant !== 'compact' ? {
                      justifyContent: 'center'
                    } : {})
                  }}
                >
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius)',
                        backgroundColor: 'var(--muted)',
                        color: 'var(--muted-foreground)',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none'
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

                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on Twitter`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius)',
                        backgroundColor: 'var(--muted)',
                        color: 'var(--muted-foreground)',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none'
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

                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      aria-label={`Email ${member.name}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius)',
                        backgroundColor: 'var(--muted)',
                        color: 'var(--muted-foreground)',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none'
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

                  {member.social.website && (
                    <a
                      href={member.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s website`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius)',
                        backgroundColor: 'var(--muted)',
                        color: 'var(--muted-foreground)',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none'
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
          </div>
        ))}
      </div>
    </div>
  );
}
