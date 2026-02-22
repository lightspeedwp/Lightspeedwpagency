/**
 * Author Archive Data
 * 
 * Helper functions and data for Author archives.
 */

import { blogAuthors } from './blog-posts';

export const authorArchiveHero = {
  title: "Our Writers",
  subtitle: "Insights from the people building the web.",
  badge: { text: "THOUGHT LEADERSHIP", icon: "PenTool" } // Icon name as string to avoid import issues if lazy loaded
};

export const getAuthorSocialLinks = (authorSlug: string) => {
  const author = blogAuthors.find(a => a.slug === authorSlug);
  return author?.social || {};
};
