/**
 * LSX Sharing Product Page Data
 * 
 * Dedicated page data for LSX Sharing plugin/product.
 * Real content based on LSX product offerings.
 * 
 * WordPress Mapping: Product/Solution detail page
 */

import { Share2, Facebook, Twitter, Mail, Link, Zap } from 'lucide-react';

/**
 * Hero Section Data
 */
export const lsxSharingHero = {
  badge: {
    icon: Share2,
    text: 'SOCIAL SHARING'
  },
  title: 'LSX Sharing',
  titleHighlight: 'LSX Sharing',
  description: 'Boost your content reach with beautiful, customizable social sharing buttons. Make it easy for visitors to share your tours, blog posts, and pages across all major social networks.',
  cta: {
    primary: {
      text: 'Download Free',
      page: 'contact' as const
    },
    secondary: {
      text: 'View Demo',
      page: 'portfolio-archive' as const
    }
  }
};

/**
 * Key Features
 */
export const lsxSharingFeatures = [
  {
    icon: Share2,
    title: 'Multiple Share Options',
    description: 'Support for Facebook, Twitter, LinkedIn, Pinterest, WhatsApp, Email, and custom link copying.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized code that loads instantly without slowing down your website. No external scripts required.'
  },
  {
    icon: Link,
    title: 'Flexible Placement',
    description: 'Display share buttons above content, below content, floating sidebar, or use shortcodes anywhere.'
  },
  {
    icon: Facebook,
    title: 'Customizable Design',
    description: 'Choose from multiple button styles, sizes, and layouts. Customize colors to match your brand.'
  },
  {
    icon: Twitter,
    title: 'Mobile Optimized',
    description: 'Responsive design that works perfectly on all devices. Touch-friendly buttons for mobile users.'
  },
  {
    icon: Mail,
    title: 'Share Tracking',
    description: 'Optional share count display. Track which content gets shared most to inform your content strategy.'
  }
];

/**
 * Benefits Section
 */
export const lsxSharingBenefits = [
  {
    title: 'Increase Engagement',
    description: 'Make it easy for visitors to share your content with their networks. Increase your reach exponentially through social sharing.'
  },
  {
    title: 'Drive More Traffic',
    description: 'Each share brings new visitors to your website. Social sharing is one of the most effective free traffic sources.'
  },
  {
    title: 'Build Social Proof',
    description: 'Display share counts to show content popularity. Social proof encourages more people to read and share.'
  },
  {
    title: 'Free & Open Source',
    description: 'Completely free WordPress plugin with no hidden costs. Regular updates and community support included.'
  }
];

/**
 * How It Works Section
 */
export const lsxSharingProcess = [
  {
    step: 1,
    title: 'Install & Activate',
    description: 'Download the plugin from WordPress.org and activate it on your website. Takes less than 2 minutes.'
  },
  {
    step: 2,
    title: 'Choose Networks',
    description: 'Select which social networks to display. Enable or disable networks based on your audience.'
  },
  {
    step: 3,
    title: 'Customize Appearance',
    description: 'Choose button style, size, and position. Customize colors to match your website design.'
  },
  {
    step: 4,
    title: 'Start Sharing',
    description: 'Buttons automatically appear on your content. Visitors can share with one click.'
  }
];

/**
 * Supported Networks
 */
export const lsxSharingNetworks = {
  title: 'Supported Social Networks',
  description: 'Share your content across all major social platforms',
  networks: [
    {
      name: 'Facebook',
      icon: 'facebook',
      description: 'Share to Facebook timeline'
    },
    {
      name: 'Twitter',
      icon: 'twitter',
      description: 'Tweet your content'
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      description: 'Share on LinkedIn'
    },
    {
      name: 'Pinterest',
      icon: 'pinterest',
      description: 'Pin images and content'
    },
    {
      name: 'WhatsApp',
      icon: 'whatsapp',
      description: 'Share via WhatsApp'
    },
    {
      name: 'Email',
      icon: 'mail',
      description: 'Share via email'
    },
    {
      name: 'Copy Link',
      icon: 'link',
      description: 'Copy link to clipboard'
    },
    {
      name: 'More Options',
      icon: 'share',
      description: 'Additional networks available'
    }
  ]
};

/**
 * Plugin Specifications
 */
export const lsxSharingSpecs = {
  title: 'Plugin Details',
  specs: [
    {
      label: 'Version',
      value: '2.0.0'
    },
    {
      label: 'Compatibility',
      value: 'WordPress 5.8+'
    },
    {
      label: 'PHP Version',
      value: 'PHP 7.4 or higher'
    },
    {
      label: 'License',
      value: 'GPL v3'
    },
    {
      label: 'Price',
      value: 'Free'
    },
    {
      label: 'Support',
      value: 'WordPress.org forums, Documentation'
    }
  ]
};

/**
 * FAQ Data
 */
export const lsxSharingFAQs = [
  {
    question: 'Is LSX Sharing really free?',
    answer: 'Yes, LSX Sharing is completely free with no hidden costs, premium versions, or upsells. It\'s open-source software released under the GPL v3 license.'
  },
  {
    question: 'Will social share buttons slow down my website?',
    answer: 'No, LSX Sharing is optimized for performance. It uses native browser APIs and doesn\'t load external scripts, ensuring fast page load times.'
  },
  {
    question: 'Can I customize the button appearance?',
    answer: 'Yes, you can customize button style, size, colors, and position. Advanced users can also add custom CSS for complete design control.'
  },
  {
    question: 'Do I need to create social media accounts?',
    answer: 'No, visitors use their own social media accounts to share. You don\'t need to create or connect any social media accounts.'
  },
  {
    question: 'Can I track how many times content is shared?',
    answer: 'Yes, you can optionally display share counts next to buttons. This requires enabling share tracking in the plugin settings.'
  },
  {
    question: 'Does it work with custom post types?',
    answer: 'Yes, LSX Sharing works with any post type including custom post types. You can enable/disable it per post type in settings.'
  }
];

/**
 * CTA Section Data
 */
export const lsxSharingCTA = {
  title: 'Start Growing Your Reach Today',
  description: 'Join thousands of WordPress websites using LSX Sharing to amplify their content. Download free from WordPress.org.',
  buttons: [
    {
      text: 'Download Now',
      page: 'contact' as const
    },
    {
      text: 'View Documentation',
      page: 'support' as const
    }
  ]
};
