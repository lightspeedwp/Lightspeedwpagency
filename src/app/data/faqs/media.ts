/**
 * Media FAQ Collections
 * 
 * FAQ collections for media-related pages including videos and podcasts.
 * 
 * **Collections:**
 * - videoFAQs — Video content pages
 * - podcastFAQs — Podcast content pages
 * 
 * **Count:** 2 collections
 * 
 * @example
 * import { videoFAQs } from '@/app/data/faqs';
 * <FAQSection faqs={videoFAQs} />
 */

import type { FAQ } from './types';

/**
 * Video FAQs
 * Used on: VideoArchiveTemplate, SingleVideoTemplate, video category/tag archives
 */
export const videoFAQs: FAQ[] = [
  {
    question: 'Can I download videos for offline viewing?',
    answer: 'Video downloads are available for premium members. Free viewers can watch online. All videos include transcripts and code snippets for easy reference.'
  },
  {
    question: 'How often do you publish new video tutorials?',
    answer: 'We publish 2-3 video tutorials per month covering WordPress development, design systems, and best practices. Subscribe to our YouTube channel for notifications.'
  },
  {
    question: 'Are video transcripts available?',
    answer: 'Yes! Every video includes a full text transcript, timestamps, and downloadable code examples. This makes content accessible and easier to reference later.'
  }
];

/**
 * Podcast FAQs
 * Used on: PodcastArchiveTemplate, SinglePodcastTemplate, podcast category archives
 */
export const podcastFAQs: FAQ[] = [
  {
    question: 'Where can I listen to your podcast?',
    answer: 'Our podcast is available on Spotify, Apple Podcasts, Google Podcasts, and directly on this website. Subscribe on your preferred platform for automatic updates.'
  },
  {
    question: 'Can I suggest podcast topics or guests?',
    answer: 'Absolutely! We welcome topic suggestions and guest recommendations. Use our contact form or reach out on social media with your ideas.'
  },
  {
    question: 'Do you provide episode transcripts?',
    answer: 'Yes! All podcast episodes include full transcripts, show notes, and resource links. This makes episodes searchable and accessible to all audiences.'
  }
];
