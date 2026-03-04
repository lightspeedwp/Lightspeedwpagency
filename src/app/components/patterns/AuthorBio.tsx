/**
 * Author Bio Pattern
 * 
 * Author biography with social links for blog posts.
 * Maps to WordPress pattern: lsx-design/content/author-bio
 * 
 * **Design Token Compliance:**
 * - Uses /src/styles/patterns/author-bio.css
 * - 100% CSS variables
 * - BEM naming
 */

import { LinkedinLogo as Linkedin, TwitterLogo as Twitter, Globe, EnvelopeSimple as Mail } from '@phosphor-icons/react';

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
  // Build classes
  const containerClass = [
    'author-bio',
    `author-bio--${variant}`,
    `author-bio--${align}`,
    className
  ].filter(Boolean).join(' ');

  const avatarClass = [
    'author-bio__avatar',
    `author-bio__avatar--${avatarSize}`
  ].join(' ');

  const hasSocial = showSocial && author.social && Object.values(author.social).some(Boolean);

  return (
    <div className={containerClass}>
      <div className="author-bio__container">
        {/* Avatar */}
        <div
          className={avatarClass}
          style={{ backgroundImage: `url(${author.avatar})` }}
          role="img"
          aria-label={`${author.name}'s profile picture`}
        />

        {/* Bio Content */}
        <div className="author-bio__content">
          {/* Name */}
          <h3 className="author-bio__name">
            {variant === 'minimal' ? author.name : `About ${author.name}`}
          </h3>

          {/* Role & Post Count */}
          <p className="author-bio__role">
            {author.role}
            {showPostCount && author.postCount && (
              <> • {author.postCount} article{author.postCount !== 1 ? 's' : ''}</>
            )}
          </p>

          {/* Bio */}
          <p className={`author-bio__text ${!hasSocial ? 'author-bio__text--no-social' : ''}`}>
            {author.bio}
          </p>

          {/* Social Links */}
          {hasSocial && author.social && (
            <div className="author-bio__social">
              {author.social.linkedin && (
                <a
                  href={author.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="author-bio__social-link"
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
                  className="author-bio__social-link"
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
                  className="author-bio__social-link"
                  aria-label={`${author.name}'s website`}
                >
                  <Globe size={16} />
                  Website
                </a>
              )}

              {author.social.email && (
                <a
                  href={`mailto:${author.social.email}`}
                  className="author-bio__social-link"
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