/**
 * Maintenance Mode Data
 * 
 * Content for the Maintenance Mode page.
 */

import { Clock, ArrowCounterClockwise } from '@phosphor-icons/react';

export const maintenanceModeContent = {
  active: false, // Set to true to enable maintenance mode
  title: "We're Under Maintenance",
  subtitle: "We'll be back shortly.",
  message: "We're currently performing some scheduled maintenance to improve our services. We apologize for any inconvenience and appreciate your patience.",
  illustration: "https://images.unsplash.com/photo-1581092921461-eab62e97a78e?w=800&q=80",
  estimatedTime: "Check back in a few hours.",
  socialLinks: true, // Show social links
  contactEmail: "support@lightspeedwp.agency",
  icon: ArrowCounterClockwise
};