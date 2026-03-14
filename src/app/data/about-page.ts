/**
 * About Page Data
 * 
 * Content data for the About Us page (AboutTemplate).
 * 
 * Sections:
 * - Hero
 * - Our Story
 * - Mission & Vision
 * - Values
 * - Stats
 * - Timeline
 * - Expertise
 * - FAQs
 * - CTA
 * 
 * **REAL CONTENT SOURCE:** https://lightspeedwp.agency/about
 * **Last Updated:** 2026-03-14
 */

import { 
  Heart, 
  Lightbulb, 
  Crosshair, 
  Users, 
  Trophy,
  Smiley,
  Globe,
  Code,
  Lightning,
  Shield,
  TrendUp,
  CheckCircle
} from '@phosphor-icons/react';

export const aboutPageHero = {
  title: "We build structured publishing systems",
  description: "A systems engineering team specialising in WordPress governance, design tokens, and editorial safety — so your site stays coherent under scale and compliance.",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
  stats: [
    { value: "20+", label: "Years Experience", icon: "Trophy" },
    { value: "13", label: "Team Members", icon: "Users" },
    { value: "Global", label: "Client Base", icon: "Globe" }
  ]
};

export const aboutPageStory = {
  title: "Our story",
  subtitle: "From Cape Town startup to global WordPress agency",
  content: [
    {
      heading: "The early days",
      text: "Founded in 2003 by Ash Shaw in Cape Town, South Africa, LightSpeed began as a one-person web development consultancy building custom PHP websites for local businesses. When WordPress emerged as a serious publishing platform, we were among the first South African agencies to adopt it exclusively."
    },
    {
      heading: "Growth & evolution",
      text: "Over two decades, we've weathered the rapid changes of the digital landscape — from table-based layouts to responsive design, from classic themes to Full Site Editing. Our resilience and commitment to quality have earned us the trust of clients across 30 countries, from Cape Town to London to Sydney."
    },
    {
      heading: "Today & beyond",
      text: "Today, our team of 13 specialists continues to push boundaries, building governed design systems, tokenised block themes, and AI-powered workflows — while staying true to our founding values of quality, accessibility, and transparent partnership."
    }
  ]
};

export const aboutPageMissionVision = {
  mission: {
    title: "Our mission",
    description: "To deliver governed publishing systems that editors can operate independently — tokenised, accessible, and measurable from day one."
  },
  vision: {
    title: "Our vision",
    description: "To set the standard for governed WordPress publishing — where every token, template, and pattern is documented, testable, and maintainable."
  }
};

export const aboutPageValues = [
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do, and it shows in our work."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly seeking better, smarter ways to solve problems."
  },
  {
    icon: Crosshair,
    title: "Integrity",
    description: "Honest, transparent, and ethical in all our dealings."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Believing that great things are achieved together."
  },
  {
    icon: Shield,
    title: "Quality",
    description: "We never settle for good enough. Excellence is our baseline."
  },
  {
    icon: TrendUp,
    title: "Growth",
    description: "Committed to the continuous growth of our clients and our team."
  }
];

export const aboutPageStats = [
  { number: "13", label: "Team Members", icon: Users },
  { number: "20+", label: "Years in Business", icon: Trophy },
  { number: "500+", label: "Happy Clients", icon: Smiley },
  { number: "1k+", label: "Projects Delivered", icon: CheckCircle }
];

export const aboutPageTimeline = [
  { 
    year: "2003", 
    title: "Founded in Cape Town", 
    description: "Ash Shaw established LightSpeed as a web development consultancy in Woodstock, Cape Town." 
  },
  { 
    year: "2005", 
    title: "WordPress adoption", 
    description: "Became one of the first South African agencies to build exclusively on WordPress." 
  },
  { 
    year: "2008", 
    title: "International expansion", 
    description: "Won first international clients in East African tourism and hospitality sector." 
  },
  { 
    year: "2012", 
    title: "LSX Theme launched", 
    description: "Released the LSX Theme and Tour Operator plugin to the WordPress.org repository." 
  },
  { 
    year: "2015", 
    title: "WooCommerce focus", 
    description: "Pivoted to specialise in complex WooCommerce implementations and custom extensions." 
  },
  { 
    year: "2018", 
    title: "Gutenberg early adopter", 
    description: "Embraced the block editor from day one, building custom blocks and patterns." 
  },
  { 
    year: "2020", 
    title: "Remote-first team", 
    description: "Transitioned to fully remote, hiring talent across South Africa and globally." 
  },
  { 
    year: "2023", 
    title: "Design system practice", 
    description: "Launched tokenised, accessible block themes built on Full Site Editing architecture." 
  },
  { 
    year: "2025", 
    title: "AI-powered workflows", 
    description: "Integrated AI-assisted development for content strategy, accessibility, and testing." 
  }
];

export const aboutPageExpertise = [
  {
    icon: Code,
    title: "WordPress development",
    description: "Custom themes, plugins, and complex integrations built on the world's most popular CMS — from classic to Full Site Editing."
  },
  {
    icon: Lightning,
    title: "Performance optimization",
    description: "Speed is a feature. We optimize every line of code for maximum performance, Core Web Vitals, and SEO ranking."
  },
  {
    icon: Globe,
    title: "Digital strategy",
    description: "Data-driven strategies that align your digital presence with your business goals, from content governance to analytics."
  }
];

export const aboutPageFAQs = [
  {
    question: "Where are you located?",
    answer: "Our headquarters is in Woodstock, Cape Town, South Africa. We operate as a remote-first team with members across South Africa and internationally."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! We've served clients across 30 countries since 2003, utilizing modern tools to collaborate effectively across time zones."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have deep experience in Tourism & Hospitality, E-commerce, SaaS, and Professional Services, but our WordPress solutions are adaptable to any industry."
  },
  {
    question: "Are you hiring?",
    answer: "We are always looking for talented individuals. Check our Careers page for current openings."
  }
];

export const aboutPageTeamPreview = {
  title: "Meet the team",
  description: "The 13 talented specialists behind our success.",
  cta: {
    text: "See All Team Members",
    page: "team"
  }
};

export const aboutPageCTA = {
  title: "Join our journey",
  description: "Whether you want to work with us or for us, we'd love to hear from you.",
  buttons: [
    {
      text: "Work With Us",
      page: "contact"
    },
    {
      text: "View Careers",
      page: "careers"
    }
  ]
};
