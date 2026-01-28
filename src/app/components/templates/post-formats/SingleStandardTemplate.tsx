/**
 * Single Standard Template
 * 
 * WordPress template: single.html
 * 
 * Standard blog post layout.
 */

import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { standardPost } from '@/app/data/posts-formats';
import { User, Calendar, Tag } from 'lucide-react';

export function SingleStandardTemplate() {
  const post = standardPost;

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
                { label: 'Articles', href: '/standard-archive' },
                { label: post.title.rendered }
              ]}
            />
          </Container>
        </section>

        <article>
          {/* Hero */}
          <header className="py-12 md:py-20 text-center bg-[var(--secondary)] border-b border-[var(--border-soft)]">
            <Container>
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-center gap-2 mb-6">
                  <span className="bg-[var(--primary)] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Accessibility
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title.rendered}</h1>
                <div className="flex flex-wrap justify-center gap-6 text-[var(--muted-foreground)]">
                  <span className="flex items-center gap-2"><User size={16} /> LightSpeed Team</span>
                  <span className="flex items-center gap-2"><Calendar size={16} /> {new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
            </Container>
          </header>

          {/* Featured Image */}
          {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
            <div className="max-w-5xl mx-auto -mt-12 px-4 mb-12">
              <img 
                src={post._embedded['wp:featuredmedia'][0].source_url} 
                alt={post.title.rendered} 
                className="w-full h-auto rounded-2xl shadow-xl border border-[var(--border-soft)]"
              />
            </div>
          )}

          {/* Content */}
          <Section spacing="lg">
            <Container>
              <div className="max-w-3xl mx-auto prose prose-lg">
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <h2>Why It Matters</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </Container>
          </Section>

          {/* Tags */}
          <div className="border-t border-[var(--border-soft)] py-8">
            <Container>
              <div className="max-w-3xl mx-auto flex items-center gap-4">
                <Tag size={20} className="text-[var(--muted-foreground)]" />
                <div className="flex gap-2">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-[var(--foreground)]">Design</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-[var(--foreground)]">Development</span>
                </div>
              </div>
            </Container>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
