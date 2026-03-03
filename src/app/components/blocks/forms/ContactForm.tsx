/**
 * Contact Form Component
 * 
 * Features:
 * - Name, email, subject, message fields
 * - Real-time validation
 * - Success/error states
 * - Loading state
 * - Character counters
 * - WCAG 2.1 AA compliant
 * 
 * Design System Compliance:
 * - Uses CSS variables for all colors
 * - Uses Lexend/Manrope fonts
 * - Proper spacing and focus states
 */

import { useState, FormEvent } from 'react';
import { FormField, TextAreaField } from './FormField';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ContactFormProps {
  /** Form submission handler */
  onSubmit: (data: ContactFormData) => Promise<void>;
  /** Success message */
  successMessage?: string;
  /** Error message */
  errorMessage?: string;
  /** Show subject field */
  showSubject?: boolean;
  /** Show phone field */
  showPhone?: boolean;
  /** Additional CSS class */
  className?: string;
}

export function ContactForm({
  onSubmit,
  successMessage = 'Thank you! We\'ll get back to you soon.',
  errorMessage = 'Something went wrong. Please try again.',
  showSubject = true,
  showPhone = false,
  className = '',
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Validation
  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (showSubject && !formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await onSubmit(formData);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`wp-block-contact-form ${className}`}
    >
      {/* Name Field */}
      <FormField
        name="name"
        label="Name"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        error={errors.name}
        required
        disabled={isSubmitting}
        placeholder="John Doe"
      />

      {/* Email Field */}
      <FormField
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={errors.email}
        required
        disabled={isSubmitting}
        placeholder="john@example.com"
      />

      {/* Phone Field */}
      {showPhone && (
        <FormField
          name="phone"
          label="Phone"
          type="tel"
          value={formData.phone || ''}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          disabled={isSubmitting}
          placeholder="+1 (555) 123-4567"
        />
      )}

      {/* Subject Field */}
      {showSubject && (
        <FormField
          name="subject"
          label="Subject"
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          error={errors.subject}
          required
          disabled={isSubmitting}
          placeholder="How can we help?"
          maxLength={100}
          showCharCount
        />
      )}

      {/* Message Field */}
      <TextAreaField
        name="message"
        label="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        error={errors.message}
        required
        disabled={isSubmitting}
        placeholder="Tell us more about your project..."
        rows={6}
        maxLength={500}
        showCharCount
      />

      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <div className="wp-block-contact-form--success">
          ✓ {successMessage}
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="wp-block-contact-form--error">
          ✕ {errorMessage}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="wp-block-contact-form__submit"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}