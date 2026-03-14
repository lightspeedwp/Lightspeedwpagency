/**
 * Single Blog Post Page Data
 * 
 * Real content for individual blog post pages from LightSpeed WP Agency.
 * Real content extracted from https://lightspeedwp.agency/blog
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/blog/[post-slug]
 * **Last Updated:** 2025-01-09
 * 
 * WordPress: Maps to templates/single.html (single post)
 */

import type { UniversalIcon } from '../utils/icon-map';
import { blogPosts, blogAuthors, blogCategories } from './blog-posts';

/**
 * Example Blog Post (Full Content)
 * 
 * Using the first real post from blog-posts.ts with full content
 */
export const exampleBlogPost = {
  ...blogPosts[0], // "Getting Started with WordPress Block Themes"
  content: `
    <h2>Introduction to WordPress Block Themes</h2>
    <p>WordPress Block Themes represent a significant evolution in WordPress development, bringing Full Site Editing (FSE) capabilities to the forefront. At LightSpeed, we've been building block themes since 2021, and we've learned a lot about best practices, common pitfalls, and effective workflows.</p>

    <p>In this comprehensive guide, we'll walk you through everything you need to know to get started with WordPress Block Themes, from understanding the fundamentals to building your first theme.</p>

    <h2>What Are Block Themes?</h2>
    <p>Block themes are a new type of WordPress theme that use the block editor (Gutenberg) for all aspects of site building, including headers, footers, and template parts. Unlike classic themes that rely on PHP templates, block themes use HTML files and JSON configuration.</p>

    <h3>Key Components of Block Themes</h3>
    <ul>
      <li><strong>theme.json</strong> — The heart of your block theme, defining global settings and styles</li>
      <li><strong>templates/*.html</strong> — HTML template files for different page types</li>
      <li><strong>parts/*.html</strong> — Reusable template parts like headers and footers</li>
      <li><strong>patterns/*.php</strong> — Block patterns for reusable content sections</li>
      <li><strong>styles/*.json</strong> — Optional style variations</li>
    </ul>

    <h2>Why Choose Block Themes?</h2>
    <p>Block themes offer several advantages over classic themes:</p>

    <ol>
      <li><strong>Full Site Editing</strong> — Edit every part of your site visually in the block editor</li>
      <li><strong>No PHP Required</strong> — Build templates using HTML and blocks instead of PHP</li>
      <li><strong>Design Tokens</strong> — Centralize all design decisions in theme.json</li>
      <li><strong>Better Performance</strong> — Cleaner markup and optimized rendering</li>
      <li><strong>Future-Proof</strong> — WordPress is moving towards full site editing</li>
    </ol>

    <h2>Setting Up Your Development Environment</h2>
    <p>Before building your first block theme, you'll need:</p>

    <ul>
      <li>WordPress 6.0 or higher (we recommend the latest version)</li>
      <li>Local development environment (Local by Flywheel, MAMP, or Docker)</li>
      <li>Code editor (VS Code with WordPress snippets extension)</li>
      <li>Basic understanding of HTML, CSS, and JSON</li>
    </ul>

    <h2>Creating Your First Block Theme</h2>
    <p>Let's create a minimal block theme from scratch. Here's the basic file structure:</p>

    <pre><code>my-block-theme/
├── style.css (required)
├── theme.json (required)
├── templates/
│   └── index.html (required)
├── parts/
│   ├── header.html
│   └── footer.html
└── patterns/</code></pre>

    <h3>The Essential Files</h3>

    <h4>1. style.css</h4>
    <p>Your theme's main stylesheet with required metadata:</p>

    <pre><code>/*
Theme Name: My Block Theme
Theme URI: https://example.com
Author: Your Name
Author URI: https://example.com
Description: A minimal WordPress block theme
Version: 1.0
Requires at least: 6.0
Tested up to: 6.4
Requires PHP: 7.4
License: GPL v2 or later
Text Domain: my-block-theme
*/</code></pre>

    <h4>2. theme.json</h4>
    <p>This file defines your design system with colors, typography, spacing, and layout settings.</p>

    <h4>3. templates/index.html</h4>
    <p>Your main template file using WordPress block markup.</p>

    <h2>Best Practices We've Learned</h2>
    <p>After building 20+ block themes at LightSpeed, here are our top recommendations:</p>

    <ol>
      <li><strong>Start with theme.json</strong> — Define all design tokens before building templates</li>
      <li><strong>Use patterns extensively</strong> — Reusable patterns save time and ensure consistency</li>
      <li><strong>Test on real content</strong> — Don't just use placeholder text, use realistic content lengths</li>
      <li><strong>Follow accessibility standards</strong> — WCAG 2.1 AA compliance is essential</li>
      <li><strong>Optimize for performance</strong> — Minimize custom CSS, leverage core blocks</li>
    </ol>

    <h2>Common Pitfalls to Avoid</h2>
    <p>We've seen developers struggle with these issues:</p>

    <ul>
      <li>Over-customizing with CSS instead of using theme.json settings</li>
      <li>Creating too many custom blocks when core blocks would work</li>
      <li>Not testing with different content lengths and edge cases</li>
      <li>Forgetting about backwards compatibility with classic editor</li>
      <li>Ignoring mobile responsiveness in template design</li>
    </ul>

    <h2>Resources for Learning More</h2>
    <p>Continue your block theme journey with these resources:</p>

    <ul>
      <li><a href="https://developer.wordpress.org/block-editor/">Official Block Editor Handbook</a></li>
      <li><a href="https://fullsiteediting.com/">Full Site Editing website</a></li>
      <li><a href="https://wordpress.org/themes/">WordPress Theme Directory</a> (filter by "Full Site Editing")</li>
      <li>LightSpeed blog for more tutorials and best practices</li>
    </ul>

    <h2>Conclusion</h2>
    <p>WordPress Block Themes represent the future of WordPress development. While there's a learning curve, the benefits of full site editing, better performance, and centralized design systems make it worthwhile.</p>

    <p>At LightSpeed, we're committed to building high-quality block themes for our clients and sharing our knowledge with the WordPress community. If you have questions or need help with your block theme project, don't hesitate to reach out.</p>

    <p>Ready to start your WordPress project? <a href="/contact">Contact our team</a> today!</p>
  `
};

