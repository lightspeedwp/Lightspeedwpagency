/**
 * Single Author Archive — Sub-component
 *
 * Renders the single-author view with profile header, posts grid,
 * pagination, and CTA. Also contains the AuthorCard component
 * used in the All Authors index.
 *
 * Extracted from AuthorArchiveTemplate.tsx for file size compliance.
 *
 * @see /src/styles/templates/author-archive.css
 */

import { Container } from '../../common/Container';
import { Section } from '../../common/Section';
import { BreadcrumbPart } from '../../parts/BreadcrumbPart';
import { PaginationNav } from '../../patterns/PaginationNav';
import { Badge } from '../../blocks/design/Badge';
import { FunkyCTA } from '../../patterns/FunkyCTA';
import { ScrollReveal } from '../../../hooks/useScrollReveal';
import { Clock, PenNib, TwitterLogo, LinkedinLogo, Globe } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { getPageUrl } from '../../../data/site-pages';
import {
  getPostsByAuthor,
  getAuthorBySlug,
  type BlogAuthor,
  type BlogPost,
} from '../../../data/blog-posts';
import { PostCardGrid } from '../../patterns/PostCard';

/**
 * Convert blog post to PostCard format
 */
function convertToPostCardFormat(post: BlogPost, author: BlogAuthor) {
  return {
    ...post,
    url: getPageUrl(`post-${post.slug}`),
    category: post.categories[0] ? {
      name: post.categories[0],
      slug: post.categories[0]
    } : undefined,
    author: {
      name: author.name,
      slug: author.slug,
      avatar: author.avatar,
      bio: author.bio
    },
    tags: post.categories || []
  };
}

/* ────────────────────────────────────────────
   Helpers
   ──────────────────────────────────────────── */

function getEarliestPostYear(posts: BlogPost[]): string {
  if (posts.length === 0) return 'recently';
  const earliest = posts.reduce((min, p) => {
    const d = new Date(p.date);
    return d < min ? d : min;
  }, new Date());
  return earliest.getFullYear().toString();
}

/* ============================================
   AUTHOR CARD
   ============================================ */

export function AuthorCard({ author }: { author: BlogAuthor }) {
  const authorPosts = getPostsByAuthor(author.slug);

  return (
    <Link
      to={`/insights/author/${author.slug}`}
      className="archive-card"
      aria-label={`View posts by ${author.name}`}
    >
      {/* Avatar */}
      <div className="archive-card__image-wrapper wp-aspect-square" style={{ maxHeight: '15rem' }}>
        <img
          src={author.avatar}
          alt={author.name}
          className="archive-card__image"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="archive-card__content">
        <h3 className="archive-card__title wp-text-foreground">
          {author.name}
        </h3>

        <div className="author-posts__badge-wrapper">
          <Badge variant="outline" size="sm">{author.role}</Badge>
        </div>

        <p className="archive-card__excerpt">
          {author.bio}
        </p>

        <div className="archive-card__meta">
          <span className="author-posts__meta-text">
            {authorPosts.length} {authorPosts.length === 1 ? 'article' : 'articles'}
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ============================================
   SINGLE AUTHOR ARCHIVE
   ============================================ */

interface SingleAuthorArchiveProps {
  authorSlug: string;
  currentPage: number;
  postsPerPage: number;
}

export function SingleAuthorArchive({
  authorSlug,
  currentPage,
  postsPerPage,
}: SingleAuthorArchiveProps) {
  const author = getAuthorBySlug(authorSlug);
  const authorPosts = getPostsByAuthor(authorSlug);

  if (!author) {
    return (
      <Section background="default" spacing="lg">
        <Container>
          <h1 className="archive-header__title">Author not found</h1>
          <p className="archive-header__description">
            Sorry, we couldn't find the author you're looking for.
          </p>
          <Link to={getPageUrl('insights')} className="wp-block-button__link wp-mt-6 wp-inline-block">
            Back to insights
          </Link>
        </Container>
      </Section>
    );
  }

  const totalPages = Math.ceil(authorPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = authorPosts.slice(startIndex, startIndex + postsPerPage);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Insights', href: '/insights' },
    { label: 'Authors', href: '/insights/author' },
    { label: author.name },
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart items={breadcrumbs} />

      {/* Author Header */}
      <section className="author-header">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="author-profile">
              {/* Avatar */}
              <div
                className="author-profile__avatar"
                style={{ backgroundImage: `url(${author.avatar})` }}
                role="img"
                aria-label={`${author.name}'s profile photo`}
              />

              {/* Info */}
              <div className="author-profile__info">
                <span className="author-profile__badge">{author.role}</span>
                <h1 className="author-profile__name">{author.name}</h1>
                <p className="author-profile__bio">{author.bio}</p>

                {/* Meta */}
                <div className="author-profile__meta">
                  <div className="author-profile__meta-item">
                    <PenNib size={14} />
                    <span className="author-profile__meta-text">
                      {authorPosts.length} {authorPosts.length === 1 ? 'article' : 'articles'}
                    </span>
                  </div>
                  <div className="author-profile__meta-item">
                    <Clock size={14} />
                    <span className="author-profile__meta-text">
                      Contributing since {getEarliestPostYear(authorPosts)}
                    </span>
                  </div>
                </div>

                {/* Social Links */}
                {author.social && (
                  <div className="author-profile__social">
                    {author.social.twitter && (
                      <a
                        href={author.social.twitter}
                        className="author-profile__social-link"
                        aria-label={`${author.name} on Twitter`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TwitterLogo size={16} />
                      </a>
                    )}
                    {author.social.linkedin && (
                      <a
                        href={author.social.linkedin}
                        className="author-profile__social-link"
                        aria-label={`${author.name} on LinkedIn`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedinLogo size={16} />
                      </a>
                    )}
                    {author.social.github && (
                      <a
                        href={author.social.github}
                        className="author-profile__social-link"
                        aria-label={`${author.name} on GitHub`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe size={16} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Posts Grid */}
      <Section background="default" spacing="lg">
        <Container>
          <ScrollReveal animation="fade-up">
            <h2 className="author-posts__title">
              Articles by {author.name}
            </h2>

            {currentPosts.length > 0 ? (
              <PostCardGrid
                posts={currentPosts.map(post => convertToPostCardFormat(post, author))}
                columns={3}
                spacing="8"
              />
            ) : (
              <p className="archive-header__description wp-text-center">
                No posts found for this author.
              </p>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="wp-mt-12">
                <PaginationNav
                  currentPage={currentPage}
                  totalPages={totalPages}
                  baseUrl={`/insights/author/${authorSlug}`}
                />
              </div>
            )}
          </ScrollReveal>
        </Container>
      </Section>

      {/* CTA */}
      <FunkyCTA
        title="Want to work with our team?"
        description="Our experts are ready to help you build something amazing with WordPress."
        buttonText="Start a conversation"
        buttonPage="contact"
        benefits={[
          'Custom WordPress development',
          'Performance-optimised themes',
          'Ongoing training & support',
        ]}
      />
    </>
  );
}
