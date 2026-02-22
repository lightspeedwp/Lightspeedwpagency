/**
 * Tag Archive Template
 *
 * WordPress Template: tag.html
 * Displays posts filtered by tag with interactive features.
 *
 * Features:
 * - useScrollReveal animations (no motion/react)
 * - Declarative <Link> navigation
 * - 100% CSS variables, zero hardcoded values
 *
 * Pattern order: Breadcrumbs -> Archive Header -> Related Tags -> Card Grid -> FAQs -> CTA
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ArchiveHeader } from '../patterns/ArchiveHeader';
import { CardGrid } from '../patterns/CardGrid';
import { PaginationNav } from '../patterns/PaginationNav';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { NewsletterSignup } from '../patterns/NewsletterSignup';
import { CTAInline } from '../patterns/CTAInline';
import { EmptyState } from '../patterns/EmptyState';
import { FAQSection } from '../patterns/FAQSection';
import { Paragraph } from '../blocks/text/Paragraph';
import { Link } from 'react-router';
import { getPostsByTag, postTags } from '../../data/blog-posts';
import { blogCategoryFAQs } from '../../data/faqs';
import { useScrollReveal } from '../../hooks/useScrollReveal';


interface TagArchiveTemplateProps {
  tag: string;
  currentPage?: number;
}

export function TagArchiveTemplate({
  tag,
  currentPage = 1,
}: TagArchiveTemplateProps) {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const tagsRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  const tagData = postTags.find((t) => t.slug === tag);
  const tagPosts = getPostsByTag(tag);

  const postsPerPage = 12;
  const totalPages = Math.ceil(tagPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = tagPosts.slice(startIndex, startIndex + postsPerPage);

  const relatedTags = getRelatedTags(tag, 6);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: tagData?.name || tag },
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart items={breadcrumbs} />

      <Section background="default" spacing="lg" className="archive-header">
        <Container>
          <div ref={headerRef}>
            <ArchiveHeader
              title={`Tagged: ${tagData?.name || tag}`}
              description={getTagDescription(tag)}
              stats={`${tagPosts.length} ${tagPosts.length === 1 ? 'post' : 'posts'}`}
              icon="Tag"
            />
          </div>

          {/* Related Tags */}
          {relatedTags.length > 0 && (
            <div ref={tagsRef} className="related-tags">
              <Paragraph
                className="related-tags__label"
                style={{ marginBottom: 0, marginRight: 'var(--spacing-2)' }}
              >
                Related tags:
              </Paragraph>
              {relatedTags.map((relatedTag) => (
                <Link
                  key={relatedTag.slug}
                  to={`/blog/tag/${relatedTag.slug}`}
                  className="related-tag"
                >
                  #{relatedTag.name}
                  <span className="related-tag__count">{relatedTag.count}</span>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* Posts Grid */}
      <Section background="default" spacing="md">
        <Container>
          {currentPosts.length > 0 ? (
            <div ref={gridRef}>
              <CardGrid
                items={currentPosts.map((post) => ({
                  id: post.id,
                  slug: post.slug,
                  title: post.title,
                  excerpt: post.excerpt,
                  image: post.featuredImage,
                  date: post.date,
                  author: post.author,
                  category: post.categories[0] || 'Uncategorized',
                  readingTime: post.readingTime,
                }))}
                layout="grid"
                columns={3}
              />
            </div>
          ) : (
            <EmptyState
              title="No posts found"
              description={`No posts have been tagged with "${tagData?.name || tag}" yet.`}
              action={{
                label: 'View all tags',
                href: '/blog/tag',
              }}
            />
          )}
        </Container>
      </Section>

      {/* Newsletter Signup */}
      <Section background="default" spacing="md">
        <Container>
          <NewsletterSignup
            title="Stay updated with WordPress insights"
            description="Subscribe to our newsletter for the latest WordPress development tips, tutorials, and industry news."
            primaryButton={{
              label: 'Subscribe to newsletter',
              href: '/newsletter',
            }}
            secondaryButton={{
              label: 'Browse all tags',
              href: '/blog/tag',
            }}
          />
        </Container>
      </Section>

      {/* CTA Inline */}
      <Section background="default" spacing="md">
        <Container>
          <CTAInline
            title="Explore more resources"
            description="Discover additional resources and tools to enhance your WordPress development skills."
            primaryButton={{
              label: 'Visit resource centre',
              href: '/resources',
            }}
          />
        </Container>
      </Section>

      {/* Pagination */}
      {totalPages > 1 && (
        <Section background="default" spacing="md">
          <Container>
            <PaginationNav
              currentPage={currentPage}
              totalPages={totalPages}
              baseUrl={`/blog/tag/${tag}`}
            />
          </Container>
        </Section>
      )}

      {/* FAQs */}
      <FAQSection
        title="Tag archive questions"
        description={`Common questions about browsing ${tagData?.name || tag} content.`}
        faqs={blogCategoryFAQs.slice(0, 3)}
      />

      {/* CTA */}
      <FunkyCTA
        title="Stay Updated with WordPress Insights"
        description="Subscribe to our newsletter for the latest WordPress development tips, tutorials, and industry news."
        buttonText="Subscribe to Newsletter"
        buttonPage="newsletter"
        benefits={[
          'Weekly WordPress tips',
          'Development best practices',
          'Industry news roundups',
          'Exclusive tutorials',
          'Community updates'
        ]}
      />
    </>
  );
}

function getRelatedTags(currentTag: string, limit: number = 6) {
  const currentTagPosts = getPostsByTag(currentTag);
  const tagCounts: Record<string, number> = {};

  currentTagPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (tag !== currentTag) {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      }
    });
  });

  const sortedTags = Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([slug]) => postTags.find((t) => t.slug === slug))
    .filter(Boolean);

  return sortedTags as typeof postTags;
}

function getTagDescription(tag: string): string {
  const descriptions: Record<string, string> = {
    gutenberg: 'Explore articles about the WordPress Gutenberg block editor.',
    'block-editor': 'Learn about WordPress block editor development and modern editing workflows.',
    fse: 'Full Site Editing articles covering WordPress theme development and design systems.',
    performance: 'Performance optimisation guides for WordPress sites.',
    accessibility: 'Web accessibility best practices, WCAG compliance, and inclusive design.',
    woocommerce: 'WooCommerce development tutorials and e-commerce optimisation.',
    security: 'WordPress security best practices and site hardening techniques.',
    plugins: 'WordPress plugin development, reviews, and recommendations.',
    themes: 'WordPress theme development tutorials and design inspiration.',
    tutorials: 'Step-by-step WordPress tutorials for developers of all skill levels.',
  };

  return (
    descriptions[tag] ||
    `Browse all articles tagged with "${tag}" covering WordPress development, WooCommerce, and web design.`
  );
}