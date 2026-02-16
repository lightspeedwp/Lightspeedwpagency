/**
 * Single Post (Longform Editorial) Template
 * 
 * WordPress template: templates/single.html (post variant)
 * 
 * Pattern order: Header → Breadcrumbs → Hero → TOC + Content → NewsletterSignup →
 *                Author Bio → TestimonialGrid → Related Posts → Comments → Footer
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../common/Heading';
import { Button } from '../blocks/design/Buttons';
import { ScrollProgress } from '../blocks/layout/ScrollProgress';
import { Badge } from '../blocks/design/Badge';
import { Calendar, Clock, ChevronRight, Home, Share2, Bookmark } from 'lucide-react';
import { useState } from 'react';
import '@/styles/templates/single-post.css';

// Table of contents data
const tocItems = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'planning', label: 'Planning Your Safari' },
  { id: 'best-season', label: 'Best Season to Visit' },
  { id: 'what-to-pack', label: 'What to Pack' },
  { id: 'conclusion', label: 'Conclusion' },
];

export function SinglePostLongformTemplate() {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <>
      <ScrollProgress />
      {/* Breadcrumbs */}
      <section className="wp-block-breadcrumbs-section">
        <nav aria-label="Breadcrumb">
          <ol className="wp-flex wp-items-center wp-gap-2 wp-text-sm wp-text-muted-foreground">
            <li className="wp-flex wp-items-center wp-gap-2">
              <a href="/" className="wp-flex wp-items-center wp-gap-1 wp-hover:text-primary">
                <Home size={14} />
                Home
              </a>
              <ChevronRight size={14} />
            </li>
            <li className="wp-flex wp-items-center wp-gap-2">
              <a href="/blog" className="wp-hover:text-primary">
                Blog
              </a>
              <ChevronRight size={14} />
            </li>
            <li className="wp-flex wp-items-center wp-gap-2">
              <Button 
                variant="link"
                page="blog-index"
                className="wp-p-0 wp-h-auto wp-text-primary wp-font-normal"
              >
                Travel Tips
              </Button>
              <ChevronRight size={14} />
            </li>
            <li>
              <span aria-current="page" className="wp-text-foreground wp-font-medium">
                Planning Your African Safari
              </span>
            </li>
          </ol>
        </nav>
      </section>

      {/* Hero Section */}
      <Section spacing="xl" className="single-post-hero">
        <Container>
          <div className="single-post-hero__container wp-max-w-4xl">
            {/* Category Badge */}
            <div className="wp-mb-6">
              <Badge variant="secondary">
                Travel Tips
              </Badge>
            </div>

            {/* Title */}
            <Heading level={1} className="single-post-hero__title">
              The Ultimate Guide to Planning Your First Safari
            </Heading>

            {/* Post Meta */}
            <div className="single-post-meta wp-mb-8">
              <div className="single-post-meta__author">
                <div
                  className="single-post-meta__avatar"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100)'
                  }}
                />
                <div className="single-post-meta__author-info">
                  <a 
                    href="#author-sarah-mitchell"
                    className="single-post-meta__author-name"
                  >
                    Sarah Mitchell
                  </a>
                  <span className="single-post-meta__author-role">
                    Travel Writer
                  </span>
                </div>
              </div>
              <div className="single-post-meta__item">
                <Calendar size={16} className="wp-text-muted-foreground" />
                <span className="single-post-meta__text">
                  Dec 15, 2024
                </span>
              </div>
              <div className="single-post-meta__item">
                <Clock size={16} className="wp-text-muted-foreground" />
                <span className="single-post-meta__text">
                  8 min read
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="wp-flex wp-items-center wp-gap-3 wp-mb-8">
              <Button
                variant="outline"
                size="sm"
                aria-label="Share this post"
              >
                <Share2 size={18} className="wp-mr-2" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                aria-label="Bookmark this post"
              >
                <Bookmark size={18} className="wp-mr-2" />
                Save
              </Button>
            </div>

            {/* Featured Image */}
            <div 
              className="single-post-featured-image"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1400)',
                aspectRatio: '21/9'
              }}
            />
          </div>
        </Container>
      </Section>

      {/* Article Content with TOC */}
      <Section spacing="xl" className="single-post-content-section">
        <Container>
          <div className="single-post-grid">
            {/* Table of Contents (Sticky Sidebar) */}
            <aside className="single-post-sidebar">
              <div className="single-post-toc">
                <h2 className="single-post-toc__title">
                  Table of Contents
                </h2>
                <nav>
                  <ul className="single-post-toc__list">
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <a 
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveSection(item.id);
                            document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className={`single-post-toc__link ${activeSection === item.id ? 'single-post-toc__link--active' : ''}`}
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
            <article className="single-post-body">
              {/* Introduction */}
              <div id="introduction">
                <h2>Introduction</h2>
                <p>
                  Planning your first safari is an exciting adventure that requires careful consideration and preparation. 
                  Whether you're dreaming of witnessing the Great Migration in Tanzania, tracking gorillas in Rwanda, or 
                  exploring the vast plains of the Serengeti, this comprehensive guide will help you navigate every aspect 
                  of your safari planning journey.
                </p>
                <p>
                  From choosing the right destination to packing essential items, we'll cover everything you need to know 
                  to make your first safari an unforgettable experience.
                </p>
              </div>

              {/* Planning Your Safari */}
              <div id="planning">
                <h2>Planning Your Safari</h2>
                <p>
                  The key to a successful safari starts with thorough planning. Begin by deciding what type of wildlife 
                  experience you're looking for. Are you hoping to see the Big Five? Interested in bird watching? Or 
                  perhaps you want to witness specific animal behaviors like calving season or river crossings?
                </p>
                <p>
                  Your budget will also play a significant role in determining your safari style. Options range from 
                  budget camping safaris to luxury lodges with all-inclusive amenities.
                </p>
              </div>

              {/* Pull Quote */}
              <blockquote>
                <p>
                  "A safari is not just about seeing animals—it's about immersing yourself in the rhythm of 
                  nature and witnessing life in its purest form."
                </p>
              </blockquote>

              {/* Best Season to Visit */}
              <div id="best-season">
                <h2>Best Season to Visit</h2>
                <p>
                  Timing is everything when it comes to safari planning. The dry season (typically June to October in East 
                  Africa) is generally considered the best time for wildlife viewing. During this period, animals congregate 
                  around water sources, making them easier to spot.
                </p>
                <p>
                  However, the green season (November to May) offers its own advantages: fewer tourists, lush landscapes, 
                  and often lower prices. It's also the best time to see newborn animals and migratory birds.
                </p>
              </div>

              {/* What to Pack */}
              <div id="what-to-pack">
                <h2>What to Pack</h2>
                <p>
                  Packing for a safari requires a balance between being prepared and traveling light. Essential items include:
                </p>
                <ul>
                  <li>Neutral-colored clothing (khaki, olive, beige)</li>
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
                  Planning your first safari is a journey in itself. By choosing the right destination, time of year, and 
                  packing appropriately, you'll be well-prepared for an unforgettable adventure. Embrace the experience, 
                  respect the wildlife, and get ready for the trip of a lifetime.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </Section>

      {/* Footer Actions */}
      <Section spacing="xl" className="wp-bg-muted">
        <Container>
          <div className="wp-text-center wp-max-w-2xl wp-mx-auto">
            <Heading level={2} className="wp-mb-4">
              Enjoyed this article?
            </Heading>
            <p className="wp-text-lg wp-text-muted-foreground wp-mb-8">
              Subscribe to our newsletter for more travel tips and inspiration.
            </p>
            <div className="wp-flex wp-justify-center wp-gap-4">
              <Button variant="primary">Subscribe</Button>
              <Button variant="outline">Read More</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}