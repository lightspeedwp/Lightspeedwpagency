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
import { NewsletterSignup } from '../patterns/NewsletterSignup';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { Calendar, User, Clock, ChevronRight, Home, Share2, Bookmark, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { testimonials } from '../../data/testimonials';

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
          className="py-4"
          style={{
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border)',
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
                <li className="flex items-center gap-2">
                  <Button
                    variant="link"
                    page="home"
                    className="flex items-center gap-1"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--muted-foreground)',
                      textDecoration: 'none',
                      padding: 0,
                      height: 'auto'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 6L8 2L14 6V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 14V8H10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Home
                  </Button>
                  <span style={{ color: 'var(--muted-foreground)' }}>/</span>
                </li>
                <li className="flex items-center gap-2">
                  <Button
                    variant="link"
                    page="blog-index"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--muted-foreground)',
                      textDecoration: 'none',
                      padding: 0,
                      height: 'auto'
                    }}
                  >
                    Blog
                  </Button>
                  <span style={{ color: 'var(--muted-foreground)' }}>/</span>
                </li>
                <li className="flex items-center gap-2">
                  <span
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--foreground)'
                    }}
                    aria-current="page"
                  >
                    Travel Tips
                  </span>
                </li>
              </ol>
            </nav>
          </Container>
        </section>

        {/* Hero Section */}
        <section 
          className="py-16"
          style={{
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <Container>
            <div className="max-w-4xl mx-auto">
              {/* Category Badge */}
              <a 
                href="#category-travel-tips"
                className="inline-flex items-center px-3 py-1 rounded-full mb-4"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-small)',
                  fontWeight: 'var(--font-weight-medium)',
                  backgroundColor: 'var(--secondary)',
                  color: 'var(--secondary-foreground)',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                Travel Tips
              </a>

              {/* Title */}
              <Heading level={1} style={{ marginBottom: '24px' }}>
                The Ultimate Guide to Planning Your First Safari
              </Heading>

              {/* Post Meta */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100)',
                    }}
                  />
                  <div>
                    <a 
                      href="#author-sarah-mitchell"
                      style={{
                        fontFamily: 'Lexend, sans-serif',
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
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        color: 'var(--muted-foreground)',
                      }}
                    >
                      Travel Writer
                    </span>
                  </div>
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
                    Dec 15, 2024
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
                    8 min read
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 mb-8">
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
                className="aspect-[21/9] rounded-[var(--radius-lg)] bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1400)',
                }}
              />
            </div>
          </Container>
        </section>

        {/* Article Content with TOC */}
        <section className="py-16" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Table of Contents (Sticky Sidebar) */}
              <aside className="lg:col-span-1">
                <div 
                  className="p-6 rounded-[var(--radius-lg)] lg:sticky lg:top-24"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <h2 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
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
                              fontFamily: 'Lexend, sans-serif',
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
              <article className="lg:col-span-3 max-w-3xl">
                {/* Introduction */}
                <div id="introduction" className="mb-12">
                  <h2 
                    className="mb-4"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                    }}
                  >
                    Introduction
                  </h2>
                  <p 
                    className="mb-4"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                    }}
                  >
                    Planning your first safari is an exciting adventure that requires careful consideration and preparation. 
                    Whether you're dreaming of witnessing the Great Migration in Tanzania, tracking gorillas in Rwanda, or 
                    exploring the vast plains of the Serengeti, this comprehensive guide will help you navigate every aspect 
                    of your safari planning journey.
                  </p>
                  <p 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                    }}
                  >
                    From choosing the right destination to packing essential items, we'll cover everything you need to know 
                    to make your first safari an unforgettable experience.
                  </p>
                </div>

                {/* Planning Your Safari */}
                <div id="planning" className="mb-12">
                  <h2 
                    className="mb-4"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                    }}
                  >
                    Planning Your Safari
                  </h2>
                  <p 
                    className="mb-4"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                    }}
                  >
                    The key to a successful safari starts with thorough planning. Begin by deciding what type of wildlife 
                    experience you're looking for. Are you hoping to see the Big Five? Interested in bird watching? Or 
                    perhaps you want to witness specific animal behaviors like calving season or river crossings?
                  </p>
                  <p 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                    }}
                  >
                    Your budget will also play a significant role in determining your safari style. Options range from 
                    budget camping safaris to luxury lodges with all-inclusive amenities.
                  </p>
                </div>

                {/* Pull Quote */}
                <blockquote 
                  className="my-12 p-8 rounded-[var(--radius-lg)]"
                  style={{
                    backgroundColor: 'var(--muted)',
                    borderLeft: '4px solid var(--primary)',
                  }}
                >
                  <p 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h3)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                      lineHeight: '1.5',
                      margin: 0,
                      fontStyle: 'italic',
                    }}
                  >
                    "A safari is not just about seeing animals—it's about immersing yourself in the rhythm of 
                    nature and witnessing life in its purest form."
                  </p>
                </blockquote>

                {/* Best Season to Visit */}
                <div id="best-season" className="mb-12">
                  <h2 
                    className="mb-4"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                    }}
                  >
                    Best Season to Visit
                  </h2>
                  <p 
                    className="mb-4"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                    }}
                  >
                    Timing is everything when it comes to safari planning. The dry season (typically June to October in East 
                    Africa) is generally considered the best time for wildlife viewing. During this period, animals congregate 
                    around water sources, making them easier to spot.
                  </p>
                  <p 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                    }}
                  >
                    However, the green season (November to May) offers its own advantages: fewer tourists, lush landscapes, 
                    and often lower prices. It's also the best time to see newborn animals and migratory birds.
                  </p>
                </div>

                {/* What to Pack */}
                <div id="what-to-pack" className="mb-12">
                  <h2 
                    className="mb-4"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                    }}
                  >
                    What to Pack
                  </h2>
                  <p 
                    className="mb-4"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                    }}
                  >
                    Packing for a safari requires a balance between being prepared and traveling light. Essential items include:
                  </p>
                  <ul 
                    className="mb-4"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                      paddingLeft: '24px',
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
                <div id="choosing-destination" className="mb-12">
                  <h2 
                    className="mb-4"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                    }}
                  >
                    Choosing Your Destination
                  </h2>
                  <p 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                    }}
                  >
                    Africa offers incredible safari destinations, each with unique characteristics. Kenya and Tanzania are 
                    perfect for first-timers, offering excellent infrastructure and abundant wildlife. South Africa provides 
                    malaria-free options and luxury lodges, while Botswana offers exclusive, low-impact safari experiences.
                  </p>
                </div>

                <div id="wildlife-viewing" className="mb-12">
                  <h2 
                    className="mb-4"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                    }}
                  >
                    Wildlife Viewing Tips
                  </h2>
                  <p 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                    }}
                  >
                    Patience is key to successful wildlife viewing. Wake up early for dawn game drives when animals are most 
                    active. Listen to your guide's expertise and respect wildlife by maintaining safe distances. Remember, 
                    you're a guest in their home.
                  </p>
                </div>

                <div id="conclusion" className="mb-12">
                  <h2 
                    className="mb-4"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                    }}
                  >
                    Conclusion
                  </h2>
                  <p 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-lg)',
                      color: 'var(--foreground)',
                      lineHeight: '1.8',
                    }}
                  >
                    Your first safari will be an experience you'll never forget. With proper planning, realistic expectations, 
                    and an open mind, you're set for an adventure that will change how you see the natural world. Start 
                    planning today, and soon you'll be witnessing the magic of Africa's wilderness firsthand.
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <article 
                  key={post.id}
                  className="rounded-[var(--radius-lg)]"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <a href={post.href} style={{ textDecoration: 'none' }}>
                    <div 
                      className="aspect-[16/9] bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${post.imageUrl})`,
                      }}
                    />
                  </a>
                  <div className="p-6">
                    <span 
                      className="inline-block px-3 py-1 rounded-full mb-3"
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-small)',
                        fontWeight: 'var(--font-weight-medium)',
                        backgroundColor: 'var(--secondary)',
                        color: 'var(--secondary-foreground)',
                      }}
                    >
                      {post.category}
                    </span>
                    <h3>
                      <a 
                        href={post.href}
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-h3)',
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--foreground)',
                          textDecoration: 'none',
                          lineHeight: '1.3',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'var(--foreground)';
                        }}
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
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <MessageCircle size={24} style={{ color: 'var(--foreground)' }} />
                <Heading level={2} style={{ margin: 0 }}>
                  Comments ({comments.length})
                </Heading>
              </div>

              {/* Comments List */}
              <div className="flex flex-col gap-6 mb-12">
                {comments.map((comment) => (
                  <div 
                    key={comment.id}
                    className="p-6 rounded-[var(--radius-lg)]"
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-full bg-cover bg-center flex-shrink-0"
                        style={{
                          backgroundImage: `url(${comment.avatar})`,
                        }}
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span 
                            style={{
                              fontFamily: 'Lexend, sans-serif',
                              fontSize: 'var(--text-base)',
                              fontWeight: 'var(--font-weight-medium)',
                              color: 'var(--foreground)',
                            }}
                          >
                            {comment.author}
                          </span>
                          <span 
                            style={{
                              fontFamily: 'Manrope, sans-serif',
                              fontSize: 'var(--text-small)',
                              color: 'var(--muted-foreground)',
                            }}
                          >
                            {comment.date}
                          </span>
                        </div>
                        <p 
                          style={{
                            fontFamily: 'Lexend, sans-serif',
                            fontSize: 'var(--text-base)',
                            color: 'var(--foreground)',
                            lineHeight: '1.6',
                            margin: 0,
                          }}
                        >
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Leave a Reply CTA */}
              <div 
                className="p-8 rounded-[var(--radius-lg)] text-center"
                style={{
                  backgroundColor: 'var(--muted)',
                  border: '1px solid var(--border)',
                }}
              >
                <h3 
                  className="mb-4"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h3)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                  }}
                >
                  Join the Conversation
                </h3>
                <p 
                  className="mb-6"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.6',
                  }}
                >
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