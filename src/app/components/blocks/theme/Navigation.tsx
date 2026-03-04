/**
 * Navigation Block Component
 * 
 * WordPress Block: core/navigation
 * Category: Theme
 * @see /src/app/utils/icon-map.ts
 */

import React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { CaretDown as ChevronDown } from '@phosphor-icons/react';

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> & {
    viewport?: boolean;
  }
>(({ className = '', children, viewport = true, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={`wp-block-navigation-menu ${className}`.trim()}
    {...props}
  >
    {children}
    {viewport && <NavigationMenuViewport />}
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className = '', ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={`wp-block-navigation-menu-list ${className}`.trim()}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = 'wp-block-navigation-menu-trigger';

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className = '', children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={`${navigationMenuTriggerStyle} ${className}`.trim()}
    {...props}
  >
    {children}{' '}
    <ChevronDown
      className="wp-block-navigation-menu-trigger-icon"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className = '', ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={`wp-block-navigation-menu-content ${className}`.trim()}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>
>(({ className = '', ...props }, ref) => (
  <NavigationMenuPrimitive.Link
    ref={ref}
    className={`wp-block-navigation-menu-link ${className}`.trim()}
    {...props}
  />
));
NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className = '', ...props }, ref) => (
  <div className="wp-block-navigation-menu-viewport-container">
    <NavigationMenuPrimitive.Viewport
      ref={ref}
      className={`wp-block-navigation-menu-viewport ${className}`.trim()}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className = '', ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={`wp-block-navigation-menu-indicator ${className}`.trim()}
    {...props}
  >
    <div className="wp-block-navigation-menu-indicator-arrow" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

// Export alias for standard usage
const Navigation = NavigationMenu;

export {
  navigationMenuTriggerStyle,
  Navigation,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
