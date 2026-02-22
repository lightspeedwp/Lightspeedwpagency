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
 * SEO Service - Detailed Content
 */
export const seoServiceDetailed: DetailedService = {
  id: 'seo',
  slug: 'seo',
  headline: 'Dominate Search Results',
  tagline: 'Technical SEO strategies that drive organic traffic and improve visibility for WordPress & WooCommerce.',
  description: 'Climb the rankings with data-driven SEO optimization tailored for WordPress.',
  
  whyLightSpeed: {
    title: 'Visibility that drives real business growth.',
    description: 'We go beyond basic keyword stuffing. Our technical SEO approach ensures your WordPress site is structured, indexed, and optimized to meet Google\'s Core Web Vitals standards, driving sustainable organic traffic.'
  },
  
  subServices: [
    {
      id: 'technical-seo',
      title: 'Technical SEO Audit',
      description: 'Comprehensive analysis of your site structure, crawlability, indexation, and schema markup to ensure search engines understand your content.'
    },
    {
      id: 'on-page-optimization',
      title: 'On-Page Optimization',
      description: 'Optimizing titles, meta descriptions, headings, and internal linking structures to maximize relevance for target keywords.'
    },
    {
      id: 'content-strategy',
      title: 'SEO Content Strategy',
      description: 'Data-backed content planning that targets high-value keywords and answers user intent to build authority in your niche.'
    },
    {
      id: 'local-seo',
      title: 'Local SEO',
      description: 'Optimizing your presence for local search results, Google Business Profile, and location-specific keywords.'
    }
  ],
  
  process: {
    title: 'Our SEO Methodology',
    description: 'A data-driven roadmap to higher rankings and better visibility.',
    steps: [
      {
        id: 'audit',
        number: 1,
        title: 'Comprehensive Audit',
        description: 'We establish a baseline by auditing your current technical setup, keyword rankings, and competitor landscape.'
      },
      {
        id: 'strategy',
        number: 2,
        title: 'Strategy Development',
        description: 'Creating a tailored plan focusing on quick wins and long-term growth opportunities specific to your industry.'
      },
      {
        id: 'optimization',
        number: 3,
        title: 'Technical Optimization',
        description: 'Fixing crawl errors, improving site speed, and implementing structured data to help search engines read your site.'
      },
      {
        id: 'content',
        number: 4,
        title: 'Content Enhancement',
        description: 'Optimizing existing pages and creating new, high-quality content that targets valuable search terms.'
      },
      {
        id: 'monitoring',
        number: 5,
        title: 'Monitoring & Reporting',
        description: 'Ongoing tracking of rankings, traffic, and conversions with monthly reports and strategy adjustments.'
      }
    ]
  },
  
  cta: {
    title: 'Ready to Rank Higher?',
    description: 'Stop losing traffic to your competitors. Let\'s build an SEO strategy that puts your brand in front of the right audience at the right time.',
    buttonText: 'Get Your Free SEO Audit',
    buttonPage: 'contact'
  },

  relatedServices: [
    {
      title: 'Content Strategy',
      description: 'Data-backed content planning that targets high-value keywords and answers user intent.',
      page: 'content'
    },
    {
      title: 'Performance Optimization',
      description: 'Speed and Core Web Vitals directly impact your rankings — we make sure your site is lightning fast.',
      page: 'performance'
    },
    {
      title: 'AI Engine Optimization',
      description: 'Optimize your content for AI-driven search experiences alongside traditional SEO.',
      page: 'ai-engine-optimisation'
    }
  ]
};

/**
 * Performance Service - Detailed Content
 */
export const performanceServiceDetailed: DetailedService = {
  id: 'performance',
  slug: 'performance',
  headline: 'Lightning Fast WordPress',
  tagline: 'Optimize your site for speed, stability, and superior user experience. Core Web Vitals focused.',
  description: 'Speed is a feature. We make your WordPress site fly.',
  
  whyLightSpeed: {
    title: 'Speed converts. Latency kills.',
    description: 'A slow website frustrates users and hurts your search rankings. We specialize in advanced WordPress performance optimization, caching strategies, and code refactoring to deliver sub-second load times.'
  },
  
  subServices: [
    {
      id: 'speed-audit',
      title: 'Performance Audit',
      description: 'Deep-dive analysis of bottlenecks, identifying specific plugins, scripts, or queries slowing down your site.'
    },
    {
      id: 'code-optimization',
      title: 'Code Refactoring',
      description: 'Cleaning up bloated themes, optimizing database queries, and reducing script execution time.'
    },
    {
      id: 'caching-strategy',
      title: 'Advanced Caching',
      description: 'Implementing server-side caching, object caching (Redis), and CDN configuration for global speed.'
    },
    {
      id: 'asset-optimization',
      title: 'Asset Optimization',
      description: 'Image compression, lazy loading, script deferral, and font optimization to minimize initial page weight.'
    }
  ],
  
  process: {
    title: 'Performance Optimization Workflow',
    description: 'From sluggish to supersonic in five steps.',
    steps: [
      {
        id: 'benchmark',
        number: 1,
        title: 'Benchmark Testing',
        description: 'Measuring current load times, TTFB, LCP, and CLS across mobile and desktop devices.'
      },
      {
        id: 'analysis',
        number: 2,
        title: 'Bottleneck Analysis',
        description: 'Identifying the root causes of slowness—whether it\'s hosting, code, or heavy assets.'
      },
      {
        id: 'optimization',
        number: 3,
        title: 'Optimization Execution',
        description: 'Implementing fixes: code minification, image optimization, database cleanup, and caching setup.'
      },
      {
        id: 'validation',
        number: 4,
        title: 'Validation & Testing',
        description: 'Verifying improvements across real-world devices and connection speeds.'
      },
      {
        id: 'monitoring',
        number: 5,
        title: 'Performance Monitoring',
        description: 'Setting up alerts to ensure your site stays fast as you add new content and features.'
      }
    ]
  },
  
  cta: {
    title: 'Speed Up Your Site Today',
    description: 'Don\'t let a slow website cost you customers. Our performance experts can significantly improve your load times and Core Web Vitals scores.',
    buttonText: 'Analyze My Site Speed',
    buttonPage: 'contact'
  },

  relatedServices: [
    {
      title: 'Managed WordPress Hosting',
      description: 'Enterprise-grade hosting tuned for WordPress performance — the foundation of a fast site.',
      page: 'hosting'
    },
    {
      title: 'SEO Services',
      description: 'Performance and SEO go hand-in-hand — faster sites rank higher in search results.',
      page: 'seo'
    },
    {
      title: 'WordPress Support',
      description: 'Ongoing maintenance and monitoring to keep your site performing at its best.',
      page: 'support'
    }
  ]
};

