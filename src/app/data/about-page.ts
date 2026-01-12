/**
 * About Page Data
 * 
 * Real content for the About page from LightSpeed WP Agency.
 * Real content extracted from https://lightspeedwp.agency/about
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/about
 * **Last Updated:** 2025-01-09
 * 
 * WordPress: Maps to page-about.html template
 */

import { 
  Target, 
  Users, 
  Zap, 
  Heart, 
  Shield, 
  Lightbulb,
  Award,
  Globe,
  TrendingUp,
  Code
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * About Hero Content
 */
export const aboutPageHero = {
  badge: {
    icon: 'Heart',
    text: 'About LightSpeed'
  },
  title: 'Web Design, Development & Workflow You Can Trust',
  titleHighlight: 'Trust', // Word to highlight
  description: 'We\'re passionate about helping businesses make an impact online by putting control in the hands of our clients. Founded in 2003, we\'ve grown from a WordPress solutions company focused on tourism to a leading WP specialist development company.',
  stats: [
    {
      icon: 'Award',
      value: '22+',
      label: 'Years Experience'
    },
    {
      icon: 'Users',
      value: '120+',
      label: 'Websites Hosted'
    },
    {
      icon: 'Globe',
      value: 'Global',
      label: 'Client Reach'
    }
  ]
};

/**
 * Company Story Section
 */
export const aboutPageStory = {
  title: 'Our Story',
  subtitle: 'From Tourism Specialist to WordPress Expert Agency',
  content: [
    {
      heading: 'Established in 2003',
      text: 'Founded in 2003 by Ashley Shaw, LightSpeed WordPress Development has progressed from a start as a WordPress website solutions company that catered to a spread of client requirements (with a focus on the tourism sector) on to becoming a leading WP specialist development company.'
    },
    {
      heading: 'WooExpert & Mailchimp Expert',
      text: 'In 2020, the company now features valuable credentials gained via endorsements and associations with both the focal WordPress community and organisation. The company now stands tall in its field as a result of the significant gains made since its founding, and is now a proud member of the elite few companies in the world that are both WooExperts and Mailchimp Experts.'
    },
    {
      heading: 'Tourism Industry Expertise',
      text: 'It\'s our experience in website design and development, with a focus on WooCommerce, that has seen us improve the visibility and traffic for a number of clients in the Tour Operator and eCommerce industries. In the process, our team has accumulated skills that enable us to continue to deliver high-performance websites for tour operators that are targeted at travel packages in relevant markets, whether student, luxury or educational in nature.'
    }
  ]
};

/**
 * Company Mission & Vision
 */
export const aboutPageMissionVision = {
  mission: {
    title: 'Our Mission',
    description: 'Our mission is to develop excellent WordPress websites for our clients that get great visibility in search engines while generating solid traffic and sales.',
    icon: Target
  },
  vision: {
    title: 'Our Vision',
    description: 'We aim to keep an eye on the future, as we continuously improve the solutions and services we provide to our clients.',
    icon: Lightbulb
  }
};

/**
 * Core Values
 */
export interface CoreValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const aboutPageValues: CoreValue[] = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We never compromise on code quality, accessibility, or performance. Every project meets WordPress best practices and follows industry standards.'
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We work collaboratively with our clients as partners, not vendors. Your success is our success, and we\'re committed to long-term relationships.'
  },
  {
    icon: Zap,
    title: 'Speed & Performance',
    description: 'Fast websites matter. We optimize every site for performance, implementing advanced caching, image optimization, and database tuning.'
  },
  {
    icon: Heart,
    title: 'Open Source',
    description: 'We believe in giving back to the WordPress community through open-source contributions, documentation, and knowledge sharing.'
  },
  {
    icon: Shield,
    title: 'Security Focused',
    description: 'Security is built into every project from day one. We follow security best practices and keep all sites updated and protected.'
  },
  {
    icon: Code,
    title: 'Innovation',
    description: 'We stay ahead of WordPress trends, embracing Full Site Editing, block themes, and modern development workflows to deliver cutting-edge solutions.'
  }
];

/**
 * Company Stats
 */
export interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

export const aboutPageStats: Stat[] = [
  {
    icon: Award,
    value: '22+',
    label: 'Years of Experience',
    description: 'Established in 2003, serving clients for over two decades'
  },
  {
    icon: Users,
    value: '120+',
    label: 'Websites Hosted',
    description: 'Safe, stable managed WordPress hosting for 120+ businesses'
  },
  {
    icon: Globe,
    value: '10+',
    label: 'Team Members',
    description: 'Expert WordPress developers and designers in Cape Town'
  },
  {
    icon: TrendingUp,
    value: '100%',
    label: 'Client Satisfaction',
    description: 'Committed to delivering excellence on every project'
  }
];

/**
 * Company History Timeline
 */
