/**
 * Tabs Component
 * 
 * Production-grade tabbed interface.
 * 
 * Features:
 * - Multiple tabs with content panels
 * - Horizontal and vertical orientations
 * - Keyboard navigation (arrow keys)
 * - Active tab indicator
 * - Icon support
 * - Badge support (counts)
 * - Disabled tabs
 * - Accessible (ARIA attributes)
 * 
 * Design Token Compliance:
 * - Typography: var(--text-*) only
 * - Colors: var(--*) semantic roles
 * - Spacing: Tailwind classes only
 * - Fonts: Lexend (headings), Manrope (body)
 * 
 * @example
 * <Tabs
 *   tabs={[
 *     { id: 'tab1', label: 'Overview', content: <div>Content 1</div> },
 *     { id: 'tab2', label: 'Details', content: <div>Content 2</div> },
 *   ]}
 *   defaultTab="tab1"
 * />
 */

import { useState, useEffect, useRef } from 'react';
import { LucideIcon } from 'lucide-react';

export interface Tab {
  /** Tab ID */
  id: string;
  /** Tab label */
  label: string;
  /** Tab content */
  content: React.ReactNode;
  /** Icon */
  icon?: LucideIcon;
  /** Badge (count) */
  badge?: number | string;
  /** Disabled */
  disabled?: boolean;
}

export interface TabsProps {
  /** Tabs */
  tabs: Tab[];
  /** Default active tab */
  defaultTab?: string;
  /** Active tab (controlled) */
  activeTab?: string;
  /** Tab change handler */
  onTabChange?: (tabId: string) => void;
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Variant */
  variant?: 'default' | 'pills' | 'underline';
  /** Full width tabs */
  fullWidth?: boolean;
}

