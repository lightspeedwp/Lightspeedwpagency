/**
 * Detailed Services Data
 * 
 * Extended service information for individual service pages.
 * Real content extracted from https://lightspeedwp.agency
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/services
 * **Last Updated:** 2025-01-09
 * 
 * This file contains detailed service pages content including:
 * - Full descriptions
 * - Service processes
 * - Sub-services
 * - Why choose us sections
 * - Related services
 */

import { LucideIcon } from 'lucide-react';

/**
 * Service Process Step Interface
 * 
 * Represents a single step in a service process
 */
export interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
}

/**
 * Sub-service Interface
 * 
 * Represents a specific service offering within a main service
 */
export interface SubService {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

/**
 * Detailed Service Interface
 * 
 * Extended service information for individual service pages
 */
export interface DetailedService {
  id: string;
  slug: string;
  headline: string;
  tagline: string;
  description: string;
  whyLightSpeed: {
    title: string;
    description: string;
  };
  subServices: SubService[];
  process: {
    title: string;
    description?: string;
    steps: ProcessStep[];
  };
  relatedServices?: {
    title: string;
    description: string;
    page: string;
  }[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonPage: string;
  };
}

/**
 * Security Service - Detailed Content
 * 
 * Real content from: https://lightspeedwp.agency/services/security/
 */
export const securityServiceDetailed: DetailedService = {
  id: 'security',
  slug: 'security',
  headline: 'WordPress & WooCommerce security',
  tagline: 'To provide your website with the very best WordPress & WooCommerce security, we ensure your site and data is safe from the start, and is defended and protected by ongoing monitoring and updates.',
  description: 'Defence and protection that includes updates, monitoring and rapid response.',
  
  whyLightSpeed: {
    title: 'WordPress and WooCommerce expertise that delivers world-class security services for your website.',
    description: 'Our experience in managing security provides you with the peace of mind from knowing your online business can be fixed when compromised and monitored on a continuous basis. We\'re also able to host your WordPress website with our secure hosting to help prevent any future attacks.'
  },
  
  subServices: [
    {
      id: 'security-audit',
      title: 'Security Audit',
      description: 'We perform a complete audit of your website to troubleshoot issues and includes a thorough inspection of your server, files, themes, plugins & database configuration.'
    },
    {
      id: 'malware-removal',
      title: 'Malware Removal',
      description: 'In case your website is hacked or infected with malware, we take immediate measures to remove the root cause and then undertake preventive measures to protect your website in the longer run.'
    }
  ],
  
  process: {
    title: 'Our Security Process',
    description: 'Fortify your website\'s security with our specialized services. Our process includes detailed assessments, effective clean-ups, and vigilant monitoring, ensuring robust protection against online threats.',
    steps: [
      {
        id: 'initial-review',
        number: 1,
        title: 'Initial Security Review',
        description: 'This initial assessment enables us to provide feedback on your website\'s problem and an approximate time frame for fixing the website.'
      },
      {
        id: 'website-cleanup',
        number: 2,
        title: 'Website Clean-up',
        description: 'We do an initial clean up of your website and "sanitise" it to neutralise any security issue so the immediate problem is dealt with.'
      },
      {
        id: 'website-assessment',
        number: 3,
        title: 'Website Assessment',
        description: 'Once the immediate problem is resolved, we then assess your website\'s software and security, performing a managed upgrade of the software on the website.'
      },
      {
        id: 'vulnerability-assessment',
        number: 4,
        title: 'Vulnerability Assessment',
        description: 'We assess the plugins on your website and locate vulnerabilities in their code.'
      },
      {
        id: 'monitoring',
        number: 5,
        title: 'Monitoring',
        description: 'Ongoing security monitoring is available for your website to prevent further attacks, and we provide the option of hosting your website with LightSpeed to reduce chances of recurring issues.'
      }
    ]
  },
  
  relatedServices: [
    {
      title: 'Secure Managed WordPress Hosting',
      description: 'Safe and stable managed WordPress hosting that gives you peace of mind. Our specialised WordPress and WooCommerce managed hosting offers active and passive proactive solutions, automated daily back-ups, monitoring and prompt repair of any breaches.',
      page: 'hosting'
    }
  ],
  
  cta: {
    title: 'Free Security Consultation',
    description: 'Our Security Consultations discuss how we can offer complete protection. It\'s imperative your online business is protected and defended from cybercrime and hacks. With our free consultation, we\'re able to identify your needs and suggest security fixes and improvements that will sustain your online security and win the trust of your customers.',
    buttonText: 'Consult us on WordPress',
    buttonPage: 'contact'
  }
};

/**
 * Discovery Service - Detailed Content
 * 
 * Real content from: https://lightspeedwp.agency/services/discovery/
 */
export const discoveryServiceDetailed: DetailedService = {
  id: 'discovery',
  slug: 'discovery',
  headline: 'Website Discovery and Exploration',
  tagline: 'We listen to understand your needs, ensuring the best approach with clear cost and timeline. Let us assist with your Website Discovery.',
  description: 'Through website discovery we identify your goals and requirements and provide recommendations.',
  
  whyLightSpeed: {
    title: 'Certified WordPress and Woo experts.',
    description: 'Over 15 years in launching successful WordPress websites.'
  },
  
  subServices: [
    {
      id: 'migrations-discovery',
      title: 'Migrations',
      description: 'By understanding your migration needs, we can advise on best solutions.'
    },
    {
      id: 'tour-operator-discovery',
      title: 'Tour Operator Websites',
      description: 'Assessment and analysis to map out your next steps.'
    },
    {
      id: 'woocommerce-discovery',
      title: 'WooCommerce Stores',
      description: 'WooExperts who can identify the best fit for your requirements.'
    },
    {
      id: 'custom-development-discovery',
      title: 'Custom Development',
      description: 'We provide tailor-made analysis and advice on creating custom websites.'
    }
  ],
  
  process: {
    title: 'Our discovery process explained',
    description: 'Collaborating to understand your needs and provide a clear development road map.',
    steps: [
      {
        id: 'one-size-doesnt-fit-all',
        number: 1,
        title: 'One size doesn\'t fit all',
        description: 'You need a solution that\'s as unique as your business.'
      },
      {
        id: 'our-objectives',
        number: 2,
        title: 'Our objectives',
        description: 'Prioritising user needs to identify a successful approach.'
      },
      {
        id: 'research-development',
        number: 3,
        title: 'Research & development',
        description: 'Tinkering and testing to find tailor-made solutions that fit best.'
      },
      {
        id: 'project-plan',
        number: 4,
        title: 'Project plan',
        description: 'Thorough assessment that ensures the very best chance at success.'
      },
      {
        id: 'why-important',
        number: 5,
        title: 'Why is it so important?',
        description: 'Understanding your unique needs so we can provide ideal solutions.'
      },
      {
        id: 'analysis',
        number: 6,
        title: 'Analysis',
        description: 'Thorough assessment that ensures the very best chance at success.'
      },
      {
        id: 'recommended-approach',
        number: 7,
        title: 'Recommended approach',
        description: 'Prioritising user needs to identify a successful approach.'
      },
      {
        id: 'lightspeed-way',
        number: 8,
        title: 'The LightSpeed way',
        description: 'Prioritising user needs to identify a successful approach.'
      }
    ]
  },
  
  relatedServices: [],
  
  cta: {
    title: 'Why LightSpeed?',
    description: 'Over 15 years in launching successful WordPress websites.',
    buttonText: 'Book a free consultation',
    buttonPage: 'contact'
  }
};

/**
 * Design Service - Detailed Content
 * 
 * Real content from: https://lightspeedwp.agency/services/design/
 */
export const designServiceDetailed: DetailedService = {
  id: 'design',
  slug: 'design',
  headline: 'WordPress Design and Branding',
  tagline: 'We create bespoke web design that\'s customised to your requirements and goals.',
  description: 'Great design makes your online business look good, and sell well.',
  
  whyLightSpeed: {
    title: 'Digital branding represents the identity and personality of your brand, online',
    description: 'Digital branding represents the identity and personality of your brand, online – and it\'s a critical part of how your sales and marketing is supported online.'
  },
  
  subServices: [
    {
      id: 'new-website-design',
      title: 'New Website Design',
      description: 'Creating a new website for your brand presents an opportunity to craft an experience that is consistent, cohesive, and delivers on your business objectives.'
    },
    {
      id: 'website-redesign',
      title: 'Website Redesign',
      description: 'By building on your current WooCommerce base theme, we\'re able to update styling and layout to create stronger branding and encourage conversion.'
    },
    {
      id: 'newsletters',
      title: 'Newsletters',
      description: 'When designing newsletters, our focus on subscribers informs emailer design and content that ensures interaction with your brand is consistent, relevant, and optimises conversion.'
    },
    {
      id: 'landing-pages',
      title: 'Landing Pages',
      description: 'With our design of landing pages centred on your CTA, we can help you create a mini digital brochure and push traffic to the page.'
    },
    {
      id: 'icons-illustrations',
      title: 'Icons and Illustrations',
      description: 'Add value to user experiences with custom icons and illustrations.'
    },
    {
      id: 'hero-images',
      title: 'Hero Images',
      description: 'Striking header images that capture your product or service\'s essence.'
    },
    {
      id: 'product-images',
      title: 'Product Images',
      description: 'Great product images that present your products online professionally.'
    },
    {
      id: 'new-store-design',
      title: 'New Store Design',
      description: 'Great design implemented to update your store\'s look, improve customer shopping flow, and increase overall sales. New store owner? We\'ll help you take your first steps.'
    },
    {
      id: 'store-redesign',
      title: 'Store Redesign',
      description: 'By focusing on targeted areas of your Woo store, we analyse user interactions to inform a redesign that optimises your customers\' experiences.'
    }
  ],
  
  process: {
    title: 'Our web design process',
    description: 'Our collaborative web design process creates a digital footprint that converts.',
    steps: [
      {
        id: 'discovery',
        number: 1,
        title: 'Discovery',
        description: 'Client branding questionnaire and competitor research.'
      },
      {
        id: 'mood-boarding',
        number: 2,
        title: 'Mood boarding',
        description: 'Exploring a new creative concept through look and feel'
      },
      {
        id: 'style-scape',
        number: 3,
        title: 'Style-scape',
        description: 'Refining the elements of a mood board for your review'
      },
      {
        id: 'prototyping',
        number: 4,
        title: 'Prototyping',
        description: 'Actualising style-scape concepts in real-world mock-ups'
      },
      {
        id: 'presenting',
        number: 5,
        title: 'Presenting',
        description: 'The full brand identity is presented for your final review.'
      },
      {
        id: 'final-render',
        number: 6,
        title: 'Final render',
        description: 'Final selection and sign-off, and handover of digital assets'
      }
    ]
  },
  
  relatedServices: [],
  
  cta: {
    title: 'Let us help you',
    description: 'Let\'s discuss your design needs in a free consultation. Our free 20 to 30-minute consultations assist us in understanding your needs, and can be followed by a paid discovery phase. This might take a week or longer, after which we\'re able to cost a discovery phase or, if we are clear enough, we\'re able to quote on a proposed solution.',
    buttonText: 'Contact us',
    buttonPage: 'contact'
  }
};

/**
 * Development Service - Detailed Content
 * 
 * Real content from: https://lightspeedwp.agency/services/development/
 */
export const developmentServiceDetailed: DetailedService = {
  id: 'development',
  slug: 'development',
  headline: 'Expert WordPress Development',
  tagline: 'By applying our expertise in WordPress development to custom plugins to API integrations, our innovative approach makes your site fast, secure, and reliable every step of the way.',
  description: 'Expert WordPress development services that take your online business to the next level.',
  
  whyLightSpeed: {
    title: 'Best-practice coding that lays a solid foundation for future growth.',
    description: 'Our coding takes extensibility into account from the start, providing a solid foundation for future upgrades, tweaks, and development while delivering on security and reliability.'
  },
  
  subServices: [
    {
      id: 'wordpress-websites',
      title: 'WordPress Websites',
      description: 'World-class WordPress development from inception all the way to deployment, providing the customised functionality and design you need to meet your needs.'
    },
    {
      id: 'woocommerce-stores',
      title: 'WooCommerce Stores',
      description: 'Whatever your requirement, our expert team can create a tailored e-commerce website with integrated plugins and features that helps you build and retain online business.'
    },
    {
      id: 'migrations',
      title: 'Migrations',
      description: 'We specialise in large-scale moves that incorporate testing and validation, whether it\'s host-to-host, changing from another CMS to WordPress or a Multisite conversion.'
    },
    {
      id: 'theme-development',
      title: 'Theme Development',
      description: 'Our expertise is applied to a process led by design and creativity that enables us to create custom WordPress and WooCommerce themes that deliver success.'
    },
    {
      id: 'plugin-development',
      title: 'Plugin Development',
      description: 'With WordPress and WooCommerce expertise founded on years of experience, we\'re able to develop custom plugins that are a perfect match for your unique needs.'
    }
  ],
  
  process: {
    title: 'WordPress Development',
    description: 'Our WordPress designers can create a customised design template. Verified theme developers with theme & plugins on WordPress.org',
    steps: []
  },
  
  relatedServices: [],
  
  cta: {
    title: 'Let us build together',
    description: 'Contact us for a WordPress Development consultation. Our free 20 to 30-minute consultations assist us in understanding your needs, and can be followed by a paid discovery phase. This might take a week or longer, after which we\'re able to cost a discovery phase or, if we are clear enough, we\'re able to quote on a proposed solution.',
    buttonText: 'Consult us on WordPress',
    buttonPage: 'contact'
  }
};

/**
 * Support Service - Detailed Content
 * 
 * Real content from: https://lightspeedwp.agency/services/support/
 */
export const supportServiceDetailed: DetailedService = {
  id: 'support',
  slug: 'support',
  headline: 'WordPress & WooCommerce support',
  tagline: 'With our WordPress & WooCommerce support services & maintenance of your websites and online shops, you\'re able to concentrate on your business and customers.',
  description: 'Benefit from our WordPress & WooCommerce support services across various areas. We handle common support tasks to enhance your online business.',
  
  whyLightSpeed: {
    title: 'Expert WordPress & WooCommerce support',
    description: 'If you need help adding extra functionality, or improving anything related to your WordPress website, our Support service ensures the best way forward. We have road-tested thousands of plugins, themes, and web services – and can implement something that is fit for purpose.'
  },
  
  subServices: [
    {
      id: 'design-development-support',
      title: 'Design & Development',
      description: 'Our team of expert developers, designers & project managers deliver custom development solutions, tailored to fit your needs. Tell us your goals, your problems and your deadlines and we\'ll create a plan to get you to launch.'
    },
    {
      id: 'migrations-support',
      title: 'Migrations',
      description: 'We specialise in large-scale moves, whether it\'s host-to-host, changing from another CMS to WordPress, Multisite conversion or migrating to WooCommerce. You get smooth migration, without data loss'
    },
    {
      id: 'hosting-support',
      title: 'Hosting',
      description: 'Our specialised managed WordPress hosting service optimise your website to sustain high loads of traffic while using as few resources as possible, and our hosting platform includes threat detection and blocking, multiple daily backups, regular WordPress updates, and caching to boost page speeds.'
    },
    {
      id: 'browser-compatibility',
      title: 'Browser compatibility',
      description: 'The many different web browsers that people use to view your website such as Chrome, Firefox and Safari can all render your site differently. Our job is to ensure they all look the same, no matter which browser.'
    },
    {
      id: 'error-messages',
      title: 'Resolving error messages',
      description: 'Unexpected and strange error messages on your website are one of the worst impressions you can give your visitors, and will negatively impact conversion. Our Support service doesn\'t just remove the error message: we find the cause and ensure it doesn\'t happen again.'
    },
    {
      id: 'bug-fixes',
      title: 'Website bug fixes',
      description: 'Websites are complex and if not used the right way, bugs can appear. Our support includes applying our deep technical understanding of code and WordPress to fix the majority of website bugs.'
    },
    {
      id: 'advice',
      title: 'Advice',
      description: 'Need to just bounce ideas off the industry leaders? We are ready to answer any questions you may have to ensure your WordPress website is well supported.'
    },
    {
      id: 'security-support',
      title: 'Security',
      description: 'Not only can we fix your WordPress site once it\'s been compromised, we can also monitor it on a continuous basis and even host your WordPress website on our secure hosting, which helps to prevent future attacks from occurring.'
    },
    {
      id: 'staging-environments',
      title: 'Development / Staging Environments',
      description: 'Before proceeding with a major WooCommerce update or plugin installation, it\'s recommended that you set up a development or staging website. Need help creating and managing that WooCommerce staging site? Let\'s talk.'
    },
    {
      id: 'structured-data',
      title: 'Structured Data',
      description: 'Seen information like reviews or product prices in the listing of a Google organic search result? This is brought to you by structured data, which is a standardised way of describing the content on a web page. With our experience, we\'re able to get your content prominently featured so traffic becomes conversion.'
    },
    {
      id: 'integrate-plugins',
      title: 'Integrate Plugins',
      description: 'We can advise and assist with the installation and basic setup of 3rd party apps, plugins, etc.'
    },
    {
      id: 'spam',
      title: 'Spam',
      description: 'Inundated with Spam? Not a problem: we\'re experts at setting up robust anti-spam systems.'
    },
    {
      id: '301-redirects',
      title: '301 Redirects',
      description: 'If launching a new ecommerce store or removing pages from your WooCommerce website, you need 301 redirects to retain and direct traffic! Online businesses can lose huge amounts of organic traffic due to broken URLs – but we can help you resolve this by creating 301 redirects.'
    },
    {
      id: 'mobile-bug-fixes',
      title: 'Mobile bug fixes',
      description: 'With the rise of smartphone use, your website needs to work on computers as well as tablets and phones. All the websites we build are 100% compatible and responsive – and we\'re able to help fix your mobile issues too.'
    },
    {
      id: 'image-optimization',
      title: 'Image Optimisation',
      description: 'Huge product images can slow down eCommerce websites, which leads to drop-off of conversions. To resolve this, we run images through a compression tool and can even set up recurring image compression for future images added to your WordPress media library!'
    },
    {
      id: 'open-graph-tags',
      title: 'Open Graph Tags',
      description: 'Adding Open Graph Tags to WooCommerce will help search engines better understand your page content and improve the appearance of your ecommerce products in social media platforms when people share links to your product pages.'
    },
    {
      id: 'broken-design',
      title: 'Broken Design',
      description: 'When theme compatibility issues with plugins or core files result in a website that works and looks nothing like originally intended, we\'re able to correct and update design to get your website looking how you want it.'
    },
    {
      id: 'site-speed',
      title: 'Site Speed',
      description: 'There are many reasons why a WordPress website or WooCommerce store can load slowly. If you want pages that load faster, we will find the bottlenecks and increase and optimise overall performance.'
    }
  ],
  
  process: {
    title: 'Our Support Services',
    description: 'Comprehensive WordPress & WooCommerce support across 18+ areas',
    steps: []
  },
  
  relatedServices: [
    {
      title: 'Design & Development',
      description: 'More About Development',
      page: 'development'
    },
    {
      title: 'Design',
      description: 'More About Design',
      page: 'design'
    },
    {
      title: 'Migrations',
      description: 'More About Migration',
      page: 'migrations'
    },
    {
      title: 'Hosting',
      description: 'More About Hosting',
      page: 'hosting'
    },
    {
      title: 'Security',
      description: 'More About Security',
      page: 'security'
    }
  ],
  
  cta: {
    title: 'Certified WordPress and Woo experts.',
    description: 'Over 15 years in launching successful WordPress websites.',
    buttonText: 'Book a free consultation',
    buttonPage: 'contact'
  }
};

/**
 * Content Service - Detailed Content
 * 
 * Real content from: https://lightspeedwp.agency/services/content/
 */
export const contentServiceDetailed: DetailedService = {
  id: 'content',
  slug: 'content',
  headline: 'LightSpeed\'s Content Services',
  tagline: 'Pioneering an innovative perspective for integrated content management',
  description: 'At LightSpeed we follow our "Content-First Design approach". Whether gathering, auditing, strategizing, or creating, content is the main character before the design stages take over. With a special focus on what\'s to enhance, missing content, and best updating tactics, we align to digital trends and then proceed to layout and site creation.',
  
  whyLightSpeed: {
    title: 'The LightSpeed advantage',
    description: 'Constantly decoding content generation modern tactics for everyone\'s satisfaction, our content services definitely mark a difference in procedure, simplicity, productivity and optimisation. Your content, our highest importance. Digital branding represents the identity and personality of your brand, online – and it\'s a critical part of how your sales and marketing is supported online. We\'re more than just content creators, we\'re your partners in building a dynamic and engaging online experience.'
  },
  
  subServices: [
    {
      id: 'content-audit',
      title: 'Content Audit',
      description: 'Creating and establishing strong foundations for a powerful, effective content strategy. Conduct a thorough assessment of your existing content to ensure it\'s relevant, effective, and aligned with your project goals. This helps identify outdated or underperforming content.'
    },
    {
      id: 'content-strategy',
      title: 'Content Strategy',
      description: 'Generating a tactical roadmap for optimal enhancement opportunities. Develop a clear plan for your content, focusing on user experience, consistency, and achieving specific business outcomes. This strategy guides all content decisions.'
    },
    {
      id: 'content-creation',
      title: 'Content Creation',
      description: 'Introducing our AI-Powered content generation service – a game changer! Professional content creation using modern AI tools and techniques.'
    }
  ],
  
  process: {
    title: 'A dynamic path to content generation',
    description: 'LightSpeed\'s 5 steps for content generation reloaded',
    steps: [
      {
        id: 'content-audit-step',
        number: 1,
        title: 'Content Audit',
        description: 'Conduct a thorough assessment of your existing content to ensure it\'s relevant, effective, and aligned with your project goals. This helps identify outdated or underperforming content.'
      },
      {
        id: 'content-strategy-step',
        number: 2,
        title: 'Content Strategy',
        description: 'Develop a clear plan for your content, focusing on user experience, consistency, and achieving specific business outcomes. This strategy guides all content decisions.'
      },
      {
        id: 'collect-content',
        number: 3,
        title: 'Collect Content',
        description: 'Gather all necessary content, including text, images, videos, and more, either from existing sources or by creating new material. Ensure everything is ready before designing the site.'
      },
      {
        id: 'document-workflow',
        number: 4,
        title: 'Document Workflow',
        description: 'Create a systematic roadmap outlining content production and distribution. Define roles, tasks, and deadlines to ensure a smooth process and consistent output.'
      },
      {
        id: 'implement-workflow',
        number: 5,
        title: 'Implement Workflow System',
        description: 'Centralise and streamline your content creation process using a management system. This improves efficiency, fosters collaboration, and ensures timely project completion.'
      }
    ]
  },
  
  relatedServices: [],
  
  cta: {
    title: 'Reveal your unique business\'s potential',
    description: 'We\'re more than just content creators, we\'re your partners in building a dynamic and engaging online experience. Book your free 20-30 minute consultation with LightSpeed and let\'s create a digital presence that effectively communicates your story!',
    buttonText: 'Book a free consultation',
    buttonPage: 'contact'
  }
};

/**
 * All Detailed Services Array
 */
export const detailedServices: DetailedService[] = [
  securityServiceDetailed,
  discoveryServiceDetailed,
  designServiceDetailed,
  developmentServiceDetailed,
  supportServiceDetailed,
  contentServiceDetailed
];

/**
 * Get detailed service by ID
 */
export function getDetailedServiceById(id: string): DetailedService | undefined {
  return detailedServices.find(s => s.id === id);
}

/**
 * Get detailed service by slug
 */
export function getDetailedServiceBySlug(slug: string): DetailedService | undefined {
  return detailedServices.find(s => s.slug === slug);
}
