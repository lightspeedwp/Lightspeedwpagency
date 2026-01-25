import { useState } from 'react';

/**
 * Field Validation Rule
 * 
 * Defines validation rules for a single form field.
 */
export interface FieldValidationRule {
  /** Field is required */
  required?: boolean;
  /** Pattern validation (email or custom regex) */
  pattern?: 'email' | RegExp;
  /** Minimum length */
  minLength?: number;
  /** Maximum length */
  maxLength?: number;
  /** Custom validation function */
  validate?: (value: any) => string | null;
  /** Custom error message */
  message?: string;
}

/**
 * Validation Rules Type
 * 
 * Defines validation rules for form fields.
 */
export type ValidationRules<T> = Partial<Record<keyof T, FieldValidationRule>>;

/**
 * Form Validation Hook
 * 
 * Main validation hook with comprehensive accessibility support.
 */
export function useFormValidation<T extends Record<string, any>>(
  initialValues: T,
  rules: ValidationRules<T>
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  /**
   * Get ARIA props for a form field
   * 
   * Returns proper accessibility attributes for form inputs.
   * These attributes are read by screen readers and assistive technologies.
   * 
   * @param fieldName - Name of the form field
   * @returns Object with ARIA attributes
   */
  const getFieldProps = (fieldName: keyof T) => {
    const hasError = touched[fieldName] && errors[fieldName];
    const fieldRules = rules[fieldName];
    
    return {
      'aria-invalid': hasError ? ('true' as const) : ('false' as const),
      'aria-describedby': hasError ? `${String(fieldName)}-error` : undefined,
      'aria-errormessage': hasError ? `${String(fieldName)}-error` : undefined,
      'aria-required': fieldRules?.required ? ('true' as const) : undefined,
    };
  };

  /**
   * Render error message for a field
   * 
   * Uses proper ARIA live region to announce errors to screen readers.
   * Only shows error if field has been touched.
   * 
   * @param fieldName - Name of the form field
   * @returns JSX element with error message or null
   */
  const renderError = (fieldName: keyof T) => {
    if (!touched[fieldName] || !errors[fieldName]) return null;
    
    return (
      <div
        id={`${String(fieldName)}-error`}
        role="alert"
        aria-live="polite"
        aria-atomic="true"
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'var(--text-small)',
          color: 'var(--destructive)',
          marginTop: '4px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}
      >
        {/* Error icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ flexShrink: 0 }}
        >
          <circle 
            cx="8" 
            cy="8" 
            r="7" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none"
          />
          <path 
            d="M8 4V9" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
          <circle 
            cx="8" 
            cy="12" 
            r="1" 
            fill="currentColor" 
          />
        </svg>
        {errors[fieldName]}
      </div>
    );
  };

  /**
   * Validate a single field
   * 
   * Applies validation rules to a field value.
   * 
   * @param fieldName - Name of the field to validate
   * @param value - Current value of the field
   * @returns Error message or null if valid
   */
  const validateField = (fieldName: keyof T, value: any): string | null => {
    const fieldRules = rules[fieldName];
    if (!fieldRules) return null;

    // Required validation
    if (fieldRules.required) {
      if (!value || (typeof value === 'string' && !value.trim())) {
        return fieldRules.message || `${String(fieldName)} is required`;
      }
    }

    // Skip other validations if field is empty and not required
    if (!value || (typeof value === 'string' && !value.trim())) {
      return null;
    }

    // Email validation
    if (fieldRules.pattern === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return fieldRules.message || 'Please enter a valid email address';
      }
    }

    // Custom regex pattern validation
    if (fieldRules.pattern instanceof RegExp) {
      if (!fieldRules.pattern.test(value)) {
        return fieldRules.message || 'Invalid format';
      }
    }

    // Min length validation
    if (fieldRules.minLength !== undefined && value.length < fieldRules.minLength) {
      return fieldRules.message || `Must be at least ${fieldRules.minLength} characters`;
    }

    // Max length validation
    if (fieldRules.maxLength !== undefined && value.length > fieldRules.maxLength) {
      return fieldRules.message || `Must be no more than ${fieldRules.maxLength} characters`;
    }

    // Custom validation
    if (fieldRules.validate) {
      const customError = fieldRules.validate(value);
      if (customError) return customError;
    }

    return null;
  };

  /**
   * Handle field value change
   * 
   * Updates field value and validates if field has been touched.
   * 
   * @param fieldName - Name of the field
   * @param value - New value
   */
  const handleChange = (fieldName: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [fieldName]: value }));
    
    // Validate on change if field has been touched (real-time validation)
    if (touched[fieldName]) {
      const error = validateField(fieldName, value);
      setErrors(prev => ({
        ...prev,
        [fieldName]: error || undefined
      }));
    }
  };

  /**
   * Handle field blur event
   * 
   * Marks field as touched and validates it.
   * 
   * @param fieldName - Name of the field
   */
  const handleBlur = (fieldName: keyof T) => {
    setTouched(prev => ({ ...prev, [fieldName]: true }));
    
    // Validate on blur
    const error = validateField(fieldName, values[fieldName]);
    setErrors(prev => ({
      ...prev,
      [fieldName]: error || undefined
    }));
  };

  /**
   * Validate all fields
   * 
   * Runs validation on all fields and marks them as touched.
   * Typically called on form submission.
   * 
   * @returns True if form is valid, false otherwise
   */
  const validateAll = (): boolean => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    let isValid = true;

    Object.keys(rules).forEach((key) => {
      const fieldName = key as keyof T;
      const error = validateField(fieldName, values[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    
    // Mark all fields as touched
    const allTouched = Object.keys(rules).reduce((acc, key) => {
      acc[key as keyof T] = true;
      return acc;
    }, {} as Partial<Record<keyof T, boolean>>);
    setTouched(allTouched);

    return isValid;
  };

  /**
   * Get error summary
   * 
   * Returns a summary of all current errors.
   * Useful for displaying error count at top of form.
   * 
   * @returns Error summary object or null if no errors
   */
  const getErrorSummary = () => {
    const errorFields = Object.keys(errors).filter(
      key => errors[key as keyof T]
    );
    
    if (errorFields.length === 0) return null;
    
    return {
      count: errorFields.length,
      fields: errorFields,
      message: `Please fix ${errorFields.length} error${errorFields.length > 1 ? 's' : ''}`
    };
  };

  /**
   * Reset form to initial state
   * 
   * Clears all values, errors, touched state, and submission state.
   */
  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
    setIsSuccess(false);
  };

  return {
    // State
    values,
    errors,
    touched,
    isSubmitting,
    isSuccess,
    
    // Functions
    getFieldProps,
    renderError,
    handleChange,
    handleBlur,
    validateAll,
    getErrorSummary,
    reset,
    
    // Setters (for manual control)
    setIsSubmitting,
    setIsSuccess,
    setValues,
    setErrors
  };
}

/**
 * Predefined validation rules for common fields
 * 
 * Ready-to-use validation rules for standard form fields.
 * 
 * @example
 * const rules = {
 *   email: validationRules.email(),
 *   password: validationRules.minLength(8),
 *   phone: validationRules.phone()
 * };
 */
export const validationRules = {
  /**
   * Required field validation
   */
  required: (message?: string) => ({
    required: true,
    message: message || 'This field is required'
  }),
  
  /**
   * Email validation
   */
  email: (message?: string) => ({
    required: true,
    pattern: 'email' as const,
    message: message || 'Please enter a valid email address'
  }),
  
  /**
   * Minimum length validation
   */
  minLength: (length: number, message?: string) => ({
    required: true,
    minLength: length,
    message: message || `Must be at least ${length} characters`
  }),
  
  /**
   * Maximum length validation
   */
  maxLength: (length: number, message?: string) => ({
    maxLength: length,
    message: message || `Must be no more than ${length} characters`
  }),
  
  /**
   * Phone number validation
   */
  phone: (message?: string) => ({
    pattern: /^[\d\s\-\+\(\)]+$/ as RegExp,
    message: message || 'Please enter a valid phone number'
  }),
  
  /**
   * URL validation
   */
  url: (message?: string) => ({
    pattern: /^https?:\/\/.+/ as RegExp,
    message: message || 'Please enter a valid URL'
  })
};