/**
 * Case Study Proof Pattern
 *
 * Featured testimonial with project outcomes and partner logos.
 * Demonstrates credibility with real results and verified partnerships.
 *
 * BEM block: .case-study-proof
 *
 * @see /src/styles/patterns/case-study-proof.css
 */

import { Link } from 'react-router';
import type { UniversalIcon } from '../../utils/icon-map';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Quotes, CheckCircle } from '@phosphor-icons/react';

interface Outcome {
  icon: UniversalIcon;
  metric: string;
  label: string;
}

interface Partner {
  name: string;
  logo: string;
  verified?: boolean;
}

interface CaseStudyProofProps {
  title: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  project: {
    name: string;
    industry: string;
    image: string;
    slug: string;
  };
  outcomes: Outcome[];
  partners: Partner[];
}

export function CaseStudyProof({
  title,
  quote,
  author,
  role,
  company,
  project,
  outcomes,
  partners
}: CaseStudyProofProps) {
  return (
    <section className="case-study-proof" aria-labelledby="proof-heading">
      <ScrollReveal animation="fade-up">
        <h2 id="proof-heading" className="case-study-proof__title">{title}</h2>
      </ScrollReveal>

      <div className="case-study-proof__layout">
        {/* Left: Project image + testimonial */}
        <ScrollReveal animation="fade-right">
          <div className="case-study-proof__content">
            <Link to={`/work/${project.slug}`} className="case-study-proof__project-link">
              <div className="case-study-proof__image-wrapper">
                <ImageWithFallback
                  src={project.image}
                  alt={`${project.name} project screenshot`}
                  className="case-study-proof__image"
                />
                <div className="case-study-proof__image-overlay">
                  <span className="case-study-proof__project-badge">{project.industry}</span>
                </div>
              </div>
            </Link>

            <div className="case-study-proof__testimonial">
              <div className="case-study-proof__quote-icon">
                <Quotes size={32} weight="fill" />
              </div>
              <blockquote className="case-study-proof__quote">
                <p>{quote}</p>
              </blockquote>
              <div className="case-study-proof__author">
                <p className="case-study-proof__author-name">{author}</p>
                <p className="case-study-proof__author-role">
                  {role}, {company}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: Outcomes + Partners */}
        <div className="case-study-proof__sidebar">
          <ScrollReveal animation="fade-left">
            <div className="case-study-proof__outcomes">
              <h3 className="case-study-proof__outcomes-title">Measurable outcomes</h3>
              <div className="case-study-proof__outcomes-grid">
                {outcomes.map((outcome, index) => {
                  const Icon = outcome.icon;
                  return (
                    <div key={index} className="case-study-proof__outcome">
                      <div className="case-study-proof__outcome-icon">
                        <Icon size={20} weight="duotone" />
                      </div>
                      <p className="case-study-proof__outcome-metric">{outcome.metric}</p>
                      <p className="case-study-proof__outcome-label">{outcome.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={120}>
            <div className="case-study-proof__partners">
              <h3 className="case-study-proof__partners-title">Verified partnerships</h3>
              <div className="case-study-proof__partners-list">
                {partners.map((partner, index) => (
                  <div key={index} className="case-study-proof__partner">
                    <div className="case-study-proof__partner-logo">
                      {partner.logo}
                    </div>
                    <p className="case-study-proof__partner-name">
                      {partner.name}
                      {partner.verified && (
                        <CheckCircle size={14} weight="fill" className="case-study-proof__verified-badge" />
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}