/**
 * Accordion Component
 * 
 * Features:
 * - Expand/collapse with smooth animation
 * - Multiple items open (default) or single item (exclusive)
 * - Keyboard navigation (Arrow keys, Home, End, Space, Enter)
 * - Icons with rotation animation
 * - Nested accordions support
 * - WCAG 2.1 AA compliant
 * 
 * Design System Compliance:
 * - Uses CSS variables for all colors
 * - Uses Lexend for headers
 * - Uses Manrope for content
 * - Smooth height transitions
 * 
 * @example
 * <Accordion
 *   items={[
 *     { id: '1', title: 'What is LSX Design?', content: <p>...</p> },
 *     { id: '2', title: 'How much does it cost?', content: <p>...</p> },
 *   ]}
 *   exclusive={true}
 * />
 */

import { useState, useRef, useEffect, ReactNode } from 'react';

export interface AccordionItem {
  /** Unique item ID */
  id: string;
  /** Item title */
  title: string;
  /** Item content */
  content: ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Default open state */
  defaultOpen?: boolean;
  /** Icon (replaces default chevron) */
  icon?: ReactNode;
}

export interface AccordionProps {
  /** Accordion items */
  items: AccordionItem[];
  /** Allow only one item open at a time */
  exclusive?: boolean;
  /** Default open items (array of IDs) */
  defaultOpenItems?: string[];
  /** Controlled open items */
  openItems?: string[];
  /** Change handler */
  onChange?: (openItems: string[]) => void;
  /** Show borders */
  bordered?: boolean;
  /** Variant */
  variant?: 'default' | 'filled' | 'separated';
}

export function Accordion({
  items,
  exclusive = false,
  defaultOpenItems = [],
  openItems: controlledOpenItems,
  onChange,
  bordered = true,
  variant = 'default',
}: AccordionProps) {
  const [internalOpenItems, setInternalOpenItems] = useState<string[]>(
    defaultOpenItems.length > 0
      ? defaultOpenItems
      : items.filter((item) => item.defaultOpen).map((item) => item.id)
  );

  const openItems = controlledOpenItems ?? internalOpenItems;

  const toggleItem = (itemId: string) => {
    const item = items.find((i) => i.id === itemId);
    if (!item || item.disabled) return;

    let newOpenItems: string[];

    if (exclusive) {
      // Only one item open at a time
      newOpenItems = openItems.includes(itemId) ? [] : [itemId];
    } else {
      // Multiple items can be open
      newOpenItems = openItems.includes(itemId)
        ? openItems.filter((id) => id !== itemId)
        : [...openItems, itemId];
    }

    setInternalOpenItems(newOpenItems);
    onChange?.(newOpenItems);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number, itemId: string) => {
    const buttons = Array.from(
      document.querySelectorAll('[role="button"][aria-expanded]')
    ) as HTMLElement[];
    
    let nextIndex = index;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        nextIndex = index + 1;
        if (nextIndex >= buttons.length) nextIndex = 0;
        buttons[nextIndex]?.focus();
        break;
      case 'ArrowUp':
        e.preventDefault();
        nextIndex = index - 1;
        if (nextIndex < 0) nextIndex = buttons.length - 1;
        buttons[nextIndex]?.focus();
        break;
      case 'Home':
        e.preventDefault();
        buttons[0]?.focus();
        break;
      case 'End':
        e.preventDefault();
        buttons[buttons.length - 1]?.focus();
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        toggleItem(itemId);
        break;
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: variant === 'separated' ? '1rem' : '0',
        border: bordered && variant !== 'separated' ? '1px solid var(--border)' : 'none',
        borderRadius: variant !== 'separated' ? 'var(--radius-lg)' : '0',
        overflow: variant !== 'separated' ? 'hidden' : 'visible',
      }}
    >
      {items.map((item, index) => {
        const isOpen = openItems.includes(item.id);

        return (
          <AccordionItemComponent
            key={item.id}
            item={item}
            isOpen={isOpen}
            onToggle={() => toggleItem(item.id)}
            onKeyDown={(e) => handleKeyDown(e, index, item.id)}
            bordered={bordered}
            variant={variant}
            showDivider={index < items.length - 1 && variant !== 'separated'}
          />
        );
      })}
    </div>
  );
}

/**
 * Individual Accordion Item Component
 */
interface AccordionItemComponentProps {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  bordered: boolean;
  variant: 'default' | 'filled' | 'separated';
  showDivider: boolean;
}

function AccordionItemComponent({
  item,
  isOpen,
  onToggle,
  onKeyDown,
  bordered,
  variant,
  showDivider,
}: AccordionItemComponentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | 'auto'>(0);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        const contentHeight = contentRef.current.scrollHeight;
        setHeight(contentHeight);
        // Set to 'auto' after animation completes
        const timer = setTimeout(() => setHeight('auto'), 300);
        return () => clearTimeout(timer);
      } else {
        setHeight(0);
      }
    }
  }, [isOpen]);

  return (
    <div
      style={{
        border: variant === 'separated' && bordered
          ? '1px solid var(--border)'
          : 'none',
        borderRadius: variant === 'separated' ? 'var(--radius-lg)' : '0',
        backgroundColor: variant === 'filled'
          ? isOpen ? 'var(--muted)' : 'var(--card)'
          : 'transparent',
        transition: 'background-color 0.2s ease',
      }}
    >
      {/* Header Button */}
      <button
        role="button"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
        id={`accordion-header-${item.id}`}
        disabled={item.disabled}
        onClick={onToggle}
        onKeyDown={onKeyDown}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 1.5rem',
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-base)',
          fontWeight: '500',
          color: item.disabled ? 'var(--muted-foreground)' : 'var(--foreground)',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: item.disabled ? 'not-allowed' : 'pointer',
          textAlign: 'left',
          transition: 'color 0.2s ease',
          minHeight: '48px',
        }}
      >
        <span>{item.title}</span>

        {/* Icon */}
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '24px',
            height: '24px',
            color: 'var(--muted-foreground)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
          aria-hidden="true"
        >
          {item.icon || '▼'}
        </span>
      </button>

      {/* Content */}
      <div
        id={`accordion-content-${item.id}`}
        role="region"
        aria-labelledby={`accordion-header-${item.id}`}
        style={{
          height: height === 'auto' ? 'auto' : `${height}px`,
          overflow: 'hidden',
          transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div
          ref={contentRef}
          style={{
            padding: isOpen ? '0 1.5rem 1.5rem 1.5rem' : '0 1.5rem',
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-base)',
            color: 'var(--foreground)',
            lineHeight: '1.6',
          }}
        >
          {item.content}
        </div>
      </div>

      {/* Divider */}
      {showDivider && (
        <div
          style={{
            height: '1px',
            backgroundColor: 'var(--border)',
          }}
        />
      )}
    </div>
  );
}

/**
 * FAQ Accordion (Exclusive variant)
 */
export function FAQAccordion(props: Omit<AccordionProps, 'exclusive'>) {
  return <Accordion {...props} exclusive={true} />;
}

/**
 * Filled Accordion
 */
export function FilledAccordion(props: Omit<AccordionProps, 'variant'>) {
  return <Accordion {...props} variant="filled" />;
}

/**
 * Separated Accordion
 */
export function SeparatedAccordion(props: Omit<AccordionProps, 'variant'>) {
  return <Accordion {...props} variant="separated" />;
}
