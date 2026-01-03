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
import { InputField, TextareaField } from './FormField';

export interface ContactFormData {
  name: string;
  email: string;
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
}

export function ContactForm({
  onSubmit,
  successMessage = 'Thank you! We\'ll get back to you soon.',
  errorMessage = 'Something went wrong. Please try again.',
  showSubject = true,
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
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
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        maxWidth: '600px',
      }}
    >
      {/* Name Field */}
      <InputField
        id="name"
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
      <InputField
        id="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={errors.email}
        required
        disabled={isSubmitting}
        placeholder="john@example.com"
        prefixIcon={<span>✉️</span>}
      />

      {/* Subject Field */}
      {showSubject && (
        <InputField
          id="subject"
          label="Subject"
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          error={errors.subject}
          required
          disabled={isSubmitting}
          placeholder="How can we help?"
          maxLength={100}
          showCounter
        />
      )}

      {/* Message Field */}
      <TextareaField
        id="message"
        label="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        error={errors.message}
        required
        disabled={isSubmitting}
        placeholder="Tell us more about your project..."
        rows={6}
        maxLength={500}
        showCounter
      />

      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <div
          style={{
            padding: '1rem',
            backgroundColor: 'var(--accent)',
            color: 'var(--accent-foreground)',
            borderRadius: 'var(--radius)',
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-base)',
          }}
        >
          ✓ {successMessage}
        </div>
      )}

      {submitStatus === 'error' && (
        <div
          style={{
            padding: '1rem',
            backgroundColor: 'var(--destructive)',
            color: 'var(--destructive-foreground)',
            borderRadius: 'var(--radius)',
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'var(--text-base)',
          }}
        >
          ✕ {errorMessage}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          padding: '1rem 2rem',
          fontFamily: 'Lexend, sans-serif',
          fontSize: 'var(--text-base)',
          fontWeight: '500',
          color: 'var(--primary-foreground)',
          backgroundColor: 'var(--primary)',
          border: 'none',
          borderRadius: 'var(--radius)',
          cursor: isSubmitting ? 'not-allowed' : 'pointer',
          opacity: isSubmitting ? 0.7 : 1,
          transition: 'all 0.2s ease',
          minHeight: '48px',
        }}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
