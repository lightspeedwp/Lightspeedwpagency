/**
 * Getting Started Template — Funky Redesign
 *
 * Page template for /getting-started
 * Six-stage AI-first lifecycle with neon-accented interactive checklist,
 * animated folder structure, and glassmorphic download cards.
 *
 * Design: Funky neon aesthetic with dark backgrounds, neon-cyan/pink/lime accents,
 * interactive progress tracking, and micro-animations throughout.
 *
 * @see /src/app/data/getting-started.ts
 * @see /src/styles/templates/getting-started.css
 */

import React, { useState } from 'react';
import { Container } from '../common/Container';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { Button } from '../blocks/design/Buttons';
import { NeonStats } from '../common/NeonStats';
import {
  gettingStartedHero,
  lifecycleStages,
  materialsChecklist,
  communicationTools,
  folderStructure,
  workflowBenefits,
  downloadableResources,
  gettingStartedFAQs,
  gettingStartedCTA,
} from '../../data/getting-started';
import {
  CheckCircle,
  Circle,
  ArrowRight,
  DownloadSimple,
  Rocket,
  Lightning,
  Clock,
  Users,
  ChartLine,
  Sparkle,
  FolderOpen,
  CaretRight,
  Star,
  CheckSquare,
} from '@phosphor-icons/react';

