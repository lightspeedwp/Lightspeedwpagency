/**
 * Team Grid Pattern
 * 
 * WordPress pattern: lsx-design/content/team-grid
 * 
 * Displays team members in a responsive grid.
 * 
 * @see /src/app/utils/icon-map.ts
 * @see {@link /guidelines/patterns/TeamGrid.md}
 */

import { LinkedinLogo as Linkedin, TwitterLogo as Twitter, Envelope as Mail, Globe } from '@phosphor-icons/react';


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
  // Grid classes
  const gridClasses = [
    'team-grid',
    `team-grid--${columns}-cols`
  ].filter(Boolean).join(' ');

  // Max width class
  const maxWidthClass = maxWidth !== 'none' ? `wp-max-w-${maxWidth}` : '';

  return (
    <div className={maxWidthClass}>
      <div
        className={gridClasses}
        style={{ gap }}
      >
        {members.map((member, index) => {
          // Card classes
          const cardClasses = [
            'team-card',
            `team-card--${variant}`,
            `team-card--align-${align}`
          ].filter(Boolean).join(' ');

          return (
            <div key={index} className={cardClasses}>
              {/* Photo */}
              {member.photo && variant !== 'compact' && (
                <div className="team-card__photo-wrapper">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="team-card__photo"
                  />
                </div>
              )}

              {/* Content Container */}
              <div className="team-card__content">
                {/* Compact Photo */}
                {member.photo && variant === 'compact' && (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="team-card__photo--compact"
                  />
                )}

                {/* Department Badge (optional) */}
                {member.department && variant !== 'compact' && (
                  <div className="team-card__department">
                    {member.department}
                  </div>
                )}

                {/* Name */}
                <h3 className="team-card__name">
                  {member.name}
                </h3>

                {/* Role */}
                <div className="team-card__role">
                  {member.role}
                </div>

                {/* Bio */}
                {showBio && member.bio && variant !== 'compact' && (
                  <p className="team-card__bio">
                    {member.bio}
                  </p>
                )}

                {/* Social Links */}
                {showSocial && member.social && (
                  <div className="team-card__social">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="team-card__social-link"
                      >
                        <Linkedin size={20} weight="fill" />
                      </a>
                    )}

                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on Twitter`}
                        className="team-card__social-link"
                      >
                        <Twitter size={20} weight="fill" />
                      </a>
                    )}

                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        aria-label={`Email ${member.name}`}
                        className="team-card__social-link"
                      >
                        <Mail size={20} weight="fill" />
                      </a>
                    )}

                    {member.social.website && (
                      <a
                        href={member.social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s website`}
                        className="team-card__social-link"
                      >
                        <Globe size={20} weight="fill" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
