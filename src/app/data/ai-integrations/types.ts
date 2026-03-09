/**
 * AI Integrations — Shared Types
 *
 * Type definitions shared across all AI integration pages.
 *
 * @see /src/app/data/ai-integrations/index.ts
 */

import { type Icon } from '@phosphor-icons/react';

export interface AIHero {
  title: string;
  titleHighlight: string;
  tagline: string;
  badge: { text: string; icon: Icon };
  primaryButton: { text: string; page: string };
  secondaryButton: { text: string; page: string };
}

export interface AIStat {
  icon: Icon;
  value: string;
  label: string;
  description: string;
}

export interface AIFeature {
  icon: Icon;
  title: string;
  description: string;
}

export interface AIUseCase {
  title: string;
  description: string;
  industries: string[];
  features: string[];
}

export interface AIPricingPackage {
  name: string;
  description: string;
  price: string;
  features: string[];
  recommended: boolean;
}

export interface AIFAQ {
  question: string;
  answer: string;
}

export interface AICTA {
  title: string;
  description: string;
  buttons: { text: string; page: string }[];
}

export interface AISubPageCard {
  icon: Icon;
  title: string;
  description: string;
  slug: string;
  accent: string;
}
