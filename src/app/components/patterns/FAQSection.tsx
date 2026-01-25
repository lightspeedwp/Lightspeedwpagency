/**
 * FAQSection Pattern Component
 * 
 * WordPress pattern: patterns/faq-section.php
 * Pattern category: lsx-design/content
 * 
 * Reusable FAQ accordion pattern that displays frequently asked questions
 * with expandable/collapsible answers. Supports multiple background variants
 * and integrates seamlessly with the design system.
 * 
 * **Purpose:**
 * - Display FAQ content in an accessible accordion format
 * - Reduce page length by showing answers on demand
 * - Support keyboard and screen reader navigation
 * - Provide consistent FAQ styling across all templates
 * 
 * **Features:**
 * - Accordion interaction (expand/collapse)
 * - Single item open at a time (better UX)
 * - Smooth chevron rotation animation
 * - Keyboard accessible (Enter/Space to toggle)
 * - ARIA attributes for screen readers
 * - Responsive design (mobile-first)
 * 
 * **Variants:**
 * - 'default': Standard background color
 * - 'muted': Muted gray background for visual separation
 * - 'card': Card-style background with reversed colors
 * 
 * **Accessibility:**
 * - WCAG 2.1 AA compliant
 * - Keyboard navigation (Tab, Enter, Space)
 * - ARIA expanded/collapsed states
 * - Focus visible indicators
 * - Semantic HTML (button elements)
 * - Screen reader announcements
 * 
 * **Design System:**
 * - Typography: Lexend font family
 * - Font sizes: var(--text-h2), var(--text-base)
 * - Spacing: Tailwind classes (mb-*, gap-*)
 * - Colors: Semantic CSS variables
 * - Border radius: var(--radius-lg)
 * - Transitions: 0.2s ease
 * 
 * **WordPress Pattern Structure:**
 * ```php
 * // patterns/faq-section.php
 * <!-- wp:group {"layout":{"type":"constrained"}} -->
 * <div class="wp-block-group">
 *   <!-- wp:heading -->
 *   <h2>Frequently Asked Questions</h2>
 *   <!-- /wp:heading -->
 *   
 *   <!-- wp:list {"className":"faq-accordion"} -->
 *   <!-- Individual FAQ items as list items -->
 *   <!-- /wp:list -->
 * </div>
 * <!-- /wp:group -->
 * ```
 * 
 * **Usage Locations:**
 * - Homepage (general FAQs)
 * - Services page (service-specific questions)
 * - Contact page (support FAQs)
 * - About page (company FAQs)
 * - Portfolio archive (project FAQs)
 * - Single post template (article FAQs)
 * 
 * **Performance:**
 * - No HTTP requests (inline styles)
 * - Minimal JavaScript (useState only)
 * - Smooth animations (transform/rotate)
 * - Lazy answer rendering (hidden until expanded)
 * 
 * @example
 * // Basic usage with default variant
 * import { homepageFAQs } from '../../data/faqs';
 * 
 * <FAQSection 
 *   title="Frequently Asked Questions"
 *   faqs={homepageFAQs}
 * />
 * 
 * @example
 * // With description and muted background
 * import { servicesFAQs } from '../../data/faqs';
 * 
 * <FAQSection 
 *   title="Common Questions About Our Services"
 *   description="Find answers to the most frequently asked questions"
 *   faqs={servicesFAQs}
 *   variant="muted"
 * />
 * 
 * @example
 * // Card variant for visual distinction
 * import { contactFAQs } from '../../data/faqs';
 * 
 * <FAQSection 
 *   title="Need Help?"
 *   faqs={contactFAQs}
 *   variant="card"
 * />
 * 
 * @example
 * // Custom FAQ data structure
 * const customFAQs = [
 *   {
 *     question: "What is your turnaround time?",
 *     answer: "Typical projects take 4-8 weeks from kickoff to launch."
 *   },
 *   {
 *     question: "Do you offer support?",
 *     answer: "Yes! All projects include 30 days of post-launch support."
 *   }
 * ];
 * 
 * <FAQSection faqs={customFAQs} />
 * 
 * @example
 * // Minimal usage (no title/description)
 * <FAQSection faqs={faqs} variant="default" />
 * 
 * @see {@link /guidelines/patterns/FAQSection.md}
 * @see {@link /src/app/data/faqs.ts}
 */

import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { Accordion, AccordionItem } from '../blocks/design/Accordion';

/**
 * FAQ Item interface
 * 
 * Defines the structure for a single FAQ entry.
 * Used by all FAQ data files in /src/app/data/faqs.ts
 */
export interface FAQItem {
  /**
   * FAQ question text
   * 
   * Should be concise and specific (5-15 words recommended).
   * Appears in accordion header button.
   * 
   * @example
   * "What is your typical project timeline?"
   * 
   * @example
   * "Do you offer custom WordPress development?"
   */
  question: string;
  
