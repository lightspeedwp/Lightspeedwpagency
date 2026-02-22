/**
 * Blog Index Template - Funky Neon Pass
 *
 * WordPress template: templates/home.html (posts listing page)
 * Content hub archetype with TaxonomyFilter, post grid, and pagination.
 *
 * Features:
 * - Neon gradient hero with floating orbs
 * - 3 view modes: Grid-3 "Neon Stack", Grid-2 "Magazine", List "Stream"
 * - Glow cards with dark-mode neon hover
 * - Scroll-triggered reveal animations
 * - 100% CSS variables, zero hardcoded values
 *
 * @see /guidelines/templates/overview-templates.md
 */

import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ViewSwitcher, type ViewMode } from '../common/ViewSwitcher';
import { TaxonomyFilter } from '../patterns/TaxonomyFilter';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { RecentPostsWidget } from '../patterns/RecentPostsWidget';
import { TrendingTopicsWidget } from '../patterns/TrendingTopicsWidget';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { blogPosts, blogAuthors, type BlogPost, type BlogAuthor } from '../../data/blog-posts';
import { blogCategories } from '../../data/taxonomies';
import { blogFAQs } from '../../data/faqs';
import { blogIndexHero, blogIndexCTA } from '../../data/blog-index-page';

/* ─────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────── */

function getAuthor(slug: string): BlogAuthor | undefined {
  return blogAuthors.find((a) => a.slug === slug);
}

function getCategoryName(slug: string): string {
  return blogCategories.find((c) => c.slug === slug)?.name || slug;
}

function parseReadMinutes(readingTime: string): number {
  const match = readingTime.match(/\d+/);
  return match ? parseInt(match[0], 10) : 5;
}

/* ─────────────────────────────────────────────
   CARD VARIANT 1 — NEON STACK (3-col)
   Vertical card with glowing top-border accent
   ───────────────────────────────────────────── */

