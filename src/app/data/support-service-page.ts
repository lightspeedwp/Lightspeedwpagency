/**
 * Support Service Page Data
 * 
 * Mock data for the Support Service page (SupportServiceTemplate).
 */

import { Headphones, LifeBuoy, Clock, Wrench, ShieldCheck, Heart } from 'lucide-react';

export const supportServiceHero = {
  title: "WordPress Maintenance & Support",
  subtitle: "Expert care for your website. Updates, backups, and fixes—so you can focus on your business.",
  badge: { text: "24/7 SUPPORT", icon: Headphones },
  primaryButton: { text: "View Support Plans", page: "#plans" }
};

export const supportServiceFeatures = {
  title: "What We Handle",
  features: [
    {
      icon: Wrench,
      title: "Core & Plugin Updates",
      description: "Testing and applying updates safely to prevent conflicts."
    },
    {
      icon: Clock,
      title: "Uptime Monitoring",
      description: "We know if your site goes down before you do."
    },
    {
      icon: ShieldCheck,
      title: "Daily Backups",
      description: "Off-site backups ensuring your data is never lost."
    },
    {
      icon: LifeBuoy,
      title: "Emergency Fixes",
      description: "Rapid response if something breaks."
    }
  ]
};

export const supportServicePlans = [
  {
    name: "Essential",
    price: "$99",
    period: "/mo",
    features: [
      "Weekly Updates",
      "Daily Backups",
      "Uptime Monitoring",
      "Security Scans",
      "Email Support"
    ],
    cta: { text: "Sign Up", page: "contact" }
  },
  {
    name: "Growth",
    price: "$199",
    period: "/mo",
    popular: true,
    features: [
      "Daily Updates",
      "Real-time Backups",
      "Performance Optimization",
      "1 Hour Dev Time",
      "Priority Support"
    ],
    cta: { text: "Sign Up", page: "contact" }
  },
  {
    name: "Premium",
    price: "$499",
    period: "/mo",
    features: [
      "Custom Update Schedule",
      "Staging Environment",
      "Advanced Security",
      "5 Hours Dev Time",
      "Phone Support"
    ],
    cta: { text: "Sign Up", page: "contact" }
  }
];

export const supportServiceCTA = {
  title: "Get Peace of Mind",
  description: "Let experts handle the technical details while you grow your business.",
  button: { text: "Get Support Now", page: "contact" }
};
