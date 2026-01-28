/**
 * Standard Archive Template
 * 
 * WordPress template: archive.html (fallback)
 * 
 * Standard blog archive listing.
 */

import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { allPosts } from '@/app/data/posts-formats';
import { useNavigation } from '@/app/contexts/NavigationContext';

export function StandardArchiveTemplate() {
  const { navigateTo } = useNavigation();
  const standardPosts = allPosts.filter(post => post.format === 'standard');
  const posts = [...standardPosts, ...standardPosts, ...standardPosts];

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
                { label: 'Articles', href: '/standard-archive' }
              ]}
            />
          </Container>
        </section>

        <Section spacing="lg">
          <Container>
            <header className="mb-12 text-center">
              <h1 className="text-4xl font-bold mb-4">Latest Articles</h1>
              <p className="text-xl text-[var(--muted-foreground)]">Insights, tutorials, and news.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article 
                  key={`${post.id}-${index}`} 
                  className="group cursor-pointer"
                  onClick={() => navigateTo('standard-single')}
                >
                  <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-4 border border-[var(--border-soft)]">
                    {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                      <img 
                        src={post._embedded['wp:featuredmedia'][0].source_url} 
                        alt={post.title.rendered} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="flex flex-col h-full">
                    <div className="text-sm text-[var(--muted-foreground)] mb-2">
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                      {post.title.rendered}
                    </h2>
                    <div 
                      className="text-[var(--muted-foreground)] line-clamp-3 mb-4"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
                    />
                    <span className="text-[var(--primary)] font-semibold text-sm mt-auto">Read More →</span>
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
