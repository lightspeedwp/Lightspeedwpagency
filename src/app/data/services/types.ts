/**
 * Service Type Definitions
 * 
 * Shared TypeScript interfaces for service data files.
 * 
 * **Usage:**
 * Import these types in individual service files to ensure consistent data structure.
 */

import { type Icon } from '@phosphor-icons/react';

/**
 * Service Process Step Interface
 * 
 * Represents a single step in a service process
 */
export interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
}

/**
 * Sub-service Interface
 * 
 * Represents a specific service offering within a main service
 */
export interface SubService {
  id: string;
  title: string;
  description: string;
  icon?: Icon;
}

/**
 * Detailed Service Interface
 * 
 * Extended service information for individual service pages
 */
export interface DetailedService {
  id: string;
  slug: string;
  headline: string;
  tagline: string;
  description: string;
  whyLightSpeed: {
    title: string;
    description: string;
  };
  subServices: SubService[];
  process: {
    title: string;
    description?: string;
    steps: ProcessStep[];
  };
  relatedServices?: {
    title: string;
    description: string;
    page: string;
  }[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonPage: string;
  };
}

/**
 * Service Category Types
 */
export type ServiceCategory = 'design' | 'development' | 'strategy' | 'support';

/**
 * Service Pricing Interface
 * 
 * @property {string} starting - Starting price
 * @property {string} typical - Typical project price
 * @property {string} timeframe - Typical timeframe
 */
export interface ServicePricing {
  starting: string;
  typical: string;
  timeframe: string;
}

/**
 * Detailed Service Pricing
 * 
 * Extended pricing information for service detail pages.
 */
export interface ServicePricingDetailed {
  /** Minimum price (USD) */
  min: number;
  /** Maximum price (USD) */
  max: number;
  /** Pricing unit */
  unit: 'project' | 'monthly' | 'hourly';
  /** Starting price label */
  startingFrom: string;
  /** What affects pricing */
  variables: string[];
  /** What's included in price */
  includes: string[];
}

/**
 * Service Timeline
 * 
 * Timeline information for a service.
 */
export interface ServiceTimeline {
  /** Estimated duration (number) */
  duration: number;
  /** Timeline unit */
  unit: 'weeks' | 'months';
  /** Phase breakdown */
  phases: {
    name: string;
    duration: string;
  }[];
  /** What affects timeline */
  variables: string[];
}

/**
 * Simplified Service Interface
 * 
 * Simplified service structure for overview/grid displays.
 */
export interface SimpleService {
  id: string;
  icon: Icon;
  title: string;
  description: string;
  page: string;
  features: string[];
}

/**
 * Service Interface
 * 
 * Basic service information for cards and listings
 */
export interface Service {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: ServiceCategory;
  icon: Icon;
  features: string[];
  pricing: ServicePricing;
  deliverables: string[];
  buttonText: string;
  buttonPage: string;
  popular?: boolean;
}