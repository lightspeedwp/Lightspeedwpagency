/**
 * Portfolio Mock Data (DEPRECATED - Use portfolio-projects.ts)
 * 
 * This file maintained for backward compatibility.
 * New code should import from /src/app/data/portfolio-projects.ts
 * 
 * @deprecated Use portfolio-projects.ts instead
 */

import {
  portfolioProjects as newProjects,
  featuredProjects as newFeaturedProjects,
  projectGroups,
  projectTags,
  projectTypes,
  getProjectBySlug as getNewProjectBySlug,
  getProjectsByGroup as getNewProjectsByGroup,
  getProjectsByTag as getNewProjectsByTag,
  getProjectsByType as getNewProjectsByType,
  getRecentProjects as getNewRecentProjects,
  searchProjects as newSearchProjects,
  type PortfolioProject as NewPortfolioProject
} from './portfolio-projects';

/**
 * Legacy Portfolio Project Interface
 * Kept for backward compatibility
 */
export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  client: string;
  industry: string;
  category: string;
  technologies: string[];
  caseStudy: {
    challenge: string;
    solution: string;
    results: {
      metric: string;
      value: string;
      description: string;
    }[];
    technologies: string[];
    timeline: string;
    budget: string;
    url?: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
    avatar?: string;
  };
  date: string;
  featured: boolean;
}

/**
 * Convert new portfolio format to legacy format
 */
function convertToLegacyProject(project: NewPortfolioProject): PortfolioProject {
  return {
    id: project.id,
    slug: project.slug,
    title: project.title,
    excerpt: project.excerpt,
    featuredImage: project.featuredImage,
    client: project.client,
    industry: project.projectGroups[0] || 'technology',
    category: project.projectTypes[0] || 'new-build',
    technologies: project.caseStudy.technologies,
    caseStudy: project.caseStudy,
    testimonial: project.testimonial,
    date: project.date,
    featured: project.featured
  };
}

/**
 * Portfolio Projects (Converted from new structure)
 */
export const portfolioProjects: PortfolioProject[] = newProjects.map(convertToLegacyProject);

/**
 * Featured Projects
 */
export const featuredProjects: PortfolioProject[] = newFeaturedProjects.map(convertToLegacyProject);

/**
 * Industries (Mapped from project_group taxonomy)
 */
export const industries = projectGroups.map(g => ({
  slug: g.slug,
  name: g.name,
  count: g.count
}));

/**
 * Categories (Mapped from project_type taxonomy)
 */
export const categories = projectTypes.map(t => ({
  slug: t.slug,
  name: t.name,
  count: t.count
}));

/**
 * Technologies (Mapped from project_tag taxonomy)
 */
export const technologies = projectTags.map(t => ({
  slug: t.slug,
  name: t.name,
  count: t.count
}));

/**
 * Helper Functions (Backward Compatibility)
 */

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  const project = getNewProjectBySlug(slug);
  return project ? convertToLegacyProject(project) : undefined;
}

export function getProjectsByIndustry(industry: string): PortfolioProject[] {
  return getNewProjectsByGroup(industry).map(convertToLegacyProject);
}

export function getProjectsByCategory(category: string): PortfolioProject[] {
  return getNewProjectsByType(category).map(convertToLegacyProject);
}

export function getProjectsByTechnology(tech: string): PortfolioProject[] {
  return getNewProjectsByTag(tech).map(convertToLegacyProject);
}

export function getRecentProjects(limit: number = 6): PortfolioProject[] {
  return getNewRecentProjects(limit).map(convertToLegacyProject);
}

export function searchProjects(query: string): PortfolioProject[] {
  return newSearchProjects(query).map(convertToLegacyProject);
}