/**
 * Content Service - Detailed Content
 */
export const contentServiceDetailed: DetailedService = {
  id: 'content',
  slug: 'content',
  headline: 'Content That Connects',
  tagline: 'Strategic content creation that speaks your brand\'s voice and engages your audience.',
  description: 'Crafting compelling narratives that drive engagement and conversion.',
  
  whyLightSpeed: {
    title: 'Words that work as hard as your code.',
    description: 'Great design needs great content. We combine SEO insights with creative storytelling to produce content that not only ranks well but also resonates with your human audience.'
  },
  
  subServices: [
    {
      id: 'content-strategy',
      title: 'Content Strategy',
      description: 'Developing a roadmap for your content ecosystem, defining tone of voice, pillars, and distribution channels.'
    },
    {
      id: 'copywriting',
      title: 'Web Copywriting',
      description: 'Persuasive website copy that guides visitors through your funnel and encourages action.'
    },
    {
      id: 'blog-content',
      title: 'Blog & Articles',
      description: 'Regular, high-quality articles that demonstrate expertise and improve organic search visibility.'
    },
    {
      id: 'editing',
      title: 'Editing & Optimization',
      description: 'Polishing existing content for clarity, impact, and search engine performance.'
    }
  ],
  
  process: {
    title: 'Our Editorial Process',
    description: 'From blank page to published perfection.',
    steps: [
      {
        id: 'discovery',
        number: 1,
        title: 'Discovery & Research',
        description: 'Understanding your audience, competitors, and unique value proposition to find your angle.'
      },
      {
        id: 'outlining',
        number: 2,
        title: 'Outlining & Structure',
        description: 'Creating detailed skeletons for content pieces to ensure logical flow and key message coverage.'
      },
      {
        id: 'drafting',
        number: 3,
        title: 'Drafting',
        description: 'Writing the initial content, focusing on clarity, engagement, and brand voice consistency.'
      },
      {
        id: 'review',
        number: 4,
        title: 'Review & Refinement',
        description: 'Rigorous editing for grammar, style, and flow, plus stakeholder feedback incorporation.'
      },
      {
        id: 'polishing',
        number: 5,
        title: 'Final Polish & SEO',
        description: 'Final proofreading and meta-data optimization before publication.'
      }
    ]
  },
  
  cta: {
    title: 'Tell Your Story',
    description: 'Ready to elevate your brand with professional content? Let\'s create something your audience will love to read.',
    buttonText: 'Start Your Content Project',
    buttonPage: 'contact'
  },

  relatedServices: [
    {
      title: 'SEO Services',
      description: 'Ensure your content is optimized for search engines and drives organic traffic.',
      page: 'seo'
    },
    {
      title: 'Email Marketing',
      description: 'Distribute your content through strategic email campaigns that convert.',
      page: 'newsletter'
    },
    {
      title: 'Website Design',
      description: 'Present your content with stunning design that enhances readability and engagement.',
      page: 'design'
    }
  ]
};

/**
 * Support Service - Detailed Content
 */
