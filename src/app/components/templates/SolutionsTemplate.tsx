/**
 * Solutions Overview Template
 * 
 * WordPress template: templates/page-solutions.html
 * 
 * **Purpose:** Solutions overview/archive page showing all available solution packages.
 * 
 * **Data Source:** `/src/app/data/solutions.ts`
 * 
 * **Pattern Order:**
 * - Breadcrumbs
 * - PageHeader (title + description)
 * - Solutions Grid
 * - TestimonialGrid (social proof)
 * - CTASection
 * 
 * **Design System:**
 * - 100% CSS variables from theme.css
 * - Lexend for headings/body
 * - Manrope for small text
 * - Tailwind spacing classes
 * 
 * **Accessibility:**
 * - Keyboard navigation
 * - Screen reader friendly
 * - WCAG 2.1 AA compliant
 * 
 * @see {@link /guidelines/templates/page-solutions.md}
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../common/Heading';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Button } from '../blocks/design/Buttons';
import { TestimonialGrid } from '../patterns/TestimonialGrid';
import { CTASection } from '../patterns/CTASection';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { useNavigation } from '../../contexts/NavigationContext';
import { solutions, getFeaturedSolutions } from '../../data/solutions';
import { featuredTestimonials } from '../../data/testimonials';
import { Check, ArrowRight } from 'lucide-react';