export function Tabs({
  tabs,
  defaultTab,
  activeTab: controlledActiveTab,
  onTabChange,
  orientation = 'horizontal',
  variant = 'default',
  fullWidth = false,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(
    controlledActiveTab || defaultTab || tabs[0]?.id
  );
  const tabsRef = useRef<HTMLDivElement>(null);

  // Sync controlled state
  useEffect(() => {
    if (controlledActiveTab !== undefined) {
      setActiveTab(controlledActiveTab);
    }
  }, [controlledActiveTab]);

  // Handle tab change
  const handleTabChange = (tabId: string) => {
    const tab = tabs.find((t) => t.id === tabId);
    if (tab?.disabled) return;

    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    let nextIndex = currentIndex;

    if (orientation === 'horizontal') {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        nextIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
      }
    } else {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        nextIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        nextIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
      }
    }

    // Skip disabled tabs
    while (tabs[nextIndex]?.disabled && nextIndex !== currentIndex) {
      if (orientation === 'horizontal') {
        nextIndex = e.key === 'ArrowLeft'
          ? (nextIndex === 0 ? tabs.length - 1 : nextIndex - 1)
          : (nextIndex === tabs.length - 1 ? 0 : nextIndex + 1);
      } else {
        nextIndex = e.key === 'ArrowUp'
          ? (nextIndex === 0 ? tabs.length - 1 : nextIndex - 1)
          : (nextIndex === tabs.length - 1 ? 0 : nextIndex + 1);
      }
    }

    if (nextIndex !== currentIndex && !tabs[nextIndex]?.disabled) {
      handleTabChange(tabs[nextIndex].id);
      
      // Focus the tab button
      const tabButtons = tabsRef.current?.querySelectorAll('[role="tab"]');
      (tabButtons?.[nextIndex] as HTMLElement)?.focus();
    }
  };

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  // Variant styles
  const getTabButtonStyles = (tab: Tab, isActive: boolean) => {
    const base = {
      fontFamily: 'Lexend, sans-serif',
      fontSize: 'var(--text-base)',
      fontWeight: isActive ? 'var(--font-weight-semibold)' : 'var(--font-weight-medium)',
      cursor: tab.disabled ? 'not-allowed' : 'pointer',
      opacity: tab.disabled ? 0.5 : 1,
      transition: 'all 0.2s ease',
    };

    if (variant === 'pills') {
      return {
        ...base,
        padding: '10px 20px',
        backgroundColor: isActive ? 'var(--primary)' : 'transparent',
        color: isActive ? 'var(--primary-foreground)' : 'var(--foreground)',
        borderRadius: 'var(--radius-lg)',
        border: 'none',
      };
    }

    if (variant === 'underline') {
      return {
        ...base,
        padding: '12px 20px',
        backgroundColor: 'transparent',
        color: isActive ? 'var(--primary)' : 'var(--muted-foreground)',
        border: 'none',
        borderBottom: isActive ? '2px solid var(--primary)' : '2px solid transparent',
      };
    }

    // Default variant
    return {
      ...base,
      padding: '10px 20px',
      backgroundColor: isActive ? 'var(--background)' : 'var(--muted)',
      color: isActive ? 'var(--foreground)' : 'var(--muted-foreground)',
      border: isActive ? '1px solid var(--border)' : '1px solid transparent',
      borderBottom: isActive && orientation === 'horizontal' ? 'none' : undefined,
      borderRadius: orientation === 'horizontal'
        ? 'var(--radius-lg) var(--radius-lg) 0 0'
        : 'var(--radius-lg) 0 0 var(--radius-lg)',
    };
  };

  return (
    <div
      className={orientation === 'horizontal' ? 'space-y-4' : 'flex gap-4'}
    >
      {/* Tab List */}
      <div
        ref={tabsRef}
        className={orientation === 'horizontal' ? 'flex gap-1' : 'flex flex-col gap-1'}
        style={{
          borderBottom: variant === 'underline' && orientation === 'horizontal' 
            ? '1px solid var(--border)' 
            : undefined,
          width: orientation === 'vertical' ? '200px' : '100%',
        }}
        role="tablist"
        aria-orientation={orientation}
      >
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeTab;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={fullWidth && orientation === 'horizontal' ? 'flex-1' : ''}
              style={getTabButtonStyles(tab, isActive)}
              onMouseEnter={(e) => {
                if (!tab.disabled && !isActive && variant !== 'underline') {
                  e.currentTarget.style.backgroundColor = 'var(--accent)';
                }
              }}
              onMouseLeave={(e) => {
                if (!tab.disabled && !isActive && variant !== 'underline') {
                  const styles = getTabButtonStyles(tab, isActive);
                  e.currentTarget.style.backgroundColor = styles.backgroundColor;
                }
              }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              aria-disabled={tab.disabled}
              tabIndex={isActive ? 0 : -1}
            >
              <div className="flex items-center justify-center gap-2">
                {Icon && <Icon size={18} />}
                <span>{tab.label}</span>
                {tab.badge !== undefined && (
                  <span
                    className="flex items-center justify-center"
                    style={{
                      minWidth: '20px',
                      height: '20px',
                      padding: '0 6px',
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-small)',
                      fontWeight: 'var(--font-weight-bold)',
                      backgroundColor: isActive
                        ? variant === 'pills'
                          ? 'rgba(255, 255, 255, 0.2)'
                          : 'var(--primary)'
                        : 'var(--muted)',
                      color: isActive
                        ? variant === 'pills'
                          ? 'var(--primary-foreground)'
                          : 'var(--primary-foreground)'
                        : 'var(--muted-foreground)',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {tab.badge}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Tab Panel */}
      <div
        className="flex-1"
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        style={{
          padding: variant === 'default' ? '20px' : 0,
          backgroundColor: variant === 'default' ? 'var(--background)' : 'transparent',
          border: variant === 'default' ? '1px solid var(--border)' : 'none',
          borderRadius: variant === 'default' 
            ? orientation === 'horizontal'
              ? '0 var(--radius-lg) var(--radius-lg) var(--radius-lg)'
              : '0 0 var(--radius-lg) var(--radius-lg)'
            : 'var(--radius-lg)',
        }}
      >
        {activeTabContent}
      </div>
    </div>
  );
}
