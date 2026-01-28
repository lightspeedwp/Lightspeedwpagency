/**
 * Post Formats Data
 * 
 * Mock data for WordPress Standard, Gallery, Audio, Video, Aside, Image, Link, Quote, Status, Chat.
 * Matches standard WordPress post object structure.
 */

import { blogCategories, blogTags, audioCategories, videoCategories } from './taxonomies';

export interface WPPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: { rendered: string };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private';
  type: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string; protected: boolean };
  excerpt: { rendered: string; protected: boolean };
  author: number;
  featured_media: number;
  comment_status: 'open' | 'closed';
  ping_status: 'open' | 'closed';
  sticky: boolean;
  template: string;
  format: 'standard' | 'aside' | 'chat' | 'gallery' | 'link' | 'image' | 'quote' | 'status' | 'video' | 'audio';
  meta: any[];
  categories: number[];
  tags: number[];
  _embedded?: any;
}

// 1. Audio Post (Podcast)
// Content from openchannels.fm/guest/ash-shaw
export const audioPost: WPPost = {
  id: 3001,
  date: '2023-11-15T10:00:00',
  date_gmt: '2023-11-15T10:00:00',
  guid: { rendered: 'https://example.com/?p=3001' },
  modified: '2023-11-15T10:00:00',
  modified_gmt: '2023-11-15T10:00:00',
  slug: 'open-channels-ash-shaw',
  status: 'publish',
  type: 'post',
  link: 'https://openchannels.fm/guest/ash-shaw/',
  title: { rendered: 'Building LightSpeed: An Interview with Ash Shaw' },
  content: { 
    rendered: '<p>Ash Shaw joins the Open Channels podcast to discuss the journey of building LightSpeed, the challenges of agency life, and the future of WordPress FSE.</p><p>Listen to the full episode to hear about:</p><ul><li>Scaling a remote team</li><li>Adopting block themes</li><li>The importance of open source</li></ul>', 
    protected: false 
  },
  excerpt: { 
    rendered: 'Ash Shaw joins the Open Channels podcast to discuss building LightSpeed and the future of WordPress.', 
    protected: false 
  },
  author: 1,
  featured_media: 4001, 
  comment_status: 'open',
  ping_status: 'open',
  sticky: false,
  template: '',
  format: 'audio',
  meta: [
    { key: 'audio_file', value: 'https://example.com/audio/ash-shaw-interview.mp3' },
    { key: 'duration', value: '45:30' }
  ],
  categories: [audioCategories[0].id], // Interviews
  tags: [blogTags[0].id], // WordPress
  _embedded: {
    'wp:featuredmedia': [{
      source_url: 'https://images.unsplash.com/photo-1478737270239-2f02b77ac618?w=800&q=80',
      alt_text: 'Podcast Microphone'
    }]
  }
};

