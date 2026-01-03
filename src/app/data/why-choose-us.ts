/**
 * Why Choose Us / Comparison Data
 * 
 * Competitive advantages and comparison data for LSX Design.
 * Helps visitors understand why to choose LSX over alternatives.
 * 
 * **WordPress Mapping:**
 * - Could be ACF fields on a comparison page
 * - Or custom post type for competitive advantages
 * 
 * **Business Context:**
 * Addresses common objections and shows value prop vs:
 * - DIY website builders
 * - Freelancers
 * - Large agencies
 * - Offshore development
 */

export interface CompetitiveAdvantage {
  id: string;
  title: string;
  description: string;
  icon?: string; // Lucide icon name
  proof?: string; // Social proof or stat
}

export interface ComparisonFeature {
  feature: string;
  lsxDesign: boolean | string;
  diyBuilder: boolean | string;
  freelancer: boolean | string;
  largeAgency: boolean | string;
  tooltip?: string;
}

/**
 * Competitive Advantages
 */
export const competitiveAdvantages: CompetitiveAdvantage[] = [
  {
    id: 'expertise',
    title: 'WordPress Specialists',
    description: 'We exclusively build WordPress and WooCommerce sites. No generic templates, no one-size-fits-all solutions. Deep expertise in the WordPress ecosystem.',
    icon: 'Award',
    proof: '150+ WordPress sites built'
  },
  {
    id: 'modern',
    title: 'Modern Block Themes',
    description: 'We build with Full Site Editing (FSE) block themes—the future of WordPress. No legacy code, no page builders, just clean, maintainable WordPress.',
    icon: 'Blocks',
    proof: 'FSE certified developers'
  },
  {
    id: 'performance',
    title: 'Performance First',
    description: 'Every site scores 90+ on Lighthouse. Core Web Vitals optimized. No bloated plugins, no slow page builders. Fast sites that convert.',
    icon: 'Zap',
    proof: 'Average Lighthouse score: 94'
  },
  {
    id: 'accessibility',
    title: 'WCAG AA Compliant',
    description: 'Accessibility built-in, not bolted on. Every site meets WCAG 2.1 AA standards. Legal compliance + better UX for all users.',
    icon: 'Eye',
    proof: '100% WCAG AA compliance'
  },
  {
    id: 'systems',
    title: 'Design System Approach',
    description: 'Token-driven design systems that scale. Consistent UI, easy maintenance, brand guidelines baked in. No more "one-off" design chaos.',
    icon: 'Palette',
    proof: 'Documented design systems'
  },
  {
    id: 'security',
    title: 'Security Hardened',
    description: 'Security best practices from day one. Regular updates, monitoring, and backups. No compromises on your site\'s safety.',
    icon: 'Shield',
    proof: 'Zero security breaches'
  },
  {
    id: 'support',
    title: 'Ongoing Partnership',
    description: 'We\'re here after launch. Training, documentation, support plans. Your success is our success.',
    icon: 'Users',
    proof: '95% client retention rate'
  },
  {
    id: 'transparent',
    title: 'Transparent Pricing',
    description: 'Fixed-price packages. No hidden fees. No surprise invoices. You know exactly what you\'re paying for.',
    icon: 'DollarSign',
    proof: 'Published pricing'
  }
];

/**
 * Detailed Comparison Table
 */
