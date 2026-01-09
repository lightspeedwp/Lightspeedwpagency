/**
 * Security Service Template
 * 
 * WordPress template: templates/page-security-service.html
 * 
 * Website security service page for WordPress protection and monitoring.
 * 
 * Pattern order:
 * Hero → Security Services → Threats → Process → Features → CTA → FAQs
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Buttons, Button } from '../blocks/design/Buttons';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { RouteAnnouncer } from '../blocks/utility/RouteAnnouncer';
import { FAQSection } from '../patterns/FAQSection';
import { useState } from 'react';
import { 
  Shield,
  ArrowRight,
  CheckCircle,
  Lock,
  AlertTriangle,
  Eye,
  FileText,
  RefreshCw,
  Server,
  Zap
} from 'lucide-react';

export function SecurityServiceTemplate() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const securityServices = [
    {
      id: 'audits',
      icon: Eye,
      title: 'Security Audits',
      description: 'Comprehensive security assessments to identify vulnerabilities.',
      features: ['Vulnerability scanning', 'Code review', 'Plugin analysis', 'Configuration audit']
    },
    {
      id: 'hardening',
      icon: Shield,
      title: 'Website Hardening',
      description: 'Strengthen WordPress security with best practices and configurations.',
      features: ['File permissions', 'Database security', 'Login protection', 'Admin hardening']
    },
    {
      id: 'malware',
      icon: AlertTriangle,
      title: 'Malware Removal',
      description: 'Clean infected sites and remove malicious code completely.',
      features: ['Malware detection', 'Code cleaning', 'Backdoor removal', 'Reinfection prevention']
    },
    {
      id: 'firewall',
      icon: Lock,
      title: 'Firewall Setup',
      description: 'Web Application Firewall (WAF) to block malicious traffic.',
      features: ['WAF configuration', 'IP blocking', 'DDoS protection', 'Traffic filtering']
    },
    {
      id: 'monitoring',
      icon: Server,
      title: 'Security Monitoring',
      description: '24/7 monitoring and alerts for suspicious activity.',
      features: ['Real-time alerts', 'File integrity', 'Login monitoring', 'Uptime checks']
    },
    {
      id: 'backups',
      icon: RefreshCw,
      title: 'Backup Solutions',
      description: 'Automated backups with secure off-site storage.',
      features: ['Daily backups', 'Off-site storage', 'One-click restore', 'Version history']
    }
  ];

  const commonThreats = [
    {
      threat: 'Brute Force Attacks',
      description: 'Automated login attempts to guess passwords',
      solution: 'Two-factor authentication, login limits, strong passwords'
    },
    {
      threat: 'Malware Infections',
      description: 'Malicious code injected into your website',
      solution: 'Regular scanning, file integrity monitoring, malware removal'
    },
    {
      threat: 'DDoS Attacks',
      description: 'Overwhelming traffic to crash your website',
      solution: 'WAF protection, CDN, rate limiting, traffic analysis'
    },
    {
      threat: 'SQL Injection',
      description: 'Database attacks through vulnerable code',
      solution: 'Prepared statements, input validation, code audits'
    },
    {
      threat: 'Outdated Software',
      description: 'Unpatched vulnerabilities in WordPress, themes, plugins',
      solution: 'Automatic updates, version monitoring, testing protocols'
    },
    {
      threat: 'Weak Passwords',
      description: 'Easy-to-guess login credentials',
      solution: 'Password policies, 2FA, user education, password managers'
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: 'Proactive Protection',
      description: 'Prevent attacks before they happen with multiple security layers'
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Continuous surveillance with instant alerts for suspicious activity'
    },
    {
      icon: Zap,
      title: 'Rapid Response',
      description: 'Quick incident response to minimize damage and downtime'
    },
    {
      icon: FileText,
      title: 'Detailed Reports',
      description: 'Regular security reports showing threats blocked and actions taken'
    }
  ];

  const securityFAQs = [
    {
      question: 'How often should I update WordPress security?',
      answer: 'WordPress security should be monitored continuously with daily automated checks. Core WordPress, themes, and plugins should be updated as soon as updates are available (usually weekly). Security audits should be performed quarterly, and backups should run daily. We provide managed security services that handle all of this automatically.'
    },
    {
      question: 'What happens if my site gets hacked?',
      answer: 'If your site is compromised, we immediately take it offline to prevent further damage, identify the attack vector, remove all malicious code and backdoors, restore from clean backups if needed, implement additional security measures, and bring your site back online. Most hacked sites can be cleaned within 24-48 hours.'
    },
    {
      question: 'Can you recover my website after an attack?',
      answer: 'Yes! We specialize in hacked site recovery. We can restore your site from backups, clean infected files, remove malware and backdoors, restore your database, implement security hardening, and prevent future attacks. We also help with search engine blacklist removal if needed.'
    },
    {
      question: 'Do I need security if I have a small website?',
      answer: 'Absolutely! Small websites are often targeted because they typically have weaker security. Hackers use automated tools to scan thousands of sites looking for vulnerabilities. Your site can be infected and used for spam, phishing, or attacking other sites without you knowing. Every website needs security protection.'
    },
    {
      question: 'What is two-factor authentication and do I need it?',
      answer: 'Two-factor authentication (2FA) requires two forms of identification to log in - your password and a code from your phone. This prevents hackers from accessing your site even if they steal your password. We strongly recommend 2FA for all administrator accounts and can help implement it on your site.'
    },
    {
      question: 'How much does WordPress security cost?',
      answer: 'Security services range from $99/month for basic monitoring and updates to $499/month for comprehensive protection including WAF, malware scanning, daily backups, and priority incident response. One-time security audits start at $500. Malware removal services are $300-$1000 depending on infection severity. Investing in security is far cheaper than recovering from an attack.'
    }
  ];

  return (
    <>
      <RouteAnnouncer />
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Hero Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
            color: 'var(--primary-foreground)',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px',
            paddingBottom: '80px'
          }}
        >
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)',
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
                SECURITY SERVICES
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
                Enterprise-Grade WordPress<br />Security
              </h1>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.95)',
                  marginBottom: '32px',
                  maxWidth: '700px',
                  margin: '0 auto 32px'
                }}
              >
                Protect your website from hackers, malware, and cyber threats with 
                comprehensive security services and 24/7 monitoring.
              </p>

              <Buttons orientation="horizontal" style={{ justifyContent: 'center' }}>
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                  style={{
                    backgroundColor: 'white',
                    color: '#dc2626',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  Secure My Site
                  <ArrowRight size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  page="contact"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    backgroundColor: 'transparent'
                  }}
                >
                  Get Security Audit
                </Button>
              </Buttons>
            </div>
          </Container>
        </Section>

        {/* Security Services */}
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
                Our Security Services
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
                Comprehensive protection for your WordPress website
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityServices.map((service) => {
                const Icon = service.icon;
                const isHovered = hoveredService === service.id;

                return (
                  <div
                    key={service.id}
                    style={{
                      padding: '32px',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-xl)',
                      border: isHovered ? '2px solid var(--primary)' : '1px solid var(--border-soft)',
                      transition: 'all 0.3s ease',
                      transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                      boxShadow: isHovered ? '0 20px 40px rgba(0, 0, 0, 0.15)' : '0 4px 12px rgba(0, 0, 0, 0.05)'
                    }}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: isHovered ? 'var(--primary)' : 'var(--primary-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Icon 
                        size={32} 
                        style={{ 
                          color: isHovered ? 'white' : 'var(--primary)',
                          transition: 'color 0.3s ease'
                        }} 
                      />
                    </div>

                    <h3
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-xl)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--foreground)',
                        marginBottom: '12px'
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        lineHeight: '1.6',
                        color: 'var(--muted-foreground)',
                        marginBottom: '16px'
                      }}
                    >
                      {service.description}
                    </p>

                    <ul className="space-y-2" style={{ listStyle: 'none', padding: 0 }}>
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }}
                        >
                          <CheckCircle size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                          <span
                            style={{
                              fontFamily: 'Lexend, sans-serif',
                              fontSize: 'var(--text-small)',
                              color: 'var(--muted-foreground)'
                            }}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Common Threats */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--muted)' }}>
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
                Common Security Threats
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
                Understanding the threats and how we protect you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commonThreats.map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: '32px',
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-soft)'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '12px'
                    }}
                  >
                    <AlertTriangle size={24} style={{ color: 'var(--destructive)', flexShrink: 0 }} />
                    <h3
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-lg)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--foreground)'
                      }}
                    >
                      {item.threat}
                    </h3>
                  </div>

                  <p
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      lineHeight: '1.6',
                      color: 'var(--muted-foreground)',
                      marginBottom: '12px'
                    }}
                  >
                    {item.description}
                  </p>

                  <div
                    style={{
                      padding: '12px',
                      backgroundColor: 'var(--primary-soft)',
                      borderRadius: 'var(--radius)',
                      border: '1px solid var(--primary)'
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--primary)',
                        marginBottom: '4px'
                      }}
                    >
                      Our Solution:
                    </div>
                    <div
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-small)',
                        lineHeight: '1.5',
                        color: 'var(--foreground)'
                      }}
                    >
                      {item.solution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Security Features */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    style={{
                      padding: '32px',
                      backgroundColor: 'var(--card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-soft)',
                      textAlign: 'center'
                    }}
                  >
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--primary-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px'
                      }}
                    >
                      <Icon size={32} style={{ color: 'var(--primary)' }} />
                    </div>

                    <h3
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-lg)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--foreground)',
                        marginBottom: '8px'
                      }}
                    >
                      {feature.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        lineHeight: '1.6',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section 
          spacing="xl"
          style={{
            background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
            color: 'var(--primary-foreground)',
            textAlign: 'center'
          }}
        >
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h1)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  marginBottom: '20px'
                }}
              >
                Don't Wait Until It's Too Late
              </h2>

              <p
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7',
                  marginBottom: '32px',
                  opacity: 0.95
                }}
              >
                Protect your website now with comprehensive security services. 
                Get a free security audit today.
              </p>

              <Buttons orientation="horizontal" style={{ justifyContent: 'center' }}>
                <Button
                  variant="default"
                  size="lg"
                  page="contact"
                  style={{
                    backgroundColor: 'white',
                    color: '#dc2626',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  Get Protected
                  <ArrowRight size={20} />
                </Button>
              </Buttons>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section spacing="xl" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
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
                  Security FAQs
                </h2>
              </div>

              <FAQSection faqs={securityFAQs} />
            </div>
          </Container>
        </Section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}