export const supportServiceDetailed: DetailedService = {
  id: 'support',
  slug: 'support',
  headline: 'Mission Control for WordPress',
  tagline: 'Proactive monitoring, updates, and emergency support. We keep your digital fortress secure and online 24/7.',
  description: 'Comprehensive WordPress support and maintenance for mission-critical websites.',
  
  whyLightSpeed: {
    title: 'Sleep soundly while we stand guard.',
    description: 'Your website is your business engine. We provide the oil, the maintenance, and the emergency repairs. Our proactive approach stops problems before they start, ensuring 99.9% uptime and maximum security.'
  },
  
  subServices: [
    {
      id: 'design-development-support',
      title: 'Design & Dev Support',
      description: 'Ongoing tweaks, feature additions, and layout fixes to keep your site fresh and functional.'
    },
    {
      id: 'security-support',
      title: 'Security Monitoring',
      description: '24/7 threat detection, firewall management, and immediate malware removal if anything gets through.'
    },
    {
      id: 'hosting-support',
      title: 'Hosting Management',
      description: 'We handle the server side of things, ensuring optimal PHP versions, caching, and resource allocation.'
    },
    {
      id: 'bug-fixes',
      title: 'Bug Fixes',
      description: 'Rapid troubleshooting and resolution of plugin conflicts, theme errors, and white screens of death.'
    },
    {
      id: 'mobile-bug-fixes',
      title: 'Mobile Optimization',
      description: 'Ensuring your site looks and works perfectly across all device sizes and screen resolutions.'
    },
    {
      id: 'site-speed',
      title: 'Performance Tuning',
      description: 'Continuous monitoring of Core Web Vitals and speed optimization adjustments.'
    }
  ],
  
  process: {
    title: 'Support Workflow',
    description: 'How we keep your site running smoothly.',
    steps: [
      {
        id: 'onboarding',
        number: 1,
        title: 'Onboarding Audit',
        description: 'We scan your site to establish a baseline and fix immediate issues.'
      },
      {
        id: 'monitoring',
        number: 2,
        title: 'Active Monitoring',
        description: 'Our systems connect to your site to track uptime, security, and performance.'
      },
      {
        id: 'updates',
        number: 3,
        title: 'Safe Updates',
        description: 'We test updates in a staging environment before applying them to your live site.'
      },
      {
        id: 'reporting',
        number: 4,
        title: 'Monthly Reporting',
        description: 'You get a detailed report of everything we did and how your site is performing.'
      }
    ]
  },
  
  cta: {
    title: 'Get Premium Support',
    description: 'Stop worrying about your website and start focusing on your business. Our support plans start at just $99/mo.',
    buttonText: 'View Support Plans',
    buttonPage: 'pricing'
  },

  relatedServices: [
    {
      title: 'Secure Managed Hosting',
      description: 'Combine support with managed hosting for complete peace of mind.',
      page: 'hosting'
    },
    {
      title: 'WordPress Security',
      description: 'Harden your site against attacks with our dedicated security services.',
      page: 'security'
    },
    {
      title: 'Performance Optimization',
      description: 'Keep your site fast with ongoing performance tuning and monitoring.',
      page: 'performance'
    }
  ]
};

/**
 * Newsletter Service - Detailed Content
 */
export const newsletterServiceDetailed: DetailedService = {
  id: 'newsletter',
  slug: 'newsletter',
  headline: 'Email That Gets Opened',
  tagline: 'Strategic newsletters that cut through the noise. We design, write, and automate campaigns that your audience actually wants to read.',
  description: 'Full-stack email marketing services from strategy to execution.',
  
  whyLightSpeed: {
    title: 'Full-Stack Email Marketing',
    description: 'We don\'t just design pretty emails. We build comprehensive email engines that drive real revenue through automation, segmentation, and compelling content.'
  },
  
  subServices: [
    {
      id: 'integration',
      title: 'Platform Integration',
      description: 'Seamless integration with Mailchimp, ConvertKit, and other email platforms. API integration, forms, lists.'
    },
    {
      id: 'templates',
      title: 'Email Templates',
      description: 'Custom-designed email templates that match your brand. Responsive design, brand styling, A/B testing.'
    },
    {
      id: 'automation',
      title: 'Marketing Automation',
      description: 'Automated email sequences and customer journeys. Welcome series, drip campaigns, behavior triggers.'
    },
    {
      id: 'analytics',
      title: 'Analytics & Reporting',
      description: 'Track performance with detailed analytics and insights. Open rates, click tracking, conversions.'
    },
    {
      id: 'strategy',
      title: 'Email Strategy',
      description: 'Strategic planning for effective email marketing campaigns. Content calendar, audience segmentation.'
    },
    {
      id: 'optimization',
      title: 'Campaign Optimization',
      description: 'Continuous improvement of email performance and engagement. A/B testing, subject line optimization.'
    }
  ],
  
  process: {
    title: 'Ready for Liftoff',
    description: 'Our 6-step framework ensures your emails land in the inbox, not spam.',
    steps: [
      {
        id: 'strategy',
        number: 1,
        title: 'Strategy & Planning',
        description: 'Define goals, audience segments, and content strategy for maximum impact.'
      },
      {
        id: 'setup',
        number: 2,
        title: 'Platform Setup',
        description: 'Configure email platform and integrate with your website seamlessly.'
      },
      {
        id: 'design',
        number: 3,
        title: 'Design & Templates',
        description: 'Create branded email templates and signup forms that convert.'
      },
      {
        id: 'automation',
        number: 4,
        title: 'Automation Setup',
        description: 'Build automated workflows and customer journeys that run on autopilot.'
      },
      {
        id: 'launch',
        number: 5,
        title: 'Launch & Monitor',
        description: 'Launch campaigns and track performance metrics in real-time.'
      },
      {
        id: 'optimize',
        number: 6,
        title: 'Optimize & Scale',
        description: 'Continuous testing and optimization for better results and higher ROI.'
      }
    ]
  },
  
  cta: {
    title: 'Stop Sending into the Void',
    description: 'Let\'s build an email list that actually drives revenue for your business.',
    buttonText: 'Start Your Campaign',
    buttonPage: 'contact'
  },

  relatedServices: [
    {
      title: 'Content Creation',
      description: 'Compelling content that keeps your subscribers engaged and clicking.',
      page: 'content'
    },
    {
      title: 'Website Design',
      description: 'Landing pages and opt-in forms designed to maximize subscriber growth.',
      page: 'design'
    },
    {
      title: 'SEO Services',
      description: 'Drive organic traffic to your newsletter signup pages.',
      page: 'seo'
    }
  ]
};

