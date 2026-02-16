/**
 * Blog Index Template
 * 
 * WordPress concept: index.html or home.html (if posts page)
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../common/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { CardGrid } from '../patterns/CardGrid';
import { Calendar } from 'lucide-react';
import { blogPosts } from '../../data/blog-posts';

export function BlogIndexTemplate() {
  return (
    <>
      <Section spacing="lg" className="wp-bg-muted">
        <Container>
          <Heading level={1} className="wp-text-center wp-mb-6">Latest News</Heading>
          <Paragraph className="wp-text-center wp-max-w-2xl wp-mx-auto">
            Insights, updates, and resources from the LSX Design team.
          </Paragraph>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <CardGrid 
            items={blogPosts.map(post => ({
              title: post.title,
              description: post.excerpt,
              image: post.featuredImage,
              href: `/post/${post.slug}`,
              meta: [
                { icon: Calendar, label: new Date(post.date).toLocaleDateString() }
              ],
              ctaText: "Read More"
            }))}
            columns={3}
            variant="blog"
          />
        </Container>
      </Section>
    </>
  );
}