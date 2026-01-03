/**
 * Meta Tags Component
 * 
 * WordPress concept: SEO optimization utility
 * 
 * React component for managing HTML meta tags for SEO and social media.
 * Handles Open Graph, Twitter Cards, and standard meta tags.
 * 
 * **Purpose:**
 * - Control page titles and descriptions
 * - Optimize social media sharing
 * - Improve search engine indexing
 * - Set canonical URLs
 * 
 * **Use Cases:**
 * - Page-specific SEO settings
 * - Blog post social sharing
 * - Product page optimization
 * - Dynamic meta tag generation
 * 
 * **Meta Tag Types:**
 * - Standard meta tags (title, description, keywords)
 * - Open Graph (Facebook, LinkedIn)
 * - Twitter Cards
 * - Canonical URLs
 * - Robots directives
 * 
 * **SEO Benefits:**
 * - Better SERP display
 * - Higher click-through rates
 * - Improved social sharing
 * - Duplicate content prevention
 * 
 * @example
 * // Homepage meta tags
 * <MetaTags
 *   title="LSX Design | WordPress & WooCommerce Experts"
 *   description="Expert WordPress and WooCommerce web design agency in Cape Town"
 *   keywords={['WordPress', 'WooCommerce', 'Web Design']}
 *   canonical="https://lsxdesign.com"
 *   ogImage="https://lsxdesign.com/og-image.jpg"
 * />
 * 
 * @example
 * // Blog post meta tags
 * <MetaTags
 *   title="Getting Started with WordPress | LSX Design Blog"
 *   description="Learn how to build modern WordPress websites with best practices"
 *   type="article"
 *   ogImage="https://lsxdesign.com/blog/post-image.jpg"
 *   twitterCard="summary_large_image"
 *   article={{
 *     publishedTime: '2024-01-15',
 *     author: 'John Smith',
 *     tags: ['WordPress', 'Tutorial']
 *   }}
 * />
 * 
 * @see {@link https://ogp.me/}
 * @see {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup}
 */

import { useEffect } from 'react';

/**
 * Article-specific metadata for blog posts
 */
interface ArticleMeta {
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

/**
 * Meta Tags component props
 */
interface MetaTagsProps {
  /**
   * Page title (appears in browser tab and search results)
   * 
   * **Best practices:**
   * - 50-60 characters optimal
   * - Include primary keyword
   * - Brand name at end
   * - Unique for each page
   * 
   * @example
   * title="WordPress Development Services | LSX Design"
   */
  title: string;

  /**
   * Page description (appears in search results)
   * 
   * **Best practices:**
   * - 150-160 characters optimal
   * - Include call-to-action
   * - Match page content
   * - Unique for each page
   * 
   * @example
   * description="Professional WordPress development services in Cape Town. Custom themes, plugins, and WooCommerce solutions."
   */
  description: string;

  /**
   * SEO keywords (optional, less important now)
   * 
   * @example
   * keywords={['WordPress', 'WooCommerce', 'Web Design', 'Cape Town']}
   */
  keywords?: string[];

  /**
   * Canonical URL (prevent duplicate content issues)
   * 
   * @example
   * canonical="https://lsxdesign.com/services/wordpress-development"
   */
  canonical?: string;

  /**
   * Open Graph type
   * 
   * @default "website"
   */
  type?: 'website' | 'article' | 'product';

  /**
   * Open Graph image (social sharing preview)
   * 
   * **Best practices:**
   * - 1200 x 630px recommended
   * - Less than 5MB
   * - JPG or PNG format
   * 
   * @example
   * ogImage="https://lsxdesign.com/images/og-homepage.jpg"
   */
  ogImage?: string;

  /**
   * Twitter Card type
   * 
   * @default "summary"
   */
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';

  /**
   * Twitter handle (without @)
   * 
   * @example
   * twitterSite="lsxdesign"
   */
  twitterSite?: string;

  /**
   * Article-specific metadata
   */
  article?: ArticleMeta;

  /**
   * Robots directive (control indexing)
   * 
   * @default "index,follow"
   */
  robots?: string;

  /**
   * Site name for Open Graph
   * 
   * @default "LSX Design"
   */
  siteName?: string;

  /**
   * Locale for Open Graph
   * 
   * @default "en_US"
   */
  locale?: string;
}

/**
 * MetaTags Component
 * 
 * Sets HTML meta tags for SEO and social sharing.
 * Uses React's useEffect to update document head.
 * 
 * **Note:** In a real Next.js/React app, use next/head or react-helmet.
 * This is a demonstration component for Figma Make prototype.
 * 
 * @param props - MetaTagsProps
 * @returns null (component has no visual output)
 */
export function MetaTags({
  title,
  description,
  keywords,
  canonical,
  type = 'website',
  ogImage,
  twitterCard = 'summary',
  twitterSite,
  article,
  robots = 'index,follow',
  siteName = 'LSX Design',
  locale = 'en_US',
}: MetaTagsProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper function to update or create meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.content = content;
    };

    // Standard meta tags
    setMetaTag('description', description);
    if (keywords && keywords.length > 0) {
      setMetaTag('keywords', keywords.join(', '));
    }
    setMetaTag('robots', robots);