/**
 * Design Service - Detailed Content
 */
export const designServiceDetailed: DetailedService = {
  id: 'design',
  slug: 'design',
  headline: 'We Craft Digital Masterpieces',
  tagline: 'Where aesthetic beauty meets functional design. We transform ideas into visual experiences that captivate and convert.',
  description: 'Premium UI/UX design services for brands that demand excellence.',
  
  whyLightSpeed: {
    title: 'Design that Works',
    description: 'We believe design is more than just making things look pretty. It\'s about solving problems, guiding user behavior, and communicating your brand value instantly. Our designs are data-informed and conversion-focused.'
  },
  
  subServices: [
    {
      id: 'new-website-design',
      title: 'Website Design',
      description: 'Custom, pixel-perfect website designs tailored to your brand identity and business goals.'
    },
    {
      id: 'landing-pages',
      title: 'Landing Pages',
      description: 'High-conversion landing pages optimized for marketing campaigns and lead generation.'
    },
    {
      id: 'website-redesign',
      title: 'Website Redesign',
      description: 'Modernize your outdated site with a fresh look and improved user experience.'
    },
    {
      id: 'icons-illustrations',
      title: 'Icons & Illustrations',
      description: 'Bespoke iconography and illustrations that add personality and depth to your interface.'
    },
    {
      id: 'product-images',
      title: 'E-commerce Design',
      description: 'Store layouts and product presentations designed to maximize sales and reduce cart abandonment.'
    },
    {
      id: 'branding',
      title: 'Digital Branding',
      description: 'Translating your brand guidelines into a cohesive digital design system for the web.'
    }
  ],
  
  process: {
    title: 'The Creative Process',
    description: 'How we take your vision from concept to reality.',
    steps: [
      {
        id: 'discovery',
        number: 1,
        title: 'Discovery',
        description: 'We dive deep into your brand, audience, and goals to build a solid foundation.'
      },
      {
        id: 'wireframing',
        number: 2,
        title: 'Wireframing',
        description: 'Mapping out the user journey and page structure before applying any style.'
      },
      {
        id: 'visual-design',
        number: 3,
        title: 'Visual Design',
        description: 'Applying colors, typography, and imagery to bring the wireframes to life.'
      },
      {
        id: 'prototyping',
        number: 4,
        title: 'Prototyping',
        description: 'Creating interactive mockups to test flows and interactions.'
      },
      {
        id: 'handoff',
        number: 5,
        title: 'Handoff',
        description: 'Delivering organized design files and style guides to the development team.'
      }
    ]
  },
  
  cta: {
    title: 'Ready for a Redesign?',
    description: 'Let\'s create a website that your customers will love and your competitors will envy.',
    buttonText: 'Start Your Project',
    buttonPage: 'contact'
  },

  relatedServices: [
    {
      title: 'WordPress Development',
      description: 'Turn your designs into pixel-perfect, high-performance WordPress websites.',
      page: 'development'
    },
    {
      title: 'Discovery & Strategy',
      description: 'Research-driven strategy ensures your design decisions are backed by data.',
      page: 'discovery'
    },
    {
      title: 'Content Creation',
      description: 'Professional copywriting and content that brings your designs to life.',
      page: 'content'
    }
  ]
};

/**
 * Development Service - Detailed Content
 */
export const developmentServiceDetailed: DetailedService = {
  id: 'development',
  slug: 'development',
  headline: 'Engineering the Future of WordPress',
  tagline: 'Robust, scalable, and high-performance development solutions. We build the engine that powers your digital business.',
  description: 'Enterprise-grade WordPress and WooCommerce development.',
  
  whyLightSpeed: {
    title: 'Code that Scales',
    description: 'We write clean, documented, and standards-compliant code. Our development process prioritizes performance, security, and maintainability, ensuring your site can grow with your business without technical debt.'
  },
  
  subServices: [
    {
      id: 'wordpress-websites',
      title: 'Custom WordPress',
      description: 'Bespoke themes and functionality built from scratch to meet your exact requirements.'
    },
    {
      id: 'woocommerce-stores',
      title: 'WooCommerce Dev',
      description: 'Complex e-commerce solutions, payment gateway integrations, and custom checkout flows.'
    },
    {
      id: 'plugin-development',
      title: 'Plugin Development',
      description: 'Custom plugins to extend WordPress functionality when off-the-shelf solutions fall short.'
    },
    {
      id: 'api-integration',
      title: 'API Integrations',
      description: 'Connecting your WordPress site seamlessly with third-party services, CRMs, and ERPs.'
    },
    {
      id: 'headless-wordpress',
      title: 'Headless WordPress',
      description: 'Decoupled architectures using React/Next.js frontends with WordPress as the CMS.'
    },
    {
      id: 'migrations',
      title: 'Complex Migrations',
      description: 'Moving large-scale data and content from other platforms to WordPress with zero data loss.'
    }
  ],
  
  process: {
    title: 'Execution Pipeline',
    description: 'Our systematic approach to development and deployment.',
    steps: [
      {
        id: 'architecture',
        number: 1,
        title: 'Architecture',
        description: 'Planning the database schema, tech stack, and component structure.'
      },
      {
        id: 'development',
        number: 2,
        title: 'Development',
        description: 'Writing code in sprints with regular commits and code reviews.'
      },
      {
        id: 'testing',
        number: 3,
        title: 'QA & Testing',
        description: 'Rigorous testing across devices, browsers, and for accessibility compliance.'
      },
      {
        id: 'deployment',
        number: 4,
        title: 'Deployment',
        description: 'Automated CI/CD deployment to staging and production environments.'
      },
      {
        id: 'maintenance',
        number: 5,
        title: 'Maintenance',
        description: 'Ongoing updates, security patches, and performance monitoring.'
      }
    ]
  },
  
  cta: {
    title: 'Build It Right',
    description: 'Don\'t settle for spaghetti code. Invest in a solid technical foundation for your business.',
    buttonText: 'Talk to Engineering',
    buttonPage: 'contact'
  },

  relatedServices: [
    {
      title: 'Website Design',
      description: 'Beautiful designs that we implement with pixel-perfect precision.',
      page: 'design'
    },
    {
      title: 'Managed Hosting',
      description: 'Enterprise hosting infrastructure tuned for your WordPress build.',
      page: 'hosting'
    },
    {
      title: 'Ongoing Support',
      description: 'Post-launch maintenance, updates, and bug fixes to keep everything running.',
      page: 'support'
    }
  ]
};

