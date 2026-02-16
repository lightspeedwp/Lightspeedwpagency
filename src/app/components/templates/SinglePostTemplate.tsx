/**
 * Single Post Template
 * 
 * WordPress concept: single.html
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../common/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { getPostBySlug } from '../../data/blog-posts';
import '@/styles/templates/single-post.css';

interface SinglePostTemplateProps {
  slug: string;
}

export function SinglePostTemplate({ slug }: SinglePostTemplateProps) {
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <Section spacing="lg">
        <Container>
          <Heading level={1}>Post Not Found</Heading>
          <Paragraph>The post you are looking for does not exist.</Paragraph>
        </Container>
      </Section>
    );
  }

  return (
    <article>
      {/* Post Header */}
      <Section spacing="lg" className="wp-bg-muted single-post-hero">
        <Container>
          <div className="single-post-hero__container wp-max-w-4xl wp-mx-auto wp-text-center">
            <div className="single-post-meta wp-justify-center wp-mb-4">
              <div className="single-post-meta__item">
                <span className="single-post-meta__text">
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
              <div className="single-post-meta__item">
                <span className="single-post-meta__text">
                  {post.readingTime}
                </span>
              </div>
            </div>
            <Heading level={1} className="single-post-hero__title">{post.title}</Heading>
            <Paragraph size="lead" className="wp-mx-auto">{post.excerpt}</Paragraph>
          </div>
        </Container>
      </Section>

      {/* Featured Image */}
      {post.featuredImage && (
        <Section spacing="none">
          <Container>
            <img 
              src={post.featuredImage} 
              alt={post.title}
              className="single-post-featured-image"
            />
          </Container>
        </Section>
      )}

      {/* Post Content */}
      <Section spacing="lg">
        <Container>
          <div className="single-post-body wp-max-w-3xl wp-mx-auto">
            <Paragraph>
              {/* Placeholder content since actual content is minimal in data */}
              {post.content || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            </Paragraph>
            <Paragraph>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
          </div>
        </Container>
      </Section>
    </article>
  );
}
