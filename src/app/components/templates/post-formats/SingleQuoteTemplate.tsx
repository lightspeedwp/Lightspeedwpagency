/**
 * Single Quote Template
 * 
 * WordPress template: single-quote.html
 * 
 * Displays a single quote with emphasis on typography.
 */

import '../../../../styles/templates/single-post.css';
import { Quote } from 'lucide-react';

export function SingleQuoteTemplate() {
  const post = quotePost;

  return (
    <>
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: 'Quotes', href: '/quote-archive' },
          { label: post.title.rendered },
        ]}
      />

      <article>
        <div className="wp-block-quote-hero">
          <Container>
            <div className="wp-max-w-3xl wp-mx-auto">
              <div className="wp-block-quote-hero__card">
                <div className="wp-block-quote-hero__bg-icon">
                  <Quote size={200} />
                </div>
                
                <div className="wp-block-quote-hero__content">
                  <div className="wp-block-quote-hero__icon">
                    <Quote size={48} />
                  </div>
                  
                  <div 
                    className="wp-block-quote-hero__text"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  />
                  
                  <div className="wp-block-quote-hero__footer">
                    <div className="wp-block-quote-hero__avatar"></div>
                    <div className="wp-block-quote-hero__author-info">
                      <div className="wp-block-quote-hero__author">Matt Mullenweg</div>
                      <div className="wp-block-quote-hero__role">Co-founder, WordPress</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

      </article>
    </>
  );
}