/**
 * Discovery Service - Detailed Content
 */
export const discoveryServiceDetailed: DetailedService = {
  id: 'discovery',
  slug: 'discovery',
  headline: 'Digital Discovery & Strategy',
  tagline: 'We dig deep to uncover the insights that will drive your project\'s success before writing a single line of code.',
  description: 'Aligning stakeholders on business objectives and success metrics.',
  
  whyLightSpeed: {
    title: 'Why Discovery Matters',
    description: 'Skipping discovery is the leading cause of project failure. Our process ensures we build the right thing, for the right people, for the right reasons.'
  },
  
  subServices: [
    {
      id: 'goal-alignment',
      title: 'Goal Alignment',
      description: 'Aligning stakeholders on business objectives and success metrics.'
    },
    {
      id: 'risk-mitigation',
      title: 'Risk Mitigation',
      description: 'Identifying technical and operational risks early in the process.'
    },
    {
      id: 'opportunity-spotting',
      title: 'Opportunity Spotting',
      description: 'Uncovering hidden opportunities for innovation and competitive advantage.'
    }
  ],
  
  process: {
    title: 'The Discovery Roadmap',
    description: 'Our systematic approach to understanding your needs.',
    steps: [
      {
        id: 'stakeholder-interviews',
        number: 1,
        title: 'Stakeholder Interviews',
        description: 'One-on-one sessions with key decision-makers to gather requirements.'
      },
      {
        id: 'user-research',
        number: 2,
        title: 'User Research',
        description: 'Analyzing your target audience, their needs, and behaviors.'
      },
      {
        id: 'competitive-audit',
        number: 3,
        title: 'Competitive Audit',
        description: 'Reviewing competitors to identify gaps and best practices.'
      },
      {
        id: 'technical-feasibility',
        number: 4,
        title: 'Technical Feasibility',
        description: 'Assessing the technology stack and integration requirements.'
      },
      {
        id: 'strategy-roadmap',
        number: 5,
        title: 'Strategy Roadmap',
        description: 'Delivering a comprehensive plan for design and development.'
      }
    ]
  },
  
  relatedServices: [
    {
      title: 'Website Design',
      description: 'Custom, pixel-perfect website designs tailored to your brand identity and business goals.',
      page: 'design'
    },
    {
      title: 'Custom WordPress Development',
      description: 'Bespoke themes and functionality built from scratch to meet your exact requirements.',
      page: 'development'
    }
  ],
  
  cta: {
    title: 'Start on Solid Ground',
    description: 'Invest in a discovery phase to ensure your project\'s success.',
    buttonText: 'Start Discovery',
    buttonPage: 'contact'
  }
};

/**
 * Accessibility Compliance Service - Detailed Content
 */
