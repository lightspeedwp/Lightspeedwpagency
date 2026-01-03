/**
 * Tabs Component
 * 
 * Features:
 * - Keyboard navigation (Arrow keys, Home, End)
 * - Active tab indicator with smooth animation
 * - Lazy loading support
 * - URL hash sync (optional)
 * - Vertical and horizontal layouts
 * - WCAG 2.1 AA compliant
 * 
 * Design System Compliance:
 * - Uses CSS variables for all colors
 * - Uses Lexend for tab labels
 * - Smooth transitions
 * - Focus states
 * 
 * @example
 * <Tabs
 *   tabs={[
 *     { id: 'overview', label: 'Overview', content: <Overview /> },
 *     { id: 'features', label: 'Features', content: <Features /> },
 *     { id: 'pricing', label: 'Pricing', content: <Pricing /> },
 *   ]}
 *   defaultTab="overview"
 * />
 */

import { useState, useRef, useEffect, ReactNode } from 'react';

export interface Tab {
  /** Unique tab ID */
  id: string;
  /** Tab label */
  label: string;
  /** Tab content */
  content: ReactNode;
  /** Icon (optional) */
  icon?: ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Badge (notification count) */
  badge?: number | string;
}

export interface TabsProps {
  /** Tab items */
  tabs: Tab[];
  /** Default active tab */
  defaultTab?: string;
  /** Controlled active tab */
  activeTab?: string;
  /** Tab change handler */
  onChange?: (tabId: string) => void;
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Variant */
  variant?: 'underline' | 'pills' | 'enclosed';
  /** Enable lazy loading */
  lazy?: boolean;
  /** Sync with URL hash */
  syncWithUrl?: boolean;
}

