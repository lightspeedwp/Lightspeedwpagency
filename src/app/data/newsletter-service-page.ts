/**
 * Newsletter Service Page Data
 * 
 * Mock data for the Newsletter Service page (NewsletterServiceTemplate).
 */

import { Mail, BarChart2, Users, Send, PenTool, Zap } from 'lucide-react';

export const newsletterServiceHero = {
  title: "Email Marketing That Converts",
  subtitle: "Build, grow, and engage your audience with data-driven email campaigns and automation.",
  badge: { text: "EMAIL MARKETING", icon: Mail },
  primaryButton: { text: "Start Growing", page: "contact" }
};

export const newsletterServiceFeatures = {
  title: "Full-Service Email Strategy",
  features: [
    {
      icon: PenTool,
      title: "Custom Design",
      description: "Beautiful, on-brand email templates that look great on any device."
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Set-and-forget flows: Welcome series, abandoned cart, and re-engagement."
    },
    {
      icon: Users,
      title: "List Segmentation",
      description: "Send the right message to the right person at the right time."
    },
    {
      icon: BarChart2,
      title: "Analytics & Reporting",
      description: "Deep dive into open rates, click-throughs, and conversions."
    }
  ]
};

export const newsletterServicePlatforms = {
  title: "Platforms We Support",
  platforms: [
    "Mailchimp",
    "Klaviyo",
    "ActiveCampaign",
    "HubSpot",
    "ConvertKit",
    "SendGrid"
  ]
};

export const newsletterServiceProcess = {
  title: "Our Email Process",
  steps: [
    { step: "Audit", description: "Reviewing your current list health and performance." },
    { step: "Strategy", description: "Developing a content calendar and segmentation plan." },
    { step: "Setup", description: "Configuring templates, automations, and integrations." },
    { step: "Execution", description: "Writing, designing, and sending campaigns." },
    { step: "Optimization", description: "A/B testing and refining based on data." }
  ]
};

export const newsletterServiceCTA = {
  title: "Unlock the Power of Email",
  description: "Stop leaving money on the table. Let's build your email engine.",
  button: { text: "Get Started", page: "contact" }
};
