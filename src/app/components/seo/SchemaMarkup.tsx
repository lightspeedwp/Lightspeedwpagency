/**
 * Schema Markup Components
 * 
 * WordPress concept: SEO optimization utility
 * 
 * Components for generating Schema.org structured data (JSON-LD) for different content types.
 * Improves SEO by providing search engines with explicit information about page content.
 * 
 * **Purpose:**
 * - Enhance search engine understanding of content
 * - Enable rich snippets in search results
 * - Improve click-through rates (CTR)
 * - Support Google's Knowledge Graph
 * 
 * **Schema Types Supported:**
 * - Organization - Business/company information
 * - LocalBusiness - Physical business location
 * - Product - E-commerce products
 * - Article - Blog posts and news
 * - Review - Customer reviews and ratings
 * - FAQ - Frequently asked questions
 * - BreadcrumbList - Navigation trails
 * - Person - Author profiles
 * 
 * **SEO Benefits:**
 * - Rich snippets in search results
 * - Enhanced SERP display
 * - Better local SEO
 * - Improved product visibility
 * - Higher click-through rates
 * 
 * **Performance:**
 * - Zero visual impact (hidden JSON-LD)
 * - Minimal bundle size (~1KB per schema)
 * - Server-side rendering compatible
 * - Cached by search engines
 * 
 * @example
 * // Organization schema for business site
 * <OrganizationSchema
 *   name="LSX Design"
 *   url="https://lsxdesign.com"
 *   logo="https://lsxdesign.com/logo.png"
 *   description="WordPress and WooCommerce web design agency"
 *   address={{
 *     streetAddress: "123 Main St",
 *     addressLocality: "Cape Town",
 *     postalCode: "8001",
 *     addressCountry: "ZA"
 *   }}
 *   contactPoint={{
 *     telephone: "+27-21-123-4567",
 *     contactType: "customer service"
 *   }}
 *   sameAs={[
 *     "https://facebook.com/lsxdesign",
 *     "https://twitter.com/lsxdesign"
 *   ]}
 * />
 * 
 * @see {@link https://schema.org/}
 * @see {@link https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data}
 */

import React from 'react';

/**
 * Base Schema Component
 * 
 * Renders JSON-LD script tag with structured data.
 * All specific schema components extend this.
 */
interface BaseSchemaProps {
  data: Record<string, any>;
}

function BaseSchema({ data }: BaseSchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          ...data,
        }),
      }}
    />
  );
}

/**
 * Organization Schema
 * 
 * Defines business/company information for search engines.
 * 
 * **Use cases:**
 * - Homepage
 * - About page
 * - Contact page
 * - Footer (site-wide)
 * 
 * **Rich Results:**
 * - Knowledge Graph panel
 * - Business information
 * - Social media links
 */
interface OrganizationSchemaProps {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  contactPoint?: {
    telephone?: string;
    contactType?: string;
    email?: string;
  };
  sameAs?: string[];
}

export function OrganizationSchema({
  name,
  url,
  logo,
  description,
  address,
  contactPoint,
  sameAs,
}: OrganizationSchemaProps) {
  const data: Record<string, any> = {
    '@type': 'Organization',
    name,
    url,
  };

  if (logo) data.logo = logo;
  if (description) data.description = description;
  if (address) {
    data.address = {
      '@type': 'PostalAddress',
      ...address,
    };
  }
  if (contactPoint) {
    data.contactPoint = {
      '@type': 'ContactPoint',
      ...contactPoint,
    };
  }
  if (sameAs && sameAs.length > 0) data.sameAs = sameAs;

  return <BaseSchema data={data} />;
}

/**
 * LocalBusiness Schema
 * 
 * Defines physical business location and operating hours.
 * 
 * **Use cases:**
 * - Contact page
 * - Location pages
 * - Store locator
 * - Homepage (with address)
 * 
 * **Rich Results:**
 * - Local business panel
 * - Map integration
 * - Operating hours
 * - Rating stars
 */
interface LocalBusinessSchemaProps {
  name: string;
  description?: string;
  image?: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  telephone?: string;
  email?: string;
  url?: string;
  priceRange?: string;
  openingHours?: string[];
  rating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export function LocalBusinessSchema({
  name,
  description,
  image,
  address,
  geo,
  telephone,
  email,
  url,
  priceRange,
  openingHours,
  rating,
}: LocalBusinessSchemaProps) {
  const data: Record<string, any> = {
    '@type': 'LocalBusiness',
    name,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
  };

  if (description) data.description = description;
  if (image) data.image = image;
  if (geo) {
    data.geo = {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude,
    };
  }
  if (telephone) data.telephone = telephone;
  if (email) data.email = email;
  if (url) data.url = url;
  if (priceRange) data.priceRange = priceRange;
  if (openingHours) data.openingHoursSpecification = openingHours;
  if (rating) {
    data.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: rating.ratingValue,
      reviewCount: rating.reviewCount,
    };
  }

  return <BaseSchema data={data} />;
}

/**
 * Product Schema
 * 
 * Defines product information for e-commerce.
 * 
 * **Use cases:**
 * - Product pages
 * - WooCommerce products
 * - Service pages (as products)
 * 
 * **Rich Results:**
 * - Product rich cards
 * - Price display
 * - Availability status
 * - Review stars
 */