export const accessibilityServiceDetailed: DetailedService = {
  id: 'accessibility',
  slug: 'accessibility',
  headline: 'Accessible WordPress for Everyone',
  tagline: 'WCAG 2.1 AA/AAA compliant websites that welcome every visitor — regardless of ability, device, or assistive technology.',
  description: 'Inclusive design and development that expands your audience and protects your brand.',

  whyLightSpeed: {
    title: 'Inclusion is not optional — it\'s the law.',
    description: 'Over 1 billion people worldwide live with a disability. Web accessibility isn\'t just the right thing to do — it\'s a legal requirement in many jurisdictions. Our team audits, remediates, and builds WordPress sites that meet WCAG 2.1 AA (and AAA where feasible), ensuring compliance with the ADA, EAA, and Section 508.'
  },

  subServices: [
    {
      id: 'wcag-audit',
      title: 'WCAG Compliance Audit',
      description: 'Comprehensive manual + automated audit against WCAG 2.1 AA/AAA success criteria with a prioritised remediation report.'
    },
    {
      id: 'remediation',
      title: 'Accessibility Remediation',
      description: 'Fixing colour contrast, keyboard traps, missing alt text, ARIA misuse, and focus management issues across your entire site.'
    },
    {
      id: 'inclusive-design',
      title: 'Inclusive Design Systems',
      description: 'Building component libraries with accessibility baked in — focus rings, screen-reader announcements, reduced-motion support, and semantic HTML.'
    },
    {
      id: 'assistive-testing',
      title: 'Assistive Technology Testing',
      description: 'Real-device testing with NVDA, JAWS, VoiceOver, and TalkBack to verify the experience for screen-reader and switch-control users.'
    }
  ],

  process: {
    title: 'Accessibility Compliance Workflow',
    description: 'From audit to certification in five clear steps.',
    steps: [
      {
        id: 'audit',
        number: 1,
        title: 'Automated + Manual Audit',
        description: 'Running axe-core, Lighthouse, and WAVE alongside manual keyboard and screen-reader walkthroughs.'
      },
      {
        id: 'report',
        number: 2,
        title: 'Prioritised Report',
        description: 'Documenting every issue with severity, WCAG criterion, affected pages, and recommended fix.'
      },
      {
        id: 'remediate',
        number: 3,
        title: 'Remediation Sprint',
        description: 'Fixing critical and major issues first — colour contrast, keyboard navigation, ARIA, and semantic structure.'
      },
      {
        id: 'retest',
        number: 4,
        title: 'Regression Testing',
        description: 'Re-auditing with automated tools and assistive technology to verify all fixes hold.'
      },
      {
        id: 'monitor',
        number: 5,
        title: 'Ongoing Monitoring',
        description: 'CI/CD accessibility gates and quarterly re-audits to prevent regression as content evolves.'
      }
    ]
  },

  cta: {
    title: 'Make Your Site Accessible Today',
    description: 'Don\'t wait for a lawsuit. Proactive accessibility improves SEO, widens your audience, and demonstrates your brand values.',
    buttonText: 'Book an Accessibility Audit',
    buttonPage: 'contact'
  },

  relatedServices: [
    {
      title: 'WordPress Development',
      description: 'Accessible-first development with semantic HTML, ARIA, and keyboard navigation built in.',
      page: 'development'
    },
    {
      title: 'SEO Services',
      description: 'Accessibility and SEO share many best practices — improve both simultaneously.',
      page: 'seo'
    },
    {
      title: 'Website Design',
      description: 'Inclusive design systems with proper color contrast, focus states, and clear hierarchy.',
      page: 'design'
    }
  ]
};

/**
 * AI Engine Optimisation Service - Detailed Content
 */
export const aiEngineOptimisationDetailed: DetailedService = {
  id: 'ai-engine-optimisation',
  slug: 'ai-engine-optimisation',
  headline: 'AI Engine Optimisation for WordPress',
  tagline: 'Fine-tune, accelerate, and scale AI models running on or alongside your WordPress stack — from inference speed to cost efficiency.',
  description: 'Making AI integrations faster, cheaper, and more reliable inside WordPress.',

  whyLightSpeed: {
    title: 'Your AI is only as good as its engine.',
    description: 'Bolting AI onto WordPress is easy. Making it perform at scale without blowing your hosting budget is hard. We optimise prompt chains, model selection, caching layers, and API orchestration so your AI features load fast and cost less per request.'
  },

  subServices: [
    {
      id: 'model-selection',
      title: 'Model Selection & Benchmarking',
      description: 'Comparing GPT-4o, Claude, Gemini, Llama, and open-source models against your specific use case for cost, latency, and quality.'
    },
    {
      id: 'prompt-engineering',
      title: 'Prompt Engineering & Tuning',
      description: 'Crafting system prompts, few-shot examples, and chain-of-thought strategies that maximise accuracy and minimise token usage.'
    },
    {
      id: 'inference-caching',
      title: 'Inference Caching & CDN',
      description: 'Implementing semantic caching with Redis or edge functions so repeated queries return instantly without another API call.'
    },
    {
      id: 'cost-optimisation',
      title: 'Cost & Rate-Limit Management',
      description: 'Setting up tiered model routing, request batching, and budget alerts to keep AI costs predictable and under control.'
    }
  ],

  process: {
    title: 'AI Engine Optimisation Protocol',
    description: 'From bloated AI bills to lean, mean inference machines.',
    steps: [
      {
        id: 'baseline',
        number: 1,
        title: 'Baseline Measurement',
        description: 'Profiling current latency, token usage, error rates, and monthly costs across all AI endpoints.'
      },
      {
        id: 'architecture',
        number: 2,
        title: 'Architecture Review',
        description: 'Mapping your prompt chains, model calls, and data flows to identify bottlenecks and redundancies.'
      },
      {
        id: 'optimise',
        number: 3,
        title: 'Optimisation Sprint',
        description: 'Implementing caching, prompt compression, model downsizing, and batching to cut costs and latency.'
      },
      {
        id: 'validate',
        number: 4,
        title: 'Quality Validation',
        description: 'A/B testing optimised vs. original outputs to ensure quality holds while costs drop.'
      },
      {
        id: 'dashboard',
        number: 5,
        title: 'Monitoring Dashboard',
        description: 'Deploying real-time dashboards for cost, latency, and quality metrics with automated budget alerts.'
      }
    ]
  },

  cta: {
    title: 'Optimise Your AI Stack',
    description: 'Stop overspending on AI API calls. Our engineers will cut your inference costs by up to 60% while maintaining output quality.',
    buttonText: 'Get an AI Audit',
    buttonPage: 'contact'
  },

  relatedServices: [
    {
      title: 'Answer Engine Optimisation',
      description: 'Get your brand cited by AI search engines like ChatGPT, Perplexity, and Google AI Overviews.',
      page: 'answer-engine-optimisation'
    },
    {
      title: 'WordPress Development',
      description: 'Custom integrations to connect AI models with your WordPress site securely and efficiently.',
      page: 'development'
    },
    {
      title: 'Performance Optimization',
      description: 'Ensure AI features don\'t slow down your site with server-level performance tuning.',
      page: 'performance'
    }
  ]
};

