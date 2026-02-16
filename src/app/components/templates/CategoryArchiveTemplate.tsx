/**
 * Category Archive Template
 * 
 * WordPress template: templates/archive-category.html
 * 
 * Pattern order: Breadcrumbs → Category Header → Post Grid → NewsletterSignup → CTAInline → Pagination
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { PaginationNav } from '../patterns/PaginationNav';
import { NewsletterSignup } from '../patterns/NewsletterSignup';
import { CTAInline } from '../patterns/CTAInline';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { useNavigation } from '../../contexts/NavigationContext';
import { blogCategories, getPostsByCategory, getAuthorBySlug } from '../../data/blog-posts';
import { User, Calendar, Clock } from 'lucide-react';
import '@/styles/templates/archive.css';
import { Badge } from '../blocks/design/Badge';

interface CategoryArchiveTemplateProps {
  category?: string;
}

export function CategoryArchiveTemplate({ category: categorySlug = 'wordpress-development' }: CategoryArchiveTemplateProps) {
  const { navigateTo } = useNavigation();
  
  // Find category from centralized data
  const category = blogCategories.find(c => c.slug === categorySlug) || blogCategories[0];
  
  // Get posts for this category
  const categoryPosts = getPostsByCategory(categorySlug);
  
  // Get all categories for sidebar
  const allCategories = blogCategories;

  return (
    <>
      {/* Breadcrumbs */}
      <section className="wp-block-breadcrumbs-section">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Resources & Insights', href: '/blog' },
              { label: category.name }
            ]}
          />
      </section>
      
      {/* Category Header */}
      <div className="archive-header">
        <Container>
          <div className="wp-max-w-3xl wp-mx-auto">
            <div className="wp-mb-4">
              <Badge variant="secondary">
                Category
              </Badge>
            </div>
            <Heading level={1} className="archive-header__title">
              {category.name}
            </Heading>
            <Paragraph className="archive-header__description">
              {category.description}
            </Paragraph>
            <Paragraph className="archive-controls__count wp-mt-4">
              {categoryPosts.length} {categoryPosts.length === 1 ? 'post' : 'posts'} in this category
            </Paragraph>
          </div>
        </Container>
      </div>

      {/* Main Content with Sidebar */}
      <Section spacing="xl">
        <Container>
          <div className="archive-layout--sidebar">
            {/* Post List */}
            <div>
              <div className="archive-grid archive-grid--1-col">
                {categoryPosts.map((post) => {
                  const author = getAuthorBySlug(post.author);
                  return (
                    <article 
                      key={post.id}
                      className="archive-card wp-flex-row"
                      onClick={() => navigateTo(`post-${post.slug}`)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigateTo(`post-${post.slug}`); } }}
                    >
                      {/* Post Image */}
                      <div className="archive-card__image-wrapper wp-hidden md:wp-block">
                        <img 
                          src={post.featuredImage}
                          alt={post.title}
                          className="archive-card__image"
                        />
                      </div>

                      {/* Post Content */}
                      <div className="archive-card__content">
                        <Heading level={2} className="archive-card__title">
                          <a 
                            href={`#post-${post.slug}`}
                            onClick={(e) => {
                              e.preventDefault();
                              navigateTo(`post-${post.slug}`);
                            }}
                            aria-label={`Read: ${post.title}`}
                          >
                            {post.title}
                          </a>
                        </Heading>

                        <Paragraph className="archive-card__excerpt">
                          {post.excerpt}
                        </Paragraph>

                        {/* Post Meta */}
                        <div className="archive-card__meta">
                          {author && (
                            <div className="archive-card__meta-item">
                              <User size={16} />
                              <a
                                href={`#author-${post.author}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigateTo(`author-${post.author}`);
                                }}
                                className="wp-link"
                                aria-label={`View all posts by ${author.name}`}
                              >
                                {author.name}
                              </a>
                            </div>
                          )}
                          <div className="archive-card__meta-item">
                            <Calendar size={16} />
                            <span>
                              {new Date(post.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </span>
                          </div>
                          <div className="archive-card__meta-item">
                            <Clock size={16} />
                            <span>
                              {post.readingTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Newsletter Signup */}
              <div className="wp-mt-12">
                <NewsletterSignup />
              </div>

              {/* CTA Inline */}
              <div className="wp-mt-12">
                <CTAInline />
              </div>

              {/* Pagination */}
              {categoryPosts.length > 10 && (
                <div className="archive-pagination">
                  <PaginationNav 
                    currentPage={1}
                    totalPages={Math.ceil(categoryPosts.length / 10)}
                  />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="archive-sidebar">
              <div className="archive-sidebar__widget">
                <Heading level={3} className="archive-sidebar__title">
                  All Categories
                </Heading>
                <ul className="archive-sidebar__list">
                  {allCategories.map((cat) => (
                    <li key={cat.slug}>
                      <button
                        onClick={() => navigateTo(`category-${cat.slug}`)}
                        className={`archive-sidebar__link ${cat.slug === categorySlug ? 'archive-sidebar__link--active' : ''}`}
                      >
                        <span>{cat.name}</span>
                        <span className="related-tag__count">
                          {cat.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}