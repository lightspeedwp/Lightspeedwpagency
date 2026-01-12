/**
 * Contact Page Template
 * 
 * WordPress template: templates/page-contact.html
 * 
 * Pattern order: Breadcrumbs → Hero → Contact Methods → Contact Form → Why Contact → FAQ
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Button } from '../blocks/design/Buttons';
import { FAQSection } from '../patterns/FAQSection';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { FormField, TextAreaField } from '../ui/FormField';
import { useFormValidation } from '../../hooks/useFormValidation';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  AlertCircle,
  Loader,
  MessageSquare,
  Headphones,
  Award,
  Users,
  ExternalLink
} from 'lucide-react';
import { useState } from 'react';

// Import centralized data
import {
  contactPageMethods,
  contactPageHero,
  contactPageReasons,
  contactPageFAQs,
  contactPageOffice,
  contactFormFields,
  contactFormMessages
} from '../../data/contact-page';

export function ContactPageTemplate() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
      name: (value) => value.length >= 2 ? '' : contactFormFields.name.errorMessage,
      email: (value) => /\S+@\S+\.\S+/.test(value) ? '' : contactFormFields.email.errorMessage,
      message: (value) => {
        if (value.length < 10) return 'Message must be at least 10 characters';
        if (value.length > 500) return 'Message must be less than 500 characters';
        return '';
      }
    },
    onSubmit: async (values) => {
      try {
        console.log('Form submitted:', values);
        // In WordPress, this would submit to backend
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitStatus('success');
        resetForm();
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } catch (error) {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    }
  });

  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs */}
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
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Gradient orb decorations */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, transparent 70%)',
              filter: 'blur(80px)',
              transform: 'translate(30%, -30%)'
            }}
          />

          <Container>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div
                className="inline-block px-4 py-2 mb-6"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: 'var(--text-small)',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 'var(--font-weight-semibold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                <MessageSquare size={14} style={{ display: 'inline', marginRight: '8px' }} />
                GET IN TOUCH
              </div>

              <h1
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  marginBottom: '20px',
                  color: 'var(--primary-foreground)'
                }}
              >
                Let's Build Something <span style={{ 
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Amazing</span> Together
              </h1>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.95)',
                  marginBottom: '40px',
                  maxWidth: '700px',
                  margin: '0 auto 40px'
                }}
              >
                Whether you need a new WordPress website, WooCommerce store, or ongoing 
                support - we're here to help. Send us a message and we'll get back to you 
                within 24 hours.
              </p>

              {/* Hero Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Award, value: '22+', label: 'Years Experience' },
                  { icon: Users, value: '120+', label: 'Websites Hosted' },
                  { icon: Clock, value: '24hrs', label: 'Response Time' }
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      style={{
                        padding: '24px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      <Icon size={32} style={{ marginBottom: '12px', color: '#fbbf24' }} />
                      <div
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-h2)',
                          fontWeight: 'var(--font-weight-bold)',
                          marginBottom: '4px'
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 'var(--text-small)',
                          opacity: 0.9
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Contact Methods Grid */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="text-center mb-16">
              <h2
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                  color: 'var(--foreground)'
                }}
              >
                Ways to Contact Us
              </h2>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'var(--muted-foreground)',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                Choose the method that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactPageMethods.map((method, index) => {
                const Icon = method.icon;
                const isLink = method.href !== '#';
                
                const content = (
                  <div
                    style={{
                      padding: '32px',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                      transition: 'all 0.3s ease',
                      cursor: isLink ? 'pointer' : 'default'
                    }}
                    onMouseEnter={(e) => {
                      if (isLink) {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                        e.currentTarget.style.borderColor = 'var(--primary)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (isLink) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.borderColor = 'var(--border-soft)';
                      }
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: 'var(--primary-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={28} style={{ color: 'var(--primary)' }} />
                    </div>

                    <div>
                      <h3
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-xl)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'var(--foreground)',
                          marginBottom: '8px'
                        }}
                      >
                        {method.title}
                        {isLink && (
                          <ExternalLink 
                            size={16} 
                            style={{ 
                              display: 'inline', 
                              marginLeft: '8px',
                              color: 'var(--primary)' 
                            }} 
                          />
                        )}
                      </h3>

                      <p
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-small)',
                          lineHeight: '1.5',
                          color: 'var(--muted-foreground)',
                          marginBottom: '12px'
                        }}
                      >
                        {method.description}
                      </p>

                      <p
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 'var(--text-base)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: isLink ? 'var(--primary)' : 'var(--foreground)'
                        }}
                      >
                        {method.value}
                      </p>
                    </div>
                  </div>
                );

                return isLink ? (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ textDecoration: 'none', display: 'block' }}
                    aria-label={`${method.title}: ${method.value}`}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>
          </Container>
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
                        className="inline-flex items-center gap-2 px-8 py-4"
                        style={{
                          backgroundColor: 'var(--primary)',
                          color: 'var(--primary-foreground)',
                          fontSize: 'var(--text-base)',
                          fontFamily: 'var(--font-primary)',
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

        {/* Why Contact Us Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-3xl mx-auto">
              {/* Why Contact Us Heading with standard spacing */}
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
                  Why Contact Us?
                </h2>
                <p 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--muted-foreground)',
                    lineHeight: '1.7'
                  }}
                >
                  Discover the benefits of choosing our WordPress services
                </p>
              </div>

              {/* Accordion Group with consistent spacing */}
              <FAQSection 
                faqs={contactPageReasons}
                openFaq={null}
                setOpenFaq={() => {}}
              />
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
                faqs={contactPageFAQs}
                openFaq={null}
                setOpenFaq={() => {}}
              />
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}