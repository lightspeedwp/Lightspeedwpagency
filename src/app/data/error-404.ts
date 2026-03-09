/**
 * 404 Page Data
 * 
 * Content for the 404 Not Found page.
 */

import { MagnifyingGlass, House, ArrowRight } from '@phosphor-icons/react';

export const error404Content = {
  title: "404 - Page Not Found",
  subtitle: "Oops! Looks like you've ventured off the map.",
  description: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
  illustration: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800&q=80",
  backButton: {
    text: "Back to Home",
    url: "/",
    icon: House
  },
  searchPlaceholder: "Search our site...",
  suggestedLinks: [
    { text: "View Our Services", url: "/services", icon: ArrowRight },
    { text: "Read Our Blog", url: "/blog", icon: ArrowRight },
    { text: "Contact Support", url: "/contact", icon: ArrowRight }
  ]
};