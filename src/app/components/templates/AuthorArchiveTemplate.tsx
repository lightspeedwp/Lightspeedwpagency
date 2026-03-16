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
 * - UPDATED: Now uses PostCard pattern component (Phase 2.1b)
 *
 * Sub-components:
 * - SingleAuthorArchive — Single author view + AuthorCard
 *
 * @see /src/styles/templates/author-archive.css
 * @see /src/styles/templates/archive.css
 * @see /src/app/components/patterns/PostCard.tsx
 */

import '../../../styles/templates/author-archive.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { NewsletterSignup } from '../patterns/NewsletterSignup';
import { SocialProof } from '../patterns/SocialProof';
import { Badge } from '../blocks/design/Badge';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { PenNib } from '@phosphor-icons/react';
import { blogAuthors } from '../../data/blog-posts';
import { clientLogos } from '../../data/logos';
import { authorArchiveHero } from '../../data/author-archive';
import { SingleAuthorArchive, AuthorCard } from './author-archive/SingleAuthorArchive';

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
      <section className="archive-header wp-relative wp-overflow-hidden">
        {/* Mesh-grid decoration */}
        <div
          className="archive-header__mesh-grid"
          aria-hidden="true"
        />
        {/* Orb glow */}
        <div
          className="archive-header__orb"
          aria-hidden="true"
        />

        <Container>
          <ScrollReveal animation="fade-up">
            <div className="wp-relative">
              {/* Neon badge */}
              <div className="wp-flex wp-justify-center wp-mb-6">
                <Badge variant="primary" size="sm">
                  <PenNib size={12} className="wp-mr-1" />
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
            <div className="wp-grid-3-cols wp-gap-8">
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
