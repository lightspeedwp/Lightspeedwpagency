/**
 * 404 Template
 * 
 * WordPress template: templates/404.html
 * 
 * **Purpose:** Error page for content not found (utility page archetype).
 * 
 * **Data Source:** `/src/app/data/blog-posts.ts` (latest posts for suggestions)
 * 
 * **Pattern Order:**
 * - EmptyState (404 error message)
 * - Search utility
 * - Latest Posts (suggestions)
 * - Categories (navigation)
 * - FAQSection (common questions)
 * - CTASection (conversion)
 * 
 * **Conversion Strategy:**
 * - Search utility: Help users find what they need
 * - Latest posts: Guide users to popular content
 * - FAQSection: Answer common questions
 * - CTASection: Convert lost visitors
 * 
 * **Design System:**
 * - 100% CSS variables from theme.css
 * - Lexend for headings/body
 * - Manrope for small text
 * - Tailwind spacing classes
 * 
 * **Accessibility:**
 * - Keyboard navigation
 * - ARIA labels for screen readers
 * - WCAG 2.1 AA compliant
 * 
 * @see {@link /guidelines/templates/404.md}
 * @see {@link /guidelines/patterns/EmptyState.md}
 */

import { useState } from 'react';
import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../common/Heading';
import { Button } from '../blocks/design/Buttons';
import { FAQSection } from '../patterns/FAQSection';
import { CTASection } from '../patterns/CTASection';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { useNavigation } from '../../contexts/NavigationContext';
import { blogPosts, blogCategories } from '../../data/blog-posts';
import { generalFAQs } from '../../data/faqs';
import { AlertTriangle, Search, ArrowRight, Home } from 'lucide-react';