function NeonStackCard({ post }: { post: BlogPost }) {
  const author = getAuthor(post.author);
  return (
    <Link to={`/blog/${post.slug}`} className="blog-neon" aria-label={`Read ${post.title}`}>
      <article className="blog-neon__wrap">
        <div className="blog-neon__img-box">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="blog-neon__img"
            loading="lazy"
          />
          {post.categories[0] && (
            <span className="blog-neon__category">
              {getCategoryName(post.categories[0])}
            </span>
          )}
        </div>
        <div className="blog-neon__body">
          <h3 className="blog-neon__title">{post.title}</h3>
          <p className="blog-neon__excerpt">{post.excerpt}</p>
          <div className="blog-neon__meta">
            {author && (
              <span className="blog-neon__meta-item">
                <User size={12} />
                {author.name}
              </span>
            )}
            <span className="blog-neon__meta-item">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </span>
            <span className="blog-neon__read-more">
              Read <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

/* ─────────────────────────────────────────────
   CARD VARIANT 2 — MAGAZINE (2-col)
   Larger image, author avatar, reading-time bar
   ───────────────────────────────────────────── */

function MagazineCard({ post }: { post: BlogPost }) {
  const author = getAuthor(post.author);
  const minutes = parseReadMinutes(post.readingTime);
  /* A decorative bar width — 10 min ≈ full */
  const barWidth = `${Math.min(minutes * 10, 100)}%`;

  return (
    <Link to={`/blog/${post.slug}`} className="blog-mag" aria-label={`Read ${post.title}`}>
      <article className="blog-mag__wrap">
        <div className="blog-mag__img-box">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="blog-mag__img"
            loading="lazy"
          />
          {post.featured && <span className="blog-mag__label">Featured</span>}
          <div
            className="blog-mag__time-bar"
            style={{ width: barWidth }}
            aria-hidden="true"
          />
        </div>
        <div className="blog-mag__body">
          <div className="blog-mag__categories">
            {post.categories.map((cat) => (
              <span key={cat} className="blog-index__category-chip">
                {getCategoryName(cat)}
              </span>
            ))}
          </div>
          <h3 className="blog-mag__title">{post.title}</h3>
          <p className="blog-mag__excerpt">{post.excerpt}</p>
          <div className="blog-mag__footer">
            {author && (
              <div className="blog-mag__author">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="blog-mag__avatar"
                  loading="lazy"
                />
                <div className="blog-mag__author-info">
                  <span className="blog-mag__author-name">{author.name}</span>
                  <span className="blog-mag__date">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            )}
            <span className="blog-mag__reading-time">
              <Clock size={12} />
              {post.readingTime}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

/* ─────────────────────────────────────────────
   CARD VARIANT 3 — STREAM (1-col list)
   Horizontal row with thumbnail, timeline feel
   ───────────────────────────────────────────── */

function StreamCard({ post }: { post: BlogPost }) {
  const author = getAuthor(post.author);
  return (
    <Link to={`/blog/${post.slug}`} className="blog-stream" aria-label={`Read ${post.title}`}>
      <article className="blog-stream__wrap">
        <div className="blog-stream__img-box">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="blog-stream__img"
            loading="lazy"
          />
          <span className="blog-stream__indicator" aria-hidden="true" />
        </div>
        <div className="blog-stream__body">
          <div className="blog-stream__top">
            {post.categories[0] && (
              <span className="blog-stream__category">
                {getCategoryName(post.categories[0])}
              </span>
            )}
            <span className="blog-stream__date">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </span>
          </div>
          <h3 className="blog-stream__title">{post.title}</h3>
          <p className="blog-stream__excerpt">{post.excerpt}</p>
          <div className="blog-stream__bottom">
            {author && (
              <span className="blog-stream__meta-item">
                <User size={12} />
                {author.name}
              </span>
            )}
            <span className="blog-stream__meta-item">
              <Clock size={12} />
              {post.readingTime}
            </span>
            <span className="blog-stream__cta">
              Read article <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

/* ─────────────────────────────────────────────
   MAIN TEMPLATE
   ───────────────────────────────────────────── */

export function BlogIndexTemplate() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sort, setSort] = useState('recent');
  const [viewMode, setViewMode] = useState<ViewMode>('grid-3');

  const toggleCategory = (slug: string) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const clearAll = () => setSelectedCategories([]);

  const filtered = useMemo(() => {
    let result = [...blogPosts];

    if (selectedCategories.length > 0) {
      result = result.filter((p) =>
        p.categories.some((c) => selectedCategories.includes(c))
      );
    }

    switch (sort) {
      case 'popular':
      case 'featured':
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      default:
        result.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    }

    return result;
  }, [selectedCategories, sort]);

  /** Featured post (first featured or first post) */
  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  /** Card component per view */
  const CardComponent =
    viewMode === 'grid-3'
      ? NeonStackCard
      : viewMode === 'grid-2'
        ? MagazineCard
        : StreamCard;

  const gridClass =
    viewMode === 'grid-3'
      ? 'blog-index__grid--cols-3'
      : viewMode === 'grid-2'
        ? 'blog-index__grid--cols-2'
        : 'blog-index__grid--cols-1';

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[{ label: 'Home', page: 'front-page' }, { label: 'Blog' }]}
      />

      {/* Archive Header */}
      <Section spacing="xl" className="blog-index__hero">
        <div className="blog-index__hero-gradient" aria-hidden="true" />
        <div className="blog-index__hero-orb" aria-hidden="true" />
        <div className="blog-index__hero-orb-2" aria-hidden="true" />

        <Container>
          <ScrollReveal animation="fade-up" duration={600}>
            <div className="blog-index__section-header--large">
              <span className="blog-index__badge">{blogIndexHero.badge.text}</span>
              <Heading level={1} className="blog-index__section-title">
                {blogIndexHero.title}
              </Heading>
              <Paragraph className="blog-index__section-description">
                {blogIndexHero.subtitle}
              </Paragraph>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Featured Post */}
      {featuredPost && (
        <Section spacing="lg">
          <Container>
            <ScrollReveal animation="fade-up" duration={600} delay={100}>
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="blog-index__featured-card"
                aria-label={`Read ${featuredPost.title}`}
              >
                <div className="blog-index__featured-image-wrap">
                  <img
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    className="blog-index__featured-image"
                    loading="lazy"
                  />
                  <span className="blog-index__featured-label">Featured</span>
                </div>
                <div className="blog-index__featured-content">
                  <div className="blog-index__featured-categories">
                    {featuredPost.categories.map((cat) => (
                      <span key={cat} className="blog-index__category-chip">
                        {getCategoryName(cat)}
                      </span>
                    ))}
                  </div>
                  <Heading level={2} className="blog-index__featured-title">
                    {featuredPost.title}
                  </Heading>
                  <Paragraph className="blog-index__featured-excerpt">
                    {featuredPost.excerpt}
                  </Paragraph>
                  <div className="blog-index__featured-meta">
                    {(() => {
                      const author = getAuthor(featuredPost.author);
                      return author ? (
                        <span className="blog-index__meta-item">
                          <User size={14} />
                          {author.name}
                        </span>
                      ) : null;
                    })()}
                    <span className="blog-index__meta-item">
                      <Calendar size={14} />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="blog-index__meta-item">
                      <Clock size={14} />
                      {featuredPost.readingTime}
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </Container>
        </Section>
      )}

      {/* Taxonomy Filter + Topics */}
      <Section spacing="md">
        <Container>
          <TrendingTopicsWidget
            sources={['blog-categories', 'blog-tags']}
            title="Browse by Topic"
            label="Explore"
            maxPerSection={8}
            showSections={false}
            onTopicClick={(slug) => {
              if (!selectedCategories.includes(slug)) toggleCategory(slug);
            }}
          />

          <ScrollReveal animation="fade-up" duration={500}>
            <TaxonomyFilter
              categories={blogCategories.map((c) => ({
                slug: c.slug,
                name: c.name,
                count: c.count,
              }))}
              selectedCategories={selectedCategories}
              onCategoryToggle={toggleCategory}
              onClearAll={clearAll}
              resultCount={filtered.length}
              sortValue={sort}
              onSortChange={setSort}
              sortOptions={[
                { label: 'Most recent', value: 'recent' },
                { label: 'Featured', value: 'featured' },
                { label: 'Popular', value: 'popular' },
              ]}
              label="Filter by category"
            />

            {/* Toolbar: result count + view switcher */}
            <div className="blog-index__toolbar">
              <span className="blog-index__result-count">
                Showing <strong>{filtered.length}</strong>{' '}
                {filtered.length === 1 ? 'article' : 'articles'}
              </span>
              <ViewSwitcher value={viewMode} onChange={setViewMode} />
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Post Grid */}
      <Section spacing="xl">
        <Container>
          {filtered.length > 0 ? (
            <div className={`blog-index__grid ${gridClass}`}>
              {filtered.map((post, index) => (
                <ScrollReveal
                  key={post.id}
                  animation="fade-up"
                  duration={500}
                  delay={index * 80}
                >
                  <CardComponent post={post} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="blog-index__empty">
              <Heading level={3}>No posts found</Heading>
              <Paragraph>
                Try adjusting your filters or{' '}
                <button onClick={clearAll} className="blog-index__empty-link">
                  clear all filters
                </button>
                .
              </Paragraph>
            </div>
          )}
        </Container>
      </Section>

      {/* FAQs */}
      <FAQSection
        title="Blog questions"
        description="Common questions about our blog and content."
        faqs={blogFAQs.slice(0, 3)}
      />

      {/* Recent Posts Widget */}
      <Section spacing="lg">
        <Container>
          <RecentPostsWidget count={3} title="Editor's Picks" showViewAll={false} />
        </Container>
      </Section>

      {/* CTA */}
      <FunkyCTA
        title={blogIndexCTA.title}
        description={blogIndexCTA.description}
        buttonText={blogIndexCTA.button.text}
        buttonPage={blogIndexCTA.button.page}
        benefits={[
          'Expert WordPress tutorials',
          'Industry best practices',
          'Performance optimization tips',
          'Accessibility deep-dives',
        ]}
      />
    </>
  );
}