/**
 * Single Post Template — Blog Post
 * 
 * WordPress template: templates/single.html
 * 
 * Pattern order: Breadcrumbs → Hero → Post Meta → Content → Author Bio → Related Posts → Newsletter → CTA
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { Buttons, Button } from '../blocks/design/Buttons';
import { CTASection } from '../patterns/CTASection';
import { AuthorBio } from '../patterns/AuthorBio';
import { NewsletterSignup } from '../patterns/NewsletterSignup';
import { 
  Calendar,
  User,
  Clock,
  Tag,
  ThumbsUp,
  Bookmark,
  Share2,
  ChevronRight,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';
import { useNavigation } from '../../contexts/NavigationContext';

// Import centralized data
import {
  exampleBlogPost,
  examplePostMeta,
  relatedBlogPosts,
  postActions,
  blogPostNewsletter,
  authorBio,
  tableOfContents,
  blogPostCTA,
  postComments
} from '../../data/blog-post-page';
import { blogCategories } from '../../data/blog-posts';

interface SinglePostTemplateProps {
  slug?: string;
}

export function SinglePostTemplate({ slug = 'getting-started-with-block-themes' }: SinglePostTemplateProps) {
  const { navigateTo } = useNavigation();
  const post = exampleBlogPost;
  const meta = examplePostMeta;

  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs */}
        <section 
          className="py-4"
          style={{
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border-soft)'
          }}
        >
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: post.title }
              ]}
            />
          </Container>
        </section>

        {/* Article Header/Hero */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <article className="max-w-4xl mx-auto">
              {/* Categories */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
                {meta.categories.map((category, index) => (
                  <span
                    key={index}
                    style={{
                      fontSize: 'var(--text-small)',
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--primary)',
                      backgroundColor: 'var(--primary-soft)',
                      padding: '6px 16px',
                      borderRadius: 'var(--radius-full)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary)';
                      e.currentTarget.style.color = 'var(--primary-foreground)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary-soft)';
                      e.currentTarget.style.color = 'var(--primary)';
                    }}
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  marginBottom: '24px',
                  color: 'var(--foreground)'
                }}
              >
                {post.title}
              </h1>

              {/* Excerpt */}
              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-xl)',
                  lineHeight: '1.6',
                  color: 'var(--muted-foreground)',
                  marginBottom: '32px'
                }}
              >
                {post.excerpt}
              </p>

              {/* Meta Information */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '24px', 
                paddingBottom: '32px',
                borderBottom: '1px solid var(--border-soft)',
                flexWrap: 'wrap'
              }}>
                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-full)',
                      backgroundImage: `url(${meta.author.avatar})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--foreground)',
                        marginBottom: '2px'
                      }}
                    >
                      {meta.author.name}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      {meta.author.role}
                    </div>
                  </div>
                </div>

                {/* Date */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={16} style={{ color: 'var(--muted-foreground)' }} />
                  <span
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    {meta.publishDate}
                  </span>
                </div>

                {/* Reading Time */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={16} style={{ color: 'var(--muted-foreground)' }} />
                  <span
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    {meta.readingTime}
                  </span>
                </div>

                {/* Actions */}
                <div style={{ marginLeft: 'auto', display: 'flex', gap: '12px' }}>
                  {postActions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <button
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '8px 16px',
                          backgroundColor: 'var(--muted)',
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius)',
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 'var(--text-small)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--foreground)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--primary-soft)';
                          e.currentTarget.style.borderColor = 'var(--primary)';
                          e.currentTarget.style.color = 'var(--primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--muted)';
                          e.currentTarget.style.borderColor = 'var(--border)';
                          e.currentTarget.style.color = 'var(--foreground)';
                        }}
                        aria-label={action.label}
                      >
                        <Icon size={16} />
                        {action.count && <span>{action.count}</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            </article>
          </Container>
        </Section>

        {/* Featured Image */}
        <Section spacing="none" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-5xl mx-auto">
              <div
                style={{
                  width: '100%',
                  height: '500px',
                  borderRadius: 'var(--radius-lg)',
                  backgroundImage: `url(${post.featuredImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  marginBottom: '64px'
                }}
              />
            </div>
          </Container>
        </Section>

        {/* Article Content */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Table of Contents (Sidebar) */}
                <aside
                  className="lg:col-span-1"
                  style={{
                    position: 'sticky',
                    top: '100px',
                    alignSelf: 'start'
                  }}
                >
                  <div
                    style={{
                      padding: '24px',
                      backgroundColor: 'var(--muted)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)'
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--foreground)',
                        marginBottom: '16px'
                      }}
                    >
                      Table of Contents
                    </h2>
                    <nav>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {tableOfContents.map((item, index) => (
                          <li key={index} style={{ marginBottom: '8px' }}>
                            <a
                              href={`#${item.id}`}
                              style={{
                                fontFamily: 'Manrope, sans-serif',
                                fontSize: 'var(--text-small)',
                                color: 'var(--muted-foreground)',
                                textDecoration: 'none',
                                transition: 'color 0.2s ease'
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted-foreground)'}
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </aside>

                {/* Main Content */}
                <div className="lg:col-span-3">
                  <div
                    className="prose prose-lg"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      lineHeight: '1.8',
                      color: 'var(--foreground)'
                    }}
                    dangerouslySetInnerHTML={{ __html: post.content || '' }}
                  />

                  {/* Tags */}
                  <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border-soft)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <Tag size={18} style={{ color: 'var(--muted-foreground)' }} />
                      <span
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--foreground)'
                        }}
                      >
                        Tags:
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {meta.tags.map((tag, index) => (
                        <span
                          key={index}
                          style={{
                            fontSize: 'var(--text-small)',
                            fontFamily: 'Manrope, sans-serif',
                            color: 'var(--muted-foreground)',
                            backgroundColor: 'var(--muted)',
                            padding: '6px 12px',
                            borderRadius: 'var(--radius)',
                            border: '1px solid var(--border)',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--primary)';
                            e.currentTarget.style.color = 'var(--primary)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border)';
                            e.currentTarget.style.color = 'var(--muted-foreground)';
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Share */}
                  <div style={{ marginTop: '32px', paddingTop: '32px', borderTop: '1px solid var(--border-soft)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <Share2 size={18} style={{ color: 'var(--muted-foreground)' }} />
                      <span
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--foreground)'
                        }}
                      >
                        Share this article:
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button
                        style={{
                          padding: '12px 20px',
                          backgroundColor: '#1DA1F2',
                          color: 'white',
                          border: 'none',
                          borderRadius: 'var(--radius)',
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 'var(--text-small)',
                          fontWeight: 'var(--font-weight-semibold)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          transition: 'opacity 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                        aria-label="Share on Twitter"
                      >
                        <Twitter size={16} />
                        Twitter
                      </button>
                      <button
                        style={{
                          padding: '12px 20px',
                          backgroundColor: '#0A66C2',
                          color: 'white',
                          border: 'none',
                          borderRadius: 'var(--radius)',
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 'var(--text-small)',
                          fontWeight: 'var(--font-weight-semibold)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          transition: 'opacity 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                        aria-label="Share on LinkedIn"
                      >
                        <Linkedin size={16} />
                        LinkedIn
                      </button>
                      <button
                        style={{
                          padding: '12px 20px',
                          backgroundColor: '#1877F2',
                          color: 'white',
                          border: 'none',
                          borderRadius: 'var(--radius)',
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 'var(--text-small)',
                          fontWeight: 'var(--font-weight-semibold)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          transition: 'opacity 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                        aria-label="Share on Facebook"
                      >
                        <Facebook size={16} />
                        Facebook
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Author Bio */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="max-w-4xl mx-auto">
              <AuthorBio
                author={{
                  name: authorBio.name,
                  role: authorBio.role,
                  avatar: authorBio.avatar,
                  bio: authorBio.bio,
                  postCount: authorBio.postCount,
                  social: {
                    linkedin: authorBio.social.linkedin,
                    twitter: authorBio.social.twitter
                  }
                }}
                variant="card"
                showSocial
                showPostCount
              />
            </div>
          </Container>
        </Section>

        {/* Related Posts */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--foreground)',
                  marginBottom: '32px',
                  textAlign: 'center'
                }}
              >
                Related Articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedBlogPosts.map((relatedPost, index) => (
                  <article
                    key={index}
                    onClick={() => navigateTo('blog-single')}
                    style={{
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                      e.currentTarget.style.borderColor = 'var(--primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'var(--border-soft)';
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: '200px',
                        backgroundImage: `url(${relatedPost.featuredImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    <div style={{ padding: '24px' }}>
                      <h3
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-lg)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--foreground)',
                          marginBottom: '8px',
                          lineHeight: '1.3'
                        }}
                      >
                        {relatedPost.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-small)',
                          lineHeight: '1.6',
                          color: 'var(--muted-foreground)',
                          marginBottom: '12px'
                        }}
                      >
                        {relatedPost.excerpt.substring(0, 100)}...
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Clock size={14} style={{ color: 'var(--muted-foreground)' }} />
                        <span
                          style={{
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: 'var(--text-small)',
                            color: 'var(--muted-foreground)'
                          }}
                        >
                          {relatedPost.readingTime}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Newsletter Signup */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <NewsletterSignup
                title={blogPostNewsletter.title}
                description={blogPostNewsletter.description}
                placeholder={blogPostNewsletter.placeholder}
                buttonText={blogPostNewsletter.buttonText}
                privacyText={blogPostNewsletter.privacyText}
                layout="centered"
                variant="default"
              />
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <CTASection
          title={blogPostCTA.title}
          description={blogPostCTA.description}
          primaryButtonText={blogPostCTA.buttons[0].text}
          primaryButtonPage={blogPostCTA.buttons[0].page as any}
          secondaryButtonText={blogPostCTA.buttons[1]?.text}
          secondaryButtonPage={blogPostCTA.buttons[1]?.page as any}
          gradient="blue"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}