export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const aboutPageTimeline: TimelineEvent[] = [
  {
    year: '2003',
    title: 'LightSpeed Founded',
    description: 'Ashley Shaw establishes LightSpeed WordPress Development, focusing on tourism sector websites and custom WordPress solutions.'
  },
  {
    year: '2010',
    title: 'WooCommerce Specialization',
    description: 'Expanded services to include e-commerce development, becoming experts in WooCommerce store development and optimization.'
  },
  {
    year: '2015',
    title: 'Tourism Industry Leadership',
    description: 'Became recognized leaders in WordPress development for tour operators, student travel, luxury travel, and educational travel markets.'
  },
  {
    year: '2018',
    title: 'Mailchimp Expert Certification',
    description: 'Achieved Mailchimp Expert status, offering comprehensive email marketing services and automation solutions to clients.'
  },
  {
    year: '2020',
    title: 'WooExpert Certification',
    description: 'Awarded WooExpert certification - one of the elite few companies globally to be both WooExperts and Mailchimp Experts.'
  },
  {
    year: '2022',
    title: 'Managed Hosting Launch',
    description: 'Launched safe and stable managed WordPress hosting platform, now serving 120+ websites with enterprise-grade infrastructure.'
  },
  {
    year: '2024',
    title: 'Full Site Editing Adoption',
    description: 'Early adopters of WordPress FSE and block themes, helping clients transition to modern WordPress development practices and design systems.'
  }
];

/**
 * Expertise Areas
 */
export interface ExpertiseArea {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const aboutPageExpertise: ExpertiseArea[] = [
  {
    title: 'Tourism & Travel',
    description: 'Specialized expertise in tour operator websites, student travel, luxury travel, and educational travel platforms with advanced booking systems.',
    icon: Globe
  },
  {
    title: 'WooCommerce Development',
    description: 'Expert WooCommerce development for subscription businesses, physical products, and digital courses with payment gateway integration.',
    icon: TrendingUp
  },
  {
    title: 'Email Marketing',
    description: 'Mailchimp Expert services including automation setup, campaign management, and team training for effective email marketing.',
    icon: Users
  }
];

/**
 * Partnerships & Certifications
 */
export const aboutPagePartnerships = {
  title: 'Partnerships & Certifications',
  description: 'LightSpeed WordPress Development is a proud member of an elite global set of Partners that share advances in development which provide us with the ability to super-boost your website.',
  certifications: [
    {
      name: 'WooExpert',
      description: 'Official WooCommerce Expert Partner',
      year: '2020'
    },
    {
      name: 'Mailchimp Expert',
      description: 'Certified Mailchimp Expert Partner',
      year: '2018'
    }
  ]
};

/**
 * About Page FAQs
 * 
 * Real FAQs about LightSpeed
 */
export interface FAQ {
  question: string;
  answer: string;
}

export const aboutPageFAQs: FAQ[] = [
  {
    question: 'When was LightSpeed founded and by whom?',
    answer: 'LightSpeed WordPress Development was founded in 2003 by Ashley Shaw. We started as a WordPress solutions company with a focus on the tourism sector and have since grown to become a leading WordPress specialist development company serving clients globally.'
  },
  {
    question: 'What makes LightSpeed unique?',
    answer: 'We are one of the elite few companies in the world to be both WooExperts and Mailchimp Experts. This dual certification, combined with our 22+ years of experience and specialization in tourism and eCommerce, sets us apart. We focus on putting control in the hands of our clients while delivering high-performance WordPress websites.'
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'While we work with clients across various industries, we have particular expertise in the tourism and travel sector, including tour operators, student travel, luxury travel, and educational travel. We also specialize in eCommerce development with WooCommerce for businesses selling physical products, digital courses, and subscription services.'
  },
  {
    question: 'Where is LightSpeed located?',
    answer: 'We are based in Cape Town, South Africa, at 46 Devon Street, Woodstock. While our office is in Cape Town, we work with clients globally and have experience collaborating across different countries and timezones.'
  },
  {
    question: 'What is your approach to client relationships?',
    answer: 'We believe in building long-term partnerships with our clients, not just vendor-client relationships. We work collaboratively, focusing on your success as our success. We\'re passionate about putting control in the hands of our clients through training, documentation, and ongoing support.'
  },
  {
    question: 'What WordPress services do you offer?',
    answer: 'We offer comprehensive WordPress services including custom website development, WooCommerce store development, theme development, plugin development, managed WordPress hosting (120+ websites), Mailchimp email marketing integration and training, SEO optimization, ongoing maintenance and support, and migration services.'
  },
  {
    question: 'Do you offer managed WordPress hosting?',
    answer: 'Yes! We provide safe and stable managed WordPress hosting for over 120 websites. Our hosting includes automated daily backups, security monitoring, performance optimization, uptime monitoring, WordPress updates, and priority technical support on enterprise-grade infrastructure.'
  },
  {
    question: 'What is your team size and expertise?',
    answer: 'Our team consists of 10+ expert WordPress developers, designers, and specialists based in Cape Town. Team members include Ashley Shaw (CEO & Founder), Barbara Kerr (CFO), Warwick Booth (Lead Developer), Chris Vancoillie (Systems Engineer), Lourens Visser (Support Manager), and several experienced developers and designers specializing in WordPress, WooCommerce, and design systems.'
  }
];

/**
 * CTA Section Data
 */
export const aboutPageCTA = {
  title: 'Ready to Work with a Trusted WordPress Partner?',
  description: 'Let\'s discuss how our 22+ years of WordPress expertise can help you achieve your online goals.',
  buttons: [
    {
      text: 'Contact Us',
      page: 'contact',
      variant: 'default'
    },
    {
      text: 'View Our Work',
      page: 'portfolio',
      variant: 'outline'
    }
  ]
};
