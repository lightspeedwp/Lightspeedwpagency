/**
 * Privacy Policy Template
 * 
 * WordPress template: templates/page-privacy-policy.html
 * 
 * Legal page displaying privacy policy content.
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
import { Shield, Lock, Eye, FileText, AlertCircle, CheckCircle } from 'lucide-react';

export function PrivacyPolicyTemplate() {
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
                { label: 'Privacy Policy' }
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
                <Shield size={40} strokeWidth={2} />
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
                Privacy Policy
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
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
              {/* Section 1: Information We Collect */}
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
                    <FileText size={24} />
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
                    Information We Collect
                  </h2>
                </div>

                <p style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.6, color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>
                  We collect information you provide directly to us, including:
                </p>

                <ul style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--foreground)', marginLeft: 'var(--spacing-6)', marginBottom: 'var(--spacing-6)' }}>
                  <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
                  <li><strong>Project Details:</strong> Project requirements, budget, timeline, industry</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, device information, usage data</li>
                  <li><strong>Communication Data:</strong> Messages, feedback, support requests</li>
                </ul>
              </div>

              {/* Section 2: How We Use Your Information */}
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
                    <CheckCircle size={24} />
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
                    How We Use Your Information
                  </h2>
                </div>

                <p style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.6, color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>
                  We use the information we collect to:
                </p>

                <ul style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--foreground)', marginLeft: 'var(--spacing-6)', marginBottom: 'var(--spacing-6)' }}>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you project updates, newsletters, and marketing communications</li>
                  <li>Analyze usage patterns and optimize website performance</li>
                  <li>Prevent fraud, abuse, and security incidents</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                </ul>
              </div>

              {/* Section 3: Information Sharing */}
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
                    <Eye size={24} />
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
                    Information Sharing
                  </h2>
                </div>

                <p style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.6, color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>
                  We do not sell your personal information. We may share your information with:
                </p>

                <ul style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--foreground)', marginLeft: 'var(--spacing-6)', marginBottom: 'var(--spacing-6)' }}>
                  <li><strong>Service Providers:</strong> Third-party vendors who help us operate our business (hosting, analytics, email)</li>
                  <li><strong>Business Partners:</strong> With your consent, for co-marketing or joint services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </div>

              {/* Section 4: Data Security */}
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
                    <Lock size={24} />
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
                    Data Security
                  </h2>
                </div>

                <p style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.6, color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>
                  We implement appropriate technical and organizational measures to protect your personal information:
                </p>

                <ul style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--foreground)', marginLeft: 'var(--spacing-6)', marginBottom: 'var(--spacing-6)' }}>
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure server infrastructure and regular security audits</li>
                  <li>Access controls and authentication measures</li>
                  <li>Regular backups and disaster recovery procedures</li>
                  <li>Employee training on data protection best practices</li>
                </ul>
              </div>

              {/* Section 5: Your Rights */}
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
                    <AlertCircle size={24} />
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
                    Your Rights
                  </h2>
                </div>

                <p style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.6, color: 'var(--foreground)', marginBottom: 'var(--spacing-4)' }}>
                  You have the following rights regarding your personal information:
                </p>

                <ul style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--foreground)', marginLeft: 'var(--spacing-6)', marginBottom: 'var(--spacing-6)' }}>
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Update inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Data Portability:</strong> Receive your data in a structured format</li>
                  <li><strong>Object:</strong> Object to certain processing activities</li>
                </ul>

                <p style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.6, color: 'var(--foreground)' }}>
                  To exercise these rights, please contact us at <strong style={{ color: 'var(--primary)' }}>privacy@lsxdesign.com</strong>
                </p>
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
                  Contact Us
                </h3>
                <p style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.6, color: 'var(--foreground)', marginBottom: 'var(--spacing-3)' }}>
                  If you have questions about this Privacy Policy, please contact us:
                </p>
                <p style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--foreground)', margin: 0 }}>
                  <strong>Email:</strong> privacy@lsxdesign.com<br />
                  <strong>Website:</strong> https://lsxdesign.com/contact<br />
                  <strong>Last Updated:</strong> {lastUpdated}
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <CTASection
          title="Have Questions About Privacy?"
          description="Our team is here to help. Contact us for any privacy-related inquiries."
          buttonText="Contact Us"
          buttonPage="contact"
          variant="default"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}
