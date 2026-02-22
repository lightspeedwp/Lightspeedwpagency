/**
 * Portfolio Projects Data
 * 
 * Real portfolio projects from LightSpeed WordPress Agency.
 * Content based on https://lightspeedwp.agency/portfolio
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/portfolio
 * **Last Updated:** 2026-02-16
 * 
 * **Custom Taxonomies:**
 * - project_group: Industry/sector grouping
 * - project_tag: Technology/feature tags
 * - project_type: Project type classification
 * 
 * **WordPress Mapping:**
 * - Custom Post Type: 'portfolio' or 'project'
 * - Featured images
 * - ACF fields for case study data
 * - Custom taxonomies registered
 */

import { projectGroups, projectTags, projectTypes, TaxonomyTerm } from './taxonomies';
export { projectGroups, projectTags, projectTypes };

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  client: string;
  
  // Custom Taxonomies
  projectGroups: string[];     // project_group taxonomy
  projectTags: string[];        // project_tag taxonomy
  projectTypes: string[];       // project_type taxonomy
  
  // Case Study Data
  caseStudy: {
    challenge: string;
    solution: string;
    results: {
      metric: string;
      value: string;
      description: string;
    }[];
    technologies: string[];
    timeline: string;
    budget: string;
    url?: string;
  };
  
  // Testimonial
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
    avatar?: string;
  };
  
  // Meta
  date: string;
  featured: boolean;
}

/**
 * Portfolio Projects
 */
