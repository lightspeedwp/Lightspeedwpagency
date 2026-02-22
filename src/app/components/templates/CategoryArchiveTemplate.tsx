/**
 * Category Archive Template — Funky Neon Pass
 *
 * WordPress template: templates/archive-category.html
 * Content hub archetype for blog categories.
 *
 * Features:
 * - Neon gradient wash on header
 * - Gradient underline on title
 * - Neon glow cards on hover (dark mode)
 * - Neon active category pill
 * - Scroll-triggered reveal animations
 * - 100% CSS variables, zero hardcoded values
 *
 * Pattern order: Breadcrumbs -> Category Header -> TaxonomyFilter -> Post Grid -> FAQs -> CTA
 *
 * @see /guidelines/templates/overview-templates.md
 */

import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { TaxonomyFilter } from '../patterns/TaxonomyFilter';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Badge } from '../blocks/design/Badge';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { User, Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogCategories } from '../../data/taxonomies';
import { getPostsByCategory, getAuthorBySlug, postTags } from '../../data/blog-posts';
import { blogCategoryFAQs } from '../../data/faqs';

interface CategoryArchiveTemplateProps {
  category?: string;
}

export function CategoryArchiveTemplate({ category: categorySlug = 'development' }: CategoryArchiveTemplateProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sort, setSort] = useState('recent');

  const category = blogCategories.find(c => c.slug === categorySlug) || blogCategories[0];
  const categoryName = category.name;

  const toggleTag = (slug: string) => {
    setSelectedTags(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };
  const clearAll = () => setSelectedTags([]);

  /** Posts for this category, optionally filtered by tag */
  const filtered = useMemo(() => {
    let result = getPostsByCategory(categorySlug);

    if (selectedTags.length > 0) {
      result = result.filter(p => p.tags.some(t => selectedTags.includes(t)));
    }

    switch (sort) {
      case 'featured':
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      default:
        result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    return result;
  }, [categorySlug, selectedTags, sort]);

  /** Tags that actually appear in this category's posts */
  const tagsInCategory = useMemo(() => {
    const all = getPostsByCategory(categorySlug);
    const tagSlugs = new Set(all.flatMap(p => p.tags));
    return postTags
      .filter(t => tagSlugs.has(t.slug))
      .map(t => ({
        slug: t.slug,
        name: t.name,
        count: all.filter(p => p.tags.includes(t.slug)).length
      }));
  }, [categorySlug]);

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Blog', href: '/blog' },
          { label: categoryName },
        ]}
      />

      {/* Category Header */}
      <Section spacing="lg" className="archive-header">
        <Container>
          <ScrollReveal animation="fade-up" duration={600}>
            <div className="wp-max-w-3xl wp-mx-auto wp-text-center">
              <Badge variant="secondary">Category</Badge>
              <Heading level={1} className="archive-header__title">
                {category.name}
              </Heading>
              {category.description && (
                <Paragraph className="archive-header__description">
                  {category.description}
                </Paragraph>
              )}
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Category sidebar nav */}
      <Section spacing="sm" style={{ borderBottom: '1px solid var(--border-soft)' }}>
        <Container>
          <ScrollReveal animation="fade-up" duration={400}>
            <nav className="archive-category-nav" aria-label="Blog categories">
              <div className="archive-category-nav__list">
                {blogCategories.map(cat => (
                  <Link
                    key={cat.slug}
                    to={`/blog/category/${cat.slug}`}
                    className={`archive-category-nav__item ${cat.slug === categorySlug ? 'archive-category-nav__item--active' : ''}`}
                    aria-current={cat.slug === categorySlug ? 'page' : undefined}
                  >
                    {cat.name}
                    <span className="archive-category-nav__count">{cat.count}</span>
                  </Link>
                ))}
              </div>
            </nav>
          </ScrollReveal>
        </Container>
      </Section>

      {/* TaxonomyFilter (tag sub-filter) */}
      {tagsInCategory.length > 0 && (
        <Section spacing="md">
          <Container>
            <ScrollReveal animation="fade-up" duration={400}>
              <TaxonomyFilter
                categories={tagsInCategory}
                selectedCategories={selectedTags}
                onCategoryToggle={toggleTag}
                onClearAll={clearAll}
                resultCount={filtered.length}
                sortValue={sort}
                onSortChange={setSort}
                sortOptions={[
                  { label: 'Most recent', value: 'recent' },
                  { label: 'Featured', value: 'featured' }
                ]}
                label="Filter by tag"
              />
            </ScrollReveal>
          </Container>
        </Section>
      )}

      {/* Post Grid */}
      <Section spacing="xl">
        <Container>
          {filtered.length > 0 ? (
            <div className="blog-index__grid">
              {filtered.map((post, index) => {
                const author = getAuthorBySlug(post.author);
                return (
                  <ScrollReveal
                    key={post.id}
                    animation="fade-up"
                    duration={500}
                    delay={index * 80}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="blog-index__post-card"
                      aria-label={`Read ${post.title}`}
                    >
                      <div className="blog-index__post-image-wrap">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="blog-index__post-image"
                          loading="lazy"
                        />
                      </div>
                      <div className="blog-index__post-content">
                        <div className="blog-index__post-categories">
                          {post.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="blog-index__category-chip">{tag}</span>
                          ))}
                        </div>
                        <h3 className="blog-index__post-title">{post.title}</h3>
                        <p className="blog-index__post-excerpt">{post.excerpt}</p>
                        <div className="blog-index__post-meta">
                          {author && (
                            <span className="blog-index__meta-item">
                              <User size={14} />
                              {author.name}
                            </span>
                          )}
                          <span className="blog-index__meta-item">
                            <Calendar size={14} />
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                          <span className="blog-index__meta-item">
                            <Clock size={14} />
                            {post.readingTime}
                          </span>
                        </div>
                        <span className="blog-index__read-more">
                          Read article <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          ) : (
            <div className="blog-index__empty">
              <Heading level={3}>No posts found</Heading>
              <Paragraph>
                No posts match the current filters.{' '}
                <button onClick={clearAll} className="blog-index__empty-link">Clear all filters</button>
              </Paragraph>
            </div>
          )}
        </Container>
      </Section>

      {/* FAQs */}
      <FAQSection
        title="Category questions"
        description={`Common questions about our ${category.name.toLowerCase()} content.`}
        faqs={blogCategoryFAQs.slice(0, 3)}
      />

      {/* CTA */}
      <FunkyCTA
        title="Stay updated"
        description="Subscribe to our newsletter for the latest WordPress development insights."
        buttonText="Subscribe"
        buttonPage="newsletter"
        benefits={[
          'Weekly WordPress tips',
          'Exclusive tutorials',
          'Industry news roundup',
          'Free resource downloads'
        ]}
      />
    </>
  );
}