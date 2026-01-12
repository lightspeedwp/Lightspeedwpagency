/**
 * Blog Index Template
 * 
 * WordPress template: templates/index.html (blog listing)
 * 
 * Pattern order: Breadcrumbs → Hero → Featured Posts → Filter Bar → Post Grid → Topics → Newsletter → FAQs → CTA
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
import { 
  FileText,
  Users,
  TrendingUp,
  BookOpen,
  Calendar,
  User,
  Clock,
  Tag,
  ChevronRight,
  Filter
} from 'lucide-react';
import { useState } from 'react';
import { useNavigation } from '../../contexts/NavigationContext';

// Import centralized data
import {
  blogIndexHero,
  blogIndexPosts,
  featuredBlogPosts,
  recentBlogPosts,
  blogIndexCategories,
  blogIndexAuthors,
  blogIndexStats,
  blogIndexTopics,
  blogIndexFAQs,
  blogIndexCTA,
  blogIndexFilters
} from '../../data/blog-index-page';

export function BlogIndexTemplate() {
  const { navigateTo } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('latest');

  // Filter posts by category
  const filteredPosts = selectedCategory === 'All' 
    ? recentBlogPosts 
    : recentBlogPosts.filter(post => {
        const categorySlug = blogIndexCategories.find(cat => cat.name === selectedCategory)?.slug;
        return categorySlug && post.categories.includes(categorySlug);
      });

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
          }}
        >
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog' }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Gradient orb decorations */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, transparent 70%)',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
          />

          <Container>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div
                className="inline-block px-4 py-2 mb-6"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: 'var(--text-small)',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 'var(--font-weight-semibold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                <FileText size={14} style={{ display: 'inline', marginRight: '8px' }} />
                OUR BLOG
              </div>

              <h1
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  marginBottom: '20px',
                  color: 'var(--primary-foreground)'
                }}
              >
                WordPress <span style={{ 
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Insights</span> & Best Practices
              </h1>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.95)',
                  marginBottom: '40px',
                  maxWidth: '700px',
                  margin: '0 auto 40px'
                }}
              >
                {blogIndexHero.description}
              </p>

              {/* Hero Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogIndexHero.stats.map((stat, index) => {
                  const icons = { FileText, Users, TrendingUp };
                  const Icon = icons[stat.icon as keyof typeof icons];
                  return (
                    <div
                      key={index}
                      style={{
                        padding: '24px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      <Icon size={32} style={{ marginBottom: '12px', color: '#fbbf24' }} />
                      <div
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-h2)',
                          fontWeight: 'var(--font-weight-bold)',
                          marginBottom: '4px'
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 'var(--text-small)',
                          opacity: 0.9
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Featured Posts */}
        {featuredBlogPosts.length > 0 && (
          <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
            <Container>
              <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                  <h2
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-bold)',
                      lineHeight: '1.2',
                      letterSpacing: '-0.02em',
                      marginBottom: '8px',
                      color: 'var(--foreground)'
                    }}
                  >
                    Featured Posts
                  </h2>
                  <p
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      color: 'var(--muted-foreground)'
                    }}
                  >
                    Our most popular and recent articles
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {featuredBlogPosts.slice(0, 2).map((post, index) => {
                    const author = blogIndexAuthors.find(a => a.slug === post.author);
                    return (
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
                        {/* Featured Image */}
                        <div
                          style={{
                            width: '100%',
                            height: '240px',
                            backgroundImage: `url(${post.featuredImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        />

                        <div style={{ padding: '32px' }}>
                          {/* Categories */}
                          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                            {post.categories.slice(0, 2).map((catSlug, idx) => {
                              const category = blogIndexCategories.find(c => c.slug === catSlug);
                              return category ? (
                                <span
                                  key={idx}
                                  style={{
                                    fontSize: 'var(--text-small)',
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 'var(--font-weight-semibold)',
                                    color: 'var(--primary)',
                                    backgroundColor: 'var(--primary-soft)',
                                    padding: '4px 12px',
                                    borderRadius: 'var(--radius-full)'
                                  }}
                                >
                                  {category.name}
                                </span>
                              ) : null;
                            })}
                          </div>

                          <h3
                            style={{
                              fontFamily: 'Lexend, sans-serif',
                              fontSize: 'var(--text-h3)',
                              fontWeight: 'var(--font-weight-bold)',
                              color: 'var(--foreground)',
                              marginBottom: '12px',
                              lineHeight: '1.3'
                            }}
                          >
                            {post.title}
                          </h3>

                          <p
                            style={{
                              fontFamily: 'Lexend, sans-serif',
                              fontSize: 'var(--text-base)',
                              lineHeight: '1.6',
                              color: 'var(--muted-foreground)',
                              marginBottom: '20px'
                            }}
                          >
                            {post.excerpt}
                          </p>

                          {/* Meta */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <User size={14} style={{ color: 'var(--muted-foreground)' }} />
                              <span
                                style={{
                                  fontFamily: 'Manrope, sans-serif',
                                  fontSize: 'var(--text-small)',
                                  color: 'var(--muted-foreground)'
                                }}
                              >
                                {author?.name}
                              </span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <Calendar size={14} style={{ color: 'var(--muted-foreground)' }} />
                              <span
                                style={{
                                  fontFamily: 'Manrope, sans-serif',
                                  fontSize: 'var(--text-small)',
                                  color: 'var(--muted-foreground)'
                                }}
                              >
                                {post.date}
                              </span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <Clock size={14} style={{ color: 'var(--muted-foreground)' }} />
                              <span
                                style={{
                                  fontFamily: 'Manrope, sans-serif',
                                  fontSize: 'var(--text-small)',
                                  color: 'var(--muted-foreground)'
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
              </div>
            </Container>
          </Section>
        )}

        {/* Filter Bar */}
        <Section spacing="md" style={{ backgroundColor: 'var(--muted)', paddingTop: '24px', paddingBottom: '24px' }}>
          <Container>
            <div className="max-w-6xl mx-auto">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)'
                  }}
                >
                  Recent Articles
                </h2>

                {/* Category Filters */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {blogIndexFilters.categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(category)}
                      style={{
                        padding: '8px 16px',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--border)',
                        backgroundColor: selectedCategory === category ? 'var(--primary)' : 'var(--background)',
                        color: selectedCategory === category ? 'var(--primary-foreground)' : 'var(--foreground)',
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        fontWeight: 'var(--font-weight-semibold)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (selectedCategory !== category) {
                          e.currentTarget.style.borderColor = 'var(--primary)';
                          e.currentTarget.style.color = 'var(--primary)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedCategory !== category) {
                          e.currentTarget.style.borderColor = 'var(--border)';
                          e.currentTarget.style.color = 'var(--foreground)';
                        }
                      }}
                      aria-pressed={selectedCategory === category}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Blog Post Grid */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => {
                  const author = blogIndexAuthors.find(a => a.slug === post.author);
                  return (
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
                      {/* Featured Image */}
                      <div
                        style={{
                          width: '100%',
                          height: '200px',
                          backgroundImage: `url(${post.featuredImage})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />

                      <div style={{ padding: '24px' }}>
                        {/* Category */}
                        {post.categories.length > 0 && (
                          <span
                            style={{
                              fontSize: 'var(--text-small)',
                              fontFamily: 'Manrope, sans-serif',
                              fontWeight: 'var(--font-weight-semibold)',
                              color: 'var(--primary)',
                              backgroundColor: 'var(--primary-soft)',
                              padding: '4px 12px',
                              borderRadius: 'var(--radius-full)',
                              display: 'inline-block',
                              marginBottom: '12px'
                            }}
                          >
                            {blogIndexCategories.find(c => c.slug === post.categories[0])?.name}
                          </span>
                        )}

                        <h3
                          style={{
                            fontFamily: 'Lexend, sans-serif',
                            fontSize: 'var(--text-xl)',
                            fontWeight: 'var(--font-weight-bold)',
                            color: 'var(--foreground)',
                            marginBottom: '8px',
                            lineHeight: '1.3'
                          }}
                        >
                          {post.title}
                        </h3>

                        <p
                          style={{
                            fontFamily: 'Lexend, sans-serif',
                            fontSize: 'var(--text-small)',
                            lineHeight: '1.6',
                            color: 'var(--muted-foreground)',
                            marginBottom: '16px'
                          }}
                        >
                          {post.excerpt.substring(0, 100)}...
                        </p>

                        {/* Meta */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: 'var(--text-small)' }}>
                          <span
                            style={{
                              fontFamily: 'Manrope, sans-serif',
                              color: 'var(--muted-foreground)'
                            }}
                          >
                            {author?.name}
                          </span>
                          <span style={{ color: 'var(--border)' }}>•</span>
                          <span
                            style={{
                              fontFamily: 'Manrope, sans-serif',
                              color: 'var(--muted-foreground)'
                            }}
                          >
                            {post.readingTime}
                          </span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Blog Topics/Categories */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                    color: 'var(--foreground)'
                  }}
                >
                  Explore by Topic
                </h2>

                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.7',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  Browse our blog categories to find what you're looking for
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogIndexTopics.map((topic, index) => {
                  const Icon = topic.icon;
                  return (
                    <div
                      key={index}
                      onClick={() => setSelectedCategory(topic.name)}
                      style={{
                        padding: '24px',
                        backgroundColor: 'var(--card)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-soft)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.borderColor = 'var(--primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'var(--border-soft)';
                      }}
                    >
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: 'var(--radius-lg)',
                          backgroundColor: 'var(--primary-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '16px'
                        }}
                      >
                        <Icon size={24} style={{ color: 'var(--primary)' }} />
                      </div>

                      <h3
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-lg)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--foreground)',
                          marginBottom: '8px'
                        }}
                      >
                        {topic.name}
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
                        {topic.description}
                      </p>

                      <p
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 'var(--text-small)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--primary)'
                        }}
                      >
                        {topic.postCount} articles
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    marginBottom: '16px',
                    lineHeight: 'var(--line-height-snug)'
                  }}
                >
                  Blog FAQs
                </h2>
                <p
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.7'
                  }}
                >
                  Common questions about our blog and content
                </p>
              </div>

              <div className="space-y-4">
                {blogIndexFAQs.map((faq, index) => (
                  <details
                    key={index}
                    style={{
                      padding: '24px',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)'
                    }}
                  >
                    <summary
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-lg)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--foreground)',
                        cursor: 'pointer',
                        listStyle: 'none'
                      }}
                    >
                      {faq.question}
                    </summary>
                    <p
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        lineHeight: '1.7',
                        color: 'var(--muted-foreground)',
                        marginTop: '12px'
                      }}
                    >
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section 
          spacing="xl" 
          style={{
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
            color: 'var(--primary-foreground)'
          }}
        >
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                  color: 'var(--primary-foreground)'
                }}
              >
                {blogIndexCTA.title}
              </h2>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '32px'
                }}
              >
                {blogIndexCTA.description}
              </p>

              <Buttons alignment="center" gap="md">
                <Button 
                  page={blogIndexCTA.buttons[0].page} 
                  size="lg"
                  variant="default"
                  style={{
                    backgroundColor: 'var(--primary-foreground)',
                    color: 'var(--primary)'
                  }}
                >
                  {blogIndexCTA.buttons[0].text}
                </Button>
                <Button 
                  page={blogIndexCTA.buttons[1].page} 
                  size="lg"
                  variant="outline"
                  style={{
                    borderColor: 'var(--primary-foreground)',
                    color: 'var(--primary-foreground)'
                  }}
                >
                  {blogIndexCTA.buttons[1].text}
                </Button>
              </Buttons>
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}
