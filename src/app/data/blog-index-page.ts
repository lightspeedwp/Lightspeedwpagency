/**
 * Blog Index Page Data
 * 
 * Real content for the Blog Index page from LightSpeed WP Agency.
 * Real content extracted from https://lightspeedwp.agency/blog
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/blog
 * **Last Updated:** 2025-01-09
 * 
 * WordPress: Maps to templates/index.html (blog listing)
 */

import { 
  FileText, 
  Users, 
  TrendingUp,
  BookOpen,
  Calendar,
  Tag
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { blogPosts, blogCategories, blogAuthors } from './blog-posts';

/**
 * Blog Hero Content
 */
export const blogIndexHero = {
  badge: {
    icon: 'FileText',
    text: 'Our Blog'
  },
  title: 'WordPress Insights & Best Practices',
  titleHighlight: 'Insights', // Word to highlight
  description: 'Learn about WordPress development, WooCommerce, design systems, and web best practices from our team of experts. We share knowledge gained from 22+ years of building websites.',
  stats: [
    {
      icon: 'FileText',
      value: '50+',
      label: 'Articles Published'
    },
    {
      icon: 'Users',
      value: '3',
      label: 'Expert Authors'
    },
    {
      icon: 'TrendingUp',
      value: '10K+',
      label: 'Monthly Readers'
    }
  ]
};

/**
 * Blog Posts (from blog-posts.ts)
 * 
 * Real LightSpeed blog posts
 */
export const blogIndexPosts = blogPosts;

/**
 * Featured Blog Posts
 * 
 * Highlighted posts for the top of the blog
 */
export const featuredBlogPosts = blogPosts.filter(post => post.featured);

/**
 * Recent Blog Posts
 * 
 * Latest 6 posts for blog index
 */
export const recentBlogPosts = blogPosts.slice(0, 6);

/**
 * Blog Categories (from blog-posts.ts)
 * 
 * Real LightSpeed blog categories
 */
export const blogIndexCategories = blogCategories;

/**
 * Blog Authors (from blog-posts.ts)
 * 
 * Real LightSpeed team members who write
 */
export const blogIndexAuthors = blogAuthors;

/**
 * Blog Stats
 */
export interface BlogStat {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

export const blogIndexStats: BlogStat[] = [
  {
    icon: FileText,
    value: '50+',
    label: 'Blog Posts',
    description: 'Comprehensive articles covering WordPress development and best practices'
  },
  {
    icon: Users,
    value: '3',
    label: 'Expert Authors',
    description: 'Team members sharing knowledge from 22+ years of experience'
  },
  {
    icon: BookOpen,
    value: '6',
    label: 'Categories',
    description: 'WordPress, WooCommerce, development, design, hosting, and business'
  },
  {
    icon: TrendingUp,
    value: '10K+',
    label: 'Monthly Readers',
    description: 'Growing audience of WordPress developers and business owners'
  }
];

/**
 * Blog Topics/Categories Overview
 */
export interface BlogTopic {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  postCount: number;
}

export const blogIndexTopics: BlogTopic[] = [
  {
    slug: 'news',
    name: 'News',
    description: 'LightSpeed company news, team updates, and announcements',
    icon: FileText,
    postCount: 12
  },
  {
    slug: 'project-workflows',
    name: 'Project Workflows',
    description: 'Our development processes, project management, and team collaboration',
    icon: Users,
    postCount: 8
  },
  {
    slug: 'wordpress-development',
    name: 'WordPress Development',
    description: 'WordPress tutorials, coding tips, theme development, and plugin creation',
    icon: BookOpen,
    postCount: 15
  },
  {
    slug: 'woocommerce',
    name: 'WooCommerce',
    description: 'E-commerce development, store optimization, and WooCommerce tips',
    icon: TrendingUp,
    postCount: 10
  },
  {
    slug: 'design-systems',
    name: 'Design Systems',
    description: 'Design system architecture, token-driven design, and scalable UI',
    icon: Tag,
    postCount: 5
  },
  {
    slug: 'hosting-infrastructure',
    name: 'Hosting & Infrastructure',
    description: 'WordPress hosting, server management, performance optimization',
    icon: Calendar,
    postCount: 8
  }
];

/**
 * Why Read Our Blog
 */
export interface WhyReadReason {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const blogIndexWhyRead: WhyReadReason[] = [
  {
    title: 'Real-World Experience',
    description: 'Learn from our team\'s 22+ years of building WordPress websites for clients across tourism, e-commerce, and various industries.',
    icon: Users
  },
  {
    title: 'Practical Tutorials',
    description: 'Step-by-step guides and code examples you can implement immediately in your WordPress projects and workflows.',
    icon: BookOpen
  },
  {
    title: 'Industry Insights',
    description: 'Stay updated on WordPress trends, Full Site Editing, WooCommerce, and best practices from our expert developers.',
    icon: TrendingUp
  }
];

/**
 * Blog Index Page FAQs
 * 
 * Real FAQs about the LightSpeed blog
 */
export interface FAQ {
  question: string;
  answer: string;
}

export const blogIndexFAQs: FAQ[] = [
  {
    question: 'How often do you publish new blog posts?',
    answer: 'We publish new blog posts regularly, typically 2-4 times per month. Our posts cover WordPress development, WooCommerce, design systems, project workflows, and industry insights. Follow our blog or subscribe to our newsletter to get notified when we publish new content.'
  },
  {
    question: 'Who writes the LightSpeed blog?',
    answer: 'Our blog is written by our team of WordPress experts, including Ash Shaw (CEO), Warwick Booth (Lead Developer), and Lourens Visser (Support Manager). Each author brings decades of experience in WordPress development, WooCommerce, and web design. All content is based on real-world experience from our 22+ years of building websites.'
  },
  {
    question: 'What topics do you cover on your blog?',
    answer: 'We cover six main categories: News (company updates and announcements), Project Workflows (our development processes), WordPress Development (tutorials and coding tips), WooCommerce (e-commerce development), Design Systems (token-driven design and scalable UI), and Hosting & Infrastructure (server management and performance). All content is practical and based on our real client work.'
  },
  {
    question: 'Can I subscribe to your blog updates?',
    answer: 'Yes! You can subscribe to our newsletter at the bottom of any blog page to receive email notifications when we publish new posts. We also share our blog posts on our social media channels (LinkedIn, Twitter). You can also follow us on GitHub to see our open-source contributions and code examples.'
  },
  {
    question: 'Do you accept guest blog posts?',
    answer: 'While we primarily publish content from our team members, we occasionally consider guest posts from WordPress experts and industry professionals. If you have expertise in WordPress development, WooCommerce, or design systems and would like to contribute, please contact us at hello@lightspeedwp.agency with your topic idea and writing samples.'
  },
  {
    question: 'Are your blog tutorials suitable for beginners?',
    answer: 'Our blog posts range from beginner-friendly tutorials to advanced technical guides. We clearly label each post\'s difficulty level and include step-by-step instructions with code examples. Whether you\'re new to WordPress or an experienced developer, you\'ll find valuable insights and practical knowledge you can apply to your projects.'
  },
  {
    question: 'Can I use the code examples from your blog?',
    answer: 'Yes! All code examples in our blog posts are free to use in your WordPress projects. We share them to help the WordPress community build better websites. We appreciate attribution but don\'t require it. If you find our tutorials helpful, we\'d love to hear about it - share your projects with us or give us feedback.'
  },
  {
    question: 'How can I stay updated with WordPress trends?',
    answer: 'Follow our blog for regular updates on WordPress trends, Full Site Editing, block themes, WooCommerce, and industry best practices. Our team stays current by attending WordCamps, contributing to open source, and working daily with WordPress on 120+ client websites. We share what we learn through practical, actionable blog posts.'
  }
];

/**
 * Newsletter Signup Content
 */
export const blogIndexNewsletter = {
  title: 'Subscribe to Our Newsletter',
  description: 'Get WordPress tips, tutorials, and industry insights delivered to your inbox. Join 1,000+ developers and business owners.',
  placeholder: 'Enter your email address',
  buttonText: 'Subscribe',
  benefits: [
    'WordPress development tutorials',
    'WooCommerce best practices',
    'Design system insights',
    'No spam, unsubscribe anytime'
  ]
};

/**
 * CTA Section Data
 */
export const blogIndexCTA = {
  title: 'Ready to Start Your WordPress Project?',
  description: 'Our expert team is ready to help you build a high-performance WordPress website or WooCommerce store.',
  buttons: [
    {
      text: 'Contact Us',
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
 * Filter & Sort Options
 */
export const blogIndexFilters = {
  categories: [
    'All',
    ...blogCategories.map(cat => cat.name)
  ],
  sortOptions: [
    { value: 'latest', label: 'Latest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'popular', label: 'Most Popular' }
  ]
};

/**
 * Pagination Settings
 */
export const blogIndexPagination = {
  postsPerPage: 9,
  totalPosts: blogPosts.length,
  showPrevNext: true,
  showFirstLast: true
};

/**
 * Helper Functions
 */

/**
 * Get posts by category
 */
export function getPostsByCategory(categorySlug: string) {
  if (categorySlug === 'all') {
    return blogPosts;
  }
  return blogPosts.filter(post => post.categories.includes(categorySlug));
}

/**
 * Get posts by author
 */
export function getPostsByAuthor(authorSlug: string) {
  return blogPosts.filter(post => post.author === authorSlug);
}

/**
 * Get featured posts
 */
export function getFeaturedPosts() {
  return blogPosts.filter(post => post.featured);
}

/**
 * Get recent posts
 */
export function getRecentPosts(limit: number = 6) {
  return blogPosts.slice(0, limit);
}

/**
 * Get posts count by category
 */
export function getPostsCountByCategory(categorySlug: string) {
  if (categorySlug === 'all') {
    return blogPosts.length;
  }
  return blogPosts.filter(post => post.categories.includes(categorySlug)).length;
}
