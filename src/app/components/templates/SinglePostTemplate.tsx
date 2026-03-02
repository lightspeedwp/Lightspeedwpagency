/**
 * Single Post Template — Funky Neon Pass
 *
 * WordPress concept: single.html
 *
 * Features:
 * - Neon gradient hero with floating orb
 * - Gradient underline on title
 * - Frosted glass TOC sidebar (dark mode)
 * - Neon blockquotes and tag chips
 * - Author bio card with neon border
 * - Newsletter CTA with neon glow
 * - Scroll-triggered reveal animations
 * - 100% CSS variables, zero hardcoded values
 * - ✨ UPDATED: Related posts now use PostCard pattern component (Phase 2.1b)
 *
 * Pattern order: Breadcrumbs → Hero → Featured Image → Content → Tags →
 *               Author Bio → Newsletter CTA → Related Posts → FAQ → CTA
 */

import { Link } from 'react-router';
/* Route-level CSS */
import '../../../styles/templates/single-post-page.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { Heading } from '../common/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { FAQSection } from '../patterns/FAQSection';
import { FunkyCTA } from '../patterns/FunkyCTA'; // Updated to FunkyCTA
import { Button } from '../blocks/design/Buttons';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { PostCardGrid } from '../patterns/PostCard';
import {
  Calendar,
  Clock,
  Tag,
  ArrowRight,
} from 'lucide-react';
import {
  getPostBySlug,
  getAuthorBySlug,
  blogPosts,
  blogAuthors,
} from '../../data/blog-posts';
import { blogCategories } from '../../data/taxonomies';
import { blogFAQs } from '../../data/faqs';

interface SinglePostTemplateProps {
  slug: string;
}

/**
 * Convert blog post to PostCard format
 */
function convertToPostCardFormat(post: any) {
  const author = blogAuthors.find(a => a.slug === post.author);
  
  return {
    ...post,
    url: `/insights/${post.slug}`,
    category: post.categories[0] ? {
      name: blogCategories.find(c => c.slug === post.categories[0])?.name || post.categories[0],
      slug: post.categories[0]
    } : undefined,
    author: author ? {
      name: author.name,
      slug: author.slug,
      avatar: author.avatar,
      bio: author.bio
    } : undefined,
    tags: post.categories.slice(1).map((cat: string) => 
      blogCategories.find(c => c.slug === cat)?.name || cat
    )
  };
}