// 2. Video Post (YouTube)
// Content from youtube.com/@lightspeedwp
export const videoPost: WPPost = {
  id: 3002,
  date: '2023-12-01T14:00:00',
  date_gmt: '2023-12-01T14:00:00',
  guid: { rendered: 'https://example.com/?p=3002' },
  modified: '2023-12-01T14:00:00',
  modified_gmt: '2023-12-01T14:00:00',
  slug: 'wordpress-fse-tutorial',
  status: 'publish',
  type: 'post',
  link: 'https://www.youtube.com/@lightspeedwp/videos',
  title: { rendered: 'Mastering Full Site Editing in 10 Minutes' },
  content: { 
    rendered: '<p>In this video, we dive deep into the WordPress Site Editor. Learn how to create custom templates, manage global styles, and build a unique layout without writing code.</p>', 
    protected: false 
  },
  excerpt: { 
    rendered: 'Learn how to create custom templates and manage global styles in WordPress FSE.', 
    protected: false 
  },
  author: 1,
  featured_media: 4002,
  comment_status: 'open',
  ping_status: 'open',
  sticky: false,
  template: '',
  format: 'video',
  meta: [
    { key: 'video_url', value: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { key: 'video_duration', value: '10:15' }
  ],
  categories: [videoCategories[0].id], // Tutorials
  tags: [blogTags[2].id], // Gutenberg
  _embedded: {
    'wp:featuredmedia': [{
      source_url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80', 
      alt_text: 'Video Tutorial Thumbnail'
    }]
  }
};

// 3. Gallery Post (Instagram)
// Content from instagram.com/lightspeedwpdev
export const galleryPost: WPPost = {
  id: 3003,
  date: '2023-12-05T09:30:00',
  date_gmt: '2023-12-05T09:30:00',
  guid: { rendered: 'https://example.com/?p=3003' },
  modified: '2023-12-05T09:30:00',
  modified_gmt: '2023-12-05T09:30:00',
  slug: 'team-retreat-2023',
  status: 'publish',
  type: 'post',
  link: 'https://www.instagram.com/lightspeedwpdev',
  title: { rendered: 'Agency Retreat: Cape Town 2023' },
  content: { 
    rendered: '<p>We gathered the whole team in sunny Cape Town for a week of strategy, bonding, and adventure. Check out the highlights!</p>', 
    protected: false 
  },
  excerpt: { 
    rendered: 'Highlights from our team retreat in Cape Town.', 
    protected: false 
  },
  author: 1,
  featured_media: 4003,
  comment_status: 'open',
  ping_status: 'open',
  sticky: false,
  template: '',
  format: 'gallery',
  meta: [],
  categories: [blogCategories[4].id], // Agency Life
  tags: [],
  _embedded: {
    'wp:featuredmedia': [{
      source_url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
      alt_text: 'Team Group Photo'
    }],
    'gallery_images': [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80'
    ]
  }
};

// 4. Aside Post (Status Update)
export const asidePost: WPPost = {
  id: 3004,
  date: '2023-12-06T11:00:00',
  date_gmt: '2023-12-06T11:00:00',
  guid: { rendered: 'https://example.com/?p=3004' },
  modified: '2023-12-06T11:00:00',
  modified_gmt: '2023-12-06T11:00:00',
  slug: 'quick-update-wp-6-4',
  status: 'publish',
  type: 'post',
  link: 'https://example.com/aside/wp-6-4',
  title: { rendered: '' }, 
  content: { 
    rendered: '<p>WordPress 6.4 is out now! We are testing all client sites this week. Expect updates to roll out by Friday. #WordPress #Update</p>', 
    protected: false 
  },
  excerpt: { 
    rendered: 'WordPress 6.4 is out now! We are testing all client sites this week.', 
    protected: false 
  },
  author: 1,
  featured_media: 0,
  comment_status: 'closed',
  ping_status: 'open',
  sticky: false,
  template: '',
  format: 'aside',
  meta: [],
  categories: [blogCategories[1].id], // Industry News
  tags: [blogTags[0].id]
};

// 5. Image Post
export const imagePost: WPPost = {
  id: 3005,
  date: '2023-12-07T10:00:00',
  date_gmt: '2023-12-07T10:00:00',
  guid: { rendered: 'https://example.com/?p=3005' },
  modified: '2023-12-07T10:00:00',
  modified_gmt: '2023-12-07T10:00:00',
  slug: 'office-view',
  status: 'publish',
  type: 'post',
  link: 'https://example.com/image/office-view',
  title: { rendered: 'Office View Today' },
  content: { rendered: '<p>Beautiful sunset from the Cape Town office.</p>', protected: false },
  excerpt: { rendered: 'Beautiful sunset from the Cape Town office.', protected: false },
  author: 1,
  featured_media: 4005,
  comment_status: 'open',
  ping_status: 'open',
  sticky: false,
  template: '',
  format: 'image',
  meta: [],
  categories: [blogCategories[4].id],
  tags: [],
  _embedded: {
    'wp:featuredmedia': [{
      source_url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80',
      alt_text: 'Office View'
    }]
  }
};

// 6. Link Post
export const linkPost: WPPost = {
  id: 3006,
  date: '2023-12-08T09:00:00',
  date_gmt: '2023-12-08T09:00:00',
  guid: { rendered: 'https://example.com/?p=3006' },
  modified: '2023-12-08T09:00:00',
  modified_gmt: '2023-12-08T09:00:00',
  slug: 'wordpress-6-5-roadmap',
  status: 'publish',
  type: 'post',
  link: 'https://make.wordpress.org/core/2023/12/05/wordpress-6-5-roadmap/',
  title: { rendered: 'WordPress 6.5 Roadmap' },
  content: { 
    rendered: '<p><a href="https://make.wordpress.org/core/2023/12/05/wordpress-6-5-roadmap/">Read the official roadmap for WordPress 6.5</a>. Exciting font management features coming!</p>', 
    protected: false 
  },
  excerpt: { rendered: 'Read the official roadmap for WordPress 6.5.', protected: false },
  author: 1,
  featured_media: 0,
  comment_status: 'open',
  ping_status: 'open',
  sticky: false,
  template: '',
  format: 'link',
  meta: [],
  categories: [blogCategories[1].id],
  tags: [blogTags[0].id]
};

// 7. Quote Post
export const quotePost: WPPost = {
  id: 3007,
  date: '2023-12-09T15:00:00',
  date_gmt: '2023-12-09T15:00:00',
  guid: { rendered: 'https://example.com/?p=3007' },
  modified: '2023-12-09T15:00:00',
  modified_gmt: '2023-12-09T15:00:00',
  slug: 'matt-mullenweg-quote',
  status: 'publish',
  type: 'post',
  link: 'https://example.com/quote/matt-mullenweg',
  title: { rendered: 'Quote of the Day' },
  content: { 
    rendered: '<blockquote><p>Code is poetry.</p><cite>Matt Mullenweg</cite></blockquote>', 
    protected: false 
  },
  excerpt: { rendered: 'Code is poetry.', protected: false },
  author: 1,
  featured_media: 0,
  comment_status: 'open',
  ping_status: 'open',
  sticky: false,
  template: '',
  format: 'quote',
  meta: [],
  categories: [],
  tags: [blogTags[0].id]
};

// 8. Standard Post
export const standardPost: WPPost = {
  id: 3008,
  date: '2023-12-10T10:00:00',
  date_gmt: '2023-12-10T10:00:00',
  guid: { rendered: 'https://example.com/?p=3008' },
  modified: '2023-12-10T10:00:00',
  modified_gmt: '2023-12-10T10:00:00',
  slug: 'standard-blog-post',
  status: 'publish',
  type: 'post',
  link: 'https://example.com/standard-post',
  title: { rendered: 'The Importance of Accessible Design' },
  content: { 
    rendered: '<p>Accessibility is not just a checkbox; it is a fundamental aspect of the web. In this article, we explore...</p>', 
    protected: false 
  },
  excerpt: { rendered: 'Accessibility is not just a checkbox...', protected: false },
  author: 1,
  featured_media: 4008,
  comment_status: 'open',
  ping_status: 'open',
  sticky: false,
  template: '',
  format: 'standard',
  meta: [],
  categories: [blogCategories[2].id],
  tags: [blogTags[1].id],
  _embedded: {
    'wp:featuredmedia': [{
      source_url: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?w=800&q=80',
      alt_text: 'Writing'
    }]
  }
};

// 9. Status Post
export const statusPost: WPPost = {
  id: 3009,
  date: '2023-12-11T09:15:00',
  date_gmt: '2023-12-11T09:15:00',
  guid: { rendered: 'https://example.com/?p=3009' },
  modified: '2023-12-11T09:15:00',
  modified_gmt: '2023-12-11T09:15:00',
  slug: 'status-update-deployment',
  status: 'publish',
  type: 'post',
  link: 'https://example.com/status/deployment',
  title: { rendered: '' },
  content: { 
    rendered: '<p>Deployment successful! New features are live. 🚀 #deployment #devops</p>', 
    protected: false 
  },
  excerpt: { rendered: 'Deployment successful! New features are live.', protected: false },
  author: 1,
  featured_media: 0,
  comment_status: 'open',
  ping_status: 'open',
  sticky: false,
  template: '',
  format: 'status',
  meta: [],
  categories: [],
  tags: [blogTags[0].id]
};

// 10. Chat Post
export const chatPost: WPPost = {
  id: 3010,
  date: '2023-12-12T14:30:00',
  date_gmt: '2023-12-12T14:30:00',
  guid: { rendered: 'https://example.com/?p=3010' },
  modified: '2023-12-12T14:30:00',
  modified_gmt: '2023-12-12T14:30:00',
  slug: 'chat-transcript-support',
  status: 'publish',
  type: 'post',
  link: 'https://example.com/chat/support',
  title: { rendered: 'Support Chat: Setting up Gutenberg' },
  content: { 
    rendered: '<p><strong>John:</strong> How do I enable FSE?</p><p><strong>Support:</strong> You need a block theme first.</p><p><strong>John:</strong> Ah, I see. Thanks!</p>', 
    protected: false 
  },
  excerpt: { rendered: 'Transcript of support chat regarding FSE setup.', protected: false },
  author: 1,
  featured_media: 0,
  comment_status: 'closed',
  ping_status: 'closed',
  sticky: false,
  template: '',
  format: 'chat',
  meta: [],
  categories: [blogCategories[1].id],
  tags: []
};

export const allPosts: WPPost[] = [
  audioPost, 
  videoPost, 
  galleryPost, 
  asidePost, 
  imagePost, 
  linkPost, 
  quotePost, 
  standardPost,
  statusPost,
  chatPost
];