/**
 * Blog Post Meta Information
 */
export interface PostMeta {
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
    postCount: number;
  };
  publishDate: string;
  lastModified?: string;
  readingTime: string;
  categories: string[];
  tags: string[];
  views?: number;
  likes?: number;
  comments?: number;
}

export const examplePostMeta: PostMeta = {
  author: {
    name: 'Ash Shaw',
    role: 'Founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1769071166862-8cc3a6f2ac5c?w=400',
    bio: 'CEO and founder of LightSpeed WordPress Agency. Passionate about WordPress, web design and building awesome user experiences. WordCamp community member since 2005.',
    postCount: 18
  },
  publishDate: 'December 15, 2024',
  lastModified: 'January 5, 2025',
  readingTime: '8 min read',
  categories: ['WordPress Development', 'Design Systems'],
  tags: ['Block Themes', 'FSE', 'WordPress', 'theme.json', 'Full Site Editing'],
  views: 2543,
  likes: 127,
  comments: 23
};

/**
 * Related Posts
 */
export const relatedBlogPosts = blogPosts.slice(1, 4); // Get 3 related posts

/**
 * Post Actions/Share
 */
export interface PostAction {
  icon: UniversalIcon;
  label: string;
  action: string;
  count?: number;
}

export const postActions: PostAction[] = [
  {
    icon: 'ThumbsUp',
    label: 'Like',
    action: 'like',
    count: 127
  },
  {
    icon: 'Bookmark',
    label: 'Bookmark',
    action: 'bookmark'
  },
  {
    icon: 'Share2',
    label: 'Share',
    action: 'share'
  }
];

/**
 * Share Options
 */
