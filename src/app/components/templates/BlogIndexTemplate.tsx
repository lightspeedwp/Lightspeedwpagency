/**
 * Blog Index Template
 * 
 * WordPress template: templates/index.html (blog listing)
 * 
 * Pattern order: Header → Hero → Filter Bar → Post Grid → Pagination → Footer
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Button } from '../blocks/design/Buttons';
import { ArchiveCTA } from '../patterns/ArchiveCTA';
import { blogArchiveCTA } from '../../data/cta';
import { FAQSection } from '../patterns/FAQSection';
import { NewsletterSignup } from '../patterns/NewsletterSignup';
import { PaginationNav } from '../patterns/PaginationNav';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { MobileFilterPopover, FilterOption } from '../common/MobileFilterPopover';
import { Skeleton } from '../blocks/layout/Skeleton';
import { useStaggerReveal } from '../../hooks/useScrollReveal';
import { LazyImage } from '../../hooks/useLazyImage';
import { Calendar, User, Clock, Filter } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigation } from '../../contexts/NavigationContext';
import { useMicroInteractions } from '../../hooks/useMicroInteractions';
import { blogFAQs } from '../../data/faqs';
import { blogPosts, blogCategories } from '../../data/blog-posts';

const categories = ['All', ...blogCategories.map(cat => cat.name)];
const sortOptions = ['Latest First', 'Oldest First', 'Most Popular'];

export function BlogIndexTemplate() {
  const { navigateTo } = useNavigation();
  const { handleHover } = useMicroInteractions();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Latest First');
  const [isLoading, setIsLoading] = useState(true);

  // Scroll reveal with stagger for blog grid
  const { containerRef, itemStyle } = useStaggerReveal({
    stagger: 80,
    animation: 'fade-up',
    duration: 600,
    threshold: 0.1
  });

  // Simulate loading state (in real app, this would be actual data fetching)
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 800ms loading simulation
    
    return () => clearTimeout(timer);
  }, [selectedCategory, selectedSort]); // Re-trigger when filter or sort changes

  // Filter posts by category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => {
        // Map category names to slugs for filtering
        const categorySlug = blogCategories.find(cat => cat.name === selectedCategory)?.slug;
        return categorySlug && post.categories.includes(categorySlug);
      });

  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs - Modern styling */}
        <section 
          className="py-4"
          style={{
            backgroundColor: 'var(--background)',
          }}
        >
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', page: 'front-page' },
                { label: 'Resources' }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section - Gradient with orbs */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Gradient orb decoration */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{
              background: 'var(--glass-bg-strong)',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
          />

          <Container style={{ position: 'relative', zIndex: 1 }}>
            <div className="text-center max-w-4xl mx-auto">
              <span 
                className="inline-flex items-center px-6 py-3 mb-8"
                style={{
                  backgroundColor: 'var(--glass-bg-strong)',
                  backdropFilter: 'blur(10px)',
                  color: 'var(--primary-foreground)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--glass-border)',
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                Resources
              </span>

              <h1 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-semibold)',
                  lineHeight: 'var(--line-height-tight)',
                  letterSpacing: 'var(--letter-spacing-tight)',
                  marginBottom: '24px',
                  color: 'var(--primary-foreground)'
                }}
              >
                Insights & Tutorials
              </h1>

              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lead)',
                  fontWeight: 'var(--font-weight-regular)',
                  lineHeight: 'var(--line-height-relaxed)',
                  color: 'var(--primary-foreground)',
                  opacity: 0.95,
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                Explore our collection of tutorials, case studies, and updates from the LSX Design team. Learn WordPress best practices and modern development techniques.
              </p>
            </div>
          </Container>
        </Section>

        {/* Filter Bar */}
        <section 
          className="py-6"
          style={{
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border-soft)',
          }}
        >
          <Container>
            <div className="flex flex-col gap-6">
              {/* Mobile Filter Button (show on mobile, hide on desktop) */}
              <div className="flex items-center justify-between gap-4 lg:hidden">
                <h2 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h4)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                    margin: 0
                  }}
                >
                  Filter Resources
                </h2>
                
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    minHeight: '48px',
                    minWidth: '48px',
                    padding: '12px 24px',
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    border: 'none',
                    borderRadius: 'var(--radius)',
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  aria-label="Open filter menu"
                >
                  <Filter size={20} />
                  <span>Filters</span>
                </button>
              </div>

              {/* Category Filters (hide on mobile, show on desktop) */}
              <div className="hidden lg:flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className="px-6 py-3"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      backgroundColor: selectedCategory === category 
                        ? 'var(--primary)' 
                        : 'var(--background)',
                      color: selectedCategory === category 
                        ? 'var(--primary-foreground)' 
                        : 'var(--foreground)',
                      border: `1px solid ${selectedCategory === category ? 'var(--primary)' : 'var(--border-soft)'}`,
                      borderRadius: 'var(--radius)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      minHeight: '44px',
                      minWidth: '44px',
                    }}
                    onMouseEnter={(e) => {
                      if (selectedCategory !== category) {
                        e.currentTarget.style.borderColor = 'var(--primary)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedCategory !== category) {
                        e.currentTarget.style.borderColor = 'var(--border-soft)';
                      }
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <label 
                  htmlFor="sort-dropdown"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                  }}
                >
                  Sort by:
                </label>
                <select
                  id="sort-dropdown"
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="px-4 py-3 w-full sm:w-auto appearance-none"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-regular)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--foreground)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    cursor: 'pointer',
                    minHeight: '44px',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                    paddingRight: '36px',
                    outline: 'none',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--ring)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <p 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-base)',
                  color: 'var(--muted-foreground)',
                  margin: 0,
                }}
              >
                Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
              </p>
            </div>
          </Container>
        </section>

        {/* Post Grid */}
        <section className="py-16" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={containerRef}>
              {isLoading ? (
                // Loading skeletons
                Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col"
                    style={{
                      border: '1px solid var(--border-soft)',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Image skeleton */}
                    <Skeleton height="220px" variant="rectangular" />
                    
                    {/* Content skeleton */}
                    <div className="p-6 flex flex-col gap-3">
                      {/* Category badge skeleton */}
                      <Skeleton width="80px" height="28px" variant="rectangular" style={{ borderRadius: 'var(--radius-xl)' }} />
                      
                      {/* Title skeleton */}
                      <Skeleton width="90%" height="24px" className="mb-1" variant="text" />
                      <Skeleton width="70%" height="24px" className="mb-2" variant="text" />
                      
                      {/* Excerpt skeletons */}
                      <Skeleton width="100%" height="16px" variant="text" />
                      <Skeleton width="100%" height="16px" variant="text" />
                      <Skeleton width="85%" height="16px" className="mb-4" variant="text" />
                      
                      {/* Meta skeleton */}
                      <div className="flex gap-4 pt-4" style={{ borderTop: '1px solid var(--border-extra-soft)' }}>
                        <Skeleton width="80px" height="16px" variant="text" />
                        <Skeleton width="90px" height="16px" variant="text" />
                        <Skeleton width="60px" height="16px" variant="text" />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                filteredPosts.map((post, index) => {
                  // Get the first category for display
                  const primaryCategory = blogCategories.find(cat => cat.slug === post.categories[0]);
                  const categoryDisplay = primaryCategory?.name || post.categories[0];
                  
                  return (
                  <div key={post.id} style={itemStyle(index)}>
                  <article 
                    className="flex flex-col rounded-[var(--radius-lg)]"
                    style={{
                      border: '1px solid var(--border-soft)',
                      backgroundColor: 'var(--card)',
                      overflow: 'hidden',
                      transition: 'all 0.2s ease',
                      height: '100%'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Post Image */}
                    <button 
                      onClick={() => navigateTo(`post-${post.slug}`)}
                      style={{ 
                        textDecoration: 'none',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        width: '100%',
                      }}
                      aria-label={`Read ${post.title}`}
                    >
                      <div 
                        className="aspect-[16/9] bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${post.featuredImage})`,
                        }}
                      />
                    </button>

                    {/* Post Content */}
                    <div className="p-6 flex flex-col flex-1">
                      {/* Category Badge */}
                      <button 
                        onClick={() => {
                          navigateTo(`category-${post.categories[0]}`);
                        }}
                        className="inline-flex items-center px-3 py-1 rounded-full mb-3"
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-small)',
                          fontWeight: 'var(--font-weight-medium)',
                          backgroundColor: 'var(--secondary)',
                          color: 'var(--secondary-foreground)',
                          textDecoration: 'none',
                          alignSelf: 'flex-start',
                          transition: 'opacity 0.2s ease',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = '0.8';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = '1';
                        }}
                        aria-label={`View all posts in ${categoryDisplay}`}
                      >
                        {categoryDisplay}
                      </button>

                      {/* Title */}
                      <h2 className="mb-2">
                        <button 
                          onClick={() => navigateTo(`post-${post.slug}`)}
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

                      {/* Excerpt */}
                      <p 
                        className="mb-4"
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          color: 'var(--muted-foreground)',
                          lineHeight: '1.6',
                          margin: 0,
                          flex: 1,
                        }}
                      >
                        {post.excerpt}
                      </p>

                      {/* Post Meta */}
                      <div className="flex flex-wrap items-center gap-4 pt-4" style={{ borderTop: '1px solid var(--border-extra-soft)' }}>
                        <div className="flex items-center gap-2">
                          <User size={16} style={{ color: 'var(--muted-foreground)' }} />
                          <button 
                            onClick={() => {
                              navigateTo(`author-${post.author}`);
                            }}
                            style={{
                              fontFamily: 'Manrope, sans-serif',
                              fontSize: 'var(--text-small)',
                              color: 'var(--muted-foreground)',
                              textDecoration: 'none',
                              background: 'none',
                              border: 'none',
                              padding: 0,
                              cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = 'var(--primary)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = 'var(--muted-foreground)';
                            }}
                            aria-label={`View all posts by ${post.author}`}
                          >
                            {post.author}
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} style={{ color: 'var(--muted-foreground)' }} />
                          <span 
                            style={{
                              fontFamily: 'Manrope, sans-serif',
                              fontSize: 'var(--text-small)',
                              color: 'var(--muted-foreground)',
                            }}
                          >
                            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
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
                  </div>
                );
                })
              )}
            </div>
          </Container>
        </section>

        {/* Pagination */}
        <section className="py-8" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <PaginationNav 
              currentPage={1}
              totalPages={3}
              baseUrl="#blog"
            />
          </Container>
        </section>

        {/* CTA Section */}
        <ArchiveCTA ctaData={blogArchiveCTA} />

        {/* FAQ Section */}
        <FAQSection 
          title="Frequently Asked Questions"
          faqs={blogFAQs}
        />

        {/* Newsletter Signup */}
        <NewsletterSignup />

        {/* Mobile Filter Popover */}
        <MobileFilterPopover
          isOpen={isMobileFilterOpen}
          onClose={() => setIsMobileFilterOpen(false)}
          title="Filter by Category"
          options={blogCategories.map(cat => ({
            id: cat.slug,
            label: cat.name,
            count: blogPosts.filter(p => p.categories.includes(cat.slug)).length
          }))}
          selectedOption={selectedCategory}
          onSelect={setSelectedCategory}
          allLabel="All Posts"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}