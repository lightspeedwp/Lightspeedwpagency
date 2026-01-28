/**
 * Mailchimp Solution Page Data
 * 
 * Mock data for the Mailchimp Solution page (MailchimpSolutionTemplate).
 */

import { Mail, Zap, Users, BarChart2, CheckCircle } from 'lucide-react';

export const mailchimpSolutionHero = {
  title: "Mailchimp for WordPress",
  subtitle: "Seamlessly integrate your email marketing with your WordPress website and WooCommerce store.",
  badge: { text: "EMAIL INTEGRATION", icon: Mail },
  primaryButton: { text: "Connect Now", page: "contact" }
};

export const mailchimpSolutionFeatures = {
  title: "Powerful Integration Features",
  features: [
    {
      icon: Users,
      title: "Sync Contacts",
      description: "Automatically sync WordPress users and WooCommerce customers to Mailchimp audiences."
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Trigger email series based on user actions, purchases, or sign-ups."
    },
    {
      icon: BarChart2,
      title: "E-commerce Data",
      description: "Send purchase data to Mailchimp for targeted product recommendations and ROI tracking."
    }
  ]
};

export const mailchimpSolutionBenefits = [
  "Increase subscriber growth with optimized forms",
  "Recover lost sales with abandoned cart emails",
  "Segment your audience based on purchase history",
  "Personalize content with merge tags"
];

export const mailchimpSolutionCTA = {
  title: "Supercharge Your Email Marketing",
  description: "Let us handle the technical setup so you can focus on the message.",
  button: { text: "Get Integrated", page: "contact" }
};
