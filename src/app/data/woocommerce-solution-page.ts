/**
 * WooCommerce Solution Page Data
 * 
 * Mock data for the WooCommerce Solution page (WooCommerceSolutionTemplate).
 */

import { ShoppingCart, CreditCard, Box, TrendingUp, Truck, Users } from 'lucide-react';

export const wooCommerceSolutionHero = {
  title: "WooCommerce Development",
  subtitle: "Custom e-commerce solutions that drive sales, manage inventory, and delight customers.",
  badge: { text: "E-COMMERCE EXPERTS", icon: ShoppingCart },
  primaryButton: { text: "Build Your Store", page: "contact" },
  secondaryButton: { text: "View Case Studies", page: "portfolio" }
};

export const wooCommerceSolutionFeatures = {
  title: "Powerful E-Commerce Features",
  features: [
    {
      icon: Box,
      title: "Inventory Management",
      description: "Sync stock across channels and manage complex product variations."
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Integration with Stripe, PayPal, and local payment gateways."
    },
    {
      icon: Truck,
      title: "Shipping & Fulfillment",
      description: "Automated shipping calculations and tracking integrations."
    },
    {
      icon: Users,
      title: "Customer Accounts",
      description: "Self-service portals for order history and profile management."
    },
    {
      icon: TrendingUp,
      title: "Marketing Integration",
      description: "Connect with Facebook Ads, Google Shopping, and email platforms."
    }
  ]
};

export const wooCommerceSolutionServices = {
  title: "WooCommerce Services",
  items: [
    "Custom Store Design",
    "Plugin Customization",
    "Subscription Models",
    "B2B Wholesale Portals",
    "Marketplace Multi-vendor",
    "Migration to WooCommerce"
  ]
};

export const wooCommerceSolutionCTA = {
  title: "Start Selling Online",
  description: "Create a store that looks great and converts better.",
  button: { text: "Launch Your Store", page: "contact" }
};
