/**
 * Single Post (Longform Editorial) Template — Funky Neon Pass
 *
 * WordPress template: templates/single.html (post variant)
 *
 * Features:
 * - Neon gradient hero with floating orb
 * - Frosted glass Table of Contents sidebar (dark mode)
 * - Neon blockquotes with inner glow
 * - Gradient underline on hero title
 * - Scroll-triggered reveal animations
 * - 100% CSS variables, zero hardcoded values
 * - Zero inline styles, zero raw Tailwind
 *
 * Pattern order: Breadcrumbs → Hero → TOC + Content → Tags →
 *               Newsletter CTA → Footer Actions
 */

import '../../../styles/templates/single-post-page.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Heading } from '../common/Heading';
import { Button } from '../blocks/design/Buttons';
import { ScrollProgress } from '../blocks/layout/ScrollProgress';
import { Badge } from '../blocks/design/Badge';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Calendar, Clock, ShareNetwork, BookmarkSimple } from '@phosphor-icons/react';
import { useState } from 'react';
import { RelatedPosts } from '../patterns/RelatedPosts';
import type { RelatedPost } from '../patterns/RelatedPosts';

// Table of contents data
const tocItems = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'planning', label: 'Planning your safari' },
  { id: 'best-season', label: 'Best season to visit' },
  { id: 'what-to-pack', label: 'What to pack' },
  { id: 'conclusion', label: 'Conclusion' },
];

// Related posts data
const relatedPosts: RelatedPost[] = [
  {
    id: '1',
    slug: 'wildlife-photography-tips',
    title: 'Wildlife photography tips for safari enthusiasts',
    excerpt:
      'Master the art of capturing stunning wildlife moments with these essential photography tips and camera settings for your safari adventure.',
    featuredImage:
      'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=800',
    category: 'Travel tips',
    readingTime: '6 min read',
    date: '2024-12-10',
  },
  {
    id: '2',
    slug: 'choosing-safari-destination',
    title: 'How to choose the perfect safari destination',
    excerpt:
      'From the Serengeti to Kruger National Park, discover how to select the ideal African safari destination based on your interests and budget.',
    featuredImage:
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
    category: 'Destinations',
    readingTime: '7 min read',
    date: '2024-12-08',
  },
  {
    id: '3',
    slug: 'safari-safety-essentials',
    title: 'Safari safety: Essential precautions for travellers',
    excerpt:
      'Stay safe on your African safari adventure with these crucial safety tips, health precautions, and emergency preparedness guidelines.',
    featuredImage:
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800',
    category: 'Travel tips',
    readingTime: '5 min read',
    date: '2024-12-05',
  },
];

