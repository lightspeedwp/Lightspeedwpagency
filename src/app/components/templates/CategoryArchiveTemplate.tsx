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

import '../../../styles/templates/archive.css';
import '../../../styles/templates/page-category-archive.css';
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
          { label: 'Insights', href: '/insights' },
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
                    to={`/insights/category/${cat.slug}`}
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
            <div className="category-archive__grid">
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
                      to={`/insights/${post.slug}`}
                      className="category-archive__post-card"
                      aria-label={`Read ${post.title}`}
                    >
                      <div className="category-archive__post-image-wrap">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="category-archive__post-image"
                          loading="lazy"
                        />
                      </div>
                      <div 
                        className="category-archive__post-content"
                        style={{
                          padding: 'var(--spacing-6)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 'var(--spacing-4)',
                          flex: '1'
                        }}
                      >
                        <div 
                          className="category-archive__post-categories"
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 'var(--spacing-2)',
                            marginBottom: 'var(--spacing-2)'
                          }}
                        >
                          {post.tags.slice(0, 2).map(tag => (
                            <span 
                              key={tag} 
                              className="category-archive__category-chip"
                              style={{
                                padding: 'var(--spacing-1) var(--spacing-3)',
                                background: 'linear-gradient(135deg, color-mix(in srgb, var(--secondary) 12%, transparent), color-mix(in srgb, var(--accent) 8%, transparent))',
                                color: 'var(--secondary)',
                                border: '1px solid color-mix(in srgb, var(--secondary) 20%, transparent)',
                                borderRadius: 'var(--radius-full)',
                                fontFamily: 'var(--font-secondary)',
                                fontSize: 'var(--text-xs)',
                                fontWeight: 'var(--font-weight-semibold)',
                                textTransform: 'capitalize',
                                letterSpacing: 'var(--letter-spacing-wide)'
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 
                          className="category-archive__post-title"
                          style={{
                            fontFamily: 'var(--font-primary)',
                            fontSize: 'var(--text-xl)',
                            fontWeight: 'var(--font-weight-bold)',
                            lineHeight: 'var(--line-height-tight)',
                            color: 'var(--foreground)',
                            margin: '0',
                            letterSpacing: 'var(--letter-spacing-tight)'
                          }}
                        >
                          {post.title}
                        </h3>
                        <p 
                          className="category-archive__post-excerpt"
                          style={{
                            fontFamily: 'var(--font-primary)',
                            fontSize: 'var(--text-sm)',
                            lineHeight: 'var(--line-height-relaxed)',
                            color: 'var(--muted-foreground)',
                            margin: '0',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                        >
                          {post.excerpt}
                        </p>
                        <div 
                          className="category-archive__post-meta"
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            gap: 'var(--spacing-4)',
                            marginTop: 'auto',
                            paddingTop: 'var(--spacing-4)',
                            borderTop: '1px solid var(--border-soft)',
                            fontFamily: 'var(--font-secondary)',
                            fontSize: 'var(--text-xs)',
                            color: 'var(--muted-foreground)'
                          }}
                        >
                          {author && (
                            <span 
                              className="category-archive__meta-item"
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 'var(--spacing-1-5)'
                              }}
                            >
                              <User size={14} />
                              {author.name}
                            </span>
                          )}
                          <span 
                            className="category-archive__meta-item"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 'var(--spacing-1-5)'
                            }}
                          >
                            <Calendar size={14} />
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                          <span 
                            className="category-archive__meta-item"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 'var(--spacing-1-5)'
                            }}
                          >
                            <Clock size={14} />
                            {post.readingTime}
                          </span>
                        </div>
                        <span className="category-archive__read-more">
                          Read article <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          ) : (
            <div className="category-archive__empty">
              <Heading level={3}>No posts found</Heading>
              <Paragraph>
                No posts match the current filters.{' '}
                <button onClick={clearAll} className="category-archive__empty-link">Clear all filters</button>
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
        buttonPage="newsletter-service"
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