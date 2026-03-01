/**
 * Service Testimonials Data
 * 
 * Client testimonials specific to each service offering.
 * Maps service slugs to relevant testimonials for social proof.
 * 
 * @module data/service-testimonials
 */

/**
 * Service Testimonial
 * 
 * Client testimonial specific to a service offering.
 */
export interface ServiceTestimonial {
  /** Unique identifier */
  id: string;
  
  /** Client name */
  clientName: string;
  
  /** Client company */
  company: string;
  
  /** Client role/title */
  role: string;
  
  /** Testimonial quote */
  quote: string;
  
  /** Service(s) this testimonial relates to */
  serviceTags: string[];
  
  /** Optional client photo URL */
  photo?: string;
  
  /** Optional company logo URL */
  companyLogo?: string;
  
  /** Optional rating (1-5 stars) */
  rating?: number;
  
  /** Optional project details */
  project?: {
    name: string;
    description: string;
    url?: string;
  };
}

/**
 * Service Testimonials Map
 * 
 * Maps service slugs to their testimonials.
 */
export type ServiceTestimonialsMap = {
  [serviceSlug: string]: ServiceTestimonial[];
};

/**
 * All Service Testimonials
 */
export const allTestimonials: ServiceTestimonial[] = [
  // DESIGN SERVICE TESTIMONIALS
  {
    id: 'test-design-1',
    clientName: 'Sarah Mitchell',
    company: 'TravelCo',
    role: 'Marketing Director',
    quote: 'LightSpeed transformed our outdated WordPress site into a modern, high-performing platform. The design is stunning, and our conversion rate increased by 45% in the first month.',
    serviceTags: ['design', 'development', 'performance'],
    rating: 5,
    project: {
      name: 'TravelCo Website Redesign',
      description: 'Complete WordPress redesign with custom theme'
    }
  },
  {
    id: 'test-design-2',
    clientName: 'James Peterson',
    company: 'EcoProducts Ltd',
    role: 'CEO',
    quote: 'The design team created a beautiful, user-friendly interface that perfectly captures our brand. Our bounce rate dropped by 30% and time on site increased significantly.',
    serviceTags: ['design', 'accessibility'],
    rating: 5
  },
  
  // DEVELOPMENT SERVICE TESTIMONIALS
  {
    id: 'test-dev-1',
    clientName: 'Maria Rodriguez',
    company: 'FinTech Solutions',
    role: 'CTO',
    quote: 'LightSpeed\'s development team delivered a complex WordPress multi-site setup with flawless execution. The code quality is exceptional, and the site performs beautifully.',
    serviceTags: ['development', 'performance', 'security'],
    rating: 5,
    project: {
      name: 'FinTech Multi-Site Platform',
      description: 'Enterprise WordPress multisite with custom integrations'
    }
  },
  {
    id: 'test-dev-2',
    clientName: 'David Chen',
    company: 'Healthcare Plus',
    role: 'Digital Director',
    quote: 'The custom WordPress development exceeded our expectations. The team built features we didn\'t even know were possible, all while maintaining excellent performance.',
    serviceTags: ['development', 'accessibility', 'security'],
    rating: 5
  },
  
  // PERFORMANCE SERVICE TESTIMONIALS
  {
    id: 'test-perf-1',
    clientName: 'Emma Thompson',
    company: 'RetailHub',
    role: 'E-commerce Manager',
    quote: 'Page load times dropped from 4.2 seconds to 0.8 seconds after LightSpeed\'s performance optimization. Our Core Web Vitals scores are now perfect across all metrics.',
    serviceTags: ['performance', 'seo'],
    rating: 5
  },
  {
    id: 'test-perf-2',
    clientName: 'Robert Wilson',
    company: 'NewsDaily',
    role: 'Head of Technology',
    quote: 'The performance improvements were immediate and dramatic. Our Lighthouse scores went from 40s to consistent 90s, and user engagement metrics improved across the board.',
    serviceTags: ['performance', 'development'],
    rating: 5
  },
  
  // SEO SERVICE TESTIMONIALS
  {
    id: 'test-seo-1',
    clientName: 'Michael Chen',
    company: 'EcoProducts Ltd',
    role: 'CEO',
    quote: 'Our organic traffic doubled within 3 months thanks to LightSpeed\'s SEO strategy. They understand WordPress SEO at a deep technical level.',
    serviceTags: ['seo', 'performance'],
    rating: 5
  },
  {
    id: 'test-seo-2',
    clientName: 'Lisa Anderson',
    company: 'TravelExplorer',
    role: 'Marketing Lead',
    quote: 'The SEO optimization transformed our search visibility. We\'re now ranking on page 1 for our key terms, and organic conversions have tripled.',
    serviceTags: ['seo', 'content'],
    rating: 5
  },
  
  // ACCESSIBILITY SERVICE TESTIMONIALS
  {
    id: 'test-a11y-1',
    clientName: 'Jennifer Martinez',
    company: 'PublicServices.gov',
    role: 'Accessibility Coordinator',
    quote: 'LightSpeed brought our site to full WCAG 2.1 AA compliance. Their attention to detail and understanding of accessibility best practices is exceptional.',
    serviceTags: ['accessibility', 'development'],
    rating: 5
  },
  {
    id: 'test-a11y-2',
    clientName: 'Thomas Brown',
    company: 'HealthCare Network',
    role: 'Compliance Officer',
    quote: 'The accessibility audit and remediation was thorough and professional. We passed our compliance review with flying colors.',
    serviceTags: ['accessibility', 'design'],
    rating: 5
  },
  
  // SECURITY SERVICE TESTIMONIALS
  {
    id: 'test-sec-1',
    clientName: 'Amanda White',
    company: 'FinanceSecure',
    role: 'Security Director',
    quote: 'LightSpeed\'s security hardening gave us peace of mind. The comprehensive audit and fixes addressed vulnerabilities we didn\'t even know existed.',
    serviceTags: ['security', 'development'],
    rating: 5
  },
  {
    id: 'test-sec-2',
    clientName: 'Daniel Lee',
    company: 'LegalFirm Partners',
    role: 'Managing Partner',
    quote: 'Security was our top concern, and LightSpeed delivered. The site is now fully secured with regular monitoring and instant threat response.',
    serviceTags: ['security', 'support'],
    rating: 5
  },
  
  // SUPPORT SERVICE TESTIMONIALS
  {
    id: 'test-support-1',
    clientName: 'Sophia Johnson',
    company: 'OnlineRetail',
    role: 'Operations Manager',
    quote: 'The ongoing support is fantastic. Response times are quick, and the team always goes above and beyond to solve issues.',
    serviceTags: ['support', 'development'],
    rating: 5
  },
  {
    id: 'test-support-2',
    clientName: 'Chris Evans',
    company: 'MediaGroup',
    role: 'IT Manager',
    quote: 'Having LightSpeed on retainer gives us confidence. They handle everything from minor updates to emergency fixes with professionalism.',
    serviceTags: ['support', 'security', 'performance'],
    rating: 5
  },
  
  // MIGRATIONS SERVICE TESTIMONIALS
  {
    id: 'test-migration-1',
    clientName: 'Patricia Davis',
    company: 'GlobalCorp',
    role: 'Digital Transformation Lead',
    quote: 'The migration from our legacy CMS to WordPress was seamless. Zero downtime, all content preserved, and the new site is so much faster.',
    serviceTags: ['migrations', 'development', 'performance'],
    rating: 5
  },
  {
    id: 'test-migration-2',
    clientName: 'Kevin Taylor',
    company: 'TechStartup',
    role: 'Founder',
    quote: 'Migrating our Shopify blog to WordPress was painless. LightSpeed handled everything, including redirects and SEO preservation.',
    serviceTags: ['migrations', 'seo'],
    rating: 5
  },
  
  // DISCOVERY SERVICE TESTIMONIALS
  {
    id: 'test-discovery-1',
    clientName: 'Rachel Green',
    company: 'Nonprofit Alliance',
    role: 'Executive Director',
    quote: 'The discovery workshop helped us clarify our goals and requirements. The strategic roadmap has been invaluable for our digital transformation.',
    serviceTags: ['discovery', 'design'],
    rating: 5
  },
  {
    id: 'test-discovery-2',
    clientName: 'Mark Wilson',
    company: 'B2B Solutions',
    role: 'VP of Marketing',
    quote: 'The discovery phase saved us from costly mistakes. LightSpeed identified opportunities and challenges we hadn\'t considered.',
    serviceTags: ['discovery', 'development'],
    rating: 5
  },
  
  // CONTENT SERVICE TESTIMONIALS
  {
    id: 'test-content-1',
    clientName: 'Olivia Martin',
    company: 'TravelBlog Network',
    role: 'Content Director',
    quote: 'The content strategy transformed our editorial process. Our engagement metrics doubled, and we\'re producing higher quality content faster.',
    serviceTags: ['content', 'seo'],
    rating: 5
  },
  {
    id: 'test-content-2',
    clientName: 'Nathan Harris',
    company: 'SaaS Company',
    role: 'Marketing Manager',
    quote: 'The content audit revealed gaps we didn\'t know existed. The new content structure has improved our SEO and user engagement significantly.',
    serviceTags: ['content', 'seo', 'design'],
    rating: 5
  },
  
  // NEWSLETTER SERVICE TESTIMONIALS
  {
    id: 'test-newsletter-1',
    clientName: 'Jessica Moore',
    company: 'RetailChain',
    role: 'Email Marketing Lead',
    quote: 'The newsletter integration with WordPress is seamless. Our subscriber growth rate increased 120% in the first quarter.',
    serviceTags: ['newsletter', 'development'],
    rating: 5
  },
  {
    id: 'test-newsletter-2',
    clientName: 'Brian Clark',
    company: 'BlogNetwork',
    role: 'Publisher',
    quote: 'Setting up automated newsletters has been a game-changer. Engagement is up, and the WordPress integration works flawlessly.',
    serviceTags: ['newsletter', 'content'],
    rating: 5
  }
];

