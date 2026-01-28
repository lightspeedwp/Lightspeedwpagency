/**
 * LSX Sharing Page Data
 * 
 * Mock data for the LSX Sharing page (LSXSharingTemplate).
 */

import { Share2, Zap, Layout, Settings } from 'lucide-react';

export const lsxSharingHero = {
  title: "LSX Sharing",
  subtitle: "A lightweight, performance-focused social sharing plugin for WordPress.",
  badge: { text: "SOCIAL SHARING", icon: Share2 },
  primaryButton: { text: "Download Now", page: "https://wordpress.org/plugins/lsx-sharing/" }
};

export const lsxSharingFeatures = {
  title: "Why Use LSX Sharing?",
  features: [
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
    }
  ]
};

export const lsxSharingCTA = {
  title: "Get More Shares",
  description: "Make it easy for visitors to share your content without slowing down your site.",
  button: { text: "Get the Plugin", page: "contact" }
};
