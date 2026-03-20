/**
 * Figma Make Prototypes Data
 * 
 * Comprehensive showcase of 11 AI-generated, AI-strategized prototypes
 * built over 3+ months demonstrating Figma Make capabilities.
 * 
 * Categories:
 * - Tour Operators (4 sites)
 * - eCommerce (4 sites)
 * - Digital Publishing (1 site)
 * - Agency Sites (2 sites)
 */

import { ReactNode } from 'react';

export interface PrototypeStats {
  icon: string; // Phosphor icon name
  value: string;
  label: string;
}

export interface PrototypeFeature {
  icon: string; // Phosphor icon name
  title: string;
  description: string;
}

export interface FigmaPrototype {
  id: string;
  title: string;
  slug: string;
  category: 'tour-operator' | 'ecommerce' | 'publishing' | 'agency';
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  
  // Visual identity
  primaryColor: string; // CSS variable or hex
  accentColor: string;
  webglGraphic?: string; // WebGL component name
  
  // Links
  figmaUrl: string;
  liveUrl: string;
  
  // Metadata
  stats: PrototypeStats[];
  features: PrototypeFeature[];
  technologies: string[];
  tags: string[];
  
  // Content blocks
  keyHighlights: string[];
  aiStrategy: string;
  designPhilosophy: string;
}

