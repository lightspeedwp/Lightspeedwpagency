/**
 * Front Page Template
 * 
 * WordPress concept: front-page.html
 * 
 * The main landing page for LightSpeed WordPress Agency.
 * Funky Redesign Version: "Neon Future"
 * 
 * Features:
 * - Full-screen Parallax Hero with Neon Orbs
 * - Glassmorphism Feature Grids
 * - Gradient Text & Borders
 * - Floating Elements
 * 
 * **Align-wide:** All body content constrained to 1440px (--wp--style--global--wide-size)
 * via the Container component. Header and footer match the same max-width.
 * 
 * Lower sections (7–11) extracted to FrontPageLowerSections.tsx for file size compliance.
 */

/* Route-level CSS */
import '../../../styles/templates/page-front-page.css';
import { HeroSplash } from '../patterns/HeroSplash';
import { FeatureGrid } from '../patterns/FeatureGrid';
import { StatsSection } from '../patterns/StatsSection';
import { CardGrid } from '../patterns/CardGrid';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Button } from '../blocks/design/Buttons';
import { ProofStrip } from '../patterns/ProofStrip';
import { FrontPageLowerSections } from './FrontPageLowerSections';

import { LazyFunkyCTA } from '../patterns/lazy/LazyFunkyCTA';

import {
  frontPageHero,
  frontPageWhyChoose,
  frontPageServices,
  frontPageProjects,
  frontPageStats,
  frontPageMidCTA
} from '../../data/front-page';

export function FrontPageTemplate() {
  return (
    <>
      {/* ============================================
          1. HERO SECTION (Neon Splash)
          ============================================ */}
      <HeroSplash 
        badge={frontPageHero.badge}
        titlePrefix="Build better WordPress sites"
        titleGradient="Faster & funkier"
        description={frontPageHero.description}
        primaryButton={{
          text: frontPageHero.primaryButton.text,
          page: frontPageHero.primaryButton.page
        }}
        secondaryButton={{
          text: frontPageHero.secondaryButton.text,
          page: frontPageHero.secondaryButton.page
        }}
        bgImage="https://images.unsplash.com/photo-1635776063328-153b13e3c245?q=80&w=2832&auto=format&fit=crop"
        targetId="proof-strip"
      />

      {/* ============================================
          1b. PROOF STRIP (VP2 — Social Proof)
          ============================================ */}
      <div id="proof-strip">
        <ProofStrip variant="neon" />
      </div>

      {/* ============================================
          2. WHY CHOOSE LIGHTSPEED
          ============================================ */}
      <div id="why-choose-section" className="front-page__section front-page__section--default">
        <FeatureGrid
          title={frontPageWhyChoose.title}
          description={frontPageWhyChoose.description}
          items={frontPageWhyChoose.features}
          columns={3}
          variant="bordered"
          iconStyle="rounded"
          spacing="xl"
        />
      </div>

      {/* ============================================
          3. OUR SERVICES
          ============================================ */}
      <div className="front-page__section front-page__section--card">
        <Container>
          <div className="front-page__section-header">
            <h2 className="front-page__section-title">
              {frontPageServices.title}
            </h2>
            <p className="front-page__section-desc">
              {frontPageServices.description}
            </p>
          </div>

          <CardGrid
            items={frontPageServices.items.map(service => ({
              title: service.title,
              description: service.description,
              image: service.image,
              href: `/${service.link}`,
              ctaText: 'Learn More →',
              badge: { text: 'Service', variant: 'muted' }
            }))}
            columns={3}
            variant="service"
            showImages={true}
            showDescriptions={true}
            showCTA={true}
            maxWidth="none"
          />
        </Container>
      </div>

      {/* ============================================
          4. FEATURED PROJECTS
          ============================================ */}
      <div className="front-page__section front-page__section--default">
        <Container>
          <div className="front-page__section-header">
            <h2 className="front-page__section-title">
              {frontPageProjects.title}
            </h2>
            <p className="front-page__section-desc">
              {frontPageProjects.description}
            </p>
          </div>

          <CardGrid
            items={frontPageProjects.projects.map(project => ({
              title: project.title,
              description: project.description,
              image: project.image,
              badge: { text: project.category, variant: 'primary' },
              href: `/work/${project.slug}`,
              ctaText: 'View Case Study →'
            }))}
            columns={3}
            variant="portfolio"
            showImages={true}
            showDescriptions={true}
            showCTA={true}
            maxWidth="none"
          />

          <div className="front-page__section-footer">
            <Button
              variant="outline"
              size="lg"
              page={frontPageProjects.cta.page as any}
            >
              {frontPageProjects.cta.text}
            </Button>
          </div>
        </Container>
      </div>

      {/* ============================================
          5. PROVEN TRACK RECORD
          ============================================ */}
      <StatsSection
        title="Proven track record"
        stats={frontPageStats}
        variant="proven-track"
      />

      {/* ============================================
          6. CTA BANNER
          ============================================ */}
      <LazyFunkyCTA
        title={frontPageMidCTA.title}
        description={frontPageMidCTA.description}
        buttonText={frontPageMidCTA.primaryButton.text}
        buttonPage={frontPageMidCTA.primaryButton.page}
        benefits={[
          'Free strategy consultation',
          'Custom WordPress solutions',
          'Transparent project pricing',
          'Dedicated project manager'
        ]}
      />

      {/* ============================================
          7–11. LOWER SECTIONS
          ============================================ */}
      <FrontPageLowerSections />
    </>
  );
}

export default FrontPageTemplate;
