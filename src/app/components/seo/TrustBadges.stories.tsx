import type { Meta, StoryObj } from '@storybook/react';
import {
  TrustBadges,
  PaymentMethodBadges,
  SecurityBadges,
  CertificationBadges,
  TrustBadgeBar,
  MiniTrustBadge,
} from './TrustBadges';
import { CreditCard, Shield, Lock, Award, CheckCircle2 } from 'lucide-react';
import { trustBadges } from '../../data/seo';

/**
 * Trust Badges - Visual Trust Indicators
 * 
 * Display payment methods, security certificates, and certifications
 * to build customer trust and credibility.
 * 
 * ## Design System Compliance
 * - Uses CSS variables for all colors (theme-aware)
 * - Uses Manrope font for labels, Lexend for headings
 * - WCAG 2.1 AA compliant in both light and dark modes
 * - Hover effects with scale transform
 * 
 * ## WordPress Mapping
 * - Pattern: lsx-design/marketing/trust-badges
 * - Use in: Footer, checkout pages, service pages
 * 
 * ## Use Cases
 * - E-commerce checkout pages
 * - Service landing pages
 * - Footer (site-wide)
 * - Pricing pages
 */
const meta = {
  title: 'SEO & Marketing/TrustBadges',
  component: TrustBadges,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Visual trust indicators including payment methods, security certificates, and certifications. Builds customer confidence and credibility.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TrustBadges>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Payment Method Badges
 */
export const PaymentMethods: Story = {
  render: () => <PaymentMethodBadges />,
  parameters: {
    docs: {
      description: {
        story: 'Pre-configured payment method badges for e-commerce sites. Shows accepted payment options clearly.',
      },
    },
  },
};

/**
 * Security Badges
 */
export const SecurityBadges_: Story = {
  render: () => <SecurityBadges />,
  parameters: {
    docs: {
      description: {
        story: 'Security and compliance badges including SSL, PCI, and GDPR. Builds trust in checkout and contact forms.',
      },
    },
  },
};

/**
 * Certification Badges
 */
export const CertificationBadges_: Story = {
  render: () => <CertificationBadges />,
  parameters: {
    docs: {
      description: {
        story: 'Industry certifications and awards. Perfect for about pages and service pages.',
      },
    },
  },
};

/**
 * Custom Trust Badges - Horizontal Layout
 */
export const HorizontalLayout: Story = {
  args: {
    badges: [
      { type: 'security', name: 'SSL Secure', icon: <Shield className="w-6 h-6" /> },
      { type: 'security', name: 'PCI Compliant', icon: <Lock className="w-6 h-6" /> },
      { type: 'certification', name: 'ISO 9001', icon: <Award className="w-6 h-6" /> },
      { type: 'certification', name: 'WordPress VIP', icon: <CheckCircle2 className="w-6 h-6" /> },
    ],
    layout: 'horizontal',
    showLabels: true,
    title: 'Trusted & Certified',
  },
  parameters: {
    docs: {
      description: {
        story: 'Horizontal layout with custom badges. Badges wrap responsively on smaller screens.',
      },
    },
  },
};

/**
 * Custom Trust Badges - Grid Layout
 */
export const GridLayout: Story = {
  args: {
    badges: [
      { type: 'payment', name: 'Visa', icon: <CreditCard className="w-6 h-6" /> },
      { type: 'payment', name: 'Mastercard', icon: <CreditCard className="w-6 h-6" /> },
      { type: 'payment', name: 'American Express', icon: <CreditCard className="w-6 h-6" /> },
      { type: 'payment', name: 'PayPal', icon: <CreditCard className="w-6 h-6" /> },
      { type: 'security', name: 'SSL Secure', icon: <Shield className="w-6 h-6" /> },
      { type: 'security', name: 'PCI Compliant', icon: <Lock className="w-6 h-6" /> },
      { type: 'certification', name: 'ISO 9001', icon: <Award className="w-6 h-6" /> },
      { type: 'certification', name: 'WordPress VIP', icon: <CheckCircle2 className="w-6 h-6" /> },
    ],
    layout: 'grid',
    showLabels: true,
    title: 'Payment & Security',
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid layout with 2 columns on mobile, 4 columns on desktop. Great for larger badge collections.',
      },
    },
  },
};