export const figmaPrototypes: FigmaPrototype[] = [
  {
    id: 'tour-operator-plugin',
    title: 'Tour Operator Plugin',
    slug: 'tour-operator-plugin',
    category: 'tour-operator',
    tagline: 'Complete travel platform with booking engine',
    description: 'This website is a comprehensive tour operator platform designed to showcase travel experiences, inspire customers, and support the full booking journey. It allows visitors to explore curated tours, destinations, accommodation, travel specials, reviews, guides, and blog content, while also providing tools for quote requests, trip planning, bookings, payments, and customer account management.',
    challenge: 'Tour operators need a complete digital platform that combines marketing, content, and booking functionality in one cohesive experience.',
    solution: 'Built a full-featured tour operator platform with integrated booking engine, quote requests, customer accounts, and comprehensive content management for tours, destinations, and accommodations.',
    outcome: 'A production-ready platform that serves as both a travel marketing website and a functional booking solution for tour operators.',
    
    primaryColor: 'var(--primary-500)',
    accentColor: 'var(--accent-cyan)',
    webglGraphic: 'RippleWave',
    
    figmaUrl: 'https://www.figma.com/make/g6LTZA6Wx51pxMjWEcryGO/Tour-Operator-Plugin',
    liveUrl: 'https://to-plugin.figma.site/',
    
    stats: [
      { icon: 'Layout', value: '42+', label: 'Pages built' },
      { icon: 'Package', value: '80+', label: 'Components' },
      { icon: 'Path', value: '35+', label: 'Routes' },
      { icon: 'Lightning', value: '100%', label: 'AI generated' },
    ],
    
    features: [
      {
        icon: 'Compass',
        title: 'Tour discovery',
        description: 'Browse curated tours with detailed itineraries, pricing, and availability'
      },
      {
        icon: 'MapPin',
        title: 'Destination guides',
        description: 'Explore destinations with comprehensive travel guides and recommendations'
      },
      {
        icon: 'CalendarCheck',
        title: 'Booking engine',
        description: 'Complete booking flow with quote requests, trip planning, and payments'
      },
      {
        icon: 'User',
        title: 'Customer accounts',
        description: 'Manage bookings, view trip history, and save favorite destinations'
      },
    ],
    
    technologies: ['React', 'TypeScript', 'React Router', 'Figma Make', 'AI Strategy'],
    tags: ['Travel', 'Booking System', 'Tour Operator', 'Full Platform', 'E-commerce'],
    
    keyHighlights: [
      'Complete booking journey from discovery to payment',
      'Integrated quote request and trip planning tools',
      'Customer account management and booking history',
      'Content-rich destination and tour pages',
      'Reviews, testimonials, and social proof integration',
    ],
    
    aiStrategy: 'AI-powered content generation created compelling tour descriptions, destination guides, and travel blog content. Strategic planning focused on conversion optimization through trust-building elements and clear booking CTAs.',
    
    designPhilosophy: 'Clean, inspiring design that prioritizes high-quality imagery and easy navigation. The booking flow is streamlined to reduce friction while maintaining transparency in pricing and availability.',
  },
  
  {
    id: 'impact-travel',
    title: 'Impact Travel',
    slug: 'impact-travel',
    category: 'tour-operator',
    tagline: 'Reusable framework for sustainable travel businesses',
    description: 'This site is a full-featured tour operator website system built as a reusable platform for travel businesses. It combines a complete travel website experience, featuring tours, destinations, accommodation, search, content, bookings, and customer accounts, with a structured design system and component-based architecture.',
    challenge: 'Create a scalable, reusable platform that can be customized for different sustainable travel operators while maintaining consistent quality.',
    solution: 'Developed a comprehensive framework with modular components, structured design system, and flexible content architecture that can be deployed and customized for multiple travel brands.',
    outcome: 'A production-ready foundation that accelerates travel website deployment from months to weeks while ensuring design consistency and scalability.',
    
    primaryColor: 'var(--success-500)',
    accentColor: 'var(--accent-green)',
    webglGraphic: 'ParticleField',
    
    figmaUrl: 'https://www.figma.com/make/MxRnoElmAJQKmFQLdQksi5/Impact-Travel',
    liveUrl: 'https://impact-travel.figma.site/',
    
    stats: [
      { icon: 'Layout', value: '50+', label: 'Pages built' },
      { icon: 'Package', value: '120+', label: 'Components' },
      { icon: 'Palette', value: '100%', label: 'Design system' },
      { icon: 'Recycle', value: 'Infinite', label: 'Reusability' },
    ],
    
    features: [
      {
        icon: 'TreeStructure',
        title: 'Design system',
        description: 'Structured component library with consistent tokens and patterns'
      },
      {
        icon: 'CopySimple',
        title: 'Reusable framework',
        description: 'Modular architecture for rapid deployment across multiple brands'
      },
      {
        icon: 'Leaf',
        title: 'Sustainability focus',
        description: 'Content and design emphasizing eco-conscious travel experiences'
      },
      {
        icon: 'MagnifyingGlass',
        title: 'Advanced search',
        description: 'Comprehensive filtering for tours, destinations, and accommodations'
      },
    ],
    
    technologies: ['React', 'TypeScript', 'Design System', 'Component Library', 'Figma Make'],
    tags: ['Travel', 'Framework', 'Sustainable Tourism', 'Design System', 'Scalable'],
    
    keyHighlights: [
      'Reusable platform for multiple travel brands',
      'Comprehensive design system and component library',
      'Focus on sustainable and impact-driven travel',
      'Advanced search and filtering capabilities',
      'Complete booking and account management',
    ],
    
    aiStrategy: 'AI strategized the entire information architecture, component hierarchy, and content taxonomy to ensure maximum reusability. Generated comprehensive content that could be easily adapted for different sustainable travel brands.',
    
    designPhilosophy: 'System-first approach prioritizing modularity and scalability. Every component is designed to be flexible, themeable, and reusable across different travel operator brands while maintaining visual consistency.',
  },
  
  {
    id: 'organic-tours',
    title: 'Organic Tours',
    slug: 'organic-tours',
    category: 'tour-operator',
    tagline: 'Eco-conscious travel brand with nature-focused experiences',
    description: 'This website is a branded tour operator site for "Organic Tours," designed to showcase eco-conscious travel experiences and inspire users to explore nature-focused destinations. It allows visitors to browse curated tours, destinations, and accommodation, view detailed itineraries, read travel content, and submit booking or enquiry requests.',
    challenge: 'Create a distinctive brand identity for eco-conscious travel while maintaining clarity in tour presentation and booking conversion.',
    solution: 'Developed a nature-inspired design language with earth tones, organic shapes, and compelling storytelling that positions Organic Tours as a trusted sustainable travel operator.',
    outcome: 'A branded website that effectively communicates environmental values while guiding users smoothly from inspiration to enquiry or booking.',
    
    primaryColor: 'var(--success-600)',
    accentColor: 'var(--accent-yellow)',
    webglGraphic: 'FloatingShapes',
    
    figmaUrl: 'https://www.figma.com/make/AW7Ru6kgErk0MZVC7P8SHR/Organic-Tours',
    liveUrl: 'https://organic-tours.figma.site/',
    
    stats: [
      { icon: 'Layout', value: '32+', label: 'Pages built' },
      { icon: 'Package', value: '65+', label: 'Components' },
      { icon: 'Leaf', value: '100%', label: 'Eco-focused' },
      { icon: 'Sparkle', value: 'Premium', label: 'Brand quality' },
    ],
    
    features: [
      {
        icon: 'Mountains',
        title: 'Nature experiences',
        description: 'Curated eco-conscious tours highlighting natural beauty and conservation'
      },
      {
        icon: 'Article',
        title: 'Travel content',
        description: 'Educational blog content on sustainable travel and environmental impact'
      },
      {
        icon: 'EnvelopeSimple',
        title: 'Enquiry system',
        description: 'Simple booking requests and quote submissions for personalized service'
      },
      {
        icon: 'Certificate',
        title: 'Trust building',
        description: 'Certifications, reviews, and social proof emphasizing reliability'
      },
    ],
    
    technologies: ['React', 'TypeScript', 'Brand Design', 'Content Strategy', 'Figma Make'],
    tags: ['Travel', 'Eco-Tourism', 'Brand Identity', 'Nature', 'Sustainable'],
    
    keyHighlights: [
      'Strong brand identity focused on eco-conscious travel',
      'Nature-inspired design with organic visual elements',
      'Comprehensive destination and tour content',
      'Simplified enquiry and booking request flow',
      'Educational content on sustainable tourism',
    ],
    
    aiStrategy: 'AI developed the brand voice, messaging hierarchy, and content strategy to position Organic Tours as authentic and trustworthy. Generated compelling tour descriptions that emphasize environmental stewardship and unique nature experiences.',
    
    designPhilosophy: 'Brand-first approach using nature-inspired colors, organic shapes, and authentic photography. The design balances emotional appeal with practical functionality, guiding users from inspiration to action.',
  },
  
  {
    id: 'tour-operator-demo',
    title: 'Tour Operator Demo',
    slug: 'tour-operator-demo',
    category: 'tour-operator',
    tagline: 'Premium luxury safari and expedition platform',
    description: 'This website is a premium tour operator platform designed for luxury safari and expedition travel. It allows visitors to explore curated tours, destinations, accommodation, travel guides, reviews, and editorial content, while also supporting the full customer journey through advanced search, trip planning, quote requests, bookings, payments, and account management.',
    challenge: 'Create a premium experience that appeals to luxury travelers while providing comprehensive booking and trip planning functionality.',
    solution: 'Built a sophisticated platform combining aspirational storytelling, high-end visual design, and advanced booking tools that cater to discerning safari and expedition travelers.',
    outcome: 'A complete premium travel website that successfully combines brand storytelling, trust-building, and practical booking tools in one seamless experience.',
    
    primaryColor: 'var(--warning-600)',
    accentColor: 'var(--accent-orange)',
    webglGraphic: 'GradientOrbs',
    
    figmaUrl: 'https://www.figma.com/make/flWmIJxOi5uqlsCRCYZvoo/Tour-Operator-Demo',
    liveUrl: 'https://tour-operator.figma.site/',
    
    stats: [
      { icon: 'Layout', value: '48+', label: 'Pages built' },
      { icon: 'Package', value: '95+', label: 'Components' },
      { icon: 'Crown', value: 'Luxury', label: 'Market segment' },
      { icon: 'Binoculars', value: 'Safari', label: 'Specialization' },
    ],
    
    features: [
      {
        icon: 'Tent',
        title: 'Safari experiences',
        description: 'Curated luxury safari tours with exclusive lodges and experiences'
      },
      {
        icon: 'MagnifyingGlass',
        title: 'Advanced search',
        description: 'Sophisticated filtering for destinations, activities, and accommodations'
      },
      {
        icon: 'Notepad',
        title: 'Trip planning',
        description: 'Interactive planning tools for creating custom safari itineraries'
      },
      {
        icon: 'CreditCard',
        title: 'Full booking flow',
        description: 'Complete payment processing and account management system'
      },
    ],
    
    technologies: ['React', 'TypeScript', 'Advanced UI', 'Payment Integration', 'Figma Make'],
    tags: ['Travel', 'Luxury', 'Safari', 'Expeditions', 'Premium'],
    
    keyHighlights: [
      'Premium positioning for luxury safari market',
      'Advanced search and filtering capabilities',
      'Interactive trip planning and itinerary builder',
      'Complete booking flow with payment processing',
      'Editorial content and travel guides',
    ],
    
    aiStrategy: 'AI strategized content hierarchy and messaging to appeal to luxury travelers. Generated sophisticated copy that balances aspiration with practical information, emphasizing exclusivity, expertise, and personalized service.',
    
    designPhilosophy: 'Luxury-focused design with sophisticated typography, premium imagery, and refined color palette. Every element reinforces the high-end positioning while maintaining usability and conversion focus.',
  },
  
  {
    id: 'lsx-design',
    title: 'LSX Design',
    slug: 'lsx-design',
    category: 'agency',
    tagline: 'WordPress design system showcase and agency platform',
    description: 'This website is a comprehensive digital platform for LSX Design, built to showcase its WordPress and WooCommerce services, products, and technical design system capabilities. It combines a professional agency website with a live component and template showcase, allowing visitors to explore services, solutions, portfolio work, resources, pricing, and supporting content.',
    challenge: 'Create an agency website that not only markets services but also demonstrates technical expertise through a live design system showcase.',
    solution: 'Built a dual-purpose platform serving as both a lead-generation agency site and a working demonstration of WordPress design system architecture, accessibility standards, and component patterns.',
    outcome: 'A production-ready platform that markets LSX Design expertise while providing tangible proof of capabilities through live component examples and design system documentation.',
    
    primaryColor: 'var(--primary-500)',
    accentColor: 'var(--accent-purple)',
    webglGraphic: 'NeuralNetwork',
    
    figmaUrl: 'https://www.figma.com/make/LvZgSovRYtXo4Tc8hoAKzl/LSX-Design-Prototype',
    liveUrl: 'https://lsx.figma.site/',
    
    stats: [
      { icon: 'Layout', value: '60+', label: 'Pages built' },
      { icon: 'Package', value: '150+', label: 'Components' },
      { icon: 'PaintBrush', value: '100%', label: 'Design system' },
      { icon: 'Code', value: 'WCAG AA', label: 'Accessibility' },
    ],
    
    features: [
      {
        icon: 'Wrench',
        title: 'Services showcase',
        description: 'Comprehensive presentation of WordPress and WooCommerce capabilities'
      },
      {
        icon: 'Palette',
        title: 'Design system',
        description: 'Live component library demonstrating tokens, patterns, and architecture'
      },
      {
        icon: 'Briefcase',
        title: 'Portfolio',
        description: 'Case studies and project showcases highlighting expertise'
      },
      {
        icon: 'BookOpen',
        title: 'Resources',
        description: 'Knowledge base, documentation, and educational content'
      },
    ],
    
    technologies: ['React', 'TypeScript', 'Design Tokens', 'WordPress Integration', 'Figma Make'],
    tags: ['Agency', 'Design System', 'WordPress', 'WooCommerce', 'Technical'],
    
    keyHighlights: [
      'Dual-purpose agency and design system showcase',
      'Live component library with working examples',
      'WCAG-compliant accessibility standards',
      'Comprehensive services and solutions content',
      'Technical documentation and resources',
    ],
    
    aiStrategy: 'AI strategized content architecture to balance marketing messaging with technical depth. Generated comprehensive service descriptions, case studies, and technical documentation that positions LSX as WordPress experts.',
    
    designPhilosophy: 'System-first design that serves as its own proof of concept. Every component is production-ready and demonstrates best practices in WordPress development, accessibility, and scalable architecture.',
  },
  
  {
    id: 'bento-news',
    title: 'Bento News',
    slug: 'bento-news',
    category: 'publishing',
    tagline: 'Full-featured digital newspaper and media platform',
    description: 'This website is a full-featured digital newspaper platform for Bento News, designed to publish South African news, deliver digital editions, and support the full reader journey from casual browsing to paid membership. It allows users to explore breaking news, category-based content, articles, author pages, newsletters, e-editions, events, and community submissions.',
    challenge: 'Build a comprehensive digital publishing platform that supports modern news consumption, reader engagement, and multiple revenue streams.',
    solution: 'Created a complete media ecosystem with news publishing, digital editions, memberships, ecommerce, advertising, and community features all integrated into one cohesive platform.',
    outcome: 'A production-ready digital newspaper platform that functions as both a modern news publication and a complete media business solution for monetization and reader engagement.',
    
    primaryColor: 'var(--error-500)',
    accentColor: 'var(--accent-red)',
    webglGraphic: 'GeometricGrid',
    
    figmaUrl: 'https://www.figma.com/make/hzbXId7NRfK5SqygUp4luz/Bento-News',
    liveUrl: 'https://bento-news.figma.site/',
    
    stats: [
      { icon: 'Layout', value: '55+', label: 'Pages built' },
      { icon: 'Package', value: '110+', label: 'Components' },
      { icon: 'Newspaper', value: 'Full', label: 'Publishing CMS' },
      { icon: 'Users', value: 'Members', label: 'Subscription model' },
    ],
    
    features: [
      {
        icon: 'Article',
        title: 'News publishing',
        description: 'Complete CMS for breaking news, articles, and category-based content'
      },
      {
        icon: 'FileText',
        title: 'Digital editions',
        description: 'E-editions and newsletter distribution for subscriber engagement'
      },
      {
        icon: 'Crown',
        title: 'Membership tiers',
        description: 'Subscription plans with account management and member benefits'
      },
      {
        icon: 'Megaphone',
        title: 'Advertising',
        description: 'Ad management and sponsorship opportunities for revenue generation'
      },
    ],
    
    technologies: ['React', 'TypeScript', 'CMS Integration', 'Membership System', 'Figma Make'],
    tags: ['Publishing', 'News', 'Media', 'Subscriptions', 'eCommerce'],
    
    keyHighlights: [
      'Complete digital newspaper publishing platform',
      'Multi-tier membership and subscription system',
      'Newsletter and digital edition distribution',
      'Community submissions and event listings',
      'Advertising and sponsorship integration',
    ],
    
    aiStrategy: 'AI planned the entire information architecture for a modern news publication, balancing editorial content, reader engagement, and monetization. Generated sample news content, author bios, and membership tier descriptions.',
    
    designPhilosophy: 'Reader-first design optimized for content discovery and engagement. Clean typography hierarchy, efficient navigation, and strategic CTAs for membership conversion throughout the experience.',
  },
  
  {
    id: 'retro-shop',
    title: 'Retro Shop',
    slug: 'retro-shop',
    category: 'ecommerce',
    tagline: 'Bold nostalgic eCommerce with distinctive brand identity',
    description: 'This website is a retro-themed WooCommerce eCommerce store designed to showcase and sell products through a bold, nostalgic visual experience. It provides a complete online shopping journey, including product browsing, detailed product pages, cart and checkout flows, and account functionality, all styled with a distinctive retro aesthetic.',
    challenge: 'Create a memorable eCommerce experience that stands out through strong brand identity while maintaining conversion-focused functionality.',
    solution: 'Developed a retro-themed online store with bold colors, vintage typography, and nostalgic design elements that create an immersive shopping experience without sacrificing usability.',
    outcome: 'A production-ready WooCommerce store that combines standard eCommerce functionality with distinctive brand personality to create a memorable and conversion-optimized experience.',
    
    primaryColor: 'var(--accent-pink)',
    accentColor: 'var(--accent-cyan)',
    webglGraphic: 'ColorWaves',
    
    figmaUrl: 'https://www.figma.com/make/CfA4GyJoSgwocv1h4ruVmf/Retro-Shop',
    liveUrl: 'https://retro-shop.figma.site/',
    
    stats: [
      { icon: 'Layout', value: '28+', label: 'Pages built' },
      { icon: 'Package', value: '70+', label: 'Components' },
      { icon: 'ShoppingCart', value: 'Full', label: 'eCommerce flow' },
      { icon: 'Palette', value: 'Retro', label: 'Brand aesthetic' },
    ],
    
    features: [
      {
        icon: 'ShoppingBag',
        title: 'Product catalog',
        description: 'Comprehensive browsing with search, filters, and category navigation'
      },
      {
        icon: 'Info',
        title: 'Product pages',
        description: 'Detailed product information with galleries, specs, and reviews'
      },
      {
        icon: 'CreditCard',
        title: 'Checkout flow',
        description: 'Streamlined cart and checkout with payment processing'
      },
      {
        icon: 'User',
        title: 'Account system',
        description: 'Customer accounts with order history and wishlist functionality'
      },
    ],
    
    technologies: ['React', 'TypeScript', 'WooCommerce', 'Brand Design', 'Figma Make'],
    tags: ['eCommerce', 'WooCommerce', 'Retro Design', 'Brand Identity', 'Online Store'],
    
    keyHighlights: [
      'Bold retro aesthetic with nostalgic visual elements',
      'Complete WooCommerce shopping experience',
      'Distinctive brand identity that stands out',
      'Conversion-optimized checkout flow',
      'Customer account and wishlist features',
    ],
    
    aiStrategy: 'AI developed the retro brand voice and product copy that balances nostalgia with modern eCommerce best practices. Generated compelling product descriptions and marketing copy aligned with vintage aesthetic.',
    
    designPhilosophy: 'Brand-driven design that uses bold colors, vintage typography, and retro UI elements to create emotional connection. Every touchpoint reinforces the nostalgic experience while maintaining modern eCommerce functionality.',
  },
  
  {
    id: 'constructivism-shop',
    title: 'Constructivism Shop',
    slug: 'constructivism-shop',
    category: 'ecommerce',
    tagline: 'Design-led avant-garde eCommerce with editorial content',
    description: 'This website is a bold, design-led WooCommerce eCommerce store for Constructivism Shop, built to sell curated furniture, decor, art, books, and lifestyle products inspired by Constructivist and avant-garde design. It combines a full online shopping experience with editorial content, brand storytelling, and manifesto-driven messaging that explain the philosophy behind the products.',
    challenge: 'Create an eCommerce platform that educates customers about design philosophy while driving product sales through compelling storytelling.',
    solution: 'Built a hybrid platform combining online store functionality with editorial content, manifestos, and educational resources that position products within a broader design movement context.',
    outcome: 'A production-ready eCommerce site that functions as both a modern online store and a highly branded design destination centered on bold, functional, and historically inspired design.',
    
    primaryColor: 'var(--error-600)',
    accentColor: 'var(--accent-yellow)',
    webglGraphic: 'AngularShapes',
    
    figmaUrl: 'https://www.figma.com/make/BNtX3HqE4ApY0EfHyY08uA/Constructivism-Shop',
    liveUrl: 'https://constructivism-shop.figma.site/',
    
    stats: [
      { icon: 'Layout', value: '38+', label: 'Pages built' },
      { icon: 'Package', value: '85+', label: 'Components' },
      { icon: 'ShoppingCart', value: 'Advanced', label: 'eCommerce features' },
      { icon: 'BookOpen', value: 'Editorial', label: 'Content depth' },
    ],
    
    features: [
      {
        icon: 'Armchair',
        title: 'Curated products',
        description: 'Design-led furniture, decor, art, and lifestyle products with context'
      },
      {
        icon: 'Article',
        title: 'Editorial content',
        description: 'Manifestos, design philosophy, and educational resources'
      },
      {
        icon: 'Heart',
        title: 'Wishlist & compare',
        description: 'Advanced shopping tools including comparison and saved items'
      },
      {
        icon: 'Package',
        title: 'Collections',
        description: 'Curated product collections organized by design movement themes'
      },
    ],
    
    technologies: ['React', 'TypeScript', 'WooCommerce', 'Content Strategy', 'Figma Make'],
    tags: ['eCommerce', 'Design', 'Avant-Garde', 'Editorial', 'Brand Story'],
    
    keyHighlights: [
      'Design-first eCommerce with strong brand philosophy',
      'Editorial content explaining product design context',
      'Advanced shopping features (wishlist, comparison)',
      'Curated collections organized by design movements',
      'Manifesto-driven messaging and storytelling',
    ],
    
    aiStrategy: 'AI crafted sophisticated content that educates customers about Constructivist design principles while driving product interest. Generated manifesto content, product stories, and educational resources that position the shop as a design authority.',
    
    designPhilosophy: 'Content-rich design that balances commerce with education. Bold, geometric layouts inspired by Constructivist principles create visual impact while comprehensive product context builds appreciation and justifies premium pricing.',
  },
  
  {
    id: 'handcrafted-wines',
    title: 'Handcrafted Wines',
    slug: 'handcrafted-wines',
    category: 'ecommerce',
    tagline: 'Boutique wine estate with retail and hospitality',
    description: 'This website is a full-featured digital platform for Handcrafted Wines, a family-owned boutique wine estate in Paarl, designed to combine brand storytelling, direct-to-consumer retail, farm tourism, and hospitality in one experience. It allows visitors to explore the estate\'s wines, craft spirits, farmstead cheese, and gift sets, shop online through a complete eCommerce flow, learn about the family\'s history and sustainability practices, join the wine club, and book tastings, tours, and private events.',
    challenge: 'Create a multi-faceted platform serving retail, tourism, membership, and event booking needs for a family wine estate.',
    solution: 'Developed an integrated digital experience combining eCommerce, content storytelling, wine club membership, and hospitality booking all in one cohesive platform.',
    outcome: 'A complete estate platform serving as both a premium brand website and a comprehensive customer system for sales, visits, memberships, and long-term engagement.',
    
    primaryColor: 'var(--accent-purple)',
    accentColor: 'var(--accent-gold)',
    webglGraphic: 'LiquidGradient',
    
    figmaUrl: 'https://www.figma.com/make/wvxIALM2KoZdr7qSVG4Lt9/Handcrafted-Wines',
    liveUrl: 'https://handcrafted-wines.figma.site/',
    
    stats: [
      { icon: 'Layout', value: '45+', label: 'Pages built' },
      { icon: 'Package', value: '90+', label: 'Components' },
      { icon: 'Wine', value: 'Estate', label: 'Wine tourism' },
      { icon: 'CalendarCheck', value: 'Booking', label: 'Event system' },
    ],
    
    features: [
      {
        icon: 'Wine',
        title: 'Product catalog',
        description: 'Wines, spirits, cheese, and gift sets with detailed tasting notes'
      },
      {
        icon: 'Storefront',
        title: 'Online store',
        description: 'Complete eCommerce flow for direct-to-consumer sales'
      },
      {
        icon: 'Users',
        title: 'Wine club',
        description: 'Membership program with exclusive benefits and allocations'
      },
      {
        icon: 'Calendar',
        title: 'Event booking',
        description: 'Tastings, tours, and private event reservations'
      },
    ],
    
    technologies: ['React', 'TypeScript', 'WooCommerce', 'Booking System', 'Figma Make'],
    tags: ['eCommerce', 'Wine', 'Hospitality', 'Tourism', 'Membership'],
    
    keyHighlights: [
      'Multi-revenue platform (retail, tourism, membership)',
      'Wine club with exclusive member benefits',
      'Event booking for tastings and private functions',
      'Family story and sustainability storytelling',
      'Complete eCommerce with gift set builder',
    ],
    
    aiStrategy: 'AI crafted sophisticated wine descriptions, tasting notes, and estate storytelling that appeals to wine enthusiasts. Strategized multiple revenue streams integration to maximize estate engagement and customer lifetime value.',
    
    designPhilosophy: 'Elegant, premium design reflecting boutique wine estate quality. Rich imagery, sophisticated typography, and warm color palette create aspirational experience while clear navigation serves multiple customer journey types (shopping, visiting, joining).',
  },
  
  {
    id: 'lightspeed-wp-agency',
    title: 'Lightspeed WP Agency',
    slug: 'lightspeed-wp-agency',
    category: 'agency',
    tagline: 'WordPress agency showcasing design systems and expertise',
    description: 'This website is a full-featured digital platform for LightSpeed WP Agency, built to market its WordPress and WooCommerce services while showcasing its structured design-system and publishing expertise. It allows visitors to explore services, industry-specific solutions, portfolio work, insights, testimonials, team and process content, pricing, and consultation flows.',
    challenge: 'Create an agency website that demonstrates WordPress expertise through both marketing content and live technical demonstrations.',
    solution: 'Built a comprehensive platform combining service marketing, portfolio showcases, and technical proof points through accessibility standards, performance metrics, and design system documentation.',
    outcome: 'A production-ready platform serving as both a lead-generation website and proof-driven showcase of the systems and methods LightSpeed uses to deliver modern, high-performance digital platforms.',
    
    primaryColor: 'var(--primary-600)',
    accentColor: 'var(--neon-cyan)',
    webglGraphic: 'NeonGrid',
    
    figmaUrl: 'https://www.figma.com/make/xAYHN3wsPM4TR2JppUr8sp/LightSpeedWP.Agency',
    liveUrl: 'https://lightspeedwp.figma.site/',
    
    stats: [
      { icon: 'Layout', value: '65+', label: 'Pages built' },
      { icon: 'Package', value: '140+', label: 'Components' },
      { icon: 'Rocket', value: 'Performance', label: 'Optimization focus' },
      { icon: 'Accessibility', value: 'WCAG', label: 'Standards compliant' },
    ],
    
    features: [
      {
        icon: 'Briefcase',
        title: 'Services & solutions',
        description: 'Comprehensive WordPress and WooCommerce service offerings'
      },
      {
        icon: 'FolderOpen',
        title: 'Portfolio',
        description: 'Case studies demonstrating expertise across industries'
      },
      {
        icon: 'Gauge',
        title: 'Performance',
        description: 'Technical proof points in speed, accessibility, and scalability'
      },
      {
        icon: 'Lightbulb',
        title: 'Insights',
        description: 'Thought leadership content on WordPress best practices'
      },
    ],
    
    technologies: ['React', 'TypeScript', 'WordPress Integration', 'Performance Optimization', 'Figma Make'],
    tags: ['Agency', 'WordPress', 'WooCommerce', 'Performance', 'Accessibility'],
    
    keyHighlights: [
      'Comprehensive WordPress and WooCommerce services',
      'Industry-specific solution pages',
      'Performance and accessibility focus',
      'AI integration and migration expertise',
      'Design system and scalable architecture',
    ],
    
    aiStrategy: 'AI strategized comprehensive service descriptions, case studies, and technical content that positions LightSpeed as WordPress experts. Generated industry-specific solution content and thought leadership articles demonstrating depth of expertise.',
    
    designPhilosophy: 'Technical credibility through design. Every element demonstrates WordPress best practices while marketing copy balances technical depth with business value. Design system serves as living proof of capabilities.',
  },
  
  {
    id: 'woo-shop',
    title: 'Woo Shop',
    slug: 'woo-shop',
    category: 'ecommerce',
    tagline: 'Full-featured WooCommerce platform with advanced features',
    description: 'This website is a full-featured WooCommerce storefront platform for Woo Shop, designed to combine bold brand presentation with a complete online shopping experience. It allows users to browse products, search and filter the catalog, save items, compare options, complete purchases through cart and checkout flows, and manage their accounts, orders, wishlist, and loyalty benefits.',
    challenge: 'Create a comprehensive eCommerce platform demonstrating the full capabilities of WooCommerce including memberships, subscriptions, and loyalty features.',
    solution: 'Built a feature-complete WooCommerce showcase with advanced shopping tools, membership tiers, subscription products, promotional systems, and comprehensive customer support features.',
    outcome: 'A tourism-focused WooCommerce platform with tour booking, seasonal packages, secure payments, mobile-optimized search, and customer reviews system.',
    
    primaryColor: 'var(--wp--preset--color--neon-lime)',
    accentColor: 'var(--wp--preset--color--neon-yellow)',
    webglGraphic: 'ParticleField',
    
    figmaUrl: 'https://www.figma.com/make/pneKo4kNU0Pztei24QqUE9/Woo-Shop',
    liveUrl: 'https://woo.figma.site/',
    
    stats: [
      { icon: 'Layout', value: '52+', label: 'Pages built' },
      { icon: 'Package', value: '125+', label: 'Components' },
      { icon: 'ShoppingCart', value: 'Advanced', label: 'WooCommerce' },
      { icon: 'Star', value: 'Loyalty', label: 'Rewards program' },
    ],
    
    features: [
      {
        icon: 'MagnifyingGlass',
        title: 'Advanced search',
        description: 'Comprehensive product filtering and search functionality'
      },
      {
        icon: 'Crown',
        title: 'Memberships',
        description: 'Member tiers with exclusive pricing and benefits'
      },
      {
        icon: 'ArrowClockwise',
        title: 'Subscriptions',
        description: 'Recurring product subscriptions and auto-delivery'
      },
      {
        icon: 'Headset',
        title: 'Customer support',
        description: 'Returns, tracking, live chat, and help resources'
      },
    ],
    
    technologies: ['React', 'TypeScript', 'WooCommerce', 'Advanced Features', 'Figma Make'],
    tags: ['eCommerce', 'WooCommerce', 'Memberships', 'Subscriptions', 'Full Platform'],
    
    keyHighlights: [
      'Complete WooCommerce feature demonstration',
      'Membership tiers and subscription products',
      'Loyalty rewards and promotional systems',
      'Advanced shopping tools (compare, wishlist)',
      'Comprehensive customer support features',
    ],
    
    aiStrategy: 'AI planned comprehensive eCommerce information architecture covering every major WooCommerce feature. Generated diverse product catalog content, promotional copy, and support documentation demonstrating platform versatility.',
    
    designPhilosophy: 'Feature-rich design that showcases WooCommerce capabilities without overwhelming users. Vibrant brand identity maintains energy while intuitive navigation and clear information hierarchy support discovery and conversion.',
  },
];

