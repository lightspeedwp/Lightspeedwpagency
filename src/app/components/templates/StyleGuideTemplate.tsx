/**
 * Style Guide / Components Page Template
 * 
 * WordPress template: templates/page-styleguide.html
 * 
 * Showcases the design system: Typography, colors, spacing, components
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Button } from '../blocks/design/Buttons';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Check, X, AlertCircle, Info, Heart, Star, Search, Mail } from 'lucide-react';

const colorTokens = [
  { name: '--primary', label: 'Primary', usage: 'Primary actions, links' },
  { name: '--primary-foreground', label: 'Primary Foreground', usage: 'Text on primary background' },
  { name: '--secondary', label: 'Secondary', usage: 'Secondary actions, badges' },
  { name: '--secondary-foreground', label: 'Secondary Foreground', usage: 'Text on secondary background' },
  { name: '--background', label: 'Background', usage: 'Page background' },
  { name: '--foreground', label: 'Foreground', usage: 'Primary text color' },
  { name: '--muted', label: 'Muted', usage: 'Subtle backgrounds' },
  { name: '--muted-foreground', label: 'Muted Foreground', usage: 'Secondary text' },
  { name: '--card', label: 'Card', usage: 'Card backgrounds' },
  { name: '--border', label: 'Border', usage: 'Border color' },
  { name: '--ring', label: 'Ring', usage: 'Focus ring color' },
];

const typographyScale = [
  { variable: '--text-h1', label: 'Heading 1', element: 'h1' },
  { variable: '--text-h2', label: 'Heading 2', element: 'h2' },
  { variable: '--text-h3', label: 'Heading 3', element: 'h3' },
  { variable: '--text-h4', label: 'Heading 4', element: 'h4' },
  { variable: '--text-lg', label: 'Large Text', element: 'p' },
  { variable: '--text-base', label: 'Base Text', element: 'p' },
  { variable: '--text-small', label: 'Small Text', element: 'p' },
];

const spacingScale = [
  { class: 'p-2', label: 'p-2', value: '0.5rem (8px)' },
  { class: 'p-4', label: 'p-4', value: '1rem (16px)' },
  { class: 'p-6', label: 'p-6', value: '1.5rem (24px)' },
  { class: 'p-8', label: 'p-8', value: '2rem (32px)' },
  { class: 'p-12', label: 'p-12', value: '3rem (48px)' },
  { class: 'p-16', label: 'p-16', value: '4rem (64px)' },
];

const radiusTokens = [
  { variable: '--radius', label: 'Small (4px)' },
  { variable: '--radius-lg', label: 'Large (8px)' },
];

export function StyleGuideTemplate() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Hero */}
        <section 
          className="py-16"
          style={{
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <Container>
            {/* Breadcrumbs */}
            <Breadcrumbs
              items={[
                { label: 'Home', page: 'home' },
                { label: 'Developer Tools', page: 'dev-tools' },
                { label: 'Style Guide' }
              ]}
              className="mb-8"
            />

            <Heading level={1} style={{ marginBottom: '16px' }}>
              Design System Style Guide
            </Heading>
            <p 
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontSize: 'var(--text-lg)',
                color: 'var(--muted-foreground)',
                lineHeight: '1.6',
                margin: 0,
              }}
            >
              A comprehensive showcase of typography, colors, components, and design tokens used throughout the LSX Design system.
            </p>
          </Container>
        </section>

        {/* Typography */}
        <section className="py-16" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <Heading level={2} style={{ marginBottom: '32px' }}>
              Typography
            </Heading>

            {/* Font Families */}
            <div className="mb-12">
              <h3 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h3)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)',
                  marginBottom: '16px',
                }}
              >
                Font Families
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className="p-6 rounded-[var(--radius-lg)]"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <p 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-h3)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                      marginBottom: '8px',
                    }}
                  >
                    Lexend (Primary)
                  </p>
                  <p 
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      color: 'var(--muted-foreground)',
                      margin: 0,
                    }}
                  >
                    Used for headings, body text, and UI elements. ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
                  </p>
                </div>
                <div 
                  className="p-6 rounded-[var(--radius-lg)]"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <p 
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-h3)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--foreground)',
                      marginBottom: '8px',
                    }}
                  >
                    Manrope (Secondary)
                  </p>
                  <p 
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-base)',
                      color: 'var(--muted-foreground)',
                      margin: 0,
                    }}
                  >
                    Used for small text and meta information. ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
                  </p>
                </div>
              </div>
            </div>

            {/* Type Scale */}
            <div className="mb-12">
              <h3 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h3)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)',
                  marginBottom: '16px',
                }}
              >
                Type Scale
              </h3>
              <div className="flex flex-col gap-6">
                {typographyScale.map((item) => (
                  <div 
                    key={item.variable}
                    className="p-6 rounded-[var(--radius-lg)]"
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <code 
                        className="px-1.5 py-0.5"
                        style={{
                          fontFamily: 'monospace',
                          fontSize: 'var(--text-small)',
                          color: 'var(--primary)',
                          backgroundColor: 'var(--muted)',
                          borderRadius: 'var(--radius)',
                        }}
                      >
                        {item.variable}
                      </code>
                      <span 
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 'var(--text-small)',
                          color: 'var(--muted-foreground)',
                        }}
                      >
                        {item.label}
                      </span>
                    </div>
                    <p 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: `var(${item.variable})`,
                        fontWeight: item.element.startsWith('h') ? 'var(--font-weight-medium)' : 'var(--font-weight-regular)',
                        color: 'var(--foreground)',
                        margin: 0,
                      }}
                    >
                      The quick brown fox jumps over the lazy dog
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Font Weights */}
            <div>
              <h3 
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-h3)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)',
                  marginBottom: '16px',
                }}
              >
                Font Weights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['regular', 'medium', 'bold'].map((weight) => (
                  <div 
                    key={weight}
                    className="p-6 rounded-[var(--radius-lg)]"
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <code 
                      className="px-1.5 py-0.5"
                      style={{
                        fontFamily: 'monospace',
                        fontSize: 'var(--text-small)',
                        color: 'var(--primary)',
                        backgroundColor: 'var(--muted)',
                        borderRadius: 'var(--radius)',
                        display: 'block',
                        marginBottom: '8px',
                      }}
                    >
                      --font-weight-{weight}
                    </code>
                    <p 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-lg)',
                        fontWeight: `var(--font-weight-${weight})`,
                        color: 'var(--foreground)',
                        margin: 0,
                      }}
                    >
                      Sample Text
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Colors */}
        <section 
          className="py-16"
          style={{
            backgroundColor: 'var(--muted)',
            borderTop: '1px solid var(--border)',
          }}
        >
          <Container>
            <Heading level={2} style={{ marginBottom: '32px' }}>
              Color System
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {colorTokens.map((token) => (
                <div 
                  key={token.name}
                  className="rounded-[var(--radius-lg)] overflow-hidden"
                  style={{
                    border: '1px solid var(--border)',
                  }}
                >
                  <div 
                    className="h-24"
                    style={{
                      backgroundColor: `var(${token.name})`,
                    }}
                  />
                  <div 
                    className="p-4"
                    style={{
                      backgroundColor: 'var(--card)',
                    }}
                  >
                    <code 
                      style={{
                        fontFamily: 'monospace',
                        fontSize: 'var(--text-small)',
                        color: 'var(--primary)',
                        display: 'block',
                        marginBottom: '4px',
                      }}
                    >
                      var({token.name})
                    </code>
                    <p 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--foreground)',
                        marginBottom: '4px',
                      }}
                    >
                      {token.label}
                    </p>
                    <p 
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'var(--text-small)',
                        color: 'var(--muted-foreground)',
                        margin: 0,
                      }}
                    >
                      {token.usage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Spacing */}
        <section className="py-16" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <Heading level={2} style={{ marginBottom: '32px' }}>
              Spacing Scale
            </Heading>

            <div className="flex flex-col gap-6">
              {spacingScale.map((item) => (
                <div 
                  key={item.class}
                  className="flex items-center gap-6"
                >
                  <code 
                    style={{
                      fontFamily: 'monospace',
                      fontSize: 'var(--text-base)',
                      color: 'var(--foreground)',
                      minWidth: '80px',
                    }}
                  >
                    {item.class}
                  </code>
                  <div 
                    className={item.class}
                    style={{
                      backgroundColor: 'var(--primary)',
                      height: '40px',
                    }}
                  />
                  <span 
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Border Radius */}
        <section 
          className="py-16"
          style={{
            backgroundColor: 'var(--muted)',
            borderTop: '1px solid var(--border)',
          }}
        >
          <Container>
            <Heading level={2} style={{ marginBottom: '32px' }}>
              Border Radius
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {radiusTokens.map((token) => (
                <div 
                  key={token.variable}
                  className="p-6 rounded-[var(--radius-lg)]"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <code 
                    style={{
                      fontFamily: 'monospace',
                      fontSize: 'var(--text-base)',
                      color: 'var(--primary)',
                      display: 'block',
                      marginBottom: '16px',
                    }}
                  >
                    {token.variable}
                  </code>
                  <div 
                    className="h-24"
                    style={{
                      backgroundColor: 'var(--primary)',
                      borderRadius: `var(${token.variable})`,
                    }}
                  />
                  <p 
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)',
                      marginTop: '8px',
                      margin: 0,
                    }}
                  >
                    {token.label}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Buttons */}
        <section className="py-16" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <Heading level={2} style={{ marginBottom: '32px' }}>
              Buttons
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Primary Button */}
              <div>
                <h3 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h4)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                    marginBottom: '16px',
                  }}
                >
                  Primary Button
                </h3>
                <div className="flex flex-col gap-4">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="primary" disabled>Disabled</Button>
                </div>
              </div>

              {/* Secondary Button */}
              <div>
                <h3 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h4)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                    marginBottom: '16px',
                  }}
                >
                  Secondary Button
                </h3>
                <div className="flex flex-col gap-4">
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="secondary" disabled>Disabled</Button>
                </div>
              </div>

              {/* Outline Button */}
              <div>
                <h3 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h4)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                    marginBottom: '16px',
                  }}
                >
                  Outline Button
                </h3>
                <div className="flex flex-col gap-4">
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="outline" disabled>Disabled</Button>
                </div>
              </div>

              {/* Buttons with Icons */}
              <div>
                <h3 
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-h4)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                    marginBottom: '16px',
                  }}
                >
                  With Icons
                </h3>
                <div className="flex flex-col gap-4">
                  <button
                    className="flex items-center gap-2 px-6 py-3 rounded-[var(--radius)]"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <Heart size={18} />
                    Like
                  </button>
                  <button
                    className="flex items-center gap-2 px-6 py-3 rounded-[var(--radius)]"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      backgroundColor: 'var(--secondary)',
                      color: 'var(--secondary-foreground)',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <Star size={18} />
                    Favorite
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Form Elements */}
        <section 
          className="py-16"
          style={{
            backgroundColor: 'var(--muted)',
            borderTop: '1px solid var(--border)',
          }}
        >
          <Container>
            <Heading level={2} style={{ marginBottom: '32px' }}>
              Form Elements
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {/* Text Input */}
              <div>
                <label 
                  htmlFor="sample-input"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Text Input
                </label>
                <input
                  id="sample-input"
                  type="text"
                  placeholder="Enter text..."
                  className="w-full px-4 py-3 rounded-[var(--radius)]"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--foreground)',
                    border: '1px solid var(--border)',
                  }}
                />
              </div>

              {/* Textarea */}
              <div>
                <label 
                  htmlFor="sample-textarea"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Textarea
                </label>
                <textarea
                  id="sample-textarea"
                  placeholder="Enter message..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-[var(--radius)]"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--foreground)',
                    border: '1px solid var(--border)',
                  }}
                />
              </div>

              {/* Select */}
              <div>
                <label 
                  htmlFor="sample-select"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Select Dropdown
                </label>
                <select
                  id="sample-select"
                  className="w-full px-4 py-3 rounded-[var(--radius)]"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--foreground)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>

              {/* Search Input */}
              <div>
                <label 
                  htmlFor="sample-search"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--foreground)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Search Input
                </label>
                <div className="relative">
                  <input
                    id="sample-search"
                    type="search"
                    placeholder="Search..."
                    className="w-full px-4 py-3 pr-12 rounded-[var(--radius)]"
                    style={{
                      fontFamily: 'Lexend, sans-serif',
                      fontSize: 'var(--text-base)',
                      backgroundColor: 'var(--background)',
                      color: 'var(--foreground)',
                      border: '1px solid var(--border)',
                    }}
                  />
                  <Search 
                    size={20} 
                    style={{
                      position: 'absolute',
                      right: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--muted-foreground)',
                    }}
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Badges & Pills */}
        <section className="py-16" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <Heading level={2} style={{ marginBottom: '32px' }}>
              Badges & Pills
            </Heading>

            <div className="flex flex-wrap items-center gap-3">
              <span 
                className="px-3 py-1 rounded-full"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-small)',
                  fontWeight: 'var(--font-weight-medium)',
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                }}
              >
                Primary
              </span>
              <span 
                className="px-3 py-1 rounded-full"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-small)',
                  fontWeight: 'var(--font-weight-medium)',
                  backgroundColor: 'var(--secondary)',
                  color: 'var(--secondary-foreground)',
                }}
              >
                Secondary
              </span>
              <span 
                className="px-3 py-1 rounded-full"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-small)',
                  fontWeight: 'var(--font-weight-medium)',
                  backgroundColor: 'var(--muted)',
                  color: 'var(--muted-foreground)',
                }}
              >
                Muted
              </span>
              <span 
                className="px-3 py-1 rounded-full"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontSize: 'var(--text-small)',
                  fontWeight: 'var(--font-weight-medium)',
                  backgroundColor: 'transparent',
                  color: 'var(--foreground)',
                  border: '1px solid var(--border)',
                }}
              >
                Outline
              </span>
            </div>
          </Container>
        </section>

        {/* Icons */}
        <section 
          className="py-16"
          style={{
            backgroundColor: 'var(--muted)',
            borderTop: '1px solid var(--border)',
          }}
        >
          <Container>
            <Heading level={2} style={{ marginBottom: '32px' }}>
              Icons (Lucide React)
            </Heading>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { Icon: Check, label: 'Check' },
                { Icon: X, label: 'X' },
                { Icon: AlertCircle, label: 'Alert' },
                { Icon: Info, label: 'Info' },
                { Icon: Heart, label: 'Heart' },
                { Icon: Star, label: 'Star' },
                { Icon: Search, label: 'Search' },
                { Icon: Mail, label: 'Mail' },
              ].map(({ Icon, label }) => (
                <div 
                  key={label}
                  className="flex flex-col items-center gap-2 p-4 rounded-[var(--radius)]"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <Icon size={32} style={{ color: 'var(--foreground)' }} />
                  <span 
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 'var(--text-small)',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}