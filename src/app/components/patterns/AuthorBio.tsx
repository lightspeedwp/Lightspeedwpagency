/**
 * Author Bio Pattern
 * 
 * WordPress pattern: lsx-design/content/author-bio
 * 
 * Displays author information with avatar, bio, social links, and post count.
 * Commonly used at the end of blog posts or on author archive pages.
 * 
 * **Usage:**
 * ```tsx
 * <AuthorBio
 *   author={{
 *     name: 'Jane Smith',
 *     role: 'Senior WordPress Developer',
 *     avatar: '/images/jane.jpg',
 *     bio: 'Jane has been building WordPress sites for over 10 years...',
 *     postCount: 42,
 *     social: {
 *       linkedin: 'https://linkedin.com/in/janesmith',
 *       twitter: 'https://twitter.com/janesmith',
 *       website: 'https://janesmith.com'
 *     }
 *   }}
 *   variant="card"
 *   showSocial
 * />
 * ```
 * 
 * @see {@link /guidelines/patterns/AuthorBio.md}
 */

import { Linkedin, Twitter, Globe, Mail } from 'lucide-react';

export interface AuthorSocial {
  linkedin?: string;
  twitter?: string;
  website?: string;
  email?: string;
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  postCount?: number;
  social?: AuthorSocial;
}

export interface AuthorBioProps {
  /** Author data */
  author: Author;
  /** Visual variant */
  variant?: 'card' | 'inline' | 'minimal';
  /** Show social links */
  showSocial?: boolean;
  /** Show post count */
  showPostCount?: boolean;
  /** Avatar size */
  avatarSize?: 'sm' | 'md' | 'lg';
  /** Align content */
  align?: 'left' | 'center';
  /** Custom className */
  className?: string;
}

export function AuthorBio({
  author,
  variant = 'card',
  showSocial = true,
  showPostCount = true,
  avatarSize = 'md',
  align = 'left',
  className = ''
}: AuthorBioProps) {
  // Avatar sizes
  const avatarSizes = {
    sm: '64px',
    md: '96px',
    lg: '128px'
  };

  // Container styles based on variant
  const containerStyles = {
    card: {
      padding: 'var(--spacing-10)',
      backgroundColor: 'var(--card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-soft)'
    },
    inline: {
      padding: 'var(--spacing-6)',
      backgroundColor: 'transparent',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    },
    minimal: {
      padding: 0,
      backgroundColor: 'transparent'
    }
  };

  // Layout direction based on alignment
  const isCenter = align === 'center';

  return (
    <div
      className={className}
      style={{
        ...containerStyles[variant]
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: isCenter ? 'column' : 'row',
          gap: 'var(--spacing-6)',
          alignItems: isCenter ? 'center' : 'flex-start',
          flexWrap: 'wrap',
          textAlign: isCenter ? 'center' : 'left'
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: avatarSizes[avatarSize],
            height: avatarSizes[avatarSize],
            borderRadius: 'var(--radius-full)',
            backgroundImage: `url(${author.avatar})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            flexShrink: 0,
            border: '3px solid var(--border)'
          }}
          role="img"
          aria-label={`${author.name}'s profile picture`}
        />

        {/* Bio Content */}
        <div
          style={{
            flex: 1,
            minWidth: isCenter ? '100%' : '300px'
          }}
        >
          {/* Name */}
          <h3
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--foreground)',
              marginBottom: 'var(--spacing-1)'
            }}
          >
            {variant === 'minimal' ? author.name : `About ${author.name}`}
          </h3>

          {/* Role & Post Count */}
          <p
            style={{
              fontFamily: 'var(--font-secondary)',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--primary)',
              marginBottom: 'var(--spacing-4)'
            }}
          >
            {author.role}
            {showPostCount && author.postCount && (
              <> • {author.postCount} article{author.postCount !== 1 ? 's' : ''}</>
            )}
          </p>

          {/* Bio */}
          <p
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-base)',
              lineHeight: '1.7',
              color: 'var(--muted-foreground)',
              marginBottom: showSocial && author.social ? 'var(--spacing-4)' : 0
            }}
          >
            {author.bio}
          </p>

          {/* Social Links */}
          {showSocial && author.social && (
            <div
              style={{
                display: 'flex',
                gap: 'var(--spacing-3)',
                flexWrap: 'wrap',
                justifyContent: isCenter ? 'center' : 'flex-start'
              }}
            >
              {author.social.linkedin && (
                <a
                  href={author.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'var(--muted)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    color: 'var(--foreground)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-secondary)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary)';
                    e.currentTarget.style.color = 'var(--primary-foreground)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--muted)';
                    e.currentTarget.style.color = 'var(--foreground)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                  aria-label={`${author.name} on LinkedIn`}
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              )}

              {author.social.twitter && (
                <a
                  href={author.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'var(--muted)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    color: 'var(--foreground)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-secondary)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary)';
                    e.currentTarget.style.color = 'var(--primary-foreground)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--muted)';
                    e.currentTarget.style.color = 'var(--foreground)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                  aria-label={`${author.name} on Twitter`}
                >
                  <Twitter size={16} />
                  Twitter
                </a>
              )}

              {author.social.website && (
                <a
                  href={author.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'var(--muted)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    color: 'var(--foreground)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-secondary)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary)';
                    e.currentTarget.style.color = 'var(--primary-foreground)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--muted)';
                    e.currentTarget.style.color = 'var(--foreground)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                  aria-label={`${author.name}'s website`}
                >
                  <Globe size={16} />
                  Website
                </a>
              )}

              {author.social.email && (
                <a
                  href={`mailto:${author.social.email}`}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'var(--muted)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    color: 'var(--foreground)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-secondary)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary)';
                    e.currentTarget.style.color = 'var(--primary-foreground)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--muted)';
                    e.currentTarget.style.color = 'var(--foreground)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                  aria-label={`Email ${author.name}`}
                >
                  <Mail size={16} />
                  Email
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
