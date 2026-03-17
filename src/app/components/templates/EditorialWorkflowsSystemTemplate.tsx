/**
 * Editorial Workflows System Template
 *
 * Route: /systems/editorial-workflows
 * Uses shared system page styles
 *
 * @see /src/app/data/systems-hub.ts
 * @see /src/styles/templates/editorial-workflows-system.css
 */

import { Link } from 'react-router';
import { CaretRight, FileText, Check } from '@phosphor-icons/react';
import { editorialWorkflowsSystem } from '../../data/systems-hub';
import { serviceTiers } from '../../data/three-tier-model';
import { getPageUrl } from '../../data/site-pages';
import '@/styles/templates/editorial-workflows-system.css';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';

export const EditorialWorkflowsSystemTemplate = () => {
  const system = editorialWorkflowsSystem;
  const tiers = serviceTiers.filter(tier => system.tiers.includes(tier.id));

  return (
    <div className="system-page">
      <BreadcrumbPart
        items={[
          { label: 'Home', href: '/' },
          { label: 'Systems', href: '/systems' },
          { label: 'Editorial Workflows' },
        ]}
      />

      <section className="system-page__hero">
        <div className="system-page__hero-content">
          <div className="system-page__hero-icon">
            <FileText className="system-page__hero-icon-svg" />
          </div>
          <h1 className="system-page__hero-title">{system.name}</h1>
          <p className="system-page__hero-tagline">{system.tagline}</p>
          <p className="system-page__hero-description">{system.description}</p>
        </div>
      </section>

      <section className="system-page__what">
        <div className="system-page__section-content">
          <h2 className="system-page__section-heading">
            What Are Editorial Workflows?
          </h2>
          <p className="system-page__section-text">
            Editorial workflows are structured processes that guide content from ideation
            to publication. They define roles, review stages, quality checks, and
            publishing schedules — eliminating bottlenecks and ensuring consistency.
          </p>
          <p className="system-page__section-text">
            Instead of ad-hoc content creation with unclear ownership, workflows provide
            clear accountability. Authors know what's expected, editors know what needs
            review, and stakeholders know when content goes live.
          </p>
        </div>
      </section>

      <section className="system-page__why">
        <div className="system-page__section-content">
          <h2 className="system-page__section-heading">
            Why Editorial Workflows Matter
          </h2>
          <p className="system-page__section-text">
            Without workflows, content quality is inconsistent and publishing is slow.
            With workflows, you gain predictability, quality assurance, and faster
            time-to-publish. Teams scale without chaos.
          </p>
          <ul className="system-page__benefits-list">
            {system.benefits.map((benefit, index) => (
              <li key={index} className="system-page__benefit">
                <Check className="system-page__benefit-icon" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="system-page__how">
        <div className="system-page__section-content">
          <h2 className="system-page__section-heading">How we implement it</h2>
          <div className="system-page__steps">
            <div className="system-page__step">
              <div className="system-page__step-number">1</div>
              <div className="system-page__step-content">
                <h3 className="system-page__step-title">Map Current Process</h3>
                <p className="system-page__step-text">
                  We interview your team to document existing content creation habits,
                  pain points, and approval bottlenecks.
                </p>
              </div>
            </div>
            <div className="system-page__step">
              <div className="system-page__step-number">2</div>
              <div className="system-page__step-content">
                <h3 className="system-page__step-title">Design Workflow States</h3>
                <p className="system-page__step-text">
                  We create a custom workflow with stages like Draft, Review, Approved,
                  Scheduled, Published — tailored to your team structure.
                </p>
              </div>
            </div>
            <div className="system-page__step">
              <div className="system-page__step-number">3</div>
              <div className="system-page__step-content">
                <h3 className="system-page__step-title">Build Automation</h3>
                <p className="system-page__step-text">
                  We configure WordPress plugins or custom code to automate notifications,
                  reminders, and quality checks at each stage.
                </p>
              </div>
            </div>
            <div className="system-page__step">
              <div className="system-page__step-number">4</div>
              <div className="system-page__step-content">
                <h3 className="system-page__step-title">Train & Iterate</h3>
                <p className="system-page__step-text">
                  We train your team on the new workflow, gather feedback, and refine the
                  process based on real-world usage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="system-page__tiers">
        <div className="system-page__section-content">
          <h2 className="system-page__section-heading">
            Included in These Service Tiers
          </h2>
          <div className="system-page__tier-cards">
            {tiers.map(tier => (
              <div key={tier.id} className="system-page__tier-card">
                <h3 className="system-page__tier-name">{tier.name}</h3>
                <p className="system-page__tier-tagline">{tier.tagline}</p>
                <p className="system-page__tier-description">{tier.description}</p>
                <Link to={getPageUrl('services')} className="system-page__tier-link">
                  Learn More
                  <CaretRight className="system-page__tier-link-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="system-page__cta">
        <div className="system-page__cta-content">
          <h2 className="system-page__cta-heading">
            Ready to Streamline Content Production?
          </h2>
          <p className="system-page__cta-description">
            Request a free workflow audit to see how structured processes can reduce
            publishing time by 40% while improving quality.
          </p>
          <Link to={getPageUrl('contact')} className="system-page__cta-button">
            Request a Workflow Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EditorialWorkflowsSystemTemplate;