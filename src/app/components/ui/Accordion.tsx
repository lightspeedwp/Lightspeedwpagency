/**
 * Accordion Component
 * 
 * Production-grade collapsible content sections.
 * 
 * Features:
 * - Single or multiple open items
 * - Smooth expand/collapse animation
 * - Keyboard navigation
 * - Icon indicators
 * - Nested accordions
 * - Accessible (ARIA attributes)
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <Accordion
 *   items={[
 *     { id: '1', title: 'Section 1', content: <div>Content 1</div> },
 *     { id: '2', title: 'Section 2', content: <div>Content 2</div> },
 *   ]}
 *   type="single"
 * />
 */

import { useState } from 'react';
import { ChevronDown, LucideIcon } from 'lucide-react';

export interface AccordionItem {
  /** Item ID */
  id: string;
  /** Item title */
  title: string;
  /** Item content */
  content: React.ReactNode;
  /** Icon */
  icon?: LucideIcon;
  /** Disabled */
  disabled?: boolean;
}

export interface AccordionProps {
  /** Accordion items */
  items: AccordionItem[];
  /** Type (single or multiple open) */
  type?: 'single' | 'multiple';
  /** Default open items */
  defaultOpen?: string[];
  /** Variant */
  variant?: 'default' | 'bordered' | 'separated';
  /** Collapsible (for single type) */
  collapsible?: boolean;
}

export function Accordion({
  items,
  type = 'single',
  defaultOpen = [],
  variant = 'default',
  collapsible = true,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (itemId: string) => {
    const item = items.find((i) => i.id === itemId);
    if (item?.disabled) return;

    if (type === 'single') {
      if (openItems.includes(itemId)) {
        // Close if collapsible
        setOpenItems(collapsible ? [] : [itemId]);
      } else {
        // Open and close others
        setOpenItems([itemId]);
      }
    } else {
      // Multiple type
      if (openItems.includes(itemId)) {
        setOpenItems(openItems.filter((id) => id !== itemId));
      } else {
        setOpenItems([...openItems, itemId]);
      }
    }
  };

  const isOpen = (itemId: string) => openItems.includes(itemId);

  return (
    <div
      className={variant === 'separated' ? 'space-y-3' : ''}
      style={{
        border: variant === 'bordered' ? '1px solid var(--border)' : 'none',
        borderRadius: variant === 'bordered' ? 'var(--radius-xl)' : 0,
        overflow: variant === 'bordered' ? 'hidden' : 'visible',
      }}
    >
      {items.map((item, index) => (
        <AccordionItemComponent
          key={item.id}
          item={item}
          isOpen={isOpen(item.id)}
          onToggle={() => toggleItem(item.id)}
          variant={variant}
          isFirst={index === 0}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
}

interface AccordionItemComponentProps {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  variant: 'default' | 'bordered' | 'separated';
  isFirst: boolean;
  isLast: boolean;
}

function AccordionItemComponent({
  item,
  isOpen,
  onToggle,
  variant,
  isFirst,
  isLast,
}: AccordionItemComponentProps) {
  const Icon = item.icon;

  const getItemStyles = () => {
    if (variant === 'separated') {
      return {
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
      };
    }

    if (variant === 'bordered') {
      return {
        borderTop: isFirst ? 'none' : '1px solid var(--border)',
      };
    }

    // Default variant
    return {
      borderBottom: isLast ? 'none' : '1px solid var(--border)',
    };
  };

  return (
    <div style={getItemStyles()}>
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between gap-3"
        style={{
          backgroundColor: isOpen
            ? 'var(--accent)'
            : variant === 'separated'
            ? 'transparent'
            : 'var(--card)',
          cursor: item.disabled ? 'not-allowed' : 'pointer',
          opacity: item.disabled ? 0.5 : 1,
          transition: 'all 0.2s ease',
          border: 'none',
          textAlign: 'left',
        }}
        onMouseEnter={(e) => {
          if (!item.disabled && !isOpen) {
            e.currentTarget.style.backgroundColor = 'var(--muted)';
          }
        }}
        onMouseLeave={(e) => {
          if (!item.disabled && !isOpen) {
            e.currentTarget.style.backgroundColor =
              variant === 'separated' ? 'transparent' : 'var(--card)';
          }
        }}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
        aria-disabled={item.disabled}
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {Icon && (
            <div
              style={{
                color: isOpen ? 'var(--primary)' : 'var(--muted-foreground)',
                flexShrink: 0,
              }}
            >
              <Icon size={20} />
            </div>
          )}

          <h3
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-semibold)',
              color: isOpen ? 'var(--foreground)' : 'var(--foreground)',
              margin: 0,
            }}
          >
            {item.title}
          </h3>
        </div>

        <div
          style={{
            color: isOpen ? 'var(--primary)' : 'var(--muted-foreground)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
            flexShrink: 0,
          }}
        >
          <ChevronDown size={20} />
        </div>
      </button>

      {/* Content */}
      <div
        id={`accordion-content-${item.id}`}
        style={{
          maxHeight: isOpen ? '1000px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
        aria-hidden={!isOpen}
      >
        <div
          className="p-4 pt-0"
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-base)',
            color: 'var(--muted-foreground)',
            lineHeight: '1.6',
          }}
        >
          {item.content}
        </div>
      </div>
    </div>
  );
}
