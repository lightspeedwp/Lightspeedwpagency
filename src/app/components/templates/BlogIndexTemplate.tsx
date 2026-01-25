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
import { FAQSection } from '../patterns/FAQSection';
import { CTASection } from '../patterns/CTASection';
import { Hero } from '../patterns/Hero';
import { CardGrid } from '../patterns/CardGrid';
import { FilterBar } from '../patterns/FilterBar';
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
        <section className="wp-blog-breadcrumbs">
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
        <Hero
          variant="archive"
          align="center"
          maxWidth="4xl"
          gradient="blue"
          spacing="xl"
          badge={{
            icon: FileText,
            text: 'OUR BLOG'
          }}
          title="WordPress Insights & Best Practices"
          titleHighlight="Insights"
          description={blogIndexHero.description}
          stats={blogIndexHero.stats.map(stat => ({
            icon: stat.icon === 'FileText' ? FileText : stat.icon === 'Users' ? Users : TrendingUp,
            value: stat.value,
            label: stat.label
          }))}
        />

        {/* Featured Posts */}
        {featuredBlogPosts.length > 0 && (
          <Section spacing="xl">
            <Container>
              <div className="wp-max-w-6xl">
                <div className="wp-blog-section-header">
                  <h2 className="wp-blog-section-header__title">
                    Featured Posts
                  </h2>
                  <p className="wp-blog-section-header__description">
                    Our most popular and recent articles
                  </p>
                </div>

                <div className="wp-grid-2-cols">
                  {featuredBlogPosts.slice(0, 2).map((post, index) => {
                    const author = blogIndexAuthors.find(a => a.slug === post.author);
                    return (
                      <article
                        key={index}
                        onClick={() => navigateTo('blog-single')}
                        className="wp-blog-featured-card"
                      >
                        {/* Featured Image */}
                        <img 
                          src={post.featuredImage}
                          alt={post.title}
                          className="wp-blog-featured-card__image"
                        />

                        <div className="wp-blog-featured-card__content">
                          {/* Categories */}
                          <div className="wp-blog-categories">
                            {post.categories.slice(0, 2).map((catSlug, idx) => {
                              const category = blogIndexCategories.find(c => c.slug === catSlug);
                              return category ? (
                                <span
                                  key={idx}
                                  className="wp-blog-category-tag"
                                >
                                  {category.name}
                                </span>
                              ) : null;
                            })}
                          </div>

                          <h3 className="wp-blog-featured-card__title">
                            {post.title}
                          </h3>

                          <p className="wp-blog-featured-card__excerpt">
                            {post.excerpt}
                          </p>

                          {/* Meta */}
                          <div className="wp-blog-post-meta">
                            <div className="wp-blog-post-meta__item">
                              <User size={14} className="wp-blog-post-meta__icon" />
                              <span className="wp-blog-post-meta__text">
                                {author?.name}
                              </span>
                            </div>
                            <div className="wp-blog-post-meta__item">
                              <Calendar size={14} className="wp-blog-post-meta__icon" />
                              <span className="wp-blog-post-meta__text">
                                {post.date}
                              </span>
                            </div>
                            <div className="wp-blog-post-meta__item">
                              <Clock size={14} className="wp-blog-post-meta__icon" />
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
              </div>
            </Container>
          </Section>
        )}

        {/* Filter Bar */}
        <FilterBar
          categories={blogIndexFilters.categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          showResultsCount
          resultsCount={filteredPosts.length}
          totalCount={recentBlogPosts.length}
          variant="muted"
          compact={false}
        />

        {/* Blog Post Grid */}
        <Section spacing="xl">
          <Container>
            <div className="wp-max-w-6xl">
              <CardGrid
                items={filteredPosts.map((post) => {
                  const author = blogIndexAuthors.find(a => a.slug === post.author);
                  const categoryName = post.categories.length > 0 
                    ? blogIndexCategories.find(c => c.slug === post.categories[0])?.name 
                    : undefined;
                  
                  return {
                    title: post.title,
                    description: post.excerpt.substring(0, 100) + '...',
                    image: post.featuredImage,
                    href: '/blog/' + post.slug,
                    badge: categoryName ? {
                      text: categoryName,
                      variant: 'primary' as const
                    } : undefined,
                    meta: [
                      { icon: User, label: author?.name || 'Unknown' },
                      { label: post.readingTime }
                    ]
                  };
                })}
                columns={3}
                variant="blog"
                showImages
                showDescriptions
                showCTA={false}
              />
            </div>
          </Container>
        </Section>

        {/* Blog Topics/Categories */}
        <Section spacing="xl" className="bg-muted">
          <Container>
            <div className="blog-index__content-wrapper--wide">
              <div className="blog-index__section-header--large">
                <h2 className="blog-index__section-title">
                  Explore by Topic
                </h2>

                <p className="blog-index__section-description">
                  Browse our blog categories to find what you're looking for
                </p>
              </div>

              <div className="wp-grid-3-cols">
                {blogIndexTopics.map((topic, index) => {
                  const Icon = topic.icon;
                  return (
                    <div
                      key={index}
                      onClick={() => setSelectedCategory(topic.name)}
                      className="blog-index__topic-card"
                    >
                      <div className="blog-index__topic-icon">
                        <Icon size={24} />
                      </div>

                      <h3 className="blog-index__topic-title">
                        {topic.name}
                      </h3>

                      <p className="blog-index__topic-description">
                        {topic.description}
                      </p>

                      <p className="blog-index__topic-count">
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
        <Section spacing="xl">
          <Container>
            <div className="blog-index__content-wrapper--narrow">
              <div className="blog-index__section-header">
                <h2 className="blog-index__section-title--h2">
                  Blog FAQs
                </h2>
                <p className="blog-index__section-description">
                  Common questions about our blog and content
                </p>
              </div>

              <FAQSection faqs={blogIndexFAQs} />
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <CTASection
          title={blogIndexCTA.title}
          description={blogIndexCTA.description}
          primaryButtonText={blogIndexCTA.buttons[0].text}
          primaryButtonPage={blogIndexCTA.buttons[0].page}
          secondaryButtonText={blogIndexCTA.buttons[1].text}
          secondaryButtonPage={blogIndexCTA.buttons[1].page}
          gradient="blue"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}