// Category metadata
export const prototypeCategories = {
  'tour-operator': {
    title: 'Tour operator platforms',
    description: 'Complete travel and booking systems for tour operators',
    icon: 'Compass',
    color: 'var(--primary-500)',
  },
  'ecommerce': {
    title: 'eCommerce solutions',
    description: 'WooCommerce stores with diverse brand identities',
    icon: 'ShoppingCart',
    color: 'var(--accent-purple)',
  },
  'publishing': {
    title: 'Digital publishing',
    description: 'News and media platforms with membership systems',
    icon: 'Newspaper',
    color: 'var(--error-500)',
  },
  'agency': {
    title: 'Agency websites',
    description: 'Service showcases with design system demonstrations',
    icon: 'Briefcase',
    color: 'var(--success-500)',
  },
} as const;

// Get prototypes by category
export const getPrototypesByCategory = (category: FigmaPrototype['category']) => {
  return figmaPrototypes.filter(p => p.category === category);
};

// Get prototype by slug
export const getPrototypeBySlug = (slug: string) => {
  return figmaPrototypes.find(p => p.slug === slug);
};

// Get all categories with counts
export const getCategoriesWithCounts = () => {
  return Object.entries(prototypeCategories).map(([key, meta]) => ({
    ...meta,
    key,
    count: figmaPrototypes.filter(p => p.category === key).length,
  }));
};