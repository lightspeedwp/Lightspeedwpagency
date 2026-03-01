/**
 * Author Archive Template
 *
 * WordPress template: templates/archive-author.html
 * 100% CSS variables — no Tailwind.
 * BEM naming: .author-*
 *
 * Migration notes:
 *  - `useNavigation()` → declarative `<Link>` from react-router
 *  - `CTASection` → `FunkyCTA`
 *  - Inline styles → BEM classes in author-archive.css + archive.css
 *  - Funky neon hero with mesh-grid + orb-glow + badge
 *
 * @see /src/styles/templates/author-archive.css
 * @see /src/styles/templates/archive.css
 */

import '../../../styles/templates/author-archive.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { PaginationNav } from '../patterns/PaginationNav';
import { NewsletterSignup } from '../patterns/NewsletterSignup';
import { SocialProof } from '../patterns/SocialProof';
import { Badge } from '../blocks/design/Badge';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Calendar, User, Clock, MapPin, Twitter, Linkedin, Globe, PenTool, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { slugToPath } from '../../utils/route-map';
import { blogAuthors, blogPosts, getPostsByAuthor, getAuthorBySlug, type BlogAuthor, type BlogPost } from '../../data/blog-posts';
import { clientLogos } from '../../data/logos';
import { authorArchiveHero } from '../../data/author-archive';

/* ────────────────────────────────────────────
   Props
   ──────────────────────────────────────────── */

interface AuthorArchiveTemplateProps {
  /** Author slug – when provided, renders the single-author view */
  authorSlug?: string;
  /** Current pagination page */
  currentPage?: number;
}

/* ────────────────────────────────────────────
   Component
   ──────────────────────────────────────────── */

export function AuthorArchiveTemplate({
  authorSlug,
  currentPage = 1,
}: AuthorArchiveTemplateProps) {
  const postsPerPage = 9;

  /* If an authorSlug is provided render the single-author archive,
     otherwise render the "all authors" index. */

  if (authorSlug) {
    return (
      <SingleAuthorArchive
        authorSlug={authorSlug}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
      />
    );
  }

  return <AllAuthorsIndex />;
}

/* ============================================
   ALL AUTHORS INDEX
   ============================================ */

function AllAuthorsIndex() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Insights', href: '/insights' },
    { label: 'Authors' },
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart items={breadcrumbs} />

      {/* Funky Neon Hero */}
      <section className="archive-header" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Mesh-grid decoration */}
        <div
          className="archive-header__mesh-grid"
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(color-mix(in srgb, var(--primary) 8%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--primary) 8%, transparent) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            pointerEvents: 'none',
          }}
        />
        {/* Orb glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(circle, color-mix(in srgb, var(--primary) 15%, transparent) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <Container>
          <ScrollReveal animation="fade-up">
            <div style={{ position: 'relative' }}>
              {/* Neon badge */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-6)' }}>
                <Badge variant="primary" size="sm">
                  <PenTool size={12} style={{ marginRight: 'var(--spacing-1)' }} />
                  {authorArchiveHero.badge.text}
                </Badge>
              </div>

              <h1 className="archive-header__title">
                {authorArchiveHero.title}
              </h1>
              <p className="archive-header__description">
                {authorArchiveHero.subtitle}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Authors Grid */}
      <Section background="default" spacing="lg">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wp-grid-3-cols" style={{ gap: 'var(--spacing-8)' }}>
              {blogAuthors.map((author) => (
                <AuthorCard key={author.id} author={author} />
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Social Proof */}
      <SocialProof
        variant="funky"
        logos={clientLogos.filter((l) => l.category === 'client').slice(0, 6)}
        title="Insights trusted by leading brands"
      />

      {/* Newsletter */}
      <NewsletterSignup variant="funky" />

      {/* CTA */}
      <FunkyCTA
        title="Ready to start your project?"
        description="Our team of writers and developers can help you craft compelling content and high-performance websites."
        buttonText="Get in touch"
        buttonPage="contact"
        benefits={[
          'Expert WordPress development',
          'Content strategy & SEO',
          'Ongoing support & maintenance',
        ]}
      />
    </>
  );
}

/* ============================================
   AUTHOR CARD
   ============================================ */

function AuthorCard({ author }: { author: BlogAuthor }) {
  const authorPosts = getPostsByAuthor(author.slug);

  return (
    <Link
      to={`/insights/author/${author.slug}`}
      className="archive-card"
      aria-label={`View posts by ${author.name}`}
    >
      {/* Avatar */}
      <div className="archive-card__image-wrapper" style={{ aspectRatio: '1 / 1', maxHeight: '240px' }}>
        <img
          src={author.avatar}
          alt={author.name}
          className="archive-card__image"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="archive-card__content">
        <h3 className="archive-card__title" style={{ color: 'var(--foreground)' }}>
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

function SingleAuthorArchive({
  authorSlug,
  currentPage,
  postsPerPage,
}: {
  authorSlug: string;
  currentPage: number;
  postsPerPage: number;
}) {
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
          <Link to="/insights" className="wp-block-button__link" style={{ marginTop: 'var(--spacing-6)', display: 'inline-block' }}>
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
                    <PenTool size={14} />
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
                        <Twitter size={16} />
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
                        <Linkedin size={16} />
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
              <div className="wp-grid-3-cols" style={{ gap: 'var(--spacing-8)' }}>
                {currentPosts.map((post) => (
                  <PostCard key={post.id} post={post} author={author} />
                ))}
              </div>
            ) : (
              <p className="archive-header__description" style={{ textAlign: 'center' }}>
                No posts found for this author.
              </p>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div style={{ marginTop: 'var(--spacing-12)' }}>
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

/* ============================================
   POST CARD (used in single-author view)
   ============================================ */

function PostCard({ post, author }: { post: BlogPost; author: BlogAuthor }) {
  return (
    <Link
      to={slugToPath(`post-${post.slug}`)}
      className="archive-card"
      aria-label={`Read: ${post.title}`}
    >
      <div className="archive-card__image-wrapper" style={{ aspectRatio: '16 / 9' }}>
        <img
          src={post.featuredImage}
          alt={post.title}
          className="archive-card__image"
          loading="lazy"
        />
      </div>

      <div className="archive-card__content">
        <div className="author-posts__badge-wrapper">
          <Badge variant="outline" size="sm">
            {post.categories[0] || 'General'}
          </Badge>
        </div>

        <h3 className="archive-card__title" style={{ color: 'var(--foreground)' }}>
          {post.title}
        </h3>

        <p className="archive-card__excerpt">
          {post.excerpt}
        </p>

        <div className="archive-card__meta">
          <span className="author-posts__meta-text">
            <Calendar size={12} style={{ marginRight: 'var(--spacing-1)', display: 'inline' }} />
            {formatDate(post.date)}
          </span>
          <span className="author-posts__meta-text">{post.readingTime}</span>
        </div>
      </div>
    </Link>
  );
}

/* ────────────────────────────────────────────
   Helpers
   ──────────────────────────────────────────── */

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function getEarliestPostYear(posts: BlogPost[]): string {
  if (posts.length === 0) return 'recently';
  const earliest = posts.reduce((min, p) => {
    const d = new Date(p.date);
    return d < min ? d : min;
  }, new Date());
  return earliest.getFullYear().toString();
}