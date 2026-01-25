/**
 * Enquiry Modal Component
 * 
 * Modal popup with contact form for lead generation.
 * Triggered by CTA buttons across archive templates.
 * 
 * Design System Requirements:
 * - Typography: Uses CSS variables (--text-base, --text-h3) with Lexend/Manrope fonts
 * - Colors: Uses semantic color tokens (--background, --foreground, etc.)
 * - Spacing: Uses Tailwind classes for consistent spacing
 * - Border Radius: Uses CSS variable (--radius-lg)
 * - Accessibility: Full keyboard support, focus trap, ARIA labels
 * 
 * @example
 * const [isOpen, setIsOpen] = useState(false);
 * 
 * <Button onClick={() => setIsOpen(true)}>Get Started</Button>
 * <EnquiryModal 
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   title="Let's Build Something Amazing"
 *   description="Fill out the form below..."
 * />
 */

import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Button } from '../blocks/design/Buttons';
import { useToast } from '../blocks/feedback/ToastSystem';
import { useFocusManagement } from '../../hooks/useFocusManagement';
import { useFormValidation, validationRules } from '../../hooks/useFormValidation';
import { useRipple, useShake } from '../../hooks/useMicroInteractions';

export interface EnquiryModalProps {
  /** Controls modal visibility */
  isOpen: boolean;
  /** Callback when modal should close */
  onClose: () => void;
  /** Modal heading text */
  title: string;
  /** Modal description/supporting text */
  description: string;
  /** Success callback after form submission */
  onSubmit?: (data: FormData) => void;
}

export interface FormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

/**
 * Enquiry Modal - Lead generation form in modal overlay
 */
export function EnquiryModal({
  isOpen,
  onClose,
  title,
  description,
  onSubmit
}: EnquiryModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const { addToast, ToastComponent } = useToast();
  const { trapFocus, restoreFocus } = useFocusManagement();
  const ripple = useRipple();
  const [nameShake, triggerNameShake] = useShake();
  const [emailShake, triggerEmailShake] = useShake();
  const [messageShake, triggerMessageShake] = useShake();

  // Focus trap: Trap focus within modal when it opens
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const cleanup = trapFocus(modalRef.current);
      return () => {
        cleanup?.();
        restoreFocus();
      };
    }
  }, [isOpen, trapFocus, restoreFocus]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      addToast({
        message: 'Please fill in all required fields',
        type: 'error',
        duration: 4000
      });
      if (!formData.name) {
        triggerNameShake();
      }
      if (!formData.email) {
        triggerEmailShake();
      }
      if (!formData.message) {
        triggerMessageShake();
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (onSubmit) {
        onSubmit(formData);
      }

      // Success toast
      addToast({
        message: 'Thank you! We\'ll be in touch within 24 hours.',
        type: 'success',
        duration: 5000
      });

      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form and close modal after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', company: '', phone: '', message: '' });
        onClose();
      }, 2000);
    } catch (error) {
      // Error toast
      addToast({
        message: 'Something went wrong. Please try again.',
        type: 'error',
        duration: 5000
      });
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Toast notifications */}
      {ToastComponent}

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[var(--z-modal-backdrop)]"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(4px)'
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div
          className="relative w-full max-w-2xl"
          style={{
            backgroundColor: 'var(--card)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-xl)',
            maxHeight: '90vh',
            overflow: 'auto'
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2"
            style={{
              color: 'var(--muted-foreground)',
              borderRadius: 'var(--radius)',
              transition: 'all var(--transition-base) var(--ease-in-out)'
            }}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          {/* Modal content */}
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <h2
                id="modal-title"
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h3)',
                  fontWeight: 'var(--font-weight-medium)',
                  lineHeight: 'var(--line-height-snug)',
                  color: 'var(--foreground)'
                }}
              >
                {title}
              </h2>
              <p
                id="modal-description"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--line-height-relaxed)',
                  color: 'var(--muted-foreground)'
                }}
              >
                {description}
              </p>
            </div>

            {/* Success message */}
            {isSuccess && (
              <div
                className="mb-6 p-4"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  borderRadius: 'var(--radius)',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  textAlign: 'center'
                }}
              >
                Thank you! We'll be in touch within 24 hours.
              </div>
            )}

            {/* Form */}
            {!isSuccess && (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)'
                    }}
                  >
                    Name *
                  </label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3"
                    style={{
                      backgroundColor: 'var(--input-background)',
                      color: 'var(--foreground)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      outline: 'none',
                      transition: 'border-color var(--transition-base) var(--ease-in-out)',
                      ...nameShake.style
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--ring)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                {/* Email field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)'
                    }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3"
                    style={{
                      backgroundColor: 'var(--input-background)',
                      color: 'var(--foreground)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      outline: 'none',
                      transition: 'border-color var(--transition-base) var(--ease-in-out)',
                      ...emailShake.style
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--ring)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                {/* Company field */}
                <div>
                  <label
                    htmlFor="company"
                    className="block mb-2"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)'
                    }}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3"
                    style={{
                      backgroundColor: 'var(--input-background)',
                      color: 'var(--foreground)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      outline: 'none',
                      transition: 'border-color var(--transition-base) var(--ease-in-out)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--ring)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    onKeyPress={ripple}
                  />
                </div>

                {/* Phone field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)'
                    }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3"
                    style={{
                      backgroundColor: 'var(--input-background)',
                      color: 'var(--foreground)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      outline: 'none',
                      transition: 'border-color var(--transition-base) var(--ease-in-out)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--ring)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    onKeyPress={ripple}
                  />
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)'
                    }}
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3"
                    style={{
                      backgroundColor: 'var(--input-background)',
                      color: 'var(--foreground)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-base)',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color var(--transition-base) var(--ease-in-out)',
                      ...messageShake.style
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--ring)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                {/* Submit button */}
                <div className="flex gap-4 pt-4">
                  <Button
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    onClick={handleSubmit as any}
                    className="flex-1"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={onClose}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}