/**
 * Icons Only (No Labels)
 */
export const IconsOnly: Story = {
  args: {
    badges: [
      { type: 'payment', name: 'Visa', icon: <CreditCard className="w-6 h-6" /> },
      { type: 'payment', name: 'Mastercard', icon: <CreditCard className="w-6 h-6" /> },
      { type: 'security', name: 'SSL Secure', icon: <Shield className="w-6 h-6" /> },
      { type: 'security', name: 'PCI Compliant', icon: <Lock className="w-6 h-6" /> },
    ],
    layout: 'horizontal',
    showLabels: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact display with icons only. Labels appear on hover via tooltip.',
      },
    },
  },
};

/**
 * Trust Badge Bar
 */
export const BadgeBar: Story = {
  render: () => (
    <TrustBadgeBar
      badges={[
        { type: 'security', name: 'SSL Secure', icon: <Shield className="w-6 h-6" /> },
        { type: 'security', name: 'PCI Compliant', icon: <Lock className="w-6 h-6" /> },
        { type: 'payment', name: 'Secure Payments', icon: <CreditCard className="w-6 h-6" /> },
        { type: 'certification', name: 'Verified Partner', icon: <CheckCircle2 className="w-6 h-6" /> },
      ]}
    />
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Full-width horizontal bar for footer or checkout. Subtle background with border.',
      },
    },
  },
};

/**
 * Mini Trust Badge
 */
export const MiniBadge: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-6">
      <MiniTrustBadge text="SSL Secure Checkout" />
      <MiniTrustBadge 
        icon={<Lock className="w-4 h-4" />} 
        text="256-bit Encryption" 
      />
      <MiniTrustBadge 
        icon={<CheckCircle2 className="w-4 h-4" />} 
        text="PCI Compliant" 
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Small inline trust indicators perfect for checkout buttons or forms.',
      },
    },
  },
};

/**
 * With Tooltips
 */
export const WithTooltips: Story = {
  args: {
    badges: [
      { 
        type: 'security', 
        name: 'SSL Secure', 
        icon: <Shield className="w-6 h-6" />,
        tooltip: '256-bit SSL encryption protects your data'
      },
      { 
        type: 'security', 
        name: 'PCI Compliant', 
        icon: <Lock className="w-6 h-6" />,
        tooltip: 'PCI DSS Level 1 certified for secure payments'
      },
      { 
        type: 'certification', 
        name: 'GDPR Compliant', 
        icon: <CheckCircle2 className="w-6 h-6" />,
        tooltip: 'EU data protection compliant'
      },
    ],
    layout: 'horizontal',
    showLabels: true,
    title: 'Secure & Compliant',
  },
  parameters: {
    docs: {
      description: {
        story: 'Badges with descriptive tooltips. Hover over badges to see additional information.',
      },
    },
  },
};

/**
 * All Badge Types
 */
export const AllBadgeTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div>
        <h3 style={{ 
          fontFamily: 'Lexend, sans-serif', 
          fontSize: 'var(--text-h4)', 
          marginBottom: '1rem',
          color: 'var(--foreground)',
        }}>
          Payment Methods
        </h3>
        <PaymentMethodBadges />
      </div>

      <div>
        <h3 style={{ 
          fontFamily: 'Lexend, sans-serif', 
          fontSize: 'var(--text-h4)', 
          marginBottom: '1rem',
          color: 'var(--foreground)',
        }}>
          Security Badges
        </h3>
        <SecurityBadges />
      </div>

      <div>
        <h3 style={{ 
          fontFamily: 'Lexend, sans-serif', 
          fontSize: 'var(--text-h4)', 
          marginBottom: '1rem',
          color: 'var(--foreground)',
        }}>
          Certifications
        </h3>
        <CertificationBadges />
      </div>

      <div>
        <h3 style={{ 
          fontFamily: 'Lexend, sans-serif', 
          fontSize: 'var(--text-h4)', 
          marginBottom: '1rem',
          color: 'var(--foreground)',
        }}>
          Trust Badge Bar (Footer)
        </h3>
        <TrustBadgeBar
          badges={[
            { type: 'security', name: 'SSL Secure', icon: <Shield className="w-6 h-6" /> },
            { type: 'payment', name: 'Secure Payments', icon: <CreditCard className="w-6 h-6" /> },
            { type: 'certification', name: 'Verified Partner', icon: <CheckCircle2 className="w-6 h-6" /> },
          ]}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all pre-configured badge types and layouts.',
      },
    },
  },
};

