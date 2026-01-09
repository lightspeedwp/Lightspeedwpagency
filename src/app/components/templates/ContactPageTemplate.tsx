/**
 * Contact Page Template
 * 
 * WordPress template: templates/page-contact.html
 * 
 * Pattern order: Breadcrumbs → Hero → Contact Form → FAQ
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Button } from '../blocks/design/Buttons';
import { FAQSection } from '../patterns/FAQSection';
import { NewsletterSignup } from '../patterns/NewsletterSignup';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { FormField, TextAreaField } from '../ui/FormField';
import { useFormValidation } from '../../hooks/useFormValidation';
import { contactFAQs } from '../../data/faqs';
import { Mail, Phone, MapPin, ChevronDown, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactPageTemplate() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  // Form validation with useFormValidation hook
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    isSubmitting
  } = useFormValidation({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationRules: {
      name: (value) => value.length >= 2 ? '' : 'Name must be at least 2 characters',
      email: (value) => /\S+@\S+\.\S+/.test(value) ? '' : 'Please enter a valid email address',
      message: (value) => {
        if (value.length < 10) return 'Message must be at least 10 characters';
        if (value.length > 500) return 'Message must be less than 500 characters';
        return '';
      }
    },
    onSubmit: async (values) => {
      console.log('Form submitted:', values);
      // In WordPress, this would submit to backend
      // Reset form after successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      resetForm();
    }
  });

  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs - Modern styling */}
        <section 
          className="py-4"
          style={{
            backgroundColor: 'var(--background)',
          }}
        >
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Contact Us' }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Gradient orb decorations */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{
              background: 'var(--glass-bg-strong)',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
          />

          <div className="relative z-10">
            {/* Badge */}
            <div
              className="inline-flex items-center px-6 py-3 mb-8"
              style={{
                backgroundColor: 'var(--glass-bg-strong)',
                backdropFilter: 'blur(10px)',
                color: 'var(--primary-foreground)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--glass-border)',
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              Get In Touch
            </div>

            <h1 
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-h1)',
                fontWeight: 'var(--font-weight-semibold)',
                lineHeight: 'var(--line-height-tight)',
                letterSpacing: 'var(--letter-spacing-tight)',
                marginBottom: '24px',
                color: 'var(--primary-foreground)'
              }}
            >
              Let's Build Something Amazing
            </h1>

            <p 
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-lead)',
                fontWeight: 'var(--font-weight-regular)',
                lineHeight: 'var(--line-height-relaxed)',
                color: 'var(--primary-foreground)',
                opacity: 0.95,
                maxWidth: '700px',
                margin: '0 auto'
              }}
            >
              Have a WordPress project in mind? We're here to help bring your vision to life with expert development and design.
            </p>
          </div>
        </Section>

        {/* Contact Form & Details - Pattern */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <form 
                  onSubmit={handleSubmit}
                  className="p-8"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border-soft)',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-md)'
                  }}
                >
                  <h3 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--card-foreground)',
                      marginBottom: '8px'
                    }}
                  >
                    Send Us a Message
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      color: 'var(--muted-foreground)',
                      marginBottom: '32px'
                    }}
                  >
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  <div className="flex flex-col gap-6">
                    {/* Name Field */}
                    <FormField
                      label="Name"
                      required
                      value={values.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      error={touched.name && errors.name ? errors.name : undefined}
                      showSuccess={touched.name && !errors.name && values.name.length > 0}
                    />

                    {/* Email Field */}
                    <FormField
                      label="Email"
                      required
                      value={values.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      error={touched.email && errors.email ? errors.email : undefined}
                      showSuccess={touched.email && !errors.email && values.email.length > 0}
                    />

                    {/* Subject Field */}
                    <div>
                      <label 
                        htmlFor="subject"
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--foreground)',
                          display: 'block',
                          marginBottom: '8px',
                        }}
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={values.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        className="w-full px-4 py-3"
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          backgroundColor: 'var(--background)',
                          color: 'var(--foreground)',
                          border: '1px solid var(--border-soft)',
                          borderRadius: 'var(--radius-lg)',
                          outline: 'none',
                          transition: 'all 0.2s ease',
                          cursor: 'pointer',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = 'var(--primary)';
                          e.currentTarget.style.outline = '2px solid var(--ring)';
                          e.currentTarget.style.outlineOffset = '0px';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'var(--border-soft)';
                          e.currentTarget.style.outline = 'none';
                        }}
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="project">New Project</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="quote">Request a Quote</option>
                      </select>
                    </div>

                    {/* Message Field */}
                    <TextAreaField
                      label="Message"
                      required
                      value={values.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      name="message"
                      placeholder="Tell us about your project..."
                      error={touched.message && errors.message ? errors.message : undefined}
                      showSuccess={touched.message && !errors.message && values.message.length > 0}
                      showCharCount
                      maxLength={500}
                      rows={6}
                    />

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2"
                        style={{
                          backgroundColor: 'var(--primary)',
                          color: 'var(--primary-foreground)',
                          padding: '16px 32px',
                          fontSize: 'var(--text-base)',
                          fontFamily: 'Lexend, sans-serif',
                          fontWeight: 'var(--font-weight-medium)',
                          borderRadius: 'var(--radius-lg)',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 6px 20px rgba(30, 106, 255, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                        disabled={isSubmitting}
                      >
                        <Send size={20} />
                        {isSubmitting ? 'Submitting...' : 'Send Message'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Contact Details Sidebar */}
              <div className="lg:col-span-1 flex flex-col gap-6">
                {/* Contact Information */}
                <div 
                  className="p-6"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border-soft)',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <h3 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h3)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--card-foreground)',
                      marginBottom: '20px'
                    }}
                  >
                    Contact Information
                  </h3>

                  <div className="flex flex-col gap-6">
                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div 
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: 'var(--radius-lg)',
                          backgroundColor: 'var(--primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <Mail size={20} style={{ color: 'var(--primary-foreground)' }} />
                      </div>
                      <div>
                        <p 
                          style={{
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: 'var(--text-small)',
                            fontWeight: 'var(--font-weight-medium)',
                            color: 'var(--muted-foreground)',
                            margin: 0,
                            marginBottom: '4px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}
                        >
                          Email
                        </p>
                        <a 
                          href="mailto:hello@lsxdesign.com"
                          style={{
                            fontFamily: 'Lexend, sans-serif',
                            fontSize: 'var(--text-base)',
                            fontWeight: 'var(--font-weight-medium)',
                            color: 'var(--foreground)',
                            textDecoration: 'none',
                            transition: 'color 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--primary)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--foreground)';
                          }}
                        >
                          hello@lsxdesign.com
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <div 
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: 'var(--radius-lg)',
                          backgroundColor: 'var(--primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <Phone size={20} style={{ color: 'var(--primary-foreground)' }} />
                      </div>
                      <div>
                        <p 
                          style={{
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: 'var(--text-small)',
                            fontWeight: 'var(--font-weight-medium)',
                            color: 'var(--muted-foreground)',
                            margin: 0,
                            marginBottom: '4px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}
                        >
                          Phone
                        </p>
                        <a 
                          href="tel:+27123456789"
                          style={{
                            fontFamily: 'Lexend, sans-serif',
                            fontSize: 'var(--text-base)',
                            fontWeight: 'var(--font-weight-medium)',
                            color: 'var(--foreground)',
                            textDecoration: 'none',
                            transition: 'color 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--primary)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'var(--foreground)';
                          }}
                        >
                          +27 (12) 345-6789
                        </a>
                      </div>
                    </div>

                    {/* Office */}
                    <div className="flex items-start gap-3">
                      <div 
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: 'var(--radius-lg)',
                          backgroundColor: 'var(--primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <MapPin size={20} style={{ color: 'var(--primary-foreground)' }} />
                      </div>
                      <div>
                        <p 
                          style={{
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: 'var(--text-small)',
                            fontWeight: 'var(--font-weight-medium)',
                            color: 'var(--muted-foreground)',
                            margin: 0,
                            marginBottom: '4px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}
                        >
                          Office
                        </p>
                        <p 
                          style={{
                            fontFamily: 'Lexend, sans-serif',
                            fontSize: 'var(--text-base)',
                            color: 'var(--foreground)',
                            lineHeight: '1.6',
                            margin: 0,
                          }}
                        >
                          Cape Town, South Africa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div 
                  className="p-6"
                  style={{
                    backgroundColor: 'var(--muted)',
                    border: '1px solid var(--border-soft)',
                    borderRadius: 'var(--radius-xl)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Clock size={20} style={{ color: 'var(--primary-foreground)' }} />
                    </div>
                    <h3 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-h4)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--foreground)',
                        margin: 0
                      }}
                    >
                      Office Hours
                    </h3>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <span 
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          color: 'var(--foreground)',
                        }}
                      >
                        Monday - Friday
                      </span>
                      <span 
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--primary)',
                        }}
                      >
                        9am - 5pm
                      </span>
                    </div>
                    <div 
                      style={{
                        height: '1px',
                        backgroundColor: 'var(--border-soft)'
                      }}
                    />
                    <div className="flex justify-between items-center">
                      <span 
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          color: 'var(--foreground)',
                        }}
                      >
                        Saturday - Sunday
                      </span>
                      <span 
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-base)',
                          color: 'var(--muted-foreground)',
                        }}
                      >
                        Closed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ Section - Pattern with Standard Spacing */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
          <Container>
            <div className="max-w-3xl mx-auto">
              {/* FAQ Heading with standard spacing */}
              <div className="text-center mb-12">
                <h2 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    marginBottom: '16px',
                    lineHeight: 'var(--line-height-snug)'
                  }}
                >
                  Frequently Asked Questions
                </h2>
                <p 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.7'
                  }}
                >
                  Find answers to common questions about our WordPress services
                </p>
              </div>

              {/* Accordion Group with consistent spacing */}
              <FAQSection 
                faqs={contactFAQs}
                openFaq={openFaq}
                setOpenFaq={setOpenFaq}
              />
            </div>
          </Container>
        </Section>

        {/* Newsletter Signup - Pattern with Standard Spacing */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-3xl mx-auto">
              {/* Newsletter Signup Heading with standard spacing */}
              <div className="text-center mb-12">
                <h2 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h2)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    marginBottom: '16px',
                    lineHeight: 'var(--line-height-snug)'
                  }}
                >
                  Stay Updated
                </h2>
                <p 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.7'
                  }}
                >
                  Subscribe to our newsletter to receive the latest news and updates
                </p>
              </div>

              {/* Newsletter Signup Form with consistent spacing */}
              <NewsletterSignup />
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}