export function SinglePostTemplate({ slug }: SinglePostTemplateProps) {
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <Section spacing="lg">
        <Container>
          <Heading level={1}>Post not found</Heading>
          <Paragraph>The post you are looking for does not exist.</Paragraph>
          <Button variant="primary" page="blog">
            Back to blog
          </Button>
        </Container>
      </Section>
    );
  }

  const author = getAuthorBySlug(post.author);

  const getCategoryName = (catSlug: string) =>
    blogCategories.find(c => c.slug === catSlug)?.name || catSlug;

  /** Related posts: same category, exclude current */
  const relatedPosts = blogPosts
    .filter(
      p =>
        p.id !== post.id &&
        p.categories.some(c => post.categories.includes(c))
    )
    .slice(0, 3);

  return (
    <article>
      {/* JSON-LD Structured Data — rendered server-side in WordPress via wp_head */}

      {/* Breadcrumbs */}
      <BreadcrumbPart
        items={[
          { label: 'Home', page: 'front-page' },
          { label: 'Insights', href: '/insights' },
          { label: post.title },
        ]}
      />

      {/* Hero */}
      <Section spacing="lg" className="single-post-hero">
        <div className="single-post-hero__orb" aria-hidden="true" />
        <Container>
          <ScrollReveal animation="fade-up" duration={600}>
            <div className="single-post-hero__container">
              {/* Category badges */}
              <div className="single-post-hero__categories">
                {post.categories.map(cat => (
                  <Link
                    key={cat}
                    to={`/insights/category/${cat}`}
                    className="single-post-hero__category"
                  >
                    {getCategoryName(cat)}
                  </Link>
                ))}
              </div>

              {/* Title */}
              <Heading level={1} className="single-post-hero__title">
                {post.title}
              </Heading>

              {/* Excerpt */}
              <Paragraph className="single-post-meta__lead">
                {post.excerpt}
              </Paragraph>

              {/* Meta */}
              <div className="single-post-meta">
                {author && (
                  <div className="single-post-meta__author">
                    <img
                      src={author.avatar}
                      alt={author.name}
                      className="single-post-meta__avatar"
                      loading="lazy"
                    />
                    <div className="single-post-meta__author-info">
                      <Link
                        to={`/insights/author/${author.slug}`}
                        className="single-post-meta__author-name"
                      >
                        {author.name}
                      </Link>
                      <span className="single-post-meta__author-role">
                        {author.role}
                      </span>
                    </div>
                  </div>
                )}
                <div className="single-post-meta__item">
                  <Calendar size={16} />
                  <span className="single-post-meta__text">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className="single-post-meta__item">
                  <Clock size={16} />
                  <span className="single-post-meta__text">
                    {post.readingTime}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Featured Image */}
      {post.featuredImage && (
        <Section spacing="none">
          <Container>
            <ScrollReveal animation="fade-up" duration={600} delay={100}>
              <img
                src={post.featuredImage}
                alt={post.title}
                className="single-post-featured-image"
                loading="lazy"
              />
            </ScrollReveal>
          </Container>
        </Section>
      )}

      {/* Post Content */}
      <Section spacing="lg">
        <Container>
          <ScrollReveal animation="fade-up" duration={500} delay={150}>
            <div className="single-post-body single-post-body--narrow">
              <p>
                {post.content ||
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
              </p>

              <blockquote>
                <p>
                  &ldquo;Great web design without functionality is like a sports car with no engine.&rdquo;
                </p>
              </blockquote>

              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Tags */}
      {post.tags.length > 0 && (
        <Section spacing="none" className="single-post-tags">
          <Container>
            <ScrollReveal animation="fade-up" duration={400}>
              <div className="single-post-tags__wrapper">
                <Tag size={16} className="single-post-tags__icon" />
                <div className="single-post-tags__list">
                  {post.tags.map(tag => (
                    <Link
                      key={tag}
                      to={`/insights/tag/${tag}`}
                      className="single-post-tag"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </Section>
      )}

      {/* Author Bio */}
      {author && (
        <Section spacing="lg">
          <Container>
            <ScrollReveal animation="fade-up" duration={500}>
              <div className="single-post__author-card single-post__author-card--narrow">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="single-post__author-avatar"
                  loading="lazy"
                />
                <div className="single-post__author-info">
                  <h3 className="single-post__author-name">{author.name}</h3>
                  <span className="single-post__author-role">{author.role}</span>
                  <p className="single-post__author-bio">{author.bio}</p>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </Section>
      )}

      {/* Newsletter CTA */}
      <Section spacing="lg">
        <Container>
          <ScrollReveal animation="fade-up" duration={500}>
            <div className="single-post__newsletter single-post__newsletter--narrow">
              <h2 className="single-post__newsletter-title">
                Enjoyed this article?
              </h2>
              <p className="single-post__newsletter-description">
                Subscribe to our newsletter for more WordPress insights delivered straight to your inbox.
              </p>
              <div className="single-post__newsletter-actions">
                <Button variant="primary" page="newsletter-service">
                  Subscribe
                </Button>
                <Button variant="outline" page="blog">
                  Read more
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section spacing="lg">
          <Container>
            <ScrollReveal animation="fade-up" duration={500}>
              <Heading level={2} className="blog-index__section-title--h2 single-post__related-heading">
                Related articles
              </Heading>
            </ScrollReveal>
            <PostCardGrid
              posts={relatedPosts.map(convertToPostCardFormat)}
              className="blog-index__grid"
            />
          </Container>
        </Section>
      )}

      {/* FAQs */}
      <FAQSection
        title="Blog questions"
        description="Common questions about our blog and content."
        faqs={blogFAQs.slice(0, 3)}
      />

      {/* CTA */}
      <FunkyCTA
        title="Ready to start your project?"
        description="Let's build something amazing together with WordPress."
        buttonText="Get started"
        buttonPage="contact"
        benefits={[
          'Expert Development',
          'Fast Performance',
          'Secure & Scalable',
          'Ongoing Support'
        ]}
      />
    </article>
  );
}