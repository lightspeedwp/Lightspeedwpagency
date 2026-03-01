/**
 * Design Service Page Data
 * 
 * Mock data for the Design Service page (DesignServiceTemplate).
 * 
 * Sections:
 * - Hero
 * - Overview
 * - Design Process
 * - Capabilities
 * - Case Studies (Featured)
 * - FAQ
 * - CTA
 */

import { Palette, PenTool, Layout, Monitor, Layers, Eye } from 'lucide-react';

export const designServiceHero = {
  title: "Token-Driven UI Design for WordPress FSE",
  subtitle: "We create intuitive, engaging, and beautiful digital experiences that captivate users and drive conversions.",
  badge: { text: "DESIGN SERVICES", icon: Palette },
  primaryButton: { text: "Request a Systems Audit", page: "contact" },
  secondaryButton: { text: "View Portfolio", page: "portfolio" }
};

export const designServiceOverview = {
  title: "Design That Works",
  description: "Our design philosophy is rooted in user-centricity. We don't just make things look good; we make them work effectively for your users and your business goals.",
  features: [
    {
      icon: Monitor,
      title: "Responsive Design",
      description: "Seamless experiences across desktops, tablets, and mobile devices."
    },
    {
      icon: Eye,
      title: "Accessibility",
      description: "WCAG compliant designs ensuring usability for everyone."
    },
    {
      icon: Layers,
      title: "Design Systems",
      description: "Scalable component libraries for consistent branding."
    }
  ]
};

export const designServiceProcess = {
  title: "Our Creative Process",
  steps: [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your brand, audience, and goals through workshops and research."
    },
    {
      number: "02",
      title: "Wireframing",
      description: "Structuring the information architecture and user flow without visual distractions."
    },
    {
      number: "03",
      title: "Visual Design",
      description: "Applying your brand identity, colors, and typography to create high-fidelity mockups."
    },
    {
      number: "04",
      title: "Prototyping",
      description: "Creating interactive prototypes to test interactions and gather feedback."
    }
  ]
};

export const designServiceCapabilities = {
  title: "Design Capabilities",
  items: [
    "User Interface (UI) Design",
    "User Experience (UX) Design",
    "Brand Identity & Logo Design",
    "Mobile App Design",
    "Interaction Design",
    "Design Audits"
  ]
};

export const designServiceFAQs = [
  {
    question: "Do you provide the source files?",
    answer: "Yes, upon project completion and final payment, we transfer all source files (Figma, Sketch, Adobe XD) to you."
  },
  {
    question: "Can you work with our existing brand guidelines?",
    answer: "Absolutely. We are experts at strictly adhering to brand guidelines while finding creative ways to express them digitally."
  },
  {
    question: "How many revisions do I get?",
    answer: "Our standard process includes two rounds of revisions at each stage (wireframes, visual design). Additional revisions can be accommodated."
  }
];

export const designServiceCTA = {
  title: "Let's Design Something Beautiful",
  description: "Ready to govern your brand's digital system?",
  button: { text: "Request a Systems Audit", page: "contact" }
};