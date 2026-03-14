/**
 * About/Company FAQ Collections
 * 
 * FAQ collections for company and about-related pages including general about,
 * process, culture, team, why choose us, and guarantees.
 * 
 * **Collections:**
 * - aboutFAQs — General about page
 * - processFAQs — Development process
 * - cultureFAQs — Company culture
 * - teamFAQs — Team information
 * - teamPageFAQs — Team page specific
 * - whyChooseUsFAQs — Why choose us page
 * - guaranteesFAQs — Guarantees page
 * 
 * **Count:** 7 collections
 * 
 * @example
 * import { aboutFAQs, processFAQs } from '@/app/data/faqs';
 * <FAQSection faqs={aboutFAQs} />
 */

import type { FAQ } from './types';

/**
 * About Page FAQs
 * Used on: AboutTemplate, AboutHistoryTemplate
 */
export const aboutFAQs: FAQ[] = [
  {
    question: 'How long has LSX Design been in business?',
    answer: 'We were founded in 2003 and have been specializing in WordPress and WooCommerce development for over 20 years. We\'ve delivered 500+ successful projects for clients worldwide.'
  },
  {
    question: 'Where is your team located?',
    answer: 'We\'re a fully remote team with members across multiple time zones. This allows us to provide continuous coverage and work with clients internationally while maintaining excellent communication.'
  },
  {
    question: 'What makes your approach unique?',
    answer: 'Our focus on token-driven design systems, WordPress FSE expertise, and accessibility-first development sets us apart. We build systems, not just websites—ensuring long-term scalability and maintainability.'
  },
  {
    question: 'Who are your typical clients?',
    answer: 'We work with businesses of all sizes—from startups needing their first professional site to enterprises requiring complex WooCommerce platforms. Our clients span 30+ countries across various industries.'
  },
  {
    question: 'Do you have case studies available?',
    answer: 'Yes! Visit our portfolio page to see detailed case studies showcasing our work across different industries, including e-commerce, editorial, healthcare, and more.'
  }
];

/**
 * Process Page FAQs
 * Used on: AboutProcessTemplate
 */
export const processFAQs: FAQ[] = [
  {
    question: 'What is your development process?',
    answer: 'We follow a four-phase approach: Discovery & Strategy, Design & Planning, Development & Build, and Testing & Launch. Each phase includes regular check-ins, demos, and opportunities for feedback.'
  },
  {
    question: 'How involved do I need to be during development?',
    answer: 'We recommend weekly sync meetings (30-60 minutes) and availability for async feedback via our project management tools. Most clients spend 2-4 hours per week reviewing progress and providing input.'
  },
  {
    question: 'What do you need from us to get started?',
    answer: 'We need access to existing sites/systems, brand assets (logos, fonts, colors), content strategy or sitemap, stakeholder availability for discovery workshops, and clearly defined project goals.'
  },
  {
    question: 'Can we make changes during development?',
    answer: 'Minor changes are included. Major scope changes require change orders to adjust timeline and budget. We use agile sprints with demo checkpoints to minimize surprises and ensure alignment.'
  }
];

/**
 * Culture Page FAQs
 * Used on: AboutCultureTemplate
 */
export const cultureFAQs: FAQ[] = [
  {
    question: 'What is it like to work at LSX Design?',
    answer: 'We maintain a remote-first culture with flexible hours, async communication, and focus on work-life balance. Our team values continuous learning, collaboration, and producing excellent work.'
  },
  {
    question: 'Do you offer internships or junior positions?',
    answer: 'Yes! We regularly hire junior developers and designers who show strong fundamentals and enthusiasm for WordPress. We provide mentorship and learning opportunities to help you grow.'
  },
  {
    question: 'What benefits do you offer?',
    answer: 'Competitive salaries, unlimited PTO, home office budget, learning and development allowance, health insurance, mental health support, and co-working space memberships globally.'
  },
  {
    question: 'How do you support professional development?',
    answer: 'We provide monthly learning budgets, conference tickets, certification programs, internal knowledge sharing, and dedicated time for skill development during work hours.'
  }
];

/**
 * Team Page FAQs
 * Used on: TeamTemplate
 */