export function GettingStartedTemplate() {
  // Track checklist completion
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const handleCheckboxToggle = (itemId: string) => {
    setCheckedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const totalItems = materialsChecklist.reduce(
    (sum, category) => sum + category.items.length,
    0
  );
  const completedItems = checkedItems.size;
  const progressPercentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

  // Stats for hero section
  const heroStats = [
    {
      id: 'avg-timeline',
      value: '6-8',
      label: 'Weeks to launch',
      description: 'Average project timeline with our AI-accelerated workflow',
      icon: Clock,
    },
    {
      id: 'preparation-time',
      value: '2-3',
      label: 'Days to prepare',
      description: 'Time needed to complete our onboarding checklist',
      icon: CheckSquare,
    },
    {
      id: 'lifecycle-stages',
      value: '6',
      label: 'Lifecycle stages',
      description: 'Structured phases from discovery to evolution',
      icon: Rocket,
    },
    {
      id: 'ai-touchpoints',
      value: '15+',
      label: 'AI touchpoints',
      description: 'Automated processes that accelerate delivery',
      icon: Lightning,
    },
  ];

  return (
    <div className="getting-started getting-started--funky">
      {/* Funky Hero Section with Animated Background */}
      <section className="getting-started-hero getting-started-hero--funky">
        <div className="getting-started-hero__bg-grid" />
        <div className="getting-started-hero__glow getting-started-hero__glow--cyan" />
        <div className="getting-started-hero__glow getting-started-hero__glow--pink" />
        
        <Container>
          <div className="getting-started-hero__content">
            <ScrollReveal animation="fade-up">
              <div className="getting-started-hero__badge">
                <Sparkle size={20} weight="fill" />
                <span className="getting-started-hero__badge-text">
                  AI-powered onboarding
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.1}>
              <h1 className="getting-started-hero__title">
                {gettingStartedHero.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="getting-started-hero__tagline">
                {gettingStartedHero.tagline}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.3}>
              <p className="getting-started-hero__description">
                {gettingStartedHero.description}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.4}>
              <div className="getting-started-hero__actions">
                <Button
                  href={gettingStartedHero.primaryCTA.href}
                  variant="primary"
                  size="lg"
                  className="getting-started-hero__btn-primary"
                >
                  {gettingStartedHero.primaryCTA.text}
                  <ArrowRight size={20} weight="bold" />
                </Button>
                <Button
                  href={gettingStartedHero.secondaryCTA.href}
                  variant="secondary"
                  size="lg"
                  className="getting-started-hero__btn-secondary"
                >
                  {gettingStartedHero.secondaryCTA.text}
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Stats with NeonStats component */}
          <ScrollReveal animation="fade-up" delay={0.5}>
            <div className="getting-started-hero__stats">
              <NeonStats
                stats={heroStats}
                columns={4}
                accentColor="var(--wp--preset--color--neon-cyan)"
                variant="glass"
                showIcons={true}
              />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Interactive Lifecycle Stages with Hover Effects */}
      <section className="getting-started-lifecycle getting-started-lifecycle--funky">
        <Container>
          <ScrollReveal animation="fade-up">
            <header className="getting-started-lifecycle__header">
              <div className="getting-started-lifecycle__badge">
                <Star size={20} weight="fill" />
                <span>Six-stage journey</span>
              </div>
              <h2 className="getting-started-lifecycle__title">
                Your AI-powered journey in six stages
              </h2>
              <p className="getting-started-lifecycle__description">
                Each stage includes AI touchpoints that accelerate delivery and improve outcomes. Hover over each stage to explore what you need to prepare and what we deliver.
              </p>
            </header>
          </ScrollReveal>

          <div className="getting-started-lifecycle__stages">
            {lifecycleStages.map((stage, index) => {
              const Icon = stage.icon;
              const isActive = activeStage === index;
              return (
                <ScrollReveal key={stage.slug} animation="fade-up" delay={index * 0.1}>
                  <article
                    className={`lifecycle-stage-card lifecycle-stage-card--funky ${
                      isActive ? 'lifecycle-stage-card--active' : ''
                    }`}
                    onMouseEnter={() => setActiveStage(index)}
                    onMouseLeave={() => setActiveStage(null)}
                    style={{ '--stage-accent': stage.accent } as React.CSSProperties}
                  >
                    <div className="lifecycle-stage-card__glow" />
                    
                    <div className="lifecycle-stage-card__header">
                      <div className="lifecycle-stage-card__icon">
                        <Icon size={40} weight="duotone" />
                      </div>
                      <div className="lifecycle-stage-card__title-group">
                        <span className="lifecycle-stage-card__number">
                          Stage {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="lifecycle-stage-card__title">
                          {stage.name}
                        </h3>
                      </div>
                    </div>

                    <p className="lifecycle-stage-card__tagline">
                      {stage.tagline}
                    </p>

                    <div className="lifecycle-stage-card__ai-touchpoint">
                      <Lightning size={16} weight="fill" />
                      <span className="lifecycle-stage-card__ai-label">
                        AI Touchpoint
                      </span>
                      <p className="lifecycle-stage-card__ai-description">
                        {stage.aiTouchpoint}
                      </p>
                    </div>

                    <div className="lifecycle-stage-card__divider" />

                    <div className="lifecycle-stage-card__section">
                      <h4 className="lifecycle-stage-card__section-title">
                        What you need to prepare
                      </h4>
                      <ul className="lifecycle-stage-card__list">
                        {stage.clientPrep.map((item, i) => (
                          <li key={i} className="lifecycle-stage-card__list-item">
                            <CheckCircle size={18} weight="fill" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lifecycle-stage-card__section">
                      <h4 className="lifecycle-stage-card__section-title">
                        What we deliver
                      </h4>
                      <ul className="lifecycle-stage-card__list">
                        {stage.deliverables.map((item, i) => (
                          <li key={i} className="lifecycle-stage-card__list-item">
                            <Rocket size={18} weight="fill" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Interactive Checklist with Neon Progress Bar */}
      <section className="getting-started-checklist getting-started-checklist--funky">
        <div className="getting-started-checklist__bg-pattern" />
        
        <Container>
          <ScrollReveal animation="fade-up">
            <header className="getting-started-checklist__header">
              <div className="getting-started-checklist__badge">
                <CheckCircle size={20} weight="fill" />
                <span>Interactive checklist</span>
              </div>
              <h2 className="getting-started-checklist__title">
                Pre-project checklist
              </h2>
              <p className="getting-started-checklist__description">
                Use this interactive checklist to gather everything we need before kick-off. Your progress is tracked in real-time with a neon-powered progress bar.
              </p>
            </header>
          </ScrollReveal>

          {/* Neon Progress Bar */}
          <ScrollReveal animation="fade-up" delay={0.1}>
            <div className="checklist-progress checklist-progress--funky">
              <div className="checklist-progress__header">
                <span className="checklist-progress__label">
                  Your progress
                </span>
                <span className="checklist-progress__percentage">
                  {Math.round(progressPercentage)}% complete
                </span>
              </div>
              <div className="checklist-progress__bar">
                <div
                  className="checklist-progress__fill checklist-progress__fill--neon"
                  style={{ width: `${progressPercentage}%` }}
                />
                <div className="checklist-progress__glow" style={{ left: `${progressPercentage}%` }} />
              </div>
              <div className="checklist-progress__stats">
                <span className="checklist-progress__stat">
                  <CheckCircle size={20} weight="fill" />
                  {completedItems} of {totalItems} items checked
                </span>
                {progressPercentage === 100 && (
                  <span className="checklist-progress__celebration">
                    <Sparkle size={20} weight="fill" />
                    All done! You're ready to launch
                  </span>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Checklist Categories */}
          <div className="checklist-categories checklist-categories--funky">
            {materialsChecklist.map((category, catIndex) => {
              const CategoryIcon = category.icon;
              const categoryComplete = category.items.every((item) =>
                checkedItems.has(item.id)
              );
              
              return (
                <ScrollReveal key={category.id} animation="fade-up" delay={catIndex * 0.1}>
                  <div
                    className={`checklist-category checklist-category--funky ${
                      categoryComplete ? 'checklist-category--complete' : ''
                    }`}
                  >
                    <div className="checklist-category__glow" />
                    
                    <div className="checklist-category__header">
                      <div className="checklist-category__icon">
                        <CategoryIcon size={32} weight="duotone" />
                      </div>
                      <div className="checklist-category__title-group">
                        <h3 className="checklist-category__title">
                          {category.title}
                          {categoryComplete && (
                            <span className="checklist-category__complete-badge">
                              <CheckCircle size={20} weight="fill" />
                              Complete
                            </span>
                          )}
                        </h3>
                        <p className="checklist-category__description">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <ul className="checklist-category__items">
                      {category.items.map((item) => {
                        const isChecked = checkedItems.has(item.id);
                        return (
                          <li key={item.id} className="checklist-item checklist-item--funky">
                            <label className="checklist-item__label">
                              <button
                                type="button"
                                className={`checklist-item__checkbox ${
                                  isChecked ? 'checklist-item__checkbox--checked' : ''
                                }`}
                                onClick={() => handleCheckboxToggle(item.id)}
                                aria-label={`Mark ${item.label} as ${
                                  isChecked ? 'incomplete' : 'complete'
                                }`}
                              >
                                {isChecked ? (
                                  <CheckCircle size={28} weight="fill" />
                                ) : (
                                  <Circle size={28} weight="regular" />
                                )}
                              </button>
                              <div className="checklist-item__content">
                                <div className="checklist-item__header">
                                  <span className="checklist-item__title">
                                    {item.label}
                                  </span>
                                  {item.required && (
                                    <span className="checklist-item__badge checklist-item__badge--required">
                                      Required
                                    </span>
                                  )}
                                </div>
                                <p className="checklist-item__description">
                                  {item.description}
                                </p>
                                {item.aiContext && (
                                  <div className="checklist-item__ai-context">
                                    <Lightning size={16} weight="fill" />
                                    <span className="checklist-item__ai-label">
                                      AI Context
                                    </span>
                                    <p className="checklist-item__ai-text">
                                      {item.aiContext}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Animated Folder Structure */}
      <section className="getting-started-folders getting-started-folders--funky">
        <Container>
          <ScrollReveal animation="fade-up">
            <header className="getting-started-folders__header">
              <div className="getting-started-folders__badge">
                <FolderOpen size={20} weight="fill" />
                <span>File organization</span>
              </div>
              <h2 className="getting-started-folders__title">
                Recommended folder structure
              </h2>
              <p className="getting-started-folders__description">
                Organize your materials using this structure. We'll provide a Google Drive folder template with these subfolders ready to go.
              </p>
            </header>
          </ScrollReveal>

          <div className="folder-structure folder-structure--funky">
            {folderStructure.map((folder, index) => (
              <ScrollReveal key={folder.folder} animation="fade-up" delay={index * 0.05}>
                <div className="folder-item folder-item--funky">
                  <div className="folder-item__glow" />
                  <div className="folder-item__header">
                    <FolderOpen size={24} weight="fill" />
                    <code className="folder-item__name">{folder.folder}</code>
                  </div>
                  <p className="folder-item__description">
                    {folder.description}
                  </p>
                  <div className="folder-item__examples">
                    <span className="folder-item__examples-label">
                      <CaretRight size={16} weight="bold" />
                      Examples:
                    </span>
                    <ul className="folder-item__examples-list">
                      {folder.examples.map((example, i) => (
                        <li key={i} className="folder-item__example">
                          <code>{example}</code>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Glassmorphic Communication Tools */}
      <section className="getting-started-tools getting-started-tools--funky">
        <div className="getting-started-tools__bg-glow getting-started-tools__bg-glow--pink" />
        <div className="getting-started-tools__bg-glow getting-started-tools__bg-glow--lime" />
        
        <Container>
          <ScrollReveal animation="fade-up">
            <header className="getting-started-tools__header">
              <div className="getting-started-tools__badge">
                <Users size={20} weight="fill" />
                <span>Collaboration tools</span>
              </div>
              <h2 className="getting-started-tools__title">
                How we communicate & collaborate
              </h2>
              <p className="getting-started-tools__description">
                We use a mix of tools to keep projects organized and transparent. Here's what you'll have access to during your project.
              </p>
            </header>
          </ScrollReveal>

          <div className="tools-grid tools-grid--funky">
            {communicationTools.map((tool, index) => {
              const ToolIcon = tool.icon;
              return (
                <ScrollReveal key={tool.name} animation="fade-up" delay={index * 0.1}>
                  <div className="tool-card tool-card--glass">
                    <div className="tool-card__glow" />
                    <div className="tool-card__icon">
                      <ToolIcon size={40} weight="duotone" />
                    </div>
                    <h3 className="tool-card__name">{tool.name}</h3>
                    <p className="tool-card__purpose">{tool.purpose}</p>
                    <p className="tool-card__access">{tool.access}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Neon Benefits Grid */}
      <section className="getting-started-benefits getting-started-benefits--funky">
        <Container>
          <ScrollReveal animation="fade-up">
            <header className="getting-started-benefits__header">
              <div className="getting-started-benefits__badge">
                <ChartLine size={20} weight="fill" />
                <span>Workflow advantages</span>
              </div>
              <h2 className="getting-started-benefits__title">
                Why our AI-first workflow works
              </h2>
              <p className="getting-started-benefits__description">
                Structured preparation and AI automation deliver measurable improvements over traditional web design processes.
              </p>
            </header>
          </ScrollReveal>

          <div className="benefits-grid benefits-grid--funky">
            {workflowBenefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <ScrollReveal key={benefit.title} animation="fade-up" delay={index * 0.1}>
                  <div className="benefit-card benefit-card--funky">
                    <div className="benefit-card__glow" />
                    <div className="benefit-card__icon">
                      <BenefitIcon size={48} weight="duotone" />
                    </div>
                    <h3 className="benefit-card__title">{benefit.title}</h3>
                    <p className="benefit-card__description">
                      {benefit.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Glassmorphic Download Cards */}
      <section className="getting-started-downloads getting-started-downloads--funky">
        <Container>
          <ScrollReveal animation="fade-up">
            <header className="getting-started-downloads__header">
              <div className="getting-started-downloads__badge">
                <DownloadSimple size={20} weight="fill" />
                <span>Free templates</span>
              </div>
              <h2 className="getting-started-downloads__title">
                Download preparation templates
              </h2>
              <p className="getting-started-downloads__description">
                Use these templates to organize content, define AI prompts, and share credentials securely.
              </p>
            </header>
          </ScrollReveal>

          <div className="downloads-grid downloads-grid--funky">
            {downloadableResources.map((resource, index) => {
              const ResourceIcon = resource.icon;
              return (
                <ScrollReveal key={resource.title} animation="fade-up" delay={index * 0.1}>
                  <a
                    href={resource.href}
                    className="download-card download-card--glass"
                    download
                  >
                    <div className="download-card__glow" />
                    <div className="download-card__icon">
                      <ResourceIcon size={40} weight="duotone" />
                    </div>
                    <div className="download-card__content">
                      <h3 className="download-card__title">
                        {resource.title}
                      </h3>
                      <p className="download-card__description">
                        {resource.description}
                      </p>
                    </div>
                    <div className="download-card__action">
                      <span className="download-card__file-type">
                        {resource.fileType}
                      </span>
                      <div className="download-card__icon-download">
                        <DownloadSimple size={24} weight="bold" />
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Minimal FAQ Section */}
      <section className="getting-started-faq getting-started-faq--funky">
        <Container>
          <ScrollReveal animation="fade-up">
            <header className="getting-started-faq__header">
              <h2 className="getting-started-faq__title">
                Frequently asked questions
              </h2>
            </header>
          </ScrollReveal>

          <div className="faq-list faq-list--funky">
            {gettingStartedFAQs.map((faq, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 0.05}>
                <div className="faq-item faq-item--funky">
                  <h3 className="faq-item__question">{faq.question}</h3>
                  <p className="faq-item__answer">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Funky CTA Section */}
      <section className="getting-started-cta getting-started-cta--funky">
        <div className="getting-started-cta__bg-grid" />
        <div className="getting-started-cta__glow getting-started-cta__glow--cyan" />
        <div className="getting-started-cta__glow getting-started-cta__glow--pink" />
        
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="getting-started-cta__content">
              <Rocket size={64} weight="duotone" className="getting-started-cta__icon" />
              <h2 className="getting-started-cta__title">
                {gettingStartedCTA.title}
              </h2>
              <p className="getting-started-cta__description">
                {gettingStartedCTA.description}
              </p>
              <div className="getting-started-cta__actions">
                <Button
                  href={gettingStartedCTA.primaryButton.href}
                  variant="primary"
                  size="lg"
                  className="getting-started-cta__btn-primary"
                >
                  {gettingStartedCTA.primaryButton.text}
                  <ArrowRight size={20} weight="bold" />
                </Button>
                {gettingStartedCTA.secondaryButton && (
                  <Button
                    href={gettingStartedCTA.secondaryButton.href}
                    variant="secondary"
                    size="lg"
                    className="getting-started-cta__btn-secondary"
                  >
                    {gettingStartedCTA.secondaryButton.text}
                  </Button>
                )}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}
