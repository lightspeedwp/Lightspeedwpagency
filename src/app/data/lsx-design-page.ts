/**
 * LSX Design Page Data
 * 
 * Content for the LSX Design solution landing page.
 */

import { 
  Stack,
  Palette,
  Code,
  Lightning,
  Shield,
  DeviceMobile,
  TrendUp,
  GearSix,
  FileText,
  Globe,
  MagnifyingGlass,
  CheckCircle
} from '@phosphor-icons/react';

// LSX Design features
export const lsxDesignFeatures = [
  {
    id: 'block-themes',
    icon: Stack,
    title: 'Modern Block Themes',
    description: 'Built entirely with WordPress blocks and Full Site Editing (FSE) for maximum flexibility and user control.'
  },
  {
    id: 'design-system',
    icon: Palette,
    title: 'Comprehensive Design System',
    description: 'Consistent design tokens, patterns, and components ensure brand consistency across all pages.'
  },
  {
    id: 'performance',
    icon: Lightning,
    title: 'Performance Optimized',
    description: 'Lightning-fast load times with optimized code, minimal dependencies, and efficient asset loading.'
  },
  {
    id: 'accessibility',
    icon: Shield,
    title: 'WCAG 2.1 AA Compliant',
    description: 'Built with accessibility in mind, ensuring your site is usable by everyone, everywhere.'
  },
  {
    id: 'responsive',
    icon: DeviceMobile,
    title: 'Mobile-First Design',
    description: 'Fully responsive layouts that look perfect on all devices from phones to large desktop screens.'
  },
  {
    id: 'seo',
    icon: MagnifyingGlass,
    title: 'SEO Optimized',
    description: 'Built-in SEO best practices, schema markup, and semantic HTML for better search rankings.'
  }
];

// LSX Themes
export const lsxThemes = [
  {
    id: 'lsx-business',
    name: 'LSX Business',
    description: 'Professional business theme with service pages, team sections, and case studies.',
    features: ['Service templates', 'Team member profiles', 'Case study layouts', 'Contact forms'],
    category: 'Business'
  },
  {
    id: 'lsx-tour',
    name: 'LSX Tour Operator',
    description: 'Specialized theme for tour operators with booking systems and itinerary management.',
    features: ['Tour listings', 'Booking integration', 'Destination pages', 'Gallery layouts'],
    category: 'Travel'
  },
  {
    id: 'lsx-shop',
    name: 'LSX Shop',
    description: 'WooCommerce-ready theme optimized for online stores and ecommerce.',
    features: ['Product layouts', 'Cart optimization', 'Checkout pages', 'Shop templates'],
    category: 'Ecommerce'
  },
  {
    id: 'lsx-blog',
    name: 'LSX Blog',
    description: 'Content-focused theme perfect for bloggers, publishers, and content creators.',
    features: ['Article layouts', 'Author profiles', 'Newsletter signup', 'Reading progress'],
    category: 'Publishing'
  }
];

// Benefits
export const lsxBenefits = [
  {
    id: 'no-code',
    icon: Code,
    title: 'No Code Required',
    description: 'Edit everything visually through the WordPress block editor - no coding knowledge needed.'
  },
  {
    id: 'scalable',
    icon: TrendUp,
    title: 'Scalable Architecture',
    description: 'Built to grow with your business from startup to enterprise without performance loss.'
  },
  {
    id: 'customization',
    icon: GearSix,
    title: 'Easy Customization',
    description: 'Global styles, theme.json configuration, and pattern library for quick customization.'
  },
  {
    id: 'multilingual',
    icon: Globe,
    title: 'Multi-language Ready',
    description: 'Translation-ready with support for WPML, Polylang, and WordPress multilingual features.'
  }
];

// Development process
export const lsxProcessSteps = [
  {
    step: 1,
    title: 'Discovery & Strategy',
    description: 'We analyze your brand, audience, and goals to create a strategic design system.',
    icon: FileText
  },
  {
    step: 2,
    title: 'Design System',
    description: 'Create design tokens, color palettes, typography scales, and component library.',
    icon: Palette
  },
  {
    step: 3,
    title: 'Theme Development',
    description: 'Build custom block themes with FSE, theme.json, and block patterns.',
    icon: Code
  },
  {
    step: 4,
    title: 'Testing & Refinement',
    description: 'Comprehensive testing across devices, browsers, and accessibility standards.',
    icon: CheckCircle
  },
  {
    step: 5,
    title: 'Training & Support',
    description: 'User training, documentation, and ongoing support for your team.',
    icon: GearSix
  }
];

// FAQs
export const lsxFAQs = [
  {
    question: 'What is LSX Design and how is it different?',
    answer: 'LSX Design is our proprietary design system built specifically for WordPress block themes. Unlike traditional WordPress themes, LSX themes are built entirely with blocks and Full Site Editing (FSE), giving you complete control over every aspect of your site without touching code. Our design system ensures consistency, accessibility, and performance across all pages.'
  },
  {
    question: 'Do I need coding knowledge to use LSX themes?',
    answer: 'No! LSX themes are built with the WordPress block editor (Gutenberg) and Full Site Editing. Everything is visual and drag-and-drop. You can customize colors, fonts, layouts, and content through the WordPress interface without writing any code. We also provide comprehensive documentation and training.'
  },
  {
    question: 'Are LSX themes compatible with popular plugins?',
    answer: 'Yes! LSX themes are built following WordPress coding standards and are compatible with popular plugins including WooCommerce, Yoast SEO, Contact Form 7, Advanced Custom Fields, WPML, and more. We test compatibility with the most popular plugins and provide integration guides.'
  },
  {
    question: 'Can LSX themes be customized to match my brand?',
    answer: 'Absolutely! LSX themes are highly customizable through theme.json global styles. You can easily change colors, fonts, spacing, and layouts to match your brand identity. For more advanced customization, we offer custom development services to extend the theme to your exact specifications.'
  },
  {
    question: 'How do LSX themes perform compared to page builders?',
    answer: 'LSX themes significantly outperform page builders in speed and performance. Because they use native WordPress blocks instead of heavy page builder plugins, pages load 3-5x faster. This improves user experience, SEO rankings, and conversion rates. Plus, you\'re not locked into a specific page builder ecosystem.'
  },
  {
    question: 'Do you provide support and updates for LSX themes?',
    answer: 'Yes! All LSX themes include 6 months of support and lifetime updates. We ensure compatibility with new WordPress versions, provide security patches, and add new features based on user feedback. Extended support and custom development packages are also available.'
  }
];