    // Canonical URL
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.rel = 'canonical';
        document.head.appendChild(linkElement);
      }
      linkElement.href = canonical;
    }

    // Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', type, true);
    setMetaTag('og:site_name', siteName, true);
    setMetaTag('og:locale', locale, true);

    if (canonical) {
      setMetaTag('og:url', canonical, true);
    }

    if (ogImage) {
      setMetaTag('og:image', ogImage, true);
      setMetaTag('og:image:width', '1200', true);
      setMetaTag('og:image:height', '630', true);
    }

    // Twitter Card tags
    setMetaTag('twitter:card', twitterCard);
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    
    if (twitterSite) {
      setMetaTag('twitter:site', `@${twitterSite}`);
    }

    if (ogImage) {
      setMetaTag('twitter:image', ogImage);
    }

    // Article-specific tags
    if (article && type === 'article') {
      if (article.publishedTime) {
        setMetaTag('article:published_time', article.publishedTime, true);
      }
      if (article.modifiedTime) {
        setMetaTag('article:modified_time', article.modifiedTime, true);
      }
      if (article.author) {
        setMetaTag('article:author', article.author, true);
      }
      if (article.section) {
        setMetaTag('article:section', article.section, true);
      }
      if (article.tags && article.tags.length > 0) {
        article.tags.forEach((tag) => {
          setMetaTag('article:tag', tag, true);
        });
      }
    }
  }, [
    title,
    description,
    keywords,
    canonical,
    type,
    ogImage,
    twitterCard,
    twitterSite,
    article,
    robots,
    siteName,
    locale,
  ]);

  // Component has no visual output
  return null;
}

/**
 * Page-specific meta tag helpers
 */

/**
 * Homepage meta tags
 */
export function HomepageMetaTags() {
  return (
    <MetaTags
      title="LSX Design | WordPress & WooCommerce Web Design Agency"
      description="Expert WordPress and WooCommerce web design agency in Cape Town. Custom themes, plugins, and e-commerce solutions."
      keywords={['WordPress', 'WooCommerce', 'Web Design', 'Cape Town', 'E-commerce']}
      canonical="https://lsxdesign.com"
      ogImage="https://lsxdesign.com/images/og-homepage.jpg"
      twitterCard="summary_large_image"
      twitterSite="lsxdesign"
    />
  );
}

/**
 * Blog post meta tags
 */
interface BlogPostMetaProps {
  title: string;
  description: string;
  slug: string;
  image?: string;
  publishedDate: string;
  modifiedDate?: string;
  author: string;
  category: string;
  tags: string[];
}

export function BlogPostMetaTags({
  title,
  description,
  slug,
  image,
  publishedDate,
  modifiedDate,
  author,
  category,
  tags,
}: BlogPostMetaProps) {
  return (
    <MetaTags
      title={`${title} | LSX Design Blog`}
      description={description}
      canonical={`https://lsxdesign.com/blog/${slug}`}
      type="article"
      ogImage={image || 'https://lsxdesign.com/images/og-blog-default.jpg'}
      twitterCard="summary_large_image"
      twitterSite="lsxdesign"
      article={{
        publishedTime: publishedDate,
        modifiedTime: modifiedDate,
        author,
        section: category,
        tags,
      }}
    />
  );
}

/**
 * Product meta tags (WooCommerce)
 */
interface ProductMetaProps {
  name: string;
  description: string;
  slug: string;
  image: string;
  price: number;
  currency: string;
}

export function ProductMetaTags({
  name,
  description,
  slug,
  image,
  price,
  currency,
}: ProductMetaProps) {
  return (
    <MetaTags
      title={`${name} | LSX Design Shop`}
      description={description}
      canonical={`https://lsxdesign.com/shop/${slug}`}
      type="product"
      ogImage={image}
      twitterCard="summary_large_image"
      twitterSite="lsxdesign"
    />
  );
}

/**
 * WordPress Theme Integration
 * 
 * In a real WordPress theme, you would use wp_head() hooks:
 * 
 * ```php
 * function lsx_output_meta_tags() {
 *   if ( is_singular() ) {
 *     $post_id = get_the_ID();
 *     $title = get_the_title();
 *     $description = get_the_excerpt() ?: wp_trim_words( get_the_content(), 30 );
 *     $image = get_the_post_thumbnail_url( $post_id, 'full' );
 *     
 *     // Open Graph
 *     echo '<meta property="og:title" content="' . esc_attr( $title ) . '" />';
 *     echo '<meta property="og:description" content="' . esc_attr( $description ) . '" />';
 *     echo '<meta property="og:image" content="' . esc_url( $image ) . '" />';
 *     
 *     // Twitter Card
 *     echo '<meta name="twitter:card" content="summary_large_image" />';
 *     echo '<meta name="twitter:title" content="' . esc_attr( $title ) . '" />';
 *     echo '<meta name="twitter:description" content="' . esc_attr( $description ) . '" />';
 *   }
 * }
 * add_action( 'wp_head', 'lsx_output_meta_tags' );
 * ```
 * 
 * Or use Yoast SEO / Rank Math plugins for automatic meta tag generation.
 */
