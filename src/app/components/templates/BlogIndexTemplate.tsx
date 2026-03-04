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
 * - ✨ UPDATED: Now uses PostCard pattern component (Phase 2.1b)
 *
 * @see /guidelines/templates/overview-templates.md
 * @see /src/app/components/patterns/PostCard.tsx
 */

import { useState, useMemo } from 'react';
/* Route-level CSS */
import '../../../styles/templates/blog-index-page.css';
import { Link, useNavigate } from 'react-router';
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
import { Calendar, Clock, User, ArrowRight } from '@phosphor-icons/react';
import { blogPosts, blogAuthors, type BlogPost, type BlogAuthor } from '../../data/blog-posts';
import { blogCategories } from '../../data/taxonomies';
import { blogFAQs } from '../../data/faqs';
import { blogIndexHero, blogIndexCTA } from '../../data/blog-index-page';
import { PostCard, PostCardGrid } from '../patterns/PostCard';

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

/**
 * Convert BlogPost to the format expected by PostCard
 */
function convertBlogPost(post: BlogPost) {
  const author = getAuthor(post.author);
  return {
    ...post,
    url: `/insights/${post.slug}`,
    category: post.categories[0] ? {
      name: getCategoryName(post.categories[0]),
      slug: post.categories[0]
    } : undefined,
    author: author ? {
      name: author.name,
      slug: author.slug,
      avatar: author.avatar,
      bio: author.bio
    } : undefined,
    tags: post.categories.slice(1).map(cat => getCategoryName(cat))
  };
}

/* ─────────────────────────────────────────────
   MAIN TEMPLATE
   ───────────────────────────────────────────── */

export function BlogIndexTemplate() {
  const navigate = useNavigate();
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

  /** Map view mode to PostCard variant and grid columns */
  const postCardVariant = viewMode === 'grid-3' ? 'vertical' : viewMode === 'grid-2' ? 'horizontal' : 'minimal';
  const gridColumns = viewMode === 'grid-3' ? 3 : viewMode === 'grid-2' ? 2 : 1;

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[{ label: 'Home', page: 'front-page' }, { label: 'Blog' }]}
      />

      {/* Archive Header */}
      <Section spacing="xl" className="hero-base hero-variant-archive blog-index__hero">
        <div className="hero-base__gradient" aria-hidden="true" />
        <div className="hero-base__orb hero-base__orb--primary" aria-hidden="true" />
        <div className="hero-base__orb hero-base__orb--secondary" aria-hidden="true" />

        <Container>
          <ScrollReveal animation="fade-up" duration={600}>
            <div className="hero-base__content blog-index__section-header--large">
              <span className="hero-base__badge blog-index__badge">{blogIndexHero.badge.text}</span>
              <Heading level={1} className="hero-base__title blog-index__section-title">
                {blogIndexHero.title}
              </Heading>
              <Paragraph className="hero-base__description blog-index__section-description">
                {blogIndexHero.subtitle}
              </Paragraph>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Featured Post - Using PostCard 'featured' variant */}
      {featuredPost && (
        <Section spacing="lg">
          <Container>
            <ScrollReveal animation="fade-up" duration={600} delay={100}>
              <PostCard
                post={convertBlogPost(featuredPost)}
                variant="featured"
                showImage={true}
                showExcerpt={true}
                showMeta={true}
                showTags={false}
                showCategory={true}
                showReadingTime={true}
              />
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
            onTopicClick={(slug, source) => {
              // Navigate to category or tag archive page
              if (source === 'blog-categories') {
                navigate(`/insights/category/${slug}`);
              } else if (source === 'blog-tags') {
                navigate(`/insights/tag/${slug}`);
              }
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

      {/* Post Grid - Using PostCardGrid pattern component */}
      <Section spacing="xl">
        <Container>
          {filtered.length > 0 ? (
            <ScrollReveal animation="fade-up" duration={500}>
              <PostCardGrid
                posts={filtered.map(convertBlogPost)}
                variant={postCardVariant}
                showImages={true}
                showExcerpts={true}
                showMeta={true}
                showTags={false}
                columns={gridColumns as 2 | 3}
              />
            </ScrollReveal>
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