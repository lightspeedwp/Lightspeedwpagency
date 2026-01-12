/**
 * Design Service Page Data
 * 
 * Real content for web design service page from LightSpeed WP Agency.
 * Real content extracted from https://lightspeedwp.agency
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/services/design
 * **Last Updated:** 2025-01-09
 * 
 * WordPress: Maps to templates/page-design-service.html
 */

import { 
  Palette,
  Eye,
  Layers,
  Smartphone,
  Users,
  Target,
  Zap,
  TrendingUp,
  Layout,
  Code,
  CheckCircle,
  Sparkles,
  Figma,
  PenTool,
  MonitorSmartphone
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Service Hero Content
 */
export const designServiceHero = {
  badge: {
    icon: Palette,
    text: 'Design Service'
  },
  title: 'Modern Web Design That Converts Visitors Into Customers',
  titleHighlight: 'Design', // Word to highlight
  tagline: 'Beautiful, user-friendly web design that aligns with your brand and drives business results',
  description: 'We create stunning WordPress websites with modern UI/UX design, responsive layouts, and conversion-focused elements. Our designs combine aesthetics with functionality to deliver exceptional user experiences that engage visitors and drive conversions.'
};

/**
 * Service Overview
 */
export const designServiceOverview = {
  title: 'Why Professional Web Design Matters',
  description: 'Your website is often the first impression customers have of your business. Professional web design builds credibility, communicates your brand effectively, and guides visitors toward taking action. Great design isn\'t just about looks—it\'s about creating experiences that convert.',
  stats: [
    {
      icon: Eye,
      value: '0.05s',
      label: 'First Impression',
      description: 'Time users judge your website'
    },
    {
      icon: TrendingUp,
      value: '94%',
      label: 'Design Impact',
      description: 'First impressions are design-related'
    },
    {
      icon: Target,
      value: '75%',
      label: 'Credibility',
      description: 'Users judge credibility by design'
    },
    {
      icon: Zap,
      value: '3.2x',
      label: 'Conversion Lift',
      description: 'Average increase with redesign'
    }
  ]
};

/**
 * Design Services
 */
export interface DesignService {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const designServices: DesignService[] = [
  {
    id: 'ui-ux',
    icon: Eye,
    title: 'UI/UX Design',
    description: 'User-centered design that combines beautiful interfaces with intuitive user experiences.',
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'Interactive mockups',
      'Usability testing',
      'User flow optimization',
      'Accessibility compliance'
    ]
  },
  {
    id: 'responsive',
    icon: MonitorSmartphone,
    title: 'Responsive Design',
    description: 'Mobile-first design that looks perfect on all devices, from smartphones to desktops.',
    features: [
      'Mobile-first approach',
      'Tablet optimization',
      'Desktop layouts',
      'Touch-friendly interfaces',
      'Cross-browser testing',
      'Performance optimization'
    ]
  },
  {
    id: 'branding',
    icon: Sparkles,
    title: 'Brand Design',
    description: 'Cohesive brand identity that reflects your business values and resonates with customers.',
    features: [
      'Logo design',
      'Color palette development',
      'Typography selection',
      'Brand guidelines',
      'Visual identity systems',
      'Marketing collateral'
    ]
  },
  {
    id: 'conversion',
    icon: Target,
    title: 'Conversion-Focused Design',
    description: 'Strategic design elements that guide visitors toward desired actions and conversions.',
    features: [
      'Clear call-to-actions',
      'Landing page design',
      'Lead capture forms',
      'Trust indicators',
      'Social proof placement',
      'A/B testing optimization'
    ]
  },
  {
    id: 'ecommerce',
    icon: Layout,
    title: 'E-commerce Design',
    description: 'Shopping experiences that make browsing easy and purchasing seamless.',
    features: [
      'Product page layouts',
      'Shopping cart design',
      'Checkout optimization',
      'Product filtering',
      'Customer reviews display',
      'Wishlist functionality'
    ]
  },
  {
    id: 'wordpress',
    icon: Code,
    title: 'WordPress Theme Design',
    description: 'Custom WordPress themes built with modern design principles and Block Editor support.',
    features: [
      'Block theme development',
      'Custom block patterns',
      'Template part design',
      'Style variations',
      'Global styles system',
      'Editor experience design'
    ]
  }
];

/**
 * Design Process
 */
export const designProcess = [
  {
    step: 1,
    title: 'Discovery & Research',
    description: 'We learn about your business, target audience, competitors, and design goals.',
    icon: Users,
    deliverables: [
      'Stakeholder interviews',
      'User research',
      'Competitive analysis',
      'Design brief',
      'Project requirements'
    ]
  },
  {
    step: 2,
    title: 'Strategy & Planning',
    description: 'Define the design direction, sitemap, user flows, and content strategy.',
    icon: Target,
    deliverables: [
      'Design strategy',
      'Site architecture',
      'User flow diagrams',
      'Content outline',
      'Mood boards'
    ]
  },
  {
    step: 3,
    title: 'Design & Prototype',
    description: 'Create wireframes, mockups, and interactive prototypes for review and feedback.',
    icon: PenTool,
    deliverables: [
      'Wireframes',
      'High-fidelity mockups',
      'Interactive prototypes',
      'Design system',
      'Style guide'
    ]
  },
  {
    step: 4,
    title: 'Development & Launch',
    description: 'Build the design in WordPress with pixel-perfect implementation and quality testing.',
    icon: Code,
    deliverables: [
      'WordPress theme',
      'Responsive templates',
      'Performance optimization',
      'Quality assurance',
      'Launch support'
    ]
  }
];

/**
 * Design Principles
 */
export const designPrinciples = [
  {
    icon: Eye,
    title: 'User-Centered',
    description: 'Designs based on user research, behaviors, and needs—not assumptions or trends.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First',
    description: 'Optimized for mobile devices where most users experience your website.'
  },
  {
    icon: Zap,
    title: 'Performance-Focused',
    description: 'Fast-loading designs with optimized images and efficient code.'
  },
  {
    icon: CheckCircle,
    title: 'Accessibility',
    description: 'WCAG compliant designs usable by people of all abilities.'
  },
  {
    icon: Target,
    title: 'Conversion-Driven',
    description: 'Strategic design elements that guide users toward desired actions.'
  },
  {
    icon: Layers,
    title: 'Scalable',
    description: 'Design systems that grow with your business and adapt to new needs.'
  }
];

/**
 * Design Tools & Technologies
 */
export const designTools = [
  {
    category: 'Design Tools',
    tools: ['Figma', 'Adobe XD', 'Sketch', 'Adobe Photoshop', 'Adobe Illustrator', 'InVision']
  },
  {
    category: 'Prototyping',
    tools: ['Figma Prototyping', 'Adobe XD', 'InVision', 'Principle', 'ProtoPie', 'Framer']
  },
  {
    category: 'Development',
    tools: ['WordPress', 'Block Themes', 'Tailwind CSS', 'React', 'HTML5/CSS3', 'JavaScript']
  },
  {
    category: 'Testing',
    tools: ['BrowserStack', 'Chrome DevTools', 'Lighthouse', 'GTmetrix', 'UsabilityHub', 'Hotjar']
  }
];

/**
 * Design Packages
 */
export const designPackages = [
  {
    name: 'Landing Page Design',
    price: '$2,000 - $4,000',
    description: 'Single page conversion-focused design',
    features: [
      'Custom landing page design',
      'Mobile responsive',
      'Hero section design',
      'Features/benefits sections',
      'Lead capture form',
      'CTA optimization',
      '1 week delivery'
    ],
    recommended: false
  },
  {
    name: 'Website Redesign',
    price: '$5,000 - $15,000',
    description: 'Complete website refresh with modern design',
    features: [
      'Full website redesign',
      'Up to 10 page designs',
      'Mobile & tablet designs',
      'WordPress theme development',
      'Design system creation',
      'Brand alignment',
      '3-4 weeks delivery'
    ],
    recommended: true
  },
  {
    name: 'Custom Web Design',
    price: '$15,000+',
    description: 'Fully custom design for complex websites',
    features: [
      'Unlimited page designs',
      'Custom WordPress theme',
      'Advanced interactions',
      'Design system & style guide',
      'Brand identity design',
      'Ongoing design support',
      '6-8 weeks delivery'
    ],
    recommended: false
  }
];

/**
 * Service FAQs
 */
export interface ServiceFAQ {
  question: string;
  answer: string;
}

export const designServiceFAQs: ServiceFAQ[] = [
  {
    question: 'What is included in your web design service?',
    answer: 'Our web design service includes: user research, wireframing, high-fidelity mockups, interactive prototypes, responsive design for all devices, WordPress theme development, design system creation, and launch support. We handle both the visual design and technical implementation.'
  },
  {
    question: 'How long does a web design project take?',
    answer: 'Timeline varies by project scope. A landing page takes 1-2 weeks, a website redesign (up to 10 pages) takes 3-4 weeks, and custom website design takes 6-8 weeks. We provide detailed timelines during the discovery phase and keep you updated throughout the project.'
  },
  {
    question: 'Do you design for mobile devices?',
    answer: 'Yes! All our designs are mobile-first and fully responsive. We design for smartphones, tablets, and desktops to ensure your website looks perfect and functions flawlessly on any device. Mobile optimization is included in every design package.'
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Absolutely! Website redesigns are one of our specialties. We\'ll analyze your current site, identify improvement opportunities, and create a modern design that better serves your users and business goals while maintaining your brand identity.'
  },
  {
    question: 'Will my website be accessible (WCAG compliant)?',
    answer: 'Yes, accessibility is built into our design process. We follow WCAG 2.1 AA guidelines for color contrast, keyboard navigation, screen reader compatibility, and semantic HTML. Accessible design ensures your website is usable by everyone.'
  },
  {
    question: 'Do you provide design files and style guides?',
    answer: 'Yes! You\'ll receive Figma design files, exported assets, and a comprehensive style guide including your color palette, typography, spacing system, and component library. You own all design files and can use them for future projects.'
  },
  {
    question: 'Can you match my existing brand?',
    answer: 'Definitely! We can design within your existing brand guidelines or help refine and modernize your brand identity. If you don\'t have brand guidelines, we can create a cohesive visual identity as part of the design process.'
  },
  {
    question: 'What if I need changes after the design is complete?',
    answer: 'We include 2 rounds of revisions in all packages. After launch, we offer ongoing design support on a monthly retainer or hourly basis for updates, new pages, or design enhancements. Most clients choose our support plans for continued assistance.'
  }
];

/**
 * Service CTA
 */
export const designServiceCTA = {
  title: 'Ready to Create a Website Your Customers Love?',
  description: 'Let\'s design a beautiful, high-converting website that represents your brand and achieves your business goals.',
  buttons: [
    {
      text: 'Start Your Project',
      page: 'contact',
      variant: 'default'
    },
    {
      text: 'View Portfolio',
      page: 'portfolio',
      variant: 'outline'
    }
  ]
};

/**
 * Helper Functions
 */

/**
 * Get design service data
 */
export function getDesignServiceData() {
  return {
    hero: designServiceHero,
    overview: designServiceOverview,
    services: designServices,
    process: designProcess,
    principles: designPrinciples,
    tools: designTools,
    packages: designPackages,
    faqs: designServiceFAQs,
    cta: designServiceCTA
  };
}
