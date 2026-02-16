/**
 * Tag Archive Template
 * 
 * WordPress Template: tag.html
 * Displays posts filtered by tag with interactive features.
 * 
 * Pattern order: Header → Breadcrumbs → Archive Header → Card Grid → NewsletterSignup → CTAInline → Pagination → Footer
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { ArchiveHeader } from '../patterns/ArchiveHeader';
import { CardGrid } from '../patterns/CardGrid';
import { PaginationNav } from '../patterns/PaginationNav';
import { CTASection } from '../patterns/CTASection';
import { NewsletterSignup } from '../patterns/NewsletterSignup';
import { CTAInline } from '../patterns/CTAInline';
import { EmptyState } from '../patterns/EmptyState';
import { Paragraph } from '../blocks/text/Paragraph';
import { getPostsByTag, postTags } from '../../data/blog-posts';
import { motion } from 'motion/react';
import '@/styles/templates/archive.css';

interface TagArchiveTemplateProps {
  /** Current tag slug */
  tag: string;
  /** Current page number */
  currentPage?: number;
}

/**
 * Tag Archive Template Component
 * 
 * Displays blog posts filtered by a specific tag.
 * Includes related tags for easy navigation.
 */
export function TagArchiveTemplate({ 
  tag,
  currentPage = 1 
}: TagArchiveTemplateProps) {
  // Get tag data
  const tagData = postTags.find(t => t.slug === tag);
  
  // Get posts for this tag
  const tagPosts = getPostsByTag(tag);
  
  // Pagination
  const postsPerPage = 12;
  const totalPages = Math.ceil(tagPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = tagPosts.slice(startIndex, startIndex + postsPerPage);
  
  // Get related tags (tags that appear frequently with this tag)
  const relatedTags = getRelatedTags(tag, 6);
  
  // Breadcrumbs
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Tags', href: '/blog/tags' },
    { label: tagData?.name || tag }
  ];

  return (
    <>
        {/* Breadcrumbs */}
        <section className="wp-block-breadcrumbs-section">
            <Breadcrumbs items={breadcrumbs} />
        </section>

        <Section background="default" spacing="lg" style={{ paddingTop: 'var(--spacing-24)', paddingBottom: 'var(--spacing-12)' }}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ArchiveHeader
                title={`Tagged: ${tagData?.name || tag}`}
                description={getTagDescription(tag)}
                stats={`${tagPosts.length} ${tagPosts.length === 1 ? 'post' : 'posts'}`}
                icon="Tag"
              />
            </motion.div>
            
            {/* Related Tags */}
            {relatedTags.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="related-tags"
              >
                <Paragraph className="related-tags__label" style={{ marginBottom: 0, marginRight: 'var(--spacing-2)' }}>
                  Related Tags:
                </Paragraph>
                {relatedTags.map((relatedTag, index) => (
                  <motion.a
                    key={relatedTag.slug}
                    href={`/blog/tag/${relatedTag.slug}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="related-tag"
                  >
                    #{relatedTag.name}
                    <span className="related-tag__count">
                      {relatedTag.count}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </Container>
        </Section>
        
        {/* Posts Grid */}
        <Section background="default" spacing="md">
          <Container>
            {currentPosts.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CardGrid
                  items={currentPosts.map(post => ({
                    id: post.id,
                    slug: post.slug,
                    title: post.title,
                    excerpt: post.excerpt,
                    image: post.featuredImage,
                    date: post.date,
                    author: post.author,
                    category: post.categories[0] || 'Uncategorized',
                    readingTime: post.readingTime
                  }))}
                  layout="grid"
                  columns={3}
                />
              </motion.div>
            ) : (
              <EmptyState
                title="No posts found"
                description={`No posts have been tagged with "${tagData?.name || tag}" yet.`}
                action={{
                  label: 'View All Tags',
                  href: '/blog/tags'
                }}
              />
            )}
          </Container>
        </Section>

        {/* Newsletter Signup */}
        <Section background="default" spacing="md">
          <Container>
            <NewsletterSignup
              title="Stay Updated with WordPress Insights"
              description="Subscribe to our newsletter for the latest WordPress development tips, tutorials, and industry news."
              primaryButton={{
                label: 'Subscribe to Newsletter',
                href: '/newsletter'
              }}
              secondaryButton={{
                label: 'Browse All Tags',
                href: '/blog/tags'
              }}
            />
          </Container>
        </Section>

        {/* CTA Inline */}
        <Section background="default" spacing="md">
          <Container>
            <CTAInline
              title="Explore More Resources"
              description="Discover additional resources and tools to enhance your WordPress development skills."
              primaryButton={{
                label: 'Visit Resource Center',
                href: '/resources'
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

        {/* CTA */}
        <CTASection
          title="Stay Updated with WordPress Insights"
          description="Subscribe to our newsletter for the latest WordPress development tips, tutorials, and industry news."
          primaryButton={{
            label: 'Subscribe to Newsletter',
            href: '/newsletter'
          }}
          secondaryButton={{
            label: 'Browse All Tags',
            href: '/blog/tags'
          }}
        />
    </>
  );
}

/**
 * Get related tags that frequently appear with the current tag
 */
function getRelatedTags(currentTag: string, limit: number = 6) {
  const currentTagPosts = getPostsByTag(currentTag);
  const tagCounts: Record<string, number> = {};
  
  // Count co-occurring tags
  currentTagPosts.forEach(post => {
    post.tags.forEach(tag => {
      if (tag !== currentTag) {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      }
    });
  });
  
  // Sort by frequency and get top N
  const sortedTags = Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([slug]) => postTags.find(t => t.slug === slug))
    .filter(Boolean);
  
  return sortedTags as typeof postTags;
}

/**
 * Get description for tag based on common patterns
 */
function getTagDescription(tag: string): string {
  const descriptions: Record<string, string> = {
    'gutenberg': 'Explore articles about the WordPress Gutenberg block editor, including tutorials, tips, and best practices.',
    'block-editor': 'Learn about WordPress block editor development, custom blocks, and modern editing workflows.',
    'fse': 'Full Site Editing articles covering WordPress theme development, template editing, and design systems.',
    'performance': 'Performance optimization guides for WordPress sites, including Core Web Vitals and speed improvements.',
    'accessibility': 'Web accessibility best practices, WCAG compliance, and inclusive design for WordPress.',
    'woocommerce': 'WooCommerce development tutorials, e-commerce optimization, and online store management.',
    'security': 'WordPress security best practices, vulnerability prevention, and site hardening techniques.',
    'plugins': 'WordPress plugin development, reviews, and recommendations for enhancing your website.',
    'themes': 'WordPress theme development tutorials, customization guides, and design inspiration.',
    'tutorials': 'Step-by-step WordPress tutorials for developers and site owners of all skill levels.'
  };
  
  return descriptions[tag] || `Browse all articles tagged with "${tag}" covering WordPress development, WooCommerce, and web design.`;
}