/**
 * Theme Comparison
 */
export const ThemeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ 
          fontFamily: 'Lexend, sans-serif', 
          fontSize: 'var(--text-h4)', 
          marginBottom: '1rem',
          color: 'var(--foreground)',
        }}>
          Current Theme
        </h3>
        <p style={{ 
          fontFamily: 'Manrope, sans-serif', 
          fontSize: 'var(--text-base)', 
          marginBottom: '1rem',
          color: 'var(--muted-foreground)',
        }}>
          Toggle theme using the toolbar above to see automatic color adaptation.
        </p>
        <TrustBadges
          badges={[
            { type: 'security', name: 'SSL Secure', icon: <Shield className="w-6 h-6" /> },
            { type: 'security', name: 'PCI Compliant', icon: <Lock className="w-6 h-6" /> },
            { type: 'certification', name: 'ISO 9001', icon: <Award className="w-6 h-6" /> },
            { type: 'certification', name: 'WordPress VIP', icon: <CheckCircle2 className="w-6 h-6" /> },
          ]}
          layout="horizontal"
          showLabels={true}
          title="Trusted & Certified"
        />
      </div>

      <div style={{ padding: '1.5rem' }}>
        <h4 style={{ 
          fontFamily: 'Lexend, sans-serif', 
          fontSize: 'var(--text-h5)', 
          marginBottom: '0.5rem',
          color: 'var(--foreground)',
        }}>
          CSS Variables Used:
        </h4>
        <ul style={{ 
          fontFamily: 'Manrope, sans-serif', 
          fontSize: 'var(--text-small)', 
          color: 'var(--muted-foreground)',
          listStyle: 'disc',
          paddingLeft: '1.5rem',
        }}>
          <li><code>--muted</code> - Badge background</li>
          <li><code>--muted-foreground</code> - Icon color</li>
          <li><code>--foreground</code> - Label text color</li>
          <li><code>--radius</code> - Border radius</li>
          <li><code>--text-small</code> - Font size for labels</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates automatic theme adaptation. All colors use CSS variables that update based on theme.',
      },
    },
  },
};

/**
 * E-commerce Checkout Example
 */
export const CheckoutExample: Story = {
  render: () => (
    <div style={{ 
      maxWidth: '500px', 
      margin: '0 auto',
      padding: '2rem',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      backgroundColor: 'var(--background)',
    }}>
      <h3 style={{ 
        fontFamily: 'Lexend, sans-serif', 
        fontSize: 'var(--text-h3)', 
        marginBottom: '1rem',
        color: 'var(--foreground)',
      }}>
        Secure Checkout
      </h3>

      <div style={{ marginBottom: '1.5rem' }}>
        <MiniTrustBadge text="SSL Secure Checkout" />
      </div>

      <div style={{ 
        padding: '1rem',
        borderRadius: 'var(--radius)',
        backgroundColor: 'var(--muted)',
        marginBottom: '1.5rem',
      }}>
        <p style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'var(--text-base)',
          color: 'var(--foreground)',
        }}>
          Order Total: <strong>R 1,250.00</strong>
        </p>
      </div>

      <button style={{
        width: '100%',
        padding: '1rem',
        backgroundColor: 'var(--primary)',
        color: 'var(--primary-foreground)',
        border: 'none',
        borderRadius: 'var(--radius)',
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-base)',
        fontWeight: '600',
        cursor: 'pointer',
        marginBottom: '1rem',
      }}>
        Complete Purchase
      </button>

      <PaymentMethodBadges />

      <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <MiniTrustBadge 
            icon={<Shield className="w-4 h-4" />} 
            text="256-bit Encryption" 
          />
          <MiniTrustBadge 
            icon={<Lock className="w-4 h-4" />} 
            text="PCI Compliant" 
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world example of trust badges in an e-commerce checkout flow.',
      },
    },
  },
};
