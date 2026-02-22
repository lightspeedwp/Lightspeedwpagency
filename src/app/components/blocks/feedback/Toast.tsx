/**
 * Toast Block Component
 * 
 * Replaces Shadcn Toast (uses Sonner directly).
 * Migrated to strict WordPress BEM classes.
 * 
 * @see https://sonner.emilkowal.ski/
 */

import { Toaster as Sonner } from "sonner";
import { toast } from "sonner";
import React from 'react';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="system"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "group toast",
          description: "toast-description",
          actionButton: "toast-action",
          cancelButton: "toast-cancel",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
