/**
 * Services Landing Page Data
 * 
 * Mock data for the Services Landing page (ServicesLandingTemplate).
 */

import { Search, Palette, Code, HeadphonesIcon, Server, RefreshCw, Shield, FileText, Mail } from 'lucide-react';

export const servicesLandingHero = {
  title: "Your partner in WordPress success",
  subtitle: "WordPress websites designed to take your online business to the next level.",
  badge: "SERVICES",
  primaryButton: { text: "Free Consultation", page: "contact" },
  secondaryButton: { text: "View Our Work", page: "portfolio-archive" }
};

export const servicesLandingGrid = [
  {
    id: 'discovery',
    icon: Search,
    title: 'Discovery',
    description: 'Our discovery service is your business, we want to delve on how best to optimize online success.',
    link: 'discovery-service',
    linkText: 'View about Discovery →'
  },
  {
    id: 'design',
    icon: Palette,
    title: 'Design',
    description: 'We build your custom UI/Wireframes as how best to optimize website performance.',
    link: 'design-service',
    linkText: 'View about Design →'
  },
  {
    id: 'development',
    icon: Code,
    title: 'Development',
    description: 'Expert team develop your site fully operational and add which get from exceptionally.',
    link: 'development-service',
    linkText: 'View about Development →'
  },
  {
    id: 'support',
    icon: HeadphonesIcon,
    title: 'Support',
    description: 'Expertise you can consistently rely on for three months excellent support.',
    link: 'support-service',
    linkText: 'View about Support →'
  },
  {
    id: 'hosting',
    icon: Server,
    title: 'Hosting',
    description: 'Store and create managed WordPress hosting has given you peace of mind.',
    link: 'hosting',
    linkText: 'View about Hosting →'
  },
  {
    id: 'migrations',
    icon: RefreshCw,
    title: 'Migrations',
    description: 'We are experts at migration-stressed smoothly into WordPress.',
    link: 'migrations-service',
    linkText: 'View about Migrations →'
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security',
    description: 'We do sleep easier too, as we focused on keeping you better very secure.',
    link: 'security-service',
    linkText: 'View about Security →'
  },
  {
    id: 'content',
    icon: FileText,
    title: 'Content',
    description: 'Building strategy for conversation, all with strategy and have fast.',
    link: 'content-service',
    linkText: 'View about Content →'
  },
  {
    id: 'mailchimp',
    icon: Mail,
    title: 'Mailchimp',
    description: 'We can help you set the rest of your email marketing to you!',
    link: 'mailchimp',
    linkText: 'View about Mailchimp →'
  }
];

export const servicesLandingWhy = {
  title: "We apply experience and expertise to design and develop your online success.",
  description: "A mix of over 15 years' experience, passion, a bunch of talented developers, brilliant designers and marketers. PLUS heaps of integrity!",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
};

export const servicesLandingFeatured = {
  title: "Our work speaks for itself — see a recent case study",
  description: "See how we helped transform their online presence with modern WordPress development and strategic design.",
  stats: [
    { value: '600K+', label: 'Websites' },
    { value: '15+', label: 'Years' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' }
  ]
};

export const servicesLandingCTA = {
  title: "Ready to get started?",
  description: "Book a free consultation with our WordPress experts and discover the perfect solution for your business.",
  button: { text: "Book Your Free Consultation", page: "contact" }
};
