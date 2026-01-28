/**
 * Discovery Service Page Data
 * 
 * Mock data for the Discovery Service page (DiscoveryServiceTemplate).
 */

import { Search, Map, Compass, Target, FileText, Lightbulb } from 'lucide-react';

export const discoveryServiceHero = {
  title: "Digital Discovery & Strategy",
  subtitle: "We dig deep to uncover the insights that will drive your project's success before writing a single line of code.",
  badge: { text: "STRATEGY FIRST", icon: Compass },
  primaryButton: { text: "Book a Workshop", page: "contact" },
  secondaryButton: { text: "Learn More", page: "#process" }
};

export const discoveryServiceOverview = {
  title: "Why Discovery Matters",
  description: "Skipping discovery is the leading cause of project failure. Our process ensures we build the right thing, for the right people, for the right reasons.",
  features: [
    {
      icon: Target,
      title: "Goal Alignment",
      description: "Aligning stakeholders on business objectives and success metrics."
    },
    {
      icon: Map,
      title: "Risk Mitigation",
      description: "Identifying technical and operational risks early in the process."
    },
    {
      icon: Lightbulb,
      title: "Opportunity Spotting",
      description: "Uncovering hidden opportunities for innovation and competitive advantage."
    }
  ]
};

export const discoveryServiceProcess = {
  title: "The Discovery Roadmap",
  steps: [
    {
      number: "01",
      title: "Stakeholder Interviews",
      description: "One-on-one sessions with key decision-makers to gather requirements."
    },
    {
      number: "02",
      title: "User Research",
      description: "Analyzing your target audience, their needs, and behaviors."
    },
    {
      number: "03",
      title: "Competitive Audit",
      description: "Reviewing competitors to identify gaps and best practices."
    },
    {
      number: "04",
      title: "Technical Feasibility",
      description: "Assessing the technology stack and integration requirements."
    },
    {
      number: "05",
      title: "Strategy Roadmap",
      description: "Delivering a comprehensive plan for design and development."
    }
  ]
};

export const discoveryServiceDeliverables = {
  title: "What You Get",
  items: [
    "Product Requirements Document (PRD)",
    "User Personas & User Journeys",
    "Sitemap & Information Architecture",
    "Technical Architecture Diagram",
    "Project Timeline & Budget Estimates"
  ]
};

export const discoveryServiceCTA = {
  title: "Start on Solid Ground",
  description: "Invest in a discovery phase to ensure your project's success.",
  button: { text: "Start Discovery", page: "contact" }
};