/**
 * Answer Engine Optimisation (AEO) Service - Detailed Content
 */
export const answerEngineOptimisationDetailed: DetailedService = {
  id: 'answer-engine-optimisation',
  slug: 'answer-engine-optimisation',
  headline: 'Answer Engine Optimisation',
  tagline: 'Get your brand cited by ChatGPT, Perplexity, Gemini, and AI Overviews — the new front page of the internet.',
  description: 'Optimising your content to be the answer AI engines serve to millions.',

  whyLightSpeed: {
    title: 'Search is becoming conversation.',
    description: 'Traditional SEO gets you ranked. Answer Engine Optimisation (AEO) gets you quoted. As users shift from Google\'s blue links to AI-generated answers, your content must be structured, authoritative, and machine-readable enough for LLMs to cite you as the source of truth.'
  },

  subServices: [
    {
      id: 'structured-data',
      title: 'Schema & Structured Data',
      description: 'Implementing JSON-LD, FAQ schema, HowTo schema, and entity markup so AI crawlers can parse your expertise.'
    },
    {
      id: 'entity-authority',
      title: 'Entity & Authority Building',
      description: 'Establishing your brand as a trusted knowledge entity through consistent NAP, author markup, and topical authority signals.'
    },
    {
      id: 'content-formatting',
      title: 'AI-Friendly Content Format',
      description: 'Restructuring pages with clear Q&A pairs, concise definitions, summary paragraphs, and layered depth — the format LLMs prefer to cite.'
    },
    {
      id: 'citation-tracking',
      title: 'AI Citation Monitoring',
      description: 'Tracking where and how often AI engines cite your brand, measuring share-of-voice in AI-generated answers across ChatGPT, Perplexity, and Google AI Overviews.'
    }
  ],

  process: {
    title: 'AEO Implementation Roadmap',
    description: 'From invisible to the AI\'s go-to source in five phases.',
    steps: [
      {
        id: 'visibility-audit',
        number: 1,
        title: 'AI Visibility Audit',
        description: 'Querying ChatGPT, Perplexity, and Google AI Overviews for your target topics to measure current citation status.'
      },
      {
        id: 'content-gap',
        number: 2,
        title: 'Content Gap Analysis',
        description: 'Identifying questions your audience asks AI engines where your brand is absent or under-represented.'
      },
      {
        id: 'optimisation',
        number: 3,
        title: 'Content & Schema Optimisation',
        description: 'Rewriting and marking up key pages with FAQ schema, entity data, and AI-citation-friendly formatting.'
      },
      {
        id: 'authority',
        number: 4,
        title: 'Authority Signal Amplification',
        description: 'Building topical authority through pillar content, backlinks, expert authorship, and consistent entity signals.'
      },
      {
        id: 'monitoring',
        number: 5,
        title: 'Citation Tracking & Iteration',
        description: 'Monthly AI citation reports with share-of-voice trends, competitor benchmarking, and content iteration recommendations.'
      }
    ]
  },

  cta: {
    title: 'Get Cited by AI Engines',
    description: 'The next generation of search is here. Position your brand as the authoritative answer before your competitors do.',
    buttonText: 'Start AEO Strategy',
    buttonPage: 'contact'
  },

  relatedServices: [
    {
      title: 'SEO Services',
      description: 'Traditional SEO and AEO work together — rank in Google and get cited by AI.',
      page: 'seo'
    },
    {
      title: 'Content Strategy',
      description: 'AI-citation-friendly content requires structured, authoritative writing.',
      page: 'content'
    },
    {
      title: 'AI Engine Optimisation',
      description: 'Optimise the AI models your own site uses alongside your answer engine strategy.',
      page: 'ai-engine-optimisation'
    }
  ]
};

/**
 * Training Service - Detailed Content
 */