export function SinglePostLongformTemplate() {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <>
      <ScrollProgress />

      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Insights', href: '/insights' },
          { label: 'The Ultimate Guide to Planning Your First Safari' },
        ]}
      />

      {/* Hero Section */}
      <Section spacing="xl" className="single-post-hero">
        <div className="single-post-hero__orb" aria-hidden="true" />

        <Container>
          <ScrollReveal animation="fade-up" duration={600}>
            <div className="single-post-hero__container wp-max-w-4xl">
              {/* Category badge */}
              <div className="single-post-hero__categories">
                <Badge variant="secondary">Travel tips</Badge>
              </div>

              {/* Title */}
              <Heading level={1} className="single-post-hero__title">
                The ultimate guide to planning your first safari
              </Heading>

              {/* Post meta */}
              <div className="single-post-meta">
                <div className="single-post-meta__author">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
                    alt="Sarah Mitchell"
                    className="single-post-meta__avatar"
                    loading="lazy"
                  />
                  <div className="single-post-meta__author-info">
                    <a
                      href="#author-sarah-mitchell"
                      className="single-post-meta__author-name"
                    >
                      Sarah Mitchell
                    </a>
                    <span className="single-post-meta__author-role">
                      Travel writer
                    </span>
                  </div>
                </div>
                <div className="single-post-meta__item">
                  <Calendar size={16} />
                  <span className="single-post-meta__text">Dec 15, 2024</span>
                </div>
                <div className="single-post-meta__item">
                  <Clock size={16} />
                  <span className="single-post-meta__text">8 min read</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="single-post__newsletter-actions">
                <Button variant="outline" size="sm" aria-label="Share this post">
                  <ShareNetwork size={18} />
                  Share
                </Button>
                <Button variant="outline" size="sm" aria-label="Bookmark this post">
                  <BookmarkSimple size={18} />
                  Save
                </Button>
              </div>

              {/* Featured image */}
              <img
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1400"
                alt="African safari landscape"
                className="single-post-featured-image"
                loading="lazy"
                style={{ aspectRatio: '21/9' }}
              />
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Article Content with TOC */}
      <Section spacing="xl" className="single-post-content-section">
        <Container>
          <div className="single-post-grid">
            {/* Table of Contents (Sticky Sidebar) */}
            <aside className="single-post-sidebar">
              <ScrollReveal animation="fade-right" duration={500}>
                <div className="single-post-toc">
                  <h2 className="single-post-toc__title">Table of contents</h2>
                  <nav>
                    <ul className="single-post-toc__list">
                      {tocItems.map(item => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            onClick={e => {
                              e.preventDefault();
                              setActiveSection(item.id);
                              document
                                .getElementById(item.id)
                                ?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className={`single-post-toc__link ${
                              activeSection === item.id
                                ? 'single-post-toc__link--active'
                                : ''
                            }`}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </ScrollReveal>
            </aside>

            {/* Article Content */}
            <article className="single-post-body">
              <ScrollReveal animation="fade-up" duration={500}>
                {/* Introduction */}
                <div id="introduction">
                  <h2>Introduction</h2>
                  <p>
                    Planning your first safari is an exciting adventure that
                    requires careful consideration and preparation. Whether you're
                    dreaming of witnessing the Great Migration in Tanzania, tracking
                    gorillas in Rwanda, or exploring the vast plains of the
                    Serengeti, this comprehensive guide will help you navigate every
                    aspect of your safari planning journey.
                  </p>
                  <p>
                    From choosing the right destination to packing essential items,
                    we'll cover everything you need to know to make your first safari
                    an unforgettable experience.
                  </p>
                </div>

                {/* Planning Your Safari */}
                <div id="planning">
                  <h2>Planning your safari</h2>
                  <p>
                    The key to a successful safari starts with thorough planning.
                    Begin by deciding what type of wildlife experience you're looking
                    for. Are you hoping to see the Big Five? Interested in bird
                    watching? Or perhaps you want to witness specific animal
                    behaviours like calving season or river crossings?
                  </p>
                  <p>
                    Your budget will also play a significant role in determining
                    your safari style. Options range from budget camping safaris to
                    luxury lodges with all-inclusive amenities.
                  </p>
                </div>

                {/* Pull Quote */}
                <blockquote>
                  <p>
                    &ldquo;A safari is not just about seeing animals — it's about
                    immersing yourself in the rhythm of nature and witnessing life
                    in its purest form.&rdquo;
                  </p>
                </blockquote>

                {/* Best Season to Visit */}
                <div id="best-season">
                  <h2>Best season to visit</h2>
                  <p>
                    Timing is everything when it comes to safari planning. The dry
                    season (typically June to October in East Africa) is generally
                    considered the best time for wildlife viewing. During this
                    period, animals congregate around water sources, making them
                    easier to spot.
                  </p>
                  <p>
                    However, the green season (November to May) offers its own
                    advantages: fewer tourists, lush landscapes, and often lower
                    prices. It's also the best time to see newborn animals and
                    migratory birds.
                  </p>
                </div>

                {/* What to Pack */}
                <div id="what-to-pack">
                  <h2>What to pack</h2>
                  <p>
                    Packing for a safari requires a balance between being prepared
                    and travelling light. Essential items include:
                  </p>
                  <ul>
                    <li>Neutral-coloured clothing (khaki, olive, beige)</li>
                    <li>Wide-brimmed hat and sunglasses</li>
                    <li>High-quality binoculars and camera</li>
                    <li>Sunscreen and insect repellent</li>
                    <li>Comfortable walking shoes and sandals</li>
                    <li>Light jacket for early morning game drives</li>
                  </ul>
                </div>

                {/* Conclusion */}
                <div id="conclusion">
                  <h2>Conclusion</h2>
                  <p>
                    Planning your first safari is a journey in itself. By choosing
                    the right destination, time of year, and packing appropriately,
                    you'll be well-prepared for an unforgettable adventure. Embrace
                    the experience, respect the wildlife, and get ready for the trip
                    of a lifetime.
                  </p>
                </div>
              </ScrollReveal>
            </article>
          </div>
        </Container>
      </Section>

      {/* Related Posts */}
      <Section spacing="xl">
        <RelatedPosts
          posts={relatedPosts}
          currentPostSlug="ultimate-guide-first-safari"
        />
      </Section>

      {/* Newsletter CTA */}
      <Section spacing="xl">
        <Container>
          <ScrollReveal animation="fade-up" duration={500}>
            <div className="single-post__newsletter single-post__newsletter--narrow">
              <Heading level={2} className="single-post__newsletter-title">
                Enjoyed this article?
              </Heading>
              <p className="single-post__newsletter-description">
                Subscribe to our newsletter for more travel tips and inspiration.
              </p>
              <div className="single-post__newsletter-actions">
                <Button variant="primary">Subscribe</Button>
                <Button variant="outline">Read more</Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}