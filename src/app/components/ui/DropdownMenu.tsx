/**
 * DropdownMenu Component (Proxy)
 * 
 * Proxies to DropdownMenu Block Component (blocks/utility/DropdownMenu).
 * Adapts simple API to Radix API.
 */

import { LucideIcon, Check } from 'lucide-react';
import {
  DropdownMenu as DropdownMenuBlock,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem as DropdownMenuItemBlock,
  DropdownMenuSeparator,
  DropdownMenuGroup as DropdownMenuGroupBlock,
  DropdownMenuLabel,
} from '../blocks/utility/DropdownMenu';

export interface DropdownMenuItem {
  label: string;
  icon?: LucideIcon;
  onClick?: () => void;
  disabled?: boolean;
  destructive?: boolean;
  selected?: boolean;
  divider?: boolean;
}

export interface DropdownMenuProps {
  trigger: React.ReactElement;
  items: DropdownMenuItem[];
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  closeOnSelect?: boolean; // Radix defaults to true
  minWidth?: string;
}

export function DropdownMenu({
  trigger,
  items,
  position = 'bottom-right',
  minWidth = '12rem',
}: DropdownMenuProps) {
  // Map position to Radix side/align
  const side = position.includes('top') ? 'top' : 'bottom';
  const align = position.includes('left') ? 'start' : 'end';

  return (
    <DropdownMenuBlock>
      <DropdownMenuTrigger asChild>
        {trigger}
      </DropdownMenuTrigger>
      
      <DropdownMenuContent side={side} align={align} style={{ minWidth }}>
        {items.map((item, index) => (
          <div key={index}>
            <DropdownMenuItemBlock
              onClick={item.onClick}
              disabled={item.disabled}
              destructive={item.destructive}
            >
              {item.selected && (
                <div style={{ marginRight: 'var(--spacing-2)', display: 'flex', alignItems: 'center' }}>
                  <Check size={16} />
                </div>
              )}
              {item.icon && !item.selected && (
                <div style={{ marginRight: 'var(--spacing-2)', display: 'flex', alignItems: 'center' }}>
                  <item.icon size={16} />
                </div>
              )}
              {item.label}
            </DropdownMenuItemBlock>
            {item.divider && <DropdownMenuSeparator />}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenuBlock>
  );
}

export interface DropdownMenuGroup {
  label?: string;
  items: DropdownMenuItem[];
}

export interface DropdownMenuWithGroupsProps {
  trigger: React.ReactElement;
  groups: DropdownMenuGroup[];
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  closeOnSelect?: boolean;
  minWidth?: string;
}

export function DropdownMenuWithGroups({
  trigger,
  groups,
  position = 'bottom-right',
  minWidth = '12rem',
}: DropdownMenuWithGroupsProps) {
  const side = position.includes('top') ? 'top' : 'bottom';
  const align = position.includes('left') ? 'start' : 'end';

  return (
    <DropdownMenuBlock>
      <DropdownMenuTrigger asChild>
        {trigger}
      </DropdownMenuTrigger>
      
      <DropdownMenuContent side={side} align={align} style={{ minWidth }}>
        {groups.map((group, groupIndex) => (
          <DropdownMenuGroupBlock key={groupIndex}>
            {group.label && (
              <DropdownMenuLabel>
                {group.label}
              </DropdownMenuLabel>
            )}
            
            {group.items.map((item, itemIndex) => (
              <div key={itemIndex}>
                <DropdownMenuItemBlock
                  onClick={item.onClick}
                  disabled={item.disabled}
                  destructive={item.destructive}
                >
                  {item.selected && (
                    <div style={{ marginRight: 'var(--spacing-2)', display: 'flex', alignItems: 'center' }}>
                      <Check size={16} />
                    </div>
                  )}
                  {item.icon && !item.selected && (
                    <div style={{ marginRight: 'var(--spacing-2)', display: 'flex', alignItems: 'center' }}>
                      <item.icon size={16} />
                    </div>
                  )}
                  {item.label}
                </DropdownMenuItemBlock>
                {item.divider && <DropdownMenuSeparator />}
              </div>
            ))}
            
            {groupIndex < groups.length - 1 && <DropdownMenuSeparator />}
          </DropdownMenuGroupBlock>
        ))}
      </DropdownMenuContent>
    </DropdownMenuBlock>
  );
}