export const trainingServiceDetailed: DetailedService = {
  id: 'training',
  slug: 'training',
  headline: 'WordPress Mastery for Your Team',
  tagline: 'Empower your editors, marketers, and developers with expert-led WordPress training — from block editing basics to advanced theme customisation.',
  description: 'Structured training programmes that turn your team into confident WordPress operators, reducing your dependency on external developers.',

  whyLightSpeed: {
    title: 'We Teach What We Build',
    description: 'Our trainers are the same senior developers who architect and ship WordPress projects every day. You get real-world workflows, not textbook theory.'
  },

  subServices: [
    {
      id: 'editor-training',
      title: 'Editor & Content Manager Training',
      description: 'Hands-on workshops covering the block editor, reusable patterns, media management, and publishing workflows.'
    },
    {
      id: 'developer-training',
      title: 'Developer Upskilling',
      description: 'Deep-dive sessions on block theme development, theme.json, custom blocks, and the WordPress REST API.'
    },
    {
      id: 'admin-training',
      title: 'Site Admin & Security Training',
      description: 'User management, plugin governance, backup procedures, and incident response for site administrators.'
    },
    {
      id: 'woocommerce-training',
      title: 'WooCommerce Operations Training',
      description: 'Product management, order processing, coupon strategy, and reporting dashboards for store operators.'
    }
  ],

  process: {
    title: 'Training Programme Workflow',
    description: 'A structured path from assessment to ongoing support.',
    steps: [
      {
        id: 'assess',
        number: 1,
        title: 'Skills Assessment',
        description: 'We evaluate your team\'s current WordPress proficiency and identify knowledge gaps to tailor the curriculum.'
      },
      {
        id: 'curriculum',
        number: 2,
        title: 'Custom Curriculum Design',
        description: 'Building a bespoke training plan with real examples from your own website and workflows.'
      },
      {
        id: 'deliver',
        number: 3,
        title: 'Live Workshop Delivery',
        description: 'Interactive sessions — remote or on-site — with screen-sharing, exercises, and Q&A.'
      },
      {
        id: 'resources',
        number: 4,
        title: 'Documentation & Recordings',
        description: 'Every session is recorded and supplemented with written guides your team can reference later.'
      },
      {
        id: 'followup',
        number: 5,
        title: 'Follow-Up Support',
        description: '30 days of Slack or email support after training so your team can ask questions as they apply new skills.'
      }
    ]
  },

  cta: {
    title: 'Upskill Your Team Today',
    description: 'Stop relying on external help for every content update. Our training programmes give your team the confidence to manage and grow your WordPress site independently.',
    buttonText: 'Book a Training Session',
    buttonPage: 'contact'
  },

  relatedServices: [
    {
      title: 'WordPress Support',
      description: 'Ongoing support for your team after training — we\'re always here to help.',
      page: 'support'
    },
    {
      title: 'WordPress Development',
      description: 'Let us build it, then train your team to manage it independently.',
      page: 'development'
    },
    {
      title: 'Content Strategy',
      description: 'Pair training with a content strategy to empower your editorial team.',
      page: 'content'
    }
  ]
};

/**
 * Hosting Service - Detailed Content
 */
export const hostingServiceDetailed: DetailedService = {
  id: 'hosting',
  slug: 'hosting',
  headline: 'Managed WordPress Hosting That Scales',
  tagline: 'Enterprise-grade infrastructure purpose-built for WordPress and WooCommerce — so your site is fast, secure, and always online.',
  description: 'Fully managed WordPress hosting with daily backups, proactive security, staging environments, and 24/7 monitoring.',

  whyLightSpeed: {
    title: 'Hosting by WordPress Experts',
    description: 'Unlike generic hosts, our infrastructure is tuned specifically for WordPress and WooCommerce performance. We handle server-level caching, PHP version management, and database optimisation so you never have to.'
  },

  subServices: [
    {
      id: 'managed-wp',
      title: 'Managed WordPress Hosting',
      description: 'Auto-updates, staging, daily backups, and server-level caching on optimised NGINX + PHP infrastructure.'
    },
    {
      id: 'woo-hosting',
      title: 'WooCommerce Hosting',
      description: 'High-availability hosting tuned for transactional workloads — object caching, queue workers, and PCI-ready environments.'
    },
    {
      id: 'migration',
      title: 'Zero-Downtime Migration',
      description: 'We migrate your existing site with DNS pre-warming and SSL provisioning so there is zero interruption to your visitors.'
    },
    {
      id: 'monitoring',
      title: '24/7 Uptime Monitoring',
      description: 'Real-time monitoring with automated alerting and sub-5-minute incident response from our on-call engineering team.'
    }
  ],

  process: {
    title: 'Hosting Onboarding Workflow',
    description: 'From sign-up to go-live in under 48 hours.',
    steps: [
      {
        id: 'provision',
        number: 1,
        title: 'Environment Provisioning',
        description: 'We spin up a production-ready server stack matched to your traffic profile and plugin requirements.'
      },
      {
        id: 'migrate',
        number: 2,
        title: 'Site Migration',
        description: 'Full database, files, and configuration migration with post-migration verification testing.'
      },
      {
        id: 'optimise',
        number: 3,
        title: 'Performance Tuning',
        description: 'Server-level caching, CDN configuration, image optimisation, and database query tuning.'
      },
      {
        id: 'dns',
        number: 4,
        title: 'DNS & SSL Cut-Over',
        description: 'Seamless DNS switch with Let\'s Encrypt or custom SSL certificate provisioning.'
      },
      {
        id: 'monitor',
        number: 5,
        title: 'Ongoing Monitoring',
        description: 'Continuous uptime, performance, and security monitoring with monthly infrastructure reports.'
      }
    ]
  },

  cta: {
    title: 'Move to Faster Hosting',
    description: 'Experience the difference purpose-built WordPress hosting makes. Free migration included with every plan.',
    buttonText: 'See Hosting Plans',
    buttonPage: 'hosting'
  },

  relatedServices: [
    {
      title: 'WordPress Security',
      description: 'Secure hosting is the foundation — add our dedicated security services for complete protection.',
      page: 'security'
    },
    {
      title: 'Performance Optimization',
      description: 'Combine hosting with performance tuning for the fastest possible WordPress experience.',
      page: 'performance'
    },
    {
      title: 'Ongoing Support',
      description: 'Managed hosting plus proactive support — the ultimate peace-of-mind package.',
      page: 'support'
    }
  ]
};

export const detailedServices: DetailedService[] = [
  securityServiceDetailed,
  seoServiceDetailed,
  performanceServiceDetailed,
  contentServiceDetailed,
  supportServiceDetailed,
  newsletterServiceDetailed,
  designServiceDetailed,
  developmentServiceDetailed,
  discoveryServiceDetailed,
  accessibilityServiceDetailed,
  aiEngineOptimisationDetailed,
  answerEngineOptimisationDetailed,
  trainingServiceDetailed,
  hostingServiceDetailed
];