export const teamFAQs: FAQ[] = [
  {
    question: 'How large is your team?',
    answer: 'Our core team consists of 25 talented professionals including WordPress developers, designers, project managers, and QA specialists. We also work with trusted partners for specialized needs.'
  },
  {
    question: 'What expertise does your team have?',
    answer: 'Our team brings expertise in WordPress FSE, WooCommerce, design systems, accessibility (WCAG), performance optimization, security, and modern frontend development with React and TypeScript.'
  },
  {
    question: 'Will I have a dedicated project manager?',
    answer: 'Yes! Every project is assigned a dedicated project manager who serves as your main point of contact and ensures smooth communication between you and the development team.'
  },
  {
    question: 'Can I meet the team before starting a project?',
    answer: 'Absolutely. We encourage discovery calls where you can meet key team members who will work on your project. This helps establish rapport and ensures we\'re the right fit.'
  }
];

/**
 * Team Page Detailed FAQs
 * Used on: Detailed team pages
 */
export const teamPageFAQs: FAQ[] = [
  {
    question: "How is your team structured?",
    answer: "We organize into specialized pods: Development (WordPress/WooCommerce), Design (UX/UI), Strategy (SEO/Content), and Operations (PM/Support). Each pod has senior leads and cross-functional collaboration."
  },
  {
    question: "Do you use contractors or in-house staff?",
    answer: "We have a core in-house team of 25+ full-time professionals. For specialized needs (animation, illustration, translations), we work with vetted long-term contractors who know our standards."
  },
  {
    question: "What's your team's experience with WordPress?",
    answer: "Our team collectively has 100+ years of WordPress experience. Several members are WordCamp speakers, plugin authors, and theme reviewers. We've built 500+ WordPress sites since 2003."
  },
  {
    question: "How do you ensure consistent quality across team members?",
    answer: "We maintain comprehensive internal documentation, code review processes, design system guidelines, and regular training. Every project has senior oversight and QA checks before delivery."
  }
];

/**
 * Why Choose Us FAQs
 * Used on: WhyChooseUsTemplate
 */
export const whyChooseUsFAQs: FAQ[] = [
  {
    question: "What makes you different from other WordPress agencies?",
    answer: "We specialize in design systems and token-driven development for WordPress FSE. This means consistent branding, faster development, easier maintenance, and built-in accessibility. We build systems, not just websites."
  },
  {
    question: "Do you guarantee project delivery dates?",
    answer: "Yes! We commit to delivery dates outlined in our project timeline. If we miss deadlines due to our team (not scope changes), we prioritize completion and may offer compensation depending on impact."
  },
  {
    question: "What happens if I'm not satisfied with the work?",
    answer: "We have revision rounds built into every project phase. If you're still unsatisfied, we'll work to resolve concerns. We've maintained a 98% client satisfaction rate over 20+ years."
  },
  {
    question: "How do you compare to hiring an in-house developer?",
    answer: "We provide a full team (developers, designers, PMs, QA) for less than one senior developer's salary. You get diverse expertise, no hiring/training costs, and flexibility to scale up/down as needed."
  },
  {
    question: "Do you work with clients long-term or just on one-off projects?",
    answer: "Both! Many clients start with a project and move to ongoing retainers. Over 70% of our business comes from repeat clients and referrals. We build partnerships, not just deliver projects."
  }
];

/**
 * Guarantees FAQs
 * Used on: GuaranteesTemplate
 */
export const guaranteesFAQs: FAQ[] = [
  {
    question: "What is your satisfaction guarantee?",
    answer: "We guarantee you'll be satisfied with the final product. If not, we'll continue revisions until you are—or provide a prorated refund based on completed work. We've never had a client exercise this option."
  },
  {
    question: "Do you guarantee specific SEO rankings or traffic increases?",
    answer: "No agency can ethically guarantee rankings (Google's algorithm changes constantly). We guarantee technical SEO best practices, optimized performance, and content strategy—which improve your ranking potential."
  },
  {
    question: "What happens if the site has bugs after launch?",
    answer: "All projects include 30 days of bug-fix support at no charge. If we introduced the bug, we fix it free—even after 30 days. Maintenance clients get ongoing bug fixes and updates."
  },
  {
    question: "Do you guarantee website uptime?",
    answer: "For clients on our managed hosting, we guarantee 99.9% uptime with 24/7 monitoring. If we fall below this, you receive account credits. Third-party hosting is subject to that provider's SLA."
  },
  {
    question: "Can I get a refund if I cancel mid-project?",
    answer: "You'll be charged only for completed work plus any third-party costs already incurred (licenses, hosting setup). We refund any unused deposit. Our contracts outline this clearly upfront."
  }
];