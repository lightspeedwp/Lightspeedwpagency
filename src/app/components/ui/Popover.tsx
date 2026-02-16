/**
 * Popover Component (Proxy)
 * 
 * Proxies to Popover Block Component (blocks/utility/Popover).
 * Adapts old API to Radix API.
 */

import React from 'react';
import { Popover as PopoverBlock, PopoverTrigger, PopoverContent } from '../blocks/utility/Popover';

export interface PopoverProps {
  /** Trigger element */
  trigger: React.ReactElement;
  /** Popover content */
  content: React.ReactNode;
  /** Position (Radix 'side') */
  position?: 'top' | 'right' | 'bottom' | 'left';
  /** Show arrow (Radix handles this if added, we'll omit for now as CSS handles visuals) */
  showArrow?: boolean;
  /** Close on outside click (Radix default) */
  closeOnOutsideClick?: boolean;
  /** Close on escape (Radix default) */
  closeOnEscape?: boolean;
  /** Controlled open state */
  isOpen?: boolean;
  /** Open change handler */
  onOpenChange?: (open: boolean) => void;
}

export function Popover({
  trigger,
  content,
  position = 'bottom',
  isOpen,
  onOpenChange,
}: PopoverProps) {
  return (
    <PopoverBlock 
      open={isOpen} 
      onOpenChange={onOpenChange}
    >
      <PopoverTrigger asChild>
        {trigger}
      </PopoverTrigger>
      <PopoverContent side={position}>
        {content}
      </PopoverContent>
    </PopoverBlock>
  );
}