export const shareOptions = [
  { platform: 'Twitter', url: 'https://twitter.com/intent/tweet?url=' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/sharing/share-offsite/?url=' },
  { platform: 'Facebook', url: 'https://www.facebook.com/sharer/sharer.php?u=' }
];

/**
 * Newsletter Signup (for blog posts)
 */
export const blogPostNewsletter = {
  title: 'Enjoyed this article?',
  description: 'Subscribe to our newsletter for more WordPress tips, tutorials, and best practices delivered to your inbox.',
  placeholder: 'Enter your email',
  buttonText: 'Subscribe Now',
  privacyText: 'We respect your privacy. Unsubscribe at any time.'
};

/**
 * Author Bio (Extended)
 */
export const authorBio = {
  name: 'Ash Shaw',
  role: 'Founder & CEO',
  avatar: 'https://images.unsplash.com/photo-1769071166862-8cc3a6f2ac5c?w=400',
  bio: 'Ash Shaw is the CEO and founder of LightSpeed WordPress Agency. With over 20 years of experience in web development, Ash has been passionate about WordPress, web design, and building awesome user experiences since the platform\'s early days. He\'s been an active WordCamp community member since 2005, sharing knowledge and contributing to the WordPress ecosystem.',
  postCount: 18,
  social: {
    linkedin: 'https://linkedin.com/in/ashleyshaw',
    twitter: 'https://twitter.com/ashshaw',
    github: 'https://github.com/lightspeedwp'
  },
  expertise: ['WordPress Development', 'Full Site Editing', 'Theme Development', 'Business Strategy']
};

/**
 * Table of Contents
 */
export const tableOfContents = [
  { id: 'introduction', label: 'Introduction to WordPress Block Themes' },
  { id: 'what-are', label: 'What Are Block Themes?' },
  { id: 'why-choose', label: 'Why Choose Block Themes?' },
  { id: 'setup', label: 'Setting Up Your Development Environment' },
  { id: 'creating', label: 'Creating Your First Block Theme' },
  { id: 'best-practices', label: 'Best Practices We\'ve Learned' },
  { id: 'pitfalls', label: 'Common Pitfalls to Avoid' },
  { id: 'resources', label: 'Resources for Learning More' },
  { id: 'conclusion', label: 'Conclusion' }
];

/**
 * CTA Section for Blog Posts
 */
export const blogPostCTA = {
  title: 'Ready to Build Your WordPress Block Theme?',
  description: 'Our expert team can help you create a high-performance, accessible WordPress block theme tailored to your needs.',
  buttons: [
    {
      text: 'Start Your Project',
      page: 'contact',
      variant: 'default'
    },
    {
      text: 'View Our Services',
      page: 'services',
      variant: 'outline'
    }
  ]
};

/**
 * Comments Section (Mock Data)
 */
export interface Comment {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
  replies?: Comment[];
}

export const postComments: Comment[] = [
  {
    id: '1',
    author: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    date: 'December 16, 2024',
    content: 'Great article! I\'ve been hesitant to switch to block themes, but this guide makes it seem much more approachable. The best practices section is particularly helpful.',
    replies: [
      {
        id: '1-1',
        author: 'Ash Shaw',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
        date: 'December 16, 2024',
        content: 'Thanks Sarah! We\'re glad you found it helpful. If you have any questions as you get started, feel free to reach out. We\'re always happy to help!'
      }
    ]
  },
  {
    id: '2',
    author: 'Mike Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    date: 'December 17, 2024',
    content: 'The theme.json section could use more detail. Are there any resources for understanding all the available options?'
  },
  {
    id: '3',
    author: 'Emma Williams',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    date: 'December 18, 2024',
    content: 'Love the practical advice! The common pitfalls section saved me from making several mistakes. Looking forward to more tutorials like this.'
  }
];

/**
 * Post Schema/SEO Data
 */
export const postSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: exampleBlogPost.title,
  description: exampleBlogPost.excerpt,
  author: {
    '@type': 'Person',
    name: 'Ash Shaw',
    url: 'https://lightspeedwp.agency/team/ash-shaw'
  },
  publisher: {
    '@type': 'Organization',
    name: 'LightSpeed WordPress Agency',
    logo: {
      '@type': 'ImageObject',
      url: 'https://lightspeedwp.agency/logo.png'
    }
  },
  datePublished: '2024-12-15',
  dateModified: '2025-01-05',
  image: exampleBlogPost.featuredImage
};

/**
 * Helper Functions
 */

/**
 * Get post by slug
 */
export function getBlogPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug) || exampleBlogPost;
}

/**
 * Get related posts
 */
export function getRelatedBlogPosts(slug: string, limit: number = 3) {
  const currentPost = getBlogPostBySlug(slug);
  if (!currentPost) return [];
  
  // Find posts with similar categories
  const related = blogPosts.filter(post => 
    post.slug !== slug && 
    post.categories.some(cat => currentPost.categories.includes(cat))
  );
  
  return related.slice(0, limit);
}

/**
 * Get author by slug
 */
export function getAuthorBySlug(slug: string) {
  return blogAuthors.find(author => author.slug === slug);
}

/**
 * Format reading time
 */
export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}

/**
 * Format publish date
 */
export function formatPublishDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}