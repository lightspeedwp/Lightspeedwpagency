/**
 * Search Results Template
 * 
 * WordPress template: templates/search.html
 * 
 * **Purpose:** Search results display page (utility page archetype).
 * 
 * **Data Source:** `/src/app/data/blog-posts.ts` (search across all content)
 * 
 * **Pattern Order:**
 * - Breadcrumbs
 * - Search Header (query + result count)
 * - Search Form (refine search)
 * - Results Grid
 * - Pagination
 * - EmptyState (no results)
 * - NewsletterSignup
 * - CTASection
 * 
 * **Conversion Strategy:**
 * - NewsletterSignup: Capture visitors who didn't find what they need
 * - CTASection: Offer alternative next steps (contact, services)
 * 
 * **Design System:**
 * - 100% CSS variables from theme.css
 * - Lexend for headings/body
 * - Manrope for small text
 * - Tailwind spacing classes
 * 
 * **Accessibility:**
 * - Search form keyboard accessible
 * - Results have proper heading hierarchy
 * - WCAG 2.1 AA compliant
 * 
 * @see {@link /guidelines/templates/search-results.md}
 * @see {@link /guidelines/patterns/EmptyState.md}
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../common/Heading';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Button } from '../blocks/design/Buttons';
import { NewsletterSignup } from '../patterns/NewsletterSignup';
import { CTASection } from '../patterns/CTASection';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { useNavigation } from '../../contexts/NavigationContext';
import { blogPosts } from '../../data/blog-posts';
import { portfolioProjects } from '../../data/portfolio-projects';
import { services } from '../../data/services';
import { useState } from 'react';
import { Search, FileText, Calendar, User, ArrowRight } from 'lucide-react';