interface ProductSchemaProps {
  name: string;
  image: string;
  description: string;
  brand?: string;
  sku?: string;
  offers: {
    price: number;
    priceCurrency: string;
    availability: 'InStock' | 'OutOfStock' | 'PreOrder';
    url?: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export function ProductSchema({
  name,
  image,
  description,
  brand,
  sku,
  offers,
  aggregateRating,
}: ProductSchemaProps) {
  const data: Record<string, any> = {
    '@type': 'Product',
    name,
    image,
    description,
    offers: {
      '@type': 'Offer',
      ...offers,
      availability: `https://schema.org/${offers.availability}`,
    },
  };

  if (brand) data.brand = { '@type': 'Brand', name: brand };
  if (sku) data.sku = sku;
  if (aggregateRating) {
    data.aggregateRating = {
      '@type': 'AggregateRating',
      ...aggregateRating,
    };
  }

  return <BaseSchema data={data} />;
}

/**
 * Article Schema
 * 
 * Defines blog post or article information.
 * 
 * **Use cases:**
 * - Blog posts
 * - News articles
 * - Case studies
 * - Long-form content
 * 
 * **Rich Results:**
 * - Article rich cards
 * - Author information
 * - Publish date
 * - Featured image
 */
interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  author: {
    name: string;
    url?: string;
  };
  datePublished: string;
  dateModified?: string;
  publisher: {
    name: string;
    logo?: string;
  };
}

export function ArticleSchema({
  headline,
  description,
  image,
  author,
  datePublished,
  dateModified,
  publisher,
}: ArticleSchemaProps) {
  const data: Record<string, any> = {
    '@type': 'Article',
    headline,
    description,
    image,
    author: {
      '@type': 'Person',
      name: author.name,
      ...(author.url && { url: author.url }),
    },
    datePublished,
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      ...(publisher.logo && { logo: publisher.logo }),
    },
  };

  if (dateModified) data.dateModified = dateModified;

  return <BaseSchema data={data} />;
}

/**
 * Review Schema
 * 
 * Defines customer review information.
 * 
 * **Use cases:**
 * - Product review pages
 * - Testimonials
 * - Service reviews
 * 
 * **Rich Results:**
 * - Review stars
 * - Author information
 * - Review date
 */
interface ReviewSchemaProps {
  itemReviewed: {
    type: 'Product' | 'Service' | 'Organization';
    name: string;
  };
  reviewRating: {
    ratingValue: number;
    bestRating?: number;
  };
  author: {
    name: string;
  };
  reviewBody: string;
  datePublished?: string;
}

export function ReviewSchema({
  itemReviewed,
  reviewRating,
  author,
  reviewBody,
  datePublished,
}: ReviewSchemaProps) {
  const data: Record<string, any> = {
    '@type': 'Review',
    itemReviewed: {
      '@type': itemReviewed.type,
      name: itemReviewed.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: reviewRating.ratingValue,
      bestRating: reviewRating.bestRating || 5,
    },
    author: {
      '@type': 'Person',
      name: author.name,
    },
    reviewBody,
  };

  if (datePublished) data.datePublished = datePublished;

  return <BaseSchema data={data} />;
}

/**
 * FAQ Schema
 * 
 * Defines frequently asked questions.
 * 
 * **Use cases:**
 * - FAQ pages
 * - FAQ sections
 * - Support pages
 * 
 * **Rich Results:**
 * - FAQ rich results
 * - Expandable Q&A
 * - Featured snippets
 */
interface FAQSchemaProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQSchema({ questions }: FAQSchemaProps) {
  const data = {
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return <BaseSchema data={data} />;
}

/**
 * Person Schema
 * 
 * Defines author or person information.
 * 
 * **Use cases:**
 * - Author pages
 * - Team member profiles
 * - About page
 * 
 * **Rich Results:**
 * - Knowledge Graph panel
 * - Social media links
 * - Contact information
 */
interface PersonSchemaProps {
  name: string;
  url?: string;
  image?: string;
  jobTitle?: string;
  worksFor?: {
    name: string;
    url?: string;
  };
  sameAs?: string[];
  email?: string;
  telephone?: string;
}

export function PersonSchema({
  name,
  url,
  image,
  jobTitle,
  worksFor,
  sameAs,
  email,
  telephone,
}: PersonSchemaProps) {
  const data: Record<string, any> = {
    '@type': 'Person',
    name,
  };

  if (url) data.url = url;
  if (image) data.image = image;
  if (jobTitle) data.jobTitle = jobTitle;
  if (worksFor) {
    data.worksFor = {
      '@type': 'Organization',
      name: worksFor.name,
      ...(worksFor.url && { url: worksFor.url }),
    };
  }
  if (sameAs && sameAs.length > 0) data.sameAs = sameAs;
  if (email) data.email = email;
  if (telephone) data.telephone = telephone;

  return <BaseSchema data={data} />;
}

/**
 * WordPress Block Pattern Registration
 * 
 * These schema components don't have visual blocks, but can be
 * registered as reusable PHP functions in theme.
 * 
 * Example theme function:
 * 
 * ```php
 * function lsx_output_organization_schema() {
 *   $schema = array(
 *     '@context' => 'https://schema.org',
 *     '@type'    => 'Organization',
 *     'name'     => get_bloginfo( 'name' ),
 *     'url'      => home_url(),
 *     // ... more data
 *   );
 *   echo '<script type="application/ld+json">' . json_encode( $schema ) . '</script>';
 * }
 * add_action( 'wp_footer', 'lsx_output_organization_schema' );
 * ```
 */
