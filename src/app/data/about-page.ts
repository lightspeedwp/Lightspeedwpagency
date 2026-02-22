/**
 * About Page Data
 * 
 * Mock data for the About Us page (AboutTemplate).
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
 */

import { 
  Heart, 
  Lightbulb, 
  Target, 
  Users, 
  Award,
  Smile,
  Globe,
  Code,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

export const aboutPageHero = {
  title: "We are digital artisans",
  description: "A passionate team of designers, developers, and strategists dedicated to crafting exceptional digital experiences.",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
  stats: [
    { value: "15+", label: "Years Experience", icon: "Award" },
    { value: "50+", label: "Team Members", icon: "Users" },
    { value: "Global", label: "Client Base", icon: "Globe" }
  ]
};

export const aboutPageStory = {
  title: "Our story",
  subtitle: "From humble beginnings to industry leaders",
  content: [
    {
      heading: "The early days",
      text: "Founded in 2010, we started with a simple mission: to make the web a better place. What began as a small duo of freelancers has grown into a full-service digital agency with a global footprint."
    },
    {
      heading: "Growth & evolution",
      text: "Over the years, we've weathered the rapid changes of the digital landscape, adapting and evolving with every new technology. Our resilience and commitment to quality have earned us the trust of hundreds of clients."
    },
    {
      heading: "Today & beyond",
      text: "Today, we continue to push boundaries, exploring new frontiers in web development and design, while staying true to our core values of integrity and excellence."
    }
  ]
};

export const aboutPageMissionVision = {
  mission: {
    title: "Our mission",
    description: "To empower businesses with innovative digital solutions that drive growth, foster connection, and create lasting value in an ever-evolving digital world."
  },
  vision: {
    title: "Our vision",
    description: "To be the global standard for digital excellence, where creativity meets technology to solve the most complex challenges for forward-thinking brands."
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
    icon: Target,
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
    icon: TrendingUp,
    title: "Growth",
    description: "Committed to the continuous growth of our clients and our team."
  }
];

export const aboutPageStats = [
  { number: "50+", label: "Team Members", icon: Users },
  { number: "15", label: "Years in Business", icon: Award },
  { number: "500+", label: "Happy Clients", icon: Smile },
  { number: "1k+", label: "Projects Delivered", icon: CheckCircle }
];

export const aboutPageTimeline = [
  { 
    year: "2010", 
    title: "Founded", 
    description: "LightSpeed was born in a small garage with a big vision." 
  },
  { 
    year: "2015", 
    title: "Expanded to 20+ team", 
    description: "Moved to a new HQ and grew our development team significantly." 
  },
  { 
    year: "2018", 
    title: "Awarded Best Agency", 
    description: "Recognized for excellence in <i>WordPress</i> development and design." 
  },
  { 
    year: "2023", 
    title: "Global expansion", 
    description: "Opened offices in London and New York to serve global clients." 
  }
];

export const aboutPageExpertise = [
  {
    icon: Code,
    title: "WordPress development",
    description: "Custom themes, plugins, and complex integrations built on the world's most popular CMS."
  },
  {
    icon: Zap,
    title: "Performance optimization",
    description: "Speed is a feature. We optimize every line of code for maximum performance and SEO ranking."
  },
  {
    icon: Globe,
    title: "Digital strategy",
    description: "Data-driven strategies that align your digital presence with your business goals."
  }
];

export const aboutPageFAQs = [
  {
    question: "Where are you located?",
    answer: "We have a distributed team with headquarters in Cape Town and offices in London and New York."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! We work with clients all over the world, utilizing modern tools to collaborate effectively across time zones."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have deep experience in E-commerce, SaaS, Finance, and Media, but our solutions are adaptable to any industry."
  },
  {
    question: "Are you hiring?",
    answer: "We are always looking for talented individuals. Check our Careers page for current openings."
  }
];

export const aboutPageTeamPreview = {
  title: "Meet the team",
  description: "The talented individuals behind our success.",
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
