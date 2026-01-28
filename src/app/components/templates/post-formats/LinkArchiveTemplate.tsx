/**
 * Link Archive Template
 * 
 * WordPress template: archive-link.html
 * 
 * Displays a list of link resources.
 */

import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { allPosts } from '@/app/data/posts-formats';
import { Download, ExternalLink } from 'lucide-react';
import '@/styles/blocks/post-formats/link.css';

export function LinkArchiveTemplate() {
  const linkPosts = allPosts.filter(post => post.format === 'link');
  // Duplicate
  const posts = [...linkPosts, ...linkPosts, ...linkPosts, ...linkPosts];

  return (
    <>
      <SiteHeader />
      <main>
        <section className="py-4 border-b border-[var(--border-soft)]">
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: 'Downloads', href: '/link-archive' }
              ]}
            />
          </Container>
        </section>

        <Section spacing="lg">
          <Container>
            <header className="mb-12 text-center">
              <h1 className="text-4xl font-bold mb-4">Downloads & Resources</h1>
              <p className="text-xl text-[var(--muted-foreground)]">Exclusive downloads, templates, and resources for subscribers.</p>
            </header>

            <div className="max-w-3xl mx-auto space-y-6">
              {posts.map((post, index) => (
                <article key={`${post.id}-${index}`} className="wp-block-link-card">
                  <div className="wp-block-link-card__icon">
                    <Download size={24} />
                  </div>
                  <div className="wp-block-link-card__body">
                    <h2 className="wp-block-link-card__title">
                      <a href={post.link} target="_blank" rel="noopener noreferrer" className="wp-block-link-card__link">
                        {post.title.rendered}
                      </a>
                      <ExternalLink size={16} className="text-[var(--muted-foreground)]" />
                    </h2>
                    <div className="wp-block-link-card__desc" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    <div className="wp-block-link-card__domain">
                      {new URL(post.link).hostname}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
