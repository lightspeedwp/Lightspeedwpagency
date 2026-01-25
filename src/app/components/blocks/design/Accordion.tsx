/**
 * WordPress Accordion Block
 * 
 * Maps to: core/details block (WordPress native <details> element)
 * 
 * A fully accessible accordion component for collapsible content panels.
 * Implements WCAG 2.1 AA standards with proper ARIA attributes, keyboard
 * navigation, and smooth animations.
 * 
 * Features:
 * - Semantic HTML (<button> for headers)
 * - ARIA attributes (aria-expanded, aria-controls, role="region")
 * - Keyboard navigation (Enter/Space)
 * - Smooth expand/collapse animations
 * - 100% CSS variables (user-controllable)
 * - Light/dark mode support
 * - Reduced motion support
 * 
 * @example
 * ```tsx
 * <Accordion>
 *   <AccordionItem 
 *     id="faq-1"
 *     question="What is WordPress?"
 *     answer="WordPress is a free and open-source CMS..."
 *   />
 * </Accordion>
 * ```
 * 
 * @see /guidelines/blocks/design/Accordion.md for complete documentation
 */

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Individual Accordion Item Props
 */
export interface AccordionItemProps {
  /** Unique identifier (required for ARIA) */
  id: string;
  /** Question/summary text */
  question: string;
  /** Simple text answer (optional if using children) */
  answer?: string;
  /** Custom answer content (overrides answer prop) */
  children?: React.ReactNode;
  /** Open by default */
  defaultOpen?: boolean;
  /** Controlled open state (for parent control) */
  isOpen?: boolean;
  /** Callback when item is toggled */
  onToggle?: (id: string) => void;
}

/**
 * Accordion Wrapper Props
 */
export interface AccordionProps {
  /** AccordionItem components */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** ID of item to open by default */
  defaultOpen?: string;
  /** Allow multiple items open simultaneously */
  allowMultiple?: boolean;
}

/**
 * AccordionItem Component
 * 
 * Individual collapsible panel with question and answer.
 * 
 * @example
 * ```tsx
 * <AccordionItem 
 *   id="unique-id"
 *   question="Your question here?"
 *   answer="Your answer here."
 * />
 * ```
 */
export function AccordionItem({
  id,
  question,
  answer,
  children,
  defaultOpen = false,
  isOpen: controlledIsOpen,
  onToggle
}: AccordionItemProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);
  const panelRef = useRef<HTMLDivElement>(null);
  
  // Use controlled state if provided, otherwise use internal state
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  
  const handleToggle = () => {
    if (onToggle) {
      onToggle(id);
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  // Handle height animation
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    if (isOpen) {
      // Expand: set height to scrollHeight
      panel.style.height = `${panel.scrollHeight}px`;
      
      // After animation, set to auto for dynamic content
      const timeout = setTimeout(() => {
        panel.style.height = 'auto';
      }, 300);
      
      return () => clearTimeout(timeout);
    } else {
      // Collapse: set explicit height first, then 0
      panel.style.height = `${panel.scrollHeight}px`;
      
      // Force reflow
      requestAnimationFrame(() => {
        panel.style.height = '0px';
      });
    }
  }, [isOpen]);

  return (
    <div 
      className={`wp-block-accordion__item ${isOpen ? 'wp-block-accordion__item--open' : ''}`}
      role="region"
      aria-labelledby={`accordion-header-${id}`}
    >
      {/* Question Header (Button) */}
      <button
        id={`accordion-header-${id}`}
        className="wp-block-accordion__header"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${id}`}
        type="button"
      >
        <span className="wp-block-accordion__question">
          {question}
        </span>
        
        <ChevronDown 
          className={`wp-block-accordion__icon ${isOpen ? 'wp-block-accordion__icon--open' : ''}`}
          size={20}
          aria-hidden="true"
        />
      </button>

      {/* Answer Panel */}
      <div
        id={`accordion-panel-${id}`}
        ref={panelRef}
        className="wp-block-accordion__panel"
        role="region"
        aria-labelledby={`accordion-header-${id}`}
        hidden={!isOpen}
      >
        <div className="wp-block-accordion__answer">
          {children || answer}
        </div>
      </div>
    </div>
  );
}

/**
 * Accordion Component (Wrapper)
 * 
 * Container for multiple AccordionItem components.
 * Manages state for single/multiple open items.
 * 
 * @example
 * ```tsx
 * <Accordion defaultOpen="faq-1">
 *   <AccordionItem id="faq-1" question="..." answer="..." />
 *   <AccordionItem id="faq-2" question="..." answer="..." />
 * </Accordion>
 * ```
 */
export function Accordion({
  children,
  className = '',
  defaultOpen,
  allowMultiple = false
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(
    defaultOpen ? new Set([defaultOpen]) : new Set()
  );

  const handleToggle = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      
      if (newSet.has(id)) {
        // Close this item
        newSet.delete(id);
      } else {
        // Open this item
        if (!allowMultiple) {
          // Close all others if single mode
          newSet.clear();
        }
        newSet.add(id);
      }
      
      return newSet;
    });
  };

  return (
    <div className={`wp-block-accordion ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === AccordionItem) {
          return React.cloneElement(child as React.ReactElement<AccordionItemProps>, {
            isOpen: openItems.has(child.props.id),
            onToggle: handleToggle
          });
        }
        return child;
      })}
    </div>
  );
}

/**
 * Export both components
 */
export default Accordion;