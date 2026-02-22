/**
 * Publishers Solution Page Data
 * 
 * Content for the Publishers Solution template.
 */

import { Newspaper, Rss, Layers, Users, TrendingUp, Zap } from 'lucide-react';

export const publishersSolutionHero = {
  title: "WordPress for High-Traffic Publishers",
  subtitle: "Scalable, performant, and revenue-focused publishing platforms for modern media.",
  badge: { text: "MEDIA EXPERTS", icon: Newspaper },
  primaryButton: { text: "Learn More", page: "contact" },
  secondaryButton: { text: "Case Studies", page: "portfolio-archive" }
};

export const publishersSolutionFeatures = {
  title: "Engineered for Reach",
  features: [
    {
      icon: Layers,
      title: "Content Architecture",
      description: "Optimized data structures and taxonomies for complex editorial workflows."
    },
    {
      icon: TrendingUp,
      title: "Ad Tech Integration",
      description: "Seamless integration with ad servers and header bidding for maximum revenue."
    },
    {
      icon: Zap,
      title: "Core Web Vitals",
      description: "Lightning-fast performance to meet Google's rigorous page experience signals."
    },
    {
      icon: Users,
      title: "Membership & Paywalls",
      description: "Monetize your audience with subscription models and gated content."
    },
    {
      icon: Rss,
      title: "Syndication & AMP",
      description: "Distribute your content across platforms with robust syndication tools."
    },
    {
      icon: Newspaper,
      title: "Editorial Tools",
      description: "Custom blocks and workflows to empower your editorial team."
    }
  ]
};

export const publishersSolutionCTA = {
  title: "Transform Your Publication",
  description: "Partner with an agency that understands the unique challenges of digital publishing.",
  button: { text: "Discuss Your Platform", page: "contact" }
};