/**
 * Service Testimonials Mapping
 * 
 * Maps each service slug to its relevant testimonials.
 */
export const serviceTestimonialsMap: ServiceTestimonialsMap = {
  'design': [
    allTestimonials[0],  // Sarah Mitchell (TravelCo)
    allTestimonials[1],  // James Peterson (EcoProducts)
    allTestimonials[17], // Rachel Green (Discovery + Design)
  ],
  'development': [
    allTestimonials[2],  // Maria Rodriguez (FinTech)
    allTestimonials[3],  // David Chen (Healthcare)
    allTestimonials[12], // Sophia Johnson (Support)
  ],
  'performance': [
    allTestimonials[4],  // Emma Thompson (RetailHub)
    allTestimonials[5],  // Robert Wilson (NewsDaily)
    allTestimonials[0],  // Sarah Mitchell (multi-service)
  ],
  'seo': [
    allTestimonials[6],  // Michael Chen (EcoProducts)
    allTestimonials[7],  // Lisa Anderson (TravelExplorer)
    allTestimonials[19], // Olivia Martin (Content + SEO)
  ],
  'accessibility': [
    allTestimonials[8],  // Jennifer Martinez (PublicServices)
    allTestimonials[9],  // Thomas Brown (HealthCare)
    allTestimonials[1],  // James Peterson (Design + A11y)
  ],
  'security': [
    allTestimonials[10], // Amanda White (FinanceSecure)
    allTestimonials[11], // Daniel Lee (LegalFirm)
    allTestimonials[2],  // Maria Rodriguez (Dev + Security)
  ],
  'support': [
    allTestimonials[12], // Sophia Johnson (OnlineRetail)
    allTestimonials[13], // Chris Evans (MediaGroup)
    allTestimonials[11], // Daniel Lee (Security + Support)
  ],
  'migrations': [
    allTestimonials[14], // Patricia Davis (GlobalCorp)
    allTestimonials[15], // Kevin Taylor (TechStartup)
  ],
  'discovery': [
    allTestimonials[16], // Rachel Green (Nonprofit)
    allTestimonials[17], // Mark Wilson (B2B Solutions)
  ],
  'content': [
    allTestimonials[18], // Olivia Martin (TravelBlog)
    allTestimonials[19], // Nathan Harris (SaaS)
    allTestimonials[21], // Brian Clark (Newsletter + Content)
  ],
  'newsletter': [
    allTestimonials[20], // Jessica Moore (RetailChain)
    allTestimonials[21], // Brian Clark (BlogNetwork)
  ],
};

/**
 * Get testimonials for a specific service
 * 
 * @param serviceSlug - Service slug to fetch testimonials for
 * @returns Array of testimonials for the service
 */
export function getTestimonialsForService(serviceSlug: string): ServiceTestimonial[] {
  return serviceTestimonialsMap[serviceSlug] || [];
}

/**
 * Get featured testimonials (5-star ratings only)
 * 
 * @param serviceSlug - Service slug to fetch testimonials for
 * @returns Array of 5-star testimonials for the service
 */
export function getFeaturedTestimonials(serviceSlug: string): ServiceTestimonial[] {
  const testimonials = getTestimonialsForService(serviceSlug);
  return testimonials.filter(t => t.rating === 5);
}

/**
 * Get all testimonials for multiple services
 * 
 * @param serviceSlugs - Array of service slugs
 * @returns Combined array of unique testimonials
 */
export function getTestimonialsForServices(serviceSlugs: string[]): ServiceTestimonial[] {
  const allServiceTestimonials = serviceSlugs.flatMap(slug => 
    getTestimonialsForService(slug)
  );
  
  // Remove duplicates by ID
  const unique = Array.from(
    new Map(allServiceTestimonials.map(t => [t.id, t])).values()
  );
  
  return unique;
}
