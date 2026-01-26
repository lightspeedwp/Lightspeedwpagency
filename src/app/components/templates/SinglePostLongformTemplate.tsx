/**
 * Single Post (Longform Editorial) Template
 * 
 * WordPress template: templates/single.html (post variant)
 * 
 * Pattern order: Header → Breadcrumbs → Hero → TOC + Content → NewsletterSignup →
 *                Author Bio → TestimonialGrid → Related Posts → Comments → Footer
 * 
 * **Conversion Strategy:**
 * - NewsletterSignup: Captures engaged readers after content consumption
 * - TestimonialGrid: Validates expertise with client testimonials
 * - Related Posts: Extends engagement and time on site
 * 
 * **Accessibility:**
 * - Keyboard navigation for TOC and comments
 * - Focus management for interactive elements
 * - Screen reader landmarks (main, article, aside, nav)
 * - ARIA labels for all interactive sections
 * 
 * @see {@link /guidelines/templates/single-post-longform.md}
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Button } from '../blocks/design/Buttons';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { ScrollProgress } from '../blocks/layout/ScrollProgress';
import { Badge } from '../patterns/Badge';
import { Calendar, User, Clock, ChevronRight, Home, Share2, Bookmark, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { testimonials } from '../../data/testimonials';
import '@/styles/templates/single-post.css';

// Table of contents data
const tocItems = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'planning', label: 'Planning Your Safari' },
  { id: 'best-season', label: 'Best Season to Visit' },
  { id: 'what-to-pack', label: 'What to Pack' },
  { id: 'choosing-destination', label: 'Choosing Your Destination' },
  { id: 'wildlife-viewing', label: 'Wildlife Viewing Tips' },
  { id: 'conclusion', label: 'Conclusion' },
];

// Related posts
const relatedPosts = [
  {
    id: '1',
    title: 'Hidden Gems: 10 Underrated Destinations in Southeast Asia',
    category: 'Destinations',
    imageUrl: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600',
    href: '#related-1',
  },
  {
    id: '2',
    title: 'Photography Tips: Capturing the Perfect Travel Moments',
    category: 'Photography',
    imageUrl: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=600',
    href: '#related-2',
  },
  {
    id: '3',
    title: 'Sustainable Travel: How to Minimize Your Environmental Impact',
    category: 'Sustainability',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600',
    href: '#related-3',
  },
];

// Comments data
const comments = [
  {
    id: '1',
    author: 'Jessica Thompson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    date: 'Dec 16, 2024',
    content: 'This is such a comprehensive guide! I\'m planning my first safari for next year and this article answered so many of my questions. The packing list is especially helpful.',
  },
  {
    id: '2',
    author: 'Michael Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    date: 'Dec 17, 2024',
    content: 'Just got back from a Kenyan safari and wish I had read this before going! The tips about the best season are spot on. Dry season is definitely the way to go for wildlife viewing.',
  },
  {
    id: '3',
    author: 'Amanda Lee',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    date: 'Dec 18, 2024',
    content: 'Great article! One thing I\'d add is to bring good binoculars - it makes such a difference when you\'re trying to spot wildlife from a distance.',
  },
];

export function SinglePostLongformTemplate() {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main id="main-content" role="main">
        {/* Breadcrumbs */}
        <section 
          style={{
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border)',
            paddingTop: 'var(--spacing-4)',
            paddingBottom: 'var(--spacing-4)',
          }}
        >
          <Container>
            <nav 
              aria-label="Breadcrumb"
              style={{ marginBottom: '2rem' }}
            >
              <ol
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '1rem',
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}
              >
                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                  <span 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-1)',
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    <Home size={14} />
                    Home
                  </span>
                  <ChevronRight size={14} style={{ color: 'var(--muted-foreground)' }} />
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                  <span 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-1)',
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    Blog
                  </span>
                  <ChevronRight size={14} style={{ color: 'var(--muted-foreground)' }} />
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                  <Button 
                    variant="link"
                    page="blog-index"
                    style={{
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--primary)',
                      textDecoration: 'none',
                      padding: '0',
                      height: 'auto',
                    }}
                  >
                    Travel Tips
                  </Button>
                  <ChevronRight size={14} style={{ color: 'var(--muted-foreground)' }} />
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--foreground)',
                    }}
                    aria-current="page"
                  >
                    Planning Your African Safari
                  </span>
                </li>
              </ol>
            </nav>
          </Container>
        </section>

        {/* Hero Section */}
        <section 
          style={{
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border)',
            paddingTop: 'var(--spacing-16)',
            paddingBottom: 'var(--spacing-16)',
          }}
        >
          <Container>
            <div className="wp-max-w-4xl">
              {/* Category Badge */}
              <Badge variant="secondary" href="#category-travel-tips">
                Travel Tips
              </Badge>

              {/* Title */}
              <Heading level={1} style={{ marginBottom: '24px' }}>
                The Ultimate Guide to Planning Your First Safari
              </Heading>

              {/* Post Meta */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--spacing-6)', marginBottom: 'var(--spacing-8)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundImage: 'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div>
                    <a 
                      href="#author-sarah-mitchell"
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--foreground)',
                        textDecoration: 'none',
                        display: 'block',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--foreground)';
                      }}
                    >
                      Sarah Mitchell
                    </a>
                    <span 
                      style={{
                        fontFamily: 'var(--font-secondary)',
                        fontSize: 'var(--text-small)',
                        color: 'var(--muted-foreground)',
                      }}
                    >
                      Travel Writer
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                  <Calendar size={16} style={{ color: 'var(--muted-foreground)' }} />
                  <span 
                    style={{
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    Dec 15, 2024
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                  <Clock size={16} style={{ color: 'var(--muted-foreground)' }} />
                  <span 
                    style={{
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    8 min read
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-8)' }}>
                <Button
                  variant="secondary"
                  size="sm"
                  aria-label="Share this post"
                >
                  <Share2 size={18} />
                  Share
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  aria-label="Bookmark this post"
                >
                  <Bookmark size={18} />
                  Save
                </Button>
              </div>

              {/* Featured Image */}
              <div 
                style={{
                  aspectRatio: '21/9',
                  borderRadius: 'var(--radius-lg)',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1400)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </Container>
        </section>

        {/* Article Content with TOC */}
        <section style={{ backgroundColor: 'var(--background)', paddingTop: 'var(--spacing-16)', paddingBottom: 'var(--spacing-16)' }}>
          <Container>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-12)' }}>
              {/* Table of Contents (Sticky Sidebar) */}
              <aside style={{ gridColumn: '1 / -1' }}>
                <div 
                  style={{
                    padding: 'var(--spacing-6)',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    position: 'sticky',
                    top: '96px',
                  }}
                >
                  <h2 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h4)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                      marginBottom: '16px',
                    }}
                  >
                    Table of Contents
                  </h2>
                  <nav>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {tocItems.map((item) => (
                        <li key={item.id} style={{ marginBottom: '8px' }}>
                          <a 
                            href={`#${item.id}`}
                            onClick={() => setActiveSection(item.id)}
                            className="py-2 block"
                            style={{
                              fontFamily: 'var(--font-primary)',
                              fontSize: 'var(--text-base)',
                              fontWeight: activeSection === item.id 
                                ? 'var(--font-weight-medium)' 
                                : 'var(--font-weight-regular)',
                              color: activeSection === item.id 
                                ? 'var(--primary)' 
                                : 'var(--muted-foreground)',
                              textDecoration: 'none',
                              borderLeft: activeSection === item.id 
                                ? '2px solid var(--primary)' 
                                : '2px solid transparent',
                              paddingLeft: '12px',
                              transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                              if (activeSection !== item.id) {
                                e.currentTarget.style.color = 'var(--primary)';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (activeSection !== item.id) {
                                e.currentTarget.style.color = 'var(--muted-foreground)';
                              }
                            }}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </aside>

              {/* Article Content */}
              <article style={{ gridColumn: 'span 3', maxWidth: '768px' }}>
                {/* Introduction */}
                <div id="introduction" style={{ marginBottom: 'var(--spacing-12)' }}>
                  <h2 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    Introduction
                  </h2>
                  <p 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    Planning your first safari is an exciting adventure that requires careful consideration and preparation. 
                    Whether you're dreaming of witnessing the Great Migration in Tanzania, tracking gorillas in Rwanda, or \n                    exploring the vast plains of the Serengeti, this comprehensive guide will help you navigate every aspect \n                    of your safari planning journey.
                  </p>
                  <p 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                    }}
                  >
                    From choosing the right destination to packing essential items, we'll cover everything you need to know \n                    to make your first safari an unforgettable experience.
                  </p>
                </div>

                {/* Planning Your Safari */}
                <div id="planning" style={{ marginBottom: 'var(--spacing-12)' }}>
                  <h2 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    Planning Your Safari
                  </h2>
                  <p 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    The key to a successful safari starts with thorough planning. Begin by deciding what type of wildlife \n                    experience you're looking for. Are you hoping to see the Big Five? Interested in bird watching? Or \n                    perhaps you want to witness specific animal behaviors like calving season or river crossings?
                  </p>
                  <p 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                    }}
                  >
                    Your budget will also play a significant role in determining your safari style. Options range from \n                    budget camping safaris to luxury lodges with all-inclusive amenities.
                  </p>
                </div>

                {/* Pull Quote */}
                <blockquote 
                  style={{
                    backgroundColor: 'var(--muted)',
                    borderLeft: '4px solid var(--primary)',
                    marginTop: 'var(--spacing-12)',
                    marginBottom: 'var(--spacing-12)',
                    padding: 'var(--spacing-8)',
                    borderRadius: 'var(--radius-lg)',
                  }}
                >
                  <p 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h3)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                      lineHeight: '1.5',
                      margin: 0,
                      fontStyle: 'italic',
                    }}
                  >
                    \"A safari is not just about seeing animals—it's about immersing yourself in the rhythm of \n                    nature and witnessing life in its purest form.\"
                  </p>
                </blockquote>

                {/* Best Season to Visit */}
                <div id="best-season" style={{ marginBottom: 'var(--spacing-12)' }}>
                  <h2 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    Best Season to Visit
                  </h2>
                  <p 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    Timing is everything when it comes to safari planning. The dry season (typically June to October in East \n                    Africa) is generally considered the best time for wildlife viewing. During this period, animals congregate \n                    around water sources, making them easier to spot.
                  </p>
                  <p 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                    }}
                  >
                    However, the green season (November to May) offers its own advantages: fewer tourists, lush landscapes, \n                    and often lower prices. It's also the best time to see newborn animals and migratory birds.
                  </p>
                </div>

                {/* What to Pack */}
                <div id="what-to-pack" style={{ marginBottom: 'var(--spacing-12)' }}>
                  <h2 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    What to Pack
                  </h2>
                  <p 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    Packing for a safari requires a balance between being prepared and traveling light. Essential items include:
                  </p>
                  <ul 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                      paddingLeft: '24px',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    <li>Neutral-colored clothing (khaki, olive, beige)</li>
                    <li>Wide-brimmed hat and sunglasses</li>
                    <li>High-quality binoculars and camera</li>
                    <li>Sunscreen and insect repellent</li>
                    <li>Comfortable walking shoes and sandals</li>
                    <li>Light jacket for early morning game drives</li>
                  </ul>
                </div>

                {/* Continue with more sections as needed */}
                <div id="choosing-destination" style={{ marginBottom: 'var(--spacing-12)' }}>
                  <h2 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    Choosing Your Destination
                  </h2>
                  <p 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                    }}
                  >
                    Africa offers incredible safari destinations, each with unique characteristics. Kenya and Tanzania are \n                    perfect for first-timers, offering excellent infrastructure and abundant wildlife. South Africa provides \n                    malaria-free options and luxury lodges, while Botswana offers exclusive, low-impact safari experiences.
                  </p>
                </div>

                <div id="wildlife-viewing" style={{ marginBottom: 'var(--spacing-12)' }}>
                  <h2 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    Wildlife Viewing Tips
                  </h2>
                  <p 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                    }}
                  >
                    Patience is key to successful wildlife viewing. Wake up early for dawn game drives when animals are most \n                    active. Listen to your guide's expertise and respect wildlife by maintaining safe distances. Remember, \n                    you're a guest in their home.
                  </p>
                </div>

                <div id="conclusion" style={{ marginBottom: 'var(--spacing-12)' }}>
                  <h2 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                      marginBottom: 'var(--spacing-4)',
                    }}
                  >
                    Conclusion
                  </h2>
                  <p 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                    }}
                  >
                    Your first safari will be an experience you'll never forget. With proper planning, realistic expectations, \n                    and an open mind, you're set for an adventure that will change how you see the natural world. Start \n                    planning today, and soon you'll be witnessing the magic of Africa's wilderness firsthand.
                  </p>
                </div>
              </article>
            </div>
          </Container>
        </section>

        {/* Newsletter Signup */}
        <section 
          className="py-16"
          style={{
            backgroundColor: 'var(--muted)',
            borderTop: '1px solid var(--border-soft)',
          }}
        >
          <Container>
            <NewsletterSignup />
          </Container>
        </section>

        {/* Testimonial Grid */}
        <section 
          className="py-16"
          style={{
            backgroundColor: 'var(--background)',
            borderTop: '1px solid var(--border-soft)',
          }}
        >
          <Container>
            <TestimonialGrid testimonials={testimonials} />
          </Container>
        </section>

        {/* Related Posts */}
        <section 
          className="py-16"
          style={{
            backgroundColor: 'var(--muted)',
            borderTop: '1px solid var(--border-soft)',
          }}
        >
          <Container>
            <Heading level={2} style={{ marginBottom: '32px' }}>
              Related Articles
            </Heading>
            <div className="single-post__related-grid">
              {relatedPosts.map((post) => (
                <article 
                  key={post.id}
                  className="single-post__related-card"
                >
                  <a href={post.href} style={{ textDecoration: 'none' }}>
                    <div 
                      className="single-post__related-image"
                      style={{
                        backgroundImage: `url(${post.imageUrl})`,
                      }}
                    />
                  </a>
                  <div className="single-post__related-content">
                    <span className="single-post__category-badge">
                      {post.category}
                    </span>
                    <h3>
                      <a 
                        href={post.href}
                        className="single-post__article-title"
                      >
                        {post.title}
                      </a>
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Comments Section */}
        <section className="py-16" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="single-post__comments-wrapper">
              <div className="single-post__comments-header">
                <MessageCircle size={24} />
                <Heading level={2} style={{ margin: 0 }}>
                  Comments ({comments.length})
                </Heading>
              </div>

              {/* Comments List */}
              <div className="single-post__comments-list">
                {comments.map((comment) => (
                  <div 
                    key={comment.id}
                    className="single-post__comment"
                  >
                    <div className="single-post__comment-content">
                      <div
                        className="single-post__comment-avatar"
                        style={{
                          backgroundImage: `url(${comment.avatar})`,
                        }}
                      />
                      <div className="single-post__comment-text-wrapper">
                        <div className="single-post__comment-meta">
                          <span className="single-post__comment-author">
                            {comment.author}
                          </span>
                          <span className="single-post__comment-date">
                            {comment.date}
                          </span>
                        </div>
                        <p className="single-post__comment-text">
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Leave a Reply CTA */}
              <div className="single-post__comment-cta">
                <h3 className="single-post__cta-title">
                  Join the Conversation
                </h3>
                <p className="single-post__cta-description">
                  Have questions or insights about safari planning? We'd love to hear from you!
                </p>
                <Button variant="primary">
                  Leave a Reply
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <BackToTopButton />
      <SiteFooter />
    </>
  );
}