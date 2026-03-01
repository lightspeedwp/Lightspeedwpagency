/**
 * Security Service Page Data
 * 
 * Mock data for the Security Service page (SecurityServiceTemplate).
 */

import { Shield, Lock, Eye, AlertTriangle, FileCheck, Server } from 'lucide-react';

export const securityServiceHero = {
  title: "WordPress Security Services",
  subtitle: "Proactive protection for your mission-critical websites. Sleep soundly knowing your data is safe.",
  badge: { text: "SECURITY HARDENING", icon: Shield },
  primaryButton: { text: "Request a Systems Audit", page: "contact" }
};

export const securityServiceFeatures = {
  title: "Comprehensive Protection",
  features: [
    {
      icon: Lock,
      title: "Malware Protection",
      description: "Regular scanning and automated removal of malicious code."
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Real-time uptime and security monitoring with instant alerts."
    },
    {
      icon: Server,
      title: "Firewall Configuration",
      description: "Web Application Firewall (WAF) setup to block attacks."
    },
    {
      icon: FileCheck,
      title: "Audit Logs",
      description: "Detailed tracking of all user activity and file changes."
    }
  ]
};

export const securityServiceProcess = {
  title: "Our Security Protocol",
  steps: [
    { step: "Audit", description: "Vulnerability assessment and penetration testing." },
    { step: "Harden", description: "Patching holes, updating core/plugins, and configuring headers." },
    { step: "Monitor", description: "Continuous surveillance of traffic and file integrity." },
    { step: "Respond", description: "Immediate incident response in case of any threat." }
  ]
};

export const securityServiceCTA = {
  title: "Don't Wait for a Breach",
  description: "Prevention is cheaper than recovery. Secure your business today.",
  button: { text: "Request a Systems Audit", page: "contact" }
};