export const comparisonFeatures: ComparisonFeature[] = [
  // Ownership & Control
  {
    feature: 'You own the website',
    lsxDesign: true,
    diyBuilder: 'Locked in',
    freelancer: true,
    largeAgency: true,
    tooltip: 'With DIY builders, you often don\'t truly own your site'
  },
  {
    feature: 'No vendor lock-in',
    lsxDesign: true,
    diyBuilder: false,
    freelancer: true,
    largeAgency: 'Sometimes',
    tooltip: 'WordPress is open-source, you can move anytime'
  },
  {
    feature: 'Export your data anytime',
    lsxDesign: true,
    diyBuilder: 'Limited',
    freelancer: true,
    largeAgency: true
  },
  
  // Performance
  {
    feature: 'Lighthouse score 90+',
    lsxDesign: 'Guaranteed',
    diyBuilder: 'Rarely',
    freelancer: 'Maybe',
    largeAgency: 'Sometimes',
    tooltip: 'We guarantee 90+ Lighthouse scores'
  },
  {
    feature: 'Core Web Vitals optimized',
    lsxDesign: true,
    diyBuilder: false,
    freelancer: 'Sometimes',
    largeAgency: true
  },
  {
    feature: 'No bloated page builders',
    lsxDesign: true,
    diyBuilder: 'N/A',
    freelancer: false,
    largeAgency: 'Depends'
  },
  
  // Accessibility
  {
    feature: 'WCAG 2.1 AA compliant',
    lsxDesign: 'Guaranteed',
    diyBuilder: false,
    freelancer: 'Rarely',
    largeAgency: 'Add-on',
    tooltip: 'Legal requirement for many businesses'
  },
  {
    feature: 'Keyboard navigation',
    lsxDesign: true,
    diyBuilder: 'Partial',
    freelancer: 'Maybe',
    largeAgency: true
  },
  {
    feature: 'Screen reader optimized',
    lsxDesign: true,
    diyBuilder: false,
    freelancer: 'Rarely',
    largeAgency: 'Add-on'
  },
  
  // Technology
  {
    feature: 'Modern block themes (FSE)',
    lsxDesign: true,
    diyBuilder: 'N/A',
    freelancer: 'Rare',
    largeAgency: 'Rare'
  },
  {
    feature: 'Clean, maintainable code',
    lsxDesign: true,
    diyBuilder: 'Proprietary',
    freelancer: 'Varies',
    largeAgency: true
  },
  {
    feature: 'No proprietary plugins',
    lsxDesign: true,
    diyBuilder: false,
    freelancer: 'Maybe',
    largeAgency: 'Depends'
  },
  
  // SEO & Marketing
  {
    feature: 'SEO optimized',
    lsxDesign: true,
    diyBuilder: 'Basic',
    freelancer: 'Sometimes',
    largeAgency: true
  },
  {
    feature: 'Schema markup',
    lsxDesign: true,
    diyBuilder: 'Limited',
    freelancer: 'Rarely',
    largeAgency: true
  },
  {
    feature: 'Google Analytics setup',
    lsxDesign: true,
    diyBuilder: true,
    freelancer: true,
    largeAgency: true
  },
  
  // Design
  {
    feature: 'Custom design',
    lsxDesign: true,
    diyBuilder: 'Templates',
    freelancer: true,
    largeAgency: true
  },
  {
    feature: 'Design system included',
    lsxDesign: true,
    diyBuilder: false,
    freelancer: 'Rare',
    largeAgency: 'Add-on',
    tooltip: 'Documented design tokens and patterns'
  },
  {
    feature: 'Brand guidelines',
    lsxDesign: true,
    diyBuilder: false,
    freelancer: 'Rarely',
    largeAgency: true
  },
  
  // Support & Training
  {
    feature: 'Training included',
    lsxDesign: true,
    diyBuilder: 'Videos',
    freelancer: 'Sometimes',
    largeAgency: 'Add-on'
  },
  {
    feature: 'Documentation',
    lsxDesign: 'Comprehensive',
    diyBuilder: 'Generic',
    freelancer: 'Minimal',
    largeAgency: true
  },
  {
    feature: 'Post-launch support',
    lsxDesign: '30-90 days',
    diyBuilder: 'Forum',
    freelancer: 'Varies',
    largeAgency: 'Paid'
  },
  {
    feature: 'Maintenance plans',
    lsxDesign: true,
    diyBuilder: 'Included',
    freelancer: 'Extra',
    largeAgency: 'Expensive'
  },
  
  // Business
  {
    feature: 'Fixed pricing',
    lsxDesign: true,
    diyBuilder: true,
    freelancer: 'Varies',
    largeAgency: false,
    tooltip: 'No surprise costs or scope creep'
  },
  {
    feature: 'Clear timeline',
    lsxDesign: true,
    diyBuilder: 'DIY pace',
    freelancer: 'Varies',
    largeAgency: 'Long'
  },
  {
    feature: 'Dedicated project manager',
    lsxDesign: true,
    diyBuilder: false,
    freelancer: false,
    largeAgency: true
  },
  {
    feature: 'Communication',
    lsxDesign: 'Direct',
    diyBuilder: 'N/A',
    freelancer: 'Direct',
    largeAgency: 'Through PM',
    tooltip: 'Talk directly to developers, not middlemen'
  }
];

