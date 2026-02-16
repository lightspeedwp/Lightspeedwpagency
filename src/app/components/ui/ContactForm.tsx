/**
 * Contact Form Component (Proxy)
 * 
 * Proxies to ContactForm Block Component.
 */

import { ContactForm as ContactFormBlock, type ContactFormData } from '../blocks/forms/ContactForm';

export type { ContactFormData };

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void> | void;
  successMessage?: string;
  showPhone?: boolean;
  maxMessageLength?: number;
  initialValues?: Partial<ContactFormData>;
}

export function ContactForm({
  onSubmit,
  successMessage,
  showPhone = true,
  maxMessageLength, // Not supported in block yet
  initialValues, // Not supported in block yet
}: ContactFormProps) {
  // Adapter to match block props
  return (
    <ContactFormBlock
      onSubmit={async (data) => { await onSubmit(data); }}
      successMessage={successMessage}
      showPhone={showPhone}
    />
  );
}