export function Tabs({
  tabs,
  defaultTab,
  activeTab: controlledActiveTab,
  onChange,
  orientation = 'horizontal',
  variant = 'underline',
  lazy = false,
  syncWithUrl = false,
}: TabsProps) {
  const [internalActiveTab, setInternalActiveTab] = useState(
    defaultTab || tabs[0]?.id
  );
  const [loadedTabs, setLoadedTabs] = useState<Set<string>>(
    new Set([defaultTab || tabs[0]?.id])
  );
  const tabListRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  const activeTab = controlledActiveTab ?? internalActiveTab;

  // Sync with URL hash
  useEffect(() => {
    if (!syncWithUrl) return;

    const hash = window.location.hash.slice(1);
    if (hash && tabs.find((tab) => tab.id === hash)) {
      handleTabChange(hash);
    }

    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      if (newHash && tabs.find((tab) => tab.id === newHash)) {
        handleTabChange(newHash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [syncWithUrl, tabs]);

  const handleTabChange = (tabId: string) => {
    const tab = tabs.find((t) => t.id === tabId);
    if (!tab || tab.disabled) return;

    setInternalActiveTab(tabId);
    onChange?.(tabId);

    // Mark tab as loaded (for lazy loading)
    if (lazy) {
      setLoadedTabs((prev) => new Set([...prev, tabId]));
    }

    // Update URL hash
    if (syncWithUrl) {
      window.history.pushState(null, '', `#${tabId}`);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;

    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        nextIndex = index - 1;
        if (nextIndex < 0) nextIndex = tabs.length - 1;
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        nextIndex = index + 1;
        if (nextIndex >= tabs.length) nextIndex = 0;
        break;
      case 'Home':
        e.preventDefault();
        nextIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    // Skip disabled tabs
    while (tabs[nextIndex]?.disabled) {
      nextIndex = e.key === 'ArrowLeft' || e.key === 'ArrowUp'
        ? nextIndex - 1
        : nextIndex + 1;

      if (nextIndex < 0) nextIndex = tabs.length - 1;
      if (nextIndex >= tabs.length) nextIndex = 0;
    }

    const nextTab = tabs[nextIndex];
    if (nextTab) {
      handleTabChange(nextTab.id);
      // Focus next tab button
      setTimeout(() => {
        const buttons = tabListRef.current?.querySelectorAll('button');
        (buttons?.[nextIndex] as HTMLButtonElement)?.focus();
      }, 0);
    }
  };

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: orientation === 'vertical' ? 'row' : 'column',
        gap: orientation === 'vertical' ? '2rem' : '0',
        width: '100%',
      }}
    >
      {/* Tab List */}
      <div
        ref={tabListRef}
        role="tablist"
        aria-orientation={orientation}
        style={{
          display: 'flex',
          flexDirection: orientation === 'vertical' ? 'column' : 'row',
          gap: variant === 'pills' ? '0.5rem' : '0',
          borderBottom: variant === 'underline' && orientation === 'horizontal'
            ? '1px solid var(--border)'
            : 'none',
          position: 'relative',
          width: orientation === 'vertical' ? '200px' : '100%',
          flexShrink: 0,
        }}
      >
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              ref={isActive ? activeTabRef : null}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              disabled={tab.disabled}
              onClick={() => handleTabChange(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: variant === 'pills' ? '0.75rem 1.5rem' : '1rem 1.5rem',
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: isActive ? '500' : '400',
                color: isActive ? 'var(--foreground)' : 'var(--muted-foreground)',
                backgroundColor: variant === 'pills' && isActive
                  ? 'var(--accent)'
                  : variant === 'enclosed' && isActive
                  ? 'var(--card)'
                  : 'transparent',
                border: variant === 'enclosed'
                  ? '1px solid var(--border)'
                  : 'none',
                borderBottom: variant === 'enclosed' && isActive
                  ? 'none'
                  : variant === 'enclosed'
                  ? '1px solid var(--border)'
                  : 'none',
                borderRadius: variant === 'pills'
                  ? 'var(--radius)'
                  : variant === 'enclosed'
                  ? 'var(--radius) var(--radius) 0 0'
                  : '0',
                cursor: tab.disabled ? 'not-allowed' : 'pointer',
                opacity: tab.disabled ? 0.5 : 1,
                transition: 'all 0.2s ease',
                position: 'relative',
                whiteSpace: 'nowrap',
                minHeight: '48px',
              }}
            >
              {/* Icon */}
              {tab.icon && <span>{tab.icon}</span>}

              {/* Label */}
              <span>{tab.label}</span>

              {/* Badge */}
              {tab.badge !== undefined && (
                <span
                  style={{
                    padding: '0.25rem 0.5rem',
                    fontSize: 'var(--text-small)',
                    fontWeight: '500',
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    borderRadius: 'var(--radius-full)',
                    minWidth: '20px',
                    textAlign: 'center',
                  }}
                >
                  {tab.badge}
                </span>
              )}

              {/* Active Indicator (underline variant) */}
              {variant === 'underline' && isActive && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-1px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: 'var(--primary)',
                    transition: 'all 0.3s ease',
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div
        style={{
          flex: 1,
          minWidth: 0,
        }}
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          const shouldRender = !lazy || loadedTabs.has(tab.id);

          return (
            <div
              key={tab.id}
              role="tabpanel"
              id={`tabpanel-${tab.id}`}
              aria-labelledby={`tab-${tab.id}`}
              hidden={!isActive}
              style={{
                display: isActive ? 'block' : 'none',
                animation: isActive ? 'fadeIn 0.3s ease' : 'none',
              }}
            >
              {shouldRender ? tab.content : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Simple Tabs (Pills variant)
 */
export function PillTabs(props: Omit<TabsProps, 'variant'>) {
  return <Tabs {...props} variant="pills" />;
}

/**
 * Vertical Tabs
 */
export function VerticalTabs(props: Omit<TabsProps, 'orientation'>) {
  return <Tabs {...props} orientation="vertical" />;
}

// Add animation to global.css:
/*
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
*/
