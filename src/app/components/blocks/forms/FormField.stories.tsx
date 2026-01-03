import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { InputField, TextareaField, SelectField, CheckboxField } from './FormField';

/**
 * Form Fields - Advanced Input Components
 * 
 * Production-ready form field components with validation, error handling,
 * character counters, and accessibility features.
 * 
 * ## Design System Compliance
 * - Labels: Lexend font (UI)
 * - Inputs: Manrope font (body)
 * - All colors use CSS variables
 * - WCAG 2.1 AA compliant
 */
const meta = {
  title: 'Forms/Form Fields',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Complete form field components with validation states, helper text, and accessibility.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

/**
 * Basic Input Field
 */
export const BasicInput: StoryObj = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <div style={{ width: '400px' }}>
        <InputField
          id="basic-input"
          label="Email Address"
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="john@example.com"
          helperText="We'll never share your email"
        />
      </div>
    );
  },
};

/**
 * Input with Error State
 */
export const InputWithError: StoryObj = {
  render: () => {
    const [value, setValue] = useState('invalid-email');
    
    return (
      <div style={{ width: '400px' }}>
        <InputField
          id="error-input"
          label="Email Address"
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error="Please enter a valid email address"
          required
        />
      </div>
    );
  },
};

/**
 * Input with Success State
 */
export const InputWithSuccess: StoryObj = {
  render: () => {
    const [value, setValue] = useState('john@example.com');
    
    return (
      <div style={{ width: '400px' }}>
        <InputField
          id="success-input"
          label="Email Address"
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          success="Email is valid!"
          required
        />
      </div>
    );
  },
};

/**
 * Input with Character Counter
 */
export const InputWithCounter: StoryObj = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <div style={{ width: '400px' }}>
        <InputField
          id="counter-input"
          label="Username"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={20}
          showCounter
          helperText="Choose a unique username"
          required
        />
      </div>
    );
  },
};

/**
 * Input with Prefix Icon
 */
export const InputWithPrefixIcon: StoryObj = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <div style={{ width: '400px' }}>
        <InputField
          id="prefix-input"
          label="Email"
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          prefixIcon={<span>✉️</span>}
          placeholder="john@example.com"
        />
      </div>
    );
  },
};

/**
 * Textarea Field
 */
export const Textarea: StoryObj = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <div style={{ width: '400px' }}>
        <TextareaField
          id="textarea"
          label="Message"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={6}
          maxLength={500}
          showCounter
          helperText="Tell us about your project"
          required
        />
      </div>
    );
  },
};

/**
 * Select Field
 */
export const Select: StoryObj = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <div style={{ width: '400px' }}>
        <SelectField
          id="select"
          label="Country"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          options={[
            { value: 'us', label: 'United States' },
            { value: 'uk', label: 'United Kingdom' },
            { value: 'ca', label: 'Canada' },
            { value: 'au', label: 'Australia' },
            { value: 'de', label: 'Germany' },
          ]}
          placeholder="Select a country"
          required
        />
      </div>
    );
  },
};

/**
 * Checkbox Field
 */
export const Checkbox: StoryObj = {
  render: () => {
    const [checked, setChecked] = useState(false);
    
    return (
      <div style={{ width: '400px' }}>
        <CheckboxField
          id="checkbox"
          label="I agree to the Terms and Conditions"
          description="You must accept our terms to continue"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </div>
    );
  },
};

/**
 * Complete Form Example
 */
export const CompleteForm: StoryObj = {
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      country: '',
      message: '',
      terms: false,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      const newErrors: Record<string, string> = {};
      
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.country) newErrors.country = 'Country is required';
      if (!formData.message) newErrors.message = 'Message is required';
      if (!formData.terms) newErrors.terms = 'You must accept the terms';
      
      setErrors(newErrors);
      
      if (Object.keys(newErrors).length === 0) {
        alert('Form submitted successfully!');
      }
    };

    return (
      <form
        onSubmit={handleSubmit}
        style={{
          width: '500px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <InputField
          id="name"
          label="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={errors.name}
          required
        />

        <InputField
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={errors.email}
          prefixIcon={<span>✉️</span>}
          required
        />

        <SelectField
          id="country"
          label="Country"
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          options={[
            { value: 'us', label: 'United States' },
            { value: 'uk', label: 'United Kingdom' },
            { value: 'ca', label: 'Canada' },
          ]}
          error={errors.country}
          placeholder="Select a country"
          required
        />

        <TextareaField
          id="message"
          label="Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          error={errors.message}
          rows={5}
          maxLength={300}
          showCounter
          required
        />

        <CheckboxField
          id="terms"
          label="I agree to the Terms and Conditions"
          checked={formData.terms}
          onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
          error={errors.terms}
        />

        <button
          type="submit"
          style={{
            padding: '0.75rem 2rem',
            fontFamily: 'Lexend, sans-serif',
            fontSize: 'var(--text-base)',
            fontWeight: '500',
            color: 'var(--primary-foreground)',
            backgroundColor: 'var(--primary)',
            border: 'none',
            borderRadius: 'var(--radius)',
            cursor: 'pointer',
            minHeight: '48px',
          }}
        >
          Submit
        </button>
      </form>
    );
  },
};