  /**
   * FAQ answer text
   * 
   * Can be longer and more detailed (1-3 paragraphs recommended).
   * Hidden by default, shown when accordion is expanded.
   * Supports HTML formatting in WordPress implementation.
   * 
   * @example
   * "Our typical project timeline is 4-8 weeks from kickoff to launch..."
   * 
   * @example
   * "Yes! We specialize in custom WordPress block theme development..."
   */
  answer: string;
}

/**
 * FAQSection component props
 * 
 * Defines title, description, FAQ data, and visual variant.
 */
interface FAQSectionProps {
  /**
   * Section title (optional)
   * 
   * Appears as H2 heading above FAQ accordion.
   * Centered by default.
   * 
   * **Recommended titles:**
   * - "Frequently Asked Questions"
   * - "Common Questions About [Topic]"
   * - "Need Help?"
   * - "Your Questions Answered"
   * 
   * @default "Frequently Asked Questions"
   * 
   * @example
   * title="Common Questions About Our Services"
   * 
   * @example
   * title="WordPress Development FAQs"
   */
  title?: string;
  
  /**
   * Section description (optional)
   * 
   * Appears below title, above FAQ accordion.
   * Provides context or additional information.
   * 
   * **When to use:**
   * - Clarify FAQ scope
   * - Provide additional help options
   * - Set user expectations
   * 
   * @example
   * description="Find answers to the most frequently asked questions about our services"
   * 
   * @example
   * description="Can't find what you're looking for? Contact us for personalized support."
   */
  description?: string;
  
  /**
   * Array of FAQ items (required)
   * 
   * FAQ data imported from /src/app/data/faqs.ts
   * Each item has `question` and `answer` properties.
   * 
   * **Available FAQ collections:**
   * - homepageFAQs (6 items)
   * - servicesFAQs (8 items)
   * - aboutFAQs (6 items)
   * - contactFAQs (7 items)
   * - portfolioFAQs (6 items)
   * - blogFAQs (6 items)
   * - hostingFAQs (8 items)
   * - teamFAQs (5 items)
   * - processFAQs (6 items)
   * - cultureFAQs (5 items)
   * - generalFAQs (8 items)
   * - technicalFAQs (8 items)
   * - pricingFAQs (7 items)
   * 
   * @example
   * import { servicesFAQs } from '../../data/faqs';
   * faqs={servicesFAQs}
   * 
   * @example
   * // Custom FAQs
   * faqs={[
   *   { question: "Q1?", answer: "A1" },
   *   { question: "Q2?", answer: "A2" }
   * ]}
   */
  faqs: FAQItem[];
  
  /**
   * Background variant (optional)
   * 
   * Controls section background color and text colors.
   * Provides visual variety for different page contexts.
   * 
   * **Variants:**
   * - 'default': Standard background (var(--background))
   * - 'muted': Gray background (var(--muted)) for separation
   * - 'card': Card background (var(--card)) with reversed colors
   * 
   * **When to use each:**
   * - default: Most pages, standard sections
   * - muted: Alternating sections, visual breaks
   * - card: Emphasis, CTAs, special sections
   * 
   * @default 'default'
   * 
   * @example
   * variant="default" // Standard background
   * 
   * @example
   * variant="muted" // Gray background for separation
   * 
   * @example
   * variant="card" // Card-style with emphasis
   */
  variant?: 'default' | 'muted' | 'card';
}

export function FAQSection({
  title = 'Frequently Asked Questions',
  description,
  faqs,
  variant = 'default'
}: FAQSectionProps) {
  // Background color based on variant
  // Build section class
  const sectionClass = `faq-section--${variant}`;

  // Build title class
  const titleClass = [
    'faq-section__title',
    description && 'faq-section__title--with-description'
  ].filter(Boolean).join(' ');

  return (
    <Section 
      spacing="xl"
      className={sectionClass}
    >
      <Container>
        {/* Section Header */}
        {(title || description) && (
          <div className="faq-section__header">
            {title && (
              <h2 className={titleClass}>
                {title}
              </h2>
            )}
            {description && (
              <p className="faq-section__description">
                {description}
              </p>
            )}
          </div>
        )}

        {/* FAQ Accordion - WordPress Accordion Block */}
        <div className="faq-section__accordion">
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                id={`faq-${index}`}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </Accordion>
        </div>

        {/* Optional CTA below FAQs */}
        <div className="faq-section__cta">
          <p className="faq-section__cta-text">
            Still have questions?
          </p>
          <Button
            variant="primary"
            size="md"
            page="contact"
            aria-label="Contact our support team"
          >
            Contact Support
          </Button>
        </div>
      </Container>
    </Section>
  );
}