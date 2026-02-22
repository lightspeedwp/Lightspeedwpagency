/**
 * Index Template
 * 
 * WordPress template: templates/index.html
 * 
 * **Purpose:** Main blog index page (editorial listing archetype).
 * 
 * **Data Source:** `/src/app/data/blog-posts.ts`
 * 
 * **Pattern Order:**
 * - Breadcrumbs
 * - Listing Header (title + description)
 * - Category Filters
 * - Post Grid
 * - Pagination
 * - NewsletterSignup
 * - CTASection
 * 
 * **Conversion Strategy:**
 * - NewsletterSignup: Capture blog readers
 * - CTASection: Convert interested visitors
 * 
 * **Design System:**
 * - 100% CSS variables from theme.css
 * - Lexend for headings/body
 * - Manrope for small text
 * - Tailwind spacing classes
 * 
 * **Accessibility:**
 * - Keyboard navigation for filters
 * - Screen reader friendly post grid
 * - WCAG 2.1 AA compliant
 * 
 * @see {@link /guidelines/templates/index.md}
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { NewsletterSignup } from '../patterns/NewsletterSignup';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { Link } from 'react-router';
import { blogPosts, blogCategories } from '../../data/blog-posts';
import { useState } from 'react';
import { Calendar, User, Clock } from 'lucide-react';

export function IndexTemplate() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Filter posts
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.categories.includes(activeCategory));

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage, 
    currentPage * postsPerPage
  );

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Blog' },
        ]}
      />

      {/* Header & Filters */}
      <Section spacing="lg">
        <Container>
          <div className="wp-index-header">
            <Heading level={1} className="wp-index-header__title">
              Latest Insights & News
            </Heading>
            <Paragraph 
              size="lead"
              className="wp-index-header__description"
            >
              Expert advice, tutorials, and industry updates from our team of WordPress professionals.
            </Paragraph>
          </div>

          {/* Category Filter Bar */}
          <div className="wp-index-filters">
            <button
              onClick={() => { setActiveCategory('All'); setCurrentPage(1); }}
              className={`wp-index-filter-btn ${
                activeCategory === 'All' 
                  ? 'wp-index-filter-btn--active' 
                  : 'wp-index-filter-btn--inactive'
              }`}
            >
              All Posts
            </button>
            {blogCategories.map((category) => (
              <button
                key={category.slug}
                onClick={() => { setActiveCategory(category.name); setCurrentPage(1); }}
                className={`wp-index-filter-btn ${
                  activeCategory === category.name 
                    ? 'wp-index-filter-btn--active' 
                    : 'wp-index-filter-btn--inactive'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="wp-index-grid">
            {currentPosts.map((post) => (
              <Link 
                key={post.id}
                className="wp-index-card"
                to={`/blog/${post.slug}`}
              >
                {/* Featured Image */}
                <div className="wp-index-card__image-wrapper">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title}
                    className="wp-index-card__image"
                  />
                  <div className="wp-index-card__category">
                    {post.categories[0]}
                  </div>
                </div>

                {/* Content */}
                <div className="wp-index-card__content">
                  <div className="wp-index-card__meta">
                    <span className="wp-index-card__meta-item">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="wp-index-card__meta-item">
                      <Clock size={14} />
                      {post.readingTime} min read
                    </span>
                  </div>

                  <Heading level={3} className="wp-index-card__title">
                    {post.title}
                  </Heading>

                  <Paragraph className="wp-index-card__excerpt">
                    {post.excerpt}
                  </Paragraph>

                  <div className="wp-index-card__footer">
                    <div className="wp-index-card__author-avatar">
                      <User size={16} style={{ color: 'var(--muted-foreground)' }} />
                    </div>
                    <span className="wp-index-card__author-name">
                      {post.author}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="wp-index-pagination">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`wp-index-pagination__btn ${
                    currentPage === i + 1
                      ? 'wp-index-pagination__btn--active'
                      : 'wp-index-pagination__btn--inactive'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* Newsletter Section */}
      <Section className="wp-index-newsletter">
        <Container>
          <NewsletterSignup 
            title="Subscribe to Our Newsletter"
            description="Get the latest articles, tutorials, and WordPress tips delivered straight to your inbox."
          />
        </Container>
      </Section>

      {/* CTA Section */}
      <FunkyCTA
        title="Looking for expert WordPress development?"
        description="We build high-performance, accessible, and scalable WordPress websites using the latest block editor technologies."
        buttonText="View Our Services"
        buttonPage="services"
        benefits={[
          'Block-based theme development',
          'WooCommerce solutions',
          'Performance optimization',
          'Ongoing maintenance plans'
        ]}
      />
    </>
  );
}