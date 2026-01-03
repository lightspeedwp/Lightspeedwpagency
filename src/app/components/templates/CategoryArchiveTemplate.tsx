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
        <section 
          className="py-4"
          style={{
            backgroundColor: 'var(--background)',
          }}
        >
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
        <Section 
          className="py-16"
          style={{
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border-soft)',
          }}
        >
          <Container>
            <div className="max-w-3xl">
              <span 
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'var(--text-small)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--muted-foreground)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Category
              </span>
              <h1 
                style={{ 
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)',
                  marginTop: '8px',
                  marginBottom: '16px',
                  lineHeight: '1.2',
                }}
              >
                {category.name}
              </h1>
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--foreground)',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                }}
              >
                {category.description}
              </p>
              <p 
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'var(--text-base)',
                  color: 'var(--muted-foreground)',
                  margin: 0,
                }}
              >
                {categoryPosts.length} {categoryPosts.length === 1 ? 'post' : 'posts'} in this category
              </p>
            </div>
          </Container>
        </Section>

        {/* Main Content with Sidebar */}
        <Section className="py-16" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Post List */}
              <div className="lg:col-span-2">
                <div className="flex flex-col gap-8">
                  {categoryPosts.map((post) => {
                    const author = getAuthorBySlug(post.author);
                    return (
                      <article 
                        key={post.id}
                        className="flex flex-col md:flex-row gap-6 p-6 rounded-[var(--radius-lg)]"
                        style={{
                          border: '1px solid var(--border-soft)',
                          backgroundColor: 'var(--card)',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        {/* Post Image */}
                        <button 
                          onClick={() => navigateTo(`post-${post.slug}`)}
                          aria-label={`Read: ${post.title}`}
                          style={{ 
                            textDecoration: 'none',
                            flexShrink: 0,
                            background: 'none',
                            border: 'none',
                            padding: 0,
                            cursor: 'pointer',
                          }}
                        >
                          <div 
                            className="w-full md:w-48 aspect-[16/9] md:aspect-square rounded-[var(--radius)] bg-cover bg-center"
                            style={{
                              backgroundImage: `url(${post.featuredImage})`,
                            }}
                          />
                        </button>

                        {/* Post Content */}
                        <div className="flex flex-col flex-1">
                          <h2 className="mb-2">
                            <button 
                              onClick={() => navigateTo(`post-${post.slug}`)}
                              aria-label={`Read: ${post.title}`}
                              style={{
                                fontFamily: 'Lexend, sans-serif',
                                fontSize: 'var(--text-h3)',
                                fontWeight: 'var(--font-weight-medium)',
                                color: 'var(--foreground)',
                                textDecoration: 'none',
                                lineHeight: '1.3',
                                background: 'none',
                                border: 'none',
                                padding: 0,
                                cursor: 'pointer',
                                textAlign: 'left',
                                width: '100%',
                                transition: 'color 0.2s ease',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = 'var(--primary)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'var(--foreground)';
                              }}
                            >
                              {post.title}
                            </button>
                          </h2>

                          <p 
                            className="mb-4"
                            style={{
                              fontFamily: 'Lexend, sans-serif',
                              fontSize: 'var(--text-base)',
                              color: 'var(--muted-foreground)',
                              lineHeight: '1.6',
                              margin: 0,
                              marginBottom: '16px',
                              flex: 1,
                            }}
                          >
                            {post.excerpt}
                          </p>

                          {/* Post Meta */}
                          <div className="flex flex-wrap items-center gap-4 pt-4" style={{ borderTop: '1px solid var(--border-extra-soft)' }}>
                            {author && (
                              <div className="flex items-center gap-2">
                                <User size={16} style={{ color: 'var(--muted-foreground)' }} />
                                <button
                                  onClick={() => navigateTo(`author-${post.author}`)}
                                  style={{
                                    fontFamily: 'Manrope, sans-serif',
                                    fontSize: 'var(--text-small)',
                                    color: 'var(--muted-foreground)',
                                    textDecoration: 'none',
                                    background: 'none',
                                    border: 'none',
                                    padding: 0,
                                    cursor: 'pointer',
                                    transition: 'color 0.2s ease',
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.color = 'var(--primary)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'var(--muted-foreground)';
                                  }}
                                >
                                  {author.name}
                                </button>
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <Calendar size={16} style={{ color: 'var(--muted-foreground)' }} />
                              <span 
                                style={{
                                  fontFamily: 'Manrope, sans-serif',
                                  fontSize: 'var(--text-small)',
                                  color: 'var(--muted-foreground)',
                                }}
                              >
                                {new Date(post.date).toLocaleDateString('en-US', { 
                                  year: 'numeric', 
                                  month: 'short', 
                                  day: 'numeric' 
                                })}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={16} style={{ color: 'var(--muted-foreground)' }} />
                              <span 
                                style={{
                                  fontFamily: 'Manrope, sans-serif',
                                  fontSize: 'var(--text-small)',
                                  color: 'var(--muted-foreground)',
                                }}
                              >
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
                <div className="mt-12">
                  <NewsletterSignup />
                </div>

                {/* CTA Inline */}
                <div className="mt-12">
                  <CTAInline />
                </div>

                {/* Pagination */}
                {categoryPosts.length > 10 && (
                  <div className="mt-12">
                    <PaginationNav 
                      currentPage={1}
                      totalPages={Math.ceil(categoryPosts.length / 10)}
                      baseUrl={`/category/${category.slug}`}
                    />
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="flex flex-col gap-8">
                  {/* Categories */}
                  <div 
                    className="p-6 rounded-[var(--radius-lg)]"
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border-soft)',
                    }}
                  >
                    <h3 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-h4)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--foreground)',
                        marginBottom: '16px',
                      }}
                    >
                      All Categories
                    </h3>
                    <ul className="flex flex-col gap-2" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {allCategories.map((cat) => (
                        <li key={cat.slug}>
                          <button 
                            onClick={() => navigateTo(`category-${cat.slug}`)}
                            className="flex items-center justify-between py-2 w-full text-left"
                            style={{
                              fontFamily: 'Lexend, sans-serif',
                              fontSize: 'var(--text-base)',
                              color: cat.slug === categorySlug ? 'var(--primary)' : 'var(--foreground)',
                              textDecoration: 'none',
                              transition: 'color 0.2s ease',
                              background: 'none',
                              border: 'none',
                              padding: '8px 0',
                              cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                              if (cat.slug !== categorySlug) {
                                e.currentTarget.style.color = 'var(--primary)';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (cat.slug !== categorySlug) {
                                e.currentTarget.style.color = 'var(--foreground)';
                              }
                            }}
                          >
                            <span>{cat.name}</span>
                            <span 
                              className="px-2 py-1 rounded-full"
                              style={{
                                fontFamily: 'Manrope, sans-serif',
                                fontSize: 'var(--text-small)',
                                backgroundColor: 'var(--secondary)',
                                color: 'var(--secondary-foreground)',
                              }}
                            >
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