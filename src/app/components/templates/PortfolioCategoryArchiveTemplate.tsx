/**
 * Portfolio Category Archive Template
 *
 * WordPress template: templates/taxonomy-project_group.html
 * Taxonomy archive archetype filtering portfolio by project group.
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { FAQSection } from '../patterns/FAQSection';
import { CTASection } from '../patterns/CTASection';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { ArrowRight } from 'lucide-react';
import { portfolioProjects, projectGroups, getProjectsByGroup } from '../../data/portfolio-projects';
import { portfolioFAQs } from '../../data/faqs';
import { useNavigation } from '../../contexts/NavigationContext';

interface Props { category?: string; }

export function PortfolioCategoryArchiveTemplate({ category }: Props) {
  const { navigateTo } = useNavigation();
  const group = projectGroups.find(g => g.slug === category) || projectGroups[0];
  const filtered = category ? getProjectsByGroup(category) : portfolioProjects;

  return (
    <>
      <section style={{ padding: 'var(--spacing-4) 0' }}>
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', page: 'front-page' },
              { label: 'Portfolio', page: 'portfolio-archive' },
              { label: group.name }
            ]}
          />
        </Container>
      </section>

      <Section spacing="md">
        <Container>
          <div className="wp-max-w-4xl">
            <Heading level={1}>{group.name} Projects</Heading>
            <Paragraph>
              Browse our portfolio of {group.name.toLowerCase()} projects. Each project demonstrates our commitment to quality WordPress development and measurable results.
            </Paragraph>
            <Paragraph style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-small)', fontFamily: 'var(--font-secondary)' }}>
              Number of results: <strong style={{ color: 'var(--foreground)' }}>{filtered.length}</strong>
            </Paragraph>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 'var(--spacing-6)' }}>
            {filtered.map(project => (
              <article
                key={project.id}
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform var(--transition-base) var(--ease-in-out), box-shadow var(--transition-base) var(--ease-in-out)'
                }}
                onClick={() => navigateTo(`/portfolio/${project.slug}`)}
                tabIndex={0}
                role="link"
                onKeyDown={e => e.key === 'Enter' && navigateTo(`/portfolio/${project.slug}`)}
              >
                <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                  <img
                    src={project.featuredImage}
                    alt={project.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: 'var(--spacing-4)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                  <h2 style={{ fontSize: 'var(--text-lg)', fontFamily: 'var(--font-primary)', fontWeight: 'var(--font-weight-medium)', color: 'var(--foreground)' }}>
                    {project.title}
                  </h2>
                  <p style={{ fontSize: 'var(--text-small)', fontFamily: 'var(--font-secondary)', color: 'var(--muted-foreground)', lineHeight: 'var(--line-height-normal)' }}>
                    {project.excerpt}
                  </p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-1)', fontSize: 'var(--text-small)', color: 'var(--primary)', fontFamily: 'var(--font-primary)', fontWeight: 'var(--font-weight-medium)' }}>
                    View Case Study <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: 'var(--spacing-12) 0' }}>
              <Paragraph>No projects found in this category yet. Check back soon!</Paragraph>
            </div>
          )}
        </Container>
      </Section>

      <Section spacing="md" background="muted">
        <Container>
          <FAQSection title="Portfolio FAQ" faqs={portfolioFAQs.slice(0, 3)} />
        </Container>
      </Section>

      <CTASection
        title="Start Your Project"
        description="Ready to build something amazing? Let us bring your vision to life with modern WordPress development."
        primaryButtonText="Get in Touch"
        primaryButtonPage="contact"
      />
    </>
  );
}
