/**
 * Category Archive Template
 * 
 * WordPress template: templates/archive-category.html
 * 
 * Pattern order: Breadcrumbs → Category Header → Post Grid → NewsletterSignup → CTAInline → Pagination
 * 
 * **Data Source:** `/src/app/data/blog-posts.ts`
 * 
 * **Patterns Used:**
 * - Breadcrumbs (navigation context)
 * - ArchiveHeader (category description)
 * - Card Grid (blog post cards with clickable functionality)
 * - NewsletterSignup (email capture mid-archive)
 * - CTAInline (conversion CTA)
 * - PaginationNav (page navigation)
 * 
 * **Conversion Strategy:**
 * - NewsletterSignup: Capture email subscribers mid-archive
 * - CTAInline: Conversion-focused CTA after posts
 * 
 * **Accessibility:**
 * - Keyboard navigation for posts and categories
 * - Screen reader friendly category navigation
 * - ARIA labels for archive controls
 * - Clickable cards with proper button semantics
 * 
 * @see {@link /guidelines/templates/category-archive.md}
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { PaginationNav } from '../patterns/PaginationNav';
import { NewsletterSignup } from '../patterns/NewsletterSignup';
import { CTAInline } from '../patterns/CTAInline';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { useNavigation } from '../../contexts/NavigationContext';
import { blogCategories, blogPosts, getPostsByCategory, blogAuthors, getAuthorBySlug } from '../../data/blog-posts';
import { User, Calendar, Clock } from 'lucide-react';
import '@/styles/templates/blog-index-page.css';

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
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs */}
        <section className="wp-blog-breadcrumbs">
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Resources & Insights', href: '/blog' },
                { label: category.name }
              ]}
            />
          </Container>
        </section>

        {/* Category Header */}
        <section className="wp-category-header">
          <Container>
            <div className="wp-max-w-3xl">
              <span className="wp-category-label">
                Category
              </span>
              <h1 className="wp-category-title">
                {category.name}
              </h1>
              <p className="wp-category-description">
                {category.description}
              </p>
              <p className="wp-category-count">
                {categoryPosts.length} {categoryPosts.length === 1 ? 'post' : 'posts'} in this category
              </p>
            </div>
          </Container>
        </section>

        {/* Main Content with Sidebar */}
        <Section spacing="xl">
          <Container>
            <div className="wp-category-posts-grid">
              {/* Post List */}
              <div>
                <div className="wp-category-posts-list">
                  {categoryPosts.map((post) => {
                    const author = getAuthorBySlug(post.author);
                    return (
                      <article 
                        key={post.id}
                        className="wp-category-post-card"
                        onClick={() => navigateTo(`post-${post.slug}`)}
                      >
                        {/* Post Image */}
                        <div className="wp-category-post-card__image-wrapper">
                          <img 
                            src={post.featuredImage}
                            alt={post.title}
                            className="wp-category-post-card__image"
                          />
                        </div>

                        {/* Post Content */}
                        <div className="wp-category-post-card__content">
                          <h2 className="wp-category-post-card__title">
                            <a 
                              href={`#post-${post.slug}`}
                              onClick={(e) => {
                                e.preventDefault();
                                navigateTo(`post-${post.slug}`);
                              }}
                              aria-label={`Read: ${post.title}`}
                              className="wp-category-post-card__title-link"
                            >
                              {post.title}
                            </a>
                          </h2>

                          <p className="wp-category-post-card__excerpt">
                            {post.excerpt}
                          </p>

                          {/* Post Meta */}
                          <div className="wp-category-post-card__meta">
                            {author && (
                              <div className="wp-blog-post-meta__item">
                                <User size={16} className="wp-blog-post-meta__icon" />
                                <a
                                  href={`#author-${post.author}`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    navigateTo(`author-${post.author}`);
                                  }}
                                  className="wp-blog-post-meta__text"
                                  aria-label={`View all posts by ${author.name}`}
                                >
                                  {author.name}
                                </a>
                              </div>
                            )}
                            <div className="wp-blog-post-meta__item">
                              <Calendar size={16} className="wp-blog-post-meta__icon" />
                              <span className="wp-blog-post-meta__text">
                                {new Date(post.date).toLocaleDateString('en-US', { 
                                  year: 'numeric', 
                                  month: 'short', 
                                  day: 'numeric' 
                                })}
                              </span>
                            </div>
                            <div className="wp-blog-post-meta__item">
                              <Clock size={16} className="wp-blog-post-meta__icon" />
                              <span className="wp-blog-post-meta__text">
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
                <div style={{ marginTop: 'var(--spacing-12)' }}>
                  <NewsletterSignup />
                </div>

                {/* CTA Inline */}
                <div style={{ marginTop: 'var(--spacing-12)' }}>
                  <CTAInline />
                </div>

                {/* Pagination */}
                {categoryPosts.length > 10 && (
                  <div style={{ marginTop: 'var(--spacing-12)' }}>
                    <PaginationNav 
                      currentPage={1}
                      totalPages={Math.ceil(categoryPosts.length / 10)}
                      baseUrl={`/category/${category.slug}`}
                    />
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside>
                <div className="wp-category-sidebar">
                  {/* Categories */}
                  <div className="wp-category-sidebar-card">
                    <h3 className="wp-category-sidebar-card__title">
                      All Categories
                    </h3>
                    <ul className="wp-category-sidebar-list">
                      {allCategories.map((cat) => (
                        <li key={cat.slug}>
                          <button
                            onClick={() => navigateTo(`category-${cat.slug}`)}
                            className={`wp-category-sidebar-button ${cat.slug === categorySlug ? 'wp-category-sidebar-button--active' : ''}`}
                          >
                            <span>{cat.name}</span>
                            <span className="wp-category-sidebar-button__count">
                              {cat.count}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}