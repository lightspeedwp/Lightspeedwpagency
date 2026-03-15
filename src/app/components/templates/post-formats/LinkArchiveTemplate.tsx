/**
 * Link Archive Template
 * 
 * WordPress template: archive-link.html
 * 
 * Displays a list of link/download resources.
 * 100% CSS variables — no Tailwind.
 * BEM naming: .wp-block-link-*
 * 
 * @see /src/styles/blocks/post-formats/link.css
 * @see /src/styles/templates/archive.css
 */

/* archive.css — globally imported via index.css */
import '../../../../styles/templates/post-formats/link-archive-optimized.css';
import { DownloadSimple as Download, ArrowSquareOut as ExternalLink } from '@phosphor-icons/react';

export function LinkArchiveTemplate() {
  const linkPosts = allPosts.filter(post => post.format === 'link');
  const posts = [...linkPosts, ...linkPosts, ...linkPosts, ...linkPosts];

  return (
    <>
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: 'Links' },
        ]}
      />

      <Section spacing="lg">
        <Container>
          <header className="archive-header">
            <h1 className="archive-header__title">Downloads &amp; Resources</h1>
            <p className="archive-header__description">Exclusive downloads, templates, and resources for subscribers.</p>
          </header>

          <div className="archive-feed">
            {posts.map((post, index) => (
              <article
                key={`${post.id}-${index}`}
                className="wp-block-link-card"
                tabIndex={0}
              >
                <div className="wp-block-link-card__icon">
                  <Download size={24} />
                </div>
                <div className="wp-block-link-card__body">
                  <h2 className="wp-block-link-card__title">
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="wp-block-link-card__link">
                      {post.title.rendered}
                    </a>
                    <ExternalLink size={16} className="wp-block-link-card__external-icon" />
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
    </>
  );
}