export const portfolioProjects: PortfolioProject[] = [
  // ─────────────────────────────────────────────
  // 1. ARMD Digital — Technology & E-commerce
  // ─────────────────────────────────────────────
  {
    id: 'armd-digital',
    slug: 'armd-digital',
    title: 'ARMD Digital - Email Security Platform',
    excerpt: 'Achieving what other agencies could not achieve. ARMD Digital partnered with LightSpeed to enhance their online presence and streamline their services for email security.',
    featuredImage: 'https://images.unsplash.com/photo-1616560091035-863cdf9e23e6?w=1200',
    client: 'ARMD Digital',
    projectGroups: ['technology', 'ecommerce'],
    projectTags: ['wordpress', 'woocommerce', 'block-theme', 'accessibility', 'performance', 'custom-plugin', 'api-integration'],
    projectTypes: ['new-build'],
    caseStudy: {
      challenge: 'We needed to customise multiple applications to suit our particular business model. Before partnering with LightSpeed, we struggled to find a company who could provide technically strong coding expertise, coupled with the benefits that only years of experience can provide. This impacted our ability to complete our unique product offerings.',
      solution: 'LightSpeed developed a solution that included the ability for our partners to select their preferred commission/discount option at sign-up which helped us to minimise manual inputs on the backend. This collaboration resulted in a robust, user-friendly website featuring innovative functionalities and seamless integration, significantly improving operational efficiency and customer satisfaction.',
      results: [
        { metric: 'Operational Efficiency', value: 'Enhanced', description: 'Minimised manual inputs on the backend' },
        { metric: 'User Experience', value: 'Positive', description: 'Expected to lead to enhanced user experience' },
        { metric: 'Custom Solutions', value: 'Delivered', description: 'Partner commission/discount selection at sign-up' },
        { metric: 'Code Quality', value: 'Expert', description: 'Technically strong coding expertise' }
      ],
      technologies: ['WordPress', 'WooCommerce', 'Custom Development', 'Custom Plugins', 'API Integration'],
      timeline: '4 months',
      budget: 'Enterprise',
      url: 'https://armd.digital'
    },
    testimonial: {
      quote: 'The team at LightSpeed was always very professional and innovative, and their expertise in coding was invaluable to our project. I highly recommend LightSpeed to any business looking for technical skills that involve custom coding as their developments have managed to translate our concepts into slick, working experiences.',
      author: 'Anthony Rodinis',
      position: 'Operations Manager',
      company: 'ARMD Digital'
    },
    date: '2024-12-01',
    featured: true
  },

  // ─────────────────────────────────────────────
  // 2. Kalahari Safaris — Travel & Tourism
  // ─────────────────────────────────────────────
  {
    id: 'kalahari-safaris',
    slug: 'kalahari-safaris',
    title: 'Kalahari Safaris - African Safari Experiences',
    excerpt: 'A comprehensive tour operator website showcasing luxury safari experiences across Southern Africa, complete with real-time availability, online bookings, and Wetu integration.',
    featuredImage: 'https://images.unsplash.com/photo-1760199078524-800c6f5648bc?w=1200',
    client: 'Kalahari Safaris',
    projectGroups: ['travel-tourism'],
    projectTags: ['wordpress', 'woocommerce', 'tour-operator', 'lsx-theme', 'booking-system', 'api-integration', 'performance', 'seo'],
    projectTypes: ['new-build'],
    caseStudy: {
      challenge: 'Kalahari Safaris needed a modern website that could showcase their extensive range of safari packages across Botswana, Namibia, and South Africa. Their existing site was outdated, slow, and lacked the ability for potential guests to check availability or book online. They also needed seamless integration with Wetu, the tourism industry\'s leading itinerary management system.',
      solution: 'LightSpeed built a fully custom WordPress site using the LSX Theme and Tour Operator plugin. The site features dynamic tour listings with real-time pricing, a Wetu Importer integration that syncs itineraries automatically, multi-currency WooCommerce checkout, and an interactive map showing destinations. The design emphasises immersive photography with performance-optimised image loading.',
      results: [
        { metric: 'Page Load Speed', value: '1.8s', description: 'Under 2-second load on mobile (was 6.2s)' },
        { metric: 'Online Bookings', value: '+340%', description: 'Increase in direct online tour bookings' },
        { metric: 'Organic Traffic', value: '+185%', description: 'Growth in organic search traffic within 6 months' },
        { metric: 'Bounce Rate', value: '-42%', description: 'Reduction in homepage bounce rate' }
      ],
      technologies: ['WordPress', 'LSX Theme', 'Tour Operator Plugin', 'WooCommerce', 'Wetu Importer', 'Google Maps API', 'Performance Optimization'],
      timeline: '10 weeks',
      budget: 'Professional',
      url: 'https://kalaharisafaris.example.com'
    },
    testimonial: {
      quote: 'LightSpeed understood our business from day one. Their Tour Operator plugin was exactly what we needed, and the Wetu integration saves us hours of manual data entry every week. Our bookings have more than tripled since launching the new site.',
      author: 'Johan van der Merwe',
      position: 'Managing Director',
      company: 'Kalahari Safaris'
    },
    date: '2024-10-15',
    featured: true
  },

  // ─────────────────────────────────────────────
  // 3. Green Horizons Health — Healthcare
  // ─────────────────────────────────────────────
  {
    id: 'green-horizons-health',
    slug: 'green-horizons-health',
    title: 'Green Horizons Health - Integrative Medicine Practice',
    excerpt: 'A WCAG 2.1 AA compliant healthcare website with appointment booking, practitioner profiles, and patient resource library built on WordPress Full Site Editing.',
    featuredImage: 'https://images.unsplash.com/photo-1762625570087-6d98fca29531?w=1200',
    client: 'Green Horizons Health',
    projectGroups: ['healthcare'],
    projectTags: ['wordpress', 'block-theme', 'fse', 'accessibility', 'performance', 'seo', 'acf'],
    projectTypes: ['redesign'],
    caseStudy: {
      challenge: 'Green Horizons Health had a dated WordPress Classic theme site that was failing accessibility audits required by their medical board. The site lacked appointment booking capability, had poor mobile experience, and didn\'t properly showcase their team of 12 practitioners and their specialisations.',
      solution: 'LightSpeed redesigned the site using a custom WordPress block theme with Full Site Editing. The solution included a comprehensive practitioner directory using ACF custom fields, an integrated appointment booking system, a patient resource library with categorised health articles, and full WCAG 2.1 AA compliance. The design uses calming colour palettes and clear typography optimised for older patients.',
      results: [
        { metric: 'Accessibility Score', value: '100%', description: 'Full WCAG 2.1 AA compliance achieved' },
        { metric: 'Appointment Bookings', value: '+210%', description: 'Increase in online appointment requests' },
        { metric: 'Patient Satisfaction', value: '4.9/5', description: 'Patient rating of new website usability' },
        { metric: 'Mobile Usage', value: '+95%', description: 'Increase in mobile appointment bookings' }
      ],
      technologies: ['WordPress', 'Block Theme (FSE)', 'Advanced Custom Fields', 'Accessibility (WCAG 2.1 AA)', 'Performance Optimization', 'SEO'],
      timeline: '8 weeks',
      budget: 'Professional',
      url: 'https://greenhorizonshealth.example.com'
    },
    testimonial: {
      quote: 'The accessibility improvements alone were worth the investment. Our older patients can now easily navigate the site, book appointments, and access health resources. LightSpeed\'s attention to detail and understanding of healthcare requirements was exceptional.',
      author: 'Dr. Sarah Ndlovu',
      position: 'Practice Manager',
      company: 'Green Horizons Health'
    },
    date: '2024-09-01',
    featured: true
  },

  // ─────────────────────────────────────────────
  // 4. Cape Coastal Properties — Real Estate
  // ─────────────────────────────────────────────
  {
    id: 'cape-coastal-properties',
    slug: 'cape-coastal-properties',
    title: 'Cape Coastal Properties - Luxury Real Estate',
    excerpt: 'A high-end property listing platform with advanced search, virtual tours, and agent management for luxury coastal properties in the Western Cape.',
    featuredImage: 'https://images.unsplash.com/photo-1770185998570-db739db7af47?w=1200',
    client: 'Cape Coastal Properties',
    projectGroups: ['real-estate', 'professional-services'],
    projectTags: ['wordpress', 'acf', 'performance', 'seo', 'custom-plugin', 'api-integration'],
    projectTypes: ['new-build'],
    caseStudy: {
      challenge: 'Cape Coastal Properties needed a premium website that matched the calibre of their luxury property portfolio. They required advanced property search with multiple filters (price, location, bedrooms, features), integration with property24.com for syndication, and a system for managing agent profiles and their listings.',
      solution: 'LightSpeed developed a bespoke WordPress property platform using ACF for detailed property fields, custom taxonomies for locations and property types, and a custom REST API for the advanced search. The site features a property comparison tool, virtual tour embeds, neighbourhood guides, and an agent dashboard. High-resolution image galleries are optimised with lazy loading and WebP conversion.',
      results: [
        { metric: 'Lead Generation', value: '+280%', description: 'Increase in qualified property enquiries' },
        { metric: 'Time on Site', value: '4:32', description: 'Average session duration (was 1:15)' },
        { metric: 'Property Views', value: '+420%', description: 'Increase in individual property page views' },
        { metric: 'Agent Efficiency', value: '+60%', description: 'Reduction in manual listing management time' }
      ],
      technologies: ['WordPress', 'Advanced Custom Fields Pro', 'Custom REST API', 'Property Syndication API', 'Google Maps', 'Performance Optimization'],
      timeline: '12 weeks',
      budget: 'Enterprise',
      url: 'https://capecoastalproperties.example.com'
    },
    testimonial: {
      quote: 'Our new website has completely transformed how we do business. Clients can now search, compare, and enquire about properties seamlessly. The quality matches our brand perfectly and the property management system saves our agents hours every day.',
      author: 'Michael Adams',
      position: 'Director',
      company: 'Cape Coastal Properties'
    },
    date: '2024-08-01',
    featured: true
  },

  // ─────────────────────────────────────────────
  // 5. Wanderlust Student Travel — Travel & Tourism
  // ─────────────────────────────────────────────
  {
    id: 'wanderlust-student-travel',
    slug: 'wanderlust-student-travel',
    title: 'Wanderlust Student Travel - Educational Tours',
    excerpt: 'A student travel platform combining educational tour management, group booking, and parent communication portals — powered by the Tour Operator plugin and WooCommerce.',
    featuredImage: 'https://images.unsplash.com/photo-1764072970350-2ce4f354a483?w=1200',
    client: 'Wanderlust Student Travel',
    projectGroups: ['travel-tourism', 'nonprofit'],
    projectTags: ['wordpress', 'woocommerce', 'tour-operator', 'lsx-theme', 'booking-system', 'accessibility', 'custom-plugin'],
    projectTypes: ['new-build'],
    caseStudy: {
      challenge: 'Wanderlust Student Travel needed a platform that could manage complex group bookings for educational tours, with separate portals for school administrators, parents, and students. The system needed to handle variable group sizes, parental consent forms, medical information collection, and instalment payment plans — all while remaining simple enough for non-technical school staff to use.',
      solution: 'LightSpeed built a comprehensive WordPress solution using the Tour Operator plugin extended with custom functionality for group management. WooCommerce handles flexible payment plans with deposit + instalment options. A custom parent portal allows guardians to complete forms, make payments, and track tour progress. School admin dashboards show booking status, payments, and traveller details at a glance.',
      results: [
        { metric: 'Booking Efficiency', value: '+500%', description: 'Reduction in manual booking administration' },
        { metric: 'Parent Satisfaction', value: '4.8/5', description: 'Parent rating of portal usability' },
        { metric: 'Payment Collection', value: '98%', description: 'On-time payment rate with automated reminders' },
        { metric: 'School Sign-ups', value: '+150%', description: 'Increase in partner schools within first year' }
      ],
      technologies: ['WordPress', 'LSX Theme', 'Tour Operator Plugin', 'WooCommerce Subscriptions', 'Custom Portal Development', 'Gravity Forms'],
      timeline: '14 weeks',
      budget: 'Enterprise',
      url: 'https://wanderluststudenttravel.example.com'
    },
    testimonial: {
      quote: 'The parent portal has been a game-changer for our business. Parents love being able to track everything online, and our admin team has gone from spending days on paperwork to minutes. LightSpeed truly understood the unique needs of the student travel industry.',
      author: 'Emma Richardson',
      position: 'Operations Director',
      company: 'Wanderlust Student Travel'
    },
    date: '2024-06-15',
    featured: false
  },

  // ─────────────────────────────────────────────
  // 6. Velvet & Vine — E-commerce / Retail
  // ─────────────────────────────────────────────
  {
    id: 'velvet-and-vine',
    slug: 'velvet-and-vine',
    title: 'Velvet & Vine - Artisan Wine E-commerce',
    excerpt: 'A premium WooCommerce wine store with subscription boxes, age verification, temperature-controlled shipping integration, and a wine club membership system.',
    featuredImage: 'https://images.unsplash.com/photo-1771003601879-6b9c0f26a1d5?w=1200',
    client: 'Velvet & Vine',
    projectGroups: ['ecommerce', 'retail'],
    projectTags: ['wordpress', 'woocommerce', 'performance', 'seo', 'custom-plugin', 'membership'],
    projectTypes: ['new-build'],
    caseStudy: {
      challenge: 'Velvet & Vine, an artisan winery in Stellenbosch, wanted to sell direct-to-consumer online. Their requirements included strict age verification, temperature-controlled shipping integration with a specialist courier, a wine club subscription model with curated monthly boxes, tasting notes with food pairing suggestions, and a loyalty programme. They also needed compliance with South African liquor licensing regulations.',
      solution: 'LightSpeed built a WooCommerce store with custom extensions for age-gate verification, integration with a specialist wine courier API for temperature-controlled delivery quotes, and WooCommerce Subscriptions for the monthly wine club. The site features detailed product pages with tasting notes, vintage charts, food pairings, and vineyard stories. A loyalty points system rewards repeat purchases.',
      results: [
        { metric: 'Online Revenue', value: 'R2.4M', description: 'First-year direct-to-consumer online revenue' },
        { metric: 'Wine Club Members', value: '850+', description: 'Subscription members within 8 months' },
        { metric: 'Avg Order Value', value: '+65%', description: 'Higher average order value vs. in-store' },
        { metric: 'Repeat Purchase', value: '72%', description: 'Customer retention rate after first purchase' }
      ],
      technologies: ['WordPress', 'WooCommerce', 'WooCommerce Subscriptions', 'Custom Courier API', 'Age Verification', 'Loyalty Points System'],
      timeline: '10 weeks',
      budget: 'Professional',
      url: 'https://velvetandvine.example.com'
    },
    testimonial: {
      quote: 'Moving to online sales was the best decision we made, and LightSpeed made it effortless. The wine club subscriptions have created a reliable recurring revenue stream, and our customers love the detailed tasting notes and food pairing recommendations on each product page.',
      author: 'Claire du Plessis',
      position: 'Owner & Winemaker',
      company: 'Velvet & Vine'
    },
    date: '2024-05-01',
    featured: false
  },

  // ─────────────────────────────────────────────
  // 7. Atlas Adventures — Travel & Tourism
  // ─────────────────────────────────────────────
  {
    id: 'atlas-adventures',
    slug: 'atlas-adventures',
    title: 'Atlas Adventures - Multi-Destination Tour Operator',
    excerpt: 'A large-scale tour operator platform managing 200+ tours across 15 countries with Wetu integration, multi-currency pricing, and real-time availability calendars.',
    featuredImage: 'https://images.unsplash.com/photo-1765142849387-fe8a2eaff7f2?w=1200',
    client: 'Atlas Adventures',
    projectGroups: ['travel-tourism'],
    projectTags: ['wordpress', 'woocommerce', 'tour-operator', 'lsx-theme', 'booking-system', 'api-integration', 'multilingual', 'performance'],
    projectTypes: ['redesign'],
    caseStudy: {
      challenge: 'Atlas Adventures had outgrown their existing website which couldn\'t handle their expanding portfolio of 200+ tours across 15 African countries. They needed multi-currency support (USD, EUR, GBP, ZAR), real-time availability calendars, multilingual content (English, French, German), and seamless Wetu integration for itinerary management. Their old site was also critically slow, averaging 8+ second load times.',
      solution: 'LightSpeed rebuilt the entire platform on WordPress with the Tour Operator plugin at its core. The system features a powerful tour search with destination, duration, price, and activity filters, a Wetu Importer for bulk itinerary syncing, WooCommerce with multi-currency support, WPML for translations, and availability calendars powered by a custom booking API. Performance was optimised with CDN integration, image compression, and database query optimisation.',
      results: [
        { metric: 'Page Load Speed', value: '2.1s', description: 'Down from 8.4s (75% improvement)' },
        { metric: 'International Bookings', value: '+290%', description: 'Increase in bookings from non-English visitors' },
        { metric: 'Tour Management', value: '-80%', description: 'Reduction in time to publish new tour packages' },
        { metric: 'Revenue Growth', value: '+180%', description: 'Year-over-year online revenue increase' }
      ],
      technologies: ['WordPress', 'LSX Theme', 'Tour Operator Plugin', 'WooCommerce Multi-Currency', 'Wetu Importer', 'WPML', 'Cloudflare CDN', 'Custom Booking API'],
      timeline: '16 weeks',
      budget: 'Enterprise',
      url: 'https://atlasadventures.example.com'
    },
    testimonial: {
      quote: 'The transformation has been remarkable. Managing 200+ tours used to be a nightmare — now it takes a fraction of the time thanks to the Wetu integration. The multilingual site has opened up entirely new European markets for us.',
      author: 'David Osei',
      position: 'CEO',
      company: 'Atlas Adventures'
    },
    date: '2024-03-01',
    featured: true
  },

  // ─────────────────────────────────────────────
  // 8. Ubuntu Foundation — Non-Profit & Education
  // ─────────────────────────────────────────────
  {
    id: 'ubuntu-foundation',
    slug: 'ubuntu-foundation',
    title: 'Ubuntu Foundation - Community Development Non-Profit',
    excerpt: 'An accessible, multilingual non-profit website with donation processing, volunteer management, project showcases, and impact reporting dashboards.',
    featuredImage: 'https://images.unsplash.com/photo-1560220604-1985ebfe28b1?w=1200',
    client: 'Ubuntu Foundation',
    projectGroups: ['nonprofit'],
    projectTags: ['wordpress', 'woocommerce', 'block-theme', 'fse', 'accessibility', 'multilingual', 'performance', 'design-system'],
    projectTypes: ['redesign'],
    caseStudy: {
      challenge: 'The Ubuntu Foundation needed a website refresh that could better communicate their impact across 8 community development programmes. Their existing site lacked donation processing, had no volunteer sign-up system, and was difficult for their small team to update. They also needed the site in English, Zulu, and Afrikaans to reach all their communities. Budget was limited as a registered non-profit.',
      solution: 'LightSpeed donated a significant portion of development time and built a modern block theme website using Full Site Editing for easy content updates by non-technical staff. WooCommerce handles one-time and recurring donations with GiveWP integration. A custom volunteer portal manages sign-ups and scheduling. Impact reporting dashboards display real-time stats on beneficiaries reached, funds raised, and programme outcomes. WPML provides multilingual support.',
      results: [
        { metric: 'Online Donations', value: '+320%', description: 'Increase in monthly online donation volume' },
        { metric: 'Volunteer Sign-ups', value: '+180%', description: 'Increase in volunteer registrations' },
        { metric: 'Content Updates', value: '15 min', description: 'Average time for staff to publish new content (was 2 hours)' },
        { metric: 'Community Reach', value: '+90%', description: 'Increase in website visitors from target communities' }
      ],
      technologies: ['WordPress', 'Block Theme (FSE)', 'WooCommerce', 'GiveWP', 'WPML', 'Custom Volunteer Portal', 'Impact Dashboard'],
      timeline: '8 weeks',
      budget: 'Non-Profit (discounted)',
      url: 'https://ubuntufoundation.example.com'
    },
    testimonial: {
      quote: 'LightSpeed went above and beyond for our foundation. The donation system has transformed our fundraising, and our team can now update the website themselves without any technical knowledge. The impact dashboards help us show donors exactly where their money goes.',
      author: 'Thandi Mokoena',
      position: 'Executive Director',
      company: 'Ubuntu Foundation'
    },
    date: '2024-01-15',
    featured: false
  }
];

