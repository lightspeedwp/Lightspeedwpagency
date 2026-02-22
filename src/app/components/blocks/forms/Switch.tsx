/**
 * Switch Block Component
 */

import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className = '', ...props }, ref) => (
  <SwitchPrimitive.Root
    className={`wp-block-switch ${className}`.trim()}
    {...props}
    ref={ref}
  >
    <SwitchPrimitive.Thumb className="wp-block-switch__thumb" />
  </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;
