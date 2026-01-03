/**
 * Index Template
 * 
 * WordPress template: templates/index.html
 * 
 * **Purpose:** Main blog index page (editorial listing archetype).
 * 
 * **Data Source:** `/src/app/data/blog-posts.ts`
 * 
 * **Pattern Order:**
 * - Breadcrumbs
 * - Listing Header (title + description)
 * - Category Filters
 * - Post Grid
 * - Pagination
 * - NewsletterSignup
 * - CTASection
 * 
 * **Conversion Strategy:**
 * - NewsletterSignup: Capture blog readers
 * - CTASection: Convert interested visitors
 * 
 * **Design System:**
 * - 100% CSS variables from theme.css
 * - Lexend for headings/body
 * - Manrope for small text
 * - Tailwind spacing classes
 * 
 * **Accessibility:**
 * - Keyboard navigation for filters
 * - Screen reader friendly post grid
 * - WCAG 2.1 AA compliant
 * 
 * @see {@link /guidelines/templates/index.md}
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../common/Heading';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { NewsletterSignup } from '../patterns/NewsletterSignup';
import { CTASection } from '../patterns/CTASection';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { useNavigation } from '../../contexts/NavigationContext';
import { blogPosts, blogCategories } from '../../data/blog-posts';
import { useState } from 'react';
import { Calendar, User, Tag as TagIcon, Clock } from 'lucide-react';