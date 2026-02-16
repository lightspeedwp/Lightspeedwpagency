/**
 * Input Block Component
 */

import React from 'react';
import '@/styles/blocks/forms/input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`wp-block-input ${className}`.trim()}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
