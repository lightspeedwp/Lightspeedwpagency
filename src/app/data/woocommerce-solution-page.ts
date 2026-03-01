/**
 * WooCommerce Solution Page Data
 * 
 * Content for the WooCommerce Solution template.
 */

import { ShoppingCart, CreditCard, TrendingUp, Truck, Package, Settings } from 'lucide-react';

export const woocommerceSolutionHero = {
  title: "High-Performance WooCommerce Stores",
  subtitle: "Build a powerful, scalable online store that converts visitors into loyal customers.",
  badge: { text: "WOOCOMMERCE EXPERTS", icon: ShoppingCart },
  primaryButton: { text: "Build Your Store", page: "contact" },
  secondaryButton: { text: "View Case Studies", page: "portfolio-archive" }
};

export const woocommerceSolutionFeatures = {
  title: "Complete E-Commerce Features",
  features: [
    {
      icon: Settings,
      title: "Custom Development",
      description: "Tailored functionality to match your unique business model and workflows."
    },
    {
      icon: CreditCard,
      title: "Payment Gateways",
      description: "Seamless integration with Stripe, PayPal, and regional payment providers."
    },
    {
      icon: TrendingUp,
      title: "Conversion Focused",
      description: "Optimized checkout flows and user journeys to maximize sales."
    },
    {
      icon: Truck,
      title: "Shipping & Logistics",
      description: "Advanced shipping calculations and integration with fulfillment partners."
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Sync stock levels across channels and manage complex product catalogs."
    },
    {
      icon: ShoppingCart,
      title: "Subscription Models",
      description: "Setup recurring revenue streams with WooCommerce Subscriptions."
    }
  ]
};

export const woocommerceSolutionCTA = {
  title: "Launch a Governed WooCommerce Store",
  description: "Build on WooCommerce with governed checkout, inventory, and conversion systems.",
  button: { text: "Consult with an Expert", page: "contact" }
};