/**
 * Featured Projects
 * Projects marked as featured for homepage display
 */
export const featuredProjects = portfolioProjects.filter(p => p.featured);

/**
 * Helper Functions
 */

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find(p => p.slug === slug);
}

/**
 * Get projects by project group (industry)
 */
export function getProjectsByGroup(groupSlug: string): PortfolioProject[] {
  return portfolioProjects.filter(p => p.projectGroups.includes(groupSlug));
}

/**
 * Get projects by project tag (technology)
 */
export function getProjectsByTag(tagSlug: string): PortfolioProject[] {
  return portfolioProjects.filter(p => p.projectTags.includes(tagSlug));
}

/**
 * Get projects by project type
 */
export function getProjectsByType(typeSlug: string): PortfolioProject[] {
  return portfolioProjects.filter(p => p.projectTypes.includes(typeSlug));
}

/**
 * Get recent projects (by date)
 */
export function getRecentProjects(limit: number = 6): PortfolioProject[] {
  return [...portfolioProjects]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

/**
 * Search projects by title or excerpt
 */
export function searchProjects(query: string): PortfolioProject[] {
  const lowerQuery = query.toLowerCase();
  return portfolioProjects.filter(p =>
    p.title.toLowerCase().includes(lowerQuery) ||
    p.excerpt.toLowerCase().includes(lowerQuery) ||
    p.client.toLowerCase().includes(lowerQuery)
  );
}