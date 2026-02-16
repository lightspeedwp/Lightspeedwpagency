/**
 * WooCommerce Solution Page Data
 * 
 * Mock data for the WooCommerce Solution page (WooCommerceSolutionTemplate).
 * All exports use lowercase "woocommerce" to match template imports.
 */

import { ShoppingCart, CreditCard, Box, TrendingUp, Truck, Users, BarChart3, Award, Package, Globe } from 'lucide-react';

export const woocommerceSolutionHero = {
  title: "WooCommerce Development",
  titleHighlight: "WooCommerce",
  tagline: "Custom e-commerce solutions that drive sales, manage inventory, and delight customers.",
  description: "We build high-converting WooCommerce stores tailored to your business goals.",
  badge: { text: "E-COMMERCE EXPERTS", icon: ShoppingCart },
  primaryButton: { text: "Build Your Store", page: "contact" },
  secondaryButton: { text: "View Case Studies", page: "portfolio" }
};

export const woocommerceSolutionOverview = {
  title: "WooCommerce by the Numbers",
  description: "The world's most popular e-commerce platform, powering millions of online stores.",
  stats: [
    {
      icon: ShoppingCart,
      value: "6.5M+",
      label: "Active Stores",
      description: "WooCommerce powers over 6.5 million online stores worldwide"
    },
    {
      icon: Globe,
      value: "28%",
      label: "E-Commerce Share",
      description: "WooCommerce holds 28% of the global e-commerce market"
    },
    {
      icon: BarChart3,
      value: "$20B+",
      label: "Annual Revenue",
      description: "WooCommerce stores process over $20 billion annually"
    },
    {
      icon: Award,
      value: "800+",
      label: "Extensions",
      description: "Official WooCommerce extensions for every business need"
    }
  ]
};

export const woocommerceSolutionFeatures = [
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
  },
  {
    icon: Package,
    title: "Product Variations",
    description: "Complex product types including variable, grouped, and subscription products."
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Built-in sales reports and integration with Google Analytics."
  },
  {
    icon: Globe,
    title: "Multi-Currency Support",
    description: "Sell internationally with multi-currency and multi-language support."
  }
];

export const woocommerceSolutionUseCases = [
  {
    title: "Retail & Fashion",
    description: "Beautiful product catalogs with size guides, color swatches, and lookbook galleries for fashion brands.",
    icon: ShoppingCart,
    features: ["Product variations", "Size guides", "Lookbook galleries"]
  },
  {
    title: "Subscription Boxes",
    description: "Recurring subscription models with flexible billing cycles and customer self-management portals.",
    icon: Package,
    features: ["Recurring billing", "Flexible cycles", "Customer portals"]
  },
  {
    title: "Digital Products",
    description: "Sell digital downloads, courses, and memberships with instant delivery and access control.",
    icon: TrendingUp,
    features: ["Instant delivery", "Access control", "License management"]
  },
  {
    title: "B2B Wholesale",
    description: "Wholesale portals with tiered pricing, bulk ordering, and customer-specific catalogs.",
    icon: Users,
    features: ["Tiered pricing", "Bulk ordering", "Quote requests"]
  }
];

export const woocommerceSolutionPricing = {
  title: "WooCommerce Development Packages",
  description: "Investment levels for building your online store.",
  packages: [
    {
      name: "Starter Store",
      description: "Perfect for launching your first online store.",
      price: "From $5,000",
      features: [
        "Up to 50 products",
        "Mobile-responsive design",
        "Payment gateway setup",
        "Shipping configuration",
        "30-day support"
      ],
      recommended: false
    },
    {
      name: "Growth Store",
      description: "For established businesses ready to scale online.",
      price: "From $12,000",
      features: [
        "Up to 500 products",
        "Custom theme design",
        "Advanced product types",
        "Marketing integrations",
        "Performance optimization",
        "90-day support"
      ],
      recommended: true
    },
    {
      name: "Enterprise Store",
      description: "For high-volume businesses with complex requirements.",
      price: "From $30,000",
      features: [
        "Unlimited products",
        "Custom plugin development",
        "Multi-vendor marketplace",
        "ERP/CRM integration",
        "Dedicated project manager",
        "12-month support"
      ],
      recommended: false
    }
  ]
};

export const woocommerceSolutionFAQs = [
  {
    question: "Why choose WooCommerce over Shopify?",
    answer: "WooCommerce gives you complete ownership of your data and store, unlimited customization, no transaction fees (beyond payment gateway fees), and the flexibility to build any feature. Shopify is simpler to start but limits customization and charges ongoing fees."
  },
  {
    question: "How many products can WooCommerce handle?",
    answer: "WooCommerce can handle tens of thousands of products with proper optimization. We implement caching, database optimization, and CDN configuration to ensure fast load times regardless of catalog size."
  },
  {
    question: "Can you integrate with my existing systems?",
    answer: "Yes, we integrate WooCommerce with ERPs (SAP, NetSuite), CRMs (Salesforce, HubSpot), shipping providers, accounting software, and custom APIs. We build custom integrations when standard solutions don't exist."
  },
  {
    question: "Is WooCommerce secure for payment processing?",
    answer: "Absolutely. WooCommerce integrates with PCI-compliant payment gateways like Stripe and PayPal. We implement SSL, fraud detection, and security hardening to protect your customers and business."
  },
  {
    question: "Do you offer ongoing WooCommerce support?",
    answer: "Yes, we provide monthly maintenance plans covering plugin updates, security monitoring, performance optimization, and priority support for any store issues or feature requests."
  },
  {
    question: "Can you build a marketplace with WooCommerce?",
    answer: "Yes, we build multi-vendor marketplaces using WooCommerce with features like vendor dashboards, commission management, product moderation, and split payments."
  }
];

export const woocommerceSolutionCTA = {
  title: "Start Selling Online",
  description: "Create a store that looks great and converts better.",
  buttons: [
    { text: "Launch Your Store", page: "contact" },
    { text: "View Case Studies", page: "portfolio" }
  ]
};

export const woocommerceSolutionServices = {
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
