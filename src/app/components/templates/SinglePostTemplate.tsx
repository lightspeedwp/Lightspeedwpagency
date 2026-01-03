/**
 * Single Post Template — Blog Post
 * 
 * WordPress concept: Template — templates/single.html
 * 
 * **Page Archetype:** Single Detail
 * **Pattern Order:** Hero → Post Meta → Editorial Content → NewsletterSignup → 
 *                    TestimonialGrid → Related Posts → CTASection → (Footer)
 * 
 * **Conversion Strategy:**
 * - Post meta: Author credibility and social proof
 * - NewsletterSignup: Capture engaged readers
 * - TestimonialGrid: Build trust with social proof
 * - Related Posts: Keep users on site
 * - CTASection: Convert readers to customers
 * 
 * **Accessibility:**
 * - Proper heading hierarchy (H1 → H2 → H3)
 * - Keyboard navigation for all interactive elements
 * - ARIA labels for screen readers
 * - Focus states on all buttons/links
 * - WCAG 2.1 AA compliant
 * 
 * **Design System:**
 * - 100% CSS variables from theme.css
 * - Lexend for headings/body text
 * - Manrope for meta text (author, date, category)
 * - Tailwind spacing classes
 * 
 * @see {@link /guidelines/templates/single.md}
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Button } from '../blocks/design/Buttons';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { ScrollProgress } from '../blocks/layout/ScrollProgress';
import { getPostBySlug, getRelatedPosts } from '../../data/blog-posts';
import { featuredTestimonials } from '../../data/testimonials';
import { Calendar, User, Tag, Clock, Share2, Bookmark } from 'lucide-react';

interface SinglePostTemplateProps {
  slug?: string;
}

export function SinglePostTemplate({ slug = 'getting-started-with-block-themes' }: SinglePostTemplateProps) {
  // Get post data
  const post = getPostBySlug(slug);
  const relatedPosts = getRelatedPosts(slug, 3);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div 
      style={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)'
      }}
    >
      {/* Skip Link for Accessibility */}
      <SkipLink targetId="main-content" />

      {/* Site Header */}
      <SiteHeader />

      {/* Main Content */}
      <main 
        id="main-content" 
        role="main"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Breadcrumbs */}
        <section 
          className="py-4"
          style={{
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border-soft)',
          }}
        >
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', page: 'front-page' },
                { label: 'Resources', page: 'blog' },
                { label: post.title }
              ]}
            />
          </Container>
        </section>

        {/* Post Header */}
        <Section spacing="50" variant="default">
          <Container>
            <article className="max-w-4xl mx-auto">
              {/* Category Badge */}
              <div className="mb-6">
                <span
                  style={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'var(--text-small)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--primary)',
                    backgroundColor: 'var(--primary-foreground)',
                    border: '1px solid var(--border-soft)',
                    borderRadius: 'var(--radius)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {post.category}
                </span>
              </div>

              {/* Post Title */}
              <h1
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-medium)',
                  lineHeight: 1.2,
                  color: 'var(--foreground)',
                  margin: '0 0 24px 0'
                }}
              >
                {post.title}
              </h1>

              {/* Post Excerpt */}
              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-weight-regular)',
                  lineHeight: 1.6,
                  color: 'var(--muted-foreground)',
                  margin: '0 0 32px 0'
                }}
              >
                {post.excerpt}
              </p>

              {/* Post Meta */}
              <div className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-[var(--border-soft)]">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--card)',
                      backgroundImage: `url(${post.author.avatar})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      border: '2px solid var(--border-soft)'
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--foreground)',
                        lineHeight: 1.5
                      }}
                    >
                      {post.author.name}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        fontWeight: 'var(--font-weight-regular)',
                        color: 'var(--muted-foreground)',
                        lineHeight: 1.5
                      }}
                    >
                      {post.author.role}
                    </div>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2">
                  <Calendar size={16} style={{ color: 'var(--muted-foreground)' }} />
                  <span
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--muted-foreground)',
                      lineHeight: 1.5
                    }}
                  >
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>

                {/* Reading Time */}
                <div className="flex items-center gap-2">
                  <Clock size={16} style={{ color: 'var(--muted-foreground)' }} />
                  <span
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--muted-foreground)',
                      lineHeight: 1.5
                    }}
                  >
                    {post.readingTime}
                  </span>
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Tag size={16} style={{ color: 'var(--muted-foreground)' }} />
                    <div className="flex gap-2 flex-wrap">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: 'var(--text-small)',
                            fontWeight: 'var(--font-weight-regular)',
                            color: 'var(--muted-foreground)',
                            lineHeight: 1.5
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Featured Image */}
              {post.featuredImage && (
                <div
                  style={{
                    width: '100%',
                    height: '400px',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    marginBottom: '48px',
                    border: '1px solid var(--border-soft)'
                  }}
                >
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              )}

              {/* Post Content */}
              <div
                className="prose max-w-none"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.7,
                  color: 'var(--foreground)'
                }}
              >
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-medium)',
                    lineHeight: 1.25,
                    color: 'var(--foreground)',
                    margin: '48px 0 24px 0'
                  }}
                >
                  Introduction
                </h2>
                <p style={{ marginBottom: '24px' }}>
                  {post.content || 'WordPress block themes represent the future of WordPress development. They provide a more flexible, intuitive way to design and build websites using the power of blocks and patterns.'}
                </p>
                <p style={{ marginBottom: '24px' }}>
                  In this comprehensive guide, we'll walk you through everything you need to know about building modern block themes, from understanding the fundamentals to implementing advanced patterns and best practices.
                </p>

                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-medium)',
                    lineHeight: 1.25,
                    color: 'var(--foreground)',
                    margin: '48px 0 24px 0'
                  }}
                >
                  What Are Block Themes?
                </h2>
                <p style={{ marginBottom: '24px' }}>
                  Block themes are a new way of building WordPress themes that leverage the full power of the block editor (Gutenberg). Unlike traditional PHP-based themes, block themes use HTML templates and theme.json for styling and configuration.
                </p>

                <h3
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h3)',
                    fontWeight: 'var(--font-weight-medium)',
                    lineHeight: 1.3,
                    color: 'var(--foreground)',
                    margin: '32px 0 16px 0'
                  }}
                >
                  Key Benefits
                </h3>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '12px' }}>Full site editing capabilities</li>
                  <li style={{ marginBottom: '12px' }}>Better separation of content and presentation</li>
                  <li style={{ marginBottom: '12px' }}>Improved accessibility and performance</li>
                  <li style={{ marginBottom: '12px' }}>Easier maintenance and updates</li>
                  <li style={{ marginBottom: '12px' }}>Design system integration with theme.json</li>
                </ul>

                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-medium)',
                    lineHeight: 1.25,
                    color: 'var(--foreground)',
                    margin: '48px 0 24px 0'
                  }}
                >
                  Getting Started
                </h2>
                <p style={{ marginBottom: '24px' }}>
                  To start building block themes, you'll need a basic understanding of WordPress, HTML, and JSON. The learning curve is gentle if you're already familiar with WordPress development.
                </p>

                <h3
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h3)',
                    fontWeight: 'var(--font-weight-medium)',
                    lineHeight: 1.3,
                    color: 'var(--foreground)',
                    margin: '32px 0 16px 0'
                  }}
                >
                  Essential Files
                </h3>
                <p style={{ marginBottom: '24px' }}>
                  Every block theme requires these core files:
                </p>
                <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                  <li style={{ marginBottom: '12px' }}><strong>style.css</strong> — Theme metadata</li>
                  <li style={{ marginBottom: '12px' }}><strong>theme.json</strong> — Design system configuration</li>
                  <li style={{ marginBottom: '12px' }}><strong>templates/index.html</strong> — Fallback template</li>
                  <li style={{ marginBottom: '12px' }}><strong>parts/header.html</strong> — Site header</li>
                  <li style={{ marginBottom: '12px' }}><strong>parts/footer.html</strong> — Site footer</li>
                </ul>

                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-medium)',
                    lineHeight: 1.25,
                    color: 'var(--foreground)',
                    margin: '48px 0 24px 0'
                  }}
                >
                  Conclusion
                </h2>
                <p style={{ marginBottom: '24px' }}>
                  Block themes are the future of WordPress development. By embracing this new approach, you'll create more maintainable, accessible, and performant websites that are easier to customize and extend.
                </p>
                <p style={{ marginBottom: '24px' }}>
                  Ready to start building? Check out our comprehensive design system documentation and example templates to accelerate your development process.
                </p>
              </div>

              {/* Post Footer / Social Sharing (Optional) */}
              <div
                className="mt-12 pt-8 border-t border-[var(--border-soft)]"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '16px'
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                      marginRight: '12px'
                    }}
                  >
                    Share this post:
                  </span>
                  <div className="inline-flex gap-2">
                    <button
                      aria-label="Share on Twitter"
                      style={{
                        padding: '8px',
                        backgroundColor: 'var(--card)',
                        border: '1px solid var(--border-soft)',
                        borderRadius: 'var(--radius)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--primary)';
                        e.currentTarget.style.color = 'var(--primary-foreground)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--card)';
                        e.currentTarget.style.color = 'var(--foreground)';
                      }}
                    >
                      <Share2 size={16} />
                    </button>
                    <button
                      aria-label="Bookmark this post"
                      style={{
                        padding: '8px',
                        backgroundColor: 'var(--card)',
                        border: '1px solid var(--border-soft)',
                        borderRadius: 'var(--radius)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--primary)';
                        e.currentTarget.style.color = 'var(--primary-foreground)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--card)';
                        e.currentTarget.style.color = 'var(--foreground)';
                      }}
                    >
                      <Bookmark size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </Container>
        </Section>

        {/* NewsletterSignup */}
        <Section spacing="50" variant="default">
          <Container>
            <Heading level="h2" style={{ marginBottom: '16px' }}>
              Stay Updated with Our Latest Articles
            </Heading>
            <p style={{ marginBottom: '24px' }}>
              Get weekly insights on WordPress development, design systems, and modern web development directly to your inbox.
            </p>
            <Button
              label="Subscribe to Newsletter"
              page="newsletter"
              variant="primary"
              size="lg"
            />
          </Container>
        </Section>

        {/* TestimonialGrid */}
        <TestimonialGrid
          testimonials={featuredTestimonials}
          title="What Our Readers Say"
          description="Join thousands of developers who trust our content."
          variant="default"
        />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <CardGrid
            items={relatedPosts.map((relatedPost) => ({
              id: relatedPost.slug,
              title: relatedPost.title,
              excerpt: relatedPost.excerpt,
              category: relatedPost.category,
              imageUrl: relatedPost.featuredImage,
              href: `/blog/${relatedPost.slug}`
            }))}
            sectionTitle="Related Articles"
            sectionDescription="Continue reading with these related posts"
            columns={3}
            variant="default"
          />
        )}

        {/* CTASection */}
        <CTASection
          title="Ready to Build Better WordPress Sites?"
          description="Get in touch with our team to discuss your next project and see how we can help you succeed with modern WordPress development."
          primaryButtonText="Start Your Project"
          primaryButtonPage="contact"
          secondaryButtonText="View Portfolio"
          secondaryButtonPage="portfolio-archive"
          variant="highlighted"
          buttonSize="lg"
        />
      </main>

      {/* Site Footer */}
      <SiteFooter />
      <BackToTopButton />
      <ScrollProgress />
    </div>
  );
}