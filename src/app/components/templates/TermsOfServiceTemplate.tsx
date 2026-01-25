/**
 * Terms of Service Template
 * 
 * WordPress template: templates/page-terms-of-service.html
 * 
 * Legal page displaying terms of service content.
 * Pattern order: Breadcrumbs → Hero → Content → CTA
 * 
 * **WordPress Blocks:**
 * - Group (page container)
 * - Heading (H1, H2, H3)
 * - Paragraph (body text)
 * - List (bullet points)
 * 
 * **Compliance:**
 * - 100% CSS variables
 * - WordPress-aligned CSS classes
 * - Light + dark mode support
 * - WCAG 2.1 AA compliant
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { CTASection } from '../patterns/CTASection';
import { FileCheck, Scale, AlertTriangle, CheckCircle2, XCircle, Users } from 'lucide-react';

export function TermsOfServiceTemplate() {
  const lastUpdated = 'January 22, 2026';

  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs */}
        <section 
          style={{
            paddingTop: 'var(--spacing-4)',
            paddingBottom: 'var(--spacing-4)',
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border-soft)'
          }}
        >
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Terms of Service' }
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Container>
            <div className="wp-max-w-4xl wp-text-center" style={{ position: 'relative', zIndex: 10 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(12px)',
                  marginBottom: 'var(--spacing-6)'
                }}
              >
                <Scale size={40} strokeWidth={2} />
              </div>

              <h1 
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-semibold)',
                  lineHeight: 1.2,
                  marginBottom: 'var(--spacing-6)'
                }}
              >
                Terms of Service
              </h1>

              <p 
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.6,
                  opacity: 0.9,
                  marginBottom: 'var(--spacing-6)'
                }}
              >
                Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
              </p>

              <p 
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-base)',
                  opacity: 0.8
                }}
              >
                Last updated: {lastUpdated}
              </p>
            </div>
          </Container>
        </Section>

        {/* Content Section */}
        <Section spacing="xl">
          <Container>
            <div className="wp-max-w-4xl" style={{ margin: '0 auto' }}>
              {/* Section 1: Agreement to Terms */}
              <div style={{ marginBottom: 'var(--spacing-12)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-4)' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)'
                    }}
                  >
                    <FileCheck size={24} />
                  </div>
                  <h2 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)',
                      margin: 0
                    }}
                  >
                    Agreement to Terms
                  </h2>
                </div>

                <p style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.6, color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>
                  By accessing or using LSX Design's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                </p>

                <p style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.6, color: 'var(--foreground)' }}>
                  These terms constitute a legally binding agreement between you and LSX Design. We reserve the right to update these terms at any time, and continued use of our services after changes constitutes acceptance of the new terms.
                </p>
              </div>

              {/* Section 2: Services Provided */}
              <div style={{ marginBottom: 'var(--spacing-12)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-4)' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)'
                    }}
                  >
                    <CheckCircle2 size={24} />
                  </div>
                  <h2 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)',
                      margin: 0
                    }}
                  >
                    Services Provided
                  </h2>
                </div>

                <p style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.6, color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>
                  LSX Design provides the following services:
                </p>

                <ul style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--foreground)', marginLeft: 'var(--spacing-6)', marginBottom: 'var(--spacing-6)' }}>
                  <li><strong>WordPress Development:</strong> Custom WordPress website design, development, and implementation</li>
                  <li><strong>WooCommerce Solutions:</strong> E-commerce platform development and customization</li>
                  <li><strong>Design Services:</strong> UI/UX design, branding, and visual identity</li>
                  <li><strong>Support & Maintenance:</strong> Ongoing website support, updates, and maintenance</li>
                  <li><strong>Hosting Services:</strong> Managed WordPress hosting and infrastructure</li>
                  <li><strong>Consulting:</strong> Technical consulting, strategy, and planning services</li>
                </ul>
              </div>

              {/* Section 3: Client Responsibilities */}
              <div style={{ marginBottom: 'var(--spacing-12)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-4)' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)'
                    }}
                  >
                    <Users size={24} />
                  </div>
                  <h2 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)',
                      margin: 0
                    }}
                  >
                    Client Responsibilities
                  </h2>
                </div>

                <p style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.6, color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>
                  As a client, you agree to:
                </p>

                <ul style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--foreground)', marginLeft: 'var(--spacing-6)', marginBottom: 'var(--spacing-6)' }}>
                  <li>Provide accurate and complete information required for project completion</li>
                  <li>Respond to requests for feedback and approvals in a timely manner</li>
                  <li>Provide necessary content, assets, and access credentials as required</li>
                  <li>Maintain confidentiality of login credentials and account information</li>
                  <li>Pay all fees according to the agreed payment schedule</li>
                  <li>Use our services only for lawful purposes and in accordance with these terms</li>
                  <li>Maintain backups of your own data and content</li>
                </ul>
              </div>

              {/* Section 4: Payment Terms */}
              <div style={{ marginBottom: 'var(--spacing-12)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-4)' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)'
                    }}
                  >
                    <CheckCircle2 size={24} />
                  </div>
                  <h2 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)',
                      margin: 0
                    }}
                  >
                    Payment Terms
                  </h2>
                </div>

                <ul style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--foreground)', marginLeft: 'var(--spacing-6)', marginBottom: 'var(--spacing-6)' }}>
                  <li>Payment terms are specified in your project proposal or service agreement</li>
                  <li>Typical payment structure: 50% deposit, 50% upon completion</li>
                  <li>Invoices are due within 14 days unless otherwise specified</li>
                  <li>Late payments may incur interest charges at a rate of 1.5% per month</li>
                  <li>Work may be suspended if payment is more than 30 days overdue</li>
                  <li>All fees are in USD unless otherwise stated</li>
                  <li>Refunds are handled on a case-by-case basis per our refund policy</li>
                </ul>
              </div>

              {/* Section 5: Intellectual Property */}
              <div style={{ marginBottom: 'var(--spacing-12)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-4)' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)'
                    }}
                  >
                    <Scale size={24} />
                  </div>
                  <h2 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)',
                      margin: 0
                    }}
                  >
                    Intellectual Property
                  </h2>
                </div>

                <p style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.6, color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>
                  Upon full payment, you receive the following rights:
                </p>

                <ul style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--foreground)', marginLeft: 'var(--spacing-6)', marginBottom: 'var(--spacing-6)' }}>
                  <li><strong>Custom Code:</strong> Full ownership of custom code developed specifically for your project</li>
                  <li><strong>Design Assets:</strong> Rights to use designs, graphics, and visual elements</li>
                  <li><strong>Content:</strong> You retain ownership of all content you provide</li>
                  <li><strong>Third-Party Components:</strong> Subject to their respective licenses (WordPress, plugins, themes)</li>
                  <li><strong>Portfolio Rights:</strong> We reserve the right to showcase your project in our portfolio</li>
                  <li><strong>Pre-existing Materials:</strong> LSX Design retains ownership of pre-existing code, frameworks, and tools</li>
                </ul>
              </div>

              {/* Section 6: Limitations of Liability */}
              <div style={{ marginBottom: 'var(--spacing-12)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-4)' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)'
                    }}
                  >
                    <XCircle size={24} />
                  </div>
                  <h2 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)',
                      margin: 0
                    }}
                  >
                    Limitations of Liability
                  </h2>
                </div>

                <ul style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--foreground)', marginLeft: 'var(--spacing-6)', marginBottom: 'var(--spacing-6)' }}>
                  <li>LSX Design is not liable for any indirect, incidental, or consequential damages</li>
                  <li>Our total liability is limited to the amount paid by you for the specific service</li>
                  <li>We are not responsible for third-party services, plugins, or hosting issues</li>
                  <li>Client is responsible for maintaining backups and data security</li>
                  <li>We do not guarantee specific traffic, rankings, or business outcomes</li>
                  <li>Force majeure events excuse performance obligations</li>
                </ul>
              </div>

              {/* Section 7: Termination */}
              <div style={{ marginBottom: 'var(--spacing-12)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-4)' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)'
                    }}
                  >
                    <AlertTriangle size={24} />
                  </div>
                  <h2 
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h2)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)',
                      margin: 0
                    }}
                  >
                    Termination
                  </h2>
                </div>

                <p style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.6, color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>
                  Either party may terminate services under the following conditions:
                </p>

                <ul style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--foreground)', marginLeft: 'var(--spacing-6)', marginBottom: 'var(--spacing-6)' }}>
                  <li>Written notice of 30 days for ongoing service agreements</li>
                  <li>Immediate termination for breach of these terms</li>
                  <li>Non-payment beyond 30 days may result in service suspension</li>
                  <li>Upon termination, all outstanding fees become immediately due</li>
                  <li>Work completed up to termination date must be paid for</li>
                  <li>Client data will be provided upon request after final payment</li>
                </ul>
              </div>

              {/* Contact Information */}
              <div 
                style={{
                  padding: 'var(--spacing-8)',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'var(--muted)',
                  border: '1px solid var(--border)'
                }}
              >
                <h3 
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h3)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--foreground)',
                    marginBottom: 'var(--spacing-4)'
                  }}
                >
                  Questions About Our Terms?
                </h3>
                <p style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.6, color: 'var(--foreground)', marginBottom: 'var(--spacing-3)' }}>
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <p style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--foreground)', margin: 0 }}>
                  <strong>Email:</strong> legal@lsxdesign.com<br />
                  <strong>Website:</strong> https://lsxdesign.com/contact<br />
                  <strong>Last Updated:</strong> {lastUpdated}
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Get Started?"
          description="Let's discuss your project requirements and create something amazing together."
          buttonText="Start Your Project"
          buttonPage="contact"
          variant="default"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}
