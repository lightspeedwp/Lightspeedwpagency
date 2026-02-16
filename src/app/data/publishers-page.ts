/**
 * Publishers Page Data
 * 
 * Content for the Publishers solution landing page.
 */

import { BookOpen, Workflow, Zap, Globe, Shield, Users, BarChart, PenTool } from 'lucide-react';

export const publishersHero = {
  title: 'Digital Publishing Solutions for Modern Media',
  titleHighlight: 'Modern Media',
  description: 'We build high-performance WordPress websites for magazines and newspapers that serve as a seamless extension of your print brand. Streamline your editorial workflows and grow your digital audience.',
  badge: {
    text: 'For Publishers',
    icon: BookOpen
  },
  buttons: [
    {
      text: 'Schedule a Demo',
      page: 'contact',
      variant: 'default'
    },
    {
      text: 'View Case Studies',
      page: 'portfolio',
      variant: 'outline'
    }
  ]
};

export const publishersOverview = {
  title: 'Transform Your Publication for the Digital Age',
  description: 'LightSpeed specializes in helping print publishers transition to and thrive in the digital space. We understand the unique challenges of high-volume content, editorial governance, and monetization.',
  stats: [
    {
      value: '10M+',
      label: 'Monthly Pageviews',
      description: 'Supported across our publisher network',
      icon: Users
    },
    {
      value: '30%',
      label: 'Workflow Efficiency',
      description: 'Average improvement in editorial speed',
      icon: Workflow
    },
    {
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable hosting for breaking news',
      icon: Shield
    },
    {
      value: '2x',
      label: 'Ad Revenue',
      description: 'Optimized ad placements and speed',
      icon: BarChart
    }
  ]
};

export const publishersFeatures = [
  {
    title: 'Custom Editorial Workflows',
    description: 'Tailored publishing pipelines that match your newsroom\'s specific needs, from draft to editor review to publication.',
    icon: PenTool
  },
  {
    title: 'High-Performance Delivery',
    description: 'Lightning-fast page loads essential for retaining readers and ranking high in search engines and Google News.',
    icon: Zap
  },
  {
    title: 'Paywall & Subscription Models',
    description: 'Seamless integration of membership and subscription systems to monetize your premium content effectively.',
    icon: Shield
  },
  {
    title: 'Multi-Channel Distribution',
    description: 'Automatically syndicate content to Apple News, Google News, social media, and newsletters.',
    icon: Globe
  },
  {
    title: 'Advanced Ad Management',
    description: 'Strategic ad slots and programmatic integration designed to maximize revenue without killing user experience.',
    icon: BarChart
  },
  {
    title: 'Migration Services',
    description: 'Expert migration from legacy CMS platforms to modern, scalable WordPress architectures.',
    icon: Workflow
  }
];

export const publishersProcess = [
  {
    step: '01',
    title: 'Discovery & Audit',
    description: 'We analyze your current workflow, traffic patterns, and revenue goals to design a custom solution.',
    icon: Users
  },
  {
    step: '02',
    title: 'Architecture & Design',
    description: 'We create a scalable information architecture and a reading experience that reflects your brand authority.',
    icon: BookOpen
  },
  {
    step: '03',
    title: 'Workflow Integration',
    description: 'We configure the WordPress dashboard to mirror your newsroom\'s approval and publishing processes.',
    icon: Workflow
  },
  {
    step: '04',
    title: 'Migration & Launch',
    description: 'We safely migrate your archives and launch your new site with zero downtime for your readers.',
    icon: Zap
  }
];

export const publishersTestimonial = {
  quote: "LightSpeed understood exactly what our newsroom needed. The new workflow tools have cut our publishing time in half, and our site traffic has never been higher.",
  author: "Sarah Jenkins",
  role: "Editor-in-Chief",
  company: "Daily Metro News",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
};

export const publishersFAQ = [
  {
    question: "Can you handle millions of pageviews?",
    answer: "Yes. Our enterprise WordPress architecture is designed specifically for high-traffic publishers. We use advanced caching, CDN integration, and scalable hosting to ensure your site stays fast, even during breaking news events."
  },
  {
    question: "Do you support paywalls?",
    answer: "Absolutely. We have extensive experience implementing various paywall models, including metered, hard, and freemium paywalls, integrating with top solutions like Piano, LaterPay, or custom WooCommerce memberships."
  },
  {
    question: "How do you handle data migration?",
    answer: "We are migration experts. We have successfully migrated massive content archives from Drupal, proprietary CMSs, and legacy platforms to WordPress, ensuring URL structures, SEO value, and metadata are preserved."
  },
  {
    question: "Can you customize the editorial interface?",
    answer: "Yes. We build custom editorial interfaces within WordPress that can enforce style guides, manage permissions, and streamline the approval process to match your specific newsroom workflow."
  }
];

export const publishersCTA = {
  title: "Ready to Modernize Your Publication?",
  description: "Let's discuss how we can build a digital platform that supports your journalism and grows your business.",
  buttons: [
    {
      text: "Talk to a Publishing Expert",
      page: "contact",
      variant: "default"
    },
    {
      text: "Explore Our Work",
      page: "portfolio",
      variant: "outline"
    }
  ]
};