/**
 * When to Choose Each Option
 */
export const whenToChoose = {
  lsxDesign: {
    title: 'Choose LSX Design If:',
    points: [
      'You want a professional, custom WordPress site',
      'Performance and accessibility matter to your business',
      'You need modern technology (FSE block themes)',
      'You want transparent, fixed pricing',
      'You value ongoing support and partnership',
      'Your site is critical to your business',
      'You want best practices baked in, not bolted on'
    ]
  },
  diyBuilder: {
    title: 'Choose a DIY Builder If:',
    points: [
      'You\'re testing an idea with minimal investment',
      'You have time to learn and build yourself',
      'You don\'t need custom design or functionality',
      'Performance and SEO aren\'t critical',
      'You\'re comfortable with vendor lock-in',
      'You don\'t plan to scale beyond basic features'
    ]
  },
  freelancer: {
    title: 'Choose a Freelancer If:',
    points: [
      'You have a very limited budget',
      'You\'re comfortable with variable quality',
      'You can manage project coordination',
      'You don\'t need long-term support',
      'You\'re okay with potential availability issues',
      'Your project is very small or simple'
    ]
  },
  largeAgency: {
    title: 'Choose a Large Agency If:',
    points: [
      'You have a large budget ($50k+)',
      'You need a full marketing team',
      'You want services beyond web development',
      'Brand strategy is more important than technology',
      'You prefer working with account managers',
      'Timeline is less important than polish'
    ]
  }
};

/**
 * Common Objections & Responses
 */
export const objections = [
  {
    objection: 'DIY builders are cheaper',
    response: 'Upfront cost vs. total cost of ownership',
    details: 'DIY builders seem cheap ($10-30/month), but add up: $300-1,000/year ongoing, plus your time (worth $50-150/hr). After 2-3 years, a custom WordPress site costs less and you own it.'
  },
  {
    objection: 'I can find a cheaper freelancer',
    response: 'Cheap often means cutting corners',
    details: 'Budget freelancers often skip: accessibility testing, performance optimization, security hardening, documentation, and post-launch support. You pay less upfront but spend more fixing issues.'
  },
  {
    objection: 'Page builders are easier to update',
    response: 'Block themes are just as easy, but faster',
    details: 'WordPress FSE block themes offer the same visual editing as page builders, but without the performance penalty. Your site loads 2-3x faster and Google loves it.'
  },
  {
    objection: 'I need it done this week',
    response: 'Fast, cheap, or good: pick two',
    details: 'Quality work takes time. Rushing means bugs, accessibility issues, and poor performance. Our 2-6 week timeline ensures everything works perfectly from day one.'
  },
  {
    objection: 'Can\'t I just use a template?',
    response: 'Templates are generic by design',
    details: 'Templates work for everyone = work great for no one. Custom design matches your brand, audience, and goals. Better conversion rates pay for themselves.'
  }
];

/**
 * ROI Calculator Data
 */
export const roiFactors = {
  conversionRate: {
    diy: 1.5,        // 1.5% average
    professional: 3.5 // 3.5% average
  },
  loadTime: {
    diy: 4.5,        // 4.5 seconds average
    professional: 1.2 // 1.2 seconds average
  },
  seoRanking: {
    diy: 'Page 3-5',
    professional: 'Page 1-2'
  },
  monthlyMaintenance: {
    diy: 150,        // DIY time + tools
    professional: 150 // Maintenance plan
  }
};
