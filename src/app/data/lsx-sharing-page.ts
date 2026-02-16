/**
 * LSX Sharing Page Data
 * 
 * Mock data for the LSX Sharing page (LSXSharingTemplate).
 */

import { Share2, Zap, Layout, Settings, Globe, Shield, Smartphone, BarChart2 } from 'lucide-react';

export const lsxSharingHero = {
  title: "LSX Sharing",
  titleHighlight: "Sharing",
  description: "A lightweight, performance-focused social sharing plugin for WordPress. No external scripts, no API calls — just fast, beautiful SVG share buttons.",
  subtitle: "A lightweight, performance-focused social sharing plugin for WordPress.",
  badge: { text: "SOCIAL SHARING", icon: Share2 },
  primaryButton: { text: "Download Now", page: "https://wordpress.org/plugins/lsx-sharing/" },
  cta: {
    primary: { text: "Download Now", page: "contact" },
    secondary: { text: "View on GitHub", page: "contact" }
  }
};

export const lsxSharingFeatures = [
  {
    icon: Zap,
    title: "Blazing Fast",
    description: "No external scripts or heavy API calls. Just pure, fast SVG icons."
  },
  {
    icon: Layout,
    title: "Block Editor Ready",
    description: "Includes a custom block to place share buttons anywhere in your layout."
  },
  {
    icon: Settings,
    title: "Customizable",
    description: "Choose which networks to display and customize colors to match your brand."
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Responsive share buttons that look great on all devices and screen sizes."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "No tracking scripts or cookies. Share buttons that respect your visitors' privacy."
  },
  {
    icon: BarChart2,
    title: "Share Counts",
    description: "Optional share count display to show social proof and encourage more sharing."
  }
];

/**
 * Benefits Section
 */
export const lsxSharingBenefits = [
  {
    title: "Increase Content Reach",
    description: "Make it effortless for visitors to share your content across social networks. More shares mean more organic traffic."
  },
  {
    title: "Zero Performance Impact",
    description: "Unlike heavy social plugins, LSX Sharing uses inline SVGs and zero external scripts. Your page speed score stays perfect."
  },
  {
    title: "Brand Consistent",
    description: "Customize button colors, sizes, and placement to match your brand. No generic styling that clashes with your design."
  },
  {
    title: "GDPR Compliant",
    description: "No tracking cookies or external requests until the user clicks share. Fully compliant with privacy regulations out of the box."
  }
];

/**
 * How It Works Section
 */
export const lsxSharingProcess = [
  {
    step: 1,
    title: "Install the Plugin",
    description: "Install LSX Sharing from the WordPress plugin repository — free and open source."
  },
  {
    step: 2,
    title: "Choose Your Networks",
    description: "Select which social networks to display from our curated list of the most popular platforms."
  },
  {
    step: 3,
    title: "Customize Appearance",
    description: "Adjust colors, sizes, and placement to perfectly match your website's design system."
  },
  {
    step: 4,
    title: "Start Sharing",
    description: "Share buttons appear automatically on your posts and pages. Watch your social reach grow."
  }
];

/**
 * Supported Networks Section
 */
export const lsxSharingNetworks = {
  title: "Supported Social Networks",
  description: "Share to all the major platforms your audience uses",
  networks: [
    { name: "Facebook", description: "Share posts and pages to Facebook with Open Graph metadata support." },
    { name: "X (Twitter)", description: "Tweet content with customizable tweet text and hashtag support." },
    { name: "LinkedIn", description: "Share professional content to LinkedIn profiles and company pages." },
    { name: "Pinterest", description: "Pin images with descriptions optimized for Pinterest discovery." },
    { name: "WhatsApp", description: "Share directly to WhatsApp conversations and groups." },
    { name: "Email", description: "Email content with pre-filled subject lines and body text." },
    { name: "Reddit", description: "Submit content to Reddit with automatic title and URL formatting." },
    { name: "Telegram", description: "Share to Telegram chats and channels with rich link previews." }
  ]
};

/**
 * Technical Specifications Section
 */
export const lsxSharingSpecs = {
  title: "Technical Specifications",
  specs: [
    { label: "Compatibility", value: "WordPress 5.0+" },
    { label: "PHP Version", value: "PHP 7.2 or higher" },
    { label: "External Scripts", value: "Zero — pure SVG and native sharing APIs" },
    { label: "File Size", value: "< 10KB total (CSS + SVG icons)" },
    { label: "Networks", value: "8 social networks supported" },
    { label: "License", value: "GPL v3 — 100% Free and Open Source" }
  ]
};

/**
 * FAQ Section
 */
export const lsxSharingFAQs = [
  {
    question: "Is LSX Sharing really free?",
    answer: "Yes, 100% free with no premium version, upsells, or hidden costs. It's open source under the GPL v3 license."
  },
  {
    question: "Will it slow down my website?",
    answer: "No. LSX Sharing uses inline SVGs and zero external scripts or API calls. It adds less than 10KB to your page weight."
  },
  {
    question: "Does it track my visitors?",
    answer: "No. LSX Sharing does not load any tracking scripts or set cookies. Share API calls are only made when a user clicks a share button."
  },
  {
    question: "Can I customize the button appearance?",
    answer: "Yes, you can customize colors, sizes, icon style, and placement. The plugin respects your theme's design system."
  },
  {
    question: "Does it work with caching plugins?",
    answer: "Yes, LSX Sharing is fully compatible with all major caching plugins including WP Super Cache, W3 Total Cache, and WP Rocket."
  }
];

export const lsxSharingCTA = {
  title: "Get More Shares",
  description: "Make it easy for visitors to share your content without slowing down your site. Free, fast, and privacy-first.",
  button: { text: "Get the Plugin", page: "contact" },
  buttons: [
    { text: "Download Free", page: "contact" },
    { text: "View on GitHub", page: "contact" }
  ]
};