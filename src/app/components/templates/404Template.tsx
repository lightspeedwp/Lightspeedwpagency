/**
 * 404 Template
 * 
 * WordPress concept: 404.html
 * 
 * Page Not Found template with search, suggestions, and home button.
 * Uses dedicated CSS variables from 404.css.
 */

/* Route-level CSS */
import '../../../styles/templates/404-optimized.css';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Button } from '../blocks/design/Buttons';
import { Warning, MagnifyingGlass, House, ArrowRight } from '@phosphor-icons/react';

// Import centralized data
import {
  error404Hero,
  helpfulLinks,
  searchSuggestions,
  error404CTA,
} from '../../data/404-page';

export function Template404() {
  return (
    <>
      <Section className="error-404__hero">
        <Container>
          <div className="error-404__hero-orb error-404__hero-orb--1" />
          <div className="error-404__hero-orb error-404__hero-orb--2" />
          
          <div className="error-404__hero-content">
            <div className="error-404__hero-icon-wrapper">
              <Warning size={40} weight="duotone" className="error-404__hero-icon" />
            </div>
            
            <Heading level={1} className="error-404__hero-title">
              {error404Hero.errorCode} - {error404Hero.title}
            </Heading>
            
            <Paragraph className="error-404__hero-description">
              {error404Hero.description}
            </Paragraph>

            {/* Search Bar */}
            <div className="error-404__search">
              <div className="error-404__search-input-wrapper">
                <MagnifyingGlass className="error-404__search-icon" size={20} />
                <input 
                  type="text" 
                  className="error-404__search-input" 
                  placeholder="Search our site..."
                  aria-label="Search"
                />
              </div>
              <Button variant="primary">Search</Button>
            </div>

            {/* Search Suggestions */}
            {searchSuggestions.length > 0 && (
              <div className="error-404__search-suggestions">
                <Paragraph className="error-404__search-suggestions-label">
                  Try searching for:
                </Paragraph>
                <div className="error-404__search-suggestions-list">
                  {searchSuggestions.map((suggestion, index) => (
                    <span key={index} className="error-404__search-suggestions-chip">
                      {suggestion.query}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="error-404__actions">
              <Button variant="outline" href="/" icon={<House size={18} />}>
                Back to Home
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Helpful Links */}
      <Section spacing="xl" className="error-404__suggestions">
        <Container>
          <div className="error-404__suggestions-header">
            <Heading level={2} className="error-404__suggestions-title">
              You Might Be Looking For
            </Heading>
          </div>

          <div className="error-404__suggestions-grid">
            {helpfulLinks.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="error-404__suggestion-card">
                  <div className="error-404__suggestion-card-glow" />
                  <div className="error-404__suggestion-card-inner">
                    <div className="error-404__suggestion-card-icon-container">
                      <IconComponent size={24} className="error-404__suggestion-card-icon" />
                    </div>
                    <div className="error-404__suggestion-card-content">
                      <Heading level={3} className="error-404__suggestion-card-title">
                        {item.title}
                      </Heading>
                      <Paragraph className="error-404__suggestion-card-description">
                        {item.description}
                      </Paragraph>
                      <Button variant="text" page={item.page} className="error-404__suggestion-card-btn">
                        Learn More <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section spacing="lg" className="error-404__cta">
        <div className="error-404__cta-glow" />
        <Container>
          <div className="error-404__cta-content">
            <Heading level={2} className="error-404__cta-title">
              {error404CTA.title}
            </Heading>
            <Paragraph className="error-404__cta-description">
              {error404CTA.description}
            </Paragraph>
            <div className="error-404__cta-buttons">
              {error404CTA.buttons.map((btn, index) => (
                <Button
                  key={index}
                  variant={btn.variant as 'default' | 'outline'}
                  page={btn.page}
                >
                  {btn.text}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}