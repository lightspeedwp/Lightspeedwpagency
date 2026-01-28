/**
 * LSX Solution Page Data
 * 
 * Mock data for the LSX Solution pages (LSXSolutionTemplate, LSXDesignTemplate, etc).
 */

import { Layout, Palette, Search, Share2, Globe, Code } from 'lucide-react';

export const lsxSolutionHero = {
  title: "LSX Theme & Plugins",
  subtitle: "A lightweight, fast, and accessible ecosystem for modern WordPress websites.",
  badge: { text: "OPEN SOURCE", icon: Code },
  primaryButton: { text: "Explore Extensions", page: "#extensions" },
  secondaryButton: { text: "View Documentation", page: "docs" }
};

export const lsxSolutionFeatures = {
  title: "The LSX Ecosystem",
  features: [
    {
      icon: Layout,
      title: "LSX Theme",
      description: "A free, block-based theme built for speed and FSE compatibility."
    },
    {
      icon: Globe,
      title: "LSX Tour Operator",
      description: "Complete tour management solution for travel websites."
    },
    {
      icon: Search,
      title: "LSX Search",
      description: "Advanced search functionality with Algolia integration."
    },
    {
      icon: Share2,
      title: "LSX Sharing",
      description: "Lightweight social sharing buttons without the bloat."
    }
  ]
};

export const lsxSolutionCTA = {
  title: "Build Better with LSX",
  description: "Join thousands of developers using the LSX framework.",
  button: { text: "Get Started", page: "contact" }
};
