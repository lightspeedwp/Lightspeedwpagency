/**
 * FAQ Types
 * 
 * TypeScript interfaces for FAQ data used throughout the LSX Design system.
 * 
 * **WordPress Mapping:**
 * In WordPress, FAQ items would be:
 * - Custom Post Type: `faq` with custom fields
 * - Taxonomy: `faq_category` for organizing by context
 * - ACF or custom fields for question/answer pairs
 * 
 * @see {@link /src/app/components/patterns/FAQSection.tsx} - FAQ Section component
 */

/**
 * FAQ item structure
 * 
 * Defines a single question-answer pair for FAQ sections.
 * Used across all FAQ collections and the FAQSection component.
 * 
 * **Content Guidelines:**
 * - Questions: Start with question words (What, How, Why), end with "?"
 * - Answers: 2-3 sentences, plain text only (no HTML)
 * - Keep concise for better UX (question <200 chars, answer <500 chars)
 * 
 * @example
 * const faqItem: FAQ = {
 *   question: "What makes LSX Design different?",
 *   answer: "We specialize in token-driven design systems..."
 * }
 */
export interface FAQ {
  /**
   * The question text
   * 
   * **Guidelines:**
   * - Start with question words (What, How, Why, When, Where)
   * - End with question mark
   * - Use sentence case (not title case)
   * - Keep under 200 characters for readability
   * - Be specific and customer-focused
   * 
   * @example
   * question: "What makes LSX Design different from other agencies?"
   */
  question: string;
  
  /**
   * The answer text
   * 
   * **Guidelines:**
   * - Plain text only (no HTML or markdown)
   * - 2-3 sentences recommended
   * - Maximum 500 characters for readability
   * - Complete sentences with proper punctuation
   * - Provide actionable information
   * 
   * @example
   * answer: "We specialize in token-driven design systems that map directly to WordPress FSE. This means faster development and better maintainability."
   */
  answer: string;
}
